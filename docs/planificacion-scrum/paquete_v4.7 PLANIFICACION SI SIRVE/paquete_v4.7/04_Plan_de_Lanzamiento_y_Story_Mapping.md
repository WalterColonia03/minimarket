---
Código de documento: DOC-PLAN-04
Título: Plan de Lanzamiento y Story Mapping
Versión: 4.8
Fecha: 2026-09-28
Elaborado por: Colonia Infantas, Walter
Revisado por: Angeles Pérez, Jhonny
Estado: Aprobado
Propósito: Especificación del mapa de historias de usuario (Story Mapping) y plan estratégico de lanzamientos incrementales (Releases e Iteraciones)
Documentos relacionados: DOC-PLAN-00, DOC-PLAN-01, DOC-PLAN-02, DOC-PLAN-03-00, DOC-PLAN-05, DOC-PLAN-06, DOC-PLAN-07, DOC-PLAN-08, DOC-ANEXO-B
---

# 04. Plan de Lanzamiento y Story Mapping

## 1. Story Map por Release y Épica (Formato Pizarra)

Estructura de trazabilidad horizontal por épicas funcionales y vertical por horizontes de entrega (Releases / Sprints). Las tarjetas de historia siguen la convención oficial: `nombre · Pri n · n pt`. Pri = MoSCoW (4 = Must have, 3 = Should have, 2 = Could have, 1 = Won't have). Líneas de corte rotuladas MVP / Release 2 / Release 3, con puntos por release y total.

| Release / Horizonte | <u>EPIC-SEG: Seguridad y Accesos</u> | <u>EPIC-CAT: Catálogos y Clientes</u> | <u>EPIC-INV: Inventario y Reposición</u> | <u>EPIC-VEN: Ventas y Caja</u> | <u>EPIC-REP: Reportes, Dashboards y Configuración</u> | Total Release |
|---|---|---|---|---|---|:---:|
| **REL-1 (MVP Operativo)**<br>Sprint 1<br>(30-sep al 13-oct) | Iniciar sesión · Pri 4 · 5 pt<br>Bloqueo de cuenta · Pri 4 · 3 pt<br>Cerrar sesión · Pri 4 · 2 pt<br>Crear empleado · Pri 4 · 5 pt<br>**Subtotal: 4 HU · 15 pt** | Crear categoría · Pri 4 · 2 pt<br>Listar categorías · Pri 4 · 1 pt<br>Registrar producto · Pri 4 · 5 pt<br>Ver catálogo · Pri 4 · 3 pt<br>Registrar proveedor · Pri 4 · 3 pt<br>Registrar cliente · Pri 4 · 3 pt<br>**Subtotal: 6 HU · 17 pt** | Entrada mercadería · Pri 4 · 5 pt<br>Baja por merma · Pri 4 · 5 pt<br>Ajuste por conteo · Pri 4 · 5 pt<br>**Subtotal: 3 HU · 15 pt** | Abrir turno caja · Pri 4 · 5 pt<br>Cerrar turno caja · Pri 4 · 5 pt<br>Historial turnos · Pri 4 · 3 pt<br>Venta Efectivo/Yape/Plin (IziPay) · Pri 4 · 13 pt<br>Emitir comprobante · Pri 4 · 8 pt<br>Historial ventas · Pri 4 · 5 pt<br>**Subtotal: 6 HU · 39 pt** | Configurar negocio · Pri 4 · 3 pt<br>**Subtotal: 1 HU · 3 pt** | **20 HU<br>89 pts<br>178.0 h** |
| *Línea de corte* | **Línea de corte: MVP – fin de Sprint 1 (martes 13-oct, semana 7) · 89 pts acumulados (todas Must have)** | | | | | |
| **REL-2 (Operación y Control)**<br>Sprint 2<br>(14-oct al 27-oct) | Sesión única · Pri 4 · 8 pt<br>Listar empleados · Pri 4 · 2 pt<br>Desactivar empleado · Pri 4 · 3 pt<br>Recuperar clave · Pri 3 · 5 pt<br>Cierre remoto · Pri 3 · 3 pt<br>**Subtotal: 5 HU · 21 pt** | Próximos a vencer · Pri 4 · 3 pt<br>Listar proveedores · Pri 4 · 2 pt<br>Desactivar prov. · Pri 3 · 2 pt<br>**Subtotal: 3 HU · 7 pt** | Crear reposición · Pri 4 · 3 pt<br>Listar solicitudes · Pri 4 · 2 pt<br>Aprobar reposición · Pri 4 · 3 pt<br>Recibir mercadería · Pri 4 · 8 pt<br>Rechazar reposición · Pri 3 · 2 pt<br>**Subtotal: 5 HU · 18 pt** | Anular venta dev. · Pri 4 · 8 pt<br>Movimiento manual · Pri 3 · 3 pt<br>Resumen activo · Pri 3 · 2 pt<br>Aprobar cierre · Pri 3 · 2 pt<br>Cierre forzado · Pri 3 · 5 pt<br>Validar pago Yape/Plin (IziPay) · Pri 3 · 2 pt<br>**Subtotal: 6 HU · 22 pt** | Ver configuración · Pri 4 · 1 pt<br>Resumen ventas · Pri 4 · 5 pt<br>Alertas directivas · Pri 4 · 5 pt<br>Ventas período · Pri 4 · 5 pt<br>Ranking productos · Pri 4 · 3 pt<br>Stock crítico · Pri 4 · 3 pt<br>**Subtotal: 6 HU · 22 pt** | **25 HU<br>90 pts<br>180.0 h** |
| *Línea de corte* | **Línea de corte: Release 2 – fin de Sprint 2 (martes 27-oct, semana 9) · 179 pts acumulados (153 Must + 26 Should)** | | | | | |
| **REL-3 (Mejoras y Supervisión)**<br>Sprint 3<br>(28-oct al 10-nov) | Cambiar clave · Pri 3 · 3 pt<br>Editar empleado · Pri 3 · 3 pt<br>Reactivar empleado · Pri 3 · 2 pt<br>Registro accesos · Pri 3 · 3 pt<br>**Subtotal: 4 HU · 11 pt** | Editar categoría · Pri 3 · 1 pt<br>Listar clientes · Pri 3 · 2 pt<br>Editar producto · Pri 3 · 3 pt<br>Desactivar prod. · Pri 3 · 2 pt<br>Editar proveedor · Pri 3 · 2 pt<br>Eliminar categor. · Pri 2 · 2 pt<br>Editar correo cli. · Pri 2 · 1 pt<br>Escanear código · Pri 2 · 5 pt<br>**Subtotal: 8 HU · 18 pt** | Historial entradas · Pri 3 · 2 pt<br>Historial bajas · Pri 3 · 2 pt<br>Historial ajustes · Pri 3 · 2 pt<br>**Subtotal: 3 HU · 6 pt** | Comprobante PDF · Pri 3 · 5 pt<br>Buscar cód. barras · Pri 3 · 3 pt<br>Exportar ventas CSV · Pri 2 · 3 pt<br>**Subtotal: 3 HU · 11 pt** | Gráfico ventas/día · Pri 3 · 3 pt<br>Ranking dashboard · Pri 3 · 3 pt<br>Reposición pend. · Pri 3 · 2 pt<br>Ventas por día · Pri 3 · 3 pt<br>Ventas por pago · Pri 3 · 2 pt<br>Resumen inventario · Pri 3 · 2 pt<br>Margen ganancia · Pri 3 · 5 pt<br>Mermas motivo · Pri 3 · 3 pt<br>Exportar rep. PDF · Pri 2 · 3 pt<br>**Subtotal: 9 HU · 26 pt** | **27 HU<br>72 pts<br>144.0 h** |
| *Línea de corte* | **Línea de corte: Release 3 – fin de Sprint 3 (martes 10-nov, semana 11) · 251 pts acumulados (100 % del Backlog)** | | | | | |
| **Total Proyecto** | **13 HU · 47 pt** | **17 HU · 42 pt** | **11 HU · 39 pt** | **15 HU · 72 pt** | **16 HU · 51 pt** | **72 HU<br>251 pts<br>502.0 h** |

---

## 2. Plan de Lanzamiento por Release

### REL-1: MVP (Producto Mínimo Viable Operativo)
- **Objetivo Estratégico:** Demostrar y certificar el circuito comercial y operativo indispensable del minimarket, permitiendo la apertura de caja con fondo base, registro de productos y proveedores, abastecimiento inicial de inventario, procesamiento de ventas en mostrador con Efectivo y billetera digital, emisión de boletas y facturas según normativa tributaria, y configuración general de la empresa.
- **Alcance Funcional:** 20 Historias de Usuario, todas de prioridad Must have (89 puntos de historia).
- **Esfuerzo Operativo Asociado:** 178.0 horas de trabajo efectivo distribuidas en 103 tareas técnicas (104.50 h de construcción y 73.50 h de verificación QA independiente).
- **Criterios de Salida (Definition of Done del Release):**
  1. Inicio de sesión funcional con control de acceso por roles y bloqueo tras 5 intentos fallidos consecutivos por 15 minutos (`HU-AUTH-01`, `HU-AUTH-02`).
  2. Catálogos operativos de categorías, productos con control de perecibles y stock mínimo, y proveedores (`HU-CAT-02`, `HU-CAT-01`, `HU-PROD-02`, `HU-PROD-01`, `HU-PROV-02`).
  3. Módulo de inventario registrando entradas directas de existencias iniciales, mermas físicas y ajustes por conteo con trazabilidad de lotes y fechas de vencimiento (`HU-INV-01`, `HU-INV-02`, `HU-INV-03`).
  4. Flujo de caja con apertura de turno obligatoria antes de vender (fondo mínimo S/ 500.00, RN-10), cuadre de caja y cierre con resumen (`HU-CAJA-01`, `HU-CAJA-02`, `HU-CAJA-05`).
  5. Circuito completo de venta en punto de venta (POS) con cálculo automático de totales y desglose de IGV (18 %), validación de vuelto en gaveta, descuento en tiempo real de existencias, emisión de boleta/factura con formato reglamentario y captura de datos del cliente (`HU-VEN-01`, `HU-VEN-02`, `HU-VEN-05`, `HU-CLI-02`).
  6. Configuración de parámetros institucionales y fiscales de la empresa (`HU-CONF-02`).
  7. Aprobación del 100 % de los casos de prueba de verificación de calidad e integración satisfactoria del entorno operativo.
- **Fecha Objetivo y Presentación:** Martes 13 de octubre de 2026 (Semana 7 del calendario académico).
- **Presupuesto Asignado:** S/ 7,500.00 (2 semanas × S/ 625/semana × 6 desarrolladores, todo costo laboral).
- **Riesgos Principales y Mitigación:**
  - *Camino crítico de venta:* `HU-VEN-01` (13 pts) concentra el esfuerzo central. Se mitiga mediante el principio de diseño de interfaces y contratos funcionales acordado el día 1; cierra el día 7 y `HU-VEN-02` el día 8. El sprint cierra en el día 9 con 2.50 h residuales en requerimientos periféricos, reservando el resto del día 9 y el día 10 (día de presentación) como margen de seguridad y regresión final.
  - *Feriado nacional (jueves 8 de octubre):* Mitigado mediante la jornada laboral compensatoria del sábado 3 de octubre.

---

### REL-2: Release 2 (Operación y Control Integral)
- **Objetivo Estratégico:** Completar la gestión operativa y directiva del minimarket mediante la integración del ciclo formal de reposición de mercadería (solicitud, aprobación, recepción de órdenes y mermas por anulación), endurecimiento de la seguridad de sesiones, mecanismos de supervisión de caja, y la activación de cuadros de mando gerencial con alertas tempranas de stock y vencimiento.
- **Alcance Funcional:** 25 Historias de Usuario (16 Must have + 9 Should have), sumando 90 puntos de historia ejecutados en el Sprint 2.
- **Esfuerzo Operativo Asociado:** 180.0 horas de trabajo efectivo distribuidas en 125 tareas técnicas (105.75 h de construcción y 74.25 h de verificación QA independiente).
- **Criterios de Salida (Definition of Done del Release):**
  1. Sesión única concurrente con invalidación automática ante aperturas simultáneas y recuperación de contraseña mediante código de autorización numérico de 4 dígitos con vigencia de 15 minutos (`HU-AUTH-04`, `HU-AUTH-05`, `HU-USR-06`).
  2. Módulo de reposición automatizado: creación de solicitudes mono-producto, flujo de aprobación gerencial con reasignación de proveedor (RN-16) y recepción contra orden aprobada con actualización inmediata de existencias y costo promedio (RN-01, RN-14, `HU-SOL-01` a `HU-SOL-05`).
  3. Anulación de ventas restringida a Administrador/Gerente con reversión de inventario y registro de egreso en caja mientras el turno continúe en estado 'Abierto' (RN-08 y RN-09, `HU-VEN-06`).
  4. Supervisión operativa de caja: movimientos manuales en efectivo hasta S/ 5,000.00 (RN-11, RN-15), supervisión de turnos activos y cierre forzado administrativo (`HU-CAJA-03`, `HU-CAJA-04`, `HU-CAJA-06`, `HU-CAJA-07`).
  5. Cuadros de mando y reportes estratégicos: resumen de ventas del día/mes, stock crítico con semáforo preventivo (RN-06), alerta de productos próximos a vencer y ranking de artículos con mayor rotación (`HU-DASH-01`, `HU-DASH-03`, `HU-REP-01`, `HU-REP-02`, `HU-REP-05`, `HU-PROD-06`).
- **Fecha Objetivo y Presentación:** Martes 27 de octubre de 2026 (Semana 9 del calendario académico).
- **Presupuesto Asignado:** S/ 7,500.00 (2 semanas × S/ 625/semana × 6 desarrolladores).
- **Riesgos Principales y Mitigación:**
  - *Acoplamiento en la recepción de mercadería (`HU-SOL-05`, 8 pts):* Se implementa recepción contra orden aprobada asegurando la actualización atómica del almacén y del costo promedio.
  - *Carga de verificación balanceada:* Des.4 Alcalde asume 30.75 h de testing, distribuyendo el resto de verificaciones entre los demás miembros del equipo bajo el principio de segregación `Construye ≠ Verifica`.

---

### REL-3: Release 3 (Mejoras, Supervisión y Exportación)
- **Objetivo Estratégico:** Optimizar la experiencia de uso y robustecer el sistema con capacidades de supervisión de accesos, edición y mantenimiento avanzado de registros maestros, lector óptico de código de barras para agilización del POS, generación de comprobantes y reportes analíticos descargables en PDF, y análisis detallado de márgenes de ganancia por producto.
- **Alcance Funcional:** 27 Historias de Usuario (22 Should have + 5 Could have), sumando 72 puntos de historia ejecutados en el Sprint 3.
- **Esfuerzo Operativo Asociado:** 144.0 horas de trabajo efectivo distribuidas en 135 tareas técnicas (85.75 h de construcción y 58.25 h de verificación QA independiente).
- **Criterios de Salida (Definition of Done del Release):**
  1. Registro inmutable de supervisión para eventos de autenticación exitosos y fallidos (`HU-LOG-01`).
  2. Gestión de perfil personal, edición de catálogos y reactivación de empleados suspendidos (`HU-AUTH-06`, `HU-CAT-03`, `HU-CAT-04`, `HU-CLI-01`, `HU-CLI-03`, `HU-PROD-04`, `HU-PROD-05`, `HU-PROV-03`, `HU-USR-03`, `HU-USR-05`).
  3. Agilización del punto de venta y catálogo mediante integración con lector óptico de código de barras (`HU-VEN-04`, `HU-PROD-03`).
  4. Trazabilidad histórica completa de movimientos de almacén: entradas, bajas por merma y ajustes físicos (`HU-INV-04`, `HU-INV-05`, `HU-INV-06`).
  5. Descarga e impresión de comprobantes de pago en PDF y reenvío por correo electrónico (`HU-VEN-03`), junto con la especificación para exportación del historial a formato estructurado (`HU-VEN-08`).
  6. Suite analítica completa: ventas por medio de pago, evolución diaria de ventas, rentabilidad/margen por producto, análisis de mermas por causa y exportación general de reportes en PDF (`HU-DASH-02`, `HU-DASH-04`, `HU-DASH-05`, `HU-REP-03`, `HU-REP-04`, `HU-REP-06`, `HU-REP-07`, `HU-REP-08`, `HU-REP-09`).
  7. Aprobación del 100 % de los criterios de aceptación y entrega de la solución final consolidada.
- **Fecha Objetivo y Presentación:** Martes 10 de noviembre de 2026 (Semana 11 del calendario académico).
- **Presupuesto Asignado:** S/ 7,500.00 (2 semanas × S/ 625/semana × 6 desarrolladores).
- **Riesgos Principales y Mitigación:**
  - *Fragmentación de tareas por alto número de historias (27 HU):* Al tratarse de historias focalizadas (media de 2.67 pts/HU), se aplica un flujo continuo de verificación funcional inmediata al concluir la construcción de cada funcionalidad.

---

## 3. Resumen por Release y Sprint

| Release | Sprint Asociado | Semanas de Ejecución | HUs Planificadas | Puntos Totales | Must have (pts) | Should have (pts) | Could have (pts) | Horas Tareas (Doc 07) | Fecha de Entrega / Review | Presupuesto Total |
|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|
| **REL-1** *(MVP)* | **Sprint 1** | Semanas 5 a 7 | 20 | 89 | 89 | 0 | 0 | 178.0 h | Mar 13-oct (Semana 7) | S/ 7,500.00 |
| **REL-2** | **Sprint 2** | Semanas 7 a 9 | 25 | 90 | 64 | 26 | 0 | 180.0 h | Mar 27-oct (Semana 9) | S/ 7,500.00 |
| **REL-3** | **Sprint 3** | Semanas 9 a 11 | 27 | 72 | 0 | 58 | 14 | 144.0 h | Mar 10-nov (Semana 11) | S/ 7,500.00 |
| **TOTAL** | **3 Sprints** | **6 Semanas** | **72** | **251** | **153** | **84** | **14** | **502.0 h** | **Ciclo Académico** | **S/ 22,500.00** |