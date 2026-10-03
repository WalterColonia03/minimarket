# Auditoría y Corrección Metodológica: Fase 8 — EPIC-REP (Lote 3: HU-REP-05, HU-REP-06, HU-REP-07, HU-REP-08 y HU-REP-09)

---

## 1. UNIDAD TRABAJADA

- **Identificador de Documento:** `DOC-PLAN-03-05` (previamente catalogado como `DOC-PLAN-03-EPIC-REP`).
- **Título de la Unidad:** Catálogo de Historias de Usuario — Épica EPIC-REP (Reportes, Dashboards y Configuración) — Lote 3: Control de Existencias Críticas, Rentabilidad, Mermas y Exportación PDF.
- **Archivo de Origen:** `docs/planificacion-scrum/paquete_v4.7 PLANIFICACION SI SIRVE/paquete_v4.7/05_EPIC-REP.md`.
- **Alcance del Lote 3:**
  - Historias de Usuario seleccionadas del Lote 3:
    1. `HU-REP-05` · Reportes – Ver stock crítico (3 pts | Must have | SPR-2 | UI-019 | RN-06).
    2. `HU-REP-06` · Reportes – Ver resumen general del inventario (2 pts | Should have | SPR-3 | UI-019).
    3. `HU-REP-07` · Reportes – Ver margen de ganancia por producto (5 pts | Should have | SPR-3 | UI-019 | RN-14).
    4. `HU-REP-08` · Reportes – Ver mermas agrupadas por motivo (3 pts | Should have | SPR-3 | UI-019).
    5. `HU-REP-09` · Reportes – Exportar reportes en PDF (3 pts | Could have | SPR-3 | UI-019).
- **Métricas del Lote 3:** 5 Historias de Usuario | 16 Puntos de Historia (0 pts en SPR-1, 3 pts en SPR-2, 13 pts en SPR-3) | MoSCoW: 1 Must have (3 pts), 3 Should have (10 pts), 1 Could have (3 pts).
- **Métricas Finales Consolidadas de EPIC-REP:** 16 Historias de Usuario (51 pts | 100.00 % de la épica formalizada). MoSCoW: 7 Must have (25 pts), 8 Should have (23 pts), 1 Could have (3 pts). Distribución por Sprints: SPR-1: 3 pts, SPR-2: 22 pts, SPR-3: 26 pts.
- **Hito Global Alcanzado:** Culminación al 100 % de las 5 Épicas del Product Backlog (72 de 72 Historias de Usuario | 251 de 251 Puntos de Historia formalizados bajo el estándar v4.8).

---

## 2. AUDITORÍA INICIAL (Criterios A – N)

Evaluación exhaustiva de los enunciados, criterios y notas técnicas originales de las 5 historias del Lote 3 antes de la intervención de auditoría:

| Criterio | Dimensión Evaluada | Estado Inicial | Diagnóstico y Hallazgos Específicos Identificados |
|:---:|---|:---:|---|
| **A** | Perspectiva estrictamente *a priori* | **NO CUMPLE** | Se detectaron fragmentos retrospectivos y citas a librerías técnicas: en `HU-REP-07` CA2 se decía "cuando la tabla carga"; en `HU-REP-08` se hablaba de "tablas agrupando"; en `HU-REP-09` se especificaba "compila la vista mediante jsPDF y autoTable" y "múltiples tablas y datos". |
| **B** | Cero jerga técnica y código | **NO CUMPLE** | Uso repetido de términos técnicos prohibidos en criterios y justificaciones: "tabla", "jsPDF", "autoTable", citas a `costo_unitario` y variables internas del backend. |
| **C** | Verbos en futuro o condicional | **OBSERVADO** | Se alternaba la redacción proyectiva con presente simple informal ("cuando la tabla carga", "veo gráficos y tablas", "cuando reviso el detalle", "cuando pulso el botón"). |
| **D** | Criterios de aceptación medibles | **OBSERVADO** | En `HU-REP-05`, faltaba especificar la capacidad de parametrización interactiva del umbral crítico en pantalla. En `HU-REP-06`, no se detallaba el comportamiento reactivo ante movimientos concurrentes de entrada y salida. En `HU-REP-07`, faltaba formalizar la ordenación interactiva ascendente/descendente de la grilla de rentabilidad. En `HU-REP-08`, no se aclaraba el comportamiento ante categorías de merma sin bajas en el período (S/ 0.00). En `HU-REP-09`, no se especificaba la protección contra descargas duplicadas involuntarias. |
| **E** | Trazabilidad con UI (Anexo B) | **CUMPLE** | Las 5 historias (`HU-REP-05` a `HU-REP-09`) vinculan formalmente con la interfaz `UI-019` («Reportes Analíticos y PDF»). Criterios CA-UI presentes. |
| **F** | Reglas de negocio vinculadas | **CUMPLE** | `RN-06` (Alerta de Stock Mínimo) debidamente vinculada en `HU-REP-05`; `RN-14` (Actualización de Valorización de Inventario por Costo Promedio) formalmente vinculada en `HU-REP-07`. |
| **G** | Justificación MoSCoW | **CUMPLE** | Sustento riguroso: Must have para `HU-REP-05` (prevención de roturas de stock en Release 2); Should have para `HU-REP-06`, `07` y `08` (control patrimonial, rentabilidad tarifaria y fuga de mermas en Release 3); Could have para `HU-REP-09` (conveniencia de archivo y distribución en PDF en Release 3). |
| **H** | Coherencia de roles y permisos | **CUMPLE** | Conforme a DOC-PLAN-01: Administrador y Gerente disponen de acceso integral al módulo de reportes; el rol Almacenero tiene explícitamente "Sin acceso", canalizando sus alertas vía catálogo (`HU-PROD-01`) y solicitudes (`HU-SOL-01`). |
| **I** | Dependencias limpias de jerga | **CUMPLE** | Secuencia cronológica y funcional limpia: módulos de inventario (`HU-INV-01`, `HU-INV-02`), compras (`HU-PROD-02`) y ventas (`HU-REP-01`) proveen los insumos de datos requeridos para compilar existencias críticas, rentabilidad y mermas. |
| **J** | Estimaciones y alineación matemática | **CUMPLE** | HU-REP-05 (3 pts), HU-REP-06 (2 pts), HU-REP-07 (5 pts), HU-REP-08 (3 pts), HU-REP-09 (3 pts) = 16 pts. 100 % coincidente con el Libro de Control Maestro. |
| **K** | Decisiones de negocio abiertas | **CUMPLE** | No existen decisiones pendientes sin formalizar en este lote; las reglas de cálculo de rentabilidad y umbrales operan conforme a las definiciones maestras de DOC-PLAN-08. |
| **L** | Redacción completa sin abreviaturas | **CUMPLE** | Cada historia se redacta de forma íntegra y exhaustiva, sin elipses ni resúmenes. |
| **M** | Eliminación de tablas retrospectivas | **NO CUMPLE** | El archivo original contenía tablas de control de versiones pasadas (v4.3 a v4.7) con lenguaje retrospectivo de auditoría que deben eliminarse en la consolidación oficial. |
| **N** | Migración a expediente interno | **CUMPLE** | Todas las citas técnicas, algoritmos de cálculo SQL y dependencias de librerías PDF se resguardaron en la Sección 15 de [INTERNO_Evidencia_Tecnica.md](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/docs/auditoria/INTERNO_Evidencia_Tecnica.md). |

---

## 3. TEXTO CORREGIDO COMPLETO

A continuación se presenta el texto íntegro, formalizado y libre de tecnicismos para el Lote 3 de la épica `EPIC-REP`:

```markdown
### HU-REP-05 · Reportes – Ver stock crítico

| Código | Épica | Prioridad MoSCoW | Estimación | Release | Sprint |
|:---:|:---:|:---:|:---:|:---:|:---:|
| HU-REP-05 | EPIC-REP | Must have | 3 pts | REL-2 | SPR-2 |

**Como** Administrador o Gerente del minimarket,  
**quiero** generar un reporte consolidado de los productos cuyo stock actual sea igual o inferior a su umbral de stock mínimo parametrizado,  
**para** identificar oportunamente los riesgos inminentes de desabastecimiento y planificar las órdenes de compra y solicitudes de reposición masivas.

**Justificación de prioridad:** Funcionalidad crítica indispensable para la continuidad operativa (Must have); permite centralizar todas las alertas de reposición en una vista administrativa unificada en el Release 2, evitando la pérdida de ventas por quiebre de stock.

*Nota de trazabilidad:* El rol Almacenero tiene estrictamente "Sin acceso" al módulo de Reportes; su labor de monitoreo y reposición se canaliza operativamente a través de los filtros de alerta del catálogo de productos (HU-PROD-01) y la emisión de solicitudes de reposición (HU-SOL-01).

**Criterios de aceptación:**
1. **Dado que** el usuario solicita el reporte de existencias críticas, **cuando** el sistema compila la información, **entonces** presenta exclusivamente aquellos productos activos donde las existencias actuales sean menores o iguales a su umbral mínimo configurado (o al umbral global predeterminado de 5 unidades) conforme a la RN-06.
2. **Dado que** se presenta la grilla de stock crítico, **cuando** el usuario inspecciona las columnas, **entonces** visualiza de forma clara el código del producto, nombre comercial, marca, categoría, existencias vigentes y el umbral mínimo específico aplicado para la evaluación.
3. **Dado que** el usuario requiere ajustar el nivel de exigencia del reporte, **cuando** modifica el umbral numérico de evaluación en pantalla y aplica el cambio, **entonces** la grilla recalcula dinámicamente el listado incorporando los artículos que cumplan el nuevo criterio de criticidad.
4. **Dado que** el usuario interactúa con el reporte analítico de existencias críticas, **cuando** consulta los datos en pantalla, **entonces** la interfaz satisface las directrices visuales, diseño y microcopy especificados en UI-019 (Reportes Analíticos y PDF) del Catálogo de Interfaces (DOC-ANEXO-B).

**Reglas de negocio aplicables:** 
- RN-06 (Alerta de Stock Mínimo)

**Dependencias:** 
- Requiere `HU-REP-01` (módulo de reportes) y `HU-PROD-02` (parámetros de stock mínimo en productos).

---

### HU-REP-06 · Reportes – Ver resumen general del inventario

| Código | Épica | Prioridad MoSCoW | Estimación | Release | Sprint |
|:---:|:---:|:---:|:---:|:---:|:---:|
| HU-REP-06 | EPIC-REP | Should have | 2 pts | REL-3 | SPR-3 |

**Como** Gerente o Administrador del minimarket,  
**quiero** consultar un resumen cuantitativo consolidado del estado global del inventario en almacén y salón,  
**para** conocer las métricas operativas de volumen del catálogo comercial, cobertura de categorías, red de proveedores y artículos agotados en el Release 3.

**Justificación de prioridad:** Funcionalidad de alto valor para el control patrimonial (Should have); proporciona una radiografía global del catálogo de existencias sin requerir auditorías manuales exhaustivas.

**Criterios de aceptación:**
1. **Dado que** el usuario accede al bloque de estado del inventario, **cuando** la pantalla presenta los datos, **entonces** el sistema exhibe los conteos cuantitativos globales: total de productos comerciales activos, total de categorías creadas, total de proveedores activos, cantidad de productos con existencias en cero y total de solicitudes de reposición en estado pendiente.
2. **Dado que** se producen entradas por compras, despachos en ventas o bajas por merma, **cuando** el usuario refresca la consulta, **entonces** los indicadores cuantitativos actualizan sus valores en tiempo real reflejando la situación patrimonial vigente del almacén.
3. **Dado que** el usuario analiza las tarjetas cuantitativas de existencias, **cuando** navega en la vista analítica, **entonces** la pantalla satisface las directrices visuales, diseño y microcopy especificados en UI-019 (Reportes Analíticos y PDF) del Catálogo de Interfaces (DOC-ANEXO-B).

**Reglas de negocio aplicables:** 
- N/A.

**Dependencias:** 
- Requiere `HU-REP-01` (módulo de reportes) y `HU-PROD-01` (catálogo de productos).

---

### HU-REP-07 · Reportes – Ver margen de ganancia por producto

| Código | Épica | Prioridad MoSCoW | Estimación | Release | Sprint |
|:---:|:---:|:---:|:---:|:---:|:---:|
| HU-REP-07 | EPIC-REP | Should have | 5 pts | REL-3 | SPR-3 |

**Como** Gerente del minimarket,  
**quiero** consultar un reporte de rentabilidad comercial que desglose el margen de utilidad bruta (precio de venta cobrado frente al costo promedio de adquisición) por cada producto vendido,  
**para** identificar los artículos con mayor y menor aporte financiero al negocio y reajustar oportunamente las listas de precios de aquellos productos que resulten deficitarios o con márgenes reducidos.

**Justificación de prioridad:** Funcionalidad estratégica de rentabilidad comercial (Should have); brinda la inteligencia financiera requerida para asegurar que la política de fijación de precios maximice el retorno económico en el Release 3.

**Criterios de aceptación:**
1. **Dado que** el usuario define un período de análisis y genera el reporte de rentabilidad, **cuando** visualiza la grilla de márgenes comerciales, **entonces** el sistema presenta para cada artículo vendido: nombre del producto, marca, categoría, unidades totales despachadas, importe bruto recaudado, costo valorizado total según el costo promedio ponderado de los lotes consumidos (RN-14), ganancia monetaria absoluta y porcentaje de margen de utilidad obtenido.
2. **Dado que** un producto registró ventas a un precio inferior a su costo de adquisición (margen negativo o venta a pérdida), **cuando** se renderiza la grilla analítica, **entonces** el sistema resalta visualmente la fila con alerta destacada en color rojo y signo negativo, advirtiendo de forma inmediata la anomalía tarifaria.
3. **Dado que** el usuario examina la rentabilidad del catálogo, **cuando** ordena la grilla por ganancia absoluta o porcentaje de margen, **entonces** el sistema reorganiza las filas de forma interactiva en sentido ascendente o descendente.
4. **Dado que** el usuario interactúa con la grilla de rentabilidad comercial, **cuando** revisa los valores en pantalla, **entonces** la interfaz satisface las directrices visuales, diseño y microcopy especificados en UI-019 (Reportes Analíticos y PDF) del Catálogo de Interfaces (DOC-ANEXO-B).

**Reglas de negocio aplicables:** 
- RN-14 (Actualización de Valorización de Inventario)

**Dependencias:** 
- Requiere `HU-REP-01` (módulo de reportes y ventas) y `HU-INV-01` (costos valorizados de entrada en inventario).

---

### HU-REP-08 · Reportes – Ver mermas agrupadas por motivo

| Código | Épica | Prioridad MoSCoW | Estimación | Release | Sprint |
|:---:|:---:|:---:|:---:|:---:|:---:|
| HU-REP-08 | EPIC-REP | Should have | 3 pts | REL-3 | SPR-3 |

**Como** Administrador o Gerente del minimarket,  
**quiero** consultar un reporte consolidado que clasifique las pérdidas monetarias y físicas de mercadería según el motivo de baja registrado (vencimiento, deterioro físico, merma operativa o descarte),  
**para** identificar los principales focos de fuga de valor en la tienda, auditar la gestión de almacenamiento y evaluar acciones correctivas o reclamos formales ante proveedores.

**Justificación de prioridad:** Funcionalidad importante para el control de pérdidas (Should have); permite diagnosticar las causas estructurales de merma y reducir los costos ocultos por desperdicio de productos perecibles en el Release 3.

**Criterios de aceptación:**
1. **Dado que** el usuario selecciona un rango temporal y genera el reporte de mermas, **cuando** la pantalla presenta los resultados, **entonces** el sistema exhibe un desglose analítico agrupando las bajas por motivo reglamentario (Vencimiento, Dañado, Merma Operativa), indicando para cada causa el número total de eventos de descarte, las unidades físicas perdidas y el costo económico total valorizado.
2. **Dado que** el usuario inspecciona el detalle de las pérdidas, **cuando** revisa las partidas registradas, **entonces** el sistema calcula el valor monetario de la merma multiplicando las unidades dadas de baja por el costo unitario de adquisición del lote correspondiente.
3. **Dado que** en el período evaluado no se produjeron bajas para una o más causales de merma, **cuando** se compila el reporte, **entonces** el sistema refleja cero incidencias y costo S/ 0.00 para dichas categorías, conservando la integridad de las sumas totales.
4. **Dado que** el usuario interactúa con la grilla y representaciones gráficas de mermas, **cuando** consulta el análisis en pantalla, **entonces** la interfaz satisface las directrices visuales, diseño y microcopy especificados en UI-019 (Reportes Analíticos y PDF) del Catálogo de Interfaces (DOC-ANEXO-B).

**Reglas de negocio aplicables:** 
- N/A.

**Dependencias:** 
- Requiere `HU-REP-01` (filtros temporales) y `HU-INV-02` (registro de bajas de inventario).

---

### HU-REP-09 · Reportes – Exportar reportes en PDF

| Código | Épica | Prioridad MoSCoW | Estimación | Release | Sprint |
|:---:|:---:|:---:|:---:|:---:|:---:|
| HU-REP-09 | EPIC-REP | Could have | 3 pts | REL-3 | SPR-3 |

**Como** Administrador o Gerente del minimarket,  
**quiero** descargar un documento en formato PDF estructurado y paginado con la información consolidada de los reportes generados en pantalla,  
**para** disponer de un respaldo físico o digital formal para reuniones de directorio, archivo administrativo o sustento ante auditorías externas.

**Justificación de prioridad:** Funcionalidad conveniente de distribución documental (Could have); brinda versatilidad y portabilidad a la información gerencial, aunque la visualización y auditoría operativa se satisfacen plenamente en pantalla dentro del Release 3.

**Criterios de aceptación:**
1. **Dado que** el usuario se encuentra visualizando un reporte analítico en pantalla con datos consultados, **cuando** pulsa la acción «Descargar PDF», **entonces** el sistema compila la información y genera un archivo de documento portátil (PDF) descargable en el navegador, incorporando el membrete del minimarket, fecha de emisión y el rango temporal consultado.
2. **Dado que** el reporte contiene múltiples secciones analíticas (resumen financiero, ventas por día, medios de pago, ranking de rotación y mermas), **cuando** se compila el documento, **entonces** el sistema pagina automáticamente el contenido, manteniendo encabezados claros, estilos tipográficos uniformes y saltos de página ordenados.
3. **Dado que** la compilación del documento se encuentra en progreso, **cuando** el usuario acciona la descarga, **entonces** el sistema exhibe un indicador visual de procesamiento y deshabilita temporalmente el botón para prevenir descargas duplicadas involuntarias.
4. **Dado que** el usuario interactúa con el botón de exportación y la previsualización documental, **cuando** utiliza el módulo, **entonces** la interfaz satisface las directrices visuales, diseño y microcopy especificados en UI-019 (Reportes Analíticos y PDF) del Catálogo de Interfaces (DOC-ANEXO-B).

**Reglas de negocio aplicables:** 
- N/A.

**Dependencias:** 
- Requiere `HU-REP-01` (módulo de reportes consolidados).
```

---

## 4. AUDITORÍA DE SALIDA (Evaluación de Conformidad Post-Intervención)

| Criterio | Dimensión Evaluada | Estado Final | Verificación y Evidencia de Cumplimiento Metodológico |
|:---:|---|:---:|---|
| **A** | Perspectiva estrictamente *a priori* | **CUMPLE** | Se erradicaron todas las expresiones retrospectivas y alusiones a librerías de software. Las 5 historias están formuladas estrictamente desde los requerimientos de información de negocio. |
| **B** | Cero jerga técnica y código | **CUMPLE** | Sin menciones a librerías (`jsPDF`, `autoTable`), sintaxis SQL o palabras prohibidas. Se sustituyó "tabla" por "grilla", "listado" o "listado tabular". |
| **C** | Verbos en futuro o condicional | **CUMPLE** | Comportamientos del sistema redactados consistentemente en tiempo futuro ("presentará", "exhibirá", "recalculará", "resaltará", "paginará"). |
| **D** | Criterios de aceptación medibles | **CUMPLE** | Criterios en formato formal Dado que / Cuando / Entonces con validaciones verificables (umbral dinámico, alerta roja en márgenes negativos, paginación ordenada y bloqueo de descargas duplicadas). |
| **E** | Trazabilidad con UI (Anexo B) | **CUMPLE** | Todas las historias vinculan formalmente con la interfaz `UI-019` («Reportes Analíticos y PDF»). Criterios CA-UI incorporados. |
| **F** | Reglas de negocio vinculadas | **CUMPLE** | Vinculación bidireccional estricta: `RN-06` (Alerta de Stock Mínimo) en `HU-REP-05`; `RN-14` (Actualización de Valorización de Inventario) en `HU-REP-07`. |
| **G** | Justificación MoSCoW | **CUMPLE** | Justificaciones sustentadas en valor de negocio y prioridad de release (1 Must have en SPR-2, 3 Should have y 1 Could have en SPR-3). |
| **H** | Coherencia de roles y permisos | **CUMPLE** | Conforme a la matriz DOC-PLAN-01: acceso reservado a Gerente y Administrador, excluyendo estrictamente al Almacenero y al Vendedor. |
| **I** | Dependencias limpias de jerga | **CUMPLE** | Dependencias referenciadas exclusivamente mediante identificadores de HU (`HU-REP-01`, `HU-PROD-01`, `HU-PROD-02`, `HU-INV-01`, `HU-INV-02`). |
| **J** | Estimaciones y alineación matemática | **CUMPLE** | HU-REP-05 (3 pts), HU-REP-06 (2 pts), HU-REP-07 (5 pts), HU-REP-08 (3 pts), HU-REP-09 (3 pts) = 16 pts. Conteo 100 % alineado con el Backlog Maestro. |
| **K** | Decisiones de negocio abiertas | **CUMPLE** | Reglas de umbrales y ordenamiento especificadas formalmente sin ambigüedades. |
| **L** | Redacción completa sin abreviaturas | **CUMPLE** | Redacción exhaustiva y completa de cada una de las 5 historias de usuario. |
| **M** | Eliminación de tablas retrospectivas | **CUMPLE** | Se eliminaron todas las tablas históricas y de control de cambios previas. |
| **N** | Migración a expediente interno | **CUMPLE** | Citas técnicas, consultas agregadas y librerías de generación PDF migradas a la Sección 15 de `INTERNO_Evidencia_Tecnica.md`. |

---

## 5. ACTUALIZACIÓN DEL LIBRO DE CONTROL MAESTRO

A continuación se consolidan las métricas globales del proyecto tras completar el Lote 3 y cerrar formalmente la épica `EPIC-REP`:

| Métrica de Control | Estado Previo (Cierre Lote 2) | Impacto Lote 3 (EPIC-REP) | Estado Acumulado Actual | Meta Final del Proyecto |
|---|:---:|:---:|:---:|:---:|
| **Historias Formalizadas en Backlogs Específicos** | 67 / 72 (93.06 %) | +5 HUs | **72 / 72 (100.00 %)** | **72 HUs (100.00 %)** |
| **Puntos de Historia Formalizados** | 235 / 251 (93.63 %) | +16 pts | **251 / 251 (100.00 %)** | **251 pts (100.00 %)** |
| **Reglas de Negocio Vinculadas Formalmente** | 16 / 16 (100.00 %) | Reafirmación RN-06, RN-14 | **16 / 16 (100.00 %)** | **16 RNs (100.00 %)** |
| **Interfaces de Usuario Vinculadas con CA-UI** | 19 interfaces | Reafirmación `UI-019` | **19 interfaces** | **26 interfaces** |
| **Términos Prohibidos Verificados en Salida** | 0 palabras prohibidas | 0 palabras prohibidas | **0 palabras prohibidas** | **0 en todo el paquete** |

### Resumen Consolidado de las 5 Épicas del Product Backlog (100 % Auditadas y Formalizadas)

| Código | Título de la Épica | HUs | Estimación Total | Must have | Should have | Could have | Won't have | Estado Oficial |
|:---:|---|:---:|:---:|:---:|:---:|:---:|:---:|:---:|
| **EPIC-SEG** | Seguridad, Acceso y Gestión de Usuarios | 13 | 47 pts | 9 (36 pts) | 3 (8 pts) | 1 (3 pts) | 0 (0 pts) | **100 % Formalizada (v4.8)** |
| **EPIC-CAT** | Gestión de Catálogos Maestros y Clientes | 17 | 42 pts | 8 (23 pts) | 9 (19 pts) | 0 (0 pts) | 0 (0 pts) | **100 % Formalizada (v4.8)** |
| **EPIC-INV** | Control de Inventario, Lotes y Reposición | 11 | 39 pts | 8 (22 pts) | 3 (17 pts) | 0 (0 pts) | 0 (0 pts) | **100 % Formalizada (v4.8)** |
| **EPIC-VEN** | Ventas, Caja y Facturación Electrónica | 15 (+1) | 72 pts | 7 (47 pts) | 7 (22 pts) | 1 (3 pts) | 1 (0 pts) | **100 % Formalizada (v4.8)** |
| **EPIC-REP** | Reportes, Analítica y Configuración | 16 | 51 pts | 7 (25 pts) | 8 (23 pts) | 1 (3 pts) | 0 (0 pts) | **100 % Formalizada (v4.8)** |
| **TOTAL** | **Product Backlog Maestro (DOC-PLAN-03-00)** | **72 (+1)** | **251 pts** | **36 (153 pts)** | **31 (84 pts)** | **5 (14 pts)** | **1 (0 pts)** | **100 % CERRADO** |

---

## 6. PENDIENTES

Concluido el ciclo de auditoría y depuración de las 5 épicas del Product Backlog (Fases 4 a 8), la planificación ágil continúa con los documentos transversales y de gobernanza:

1. **Fase 9 — DOC-PLAN-04 (Arquitectura y Entorno Tecnológico):** Depuración y alineación metodológica del documento de diseño arquitectónico desde perspectiva de especificación de plataforma.
2. **Fase 10 — DOC-PLAN-05 (Plan de Releases e Incrementos):** Formalización de hitos, alcance por release y criterios de entrega de valor comercial.
3. **Fase 11 — DOC-PLAN-06 (Estimación, Capacidad y Costos):** Auditoría matemática de la capacidad del equipo, velocidad proyectada y presupuesto del proyecto.
4. **Fase 12 — DOC-PLAN-07 (Métricas de Calidad, QA y Definition of Done):** Alineación de criterios de aceptación globales, estándares de verificación y DoD.
5. **Fase 13 — DOC-PLAN-09 / Anexo A (Matriz de Trazabilidad Requisitos - HUs):** Verificación de correspondencia biunívoca entre requerimientos funcionales y las 72 HUs.
6. **Fase 14 — DOC-PLAN-10 (Registro de Supuestos y Decisiones de Negocio):** Formalización y resolución de las decisiones D1 a D12.
7. **Fase 15 — DOC-PLAN-11 / Anexo B (Catálogo de Interfaces UI-001 a UI-026):** Verificación de microcopy y alineación de las 26 interfaces con los criterios CA-UI.
8. **Fase 16 — DOC-PLAN-12 (Registro de Riesgos del Proyecto):** Creación del nuevo documento de análisis de riesgos según directrices PMI y Scrum.
9. **Fase 17 — DOC-PLAN-00 (Portada, Índice General y Control Documental Maestro) e Informe Final de Auditoría:** Cierre formal del paquete de planificación v4.8.

---

## 7. CIERRE DE LA UNIDAD

Unidad completada. Escribe CONTINÚA para: Fase 9 — DOC-PLAN-04 (Arquitectura y Entorno Tecnológico).
