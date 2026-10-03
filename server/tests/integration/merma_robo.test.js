const request = require('supertest');
const { sequelize, Usuario, Producto, EntradaMercaderia, BajaInventario, ConsumoLote, AjusteInventario } = require('../../models');
const app = require('../../app');
const jwt = require('jsonwebtoken');

describe('Pruebas de Integración - Descuadre y Merma (Robo)', () => {
  let usuario, token, producto, lote1, lote2;

  beforeAll(() => {
    process.env.JWT_SECRET = process.env.JWT_SECRET || 'secret';
  });

  beforeEach(async () => {
    jest.clearAllMocks();

    usuario = await Usuario.create({
      nombre: 'Test Almacenero',
      email: 'testalmacenero@test.com',
      password_hash: 'hash',
      rol: 'Almacenero',
      session_version: 1,
    });

    token = jwt.sign({ id: usuario.id, rol: usuario.rol, sv: usuario.session_version }, process.env.JWT_SECRET);

    producto = await Producto.create({
      nombre: 'Producto Test Robo',
      marca: 'TestMarca',
      precio: 20.0,
      stock: 15,
      maneja_vencimiento: true,
    });

    // Lote más antiguo
    lote1 = await EntradaMercaderia.create({
      producto_id: producto.id,
      cantidad: 5,
      cantidad_restante: 5,
      fecha_vencimiento: new Date(new Date().getTime() + 10 * 24 * 60 * 60 * 1000), // en 10 días
      costo_unitario: 10.0,
      usuario_id: usuario.id,
    });

    // Lote más nuevo
    lote2 = await EntradaMercaderia.create({
      producto_id: producto.id,
      cantidad: 10,
      cantidad_restante: 10,
      fecha_vencimiento: new Date(new Date().getTime() + 20 * 24 * 60 * 60 * 1000), // en 20 días
      costo_unitario: 12.0,
      usuario_id: usuario.id,
    });
  });

  it('Caso 1: Registro de ajuste negativo por conteo ciego (faltante por robo), verificando el consumo FEFO de stock y el cálculo correcto del costo valorizado de la pérdida', async () => {
    // Tenemos 15 en stock. Si el conteo ciego dice que hay 7, se pierden 8.
    const res = await request(app)
      .post('/api/inventario/ajustes')
      .set('Authorization', `Bearer ${token}`)
      .send({
        producto_id: producto.id,
        cantidad_contada: 7,
        observaciones: 'Faltante por robo detectado en conteo ciego'
      });

    expect(res.status).toBe(201);
    expect(res.body.diferencia).toBe(-8);

    const ajusteId = res.body.id;

    // Verificar FEFO y costo valorizado de la pérdida
    const consumos = await ConsumoLote.findAll({
      where: { ajuste_id: ajusteId },
      include: [{ model: EntradaMercaderia, as: 'lote' }],
      order: [['id', 'ASC']]
    });

    // Debería consumir 5 del lote1 (el más próximo a vencer) y 3 del lote2
    expect(consumos.length).toBe(2);
    
    const consumoLote1 = consumos.find(c => c.entrada_id === lote1.id);
    const consumoLote2 = consumos.find(c => c.entrada_id === lote2.id);

    expect(consumoLote1).toBeDefined();
    expect(consumoLote1.cantidad).toBe(5);
    expect(consumoLote2).toBeDefined();
    expect(consumoLote2.cantidad).toBe(3);

    // Costo valorizado: (5 * 10.0) + (3 * 12.0) = 50 + 36 = 86
    const costoValorizado = consumos.reduce((acc, curr) => acc + (curr.cantidad * curr.lote.costo_unitario), 0);
    expect(costoValorizado).toBe(86);

    // Verificar nuevo stock
    const productoActualizado = await Producto.findByPk(producto.id);
    expect(productoActualizado.stock).toBe(7);
  });

  it('Caso 2: Validación obligatoria del campo motivo_detalle al registrar una baja con motivo "Robo o faltante"', async () => {
    const resFallido = await request(app)
      .post('/api/inventario/bajas')
      .set('Authorization', `Bearer ${token}`)
      .send({
        producto_id: producto.id,
        cantidad: 1,
        motivo: 'Robo o faltante',
        motivo_detalle: '' // Vacío
      });

    expect(resFallido.status).toBe(400);
    expect(resFallido.body.mensaje).toBe('El detalle es obligatorio para el motivo Robo o faltante');

    const resExitoso = await request(app)
      .post('/api/inventario/bajas')
      .set('Authorization', `Bearer ${token}`)
      .send({
        producto_id: producto.id,
        cantidad: 1,
        motivo: 'Robo o faltante',
        motivo_detalle: 'Se detectó que el empaque estaba violado y faltaba el producto'
      });

    expect(resExitoso.status).toBe(201);
    expect(resExitoso.body.motivo).toBe('Robo o faltante');
    expect(resExitoso.body.motivo_detalle).toBe('Se detectó que el empaque estaba violado y faltaba el producto');
  });
});
