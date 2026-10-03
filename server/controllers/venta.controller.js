const { Op } = require('sequelize');
const { Venta } = require('../models');
const { presentarVenta, presentarLista } = require('../presenters/venta.presenter');
const { consultarRucSunat } = require('../services/consulta.service');
const { inicioDiaPeru, finDiaPeruExclusivo } = require('../utils/fechas');
const { RegistrarVentaUseCase, AnularVentaUseCase, ReenviarEmailUseCase } = require('../services/venta.domain.service');

const INCLUDE_VENTA = [
  { association: 'usuario', attributes: ['id', 'nombre'] },
  { association: 'cliente', attributes: ['id', 'nombre', 'dni'] },
  { association: 'anulador', attributes: ['id', 'nombre'] },
  {
    association: 'detalles',
    include: [{ association: 'producto', attributes: ['id', 'nombre', 'marca', 'codigo_barras'] }],
  },
];

const registrar = async (req, res) => {
  try {
    const { metodo_pago, monto_recibido, items, tipo_comprobante, cliente_dni, cliente_nombre, cliente_ruc, yape_verificado, referencia_pago, validacion_sunat_pendiente, cliente_razon_social, cliente_direccion } = req.body;

    if (!items || items.length === 0) {
      return res.status(400).json({ mensaje: 'La venta debe tener al menos un producto' });
    }

    if (!['Efectivo', 'Yape'].includes(metodo_pago)) {
      return res.status(400).json({ mensaje: 'El método de pago debe ser Efectivo o Yape' });
    }

    // El frontend ya bloquea el botón "Pago confirmado" sin este dato, pero
    // eso es solo UI — se revalida acá porque es el único campo que permite
    // ubicar el pago en IziPay/Yape si hay que conciliarlo o reclamarlo.
    if (metodo_pago === 'Yape' && !/^\d{6}$/.test(referencia_pago || '')) {
      return res.status(400).json({ mensaje: 'El N° de autorización es obligatorio y debe tener 6 dígitos numéricos' });
    }

    // Un N° de autorización corresponde a un único pago real en IziPay: si ya
    // quedó registrado en otra venta, no puede reutilizarse — eso rompería la
    // trazabilidad (dos ventas distintas "respaldadas" por el mismo pago).
    if (metodo_pago === 'Yape') {
      const yaRegistrado = await Venta.findOne({ where: { referencia_pago } });
      if (yaRegistrado) {
        return res.status(400).json({ mensaje: `El N° de autorización ${referencia_pago} ya fue registrado en otra venta (#${yaRegistrado.id})` });
      }
    }

    for (const item of items) {
      if (!item.producto_id || item.producto_id <= 0) {
        return res.status(400).json({ mensaje: 'Cada item debe tener un producto válido' });
      }
      if (!Number.isInteger(Number(item.cantidad)) || Number(item.cantidad) < 1) {
        return res.status(400).json({ mensaje: 'La cantidad de cada item debe ser un número entero mayor a 0' });
      }
    }

    let razonSocialFinal = null;
    let direccionFinal = null;

    if (tipo_comprobante === 'Factura') {
      if (!/^\d{11}$/.test(cliente_ruc)) {
        return res.status(400).json({ mensaje: 'Para emitir factura se requiere un RUC válido de 11 dígitos' });
      }
      let datosRuc;
      try {
        datosRuc = await consultarRucSunat(cliente_ruc);
      } catch (err) {
        if (validacion_sunat_pendiente && cliente_razon_social && cliente_direccion) {
          datosRuc = { razon_social: cliente_razon_social, direccion: cliente_direccion, estado: 'ACTIVO', condicion: 'HABIDO' };
        } else {
          return res.status(err.status || 502).json({ mensaje: err.mensaje || 'No se pudo verificar el RUC con SUNAT', offline_permitido: err.offline_permitido });
        }
      }
      if (datosRuc.estado && datosRuc.estado.toUpperCase() !== 'ACTIVO') {
        return res.status(400).json({ mensaje: `RUC dado de baja en SUNAT (estado: ${datosRuc.estado})` });
      }
      if (datosRuc.condicion && datosRuc.condicion.toUpperCase() !== 'HABIDO') {
        return res.status(400).json({ mensaje: `RUC con domicilio no habido en SUNAT (condición: ${datosRuc.condicion})` });
      }
      razonSocialFinal = datosRuc.razon_social || null;
      direccionFinal = datosRuc.direccion || null;
    }

    if (cliente_dni) {
      if (!/^\d{8}$/.test(cliente_dni)) {
        return res.status(400).json({ mensaje: 'Para boleta con DNI se requiere un DNI válido de 8 dígitos' });
      }
      if (!cliente_nombre || !cliente_nombre.trim()) {
        return res.status(400).json({ mensaje: 'El DNI debe verificarse (consulta RENIEC) antes de registrar la venta' });
      }
    }

    // Invocación al Domain Service
    const { venta } = await RegistrarVentaUseCase(req.usuario.id, {
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
    });

    const ventaCompleta = await Venta.findByPk(venta.id, {
      include: INCLUDE_VENTA,
    });

    return res.status(201).json(presentarVenta(ventaCompleta));
  } catch (err) {
    if (err.status && err.mensaje) {
      return res.status(err.status).json({ mensaje: err.mensaje });
    }
    // Cubre la ventana de carrera entre el pre-chequeo de arriba y el commit
    if (err.name === 'SequelizeUniqueConstraintError' && err.fields?.referencia_pago) {
      return res.status(400).json({ mensaje: 'El N° de autorización ya fue registrado en otra venta' });
    }
    console.error('Error en registrar venta:', err);
    return res.status(500).json({ mensaje: 'Error interno del servidor' });
  }
};

const listar = async (req, res) => {
  try {
    const { fecha_inicio, fecha_hasta, metodo_pago, estado, pagina, limite } = req.query;
    const where = {};

    if (fecha_inicio && fecha_hasta && new Date(fecha_inicio) > new Date(fecha_hasta)) {
      return res.status(400).json({ mensaje: 'La fecha de inicio no puede ser posterior a la fecha final' });
    }

    if (fecha_inicio && fecha_hasta) {
      where.createdAt = { [Op.between]: [inicioDiaPeru(fecha_inicio), finDiaPeruExclusivo(fecha_hasta)] };
    } else if (fecha_inicio) {
      where.createdAt = { [Op.gte]: inicioDiaPeru(fecha_inicio) };
    } else if (fecha_hasta) {
      where.createdAt = { [Op.lt]: finDiaPeruExclusivo(fecha_hasta) };
    }

    if (metodo_pago) {
      where.metodo_pago = metodo_pago;
    }

    if (estado) {
      where.estado = estado;
    }

    // Un Vendedor solo ve sus propias ventas; Administrador/Gerente ven todas.
    if (req.usuario.rol === 'Vendedor') {
      where.usuario_id = req.usuario.id;
    }

    const page = Math.max(1, parseInt(pagina) || 1);
    const limit = Math.min(100, Math.max(1, parseInt(limite) || 25));
    const offset = (page - 1) * limit;

    const { count, rows } = await Venta.findAndCountAll({
      where,
      include: INCLUDE_VENTA,
      order: [['createdAt', 'DESC']],
      limit,
      offset,
    });

    return res.status(200).json({
      data: presentarLista(rows),
      pagination: {
        total: count,
        pagina: page,
        limite: limit,
        totalPaginas: Math.ceil(count / limit),
      },
    });
  } catch (err) {
    console.error('Error en listar ventas:', err);
    return res.status(500).json({ mensaje: 'Error interno del servidor' });
  }
};

const obtener = async (req, res) => {
  try {
    const venta = await Venta.findByPk(req.params.id, {
      include: INCLUDE_VENTA,
    });

    if (!venta) {
      return res.status(404).json({ mensaje: 'Venta no encontrada' });
    }

    if (req.usuario.rol === 'Vendedor' && venta.usuario_id !== req.usuario.id) {
      return res.status(403).json({ mensaje: 'No tienes acceso a esta venta' });
    }

    return res.status(200).json(presentarVenta(venta));
  } catch (err) {
    console.error('Error en obtener venta:', err);
    return res.status(500).json({ mensaje: 'Error interno del servidor' });
  }
};

const verificarYape = async (req, res) => {
  try {
    const venta = await Venta.findByPk(req.params.id);

    if (!venta) {
      return res.status(404).json({ mensaje: 'Venta no encontrada' });
    }

    if (venta.metodo_pago !== 'Yape') {
      return res.status(400).json({ mensaje: 'La venta no es de tipo Yape' });
    }

    if (venta.yape_verificado) {
      return res.status(400).json({ mensaje: 'El Yape ya fue verificado anteriormente' });
    }

    venta.yape_verificado = true;
    venta.yape_verificado_por = req.usuario.id;
    venta.yape_verificado_en = new Date();
    await venta.save();

    const ventaCompleta = await Venta.findByPk(venta.id, {
      include: INCLUDE_VENTA,
    });

    return res.status(200).json(presentarVenta(ventaCompleta));
  } catch (err) {
    console.error('Error en verificarYape:', err);
    return res.status(500).json({ mensaje: 'Error interno del servidor' });
  }
};

const anular = async (req, res) => {
  try {
    const { motivo, detalles: decisiones } = req.body;

    if (!motivo || !motivo.trim()) {
      return res.status(400).json({ mensaje: 'El motivo de anulación es obligatorio' });
    }

    if (!Array.isArray(decisiones)) {
      return res.status(400).json({ mensaje: 'Debes indicar si cada producto de la venta vuelve a stock' });
    }

    // Invocación al Domain Service
    const venta = await AnularVentaUseCase(req.usuario.id, req.params.id, motivo, decisiones);

    const ventaCompleta = await Venta.findByPk(venta.id, {
      include: INCLUDE_VENTA,
    });

    return res.status(200).json(presentarVenta(ventaCompleta));
  } catch (err) {
    if (err.status && err.mensaje) {
      return res.status(err.status).json({ mensaje: err.mensaje });
    }
    console.error('Error al anular venta:', err);
    return res.status(500).json({ mensaje: 'Error interno del servidor' });
  }
};

const buscarComprobantes = async (req, res) => {
  try {
    const { cliente_documento, serie, correlativo, desde, hasta } = req.query;
    const where = {};

    if (cliente_documento) {
      where[Op.or] = [
        { cliente_dni: cliente_documento },
        { cliente_ruc: cliente_documento }
      ];
    }
    if (serie) {
      where.serie_comprobante = serie.toUpperCase();
    }
    if (correlativo) {
      where.numero_comprobante = parseInt(correlativo, 10);
    }

    if (desde && hasta && new Date(desde) > new Date(hasta)) {
      return res.status(400).json({ mensaje: 'La fecha "desde" no puede ser posterior a "hasta"' });
    }

    if (desde && hasta) {
      where.createdAt = { [Op.between]: [inicioDiaPeru(desde), finDiaPeruExclusivo(hasta)] };
    } else if (desde) {
      where.createdAt = { [Op.gte]: inicioDiaPeru(desde) };
    } else if (hasta) {
      where.createdAt = { [Op.lt]: finDiaPeruExclusivo(hasta) };
    }

    const ventas = await Venta.findAll({
      where,
      include: INCLUDE_VENTA,
      order: [['createdAt', 'DESC']],
      limit: 100
    });

    return res.status(200).json({
      data: presentarLista(ventas),
      pagination: {
        total: ventas.length,
        pagina: 1,
        limite: 100,
        totalPaginas: 1,
      },
    });
  } catch (err) {
    console.error('Error al buscar comprobantes:', err);
    return res.status(500).json({ mensaje: 'Error interno del servidor' });
  }
};

const reenviarEmail = async (req, res) => {
  try {
    const { email_destino } = req.body;
    if (!email_destino || !/^\S+@\S+\.\S+$/.test(email_destino)) {
      return res.status(400).json({ mensaje: 'Debe proporcionar un email válido' });
    }

    await ReenviarEmailUseCase(req.params.id, email_destino);
    return res.status(200).json({ mensaje: 'Correo enviado correctamente' });
  } catch (err) {
    if (err.status && err.mensaje) {
      return res.status(err.status).json({ mensaje: err.mensaje });
    }
    console.error('Error al reenviar email:', err);
    return res.status(500).json({ mensaje: 'Error interno del servidor' });
  }
};

module.exports = { registrar, listar, obtener, verificarYape, anular, buscarComprobantes, reenviarEmail };
