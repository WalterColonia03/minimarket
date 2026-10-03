const request = require('supertest');
const { app } = require('../../app'); // Asumiendo que app.js exporta la app express
const { sequelize, Usuario, Turno, Producto, Categoria, Proveedor, EntradaMercaderia } = require('../../models');
const jwt = require('jsonwebtoken');

describe('Caja Concurrencia (ISO 29119-4 Criterios de Aceptación)', () => {
  let appServer;
  let token;
  let usuario;
  let turno;
  let producto;

  beforeAll(() => {
    // Para poder testear las rutas, necesitamos importar la app configurada.
    // Si app.js arranca el servidor automáticamente, podría causar puerto en uso.
    // Simulamos req directamente si es necesario o usamos el app exportado.
    // Por simplicidad, probaremos los controladores directamente o vía supertest.
    appServer = require('../../app'); // Si no exporta, es posible que el import falle. 
    // Usaremos los servicios o controladores simulando requests si appServer no exporta app.
  });

  beforeEach(async () => {
    const ts = Date.now();
    usuario = await Usuario.create({ nombre: 'Cajero', email: `cajero_${ts}@test.com`, password_hash: 'hash', rol: 'Vendedor', session_version: 1 });
    token = jwt.sign({ id: usuario.id, rol: usuario.rol, sv: usuario.session_version }, process.env.JWT_SECRET || 'secret');

    turno = await Turno.create({
      usuario_id: usuario.id,
      monto_apertura: 500,
      estado: 'Abierto',
      fecha_apertura: new Date()
    });

    const categoria = await Categoria.create({ nombre: 'Bebidas' });
    const proveedor = await Proveedor.create({ nombre: 'Proveedor Test', ruc: '12345678901' });
    
    producto = await Producto.create({
      nombre: 'Agua',
      precio: 2.5,
      marca: 'TestMarca',
      stock: 10,
      categoria_id: categoria.id,
      proveedor_id: proveedor.id,
    });

    const hoy = new Date();
    const loteVence = new Date(hoy);
    loteVence.setDate(hoy.getDate() + 30);
    await EntradaMercaderia.create({
      producto_id: producto.id,
      cantidad: 10,
      cantidad_restante: 10,
      fecha_vencimiento: loteVence,
      costo_unitario: 1.0,
      usuario_id: usuario.id,
      proveedor_id: proveedor.id,
    });
  });

  it('Caso 1: Rechazo de venta si el vuelto requerido supera el efectivo real disponible en caja (RN-N02)', async () => {
    // La caja abrió con 500
    // Total de venta = 2.5 * 1 = 2.5
    // Monto recibido = 1000
    // Vuelto = 997.5 (Supera los 500 en caja)
    
    const res = await request(appServer)
      .post('/api/ventas')
      .set('Authorization', `Bearer ${token}`)
      .send({
        metodo_pago: 'Efectivo',
        monto_recibido: 1000,
        tipo_comprobante: 'Ticket',
        items: [{ producto_id: producto.id, cantidad: 1 }]
      });

    // Si la validación ocurre en dominio:
    expect(res.status).toBe(400);
    expect(res.body.mensaje).toMatch(/Monto en caja insuficiente/i);
  });

  it('Caso 2: Registro de movimiento manual respetando el tope de S/ 5,000 (RN-11)', async () => {
    // Intento de ingreso por 6000
    const resFallido = await request(appServer)
      .post('/api/caja/movimientos')
      .set('Authorization', `Bearer ${token}`)
      .send({
        tipo: 'Ingreso',
        descripcion: 'Refuerzo excesivo',
        monto: 6000
      });

    expect(resFallido.status).toBe(400);
    expect(resFallido.body.mensaje).toMatch(/superar S\/ 5000/);

    // Intento válido por 4000
    const resExitoso = await request(appServer)
      .post('/api/caja/movimientos')
      .set('Authorization', `Bearer ${token}`)
      .send({
        tipo: 'Ingreso',
        descripcion: 'Refuerzo permitido',
        monto: 4000
      });

    expect(resExitoso.status).toBe(201);
    expect(resExitoso.body.monto).toBe(4000);
  });
});
