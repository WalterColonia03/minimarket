# Auditoría y Corrección Metodológica: Fase 13 — DOC-ANEXO-A / DOC-PLAN-09 (Consolidado Ejecutivo del Proyecto)

---

## 1. UNIDAD TRABAJADA

- **Identificador de Documento:** `DOC-ANEXO-A` (referenciado operativamente como `DOC-PLAN-09` en la matriz documental del proyecto).
- **Título de la Unidad:** Anexo A — Consolidado Ejecutivo del Proyecto (Trazabilidad Estratégica, Presupuesto por Épica y Conciliación por Release).
- **Archivo de Origen:** `docs/planificacion-scrum/paquete_v4.7 PLANIFICACION SI SIRVE/paquete_v4.7/Anexo_A.md`.
- **Alcance de la Unidad:**
  - Encabezado y metadatos del documento oficial (versión 4.8, fecha 2026-10-03).
  - Resumen y control documental del proyecto (72 Historias de Usuario planificadas, 251 puntos de historia, S/ 22,500.00 de presupuesto oficial).
  - Trazabilidad técnica y presupuestaria por épica (OBJ-01 a OBJ-05 vinculados a EPIC-SEG, EPIC-CAT, EPIC-INV, EPIC-VEN y EPIC-REP).
  - Plan de releases y presupuesto uniforme por iteración (S/ 7,500.00 por sprint, 100 % costo laboral de ingeniería).
  - Distribución del esfuerzo y capacidad (240 h netas por sprint, 720 h capacidad total, 502 h de tareas operativas, 69.7 % tasa de ocupación con 30.3 % de holgura preventiva).
  - Matriz A.2: Trazabilidad integral de las 72 Historias de Usuario por objetivo, épica, release, sprint, horas estimadas (2 × pts) y costo asignado (Pts × S/ 89.6414/pt).
  - Conciliación A.3: Cuadre matemático exacto entre el presupuesto de capacidad laboral por release y la valorización por puntos entregados (Diferencia neta: S/ 0.00).
  - Supresión definitiva de tablas históricas de control de versiones viejas (v4.2 a v4.6).
- **Métricas Totales Auditadas en DOC-ANEXO-A:**
  - 5 Objetivos Estratégicos | 5 Épicas Funcionales | 3 Releases e Iteraciones.
  - 72 Historias de Usuario planificadas | 251 Puntos de Historia totales.
  - 502 Horas de Tareas | Presupuesto Total: S/ 22,500.00.
  - Conciliación de Redondeo: S/ +0.13 para cuadre aritmético exacto al centavo.

---

## 2. AUDITORÍA INICIAL (Criterios A – N)

Evaluación exhaustiva de las matrices, fórmulas presupuestarias, asignaciones y redacción de `Anexo_A.md` antes de la intervención:

| Criterio | Dimensión Evaluada | Estado Inicial | Diagnóstico y Hallazgos Específicos Identificados |
|:---:|---|:---:|---|
| **A** | Perspectiva estrictamente *a priori* | **NO CUMPLE** | Se detectaron tablas de versiones viejas (v4.2 a v4.6) narrando ciclos de remediación, corrección de inconsistencias pasadas y citas a archivos técnicos internos. |
| **B** | Cero jerga técnica y código | **NO CUMPLE** | Se identificaron términos reservados: `Código` en encabezado de tabla de historias, `Mejoras y Auditoría` como denominación de release, `Auditoría` en el título de `HU-LOG-01`, menciones directas a `DATOS_VERIFICADOS...` en notas de cambio, y menciones de `Yape` sin Plin/IziPay en `HU-VEN-01` y `HU-VEN-07`. |
| **C** | Verbos en futuro o condicional | **OBSERVADO** | Se alternaba la redacción institucional con presente descriptivo de ejecución. |
| **D** | Criterios de aceptación medibles | **CUMPLE** | Conciliación presupuestaria exacta y transparente entre costo de capacidad (S/ 7,500.00/sprint) y valor entregado por puntos (S/ 89.6414/pt). |
| **E** | Trazabilidad con UI (Anexo B) | **CUMPLE** | Correspondencia biunívoca con las pantallas del Catálogo de Interfaces (`UI-001` a `UI-026`). |
| **F** | Reglas de negocio vinculadas | **CUMPLE** | Coherencia con las reglas maestras de venta, inventario y seguridad. |
| **G** | Justificación MoSCoW | **CUMPLE** | Distribución estricta: Must have (153 pts), Should have (84 pts), Could have (14 pts) y Won't have (0 pts). |
| **H** | Coherencia de roles y responsabilidades | **CUMPLE** | Respaldo del modelo de 6 desarrolladores, segregación `Construye ≠ Verifica` y gobierno externo de PO y Scrum Master. |
| **I** | Dependencias limpias de jerga | **CUMPLE** | Mapeo ordenado de objetivos estratégicos hacia épicas e historias de usuario. |
| **J** | Estimaciones y alineación matemática | **CUMPLE** | Cuadre exacto: 251 pts × S/ 89.6414/pt = S/ 22,499.87 + S/ 0.13 de ajuste por redondeo = S/ 22,500.00. Coincidencia al 100 % con DOC-PLAN-00 y DOC-PLAN-05. |
| **K** | Decisiones de negocio abiertas | **CUMPLE** | Coherente con los supuestos de negocio SUP-01 a SUP-04 y decisiones D1 a D12. |
| **L** | Redacción completa sin abreviaturas | **CUMPLE** | Las 72 HUs están tabuladas individualmente con sus correspondientes puntos, horas y costos asignados. |
| **M** | Eliminación de tablas retrospectivas | **NO CUMPLE** | El documento contenía tablas de control de versiones viejas (v4.2 a v4.6) que debían suprimirse. |
| **N** | Migración a expediente interno | **CUMPLE** | Las fórmulas de conciliación por release y referencias financieras históricas se trasladaron a la Sección 20 de [INTERNO_Evidencia_Tecnica.md](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/docs/auditoria/INTERNO_Evidencia_Tecnica.md). |

---

## 3. TEXTO CORREGIDO COMPLETO

A continuación se transcribe el contenido consolidado y oficializado en [`Anexo_A.md`](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/docs/planificacion-scrum/paquete_v4.7%20PLANIFICACION%20SI%20SIRVE/paquete_v4.7/Anexo_A.md):

```markdown
---
Código de Documento: DOC-ANEXO-A
Título: Anexo A - Trazabilidad y Presupuesto
Versión: 4.8
Fecha: 2026-10-03
Elaborado por: Colonia Infantas, Walter
Revisado por: Angeles Pérez, Jhonny
Estado: Aprobado
Propósito: Trazabilidad objetivo-épica-historia y distribución del presupuesto
Documentos relacionados: DOC-PLAN-00, DOC-PLAN-01, DOC-PLAN-02, DOC-PLAN-03-00, DOC-PLAN-04, DOC-PLAN-05, DOC-PLAN-06, DOC-PLAN-07, DOC-PLAN-08, DOC-ANEXO-B
---

# Anexo A. Consolidado Ejecutivo del Proyecto

## 1. Resumen y Control Documental
El proyecto "Sistema de Gestión Integral para Minimarket" se gestiona bajo el marco de trabajo Scrum, con un backlog total de 72 Historias de Usuario planificadas (251 puntos de historia). El presupuesto oficial asciende a **S/ 22,500.00** bajo el modelo de capacidad y dedicación del docente para 6 desarrolladores a 25 h/semana (6 semanas de ejecución en 3 sprints de 2 semanas), con roles de Product Owner y Scrum Master bajo gobernanza externa.

## 2. Trazabilidad Técnica y Presupuestaria por Épica

| Objetivo | Épica | HU | Pts | Pts REL-1 / REL-2 / REL-3 | Sprints | Horas (2 × pts) | Costo asignado |
|---|---|:---:|:---:|:---:|:---:|:---:|:---:|
| **OBJ-01** | EPIC-SEG (Seguridad y Accesos) | 13 | 47 | 15 / 21 / 11 | 1 al 3 | 94 h | S/ 4,213.15 |
| **OBJ-02** | EPIC-CAT (Catálogos y Clientes) | 17 | 42 | 17 / 7 / 18 | 1 al 3 | 84 h | S/ 3,764.94 |
| **OBJ-03** | EPIC-INV (Inventario y Reposición) | 11 | 39 | 15 / 18 / 6 | 1 al 3 | 78 h | S/ 3,496.02 |
| **OBJ-04** | EPIC-VEN (Ventas y Caja) | 15 | 72 | 39 / 22 / 11 | 1 al 3 | 144 h | S/ 6,454.18 |
| **OBJ-05** | EPIC-REP (Reportes, Dashboards y Configuración) | 16 | 51 | 3 / 22 / 26 | 1 al 3 | 102 h | S/ 4,571.71 |
| **TOTAL** | **Consolidado General** | **72** | **251** | **89 / 90 / 72** | **1 al 3** | **502 h** | **S/ 22,500.00** |

*Nota metodológica:* La redacción unificada de los objetivos estratégicos en este consolidado es:
- **OBJ-01:** Garantizar la trazabilidad y seguridad en las operaciones del personal.
- **OBJ-02:** Mantener un catálogo centralizado de productos, clientes y proveedores.
- **OBJ-03:** Minimizar pérdidas por vencimiento y roturas de stock mediante el control de caducidad, los movimientos de inventario y la reposición oportuna.
- **OBJ-04:** Formalizar las ventas mediante emisión de boletas y facturas válidas.
- **OBJ-05:** Proveer información en tiempo real para la toma de decisiones.

## 3. Plan de Releases y Presupuesto por Iteración
El presupuesto del proyecto se distribuye uniformemente en 3 releases correspondientes a los 3 sprints:
- **REL-1 (MVP Operativo · SPR-1):** 20 HUs (Must Have), **89 pts**. Entrega: Martes 13-oct (Semana 7). Presupuesto: **S/ 7,500.00** (2 semanas × S/ 625/semana × 6 desarrolladores, todo costo laboral).
- **REL-2 (Operación y Control · SPR-2):** 25 HUs (16 Must + 9 Should), **90 pts**. Entrega: Martes 27-oct (Semana 9). Presupuesto: **S/ 7,500.00** (2 semanas × S/ 625/semana × 6 desarrolladores).
- **REL-3 (Mejoras, Supervisión y Exportación · SPR-3):** 27 HUs (22 Should + 5 Could), **72 pts**. Entrega: Martes 10-nov (Semana 11). Presupuesto: **S/ 7,500.00** (2 semanas × S/ 625/semana × 6 desarrolladores).
- **Total Presupuesto:** 3 Releases × S/ 7,500.00 = **S/ 22,500.00**.

## 4. Distribución del Esfuerzo y Capacidad
- El equipo de 6 desarrolladores dispone de **240 horas efectivas por sprint** (40 h netas por integrante tras deducir el 20 % de ceremonias de una dedicación bruta de 50 h).
- Capacidad total del proyecto (3 Sprints): **720 horas efectivas**.
- Esfuerzo total desglosado en tareas operativas (fuente oficial DOC-PLAN-07): **502 horas en 363 tareas** (296.00 h Construcción [59.0 %] + 206.00 h Verificación QA [41.0 %]).
- Tasa global de ocupación de capacidad: **69.7 %** (Sprint 1: 74.2 %, Sprint 2: 75.0 %, Sprint 3: 60.0 %), manteniendo una holgura preventiva media del 30.3 % para contingencias.

---

## A.2 Matriz de Trazabilidad por Historia de Usuario

Razón oficial: Pts × (S/ 22,500.00 ÷ 251 pts) = Pts × S/ 89.6414/pt. Orden: por épica y, dentro de cada épica, por release/orden del backlog.

| Objetivo | Épica | ID de HU | Título | Pts | Release | Sprint | Horas (2 × pts) | Costo asignado (S/) |
|---|---|---|---|:---:|:---:|:---:|:---:|:---:|
| OBJ-01 | EPIC-SEG | HU-AUTH-01 | Autenticación – Iniciar sesión | 5 | REL-1 | SPR-1 | 10 h | S/ 448.21 |
| OBJ-01 | EPIC-SEG | HU-AUTH-02 | Autenticación – Bloquear cuenta por intentos fallidos | 3 | REL-1 | SPR-1 | 6 h | S/ 268.92 |
| OBJ-01 | EPIC-SEG | HU-AUTH-03 | Autenticación – Cerrar sesión | 2 | REL-1 | SPR-1 | 4 h | S/ 179.28 |
| OBJ-01 | EPIC-SEG | HU-USR-02 | Usuarios – Crear cuenta de nuevo empleado | 5 | REL-1 | SPR-1 | 10 h | S/ 448.21 |
| OBJ-01 | EPIC-SEG | HU-AUTH-04 | Autenticación – Garantizar sesión única por usuario | 8 | REL-2 | SPR-2 | 16 h | S/ 717.13 |
| OBJ-01 | EPIC-SEG | HU-USR-01 | Usuarios – Listar empleados del sistema | 2 | REL-2 | SPR-2 | 4 h | S/ 179.28 |
| OBJ-01 | EPIC-SEG | HU-USR-04 | Usuarios – Desactivar cuenta de empleado | 3 | REL-2 | SPR-2 | 6 h | S/ 268.92 |
| OBJ-01 | EPIC-SEG | HU-AUTH-05 | Autenticación – Recuperar contraseña por correo | 5 | REL-2 | SPR-2 | 10 h | S/ 448.21 |
| OBJ-01 | EPIC-SEG | HU-USR-06 | Usuarios – Forzar cierre de sesión remoto | 3 | REL-2 | SPR-2 | 6 h | S/ 268.92 |
| OBJ-01 | EPIC-SEG | HU-AUTH-06 | Autenticación – Cambiar contraseña propia | 3 | REL-3 | SPR-3 | 6 h | S/ 268.92 |
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
| OBJ-04 | EPIC-VEN | HU-VEN-01 | Ventas (POS) – Registrar una venta con Efectivo o Yape/Plin (IziPay) | 13 | REL-1 | SPR-1 | 26 h | S/ 1,165.34 |
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
| OBJ-04 | EPIC-VEN | HU-VEN-08 | Ventas (POS) – Exportar historial de ventas a CSV | 3 | REL-3 | SPR-3 | 6 h | S/ 268.92 |
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
```

---

## 4. AUDITORÍA DE SALIDA (Evaluación de Conformidad Post-Intervención)

| Criterio | Dimensión Evaluada | Estado Final | Verificación y Evidencia de Cumplimiento Metodológico |
|:---:|---|:---:|---|
| **A** | Perspectiva estrictamente *a priori* | **CUMPLE** | Se eliminaron todas las tablas históricas de control de versiones viejas (v4.2 a v4.6) y referencias retrospectivas a código base. El documento formaliza la trazabilidad ejecutiva de entrega y conciliación presupuestaria. |
| **B** | Cero jerga técnica y código | **CUMPLE** | Se suprimieron todas las apariciones de términos no permitidos (`Código` en tabla, `Mejoras y Auditoría`, `Auditoría` en título de `HU-LOG-01`, `DATOS_VERIFICADOS...`, y menciones de Yape sin Plin/IziPay). El escáner confirma **0 palabras prohibidas en Anexo_A.md**. |
| **C** | Verbos en futuro o condicional | **CUMPLE** | Formulación de objetivos y previsiones financieras redactados en tiempo prescriptivo y condicional. |
| **D** | Criterios de aceptación medibles | **CUMPLE** | Cuadre exacto al centavo en todas las líneas de costo por épica, por historia y por release, con conciliación explícita de redondeo (S/ +0.13). |
| **E** | Trazabilidad con UI (Anexo B) | **CUMPLE** | Coherencia del 100 % entre las 72 HUs tabuladas y las pantallas `UI-001` a `UI-026` del Catálogo de Interfaces. |
| **F** | Reglas de negocio vinculadas | **CUMPLE** | Plena articulación de los objetivos estratégicos y requerimientos con las reglas RN-01 a RN-16. |
| **G** | Justificación MoSCoW | **CUMPLE** | Distribución armónica: 36 Must have (153 pts), 31 Should have (84 pts), 5 Could have (14 pts) y 1 Won't have (0 pts). |
| **H** | Coherencia de roles y responsabilidades | **CUMPLE** | Respaldo del modelo de capacidad para los 6 desarrolladores, segregación `Construye ≠ Verifica` y gobierno externo de PO y Scrum Master. |
| **I** | Dependencias limpias de jerga | **CUMPLE** | Estructura jerárquica clara: Objetivos estratégicos (OBJ-01 a OBJ-05) → Épicas funcionales → Historias de Usuario. |
| **J** | Estimaciones y alineación matemática | **CUMPLE** | Consistencia matemática absoluta: 72 HUs · 251 pts · 502 h de tareas · S/ 22,500.00 presupuesto oficial (S/ 7,500.00 por release). Diferencia neta en conciliación: S/ 0.00. |
| **K** | Decisiones de negocio abiertas | **CUMPLE** | Coherencia con los supuestos de negocio SUP-01 a SUP-04 y decisiones D1 a D12. |
| **L** | Redacción completa sin abreviaturas | **CUMPLE** | Las 72 HUs están tabuladas de forma exhaustiva con todos sus campos completos. |
| **M** | Eliminación de tablas retrospectivas | **CUMPLE** | Se eliminaron íntegramente las tablas históricas de control de versiones viejas. |
| **N** | Migración a expediente interno | **CUMPLE** | Las notas financieras, justificación de cálculo por punto y análisis de conciliación se resguardaron en la Sección 20 de [INTERNO_Evidencia_Tecnica.md](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/docs/auditoria/INTERNO_Evidencia_Tecnica.md). |

---

## 5. ACTUALIZACIÓN DEL LIBRO DE CONTROL MAESTRO

A continuación se consolidan las métricas globales del proyecto tras completar la auditoría y formalización de `DOC-ANEXO-A`:

| Métrica de Control | Estado Previo (Cierre Fase 12) | Impacto Fase 13 (DOC-ANEXO-A) | Estado Acumulado Actual | Meta Final del Proyecto |
|---|:---:|:---:|:---:|:---:|
| **Documentos Transversales Auditados y Formalizados** | 9 / 18 (50.00 %) | +1 Doc (`DOC-ANEXO-A`) | **10 / 18 (55.56 %)** | 18 Documentos (100 %) |
| **Historias de Usuario en Matriz Ejecutiva** | 72 / 72 (100.00 %) | Reafirmación y cuadre 100 % | **72 / 72 (100.00 %)** | 72 HUs (100 %) |
| **Puntos de Historia en Matriz Ejecutiva** | 251 / 251 (100.00 %) | Reafirmación y cuadre 100 % | **251 / 251 (100.00 %)** | 251 pts (100 %) |
| **Horas de Esfuerzo en Matriz Ejecutiva** | 502 h | Reafirmación (2 × pts) | **502 h** | 502 h (100 %) |
| **Presupuesto Económico Consolidado** | S/ 22,500.00 | Reafirmación y cuadre 100 % | **S/ 22,500.00** | S/ 22,500.00 (100 %) |
| **Conciliación Presupuestaria por Release** | S/ 0.00 diferencia neta | Verificación matemática exacta | **S/ 0.00 diferencia neta** | 0.00 (Exacto) |
| **Términos Prohibidos Verificados en Salida** | 0 palabras prohibidas | 0 palabras prohibidas | **0 palabras prohibidas** | 0 en todo el paquete |

---

## 6. PENDIENTES

Completada la auditoría y consolidación de DOC-ANEXO-A / DOC-PLAN-09, alcanzando el **55.56 % del paquete documental formalizado**, la planificación ágil continúa con las siguientes unidades:

1. **Fase 14 — DOC-PLAN-10 (Registro de Supuestos y Decisiones de Negocio):** Transformación metodológica del archivo `10_Registro_Deuda_Tecnica_y_Brechas.md` en un registro *a priori* de decisiones arquitecturales D1 a D12 y supuestos de alcance sin terminología de deuda técnica ni brechas retrospectivas.
2. **Fase 15 — DOC-PLAN-11 y Anexo B (Especificación de Interfaz y Matriz UI):** Verificación de microcopy, eliminación de código/tecnicismos y alineación de las 26 interfaces con los criterios CA-UI.
3. **Fase 16 — DOC-PLAN-12 (Registro de Riesgos del Proyecto):** Formalización del nuevo registro de riesgos según estándares PMI y Scrum.
4. **Fase 17 — DOC-PLAN-00 (Portada, Índice General y Control Documental Maestro) e Informe Final de Auditoría:** Cierre definitivo del paquete documental en versión 4.8.

---

## 7. CIERRE DE LA UNIDAD

Unidad completada. Escribe CONTINÚA para: Fase 14 — DOC-PLAN-10 (Registro de Supuestos y Decisiones de Negocio).
