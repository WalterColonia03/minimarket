const { sequelize, Usuario, Producto, Categoria, Proveedor, EntradaMercaderia, ConsumoLote, Venta, Turno, MovimientoCaja } = require('../../models');
const { RegistrarVentaUseCase, AnularVentaUseCase } = require('../../services/venta.domain.service');

describe('FEFO Consumption and Reversion (ISO 29119-4 Criterios de Aceptación)', () => {
  let usuario, producto;

  beforeEach(async () => {
    const ts = Date.now();
    usuario = await Usuario.create({ nombre: 'Test', email: `test_${ts}@test.com`, password_hash: 'hash', rol: 'Vendedor' });
    const turno = await Turno.create({
      usuario_id: usuario.id,
      monto_apertura: 500,
      estado: 'Abierto',
      fecha_apertura: new Date()
    });
    await MovimientoCaja.create({
      turno_id: turno.id,
      usuario_id: usuario.id,
      tipo: 'Apertura',
      metodo: 'Efectivo',
      monto: 500,
      fecha_hora: new Date(),
      descripcion: 'Apertura de turno'
    });
    const categoria = await Categoria.create({ nombre: 'Bebidas' });
    const proveedor = await Proveedor.create({ nombre: 'Proveedor Test', ruc: '12345678901' });
    
    producto = await Producto.create({
      nombre: 'Gaseosa',
      precio: 2.0,
      marca: 'TestMarca',
      stock: 0,
      categoria_id: categoria.id,
      proveedor_id: proveedor.id,
    });
  });

  it('Caso 1: Despacho estricto por lote más próximo a vencer (FEFO)', async () => {
    // Lote 1: Vence en 30 días
    const hoy = new Date();
    const lote1Vence = new Date(hoy);
    lote1Vence.setDate(hoy.getDate() + 30);
    const lote1 = await EntradaMercaderia.create({
      producto_id: producto.id,
      cantidad: 10,
      cantidad_restante: 10,
      fecha_vencimiento: lote1Vence,
      costo_unitario: 1.0,
      usuario_id: usuario.id,
      proveedor_id: producto.proveedor_id,
    });

    // Lote 2: Vence en 10 días (debe consumirse primero)
    const lote2Vence = new Date(hoy);
    lote2Vence.setDate(hoy.getDate() + 10);
    const lote2 = await EntradaMercaderia.create({
      producto_id: producto.id,
      cantidad: 10,
      cantidad_restante: 10,
      fecha_vencimiento: lote2Vence,
      costo_unitario: 1.0,
      usuario_id: usuario.id,
      proveedor_id: producto.proveedor_id,
    });

    producto.stock = 20;
    await producto.save();

    // Registrar venta por 5 unidades
    await RegistrarVentaUseCase(usuario.id, {
      metodo_pago: 'Efectivo',
      monto_recibido: 20,
      tipo_comprobante: 'Ticket',
      items: [{ producto_id: producto.id, cantidad: 5 }]
    });

    // Verificar FEFO
    await lote1.reload();
    await lote2.reload();

    expect(lote1.cantidad_restante).toBe(10); // Intacto
    expect(lote2.cantidad_restante).toBe(5);  // Consumido
  });

  it('Caso 2: Exclusión absoluta de lotes cuya fecha de vencimiento sea hoy o anterior (RN-03)', async () => {
    // Lote vencido
    const hoy = new Date();
    const loteVencido = new Date(hoy);
    loteVencido.setDate(hoy.getDate() - 1);
    await EntradaMercaderia.create({
      producto_id: producto.id,
      cantidad: 10,
      cantidad_restante: 10,
      fecha_vencimiento: loteVencido,
      costo_unitario: 1.0,
      usuario_id: usuario.id,
      proveedor_id: producto.proveedor_id,
    });

    producto.stock = 10;
    await producto.save();

    // Intentar venta
    await expect(RegistrarVentaUseCase(usuario.id, {
      metodo_pago: 'Efectivo',
      monto_recibido: 20,
      tipo_comprobante: 'Ticket',
      items: [{ producto_id: producto.id, cantidad: 5 }]
    })).rejects.toMatchObject({
      mensaje: expect.stringMatching(/tiene stock vencido/i)
    });
  });

  it('Caso 3: Reversión atómica de consumos ante anulación de venta con retorno a inventario (RN-09)', async () => {
    const hoy = new Date();
    const loteVence = new Date(hoy);
    loteVence.setDate(hoy.getDate() + 10);
    const lote = await EntradaMercaderia.create({
      producto_id: producto.id,
      cantidad: 10,
      cantidad_restante: 10,
      fecha_vencimiento: loteVence,
      costo_unitario: 1.0,
      usuario_id: usuario.id,
      proveedor_id: producto.proveedor_id,
    });

    producto.stock = 10;
    await producto.save();

    const { venta, detalles } = await RegistrarVentaUseCase(usuario.id, {
      metodo_pago: 'Efectivo',
      monto_recibido: 20,
      tipo_comprobante: 'Ticket',
      items: [{ producto_id: producto.id, cantidad: 5 }]
    });

    await lote.reload();
    expect(lote.cantidad_restante).toBe(5);

    // Anular venta con retorno a stock
    const decisiones = [{ id: detalles[0].id, reponer_stock: true }];
    await AnularVentaUseCase(usuario.id, venta.id, 'Error de digitación', decisiones);

    // Verificar retorno
    await lote.reload();
    expect(lote.cantidad_restante).toBe(10);
    const p = await Producto.findByPk(producto.id);
    expect(p.stock).toBe(10);
    
    // Verificar que la venta esté anulada
    const ventaAnulada = await Venta.findByPk(venta.id);
    expect(ventaAnulada.estado).toBe('Anulada');
  });
});
