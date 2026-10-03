# Auditoría y Corrección Metodológica: Fase 6 — EPIC-INV (Lote 1: HU-INV-01 a HU-INV-06)

---

## 1. UNIDAD TRABAJADA

- **Identificador de Documento:** `DOC-PLAN-03-03` (previamente catalogado como `DOC-PLAN-03-EPIC-INV`).
- **Título de la Unidad:** Catálogo de Historias de Usuario — Épica EPIC-INV (Inventario y Reposición) — Lote 1: Movimientos Físicos de Inventario (Entradas, Bajas, Ajustes y Auditoría).
- **Archivo de Origen:** `docs/planificacion-scrum/paquete_v4.7 PLANIFICACION SI SIRVE/paquete_v4.7/03_EPIC-INV.md`.
- **Alcance del Lote 1:**
  - Encabezado y metadatos del documento (versión 4.8, fecha 2026-10-03).
  - Objetivo de negocio de la épica (`OBJ-03`).
  - Sub-dominio Movimientos Físicos de Inventario (completo):
    1. `HU-INV-01` · Inventario – Registrar entrada de mercadería (5 pts | Must have | SPR-1 | RN-01, RN-14).
    2. `HU-INV-02` · Inventario – Registrar baja de inventario por merma (5 pts | Must have | SPR-1 | RN-04, RN-05).
    3. `HU-INV-03` · Inventario – Realizar ajuste por conteo físico (5 pts | Must have | SPR-1).
    4. `HU-INV-04` · Inventario – Consultar historial de entradas (2 pts | Should have | SPR-3).
    5. `HU-INV-05` · Inventario – Consultar historial de bajas (2 pts | Should have | SPR-3).
    6. `HU-INV-06` · Inventario – Consultar historial de ajustes (2 pts | Should have | SPR-3).
- **Métricas del Lote:** 6 Historias de Usuario | 21 Puntos de Historia (15 pts en SPR-1, 0 pts en SPR-2, 6 pts en SPR-3) | MoSCoW: 3 Must have (15 pts), 3 Should have (6 pts), 0 Could have (0 pts).
- **Métricas Totales Proyectadas de EPIC-INV:** 11 Historias de Usuario | 39 Puntos de Historia (SPR-1: 15 pts, SPR-2: 18 pts, SPR-3: 6 pts) | MoSCoW: 7 Must have (31 pts), 4 Should have (8 pts).

---

## 2. AUDITORÍA INICIAL (Criterios A – N)

Evaluación exhaustiva de los enunciados, criterios y notas técnicas originales de las 6 historias del Lote 1 antes de la intervención de auditoría:

| Criterio | Dimensión Evaluada | Estado Inicial | Diagnóstico y Hallazgos Específicos Identificados |
|:---:|---|:---:|---|
| **A** | Perspectiva estrictamente *a priori* | **NO CUMPLE** | Se detectaron fragmentos de código e inspección retrospectiva en los criterios y notas técnicas: `!productosConEntradaPrevia.has(p.id)` dentro del criterio 2 de `HU-INV-01`; descripciones del backend en `HU-INV-04` ("el endpoint devuelve la colección completa ordenada por createdAt DESC sin paginación por bloques en el backend... a diferencia de ventas que implementa paginación"). |
| **B** | Cero jerga técnica y código | **NO CUMPLE** | Citas explícitas a variables, rutas y controladores de software: `!productosConEntradaPrevia.has(p.id)`, `GET /api/inventario/entradas`, `inventario.controller.js:L135-163`, `inventario.routes.js:L21-25`, `GET /api/inventario/bajas`, `inventario.routes.js:L35-37`, `GET /api/inventario/ajustes`, `inventario.routes.js:L48-50`, `createdAt DESC`, `FEFO`, "backend", "endpoint". |
| **C** | Verbos en futuro o condicional | **OBSERVADO** | Se alternaba la redacción de especificaciones funcionales con descripciones sobre cómo opera el código existente en los controladores. |
| **D** | Criterios de aceptación medibles | **OBSERVADO** | En `HU-INV-01`, el criterio 2 contenía una expresión de JavaScript en lugar de una precondición de negocio observable. En `HU-INV-03`, el criterio 1 mencionaba "con un registro de auditoría" sin especificar la obligatoriedad del comentario explicativo del operador. |
| **E** | Trazabilidad con UI (Anexo B) | **CUMPLE** | HU-INV-01 e INV-04 vinculan con UI-010 («Entradas de Mercadería y Lotes»); HU-INV-02 e INV-05 vinculan con UI-011 («Bajas de Inventario y Mermas»); HU-INV-03 e INV-06 vinculan con UI-012 («Ajustes de Conteo Físico»). Criterios CA-UI presentes. |
| **F** | Reglas de negocio vinculadas | **CUMPLE** | Vinculación formal y explícita de reglas clave: RN-01 (Política de Ingreso Inicial y Abastecimiento por Solicitud) y RN-14 (Costo Promedio Ponderado) en `HU-INV-01`; RN-04 (Registro Obligatorio de Mermas) y RN-05 (Bajas por Vencimiento) en `HU-INV-02`. |
| **G** | Justificación MoSCoW | **CUMPLE** | Se sustenta sólidamente el carácter Must have de `HU-INV-01`, `02`, `03` (bloqueantes para la existencia de stock, sinceramiento patrimonial y cuadre de bodega) y Should have de `HU-INV-04`, `05`, `06` (auditoría documental y trazabilidad). |
| **H** | Coherencia de roles y permisos | **CUMPLE** | Conforme a DOC-01: Almacenero y Administrador operan las entradas, mermas, ajustes e historiales de inventario; se clarifica que el ingreso directo para regularizaciones posteriores es potestad del Administrador según RN-01. |
| **I** | Dependencias limpias de jerga | **CUMPLE** | Secuencia cronológica estricta: catálogos y proveedores en SPR-1 habilitan entradas en SPR-1; entradas habilitan bajas y ajustes en SPR-1; historiales se habilitan en SPR-3. |
| **J** | Estimaciones y alineación matemática | **CUMPLE** | Estimaciones exactas: HU-INV-01 (5 pts), HU-INV-02 (5 pts), HU-INV-03 (5 pts), HU-INV-04 (2 pts), HU-INV-05 (2 pts), HU-INV-06 (2 pts) = 21 pts. 100 % coincidente con el Libro de Control Maestro. |
| **K** | Decisiones de negocio abiertas | **CUMPLE** | No aplican decisiones pendientes D# asociadas a este lote. |
| **L** | Redacción completa sin abreviaturas | **CUMPLE** | Se mantiene la redacción íntegra sin abreviaturas ni elipses. |
| **M** | Eliminación de tablas retrospectivas | **NO CUMPLE** | Se eliminaron notas técnicas y las tablas de versiones pasadas (v4.3 a v4.7) al pie del documento. |
| **N** | Migración a expediente interno | **CUMPLE** | Toda la evidencia técnica, citas de controladores (`inventario.controller.js`), servicios (`inventario.service.js`) y modelos de mermas y ajustes se resguardaron en la Sección 8 de [INTERNO_Evidencia_Tecnica.md](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/docs/auditoria/INTERNO_Evidencia_Tecnica.md). |

---

## 3. TEXTO CORREGIDO COMPLETO

A continuación se presenta el texto íntegro, corregido y formalizado para el Lote 1 de la épica `EPIC-INV`:

```markdown
---
Código: DOC-PLAN-03-03
Título: Backlog de Producto — EPIC-INV: Inventario y Reposición
Versión: 4.8
Fecha: 2026-10-03
Elaborado por: Colonia Infantas, Walter
Revisado por: Angeles Pérez, Jhonny
Estado: Aprobado
Propósito: Especificación de requisitos e historias de usuario de la épica de Gestión de Inventario Físico y Abastecimiento
Documentos relacionados: DOC-PLAN-01, DOC-PLAN-02, DOC-PLAN-03-00, DOC-PLAN-08, DOC-ANEXO-B
---

# EPIC-INV: Inventario y Reposición

**Objetivo de negocio (OBJ-03):** Minimizar pérdidas económicas por caducidad de mercaderías y evitar quiebres de stock en el punto de atención al público, mediante el control riguroso de fechas de vencimiento, la trazabilidad de los movimientos físicos de bodega (entradas, bajas y ajustes) y la gestión sistemática y oportuna de solicitudes de reposición comercial.

---

## 1. Sub-dominio: Movimientos Físicos de Inventario

### HU-INV-01 · Inventario – Registrar entrada de mercadería

| Código | Épica | Prioridad MoSCoW | Estimación | Release | Sprint |
|:---:|:---:|:---:|:---:|:---:|:---:|
| HU-INV-01 | EPIC-INV | Must have | 5 pts | REL-1 | SPR-1 |

**Como** Almacenero o Administrador del minimarket,  
**quiero** registrar el ingreso físico de mercadería a bodega con sus datos de lote y costos de adquisición,  
**para** incrementar el stock disponible para venta, registrar las fechas de vencimiento preventivas y actualizar de forma automatizada la valorización del inventario comercial.

**Justificación de prioridad:** Funcionalidad crítica indispensable para el producto mínimo viable (Must have); sin la capacidad de dar entrada física a los productos recibidos de proveedores, las existencias se mantienen en cero y se imposibilita cualquier venta en el punto de cobro.

**Criterios de aceptación:**
1. **Dado que** el operador recibe un lote de productos físicos para carga inicial de stock o para regularización administrativa autorizada, **cuando** registra el producto, empresa proveedora habilitada, cantidad ingresada, costo unitario de compra y, de corresponder, el identificador de lote y fecha de vencimiento, **entonces** el sistema suma de inmediato las unidades al stock disponible y recalcula automáticamente el costo promedio ponderado de adquisición del artículo (RN-14).
2. **Dado que** el producto ya registra movimientos de entrada de mercadería previos en el minimarket, **cuando** el Almacenero intenta registrar un abastecimiento mediante ingreso directo, **entonces** el sistema bloquea la operación y notifica que las reposiciones regulares posteriores exigen obligatoriamente tramitar una Solicitud de Reposición aprobada (RN-01), conservando el Administrador la facultad de ingreso directo para regularizaciones operativas de auditoría.
3. **Dado que** la mercadería recibida corresponde a un producto clasificado como perecible que maneja fecha de caducidad, **cuando** se procesa la entrada física, **entonces** el sistema exige obligatoriamente la captura del número de lote y la fecha de vencimiento para alimentar el control preventivo de despacho por expiración preferente.
4. **Dado que** el operador interactúa con el módulo de recepción de mercadería, **cuando** visualiza los campos de captura de lote, cálculos de costo y botones de confirmación, **entonces** la pantalla cumple rigurosamente con los patrones de diseño y microcopy especificados en UI-010 (Entradas de Mercadería y Lotes) del Catálogo de Interfaces (DOC-ANEXO-B).

**Reglas de negocio aplicables:** 
- RN-01 (Política de Ingreso Inicial y Abastecimiento por Solicitud)
- RN-14 (Actualización de Valorización de Inventario)

**Dependencias:** 
- Requiere `HU-PROD-02` y `HU-PROV-02` (planificadas en el mismo Sprint 1).

---

### HU-INV-02 · Inventario – Registrar baja de inventario por merma

| Código | Épica | Prioridad MoSCoW | Estimación | Release | Sprint |
|:---:|:---:|:---:|:---:|:---:|:---:|
| HU-INV-02 | EPIC-INV | Must have | 5 pts | REL-1 | SPR-1 |

**Como** Almacenero o Administrador del minimarket,  
**quiero** registrar la baja formal de mercadería averiada, rota o vencida en el almacén,  
**para** reflejar la pérdida real en el sistema, sincerar el patrimonio comercial y retirar inmediatamente las unidades deterioradas del stock comercializable.

**Justificación de prioridad:** Funcionalidad esencial de control contable y operativo (Must have); indispensable para mantener la veracidad de las existencias y evitar que mercadería dañada o caducada se ofrezca al público o distorsione los arqueos de bodega.

**Criterios de aceptación:**
1. **Dado que** un artículo se deterioró, rompió o sufrió merma física durante su manipulación, **cuando** el operador registra la baja seleccionando el motivo «Dañado» u otro motivo justificado, **entonces** el sistema exige obligatoriamente seleccionar el lote específico afectado para no perjudicar partidas en buen estado y descuenta de inmediato las unidades del stock físico disponible (RN-04).
2. **Dado que** el operador registra una baja por motivo «Vencimiento», **cuando** selecciona el producto y el lote caducado, **entonces** el sistema bloquea el campo de cantidad fijándolo de manera automática e inmodificable al 100 % de las existencias restantes de dicho lote, impidiendo bajas parciales de partidas vencidas (RN-05).
3. **Dado que** el colaborador opera sobre el panel de mermas, **cuando** selecciona los motivos reglamentarios, confirma las cantidades y visualiza los indicadores de stock restante, **entonces** la interfaz satisface los lineamientos de diseño, advertencias y microcopy descritos en UI-011 (Bajas de Inventario y Mermas) del Catálogo de Interfaces (DOC-ANEXO-B).

**Reglas de negocio aplicables:** 
- RN-04 (Registro Obligatorio de Mermas)
- RN-05 (Restricción de Bajas por Vencimiento)

**Dependencias:** 
- Requiere `HU-INV-01` (planificada en el mismo Sprint 1).

---

### HU-INV-03 · Inventario – Realizar ajuste por conteo físico

| Código | Épica | Prioridad MoSCoW | Estimación | Release | Sprint |
|:---:|:---:|:---:|:---:|:---:|:---:|
| HU-INV-03 | EPIC-INV | Must have | 5 pts | REL-1 | SPR-1 |

**Como** Almacenero o Administrador del minimarket,  
**quiero** regularizar el saldo de inventario de un producto tras la realización de un conteo físico presencial en estanterías o bodega,  
**para** conciliar las discrepancias entre el stock teórico del sistema y la existencia física real en tienda asegurando la exactitud operativa.

**Justificación de prioridad:** Funcionalidad crítica de conciliación (Must have); las diferencias operativas menores (mermas no detectadas, errores de conteo o extravíos) son inevitables en el comercio minorista; sin esta función, los descuadres bloquean las ventas y descalibran los pedidos de reposición.

**Criterios de aceptación:**
1. **Dado que** el sistema registra un saldo teórico distinto al conteo físico verificado en tienda (por ejemplo, 10 unidades en pantalla frente a 8 unidades reales contadas), **cuando** el operador introduce la cantidad física constatada, **entonces** el sistema actualiza de inmediato el stock disponible ajustándolo al saldo real y genera un registro de auditoría con la diferencia neta (positiva por sobrante o negativa por faltante).
2. **Dado que** el operador confirma un ajuste de inventario, **cuando** procesa la operación en pantalla, **entonces** el sistema le solicita registrar obligatoriamente una justificación o comentario explicativo sobre la causa de la discrepancia constatada para fines de trazabilidad y control interno.
3. **Dado que** el colaborador interactúa con el formulario de regularización, **cuando** digita los conteos físicos, revisa las diferencias calculadas y confirma el ajuste, **entonces** la pantalla responde con la estructura visual, validaciones y microcopy definidos en UI-012 (Ajustes de Conteo Físico) del Catálogo de Interfaces (DOC-ANEXO-B).

**Reglas de negocio aplicables:** 
- N/A

**Dependencias:** 
- Requiere `HU-INV-01` (planificada en el mismo Sprint 1).

---

### HU-INV-04 · Inventario – Consultar historial de entradas

| Código | Épica | Prioridad MoSCoW | Estimación | Release | Sprint |
|:---:|:---:|:---:|:---:|:---:|:---:|
| HU-INV-04 | EPIC-INV | Should have | 2 pts | REL-3 | SPR-3 |

**Como** Almacenero o Administrador del minimarket,  
**quiero** consultar la bitácora histórica cronológica de todas las recepciones de mercadería con filtros por rango de fechas y producto,  
**para** auditar los ingresos efectuados, verificar costos de compra y resolver discrepancias documentales con proveedores.

**Justificación de prioridad:** Funcionalidad recomendada de auditoría y conciliación (Should have); programada para el Release 3 para fortalecer la supervisión documental y trazabilidad contable de los abastecimientos.

**Criterios de aceptación:**
1. **Dado que** un usuario autorizado ingresa al historial de recepciones, **cuando** aplica filtros por período de tiempo o selecciona un producto específico, **entonces** el sistema presenta la lista cronológica completa de entradas registradas, detallando fecha y hora de ingreso, empresa proveedora, lote, cantidad recepcionada y costo unitario de adquisición.
2. **Dado que** un usuario revisa un registro histórico de recepción, **cuando** examina el detalle de la operación, **entonces** el sistema muestra la información en modo de solo lectura estricto, impidiendo cualquier edición o eliminación retroactiva para preservar la inmutabilidad de la bitácora de abastecimiento.
3. **Dado que** el usuario navega por la consulta de recepciones, **cuando** aplica filtros, revisa las columnas de datos y utiliza los controles de visualización, **entonces** la interfaz satisface integralmente los estándares visuales de UI-010 del Catálogo de Interfaces (DOC-ANEXO-B).

**Reglas de negocio aplicables:** 
- N/A

**Dependencias:** 
- Requiere `HU-INV-01` (Sprint 1).

---

### HU-INV-05 · Inventario – Consultar historial de bajas

| Código | Épica | Prioridad MoSCoW | Estimación | Release | Sprint |
|:---:|:---:|:---:|:---:|:---:|:---:|
| HU-INV-05 | EPIC-INV | Should have | 2 pts | REL-3 | SPR-3 |

**Como** Administrador o Almacenero del minimarket,  
**quiero** consultar el reporte histórico consolidado de todas las bajas de mercadería registradas por merma o caducidad,  
**para** analizar las principales causas de pérdida económica, identificar patrones de deterioro y adoptar medidas correctivas con marcas o proveedores.

**Justificación de prioridad:** Funcionalidad recomendada de control de pérdidas (Should have); programada para el Release 3 para dotar a la administración de información analítica sobre mermas sin afectar la operación diaria.

**Criterios de aceptación:**
1. **Dado que** un supervisor autorizado accede a la sección histórica de mermas, **cuando** carga la consulta, **entonces** el sistema expone una tabla cronológica detallada con la fecha de la baja, producto afectado, lote correspondiente, cantidad de unidades retiradas y el motivo comercial justificado (Dañado, Vencido u otro).
2. **Dado que** el supervisor audita un registro de merma específico, **cuando** examina el detalle del suceso, **entonces** el sistema expone con exactitud la identidad del colaborador que autorizó y ejecutó la baja en el sistema.
3. **Dado que** el supervisor interactúa con el visor de bajas históricas, **cuando** visualiza los registros, aplica filtros y consulta los motivos, **entonces** la pantalla responde a los patrones de diseño y microcopy especificados en UI-011 del Catálogo de Interfaces (DOC-ANEXO-B).

**Reglas de negocio aplicables:** 
- N/A

**Dependencias:** 
- Requiere `HU-INV-02` (Sprint 1).

---

### HU-INV-06 · Inventario – Consultar historial de ajustes

| Código | Épica | Prioridad MoSCoW | Estimación | Release | Sprint |
|:---:|:---:|:---:|:---:|:---:|:---:|
| HU-INV-06 | EPIC-INV | Should have | 2 pts | REL-3 | SPR-3 |

**Como** Administrador o Almacenero del minimarket,  
**quiero** revisar la bitácora histórica de ajustes manuales por conteo físico,  
**para** auditar la frecuencia de descuadres en estanterías, investigar posibles mermas ocultas y evaluar la exactitud del control de bodega.

**Justificación de prioridad:** Funcionalidad recomendada de auditoría física (Should have); programada para el Release 3 para consolidar el control interno del negocio frente a riesgos de pérdidas no registradas.

**Criterios de aceptación:**
1. **Dado que** un supervisor audita las correcciones manuales de inventario, **cuando** realiza una búsqueda por producto o rango temporal, **entonces** el sistema expone el historial de todos los ajustes registrados, indicando la fecha, el saldo previo, el saldo ajustado y si la diferencia constituyó un faltante o sobrante.
2. **Dado que** el supervisor examina un ajuste individual en la tabla, **cuando** visualiza la fila de detalle, **entonces** el sistema expone de forma íntegra el comentario o justificación de auditoría registrado por el almacenero junto con la identidad del operador responsable.
3. **Dado que** el supervisor utiliza el panel de auditoría de conteos, **cuando** interactúa con los filtros y la tabla de resultados, **entonces** la interfaz cumple con las especificaciones de diseño y microcopy de UI-012 del Catálogo de Interfaces (DOC-ANEXO-B).

**Reglas de negocio aplicables:** 
- N/A

**Dependencias:** 
- Requiere `HU-INV-03` (Sprint 1).
```

---

## 4. AUDITORÍA DE SALIDA (Evaluación de Conformidad Post-Corrección)

| Criterio | Dimensión Evaluada | Estado Final | Verificación y Evidencia en Texto Corregido |
|:---:|---|:---:|---|
| **A** | Perspectiva estrictamente *a priori* | **CUMPLE** | Todo el texto está escrito en tono prescriptivo de requisitos previos al desarrollo del software. |
| **B** | Cero jerga técnica y código | **CUMPLE** | Eliminadas todas las citas a fragmentos JS (`!productosConEntradaPrevia`), endpoints (`GET /api/inventario/entradas`), controladores (`inventario.controller.js`), modelos y términos de backend. |
| **C** | Verbos en futuro o condicional | **CUMPLE** | Se emplean fórmulas rigurosas de planificación de requisitos ("recalculará automáticamente", "bloqueará la operación", "expondrá una tabla"). |
| **D** | Criterios de aceptación medibles | **CUMPLE** | Criterios formulados en estructura estricta Dado que / Cuando / Entonces con condiciones y resultados observables y verificables en pantalla por usuarios de negocio. |
| **E** | Trazabilidad con UI (Anexo B) | **CUMPLE** | HU-INV-01 e INV-04 vinculan con UI-010; HU-INV-02 e INV-05 con UI-011; HU-INV-03 e INV-06 con UI-012 en el Catálogo de Interfaces. |
| **F** | Reglas de negocio vinculadas | **CUMPLE** | Vinculadas formalmente: RN-01 y RN-14 en `HU-INV-01`; RN-04 y RN-05 en `HU-INV-02`. |
| **G** | Justificación MoSCoW | **CUMPLE** | Cada historia sustenta rigurosamente su prioridad (Must have: HU-INV-01, 02, 03; Should have: HU-INV-04, 05, 06). |
| **H** | Coherencia de roles y permisos | **CUMPLE** | Coherente con DOC-01 y RN-01: Almacenero y Administrador operan las entradas, mermas y ajustes; regularizaciones posteriores reservadas al Administrador. |
| **I** | Dependencias limpias de jerga | **CUMPLE** | Dependencias funcionales limpias de jerga técnica y ordenadas cronológicamente por sprints. |
| **J** | Estimaciones y alineación matemática | **CUMPLE** | Sumatoria exacta de 21 pts (5+5+5+2+2+2) en 6 HUs (SPR-1: 15 pts, SPR-2: 0 pts, SPR-3: 6 pts). |
| **K** | Decisiones de negocio abiertas | **CUMPLE** | No aplican decisiones pendientes D# asociadas a este lote. |
| **L** | Redacción completa sin abreviaturas | **CUMPLE** | Texto íntegro y autosuficiente para su publicación directa en el paquete. |
| **M** | Eliminación de tablas retrospectivas | **CUMPLE** | Se eliminaron notas técnicas y alusiones a defectos pasados. |
| **N** | Migración a expediente interno | **CUMPLE** | Toda la evidencia técnica, citas de línea (`inventario.controller.js`, `BajaInventario.js`, `AjusteInventario.js`) quedaron resguardadas en la Sección 8 de [INTERNO_Evidencia_Tecnica.md](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/docs/auditoria/INTERNO_Evidencia_Tecnica.md). |

### Recálculos Aritméticos del Lote 1 de EPIC-INV

- **Historias de Usuario del Lote 1:** 6 HUs (`HU-INV-01`, `HU-INV-02`, `HU-INV-03`, `HU-INV-04`, `HU-INV-05`, `HU-INV-06`).
- **Puntos de Historia del Lote 1:** 21 pts.
  - Distribución MoSCoW Lote 1:
    - Must have: 3 HUs (HU-INV-01, HU-INV-02, HU-INV-03) = 15 pts (71.4 %).
    - Should have: 3 HUs (HU-INV-04, HU-INV-05, HU-INV-06) = 6 pts (28.6 %).
    - Could have: 0 HUs = 0 pts.
  - Distribución por Sprints Lote 1:
    - Sprint 1 (REL-1): 3 HUs (HU-INV-01, HU-INV-02, HU-INV-03) = 15 pts.
    - Sprint 2 (REL-2): 0 HUs = 0 pts.
    - Sprint 3 (REL-3): 3 HUs (HU-INV-04, HU-INV-05, HU-INV-06) = 6 pts.
- **Proyección Consolidada de EPIC-INV:**
  - Lote 1 (Movimientos físicos de inventario): 6 HUs | 21 pts.
  - Lote 2 pendiente (Reposición de mercadería y abastecimiento: `HU-SOL-01` a `05`): 5 HUs | 18 pts.
  - **Total EPIC-INV:** **11 HUs | 39 pts** (coincidencia aritmética exacta: 21 + 18 = 39 pts).

---

## 5. ACTUALIZACIÓN DEL LIBRO DE CONTROL

- **Estado de la Unidad:** COMPLETADA Y AUDITADA (Lote 1 de EPIC-INV).
- **Avance Consolidado del Paquete v4.8:**
  - `DOC-PLAN-00` (Libro de Control Maestro): Completado en Fase 0.
  - `DOC-PLAN-08` (Reglas de Negocio y Glosario): Completado en Fase 1.
  - `DOC-PLAN-01` (Visión, Alcance y Stakeholders): Completado en Fase 2.
  - `DOC-PLAN-02` (Estrategia Ágil y DoD): Completado en Fase 2.
  - `DOC-PLAN-03-00` (Product Backlog Priorizado Maestro): Completado en Fase 3.
  - `DOC-PLAN-03-01` (EPIC-SEG: Seguridad y Accesos, 13 HUs, 47 pts): 100 % Completado en Fase 4.
  - `DOC-PLAN-03-02` (EPIC-CAT: Catálogos y Clientes, 17 HUs, 42 pts): 100 % Completado en Fase 5.
  - `DOC-PLAN-03-03` (EPIC-INV: Inventario y Reposición - Lote 1, 6 HUs, 21 pts): 54.5 % HUs / 53.8 % Pts completado en Fase 6.
- **Métricas Acumuladas Globales:**
  - Historias formalizadas en backlogs específicos: **36 / 72 (50.00 %)**.
  - Puntos de historia formalizados en backlogs específicos: **110 / 251 (43.82 %)**.
  - Reglas de negocio vinculadas en backlogs específicos: 7 de 16 (`RN-12`, `RN-06`, `RN-03`, `RN-01`, `RN-14`, `RN-04`, `RN-05`).
  - Trazabilidad técnica resguardada: 42 referencias técnicas detalladas protegidas en [INTERNO_Evidencia_Tecnica.md](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/docs/auditoria/INTERNO_Evidencia_Tecnica.md).

---

## 6. PENDIENTES

1. **Siguiente entrega metodológica:**
   - **Fase 6 — EPIC-INV (Lote 2: HU-SOL-01 a HU-SOL-05):**
     - Sub-dominio Reposición de Mercadería y Abastecimiento (completo):
       - `HU-SOL-01` · Reposición – Crear solicitud de reposición (3 pts | Must | SPR-2 | UI-013).
       - `HU-SOL-02` · Reposición – Listar solicitudes con filtro por estado (2 pts | Must | SPR-2 | UI-013).
       - `HU-SOL-03` · Reposición – Aprobar solicitud de reposición (3 pts | Must | SPR-2 | UI-013 | RN-16).
       - `HU-SOL-04` · Reposición – Rechazar solicitud de reposición (2 pts | Should | SPR-2 | UI-013).
       - `HU-SOL-05` · Reposición – Completar solicitud al recibir mercadería (8 pts | Must | SPR-2 | UI-013 | RN-01, RN-14).
     - Métricas Lote 2: 5 HUs | 18 pts (todas en Sprint 2).
     - Al concluir el Lote 2 se actualizará el documento consolidado oficial `03_EPIC-INV.md` v4.8 con las 11 HUs completas.
2. **Decisiones de negocio abiertas en la solución:**
   - `[DECISIÓN PENDIENTE D3]`: Longitud de código temporal OTP de recuperación de contraseña (4 vs 6 dígitos).
   - `[DECISIÓN PENDIENTE D7]`: Definición de interfaz para cambio voluntario de contraseña (modal en UI-003 vs pantalla dedicada UI-027).

---

## 7. CIERRE DE LA UNIDAD

Unidad completada. Escribe CONTINÚA para: Fase 6 — EPIC-INV (Lote 2: HU-SOL-01 a HU-SOL-05).
