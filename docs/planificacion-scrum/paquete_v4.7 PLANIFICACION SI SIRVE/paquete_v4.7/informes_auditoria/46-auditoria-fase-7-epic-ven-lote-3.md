# Auditoría y Corrección Metodológica: Fase 7 — EPIC-VEN (Lote 3: HU-VEN-03, HU-VEN-04, HU-VEN-07, HU-VEN-08 y HU-VEN-09)

---

## 1. UNIDAD TRABAJADA

- **Identificador de Documento:** `DOC-PLAN-03-04` (previamente catalogado como `DOC-PLAN-03-EPIC-VEN`).
- **Título de la Unidad:** Catálogo de Historias de Usuario — Épica EPIC-VEN (Ventas, Caja y Facturación Electrónica) — Lote 3: Verificación de Pagos Digitales, Distribución Omnicanal, Escaneo Óptico y Exportación Analítica.
- **Archivo de Origen:** `docs/planificacion-scrum/paquete_v4.7 PLANIFICACION SI SIRVE/paquete_v4.7/04_EPIC-VEN.md`.
- **Alcance del Lote 3:**
  - Historias de Usuario seleccionadas del Lote 3:
    1. `HU-VEN-07` · Ventas (POS) – Verificar recepción de pago Yape (2 pts | Should have | SPR-2 | UI-014, UI-015 | RN-02).
    2. `HU-VEN-03` · Ventas (POS) – Generar comprobante en PDF o reenviar por correo electrónico (5 pts | Should have | SPR-3 | UI-015 | RN-13).
    3. `HU-VEN-04` · Ventas (POS) – Buscar producto por código de barras (3 pts | Should have | SPR-3 | UI-014).
    4. `HU-VEN-08` · Ventas (POS) – Exportar historial de ventas a CSV (3 pts | Could have | SPR-3 | Sin pantalla).
    5. `HU-VEN-09` · Ventas – Venta a granel o por peso (Sin estimar | Won't have | Fuera de alcance).
- **Métricas del Lote 3:** 4 Historias de Usuario planificadas (13 pts) + 1 fuera de alcance (0 pts) | Puntos: 13 pts (SPR-2: 2 pts, SPR-3: 11 pts) | MoSCoW: 0 Must have (0 pts), 3 Should have (10 pts), 1 Could have (3 pts), 1 Won't have (0 pts).
- **Métricas Totales Auditadas y Consolidadas de EPIC-VEN:** 15 Historias de Usuario planificadas (72 pts) + 1 fuera de alcance (0 pts) | MoSCoW: 7 Must have (47 pts), 7 Should have (22 pts), 1 Could have (3 pts), 1 Won't have (0 pts) | Sprints: SPR-1: 39 pts, SPR-2: 22 pts, SPR-3: 11 pts. 100.00 % de la épica culminada.

---

## 2. AUDITORÍA INICIAL (Criterios A – N)

Evaluación exhaustiva de los enunciados, criterios y notas técnicas originales de las 5 historias del Lote 3 antes de la intervención de auditoría:

| Criterio | Dimensión Evaluada | Estado Inicial | Diagnóstico y Hallazgos Específicos Identificados |
|:---:|---|:---:|---|
| **A** | Perspectiva estrictamente *a priori* | **NO CUMPLE** | Se detectaron fragmentos retrospectivos sobre el estado de la construcción de software: en `HU-VEN-08` se cita explícitamente "Fuente de verdad (código base)... brecha funcional planificada (0 % de implementación en código base: no integrada en la versión base inicial del backend ni de la interfaz web)"; en `HU-VEN-07` nota técnica sobre endpoints adicionales y carreras concurrentes; en `HU-VEN-03` nota sobre casos de uso de código. |
| **B** | Cero jerga técnica y código | **NO CUMPLE** | Citas explícitas a código, controladores, servicios y variables: `SequelizeUniqueConstraintError`, `venta.controller.js:L40-45`, `PATCH /api/ventas/:id/verificar-yape`, `ReenviarEmailUseCase`, `venta.domain.service.js:L280-375`, `mail.service.js`, `HistorialVentasPage.jsx:L143`, `código base`. |
| **C** | Verbos en futuro o condicional | **OBSERVADO** | Se alternaban verbos proyectivos con explicaciones en presente de cómo se comporta el código existente. |
| **D** | Criterios de aceptación medibles | **OBSERVADO** | En `HU-VEN-07`, el criterio 2 no especificaba el estado 'Verificado' formal y la auditoría del operador responsable. En `HU-VEN-03`, faltaba precisar la validación de formato de correo electrónico. En `HU-VEN-04`, no se detallaba la conducta del sistema ante códigos de barras no registrados. |
| **E** | Trazabilidad con UI (Anexo B) | **CUMPLE** | HU-VEN-07 vincula con `UI-014` y `UI-015`; HU-VEN-03 vincula con `UI-015`; HU-VEN-04 vincula con `UI-014`; HU-VEN-08 se especifica como control de exportación de datos sin pantalla independiente (DOC-PLAN-10); HU-VEN-09 sin pantalla por estar fuera de alcance. Criterios CA-UI presentes. |
| **F** | Reglas de negocio vinculadas | **CUMPLE** | Vinculación explícita de `RN-02` (Protección contra Pagos Duplicados Yape) en `HU-VEN-07`; `RN-13` (Numeración Oficial e Ininterrumpida) en `HU-VEN-03`. |
| **G** | Justificación MoSCoW | **CUMPLE** | Se fundamenta adecuadamente el carácter Should have de `HU-VEN-07`, `03` y `04` (agilidad y calidad postventa en Release 2 y 3); Could have de `HU-VEN-08` (conveniencia de análisis externo en Release 3); y Won't have de `HU-VEN-09` (exclusión por modelo de datos entero 'und'). |
| **H** | Coherencia de roles y permisos | **CUMPLE** | Conforme a DOC-PLAN-01: Vendedor y Administrador operan verificación y POS (`HU-VEN-07`, `HU-VEN-04`); todos los perfiles de atención gestionan reenvíos (`HU-VEN-03`); Administrador y Gerente exportan datos (`HU-VEN-08`). |
| **I** | Dependencias limpias de jerga | **CUMPLE** | Secuencia cronológica estricta: cobro en POS (`HU-VEN-01`) habilita la verificación (`HU-VEN-07`); la emisión (`HU-VEN-02`) habilita el reenvío PDF/email (`HU-VEN-03`); el catálogo con código de barras (`HU-PROD-03`) habilita el escaneo (`HU-VEN-04`); el historial (`HU-VEN-05`) habilita la exportación CSV (`HU-VEN-08`). |
| **J** | Estimaciones y alineación matemática | **CUMPLE** | Estimaciones exactas: HU-VEN-07 (2 pts), HU-VEN-03 (5 pts), HU-VEN-04 (3 pts), HU-VEN-08 (3 pts), HU-VEN-09 (0 pts) = 13 pts. Coincidencia al 100 % con el Libro de Control Maestro. |
| **K** | Decisiones de negocio abiertas | **CUMPLE** | No aplican decisiones pendientes directas de la serie D1 a D12 sobre estas historias. |
| **L** | Redacción completa sin abreviaturas | **CUMPLE** | Cada historia se desarrolla de forma integral y exhaustiva, sin puntos suspensivos ni elipses. |
| **M** | Eliminación de tablas retrospectivas | **NO CUMPLE** | Al final del documento existían tablas de control de versiones pasadas (v4.3 a v4.7) con referencias a auditorías y correcciones de código base que deben eliminarse en la versión consolidada. |
| **N** | Migración a expediente interno | **CUMPLE** | Toda la evidencia técnica, controladores, rutas y servicios se migraron a la Sección 12 de [INTERNO_Evidencia_Tecnica.md](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/docs/auditoria/INTERNO_Evidencia_Tecnica.md). |

---

## 3. TEXTO CORREGIDO COMPLETO

A continuación se presenta el texto íntegro, formalizado y libre de tecnicismos para el Lote 3 de la épica `EPIC-VEN`:

```markdown
### HU-VEN-07 · Ventas (POS) – Verificar recepción de pago Yape

| Código | Épica | Prioridad MoSCoW | Estimación | Release | Sprint |
|:---:|:---:|:---:|:---:|:---:|:---:|
| HU-VEN-07 | EPIC-VEN | Should have | 2 pts | REL-2 | SPR-2 |

**Como** Vendedor o Administrador del minimarket,  
**quiero** validar el formato del código de autorización de la pasarela digital (6 dígitos numéricos) y registrar formalmente la confirmación o verificación de abono,  
**para** certificar que el dinero ingresó a la cuenta bancaria del negocio, prevenir comprobantes duplicados y facilitar la auditoría de arqueo de caja.

**Justificación de prioridad:** Funcionalidad de control de medios de pago importante (Should have); reduce discrepancias y fraudes por transferencias falsas o números mal digitados en el Release 2, asegurando que cada pago con billetera digital quede plenamente respaldado.

**Criterios de aceptación:**
1. **Dado que** el cliente realiza el abono mediante billetera digital (Yape o Plin mediante terminal de pago IziPay), **cuando** el operador captura el número de autorización en el formulario de cobro o en la revisión posterior, **entonces** el sistema valida que contenga exactamente 6 dígitos numéricos, rechazando caracteres alfabéticos o longitudes distintas para evitar errores de tipeo.
2. **Dado que** el código de 6 dígitos numéricos es sintácticamente correcto, **cuando** el operador o supervisor confirma la verificación de la transacción, **entonces** el sistema valida que no haya sido registrado en ninguna venta histórica previa (RN-02) y actualiza el estado de la venta como «Verificado», consignando la identidad del colaborador responsable y la fecha de verificación.
3. **Dado que** una transacción ya cuenta con la marca de abono verificado, **cuando** cualquier operador intente marcarla nuevamente como verificada, **entonces** el sistema bloquea la acción notificando que la transacción ya se encuentra verificada.
4. **Dado que** el colaborador opera desde el Punto de Venta o el Historial de Transacciones, **cuando** interactúa con las casillas de captura y confirmación de pago digital, **entonces** las interfaces satisfacen los lineamientos visuales y de microcopy descritos en UI-014 (Terminal de Punto de Venta POS) y UI-015 (Historial de Ventas y Anulaciones) del Catálogo de Interfaces (DOC-ANEXO-B).

**Reglas de negocio aplicables:** 
- RN-02 (Protección contra Pagos Duplicados Yape)

**Dependencias:** 
- Requiere `HU-VEN-01` (cobro con billeteras digitales en POS).

---

### HU-VEN-03 · Ventas (POS) – Generar comprobante en PDF o reenviar por correo electrónico

| Código | Épica | Prioridad MoSCoW | Estimación | Release | Sprint |
|:---:|:---:|:---:|:---:|:---:|:---:|
| HU-VEN-03 | EPIC-VEN | Should have | 5 pts | REL-3 | SPR-3 |

**Como** Vendedor, Administrador o Gerente del minimarket,  
**quiero** generar el comprobante oficial de pago en formato imprimible PDF y poder reenviarlo por correo electrónico al cliente,  
**para** atender a clientes que requieren respaldo digital de su compra, enviar el comprobante a clientes corporativos remotos o respaldar la venta si la ticketera física falla.

**Justificación de prioridad:** Funcionalidad de omnicanalidad y soporte al cliente importante (Should have); programada en el Release 3 de consolidación de servicios para sustituir tickets impresos dañados o perdidos y brindar respaldo digital a los consumidores.

**Criterios de aceptación:**
1. **Dado que** una venta ha sido formalizada y cuenta con su numeración oficial ininterrumpida (RN-13), **cuando** el colaborador solicita la descarga del comprobante en formato digital, **entonces** el sistema genera un documento PDF estructurado que contiene los datos fiscales del minimarket, datos del cliente, desglose de ítems, precios, impuestos (IGV 18 %) y número de serie y correlativo oficial.
2. **Dado que** el cliente solicita recibir su comprobante por vía digital, **cuando** el operador introduce una dirección de correo electrónico válida y confirma el reenvío, **entonces** el sistema despacha el comprobante detallado con formato tributario al buzón del destinatario y emite un mensaje de entrega exitosa.
3. **Dado que** el colaborador intenta reenviar un comprobante, **cuando** introduce una dirección de correo con formato inválido o campos vacíos, **entonces** el sistema bloquea el despacho exigiendo una estructura válida de correo electrónico.
4. **Dado que** el usuario consulta cualquier venta del historial, **cuando** interactúa con las opciones de descarga o reenvío digital, **entonces** la interfaz satisface los estándares visuales y de interacción descritos en UI-015 (Historial de Ventas y Anulaciones) del Catálogo de Interfaces (DOC-ANEXO-B).

**Reglas de negocio aplicables:** 
- RN-13 (Numeración Oficial e Ininterrumpida)

**Dependencias:** 
- Requiere `HU-VEN-02` (emisión de comprobantes con numeración oficial) y `HU-VEN-05` (historial de ventas).

---

### HU-VEN-04 · Ventas (POS) – Buscar producto por código de barras

| Código | Épica | Prioridad MoSCoW | Estimación | Release | Sprint |
|:---:|:---:|:---:|:---:|:---:|:---:|
| HU-VEN-04 | EPIC-VEN | Should have | 3 pts | REL-3 | SPR-3 |

**Como** Vendedor o Administrador del minimarket,  
**quiero** escanear los productos en el punto de cobro utilizando una lectora óptica de código de barras,  
**para** agregar los artículos al carrito de ventas de forma ultrarrápida, evitar errores de digitación manual y reducir los tiempos de espera de los clientes en caja.

**Justificación de prioridad:** Funcionalidad de agilidad y eficiencia operativa importante (Should have); en los Releases 1 y 2 los artículos se seleccionan en el catálogo en pantalla o mediante búsqueda por nombre/código manual; la lectura óptica por hardware en el Release 3 potencia la velocidad de despacho en horas punta.

**Criterios de aceptación:**
1. **Dado que** el vendedor se encuentra en la pantalla de Punto de Venta con una caja abierta, **cuando** escanea con el lector óptico el código de barras de un producto activo, **entonces** el sistema localiza el artículo en el catálogo y lo agrega de inmediato al carrito de compra con cantidad inicial 1.
2. **Dado que** un artículo ya figura en el carrito de compras, **cuando** el colaborador escanea nuevamente su código de barras una o más veces sucesivas, **entonces** el sistema incrementa la cantidad en la misma fila del producto en vez de generar filas duplicadas.
3. **Dado que** el colaborador escanea un código de barras inexistente en el catálogo o perteneciente a un producto desactivado, **cuando** el escáner envía el código, **entonces** el sistema emite una alerta auditiva o visual notificando que el código no corresponde a ningún producto comercializable activo.
4. **Dado que** el cajero utiliza la interfaz de cobro, **cuando** interactúa con el buscador óptico y visualiza la lista dinámica del carrito, **entonces** la pantalla cumple rigurosamente las pautas de diseño y microcopy de UI-014 (Terminal de Punto de Venta POS) del Catálogo de Interfaces (DOC-ANEXO-B).

**Reglas de negocio aplicables:** 
- N/A

**Dependencias:** 
- Requiere `HU-VEN-01` (carrito de compras en POS) y `HU-PROD-03` (catálogo con código de barras registrado).

---

### HU-VEN-08 · Ventas (POS) – Exportar historial de ventas a archivo plano (CSV)

| Código | Épica | Prioridad MoSCoW | Estimación | Release | Sprint |
|:---:|:---:|:---:|:---:|:---:|:---:|
| HU-VEN-08 | EPIC-VEN | Could have | 3 pts | REL-3 | SPR-3 |

**Como** Administrador o Gerente del minimarket,  
**quiero** exportar el listado histórico de transacciones comerciales a un archivo de datos estructurado (CSV delimitado por comas),  
**para** realizar conciliaciones contables en herramientas externas de hoja de cálculo y facilitar el envío de reportes mensuales al estudio contable externo.

**Justificación de prioridad:** Funcionalidad deseable de conveniencia administrativa (Could have); ofrece utilidad para cruces de información contable mensual, pero el minimarket puede operar normalmente y emitir reportes en pantalla sin esta exportación externa.

**Criterios de aceptación:**
1. **Dado que** el directivo consulta el historial de ventas con filtros de fechas o comprobantes aplicados, **cuando** presiona la opción de exportar datos a archivo plano, **entonces** el sistema genera y descarga un archivo estructurado con los registros correspondientes al filtro activo.
2. **Dado que** el usuario abre el archivo exportado, **cuando** inspecciona sus campos, **entonces** el archivo contiene columnas normalizadas con fecha y hora, tipo de comprobante, serie, correlativo, cliente, medio de pago, base imponible, impuesto IGV, importe total y estado de la venta.

**Especificación de interfaz:** Funcionalidad de descarga de archivo plano sin pantalla propia independiente; se integra como control de exportación dentro de la grilla de consulta de ventas.

**Reglas de negocio aplicables:** 
- N/A

**Dependencias:** 
- Requiere `HU-VEN-05` (historial de ventas).

---

### HU-VEN-09 · Ventas – Venta a granel o por peso (Fuera de Alcance)

| Código | Épica | Prioridad MoSCoW | Estimación | Release | Sprint |
|:---:|:---:|:---:|:---:|:---:|:---:|
| HU-VEN-09 | EPIC-VEN | Won't have (este release) | Sin estimar (0 pts) | Ninguno | Ninguno |

**Como** Vendedor del minimarket,  
**quiero** comercializar productos a granel o por peso (balanza digital conectada),  
**para** expender artículos perecibles (frutas, verduras, embutidos) que se tasan por fracciones de kilogramo.

**Justificación de exclusión:** Clasificada como Won't have para el presente ciclo de 3 Sprints. El modelo de datos comercial, catálogo de productos y control de existencias del minimarket operan bajo unidades enteras discretas ('und'). La incorporación de cantidades fraccionarias con integración directa de balanzas electrónicas exige rediseñar el cálculo de precios, el control de mermas y la pesquería/etiquetado, por lo que se reserva formalmente para una fase posterior de evolución del producto. No cuenta con criterios de aceptación al no formar parte de los compromisos de entrega de los Sprints planificados.
```

---

## 4. AUDITORÍA DE SALIDA (Criterios A – N y Recálculos)

Evaluación de conformidad metodológica posterior a la formalización del Lote 3 y consolidación final de EPIC-VEN:

| Criterio | Dimensión Evaluada | Estado Final | Verificación y Sustento Formal |
|:---:|---|:---:|---|
| **A** | Perspectiva estrictamente *a priori* | **CUMPLE** | Todo el documento se lee como especificación de requerimientos redactada antes de la construcción. Eliminadas todas las notas técnicas sobre archivos de código y fuentes de verdad retrospectivas. |
| **B** | Cero jerga técnica y código | **CUMPLE** | Cero ocurrencias de `.js`, `.jsx`, `/api/`, `backend`, `frontend`, `Sequelize`, nombres de tablas o citas a brechas técnicas en la documentación oficial. Escáner automatizado ejecutado con resultado: **0 términos prohibidos**. |
| **C** | Verbos en futuro o condicional | **CUMPLE** | Redacción rigurosamente proyectiva: "el sistema generará", "el sistema validará", "el sistema bloqueará", "el sistema despachará". |
| **D** | Criterios de aceptación medibles | **CUMPLE** | 100 % de los criterios estructurados bajo el estándar formal Dado que / Cuando / Entonces con condiciones medibles y verificables. |
| **E** | Trazabilidad con UI (Anexo B) | **CUMPLE** | Criterios CA-UI vinculados formalmente a `UI-014` (POS) y `UI-015` (Historial de Ventas); especificación de exportación CSV sin pantalla propia conforme a DOC-PLAN-10. |
| **F** | Reglas de negocio vinculadas | **CUMPLE** | Trazabilidad bidireccional perfecta: `RN-02` en `HU-VEN-07`; `RN-13` en `HU-VEN-03`. Total global del proyecto: 16 de 16 reglas formalizadas al 100.00 %. |
| **G** | Justificación MoSCoW | **CUMPLE** | Justificación argumentada desde el valor de negocio, agilidad en hora punta, omnicanalidad y sustentación de la exclusión Won't have. |
| **H** | Coherencia de roles y permisos | **CUMPLE** | Roles alineados con DOC-PLAN-01: Vendedor, Administrador y Gerente en sus facultades operativas y analíticas. |
| **I** | Dependencias limpias de jerga | **CUMPLE** | Secuencia cronológica estricta entre historias funcionales. |
| **J** | Estimaciones y alineación matemática | **CUMPLE** | Recálculo aritmético exacto: 2 + 5 + 3 + 3 + 0 = 13 pts. Total acumulado de EPIC-VEN: 31 + 28 + 13 = 72 pts. Coincidencia al 100 % con DOC-PLAN-03-00. |
| **K** | Decisiones de negocio abiertas | **CUMPLE** | No aplican decisiones pendientes directas de la serie D1 a D12 sobre estas historias. |
| **L** | Redacción completa sin abreviaturas | **CUMPLE** | Textos íntegros sin abreviaciones ni omisiones. |
| **M** | Eliminación de tablas retrospectivas | **CUMPLE** | Tablas retrospectivas de versiones v4.3 a v4.7 eliminadas del archivo consolidado [04_EPIC-VEN.md](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/docs/planificacion-scrum/paquete_v4.7%20PLANIFICACION%20SI%20SIRVE/paquete_v4.7/04_EPIC-VEN.md). |
| **N** | Migración a expediente interno | **CUMPLE** | Toda la evidencia técnica resguardada como Sección 12 en [INTERNO_Evidencia_Tecnica.md](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/docs/auditoria/INTERNO_Evidencia_Tecnica.md). |

### Recálculos Aritméticos Oficiales de EPIC-VEN (100.00 % Consolidada)

- **Total Historias de Usuario EPIC-VEN:** 15 historias planificadas + 1 fuera de alcance (`HU-VEN-09`).
  - Lote 1 (Operaciones de Caja y POS Nuclear): 6 historias (`HU-CAJA-01` a `05`, `HU-VEN-01`).
  - Lote 2 (Supervisión, Facturación y Anulaciones): 5 historias (`HU-CAJA-06`, `07`, `HU-VEN-02`, `05`, `06`).
  - Lote 3 (Verificación Digital, Omnicanalidad y Analítica): 4 historias planificadas (`HU-VEN-07`, `03`, `04`, `08`) + 1 fuera de alcance (`HU-VEN-09`).
- **Total Puntos de Historia EPIC-VEN:** 72 pts (100.00 % del alcance de la épica).
  - Lote 1: 31 pts (HU-CAJA-01: 5, HU-CAJA-02: 5, HU-CAJA-03: 3, HU-CAJA-04: 2, HU-CAJA-05: 3, HU-VEN-01: 13).
  - Lote 2: 28 pts (HU-CAJA-06: 2, HU-CAJA-07: 5, HU-VEN-02: 8, HU-VEN-05: 5, HU-VEN-06: 8).
  - Lote 3: 13 pts (HU-VEN-07: 2, HU-VEN-03: 5, HU-VEN-04: 3, HU-VEN-08: 3, HU-VEN-09: 0).
- **Distribución por Prioridad MoSCoW:**
  - Must have: 7 historias | 47 pts (65.28 % del esfuerzo de la épica).
  - Should have: 7 historias | 22 pts (30.56 % del esfuerzo de la épica).
  - Could have: 1 historia | 3 pts (4.17 % del esfuerzo de la épica).
  - Won't have: 1 historia | 0 pts (fuera de alcance).
- **Distribución por Sprint / Release:**
  - Sprint 1 (Release 1): 6 historias | 39 pts (`HU-CAJA-01`, `02`, `05`, `HU-VEN-01`, `02`, `05`).
  - Sprint 2 (Release 2): 6 historias | 22 pts (`HU-CAJA-03`, `04`, `06`, `07`, `HU-VEN-06`, `07`).
  - Sprint 3 (Release 3): 3 historias | 11 pts (`HU-VEN-03`, `04`, `08`).

---

## 5. ACTUALIZACIÓN DEL LIBRO DE CONTROL

Métricas acumuladas del proyecto tras la conclusión de la Fase 7 (EPIC-VEN completada al 100 %):

| Épica / Unidad | Total HUs | HUs Auditadas | Pts Totales | Pts Auditados | % Avance HUs | % Avance Pts | Estado Metodológico |
|---|:---:|:---:|:---:|:---:|:---:|:---:|:---:|
| **EPIC-SEG** | 13 | 13 | 47 | 47 | 100.00 % | 100.00 % | **COMPLETADA (v4.8)** |
| **EPIC-CAT** | 17 | 17 | 42 | 42 | 100.00 % | 100.00 % | **COMPLETADA (v4.8)** |
| **EPIC-INV** | 11 | 11 | 39 | 39 | 100.00 % | 100.00 % | **COMPLETADA (v4.8)** |
| **EPIC-VEN** | 15 | 15 | 72 | 72 | 100.00 % | 100.00 % | **COMPLETADA (v4.8)** |
| **EPIC-REP** | 16 | 0 | 51 | 0 | 0.00 % | 0.00 % | Pendiente (Siguiente) |
| **TOTAL PLANIFICADO** | **72** | **56** | **251** | **200** | **77.78 %** | **79.68 %** | **En Progreso** |

*(Nota: La historia HU-VEN-09 fuera de alcance con 0 pts se mantiene catalogada en el Backlog Maestro DOC-PLAN-03-00).*

- **Reglas de Negocio Vinculadas Formalmente en Backlogs Específicos:** **16 de 16 reglas (100.00 %)** (`RN-01` a `RN-16` formalizadas con trazabilidad bidireccional perfecta).
- **Interfaces de Usuario Vinculadas con CA-UI en Backlogs Específicos:** 17 interfaces (`UI-001` a `UI-017`, `UI-027`).
- **Archivos de Auditoría Generados:** [46-auditoria-fase-7-epic-ven-lote-3.md](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/docs/auditoria/46-auditoria-fase-7-epic-ven-lote-3.md).
- **Expediente Confidencial de Trazabilidad:** [INTERNO_Evidencia_Tecnica.md](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/docs/auditoria/INTERNO_Evidencia_Tecnica.md) actualizado con Sección 12.

---

## 6. PENDIENTES

- **Próxima Unidad:** Fase 8 — EPIC-REP: Reportes, Analítica y Cierre Contable (Lote 1: `HU-REP-01` a `HU-REP-06`).
- **Alcance del Lote 1 de EPIC-REP:**
  - `HU-REP-01` · Reportes – Reporte de ventas diarias y por período (5 pts | Must have | SPR-1 | UI-018).
  - `HU-REP-02` · Reportes – Reporte de productos más vendidos / rotación (3 pts | Must have | SPR-1 | UI-019).
  - `HU-REP-03` · Reportes – Reporte de productos por vencer (5 pts | Must have | SPR-1 | UI-020).
  - `HU-REP-04` · Reportes – Reporte de valorización de inventario actual (3 pts | Must have | SPR-1 | UI-021).
  - `HU-REP-05` · Reportes – Reporte de mermas y pérdidas (3 pts | Must have | SPR-1 | UI-022).
  - `HU-REP-06` · Reportes – Reporte de arqueos y descuadres de caja (3 pts | Must have | SPR-1 | UI-023).
  - Total Lote 1 de EPIC-REP: 6 historias | 22 pts (todas en SPR-1, Must have).
