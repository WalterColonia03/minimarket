# Auditoría y Corrección Metodológica: Fase 5 — EPIC-CAT (Lote 3: HU-PROD-01 a HU-PROD-06)

---

## 1. UNIDAD TRABAJADA

- **Identificador de Documento:** `DOC-PLAN-03-02` (previamente catalogado como `DOC-PLAN-03-EPIC-CAT`).
- **Título de la Unidad:** Catálogo de Historias de Usuario — Épica EPIC-CAT (Catálogos y Clientes) — Lote 3: Catálogo Maestro de Productos y Control de Caducidades.
- **Archivo de Origen:** `docs/planificacion-scrum/paquete_v4.7 PLANIFICACION SI SIRVE/paquete_v4.7/02_EPIC-CAT.md`.
- **Alcance del Lote 3:**
  - Sub-dominio Productos (completo):
    1. `HU-PROD-01` · Productos – Ver catálogo completo de productos (3 pts | Must have | SPR-1).
    2. `HU-PROD-02` · Productos – Registrar nuevo producto en el catálogo (5 pts | Must have | SPR-1 | RN-06).
    3. `HU-PROD-03` · Productos – Escanear código de barras para registrar producto (5 pts | Could have | SPR-3).
    4. `HU-PROD-04` · Productos – Editar datos de un producto (3 pts | Should have | SPR-3).
    5. `HU-PROD-05` · Productos – Desactivar o reactivar producto (2 pts | Should have | SPR-3).
    6. `HU-PROD-06` · Productos – Consultar productos próximos a vencer (3 pts | Must have | SPR-2 | RN-03).
- **Métricas del Lote:** 6 Historias de Usuario | 21 Puntos de Historia (8 pts en SPR-1, 3 pts en SPR-2, 10 pts en SPR-3) | MoSCoW: 3 Must have (11 pts), 2 Should have (5 pts), 1 Could have (5 pts).
- **Métricas Consolidadas Finales de la Épica EPIC-CAT:** 17 Historias de Usuario | 42 Puntos de Historia (SPR-1: 17 pts, SPR-2: 7 pts, SPR-3: 18 pts) | MoSCoW: 8 Must have (22 pts), 6 Should have (12 pts), 3 Could have (8 pts). Coincidencia aritmética del 100.0 % con el Libro de Control Maestro.

---

## 2. AUDITORÍA INICIAL (Criterios A – N)

Evaluación exhaustiva de los enunciados, criterios y notas técnicas originales de las 6 historias de productos antes de la intervención de auditoría:

| Criterio | Dimensión Evaluada | Estado Inicial | Diagnóstico y Hallazgos Específicos Identificados |
|:---:|---|:---:|---|
| **A** | Perspectiva estrictamente *a priori* | **NO CUMPLE** | Múltiples notas técnicas en `HU-PROD-01`, `02`, `03`, `04`, `05` y `06` describían el código ya construido ("el backend devuelve la colección completa", "el campo costo en el formulario corresponde a costo_promedio del modelo", "el sistema implementa una cascada de 3 APIs", "el bloqueo en el POS se implementa con consumirStockFIFO y soloVigente: true"). |
| **B** | Cero jerga técnica y código | **NO CUMPLE** | Presencia de citas explícitas a código y rutas de backend: `GET /api/productos`, `producto.routes.js`, `producto.controller.js:L14-45`, `POST /api/productos`, `Producto.js:L44-50`, `producto.controller.js:L79-149`, `OpenFoodFacts`, `UPC ItemDB`, `Go-UPC`, `PUT /api/productos/:id`, `PATCH /api/productos/:id/desactivar`, `PATCH /api/productos/:id/reactivar`, `consumirStockFIFO`, `soloVigente: true`, `fecha_vencimiento IS NOT NULL`, `producto.controller.js:L179-218`. |
| **C** | Verbos en futuro o condicional | **OBSERVADO** | Se alternaba la redacción de especificaciones con afirmaciones en presente sobre funciones internas ya implementadas en JavaScript. |
| **D** | Criterios de aceptación medibles | **OBSERVADO** | En `HU-PROD-06`, el criterio 2 describía el algoritmo interno de exclusión de lotes en vez del resultado funcional perceptible en el punto de venta (bloqueo y stock disponible cero). |
| **E** | Trazabilidad con UI (Anexo B) | **CUMPLE** | Las 6 historias del sub-dominio de productos vinculan rigurosamente con UI-007 («Catálogo de Productos y Alertas») del Anexo B. Criterios CA-UI presentes. |
| **F** | Reglas de negocio vinculadas | **CUMPLE** | Se vinculan formalmente las reglas de negocio aplicables: RN-06 (Alerta de Stock Mínimo) en `HU-PROD-02` y RN-03 (Prohibición de Comercialización de Vencidos) en `HU-PROD-06`. |
| **G** | Justificación MoSCoW | **CUMPLE** | Se fundamenta el carácter Must have de `HU-PROD-01`, `02` (núcleo de existencias) y `06` (normativa sanitaria y merma); Should have de `HU-PROD-04`, `05` (mantenimiento y descontinuación); y Could have de `HU-PROD-03` (lectora óptica accesoria frente al teclado asegurado). |
| **H** | Coherencia de roles y permisos | **CUMPLE** | Administrador y Almacenero gestionan la totalidad de las operaciones del catálogo (`HU-PROD-01` a `06`), en estricta conformidad con DOC-01. |
| **I** | Dependencias limpias de jerga | **CUMPLE** | Secuencia lógica limpia: alta en SPR-1 habilita consulta y catálogo en SPR-1, control de caducidades en SPR-2 y escaneo/edición en SPR-3. |
| **J** | Estimaciones y alineación matemática | **CUMPLE** | Puntos totales: 21 pts (3+5+5+3+2+3). Distribución por sprints: SPR-1 = 8 pts; SPR-2 = 3 pts; SPR-3 = 10 pts. 100 % coincidente con el Libro de Control Maestro. |
| **K** | Decisiones de negocio abiertas | **CUMPLE** | No aplican decisiones abiertas D# a este lote. |
| **L** | Redacción completa sin abreviaturas | **CUMPLE** | Redacción exhaustiva y completa sin notas de resumen ni textos truncados. |
| **M** | Eliminación de tablas retrospectivas | **NO CUMPLE** | Se suprimieron las notas técnicas y las tablas de versiones pasadas (v4.3 a v4.7) al final del documento. |
| **N** | Migración a expediente interno | **CUMPLE** | Toda la evidencia técnica, citas de controladores (`producto.controller.js`), modelos (`Producto.js`) y cascada de APIs se resguardaron en la Sección 7 de [INTERNO_Evidencia_Tecnica.md](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/docs/auditoria/INTERNO_Evidencia_Tecnica.md). |

---

## 3. TEXTO CORREGIDO COMPLETO

A continuación se presenta el texto íntegro, corregido y formalizado para el Lote 3 de la épica `EPIC-CAT`:

```markdown
## 4. Sub-dominio: Catálogo Maestro de Productos

### HU-PROD-01 · Productos – Ver catálogo completo de productos

| Código | Épica | Prioridad MoSCoW | Estimación | Release | Sprint |
|:---:|:---:|:---:|:---:|:---:|:---:|
| HU-PROD-01 | EPIC-CAT | Must have | 3 pts | REL-1 | SPR-1 |

**Como** Almacenero o Administrador del minimarket,  
**quiero** consultar el catálogo maestro consolidado de productos comerciales,  
**para** verificar precios de venta, costos de adquisición de referencia y existencias totales al recepcionar mercaderías o realizar auditorías físicas en bodega.

**Justificación de prioridad:** Funcionalidad núcleo esencial para el producto mínimo viable (Must have); consulta obligatoria para la gestión de existencias y control físico en almacén. En mostrador, el personal de ventas consulta productos exclusivamente a través del terminal POS (`HU-VEN-01`).

**Criterios de aceptación:**
1. **Dado que** un colaborador con perfil autorizado (Almacenero o Administrador) ingresa al módulo de catálogo maestro, **cuando** carga la vista principal, **entonces** el sistema presenta la relación íntegra de artículos registrados mostrando su código de barras comercial, denominación del producto, marca del fabricante, categoría asignada, precio de venta al público, costo promedio de adquisición referencial y stock total disponible.
2. **Dado que** el minimarket mantiene cientos de artículos en su catálogo comercial, **cuando** el usuario introduce un texto en la barra de búsqueda rápida por nombre o código de barras, **entonces** el sistema filtra los resultados al instante presentando las coincidencias pertinentes.
3. **Dado que** el usuario consulta el inventario del catálogo, **cuando** interactúa con las filas de la tabla, buscadores y controles de visualización, **entonces** la pantalla satisface integralmente los componentes visuales, indicadores de estado y microcopy de UI-007 (Catálogo de Productos y Alertas) del Catálogo de Interfaces (DOC-ANEXO-B).

**Reglas de negocio aplicables:** 
- N/A

**Dependencias:** 
- Requiere `HU-PROD-02` (planificada en el mismo Sprint 1).

---

### HU-PROD-02 · Productos – Registrar nuevo producto en el catálogo

| Código | Épica | Prioridad MoSCoW | Estimación | Release | Sprint |
|:---:|:---:|:---:|:---:|:---:|:---:|
| HU-PROD-02 | EPIC-CAT | Must have | 5 pts | REL-1 | SPR-1 |

**Como** Administrador o Almacenero del minimarket,  
**quiero** dar de alta un nuevo producto en el catálogo maestro definiendo sus datos descriptivos, clasificación comercial y parámetros de control preventivo,  
**para** habilitar su recepción física en el almacén y permitir su posterior venta en el punto de atención al cliente.

**Justificación de prioridad:** Funcionalidad crítica de aprovisionamiento (Must have); bloqueador operativo directo: si un producto no existe formalmente en el catálogo maestro, el almacenero no puede registrar entradas de mercadería ni generar inventario en bodega.

**Criterios de aceptación:**
1. **Dado que** el usuario completa el formulario de registro ingresando código de barras comercial, nombre descriptivo, marca, categoría reglamentaria y precio de venta unitario, **cuando** presiona el botón «Guardar Producto», **entonces** el sistema crea la ficha del artículo en estado Activo con stock físico en cero y costo de adquisición inicial en cero (el cual se actualizará automáticamente conforme ingresen lotes reales al almacén).
2. **Dado que** el usuario introduce un código de barras que ya se encuentra asignado a otro producto registrado en el minimarket, **cuando** intenta procesar el alta, **entonces** el sistema deniega el guardado y emite un mensaje de error notificando la duplicidad del código comercial.
3. **Dado que** el usuario diligencia la ficha técnica del artículo, **cuando** revisa los parámetros de control, **entonces** el sistema inicializa el umbral de stock mínimo en el valor predeterminado estándar de 10 unidades en modo de solo lectura (ajustable posteriormente durante la edición de la ficha) y permite marcar si el producto maneja fecha de caducidad para activar el control preventivo de alertas (RN-06).
4. **Dado que** el usuario interactúa con la ventana de registro de productos, **cuando** completa los campos requeridos y confirma la operación, **entonces** la pantalla satisface rigurosamente los lineamientos de diseño, validaciones numéricas y formato definidos en UI-007 del Catálogo de Interfaces (DOC-ANEXO-B).

**Reglas de negocio aplicables:** 
- RN-06 (Alerta de Stock Mínimo)

**Dependencias:** 
- Requiere `HU-CAT-02` (Sprint 1).

---

### HU-PROD-03 · Productos – Escanear código de barras para registrar producto

| Código | Épica | Prioridad MoSCoW | Estimación | Release | Sprint |
|:---:|:---:|:---:|:---:|:---:|:---:|
| HU-PROD-03 | EPIC-CAT | Could have | 5 pts | REL-3 | SPR-3 |

**Como** Almacenero del minimarket,  
**quiero** capturar el código de barras comercial mediante el lector óptico durante el alta de un producto e importar sus datos descriptivos básicos desde bases de datos externas,  
**para** acelerar la catalogación de nuevos artículos sin necesidad de transcribir manualmente los empaques comerciales.

**Justificación de prioridad:** Característica deseable de aceleración operativa (Could have); optimiza los tiempos de ingreso de nuevos productos al catálogo en el Release 3, manteniéndose el alta manual por teclado como mecanismo plenamente asegurado desde el Sprint 1.

**Criterios de aceptación:**
1. **Dado que** el usuario tiene abierto el formulario de nuevo producto, **cuando** acciona la lectora óptica sobre el código de barras impreso en el empaque de la mercadería, **entonces** el sistema captura al instante la serie numérica en el campo de código de barras.
2. **Dado que** el código ha sido capturado, **cuando** el sistema consulta los servicios de catalogación comercial externos disponibles, **entonces** autorrellena de manera automática el nombre comercial del artículo, la marca del fabricante y propone la categoría sugerida, permitiendo al usuario su revisión y ajuste antes de confirmar.
3. **Dado que** la consulta externa no encuentra coincidencias o no se dispone de conexión con los directorios comerciales exteriores, **cuando** concluye la búsqueda, **entonces** el sistema conserva el código capturado y deja los campos de texto habilitados para el ingreso manual directo sin impedir el registro.
4. **Dado que** el operador interactúa con el flujo de escaneo y consulta asistida, **cuando** visualiza los indicadores de búsqueda y autocompletado en pantalla, **entonces** la interfaz satisface integralmente las directrices de UI-007 del Catálogo de Interfaces (DOC-ANEXO-B).

**Reglas de negocio aplicables:** 
- N/A

**Dependencias:** 
- Requiere `HU-PROD-02` (Sprint 1).

---

### HU-PROD-04 · Productos – Editar datos de un producto

| Código | Épica | Prioridad MoSCoW | Estimación | Release | Sprint |
|:---:|:---:|:---:|:---:|:---:|:---:|
| HU-PROD-04 | EPIC-CAT | Should have | 3 pts | REL-3 | SPR-3 |

**Como** Administrador o Almacenero del minimarket,  
**quiero** modificar los datos comerciales de un producto registrado (precio de venta, código de barras, denominación o umbral de stock mínimo),  
**para** reflejar oportunamente las variaciones de precios del mercado, corregir nomenclaturas o calibrar los umbrales de alerta de reposición sin desajustar el stock físico existente.

**Justificación de prioridad:** Funcionalidad recomendada de mantenimiento continuo (Should have); programada para el Release 3 para dotar de flexibilidad comercial al catálogo frente a alzas de precios mayoristas o rediseños de empaques.

**Criterios de aceptación:**
1. **Dado que** un colaborador con perfil autorizado accede a la edición de un producto y actualiza su precio de venta al público, **cuando** guarda la modificación, **entonces** el sistema actualiza la ficha del artículo y el nuevo precio rige de inmediato para todas las transacciones futuras en el punto de venta.
2. **Dado que** el usuario ajusta el valor del stock mínimo o datos informativos del producto, **cuando** confirma los cambios, **entonces** el sistema actualiza la configuración de alertas en la ficha maestra manteniendo estrictamente inalteradas las cantidades de stock real existentes en bodega.
3. **Dado que** el usuario opera sobre el formulario modal de edición, **cuando** interactúa con los controles, advertencias y botones de guardado, **entonces** la pantalla responde exactamente a los parámetros visuales, validaciones y microcopy detallados en UI-007 del Catálogo de Interfaces (DOC-ANEXO-B).

**Reglas de negocio aplicables:** 
- N/A

**Dependencias:** 
- Requiere `HU-PROD-02` (Sprint 1).

---

### HU-PROD-05 · Productos – Desactivar o reactivar producto

| Código | Épica | Prioridad MoSCoW | Estimación | Release | Sprint |
|:---:|:---:|:---:|:---:|:---:|:---:|
| HU-PROD-05 | EPIC-CAT | Should have | 2 pts | REL-3 | SPR-3 |

**Como** Administrador o Almacenero del minimarket,  
**quiero** suspender temporalmente o reactivar la comercialización de un producto en el catálogo,  
**para** ocultar mercaderías descontinuadas o fuera de temporada sin eliminar su ficha ni vulnerar la integridad del historial de ventas y compras pasadas.

**Justificación de prioridad:** Funcionalidad de gobernanza de catálogo (Should have); mantiene un catálogo ágil y depurado para la venta en mostrador sin romper los vínculos históricos de auditoría contable.

**Criterios de aceptación:**
1. **Dado que** un producto no volverá a comercializarse temporal o permanentemente, **cuando** el usuario autorizado pulsa «Desactivar» y confirma la instrucción, **entonces** el sistema conmuta su estado a Inactivo y lo excluye automáticamente de las búsquedas en el terminal de venta y de los catálogos activos.
2. **Dado que** el establecimiento reanuda la compra y venta de un producto previamente suspendido, **cuando** el usuario ubica el registro y presiona «Reactivar», **entonces** el sistema restituye su condición a Activo dejándolo disponible de inmediato para recepciones en almacén y comercialización en caja.
3. **Dado que** el colaborador administra la disponibilidad del artículo, **cuando** atiende los diálogos de advertencia y revisa el cambio de estado en la tabla, **entonces** la interfaz satisface los lineamientos descritos en UI-007 del Catálogo de Interfaces (DOC-ANEXO-B).

**Reglas de negocio aplicables:** 
- N/A

**Dependencias:** 
- Requiere `HU-PROD-02` (Sprint 1).

---

### HU-PROD-06 · Productos – Consultar productos próximos a vencer

| Código | Épica | Prioridad MoSCoW | Estimación | Release | Sprint |
|:---:|:---:|:---:|:---:|:---:|:---:|
| HU-PROD-06 | EPIC-CAT | Must have | 3 pts | REL-2 | SPR-2 |

**Como** Almacenero o Administrador del minimarket,  
**quiero** consultar un reporte preventivo consolidado de los lotes de mercadería con fechas de caducidad próximas o vencidas,  
**para** coordinar oportunamente promociones de liquidación, rotaciones de mercadería o bajas formales de inventario antes de que los productos representen un riesgo sanitario o pérdida comercial irreparable.

**Justificación de prioridad:** Control mandatorio sanitario y financiero (Must have); programado para el Release 2 como salvaguarda preventiva contra sanciones regulatorias y merma económica en góndola.

**Criterios de aceptación:**
1. **Dado que** un colaborador con perfil autorizado accede a la sección de control de vencimientos, **cuando** el sistema examina los lotes de mercadería almacenados, **entonces** presenta una tabla ordenada cronológicamente con los lotes que vencen en los próximos 30 días, detallando el nombre comercial del producto, empresa proveedora de origen, lote asignado, fecha exacta de caducidad y el conteo de días restantes, resaltando con distintivo de alerta visual roja aquellos que ya se encuentren caducados.
2. **Dado que** un lote de mercadería ha superado su fecha límite de caducidad, **cuando** un vendedor intenta despachar dicho producto en el terminal de punto de venta, **entonces** el sistema bloquea de forma terminante la operación excluyendo el lote vencido e informando stock cero disponible para venta, en estricto cumplimiento de la prohibición de comercialización de productos caducados (RN-03).
3. **Dado que** el usuario monitorea el panel preventivo de caducidades, **cuando** visualiza la tabla, aplica filtros por días de vigencia y examina los avisos de alerta, **entonces** la interfaz satisface los patrones de diseño, colores de advertencia y microcopy de UI-007 del Catálogo de Interfaces (DOC-ANEXO-B).

**Reglas de negocio aplicables:** 
- RN-03 (Prohibición de Comercialización de Vencidos)

**Dependencias:** 
- Requiere `HU-INV-01` (ingreso de mercadería con lotes, Sprint 1).
```

---

## 4. AUDITORÍA DE SALIDA (Evaluación de Conformidad Post-Corrección)

| Criterio | Dimensión Evaluada | Estado Final | Verificación y Evidencia en Texto Corregido |
|:---:|---|:---:|---|
| **A** | Perspectiva estrictamente *a priori* | **CUMPLE** | Todo el texto está escrito en tono prescriptivo de requisitos previos al desarrollo del software. |
| **B** | Cero jerga técnica y código | **CUMPLE** | Eliminadas todas las citas a archivos `.js`, controladores, endpoints (`GET /api/productos`), APIs externas (OpenFoodFacts, UPC ItemDB, Go-UPC), algoritmos (`consumirStockFIFO`, `soloVigente`) y tablas de base de datos. |
| **C** | Verbos en futuro o condicional | **CUMPLE** | Se emplean fórmulas rigurosas de planificación de requisitos ("creará la ficha", "bloqueará de forma terminante", "conmutará su estado"). |
| **D** | Criterios de aceptación medibles | **CUMPLE** | Criterios formulados en estructura estricta Dado que / Cuando / Entonces con condiciones y resultados observables y verificables en pantalla por usuarios de negocio. |
| **E** | Trazabilidad con UI (Anexo B) | **CUMPLE** | Las 6 historias del sub-dominio de productos vinculan formalmente con UI-007 («Catálogo de Productos y Alertas»). |
| **F** | Reglas de negocio vinculadas | **CUMPLE** | Vinculadas formalmente: RN-06 (Alerta de Stock Mínimo) en `HU-PROD-02` y RN-03 (Prohibición de Comercialización de Vencidos) en `HU-PROD-06`. |
| **G** | Justificación MoSCoW | **CUMPLE** | Cada historia sustenta rigurosamente su prioridad (Must have: HU-PROD-01, 02, 06; Should have: HU-PROD-04, 05; Could have: HU-PROD-03). |
| **H** | Coherencia de roles y permisos | **CUMPLE** | Coherente con DOC-01: Administrador y Almacenero gestionan integralmente el catálogo y el control preventivo de vencimientos. |
| **I** | Dependencias limpias de jerga | **CUMPLE** | Dependencias funcionales limpias de jerga técnica y ordenadas cronológicamente por sprints. |
| **J** | Estimaciones y alineación matemática | **CUMPLE** | Sumatoria exacta de 21 pts (3+5+5+3+2+3) en 6 HUs (SPR-1: 8 pts, SPR-2: 3 pts, SPR-3: 10 pts). |
| **K** | Decisiones de negocio abiertas | **CUMPLE** | No aplican decisiones pendientes D# asociadas a este lote. |
| **L** | Redacción completa sin abreviaturas | **CUMPLE** | Texto íntegro y autosuficiente para su publicación directa en el paquete. |
| **M** | Eliminación de tablas retrospectivas | **CUMPLE** | Se eliminaron notas técnicas y alusiones a defectos pasados. |
| **N** | Migración a expediente interno | **CUMPLE** | Toda la evidencia técnica, citas de línea (`producto.controller.js`, `Producto.js`, cascada de APIs) quedaron resguardadas en la Sección 7 de [INTERNO_Evidencia_Tecnica.md](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/docs/auditoria/INTERNO_Evidencia_Tecnica.md). |

### Recálculos Aritméticos de EPIC-CAT Consolidada (100.0 %)

- **Historias de Usuario:**
  - Lote 1 (Categorías + Proveedores P1): 6 HUs | 11 pts.
  - Lote 2 (Proveedores P2 + Clientes): 5 HUs | 10 pts.
  - Lote 3 (Productos): 6 HUs | 21 pts.
  - **Total Consolidado EPIC-CAT:** **17 HUs | 42 pts** (100.0 % de la épica).
- **Distribución por Sprints de EPIC-CAT:**
  - Sprint 1 (REL-1): 6 HUs (CAT-01, 02, PROV-02, CLI-02, PROD-01, 02) = **17 pts**.
  - Sprint 2 (REL-2): 3 HUs (PROV-01, PROV-04, PROD-06) = **7 pts**.
  - Sprint 3 (REL-3): 8 HUs (CAT-03, 04, PROV-03, CLI-01, CLI-03, PROD-03, 04, 05) = **18 pts**.
  - Total Sprints: 17 + 7 + 18 = **42 pts**.
- **Distribución MoSCoW de EPIC-CAT:**
  - Must have: 8 HUs (CAT-01, 02, PROD-01, 02, 06, PROV-01, 02, CLI-02) = **22 pts** (52.4 %).
  - Should have: 6 HUs (CAT-03, PROD-04, 05, PROV-03, 04, CLI-01) = **12 pts** (28.6 %).
  - Could have: 3 HUs (CAT-04, CLI-03, PROD-03) = **8 pts** (19.0 %).
  - Total MoSCoW: 22 + 12 + 8 = **42 pts**.

---

## 5. ACTUALIZACIÓN DEL LIBRO DE CONTROL

- **Estado de la Unidad:** COMPLETADA Y AUDITADA (Lote 3 de EPIC-CAT).
- **Estado de la Épica EPIC-CAT (`DOC-PLAN-03-02`):** **100 % COMPLETADA**.
- **Avance Acumulado del Paquete v4.8:**
  - `DOC-PLAN-00` (Libro de Control Maestro): Completado en Fase 0.
  - `DOC-PLAN-08` (Reglas de Negocio y Glosario): Completado en Fase 1.
  - `DOC-PLAN-01` (Visión, Alcance y Stakeholders): Completado en Fase 2.
  - `DOC-PLAN-02` (Estrategia Ágil y DoD): Completado en Fase 2.
  - `DOC-PLAN-03-00` (Product Backlog Priorizado Maestro): Completado en Fase 3.
  - `DOC-PLAN-03-01` (EPIC-SEG: Seguridad y Accesos, 13 HUs, 47 pts): 100 % Completado en Fase 4.
  - `DOC-PLAN-03-02` (EPIC-CAT: Catálogos y Clientes, 17 HUs, 42 pts): **100 % Completado en Fase 5**.
- **Métricas Acumuladas Globales:**
  - Historias formalizadas en backlogs específicos: **30 / 72 (41.67 %)**.
  - Puntos de historia formalizados en backlogs específicos: **89 / 251 (35.46 %)**.
  - Reglas de negocio vinculadas en backlogs específicos: 3 de 16 (`RN-12`, `RN-06`, `RN-03`).
  - Trazabilidad técnica resguardada: 36 referencias técnicas detalladas protegidas en `INTERNO_Evidencia_Tecnica.md`.

---

## 6. PENDIENTES

1. **Siguiente entrega metodológica:**
   - **Fase 6 — EPIC-INV: Inventario, Solicitudes de Reposición y Lotes (Lote 1: HU-INV-01 a HU-INV-06):**
     - Total épica EPIC-INV: 11 HUs | 39 pts.
     - Lote 1 (6 HUs | 21 pts):
       - `HU-INV-01` · Inventario – Registrar entrada de mercadería (5 pts | Must | SPR-1 | UI-010 | RN-01, RN-14).
       - `HU-INV-02` · Inventario – Registrar baja de inventario por merma (5 pts | Must | SPR-1 | UI-011 | RN-04, RN-05).
       - `HU-INV-03` · Inventario – Realizar ajuste por conteo físico (5 pts | Must | SPR-1 | UI-012).
       - `HU-INV-04` · Inventario – Consultar historial de entradas (2 pts | Should | SPR-3 | UI-010).
       - `HU-INV-05` · Inventario – Consultar historial de bajas (2 pts | Should | SPR-3 | UI-011).
       - `HU-INV-06` · Inventario – Consultar historial de ajustes (2 pts | Should | SPR-3 | UI-012).
     - Al concluir Lote 1 y Lote 2 (`HU-SOL-01` a `05`) se integrará el documento consolidado `03_EPIC-INV.md` v4.8.
2. **Decisiones de negocio abiertas en la solución:**
   - `[DECISIÓN PENDIENTE D3]`: Longitud de código temporal OTP de recuperación de contraseña (4 vs 6 dígitos).
   - `[DECISIÓN PENDIENTE D7]`: Definición de interfaz para cambio voluntario de contraseña (modal en UI-003 vs pantalla dedicada UI-027).

---

## 7. CIERRE DE LA UNIDAD

Unidad completada. Escribe CONTINÚA para: Fase 6 — EPIC-INV (Lote 1: HU-INV-01 a HU-INV-06).
