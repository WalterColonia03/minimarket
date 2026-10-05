const { sequelize } = require('./models');
async function fixDB() {
  try {
    await sequelize.query('ALTER TABLE ventas ADD COLUMN validacion_sunat_pendiente BOOLEAN DEFAULT false;');
    console.log('Columna agregada a ventas.');
  } catch (err) {
    console.log('Error agregando a ventas:', err.message);
  }
  process.exit(0);
}
fixDB();
