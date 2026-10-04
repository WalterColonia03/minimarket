# REPORTE DE AUDITORÍA FORENSE INTEGRAL: CRUCE CÓDIGO VS. PLANIFICACIÓN
**Módulos Auditados:** 
1. Catálogo e Inventario de Productos (EPIC-CAT, EPIC-INV)
2. Punto de Venta y Transacciones Comerciales (EPIC-VEN)
**Proyecto:** Sistema de Gestión Integral para Minimarket con Punto de Venta y Control Tributario  
**Curso / Contexto:** Agile Development — Auditoría Forense de Código y Planificación Scrum  
**Documentos Fuente Contrastados:** Paquete v5.2 Oficial (`02_EPIC-CAT.md`, `03_EPIC-INV.md`, `04_EPIC-VEN.md`, `08_Reglas_de_Negocio_y_Glosario.md`)  
**Auditor:** Profesor Principal de Software & Certified Scrum Trainer (Auditor Líder)  
**Estado:** CHECKPOINT DE CONTROL ACUMULATIVO (Fase 1 y 2)

---

## FASE 1: CATÁLOGO E INVENTARIO (EPIC-CAT, EPIC-INV)

### 1.1. ALCANCE DE LA REVISIÓN
`[HECHO]` Se auditó integralmente el sub-dominio de **Catálogo Maestro de Productos** (`EPIC-CAT`), **Movimientos Físicos de Inventario** (`EPIC-INV`), y **Abastecimiento y Reposición** (`EPIC-INV`), confrontándolo con la lógica transaccional de base de datos, servicios de dominio, controladores de backend y vistas de cliente.

### 1.2. MATRIZ DE HALLAZGOS FORENSES (FASE 1)

#### [CRÍTICO-01] Fuga de Alcance Operativo en Código: Código de Barras Nulable y Opcional
* **Severidad:** `[CRÍTICO]`
* **Evidencia en Código:**
  - `server/models/Producto.js:54-58`: Permite NULL a nivel de base de datos (`allowNull: true`).
  - `server/controllers/producto.controller.js:191-246`: No existe validación de nulidad para `codigo_barras`.
* **Evidencia en Planificación:**
  - `01_Vision_Alcance_y_Stakeholders.md:42`: *"El minimarket comercializa exclusivamente productos envasados con código de barras en unidades discretas enteras."*
* **Diagnóstico:** `[HECHO]` La regla prohíbe taxativamente productos sin código de barras escaneable. Sin embargo, la DB y API admiten valores nulos, lo que constituye una brecha directa.

#### [CRÍTICO-02] Contradicción en `HU-INV-03`: Justificación Obligatoria en Ajustes vs. Opcional en Código
* **Severidad:** `[CRÍTICO]`
* **Evidencia en Código:**
  - `server/controllers/inventario.controller.js:313-351`: Acepta `observaciones: observaciones || null`.
* **Evidencia en Planificación:**
  - `03_EPIC-INV.md:90-91` (`HU-INV-03`, CA-2): Exige "registrar obligatoriamente una justificación".
* **Diagnóstico:** `[HECHO]` La API permite ajustes ciegos, contradiciendo el control interno antifraude y trazabilidad exigido en la historia.

#### [CRÍTICO-03] Desfase Estructural en Reporte de Vencimientos (`HU-PROD-06` vs. Endpoint)
* **Severidad:** `[CRÍTICO]`
* **Evidencia en Código:**
  - `server/controllers/producto.controller.js:383-428` (`listarProximosVencer`): Agrupa lotes por producto y retorna un único registro por producto.
* **Evidencia en Planificación:**
  - `02_EPIC-CAT.md:440` (`HU-PROD-06`, CA-1): Promete una grilla granular "detallando empresa proveedora de origen, lote asignado...".
* **Diagnóstico:** `[HECHO]` La implementación backend consolida datos, haciendo imposible identificar el lote exacto o su proveedor como exige el backlog.

#### [MAYOR-01] Regla de Negocio Omitida: Unicidad Estricta de Tupla `(Nombre + Marca)`
* **Severidad:** `[MAYOR]`
* **Evidencia en Código:**
  - `server/controllers/producto.controller.js:208-213`: Rechaza creación si coincide nombre y marca.
* **Evidencia en Planificación:**
  - No existe ninguna regla de negocio o CA que impida registrar productos homónimos con igual marca.
* **Diagnóstico:** `[HECHO]` Código aplica una regla de unicidad dura omitida totalmente en la documentación.

#### [MAYOR-02] Regla Omitida en `HU-INV-03`: Creación Obligatoria de Lote con Vencimiento
* **Severidad:** `[MAYOR]`
* **Evidencia en Código:**
  - `server/controllers/inventario.controller.js:337-362`: Todo ajuste positivo exige fecha de vencimiento (`diferencia > 0`).
* **Evidencia en Planificación:**
  - `03_EPIC-INV.md:88-92`: Omite mencionar la exigencia de lote y fecha ante un sobrante perecible.

#### [MAYOR-03] Discrepancia Semántica en Motivos de Baja y Falta de Especificación de "Robo"
* **Severidad:** `[MAYOR]`
* **Evidencia en Código:**
  - `server/controllers/inventario.controller.js:167-195`: Enum estricto y obligación de detalle en 'Robo o faltante'.
* **Evidencia en Planificación:**
  - Utiliza `'Vencimiento'` en vez de `'Vencido'` y omite la exigencia documental para robos.

---

## FASE 2: PUNTO DE VENTA Y TRANSACCIONES COMERCIALES (EPIC-VEN)

### 2.1. ALCANCE DE LA REVISIÓN
`[HECHO]` Se auditó integralmente el sub-dominio de **Ventas en Mostrador, Cajas y Comprobantes de Pago** (`EPIC-VEN`), confrontándolo con la lógica transaccional de backend (`venta.controller.js`, `caja.controller.js`, `venta.domain.service.js`) y el modelo relacional (`Venta.js`).

### 2.2. MATRIZ DE HALLAZGOS FORENSES (FASE 2)

#### [CRÍTICO-04] Fuga Tributaria por Omisión de DNI Obligatorio en Ventas Mayores a S/ 700.00
* **Severidad:** `[CRÍTICO]`
* **Evidencia en Código:**
  - `server/controllers/venta.controller.js` (líneas 47-90): La validación para `tipo_comprobante === 'Boleta'` y RUC/DNI no cruza en ningún punto el `monto_total`. Si el vendedor emite una "Boleta Simple" (`cliente_dni` nulo o vacío), la API calcula el total y guarda la venta sin importar si excede los S/ 700.00.
* **Evidencia en Planificación:**
  - `04_EPIC-VEN.md` (`HU-VEN-02`, CA-5): *"Dado que el comprador adquiere productos por un monto total superior a S/ 700.00 (> S/ 700.00), cuando el vendedor intente emitir la Boleta de Venta a «Público General» sin documento de identidad, entonces el sistema bloquea de forma terminante la emisión del comprobante y exige la captura obligatoria del DNI..."*
  - `08_Reglas_de_Negocio_y_Glosario.md` (RN-21): Regla tributaria estricta de SUNAT.
* **Diagnóstico del Desfase:** `[HECHO]` El backend ignora por completo la regla RN-21 de SUNAT. El sistema permitirá emitir comprobantes a "Público General" por montos que exponen al minimarket a multas tributarias, al carecer de una guarda dura de seguridad a nivel de controlador/servicio de dominio.

#### [CRÍTICO-05] Tolerancia Ciega a Descuadres de Caja (Validación Omitida en Cierre de Turno)
* **Severidad:** `[CRÍTICO]`
* **Evidencia en Código:**
  - `server/controllers/caja.controller.js` (`aplicarCierre`, líneas 87-107): El cálculo de cierre de caja registra la diferencia matemática entre lo esperado y lo contado, pero inyecta el campo de justificación sin validarlo: `turno.observaciones = observaciones || null;`. No hay ningún `if (diferencia !== 0 && !observaciones) throw error;`.
* **Evidencia en Planificación:**
  - `04_EPIC-VEN.md` (`HU-CAJA-04`, CA-2 Criterio formal D2): *"Tolerancia cero en descuadres; cualquier discrepancia entre el saldo esperado y el arqueado genera alerta visual obligatoria y requiere justificación formal para su posterior revisión administrativa..."*
* **Diagnóstico del Desfase:** `[HECHO]` La política D2 de tolerancia cero a descuadres queda burlada. Un cajero puede ingresar un cierre con cientos de soles de diferencia (faltante) y enviar el formulario en blanco. El sistema guardará el registro silenciosamente sin retener una justificación escrita como dicta el requerimiento antifraude.

#### [MAYOR-04] Fuga Lógica en Reingreso al Stock (Anulación con Motivos de Pérdida Incoherentes)
* **Severidad:** `[MAYOR]`
* **Evidencia en Código:**
  - `server/services/venta.domain.service.js` (`AnularVentaUseCase`, línea 223): Si un artículo devuelto no reingresa a stock, la API fuerza a que reciba un motivo de `MOTIVOS_PERDIDA_DEVOLUCION` (`['Vencido', 'Dañado', 'Robo o faltante', 'Consumo interno', 'Error de registro', 'Otro']`).
* **Evidencia en Planificación:**
  - `04_EPIC-VEN.md` (`HU-VEN-06`, CA-3): *"o si se deriva a baja por merma (seleccionando obligatoriamente el motivo de pérdida como avería, rotura o defecto), garantizando que productos deteriorados no vuelvan al anaquel comercial (RN-09)."*
* **Diagnóstico del Desfase:** `[HECHO]` Aunque el backend obliga a registrar un motivo cuando la devolución se va a merma, reutiliza el enumerador global de bajas (`MOTIVOS_PERDIDA_DEVOLUCION`). Esto produce una fuga funcional: un vendedor o administrador podría registrar una venta anulada por el cliente y mandarla a "Consumo interno" o "Robo o faltante", que son causales operativas de inventario y lógicamente absurdas para una devolución física de mostrador. La lista de motivos no está restringida a los definidos en CA-3 ("avería, rotura o defecto" / "Dañado").

---

## PROPUESTAS DE CORRECCIÓN DOCUMENTAL (FASE 2)

### Corrección para `HU-VEN-02` (Añadir a `04_EPIC-VEN.md` o Criterios Generales)
Se propone ajustar la redacción para ser más específica o añadir en la sección Técnica (Deuda) la obligación de endurecer el backend. Sin embargo, para mantener coherencia, la documentación está perfecta, es el **CÓDIGO** el que necesita el parche. Dado que estamos auditando, la planificación se asume como Ley (y concuerda con SUNAT).
*Se recomienda trasladar el hallazgo al Registro de Deuda Técnica (DOC-PLAN-10).*

### Corrección para `HU-CAJA-02` y `HU-CAJA-04`
De igual forma, la documentación funcional está correcta; es la validación del controlador en backend la que debe ser reparada.
*Se recomienda trasladar el hallazgo al Registro de Deuda Técnica (DOC-PLAN-10).*

### Corrección para `HU-VEN-06` (Ajuste en la documentación del CA-3)
```markdown
3. **Dado que** la anulación involucra múltiples productos, **cuando** el supervisor procesa la devolución, **entonces** el sistema exige determinar individualmente por cada artículo si reingresa al inventario disponible para venta o si se deriva a baja por merma, obligando a seleccionar un motivo válido del catálogo general de pérdidas (tales como «Dañado» o «Vencido») e impidiendo motivos incoherentes (como «Consumo interno»), garantizando la correcta trazabilidad contable de la merma (RN-09).
```

---

---

## FASE 3: REPORTES FINANCIEROS Y CONFIGURACIÓN (EPIC-REP)

### 3.1. ALCANCE DE LA REVISIÓN
`[HECHO]` Se auditó integralmente el sub-dominio de **Configuración Institucional** y **Reportes Analíticos** (`EPIC-REP`), confrontándolo con la lógica transaccional de backend (`configuracion.controller.js`, `reporte.controller.js`), vistas de cliente (`DashboardPage.jsx`, `ReportesPage.jsx`) y reglas de negocio (`08_Reglas_de_Negocio_y_Glosario.md`).

### 3.2. MATRIZ DE HALLAZGOS FORENSES (FASE 3)

#### [CRÍTICO-06] Falsa Validación de Identidad Tributaria en Configuración del Negocio
* **Severidad:** `[CRÍTICO]`
* **Evidencia en Código:**
  - `server/controllers/configuracion.controller.js` (líneas 35-36): El método `actualizar` valida la cadena del RUC únicamente con la expresión regular `/^20\d{9}$/`. No invoca en ningún momento el servicio `consultarRucSunat` (usado en ventas) para confirmar la existencia real ni el estado del RUC.
* **Evidencia en Planificación:**
  - `05_EPIC-REP.md` (`HU-CONF-02`, CA-2): *"cuando el valor capturado no corresponde a un RUC válido registrado ante SUNAT... el sistema rechaza la actualización, resalta el campo con error y notifica que se requiere un RUC válido en estado Activo y condición Habido."*
* **Diagnóstico:** `[HECHO]` El backend permite configurar los datos tributarios matriz del minimarket utilizando un RUC sintácticamente correcto (ej. `20999999999`) pero fiscalmente inexistente. Al omitir la validación contra la API externa, todos los comprobantes emitidos posteriormente por el sistema heredarán un identificador tributario falso o inactivo, comprometiendo legalmente la facturación electrónica.

#### [MAYOR-05] Violación de Límite Temporal en Reporte Consolidado
* **Severidad:** `[MAYOR]`
* **Evidencia en Código:**
  - `server/controllers/reporte.controller.js` (`armarWhereFecha`, líneas 23-27): Si no se reciben parámetros `fecha_inicio` ni `fecha_hasta`, la función retorna una cláusula condicional vacía `{}` que ordena al ORM recuperar toda la tabla de ventas.
* **Evidencia en Planificación:**
  - `05_EPIC-REP.md` (`HU-REP-01`, CA-3): *"Dado que el usuario no especifica fechas en los filtros... el sistema consolida automáticamente la totalidad de operaciones históricas registradas respetando el límite temporal máximo permitido (10 años)."*
* **Diagnóstico:** `[HECHO]` El sistema backend omite por completo la contención por límite máximo de 10 años. Si bien el frontend bloquea la selección de fechas menores a 10 años, una solicitud directa a la API (o un usuario malicioso) causará que el servidor recupere el íntegro histórico de la base de datos sin paginación, provocando vulnerabilidades de rendimiento (OOM - Out of Memory) o denegación de servicio.

#### [MAYOR-06] Regla de Desempate Omitida en Ranking de Productos (Top Ventas)
* **Severidad:** `[MAYOR]`
* **Evidencia en Código:**
  - `server/controllers/reporte.controller.js` (`productosTop`, línea 84): El ordenamiento SQL se realiza exclusivamente como `order: [[sequelize.literal('total_vendido'), 'DESC']]`.
* **Evidencia en Planificación:**
  - `05_EPIC-REP.md` (`HU-REP-02`, CA-3): *"Dado que existen empates en la cantidad de unidades vendidas entre dos o más artículos... aplica como criterio secundario de ordenamiento el monto total de ingresos recaudados en orden descendente."*
* **Diagnóstico:** `[HECHO]` Se ha incumplido el criterio secundario de ordenamiento. Dos productos con igual rotación física quedan ordenados arbitrariamente por el motor de base de datos, en lugar de priorizar el que generó mayores ingresos económicos a la tienda.

#### [MAYOR-07] Desfase Contable en el Costeo del Margen de Ganancia Comercial
* **Severidad:** `[MAYOR]` (Impacto directo en la analítica financiera)
* **Evidencia en Código:**
  - `server/controllers/reporte.controller.js` (`margenProductos`, líneas 247 y 252-253): La consulta de margen de rentabilidad cruza con la tabla `entradas_mercaderia` multiplicando `cl.cantidad * em.costo_unitario`. Es decir, extrae el costo unitario puntual del lote físico consumido (Método FEFO exacto).
* **Evidencia en Planificación:**
  - `05_EPIC-REP.md` (`HU-REP-07`, CA-1): *"costo valorizado total según el costo promedio ponderado de los lotes consumidos (RN-14)..."*
  - `08_Reglas_de_Negocio_y_Glosario.md` (RN-14): *"el sistema recalculará automáticamente el costo promedio ponderado del producto... y la base de costeo para los reportes de margen de ganancia."*
* **Diagnóstico:** `[HECHO]` Aunque utilizar el costo exacto del lote (FEFO) es logísticamente más preciso a nivel de kardex físico, el requerimiento de negocio y el método contable dictado por las Reglas (RN-14) exige utilizar expresamente el "costo promedio ponderado" (Moving Average Cost) para homologar los reportes comerciales de margen bruto. El desarrollador aplicó un modelo distinto al planificado por el Product Owner.

---

## PROPUESTAS DE CORRECCIÓN TÉCNICA (FASE 3)

1. **Sobre HU-CONF-02 (`configuracion.controller.js`):** Interceptar el método de guardado y forzar la invocación de `consultarRucSunat(ruc)` de manera síncrona. Si el retorno no indica `ACTIVO` / `HABIDO`, abortar el guardado.
2. **Sobre HU-REP-01 (`reporte.controller.js`):** Modificar `armarWhereFecha` para que, en caso de no recibir fechas, inyecte de oficio un límite inferior equivalente a `new Date(now.getFullYear() - 10)`.
3. **Sobre HU-REP-02 (`reporte.controller.js`):** Modificar la cláusula a `order: [[sequelize.literal('total_vendido'), 'DESC'], [sequelize.literal('ingreso_total'), 'DESC']]`.

---

## CHECKPOINT DE CONTROL FINAL

`[PREGUNTA]` He completado las fases 1, 2 y 3 cruzando todas las épicas de producto contra el código real y consolidándolas en este único reporte. ¿Apruebas el documento actual? Si deseas que continúe con una revisión adicional sobre alguna otra sección (como Control Documental, Usuarios o Roles), quedo atento a tus instrucciones.
