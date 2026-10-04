const { Op } = require('sequelize');
const { sequelize, Venta, DetalleVenta, Producto, Turno, MovimientoCaja, Configuracion, Cliente, BajaInventario } = require('../models');
const { consumirStockFIFO, revertirConsumo, calcularStockVigente } = require('./inventario.service');
const { calcularEsperados } = require('./caja.service');
const { enviarCorreo } = require('./mail.service');

const MOTIVOS_PERDIDA_DEVOLUCION = ['Vencido', 'Dañado', 'Robo o faltante', 'Consumo interno', 'Error de registro', 'Otro'];

// Único mensaje para "no hay turno utilizable": la consulta que lo produce
// siempre está acotada a { usuario_id: req.usuario.id, estado: 'Abierto' }.
const MSG_SIN_TURNO = 'No puedes realizar ventas porque no tienes un turno de caja abierto. Abre un turno para continuar.';

const efectivoDisponibleEnTurno = async (turnoId, transaction) => {
  const movimientos = await MovimientoCaja.findAll({ where: { turno_id: turnoId }, transaction });
  return calcularEsperados(movimientos).monto_esperado_efectivo;
};

const RegistrarVentaUseCase = async (usuarioId, datosVenta) => {
  const {
    metodo_pago,
    monto_recibido,
    items,
    tipo_comprobante,
    cliente_dni,
    cliente_nombre,
    cliente_ruc,
    yape_verificado,
    referencia_pago,
    razonSocialFinal,
    direccionFinal,
    validacion_sunat_pendiente
  } = datosVenta;

  // ─── Validaciones previas (fuera de transacción) ──────────────────────────
  const turnoActivo = await Turno.findOne({
    where: { usuario_id: usuarioId, estado: 'Abierto' },
  });
  if (!turnoActivo) {
    throw { status: 400, mensaje: MSG_SIN_TURNO };
  }

  let monto_total_prev = 0;
  for (const item of items) {
    const producto = await Producto.findByPk(item.producto_id);
    if (!producto || !producto.activo) {
      throw { status: 400, mensaje: 'Producto no encontrado o inactivo' };
    }

    const cantidadBase = Number(item.cantidad);

    if (producto.stock < cantidadBase) {
      throw { status: 400, mensaje: `Stock insuficiente para: ${producto.nombre}` };
    }
    const stockVigente = await calcularStockVigente(item.producto_id);
    if (stockVigente < cantidadBase) {
      throw { status: 400, mensaje: `"${producto.nombre}" tiene stock vencido: solo hay ${stockVigente} unidad(es) vigente(s) disponible(s). Da de baja el lote vencido para continuar.` };
    }
    monto_total_prev += parseFloat(item.cantidad * producto.precio);
  }

  if ((tipo_comprobante || 'Boleta') === 'Boleta' && !cliente_dni && monto_total_prev > 700) {
    throw { status: 400, mensaje: 'Para boletas mayores a S/ 700.00 es obligatorio ingresar el DNI del cliente' };
  }

  if (metodo_pago === 'Efectivo') {
    const montoRecibidoNum = parseFloat(monto_recibido);
    if (!Number.isFinite(montoRecibidoNum) || montoRecibidoNum < 0 || montoRecibidoNum > 999999.99) {
      throw { status: 400, mensaje: 'Monto recibido inválido' };
    }
    if (montoRecibidoNum < monto_total_prev) {
      throw { status: 400, mensaje: 'Monto recibido insuficiente' };
    }

    const vueltoPrev = montoRecibidoNum - monto_total_prev;
    if (vueltoPrev > 0) {
      const disponiblePrev = await efectivoDisponibleEnTurno(turnoActivo.id);
      if (disponiblePrev < vueltoPrev) {
        throw {
          status: 400,
          mensaje: `Monto en caja insuficiente para dar el vuelto. Efectivo disponible: S/ ${disponiblePrev.toFixed(2)}, vuelto necesario: S/ ${vueltoPrev.toFixed(2)}. Registra un ingreso en Caja antes de continuar.`,
        };
      }
    }
  }

  return await sequelize.transaction(async (t) => {
    const turno = await Turno.findOne({
      where: { id: turnoActivo.id, usuario_id: usuarioId, estado: 'Abierto' },
      transaction: t,
      lock: t.LOCK.UPDATE,
    });
    if (!turno) {
      throw { status: 400, mensaje: MSG_SIN_TURNO };
    }

    let monto_total = 0;
    const detallesData = [];

    const itemsOrdenados = [...items].sort((a, b) => a.producto_id - b.producto_id);
    for (const item of itemsOrdenados) {
      const producto = await Producto.findByPk(item.producto_id, { transaction: t, lock: t.LOCK.UPDATE });
      if (!producto || !producto.activo) throw { status: 400, mensaje: 'Producto no encontrado o inactivo' };

      const cantidadBase = Number(item.cantidad);

      if (producto.stock < cantidadBase) throw { status: 400, mensaje: `Stock insuficiente para: ${producto.nombre}` };
      const subtotal = parseFloat(item.cantidad * producto.precio);
      monto_total += subtotal;

      detallesData.push({
        producto_id:      item.producto_id,
        cantidad:         cantidadBase,
        precio_unitario:  producto.precio,
        subtotal,
      });
    }

    if (metodo_pago === 'Efectivo' && parseFloat(monto_recibido) < monto_total) {
      throw { status: 400, mensaje: 'Monto recibido insuficiente' };
    }

    const vuelto = metodo_pago === 'Efectivo'
      ? parseFloat(monto_recibido) - monto_total
      : null;

    if (metodo_pago === 'Efectivo' && vuelto > 0) {
      const disponible = await efectivoDisponibleEnTurno(turno.id, t);
      if (disponible < vuelto) {
        throw {
          status: 400,
          mensaje: `Monto en caja insuficiente para dar el vuelto. Efectivo disponible: S/ ${disponible.toFixed(2)}, vuelto necesario: S/ ${vuelto.toFixed(2)}. Registra un ingreso en Caja antes de continuar.`,
        };
      }
    }

    const esYapeVerificado = metodo_pago === 'Yape' && yape_verificado === true;

    const tipoComprobanteFinal = tipo_comprobante || 'Boleta';
    let config = await Configuracion.findByPk(1, { transaction: t, lock: t.LOCK.UPDATE });
    if (!config) {
      config = await Configuracion.create({ id: 1 }, { transaction: t });
    }
    const campoCorrelativo = tipoComprobanteFinal === 'Factura' ? 'correlativo_factura' : 'correlativo_boleta';
    config[campoCorrelativo] = (config[campoCorrelativo] || 0) + 1;
    await config.save({ transaction: t });

    let clienteFinalId = null;
    if (cliente_dni) {
      const [clienteRow] = await Cliente.findOrCreate({
        where: { dni: cliente_dni },
        defaults: { nombre: cliente_nombre },
        transaction: t,
      });
      clienteFinalId = clienteRow.id;
    }

    const nuevaVenta = await Venta.create({
      usuario_id:    usuarioId,
      cliente_id:    clienteFinalId,
      turno_id:      turno.id,
      metodo_pago,
      monto_total:   monto_total.toFixed(2),
      monto_recibido: metodo_pago === 'Efectivo' ? parseFloat(monto_recibido).toFixed(2) : null,
      monto_yape:    metodo_pago === 'Yape' ? monto_total.toFixed(2) : null,
      vuelto:        metodo_pago === 'Efectivo' ? vuelto.toFixed(2) : null,
      tipo_comprobante: tipoComprobanteFinal,
      numero_comprobante: config[campoCorrelativo],
      serie_comprobante: tipoComprobanteFinal === 'Factura' ? config.serie_factura : config.serie_boleta,
      cliente_dni:   cliente_dni || null,
      cliente_ruc:   cliente_ruc || null,
      cliente_razon_social: razonSocialFinal,
      cliente_direccion: direccionFinal,
      yape_verificado: esYapeVerificado,
      yape_verificado_por: esYapeVerificado ? usuarioId : null,
      yape_verificado_en: esYapeVerificado ? new Date() : null,
      referencia_pago: metodo_pago === 'Yape' ? (referencia_pago || null) : null,
      validacion_sunat_pendiente: validacion_sunat_pendiente || false,
    }, { transaction: t });

    const detalles = await DetalleVenta.bulkCreate(
      detallesData.map((d) => ({ ...d, venta_id: nuevaVenta.id })),
      { transaction: t, returning: true }
    );

    for (const detalle of detalles) {
      await consumirStockFIFO({
        producto_id: detalle.producto_id,
        cantidad:    detalle.cantidad,
        tipo:        'Venta',
        referencia:  { detalle_venta_id: detalle.id },
        soloVigente: true,
      }, t);
    }

    await MovimientoCaja.create({
      turno_id:    turno.id,
      tipo:        'Venta',
      descripcion: `Venta #${nuevaVenta.id}`,
      metodo:      metodo_pago === 'Efectivo' ? 'Efectivo' : 'Yape',
      monto:       monto_total.toFixed(2),
      venta_id:    nuevaVenta.id,
      usuario_id:  usuarioId,
    }, { transaction: t });

    return { venta: nuevaVenta, detalles };
  });
};

const AnularVentaUseCase = async (usuarioId, ventaId, motivo, decisiones) => {
  const venta = await Venta.findByPk(ventaId, {
    include: [{ association: 'detalles' }],
  });
  if (!venta) {
    throw { status: 404, mensaje: 'Venta no encontrada' };
  }
  if (venta.estado === 'Anulada') {
    throw { status: 400, mensaje: 'La venta ya fue anulada' };
  }

  const decisionPorDetalle = new Map(decisiones.map((d) => [Number(d.id), d]));
  for (const detalle of venta.detalles) {
    const decision = decisionPorDetalle.get(detalle.id);
    if (!decision) {
      throw { status: 400, mensaje: `Falta indicar si el producto de la línea #${detalle.id} vuelve a stock` };
    }
    if (decision.reponer_stock === false && !['Dañado', 'Vencido'].includes(decision.motivo_perdida)) {
      throw { status: 400, mensaje: 'El motivo de la pérdida en devolución solo puede ser Dañado o Vencido' };
    }
  }

  const movimientoVenta = await MovimientoCaja.findOne({ where: { venta_id: venta.id, tipo: 'Venta' } });
  if (!movimientoVenta) {
    throw { status: 400, mensaje: 'No se puede anular: la venta no tiene un turno de caja asociado' };
  }

  const turno = await Turno.findByPk(movimientoVenta.turno_id);
  if (!turno || turno.estado !== 'Abierto') {
    throw { status: 400, mensaje: 'Solo se pueden anular ventas del turno de caja actualmente abierto' };
  }

  await sequelize.transaction(async (t) => {
    const ventaLock = await Venta.findByPk(venta.id, { transaction: t, lock: t.LOCK.UPDATE });
    if (ventaLock.estado === 'Anulada') {
      throw { status: 400, mensaje: 'La venta ya fue anulada' };
    }

    for (const detalle of venta.detalles) {
      const decision = decisionPorDetalle.get(detalle.id);
      if (decision.reponer_stock === false) {
        const bajaCreada = await BajaInventario.create({
          producto_id: detalle.producto_id,
          cantidad: detalle.cantidad,
          motivo: decision.motivo_perdida,
          motivo_detalle: decision.motivo_perdida_detalle?.trim() || null,
          usuario_id: usuarioId,
          venta_id: venta.id,
        }, { transaction: t });
        await revertirConsumo({ tipo: 'Venta', referencia_id: detalle.id, reponerStock: false, bajaId: bajaCreada.id }, t);
      } else {
        await revertirConsumo({ tipo: 'Venta', referencia_id: detalle.id }, t);
      }
    }

    ventaLock.estado = 'Anulada';
    ventaLock.motivo_anulacion = motivo.trim();
    ventaLock.anulado_por = usuarioId;
    ventaLock.anulado_en = new Date();
    await ventaLock.save({ transaction: t });

    await MovimientoCaja.create({
      turno_id:    turno.id,
      tipo:        'Anulacion',
      descripcion: `Anulación venta #${venta.id}: ${motivo.trim()}`,
      metodo:      movimientoVenta.metodo,
      monto:       movimientoVenta.monto,
      venta_id:    venta.id,
      usuario_id:  usuarioId,
    }, { transaction: t });
  });

  return venta;
};

const ReenviarEmailUseCase = async (ventaId, emailDestino) => {
  const venta = await Venta.findByPk(ventaId, {
    include: [
      { association: 'detalles', include: [{ association: 'producto' }] },
      { association: 'cliente' },
      { association: 'usuario' }
    ]
  });

  if (!venta) {
    throw { status: 404, mensaje: 'Venta no encontrada' };
  }

  const config = await Configuracion.findByPk(1);
  const nombreEmpresa = config ? config.nombre_empresa : 'Minimarket';
  
  const serie = venta.serie_comprobante || (venta.tipo_comprobante === 'Factura' ? 'F001' : 'B001');
  const correlativo = String(venta.numero_comprobante || venta.id).padStart(8, '0');
  const numeroCompleto = `${serie}-${correlativo}`;
  
  const estadoTexto = venta.estado === 'Anulada' ? ' (ANULADA)' : '';
  const asunto = `Comprobante de Pago ${numeroCompleto} - ${nombreEmpresa}${estadoTexto}`;
  
  let detallesHtml = '';
  for (const item of venta.detalles) {
    detallesHtml += `
      <tr>
        <td style="padding: 8px; border-bottom: 1px solid #ddd;">${item.cantidad}</td>
        <td style="padding: 8px; border-bottom: 1px solid #ddd;">${item.producto ? item.producto.nombre : 'Producto'}</td>
        <td style="padding: 8px; border-bottom: 1px solid #ddd;">S/ ${Number(item.precio_unitario).toFixed(2)}</td>
        <td style="padding: 8px; border-bottom: 1px solid #ddd;">S/ ${Number(item.subtotal).toFixed(2)}</td>
      </tr>
    `;
  }

  const clienteDoc = venta.cliente_ruc ? `RUC: ${venta.cliente_ruc}` : (venta.cliente_dni ? `DNI: ${venta.cliente_dni}` : 'Cliente General');
  const clienteNom = venta.cliente_razon_social || (venta.cliente ? venta.cliente.nombre : '') || venta.cliente_nombre || 'Público General';

  const html = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; color: #333;">
      <div style="background-color: #f8f9fa; padding: 20px; text-align: center; border-bottom: 3px solid #4f46e5;">
        <h2 style="margin: 0; color: #1f2937;">${nombreEmpresa}</h2>
        <p style="margin: 5px 0 0; color: #6b7280; font-size: 14px;">Emisión de Comprobante Electrónico</p>
      </div>
      
      <div style="padding: 20px;">
        ${venta.estado === 'Anulada' ? '<div style="background-color: #fee2e2; color: #b91c1c; padding: 10px; text-align: center; font-weight: bold; margin-bottom: 20px; border-radius: 4px;">ESTE COMPROBANTE HA SIDO ANULADO</div>' : ''}
        
        <p>Estimado(a) <strong>${clienteNom}</strong>,</p>
        <p>Adjuntamos el detalle de su comprobante de pago emitido el <strong>${new Date(venta.createdAt).toLocaleDateString('es-PE')}</strong>.</p>
        
        <div style="background-color: #f3f4f6; padding: 15px; border-radius: 6px; margin: 20px 0;">
          <p style="margin: 0 0 10px;"><strong>Tipo:</strong> ${venta.tipo_comprobante}</p>
          <p style="margin: 0 0 10px;"><strong>Número:</strong> ${numeroCompleto}</p>
          <p style="margin: 0 0 10px;"><strong>Documento:</strong> ${clienteDoc}</p>
          <p style="margin: 0;"><strong>Total Pagado:</strong> S/ ${Number(venta.monto_total).toFixed(2)}</p>
        </div>

        <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px;">
          <thead>
            <tr style="background-color: #f8f9fa;">
              <th style="padding: 8px; text-align: left; border-bottom: 2px solid #ddd;">Cant.</th>
              <th style="padding: 8px; text-align: left; border-bottom: 2px solid #ddd;">Descripción</th>
              <th style="padding: 8px; text-align: left; border-bottom: 2px solid #ddd;">P. Unit</th>
              <th style="padding: 8px; text-align: left; border-bottom: 2px solid #ddd;">Subtotal</th>
            </tr>
          </thead>
          <tbody>
            ${detallesHtml}
          </tbody>
          <tfoot>
            <tr>
              <td colspan="3" style="padding: 10px 8px; text-align: right; font-weight: bold;">TOTAL:</td>
              <td style="padding: 10px 8px; font-weight: bold; font-size: 16px;">S/ ${Number(venta.monto_total).toFixed(2)}</td>
            </tr>
          </tfoot>
        </table>

        <p style="font-size: 13px; color: #6b7280; text-align: center; margin-top: 30px;">
          Para consultar la validez de este comprobante, puede ingresar a la plataforma de SUNAT.<br>
          Gracias por su preferencia.
        </p>
      </div>
    </div>
  `;

  await enviarCorreo({ para: emailDestino, asunto, html });
  return venta;
};

module.exports = {
  efectivoDisponibleEnTurno,
  RegistrarVentaUseCase,
  AnularVentaUseCase,
  ReenviarEmailUseCase,
};
