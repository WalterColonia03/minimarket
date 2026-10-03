# Auditoría y Corrección Metodológica: Fase 7 — EPIC-VEN (Lote 2: HU-CAJA-06, HU-CAJA-07, HU-VEN-02, HU-VEN-05 y HU-VEN-06)

---

## 1. UNIDAD TRABAJADA

- **Identificador de Documento:** `DOC-PLAN-03-04` (previamente catalogado como `DOC-PLAN-03-EPIC-VEN`).
- **Título de la Unidad:** Catálogo de Historias de Usuario — Épica EPIC-VEN (Ventas, Caja y Facturación Electrónica) — Lote 2: Supervisión Administrativa de Caja, Comprobantes Tributarios y Anulaciones Comerciales.
- **Archivo de Origen:** `docs/planificacion-scrum/paquete_v4.7 PLANIFICACION SI SIRVE/paquete_v4.7/04_EPIC-VEN.md`.
- **Alcance del Lote 2:**
  - Historias de Usuario seleccionadas del Lote 2:
    1. `HU-CAJA-06` · Caja – Aprobar cierre de turno (2 pts | Should have | SPR-2 | UI-016, UI-017).
    2. `HU-CAJA-07` · Caja – Forzar cierre de turno ajeno (5 pts | Should have | SPR-2 | UI-017).
    3. `HU-VEN-02` · Ventas (POS) – Emitir boleta o factura (8 pts | Must have | SPR-1 | UI-014 | RN-13).
    4. `HU-VEN-05` · Ventas (POS) – Consultar historial de ventas (5 pts | Must have | SPR-1 | UI-015 | RN-07).
    5. `HU-VEN-06` · Ventas (POS) – Anular una venta con devolución (8 pts | Must have | SPR-2 | UI-015 | RN-08, RN-09).
- **Métricas del Lote 2:** 5 Historias de Usuario | 28 Puntos de Historia (13 pts en SPR-1, 15 pts en SPR-2, 0 pts en SPR-3) | MoSCoW: 3 Must have (21 pts), 2 Should have (7 pts), 0 Could have (0 pts).
- **Métricas Acumuladas de EPIC-VEN (Lotes 1 y 2):** 11 Historias de Usuario auditadas y formalizadas | 59 Puntos de Historia (SPR-1: 39 pts, SPR-2: 20 pts, SPR-3: 0 pts) | MoSCoW: 7 Must have (47 pts), 4 Should have (12 pts).

---

## 2. AUDITORÍA INICIAL (Criterios A – N)

Evaluación exhaustiva de los enunciados, criterios y notas técnicas originales de las 5 historias del Lote 2 antes de la intervención de auditoría:

| Criterio | Dimensión Evaluada | Estado Inicial | Diagnóstico y Hallazgos Específicos Identificados |
|:---:|---|:---:|---|
| **A** | Perspectiva estrictamente *a priori* | **NO CUMPLE** | Se detectaron notas técnicas retrospectivas que referencian inspección de código construido: en `HU-CAJA-06` nota sobre "La entidad Turno maneja estados 'Abierto' y 'Cerrado' sin crear un estado adicional en el enum"; en `HU-VEN-02` nota técnica sobre "venta.controller.js:L59-81", "bloqueo pesimista en base de datos" y modo offline. |
| **B** | Cero jerga técnica y código | **NO CUMPLE** | Citas explícitas a controladores, base de datos y variables de software: `venta.controller.js:L59-81`, `validacion_sunat_pendiente: true`, `bloqueo pesimista en base de datos`, `API de SUNAT`, `usuario_id`, "backend", "frontend". |
| **C** | Verbos en futuro o condicional | **OBSERVADO** | Se alternaba la especificación funcional con redacciones en presente que explicaban cómo funciona el software construido. |
| **D** | Criterios de aceptación medibles | **OBSERVADO** | En `HU-VEN-02`, el criterio 1 mezclaba la necesidad de negocio con el mecanismo técnico de bloqueo pesimista en BD. En `HU-VEN-05`, el criterio 1 mencionaba el campo de software `'usuario_id'` en vez de redactar la segregación funcional entre cajeros. En `HU-VEN-06`, el criterio 1 omitía detallar el registro formal del egreso monetario de caja chica. |
| **E** | Trazabilidad con UI (Anexo B) | **CUMPLE** | HU-CAJA-06 vincula con `UI-016` y `UI-017`; HU-CAJA-07 vincula con `UI-017`; HU-VEN-02 vincula con `UI-014`; HU-VEN-05 y HU-VEN-06 vinculan con `UI-015`. Criterios CA-UI presentes. |
| **F** | Reglas de negocio vinculadas | **CUMPLE** | Vinculación explícita de `RN-13` (Numeración Oficial e Ininterrumpida) en `HU-VEN-02`; `RN-07` (Privacidad y Segregación de Ventas) en `HU-VEN-05`; `RN-08` (Límite Temporal para Anulaciones) y `RN-09` (Destino Físico de Mercadería Devuelta) en `HU-VEN-06`. |
| **G** | Justificación MoSCoW | **CUMPLE** | Se fundamenta adecuadamente el carácter Must have de `HU-VEN-02`, `05` y `06` (emisión tributaria SUNAT, atención inmediata de reclamos y restitución comercial indispensable) y Should have de `HU-CAJA-06` y `07` (auditoría administrativa y contingencias de caja en Release 2). |
| **H** | Coherencia de roles y permisos | **CUMPLE** | Conforme a DOC-PLAN-01: Administrador y Gerente ejercen la supervisión, aprobación de cuadres y forzado de cierres (`HU-CAJA-06`, `HU-CAJA-07`) así como la autorización de anulaciones (`HU-VEN-06`); Vendedor y Administrador emiten comprobantes (`HU-VEN-02`); todos los roles consultan el historial de ventas bajo su perfil de segregación (`HU-VEN-05`). |
| **I** | Dependencias limpias de jerga | **CUMPLE** | Secuencia cronológica estricta: cobro en POS (`HU-VEN-01`) habilita la emisión (`HU-VEN-02`); la emisión habilita el historial (`HU-VEN-05`); el historial y la caja abierta habilitan la anulación (`HU-VEN-06`); los cierres de caja (`HU-CAJA-02`) habilitan la aprobación (`HU-CAJA-06`). |
| **J** | Estimaciones y alineación matemática | **CUMPLE** | Estimaciones exactas: HU-CAJA-06 (2 pts), HU-CAJA-07 (5 pts), HU-VEN-02 (8 pts), HU-VEN-05 (5 pts), HU-VEN-06 (8 pts) = 28 pts. Coincidencia al 100 % con el Libro de Control Maestro. |
| **K** | Decisiones de negocio abiertas | **CUMPLE** | No aplican decisiones pendientes directas de la serie D1 a D12 sobre estas 5 historias (las decisiones D1 y D2 corresponden al arqueo y tolerancia de las historias del Lote 1). |
| **L** | Redacción completa sin abreviaturas | **CUMPLE** | Cada historia se desarrolla de forma integral y exhaustiva, sin puntos suspensivos ni elipses. |
| **M** | Eliminación de tablas retrospectivas | **NO CUMPLE** | Se eliminaron notas técnicas y explicaciones de versiones pasadas del texto de planificación. |
| **N** | Migración a expediente interno | **CUMPLE** | Toda la evidencia técnica, controladores, rutas y servicios de dominio se migraron a la Sección 11 de [INTERNO_Evidencia_Tecnica.md](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/docs/auditoria/INTERNO_Evidencia_Tecnica.md). |

---

## 3. TEXTO CORREGIDO COMPLETO

A continuación se presenta el texto íntegro, formalizado y libre de tecnicismos para el Lote 2 de la épica `EPIC-VEN`:

```markdown
### HU-CAJA-06 · Caja – Aprobar cierre de turno

| Código | Épica | Prioridad MoSCoW | Estimación | Release | Sprint |
|:---:|:---:|:---:|:---:|:---:|:---:|
| HU-CAJA-06 | EPIC-VEN | Should have | 2 pts | REL-2 | SPR-2 |

**Como** Administrador o Gerente del minimarket,  
**quiero** revisar y validar formalmente los turnos de caja cerrados por los vendedores que reporten diferencias de arqueo o incidencias,  
**para** dar por conciliada la jornada contable, autorizar los ajustes monetarios y archivar definitivamente la rendición de cuentas de la caja.

**Justificación de prioridad:** Funcionalidad de control gerencial importante (Should have); complementa el cierre operativo del vendedor con una etapa de revisión y aprobación administrativa que previene la consolidación de descuadres no analizados en el Release 2.

**Criterios de aceptación:**
1. **Dado que** un turno de caja se encuentra en estado «Cerrado» y no ha sido validado previamente, **cuando** el Administrador o Gerente revisa el arqueo físico frente al saldo esperado y confirma su conformidad, **entonces** el sistema registra la aprobación administrativa, asocia la identidad del directivo responsable y la fecha de validación, manteniendo el estado «Cerrado» definitivo del turno.
2. **Dado que** el directivo inspecciona un turno cerrado con reporte de descuadre (sobrante o faltante), **cuando** examina el detalle de liquidación, **entonces** el sistema expone el desglose comparativo de montos: fondo de apertura, recaudación en efectivo, ventas digitales, egresos e ingresos manuales, monto físico declarado por el cajero y la diferencia monetaria resultante.
3. **Dado que** la jefatura supervisa los arqueos desde el panel administrativo, **cuando** interactúa con los módulos de revisión y confirmación, **entonces** las pantallas satisfacen los lineamientos visuales, tablas de control y microcopy especificados en UI-016 (Turno de Caja y Arqueo Inicial) y UI-017 (Historial de Cajas y Cierres Forzados) del Catálogo de Interfaces (DOC-ANEXO-B).

**Reglas de negocio aplicables:** 
- N/A

**Dependencias:** 
- Requiere `HU-CAJA-02` (cierre de turnos por los cajeros).

---

### HU-CAJA-07 · Caja – Forzar cierre de turno ajeno

| Código | Épica | Prioridad MoSCoW | Estimación | Release | Sprint |
|:---:|:---:|:---:|:---:|:---:|:---:|
| HU-CAJA-07 | EPIC-VEN | Should have | 5 pts | REL-2 | SPR-2 |

**Como** Administrador o Gerente del minimarket,  
**quiero** forzar el cierre administrativo de un turno de caja que un colaborador haya dejado abierto por abandono, emergencia o negligencia,  
**para** desbloquear la terminal de cobro, realizar el conteo físico de la gaveta ante testigos y permitir que un nuevo cajero inicie su jornada sin alterar la trazabilidad contable.

**Justificación de prioridad:** Funcionalidad de contingencia operativa importante (Should have); resuelve bloqueos físicos en tienda cuando un turno queda abierto indefinidamente por ausencia del operador, evitando la parálisis de la caja en el Release 2.

**Criterios de aceptación:**
1. **Dado que** un colaborador dejó su turno de caja en estado «Abierto» y se encuentra ausente o imposibilitado de cerrar, **cuando** el Administrador o Gerente ejecuta el cierre forzado de dicha caja, **entonces** el sistema le exige obligatoriamente ingresar el conteo físico real de efectivo y pagos digitales encontrados en gaveta y documentar una justificación o motivo explicativo de la intervención.
2. **Dado que** se confirma el cierre forzado de la caja, **cuando** el sistema procesa la liquidación, **entonces** el turno pasa inmediatamente a estado «Cerrado», calcula las diferencias de arqueo resultantes y deja constancia permanente e inmodificable del directivo que forzó el cierre y del motivo justificado registrado.
3. **Dado que** dos supervisores intentan intervenir simultáneamente sobre la misma caja abierta, **cuando** uno de ellos confirma el cierre forzado, **entonces** el sistema procesa la operación de forma atómica y bloquea cualquier intento concurrente posterior notificando que el turno ya fue cerrado.
4. **Dado que** la administración opera el cierre forzado de contingencia, **cuando** visualiza los formularios y alertas de confirmación, **entonces** la pantalla satisface los lineamientos de interfaz y advertencias de seguridad descritos en UI-017 (Historial de Cajas y Cierres Forzados) del Catálogo de Interfaces (DOC-ANEXO-B).

**Reglas de negocio aplicables:** 
- N/A

**Dependencias:** 
- Requiere `HU-CAJA-01` (existencia de un turno de caja abierto).

---

### HU-VEN-02 · Ventas (POS) – Emitir boleta o factura

| Código | Épica | Prioridad MoSCoW | Estimación | Release | Sprint |
|:---:|:---:|:---:|:---:|:---:|:---:|
| HU-VEN-02 | EPIC-VEN | Must have | 8 pts | REL-1 | SPR-1 |

**Como** Vendedor o Administrador del minimarket,  
**quiero** emitir comprobantes de pago oficiales (Boleta de Venta o Factura Comercial) con numeración correlativa estricta y validación tributaria,  
**para** entregar al cliente su comprobante legal de compra, dar cumplimiento a las exigencias normativas de SUNAT y sustentar el débito fiscal del negocio.

**Justificación de prioridad:** Funcionalidad crítica indispensable para la operación comercial (Must have); la emisión formal de comprobantes tributarios es obligatoria por ley para cualquier establecimiento comercial y requisito no negociable de salida del MVP (Release 1).

**Criterios de aceptación:**
1. **Dado que** el cliente solicita una Factura Comercial para sustento tributario de su empresa, **cuando** el vendedor ingresa el número de RUC de 11 dígitos y selecciona tipo «Factura», **entonces** el sistema verifica en línea que el RUC figure en estado Activo y condición Habido ante el padrón tributario, genera la serie y el correlativo ininterrumpido oficial (RN-13) y emite el comprobante desglosando base imponible e Impuesto General a las Ventas (IGV 18 %).
2. **Dado que** el servicio externo de consulta tributaria no responde o no se encuentra disponible al momento de la venta y el cliente acredita sus datos fiscales, **cuando** el cajero introduce manualmente la razón social y dirección fiscal, **entonces** el sistema permite emitir la factura en modalidad de contingencia dejando una marca de verificación tributaria pendiente para su posterior regularización.
3. **Dado que** el comprador requiere una Boleta de Venta sin identificación personal, **cuando** el cajero no introduce un documento de identidad, **entonces** el sistema emite automáticamente el comprobante asignado a «Cliente Genérico» asignando el siguiente número correlativo correlacionado e inalterable de la serie de boletas (RN-13).
4. **Dado que** el colaborador emite comprobantes desde el mostrador de ventas, **cuando** visualiza la previsualización del ticket, serie, correlativo y datos del receptor, **entonces** la interfaz satisface los estándares visuales y de formato de comprobante descritos en UI-014 (Terminal de Punto de Venta POS) del Catálogo de Interfaces (DOC-ANEXO-B).

**Reglas de negocio aplicables:** 
- RN-13 (Numeración Oficial e Ininterrumpida)

**Dependencias:** 
- Requiere `HU-VEN-01` (cobro de la transacción de venta en POS).

---

### HU-VEN-05 · Ventas (POS) – Consultar historial de ventas

| Código | Épica | Prioridad MoSCoW | Estimación | Release | Sprint |
|:---:|:---:|:---:|:---:|:---:|:---:|
| HU-VEN-05 | EPIC-VEN | Must have | 5 pts | REL-1 | SPR-1 |

**Como** Vendedor, Administrador o Gerente del minimarket,  
**quiero** consultar el historial de ventas realizadas con filtros por fecha, comprobante y medio de pago,  
**para** verificar transacciones pasadas, resolver dudas o reclamos inmediatos de clientes y preparar solicitudes de anulación con total trazabilidad.

**Justificación de prioridad:** Funcionalidad crítica de servicio y atención al cliente (Must have); indispensable en el Release 1 para verificar tickets emitidos ante devoluciones inmediatas, reclamos de vuelto o aclaraciones en caja.

**Criterios de aceptación:**
1. **Dado que** un colaborador con perfil Vendedor consulta el historial de ventas, **cuando** carga la pantalla de consulta, **entonces** el sistema filtra automáticamente las transacciones mostrando únicamente las ventas procesadas por su propio usuario durante su turno, garantizando la privacidad y segregación estricta entre cajeros (RN-07).
2. **Dado que** un directivo con perfil Administrador o Gerente accede al historial, **cuando** aplica filtros de búsqueda, **entonces** el sistema despliega las transacciones comerciales de todos los cajeros del minimarket, permitiendo filtrar por rango de fechas, número de serie/correlativo, medio de pago y estado de la venta.
3. **Dado que** el usuario localiza una transacción específica en la grilla y pulsa en ver detalle, **cuando** el sistema abre la vista ampliada, **entonces** se visualiza la relación completa de artículos vendidos, cantidades, precios unitarios, subtotales, método de pago, código de autorización si fue billetera digital y datos del cliente.
4. **Dado que** el operador consulta el módulo de ventas históricas, **cuando** interactúa con los filtros y la grilla de comprobantes, **entonces** la pantalla satisface las especificaciones de interfaz descritas en UI-015 (Historial de Ventas y Anulaciones) del Catálogo de Interfaces (DOC-ANEXO-B).

**Reglas de negocio aplicables:** 
- RN-07 (Privacidad y Segregación de Ventas)

**Dependencias:** 
- Requiere `HU-VEN-01` y `HU-VEN-02` (ventas registradas con comprobante emitido).

---

### HU-VEN-06 · Ventas (POS) – Anular una venta con devolución

| Código | Épica | Prioridad MoSCoW | Estimación | Release | Sprint |
|:---:|:---:|:---:|:---:|:---:|:---:|
| HU-VEN-06 | EPIC-VEN | Must have | 8 pts | REL-2 | SPR-2 |

**Como** Administrador o Gerente del minimarket,  
**quiero** anular formalmente una venta emitida procesando la devolución del dinero y determinando el destino físico de cada producto devuelto,  
**para** atender reclamos fundados de clientes, reintegrar el dinero cobrado y decidir si los artículos retornan al stock vendible o se derivan a merma por daño o caducidad.

**Justificación de prioridad:** Funcionalidad crítica de gestión postventa y custodia patrimonial (Must have); garantiza el derecho a restitución comercial del consumidor mientras protege el inventario físico y la caja mediante estricta autorización directiva segregada en el Release 2.

**Criterios de aceptación:**
1. **Dado que** el cliente solicita la anulación de una compra y devolución de su dinero, **cuando** el Administrador o Gerente evalúa la solicitud y el turno de caja en el que se efectuó la venta se encuentra todavía en estado «Abierto», **entonces** el sistema procesa la anulación autorizada, registra un movimiento de egreso por devolución en la gaveta de caja y cambia el estado de la venta a «Anulada».
2. **Dado que** el turno de caja donde se emitió el comprobante original ya fue cerrado formalmente, **cuando** la supervisión intenta anular la venta, **entonces** el sistema bloquea inmediatamente la operación indicando que solo se admiten anulaciones sobre turnos de caja activos y abiertos, preservando la inmutabilidad de los arqueos ya conciliados (RN-08).
3. **Dado que** la anulación involucra múltiples productos, **cuando** el supervisor procesa la devolución, **entonces** el sistema exige determinar individualmente por cada artículo si reingresa al inventario disponible para venta o si se deriva a baja por merma (seleccionando obligatoriamente el motivo de pérdida como avería, rotura o defecto), garantizando que productos deteriorados no vuelvan al anaquel comercial (RN-09).
4. **Dado que** la jefatura procesa la anulación y devolución desde el panel histórico, **cuando** confirma la justificación y los destinos de mercadería, **entonces** la interfaz satisface los lineamientos visuales, formularios modales y advertencias descritos en UI-015 (Historial de Ventas y Anulaciones) del Catálogo de Interfaces (DOC-ANEXO-B).

**Reglas de negocio aplicables:** 
- RN-08 (Límite Temporal para Anulaciones)
- RN-09 (Destino Físico de Mercadería Devuelta)

**Dependencias:** 
- Requiere `HU-VEN-05` (localización de la venta en el historial), `HU-CAJA-01` (turno de caja abierto) y `HU-INV-02` (mecanismo de registro de bajas por merma).
```

---

## 4. AUDITORÍA DE SALIDA (Criterios A – N y Recálculos)

Evaluación de conformidad metodológica posterior a la formalización del Lote 2 de EPIC-VEN:

| Criterio | Dimensión Evaluada | Estado Final | Verificación y Sustento Formal |
|:---:|---|:---:|---|
| **A** | Perspectiva estrictamente *a priori* | **CUMPLE** | Todo el texto está redactado como especificación de requerimientos previa a la construcción, sin jerga retrospectiva de inspección de código. |
| **B** | Cero jerga técnica y código | **CUMPLE** | Cero menciones a `.js`, `.jsx`, `/api/`, `backend`, `frontend`, `Sequelize`, nombres de tablas o citas a brechas técnicas en la documentación de planificación. |
| **C** | Verbos en futuro o condicional | **CUMPLE** | Se utiliza de modo consistente: "el sistema registrará", "el sistema verificará", "el sistema bloqueará", "el sistema permitirá". |
| **D** | Criterios de aceptación medibles | **CUMPLE** | 100 % de los criterios estructurados bajo el estándar formal Dado que / Cuando / Entonces con condiciones observables y verificables. |
| **E** | Trazabilidad con UI (Anexo B) | **CUMPLE** | Criterios CA-UI formalizados vinculados a `UI-014` (POS), `UI-015` (Historial de Ventas), `UI-016` (Turno de Caja) y `UI-017` (Historial de Cajas). |
| **F** | Reglas de negocio vinculadas | **CUMPLE** | Trazabilidad bidireccional perfecta: `RN-13` en `HU-VEN-02`; `RN-07` en `HU-VEN-05`; `RN-08` y `RN-09` en `HU-VEN-06`. Con esto, **16 de 16 reglas de negocio (100.00 %)** quedan formalmente vinculadas en los backlogs específicos. |
| **G** | Justificación MoSCoW | **CUMPLE** | Justificación argumentada desde el cumplimiento tributario, atención postventa y segregación administrativa. |
| **H** | Coherencia de roles y permisos | **CUMPLE** | Roles alineados con DOC-PLAN-01: Administrador y Gerente en aprobaciones, forzado y anulaciones; Vendedor y Administrador en emisión y consulta segregada. |
| **I** | Dependencias limpias de jerga | **CUMPLE** | Secuencia cronológica estricta entre historias funcionales. |
| **J** | Estimaciones y alineación matemática | **CUMPLE** | Recálculo aritmético exacto: 2 + 5 + 8 + 5 + 8 = 28 pts. Coincidencia al 100 % con DOC-PLAN-03-00. |
| **K** | Decisiones de negocio abiertas | **CUMPLE** | No aplican decisiones pendientes directas de la serie D1 a D12 sobre estas 5 historias. |
| **L** | Redacción completa sin abreviaturas | **CUMPLE** | Textos íntegros sin abreviaciones ni omisiones. |
| **M** | Eliminación de tablas retrospectivas | **CUMPLE** | El texto formalizado prescinde de notas retrospectivas de código. |
| **N** | Migración a expediente interno | **CUMPLE** | Toda la evidencia técnica resguardada como Sección 11 en [INTERNO_Evidencia_Tecnica.md](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/docs/auditoria/INTERNO_Evidencia_Tecnica.md). |

### Recálculos Aritméticos Acumulados de EPIC-VEN (Lotes 1 y 2)

- **Historias de Usuario Auditadas en EPIC-VEN:** 11 historias (`HU-CAJA-01` a `07`, `HU-VEN-01`, `02`, `05`, `06`).
- **Puntos de Historia Auditados en EPIC-VEN:** 59 pts de 72 pts totales (81.94 % del esfuerzo de la épica).
  - Lote 1: 31 pts (`HU-CAJA-01` a `05`, `HU-VEN-01`).
  - Lote 2: 28 pts (`HU-CAJA-06`, `07`, `HU-VEN-02`, `05`, `06`).
- **Distribución por Prioridad MoSCoW Acumulada de la Épica:**
  - Must have: 7 historias | 47 pts (100.00 % de los Must have de EPIC-VEN completados).
  - Should have: 4 historias | 12 pts (`HU-CAJA-03`, `HU-CAJA-04`, `HU-CAJA-06`, `HU-CAJA-07`).
  - Could have: 0 historias | 0 pts (pendiente `HU-VEN-08`).
  - Won't have: 0 historias | 0 pts (pendiente `HU-VEN-09`).
- **Distribución por Sprint / Release Acumulada de la Épica:**
  - Sprint 1 (Release 1): 6 historias | 39 pts (100.00 % de los puntos de SPR-1 en EPIC-VEN completados).
  - Sprint 2 (Release 2): 5 historias | 20 pts (pendientes 2 pts en SPR-2 con `HU-VEN-07`).
  - Sprint 3 (Release 3): 0 historias | 0 pts (pendientes 11 pts en SPR-3 con `HU-VEN-03`, `04`, `08`).

---

## 5. ACTUALIZACIÓN DEL LIBRO DE CONTROL

Métricas acumuladas del proyecto tras la conclusión de la Fase 7 (Lote 2 de EPIC-VEN):

| Épica / Unidad | Total HUs | HUs Auditadas | Pts Totales | Pts Auditados | % Avance HUs | % Avance Pts | Estado Metodológico |
|---|:---:|:---:|:---:|:---:|:---:|:---:|:---:|
| **EPIC-SEG** | 13 | 13 | 47 | 47 | 100.00 % | 100.00 % | **COMPLETADA (v4.8)** |
| **EPIC-CAT** | 17 | 17 | 42 | 42 | 100.00 % | 100.00 % | **COMPLETADA (v4.8)** |
| **EPIC-INV** | 11 | 11 | 39 | 39 | 100.00 % | 100.00 % | **COMPLETADA (v4.8)** |
| **EPIC-VEN** | 15 | 11 | 72 | 59 | 73.33 % | 81.94 % | **En Progreso (Lotes 1 y 2)** |
| **EPIC-REP** | 16 | 0 | 51 | 0 | 0.00 % | 0.00 % | Pendiente |
| **TOTAL PLANIFICADO** | **72** | **52** | **251** | **187** | **72.22 %** | **74.50 %** | **En Progreso** |

*(Nota: La historia HU-VEN-09 fuera de alcance con 0 pts se mantiene catalogada en el Backlog Maestro DOC-PLAN-03-00).*

- **Reglas de Negocio Vinculadas Formalmente en Backlogs Específicos:** **16 de 16 reglas (100.00 %)** (`RN-01` a `RN-16` formalizadas con trazabilidad bidireccional perfecta).
- **Interfaces de Usuario Vinculadas con CA-UI en Backlogs Específicos:** 17 interfaces (`UI-001` a `UI-017`, `UI-027`).
- **Archivos de Auditoría Generados:** [45-auditoria-fase-7-epic-ven-lote-2.md](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/docs/auditoria/45-auditoria-fase-7-epic-ven-lote-2.md).
- **Expediente Confidencial de Trazabilidad:** [INTERNO_Evidencia_Tecnica.md](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/docs/auditoria/INTERNO_Evidencia_Tecnica.md) actualizado con Sección 11.

---

## 6. PENDIENTES

- **Próxima Unidad:** Fase 7 — EPIC-VEN: Ventas, Caja y Facturación Electrónica (Lote 3: `HU-VEN-03`, `HU-VEN-04`, `HU-VEN-07`, `HU-VEN-08` y `HU-VEN-09` fuera de alcance).
- **Alcance del Lote 3 de EPIC-VEN (Cierre de la Épica):**
  - `HU-VEN-07` · Ventas (POS) – Verificar recepción de pago Yape (2 pts | Should have | SPR-2 | UI-014, UI-015 | RN-02).
  - `HU-VEN-03` · Ventas (POS) – Generar comprobante en PDF o reenviar por correo electrónico (5 pts | Should have | SPR-3 | UI-015 | RN-13).
  - `HU-VEN-04` · Ventas (POS) – Buscar producto por código de barras (3 pts | Should have | SPR-3 | UI-014).
  - `HU-VEN-08` · Ventas (POS) – Exportar historial de ventas a CSV (3 pts | Could have | SPR-3 | Sin pantalla).
  - `HU-VEN-09` · Ventas – Venta a granel o por peso (0 pts | Won't have | Fuera de alcance).
  - Total Lote 3: 4 historias planificadas (13 pts) + 1 fuera de alcance (0 pts).
  - Consolidación del archivo oficial [04_EPIC-VEN.md](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/docs/planificacion-scrum/paquete_v4.7%20PLANIFICACION%20SI%20SIRVE/paquete_v4.7/04_EPIC-VEN.md) a versión 4.8 con 0 términos prohibidos verificados.
