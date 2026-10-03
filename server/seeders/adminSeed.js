/**
 * adminSeed.js
 * Inserta los usuarios SuperAdmin y Administrador iniciales si no existen.
 * Se ejecuta automáticamente desde app.js tras la sincronización de tablas.
 */

const bcrypt  = require('bcryptjs');
const { Usuario } = require('../models');

const seedAdmin = async () => {
  try {
    const adminExistente = await Usuario.findOne({ where: { rol: 'Administrador' } });
    const superAdminExistente = await Usuario.findOne({ where: { rol: 'SuperAdmin' } });

    // Hashear la contraseña antes de insertar
    const password_hash = await bcrypt.hash('Admin123*', 10);

    if (!superAdminExistente) {
      await Usuario.create({
        nombre:        'Super Admin',
        email:         'superadmin@minimarket.com',
        password_hash,
        rol:           'SuperAdmin',
        activo:        true,
      });
      console.log('✅ Usuario SuperAdmin creado');
    } else {
      console.log('ℹ️  Ya existe un SuperAdmin');
    }

    if (!adminExistente) {
      await Usuario.create({
        nombre:        'Admin Principal',
        email:         'admin@minimarket.com',
        password_hash,
        rol:           'Administrador',
        activo:        true,
      });
      console.log('✅ Usuario Administrador creado');
    } else {
      console.log('ℹ️  Ya existe un Administrador');
    }

  } catch (err) {
    console.error('❌ Error al ejecutar el seed de administrador:', err);
  }
};

module.exports = seedAdmin;
