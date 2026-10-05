---
Código de Documento: DOC-ANEXO-A
Título: Anexo A - Trazabilidad y Presupuesto
Versión: 5.2
Fecha: 2026-10-04
Elaborado por: Colonia Infantas, Walter
Revisado por: Angeles Pérez, Jhonny
Estado: Aprobado
Propósito: Trazabilidad objetivo-épica-historia y distribución del presupuesto
Documentos relacionados: DOC-PLAN-00, DOC-PLAN-01, DOC-PLAN-02, DOC-PLAN-03-00, DOC-PLAN-04, DOC-PLAN-05, DOC-PLAN-06, DOC-PLAN-07, DOC-PLAN-08, DOC-ANEXO-B
---

# Anexo A. Consolidado Ejecutivo del Proyecto

## 1. Resumen y Control Documental
El proyecto "Sistema de Gestión Integral para Minimarket" se gestiona bajo el marco de trabajo Scrum, con un backlog total de 74 Historias de Usuario planificadas (251 puntos de historia). El presupuesto oficial asciende a **S/ 22,500.00** bajo el modelo de capacidad y dedicación del docente para 6 desarrolladores a 25 h/semana (6 semanas de ejecución en 3 sprints de 2 semanas), con roles de Product Owner y Scrum Master bajo gobernanza externa.

## 2. Trazabilidad Técnica y Presupuestaria por Épica

| Objetivo | Épica | HU | Pts | Pts REL-1 / REL-2 / REL-3 | Sprints | Horas (2 × pts) | Costo asignado |
|---|---|:---:|:---:|:---:|:---:|:---:|:---:|
| **OBJ-01** | EPIC-SEG (Seguridad y Accesos) | 13 | 47 | 15 / 21 / 11 | 1 al 3 | 94 h | S/ 4,213.15 |
| **OBJ-02** | EPIC-CAT (Catálogos y Clientes) | 17 | 42 | 17 / 7 / 18 | 1 al 3 | 84 h | S/ 3,764.94 |
| **OBJ-03** | EPIC-INV (Inventario y Reposición) | 11 | 39 | 15 / 18 / 6 | 1 al 3 | 78 h | S/ 3,496.02 |
| **OBJ-04** | EPIC-VEN (Ventas y Caja) | 17 | 72 | 39 / 22 / 11 | 1 al 3 | 144 h | S/ 6,454.18 |
| **OBJ-05** | EPIC-REP (Reportes, Dashboards y Configuración) | 16 | 51 | 3 / 22 / 26 | 1 al 3 | 102 h | S/ 4,571.71 |
| **TOTAL** | **Consolidado General** | **74** | **251** | **89 / 90 / 72** | **1 al 3** | **502 h** | **S/ 22,500.00** |

*Nota metodológica:* La redacción unificada de los objetivos estratégicos en este consolidado es:
- **OBJ-01:** Garantizar la trazabilidad y seguridad en las operaciones del personal.
- **OBJ-02:** Mantener un catálogo centralizado de productos, clientes y proveedores.
- **OBJ-03:** Minimizar pérdidas por vencimiento y roturas de stock mediante el control de caducidad, los movimientos de inventario y la reposición oportuna.
- **OBJ-04:** Formalizar las ventas mediante emisión de boletas y facturas válidas.
- **OBJ-05:** Proveer información en tiempo real para la toma de decisiones.

## 3. Plan de Releases y Presupuesto por Iteración
El presupuesto del proyecto se distribuye uniformemente en 3 releases correspondientes a los 3 sprints:
- **REL-1 (MVP Operativo · SPR-1):** 22 HUs (Must Have), **89 pts**. Entrega: Martes 13-oct (Semana 7). Presupuesto: **S/ 7,500.00** (2 semanas × S/ 625/semana × 6 desarrolladores, todo costo laboral).
- **REL-2 (Operación y Control · SPR-2):** 25 HUs (16 Must + 9 Should), **90 pts**. Entrega: Martes 27-oct (Semana 9). Presupuesto: **S/ 7,500.00** (2 semanas × S/ 625/semana × 6 desarrolladores).
- **REL-3 (Mejoras, Supervisión y Exportación · SPR-3):** 27 HUs (22 Should + 5 Could), **72 pts**. Entrega: Martes 10-nov (Semana 11). Presupuesto: **S/ 7,500.00** (2 semanas × S/ 625/semana × 6 desarrolladores).
- **Total Presupuesto:** 3 Releases × S/ 7,500.00 = **S/ 22,500.00**.

## 4. Distribución del Esfuerzo y Capacidad
- El equipo de 6 desarrolladores dispone de **240 horas efectivas por sprint** (40 h netas por integrante tras deducir el 20 % de ceremonias de una dedicación bruta de 50 h).
- Capacidad total del proyecto (3 Sprints): **720 horas efectivas**.
- Esfuerzo total desglosado en tareas operativas (fuente oficial DOC-PLAN-07): **502 horas en 373 tareas** (296.00 h Construcción [59.0 %] + 206.00 h Verificación QA [41.0 %]).
- Tasa global de ocupación de capacidad: **69.7 %** (Sprint 1: 74.2 %, Sprint 2: 75.0 %, Sprint 3: 60.0 %), manteniendo una holgura preventiva media del 30.3 % para contingencias.

---

## A.2 Matriz de Trazabilidad por Historia de Usuario

Razón oficial: Pts × (S/ 22,500.00 ÷ 251 pts) = Pts × S/ 89.6414/pt. Orden: por épica y, dentro de cada épica, por release/orden del backlog.

| Objetivo | Épica | ID de HU | Título | Pts | Release | Sprint | Horas (2 × pts) | Costo asignado (S/) |
|---|---|---|---|:---:|:---:|:---:|:---:|:---:|
| OBJ-01 | EPIC-SEG | HU-AUTH-01 | Autenticación – Iniciar sesión | 5 | REL-1 | SPR-1 | 10 h | S/ 448.21 |
| OBJ-01 | EPIC-SEG | HU-AUTH-02 | Autenticación – Bloquear cuenta por  | 3 | REL-1 | SPR-1 | 6 h | S/ 268.92 |
| OBJ-01 | EPIC-SEG | HU-AUTH-03 | Autenticación – Cerrar sesión | 2 | REL-1 | SPR-1 | 4 h | S/ 179.28 |
| OBJ-01 | EPIC-SEG | HU-USR-02 | Usuarios – Crear cuenta de nuevo empleado | 5 | REL-1 | SPR-1 | 10 h | S/ 448.21 |
| OBJ-01 | EPIC-SEG | HU-AUTH-04 | Autenticación – Garantizar sesión única por usuario | 8 | REL-2 | SPR-2 | 16 h | S/ 717.13 |
| OBJ-01 | EPIC-SEG | HU-USR-01 | Usuarios – Listar empleados del sistema | 2 | REL-2 | SPR-2 | 4 h | S/ 179.28 |
| OBJ-01 | EPIC-SEG | HU-USR-04 | Usuarios – Desactivar cuenta de empleado | 3 | REL-2 | SPR-2 | 6 h | S/ 268.92 |
| OBJ-01 | EPIC-SEG | HU-AUTH-05 | Autenticación – Recuperar contraseña por correo | 5 | REL-2 | SPR-2 | 10 h | S/ 448.21 |
| OBJ-01 | EPIC-SEG | HU-USR-06 | Usuarios – Forzar cierre de sesión remoto | 3 | REL-2 | SPR-2 | 6 h | S/ 268.92 |
| OBJ-01 | EPIC-SEG | HU-AUTH-06 (Cancelada) | Autenticación – Cambiar contraseña propia | 3 | REL-3 | SPR-3 | 6 h | S/ 268.92 |
| OBJ-01 | EPIC-SEG | HU-USR-03 | Usuarios – Editar datos de un empleado | 3 | REL-3 | SPR-3 | 6 h | S/ 268.92 |
| OBJ-01 | EPIC-SEG | HU-USR-05 | Usuarios – Reactivar cuenta de empleado | 2 | REL-3 | SPR-3 | 4 h | S/ 179.28 |
| OBJ-01 | EPIC-SEG | HU-LOG-01 | Trazabilidad – Consultar registro de accesos al sistema | 3 | REL-3 | SPR-3 | 6 h | S/ 268.92 |
| OBJ-02 | EPIC-CAT | HU-CAT-02 | Categorías – Crear nueva categoría de productos | 2 | REL-1 | SPR-1 | 4 h | S/ 179.28 |
| OBJ-02 | EPIC-CAT | HU-CAT-01 | Categorías – Ver lista de categorías de productos | 1 | REL-1 | SPR-1 | 2 h | S/ 89.64 |
| OBJ-02 | EPIC-CAT | HU-PROD-02 | Productos – Registrar nuevo producto en el catálogo | 5 | REL-1 | SPR-1 | 10 h | S/ 448.21 |
| OBJ-02 | EPIC-CAT | HU-PROD-01 | Productos – Ver catálogo completo de productos | 3 | REL-1 | SPR-1 | 6 h | S/ 268.92 |
| OBJ-02 | EPIC-CAT | HU-PROV-02 | Proveedores – Registrar nuevo proveedor | 3 | REL-1 | SPR-1 | 6 h | S/ 268.92 |
| OBJ-02 | EPIC-CAT | HU-CLI-02 | Clientes – Registrar cliente automáticamente al vender | 3 | REL-1 | SPR-1 | 6 h | S/ 268.92 |
| OBJ-02 | EPIC-CAT | HU-PROD-06 | Productos – Consultar productos próximos a vencer | 3 | REL-2 | SPR-2 | 6 h | S/ 268.92 |
| OBJ-02 | EPIC-CAT | HU-PROV-01 | Proveedores – Ver lista de proveedores | 2 | REL-2 | SPR-2 | 4 h | S/ 179.28 |
| OBJ-02 | EPIC-CAT | HU-PROV-04 | Proveedores – Desactivar o reactivar proveedor | 2 | REL-2 | SPR-2 | 4 h | S/ 179.28 |
| OBJ-02 | EPIC-CAT | HU-CAT-03 | Categorías – Editar nombre de categoría | 1 | REL-3 | SPR-3 | 2 h | S/ 89.64 |
| OBJ-02 | EPIC-CAT | HU-CLI-01 | Clientes – Listar clientes registrados | 2 | REL-3 | SPR-3 | 4 h | S/ 179.28 |
| OBJ-02 | EPIC-CAT | HU-PROD-04 | Productos – Editar datos de un producto | 3 | REL-3 | SPR-3 | 6 h | S/ 268.92 |
| OBJ-02 | EPIC-CAT | HU-PROD-05 | Productos – Desactivar o reactivar producto | 2 | REL-3 | SPR-3 | 4 h | S/ 179.28 |
| OBJ-02 | EPIC-CAT | HU-PROV-03 | Proveedores – Editar datos de un proveedor | 2 | REL-3 | SPR-3 | 4 h | S/ 179.28 |
| OBJ-02 | EPIC-CAT | HU-CAT-04 | Categorías – Eliminar categoría sin productos | 2 | REL-3 | SPR-3 | 4 h | S/ 179.28 |
| OBJ-02 | EPIC-CAT | HU-CLI-03 | Clientes – Editar correo electrónico de cliente | 1 | REL-3 | SPR-3 | 2 h | S/ 89.64 |
| OBJ-02 | EPIC-CAT | HU-PROD-03 | Productos – Escanear código de barras para registrar producto | 5 | REL-3 | SPR-3 | 10 h | S/ 448.21 |
| OBJ-03 | EPIC-INV | HU-INV-01 | Inventario – Registrar entrada de mercadería | 5 | REL-1 | SPR-1 | 10 h | S/ 448.21 |
| OBJ-03 | EPIC-INV | HU-INV-02 | Inventario – Registrar baja de inventario por merma | 5 | REL-1 | SPR-1 | 10 h | S/ 448.21 |
| OBJ-03 | EPIC-INV | HU-INV-03 | Inventario – Realizar ajuste por conteo físico | 5 | REL-1 | SPR-1 | 10 h | S/ 448.21 |
| OBJ-03 | EPIC-INV | HU-SOL-01 | Reposición – Crear solicitud de reposición | 3 | REL-2 | SPR-2 | 6 h | S/ 268.92 |
| OBJ-03 | EPIC-INV | HU-SOL-02 | Reposición – Listar solicitudes con filtro por estado | 2 | REL-2 | SPR-2 | 4 h | S/ 179.28 |
| OBJ-03 | EPIC-INV | HU-SOL-03 | Reposición – Aprobar solicitud de reposición | 3 | REL-2 | SPR-2 | 6 h | S/ 268.92 |
| OBJ-03 | EPIC-INV | HU-SOL-05 | Reposición – Completar solicitud al recibir mercadería | 8 | REL-2 | SPR-2 | 16 h | S/ 717.13 |
| OBJ-03 | EPIC-INV | HU-SOL-04 | Reposición – Rechazar solicitud de reposición | 2 | REL-2 | SPR-2 | 4 h | S/ 179.28 |
| OBJ-03 | EPIC-INV | HU-INV-04 | Inventario – Consultar historial de entradas | 2 | REL-3 | SPR-3 | 4 h | S/ 179.28 |
| OBJ-03 | EPIC-INV | HU-INV-05 | Inventario – Consultar historial de bajas | 2 | REL-3 | SPR-3 | 4 h | S/ 179.28 |
| OBJ-03 | EPIC-INV | HU-INV-06 | Inventario – Consultar historial de ajustes | 2 | REL-3 | SPR-3 | 4 h | S/ 179.28 |
| OBJ-04 | EPIC-VEN | HU-CAJA-01 | Caja – Abrir turno de caja | 5 | REL-1 | SPR-1 | 10 h | S/ 448.21 |
| OBJ-04 | EPIC-VEN | HU-CAJA-02 | Caja – Cerrar turno de caja y cuadrar | 5 | REL-1 | SPR-1 | 10 h | S/ 448.21 |
| OBJ-04 | EPIC-VEN | HU-CAJA-05 | Caja – Consultar historial de turnos de caja | 3 | REL-1 | SPR-1 | 6 h | S/ 268.92 |
| OBJ-04 | EPIC-VEN | HU-VEN-01a | Ventas (POS) – Inicialización de terminal de venta y validación de turno | 3 | REL-1 | SPR-1 | 6 h | S/ 268.92 |
| OBJ-04 | EPIC-VEN | HU-VEN-01b | Ventas (POS) – Registro de líneas de venta y cobro en mostrador | 5 | REL-1 | SPR-1 | 10 h | S/ 448.21 |
| OBJ-04 | EPIC-VEN | HU-VEN-01c | Ventas (POS) – Despacho por expiración FEFO y descargo de lotes | 5 | REL-1 | SPR-1 | 10 h | S/ 448.21 |
| OBJ-04 | EPIC-VEN | HU-VEN-02 | Ventas (POS) – Emitir boleta o factura | 8 | REL-1 | SPR-1 | 16 h | S/ 717.13 |
| OBJ-04 | EPIC-VEN | HU-VEN-05 | Ventas (POS) – Consultar historial de ventas | 5 | REL-1 | SPR-1 | 10 h | S/ 448.21 |
| OBJ-04 | EPIC-VEN | HU-VEN-06 | Ventas (POS) – Anular una venta con devolución | 8 | REL-2 | SPR-2 | 16 h | S/ 717.13 |
| OBJ-04 | EPIC-VEN | HU-CAJA-03 | Caja – Registrar movimiento manual de efectivo | 3 | REL-2 | SPR-2 | 6 h | S/ 268.92 |
| OBJ-04 | EPIC-VEN | HU-CAJA-04 | Caja – Ver resumen del turno activo | 2 | REL-2 | SPR-2 | 4 h | S/ 179.28 |
| OBJ-04 | EPIC-VEN | HU-CAJA-06 | Caja – Aprobar cierre de turno | 2 | REL-2 | SPR-2 | 4 h | S/ 179.28 |
| OBJ-04 | EPIC-VEN | HU-CAJA-07 | Caja – Forzar cierre de turno ajeno | 5 | REL-2 | SPR-2 | 10 h | S/ 448.21 |
| OBJ-04 | EPIC-VEN | HU-VEN-07 | Ventas (POS) – Verificar recepción de pago Yape/Plin (IziPay) | 2 | REL-2 | SPR-2 | 4 h | S/ 179.28 |
| OBJ-04 | EPIC-VEN | HU-VEN-03 | Ventas (POS) – Generar comprobante en PDF o reenviar por correo electrónico | 5 | REL-3 | SPR-3 | 10 h | S/ 448.21 |
| OBJ-04 | EPIC-VEN | HU-VEN-04 | Ventas (POS) – Buscar producto por código de barras | 3 | REL-3 | SPR-3 | 6 h | S/ 268.92 |
| OBJ-04 | EPIC-VEN | HU-VEN-08 | Ventas (POS) – Exportar historial de ventas a PDF | 3 | REL-3 | SPR-3 | 6 h | S/ 268.92 |
| OBJ-05 | EPIC-REP | HU-CONF-02 | Configuración – Actualizar configuración del negocio | 3 | REL-1 | SPR-1 | 6 h | S/ 268.92 |
| OBJ-05 | EPIC-REP | HU-DASH-01 | Dashboard – Ver resumen de ventas del día y del mes | 5 | REL-2 | SPR-2 | 10 h | S/ 448.21 |
| OBJ-05 | EPIC-REP | HU-DASH-03 | Dashboard – Alertas de stock crítico, vencimientos y turnos olvidados | 5 | REL-2 | SPR-2 | 10 h | S/ 448.21 |
| OBJ-05 | EPIC-REP | HU-REP-01 | Reportes – Ver resumen de ventas por período | 5 | REL-2 | SPR-2 | 10 h | S/ 448.21 |
| OBJ-05 | EPIC-REP | HU-REP-02 | Reportes – Ver ranking de productos más vendidos | 3 | REL-2 | SPR-2 | 6 h | S/ 268.92 |
| OBJ-05 | EPIC-REP | HU-REP-05 | Reportes – Ver stock crítico | 3 | REL-2 | SPR-2 | 6 h | S/ 268.92 |
| OBJ-05 | EPIC-REP | HU-CONF-01 | Configuración – Ver configuración actual del negocio | 1 | REL-2 | SPR-2 | 2 h | S/ 89.64 |
| OBJ-05 | EPIC-REP | HU-DASH-02 | Dashboard – Ver gráfico de evolución de ventas por día | 3 | REL-3 | SPR-3 | 6 h | S/ 268.92 |
| OBJ-05 | EPIC-REP | HU-DASH-04 | Dashboard – Ver ranking de productos más vendidos | 3 | REL-3 | SPR-3 | 6 h | S/ 268.92 |
| OBJ-05 | EPIC-REP | HU-DASH-05 | Dashboard – Ver solicitudes de reposición pendientes | 2 | REL-3 | SPR-3 | 4 h | S/ 179.28 |
| OBJ-05 | EPIC-REP | HU-REP-03 | Reportes – Ver ventas desglosadas por día | 3 | REL-3 | SPR-3 | 6 h | S/ 268.92 |
| OBJ-05 | EPIC-REP | HU-REP-04 | Reportes – Ver ventas por método de pago | 2 | REL-3 | SPR-3 | 4 h | S/ 179.28 |
| OBJ-05 | EPIC-REP | HU-REP-06 | Reportes – Ver resumen general del inventario | 2 | REL-3 | SPR-3 | 4 h | S/ 179.28 |
| OBJ-05 | EPIC-REP | HU-REP-07 | Reportes – Ver margen de ganancia por producto | 5 | REL-3 | SPR-3 | 10 h | S/ 448.21 |
| OBJ-05 | EPIC-REP | HU-REP-08 | Reportes – Ver mermas agrupadas por motivo | 3 | REL-3 | SPR-3 | 6 h | S/ 268.92 |
| OBJ-05 | EPIC-REP | HU-REP-09 | Reportes – Exportar reportes en PDF | 3 | REL-3 | SPR-3 | 6 h | S/ 268.92 |
| — | — | — | **Ajuste por redondeo** | — | — | — | — | **S/ +0.13** |
| **TOTAL** | | | **72 HU** | **251** | **3 Releases** | **3 Sprints** | **502 h** | **S/ 22,500.00** |

## A.3 Conciliación entre el presupuesto por release y la asignación por historia

El presupuesto de cada release es **costo de capacidad** (2 semanas × S/ 625 × 6 desarrolladores = S/ 7,500.00), mientras que el costo asignado por historia es una **distribución por puntos** (Pts × S/ 89.6414). Ambas bases suman S/ 22,500.00, pero difieren por release porque la carga planificada por sprint (89 / 90 / 72 pts) no es uniforme:

| Release | Puntos | Asignación por puntos (S/) | Presupuesto del release (S/) | Diferencia (S/) |
|---|:---:|:---:|:---:|:---:|
| REL-1 (SPR-1) | 89 | 7,978.09 | 7,500.00 | +478.09 |
| REL-2 (SPR-2) | 90 | 8,067.73 | 7,500.00 | +567.73 |
| REL-3 (SPR-3) | 72 | 6,454.18 | 7,500.00 | -1,045.82 |
| **Total** | **251** | **22,500.00** | **22,500.00** | **0.00** |

*Lectura:* la diferencia del REL-3 corresponde a capacidad planificada no consumida (60.0 % de ocupación en el Sprint 3); el exceso de REL-1 y REL-2 es el valor entregado por encima del costo de capacidad del sprint.

---
