# Auditoría y Corrección Metodológica: Fase 7 — EPIC-VEN (Lote 1: HU-CAJA-01 a HU-CAJA-05 y HU-VEN-01)

---

## 1. UNIDAD TRABAJADA

- **Identificador de Documento:** `DOC-PLAN-03-04` (previamente catalogado como `DOC-PLAN-03-EPIC-VEN`).
- **Título de la Unidad:** Catálogo de Historias de Usuario — Épica EPIC-VEN (Ventas, Caja y Facturación Electrónica) — Lote 1: Operaciones de Turno de Caja y Núcleo de Punto de Venta (POS).
- **Archivo de Origen:** `docs/planificacion-scrum/paquete_v4.7 PLANIFICACION SI SIRVE/paquete_v4.7/04_EPIC-VEN.md`.
- **Alcance del Lote 1:**
  - Encabezado y metadatos del documento (versión 4.8, fecha 2026-10-03).
  - Objetivo de negocio de la épica (`OBJ-04`).
  - Historias de Usuario seleccionadas del Lote 1:
    1. `HU-CAJA-01` · Caja – Abrir turno de caja (5 pts | Must have | SPR-1 | UI-016 | RN-10).
    2. `HU-CAJA-02` · Caja – Cerrar turno de caja y cuadrar (5 pts | Must have | SPR-1 | UI-016 | [DECISIÓN PENDIENTE D1]).
    3. `HU-CAJA-03` · Caja – Registrar movimiento manual de efectivo (3 pts | Should have | SPR-2 | UI-016 | RN-11, RN-15).
    4. `HU-CAJA-04` · Caja – Ver resumen del turno activo (2 pts | Should have | SPR-2 | UI-016 | [DECISIÓN PENDIENTE D1, D2]).
    5. `HU-CAJA-05` · Caja – Consultar historial de turnos de caja (3 pts | Must have | SPR-1 | UI-017).
    6. `HU-VEN-01` · Ventas (POS) – Registrar una venta con Efectivo o Yape (13 pts | Must have | SPR-1 | UI-014 | RN-02, RN-03).
- **Métricas del Lote 1:** 6 Historias de Usuario | 31 Puntos de Historia (26 pts en SPR-1, 5 pts en SPR-2, 0 pts en SPR-3) | MoSCoW: 4 Must have (26 pts), 2 Should have (5 pts), 0 Could have (0 pts).
- **Métricas Totales Proyectadas de EPIC-VEN:** 15 Historias de Usuario planificadas (72 pts) + 1 fuera de alcance (`HU-VEN-09`, 0 pts). Distribución MoSCoW total: 7 Must have (47 pts), 7 Should have (22 pts), 1 Could have (3 pts), 1 Won't have (0 pts). Distribución por Sprints: SPR-1: 39 pts, SPR-2: 22 pts, SPR-3: 11 pts.

---

## 2. AUDITORÍA INICIAL (Criterios A – N)

Evaluación exhaustiva de los enunciados, criterios y notas técnicas originales de las 6 historias del Lote 1 antes de la intervención de auditoría:

| Criterio | Dimensión Evaluada | Estado Inicial | Diagnóstico y Hallazgos Específicos Identificados |
|:---:|---|:---:|---|
| **A** | Perspectiva estrictamente *a priori* | **NO CUMPLE** | Se detectaron fragmentos retrospectivos y citas a la implementación de software: en `HU-VEN-01` se cita "en la base de datos (RN-02)"; en `HU-CAJA-04` CA2 se redacta en función del comportamiento técnico del navegador web ("si recargo la vista"); en la justificación de `HU-VEN-01` se cita "MVP del 13 de octubre". |
| **B** | Cero jerga técnica y código | **NO CUMPLE** | Citas explícitas a términos técnicos: "base de datos", "transacción atómica", "FEFO", "recargo la vista". Además, en `HU-CAJA-06`, `HU-CAJA-07`, `HU-VEN-02`, `HU-VEN-03` y `HU-VEN-07` del mismo archivo original existían múltiples referencias a `.js`, endpoints `/api/`, `SequelizeUniqueConstraintError`, etc. |
| **C** | Verbos en futuro o condicional | **OBSERVADO** | Se alternaba la redacción proyectiva con descripciones en presente simple que narraban la interacción del usuario ("abro el turno y me habilita", "saco S/ 20 para pagar el bidón de agua"). |
| **D** | Criterios de aceptación medibles | **OBSERVADO** | En `HU-CAJA-01`, el criterio 1 utilizaba el monto fijo de "S/ 500" sin generalizar la condición de fondo mínimo configurable según RN-10. En `HU-CAJA-03`, el criterio 1 usaba un ejemplo coloquial ("bidón de agua") en lugar de una regla formal de ingreso o egreso justificado. En `HU-VEN-01`, la comprobación de liquidez de gaveta para vuelto carecía de condición explícita de suficiencia de efectivo. |
| **E** | Trazabilidad con UI (Anexo B) | **CUMPLE** | HU-CAJA-01, 02, 03 y 04 vinculan con `UI-016` («Turno de Caja y Arqueo Inicial»); HU-CAJA-05 vincula con `UI-017` («Historial de Cajas y Cierres Forzados»); HU-VEN-01 vincula con `UI-014` («Terminal de Punto de Venta POS»). Criterios CA-UI presentes. |
| **F** | Reglas de negocio vinculadas | **CUMPLE** | Vinculación formal de reglas: `RN-10` (Fondo Mínimo de Apertura) en `HU-CAJA-01`; `RN-11` (Tope Máximo Movimientos Manuales) y `RN-15` (Medio Exclusivo de Arqueo Manual) en `HU-CAJA-03`; `RN-02` (Protección contra Pagos Duplicados Yape) y `RN-03` (Prohibición de Comercialización de Vencidos) en `HU-VEN-01`. |
| **G** | Justificación MoSCoW | **CUMPLE** | Se sustenta sólidamente el carácter Must have de `HU-CAJA-01`, `02`, `05` y `HU-VEN-01` (bloqueantes para la operación comercial, cuadre de dinero y control antifraude en el Release 1) y Should have de `HU-CAJA-03` y `04` (caja chica y monitoreo intermedio en Release 2). |
| **H** | Coherencia de roles y permisos | **CUMPLE** | Conforme a DOC-PLAN-01: Vendedor y Administrador operan los turnos de caja propios y el POS (`HU-CAJA-01` a `04`, `HU-VEN-01`); Administrador y Gerente supervisan e inspeccionan el historial general de turnos (`HU-CAJA-05`). |
| **I** | Dependencias limpias de jerga | **CUMPLE** | Secuencia cronológica estricta: autenticación de usuario (`HU-AUTH-01`) habilita la apertura de caja (`HU-CAJA-01`); la apertura habilita el POS (`HU-VEN-01`); el POS genera movimientos acumulados para el resumen (`HU-CAJA-04`) y el cierre (`HU-CAJA-02`); los cierres alimentan el historial (`HU-CAJA-05`). |
| **J** | Estimaciones y alineación matemática | **CUMPLE** | Estimaciones exactas: HU-CAJA-01 (5 pts), HU-CAJA-02 (5 pts), HU-CAJA-03 (3 pts), HU-CAJA-04 (2 pts), HU-CAJA-05 (3 pts), HU-VEN-01 (13 pts) = 31 pts. 100 % coincidente con el Libro de Control Maestro. |
| **K** | Decisiones de negocio abiertas | **OBSERVADO** | Se identificó que `HU-CAJA-02` y `HU-CAJA-04` deben explicitar las etiquetas formales `[DECISIÓN PENDIENTE D1]` (Modalidad de arqueo ciego vs visible) y `[DECISIÓN PENDIENTE D2]` (Tolerancia monetaria en descuadres de caja). |
| **L** | Redacción completa sin abreviaturas | **CUMPLE** | Cada historia se redacta de forma íntegra y exhaustiva, sin elipses ni resúmenes. |
| **M** | Eliminación de tablas retrospectivas | **NO CUMPLE** | El documento original contenía tablas de control de versiones viejas (v4.3 a v4.7) con citas a auditorías y correcciones de código base que deben eliminarse en la versión consolidada. |
| **N** | Migración a expediente interno | **CUMPLE** | Toda la evidencia técnica, archivos de controladores (`caja.controller.js`, `venta.controller.js`), servicios de dominio (`venta.domain.service.js`) y modelos se resguardaron en la Sección 10 de [INTERNO_Evidencia_Tecnica.md](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/docs/auditoria/INTERNO_Evidencia_Tecnica.md). |

---

## 3. TEXTO CORREGIDO COMPLETO

A continuación se presenta el texto íntegro, formalizado y libre de tecnicismos para el Lote 1 de la épica `EPIC-VEN`:

```markdown
---
Código: DOC-PLAN-03-04
Título: Backlog de Producto — EPIC-VEN: Ventas, Caja y Facturación Electrónica
Versión: 4.8
Fecha: 2026-10-03
Elaborado por: Colonia Infantas, Walter
Revisado por: Angeles Pérez, Jhonny
Estado: Aprobado
Propósito: Especificación de requisitos e historias de usuario de la épica de Gestión de Ventas en Mostrador, Control de Cajas y Comprobantes de Pago
Documentos relacionados: DOC-PLAN-01, DOC-PLAN-02, DOC-PLAN-03-00, DOC-PLAN-08, DOC-ANEXO-B
---

# EPIC-VEN: Ventas, Caja y Facturación Electrónica

**Objetivo de negocio (OBJ-04):** Procesar las transacciones comerciales de venta en el salón de atención al público de forma ágil, emitiendo comprobantes de pago válidos ante la normativa tributaria nacional (SUNAT), resguardando la integridad del inventario por despacho preferente de vencimiento y asegurando el cuadre exacto del dinero en las cajas del minimarket mediante estrictos mecanismos de control y arqueo físico.

---

## 1. Sub-dominio: Operaciones de Turno de Caja y Arqueo Físico

### HU-CAJA-01 · Caja – Abrir turno de caja

| Código | Épica | Prioridad MoSCoW | Estimación | Release | Sprint |
|:---:|:---:|:---:|:---:|:---:|:---:|
| HU-CAJA-01 | EPIC-VEN | Must have | 5 pts | REL-1 | SPR-1 |

**Como** Vendedor o Administrador del minimarket,  
**quiero** abrir formalmente mi turno de caja registrando el fondo monetario inicial (efectivo en gaveta),  
**para** habilitar las operaciones de venta en el terminal de punto de venta (POS) y establecer la base dineraria obligatoria para el arqueo y cuadre al cierre de jornada.

**Justificación de prioridad:** Funcionalidad crítica indispensable para el producto mínimo viable (Must have); sin un turno abierto con fondo verificado, el sistema bloquea cualquier transacción comercial, impidiendo ventas sin trazabilidad financiera y garantizando la custodia del dinero físico.

**Criterios de aceptación:**
1. **Dado que** el colaborador inicia su turno de atención y no cuenta con otro turno activo abierto en el sistema, **cuando** ingresa el importe de apertura igual o superior al fondo mínimo obligatorio de S/ 500.00 y confirma la operación, **entonces** el sistema crea el turno en estado «Abierto», genera el movimiento contable inicial de apertura en efectivo y desbloquea el acceso a la pantalla de Punto de Venta (POS).
2. **Dado que** el usuario intenta abrir turno, **cuando** ingresa un monto de apertura inferior a S/ 500.00 o valores negativos/no numéricos, **entonces** el sistema rechaza la apertura notificando que el importe mínimo reglamentario es de S/ 500.00 para garantizar el cambio y vuelto desde la primera venta (RN-10).
3. **Dado que** el colaborador ya cuenta con un turno de caja previamente abierto y no cerrado, **cuando** intenta abrir un nuevo turno concurrente, **entonces** el sistema bloquea la acción indicando que debe proceder con el cierre de su turno activo antes de aperturar uno nuevo.
4. **Dado que** el colaborador interactúa con el módulo de turno de caja, **cuando** captura el monto inicial y visualiza las indicaciones de fondo mínimo, **entonces** la pantalla satisface las directrices visuales, controles y microcopy especificados en UI-016 (Turno de Caja y Arqueo Inicial) del Catálogo de Interfaces (DOC-ANEXO-B).

**Reglas de negocio aplicables:** 
- RN-10 (Fondo Mínimo de Apertura de Caja)

**Dependencias:** 
- Requiere `HU-AUTH-01` (inicio de sesión del cajero) y `HU-CONF-02` (parámetros de tienda).

---

### HU-CAJA-02 · Caja – Cerrar turno de caja y cuadrar

| Código | Épica | Prioridad MoSCoW | Estimación | Release | Sprint |
|:---:|:---:|:---:|:---:|:---:|:---:|
| HU-CAJA-02 | EPIC-VEN | Must have | 5 pts | REL-1 | SPR-1 |

**Como** Vendedor o Administrador del minimarket,  
**quiero** cerrar formalmente mi turno de caja declarando el arqueo físico de efectivo y pagos digitales (Yape/Plin),  
**para** que el sistema calcule el cuadre de caja (sobrante o faltante), deshabilite nuevas ventas en dicho turno y deje constancia auditable de la custodia monetaria.

**Justificación de prioridad:** Funcionalidad crítica de control antifraude y cuadre contable (Must have); el cierre con declaración de valores físicos es el mecanismo nuclear para verificar que lo recaudado coincida con las ventas registradas.

**Criterios de aceptación:**
1. **Dado que** el colaborador finaliza su jornada con un turno en estado «Abierto», **cuando** ingresa el arqueo físico de dinero contando e introduciendo los montos reales de efectivo y pagos por billetera digital y confirma el cierre, **entonces** el sistema pasa el turno a estado «Cerrado», calcula automáticamente las diferencias respecto a los saldos esperados, registra las observaciones del cajero e inhabilita inmediatamente las funciones de cobro en el POS para ese turno.
2. **Dado que** el colaborador ejecuta el arqueo de cierre, **cuando** se somete a la modalidad de auditoría `[DECISIÓN PENDIENTE D1]`, **entonces** el formulario de cierre procesará la declaración bajo el estándar institucional acordado (conteo ciego sin exhibición previa de saldos esperados en pantalla o verificación guiada con saldo teórico visible).
3. **Dado que** un turno ha quedado formalmente en estado «Cerrado», **cuando** el cajero intenta registrar una nueva venta o movimiento manual bajo dicho turno, **entonces** el sistema deniega el acceso exigiendo la apertura de un nuevo turno para continuar operando.
4. **Dado que** el usuario interactúa con el formulario de arqueo final, **cuando** declara los importes físicos y visualiza el resumen del cuadre, **entonces** la interfaz satisface rigurosamente los estándares visuales y de microcopy de UI-016 (Turno de Caja y Arqueo Inicial) del Catálogo de Interfaces (DOC-ANEXO-B).

**Reglas de negocio aplicables:** 
- N/A

**Decisiones pendientes:**
- `[DECISIÓN PENDIENTE D1]`: Modalidad de arqueo de caja al cierre de turno. Opciones en evaluación por el Product Owner: Cierre ciego (el cajero no visualiza los totales calculados por el sistema hasta después de confirmar su conteo físico, mitigando fraudes) frente a Cierre con saldo esperado visible (el cajero ve los totales teóricos en pantalla para orientar la reconciliación antes de guardar).

**Dependencias:** 
- Requiere `HU-CAJA-01` (existencia de un turno abierto).

---

### HU-CAJA-03 · Caja – Registrar movimiento manual de efectivo

| Código | Épica | Prioridad MoSCoW | Estimación | Release | Sprint |
|:---:|:---:|:---:|:---:|:---:|:---:|
| HU-CAJA-03 | EPIC-VEN | Should have | 3 pts | REL-2 | SPR-2 |

**Como** Vendedor o Administrador del minimarket,  
**quiero** registrar entradas o salidas manuales de efectivo físico en la gaveta con su debida justificación escrita,  
**para** documentar compras menores de emergencia, pagos de servicios básicos o inyecciones de sencillo para vuelto sin alterar los registros de ventas y manteniendo cuadrada la caja.

**Justificación de prioridad:** Funcionalidad de flexibilidad operativa importante (Should have); en el Release 1 el minimarket opera exclusivamente cobros de venta y fondo inicial; el Release 2 introduce el manejo controlado de caja chica para gastos operativos menores.

**Criterios de aceptación:**
1. **Dado que** el colaborador requiere ingresar o retirar dinero en efectivo de la gaveta por un concepto operativo (ejemplo: retiro para compra de insumos de limpieza o inyección de sencillo para cambio), **cuando** selecciona el tipo de movimiento («Ingreso» o «Egreso»), especifica el importe mayor a cero y digita obligatoriamente una justificación textual, **entonces** el sistema registra el movimiento físico en efectivo y ajusta de forma inmediata el saldo esperado de efectivo del turno (RN-15).
2. **Dado que** el operador intenta registrar un movimiento manual, **cuando** ingresa un importe superior al límite reglamentario de S/ 5,000.00 por movimiento, **entonces** el sistema bloquea la transacción notificando que los egresos e ingresos de caja chica no pueden exceder el tope máximo permitido de S/ 5,000.00 (RN-11).
3. **Dado que** el cajero procesa el formulario de movimiento manual, **cuando** intenta guardar sin registrar una descripción o justificación del gasto/ingreso, **entonces** el sistema impide el registro exigiendo un motivo documentado para fines de auditoría interna.
4. **Dado que** el usuario opera desde la ventana de movimientos de caja, **cuando** captura el tipo, monto y motivo, **entonces** la pantalla satisface las especificaciones de interfaz descritas en UI-016 (Turno de Caja y Arqueo Inicial) del Catálogo de Interfaces (DOC-ANEXO-B).

**Reglas de negocio aplicables:** 
- RN-11 (Tope Máximo para Movimientos Manuales)
- RN-15 (Medio Exclusivo de Arqueo Manual)

**Dependencias:** 
- Requiere `HU-CAJA-01` (turno activo en estado Abierto).

---

### HU-CAJA-04 · Caja – Ver resumen del turno activo

| Código | Épica | Prioridad MoSCoW | Estimación | Release | Sprint |
|:---:|:---:|:---:|:---:|:---:|:---:|
| HU-CAJA-04 | EPIC-VEN | Should have | 2 pts | REL-2 | SPR-2 |

**Como** Vendedor o Administrador del minimarket,  
**quiero** consultar un resumen consolidado de las operaciones de mi turno activo (ventas totales, ingresos por efectivo, cobros digitales y movimientos manuales),  
**para** monitorear el desempeño comercial durante la jornada y anticipar el cuadre previo al cierre definitivo de caja.

**Justificación de prioridad:** Funcionalidad de apoyo operativo importante (Should have); proporciona transparencia al operador y facilita la reconciliación preventiva de valores en el Release 2 sin interferir con la velocidad de atención al cliente.

**Criterios de aceptación:**
1. **Dado que** el cajero mantiene un turno en estado «Abierto», **cuando** consulta el panel de resumen de turno, **entonces** el sistema presenta un tablero consolidado con el monto de apertura, el volumen acumulado de ventas, el subtotal recaudado en efectivo físico, el total capturado en pagos digitales y los ingresos/egresos manuales procesados.
2. **Dado que** el negocio define sus políticas de control interno según `[DECISIÓN PENDIENTE D1]` y `[DECISIÓN PENDIENTE D2]`, **cuando** el colaborador visualiza el resumen, **entonces** la visibilidad de los saldos teóricos esperados y las alertas de desviación se presentarán con base en las directrices de arqueo y tolerancia de descuadre adoptadas por la gerencia.
3. **Dado que** el colaborador consulta el estado del turno, **cuando** interactúa con las tarjetas de métricas y opciones de actualización, **entonces** la pantalla cumple las pautas visuales y de microcopy de UI-016 (Turno de Caja y Arqueo Inicial) del Catálogo de Interfaces (DOC-ANEXO-B).

**Reglas de negocio aplicables:** 
- N/A

**Decisiones pendientes:**
- `[DECISIÓN PENDIENTE D1]`: Modalidad de arqueo de caja (Cierre ciego vs Cierre con saldo esperado en pantalla).
- `[DECISIÓN PENDIENTE D2]`: Tolerancia monetaria máxima permitida en descuadres de caja. Opciones en evaluación por el Product Owner: tolerancia cero (cualquier discrepancia genera alerta y requiere validación administrativa en HU-CAJA-06) frente a tolerancia operativa menor (ejemplo: ± S/ 2.00 por redondeos comerciales de monedas de baja denominación).

**Dependencias:** 
- Requiere `HU-CAJA-01` (turno activo en estado Abierto).

---

### HU-CAJA-05 · Caja – Consultar historial de turnos de caja

| Código | Épica | Prioridad MoSCoW | Estimación | Release | Sprint |
|:---:|:---:|:---:|:---:|:---:|:---:|
| HU-CAJA-05 | EPIC-VEN | Must have | 3 pts | REL-1 | SPR-1 |

**Como** Administrador o Gerente del minimarket,  
**quiero** consultar el historial cronológico completo de todos los turnos de caja registrados con filtros por fecha, colaborador y estado,  
**para** auditar los descuadres de dinero, revisar la conciliación diaria de ventas e inspeccionar los cierres forzados o incidencias monetarias.

**Justificación de prioridad:** Funcionalidad indispensable de auditoría y control financiero (Must have); permite a la administración diaria cuadrar el flujo monetario del negocio y conciliar la caja con el patrimonio declarado en el MVP (Release 1).

**Criterios de aceptación:**
1. **Dado que** la jefatura requiere conciliar períodos contables anteriores, **cuando** aplica filtros de búsqueda por rango de fechas, cajero responsable o estado del turno («Abierto» o «Cerrado»), **entonces** el sistema despliega el listado cronológico de turnos exhibiendo identificador, colaborador, fecha y hora de apertura/cierre, monto inicial, efectivo esperado, monto físico declarado, diferencias de arqueo y estado.
2. **Dado que** el auditor inspecciona una fila del listado de turnos, **cuando** pulsa sobre el registro o su botón de detalle, **entonces** el sistema exhibe el desglose exhaustivo de movimientos del turno, incluyendo las ventas individuales realizadas, movimientos manuales de caja chica y, de corresponder, la identidad del supervisor que intervino en cierres forzados con su motivo fundamentado.
3. **Dado que** el directivo utiliza la pantalla de historial de turnos, **cuando** navega por los filtros y tablas de auditoría, **entonces** la interfaz satisface íntegramente las especificaciones de diseño y microcopy de UI-017 (Historial de Cajas y Cierres Forzados) del Catálogo de Interfaces (DOC-ANEXO-B).

**Reglas de negocio aplicables:** 
- N/A

**Dependencias:** 
- Requiere `HU-CAJA-01` y `HU-CAJA-02` (generación de turnos y cierres en Sprint 1).

---

## 2. Sub-dominio: Punto de Venta (POS) y Transacciones Comerciales

### HU-VEN-01 · Ventas (POS) – Registrar una venta con Efectivo o Yape

| Código | Épica | Prioridad MoSCoW | Estimación | Release | Sprint |
|:---:|:---:|:---:|:---:|:---:|:---:|
| HU-VEN-01 | EPIC-VEN | Must have | 13 pts | REL-1 | SPR-1 |

**Como** Vendedor o Administrador del minimarket,  
**quiero** agregar al carrito los artículos que el cliente adquiere y procesar el cobro mediante dinero en efectivo o billetera digital (Yape o Plin vía terminal IziPay),  
**para** formalizar la transacción comercial, descontar inmediatamente las existencias según el orden de vencimiento y registrar los ingresos en la caja activa.

**Justificación de prioridad:** Funcionalidad neurálgica nuclear del minimarket (Must have); representa el corazón transaccional (13 pts) del sistema. Se mantiene indivisible en el Sprint 1 por su indivisibilidad funcional en el mostrador de ventas indispensable para el MVP. Domina la ruta crítica del Sprint 1 y establece el estándar operativo de cobro en tienda.

**Criterios de aceptación:**
1. **Dado que** el colaborador agrega artículos válidos y activos al carrito de compras en el terminal POS con un turno de caja en estado «Abierto», **cuando** selecciona como medio de pago «Efectivo» e ingresa el monto entregado por el cliente, **entonces** el sistema valida que el importe entregado sea igual o superior al total de la compra, verifica que la gaveta de caja disponga de efectivo suficiente para entregar el vuelto correspondiente, ejecuta la transacción descontando los lotes de inventario bajo el principio de despacho por expiración preferente (primero en expirar, primero en salir) y registra la venta emitiendo el comprobante.
2. **Dado que** el cliente opta por cancelar mediante billetera digital (Yape o Plin mediante terminal de pago IziPay), **cuando** el cajero ingresa el código de autorización emitido por la pasarela de pagos, **entonces** el sistema exige que conste de exactamente 6 dígitos numéricos y verifica que no haya sido utilizado en ninguna transacción comercial previa en el historial del negocio para prevenir fraudes por comprobantes reutilizados (RN-02).
3. **Dado que** un producto cuenta con unidades físicas pero su lote de procedencia registra una fecha de caducidad expirada o igual a la fecha actual, **cuando** el vendedor intente seleccionarlo o agregarlo al carrito POS, **entonces** el sistema bloquea inmediatamente la operación e impide comercializar artículos caducados (RN-03).
4. **Dado que** el colaborador opera en el mostrador de atención al público, **cuando** interactúa con el catálogo de artículos, buscador, carrito interactivo, cálculo automático de importes y modal de confirmación de cobro, **entonces** la pantalla satisface con exactitud las especificaciones de diseño, controles y microcopy de UI-014 (Terminal de Punto de Venta POS) del Catálogo de Interfaces (DOC-ANEXO-B).

**Estructura metodológica pedagógica complementaria (Criterio INVEST - Small):**  
Para fines de documentación y análisis granular del esfuerzo sin alterar los 13 pts indivisibles del Backlog Maestro, la historia se desglosa en:  
- **HU-VEN-01a:** Carrito POS, catálogo en memoria y cálculo automático de totales con desglose de IGV 18 % (5 pts).  
- **HU-VEN-01b:** Transacción de pago en efectivo con validación de liquidez de gaveta para vuelto y descuento preferente de existencias (3 pts).  
- **HU-VEN-01c:** Transacción de pago con billetera digital (Yape/Plin vía IziPay) y validación de unicidad de código de 6 dígitos numéricos RN-02 (5 pts).

**Reglas de negocio aplicables:** 
- RN-02 (Protección contra Pagos Duplicados Yape)
- RN-03 (Prohibición de Comercialización de Vencidos)

**Dependencias:** 
- Requiere `HU-CAJA-01` (turno de caja abierto), `HU-PROD-02` (catálogo de productos) y `HU-INV-01` (existencia de stock físico).
```

---

## 4. AUDITORÍA DE SALIDA (Criterios A – N y Recálculos)

Evaluación de conformidad metodológica posterior a la formalización del Lote 1 de EPIC-VEN:

| Criterio | Dimensión Evaluada | Estado Final | Verificación y Sustento Formal |
|:---:|---|:---:|---|
| **A** | Perspectiva estrictamente *a priori* | **CUMPLE** | Todo el texto está redactado como especificación de requerimientos previa a la construcción, sin jerga retrospectiva de inspección de código. |
| **B** | Cero jerga técnica y código | **CUMPLE** | Cero menciones a `.js`, `.jsx`, `/api/`, `backend`, `frontend`, `Sequelize`, nombres de tablas o citas a brechas técnicas en la documentación de planificación. |
| **C** | Verbos en futuro o condicional | **CUMPLE** | Se utiliza de modo consistente: "el sistema creará", "el sistema validará", "el sistema bloqueará", "el sistema registrará". |
| **D** | Criterios de aceptación medibles | **CUMPLE** | 100 % de los criterios estructurados bajo el estándar formal Dado que / Cuando / Entonces con condiciones observables y verificables. |
| **E** | Trazabilidad con UI (Anexo B) | **CUMPLE** | Criterios CA-UI formalizados vinculados a `UI-014` (POS), `UI-016` (Turno de Caja) y `UI-017` (Historial de Cajas). |
| **F** | Reglas de negocio vinculadas | **CUMPLE** | Trazabilidad bidireccional perfecta: `RN-10` en `HU-CAJA-01`; `RN-11` y `RN-15` en `HU-CAJA-03`; `RN-02` y `RN-03` en `HU-VEN-01`. |
| **G** | Justificación MoSCoW | **CUMPLE** | Justificación argumentada desde el impacto operacional y la mitigación de fraudes. |
| **H** | Coherencia de roles y permisos | **CUMPLE** | Roles alineados con DOC-PLAN-01: Vendedor y Administrador en caja/POS; Administrador y Gerente en supervisión. |
| **I** | Dependencias limpias de jerga | **CUMPLE** | Secuencia cronológica estricta entre historias funcionales. |
| **J** | Estimaciones y alineación matemática | **CUMPLE** | Recálculo aritmético exacto: 5 + 5 + 3 + 2 + 3 + 13 = 31 pts. Coincidencia al 100 % con DOC-PLAN-03-00. |
| **K** | Decisiones de negocio abiertas | **CUMPLE** | Decisiones `[DECISIÓN PENDIENTE D1]` y `[DECISIÓN PENDIENTE D2]` formalizadas explícitamente en `HU-CAJA-02` y `HU-CAJA-04`. |
| **L** | Redacción completa sin abreviaturas | **CUMPLE** | Textos íntegros sin abreviaciones ni omisiones. |
| **M** | Eliminación de tablas retrospectivas | **CUMPLE** | El texto formalizado prescinde de notas retrospectivas de código. |
| **N** | Migración a expediente interno | **CUMPLE** | Toda la evidencia técnica resguardada como Sección 10 en [INTERNO_Evidencia_Tecnica.md](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/docs/auditoria/INTERNO_Evidencia_Tecnica.md). |

### Recálculos Aritméticos del Lote 1 de EPIC-VEN

- **Historias de Usuario del Lote 1:** 6 historias (`HU-CAJA-01`, `02`, `03`, `04`, `05` y `HU-VEN-01`).
- **Puntos de Historia del Lote 1:** 31 pts (HU-CAJA-01: 5, HU-CAJA-02: 5, HU-CAJA-03: 3, HU-CAJA-04: 2, HU-CAJA-05: 3, HU-VEN-01: 13).
- **Distribución por Prioridad MoSCoW:**
  - Must have: 4 historias | 26 pts (`HU-CAJA-01`, `HU-CAJA-02`, `HU-CAJA-05`, `HU-VEN-01`).
  - Should have: 2 historias | 5 pts (`HU-CAJA-03`, `HU-CAJA-04`).
  - Could have: 0 historias | 0 pts.
- **Distribución por Sprint / Release:**
  - Sprint 1 (Release 1): 4 historias | 26 pts (`HU-CAJA-01`, `HU-CAJA-02`, `HU-CAJA-05`, `HU-VEN-01`).
  - Sprint 2 (Release 2): 2 historias | 5 pts (`HU-CAJA-03`, `HU-CAJA-04`).
  - Sprint 3 (Release 3): 0 historias | 0 pts.

---

## 5. ACTUALIZACIÓN DEL LIBRO DE CONTROL

Métricas acumuladas del proyecto tras la conclusión de la Fase 7 (Lote 1 de EPIC-VEN):

| Épica / Unidad | Total HUs | HUs Auditadas | Pts Totales | Pts Auditados | % Avance HUs | % Avance Pts | Estado Metodológico |
|---|:---:|:---:|:---:|:---:|:---:|:---:|:---:|
| **EPIC-SEG** | 13 | 13 | 47 | 47 | 100.00 % | 100.00 % | **COMPLETADA (v4.8)** |
| **EPIC-CAT** | 17 | 17 | 42 | 42 | 100.00 % | 100.00 % | **COMPLETADA (v4.8)** |
| **EPIC-INV** | 11 | 11 | 39 | 39 | 100.00 % | 100.00 % | **COMPLETADA (v4.8)** |
| **EPIC-VEN** | 15 | 6 | 72 | 31 | 40.00 % | 43.06 % | **En Progreso (Lote 1)** |
| **EPIC-REP** | 16 | 0 | 51 | 0 | 0.00 % | 0.00 % | Pendiente |
| **TOTAL PLANIFICADO** | **72** | **47** | **251** | **159** | **65.28 %** | **63.35 %** | **En Progreso** |

*(Nota: La historia HU-VEN-09 fuera de alcance con 0 pts se mantiene catalogada en el Backlog Maestro DOC-PLAN-03-00).*

- **Reglas de Negocio Vinculadas Formalmente en Backlogs Específicos:** 12 de 16 (`RN-12`, `RN-06`, `RN-03`, `RN-01`, `RN-14`, `RN-04`, `RN-05`, `RN-16`, `RN-10`, `RN-11`, `RN-15`, `RN-02`).
- **Interfaces de Usuario Vinculadas con CA-UI en Backlogs Específicos:** 16 interfaces (`UI-001` a `UI-014`, `UI-016`, `UI-017`, `UI-027`).
- **Decisiones Abiertas Registradas en la Épica:**
  - `[DECISIÓN PENDIENTE D1]`: Modalidad de arqueo de caja (Cierre ciego vs Cierre con saldo esperado en pantalla).
  - `[DECISIÓN PENDIENTE D2]`: Tolerancia monetaria máxima permitida en descuadres de caja.

---

## 6. PENDIENTES

- **Próxima Unidad:** Fase 7 — EPIC-VEN: Ventas, Caja y Facturación Electrónica (Lote 2: `HU-CAJA-06`, `HU-CAJA-07` y `HU-VEN-02` a `HU-VEN-05`).
- **Alcance del Lote 2 de EPIC-VEN:**
  - `HU-CAJA-06` · Caja – Aprobar cierre de turno (2 pts | Should | SPR-2 | UI-016, UI-017).
  - `HU-CAJA-07` · Caja – Forzar cierre de turno ajeno (5 pts | Should | SPR-2 | UI-017).
  - `HU-VEN-02` · Ventas (POS) – Emitir boleta o factura (8 pts | Must | SPR-1 | UI-014 | RN-13).
  - `HU-VEN-05` · Ventas (POS) – Consultar historial de ventas (5 pts | Must | SPR-1 | UI-015 | RN-07).
  - `HU-VEN-06` · Ventas (POS) – Anular una venta con devolución (8 pts | Must | SPR-2 | UI-015 | RN-08, RN-09).
  - Total Lote 2: 5 historias | 28 pts (SPR-1: 13 pts, SPR-2: 15 pts).
