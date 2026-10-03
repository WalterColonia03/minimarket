# Auditoría y Corrección Metodológica: Fase 6 — EPIC-INV (Lote 2: HU-SOL-01 a HU-SOL-05)

---

## 1. UNIDAD TRABAJADA

- **Identificador de Documento:** `DOC-PLAN-03-03` (previamente catalogado como `DOC-PLAN-03-EPIC-INV`).
- **Título de la Unidad:** Catálogo de Historias de Usuario — Épica EPIC-INV (Inventario y Reposición) — Lote 2: Reposición de Mercadería y Abastecimiento Comercial.
- **Archivo de Origen:** `docs/planificacion-scrum/paquete_v4.7 PLANIFICACION SI SIRVE/paquete_v4.7/03_EPIC-INV.md`.
- **Alcance del Lote 2:**
  - Sub-dominio Reposición de Mercadería y Abastecimiento (completo):
    1. `HU-SOL-01` · Reposición – Crear solicitud de reposición (3 pts | Must have | SPR-2 | UI-013).
    2. `HU-SOL-02` · Reposición – Listar solicitudes con filtro por estado (2 pts | Must have | SPR-2 | UI-013).
    3. `HU-SOL-03` · Reposición – Aprobar solicitud de reposición (3 pts | Must have | SPR-2 | UI-013 | RN-16).
    4. `HU-SOL-04` · Reposición – Rechazar solicitud de reposición (2 pts | Should have | SPR-2 | UI-013).
    5. `HU-SOL-05` · Reposición – Completar solicitud al recibir mercadería (8 pts | Must have | SPR-2 | UI-013 | RN-01, RN-14).
- **Métricas del Lote:** 5 Historias de Usuario | 18 Puntos de Historia (0 pts en SPR-1, 18 pts en SPR-2, 0 pts en SPR-3) | MoSCoW: 4 Must have (16 pts), 1 Should have (2 pts), 0 Could have (0 pts).
- **Métricas Totales Auditadas y Consolidadas de EPIC-INV:** 11 Historias de Usuario | 39 Puntos de Historia (SPR-1: 15 pts, SPR-2: 18 pts, SPR-3: 6 pts) | MoSCoW: 7 Must have (31 pts), 4 Should have (8 pts).

---

## 2. AUDITORÍA INICIAL (Criterios A – N)

Evaluación exhaustiva de los enunciados, criterios y notas técnicas originales de las 5 historias del Lote 2 antes de la intervención de auditoría:

| Criterio | Dimensión Evaluada | Estado Inicial | Diagnóstico y Hallazgos Específicos Identificados |
|:---:|---|:---:|---|
| **A** | Perspectiva estrictamente *a priori* | **NO CUMPLE** | Se detectaron descripciones retrospectivas que referencian la inspección del software construido: en `HU-SOL-05` nota técnica explícita citando "En la capa backend (inventario.controller.js:L594-626)... en la interfaz frontend actual (SolicitudesPage.jsx:L406-413)...". En `HU-SOL-04` cita de "brecha INV-B01: el campo motivo_rechazo es aceptado por el backend pero no es validado como obligatorio". |
| **B** | Cero jerga técnica y código | **NO CUMPLE** | Múltiples menciones directas a archivos de código, controladores, tablas y rutas: `inventario.controller.js:L594-626`, `SolicitudesPage.jsx:L406-413`, `PATCH /api/inventario/solicitudes/:id/rechazar`, `inventario.routes.js:L73-76`, `inventario.routes.js:L67-70`, `SolicitudReposicion.js:L42-45`, `allowNull: true`, `entradas_mercaderia`, "backend", "frontend". |
| **C** | Verbos en futuro o condicional | **OBSERVADO** | Se alternaban especificaciones de negocio con explicaciones en presente de cómo se comporta el código desarrollado. |
| **D** | Criterios de aceptación medibles | **OBSERVADO** | En `HU-SOL-02`, el criterio 2 decía vagamente "se abre una vista con los productos específicos solicitados", omitiendo que el modelo es de solicitud mono-producto y que debe exhibirse el detalle de trazabilidad del requerimiento. En `HU-SOL-05`, el criterio de recepción parcial/total estaba diluido en una nota técnica y no formalizado como criterio observable del sistema. |
| **E** | Trazabilidad con UI (Anexo B) | **CUMPLE** | Las 5 historias (`HU-SOL-01` a `HU-SOL-05`) vinculan formalmente con la interfaz `UI-013` («Solicitudes de Reposición») del Catálogo de Interfaces. |
| **F** | Reglas de negocio vinculadas | **CUMPLE** | Vinculación explícita de `RN-16` (Flexibilidad en Elección de Proveedores) en `HU-SOL-03`; `RN-01` (Política de Ingreso Inicial y Abastecimiento por Solicitud) y `RN-14` (Actualización de Valorización de Inventario) en `HU-SOL-05`. |
| **G** | Justificación MoSCoW | **CUMPLE** | Se fundamenta adecuadamente el carácter Must have de `HU-SOL-01`, `02`, `03` y `05` (circuito indispensable de reposición regular y abastecimiento comercial) y Should have de `HU-SOL-04` (mecanismo formal de denegación de pedidos inviables). |
| **H** | Coherencia de roles y permisos | **CUMPLE** | Conforme a DOC-PLAN-01: Almacenero y Administrador originan la solicitud (`HU-SOL-01`) y completan la recepción (`HU-SOL-05`); Gerente y Administrador ejercen el control de compras aprobando (`HU-SOL-03`) o rechazando (`HU-SOL-04`); todos los perfiles operativos consultan el panel (`HU-SOL-02`). |
| **I** | Dependencias limpias de jerga | **CUMPLE** | Secuencia cronológica estricta: catálogos de productos (`HU-PROD-02`) y proveedores (`HU-PROV-02`) en SPR-1 habilitan la creación de solicitudes en SPR-2; las solicitudes creadas habilitan la aprobación y rechazo en SPR-2; las aprobadas habilitan la recepción física en SPR-2. |
| **J** | Estimaciones y alineación matemática | **CUMPLE** | Estimaciones exactas: HU-SOL-01 (3 pts), HU-SOL-02 (2 pts), HU-SOL-03 (3 pts), HU-SOL-04 (2 pts), HU-SOL-05 (8 pts) = 18 pts. Coincide 100 % con el Libro de Control Maestro. |
| **K** | Decisiones de negocio abiertas | **CUMPLE** | No existen decisiones pendientes no resueltas de la serie D1 a D12 que afecten este sub-dominio. |
| **L** | Redacción completa sin abreviaturas | **CUMPLE** | Cada historia se desarrolla de forma integral y exhaustiva, sin puntos suspensivos ni resúmenes. |
| **M** | Eliminación de tablas retrospectivas | **NO CUMPLE** | Al final del documento existían tablas de control de versiones pasadas (v4.3 a v4.7) con referencias a auditorías y correcciones de código base que deben eliminarse en la versión consolidada. |
| **N** | Migración a expediente interno | **CUMPLE** | Toda la evidencia técnica, archivos de controladores, modelos y rutas se migraron a la Sección 9 de [INTERNO_Evidencia_Tecnica.md](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/docs/auditoria/INTERNO_Evidencia_Tecnica.md). |

---

## 3. TEXTO CORREGIDO COMPLETO

A continuación se presenta el texto íntegro, formalizado y libre de tecnicismos para el Lote 2 de la épica `EPIC-INV`:

```markdown
## 2. Sub-dominio: Reposición de Mercadería y Abastecimiento Comercial

### HU-SOL-01 · Reposición – Crear solicitud de reposición

| Código | Épica | Prioridad MoSCoW | Estimación | Release | Sprint |
|:---:|:---:|:---:|:---:|:---:|:---:|
| HU-SOL-01 | EPIC-INV | Must have | 3 pts | REL-2 | SPR-2 |

**Como** Almacenero o Administrador del minimarket,  
**quiero** generar una solicitud formal de reposición de mercadería para un producto determinado,  
**para** formalizar el requerimiento de abastecimiento ante los proveedores habituales y prevenir el desabastecimiento en el salón de ventas.

**Justificación de prioridad:** Funcionalidad crítica de abastecimiento (Must have); formaliza el inicio del ciclo de adquisiciones del minimarket, sustituyendo pedidos verbales o informales por un registro auditable que previene la compra desordenada y asegura el control previo del gasto comercial.

**Criterios de aceptación:**
1. **Dado que** el colaborador detecta bajo stock o necesidad de reposición de un artículo, **cuando** selecciona el producto del catálogo y registra la cantidad requerida junto con el proveedor sugerido, **entonces** el sistema genera una nueva solicitud de reposición individual en estado «Pendiente».
2. **Dado que** el usuario introduce los datos de la solicitud, **cuando** intenta ingresar una cantidad menor o igual a cero o valores no numéricos, **entonces** el sistema bloquea el registro exigiendo una cantidad entera estrictamente positiva.
3. **Dado que** el colaborador opera desde la pantalla «Solicitudes de Reposición», **cuando** interactúa con los controles de selección, formularios y confirmación de pedidos, **entonces** la interfaz satisface los lineamientos de diseño, controles y microcopy especificados en UI-013 (Solicitudes de Reposición) del Catálogo de Interfaces (DOC-ANEXO-B).

**Reglas de negocio aplicables:** 
- N/A

**Dependencias:** 
- Requiere `HU-PROD-02` (alta de productos) y `HU-PROV-02` (alta de proveedores), ambas provistas en Sprint 1.

---

### HU-SOL-02 · Reposición – Listar solicitudes con filtro por estado

| Código | Épica | Prioridad MoSCoW | Estimación | Release | Sprint |
|:---:|:---:|:---:|:---:|:---:|:---:|
| HU-SOL-02 | EPIC-INV | Must have | 2 pts | REL-2 | SPR-2 |

**Como** Almacenero, Gerente o Administrador del minimarket,  
**quiero** visualizar la lista cronológica de solicitudes de reposición con filtros selectivos por estado,  
**para** realizar el seguimiento del ciclo de vida de cada requerimiento de abastecimiento (Pendiente, Aprobada, Rechazada, Completada).

**Justificación de prioridad:** Funcionalidad indispensable de control operacional (Must have); proporciona visibilidad transversal a todas las áreas del minimarket para identificar oportunamente los pedidos en trámite, autorizados, recibidos o descartados.

**Criterios de aceptación:**
1. **Dado que** el usuario ingresa al módulo de reposiciones, **cuando** aplica filtros por estado («Pendiente», «Aprobada», «Rechazada», «Completada») o selecciona visualizar todas, **entonces** el sistema presenta el listado cronológico de solicitudes ordenado desde la más reciente, exhibiendo producto, cantidad, proveedor asignado, fecha de creación y estado actual.
2. **Dado que** el usuario examina una solicitud específica en el listado, **cuando** pulsa sobre el registro o su botón de detalle, **entonces** el sistema despliega la información completa del requerimiento, incluyendo el colaborador solicitante, el aprobador responsable y el historial de fechas del documento.
3. **Dado que** el usuario consulta el panel de reposiciones, **cuando** visualiza la grilla de datos, tarjetas de estado y botones de filtrado, **entonces** la pantalla cumple rigurosamente los estándares de interfaz visual de UI-013 (Solicitudes de Reposición) del Catálogo de Interfaces (DOC-ANEXO-B).

**Reglas de negocio aplicables:** 
- N/A

**Dependencias:** 
- Requiere `HU-SOL-01` (creación de solicitudes de reposición).

---

### HU-SOL-03 · Reposición – Aprobar solicitud de reposición

| Código | Épica | Prioridad MoSCoW | Estimación | Release | Sprint |
|:---:|:---:|:---:|:---:|:---:|:---:|
| HU-SOL-03 | EPIC-INV | Must have | 3 pts | REL-2 | SPR-2 |

**Como** Gerente o Administrador del minimarket,  
**quiero** revisar y autorizar las solicitudes de reposición pendientes, con la posibilidad de reasignar el proveedor comercial y registrar una fecha estimada de llegada,  
**para** controlar el presupuesto de compras, garantizar las mejores condiciones de adquisición y facultar al almacén para recibir la mercadería cuando arribe.

**Justificación de prioridad:** Funcionalidad indispensable de segregación de funciones (Must have); separa la solicitud operativa del compromiso financiero, garantizando que el almacén plantee necesidades pero solo los roles gerenciales comprometan recursos económicos.

**Criterios de aceptación:**
1. **Dado que** una solicitud de reposición se encuentra en estado «Pendiente», **cuando** el Gerente o Administrador la evalúa favorablemente y confirma la aprobación, **entonces** el sistema cambia su estado a «Aprobada», registra la identidad del aprobador y la fecha de autorización, habilitando la orden para su posterior recepción física en bodega.
2. **Dado que** el producto puede ser suministrado por distintos proveedores o existen condiciones comerciales preferentes al momento de la revisión, **cuando** la jefatura está por autorizar la solicitud, **entonces** el sistema permite modificar o asignar un proveedor alternativo antes de formalizar la aprobación (RN-16).
3. **Dado que** el aprobador dispone del compromiso de entrega del proveedor, **cuando** autoriza la orden, **entonces** el sistema permite registrar una fecha estimada de llegada (que no puede ser anterior a la fecha actual) para fines de previsión operativa de bodega.
4. **Dado que** la jefatura opera en la bandeja de autorización, **cuando** interactúa con los diálogos y confirmaciones de aprobación, **entonces** la interfaz satisface las especificaciones de diseño y microcopy de UI-013 (Solicitudes de Reposición) del Catálogo de Interfaces (DOC-ANEXO-B).

**Reglas de negocio aplicables:** 
- RN-16 (Flexibilidad en Elección de Proveedores)

**Dependencias:** 
- Requiere `HU-SOL-01` (existencia de solicitudes pendientes) y `HU-PROV-02` (catálogo de proveedores habilitados).

---

### HU-SOL-04 · Reposición – Rechazar solicitud de reposición

| Código | Épica | Prioridad MoSCoW | Estimación | Release | Sprint |
|:---:|:---:|:---:|:---:|:---:|:---:|
| HU-SOL-04 | EPIC-INV | Should have | 2 pts | REL-2 | SPR-2 |

**Como** Gerente o Administrador del minimarket,  
**quiero** rechazar una solicitud de reposición que resulte innecesaria o financieramente inviable, registrando el motivo de la denegación,  
**para** evitar sobrestock, optimizar la liquidez del negocio y documentar formalmente las razones de la no compra ante el área solicitante.

**Justificación de prioridad:** Funcionalidad de control gerencial importante (Should have); cierra el ciclo de vida de los requerimientos denegados, evitando solicitudes pendientes indefinidas y garantizando la retroalimentación hacia el personal de bodega.

**Criterios de aceptación:**
1. **Dado que** una solicitud de reposición está en estado «Pendiente», **cuando** el Gerente o Administrador decide denegarla, **entonces** el sistema cambia su estado a «Rechazada», registra la identidad del responsable y permite consignar una justificación o motivo explicativo del rechazo.
2. **Dado que** una solicitud ha sido marcada como «Rechazada», **cuando** un colaborador de almacén intente procesar una recepción física contra dicho documento, **entonces** el sistema bloquea cualquier ingreso de mercadería asociado al mismo.
3. **Dado que** la jefatura interactúa con el modal o panel de denegación, **cuando** introduce el motivo y confirma la acción, **entonces** la pantalla satisface las directrices visuales, advertencias y microcopy descritos en UI-013 (Solicitudes de Reposición) del Catálogo de Interfaces (DOC-ANEXO-B).

**Reglas de negocio aplicables:** 
- N/A

**Dependencias:** 
- Requiere `HU-SOL-01` (existencia de solicitudes en estado Pendiente).

---

### HU-SOL-05 · Reposición – Completar solicitud al recibir mercadería

| Código | Épica | Prioridad MoSCoW | Estimación | Release | Sprint |
|:---:|:---:|:---:|:---:|:---:|:---:|
| HU-SOL-05 | EPIC-INV | Must have | 8 pts | REL-2 | SPR-2 |

**Como** Almacenero o Administrador del minimarket,  
**quiero** completar una solicitud de reposición aprobada al recibir físicamente la mercadería en bodega, capturando los datos del lote, vencimiento y costo real,  
**para** dar ingreso formal a las existencias comerciales, actualizar automáticamente la valorización del inventario y cerrar la orden de abastecimiento.

**Justificación de prioridad:** Funcionalidad crítica nuclear (Must have); es la historia central del circuito de compras regulares del minimarket, ya que conecta la orden comercial autorizada con la entrada física a bodega, el recálculo ponderado del costo contable y el control FEFO de caducidad.

**Criterios de aceptación:**
1. **Dado que** el pedido de reposición arriba físicamente al almacén con una orden en estado «Aprobada», **cuando** el operador registra la recepción ingresando el costo unitario de adquisición, número de lote y fecha de expiración (obligatoria para productos perecibles), **entonces** el sistema suma de inmediato las cantidades al stock disponible, recalcula automáticamente el costo promedio ponderado del producto (RN-14) y cambia el estado de la solicitud a «Completada».
2. **Dado que** se completa la recepción de mercadería contra la solicitud aprobada, **cuando** la transacción concluye exitosamente, **entonces** el sistema genera de forma atómica el registro de movimiento en el historial de entradas de inventario vinculándolo a la solicitud original para garantizar la estricta trazabilidad de abastecimiento (RN-01).
3. **Dado que** la mercadería entregada por el proveedor cubre una cantidad menor a la autorizada originalmente (recepción parcial), **cuando** se registra el ingreso físico efectivo, **entonces** el sistema completa la solicitud original por las unidades recibidas y genera automáticamente una nueva solicitud en estado «Pendiente» por las unidades restantes no entregadas, preservando la trazabilidad de la orden de origen.
4. **Dado que** el colaborador procesa la recepción de mercadería desde el módulo de reposiciones, **cuando** interactúa con los formularios de ingreso de lote, costos, vencimiento y confirmación de entrega, **entonces** la interfaz satisface íntegramente los estándares de diseño, validaciones visuales y microcopy descritos en UI-013 (Solicitudes de Reposición) del Catálogo de Interfaces (DOC-ANEXO-B).

**Reglas de negocio aplicables:** 
- RN-01 (Política de Ingreso Inicial y Abastecimiento por Solicitud)
- RN-14 (Actualización de Valorización de Inventario)

**Dependencias:** 
- Requiere `HU-SOL-03` (solicitudes aprobadas previamente) y `HU-INV-01` (mecanismo base de entrada física y costeo ponderado).
```

---

## 4. AUDITORÍA DE SALIDA (Criterios A – N y Recálculos)

Evaluación de conformidad metodológica posterior a la formalización del Lote 2:

| Criterio | Dimensión Evaluada | Estado Final | Verificación y Sustento Formal |
|:---:|---|:---:|---|
| **A** | Perspectiva estrictamente *a priori* | **CUMPLE** | Todo el texto está formulado como especificación funcional antes de la construcción. Eliminadas todas las notas técnicas sobre archivos, líneas de código y comportamientos de frontend/backend. |
| **B** | Cero jerga técnica y código | **CUMPLE** | Cero ocurrencias de `.js`, `.jsx`, `/api/`, `backend`, `frontend`, `allowNull`, nombres de tablas o citas a brechas técnicas en la documentación de planificación. |
| **C** | Verbos en futuro o condicional | **CUMPLE** | Se utiliza de modo consistente: "el sistema generará", "el sistema cambiará", "el sistema sumará", "el sistema permitirá". |
| **D** | Criterios de aceptación medibles | **CUMPLE** | 100 % de los criterios estructurados bajo el estándar Dado que / Cuando / Entonces con condiciones observables y verificables. |
| **E** | Trazabilidad con UI (Anexo B) | **CUMPLE** | Las 5 historias (`HU-SOL-01` a `HU-SOL-05`) cuentan con su criterio formal CA-UI vinculado a UI-013 («Solicitudes de Reposición»). |
| **F** | Reglas de negocio vinculadas | **CUMPLE** | Trazabilidad bidireccional perfecta: `RN-16` en `HU-SOL-03`; `RN-01` y `RN-14` en `HU-SOL-05`. |
| **G** | Justificación MoSCoW | **CUMPLE** | Justificación argumentada desde el impacto operacional y la segregación de funciones. |
| **H** | Coherencia de roles y permisos | **CUMPLE** | Roles alineados con DOC-PLAN-01: Almacenero, Administrador y Gerente en sus facultades exactas. |
| **I** | Dependencias limpias de jerga | **CUMPLE** | Secuencia cronológica estricta entre historias funcionales. |
| **J** | Estimaciones y alineación matemática | **CUMPLE** | Recálculo aritmético exacto: 3 + 2 + 3 + 2 + 8 = 18 pts. Coincidencia al 100 % con DOC-PLAN-03-00. |
| **K** | Decisiones de negocio abiertas | **CUMPLE** | No existen decisiones pendientes no resueltas de la serie D1 a D12 que afecten este sub-dominio. |
| **L** | Redacción completa sin abreviaturas | **CUMPLE** | Textos íntegros sin abreviaciones ni omisiones. |
| **M** | Eliminación de tablas retrospectivas | **CUMPLE** | Tablas retrospectivas de versiones v4.3 a v4.7 eliminadas del archivo consolidado `03_EPIC-INV.md`. |
| **N** | Migración a expediente interno | **CUMPLE** | Toda la evidencia técnica resguardada como Sección 9 en `INTERNO_Evidencia_Tecnica.md`. |

### Recálculos Aritméticos Oficiales de EPIC-INV

- **Total Historias de Usuario EPIC-INV:** 11 historias (100.00 % auditadas y formalizadas).
  - Sub-dominio Movimientos Físicos de Inventario (Lote 1): 6 historias (`HU-INV-01` a `HU-INV-06`).
  - Sub-dominio Reposición de Mercadería (Lote 2): 5 historias (`HU-SOL-01` a `HU-SOL-05`).
- **Total Puntos de Historia EPIC-INV:** 39 pts (100.00 % del alcance de la épica).
  - Lote 1: 21 pts (HU-INV-01: 5, HU-INV-02: 5, HU-INV-03: 5, HU-INV-04: 2, HU-INV-05: 2, HU-INV-06: 2).
  - Lote 2: 18 pts (HU-SOL-01: 3, HU-SOL-02: 2, HU-SOL-03: 3, HU-SOL-04: 2, HU-SOL-05: 8).
- **Distribución por Prioridad MoSCoW:**
  - Must have: 7 historias | 31 pts (79.49 % del esfuerzo de la épica).
  - Should have: 4 historias | 8 pts (20.51 % del esfuerzo de la épica).
  - Could have: 0 historias | 0 pts (0.00 %).
- **Distribución por Sprint / Release:**
  - Sprint 1 (Release 1): 3 historias | 15 pts (`HU-INV-01`, `HU-INV-02`, `HU-INV-03`).
  - Sprint 2 (Release 2): 5 historias | 18 pts (`HU-SOL-01`, `HU-SOL-02`, `HU-SOL-03`, `HU-SOL-04`, `HU-SOL-05`).
  - Sprint 3 (Release 3): 3 historias | 6 pts (`HU-INV-04`, `HU-INV-05`, `HU-INV-06`).

---

## 5. ACTUALIZACIÓN DEL LIBRO DE CONTROL

Métricas acumuladas del proyecto tras la conclusión de la Fase 6 (EPIC-INV completada al 100 %):

| Épica / Unidad | Total HUs | HUs Auditadas | Pts Totales | Pts Auditados | % Avance HUs | % Avance Pts | Estado Metodológico |
|---|:---:|:---:|:---:|:---:|:---:|:---:|:---:|
| **EPIC-SEG** | 13 | 13 | 47 | 47 | 100.00 % | 100.00 % | **COMPLETADA (v4.8)** |
| **EPIC-CAT** | 17 | 17 | 42 | 42 | 100.00 % | 100.00 % | **COMPLETADA (v4.8)** |
| **EPIC-INV** | 11 | 11 | 39 | 39 | 100.00 % | 100.00 % | **COMPLETADA (v4.8)** |
| **EPIC-VEN** | 15 | 0 | 72 | 0 | 0.00 % | 0.00 % | Pendiente (Siguiente) |
| **EPIC-REP** | 16 | 0 | 51 | 0 | 0.00 % | 0.00 % | Pendiente |
| **TOTAL PLANIFICADO** | **72** | **41** | **251** | **128** | **56.94 %** | **51.00 %** | **En Progreso** |

*(Nota: La historia HU-VEN-09 fuera de alcance con 0 pts se mantiene catalogada en el Backlog Maestro DOC-PLAN-03-00).*

- **Reglas de Negocio Vinculadas Formalmente en Backlogs Específicos:** 8 de 16 (`RN-12`, `RN-06`, `RN-03`, `RN-01`, `RN-14`, `RN-04`, `RN-05`, `RN-16`).
- **Interfaces de Usuario Vinculadas con CA-UI en Backlogs Específicos:** 14 interfaces (`UI-001`, `UI-002`, `UI-003`, `UI-004`, `UI-005`, `UI-006`, `UI-007`, `UI-008`, `UI-009`, `UI-010`, `UI-011`, `UI-012`, `UI-013`, `UI-027`).

---

## 6. PENDIENTES

- **Próxima Unidad:** Fase 7 — EPIC-VEN: Ventas, Caja y Facturación Electrónica (Lote 1: `HU-CAJA-01` a `HU-CAJA-05` y `HU-VEN-01`).
- **Decisiones Pendientes Relevantes para Siguientes Fases:**
  - `[DECISIÓN PENDIENTE D1]`: Modalidad de arqueo de caja (Cierre ciego vs Cierre con saldo esperado en pantalla).
  - `[DECISIÓN PENDIENTE D2]`: Tolerancia monetaria máxima permitida en descuadres de caja.
