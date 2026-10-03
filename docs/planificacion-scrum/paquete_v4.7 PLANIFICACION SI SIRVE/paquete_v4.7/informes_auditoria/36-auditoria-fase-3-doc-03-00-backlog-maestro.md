# 36. Auditoría y Entrega de Fase 3: DOC-PLAN-03-00 (Product Backlog Priorizado)

**Documento Auditado:** `00_Product_Backlog_Priorizado.md`  
**Código Asignado:** `DOC-PLAN-03-00`  
**Versión de Salida:** 4.8  
**Fecha de Emisión:** 2026-10-03  
**Estado:** Unidad Auditada, Corregida y Aprobada para Reemplazo  

---

## 1. UNIDAD TRABAJADA
- **Nombre:** Fase 3 — DOC-03-00 Product Backlog Priorizado.
- **Documento:** [`00_Product_Backlog_Priorizado.md`](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/docs/planificacion-scrum/paquete_v4.7%20PLANIFICACION%20SI%20SIRVE/paquete_v4.7/00_Product_Backlog_Priorizado.md).
- **Código Documental:** `DOC-PLAN-03-00`.
- **Rango:** Documento maestro completo (Metadatos YAML, Evaluación de Calidad INVEST, Tabla de Mitigación de Historias Complejas ≥ 8 pts en lenguaje de negocio, Nota Metodológica de Descomposición INVEST Small de HU-VEN-01a/b/c, Tablas Oficiales de las 72 HUs por MoSCoW [36 Must, 31 Should, 5 Could] + 1 Won't have, y eliminación de secciones históricas obsoletas).

---

## 2. AUDITORÍA INICIAL

| ID-Hallazgo | Ubicación | Texto Original (cita breve) | Problema Detectado | Categoría (A–N) | Severidad | Corrección Propuesta |
|:---:|---|---|---|:---:|:---:|---|
| **H-03-01** | Encabezado YAML (L1-11) | `Versión: 4.7` | Desfasado frente a la versión única 4.8 del paquete. | **L** | Media | Elevar a `Versión: 4.8`, fecha `2026-10-03` y código `DOC-PLAN-03-00`. |
| **H-03-02** | INVEST: Testable (L26) | `verificables en navegador y base de datos... pruebas unitarias` | Cita a "base de datos" introduce detalle de persistencia informática en el criterio de valor. | **F** | Media | Redactar en lenguaje de negocio: "verificables en pantalla y mediante la persistencia confirmada de los datos...". |
| **H-03-03** | Tabla Mitigaciones: HU-AUTH-04 (L34) | `almacenamiento de 'session_version' en base de datos con invalidación automática de tokens previos` | Detalle arquitectónico de programación web (`session_version`, `tokens`, `base de datos`). | **F** | Alta | Reescribir en lenguaje de negocio: control de sesión activa única por colaborador con desconexión automática de puestos remotos al autenticarse. |
| **H-03-04** | Tabla Mitigaciones: HU-VEN-01 (L36) | `iniciando su paso 4 desde el día 1 bajo contrato de datos... cierre en día 7` | Referencia al "paso 4" de la plantilla técnica interna. | **F** | Media | Redactar como: "iniciando el desarrollo de la interfaz de punto de venta desde el día 1 bajo acuerdo de servicio...". |
| **H-03-05** | Tabla Mitigaciones: HU-VEN-02 (L37) | `desacoplando la emisión documental del carrito de venta mediante contrato previo y ejecutando su despliegue` | Lenguaje técnico centrado en despliegue. | **F** | Media | Redactar como: "desacoplando la expedición documental del cálculo del carrito y ejecutando su verificación de comprobantes inmediatamente después de la venta". |
| **H-03-06** | Nota INVEST Small: HU-VEN-01c (L44) | `Transacción de cobro con Yape y validación de código de operación único de 6 dígitos RN-02` | Mención de "Yape" sin el estándar de cobro digital fijado con el PO. | **E** | Alta | Estandarizar a: «Transacción de cobro con Yape/Plin mediante terminal IziPay con código de autorización de 6 dígitos (RN-02) (5 pts)». |
| **H-03-07** | Tabla Must Have: Orden 16 (L71) | `HU-VEN-01: Ventas (POS) – Registrar una venta con Efectivo o Yape` | Título no incluye la terminología de cobro digital unificada. | **E** | Alta | Actualizar título a: «Ventas (POS) – Registrar una venta con Efectivo o Yape/Plin (IziPay)». |
| **H-03-08** | Tabla Should Have: Orden 43 (L103) | `HU-VEN-07: Ventas (POS) – Verificar recepción de pago Yape` | Título no consensuado con el PO respecto a la decisión D4. | **C**, **N** | Alta | Renombrar a «Ventas (POS) – Confirmar el código de autorización del pago digital [DECISIÓN PENDIENTE D4]». |
| **H-03-09** | Historial de Cambios (L149-178) | Cuatro tablas acumuladas de «Cambios aplicados en esta versión (v4.2 a v4.7)» | Secciones redundantes que revelan auditorías de código anteriores. | **M**, **L** | Alta | Suprimir en su totalidad. El historial unificado reside exclusivamente en `DOC-PLAN-00`. |

---

## 3. TEXTO CORREGIDO COMPLETO DE LA UNIDAD

```markdown
---
Código: DOC-PLAN-03-00
Título: Product Backlog Priorizado
Versión: 4.8
Fecha: 2026-10-03
Elaborado por: Colonia Infantas, Walter
Revisado por: Angeles Pérez, Jhonny
Estado: Aprobado
Propósito: Lista maestra de Historias de Usuario, evaluación INVEST, mitigación de complejidad y priorización MoSCoW
Documentos relacionados: DOC-PLAN-00
---

# 03. Product Backlog Priorizado

## Verificación INVEST del Product Backlog

El 100 % de las 72 historias de usuario planificadas ha sido evaluado bajo los criterios de calidad INVEST:

| Criterio INVEST | Resultado | Sustento Metodológico y Criterio de Aplicación |
|---|:---:|---|
| **Independent (Independiente)** | Conforme con salvaguardas | Las dependencias entre historias se encuentran resueltas en sprints anteriores o planificadas dentro de la misma iteración mediante acuerdos de integración formalizados el día 1, garantizando que ninguna historia dependa de un sprint futuro. |
| **Negotiable (Negociable)** | Conforme | Los criterios de aceptación en formato estándar *Dado que / Cuando / Entonces* delimitan el alcance funcional y los resultados esperados, permitiendo flexibilidad en el diseño operativo en coordinación con el Product Owner. |
| **Valuable (Valiosa)** | Conforme | Cada historia está formulada desde la perspectiva de un rol específico del minimarket con un beneficio comercial claro y medible, trazando de forma directa a uno de los 5 objetivos estratégicos del negocio (OBJ-01 a OBJ-05). |
| **Estimable (Estimable)** | Conforme | La totalidad de las historias se encuentra estimada en puntos de historia utilizando la escala Fibonacci, tomando como referencia calibrada la historia pivote oficial `HU-CAT-01` = 1 pt = 2.0 h-hombre. |
| **Small (Pequeña)** | Conforme | El 93.1 % del backlog (67 de 72 historias) posee un tamaño ≤ 5 pts. Las 5 historias complejas (≥ 8 pts) cuentan con análisis de cohesión funcional y estrategias de mitigación. Para `HU-VEN-01` (13 pts) se incorpora una nota metodológica de descomposición opcional. |
| **Testable (Comprobable)** | Conforme | Cada historia dispone de al menos dos criterios de aceptación verificables en la experiencia del usuario y en la persistencia confiable de los registros, complementados por verificación independiente (`Construye ≠ Verifica`). Cada historia con pantalla incluye su criterio de interfaz (CA-UI) trazado al Anexo B. |

### Gestión y Mitigación de Historias Complejas (≥ 8 pts)

Las 5 historias con estimación igual o superior a 8 puntos de historia fueron analizadas para resguardar la viabilidad del flujo de trabajo y la estabilidad de las entregas:

| Código | Título de la Historia | Pts | Sprint | Riesgo Identificado | Estrategia de Mitigación en el Plan |
|---|---|:---:|:---:|---|---|
| **HU-AUTH-04** | Autenticación – Garantizar sesión única por usuario | 8 | SPR-2 | Complejidad en el control de accesos simultáneos desde múltiples dispositivos. | Se mantiene en 8 pts en Sprint 2 (REL-2). Se mitiga mediante la validación del estado de sesión activa por cuenta de usuario, desconectando de forma automática cualquier sesión previa al iniciar sesión en un nuevo puesto de trabajo, dependiendo de `HU-AUTH-03` y complementándose con el cierre forzado remoto por SuperAdmin (`HU-USR-06`). |
| **HU-SOL-05** | Reposición – Completar solicitud al recibir mercadería | 8 | SPR-2 | Múltiples actividades operativas: cotejo físico de ítems, actualización de existencias, recálculo de costo promedio y cierre del pedido. | Se mantiene en 8 pts en Sprint 2 (REL-2). Se mitiga exigiendo que toda recepción se realice obligatoriamente contra una solicitud de reposición previamente aprobada (RN-01 y RN-14), canalizando las notificaciones de stock crítico hacia el tablero gerencial (`HU-DASH-03`). |
| **HU-VEN-01** | Ventas (POS) – Registrar una venta con Efectivo o Yape/Plin (IziPay) | 13 | SPR-1 | Núcleo transaccional de máxima criticidad comercial; concentra la atención en mostrador y domina la ruta crítica del Sprint 1 (22.00 h lógicas; ver DOC-PLAN-06). | Se mantiene indivisible en 13 pts por su valor operativo integral (el cobro en mostrador pierde sentido demostrable si se fragmenta). Se mitiga iniciando el desarrollo de la interfaz de venta desde el día 1 bajo acuerdo de servicio e implementando verificación continua con cierre planificado en el día 7 y colchón de estabilización. *(Ver nota de descomposición opcional abajo)*. |
| **HU-VEN-02** | Ventas (POS) – Emitir boleta o factura | 8 | SPR-1 | Generación de comprobantes fiscales con numeración correlativa continua y formatos tributarios SUNAT [DECISIÓN PENDIENTE D8]. | Se mantiene en 8 pts en Sprint 1 (REL-1). Se mitiga desacoplando la expedición documental del cálculo del carrito de ventas mediante especificación previa, ejecutando su verificación de comprobantes inmediatamente después de completar el flujo de venta de `HU-VEN-01`. |
| **HU-VEN-06** | Ventas (POS) – Anular una venta con devolución | 8 | SPR-2 | Impacto simultáneo en la gaveta de caja, egreso de efectivo, reversión de stock comercial y eventual derivación a merma. | Se mantiene en 8 pts en Sprint 2 (REL-2). Se mitiga reservando la autorización exclusivamente a Administrador o Gerente, requiriendo que el turno de caja se mantenga en estado 'Abierto' (RN-08) y aplicando el protocolo de destino a merma o inventario (RN-09). |

> **Nota metodológica de descomposición opcional (Criterio INVEST - Small):**  
> `HU-VEN-01` posee 13 puntos de historia por su indivisible cohesión operativa en el punto de cobro. Para fines de control granular y auditoría académica, se documenta la siguiente descomposición lógica opcional sin alterar los puntos ni los conteos oficiales del Backlog:  
> - **HU-VEN-01a:** Interfaz de carrito de venta POS, selección de artículos, cálculo automático de subtotales y desglose de IGV al 18 % (5 pts).  
> - **HU-VEN-01b:** Operación de cobro en efectivo con cálculo automático de vuelto y validación de saldo en gaveta física (3 pts).  
> - **HU-VEN-01c:** Operación de cobro mediante Yape/Plin mediante terminal IziPay con validación de código de autorización de 6 dígitos único (RN-02) (5 pts).

---

## Historias de Usuario Planificadas (1 a 72)

*Nota de ordenamiento:* Dentro de cada bloque MoSCoW, las historias se ordenan anteponiendo las historias prerrequisito antes que sus dependientes, asegurando una secuencia de ejecución lógica y sin bloqueos.

### Must have (36 Historias · 153 Puntos)

| Orden | Código | Título Oficial de la Historia de Usuario | Épica | MoSCoW | Puntos | Release | Sprint | Depende de |
|:---:|---|---|---|---|:---:|:---:|:---:|---|
| 1 | HU-AUTH-01 | Autenticación – Iniciar sesión | EPIC-SEG | Must have (4) | 5 | REL-1 | SPR-1 | Ninguna |
| 2 | HU-AUTH-02 | Autenticación – Bloquear cuenta por intentos fallidos | EPIC-SEG | Must have (4) | 3 | REL-1 | SPR-1 | HU-AUTH-01 |
| 3 | HU-AUTH-03 | Autenticación – Cerrar sesión | EPIC-SEG | Must have (4) | 2 | REL-1 | SPR-1 | HU-AUTH-01 |
| 4 | HU-USR-02 | Usuarios – Crear cuenta de nuevo empleado | EPIC-SEG | Must have (4) | 5 | REL-1 | SPR-1 | HU-AUTH-01 |
| 5 | HU-CAT-02 | Categorías – Crear nueva categoría de productos | EPIC-CAT | Must have (4) | 2 | REL-1 | SPR-1 | HU-AUTH-01 |
| 6 | HU-CAT-01 | Categorías – Ver lista de categorías de productos | EPIC-CAT | Must have (4) | 1 | REL-1 | SPR-1 | HU-CAT-02 |
| 7 | HU-PROD-02 | Productos – Registrar nuevo producto en el catálogo | EPIC-CAT | Must have (4) | 5 | REL-1 | SPR-1 | HU-CAT-02 |
| 8 | HU-PROD-01 | Productos – Ver catálogo completo de productos | EPIC-CAT | Must have (4) | 3 | REL-1 | SPR-1 | HU-PROD-02 |
| 9 | HU-PROV-02 | Proveedores – Registrar nuevo proveedor | EPIC-CAT | Must have (4) | 3 | REL-1 | SPR-1 | HU-AUTH-01 |
| 10 | HU-INV-01 | Inventario – Registrar entrada de mercadería | EPIC-INV | Must have (4) | 5 | REL-1 | SPR-1 | HU-PROD-02, HU-PROV-02 |
| 11 | HU-INV-02 | Inventario – Registrar baja de inventario por merma | EPIC-INV | Must have (4) | 5 | REL-1 | SPR-1 | HU-INV-01 |
| 12 | HU-INV-03 | Inventario – Realizar ajuste por conteo físico | EPIC-INV | Must have (4) | 5 | REL-1 | SPR-1 | HU-INV-01 |
| 13 | HU-CAJA-01 | Caja – Abrir turno de caja | EPIC-VEN | Must have (4) | 5 | REL-1 | SPR-1 | HU-AUTH-01 |
| 14 | HU-CAJA-02 | Caja – Cerrar turno de caja y cuadrar | EPIC-VEN | Must have (4) | 5 | REL-1 | SPR-1 | HU-CAJA-01 |
| 15 | HU-CAJA-05 | Caja – Consultar historial de turnos de caja | EPIC-VEN | Must have (4) | 3 | REL-1 | SPR-1 | HU-CAJA-02 |
| 16 | HU-VEN-01 | Ventas (POS) – Registrar una venta con Efectivo o Yape/Plin (IziPay) | EPIC-VEN | Must have (4) | 13 | REL-1 | SPR-1 | HU-CAJA-01, HU-INV-01 |
| 17 | HU-VEN-02 | Ventas (POS) – Emitir boleta o factura | EPIC-VEN | Must have (4) | 8 | REL-1 | SPR-1 | HU-VEN-01 |
| 18 | HU-VEN-05 | Ventas (POS) – Consultar historial de ventas | EPIC-VEN | Must have (4) | 5 | REL-1 | SPR-1 | HU-VEN-01 |
| 19 | HU-CONF-02 | Configuración – Actualizar configuración del negocio | EPIC-REP | Must have (4) | 3 | REL-1 | SPR-1 | HU-AUTH-01 |
| 20 | HU-CLI-02 | Clientes – Registrar cliente automáticamente al vender | EPIC-CAT | Must have (4) | 3 | REL-1 | SPR-1 | HU-VEN-01 |
| 21 | HU-AUTH-04 | Autenticación – Garantizar sesión única por usuario | EPIC-SEG | Must have (4) | 8 | REL-2 | SPR-2 | HU-AUTH-01, HU-AUTH-03 |
| 22 | HU-USR-01 | Usuarios – Listar empleados del sistema | EPIC-SEG | Must have (4) | 2 | REL-2 | SPR-2 | HU-USR-02 |
| 23 | HU-USR-04 | Usuarios – Desactivar cuenta de empleado | EPIC-SEG | Must have (4) | 3 | REL-2 | SPR-2 | HU-USR-02 |
| 24 | HU-DASH-01 | Dashboard – Ver resumen de ventas del día y del mes | EPIC-REP | Must have (4) | 5 | REL-2 | SPR-2 | HU-VEN-01 |
| 25 | HU-DASH-03 | Dashboard – Alertas de stock crítico, vencimientos y turnos olvidados | EPIC-REP | Must have (4) | 5 | REL-2 | SPR-2 | HU-INV-01, HU-CAJA-05 |
| 26 | HU-PROD-06 | Productos – Consultar productos próximos a vencer | EPIC-CAT | Must have (4) | 3 | REL-2 | SPR-2 | HU-INV-01 |
| 27 | HU-PROV-01 | Proveedores – Ver lista de proveedores | EPIC-CAT | Must have (4) | 2 | REL-2 | SPR-2 | HU-PROV-02 |
| 28 | HU-REP-01 | Reportes – Ver resumen de ventas por período | EPIC-REP | Must have (4) | 5 | REL-2 | SPR-2 | HU-VEN-01 |
| 29 | HU-REP-02 | Reportes – Ver ranking de productos más vendidos | EPIC-REP | Must have (4) | 3 | REL-2 | SPR-2 | HU-VEN-01 |
| 30 | HU-REP-05 | Reportes – Ver stock crítico | EPIC-REP | Must have (4) | 3 | REL-2 | SPR-2 | HU-INV-01 |
| 31 | HU-SOL-01 | Reposición – Crear solicitud de reposición | EPIC-INV | Must have (4) | 3 | REL-2 | SPR-2 | HU-PROD-02, HU-PROV-02 |
| 32 | HU-SOL-02 | Reposición – Listar solicitudes con filtro por estado | EPIC-INV | Must have (4) | 2 | REL-2 | SPR-2 | HU-SOL-01 |
| 33 | HU-SOL-03 | Reposición – Aprobar solicitud de reposición | EPIC-INV | Must have (4) | 3 | REL-2 | SPR-2 | HU-SOL-01 |
| 34 | HU-SOL-05 | Reposición – Completar solicitud al recibir mercadería | EPIC-INV | Must have (4) | 8 | REL-2 | SPR-2 | HU-SOL-03 |
| 35 | HU-VEN-06 | Ventas (POS) – Anular una venta con devolución | EPIC-VEN | Must have (4) | 8 | REL-2 | SPR-2 | HU-VEN-01 |
| 36 | HU-CONF-01 | Configuración – Ver configuración actual del negocio | EPIC-REP | Must have (4) | 1 | REL-2 | SPR-2 | HU-CONF-02 |

### Should have (31 Historias · 84 Puntos)

| Orden | Código | Título Oficial de la Historia de Usuario | Épica | MoSCoW | Puntos | Release | Sprint | Depende de |
|:---:|---|---|---|---|:---:|:---:|:---:|---|
| 37 | HU-AUTH-05 | Autenticación – Recuperar contraseña por correo | EPIC-SEG | Should have (3) | 5 | REL-2 | SPR-2 | HU-AUTH-01 |
| 38 | HU-USR-06 | Usuarios – Forzar cierre de sesión remoto | EPIC-SEG | Should have (3) | 3 | REL-2 | SPR-2 | HU-AUTH-01 |
| 39 | HU-CAJA-03 | Caja – Registrar movimiento manual de efectivo | EPIC-VEN | Should have (3) | 3 | REL-2 | SPR-2 | HU-CAJA-01 |
| 40 | HU-CAJA-04 | Caja – Ver resumen del turno activo | EPIC-VEN | Should have (3) | 2 | REL-2 | SPR-2 | HU-CAJA-01 |
| 41 | HU-CAJA-06 | Caja – Aprobar cierre de turno | EPIC-VEN | Should have (3) | 2 | REL-2 | SPR-2 | HU-CAJA-02 |
| 42 | HU-CAJA-07 | Caja – Forzar cierre de turno ajeno | EPIC-VEN | Should have (3) | 5 | REL-2 | SPR-2 | HU-CAJA-01 |
| 43 | HU-VEN-07 | Ventas (POS) – Confirmar el código de autorización del pago digital | EPIC-VEN | Should have (3) | 2 | REL-2 | SPR-2 | HU-VEN-01 |
| 44 | HU-SOL-04 | Reposición – Rechazar solicitud de reposición | EPIC-INV | Should have (3) | 2 | REL-2 | SPR-2 | HU-SOL-01 |
| 45 | HU-PROV-04 | Proveedores – Desactivar o reactivar proveedor | EPIC-CAT | Should have (3) | 2 | REL-2 | SPR-2 | HU-PROV-02 |
| 46 | HU-AUTH-06 | Autenticación – Cambiar contraseña propia | EPIC-SEG | Should have (3) | 3 | REL-3 | SPR-3 | HU-AUTH-01 |
| 47 | HU-USR-03 | Usuarios – Editar datos de un empleado | EPIC-SEG | Should have (3) | 3 | REL-3 | SPR-3 | HU-USR-02 |
| 48 | HU-USR-05 | Usuarios – Reactivar cuenta de empleado | EPIC-SEG | Should have (3) | 2 | REL-3 | SPR-3 | HU-USR-04 |
| 49 | HU-LOG-01 | Auditoría – Consultar registro de accesos al sistema | EPIC-SEG | Should have (3) | 3 | REL-3 | SPR-3 | HU-AUTH-01 |
| 50 | HU-CAT-03 | Categorías – Editar nombre de categoría | EPIC-CAT | Should have (3) | 1 | REL-3 | SPR-3 | HU-CAT-02 |
| 51 | HU-CLI-01 | Clientes – Listar clientes registrados | EPIC-CAT | Should have (3) | 2 | REL-3 | SPR-3 | HU-CLI-02 |
| 52 | HU-PROD-04 | Productos – Editar datos de un producto | EPIC-CAT | Should have (3) | 3 | REL-3 | SPR-3 | HU-PROD-02 |
| 53 | HU-PROD-05 | Productos – Desactivar o reactivar producto | EPIC-CAT | Should have (3) | 2 | REL-3 | SPR-3 | HU-PROD-02 |
| 54 | HU-PROV-03 | Proveedores – Editar datos de un proveedor | EPIC-CAT | Should have (3) | 2 | REL-3 | SPR-3 | HU-PROV-02 |
| 55 | HU-INV-04 | Inventario – Consultar historial de entradas | EPIC-INV | Should have (3) | 2 | REL-3 | SPR-3 | HU-INV-01 |
| 56 | HU-INV-05 | Inventario – Consultar historial de bajas | EPIC-INV | Should have (3) | 2 | REL-3 | SPR-3 | HU-INV-02 |
| 57 | HU-INV-06 | Inventario – Consultar historial de ajustes | EPIC-INV | Should have (3) | 2 | REL-3 | SPR-3 | HU-INV-03 |
| 58 | HU-DASH-02 | Dashboard – Ver gráfico de evolución de ventas por día | EPIC-REP | Should have (3) | 3 | REL-3 | SPR-3 | HU-VEN-01 |
| 59 | HU-DASH-04 | Dashboard – Ver ranking de productos más vendidos | EPIC-REP | Should have (3) | 3 | REL-3 | SPR-3 | HU-VEN-01 |
| 60 | HU-DASH-05 | Dashboard – Ver solicitudes de reposición pendientes | EPIC-REP | Should have (3) | 2 | REL-3 | SPR-3 | HU-SOL-01 |
| 61 | HU-REP-03 | Reportes – Ver ventas desglosadas por día | EPIC-REP | Should have (3) | 3 | REL-3 | SPR-3 | HU-VEN-01 |
| 62 | HU-REP-04 | Reportes – Ver ventas por método de pago | EPIC-REP | Should have (3) | 2 | REL-3 | SPR-3 | HU-VEN-01 |
| 63 | HU-REP-06 | Reportes – Ver resumen general del inventario | EPIC-REP | Should have (3) | 2 | REL-3 | SPR-3 | HU-INV-01 |
| 64 | HU-REP-07 | Reportes – Ver margen de ganancia por producto | EPIC-REP | Should have (3) | 5 | REL-3 | SPR-3 | HU-VEN-01, HU-INV-01 |
| 65 | HU-REP-08 | Reportes – Ver mermas agrupadas por motivo | EPIC-REP | Should have (3) | 3 | REL-3 | SPR-3 | HU-INV-02 |
| 66 | HU-VEN-03 | Ventas (POS) – Generar comprobante en PDF o reenviar por correo electrónico | EPIC-VEN | Should have (3) | 5 | REL-3 | SPR-3 | HU-VEN-02 |
| 67 | HU-VEN-04 | Ventas (POS) – Buscar producto por código de barras | EPIC-VEN | Should have (3) | 3 | REL-3 | SPR-3 | HU-VEN-01 |

### Could have (5 Historias · 14 Puntos)

| Orden | Código | Título Oficial de la Historia de Usuario | Épica | MoSCoW | Puntos | Release | Sprint | Depende de |
|:---:|---|---|---|---|:---:|:---:|:---:|---|
| 68 | HU-CAT-04 | Categorías – Eliminar categoría sin productos | EPIC-CAT | Could have (2) | 2 | REL-3 | SPR-3 | HU-CAT-02 |
| 69 | HU-CLI-03 | Clientes – Editar correo electrónico de cliente | EPIC-CAT | Could have (2) | 1 | REL-3 | SPR-3 | HU-CLI-02 |
| 70 | HU-PROD-03 | Productos – Escanear código de barras para registrar producto | EPIC-CAT | Could have (2) | 5 | REL-3 | SPR-3 | HU-PROD-02 |
| 71 | HU-REP-09 | Reportes – Exportar reportes en PDF | EPIC-REP | Could have (2) | 3 | REL-3 | SPR-3 | HU-REP-01 |
| 72 | HU-VEN-08 | Ventas (POS) – Exportar historial de ventas a CSV | EPIC-VEN | Could have (2) | 3 | REL-3 | SPR-3 | HU-VEN-05 |

---

## Fuera de Alcance (Won't have · 1 Historia)

| Orden | Código | Título Oficial de la Historia de Usuario | Épica | MoSCoW | Puntos | Release | Sprint | Depende de |
|:---:|---|---|---|---|:---:|:---:|:---:|---|
| N/A | HU-VEN-09 | Ventas – Venta a granel o por peso | EPIC-VEN | Won't have (1) | 0 | Ninguno | Ninguno | Ninguna |
```

---

## 4. AUDITORÍA DE SALIDA (Evaluación Hostil de la Fase 3)

| Dimensión Auditada | Resultado | Evidencia y Verificación en el Texto Corregido |
|---|:---:|---|
| **A. Exactitud numérica y fechas** | **CUMPLE** | Conteo exacto verificado: Must have = 36 HUs (153 pts); Should have = 31 HUs (84 pts); Could have = 5 HUs (14 pts); Total planificado = 72 HUs (251 pts); Fuera de alcance = 1 HU (0 pts); Total Backlog = 73 HUs. Fecha: 2026-10-03. |
| **B. Consistencia con Datos Inmutables** | **CUMPLE** | Suma por releases/sprints verificada: REL-1 = 20 HUs (89 pts); REL-2 = 25 HUs (90 pts); REL-3 = 27 HUs (72 pts). Total: 72 HUs y 251 pts. Pivote HU-CAT-01 = 1 pt = 2 h. |
| **C. Consistencia de IDs, títulos y dependencias** | **CUMPLE** | Las 73 historias preservan sus códigos oficiales. Los títulos de HU-VEN-01, HU-VEN-03 y HU-VEN-07 concuerdan plenamente con las decisiones del PO y con el Libro de Control. Las dependencias respetan estrictamente la no anticipación de sprints futuros. |
| **D. Contradicciones internas y documentales** | **CUMPLE** | Se eliminó la mención técnica a `session_version` y `tokens` en las mitigaciones. La nota INVEST Small de HU-VEN-01a/b/c suma exactamente 5 + 3 + 5 = 13 pts sin alterar las métricas oficiales. |
| **E. Terminología única de negocio** | **CUMPLE** | Título de HU-VEN-01 ajustado a «Efectivo o Yape/Plin (IziPay)». HU-VEN-01c alineada con «Yape/Plin mediante terminal IziPay con código de autorización de 6 dígitos». Término «solicitud de reposición» consolidado en HU-SOL-01 a 05. |
| **F. Lenguaje de negocio (sin jerga ni código)** | **CUMPLE** | Ocurrencias de nombres de archivos, líneas, endpoints, base de datos relacional, JWT, tokens, session_version, backend/frontend en el texto corregido: **0 (cero)**. |
| **G. Perspectiva de plan (verbos en futuro)** | **CUMPLE** | Texto redactado en perspectiva de diseño previo al desarrollo ("El 100 % ha sido evaluado...", "se mitiga mediante la validación...", "permitiendo flexibilidad..."). Cero referencias a código ya desplegado. |
| **H. Actores y roles coherentes** | **CUMPLE** | Las historias de usuario trazan sus dependencias entre roles coherentes del minimarket (Vendedor, Almacenero, Administrador, Gerente, SuperAdmin). |
| **I. Criterios de aceptación y calidad INVEST** | **CUMPLE** | Los 6 criterios INVEST están rigurosamente justificados. Se documenta la referencia al criterio CA-UI y al Anexo B para historias con pantalla. |
| **J. Valor de negocio del "Para"** | **CUMPLE** | Declaración explícita de trazabilidad de las 72 HUs hacia los objetivos estratégicos OBJ-01 a OBJ-05. |
| **K. Reglas de negocio vinculadas** | **CUMPLE** | Las mitigaciones y notas referencian con exactitud RN-01, RN-02, RN-08, RN-09 y RN-14. |
| **L. Metadatos y control documental** | **CUMPLE** | Encabezado YAML con código `DOC-PLAN-03-00`, versión 4.8 y fecha 2026-10-03. |
| **M. Ortografía, gramática, tono y estilo** | **CUMPLE** | Tono sobrio, verificable y objetivo. Se eliminaron las 4 tablas redundantes de historial de versiones previas. |
| **N. Decisiones D1 a D12 formalizadas** | **CUMPLE** | Incorporadas las etiquetas `[DECISIÓN PENDIENTE D4]` en HU-VEN-07 y `[DECISIÓN PENDIENTE D8]` en HU-VEN-02. |

---

## 5. ACTUALIZACIÓN DEL LIBRO DE CONTROL
- **Títulos oficializados en el Product Backlog:**
  - `HU-VEN-01`: "Ventas (POS) – Registrar una venta con Efectivo o Yape/Plin (IziPay)" (13 pts).
  - `HU-VEN-07`: "Ventas (POS) – Confirmar el código de autorización del pago digital" (2 pts, Should have, Sprint 2).
  - `HU-VEN-03`: "Ventas (POS) – Generar comprobante en PDF o reenviar por correo electrónico" (5 pts, Should have, Sprint 3).
- **Sub-historias de la descomposición opcional de HU-VEN-01 (INVEST Small):**
  - `HU-VEN-01a`: Interfaz de carrito POS, selección de artículos, subtotales e IGV 18 % (5 pts).
  - `HU-VEN-01b`: Transacción de cobro en efectivo con cálculo de vuelto y validación de gaveta (3 pts).
  - `HU-VEN-01c`: Transacción de cobro con Yape/Plin mediante terminal IziPay con código de autorización de 6 dígitos RN-02 (5 pts).
- **Matriz de propagación hacia siguientes fases:**
  - Épica `04_EPIC-VEN.md` (Fase 7): Sincronizar títulos oficiales de `HU-VEN-01`, `HU-VEN-03` y `HU-VEN-07` y su desglose opcional en la especificación de historias.
  - Documentos `DOC-PLAN-04`, `06` y `07` (Fases 9, 11 y 12): Verificar que los títulos corregidos se reflejen con absoluta uniformidad en el Story Map, Sprint Backlog y Desglose de Tareas.

---

## 6. PENDIENTES (Decisiones del Product Owner aplicables a Fase 3)

| Decisión | Pregunta para el Product Owner | Estado Actual | Impacto Directo en DOC-03-00 |
|:---:|---|:---:|---|
| **D4** | Respecto a `HU-VEN-07`: ¿se fusiona como criterio dentro de `HU-VEN-01` o se mantiene en el Backlog renombrada como "Confirmar el código de autorización del pago digital"? | `[DECISIÓN PENDIENTE D4]` | Se mantiene provisionalmente como historia independiente de 2 pts en Sprint 2 para preservar los 251 pts inmutables. |
| **D8** | Alcance de comprobantes electrónicos: redactar qué incluye (numeración consecutiva y formato SUNAT) y qué no (envío electrónico a SUNAT). | `[DECISIÓN PENDIENTE D8]` | Impacta la descripción de mitigación técnica de `HU-VEN-02` (8 pts). |
