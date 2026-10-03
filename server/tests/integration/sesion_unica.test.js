const request = require('supertest');
const { app } = require('../../app');
const { sequelize, Usuario } = require('../../models');
const jwt = require('jsonwebtoken');

describe('Sesión Única (ISO 29119-4 Criterios de Aceptación)', () => {
  let appServer;
  let usuario;

  beforeAll(() => {
    appServer = require('../../app');
  });

  beforeEach(async () => {
    const ts = Date.now();
    usuario = await Usuario.create({ nombre: 'Test', email: `test_${ts}@test.com`, password_hash: 'hash', rol: 'Vendedor', session_version: 1 });
  });

  it('Caso 1: Invalidación de token por incremento de session_version al loguear en otro cliente (RN-N05)', async () => {
    // 1. Simular primer logueo (obtiene Token A con session_version 1)
    const tokenA = jwt.sign(
      { id: usuario.id, rol: usuario.rol, sv: 1 },
      process.env.JWT_SECRET || 'secret'
    );

    // Verificamos que el Token A funciona inicialmente
    const resA_valid = await request(appServer)
      .get('/api/caja/activo')
      .set('Authorization', `Bearer ${tokenA}`);
    // No debería dar 401
    expect(resA_valid.status).not.toBe(401);

    // 2. Simular segundo logueo en otro cliente
    // El controlador de auth.login incrementa session_version
    usuario.session_version += 1;
    await usuario.save();

    // 3. Intento de uso del Token A
    const resA_invalid = await request(appServer)
      .get('/api/caja/activo')
      .set('Authorization', `Bearer ${tokenA}`);
    
    // Debería ser rechazado porque el session_version del token (1) no coincide con el de la BD (2)
    expect(resA_invalid.status).toBe(401);
    expect(resA_invalid.body.mensaje).toMatch(/Tu sesión ha expirado/i);
  });
});
