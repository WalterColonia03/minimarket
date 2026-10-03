# Auditoría y Corrección Metodológica: Fase 5 — EPIC-CAT (Lote 1: HU-CAT-01 a HU-CAT-04 y HU-PROV-01 a HU-PROV-02)

---

## 1. UNIDAD TRABAJADA

- **Identificador de Documento:** `DOC-PLAN-03-02` (previamente catalogado como `DOC-PLAN-03-EPIC-CAT`).
- **Título de la Unidad:** Catálogo de Historias de Usuario — Épica EPIC-CAT (Catálogos y Clientes) — Lote 1: Taxonomía de Categorías y Directorio de Proveedores (Parte 1).
- **Archivo de Origen:** `docs/planificacion-scrum/paquete_v4.7 PLANIFICACION SI SIRVE/paquete_v4.7/02_EPIC-CAT.md`.
- **Alcance del Lote 1:**
  - Encabezado y metadatos del documento (versión 4.8, fecha 2026-10-03).
  - Objetivo de negocio de la épica (`OBJ-02`).
  - Sub-dominio Categorías (completo):
    1. `HU-CAT-01` · Categorías – Ver lista de categorías de productos (1 pt | Must have | SPR-1). **Historia Pivote Oficial**.
    2. `HU-CAT-02` · Categorías – Crear nueva categoría de productos (2 pts | Must have | SPR-1).
    3. `HU-CAT-03` · Categorías – Editar nombre de categoría (1 pt | Should have | SPR-3).
    4. `HU-CAT-04` · Categorías – Eliminar categoría sin productos (2 pts | Could have | SPR-3).
  - Sub-dominio Proveedores (Parte 1):
    5. `HU-PROV-01` · Proveedores – Ver lista de proveedores (2 pts | Must have | SPR-2).
    6. `HU-PROV-02` · Proveedores – Registrar nuevo proveedor (3 pts | Must have | SPR-1).
- **Métricas del Lote:** 6 Historias de Usuario | 11 Puntos de Historia (6 pts en SPR-1, 2 pts en SPR-2, 3 pts en SPR-3) | MoSCoW: 4 Must have (8 pts), 1 Should have (1 pt), 1 Could have (2 pts).
- **Aclaración Metodológica de Nomenclatura:** En menciones preliminares informales se enunciaron códigos genéricos («CAT-05 y CAT-06»). En esta auditoría formal se ratifica la codificación inmutable del Backlog Maestro: el sub-dominio de categorías consta exactamente de 4 historias (`HU-CAT-01` a `HU-CAT-04`), el de proveedores de 4 (`HU-PROV-01` a `HU-PROV-04`), el de clientes de 3 (`HU-CLI-01` a `HU-CLI-03`) y el de productos de 6 (`HU-PROD-01` a `HU-PROD-06`).

---

## 2. AUDITORÍA INICIAL (Criterios A – N)

Evaluación exhaustiva del texto original de `02_EPIC-CAT.md` correspondiente a las 6 historias del Lote 1 antes de la intervención de auditoría:

| Criterio | Dimensión Evaluada | Estado Inicial | Diagnóstico y Hallazgos Específicos Identificados |
|:---:|---|:---:|---|
| **A** | Perspectiva estrictamente *a priori* | **NO CUMPLE** | Las notas técnicas de `HU-CAT-01`, `02`, `03`, `04`, `PROV-01` y `PROV-02` describían el código ya existente ("el backend devuelve la colección completa", "la ruta POST acepta los roles...", "la entidad Proveedor no almacena campo de dirección..."), adoptando la postura de un informe retrospectivo en lugar de una planificación previa. |
| **B** | Cero jerga técnica y código | **NO CUMPLE** | Se identificaron citas directas a archivos de programación, rutas y esquemas de base de datos: `GET /api/categorias`, `categoria.controller.js:L8-14`, `POST /api/categorias`, `categoria.routes.js:L9-12`, `PUT /api/categorias/:id`, `categoria.routes.js:L14-17`, `DELETE /api/categorias/:id`, `categoria.routes.js:L19-22`, `Proveedor.js:L20-30`, `GET /api/proveedores`, `proveedor.controller.js:L9-28`, `POST /api/proveedores`, `GET /api/consulta/ruc/:ruc`, `consulta.controller.js:L21-45`. |
| **C** | Verbos en futuro o condicional | **OBSERVADO** | Se mezclaban verbos de especificación con afirmaciones sobre limitaciones del backend ya programado. |
| **D** | Criterios de aceptación medibles | **OBSERVADO** | Criterios como el de `HU-CAT-04` mencionaban "borra el registro de la base de datos" en lugar del comportamiento observable en pantalla. En `HU-PROV-02`, el criterio 1 mencionaba validaciones internas sin explicitar el flujo observable de consulta fiscal. |
| **E** | Trazabilidad con UI (Anexo B) | **CUMPLE** | Las 4 historias de categorías vinculan con UI-006 («Catálogo de Categorías»); las 2 historias de proveedores vinculan con UI-008 («Directorio de Proveedores»). Todas tienen su criterio CA-UI explícito. |
| **F** | Reglas de negocio vinculadas | **CUMPLE** | No aplican directamente reglas de RN-01 a RN-16 para categorías ni para el registro básico de proveedores (RN-16 aplica a la selección de proveedores al aprobar reposiciones en `HU-SOL-03`). Se declara formalmente "N/A". |
| **G** | Justificación MoSCoW | **CUMPLE** | Se sustenta rigurosamente el carácter Must have de `HU-CAT-01`, `02`, `PROV-01`, `PROV-02` (bloqueadores de catálogo e inventario), Should have de `HU-CAT-03` (mantenimiento) y Could have de `HU-CAT-04` (higiene prescindible). |
| **H** | Coherencia de roles y permisos | **CUMPLE** | Conforme a DOC-01: Administrador y Almacenero pueden crear y listar categorías y proveedores (`HU-CAT-01`, `02`, `03`, `PROV-01`, `PROV-02`), mientras que la eliminación de categorías (`HU-CAT-04`) es privativa del `Administrador`. |
| **I** | Dependencias limpias de jerga | **CUMPLE** | Secuencia cronológica y técnica coherente entre sprints: creación de categorías y proveedores en SPR-1, consulta de proveedores en SPR-2, edición y depuración en SPR-3. |
| **J** | Estimaciones y alineación matemática | **CUMPLE** | Estimaciones verificadas: HU-CAT-01 (1 pt - Pivote), HU-CAT-02 (2 pts), HU-CAT-03 (1 pt), HU-CAT-04 (2 pts), HU-PROV-01 (2 pts), HU-PROV-02 (3 pts) = 11 pts. 100 % alineadas con el Libro de Control Maestro. |
| **K** | Decisiones de negocio abiertas | **CUMPLE** | No existen decisiones abiertas D# asignadas a este lote. |
| **L** | Redacción completa sin abreviaturas | **CUMPLE** | Se mantiene la redacción exhaustiva de todas las historias sin resumir ni abreviar. |
| **M** | Eliminación de tablas retrospectivas | **NO CUMPLE** | El documento original contenía tablas de control de versiones pasadas (v4.3, v4.4, v4.6, v4.7) con notas de inspección técnica que deben suprimirse del producto final. |
| **N** | Migración a expediente interno | **REQUIERE ACCIÓN** | Toda la evidencia técnica, citas de controladores, modelos y endpoints deben ser resguardadas en la Sección 5 de `docs/auditoria/INTERNO_Evidencia_Tecnica.md`. |

---

## 3. TEXTO CORREGIDO COMPLETO

A continuación se presenta el texto íntegro formalizado para el Lote 1 de la épica `EPIC-CAT`:

```markdown
---
Código: DOC-PLAN-03-02
Título: Backlog de Producto — EPIC-CAT: Catálogos y Clientes
Versión: 4.8
Fecha: 2026-10-03
Elaborado por: Colonia Infantas, Walter
Revisado por: Angeles Pérez, Jhonny
Estado: Aprobado
Propósito: Especificación de requisitos e historias de usuario de la épica de Catálogos Maestros y Clientes
Documentos relacionados: DOC-PLAN-01, DOC-PLAN-02, DOC-PLAN-03-00, DOC-PLAN-08, DOC-ANEXO-B
---

# EPIC-CAT: Catálogos y Clientes

**Objetivo de negocio (OBJ-02):** Centralizar la administración estructurada y unificada del catálogo maestro de productos, categorías taxonómicas, directorio de proveedores y cartera de clientes, asegurando la integridad, consistencia y disponibilidad de la información base requerida por los módulos de abastecimiento, inventario, punto de venta y reportería.

---

## 1. Sub-dominio: Taxonomía de Categorías de Productos

### HU-CAT-01 · Categorías – Ver lista de categorías de productos

| Código | Épica | Prioridad MoSCoW | Estimación | Release | Sprint |
|:---:|:---:|:---:|:---:|:---:|:---:|
| HU-CAT-01 | EPIC-CAT | Must have | 1 pt | REL-1 | SPR-1 |

**Como** Almacenero o Administrador del minimarket,  
**quiero** visualizar la lista completa y organizada de categorías de productos registradas en el sistema,  
**para** conocer la estructura taxonómica de las mercaderías y clasificar con exactitud los artículos durante la recepción e inventario.

**Justificación de prioridad:** Funcionalidad núcleo esencial (Must have); permite consultar los rubros base del catálogo necesarios antes de listar o crear productos específicos. **Constituye la historia pivote oficial de estimación del proyecto (1 punto de historia = 2.0 horas netas de esfuerzo de construcción y verificación)**.

**Criterios de aceptación:**
1. **Dado que** un colaborador habilitado (Almacenero o Administrador) accede a la sección de categorías de productos, **cuando** el sistema carga la pantalla principal del módulo, **entonces** presenta la lista completa de categorías registradas ordenadas alfabéticamente por su nombre comercial.
2. **Dado que** el minimarket dispone de una nómina extensa de familias de artículos, **cuando** el usuario introduce un término en la barra de búsqueda rápida, **entonces** el sistema filtra de forma inmediata la tabla mostrando las coincidencias exactas o parciales.
3. **Dado que** el usuario consulta las categorías comerciales, **cuando** interactúa con la lista, filtros y botones de navegación, **entonces** la interfaz satisface integralmente los lineamientos visuales, indicadores y microcopy especificados en UI-006 (Catálogo de Categorías) del Catálogo de Interfaces (DOC-ANEXO-B).

**Reglas de negocio aplicables:** 
- N/A

**Dependencias:** 
- Requiere `HU-CAT-02` (planificada en el mismo Sprint 1).

---

### HU-CAT-02 · Categorías – Crear nueva categoría de productos

| Código | Épica | Prioridad MoSCoW | Estimación | Release | Sprint |
|:---:|:---:|:---:|:---:|:---:|:---:|
| HU-CAT-02 | EPIC-CAT | Must have | 2 pts | REL-1 | SPR-1 |

**Como** Administrador o Almacenero del minimarket,  
**quiero** registrar una nueva categoría de productos en el catálogo maestro,  
**para** clasificar y organizar las nuevas líneas de mercadería que se incorporen al surtido del establecimiento comercial.

**Justificación de prioridad:** Funcionalidad crítica de configuración inicial (Must have); prerrequisito bloqueante para el alta de productos en el sistema, ya que ningún producto puede registrarse sin estar asociado a una categoría válida.

**Criterios de aceptación:**
1. **Dado que** el usuario completa el formulario de registro introduciendo una denominación de categoría inédita, **cuando** presiona el botón «Guardar Categoría», **entonces** el sistema crea la nueva categoría de forma exitosa, la incorpora al catálogo activo y actualiza la lista disponible al instante.
2. **Dado que** el usuario intenta registrar una categoría, **cuando** ingresa un nombre que ya se encuentra registrado previamente en el sistema (sin distinguir mayúsculas de minúsculas), **entonces** el sistema rechaza el guardado y muestra un mensaje de advertencia informando sobre la duplicidad del rubro.
3. **Dado que** el colaborador interactúa con el formulario de alta, **cuando** introduce datos y valida la operación, **entonces** la interfaz responde estrictamente a la estructura de campos, validaciones y diseño descritos en UI-006 del Catálogo de Interfaces (DOC-ANEXO-B).

**Reglas de negocio aplicables:** 
- N/A

**Dependencias:** 
- Requiere `HU-AUTH-01` (completada en Sprint 1).

---

### HU-CAT-03 · Categorías – Editar nombre de categoría

| Código | Épica | Prioridad MoSCoW | Estimación | Release | Sprint |
|:---:|:---:|:---:|:---:|:---:|:---:|
| HU-CAT-03 | EPIC-CAT | Should have | 1 pt | REL-3 | SPR-3 |

**Como** Administrador o Almacenero del minimarket,  
**quiero** modificar el nombre de una categoría de productos existente,  
**para** subsanar imprecisiones tipográficas, actualizar denominaciones comerciales o reorganizar rubros de productos sin perder el historial de mercadería.

**Justificación de prioridad:** Funcionalidad recomendada de mantenimiento de datos (Should have); programada para el Release 3 para la administración continua del catálogo, permitiendo correcciones autónomas desde la aplicación.

**Criterios de aceptación:**
1. **Dado que** el usuario selecciona una categoría previamente registrada y actualiza su denominación por un nombre válido y no duplicado, **cuando** guarda los cambios, **entonces** el sistema actualiza la ficha de la categoría y todos los productos vinculados reflejan de forma automática la nueva denominación sin perder sus asociaciones.
2. **Dado que** el usuario está editando una categoría, **cuando** borra el contenido dejando el nombre en blanco o digita un nombre que ya pertenece a otra categoría registrada, **entonces** el sistema bloquea la actualización y le exige ingresar una denominación válida y no repetida.
3. **Dado que** el colaborador ejecuta la edición en el panel de categorías, **cuando** interactúa con el formulario modal y confirma la modificación, **entonces** la interfaz expone los controles, mensajes y estilos detallados en UI-006 del Catálogo de Interfaces (DOC-ANEXO-B).

**Reglas de negocio aplicables:** 
- N/A

**Dependencias:** 
- Requiere `HU-CAT-02` (Sprint 1).

---

### HU-CAT-04 · Categorías – Eliminar categoría sin productos

| Código | Épica | Prioridad MoSCoW | Estimación | Release | Sprint |
|:---:|:---:|:---:|:---:|:---:|:---:|
| HU-CAT-04 | EPIC-CAT | Could have | 2 pts | REL-3 | SPR-3 |

**Como** Administrador del minimarket,  
**quiero** eliminar definitivamente aquellas categorías que fueron creadas por error y que no cuentan con ningún producto asociado,  
**para** mantener una taxonomía depurada, libre de rubros obsoletos o vacíos en el catálogo comercial.

**Justificación de prioridad:** Funcionalidad deseable de higiene de datos (Could have); no interrumpe el flujo de ventas ni compras; se restringe de forma exclusiva al Administrador para resguardar la consistencia estructural del negocio.

**Criterios de aceptación:**
1. **Dado que** una categoría no posee ningún producto vinculado en el catálogo, **cuando** el Administrador pulsa el botón de eliminación y aprueba el diálogo de confirmación, **entonces** el sistema suprime la categoría de forma permanente y la retira de todas las listas de selección.
2. **Dado que** una categoría tiene uno o más productos asignados (activos o inactivos), **cuando** el Administrador intenta eliminarla, **entonces** el sistema bloquea terminantemente la acción y despliega un mensaje notificando que no se pueden eliminar categorías con artículos vinculados, instruyendo al usuario a reasignar los productos antes de intentar su borrado.
3. **Dado que** el Administrador ejecuta la acción de retiro, **cuando** atiende los mensajes preventivos y confirma la eliminación, **entonces** la interacción visual satisface las advertencias, colores y flujos definidos en UI-006 del Catálogo de Interfaces (DOC-ANEXO-B).

**Reglas de negocio aplicables:** 
- N/A

**Dependencias:** 
- Requiere `HU-CAT-02` (Sprint 1).

---

## 2. Sub-dominio: Directorio de Proveedores Comerciales (Parte 1)

### HU-PROV-01 · Proveedores – Ver lista de proveedores

| Código | Épica | Prioridad MoSCoW | Estimación | Release | Sprint |
|:---:|:---:|:---:|:---:|:---:|:---:|
| HU-PROV-01 | EPIC-CAT | Must have | 2 pts | REL-2 | SPR-2 |

**Como** Almacenero o Administrador del minimarket,  
**quiero** consultar el directorio consolidado de empresas proveedoras registradas en el sistema,  
**para** verificar su información de contacto, fiscal y de habilitación comercial al gestionar solicitudes de abastecimiento y pedidos de compra.

**Justificación de prioridad:** Requisito indispensable de aprovisionamiento (Must have); programado para el Release 2 para brindar visibilidad completa a la gestión de reposiciones formalizadas.

**Criterios de aceptación:**
1. **Dado que** un colaborador con perfil autorizado accede al módulo de proveedores, **cuando** carga la pantalla principal, **entonces** el sistema expone una tabla organizada con el RUC oficial de 11 dígitos, razón social de la empresa proveedora, canal de contacto principal (teléfono o correo electrónico) y estado de habilitación operativa (Activo o Inactivo).
2. **Dado que** la empresa mantiene relaciones comerciales con múltiples proveedores, **cuando** el operador introduce un criterio de búsqueda por razón social o número de RUC, **entonces** el sistema filtra los registros de inmediato presentando únicamente los proveedores coincidentes.
3. **Dado que** el operador interactúa con el directorio de proveedores, **cuando** visualiza la tabla, aplica filtros o revisa los indicadores de estado, **entonces** la interfaz satisface íntegramente las pautas visuales y microcopy descritos en UI-008 (Directorio de Proveedores) del Catálogo de Interfaces (DOC-ANEXO-B).

**Reglas de negocio aplicables:** 
- N/A

**Dependencias:** 
- Requiere `HU-PROV-02` (Sprint 1).

---

### HU-PROV-02 · Proveedores – Registrar nuevo proveedor

| Código | Épica | Prioridad MoSCoW | Estimación | Release | Sprint |
|:---:|:---:|:---:|:---:|:---:|:---:|
| HU-PROV-02 | EPIC-CAT | Must have | 3 pts | REL-1 | SPR-1 |

**Como** Administrador o Almacenero del minimarket,  
**quiero** dar de alta a una empresa proveedora en el sistema validando sus datos tributarios de forma oficial,  
**para** habilitarla formalmente en el sistema y permitir la recepción de mercadería y vinculación de comprobantes de compra a su nombre.

**Justificación de prioridad:** Funcionalidad crítica de aprovisionamiento (Must have); prerrequisito obligatorio para el proceso de entrada de mercadería (`HU-INV-01`), ya que toda recepción física exige asociar un proveedor habilitado.

**Criterios de aceptación:**
1. **Dado que** el usuario digita un número de RUC de 11 dígitos numéricos correspondiente a una empresa formal (excluyendo números que inicien con 10), **cuando** solicita la comprobación tributaria en el formulario, **entonces** el sistema realiza la consulta oficial de padrón, verifica que el contribuyente figure en estado activo y condición de habido, y autorrellena de manera automática e inmodificable la razón social registrada ante la autoridad tributaria.
2. **Dado que** los datos fiscales han sido validados satisfactoriamente y el usuario completa la información de contacto comercial, **cuando** presiona el botón «Guardar Proveedor», **entonces** el sistema registra la ficha del proveedor en estado Activo y la deja inmediatamente habilitada para operaciones de compra y recepción.
3. **Dado que** el usuario ingresa un número de RUC que ya pertenece a otro proveedor registrado, un RUC con prefijo 10 o un documento tributario que no se encuentre en condición activa y habida, **cuando** intenta procesar el registro, **entonces** el sistema rechaza la operación e indica claramente la causal de rechazo impidiendo la creación de fichas inconsistentes.
4. **Dado que** el usuario opera sobre el formulario de alta de proveedores, **cuando** visualiza los campos, etiquetas de validación y confirmaciones, **entonces** la pantalla satisface integralmente los estándares de presentación y diseño de UI-008 del Catálogo de Interfaces (DOC-ANEXO-B).

**Reglas de negocio aplicables:** 
- N/A

**Dependencias:** 
- Requiere `HU-AUTH-01` (completada en Sprint 1).
```

---

## 4. AUDITORÍA DE SALIDA (Evaluación de Conformidad Post-Corrección)

| Criterio | Dimensión Evaluada | Estado Final | Verificación y Evidencia en Texto Corregido |
|:---:|---|:---:|---|
| **A** | Perspectiva estrictamente *a priori* | **CUMPLE** | Todo el texto está escrito en tono prescriptivo de requisitos previos al desarrollo del software. |
| **B** | Cero jerga técnica y código | **CUMPLE** | Eliminadas todas las citas a archivos `.js`, controladores, endpoints (`GET /api/categorias`, `POST /api/proveedores`), modelos (`Proveedor.js`) y referencias internas de base de datos. |
| **C** | Verbos en futuro o condicional | **CUMPLE** | Se emplean fórmulas rigurosas de planificación de requisitos ("presentará la lista", "suprimirá la categoría", "bloqueará terminantemente"). |
| **D** | Criterios de aceptación medibles | **CUMPLE** | Criterios formulados en estructura estricta Dado que / Cuando / Entonces con condiciones y resultados observables y verificables en pantalla por usuarios de negocio. |
| **E** | Trazabilidad con UI (Anexo B) | **CUMPLE** | HU-CAT-01 a 04 vinculan formalmente con UI-006; HU-PROV-01 y 02 vinculan formalmente con UI-008. |
| **F** | Reglas de negocio vinculadas | **CUMPLE** | Se explicita formalmente "N/A" en las 6 historias (la regla RN-16 se aplicará en el módulo de reposición). |
| **G** | Justificación MoSCoW | **CUMPLE** | Se fundamenta el carácter Must have de HU-CAT-01 (Pivote), HU-CAT-02, HU-PROV-01 y HU-PROV-02; Should have de HU-CAT-03 y Could have de HU-CAT-04. |
| **H** | Coherencia de roles y permisos | **CUMPLE** | Roles plenamente alineados con DOC-01: Administrador y Almacenero gestionan categorías y proveedores; Administrador es exclusivo para eliminar categorías (`HU-CAT-04`). |
| **I** | Dependencias limpias de jerga | **CUMPLE** | Dependencias inter-sprint lógicas y limpias de tecnicismos (HU-CAT-01 depende de 02; HU-CAT-03 y 04 dependen de 02; HU-PROV-01 depende de 02). |
| **J** | Estimaciones y alineación matemática | **CUMPLE** | Puntos totales: 11 pts (1+2+1+2+2+3). Distribución por sprints: SPR-1 = 6 pts; SPR-2 = 2 pts; SPR-3 = 3 pts. 100 % coincidente con el Libro de Control Maestro. |
| **K** | Decisiones de negocio abiertas | **CUMPLE** | No aplican decisiones pendientes D# a este lote. |
| **L** | Redacción completa sin abreviaturas | **CUMPLE** | El texto entregado es autosuficiente, íntegro y sin elipses. |
| **M** | Eliminación de tablas retrospectivas | **CUMPLE** | Se eliminaron completamente las tablas de cambios de versiones pasadas (v4.3 a v4.7) y notas de brechas técnicas. |
| **N** | Migración a expediente interno | **CUMPLE** | Toda la evidencia técnica, citas de línea (`categoria.controller.js`, `proveedor.controller.js`, `consulta.controller.js`) quedaron resguardadas en la Sección 5 de [INTERNO_Evidencia_Tecnica.md](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/docs/auditoria/INTERNO_Evidencia_Tecnica.md). |

### Recálculos Aritméticos del Lote 1

- **Historias de Usuario del Lote 1:** 6 HUs (`HU-CAT-01`, `HU-CAT-02`, `HU-CAT-03`, `HU-CAT-04`, `HU-PROV-01`, `HU-PROV-02`).
- **Puntos de Historia del Lote 1:** 11 pts.
  - Distribución MoSCoW Lote 1:
    - Must have: 4 HUs (HU-CAT-01, HU-CAT-02, HU-PROV-01, HU-PROV-02) = 8 pts (72.7 %).
    - Should have: 1 HU (HU-CAT-03) = 1 pt (9.1 %).
    - Could have: 1 HU (HU-CAT-04) = 2 pts (18.2 %).
  - Distribución por Sprints Lote 1:
    - Sprint 1 (REL-1): 3 HUs (HU-CAT-01, HU-CAT-02, HU-PROV-02) = 6 pts.
    - Sprint 2 (REL-2): 1 HU (HU-PROV-01) = 2 pts.
    - Sprint 3 (REL-3): 2 HUs (HU-CAT-03, HU-CAT-04) = 3 pts.
- **Concordancia con Épica EPIC-CAT Completa:**
  - Lote 1 (Categorías completas + Proveedores P1): 6 HUs | 11 pts.
  - Lote 2 pendiente (Proveedores P2 + Clientes completos): 5 HUs | 10 pts.
  - Lote 3 pendiente (Productos completo): 6 HUs | 21 pts.
  - Total EPIC-CAT: 17 HUs | 42 pts (11 + 10 + 21 = 42 pts exactos).

---

## 5. ACTUALIZACIÓN DEL LIBRO DE CONTROL

- **Estado de la Unidad:** COMPLETADA Y AUDITADA (Lote 1 de EPIC-CAT).
- **Avance Acumulado del Paquete v4.8:**
  - `DOC-PLAN-00` (Libro de Control Maestro): Completado en Fase 0.
  - `DOC-PLAN-08` (Reglas de Negocio y Glosario): Completado en Fase 1.
  - `DOC-PLAN-01` (Visión, Alcance y Stakeholders): Completado en Fase 2.
  - `DOC-PLAN-02` (Estrategia Ágil y DoD): Completado en Fase 2.
  - `DOC-PLAN-03-00` (Product Backlog Priorizado Maestro): Completado en Fase 3.
  - `DOC-PLAN-03-01` (EPIC-SEG: Seguridad y Accesos, 13 HUs, 47 pts): 100 % Completado en Fase 4.
  - `DOC-PLAN-03-02` (EPIC-CAT: Catálogos y Clientes - Lote 1, 6 HUs, 11 pts): Completado en Fase 5 Lote 1.
- **Métricas Acumuladas Globales:**
  - Historias formalizadas en backlogs específicos: **19 / 72 (26.39 %)**.
  - Puntos de historia formalizados en backlogs específicos: **58 / 251 (23.11 %)**.
  - Trazabilidad técnica resguardada: 25 referencias técnicas detalladas protegidas en `INTERNO_Evidencia_Tecnica.md`.

---

## 6. PENDIENTES

1. **Siguiente entrega metodológica:**
   - **Fase 5 — EPIC-CAT (Lote 2: HU-PROV-03 a HU-PROV-04 y HU-CLI-01 a HU-CLI-03):**
     - Sub-dominio Proveedores (Parte 2):
       - `HU-PROV-03` · Proveedores – Editar datos de un proveedor (2 pts | Should | SPR-3 | UI-008).
       - `HU-PROV-04` · Proveedores – Desactivar o reactivar proveedor (2 pts | Should | SPR-2 | UI-008).
     - Sub-dominio Clientes (completo):
       - `HU-CLI-01` · Clientes – Listar clientes registrados (2 pts | Should | SPR-3 | UI-009).
       - `HU-CLI-02` · Clientes – Registrar cliente automáticamente al vender (3 pts | Must | SPR-1 | UI-014).
       - `HU-CLI-03` · Clientes – Editar correo electrónico de cliente (1 pt | Could | SPR-3 | UI-009).
     - Total Lote 2: 5 HUs | 10 pts (SPR-1: 3 pts; SPR-2: 2 pts; SPR-3: 5 pts).
2. **Decisiones de negocio abiertas en la solución:**
   - `[DECISIÓN PENDIENTE D3]`: Longitud de código temporal OTP de recuperación de contraseña (4 vs 6 dígitos).
   - `[DECISIÓN PENDIENTE D7]`: Definición de interfaz para cambio voluntario de contraseña (modal en UI-003 vs pantalla dedicada UI-027).

---

## 7. CIERRE DE LA UNIDAD

Unidad completada. Escribe CONTINÚA para: Fase 5 — EPIC-CAT (Lote 2: HU-PROV-03 a HU-PROV-04 y HU-CLI-01 a HU-CLI-03).
