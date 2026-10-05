const { sequelize } = require('./models');
const { RegistrarVentaUseCase } = require('./services/venta.domain.service');

async function test() {
  try {
    // 1. Obtener usuario (asumamos Admin = id 1)
    const turno = await sequelize.models.Turno.findOne({ where: { estado: 'Abierto' } });
    if (!turno) {
      console.log('No hay turno abierto');
      process.exit(1);
    }
    const usuarioId = turno.usuario_id;
    
    // 2. Ejecutar
    console.log('Ejecutando RegistrarVentaUseCase...');
    const result = await RegistrarVentaUseCase(usuarioId, {
      metodo_pago: 'Efectivo',
      monto_recibido: 33,
      items: [{ producto_id: 3, cantidad: 3 }],
      tipo_comprobante: 'Boleta',
      cliente_dni: null,
      cliente_nombre: null,
      cliente_ruc: null,
      yape_verificado: false,
      referencia_pago: null,
      razonSocialFinal: null,
      direccionFinal: null,
      validacion_sunat_pendiente: false
    });
    console.log('Venta exitosa:', result.venta.id);
  } catch (err) {
    console.error('Error capturado:', err);
  }
  process.exit(0);
}
test();
