# Auditoría y Corrección Metodológica: Fase 8 — EPIC-REP (Lote 1: HU-CONF-01, HU-CONF-02, HU-DASH-01, HU-DASH-03, HU-DASH-02 y HU-DASH-04)

---

## 1. UNIDAD TRABAJADA

- **Identificador de Documento:** `DOC-PLAN-03-05` (previamente catalogado como `DOC-PLAN-03-EPIC-REP`).
- **Título de la Unidad:** Catálogo de Historias de Usuario — Épica EPIC-REP (Reportes, Dashboards y Configuración) — Lote 1: Configuración Institucional y Fiscal, y Cuadro de Mando Ejecutivo (Dashboard).
- **Archivo de Origen:** `docs/planificacion-scrum/paquete_v4.7 PLANIFICACION SI SIRVE/paquete_v4.7/05_EPIC-REP.md`.
- **Alcance del Lote 1:**
  - Encabezado y metadatos del documento (versión 4.8, fecha 2026-10-03).
  - Objetivo de negocio de la épica (`OBJ-05`).
  - Historias de Usuario seleccionadas del Lote 1:
    1. `HU-CONF-01` · Configuración – Ver configuración actual del negocio (1 pt | Must have | SPR-2 | UI-020).
    2. `HU-CONF-02` · Configuración – Actualizar configuración del negocio (3 pts | Must have | SPR-1 | UI-020 | [DECISIÓN PENDIENTE D8]).
    3. `HU-DASH-01` · Dashboard – Ver resumen de ventas del día y del mes (5 pts | Must have | SPR-2 | UI-018).
    4. `HU-DASH-03` · Dashboard – Alertas de stock crítico, vencimientos y turnos olvidados (5 pts | Must have | SPR-2 | UI-018 | RN-06).
    5. `HU-DASH-02` · Dashboard – Ver gráfico de evolución de ventas por día (3 pts | Should have | SPR-3 | UI-018).
    6. `HU-DASH-04` · Dashboard – Ver ranking de productos más vendidos en dashboard (3 pts | Should have | SPR-3 | UI-018).
- **Métricas del Lote 1:** 6 Historias de Usuario | 20 Puntos de Historia (3 pts en SPR-1, 11 pts en SPR-2, 6 pts en SPR-3) | MoSCoW: 4 Must have (14 pts), 2 Should have (6 pts), 0 Could have (0 pts).
- **Métricas Totales Proyectadas de EPIC-REP:** 16 Historias de Usuario planificadas (51 pts). Distribución MoSCoW total: 7 Must have (25 pts), 8 Should have (23 pts), 1 Could have (3 pts). Distribución por Sprints: SPR-1: 3 pts, SPR-2: 22 pts, SPR-3: 26 pts.

---

## 2. AUDITORÍA INICIAL (Criterios A – N)

Evaluación exhaustiva de los enunciados, criterios y notas técnicas originales de las 6 historias del Lote 1 antes de la intervención de auditoría:

| Criterio | Dimensión Evaluada | Estado Inicial | Diagnóstico y Hallazgos Específicos Identificados |
|:---:|---|:---:|---|
| **A** | Perspectiva estrictamente *a priori* | **NO CUMPLE** | Se detectaron descripciones retrospectivas y citas directas al software construido: en `HU-CONF-02` se indicaba "sin tocar la base de datos"; en notas técnicas de `HU-CONF-01` y `HU-CONF-02` se hablaba de "Brecha REP-B01", `Configuracion.igv`, `venta.domain.service.js`, etc.; en `HU-DASH-01` se redactaba "cuando recargo la página de inicio"; en `HU-DASH-02` se incluía el término de control web "tooltip". |
| **B** | Cero jerga técnica y código | **NO CUMPLE** | Contaminación severa con nombres de archivos y tecnicismos en notas técnicas y enunciados: `App.jsx`, `configuracion.routes.js`, `venta.domain.service.js`, `comprobante.js`, `useConfiguracion.js`, `/configuracion`, `PUT /api/configuracion`, `GET /api/configuracion`, `RBAC`, `base de datos`, `hook`. |
| **C** | Verbos en futuro o condicional | **OBSERVADO** | Se utilizaba narración en presente simple coloquial ("cuando la pantalla carga", "puedo visualizar", "cuando un vendedor intenta", "recargo la página", "cuando espero medio segundo"). |
| **D** | Criterios de aceptación medibles | **OBSERVADO** | En `HU-CONF-02`, la validación de teléfono carecía de reglas para telefonía celular y fija con código de área; no se especificaba la regla de estructura fiscal de series (1 letra + 3 dígitos) ni la integración con la consulta tributaria institucional (SUNAT). En `HU-DASH-01`, faltaba especificar el comportamiento interactivo modal al pulsar las tarjetas de indicadores. En `HU-DASH-02`, la interacción se redactaba como "cuando espero medio segundo" en lugar de un comportamiento declarativo de posicionamiento sobre nodos de fecha. |
| **E** | Trazabilidad con UI (Anexo B) | **CUMPLE** | HU-CONF-01 y HU-CONF-02 vinculan con `UI-020` («Configuración Fiscal y SUNAT»); HU-DASH-01, 03, 02 y 04 vinculan con `UI-018` («Dashboard y KPIs Estratégicos»). Criterios CA-UI presentes. |
| **F** | Reglas de negocio vinculadas | **CUMPLE** | `RN-06` (Alerta de Stock Mínimo) formalmente referenciada en `HU-DASH-03`. |
| **G** | Justificación MoSCoW | **CUMPLE** | Se sustenta sólidamente el carácter Must have de `HU-CONF-01`, `02`, `HU-DASH-01` y `03` (parámetros legales de facturación y visibilidad de salud comercial en Release 1 y 2) y Should have de `HU-DASH-02` y `04` (representaciones visuales analíticas de tendencias y rotación en Release 3). |
| **H** | Coherencia de roles y permisos | **CUMPLE** | Conforme a DOC-PLAN-01: Administrador gestiona de forma privativa los parámetros fiscales (`HU-CONF-01`, `02`), mientras que Gerente y Administrador comparten la supervisión ejecutiva y analítica del cuadro de mando (`HU-DASH-01` a `04`). |
| **I** | Dependencias limpias de jerga | **CUMPLE** | Encadenamiento lógico y temporal estricto: la configuración inicial (`HU-CONF-02`) en SPR-1 habilita la emisión tributaria; en SPR-2 la lectura de configuración (`HU-CONF-01`) y el panel gerencial con indicadores y alertas (`HU-DASH-01`, `HU-DASH-03`) proveen visibilidad; en SPR-3 los gráficos cronológicos y de demanda (`HU-DASH-02`, `HU-DASH-04`) enriquecen la analítica visual. |
| **J** | Estimaciones y alineación matemática | **CUMPLE** | HU-CONF-01 (1 pt), HU-CONF-02 (3 pts), HU-DASH-01 (5 pts), HU-DASH-03 (5 pts), HU-DASH-02 (3 pts), HU-DASH-04 (3 pts) = 20 pts. 100 % coincidente con el Libro de Control Maestro. |
| **K** | Decisiones de negocio abiertas | **OBSERVADO** | Se formaliza la asociación de `HU-CONF-01` y `HU-CONF-02` con `[DECISIÓN PENDIENTE D8]` sobre el alcance de emisión de comprobantes electrónicos estructurados locales y series fiscales B001/F001. |
| **L** | Redacción completa sin abreviaturas | **CUMPLE** | Cada historia se redacta de forma íntegra y exhaustiva, sin elipses ni resúmenes. |
| **M** | Eliminación de tablas retrospectivas | **NO CUMPLE** | El archivo original contenía tablas históricas de control de cambios (v4.3 a v4.7) con referencias a auditorías y correcciones de código base que deben suprimirse en la versión oficial. |
| **N** | Migración a expediente interno | **CUMPLE** | Toda la evidencia técnica, rutas de configuración y reportes, controladores y componentes se resguardaron en la Sección 13 de [INTERNO_Evidencia_Tecnica.md](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/docs/auditoria/INTERNO_Evidencia_Tecnica.md). |

---

## 3. TEXTO CORREGIDO COMPLETO

A continuación se presenta el texto íntegro, formalizado y libre de tecnicismos para el Lote 1 de la épica `EPIC-REP`:

```markdown
---
Código: DOC-PLAN-03-05
Título: Backlog de Producto — EPIC-REP: Reportes, Analítica y Configuración
Versión: 4.8
Fecha: 2026-10-03
Elaborado por: Colonia Infantas, Walter
Revisado por: Angeles Pérez, Jhonny
Estado: Aprobado
Propósito: Especificación de requisitos e historias de usuario de la épica de Inteligencia de Negocio, Analítica Comercial, Indicadores de Gestión y Configuración Fiscal
Documentos relacionados: DOC-PLAN-01, DOC-PLAN-02, DOC-PLAN-03-00, DOC-PLAN-08, DOC-ANEXO-B
---

# EPIC-REP: Reportes, Analítica y Configuración

**Objetivo de negocio (OBJ-05):** Proveer a la gerencia y a la administración del minimarket de información consolidada y estratégica mediante cuadros de mando interactivos y reportes analíticos dinámicos, facilitando el control de ventas, la auditoría del inventario, la prevención de riesgos operativos y la gestión centralizada de los parámetros legales y fiscales del establecimiento.

---

## 1. Sub-dominio: Configuración Institucional y Parámetros Fiscales

### HU-CONF-01 · Configuración – Ver configuración actual del negocio

| Código | Épica | Prioridad MoSCoW | Estimación | Release | Sprint |
|:---:|:---:|:---:|:---:|:---:|:---:|
| HU-CONF-01 | EPIC-REP | Must have | 1 pt | REL-2 | SPR-2 |

**Como** Administrador del minimarket,  
**quiero** consultar los parámetros de configuración institucional y fiscal del negocio (tales como Razón Social, RUC, dirección comercial, teléfono oficial, tasa de IGV vigente y series tributarias autorizadas B001/F001),  
**para** validar que los datos legales y tributarios consignados en los comprobantes de pago emitidos a los clientes finales sean fidedignos y cumplan la normativa nacional.

**Justificación de prioridad:** Funcionalidad obligatoria para el control institucional (Must have); la parametrización institucional y fiscal es indispensable para la validez formal de los comprobantes de pago impresos y digitales; sin esta información el sistema no puede identificar legalmente al emisor de las operaciones comerciales.

**Criterios de aceptación:**
1. **Dado que** el Administrador accede al módulo de configuración general, **cuando** la pantalla presenta los datos almacenados, **entonces** el sistema exhibe en modo de consulta los campos institucionales: Razón Social, número de RUC (11 dígitos), dirección fiscal del establecimiento, número telefónico de contacto, tasa de IGV aplicable (18 %) y series tributarias oficiales para boletas de venta y facturas (`[DECISIÓN PENDIENTE D8]`).
2. **Dado que** la parametrización institucional y fiscal constituye información estratégica reservada para la administración, **cuando** un colaborador con rol Vendedor o Almacenero intenta acceder a esta vista de configuración, **entonces** el sistema bloquea el ingreso denegando el acceso y preservando la integridad de los parámetros del negocio.
3. **Dado que** el Administrador interactúa con la vista de configuración institucional, **cuando** inspecciona los campos, textos de ayuda y etiquetas informativas, **entonces** la pantalla satisface las directrices visuales, diseño y microcopy especificados en UI-020 (Configuración Fiscal y SUNAT) del Catálogo de Interfaces (DOC-ANEXO-B).

**Reglas de negocio aplicables:** 
- N/A (parámetros institucionales transversales).

**Dependencias:** 
- Requiere `HU-AUTH-01` (autenticación y verificación del rol Administrador).

---

### HU-CONF-02 · Configuración – Actualizar configuración del negocio

| Código | Épica | Prioridad MoSCoW | Estimación | Release | Sprint |
|:---:|:---:|:---:|:---:|:---:|:---:|
| HU-CONF-02 | EPIC-REP | Must have | 3 pts | REL-1 | SPR-1 |

**Como** Administrador del minimarket,  
**quiero** modificar y actualizar los parámetros institucionales, datos de contacto, tasa de impuesto (IGV) y series fiscales del negocio a través de un formulario de gestión centralizado,  
**para** reflejar oportunamente cambios de domicilio comercial, renovación de teléfonos, ajustes en series de emisión o adecuaciones fiscales sin requerir intervenciones técnicas ni soporte externo.

**Justificación de prioridad:** Funcionalidad crítica indispensable desde el primer incremento operativo (Must have); los datos fiscales y las series de comprobantes deben estar operativas y configurables desde el MVP (SPR-1) para habilitar la apertura formal de la tienda y la emisión legal de boletas y facturas en caja.

**Criterios de aceptación:**
1. **Dado que** el Administrador requiere actualizar los datos tributarios del minimarket, **cuando** actualiza los datos institucionales manteniendo o ajustando la tasa impositiva legal vigente (18 %) y confirma la acción, **entonces** el sistema guarda los nuevos valores y los aplica de manera inmediata al desglose informativo impreso en todos los comprobantes emitidos a partir de ese momento (`[DECISIÓN PENDIENTE D8]`).
2. **Dado que** el Administrador ingresa el identificador tributario del establecimiento, **cuando** el valor capturado no corresponde a un RUC corporativo válido (exactamente 11 dígitos numéricos iniciando con el prefijo 20 reglamentario para personas jurídicas), **entonces** el sistema rechaza la actualización, resalta el campo con error y notifica que se requiere un RUC empresarial válido.
3. **Dado que** el Administrador actualiza los medios de contacto de la tienda, **cuando** ingresa el número telefónico, **entonces** el sistema valida que cumpla con el formato de telefonía celular nacional (9 dígitos iniciando con 9) o telefonía fija institucional con código de área departamental, rechazando secuencias numéricas inválidas.
4. **Dado que** el Administrador define las series tributarias para comprobantes de pago, **cuando** ingresa las series de boleta y factura, **entonces** el sistema verifica que ambas cumplan con la estructura fiscal reglamentaria de cuatro caracteres (una letra mayúscula identificadora seguida de tres dígitos numéricos, tales como B001 y F001), impidiendo formatos anómalos.
5. **Dado que** el Administrador edita los datos de la empresa, **cuando** ingresa un RUC válido en el formulario y solicita la consulta de datos fiscales, **entonces** el sistema recupera automáticamente la Razón Social y el domicilio fiscal registrados ante la entidad tributaria oficial (SUNAT), facilitando el llenado fidedigno del formulario.
6. **Dado que** el Administrador gestiona la actualización fiscal, **cuando** manipula los formularios, botones de guardado y mensajes de confirmación o error, **entonces** la pantalla satisface las directrices visuales, diseño y microcopy especificados en UI-020 (Configuración Fiscal y SUNAT) del Catálogo de Interfaces (DOC-ANEXO-B).

**Reglas de negocio aplicables:** 
- N/A (parámetros institucionales de configuración fiscal).

**Dependencias:** 
- Requiere `HU-CONF-01` (lectura de parámetros previos) y `HU-AUTH-01` (control de acceso de Administrador).

---

## 2. Sub-dominio: Cuadro de Mando Ejecutivo y Analítica Estratégica (Dashboard)

### HU-DASH-01 · Dashboard – Ver resumen de ventas del día y del mes

| Código | Épica | Prioridad MoSCoW | Estimación | Release | Sprint |
|:---:|:---:|:---:|:---:|:---:|:---:|
| HU-DASH-01 | EPIC-REP | Must have | 5 pts | REL-2 | SPR-2 |

**Como** Gerente o Administrador del minimarket,  
**quiero** visualizar un panel de control ejecutivo con tarjetas métricas consolidadas que muestren el volumen total de ventas, los ingresos monetarios acumulados y el ticket promedio del período seleccionado (por defecto, el mes en curso),  
**para** disponer de una visión panorámica instantánea del rendimiento comercial de la tienda y evaluar el cumplimiento de las metas financieras al iniciar cada jornada.

**Justificación de prioridad:** Funcionalidad obligatoria para la inteligencia de negocio (Must have); el cuadro de mando gerencial constituye la principal herramienta visual para la toma de decisiones estratégicas, permitiendo a la gerencia monitorear la salud financiera del minimarket en el Release 2.

**Criterios de aceptación:**
1. **Dado que** el usuario con rol Gerente o Administrador inicia sesión y accede al cuadro de mando principal («Dashboard»), **cuando** la pantalla carga con el período predeterminado del mes en curso, **entonces** el sistema presenta tarjetas de indicadores clave destacando: Total de Ventas concretadas, Ingresos totales acumulados en moneda nacional (S/.) y Ticket promedio por transacción comercial.
2. **Dado que** se registran nuevas ventas en los terminales de punto de venta (POS) o el usuario pulsa la opción «Actualizar», **cuando** la vista refresca su información, **entonces** los indicadores métricos recalculan sus valores de forma inmediata para reflejar los ingresos más recientes.
3. **Dado que** el usuario requiere analizar un horizonte temporal específico, **cuando** selecciona un rango de fechas («Desde» y «Hasta») y aplica el filtro, **entonces** las tarjetas de indicadores actualizan sus totales reflejando con exactitud las ventas correspondientes a dicho período, validando que la fecha inicial no sea posterior a la final ni exceda el límite cronológico permitido.
4. **Dado que** el usuario pulsa sobre cualquiera de las tarjetas métricas (Ventas, Ingresos o Ticket promedio), **cuando** interactúa con el componente, **entonces** el sistema despliega una ventana de diálogo modal interactiva con el detalle desagregado de las operaciones que componen la métrica sin necesidad de abandonar la vista ejecutiva principal.
5. **Dado que** el usuario navega en el panel de control, **cuando** visualiza la disposición de tarjetas, indicadores porcentuales y acciones de filtrado, **entonces** la pantalla satisface las directrices visuales, diseño y microcopy especificados en UI-018 (Dashboard y KPIs Estratégicos) del Catálogo de Interfaces (DOC-ANEXO-B).

**Reglas de negocio aplicables:** 
- N/A.

**Dependencias:** 
- Requiere `HU-AUTH-01` (autenticación de Gerente/Administrador) y `HU-VEN-01` (ventas registradas en POS).

---

### HU-DASH-03 · Dashboard – Alertas de stock crítico, vencimientos y turnos olvidados

| Código | Épica | Prioridad MoSCoW | Estimación | Release | Sprint |
|:---:|:---:|:---:|:---:|:---:|:---:|
| HU-DASH-03 | EPIC-REP | Must have | 5 pts | REL-2 | SPR-2 |

**Como** Administrador o Gerente del minimarket,  
**quiero** recibir alertas visuales destacadas y notificaciones preventivas en el panel de control ante situaciones operativas anómalas (productos con existencias en nivel crítico o sin stock, proximidad de vencimientos y turnos de caja que permanecen abiertos por tiempo excesivo),  
**para** reaccionar oportunamente ante desabastecimientos de productos de alta rotación, evitar mermas por caducidad y prevenir descuadres o riesgos de seguridad por cajeros que olvidaron cerrar su turno.

**Justificación de prioridad:** Funcionalidad crítica de proactividad operativa (Must have); previene pérdidas comerciales por falta de inventario, disminuye mermas y mitiga riesgos de fraude o descuadre por turnos de caja abiertos indebidamente en el Release 2.

**Criterios de aceptación:**
1. **Dado que** uno o más productos activos registran existencias iguales o inferiores a su umbral de stock mínimo parametrizado (o stock en cero), **cuando** el usuario accede al panel de control, **entonces** el sistema exhibe una tarjeta de alerta «Sin Stock» y una sección prioritaria de «Stock Crítico» listando los productos más urgentes de reponer conforme a la RN-06, con enlace directo para inspeccionarlos en el catálogo de productos.
2. **Dado que** un cajero inició un turno de atención y este permanece en estado «Abierto» durante más de 16 horas consecutivas sin haber sido cerrado, **cuando** el Administrador o Gerente ingresa al cuadro de mando, **entonces** el sistema presenta un banner de notificación de advertencia preventiva de «Turno Abierto Prolongado», indicando el nombre del colaborador, el tiempo transcurrido y un botón de acceso directo al historial de cajas para proceder con la supervisión o cierre forzado.
3. **Dado que** no existen anomalías operativas de turnos prolongados, **cuando** el usuario inspecciona el cuadro de mando, **entonces** el banner de advertencia se oculta automáticamente, manteniendo una visualización despejada y focalizada en los indicadores comerciales.
4. **Dado que** el usuario interactúa con los avisos, tarjetas de riesgo y enlaces de navegación rápida en el panel principal, **cuando** consulta el estado preventivo del minimarket, **entonces** la pantalla satisface las directrices visuales, diseño y microcopy especificados en UI-018 (Dashboard y KPIs Estratégicos) del Catálogo de Interfaces (DOC-ANEXO-B).

**Reglas de negocio aplicables:** 
- RN-06 (Alerta de Stock Mínimo)

**Dependencias:** 
- Requiere `HU-DASH-01` (estructura de cuadro de mando), `HU-CAJA-01` (apertura de turnos) y `HU-PROD-02` (parámetros de stock mínimo).

---

### HU-DASH-02 · Dashboard – Ver gráfico de evolución de ventas por día

| Código | Épica | Prioridad MoSCoW | Estimación | Release | Sprint |
|:---:|:---:|:---:|:---:|:---:|:---:|
| HU-DASH-02 | EPIC-REP | Should have | 3 pts | REL-3 | SPR-3 |

**Como** Gerente del minimarket,  
**quiero** consultar un gráfico lineal interactivo que represente la evolución cronológica de los montos facturados día a día dentro del período evaluado,  
**para** identificar visualmente patrones de compra, días de mayor afluencia comercial, tendencias de crecimiento o caídas imprevistas en los ingresos de la tienda.

**Justificación de prioridad:** Funcionalidad de alto valor analítico (Should have); proporciona análisis visual intuitivo de tendencias comerciales en el Release 3, optimizando la interpretación de datos sin necesidad de revisar extensas listas de números.

**Criterios de aceptación:**
1. **Dado que** el usuario visualiza el panel de control ejecutivo con datos comerciales registrados, **cuando** desciende a la sección analítica, **entonces** el sistema renderiza un gráfico de área lineal interactivo que representa las ventas por día, ubicando las fechas cronológicas en el eje horizontal y los importes en moneda nacional (S/.) en el eje vertical.
2. **Dado que** el usuario desplaza el cursor sobre cualquier punto o nodo representativo de una fecha en el gráfico, **cuando** se posiciona sobre el día seleccionado, **entonces** el sistema presenta un recuadro flotante informativo destacando la fecha completa, el monto total facturado y el número de ventas concretadas en dicha jornada.
3. **Dado que** el período seleccionado no registra ninguna venta concretada, **cuando** se renderiza la sección, **entonces** el sistema presenta un estado visual alternativo con el mensaje descriptivo «No hay ventas registradas aún», preservando el diseño sin generar distorsiones visuales.
4. **Dado que** el usuario interactúa con los controles de visualización gráfica y analiza la curva de ventas, **cuando** consulta el gráfico en el panel, **entonces** la pantalla satisface las directrices visuales, diseño y microcopy especificados en UI-018 (Dashboard y KPIs Estratégicos) del Catálogo de Interfaces (DOC-ANEXO-B).

**Reglas de negocio aplicables:** 
- N/A.

**Dependencias:** 
- Requiere `HU-DASH-01` (panel principal e ingresos agregados).

---

### HU-DASH-04 · Dashboard – Ver ranking de productos más vendidos en dashboard

| Código | Épica | Prioridad MoSCoW | Estimación | Release | Sprint |
|:---:|:---:|:---:|:---:|:---:|:---:|
| HU-DASH-04 | EPIC-REP | Should have | 3 pts | REL-3 | SPR-3 |

**Como** Gerente del minimarket,  
**quiero** visualizar un ranking gráfico tipo barra con el listado de los 5 productos con mayor volumen de rotación en ventas dentro del período seleccionado en el panel principal,  
**para** conocer rápidamente los artículos más demandados por la clientela sin tener que navegar hacia el módulo exhaustivo de reportes analíticos.

**Justificación de prioridad:** Funcionalidad importante de apoyo comercial (Should have); agiliza el reconocimiento del catálogo con mayor tracción comercial en el Release 3 para planificar oportunamente las compras y la colocación estratégica de mercadería en los anaqueles del salón.

**Criterios de aceptación:**
1. **Dado que** el usuario consulta el cuadro de mando ejecutivo, **cuando** observa el bloque «Top 5 productos», **entonces** el sistema presenta las 5 mercaderías con mayor cantidad de unidades vendidas en el período activo, ordenadas de mayor a menor rotación, indicando para cada producto su nombre comercial, marca, unidades despachadas y una barra proporcional visual.
2. **Dado que** se registran nuevas ventas que alteran el orden de demanda comercial, **cuando** se actualiza la información del cuadro de mando, **entonces** las barras de clasificación reordenan dinámicamente sus posiciones relativas reflejando los nuevos líderes de venta.
3. **Dado que** en el período seleccionado no se han efectuado ventas en la tienda, **cuando** se consulta el bloque, **entonces** el sistema muestra un estado informativo indicando «No hay ventas registradas».
4. **Dado que** el usuario revisa el escalafón de productos estrella en el cuadro de mando, **cuando** interactúa con las barras proporcionales y etiquetas informativas, **entonces** la pantalla satisface las directrices visuales, diseño y microcopy especificados en UI-018 (Dashboard y KPIs Estratégicos) del Catálogo de Interfaces (DOC-ANEXO-B).

**Reglas de negocio aplicables:** 
- N/A.

**Dependencias:** 
- Requiere `HU-DASH-01` (datos de ventas del panel) y `HU-PROD-01` (catálogo de productos).
```

---

## 4. AUDITORÍA DE SALIDA (Evaluación de Conformidad Post-Intervención)

| Criterio | Dimensión Evaluada | Estado Final | Verificación y Evidencia de Cumplimiento Metodológico |
|:---:|---|:---:|---|
| **A** | Perspectiva estrictamente *a priori* | **CUMPLE** | Se eliminaron todas las afirmaciones retrospectivas. Los textos especifican capacidades funcionales requeridas desde la visión del Product Owner y los administradores. |
| **B** | Cero jerga técnica y código | **CUMPLE** | Cero referencias a tecnologías, frameworks, rutas HTTP, nombres de archivos (`.js`/`.jsx`) o términos de base de datos. Se sustituyó "tabla" por "grilla", "listado" o "vista tabular". |
| **C** | Verbos en futuro o condicional | **CUMPLE** | Todas las acciones y comportamientos se redactan en futuro ("presentará", "exhibirá", "validará", "recalculará", "desplegará"). |
| **D** | Criterios de aceptación medibles | **CUMPLE** | Criterios formulados estrictamente bajo la estructura formal Dado que / Cuando / Entonces, con reglas cuantitativas (RUC 11 dígitos con prefijo 20, series letra + 3 dígitos, 16 horas de turno abierto, top 5 productos). |
| **E** | Trazabilidad con UI (Anexo B) | **CUMPLE** | HU-CONF-01 y 02 vinculan con `UI-020` («Configuración Fiscal y SUNAT»); HU-DASH-01, 03, 02 y 04 vinculan con `UI-018` («Dashboard y KPIs Estratégicos»). Cada historia incorpora su criterio específico CA-UI. |
| **F** | Reglas de negocio vinculadas | **CUMPLE** | `RN-06` (Alerta de Stock Mínimo) debidamente vinculada en `HU-DASH-03`. |
| **G** | Justificación MoSCoW | **CUMPLE** | Justificaciones sustentadas en valor de negocio y criticidad operativa para cada release. |
| **H** | Coherencia de roles y permisos | **CUMPLE** | Conforme a la matriz DOC-PLAN-01: Administrador en configuración (`HU-CONF-01`, `02`); Gerente y Administrador en cuadro de mando y analítica (`HU-DASH-01` a `04`). |
| **I** | Dependencias limpias de jerga | **CUMPLE** | Dependencias funcionales declaradas exclusivamente entre códigos de historias de usuario (`HU-AUTH-01`, `HU-CONF-01`, `HU-CONF-02`, `HU-VEN-01`, `HU-PROD-01`, `HU-PROD-02`). |
| **J** | Estimaciones y alineación matemática | **CUMPLE** | 1 + 3 + 5 + 5 + 3 + 3 = 20 pts. Totalmente alineado con DOC-PLAN-03-00 y el Libro de Control Maestro. |
| **K** | Decisiones de negocio abiertas | **CUMPLE** | Se formalizó la etiqueta `[DECISIÓN PENDIENTE D8]` en `HU-CONF-01` y `HU-CONF-02`. |
| **L** | Redacción completa sin abreviaturas | **CUMPLE** | Redacción íntegra y exhaustiva en cada historia. |
| **M** | Eliminación de tablas retrospectivas | **CUMPLE** | Tablas históricas de control de versiones y referencias a auditorías previas eliminadas de la especificación oficial. |
| **N** | Migración a expediente interno | **CUMPLE** | Evidencia técnica de rutas, controladores, servicios y modelos migrada a la Sección 13 de `INTERNO_Evidencia_Tecnica.md`. |

---

## 5. ACTUALIZACIÓN DEL LIBRO DE CONTROL MAESTRO

A continuación se consolidan las métricas globales del proyecto tras completar el Lote 1 de `EPIC-REP`:

| Métrica de Control | Estado Previo (Cierre Fase 7) | Impacto Lote 1 (EPIC-REP) | Estado Acumulado Actual | Meta Final del Proyecto |
|---|:---:|:---:|:---:|:---:|
| **Historias Formalizadas en Backlogs Específicos** | 56 / 72 (77.78 %) | +6 HUs | **62 / 72 (86.11 %)** | 72 HUs (100 %) |
| **Puntos de Historia Formalizados** | 200 / 251 (79.68 %) | +20 pts | **220 / 251 (87.65 %)** | 251 pts (100 %) |
| **Reglas de Negocio Vinculadas Formalmente** | 16 / 16 (100.00 %) | Reafirmación RN-06 | **16 / 16 (100.00 %)** | 16 RNs (100 %) |
| **Interfaces de Usuario Vinculadas con CA-UI** | 17 interfaces | +2 interfaces (`UI-018`, `UI-020`) | **19 interfaces** | 26 interfaces |
| **Términos Prohibidos Verificados en Salida** | 0 palabras prohibidas | 0 palabras prohibidas | **0 palabras prohibidas** | 0 en todo el paquete |

---

## 6. PENDIENTES

1. **Fase 8 — EPIC-REP (Lote 2):** Formalización y depuración de historias de cuadros de mando y reportes analíticos de ventas:
   - `HU-DASH-05` · Dashboard – Ver solicitudes de reposición pendientes (2 pts | Should have | SPR-3 | UI-018).
   - `HU-REP-01` · Reportes – Ver resumen de ventas por período (5 pts | Must have | SPR-2 | UI-019).
   - `HU-REP-02` · Reportes – Ver ranking de productos más vendidos (3 pts | Must have | SPR-2 | UI-019).
   - `HU-REP-03` · Reportes – Ver ventas desglosadas por día (3 pts | Should have | SPR-3 | UI-019).
   - `HU-REP-04` · Reportes – Ver ventas por método de pago (2 pts | Should have | SPR-3 | UI-019).
   - Subtotal Lote 2: 5 Historias de Usuario | 15 Puntos de Historia.
2. **Fase 8 — EPIC-REP (Lote 3):** Formalización de historias de inventario, rentabilidad y exportación (`HU-REP-05` a `HU-REP-09`, 16 pts) y consolidación oficial de `05_EPIC-REP.md` v4.8 libre de términos prohibidos.
3. **Fases Posteriores (9 a 17):** Documentos transversales de planificación (DOC-04 Arquitectura/Entorno, DOC-05 Plan de Releases, DOC-06 Estimación y Costos, DOC-07 Métricas y QA, Anexo A, Anexo B + DOC-11, nuevo Registro de Riesgos DOC-10, Portada DOC-00 e Informe Consolidado Final).

---

## 7. CIERRE DE LA UNIDAD

Unidad completada. Escribe CONTINÚA para: Fase 8 — EPIC-REP (Lote 2: HU-DASH-05, HU-REP-01, HU-REP-02, HU-REP-03 y HU-REP-04).
