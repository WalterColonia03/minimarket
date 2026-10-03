const request = require('supertest');
const { sequelize, Usuario, Venta, Producto, Cliente } = require('../../models');
const app = require('../../app');
const jwt = require('jsonwebtoken');

jest.mock('../../services/mail.service', () => ({
  enviarCorreo: jest.fn().mockResolvedValue({}),
}));

const { enviarCorreo } = require('../../services/mail.service');

describe('Pruebas de Integración - SUNAT Reemisión', () => {
  let usuario, token, producto, cliente, venta;

  beforeAll(() => {
    process.env.JWT_SECRET = process.env.JWT_SECRET || 'secret';
  });

  beforeEach(async () => {
    jest.clearAllMocks();

    usuario = await Usuario.create({
      nombre: 'Test Vendedor',
      email: 'testvendedor@test.com',
      password_hash: 'hash',
      rol: 'Vendedor',
      session_version: 1,
    });

    token = jwt.sign({ id: usuario.id, rol: usuario.rol, sv: usuario.session_version }, process.env.JWT_SECRET);

    producto = await Producto.create({
      nombre: 'Producto Test',
      marca: 'TestMarca',
      precio: 10.0,
      stock: 10,
    });

    cliente = await Cliente.create({
      nombre: 'Cliente Test',
      dni: '12345678',
    });

    venta = await Venta.create({
      usuario_id: usuario.id,
      cliente_id: cliente.id,
      metodo_pago: 'Efectivo',
      monto_total: 10.0,
      monto_recibido: 10.0,
      vuelto: 0,
      tipo_comprobante: 'Factura',
      numero_comprobante: 123,
      serie_comprobante: 'F001',
      cliente_ruc: '20123456789',
      cliente_razon_social: 'Empresa Test',
      estado: 'Completada',
    });
  });

  it('Caso 1: Búsqueda histórica de comprobante filtrando por RUC y número de serie/correlativo exitosa', async () => {
    const res = await request(app)
      .get('/api/ventas/comprobantes/buscar')
      .set('Authorization', `Bearer ${token}`)
      .query({
        cliente_documento: '20123456789',
        serie: 'F001',
        correlativo: '123',
      });

    expect(res.status).toBe(200);
    expect(res.body.data).toHaveLength(1);
    expect(res.body.data[0].serie_comprobante).toBe('F001');
    expect(res.body.data[0].numero_comprobante).toBe(123);
    expect(res.body.data[0].cliente_ruc).toBe('20123456789');
  });

  it('Caso 2: Reenvío de correo electrónico a cliente mediante el endpoint /api/ventas/:id/reenviar-email con mock del transporter', async () => {
    const res = await request(app)
      .post(`/api/ventas/${venta.id}/reenviar-email`)
      .set('Authorization', `Bearer ${token}`)
      .send({ email_destino: 'cliente@test.com' });

    expect(res.status).toBe(200);
    expect(res.body.mensaje).toBe('Correo enviado correctamente');

    expect(enviarCorreo).toHaveBeenCalledTimes(1);
    const mockCall = enviarCorreo.mock.calls[0][0];
    expect(mockCall.para).toBe('cliente@test.com');
    expect(mockCall.asunto).toContain('F001-00000123');
  });

  it('Caso 3: Rechazo de reenvío si el comprobante solicitado no existe o pertenece a una serie no autorizada', async () => {
    const nonExistentId = venta.id + 9999;
    const res = await request(app)
      .post(`/api/ventas/${nonExistentId}/reenviar-email`)
      .set('Authorization', `Bearer ${token}`)
      .send({ email_destino: 'cliente@test.com' });

    expect(res.status).toBe(404);
    expect(res.body.mensaje).toBe('Venta no encontrada');
  });
});
