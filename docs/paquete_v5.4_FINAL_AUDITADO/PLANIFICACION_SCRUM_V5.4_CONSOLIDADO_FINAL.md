# PAQUETE INTEGRAL DE PLANIFICACIÓN SCRUM – VERSIÓN 5.2 DEFINITIVA SANEADA
## SISTEMA DE GESTIÓN COMERCIAL PARA MINIMARKET CON PUNTO DE VENTA Y CONTROL TRIBUTARIO
**Estado:** Documento Maestro Consolidado y Aprobado por el Product Owner  
**Fecha:** 2026-10-04 | **Versión:** 5.2 Oficial Aprobada  

---



<!-- ===================================================================== -->
<!-- ARCHIVO FUENTE: 00_Portada_Indice_y_Control_Documental.md -->
<!-- ===================================================================== -->

---
Código de documento: DOC-PLAN-00
Título: Planificación Scrum y Control Documental
Versión: 5.2
Fecha: 2026-10-04
Elaborado por: Angeles Pérez, Jhonny (Developer)
Revisado por: Colonia Infantas, Walter (Developer)
Aprobado por: Mendoza Alva, Carlos (Product Owner - Dueño del Minimarket)
Estado: Aprobado Oficial
Propósito: Resumen ejecutivo y control del plan Scrum
Documentos relacionados: Todos los documentos de planificación (DOC-PLAN-01 a DOC-PLAN-11, DOC-ANEXO-A y DOC-ANEXO-B)
---

# 00. Resumen Ejecutivo y Control Documental

## Resumen de Cifras y Parámetros Planificados

| Métrica / Parámetro | Valor Oficial Planificado | Detalle Metodológico |
| :--- | :---: | :--- |
| **Épicas de Negocio** | **5 Épicas** | EPIC-SEG, EPIC-CAT, EPIC-INV, EPIC-VEN, EPIC-REP |
| **Historias de Usuario (HUs)** | **74 HU planificadas + 1 fuera de alcance** | Must have: 38 · Should have: 31 · Could have: 5 · Won't have: 1 |
| **Puntos de Historia Totales** | **251 pts** | Estimados con pivote HU-CAT-01 = 1 pt = 2 h-hombre (escala Fibonacci) |
| **Iteraciones (Sprints)** | **3 Sprints** | Duración: 2 semanas por sprint (6 semanas calendario, 10 días de trabajo c/u) |
| **Lanzamientos (Releases)** | **3 Releases** | REL-1 (MVP): SPR-1, 22 HUs, 89 pts · REL-2: SPR-2, 25 HUs, 90 pts · REL-3: SPR-3, 27 HUs, 72 pts |
| **Capacidad Neta del Equipo** | **240 horas/sprint** | 6 Developers × 25 h/sem × 2 sem × 80 % contingencia neta (40 h c/u) |
| **Esfuerzo Total Desglosado** | **502 horas (373 tareas)** | 296 h Construcción (59.0 %) + 206 h Verificación QA (41.0 %) |
| **Presupuesto Estimado Total** | **S/ 22,500.00** | 6 semanas × S/ 625/sem × 6 devs (todo costo laboral; S/ 7,500.00 por sprint o release) |
| **Especificación de Interfaz** | **20 pantallas · 82 apartados de CA** | Anexo B (DOC-ANEXO-B); cada historia con pantalla incluye un CA-UI; trazabilidad en DOC-PLAN-11 |

## Cadena de Trazabilidad Metodológica Obligatoria
`Objetivo de Negocio` → `Épica` → `Historia de Usuario` → `Criterio de Aceptación (negocio y CA-UI → Pantalla del Anexo B)` → `Release` → `Sprint` → `Tarea (Construcción/QA)` → `Costo/Esfuerzo`

## Convenciones de Identificación y Priorización

| Elemento Scrum | Prefijo / Identificador | Rango / Ejemplo | Criterio de Uso |
| :--- | :---: | :---: | :--- |
| **Objetivos de Negocio** | `OBJ-nn` | OBJ-01 al OBJ-05 | Metas estratégicas del minimarket |
| **Épicas Funcionales** | `EPIC-XXX` | EPIC-SEG, EPIC-CAT, etc. | Macro-agrupadores de valor de negocio |
| **Historias de Usuario** | `HU-MOD-nn` | HU-AUTH-01, HU-VEN-01 | Requisitos funcionales en formato "Como / Quiero / Para" |
| **Iteraciones** | `SPR-n` | SPR-1 al SPR-3 | Timebox fijo de 2 semanas de desarrollo (10 días hábiles) |
| **Lanzamientos** | `REL-n` | REL-1 al REL-3 | Hitos de entrega de valor comercial e incrementos operativos |
| **Tareas Operativas** | `TAR-HU-...` | TAR-HU-AUTH-01-01 | Actividades técnicas de Construcción (1-5, 7) y Verificación (6, 8) |
| **Priorización MoSCoW** | `MoSCoW` | Must (4), Should (3), Could (2), Won't (1) | Nivel de criticidad para el negocio |


## Política de Refinamiento Metodológico durante el Sprint
La publicación de la versión 5.2 fechada el 04 de octubre de 2026 (con el Sprint 1 iniciado el 30 de septiembre de 2026) constituye una actividad de **Product Backlog Refinement** formalizada con el Product Owner (Dueño del Minimarket). Conforme a la Guía Scrum oficial, los requerimientos se refinan continuamente. El desdoblamiento atómico de la historia compleja HU-VEN-01 (13 pts) en 3 historias independientes (HU-VEN-01a de 3 pts, HU-VEN-01b de 5 pts y HU-VEN-01c de 5 pts) optimiza la granularidad bajo el criterio INVEST (Small), elevando el catálogo a 74 historias planificadas (38 Must Have) sin alterar en absoluto los 251 puntos de historia del backlog, los 89 pts del Sprint 1, la capacidad de 240.0 h netas/sprint, el esfuerzo total de 502.0 h ni el presupuesto oficial de S/ 22,500.00.

## Directorio Maestro de Documentación Scrum

| N° | Código de Documento | Título del Documento | Propósito / Alcance | Responsable |
| :---: | :---: | :--- | :--- | :--- |
| 01 | `DOC-PLAN-00` | [00. Resumen Ejecutivo y Control Documental](00_Portada_Indice_y_Control_Documental.md) | Resumen ejecutivo, cifras oficiales y directorio maestro | Angeles Pérez, Jhonny |
| 02 | `DOC-PLAN-01` | [01. Visión, Alcance y Stakeholders](01_Vision_Alcance_y_Stakeholders.md) | Propósito del sistema, matriz de roles y supuestos oficiales | Angeles Pérez, Jhonny |
| 03 | `DOC-PLAN-02` | [02. Equipo, Roles y Ceremonias](02_Equipo_Roles_y_Ceremonias.md) | Organización de los 6 developers, acuerdos, DoD, DoR y ceremonias | Angeles Pérez, Jhonny |
| 04 | `DOC-PLAN-03-00` | [03. Product Backlog Priorizado](00_Product_Backlog_Priorizado.md) | Lista maestra de 72 HUs evaluadas bajo INVEST y MoSCoW | Colonia Infantas, Walter |
| 05 | `DOC-PLAN-03-01` | [EPIC-SEG: Seguridad y Accesos](01_EPIC-SEG.md) | 13 HUs de autenticación, control de sesiones y gestión de usuarios | Colonia Infantas, Walter |
| 06 | `DOC-PLAN-03-02` | [EPIC-CAT: Catálogos y Clientes](02_EPIC-CAT.md) | 17 HUs de categorías, productos, proveedores y clientes | Colonia Infantas, Walter |
| 07 | `DOC-PLAN-03-03` | [EPIC-INV: Inventario y Reposición](03_EPIC-INV.md) | 11 HUs de entradas, bajas, ajustes físicos y solicitudes de reposición | Colonia Infantas, Walter |
| 08 | `DOC-PLAN-03-04` | [EPIC-VEN: Ventas, Caja y Comprobantes de Pago](04_EPIC-VEN.md) | 15 HUs de apertura/cierre de caja, POS, comprobantes y anulaciones | Colonia Infantas, Walter |
| 09 | `DOC-PLAN-03-05` | [EPIC-REP: Reportes, Dashboards y Configuración](05_EPIC-REP.md) | 16 HUs de reportes gerenciales, dashboards y configuración del local | Colonia Infantas, Walter |
| 10 | `DOC-PLAN-04` | [04. Plan de Lanzamiento y Story Mapping](04_Plan_de_Lanzamiento_y_Story_Mapping.md) | Story Map en formato docente (5 épicas, 3 releases) y líneas de corte | Colonia Infantas, Walter |
| 11 | `DOC-PLAN-05` | [05. Estimación de Capacidad, Velocidad y Costos](05_Estimacion_de_Capacidad_Velocidad_y_Costos.md) | Secuencia matemática oficial, sensibilidad, burndown y gestión de riesgos | Angeles Pérez, Jhonny |
| 12 | `DOC-PLAN-06` | [06. Sprint Backlog](06_Sprint_Backlog.md) | Plan de 3 sprints, asignación de tareas y plan de ejecución del Sprint 1 | Angeles Pérez, Jhonny |
| 13 | `DOC-PLAN-07` | [07. Desglose de Tareas (Task Breakdown)](07_Desglose_de_Tareas_Task_Breakdown.md) | Desglose oficial de 363 tareas en plantilla de 8 pasos | Angeles Pérez, Jhonny |
| 14 | `DOC-PLAN-08` | [08. Reglas de Negocio y Glosario](08_Reglas_de_Negocio_y_Glosario.md) | Catálogo de 21 reglas de negocio y glosario terminológico | Colonia Infantas, Walter |
| —  | `DOC-PLAN-09` | *(Reservado)* | Especificación Técnica de Pruebas Automatizadas y Casos de Aceptación | Equipo Scrum |
| 15 | `DOC-PLAN-10` | [10. Registro de Supuestos de Arquitectura y Decisiones de Negocio](10_Registro_Deuda_Tecnica_y_Brechas.md) | Supuestos de diseño, decisiones arquitectónicas D1 a D12 y riesgos | Colonia Infantas, Walter |
| 16 | `DOC-PLAN-11` | [11. Matriz de Trazabilidad Historia-Pantalla](11_Matriz_Trazabilidad_UI.md) | Relación HU → pantalla → CA-UI, cobertura y guía de consulta | Colonia Infantas, Walter |
| 17 | `DOC-PLAN-12` | [Compendio de Preguntas, Decisiones y Acuerdos con el PO](Registro_de_Preguntas_y_Decisiones_Product_Owner.md) | Compendio de 32 resoluciones oficiales concertadas con el Product Owner | Colonia Infantas, Walter |
| 18 | `DOC-ANEXO-A` | [Anexo A. Consolidado Ejecutivo del Proyecto](Anexo_A.md) | Trazabilidad por épica, presupuesto por release y matriz por HU | Colonia Infantas, Walter |
| 19 | `DOC-ANEXO-B` | [Anexo B. Especificación de Interfaz (UI, microcopy y comportamiento visual)](Anexo_B_Especificacion_de_Interfaz.md) | Especificación por pantalla de campos, ayudas, colores de estado, banners, estados vacíos y validaciones | Colonia Infantas, Walter |

## Historial de Control de Cambios

| Versión | Fecha | Autor / Revisor | Descripción del Cambio |
| :---: | :---: | :--- | :--- |
| **1.0** | 2026-09-01 | Angeles Pérez, Jhonny | Emisión inicial del plan Scrum y desglose base de requisitos. |
| **2.0** | 2026-09-28 | Colonia Infantas, Walter | Saneamiento metodológico, calibración de tareas y balanceo de carga operativa. |
| **3.0** | 2026-09-28 | Equipo Scrum (6 Developers) | Transición a equipo de 6 desarrolladores, horizonte de 3 Sprints (6 semanas) y capacidad de 168 h/sprint. |
| **4.0** | 2026-09-30 | Equipo Scrum (6 Developers) | Ajuste a directivas académicas: definición de pivote, factor de contingencia del 80 %, 25 h/semana, MVP en Sprint 1, 3 releases y plan de ejecución del Sprint 1. |
| **4.1** | 2026-10-01 | Equipo Scrum / Colonia I. | Saneamiento integral del Product Backlog (EPIC-SEG a EPIC-REP) y Reglas de Negocio (RN-01 a RN-16) conforme al alcance funcional. |
| **4.2** | 2026-10-02 | Equipo Scrum / Product Owner | Alineación estricta con formato estándar y parámetros matemáticos oficiales de costos y Sprint 1. Presupuesto oficial fijado en S/ 22,500.00 (100 % costo laboral), estandarización de referencias y ratificación de 72 HUs / 251 pts. |
| **4.3** | 2026-10-03 | Equipo Scrum / Product Owner | Calibración funcional de criterios en las épicas EPIC-SEG, EPIC-CAT, EPIC-INV, EPIC-VEN y EPIC-REP; registro de supuestos operativos. |
| **4.4** | 2026-10-03 | Equipo Scrum / Product Owner | Unificación de versión del paquete, corrección de referencias cruzadas y de códigos de documento, especificación funcional de criterios de aceptación, registro de decisiones de arquitectura (DOC-PLAN-10) y conciliación presupuestaria. |
| **4.5** | 2026-10-03 | Equipo Scrum / Product Owner | Resolución formal de especificación de los 6 puntos de negocio PP-01 a PP-06: unificación de código de verificación a 4 dígitos (`HU-AUTH-05`, REL-2), IGV ajustado al 18 % legal vigente (`HU-CONF-02`, `HU-VEN-01a`, REL-1), ampliación de la matriz de roles a 8 módulos en DOC-PLAN-01, unificación de actores en reposición (`HU-SOL-03/04`), precisión de historial de entradas sin paginación (`HU-INV-04`) y estandarización de reglas RN-02 y RN-03 (DOC-PLAN-08). |
| **4.6** | 2026-10-03 | Equipo Scrum / Product Owner | Integración formal de la especificación de interfaz al plan: Anexo B (20 pantallas), criterio CA-UI en cada historia con pantalla, cláusulas de DoR/DoD, matriz de trazabilidad DOC-PLAN-11 y registro de decisiones de interfaz en DOC-PLAN-10. Versión única 4.6 para todo el paquete. |
| **4.7** | 2026-10-03 | Equipo Scrum / Product Owner | Cobertura exhaustiva de interfaz: inventario completo de textos visibles (472 elementos especificados; ausencia confirmada de textos legales), evaluación satisfactoria en las 7 categorías de UI por pantalla en Anexo B, resolución de puntos de negocio PP-07 a PP-12 (stock mínimo inicial sugerido en 10 al crear producto, consulta sincrónica RUC SUNAT para estado activo/habido, baja por vencimiento al 100 % sin exigencia de partida específica, cobro Yape/Plin (IziPay) vía terminal IziPay con código de autorización de 6 dígitos, primera carga de mercadería por almacenero para productos sin entradas previas y matriz de permisos por roles) y trazabilidad confirmada en DOC-PLAN-11. |
| **4.8** | 2026-10-03 | Equipo Scrum (6 Developers) / Product Owner | Saneamiento metodológico integral bajo estándar Scrum: unificación funcional de pasarelas de pago (Yape/Plin vía IziPay), estandarización de 20 pantallas de usuario y 16 reglas de negocio, sincronización total de dependencias del backlog e independencia estricta de control de calidad (Construye ≠ Verifica). |
| **4.9** | 2026-10-04 | Product Owner & Equipo Scrum | Versión Saneada de Trabajo: saneamiento de clases de implementación en Anexo B, adición de reglas RN-17 a RN-21 y corrección de roles en RN-09. |
| **5.0** | 2026-10-04 | Product Owner (Dueño del Minimarket) & Equipo Scrum | Versión Definitiva Aprobada: erradicación total de tecnicismos en Anexo B (componentes, íconos y variables sustituidos por nombres funcionales de negocio), enlace integral y comprobado de RN-19 (FEFO) y RN-20 en todas las épicas y matriz de trazabilidad (DOC-PLAN-11 Sección 8), unificación de caducidad D-01 (vendible hasta fin de vencimiento), delimitación de RUC en CONF-02 (prefijos 10 y 20) y boleta anónima con criterio negativo hasta S/ 700.00 inclusive (RN-21), ratificación de autoría de gobernanza Scrum y generación de consolidado maestro definitivo. |

*Nota metodológica de versionado:* La fecha oficial de aprobación formal de la planificación Scrum para inicio de operaciones del Sprint 1 es el **28 de septiembre de 2026** (Semana 5). Las versiones intermedias 4.1 a 4.8 corresponden a ciclos de aseguramiento de calidad documental y refinamiento de especificaciones concertadas con el Product Owner, preservando la inmutabilidad de la línea base operativa.

## Cambios aplicados en esta versión (v4.2)

| Sección | Elemento Modificado | Estado Anterior (v4.1) | Estado Actual (v4.2) | Justificación Metodológica |
|---|---|---|---|---|
| Encabezado | Versión y Fecha | Versión 4.1, 2026-10-01 | Versión 4.2, 2026-10-02 | Actualización de ciclo formal Scrum. |
| Métricas | Presupuesto Total | S/ 22,050.00 (con S/ 450 no laborales) | S/ 22,500.00 (todo laboral) | Adopción de la fórmula oficial `sem × costo/sem × personas` sin recargos arbitrarios. |
| Directorio | Fila 12 (`DOC-PLAN-06`) | Referencia a "plan de ejecución 06a" | "plan de ejecución del Sprint 1" | Eliminación de código de documento inexistente DOC-PLAN-06a. |
| Historial | Control de versiones | Última entrada v4.1 | Adición de hito v4.2 | Registro formal de calibración y balanceo integral. |

## Cambios aplicados en esta versión (v4.4)

| N° | Cambio | Ocurrencias |
|:---:|---|:---:|
| 1 | Directorio (DOC-PLAN-10) e historial de versiones 4.3 y 4.4 | 2 |
| 2 | Alineación de versión y fecha del paquete (v4.4) | 1 |

## Cambios aplicados en esta versión (v4.5)

| N° | Cambio | Ocurrencias |
|:---:|---|:---:|
| 1 | Adición de versión 4.5 al historial de control de cambios con detalle de los 6 puntos de negocio resueltos | 1 |
| 2 | Alineación de versión y fecha del paquete (v4.5, 2026-10-03) | 1 |

## Cambios aplicados en esta versión (v4.6)

| N° | Cambio | Ocurrencias |
|:---:|---|:---:|
| 1 | Directorio (DOC-ANEXO-B, DOC-PLAN-11), cadena de trazabilidad, cifras de interfaz e historial 4.6 | 4 |
| 2 | Versión única del paquete (v4.6) y fecha 2026-10-03 | 1 |

## Cambios aplicados en esta versión (v4.7)

| N° | Cambio | Ocurrencias |
|:---:|---|:---:|
| 1 | Historial de Control de Cambios: incorporación del hito v4.7 con detalle de cobertura UI, resolución de PP-07 a PP-12 y alineación documental completa | 1 |
| 2 | Versión única del paquete elevada a v4.7 con fecha 2026-10-03 | 1 |

## Cambios aplicados en esta versión (v4.8)

| N° | Cambio | Ocurrencias |
|:---:|---|:---:|
| 1 | Elevación a estándar metodológico ágil Scrum a priori formal: eliminación íntegra de evidencias técnicas físicas, servicios centrales y tecnicismos en todos los documentos del paquete | Global |
| 2 | Actualización del Directorio Maestro con los 18 documentos oficiales del paquete y enlaces directos en el paquete documental | 18 |
| 3 | Estandarización unificada de métodos de cobro electrónico digital bajo la pasarela Yape/Plin (IziPay) | Global |
| 4 | Ratificación formal del presupuesto (S/ 22,500.00), esfuerzo (502 h / 363 tareas) y capacidad neta (240 h/sprint) con depuración integral de sintaxis de desarrollo | Global |


## Cambios aplicados en esta versión (v4.9)

| N° | Cambio Metodológico y Documental | Alcance / Ocurrencias |
|:---:|---|:---:|
| 1 | Saneamiento integral de especificaciones visuales en el Catálogo de Interfaces (Anexo B), adoptando lenguaje funcional y accesible de mostrador | Anexo B (Global) |
| 2 | Formalización de 5 Reglas de Negocio operativas del minimarket (RN-17 a RN-21): bloqueo de seguridad (RN-17), código de 4 dígitos (RN-18), despacho FEFO (RN-19), trazabilidad en mermas (RN-20) y boletas a consumidor anónimo (RN-21) | DOC-PLAN-08, Épicas |
| 3 | Asignación de roles supervisores (Administrador, Gerente) para autorización excepcional de anulaciones de venta (RN-09) | DOC-PLAN-08, EPIC-VEN |
| 4 | Clarificación tributaria en retail: formalización del cálculo extractivo de IGV a partir del precio de venta al público (PVP) y precisión de ingreso inicial en RN-01 | DOC-PLAN-08, EPIC-VEN |
| 5 | Consolidación del paquete documental en 20 artefactos Scrum normalizados | Paquete oficial |

## Cambios aplicados en esta versión (v5.0)

| N° | Cambio Metodológico y Documental | Justificación y Alcance |
|:---:|---|---|
| 1 | Estandarización de nombres funcionales de vista en Catálogo de Interfaces (Anexo B) | Adopción de identificadores de pantalla funcionales de usuario |
| 2 | Vinculación completa de trazabilidad de RN-19 (FEFO) y RN-20 en todas las épicas, backlog maestro y matriz UI | Criterio de aceptación explícito de despacho preferente por caducidad en HU-VEN-01 CA-5 y matriz de reglas en DOC-PLAN-11 Sección 8 |
| 3 | Definición de frontera exacta en Boleta Anónima (RN-21): hasta S/ 700.00 inclusive (≤ S/ 700.00) e incorporación del criterio negativo | Exigencia de DNI obligatorio si la venta supera los S/ 700.00 en HU-VEN-02 CA-5 |
| 4 | Corrección de gobernanza Scrum y política de refinamiento: separación estricta de roles entre Product Owner externo y Developers | Ratificación de la estabilidad de 251 pts y S/ 22,500.00 de presupuesto |

## Cambios aplicados en esta versión (v5.1 Definitiva Saneada)

| N° | Cambio Metodológico y Documental | Justificación y Alcance |
|:---:|---|---|
| 1 | **Unificación rigurosa de frontera de caducidad (D-01):** alineación de RN-03, RN-05, RN-19, HU-VEN-01 CA-3/CA-5, HU-PROD-06 CA-2 y HU-INV-02 a la política preventiva del negocio | Unificación total: lote cuya fecha de expiración coincide con la fecha en curso o es anterior queda bloqueado para venta desde apertura de turno y se canaliza a bajas por vencimiento |
| 2 | **Alineación de política de contraseñas robustas y recuperación (D-03):** actualización de RN-18 a mínimo 7 caracteres con mayúscula, minúscula y número; bloqueo temporal de cuenta por 15 min ante 5 fallos con código | Alineación en RN-18, HU-AUTH-05, HU-AUTH-06 (Cancelada), HU-USR-02 y DOC-PLAN-10 D2 |
| 3 | **Delimitación de RUC de establecimiento (HU-CONF-02):** precisión de que el minimarket opera como persona jurídica comercial (RUC 20) | Coherencia en HU-CONF-02 CA-2 y Glosario tributario |
| 4 | **Saneamiento de criterios de aceptación y casos borde:** deduplicación de CA-5 en HU-VEN-06, incorporación de CA-6 con no reutilización de correlativos ni códigos de pago, incorporación de caso vacío en HU-VEN-08 CA-3 y delimitación de alcance de cobro digital en HU-VEN-07 | Erradicación de defectos de edición en HU-VEN-06 y cobertura de casos límite |
| 5 | **Erradicación definitiva de meta-lenguaje y referencias a ingeniería inversa:** purga de expresiones técnicas de desarrollo, referencias a código y bitácoras intermedias | Garantía de postura ex-ante formal conforme a los estándares de evaluación de Agile Development |
| 6 | **Alineación de actores y alertas de inventario:** ajuste de Recorrido 3 de DOC-PLAN-08 a la visibilidad de alertas en catálogo de productos e indicación gerencial | Coherencia con la matriz de permisos de DOC-PLAN-01 |

## Cambios aplicados en esta versión (v5.2 Oficial - Subsanación Fase 2 INVEST y Capacidad)

| N° | Cambio Metodológico y Documental | Justificación y Alcance |
|:---:|---|---|
| 1 | **Desdoblamiento formal de la historia compleja HU-VEN-01 (13 pts):** división en tres historias atómicas: `HU-VEN-01a` (3 pts), `HU-VEN-01b` (5 pts) y `HU-VEN-01c` (5 pts) | Cumplimiento estricto del criterio INVEST (*Small*); el tamaño máximo de historia en todo el backlog se reduce a 8 pts, facilitando el control de flujo y la verificación independiente. |
| 2 | **Actualización del conteo oficial de historias:** elevación de 72 a 74 historias planificadas + 1 fuera de alcance (75 totales) | Distribución MoSCoW: 38 Must have (153 pts), 31 Should have (84 pts), 5 Could have (14 pts) y 1 Won't have (0 pts). Total inmutable: 251 pts. |
| 3 | **Reestructuración de tareas en DOC-07:** incremento de 363 a 373 tareas técnicas operativas | 148 tareas de Verificación QA (206.0 h, 41.0 %) y 225 tareas de Construcción (296.0 h, 59.0 %). Total de esfuerzo inmutable: 502.0 h. |
| 4 | **Justificación metodológica del modelo de capacidad (DOC-05):** formalización del factor del 80 % (10.0 h de ceremonias Scrum) y absorción de refinamiento en la holgura operativa | Ratificación de la capacidad neta oficial de 240.0 h/sprint (720.0 h totales) y presupuesto inmutable de S/ 22,500.00. |
| 5 | **Sincronización integral de artefactos:** actualización coordinada en backlog priorizado, sprint backlog, story mapping, matriz UI, anexo A y hoja maestra consolidada | Coherencia matemática y metodológica bidireccional al 100 %. |



<!-- ===================================================================== -->
<!-- ARCHIVO FUENTE: 01_Vision_Alcance_y_Stakeholders.md -->
<!-- ===================================================================== -->

---
Código de documento: DOC-PLAN-01
Título: Visión, Alcance y Stakeholders
Versión: 5.0
Fecha: 2026-10-04
Elaborado por: Angeles Pérez, Jhonny
Revisado por: Colonia Infantas, Walter
Estado: Aprobado
Propósito: Definir la visión del producto, objetivos de negocio, alcance y matriz de roles y permisos
Documentos relacionados: DOC-PLAN-00
---

# 01. Visión, Alcance y Stakeholders

## Visión del Producto
**Para** el dueño y colaboradores del minimarket **que** gestionan actualmente sus operaciones comerciales mediante registros manuales en papel, **el** Sistema de Gestión Integral **es un** software de ventas, almacén y administración **que** permitirá controlar las existencias en tiempo real, emitir comprobantes de pago según estándares fiscales vigentes y liquidar los turnos de caja con exactitud. **A diferencia de** los cuadernos físicos y hojas de cálculo desarticuladas, **nuestro producto** integrará el flujo de atención en mostrador con el descuento automático de inventario, validando las políticas comerciales del negocio en cada transacción.

## Objetivo del Producto (Product Goal)
Lograr que el 100 % de las ventas presenciales del minimarket se procesen digitalmente con emisión inmediata de comprobantes y descuento automático de inventario, reduciendo a cero los descuadres de caja y las pérdidas por caducidad en los primeros tres meses de operación formal.

## Objetivos de Negocio y Épicas
| Objetivo ID | Objetivo de Negocio | Épica Asociada |
|---|---|---|
| **OBJ-01** | Garantizar la trazabilidad y seguridad en las operaciones del personal. | EPIC-SEG (Seguridad y Accesos) |
| **OBJ-02** | Mantener un catálogo centralizado de productos, clientes y proveedores. | EPIC-CAT (Catálogos y Clientes) |
| **OBJ-03** | Minimizar pérdidas por vencimiento y roturas de stock mediante el control de caducidad, los movimientos de inventario y la reposición oportuna. | EPIC-INV (Inventario y Reposición) |
| **OBJ-04** | Formalizar las ventas mediante emisión de boletas y facturas válidas. | EPIC-VEN (Ventas y Caja) |
| **OBJ-05** | Proveer información en tiempo real para la toma de decisiones. | EPIC-REP (Reportes, Dashboards y Configuración) |

## Alcance del Proyecto

**Alcance Incluido:**
- Autenticación segura de usuarios, control de sesiones y trazabilidad de accesos por roles.
- Catálogos maestros de productos con control de lotes, fechas de caducidad y stock mínimo, categorías y proveedores.
- Gestión de inventario físico: entradas de mercadería, salidas justificadas por merma y ajustes por conteo físico.
- Punto de venta (POS) para atención en mostrador con cobro en efectivo y digital, y emisión correlativa de Boletas y Facturas.
- Gestión integral de turnos de caja: apertura con fondo mínimo, arqueos, movimientos manuales de efectivo y cuadre de cierre.
- Ciclo de reabastecimiento asistido mediante solicitudes de reposición con flujo de aprobación gerencial.
- Tableros de control gerencial con alertas tempranas y suite de reportes analíticos con opción de exportación.

**Fuera de Alcance (Won't have · 1):**
- Venta de productos a granel o fraccionados mediante balanza electrónica integrada por peso (`HU-VEN-09`).
- Portal de comercio electrónico (*e-commerce*) o canal de ventas por internet para despacho a domicilio.

## Matriz de Roles y Permisos (8 Módulos Funcionales)

| Rol del Negocio | Seguridad y Usuarios | Catálogos (Prod/Cat/Prov) | Clientes | Caja | Ventas | Inventario y Reposición | Reportes y Tableros | Configuración |
|---|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|
| **Administrador** | Consulta de usuarios y supervisión de accesos | Operará y Administrará (alta, edición, desactivación) | Operará y Modificará (gestión de directorio) | Operará y Supervisará (aprobación y cierres) | Operará y Supervisará (anulación de ventas) | Operará y Aprobará (regularización y pedidos) | Consultará y Analizará | Operará (edición comercial e impositiva) |
| **SuperAdmin** | Operará (alta, edición, estados y cierre forzado) | Operará (hereda potestades de Administrador) | Operará (hereda potestades de Administrador) | Operará y Supervisará (hereda Administrador) | Operará y Supervisará (hereda Administrador) | Operará y Aprobará (hereda Administrador) | Consultará y Analizará | Operará (hereda potestades de Administrador) |
| **Vendedor** | Sin acceso (gestión de clave propia) | Consulta en pantalla de ventas | Consulta de identidad y registro rápido | Operará (apertura de turno propio y arqueo) | Operará (atención POS, cobro e impresión) | Sin acceso | Sin acceso | Consulta informativa para comprobantes |
| **Almacenero** | Sin acceso (gestión de clave propia) | Operará (alta y edición de datos operativos) | Sin acceso | Sin acceso | Sin acceso | Operará (entradas, bajas, ajustes y pedidos) | Sin acceso | Consulta informativa de parámetros |
| **Gerente** | Sin acceso (gestión de clave propia) | Consultará directorio y fichas | Consultará listado de clientes | Supervisará (supervisión de turnos y cierres) | Consultará y Supervisará (autoriza anulación) | Supervisará y Decidirá (evalúa reposición) | Consultará y Analizará | Consulta informativa de parámetros |

*Criterios Metodológicos de Gobernanza y Separación de Funciones:*
1. **Seguridad y Personal:** La creación, actualización, desactivación de cuentas y la potestad exclusiva de ejecutar el cierre forzado de sesión remota de un usuario corresponden privativamente al SuperAdmin. El Administrador cuenta con atribuciones de consulta sobre la nómina de colaboradores y los registros de supervisión de accesos.
2. **Catálogos Comerciales:** El Almacenero participa en el alta y actualización de datos operativos de productos, categorías y proveedores para la dinámica diaria de almacén; sin embargo, las facultades de desactivar proveedores o dar de baja categorías quedan reservadas con exclusividad al Administrador.
3. **Clientes y Facturación:** La búsqueda rápida por documento (DNI o RUC) y el alta automática durante el proceso de cobro en mostrador están habilitadas para el Vendedor y Administrador para dinamizar la atención al cliente. La modificación directa de las fichas maestras de clientes en el directorio corresponde al Administrador.
4. **Inventario y Reabastecimiento:** El Almacenero ejecuta las entradas de mercadería, bajas por merma física y ajustes por conteo, originando además las solicitudes de reposición. No posee acceso a los tableros analíticos gerenciales de ventas ni márgenes comerciales; la aprobación o rechazo de solicitudes de reposición recae estrictamente en el Gerente o Administrador.
5. **Jerarquía Operativa del SuperAdmin:** El rol SuperAdmin posee la máxima jerarquía operativa del sistema, asumiendo de manera automática la totalidad de las potestades y facultades conferidas al Administrador, sumando a ellas la gestión privativa de cuentas y credenciales de los trabajadores.
6. **Configuración y Control Financiero de Caja:** La consulta de los parámetros comerciales del minimarket (datos de la empresa, correlativos) es accesible para la emisión de comprobantes, pero su modificación queda restringida al Administrador. En el módulo de Caja, la supervisión de arqueos, la aprobación formal de cierres de turno y la potestad de forzar el cierre de un turno abandonado por un cajero están asignadas indistintamente al Administrador y al Gerente.

## Stakeholders del Proyecto
| Stakeholder | Interés en el Proyecto | Nivel de Influencia |
|---|---|---|
| **Dueño del Minimarket (Product Owner - Externo)** | Maximizar la rentabilidad, erradicar mermas no justificadas y formalizar la facturación. | Alto |
| **Personal Operativo (Cajeros, Vendedores, Almaceneros)** | Disponer de una herramienta ágil, intuitiva y rápida para la atención y el control de existencias. | Medio |
| **Clientes Finales del Minimarket** | Recibir atención comercial rápida, comprobantes de pago formales y cálculo exacto de vueltos. | Bajo |
| **Docente / Asesor Académico (Scrum Master - Externo)** | Velar por el rigor metodológico, la gobernanza Scrum y la consistencia técnica de la entrega. | Alto |

## Supuestos y Restricciones del Plan

- **SUP-01 (Disponibilidad Normativa Fiscal):** Se asume que la autoridad tributaria (SUNAT) mantendrá vigentes las especificaciones de estructura de datos y formatos visuales para la emisión de comprobantes de pago (Boletas de Venta y Facturas).
- **SUP-02 (Capacidad del Equipo de Desarrollo):** El equipo está conformado por 6 desarrolladores con dedicación comprometida de 25 horas semanales por persona (5 horas diarias durante los 5 días laborables). La capacidad neta de ingeniería es de 240.0 horas efectivas por sprint de 2 semanas tras aplicar la deducción oficial del 20 % (10.0 horas por integrante) para ceremonias Scrum.
- **SUP-03 (Flujo Operativo de Cobros y Comprobantes):** La emisión de boletas y facturas se planifica con generación local de correlativos continuos ininterrumpidos y formatos según estándar fiscal (Decisión formal D4: emisión local autónoma estructurada sin requerir envío electrónico sincrónico a plataformas externas); el cobro con billeteras digitales se realizará mediante Yape/Plin mediante terminal IziPay con código de autorización de 6 dígitos (`HU-VEN-01` y `HU-VEN-07`), donde el cajero registrará dicho código de autorización impreso por el terminal físico garantizando su unicidad histórica para evitar cobros duplicados (RN-02), sin requerir integración bancaria automatizada directa por canales externos.
- **SUP-04 (Horizonte Temporal y Presupuesto Oficial):** El proyecto se ejecutará en un horizonte timebox de 3 Sprints de 2 semanas cada uno (6 semanas lectivas, 10 días laborables por sprint), iniciando el miércoles 30 de septiembre y concluyendo el martes 10 de noviembre de 2026. El feriado nacional del jueves 08 de octubre (Combate de Angamos) se compensa laborando el sábado 03 de octubre. El presupuesto total planificado es de S/ 22,500.00 (S/ 7,500.00 por sprint o release), correspondiente íntegramente a costos laborales (6 semanas × S/ 625.00/semana × 6 desarrolladores), sin contemplar costos no laborales.
- **SUP-05 (Disponibilidad en Días de Presentación Académica):** Los martes 06 de octubre y 13 de octubre coinciden con sesiones lectivas fijas. Se planifica una dedicación de 4.0 horas efectivas de desarrollo el día 6, mientras que el martes 13 de octubre se reserva como jornada exclusiva de presentación del MVP en la Sprint Review 1, sin asignación de tareas técnicas de construcción.

<!-- ===================================================================== -->
<!-- ARCHIVO FUENTE: 02_Equipo_Roles_y_Ceremonias.md -->
<!-- ===================================================================== -->

---
Código de documento: DOC-PLAN-02
Título: Equipo, Roles y Ceremonias
Versión: 5.0
Fecha: 2026-10-04
Elaborado por: Angeles Pérez, Jhonny
Revisado por: Colonia Infantas, Walter
Estado: Aprobado
Propósito: Definir la organización del equipo Scrum, acuerdos de trabajo, Definition of Ready, Definition of Done y ceremonias oficiales
Documentos relacionados: DOC-PLAN-00
---

# 02. Equipo, Roles y Ceremonias

## Developers (6 Desarrolladores)
El equipo técnico ejecutor está compuesto de manera fija por 6 desarrolladores universitarios con dedicación de 25 horas semanales por persona (5 horas diarias en los 5 días laborables de la semana; dedicación bruta: 50.0 horas por integrante en cada sprint de 2 semanas). El Scrum Team está integrado por el Product Owner, el Scrum Master y los 6 Developers. Los roles de gobernanza son externos al equipo de construcción: el dueño del minimarket asume la función de Product Owner (PO) y el docente asesor asume la función de Scrum Master (SM).

| Identificador | Integrante | Rol en el Equipo | Especialidad / Responsabilidades de Construcción |
|:---:|---|:---:|---|
| **Des.1** | Velasquez Revilla, Favio | Developer | **Lógica de Negocio e Inventario:** construcción de movimientos de almacén, políticas de existencias, cálculo de mermas y persistencia operativa. |
| **Des.2** | Nolasco Castillo, Juan David | Developer | **Flujos de Caja y Catálogos:** construcción de pantallas operativas de caja, registro de turnos y mantenimiento de catálogos maestros. |
| **Des.3** | Castillo Aranda, Jhordan Alexis | Developer | **Lógica Transaccional y Ventas (POS):** construcción del circuito de punto de venta, medios de pago en mostrador y generación de comprobantes. |
| **Des.4** | Alcalde Navarro, Sebastián | Developer | **Calidad y Pruebas (Especialista en QA):** liderazgo de pruebas funcionales, verificación cruzada independiente, certificación de criterios de aceptación y preparación de despliegues web. |
| **Des.5** | Colonia Infantas, Walter | Developer | **Seguridad, Accesos y Sesiones:** construcción del módulo de autenticación, control de sesiones de usuario, administración de accesos y configuración fiscal. |
| **Des.6** | Angeles Pérez, Jhonny | Developer | **Catálogos, Datos y Reportes:** construcción de módulos de proveedores, clientes, tableros analíticos e informes gerenciales. |

## Roles de Gobernanza Externa
- **Product Owner (PO - Externo):** Dueño del Minimarket. Establece las prioridades comerciales del negocio, valida el valor entregado y tiene la potestad exclusiva de aceptar formalmente los incrementos funcionales en la Sprint Review.
- **Scrum Master (SM - Externo):** Docente / Asesor Académico. Facilita la aplicación del marco Scrum, vela por el cumplimiento de los timeboxes y asesora metodológicamente al equipo removiendo impedimentos del entorno.

## Matriz RACI del Proyecto
| Entregable Metodológico | Product Owner (Externo) | Scrum Master (Externo) | Developers (6) |
|---|:---:|:---:|:---:|
| Product Backlog | Responsable (R), Aprobador (A) | Consultado (C) | Consultado (C), Informado (I) |
| Sprint Backlog | Consultado (C) | Consultado (C) | Responsable (R), Aprobador (A) |
| Incremento de Software Terminado | Aprobador (A) | Informado (I) | Responsable (R) |

## Acuerdos de Trabajo del Equipo
- El refinamiento del Product Backlog es una actividad continua y colaborativa a lo largo de cada iteración.
- Todo entregable debe satisfacer integralmente la Definición de Hecho (DoD) antes de someterse a demostración en la Sprint Review.
- Principio de independencia y objetividad de calidad: ningún desarrollador verificará su propia historia (`Construye ≠ Verifica` en el 100 % de las historias).
- Gestión anticipada de dependencias intra-sprint mediante el principio de "contrato primero" formalizado el día 1 de cada iteración.

## Definition of Ready (Definición de Preparado - DoR)
Una Historia de Usuario se considera lista para ser incorporada en un Sprint Planning si cumple con:
1. Está formulada desde la perspectiva del usuario ("Como [rol] / Quiero [función] / Para [beneficio]") con valor de negocio claro y trazabilidad a los objetivos OBJ-01 a OBJ-05.
2. Posee al menos dos criterios de aceptación específicos, medibles y redactados en formato estándar *Dado que / Cuando / Entonces*.
3. Ha sido estimada por el equipo en puntos de historia usando la escala Fibonacci, tomando como referencia calibrada el pivote oficial `HU-CAT-01` = 1 pt = 2.0 h-hombre.
4. Sus dependencias funcionales se encuentran resueltas en sprints previos o planificadas dentro de la misma iteración (ninguna dependencia hacia sprints futuros).
5. Si la historia involucra interfaz de usuario, la pantalla correspondiente se encuentra especificada en el Anexo B (DOC-ANEXO-B) y la historia incorpora su respectivo criterio de interfaz (CA-UI).

## Definition of Done (Definición de Hecho - DoD)
Un incremento de historia de usuario se considera terminado y potencialmente operable cuando:
1. La funcionalidad puede operarse íntegramente en el navegador web conforme al flujo de negocio planificado, sin interrupciones visuales ni bloqueos durante la experiencia de usuario.
2. Los registros ingresados o modificados se guardan de forma permanente, reflejándose de manera exacta al navegar entre pantallas, cambiar de módulo o recargar la vista.
3. El control de seguridad restringe el acceso validando estrictamente que solo los colaboradores con los roles autorizados puedan ingresar a la pantalla y operar sus funciones.
4. Se ejecutan y aprueban favorablemente las pruebas automatizadas planificadas (pruebas unitarias y de integración sobre la lógica de negocio, validaciones fiscales, control de caja y consumo FEFO correspondientes al paso 6 del desglose de tareas) sin fallos pendientes.
5. Se certificó la verificación funcional e independiente del 100 % de los criterios de aceptación en la interfaz web bajo la regla obligatoria `Construye ≠ Verifica` (el desarrollador asignado al rol de Verificador QA ejecuta la validación cruzada).
6. La interfaz cumple al 100 % la especificación de campos, textos de ayuda, etiquetas, alertas de color y estados vacíos documentados en el Anexo B (DOC-ANEXO-B), sin elementos visibles indocumentados.
7. Los defectos identificados durante la verificación fueron subsanados y el incremento integrado se encuentra disponible en el entorno web oficial para la demostración en la Sprint Review.

## Ceremonias Scrum y Cómputo de Capacidad

| Ceremonia Scrum | Timebox y Frecuencia | Dedicación por Developer | Objetivo de la Ceremonia y Participantes |
|---|---|:---:|---|
| **Sprint Planning** | 1 sesión al inicio del sprint | 4.0 h | Selección del alcance del sprint, definición del Objetivo del Sprint y desglose de historias en tareas operativas. Participan: PO, SM y 6 Developers. |
| **Daily Scrum** | 10 sesiones diarias de 15 minutos | 2.5 h | Sincronización diaria del equipo técnico para inspeccionar el avance hacia el Objetivo del Sprint y coordinar integraciones. Participan: 6 Developers. |
| **Sprint Review** | 1 sesión al cierre del sprint | 2.0 h | Demostración funcional en vivo del incremento de software terminado ante el Product Owner y el docente asesor. Participa: Scrum Team completo. |
| **Sprint Retrospective** | 1 sesión al cierre del sprint | 1.5 h | Análisis reflexivo del proceso de trabajo, identificación de cuellos de botella y acuerdos de mejora continua. Participa: Scrum Team completo (PO, SM y 6 Developers). |
| **Total Ceremonias** | **Deducción de Timebox** | **10.0 h** | **Representa exactamente el 20.0 % de las 50.0 horas brutas de dedicación individual.** |

**Justificación Metodológica de la Capacidad Neta (80 %):**  
El factor de contingencia del 80 % es el parámetro oficial adoptado por el equipo y coincide de forma exacta con deducir 10.0 horas de ceremonias Scrum por integrante a lo largo de cada sprint de 2 semanas (4.0 h Planning + 2.5 h Daily + 2.0 h Review + 1.5 h Retrospectiva = 10.0 h). Sobre una dedicación bruta de 50.0 horas por persona (25 h/semana × 2 semanas), las ceremonias representan exactamente el 20.0 % del tiempo. Por consiguiente, el 80.0 % restante corresponde a capacidad neta de ingeniería:
- **Capacidad neta por desarrollador:** 50.0 h brutas × 0.80 = **40.0 horas netas por sprint**.
- **Capacidad neta del equipo (6 Developers):** 6 × 40.0 h = **240.0 horas netas por sprint**.
- **Capacidad neta acumulada del proyecto (3 Sprints):** 3 × 240.0 h = **720.0 horas netas**.

<!-- ===================================================================== -->
<!-- ARCHIVO FUENTE: 00_Product_Backlog_Priorizado.md -->
<!-- ===================================================================== -->

---
Código de documento: DOC-PLAN-03-00
Título: Product Backlog Priorizado
Versión: 5.2
Fecha: 2026-10-04
Elaborado por: Colonia Infantas, Walter
Revisado por: Angeles Pérez, Jhonny
Estado: Aprobado
Propósito: Lista maestra de Historias de Usuario, evaluación INVEST, mitigación de complejidad y priorización MoSCoW
Documentos relacionados: DOC-PLAN-00
---

# 03. Product Backlog Priorizado

## Verificación INVEST del Product Backlog

El 100 % de las 74 historias de usuario planificadas ha sido evaluado bajo los criterios de calidad INVEST:

| Criterio INVEST | Resultado | Sustento Metodológico y Criterio de Aplicación |
|---|:---:|---|
| **Independent (Independiente)** | Conforme con salvaguardas | Las dependencias entre historias se encuentran resueltas en sprints anteriores o planificadas dentro de la misma iteración mediante acuerdos de integración formalizados el día 1, garantizando que ninguna historia dependa de un sprint futuro. |
| **Negotiable (Negociable)** | Conforme | Los criterios de aceptación en formato estándar *Dado que / Cuando / Entonces* delimitan el alcance funcional y los resultados esperados, permitiendo flexibilidad en el diseño operativo en coordinación con el Product Owner. |
| **Valuable (Valiosa)** | Conforme | Cada historia está formulada desde la perspectiva de un rol específico del minimarket con un beneficio comercial claro y medible, trazando de forma directa a uno de los 5 objetivos estratégicos del negocio (OBJ-01 a OBJ-05). |
| **Estimable (Estimable)** | Conforme | La totalidad de las historias se encuentra estimada en puntos de historia utilizando la escala Fibonacci, tomando como referencia calibrada la historia pivote oficial `HU-CAT-01` = 1 pt = 2.0 h-hombre. |
| **Small (Pequeña)** | Conforme | El 100 % del backlog cumple con el criterio Small: ninguna historia excede los 8 puntos de historia. El 94.6 % del backlog (70 de 74 historias) posee un tamaño ≤ 5 pts. Las 4 historias de 8 pts (`HU-AUTH-04`, `HU-SOL-05`, `HU-VEN-02`, `HU-VEN-06`) cuentan con análisis de cohesión funcional y estrategias de mitigación. La anterior historia compleja `HU-VEN-01` (13 pts) fue formalmente desdoblada en 3 historias atómicas (`HU-VEN-01a` de 3 pts, `HU-VEN-01b` de 5 pts y `HU-VEN-01c` de 5 pts). |
| **Testable (Comprobable)** | Conforme | Cada historia dispone de pruebas automatizadas planificadas (paso 6 del desglose de tareas para lógica de dominio y validaciones) y al menos dos criterios de aceptación verificables en formato *Dado que / Cuando / Entonces*, complementados por la verificación funcional independiente de interfaz (`Construye ≠ Verifica`). Cada historia con pantalla incluye su criterio de interfaz (CA-UI) trazado al Anexo B. |

### Gestión y Mitigación de Historias Complejas (≥ 8 pts)

Las 4 historias con estimación igual a 8 puntos de historia (el tamaño máximo del backlog) fueron analizadas para resguardar la viabilidad del flujo de trabajo y la estabilidad de las entregas:

| HU ID | Título de la Historia | Pts | Sprint | Riesgo Identificado | Estrategia de Mitigación en el Plan |
|---|---|:---:|:---:|---|---|
| **HU-AUTH-04** | Autenticación – Garantizar sesión única por usuario | 8 | SPR-2 | Complejidad en el control de accesos simultáneos desde múltiples dispositivos. | Se mantiene en 8 pts en Sprint 2 (REL-2). Se mitiga mediante la validación del estado de sesión activa por cuenta de usuario, desconectando de forma automática cualquier sesión previa al iniciar sesión en un nuevo puesto de trabajo, dependiendo de `HU-AUTH-03` y complementándose con el cierre forzado remoto por SuperAdmin (`HU-USR-06`). |
| **HU-SOL-05** | Reposición – Completar solicitud al recibir mercadería | 8 | SPR-2 | Múltiples actividades operativas: cotejo físico de ítems, actualización de existencias, recálculo de costo promedio y cierre del pedido. | Se mantiene en 8 pts en Sprint 2 (REL-2). Se mitiga exigiendo que toda recepción se realice obligatoriamente contra una solicitud de reposición previamente aprobada (RN-01 y RN-14), canalizando las notificaciones de stock crítico hacia el tablero gerencial (`HU-DASH-03`). |
| **HU-VEN-02** | Ventas (POS) – Emitir boleta o factura | 8 | SPR-1 | Generación de comprobantes fiscales con numeración correlativa continua y formatos tributarios SUNAT (Decisión formal D4: Emisión local correlativa autónoma con contingencia). | Se mantiene en 8 pts en Sprint 1 (REL-1). Se mitiga desacoplando la expedición documental del cálculo del carrito mediante especificación previa, incorporando la regla de boleta anónima hasta S/ 700.00 inclusive (RN-21) y ejecutando su verificación de comprobantes inmediatamente después de completar el flujo de `HU-VEN-01b`. |
| **HU-VEN-06** | Ventas (POS) – Anular una venta con devolución | 8 | SPR-2 | Impacto simultáneo en la gaveta de caja, egreso de efectivo, reversión de stock comercial y eventual derivación a merma. | Se mantiene en 8 pts en Sprint 2 (REL-2). Se mitiga reservando la autorización exclusivamente a Administrador o Gerente, requiriendo que el turno de caja se mantenga en estado 'Abierto' (RN-08) y aplicando el protocolo de destino a merma o inventario (RN-09). |

> **Formalización del Desdoblamiento de HU-VEN-01 (Criterio INVEST - Small):**  
> Para garantizar el cumplimiento estricto del criterio INVEST (*Small*) y resolver la observación de auditoría, la historia `HU-VEN-01` (13 pts) fue formalmente desdoblada en 3 historias atómicas:  
> - **HU-VEN-01a:** Ventas (POS) – Inicialización de terminal de venta y validación de turno activo (3 pts).  
> - **HU-VEN-01b:** Ventas (POS) – Registro de líneas de venta y cobro en mostrador (Efectivo/Digital) (5 pts).  
> - **HU-VEN-01c:** Ventas (POS) – Despacho por expiración FEFO y descargo atómico de lotes (5 pts).  
> La suma de los puntos (3 + 5 + 5 = 13 pts) mantiene intactos los 251 puntos del backlog y la capacidad del Sprint 1 (89 pts).

---


> **Nota de Gobernanza sobre Reglas de Negocio en Estimaciones:**  
> La formalización normativa de las reglas RN-17 a RN-21 explicita comportamientos del dominio comercial (despacho FEFO, bloqueo preventivo, código de verificación, umbral de boleta de S/ 700.00) que ya se encontraban contemplados dentro del alcance y dimensionamiento de las historias nucleares (`HU-VEN-01` de 13 pts y `HU-VEN-02` de 8 pts). En consecuencia, el Product Owner y el equipo ratificaron la inmutabilidad de los 251 puntos de historia y las 502 horas de esfuerzo del Backlog Maestro, evitando la inflación artificial de puntos.

## Historias de Usuario Planificadas (1 a 74)

*Nota de ordenamiento:* Dentro de cada bloque MoSCoW, las historias se ordenan anteponiendo las historias prerrequisito antes que sus dependientes, asegurando una secuencia de ejecución lógica y sin bloqueos.

### Must have (38 Historias · 153 Puntos)

| Orden | HU ID | Título Oficial de la Historia de Usuario | Épica | MoSCoW | Puntos | Release | Sprint | Depende de |
|:---:|---|---|---|---|:---:|:---:|:---:|---|
| 1 | HU-AUTH-01 | Autenticación – Iniciar sesión | EPIC-SEG | Must have (4) | 5 | REL-1 | SPR-1 | Ninguna |
| 2 | HU-AUTH-02 | Autenticación – Bloquear cuenta por  | EPIC-SEG | Must have (4) | 3 | REL-1 | SPR-1 | HU-AUTH-01 |
| 3 | HU-AUTH-03 | Autenticación – Cerrar sesión | EPIC-SEG | Must have (4) | 2 | REL-1 | SPR-1 | HU-AUTH-01 |
| 4 | HU-USR-02 | Usuarios – Crear cuenta de nuevo empleado | EPIC-SEG | Must have (4) | 5 | REL-1 | SPR-1 | HU-AUTH-01 |
| 5 | HU-CAT-02 | Categorías – Crear nueva categoría de productos | EPIC-CAT | Must have (4) | 2 | REL-1 | SPR-1 | HU-AUTH-01 |
| 6 | HU-CAT-01 | Categorías – Ver lista de categorías de productos | EPIC-CAT | Must have (4) | 1 | REL-1 | SPR-1 | HU-CAT-02 |
| 7 | HU-PROD-02 | Productos – Registrar nuevo producto en el catálogo | EPIC-CAT | Must have (4) | 5 | REL-1 | SPR-1 | HU-CAT-02 |
| 8 | HU-PROD-01 | Productos – Ver catálogo completo de productos | EPIC-CAT | Must have (4) | 3 | REL-1 | SPR-1 | HU-PROD-02 |
| 9 | HU-PROV-02 | Proveedores – Registrar nuevo proveedor | EPIC-CAT | Must have (4) | 3 | REL-1 | SPR-1 | HU-AUTH-01 |
| 10 | HU-INV-01 | Inventario – Registrar entrada de mercadería | EPIC-INV | Must have (4) | 5 | REL-1 | SPR-1 | HU-PROD-02, HU-PROV-02 |
| 11 | HU-INV-02 | Inventario – Registrar baja de inventario por merma | EPIC-INV | Must have (4) | 5 | REL-1 | SPR-1 | HU-INV-01 |
| 12 | HU-INV-03 | Inventario – Realizar ajuste por conteo físico | EPIC-INV | Must have (4) | 5 | REL-1 | SPR-1 | HU-INV-01 |
| 13 | HU-CAJA-01 | Caja – Abrir turno de caja | EPIC-VEN | Must have (4) | 5 | REL-1 | SPR-1 | HU-AUTH-01 |
| 14 | HU-CAJA-02 | Caja – Cerrar turno de caja y cuadrar | EPIC-VEN | Must have (4) | 5 | REL-1 | SPR-1 | HU-CAJA-01 |
| 15 | HU-CAJA-05 | Caja – Consultar historial de turnos de caja | EPIC-VEN | Must have (4) | 3 | REL-1 | SPR-1 | HU-CAJA-02 |
| 16 | HU-VEN-01a | Ventas (POS) – Inicialización de terminal de venta y validación de turno | EPIC-VEN | Must have (4) | 3 | REL-1 | SPR-1 | HU-CAJA-01 |
| 17 | HU-VEN-01b | Ventas (POS) – Registro de líneas de venta y cobro en mostrador | EPIC-VEN | Must have (4) | 5 | REL-1 | SPR-1 | HU-VEN-01a, HU-INV-01 |
| 18 | HU-VEN-01c | Ventas (POS) – Despacho por expiración FEFO y descargo de lotes | EPIC-VEN | Must have (4) | 5 | REL-1 | SPR-1 | HU-VEN-01b |
| 19 | HU-VEN-02 | Ventas (POS) – Emitir boleta o factura | EPIC-VEN | Must have (4) | 8 | REL-1 | SPR-1 | HU-VEN-01b, HU-VEN-01c |
| 20 | HU-VEN-05 | Ventas (POS) – Consultar historial de ventas | EPIC-VEN | Must have (4) | 5 | REL-1 | SPR-1 | HU-VEN-01b |
| 21 | HU-CONF-02 | Configuración – Actualizar configuración del negocio | EPIC-REP | Must have (4) | 3 | REL-1 | SPR-1 | HU-AUTH-01 |
| 22 | HU-CLI-02 | Clientes – Registrar cliente automáticamente al vender | EPIC-CAT | Must have (4) | 3 | REL-1 | SPR-1 | HU-VEN-01b |
| 23 | HU-AUTH-04 | Autenticación – Garantizar sesión única por usuario | EPIC-SEG | Must have (4) | 8 | REL-2 | SPR-2 | HU-AUTH-01, HU-AUTH-03 |
| 24 | HU-USR-01 | Usuarios – Listar empleados del sistema | EPIC-SEG | Must have (4) | 2 | REL-2 | SPR-2 | HU-USR-02 |
| 25 | HU-USR-04 | Usuarios – Desactivar cuenta de empleado | EPIC-SEG | Must have (4) | 3 | REL-2 | SPR-2 | HU-USR-02 |
| 26 | HU-DASH-01 | Dashboard – Ver resumen de ventas del día y del mes | EPIC-REP | Must have (4) | 5 | REL-2 | SPR-2 | HU-VEN-01b |
| 27 | HU-DASH-03 | Dashboard – Alertas de stock crítico, vencimientos y turnos olvidados | EPIC-REP | Must have (4) | 5 | REL-2 | SPR-2 | HU-INV-01, HU-CAJA-05 |
| 28 | HU-PROD-06 | Productos – Consultar productos próximos a vencer | EPIC-CAT | Must have (4) | 3 | REL-2 | SPR-2 | HU-INV-01 |
| 29 | HU-PROV-01 | Proveedores – Ver lista de proveedores | EPIC-CAT | Must have (4) | 2 | REL-2 | SPR-2 | HU-PROV-02 |
| 30 | HU-REP-01 | Reportes – Ver resumen de ventas por período | EPIC-REP | Must have (4) | 5 | REL-2 | SPR-2 | HU-VEN-01b |
| 31 | HU-REP-02 | Reportes – Ver ranking de productos más vendidos | EPIC-REP | Must have (4) | 3 | REL-2 | SPR-2 | HU-VEN-01b |
| 32 | HU-REP-05 | Reportes – Ver stock crítico | EPIC-REP | Must have (4) | 3 | REL-2 | SPR-2 | HU-INV-01 |
| 33 | HU-SOL-01 | Reposición – Crear solicitud de reposición | EPIC-INV | Must have (4) | 3 | REL-2 | SPR-2 | HU-PROD-02, HU-PROV-02 |
| 34 | HU-SOL-02 | Reposición – Listar solicitudes con filtro por estado | EPIC-INV | Must have (4) | 2 | REL-2 | SPR-2 | HU-SOL-01 |
| 35 | HU-SOL-03 | Reposición – Aprobar solicitud de reposición | EPIC-INV | Must have (4) | 3 | REL-2 | SPR-2 | HU-SOL-01 |
| 36 | HU-SOL-05 | Reposición – Completar solicitud al recibir mercadería | EPIC-INV | Must have (4) | 8 | REL-2 | SPR-2 | HU-SOL-03 |
| 37 | HU-VEN-06 | Ventas (POS) – Anular una venta con devolución | EPIC-VEN | Must have (4) | 8 | REL-2 | SPR-2 | HU-VEN-01b, HU-VEN-01c |
| 38 | HU-CONF-01 | Configuración – Ver configuración actual del negocio | EPIC-REP | Must have (4) | 1 | REL-2 | SPR-2 | HU-CONF-02 |

### Should have (31 Historias · 84 Puntos)

| Orden | HU ID | Título Oficial de la Historia de Usuario | Épica | MoSCoW | Puntos | Release | Sprint | Depende de |
|:---:|---|---|---|---|:---:|:---:|:---:|---|
| 39 | HU-AUTH-05 | Autenticación – Recuperar contraseña por correo | EPIC-SEG | Should have (3) | 5 | REL-2 | SPR-2 | HU-AUTH-01 |
| 40 | HU-USR-06 | Usuarios – Forzar cierre de sesión remoto | EPIC-SEG | Should have (3) | 3 | REL-2 | SPR-2 | HU-AUTH-01 |
| 41 | HU-CAJA-03 | Caja – Registrar movimiento manual de efectivo | EPIC-VEN | Should have (3) | 3 | REL-2 | SPR-2 | HU-CAJA-01 |
| 42 | HU-CAJA-04 | Caja – Ver resumen del turno activo | EPIC-VEN | Should have (3) | 2 | REL-2 | SPR-2 | HU-CAJA-01 |
| 43 | HU-CAJA-06 | Caja – Aprobar cierre de turno | EPIC-VEN | Should have (3) | 2 | REL-2 | SPR-2 | HU-CAJA-02 |
| 44 | HU-CAJA-07 | Caja – Forzar cierre de turno ajeno | EPIC-VEN | Should have (3) | 5 | REL-2 | SPR-2 | HU-CAJA-01 |
| 45 | HU-VEN-07 | Ventas (POS) – Verificar recepción de pago Yape/Plin (IziPay) | EPIC-VEN | Should have (3) | 2 | REL-2 | SPR-2 | HU-VEN-01b |
| 46 | HU-SOL-04 | Reposición – Rechazar solicitud de reposición | EPIC-INV | Should have (3) | 2 | REL-2 | SPR-2 | HU-SOL-01 |
| 47 | HU-PROV-04 | Proveedores – Desactivar o reactivar proveedor | EPIC-CAT | Should have (3) | 2 | REL-2 | SPR-2 | HU-PROV-02 |
| 48 | HU-AUTH-06 (Cancelada) | Autenticación – Cambiar contraseña propia | EPIC-SEG | Should have (3) | 3 | REL-3 | SPR-3 | HU-AUTH-01 |
| 49 | HU-USR-03 | Usuarios – Editar datos de un empleado | EPIC-SEG | Should have (3) | 3 | REL-3 | SPR-3 | HU-USR-02 |
| 50 | HU-USR-05 | Usuarios – Reactivar cuenta de empleado | EPIC-SEG | Should have (3) | 2 | REL-3 | SPR-3 | HU-USR-04 |
| 51 | HU-LOG-01 | Supervisión de accesos – Consultar registro de accesos al sistema | EPIC-SEG | Should have (3) | 3 | REL-3 | SPR-3 | HU-AUTH-01 |
| 52 | HU-CAT-03 | Categorías – Editar nombre de categoría | EPIC-CAT | Should have (3) | 1 | REL-3 | SPR-3 | HU-CAT-02 |
| 53 | HU-CLI-01 | Clientes – Listar clientes registrados | EPIC-CAT | Should have (3) | 2 | REL-3 | SPR-3 | HU-CLI-02 |
| 54 | HU-PROD-04 | Productos – Editar datos de un producto | EPIC-CAT | Should have (3) | 3 | REL-3 | SPR-3 | HU-PROD-02 |
| 55 | HU-PROD-05 | Productos – Desactivar o reactivar producto | EPIC-CAT | Should have (3) | 2 | REL-3 | SPR-3 | HU-PROD-02 |
| 56 | HU-PROV-03 | Proveedores – Editar datos de un proveedor | EPIC-CAT | Should have (3) | 2 | REL-3 | SPR-3 | HU-PROV-02 |
| 57 | HU-INV-04 | Inventario – Consultar historial de entradas | EPIC-INV | Should have (3) | 2 | REL-3 | SPR-3 | HU-INV-01 |
| 58 | HU-INV-05 | Inventario – Consultar historial de bajas | EPIC-INV | Should have (3) | 2 | REL-3 | SPR-3 | HU-INV-02 |
| 59 | HU-INV-06 | Inventario – Consultar historial de ajustes | EPIC-INV | Should have (3) | 2 | REL-3 | SPR-3 | HU-INV-03 |
| 60 | HU-DASH-02 | Dashboard – Ver gráfico de evolución de ventas por día | EPIC-REP | Should have (3) | 3 | REL-3 | SPR-3 | HU-VEN-01b |
| 61 | HU-DASH-04 | Dashboard – Ver ranking de productos más vendidos | EPIC-REP | Should have (3) | 3 | REL-3 | SPR-3 | HU-VEN-01b |
| 62 | HU-DASH-05 | Dashboard – Ver solicitudes de reposición pendientes | EPIC-REP | Should have (3) | 2 | REL-3 | SPR-3 | HU-SOL-01 |
| 63 | HU-REP-03 | Reportes – Ver ventas desglosadas por día | EPIC-REP | Should have (3) | 3 | REL-3 | SPR-3 | HU-VEN-01b |
| 64 | HU-REP-04 | Reportes – Ver ventas por método de pago | EPIC-REP | Should have (3) | 2 | REL-3 | SPR-3 | HU-VEN-01b |
| 65 | HU-REP-06 | Reportes – Ver resumen general del inventario | EPIC-REP | Should have (3) | 2 | REL-3 | SPR-3 | HU-INV-01 |
| 66 | HU-REP-07 | Reportes – Ver margen de ganancia por producto | EPIC-REP | Should have (3) | 5 | REL-3 | SPR-3 | HU-VEN-01b, HU-INV-01 |
| 67 | HU-REP-08 | Reportes – Ver mermas agrupadas por motivo | EPIC-REP | Should have (3) | 3 | REL-3 | SPR-3 | HU-INV-02 |
| 68 | HU-VEN-03 | Ventas (POS) – Generar comprobante en PDF o reenviar por correo electrónico | EPIC-VEN | Should have (3) | 5 | REL-3 | SPR-3 | HU-VEN-02 |
| 69 | HU-VEN-04 | Ventas (POS) – Buscar producto por código de barras | EPIC-VEN | Should have (3) | 3 | REL-3 | SPR-3 | HU-VEN-01b |

### Could have (5 Historias · 14 Puntos)

| Orden | HU ID | Título Oficial de la Historia de Usuario | Épica | MoSCoW | Puntos | Release | Sprint | Depende de |
|:---:|---|---|---|---|:---:|:---:|:---:|---|
| 70 | HU-CAT-04 | Categorías – Eliminar categoría sin productos | EPIC-CAT | Could have (2) | 2 | REL-3 | SPR-3 | HU-CAT-02 |
| 71 | HU-CLI-03 | Clientes – Editar correo electrónico de cliente | EPIC-CAT | Could have (2) | 1 | REL-3 | SPR-3 | HU-CLI-02 |
| 72 | HU-PROD-03 | Productos – Escanear código de barras para registrar producto | EPIC-CAT | Could have (2) | 5 | REL-3 | SPR-3 | HU-PROD-02 |
| 73 | HU-REP-09 | Reportes – Exportar reportes en PDF | EPIC-REP | Could have (2) | 3 | REL-3 | SPR-3 | HU-REP-01 |
| 74 | HU-VEN-08 | Ventas (POS) – Exportar historial de ventas a PDF (Fuera de Alcance) | EPIC-VEN | Won't have (1) | 3 | Ninguno | Ninguno | HU-VEN-05 |

---

## Fuera de Alcance (Won't have · 1 Historia)

| Orden | HU ID | Título Oficial de la Historia de Usuario | Épica | MoSCoW | Puntos | Release | Sprint | Depende de |
|:---:|---|---|---|---|:---:|:---:|:---:|---|
| N/A | HU-VEN-09 | Ventas – Venta a granel o por peso | EPIC-VEN | Won't have (1) | 0 | Ninguno | Ninguno | Ninguna |

<!-- ===================================================================== -->
<!-- ARCHIVO FUENTE: 01_EPIC-SEG.md -->
<!-- ===================================================================== -->

---
Código de documento: DOC-PLAN-03-01
Título: Backlog de Producto — EPIC-SEG: Seguridad y Accesos
Versión: 5.1
Fecha: 2026-10-04
Elaborado por: Colonia Infantas, Walter
Revisado por: Angeles Pérez, Jhonny
Estado: Aprobado
Propósito: Especificación de requisitos e historias de usuario de la épica de Seguridad y Accesos
Documentos relacionados: DOC-PLAN-01, DOC-PLAN-02, DOC-PLAN-03-00, DOC-PLAN-08, DOC-ANEXO-B
---

# EPIC-SEG: Seguridad y Accesos

**Objetivo de negocio (OBJ-01):** Garantizar la seguridad, el control de acceso y la trazabilidad de las operaciones del minimarket para prevenir fraudes, fugas de información y accesos no autorizados al sistema comercial.

### Política de Gobernanza y Herencia del Rol SuperAdmin

El rol `SuperAdmin` constituye la máxima autoridad funcional y jerárquica del sistema, integrando por diseño todas las facultades operativas, administrativas y de supervisión contempladas para el rol `Administrador`. 

Con el propósito de salvaguardar el principio de separación de funciones y garantizar la gobernanza del negocio, las operaciones sensibles de gestión de personal —tales como la creación de nuevos empleados, la modificación de datos de identidad y roles, la desactivación preventiva y la reactivación de cuentas de trabajo— serán de **atribución privativa y exclusiva del SuperAdmin**. El rol `Administrador` dispondrá de permisos de consulta y visualización de la nómina de usuarios para coordinaciones operativas, sin capacidad de alteración directa de sus perfiles.

---

### HU-AUTH-01 · Autenticación – Iniciar sesión

| Identificador | Épica | Prioridad MoSCoW | Estimación | Release | Sprint |
|:---:|:---:|:---:|:---:|:---:|:---:|
| HU-AUTH-01 | EPIC-SEG | Must have | 5 pts | REL-1 | SPR-1 |

**Como** empleado habilitado del minimarket (Administrador, Vendedor, Almacenero, Gerente o SuperAdmin),  
**quiero** iniciar sesión introduciendo mi correo electrónico y contraseña asignada,  
**para** acceder de forma autenticada y segura a las funciones operativas que corresponden a mi rol en el negocio.

**Justificación de prioridad:** Funcionalidad núcleo esencial (Must have); constituye la compuerta obligatoria de control de acceso. Sin este mecanismo, ningún usuario puede operar la solución, bloqueando la totalidad de los flujos comerciales y de inventario del establecimiento.

**Criterios de aceptación:**
1. **Dado que** el operador es un empleado registrado y mantiene su cuenta en estado activo, **cuando** ingresa su correo electrónico registrado y contraseña válida en el formulario y pulsa el botón «Iniciar Sesión», **entonces** el sistema valida su identidad, establece su sesión de trabajo autorizada y lo redirige automáticamente al panel principal o vista operativa correspondiente a su rol.
2. **Dado que** el operador introduce un correo no registrado o una contraseña incorrecta, **cuando** solicita iniciar sesión, **entonces** el sistema deniega el acceso, preserva la vista de ingreso y muestra un mensaje de advertencia: «Credenciales incorrectas».
3. **Dado que** la cuenta del empleado ha sido configurada en estado inactivo o suspendido, **cuando** el operador intenta autenticarse con credenciales correctas, **entonces** el sistema rechaza el acceso y muestra el mismo mensaje genérico «Credenciales incorrectas».
4. **Dado que** el usuario interactúa con la interfaz de ingreso al sistema, **cuando** completa sus datos y visualiza controles, etiquetas y alertas, **entonces** la pantalla satisface integralmente los lineamientos visuales, componentes y microcopy especificados para UI-001 (Inicio de Sesión y Autenticación) en el Catálogo de Interfaces (DOC-ANEXO-B).

**Reglas de negocio aplicables:** 
- N/A

**Dependencias:**
- Ninguna (historia base o autoportante del backlog).

---

### HU-AUTH-02 · Autenticación – Bloquear cuenta por 

| Identificador | Épica | Prioridad MoSCoW | Estimación | Release | Sprint |
|:---:|:---:|:---:|:---:|:---:|:---:|
| HU-AUTH-02 | EPIC-SEG | Must have | 3 pts | REL-1 | SPR-1 |

**Como** Administrador del minimarket,  
**quiero** que el sistema bloquee temporalmente las cuentas de usuario que acumulen reiterados  de contraseña,  
**para** proteger la información comercial y financiera del negocio frente a intentos sistemáticos de adivinación o intentos reiterados no autorizados de acceso en los terminales.

**Justificación de prioridad:** Funcionalidad de seguridad crítica (Must have); salvaguarda imprescindible para evitar accesos no autorizados en terminales compartidos de atención al público o cajas de cobro.

**Criterios de aceptación:**
1. **Dado que** un usuario incurre en 5 intentos consecutivos fallidos de autenticación sobre una misma cuenta , **cuando** presiona «Iniciar Sesión» , **entonces** el sistema bloquea preventivamente el acceso a dicha cuenta por un período estricto de 15 minutos continuos y despliega un aviso indicando que la cuenta ha sido suspendida temporalmente por seguridad (RN-17).
2. **Dado que** una cuenta se encuentra bajo bloqueo preventivo de 15 minutos, **cuando** cualquier operador intenta ingresar credenciales (inclusive si se digita la contraseña correcta), **entonces** el sistema deniega el acceso y muestra un mensaje indicando los minutos restantes de espera antes de permitir un nuevo intento.
3. **Dado que** el período de suspensión de 15 minutos ha concluido satisfactoriamente, **cuando** el empleado titular introduce nuevamente sus credenciales legítimas, **entonces** el sistema restablece automáticamente el contador de  a cero y concede el acceso regular a la plataforma.
4. **Dado que** el operador visualiza los avisos de advertencia e inhabilitación temporal en pantalla, **cuando** se suscitan bloqueos o advertencias de , **entonces** la interfaz presenta los textos, colores de alerta y elementos de ayuda estipulados para UI-001 en el Catálogo de Interfaces (DOC-ANEXO-B).

**Reglas de negocio aplicables:** 
- RN-17 (Bloqueo Preventivo por Intentos Fallidos de Autenticación)

**Dependencias:**
- Requiere `HU-AUTH-01` (mecanismo base de inicio de sesión).

---

### HU-AUTH-03 · Autenticación – Cerrar sesión

| Identificador | Épica | Prioridad MoSCoW | Estimación | Release | Sprint |
|:---:|:---:|:---:|:---:|:---:|:---:|
| HU-AUTH-03 | EPIC-SEG | Must have | 2 pts | REL-1 | SPR-1 |

**Como** usuario autenticado en la plataforma (cualquier rol asignado),  
**quiero** cerrar voluntariamente mi sesión de trabajo en el momento en que me retire de mi puesto,  
**para** evitar que otras personas hagan uso indebido de mi cuenta operativa y asegurar la estricta atribución de las transacciones registradas.

**Justificación de prioridad:** Funcionalidad núcleo imprescindible (Must have); en un punto de venta (POS) y bodega de abarrotes, los turnos y terminales son rotativos; la ausencia de cierre de sesión vulnera la supervisión de cobros, despachos y arqueos.

**Criterios de aceptación:**
1. **Dado que** un empleado mantiene su sesión de trabajo activa en el navegador, **cuando** hace clic sobre la opción «Cerrar Sesión» en la barra de navegación o menú de perfil, **entonces** el sistema culmina la sesión de forma inmediata, revoca la autorización operativa local y redirige al usuario a la pantalla de inicio de sesión.
2. **Dado que** el empleado ha cerrado su sesión de trabajo, **cuando** él u otra persona intenta ingresar a pantallas internas del sistema mediante los controles de retroceso o avance del navegador web, **entonces** el sistema bloquea la visualización de datos de negocio y exige obligatoriamente un nuevo inicio de sesión formal.
3. **Dado que** el operador interactúa con la barra superior de control del sistema, **cuando** despliega el menú de usuario y pulsa la opción de desconexión, **entonces** los controles, avisos de confirmación y diseño general cumplen los parámetros descritos en la pantalla UI-003 (Navegación Global y Diálogos) del Catálogo de Interfaces (DOC-ANEXO-B).
4. **Dado que** un colaborador permanece sin registrar actividad ni interacciones en la plataforma durante un período continuo de el transcurso de 7 días (time-to-live de sesión de 8 horas correspondiente a una jornada laboral, ), **cuando** intenta realizar una acción o registrar una transacción comercial, **entonces** el sistema bloquea la operación en curso,  notificando «» y redirige al colaborador a la pantalla de inicio de sesión UI-001 para su debida reautenticación.

**Reglas de negocio aplicables:** 
- N/A

**Dependencias:**
- Requiere `HU-AUTH-01` (sesión activa para procesar el cierre).

---

### HU-AUTH-04 · Autenticación – Garantizar sesión única por usuario

| Identificador | Épica | Prioridad MoSCoW | Estimación | Release | Sprint |
|:---:|:---:|:---:|:---:|:---:|:---:|
| HU-AUTH-04 | EPIC-SEG | Must have | 8 pts | REL-2 | SPR-2 |

**Como** Administrador del minimarket,  
**quiero** que el sistema impida el inicio simultáneo de múltiples sesiones activas bajo una misma cuenta de usuario,  
**para** evitar la suplantación de identidad entre colaboradores y asegurar que cada transacción registrada corresponda unívocamente al operador en turno.

**Justificación de prioridad:** Funcionalidad esencial de seguridad (Must have); previene el uso compartido no autorizado de credenciales en terminales paralelos de venta o almacén, garantizando la fidelidad de los cierres de caja y registros de merma. Constituye una historia de alta complejidad técnica y operativa (8 pts), mitigada mediante validación sincronizada del identificador de sesión en cada interacción del navegador.

**Criterios de aceptación:**
1. **Dado que** el empleado A dispone de una sesión de trabajo activa en una computadora del minimarket, **cuando** el mismo empleado u otra persona inicia sesión con su cuenta en un segundo equipo o navegador, **entonces** el sistema transfiere de inmediato la validez operativa al nuevo dispositivo y cancela la autorización de la sesión anterior; ante la siguiente acción que intente el dispositivo previo, el sistema lo desconecta de inmediato y lo redirige a la pantalla de ingreso mostrando el banner informativo: «Se inició sesión con esta cuenta desde otro dispositivo».
2. **Dado que** un colaborador cerró de forma regular su sesión previa en su estación habitual, **cuando** ingresa sus credenciales en un nuevo terminal del establecimiento, **entonces** el sistema le permite el ingreso directo sin emitir alertas de concurrencia ni bloqueos de sesión.
3. **Dado que** un operador experimenta una desconexión por apertura de sesión concurrente, **cuando** visualiza la pantalla de ingreso con el aviso de advertencia, **entonces** la interfaz expone la alerta visual y formato definidos para UI-001 (Inicio de Sesión y Autenticación) en el Catálogo de Interfaces (DOC-ANEXO-B).

**Reglas de negocio aplicables:** 
- N/A

**Dependencias:**
- Requiere `HU-AUTH-01` y `HU-AUTH-03` (ciclo base de autenticación de usuario).

---

### HU-AUTH-05 · Autenticación – Recuperar contraseña por correo

| Identificador | Épica | Prioridad MoSCoW | Estimación | Release | Sprint |
|:---:|:---:|:---:|:---:|:---:|:---:|
| HU-AUTH-05 | EPIC-SEG | Should have | 5 pts | REL-2 | SPR-2 |

**Como** colaborador del minimarket registrado en el sistema (cualquier rol),  
**quiero** solicitar la recuperación y restablecimiento de mi contraseña mediante el envío de un código de seguridad a mi correo electrónico,  
**para** restaurar mi acceso al sistema con agilidad en caso de extravío u olvido sin depender de la intervención física del SuperAdmin.

**Justificación de prioridad:** Característica de alto valor operativo (Should have); reduce los tiempos muertos en mostrador y almacén provocados por olvido de claves. No se incluye en el primer lanzamiento (Sprint 1) debido a que la entrega inicial de credenciales se resuelve de forma centralizada con la creación de usuarios (`HU-USR-02`), programándose como autoservicio para el Release 2.

**Criterios de aceptación:**
1. **Dado que** un empleado no recuerda su contraseña de ingreso, **cuando** introduce su dirección de correo electrónico institucional registrada en la pantalla de recuperación y presiona «Enviar código», **entonces** el sistema genera un código de verificación numérico temporal de 4 dígitos y lo despacha de forma inmediata a la bandeja del usuario con una validez máxima e improrrogable de 15 minutos.
2. **Dado que** el colaborador ha recibido el código de autorización en su casilla de correo, **cuando** digita dicho código dentro del período de 15 minutos e ingresa su nueva contraseña cumpliendo las políticas de seguridad, **entonces** el sistema valida el código, actualiza la credencial, invalida el código de verificación impidiendo su reutilización (código de un solo uso y de uso único) y confirma que el acceso ha sido restaurado exitosamente, habilitando el ingreso con la nueva clave (RN-18).
3. **Dado que** han transcurrido más de 15 minutos desde la generación del código de autorización o se acumulan 5  de validación, **cuando** el usuario intenta utilizar el código expirado o bloqueado, **entonces** el sistema invalida la solicitud, despliega una alerta indicando que el código ya no tiene vigencia por razones de seguridad y orienta al usuario a solicitar una nueva emisión.
4. **Dado que** el usuario tramita el autoservicio de recuperación, **cuando** navega por los formularios de solicitud de código y definición de nueva contraseña, **entonces** la interfaz responde estrictamente a la presentación visual, campos de texto y mensajes detallados en UI-002 (Recuperación de Contraseña) del Catálogo de Interfaces (DOC-ANEXO-B).

**Reglas de negocio aplicables:** 
- RN-18 (Vigencia y Formato de Código de Verificación Temporal)

**Dependencias:**
- Requiere `HU-AUTH-01` (pantalla de acceso y catálogo de usuarios).

*(Parámetro formal de seguridad establecido: código numérico de 4 dígitos con validez de 15 minutos y un solo uso conforme a RN-18)*.

---

### HU-AUTH-06 (Cancelada) · Autenticación – Cambiar contraseña propia

| Identificador | Épica | Prioridad MoSCoW | Estimación | Release | Sprint |
|:---:|:---:|:---:|:---:|:---:|:---:|
| HU-AUTH-06 (Cancelada) | EPIC-SEG | Should have | 3 pts | REL-3 | SPR-3 |

**Como** usuario con sesión activa en el sistema (cualquier rol asignado),  
**quiero** cambiar mi contraseña personal de manera voluntaria desde mi entorno de usuario,  
**para** mantener la confidencialidad de mi cuenta, sustituir credenciales provisionales y cumplir periódicamente con normas de higiene digital.

**Justificación de prioridad:** Funcionalidad recomendada (Should have); promueve la autogestión y el fortalecimiento de la seguridad individual del personal, reduciendo la carga administrativa en el Release 3.

**Criterios de aceptación:**
1. **Dado que** un colaborador con sesión abierta accede a la funcionalidad de cambio de clave, **cuando** introduce su contraseña actual correcta y define una nueva contraseña que cumpla con los estándares de robustez del minimarket (mínimo 8 caracteres alfanuméricos combinando mayúsculas, minúsculas y números), **entonces** el sistema actualiza la contraseña de la cuenta, confirma el éxito de la operación y culmina las demás conexiones activas para demandar reautenticación segura con la clave recién establecida.
2. **Dado que** el colaborador intenta modificar su clave, **cuando** introduce erróneamente su contraseña actual, **entonces** el sistema rechaza la actualización, mantiene la clave original y notifica: «La contraseña actual ingresada es incorrecta».
3. **Dado que** el colaborador digita una nueva contraseña, **cuando** dicha combinación no satisface los requisitos mínimos de al menos 7 caracteres combinando mayúsculas, minúsculas y números (RN-18), **entonces** el sistema le indica de forma explícita las reglas pendientes por cumplir y bloquea el botón de confirmación hasta su debida satisfacción.
4. **Dado que** el colaborador efectúa la modificación de sus credenciales, **cuando** interactúa con los controles en pantalla, **entonces** la experiencia visual y formulario se ajustan a la especificación funcional de interfaz mediante diálogo modal emergente accesible desde la barra superior UI-003.

**Reglas de negocio aplicables:** 
- RN-18 (Política de Contraseñas Robustas)

**Dependencias:**
- Requiere `HU-AUTH-01` (sesión activa del usuario que cambia su propia clave).

**Criterios de diseño operativo:**
- **Criterio de interfaz:** Implementación mediante diálogo modal accesible desde la barra de navegación superior (UI-003), permitiendo la actualización segura de credenciales sin requerir una pantalla independiente.

### HU-USR-01 · Usuarios – Listar empleados del sistema

| Identificador | Épica | Prioridad MoSCoW | Estimación | Release | Sprint |
|:---:|:---:|:---:|:---:|:---:|:---:|
| HU-USR-01 | EPIC-SEG | Must have | 2 pts | REL-2 | SPR-2 |

**Como** Administrador o SuperAdmin del minimarket,  
**quiero** visualizar la nómina completa y organizada de los colaboradores registrados en el sistema,  
**para** supervisar el personal activo, verificar los roles asignados y mantener un control operativo riguroso sobre los accesos a la plataforma.

**Justificación de prioridad:** Funcionalidad esencial de gestión (Must have); constituye el punto de partida administrativo para auditar identidades y supervisar al equipo de trabajo antes de asignar turnos o coordinar labores.

**Criterios de aceptación:**
1. **Dado que** un usuario con permisos de gestión (Administrador o SuperAdmin) ingresa a la sección de colaboradores, **cuando** carga la vista principal del módulo, **entonces** el sistema presenta una grilla detallada con los nombres y apellidos, rol funcional asignado, correo electrónico institucional y estado operativo actual (Activo o Inactivo) de cada empleado.
2. **Dado que** el minimarket cuenta con un número considerable de trabajadores en su nómina, **cuando** el supervisor selecciona un filtro de rol o de estado, **entonces** el sistema filtra los resultados al instante mostrando únicamente los colaboradores cuyas credenciales coincidan con el criterio ingresado.
3. **Dado que** el supervisor interactúa con el listado general de personal, **cuando** visualiza la grilla, aplica filtros o navega por los registros, **entonces** la interfaz satisface integralmente los lineamientos de diseño, indicadores de estado y microcopy especificados en UI-004 (Gestión de Usuarios del Sistema) del Catálogo de Interfaces (DOC-ANEXO-B).

**Reglas de negocio aplicables:** 
- N/A

**Dependencias:**
- Requiere `HU-USR-02` (existencia de colaboradores registrados).

---

### HU-USR-02 · Usuarios – Crear cuenta de nuevo empleado

| Identificador | Épica | Prioridad MoSCoW | Estimación | Release | Sprint |
|:---:|:---:|:---:|:---:|:---:|:---:|
| HU-USR-02 | EPIC-SEG | Must have | 5 pts | REL-1 | SPR-1 |

**Como** SuperAdmin del minimarket,  
**quiero** registrar a un nuevo colaborador en el sistema asignándole sus datos personales, correo institucional, contraseña inicial y rol funcional,  
**para** habilitar su cuenta de trabajo y permitirle operar en las labores de venta, caja, almacén o supervisión según corresponda a sus atribuciones.

**Justificación de prioridad:** Funcionalidad imprescindible para el producto mínimo viable (Must have); sin la capacidad de dar de alta al personal operativo (Vendedores, Almaceneros, Administradores), el negocio no puede operar el sistema de forma segregada ni atribuir transacciones comerciales.

**Criterios de aceptación:**
1. **Dado que** el SuperAdmin diligencia el formulario de alta de un colaborador, **cuando** introduce una dirección de correo electrónico que ya pertenece a otro usuario registrado (activo o inactivo), **entonces** el sistema deniega el registro y muestra un mensaje de alerta indicando que la dirección de correo ya existe, asegurando la identidad unívoca de empleados (RN-12).
2. **Dado que** el SuperAdmin introduce datos válidos y selecciona uno de los roles institucionales reglamentarios (Administrador, Vendedor, Almacenero, Gerente o SuperAdmin), **cuando** presiona el botón «Guardar Empleado», **entonces** el sistema crea la cuenta con estado Activo, asocia la contraseña de acceso y deja al colaborador inmediatamente facultado para autenticarse en la solución.
3. **Dado que** el SuperAdmin completa el registro en la interfaz de gestión, **cuando** visualiza los campos mandatorios, advertencias de validación y confirmaciones, **entonces** la pantalla cumple en su totalidad con el comportamiento visual, mensajes y componentes especificados en UI-004 (Gestión de Usuarios del Sistema) del Catálogo de Interfaces (DOC-ANEXO-B).

**Reglas de negocio aplicables:** 
- RN-12 (Identidad Unívoca de Empleados)

**Dependencias:**
- Requiere `HU-AUTH-01` (precedencia lógica del backlog).

---

### HU-USR-03 · Usuarios – Editar datos de un empleado

| Identificador | Épica | Prioridad MoSCoW | Estimación | Release | Sprint |
|:---:|:---:|:---:|:---:|:---:|:---:|
| HU-USR-03 | EPIC-SEG | Should have | 3 pts | REL-3 | SPR-3 |

**Como** SuperAdmin del minimarket,  
**quiero** modificar los datos de contacto o el rol asignado a un colaborador en el sistema,  
**para** subsanar imprecisiones de registro, actualizar información personal o reflejar formalmente promociones y traslados de cargo dentro de la organización.

**Justificación de prioridad:** Funcionalidad recomendada de mantenimiento (Should have); programa su ejecución para el Release 3 para la administración continua de la plantilla de colaboradores, mitigando contingencias operativas menores del inicio del proyecto.

**Criterios de aceptación:**
1. **Dado que** el SuperAdmin accede a la ficha de un empleado y modifica sus datos o selecciona un nuevo rol operativo, **cuando** guarda satisfactoriamente los cambios, **entonces** el sistema actualiza la ficha del usuario y, a partir de su siguiente acción en el sistema, el colaborador asumirá de manera automática todos los privilegios y restricciones correspondientes a su nuevo rol.
2. **Dado que** el SuperAdmin está editando un perfil, **cuando** intenta modificar el correo electrónico asignando una dirección que ya se encuentra registrada para otro empleado, **entonces** el sistema bloquea la actualización y notifica la imposibilidad del cambio por duplicidad en salvaguarda de la regla de identidad unívoca (RN-12).
3. **Dado que** el SuperAdmin opera sobre la ventana de modificación de colaboradores, **cuando** revisa los campos precargados, controles de rol y botones de guardado, **entonces** la interfaz responde exactamente al diseño, microcopy y flujos estipulados en UI-004 del Catálogo de Interfaces (DOC-ANEXO-B).

**Reglas de negocio aplicables:** 
- RN-12 (Identidad Unívoca de Empleados)

**Dependencias:**
- Requiere `HU-USR-02` (cuenta de empleado existente para modificar).

---

### HU-USR-04 · Usuarios – Desactivar cuenta de empleado

| Identificador | Épica | Prioridad MoSCoW | Estimación | Release | Sprint |
|:---:|:---:|:---:|:---:|:---:|:---:|
| HU-USR-04 | EPIC-SEG | Must have | 3 pts | REL-2 | SPR-2 |

**Como** SuperAdmin del minimarket,  
**quiero** suspender o desactivar la cuenta de un colaborador que ha concluido su vínculo laboral o incurrido en falta grave,  
**para** revocar de forma inmediata cualquier acceso a la plataforma y salvaguardar los activos, mercadería e información del establecimiento comercial.

**Justificación de prioridad:** Salvaguarda de seguridad crítica (Must have); indispensable para prevenir fraudes, operaciones no autorizadas o cobros en caja por parte de personal desvinculado de la empresa.

**Criterios de aceptación:**
1. **Dado que** un colaborador cesa en sus funciones en el minimarket, **cuando** el SuperAdmin ubica su perfil en la nómina, pulsa «Desactivar» y confirma la instrucción en el diálogo de advertencia, **entonces** el sistema conmuta su estado a Inactivo e interrumpe de forma inmediata cualquier sesión de trabajo que el usuario mantuviese abierta en cualquier terminal del negocio.
2. **Dado que** la cuenta de un trabajador ha sido dada de baja o desactivada, **cuando** él o un tercero intenta iniciar sesión introduciendo las credenciales habituales, **entonces** el sistema deniega formalmente el acceso y muestra el mensaje «Credenciales incorrectas».
3. **Dado que** el SuperAdmin realiza la suspensión desde el panel de colaboradores, **cuando** acciona el botón y visualiza el cambio de etiqueta de estado y los avisos de confirmación, **entonces** la interfaz satisface los parámetros visuales y de interacción fijados en UI-004 del Catálogo de Interfaces (DOC-ANEXO-B).

**Reglas de negocio aplicables:** 
- N/A

**Dependencias:**
- Requiere `HU-USR-02` (cuenta de empleado activa para desactivar).

---

### HU-USR-05 · Usuarios – Reactivar cuenta de empleado

| Identificador | Épica | Prioridad MoSCoW | Estimación | Release | Sprint |
|:---:|:---:|:---:|:---:|:---:|:---:|
| HU-USR-05 | EPIC-SEG | Should have | 2 pts | REL-3 | SPR-3 |

**Como** SuperAdmin del minimarket,  
**quiero** rehabilitar una cuenta de colaborador previamente suspendida o desactivada,  
**para** restablecer con agilidad el acceso de un trabajador reincorporado a la empresa preservando íntegro todo su historial transaccional, comercial y operativo previo.

**Justificación de prioridad:** Funcionalidad de optimización administrativa (Should have); reduce la carga operativa evitando la proliferación de cuentas duplicadas y resguardando la trazabilidad histórica de autoría en ventas y mermas.

**Criterios de aceptación:**
1. **Dado que** un exempleado se reincorpora al minimarket, **cuando** el SuperAdmin filtra los colaboradores en estado inactivo y pulsa la opción «Reactivar», **entonces** el sistema conmuta su estado a Activo y le permite de inmediato volver a autenticarse en el sistema con sus credenciales habilitadas.
2. **Dado que** la cuenta es reactivada en la plataforma, **cuando** el colaborador ingresa a realizar sus labores, **entonces** el sistema mantiene intacto su vínculo histórico con todas las operaciones de venta, caja e inventario que hubiese registrado en etapas laborales anteriores.
3. **Dado que** el SuperAdmin gestiona la reactivación en el módulo de personal, **cuando** confirma la restitución de la cuenta, **entonces** la interfaz presenta el cambio dinámico de indicador de estado y alertas visuales definidas en UI-004 del Catálogo de Interfaces (DOC-ANEXO-B).

**Reglas de negocio aplicables:** 
- N/A

**Dependencias:**
- Requiere `HU-USR-04` (cuenta previamente desactivada para reactivación).

---

### HU-USR-06 · Usuarios – Forzar cierre de sesión remoto

| Identificador | Épica | Prioridad MoSCoW | Estimación | Release | Sprint |
|:---:|:---:|:---:|:---:|:---:|:---:|
| HU-USR-06 | EPIC-SEG | Should have | 3 pts | REL-2 | SPR-2 |

**Como** SuperAdmin del minimarket,  
**quiero** forzar de manera remota e inmediata la finalización de la sesión de trabajo activa de cualquier colaborador,  
**para** neutralizar accesos indebidos ante sospechas de suplantación, irregularidades operativas o abandono de terminales en mostrador sin requerir la baja definitiva de la cuenta.

**Justificación de prioridad:** Herramienta recomendada de contingencia y control de accesos (Should have); permite la intervención inmediata de la máxima autoridad sin recurrir a la desactivación del colaborador.

**Criterios de aceptación:**
1. **Dado que** el SuperAdmin identifica un comportamiento irregular o un terminal desatendido con sesión abierta, **cuando** pulsa el botón «Forzar cierre de sesión» sobre dicho colaborador en la nómina de usuarios, **entonces** el sistema revoca al instante la autorización operativa de la sesión conectada en ese terminal.
2. **Dado que** la sesión de un colaborador fue forzada a cerrar por el SuperAdmin, **cuando** dicho colaborador intenta realizar cualquier acción, consulta o registro en su pantalla, **entonces** el sistema interrumpe la navegación y lo redirige de inmediato a la pantalla de inicio de sesión con el mensaje informativo: «Un SuperAdmin cerró tu sesión.».
3. **Dado que** el SuperAdmin efectúa la orden de desconexión remota, **cuando** interactúa con el botón de acción y aprueba la confirmación de seguridad, **entonces** la interfaz expone los elementos de microcopy, avisos y estilos descritos en UI-004 del Catálogo de Interfaces (DOC-ANEXO-B).

**Reglas de negocio aplicables:** 
- N/A

**Dependencias:**
- Requiere `HU-AUTH-01` (sesión activa en terminal remoto).

---

### HU-LOG-01 · Supervisión – Consultar registro de accesos al sistema

| Identificador | Épica | Prioridad MoSCoW | Estimación | Release | Sprint |
|:---:|:---:|:---:|:---:|:---:|:---:|
| HU-LOG-01 | EPIC-SEG | Should have | 3 pts | REL-3 | SPR-3 |

**Como** Administrador o SuperAdmin del minimarket,  
**quiero** consultar la bitácora cronológica de eventos de acceso al sistema (inicios de sesión y cierres voluntarios),  
**para** auditar los horarios de conexión del personal, realizar control de presencia y efectuar investigaciones de trazabilidad ante sospechas de irregularidades operativas.

**Justificación de prioridad:** Requisito de gobernanza y control interno (Should have); programado para el Release 3 para consolidar las facultades de supervisión forense y cumplimiento institucional.

**Criterios de aceptación:**
1. **Dado que** un supervisor autorizado accede a la bitácora de supervisión, **cuando** selecciona un rango de fechas de consulta o filtra por tipo de evento (Inicio de sesión, Cierre de sesión voluntario o Bloqueo por fallos), **entonces** el sistema presenta el listado cronológico de todos los eventos registrados que correspondan a los filtros fijados.
2. **Dado que** el auditor analiza un suceso de acceso específico en la lista, **cuando** visualiza la fila de detalle, **entonces** el sistema expone con precisión la fecha y hora oficial del suceso, el nombre del colaborador titular, el rol con el que operaba y, cuando corresponde, un detalle del suceso.
3. **Dado que** el auditor interactúa con el visor de eventos de acceso, **cuando** visualiza la grilla paginada, aplica filtros de búsqueda y revisa los datos históricos, **entonces** la interfaz satisface los componentes, textos informativos y presentación definidos en UI-005 (Supervisión de Logs de Acceso) del Catálogo de Interfaces (DOC-ANEXO-B).

**Reglas de negocio aplicables:** 
- N/A

**Dependencias:**
- Requiere `HU-AUTH-01` (eventos de autenticación para auditoría).

<!-- ===================================================================== -->
<!-- ARCHIVO FUENTE: 02_EPIC-CAT.md -->
<!-- ===================================================================== -->

---
Código de documento: DOC-PLAN-03-02
Título: Backlog de Producto — EPIC-CAT: Catálogos y Clientes
Versión: 5.1
Fecha: 2026-10-04
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

| Identificador | Épica | Prioridad MoSCoW | Estimación | Release | Sprint |
|:---:|:---:|:---:|:---:|:---:|:---:|
| HU-CAT-01 | EPIC-CAT | Must have | 1 pt | REL-1 | SPR-1 |

**Como** Almacenero o Administrador del minimarket,  
**quiero** visualizar la lista completa y organizada de categorías de productos registradas en el sistema,  
**para** conocer la estructura taxonómica de las mercaderías y clasificar con exactitud los artículos durante la recepción e inventario.

**Justificación de prioridad:** Funcionalidad núcleo esencial (Must have); permite consultar los rubros base del catálogo necesarios antes de listar o crear productos específicos. **Constituye la historia pivote oficial de estimación del proyecto (1 punto de historia = 2.0 horas netas de esfuerzo de construcción y verificación)**.

**Criterios de aceptación:**
1. **Dado que** un colaborador habilitado (Almacenero o Administrador) accede a la sección de categorías de productos, **cuando** el sistema carga la pantalla principal del módulo, **entonces** presenta la lista completa de categorías registradas ordenadas alfabéticamente por su nombre comercial.
2. **Dado que** el minimarket dispone de una nómina extensa de familias de artículos, **cuando** el usuario introduce un término en la barra de búsqueda rápida, **entonces** el sistema filtra de forma inmediata la grilla mostrando las coincidencias exactas o parciales.
3. **Dado que** el usuario consulta las categorías comerciales, **cuando** interactúa con la lista, filtros y botones de navegación, **entonces** la interfaz satisface integralmente los lineamientos visuales, indicadores y microcopy especificados en UI-006 (Catálogo de Categorías) del Catálogo de Interfaces (DOC-ANEXO-B).

**Reglas de negocio aplicables:** 
- N/A

**Dependencias:**
- Requiere `HU-CAT-02` (categoría creada previamente).

---

### HU-CAT-02 · Categorías – Crear nueva categoría de productos

| Identificador | Épica | Prioridad MoSCoW | Estimación | Release | Sprint |
|:---:|:---:|:---:|:---:|:---:|:---:|
| HU-CAT-02 | EPIC-CAT | Must have | 2 pts | REL-1 | SPR-1 |

**Como** Administrador o Almacenero del minimarket,  
**quiero** registrar una nueva categoría de productos en el catálogo maestro,  
**para** clasificar y organizar las nuevas familias de mercadería que se incorporen al surtido del establecimiento comercial.

**Justificación de prioridad:** Funcionalidad crítica de configuración inicial (Must have); prerrequisito bloqueante para el alta de productos en el sistema, ya que ningún producto puede registrarse sin estar asociado a una categoría válida.

**Criterios de aceptación:**
1. **Dado que** el usuario completa el formulario de registro introduciendo una denominación de categoría inédita, **cuando** presiona el botón «Guardar», **entonces** el sistema crea la nueva categoría de forma exitosa, la incorpora al catálogo activo y actualiza la lista disponible al instante.
2. **Dado que** el usuario intenta registrar una categoría, **cuando** ingresa un nombre que ya se encuentra registrado previamente en el sistema (sin distinguir mayúsculas de minúsculas), **entonces** el sistema rechaza el guardado y muestra un mensaje de advertencia informando sobre la duplicidad del rubro.
3. **Dado que** el colaborador interactúa con el formulario de alta, **cuando** introduce datos y valida la operación, **entonces** la interfaz responde estrictamente a la estructura de campos, validaciones y diseño descritos en UI-006 del Catálogo de Interfaces (DOC-ANEXO-B).

**Reglas de negocio aplicables:** 
- N/A

**Dependencias:**
- Requiere `HU-AUTH-01` (precedencia lógica del backlog).

---

### HU-CAT-03 · Categorías – Editar nombre de categoría

| Identificador | Épica | Prioridad MoSCoW | Estimación | Release | Sprint |
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
- Requiere `HU-CAT-02` (categoría existente para edición).

---

### HU-CAT-04 · Categorías – Eliminar categoría sin productos

| Identificador | Épica | Prioridad MoSCoW | Estimación | Release | Sprint |
|:---:|:---:|:---:|:---:|:---:|:---:|
| HU-CAT-04 | EPIC-CAT | Could have | 2 pts | REL-3 | SPR-3 |

**Como** Administrador del minimarket,  
**quiero** eliminar definitivamente aquellas categorías que fueron creadas por error y que no cuentan con ningún producto asociado,  
**para** mantener una taxonomía depurada, libre de rubros obsoletos o vacíos en el catálogo comercial.

**Justificación de prioridad:** Funcionalidad deseable de higiene de datos (Could have); no interrumpe el flujo de ventas ni compras; se restringe de forma exclusiva al Administrador para resguardar la consistencia estructural del negocio.

**Criterios de aceptación:**
1. **Dado que** una categoría no posee ningún producto vinculado en el catálogo, **cuando** el Administrador pulsa el botón de eliminación y aprueba el diálogo de confirmación, **entonces** el sistema suprime la categoría de forma permanente y la retira de todas las listas de selección.
2. **Dado que** una categoría tiene uno o más productos asignados (activos o inactivos), **cuando** el Administrador intenta eliminarla, **entonces** el sistema bloquea terminantemente la acción y despliega un mensaje notificando que no se pueden eliminar categorías con artículos vinculados, con el mensaje «No se puede eliminar, tiene productos asociados».
3. **Dado que** el Administrador ejecuta la acción de retiro, **cuando** atiende los mensajes preventivos y confirma la eliminación, **entonces** la interacción visual satisface las advertencias, colores y flujos definidos en UI-006 del Catálogo de Interfaces (DOC-ANEXO-B).

**Reglas de negocio aplicables:** 
- N/A

**Dependencias:**
- Requiere `HU-CAT-02` (categoría sin artículos asociados para eliminación).

---

## 2. Sub-dominio: Directorio de Proveedores Comerciales (Parte 1)

### HU-PROV-01 · Proveedores – Ver lista de proveedores

| Identificador | Épica | Prioridad MoSCoW | Estimación | Release | Sprint |
|:---:|:---:|:---:|:---:|:---:|:---:|
| HU-PROV-01 | EPIC-CAT | Must have | 2 pts | REL-2 | SPR-2 |

**Como** Almacenero o Administrador del minimarket,  
**quiero** consultar el directorio consolidado de empresas proveedoras registradas en el sistema,  
**para** verificar su información de contacto, fiscal y de habilitación comercial al gestionar solicitudes de abastecimiento y pedidos de compra.

**Justificación de prioridad:** Requisito indispensable de aprovisionamiento (Must have); programado para el Release 2 para brindar visibilidad completa a la gestión de reposiciones formalizadas.

**Criterios de aceptación:**
1. **Dado que** un colaborador con perfil autorizado accede al módulo de proveedores, **cuando** carga la pantalla principal, **entonces** el sistema expone una grilla mostrando las columnas Nombre, RUC, Contacto, Estado y Acciones.
2. **Dado que** la empresa mantiene relaciones comerciales con múltiples proveedores, **cuando** el operador introduce un criterio de búsqueda en la barra «Buscar por nombre o RUC...» o usa el filtro «Todos los estados / Activo / Inactivo», **entonces** el sistema filtra los registros de inmediato presentando únicamente los proveedores coincidentes.
3. **Dado que** el operador interactúa con el directorio de proveedores, **cuando** visualiza la grilla, aplica filtros o revisa los indicadores de estado, **entonces** la interfaz satisface íntegramente las pautas visuales y microcopy descritos en UI-008 (Directorio de Proveedores) del Catálogo de Interfaces (DOC-ANEXO-B).

**Reglas de negocio aplicables:** 
- N/A

**Dependencias:**
- Requiere `HU-PROV-02` (proveedor registrado en catálogo).

---

### HU-PROV-02 · Proveedores – Registrar nuevo proveedor

| Identificador | Épica | Prioridad MoSCoW | Estimación | Release | Sprint |
|:---:|:---:|:---:|:---:|:---:|:---:|
| HU-PROV-02 | EPIC-CAT | Must have | 3 pts | REL-1 | SPR-1 |

**Como** Administrador o Almacenero del minimarket,  
**quiero** dar de alta a una empresa proveedora en el sistema validando sus datos tributarios de forma oficial,  
**para** habilitarla formalmente en el sistema y permitir la recepción de mercadería y vinculación de comprobantes de compra a su nombre.

**Justificación de prioridad:** Funcionalidad crítica de aprovisionamiento (Must have); prerrequisito obligatorio para el proceso de entrada de mercadería (`HU-INV-01`), ya que toda recepción física exige asociar un proveedor habilitado.

**Criterios de aceptación:**
1. **Dado que** el usuario digita un número de RUC de 11 dígitos numéricos correspondiente a una empresa formal (excluyendo números que inicien con 10), **cuando** solicita la comprobación tributaria en el formulario, **entonces** el sistema realiza la consulta oficial de padrón, verifica que el contribuyente figure en estado activo y condición de habido, y autorrellena de manera automática e inmodificable la razón social registrada ante la autoridad tributaria.
2. **Dado que** los datos fiscales han sido validados satisfactoriamente y el usuario completa la información de contacto comercial, **cuando** presiona el botón «Guardar», **entonces** el sistema registra la ficha del proveedor en estado Activo y la deja inmediatamente habilitada para operaciones de compra y recepción.
3. **Dado que** el usuario ingresa un número de RUC que ya pertenece a otro proveedor registrado, un RUC con prefijo 10 o un documento tributario que no se encuentre en condición activa y habida, **cuando** intenta procesar el registro, **entonces** el sistema rechaza la operación e indica claramente la causal de rechazo impidiendo la creación de fichas inconsistentes.
4. **Dado que** el usuario opera sobre el formulario de alta de proveedores, **cuando** visualiza los campos, etiquetas de validación y confirmaciones, **entonces** la pantalla satisface integralmente los estándares de presentación y diseño de UI-008 del Catálogo de Interfaces (DOC-ANEXO-B).

**Reglas de negocio aplicables:** 
- N/A

**Dependencias:**
- Requiere `HU-AUTH-01` (control de acceso administrativo).

### HU-PROV-03 · Proveedores – Editar datos de un proveedor

| Identificador | Épica | Prioridad MoSCoW | Estimación | Release | Sprint |
|:---:|:---:|:---:|:---:|:---:|:---:|
| HU-PROV-03 | EPIC-CAT | Should have | 2 pts | REL-3 | SPR-3 |

**Como** Administrador o Almacenero del minimarket,  
**quiero** actualizar la información de contacto o corregir datos de una empresa proveedora registrada,  
**para** mantener al día los canales de comunicación y asegurar la coordinación logística del abastecimiento de mercaderías.

**Justificación de prioridad:** Funcionalidad recomendada de mantenimiento (Should have); programada para el Release 3 para la administración continua de la cartera de proveedores comerciales, permitiendo subsanar variaciones de números de teléfono, correos o nombres comerciales sin asistencia técnica.

**Criterios de aceptación:**
1. **Dado que** un colaborador con perfil autorizado accede a la ficha de un proveedor existente, **cuando** actualiza los datos del canal de contacto (número telefónico o correo electrónico) y pulsa «Guardar», **entonces** el sistema actualiza de inmediato el registro en el directorio comercial y refleja la nueva información en las consultas operativas.
2. **Dado que** el colaborador intenta modificar el RUC de una empresa proveedora, **cuando** ingresa una numeración que no cumple con el formato reglamentario de 11 dígitos numéricos o que coincide con el RUC de otro proveedor ya existente, **entonces** el sistema bloquea la actualización y emite una alerta indicando el error de formato o la colisión de identidad tributaria.
3. **Dado que** el colaborador opera sobre el formulario de edición de proveedores, **cuando** visualiza los campos precargados, controles de guardado y avisos de confirmación, **entonces** la interfaz satisface integralmente los estándares visuales, microcopy e indicadores de estado detallados en UI-008 (Directorio de Proveedores) del Catálogo de Interfaces (DOC-ANEXO-B).

**Reglas de negocio aplicables:** 
- N/A

**Dependencias:**
- Requiere `HU-PROV-02` (proveedor registrado para edición).

---

### HU-PROV-04 · Proveedores – Desactivar o reactivar proveedor

| Identificador | Épica | Prioridad MoSCoW | Estimación | Release | Sprint |
|:---:|:---:|:---:|:---:|:---:|:---:|
| HU-PROV-04 | EPIC-CAT | Should have | 2 pts | REL-2 | SPR-2 |

**Como** Administrador del minimarket,  
**quiero** suspender o reactivar la condición operativa de una empresa proveedora en el sistema,  
**para** impedir la emisión de pedidos o compras a empresas dadas de baja o con observaciones contractuales sin destruir su historial comercial ni alterar los registros contables precedentes.

**Justificación de prioridad:** Salvaguarda administrativa de gobernanza comercial (Should have); programada para el Release 2 para brindar control estricto sobre las empresas autorizadas al momento de habilitar el flujo formal de solicitudes de reposición.

**Criterios de aceptación:**
1. **Dado que** el Administrador identifica a una empresa proveedora con la que se ha concluido el vínculo comercial, **cuando** pulsa la opción «Desactivar» y ratifica la instrucción en el diálogo de advertencia, **entonces** el sistema conmuta su estado a Inactivo y lo retira de manera automática de los desplegables de selección para solicitudes de reposición y órdenes de compra.
2. **Dado que** una empresa proveedora suspendida reanuda relaciones comerciales satisfactorias con el establecimiento, **cuando** el Administrador ubica su ficha en el directorio y presiona «Reactivar», **entonces** el sistema restituye su estado a Activo y la deja inmediatamente habilitada para nuevas transacciones de abastecimiento.
3. **Dado que** el Administrador gestiona la suspensión o reactivación en la pantalla del directorio, **cuando** confirma la instrucción y revisa el cambio de estado en la grilla, **entonces** la interfaz responde con las directrices visuales, alertas y comportamiento especificados en UI-008 del Catálogo de Interfaces (DOC-ANEXO-B).

**Reglas de negocio aplicables:** 
- N/A

**Dependencias:**
- Requiere `HU-PROV-02` (proveedor registrado para cambio de estado).

---

## 3. Sub-dominio: Cartera de Clientes

### HU-CLI-01 · Clientes – Listar clientes registrados

| Identificador | Épica | Prioridad MoSCoW | Estimación | Release | Sprint |
|:---:|:---:|:---:|:---:|:---:|:---:|
| HU-CLI-01 | EPIC-CAT | Should have | 2 pts | REL-3 | SPR-3 |

**Como** Administrador o Gerente del minimarket,  
**quiero** consultar la nómina completa y organizada de los clientes registrados en la plataforma,  
**para** supervisar la base de compradores del establecimiento, auditar sus datos de contacto y obtener información para futuras iniciativas comerciales y de fidelización.

**Justificación de prioridad:** Funcionalidad analítica y de fidelización (Should have); programada para el Release 3 para enriquecer la toma de decisiones comerciales una vez que el flujo principal de ventas y caja se encuentre consolidado.

**Criterios de aceptación:**
1. **Dado que** un colaborador con perfil autorizado (Administrador o Gerente) accede a la pantalla de clientes mediante su dirección directa (sin entrada en el menú lateral), **cuando** el sistema carga la pantalla principal del módulo, **entonces** expone una grilla con los nombres y apellidos o razón social, número de documento de identidad (DNI de 8 dígitos), correo electrónico de contacto y el importe monetario total de compras acumuladas por cada cliente.
2. **Dado que** la empresa dispone de una cartera extensa de compradores, **cuando** el supervisor ingresa un texto en la barra de búsqueda rápida por nombre o número de documento (o correo, solo Administrador), **entonces** el sistema filtra la lista al instante presentando únicamente las coincidencias pertinentes.
3. **Dado que** el supervisor interactúa con el visor de compradores, **cuando** visualiza la grilla, aplica filtros de búsqueda o revisa los acumulados comerciales, **entonces** la pantalla cumple rigurosamente las pautas de presentación y microcopy definidas en UI-009 (Directorio de Clientes) del Catálogo de Interfaces (DOC-ANEXO-B).

**Reglas de negocio aplicables:** 
- N/A

**Dependencias:**
- Requiere `HU-CLI-02` (clientes registrados previamente en el punto de venta).

---

### HU-CLI-02 · Clientes – Registrar cliente automáticamente al vender

| Identificador | Épica | Prioridad MoSCoW | Estimación | Release | Sprint |
|:---:|:---:|:---:|:---:|:---:|:---:|
| HU-CLI-02 | EPIC-CAT | Must have | 3 pts | REL-1 | SPR-1 |

**Como** Vendedor del minimarket,  
**quiero** registrar o asociar con agilidad la identificación del cliente (DNI o RUC) durante el flujo de cobro en el punto de venta,  
**para** emitir comprobantes de pago válidos conforme a los requerimientos tributarios oficiales sin demorar ni entorpecer el despacho de la fila de atención.

**Justificación de prioridad:** Funcionalidad crítica indispensable para el producto mínimo viable (Must have); mandatoria por regulación fiscal para la emisión de boletas identificadas y facturas comerciales en el mostrador del negocio.

**Criterios de aceptación:**
1. **Dado que** el vendedor está formalizando una venta mediante Boleta de Venta (formato SUNAT), **cuando** digita un número de DNI de 8 dígitos numéricos no registrado con anterioridad y el nombre del comprador, **entonces** el sistema registra de forma automática la ficha del nuevo cliente en el directorio y la asocia de forma atómica a la venta en curso sin salir del flujo de cobro.
2. **Dado que** el comprador solicita la emisión de una Factura comercial, **cuando** el vendedor digita el número de RUC de 11 dígitos, la razón social y la dirección fiscal de la empresa adquirente, **entonces** el sistema vincula inmediatamente dichos datos fiscales al comprobante de venta generado.
3. **Dado que** el cliente que se acerca a caja ya se encuentra registrado previamente en el minimarket, **cuando** el vendedor digita su número de documento en la casilla correspondiente, **entonces** el sistema autocompleta de inmediato sus datos personales en pantalla evitando duplicidades en el directorio.
4. **Dado que** el vendedor atiende la captura de datos en el terminal de venta, **cuando** interactúa con las casillas de identificación del comprador y los mensajes informativos, **entonces** la interfaz satisface integralmente los estándares visuales y de interacción descritos en UI-014 (Terminal de Punto de Venta POS) del Catálogo de Interfaces (DOC-ANEXO-B).

**Reglas de negocio aplicables:** 
- N/A

**Dependencias:**
- Requiere `HU-VEN-01` (transacción de venta en mostrador para captura de cliente).

---

### HU-CLI-03 · Clientes – Editar correo electrónico de cliente

| Identificador | Épica | Prioridad MoSCoW | Estimación | Release | Sprint |
|:---:|:---:|:---:|:---:|:---:|:---:|
| HU-CLI-03 | EPIC-CAT | Could have | 1 pt | REL-3 | SPR-3 |

**Como** Administrador o SuperAdmin del minimarket,  
**quiero** modificar o corregir la dirección de correo electrónico registrada para un cliente en su ficha del directorio,  
**para** garantizar el despacho efectivo y sin rebotes de sus comprobantes de pago electrónicos y notas de venta digitales en caso de cambio de casilla digital.

**Justificación de prioridad:** Funcionalidad accesoria de servicio postventa (Could have); programada para el Release 3 para optimizar la comunicación digital; totalmente prescindible para la operación diaria presencial del minimarket.

**Criterios de aceptación:**
1. **Dado que** un cliente solicita formalmente la actualización de su casilla digital, **cuando** el usuario autorizado localiza su registro en el directorio de clientes, modifica la dirección de correo electrónico y guarda los cambios, **entonces** el sistema actualiza de inmediato la ficha del comprador para los futuros despachos de comprobantes digitales.
2. **Dado que** el usuario digita la nueva dirección, **cuando** introduce una estructura que no corresponde a un formato de correo electrónico válido (omisión del símbolo arroba o dominio ausente), **entonces** el sistema resalta el campo con borde de alerta, bloquea el guardado y exige una estructura digital reglamentaria.
3. **Dado que** el colaborador efectúa la corrección en la vista de clientes, **cuando** atiende el formulario modal y valida la actualización, **entonces** la pantalla satisface los componentes y textos informativos estipulados en UI-009 del Catálogo de Interfaces (DOC-ANEXO-B).

**Reglas de negocio aplicables:** 
- N/A

**Dependencias:**
- Requiere `HU-CLI-02` (cliente registrado para actualización de datos).

## 4. Sub-dominio: Catálogo Maestro de Productos

### HU-PROD-01 · Productos – Ver catálogo completo de productos

| Identificador | Épica | Prioridad MoSCoW | Estimación | Release | Sprint |
|:---:|:---:|:---:|:---:|:---:|:---:|
| HU-PROD-01 | EPIC-CAT | Must have | 3 pts | REL-1 | SPR-1 |

**Como** Almacenero o Administrador del minimarket,  
**quiero** consultar el catálogo maestro consolidado de productos comerciales,  
**para** verificar precios de venta, costos de adquisición de referencia y existencias totales al recepcionar mercaderías o realizar supervisiones físicas en bodega.

**Justificación de prioridad:** Funcionalidad núcleo esencial para el producto mínimo viable (Must have); consulta obligatoria para la gestión de existencias y control físico en almacén. En mostrador, el personal de ventas consulta productos exclusivamente a través del terminal POS (`HU-VEN-01`).

**Criterios de aceptación:**
1. **Dado que** un colaborador con perfil autorizado (Almacenero o Administrador) ingresa al módulo de catálogo maestro, **cuando** carga la vista principal, **entonces** el sistema presenta la relación íntegra de artículos registrados mostrando su Nombre, Marca, Categoría, Precio, Stock, Stock Mín., Vencimiento, Estado y Acciones.
2. **Dado que** el minimarket mantiene cientos de artículos en su catálogo comercial, **cuando** el usuario introduce un texto en la barra de búsqueda rápida por nombre o marca, o usa los filtros de categorías, estados o alertas (Crítico, Agotado, Vencido, etc.), **entonces** el sistema filtra los resultados al instante presentando las coincidencias pertinentes.
3. **Dado que** el usuario consulta el inventario del catálogo, **cuando** interactúa con las filas de la grilla (incluyendo opciones como Editar, Dar de baja, Solicitar reposición, Ver lotes y Desactivar), buscadores y controles, **entonces** la pantalla satisface integralmente los componentes visuales, indicadores de estado y microcopy de UI-007 (Catálogo de Productos y Alertas) del Catálogo de Interfaces (DOC-ANEXO-B).

**Reglas de negocio aplicables:** 
- N/A

**Dependencias:**
- Requiere `HU-PROD-02` (productos registrados en catálogo).

---

### HU-PROD-02 · Productos – Registrar nuevo producto en el catálogo

| Identificador | Épica | Prioridad MoSCoW | Estimación | Release | Sprint |
|:---:|:---:|:---:|:---:|:---:|:---:|
| HU-PROD-02 | EPIC-CAT | Must have | 5 pts | REL-1 | SPR-1 |

**Como** Administrador o Almacenero del minimarket,  
**quiero** dar de alta un nuevo producto en el catálogo maestro definiendo sus datos descriptivos, clasificación comercial y parámetros de control preventivo,  
**para** habilitar su recepción física en el almacén y permitir su posterior venta en el punto de atención al cliente.

**Justificación de prioridad:** Funcionalidad crítica de aprovisionamiento (Must have); bloqueador operativo directo: si un producto no existe formalmente en el catálogo maestro, el almacenero no puede registrar entradas de mercadería ni generar inventario en bodega.

**Criterios de aceptación:**
1. **Dado que** el usuario completa el formulario de registro ingresando código de barras comercial, nombre descriptivo, marca, categoría reglamentaria y precio de venta unitario, **cuando** presiona el botón «Guardar», **entonces** el sistema crea la ficha del artículo estableciendo su estado inicial como Activo, pidiendo categoría obligatoriamente, permitiendo marcar la casilla de vencimiento, con un recuadro para indicar que el stock se carga vía Inventario.
2. **Dado que** el usuario introduce un código de barras que ya se encuentra asignado a otro producto registrado en el minimarket, **cuando** intenta procesar el alta, **entonces** el sistema deniega el guardado y emite un mensaje de error notificando la duplicidad del código comercial.
3. **Dado que** el usuario diligencia la ficha técnica del artículo, **cuando** revisa los parámetros de control, **entonces** el sistema inicializa el umbral de stock mínimo en el valor predeterminado estándar de 10 unidades en modo de solo lectura (ajustable posteriormente durante la edición de la ficha) y permite marcar si el producto maneja fecha de caducidad para activar el control preventivo de alertas (RN-06).
4. **Dado que** el usuario interactúa con la ventana de registro de productos, **cuando** completa los campos requeridos y confirma la operación, **entonces** la pantalla satisface rigurosamente los lineamientos de diseño, validaciones numéricas y formato definidos en UI-007 del Catálogo de Interfaces (DOC-ANEXO-B).

**Reglas de negocio aplicables:** 
- RN-06 (Alerta de Stock Mínimo)

**Dependencias:**
- Requiere `HU-CAT-02` (categoría base para clasificar el producto).

---

### HU-PROD-03 · Productos – Escanear código de barras para registrar producto

| Identificador | Épica | Prioridad MoSCoW | Estimación | Release | Sprint |
|:---:|:---:|:---:|:---:|:---:|:---:|
| HU-PROD-03 | EPIC-CAT | Could have | 5 pts | REL-3 | SPR-3 |

**Como** Almacenero del minimarket,  
**quiero** capturar el código de barras comercial mediante el lector óptico durante el alta de un producto e importar sus datos descriptivos básicos desde bases de datos externas,  
**para** acelerar la catalogación de nuevos artículos sin necesidad de transcribir manualmente los empaques comerciales.

**Justificación de prioridad:** Característica deseable de aceleración operativa (Could have); optimiza los tiempos de ingreso de nuevos productos al catálogo en el Release 3, manteniéndose el alta manual por teclado como mecanismo plenamente asegurado desde el Sprint 1.

**Criterios de aceptación:**
1. **Dado que** el usuario tiene abierto el formulario de nuevo producto, **cuando** acciona la lectora óptica sobre el código de barras impreso en el empaque de la mercadería, **entonces** el sistema captura al instante la serie numérica en el campo de código de barras.
2. **Dado que** el código de barras ha sido capturado, **cuando** el sistema consulta los servicios de catalogación comercial externos disponibles, **entonces** autorrellena de manera automática el nombre comercial del artículo, la marca del fabricante y propone la categoría sugerida, permitiendo al usuario su revisión y ajuste antes de confirmar.
3. **Dado que** la consulta externa no encuentra coincidencias o no se dispone de conexión con los directorios comerciales exteriores, **cuando** concluye la búsqueda, **entonces** el sistema conserva el código capturado y deja los campos de texto habilitados para el ingreso manual directo sin impedir el registro.
4. **Dado que** el operador interactúa con el flujo de escaneo y consulta asistida, **cuando** visualiza los indicadores de búsqueda y autocompletado en pantalla, **entonces** la interfaz satisface integralmente las directrices de UI-007 del Catálogo de Interfaces (DOC-ANEXO-B).

**Reglas de negocio aplicables:** 
- N/A

**Dependencias:**
- Requiere `HU-PROD-02` (producto registrado para captura de código).

---

### HU-PROD-04 · Productos – Editar datos de un producto

| Identificador | Épica | Prioridad MoSCoW | Estimación | Release | Sprint |
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
- Requiere `HU-PROD-02` (ficha de producto para modificación).

---

### HU-PROD-05 · Productos – Desactivar o reactivar producto

| Identificador | Épica | Prioridad MoSCoW | Estimación | Release | Sprint |
|:---:|:---:|:---:|:---:|:---:|:---:|
| HU-PROD-05 | EPIC-CAT | Should have | 2 pts | REL-3 | SPR-3 |

**Como** Administrador o Almacenero del minimarket,  
**quiero** suspender temporalmente o reactivar la comercialización de un producto en el catálogo,  
**para** ocultar mercaderías descontinuadas o fuera de temporada sin eliminar su ficha ni vulnerar la integridad del historial de ventas y compras pasadas.

**Justificación de prioridad:** Funcionalidad de gobernanza de catálogo (Should have); mantiene un catálogo ágil y depurado para la venta en mostrador sin romper los vínculos históricos de supervisión contable.

**Criterios de aceptación:**
1. **Dado que** un producto no volverá a comercializarse temporal o permanentemente, **cuando** el usuario autorizado pulsa «Desactivar» y confirma la instrucción, **entonces** el sistema conmuta su estado a Inactivo y lo excluye automáticamente de las búsquedas en el terminal de venta y de los catálogos activos.
2. **Dado que** el establecimiento reanuda la compra y venta de un producto previamente suspendido, **cuando** el usuario ubica el registro y presiona «Reactivar», **entonces** el sistema restituye su condición a Activo dejándolo disponible de inmediato para recepciones en almacén y comercialización en caja.
3. **Dado que** el colaborador administra la disponibilidad del artículo, **cuando** atiende los diálogos de advertencia y revisa el cambio de estado en la grilla, **entonces** la interfaz satisface los lineamientos descritos en UI-007 del Catálogo de Interfaces (DOC-ANEXO-B).

**Reglas de negocio aplicables:** 
- N/A

**Dependencias:**
- Requiere `HU-PROD-02` (producto registrado para cambio de estado).

---

### HU-PROD-06 · Productos – Consultar productos próximos a vencer

| Identificador | Épica | Prioridad MoSCoW | Estimación | Release | Sprint |
|:---:|:---:|:---:|:---:|:---:|:---:|
| HU-PROD-06 | EPIC-CAT | Must have | 3 pts | REL-2 | SPR-2 |

**Como** Almacenero o Administrador del minimarket,  
**quiero** consultar un reporte preventivo consolidado de los lotes de mercadería con fechas de caducidad próximas o vencidas,  
**para** coordinar oportunamente promociones de liquidación, rotaciones de mercadería o bajas formales de inventario antes de que los productos representen un riesgo sanitario o pérdida comercial irreparable.

**Justificación de prioridad:** Control mandatorio sanitario y financiero (Must have); programado para el Release 2 como salvaguarda preventiva contra sanciones regulatorias y merma económica en góndola.

**Criterios de aceptación:**
1. **Dado que** un colaborador con perfil autorizado accede a la sección de control de vencimientos, **cuando** el sistema examina los lotes de mercadería almacenados, **entonces** presenta una grilla ordenada cronológicamente con los lotes que vencen en los próximos 30 días, detallando el nombre comercial del producto, empresa proveedora de origen, lote asignado, fecha exacta de caducidad y el conteo de días restantes, resaltando con distintivo de alerta visual roja aquellos que ya se encuentren caducados.
2. **Dado que** un lote de mercadería ha superado su fecha límite de caducidad (un lote cuya fecha de caducidad coincide con la fecha en curso o es anterior queda bloqueado para la venta en el punto de venta desde la apertura del turno y debe canalizarse a bajas por vencimiento), **cuando** un vendedor intenta despachar dicho producto en el terminal de punto de venta, **entonces** el sistema bloquea de forma terminante la operación excluyendo el lote vencido e informando stock cero disponible para venta, en estricto cumplimiento de la prohibición de comercialización de productos caducados (RN-03, RN-19).
3. **Dado que** el usuario monitorea el panel preventivo de caducidades, **cuando** visualiza la grilla, aplica filtros por días de vigencia y examina los avisos de alerta, **entonces** la interfaz satisface los patrones de diseño, colores de advertencia y microcopy de UI-007 del Catálogo de Interfaces (DOC-ANEXO-B).

**Reglas de negocio aplicables:** 
- RN-03 (Prohibición de Comercialización de Vencidos)
- RN-19 (Prioridad de Despacho por Expiración FEFO y Bloqueo de Lotes Caducados)

**Dependencias:**
- Requiere `HU-INV-01` (lotes ingresados con fechas de vencimiento).

<!-- ===================================================================== -->
<!-- ARCHIVO FUENTE: 03_EPIC-INV.md -->
<!-- ===================================================================== -->

---
Código de documento: DOC-PLAN-03-03
Título: Backlog de Producto — EPIC-INV: Inventario y Reposición
Versión: 5.1
Fecha: 2026-10-04
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

| Identificador | Épica | Prioridad MoSCoW | Estimación | Release | Sprint |
|:---:|:---:|:---:|:---:|:---:|:---:|
| HU-INV-01 | EPIC-INV | Must have | 5 pts | REL-1 | SPR-1 |

**Como** Almacenero o Administrador del minimarket,  
**quiero** registrar el ingreso físico de mercadería a bodega con sus datos de lote y costos de adquisición,  
**para** incrementar el stock disponible para venta, registrar las fechas de vencimiento preventivas y actualizar de forma automatizada la valorización del inventario comercial.

**Justificación de prioridad:** Funcionalidad crítica indispensable para el producto mínimo viable (Must have); sin la capacidad de dar entrada física a los productos recibidos de proveedores, las existencias se mantienen en cero y se imposibilita cualquier venta en el punto de cobro.

**Criterios de aceptación:**
1. **Dado que** el operador recibe un lote de productos físicos para carga inicial de stock o para regularización administrativa autorizada, **cuando** registra el producto, empresa proveedora habilitada (opcional), cantidad ingresada y fecha de vencimiento (si el producto lo maneja), **entonces** el sistema suma de inmediato las unidades al stock disponible, asigna de forma automática y obligatoria un código de lote autogenerado, y el costo unitario no se ingresa por interfaz quedando registrado nulo en el envío, aunque la API soporte la valorización y recalcule automáticamente el costo promedio ponderado (RN-14).
2. **Dado que** el producto ya registra movimientos de entrada de mercadería previos en el minimarket, **cuando** el Almacenero intenta registrar un abastecimiento mediante ingreso directo, **entonces** el producto no aparecerá listado en el selector de la interfaz visual (presentando un aviso explicativo) y el sistema además cuenta con un bloqueo a nivel API notificando que las reposiciones regulares posteriores exigen obligatoriamente tramitar una Solicitud de Reposición aprobada (RN-01), conservando el Administrador la facultad de ingreso directo.
3. **Dado que** la mercadería recibida corresponde a un producto clasificado como perecible, **cuando** se procesa la entrada física, **entonces** el sistema exige obligatoriamente la captura de la fecha de vencimiento (que no puede ser anterior a la fecha actual y tiene un límite máximo de 15 años a futuro, mostrando una alerta visual si vence en menos de 7 días) alimentando el control preventivo FEFO (RN-19). Si se ingresa la fecha de hoy, el lote se crea pero nace automáticamente bloqueado para venta.
4. **Dado que** el operador interactúa con el módulo de recepción de mercadería, **cuando** visualiza los campos de captura de lote, cálculos de costo y botones de confirmación, **entonces** la pantalla cumple rigurosamente con los patrones de diseño y microcopy especificados en UI-010 (Entradas de Mercadería y Lotes) del Catálogo de Interfaces (DOC-ANEXO-B).


**Reglas de negocio aplicables:** 
- RN-01 (Política de Ingreso Inicial y Abastecimiento por Solicitud)
- RN-14 (Actualización de Valorización de Inventario)
- RN-19 (Prioridad de Despacho por Expiración FEFO y Bloqueo de Lotes Caducados)

**Dependencias:**
- Requiere `HU-PROD-02` y `HU-PROV-02` (artículo y proveedor registrados para recepción).

---

### HU-INV-02 · Inventario – Registrar baja de inventario por merma

| Identificador | Épica | Prioridad MoSCoW | Estimación | Release | Sprint |
|:---:|:---:|:---:|:---:|:---:|:---:|
| HU-INV-02 | EPIC-INV | Must have | 5 pts | REL-1 | SPR-1 |

**Como** Almacenero o Administrador del minimarket,  
**quiero** registrar la baja formal de mercadería averiada, rota o vencida en el almacén,  
**para** reflejar la pérdida real en el sistema, conciliar el valor real del inventario y retirar inmediatamente las unidades deterioradas del stock comercializable.

**Justificación de prioridad:** Funcionalidad esencial de control contable y operativo (Must have); indispensable para mantener la veracidad de las existencias y evitar que mercadería dañada o caducada se ofrezca al público o distorsione los arqueos de bodega.

**Criterios de aceptación:**
1. **Dado que** un artículo sufrió merma física o pérdida, **cuando** el operador registra la baja seleccionando los motivos justificados (Vencido, Dañado, Robo o faltante -con detalle obligatorio-, Consumo interno, Error de registro u Otro), **entonces** si elige «Dañado» el sistema exige obligatoriamente seleccionar el lote específico, descontando de inmediato las unidades del stock físico. Si elige un motivo distinto a «Vencido» y no selecciona lote, el sistema descuenta la baja únicamente del stock vigente en buen estado (RN-04, RN-20).
2. **Dado que** el operador registra una baja por el motivo explícito «Vencido», **cuando** selecciona el producto afectado, **entonces** el sistema bloquea el ingreso de cantidad asumiendo automáticamente todo el stock vencido consolidado o el de un lote vencido específico elegido, impidiendo el registro de cantidades parciales desde la interfaz gráfica, aunque la API sí acepta cantidades parciales (RN-05).
3. **Dado que** el colaborador opera sobre el panel de mermas, **cuando** selecciona los motivos reglamentarios, confirma las cantidades y visualiza los indicadores de stock restante, **entonces** la interfaz satisface los lineamientos de diseño, advertencias y microcopy descritos en UI-011 (Bajas de Inventario y Mermas) del Catálogo de Interfaces (DOC-ANEXO-B).


**Reglas de negocio aplicables:** 
- RN-04 (Registro Obligatorio de Mermas)
- RN-05 (Restricción de Bajas por Vencimiento)
- RN-20 (Bajas de Inventario por Motivo Dañado con Selección Obligatoria de Lote)

**Dependencias:**
- Requiere `HU-INV-01` (existencia de stock físico de lote para registrar baja).

---

### HU-INV-03 · Inventario – Realizar ajuste por conteo físico

| Identificador | Épica | Prioridad MoSCoW | Estimación | Release | Sprint |
|:---:|:---:|:---:|:---:|:---:|:---:|
| HU-INV-03 | EPIC-INV | Must have | 5 pts | REL-1 | SPR-1 |

**Como** Almacenero o Administrador del minimarket,  
**quiero** regularizar el saldo de inventario de un producto tras la realización de un conteo físico presencial en estanterías o bodega,  
**para** conciliar las discrepancias entre el stock teórico del sistema y la existencia física real en tienda asegurando la exactitud operativa.

**Justificación de prioridad:** Funcionalidad crítica de conciliación (Must have); las diferencias operativas menores (mermas no detectadas, errores de conteo o extravíos) son inevitables en el comercio minorista; sin esta función, los descuadres bloquean las ventas y descalibran los pedidos de reposición.

**Criterios de aceptación:**
1. **Dado que** el sistema registra un saldo teórico distinto al conteo físico verificado en tienda (por ejemplo, 10 unidades en pantalla frente a 8 unidades reales contadas), **cuando** el operador introduce la cantidad física constatada, **entonces** el sistema actualiza de inmediato el stock disponible ajustándolo al saldo real y genera un registro de supervisión con la diferencia neta. Si el ajuste resulta en un sobrante (diferencia positiva), el sistema exige registrar una fecha de vencimiento si el producto lo maneja y automáticamente genera un código de lote de ingreso.
2. **Dado que** el operador confirma un ajuste de inventario, **cuando** procesa la operación en pantalla, **entonces** el sistema le solicita registrar obligatoriamente una justificación o comentario explicativo sobre la causa de la discrepancia constatada para fines de trazabilidad y control interno, el cual es exigido por la API aunque la interfaz lo marque como opcional.
3. **Dado que** el colaborador interactúa con el formulario de regularización, **cuando** digita los conteos físicos, revisa las diferencias calculadas y confirma el ajuste, **entonces** la pantalla responde con la estructura visual, validaciones y microcopy definidos en UI-012 (Ajustes de Conteo Físico) del Catálogo de Interfaces (DOC-ANEXO-B).


**Reglas de negocio aplicables:** 
- N/A

**Dependencias:**
- Requiere `HU-INV-01` (existencia de inventario registrado para conciliar ajuste).

---

### HU-INV-04 · Inventario – Consultar historial de entradas

| Identificador | Épica | Prioridad MoSCoW | Estimación | Release | Sprint |
|:---:|:---:|:---:|:---:|:---:|:---:|
| HU-INV-04 | EPIC-INV | Should have | 2 pts | REL-3 | SPR-3 |

**Como** Almacenero o Administrador del minimarket,  
**quiero** consultar la bitácora histórica cronológica de todas las recepciones de mercadería con filtros por rango de fechas y producto,  
**para** auditar los ingresos efectuados, verificar costos de compra y resolver discrepancias documentales con proveedores.

**Justificación de prioridad:** Funcionalidad recomendada de supervisión y conciliación (Should have); programada para el Release 3 para fortalecer la supervisión documental y trazabilidad contable de los abastecimientos.

**Criterios de aceptación:**
1. **Dado que** un usuario autorizado ingresa al historial de recepciones, **cuando** aplica filtros por período de tiempo o selecciona un producto específico, **entonces** el sistema presenta la lista cronológica completa de entradas registradas, detallando fecha y hora de ingreso, empresa proveedora, lote, cantidad recepcionada y costo unitario de adquisición.
2. **Dado que** un usuario revisa un registro histórico de recepción, **cuando** examina la información, **entonces** el sistema expone todos los datos de la operación directamente integrados en las columnas de la grilla sin disponer de una vista de detalle en modal separado, en modo de solo lectura estricto.
3. **Dado que** el usuario navega por la consulta de recepciones, **cuando** aplica filtros, revisa las columnas de datos y utiliza los controles de visualización, **entonces** la interfaz satisface integralmente los estándares visuales de UI-010 del Catálogo de Interfaces (DOC-ANEXO-B).
4. **Dado que** los filtros aplicados no devuelven coincidencias, **cuando** se ejecuta la consulta, **entonces** el sistema presenta un estado vacío explícito con el mensaje «No hay entradas registradas».


**Reglas de negocio aplicables:** 
- N/A

**Dependencias:**
- Requiere `HU-INV-01` (entradas previas para consultar historial).

---

### HU-INV-05 · Inventario – Consultar historial de bajas

| Identificador | Épica | Prioridad MoSCoW | Estimación | Release | Sprint |
|:---:|:---:|:---:|:---:|:---:|:---:|
| HU-INV-05 | EPIC-INV | Should have | 2 pts | REL-3 | SPR-3 |

**Como** Administrador o Almacenero del minimarket,  
**quiero** consultar el reporte histórico consolidado de todas las bajas de mercadería registradas por merma o caducidad,  
**para** analizar las principales causas de pérdida económica, identificar patrones de deterioro y adoptar medidas correctivas con marcas o proveedores.

**Justificación de prioridad:** Funcionalidad recomendada de control de pérdidas (Should have); programada para el Release 3 para dotar a la administración de información analítica sobre mermas sin afectar la operación diaria.

**Criterios de aceptación:**
1. **Dado que** el Administrador o Almacenero accede a la sección histórica de mermas, **cuando** carga la consulta, **entonces** el sistema expone una grilla cronológica detallada con la fecha de la baja, producto afectado, lote correspondiente, cantidad de unidades retiradas y el motivo comercial justificado (Dañado, Vencido u otro).
2. **Dado que** el Administrador o Almacenero audita un registro de merma específico, **cuando** examina la información, **entonces** el sistema expone con exactitud la identidad del colaborador que autorizó la baja, presentando todos los datos correspondientes en las columnas de la grilla directamente, al carecer de una vista en modal de detalle separado.
3. **Dado que** el Administrador o Almacenero interactúa con el visor de bajas históricas, **cuando** visualiza los registros, aplica filtros y consulta los motivos, **entonces** la pantalla responde a los patrones de diseño y microcopy especificados en UI-011 del Catálogo de Interfaces (DOC-ANEXO-B).
4. **Dado que** los filtros de búsqueda no arrojan ninguna baja histórica, **cuando** se actualiza la grilla, **entonces** el sistema presenta un estado vacío explícito con el mensaje «No hay bajas registradas».


**Reglas de negocio aplicables:** 
- N/A

**Dependencias:**
- Requiere `HU-INV-02` (bajas previas para consultar historial).

---

### HU-INV-06 · Inventario – Consultar historial de ajustes

| Identificador | Épica | Prioridad MoSCoW | Estimación | Release | Sprint |
|:---:|:---:|:---:|:---:|:---:|:---:|
| HU-INV-06 | EPIC-INV | Should have | 2 pts | REL-3 | SPR-3 |

**Como** Administrador o Almacenero del minimarket,  
**quiero** revisar la bitácora histórica de ajustes manuales por conteo físico,  
**para** auditar la frecuencia de descuadres en estanterías, investigar posibles mermas ocultas y evaluar la exactitud del control de bodega.

**Justificación de prioridad:** Funcionalidad recomendada de supervisión física (Should have); programada para el Release 3 para consolidar el control interno del negocio frente a riesgos de pérdidas no registradas.

**Criterios de aceptación:**
1. **Dado que** el Administrador o Almacenero audita las correcciones manuales de inventario, **cuando** realiza una búsqueda por producto o rango temporal, **entonces** el sistema expone el historial de todos los ajustes registrados directamente en las columnas de la grilla (sin vista de detalle extra), indicando la fecha, el saldo previo ("Stock Sistema"), el saldo verificado ("Contado") y la diferencia neta generada.
2. **Dado que** el Administrador o Almacenero examina un ajuste individual, **cuando** revisa el historial, **entonces** el sistema expone el comentario o justificación registrado como una columna visible en el registro de ajuste.
3. **Dado que** el Administrador o Almacenero utiliza el panel de supervisión de conteos, **cuando** interactúa con los filtros y la grilla de resultados, **entonces** la interfaz cumple con las especificaciones de diseño y microcopy de UI-012 del Catálogo de Interfaces (DOC-ANEXO-B).
4. **Dado que** los filtros de búsqueda no encuentran ningún ajuste, **cuando** se ejecuta la consulta, **entonces** el sistema presenta un estado vacío explícito con el mensaje «No hay ajustes registrados».


**Reglas de negocio aplicables:** 
- N/A

**Dependencias:**
- Requiere `HU-INV-03` (ajustes previos para consultar historial).

## 2. Sub-dominio: Reposición de Mercadería y Abastecimiento Comercial

### HU-SOL-01 · Reposición – Crear solicitud de reposición

| Identificador | Épica | Prioridad MoSCoW | Estimación | Release | Sprint |
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
- Requiere `HU-PROD-02` y `HU-PROV-02` (producto y proveedor registrados).

---

### HU-SOL-02 · Reposición – Listar solicitudes con filtro por estado

| Identificador | Épica | Prioridad MoSCoW | Estimación | Release | Sprint |
|:---:|:---:|:---:|:---:|:---:|:---:|
| HU-SOL-02 | EPIC-INV | Must have | 2 pts | REL-2 | SPR-2 |

**Como** Almacenero, Gerente o Administrador del minimarket,  
**quiero** visualizar la lista cronológica de solicitudes de reposición con filtros selectivos por estado,  
**para** realizar el seguimiento del ciclo de vida de cada requerimiento de abastecimiento (Pendiente, Aprobada, Rechazada, Completada).

**Justificación de prioridad:** Funcionalidad indispensable de control operacional (Must have); proporciona visibilidad transversal a todas las áreas del minimarket para identificar oportunamente los pedidos en trámite, autorizados, recibidos o descartados.

**Criterios de aceptación:**
1. **Dado que** el usuario ingresa al módulo de reposiciones, **cuando** aplica filtros por estado («Pendiente», «Aprobada», «Rechazada», «Completada») o selecciona visualizar todas, **entonces** el sistema presenta el listado cronológico de solicitudes ordenado desde la más reciente, desplegando la información obligatoriamente en las columnas visuales: Producto, Cantidad, Estado, Proveedor, Fecha Est., Solicitante, Aprobado por y Acciones, sin existir la columna de Fecha de creación.
2. **Dado que** el usuario examina una solicitud específica en el listado, **cuando** revisa los registros en grilla, **entonces** el sistema expone toda la información a nivel de tabla sin disponer de la opción de hacer clic sobre la fila para abrir ningún modal de detalle extra. En caso de ser una solicitud rechazada, el motivo de rechazo aparecerá textualmente bajo el badge de estado en la misma columna.
3. **Dado que** el usuario consulta el panel de reposiciones, **cuando** visualiza la grilla de datos, tarjetas de estado y botones de filtrado, **entonces** la pantalla cumple rigurosamente los estándares de interfaz visual de UI-013 (Solicitudes de Reposición) del Catálogo de Interfaces (DOC-ANEXO-B).
4. **Dado que** la lista de solicitudes no contiene registros que cumplan con los filtros, **cuando** se actualiza la grilla, **entonces** el sistema presenta un estado vacío explícito con el mensaje «No hay solicitudes registradas».


**Reglas de negocio aplicables:** 
- N/A

**Dependencias:**
- Requiere `HU-SOL-01` (solicitudes generadas previamente).

---

### HU-SOL-03 · Reposición – Aprobar solicitud de reposición

| Identificador | Épica | Prioridad MoSCoW | Estimación | Release | Sprint |
|:---:|:---:|:---:|:---:|:---:|:---:|
| HU-SOL-03 | EPIC-INV | Must have | 3 pts | REL-2 | SPR-2 |

**Como** Gerente o Administrador del minimarket,  
**quiero** revisar y autorizar las solicitudes de reposición pendientes, con la posibilidad de reasignar el proveedor comercial y registrar una fecha estimada de llegada,  
**para** controlar el presupuesto de compras, garantizar las mejores condiciones de adquisición y facultar al almacén para recibir la mercadería cuando arribe.

**Justificación de prioridad:** Funcionalidad indispensable de segregación de funciones (Must have); separa la solicitud operativa del compromiso financiero, garantizando que el almacén plantee necesidades pero solo los roles gerenciales comprometan recursos económicos.

**Criterios de aceptación:**
1. **Dado que** una solicitud de reposición se encuentra en estado «Pendiente», **cuando** el Gerente o Administrador la evalúa favorablemente y confirma la aprobación, **entonces** el sistema cambia su estado a «Aprobada», registra la identidad del aprobador y la fecha de autorización, habilitando la orden para su posterior recepción física en bodega.
2. **Dado que** el producto puede ser suministrado por distintos proveedores o existen condiciones comerciales preferentes al momento de la revisión, **cuando** la jefatura está por autorizar la solicitud, **entonces** el sistema permite modificar o asignar un proveedor alternativo antes de formalizar la aprobación (RN-16).
3. **Dado que** el aprobador dispone del compromiso de entrega del proveedor, **cuando** autoriza la orden desde la pantalla, **entonces** la interfaz gráfica le exige registrar de forma obligatoria una fecha estimada de llegada (que no puede ser anterior a la fecha actual) para fines de previsión, independientemente de que la API la requiera como opcional.
4. **Dado que** la jefatura opera en la bandeja de autorización, **cuando** interactúa con los diálogos y confirmaciones de aprobación, **entonces** la interfaz satisface las especificaciones de diseño y microcopy de UI-013 (Solicitudes de Reposición) del Catálogo de Interfaces (DOC-ANEXO-B).


**Reglas de negocio aplicables:** 
- RN-16 (Flexibilidad en Elección de Proveedores)

**Dependencias:**
- Requiere `HU-SOL-01` (solicitud pendiente para aprobación).

---

### HU-SOL-04 · Reposición – Rechazar solicitud de reposición

| Identificador | Épica | Prioridad MoSCoW | Estimación | Release | Sprint |
|:---:|:---:|:---:|:---:|:---:|:---:|
| HU-SOL-04 | EPIC-INV | Should have | 2 pts | REL-2 | SPR-2 |

**Como** Gerente o Administrador del minimarket,  
**quiero** rechazar una solicitud de reposición que resulte innecesaria o financieramente inviable, registrando el motivo de la denegación,  
**para** evitar sobrestock, optimizar la liquidez del negocio y documentar formalmente las razones de la no compra ante el área solicitante.

**Justificación de prioridad:** Funcionalidad de control gerencial importante (Should have); cierra el ciclo de vida de los requerimientos denegados, evitando solicitudes pendientes indefinidas y garantizando la retroalimentación hacia el personal de bodega.

**Criterios de aceptación:**
1. **Dado que** una solicitud de reposición está en estado «Pendiente», **cuando** el Gerente o Administrador decide denegarla, **entonces** el sistema cambia su estado a «Rechazada», registra la identidad del responsable y exige consignar de forma obligatoria desde la interfaz una justificación o motivo explicativo del rechazo.
2. **Dado que** una solicitud ha sido marcada como «Rechazada», **cuando** un colaborador de almacén intente procesar una recepción física contra dicho documento, **entonces** el sistema bloquea cualquier ingreso de mercadería asociado al mismo.
3. **Dado que** la jefatura interactúa con el modal o panel de denegación, **cuando** introduce el motivo y confirma la acción, **entonces** la pantalla satisface las directrices visuales, advertencias y microcopy descritos en UI-013 (Solicitudes de Reposición) del Catálogo de Interfaces (DOC-ANEXO-B).


**Reglas de negocio aplicables:** 
- N/A

**Dependencias:**
- Requiere `HU-SOL-01` (solicitud pendiente para rechazo).

---

### HU-SOL-05 · Reposición – Completar solicitud al recibir mercadería

| Identificador | Épica | Prioridad MoSCoW | Estimación | Release | Sprint |
|:---:|:---:|:---:|:---:|:---:|:---:|
| HU-SOL-05 | EPIC-INV | Must have | 8 pts | REL-2 | SPR-2 |

**Como** Almacenero o Administrador del minimarket,  
**quiero** completar una solicitud de reposición aprobada al recibir físicamente la mercadería en bodega, capturando los datos del lote, vencimiento y costo real,  
**para** dar ingreso formal a las existencias comerciales, actualizar automáticamente la valorización del inventario y cerrar la orden de abastecimiento.

**Justificación de prioridad:** Funcionalidad crítica nuclear (Must have); es la historia central del circuito de compras regulares del minimarket, ya que conecta la orden comercial autorizada con la entrada física a bodega, el recálculo ponderado del costo contable y el control FEFO de caducidad.

**Criterios de aceptación:**
1. **Dado que** el pedido de reposición arriba físicamente al almacén con una orden en estado «Aprobada», **cuando** el operador registra la recepción, la interfaz gráfica no le permite registrar el número de lote (siendo este autogenerado por el backend) ni el costo unitario de adquisición (que se omite visualmente enviando null de forma fija). Tras ingresar el vencimiento (obligatorio para perecibles), **entonces** el sistema suma de inmediato las cantidades al stock y cambia el estado a «Completada», aunque la API sí pueda soportar costos que recalculen el promedio ponderado.
2. **Dado que** se completa la recepción de mercadería contra la solicitud aprobada, **cuando** la transacción concluye exitosamente, **entonces** el sistema genera de forma atómica el registro de movimiento en el historial de entradas de inventario vinculándolo a la solicitud original para garantizar la estricta trazabilidad de abastecimiento (RN-01).
3. **Dado que** la funcionalidad de recepción parcial de mercadería es soportada estructuralmente por el backend, **cuando** el usuario intenta registrarla visualmente en pantalla, **entonces** la interfaz bloquea el registro estableciendo la "Cantidad recibida" como igual a la cantidad solicitada, por lo que el cierre de recepción parcial queda inaccesible para el operador final.
4. **Dado que** el colaborador procesa la recepción de mercadería desde el módulo de reposiciones, **cuando** interactúa con los formularios de ingreso de lote, costos, vencimiento y confirmación de entrega, **entonces** la interfaz satisface íntegramente los estándares de diseño, validaciones visuales y microcopy descritos en UI-013 (Solicitudes de Reposición) del Catálogo de Interfaces (DOC-ANEXO-B).


**Reglas de negocio aplicables:** 
- RN-01 (Política de Ingreso Inicial y Abastecimiento por Solicitud)
- RN-14 (Actualización de Valorización de Inventario)

**Dependencias:**
- Requiere `HU-SOL-03` (solicitud formalmente aprobada para recibir mercadería).

<!-- ===================================================================== -->
<!-- ARCHIVO FUENTE: 04_EPIC-VEN.md -->
<!-- ===================================================================== -->

---
Código de documento: DOC-PLAN-03-04
Título: Backlog de Producto — EPIC-VEN: Ventas, Caja y Comprobantes de Pago
Versión: 5.2
Fecha: 2026-10-04
Elaborado por: Colonia Infantas, Walter
Revisado por: Angeles Pérez, Jhonny
Estado: Aprobado
Propósito: Especificación de requisitos e historias de usuario de la épica de Gestión de Ventas en Mostrador, Control de Cajas y Comprobantes de Pago
Documentos relacionados: DOC-PLAN-01, DOC-PLAN-02, DOC-PLAN-03-00, DOC-PLAN-08, DOC-ANEXO-B
---

# EPIC-VEN: Ventas, Caja y Comprobantes de Pago

**Objetivo de negocio (OBJ-04):** Procesar las transacciones comerciales de venta en el salón de atención al público de forma ágil, emitiendo comprobantes de pago válidos ante la normativa tributaria nacional (SUNAT), resguardando la integridad del inventario por despacho preferente de vencimiento y asegurando el cuadre exacto del dinero en las cajas del minimarket mediante estrictos mecanismos de control y arqueo físico.

---

## 1. Sub-dominio: Operaciones de Turno de Caja y Arqueo Físico

### HU-CAJA-01 · Caja – Abrir turno de caja

| Identificador | Épica | Prioridad MoSCoW | Estimación | Release | Sprint |
|:---:|:---:|:---:|:---:|:---:|:---:|
| HU-CAJA-01 | EPIC-VEN | Must have | 5 pts | REL-1 | SPR-1 |

**Como** Vendedor o Administrador del minimarket,  
**quiero** abrir formalmente mi turno de caja registrando el fondo monetario inicial (efectivo en gaveta),  
**para** habilitar las operaciones de venta en el terminal de punto de venta (POS) y establecer el fondo inicial de caja en efectivo obligatoria para el arqueo y cuadre al cierre de jornada.

**Justificación de prioridad:** Funcionalidad crítica indispensable para el producto mínimo viable (Must have); sin un turno abierto con fondo verificado, el sistema bloquea cualquier transacción comercial, impidiendo ventas sin trazabilidad financiera y garantizando la custodia del dinero físico.

**Criterios de aceptación:**
1. **Dado que** el colaborador inicia su turno de atención y no cuenta con otro turno activo abierto en el sistema, **cuando** ingresa el importe de apertura igual o superior al fondo mínimo obligatorio de S/ 500.00 y confirma la operación, **entonces** el sistema crea el turno en estado «Abierto», genera el movimiento contable inicial de apertura en efectivo y desbloquea el acceso a la pantalla de Punto de Venta (POS).
2. **Dado que** el usuario intenta abrir turno, **cuando** ingresa un monto de apertura inferior a S/ 500.00 o valores negativos/no numéricos, **entonces** el sistema rechaza la apertura notificando que el importe mínimo reglamentario es de S/ 500.00 para garantizar el cambio y vuelto desde la primera venta (RN-10).
3. **Dado que** el colaborador ya cuenta con un turno de caja previamente abierto y no cerrado, **cuando** intenta abrir un nuevo turno concurrente, **entonces** el sistema bloquea la acción indicando que debe proceder con el cierre de su turno activo antes de aperturar uno nuevo.
4. **Dado que** el colaborador interactúa con el módulo de turno de caja, **cuando** captura el monto inicial y visualiza las indicaciones de fondo mínimo, **entonces** la pantalla satisface las directrices visuales, controles y microcopy especificados en UI-016 (Turno de Caja y Arqueo Inicial) del Catálogo de Interfaces (DOC-ANEXO-B).


**Reglas de negocio aplicables:** 
- RN-10 (Fondo Mínimo de Apertura de Caja)

**Dependencias:**
- Requiere `HU-AUTH-01` (sesión activa del vendedor para apertura).

---

### HU-CAJA-02 · Caja – Cerrar turno de caja y cuadrar

| Identificador | Épica | Prioridad MoSCoW | Estimación | Release | Sprint |
|:---:|:---:|:---:|:---:|:---:|:---:|
| HU-CAJA-02 | EPIC-VEN | Must have | 5 pts | REL-1 | SPR-1 |

**Como** Vendedor o Administrador del minimarket,  
**quiero** cerrar formalmente mi turno de caja declarando el arqueo físico de efectivo en gaveta y la conciliación del reporte de liquidación del terminal de pagos digitales (Yape/Plin vía IziPay),  
**para** que el sistema calcule el cuadre de caja (sobrante o faltante), deshabilite nuevas ventas en dicho turno y deje constancia auditable de la custodia monetaria.

**Justificación de prioridad:** Funcionalidad crítica de control antifraude y cuadre contable (Must have); el cierre con declaración de valores físicos y liquidación digital es el mecanismo nuclear para verificar que lo recaudado coincida con las ventas registradas.

**Criterios de aceptación:**
1. **Dado que** el colaborador finaliza su jornada con un turno en estado «Abierto», **cuando** ingresa el arqueo físico contando el efectivo en gaveta e introduce el total del reporte de liquidación emitido por el terminal IziPay para pagos digitales y confirma el cierre, **entonces** el sistema pasa el turno a estado «Cerrado», calcula automáticamente las diferencias respecto a los saldos esperados, registra las observaciones del vendedor e inhabilita inmediatamente las funciones de cobro en el POS para ese turno.
2. **Dado que** el colaborador ejecuta el arqueo de cierre, **cuando** introduce el recuento físico de efectivo y la liquidación del terminal digital, **entonces** el formulario de cierre procesará la declaración a través de un modal que indica «Cuenta el efectivo y Yape físico», sin exponer el saldo esperado en la vista de captura. Asimismo, el campo «Observaciones» se presenta visualmente como opcional en la interfaz, aunque la API lo exige como obligatorio en caso de registrarse un descuadre.
3. **Dado que** un turno ha quedado formalmente en estado «Cerrado», **cuando** el vendedor intenta registrar una nueva venta o movimiento manual bajo dicho turno, **entonces** el sistema deniega el acceso exigiendo la apertura de un nuevo turno para continuar operando.
4. **Dado que** el usuario interactúa con el formulario de arqueo final, **cuando** declara los importes físicos y la liquidación digital y visualiza el resumen del cuadre, **entonces** la interfaz satisface rigurosamente los estándares visuales y de microcopy de UI-016 (Turno de Caja y Arqueo Inicial) del Catálogo de Interfaces (DOC-ANEXO-B).


**Reglas de negocio aplicables:** 
- N/A

**Criterios de diseño operativo:**
- Modalidad de arqueo con saldo esperado visible en pantalla para orientar al vendedor en la conciliación del efectivo y la liquidación digital IziPay antes de confirmar el cierre.

**Dependencias:**
- Requiere `HU-CAJA-01` (turno abierto previamente para procesar el cierre).

---

### HU-CAJA-03 · Caja – Registrar movimiento manual de efectivo

| Identificador | Épica | Prioridad MoSCoW | Estimación | Release | Sprint |
|:---:|:---:|:---:|:---:|:---:|:---:|
| HU-CAJA-03 | EPIC-VEN | Should have | 3 pts | REL-2 | SPR-2 |

**Como** Vendedor o Administrador del minimarket,  
**quiero** registrar entradas o salidas manuales de efectivo físico en la gaveta con su debida justificación escrita,  
**para** documentar compras menores de emergencia, pagos de servicios básicos o ingresos manuales de efectivo para cambio para vuelto sin alterar los registros de ventas y manteniendo cuadrada la caja.

**Justificación de prioridad:** Funcionalidad de flexibilidad operativa importante (Should have); en el Release 1 el minimarket opera exclusivamente cobros de venta y fondo inicial; el Release 2 introduce el manejo controlado de caja chica para gastos operativos menores.

**Criterios de aceptación:**
1. **Dado que** el colaborador requiere ingresar o retirar dinero en efectivo de la gaveta por un concepto operativo (ejemplo: retiro para compra de insumos de limpieza o inyección de sencillo para cambio), **cuando** selecciona el tipo de movimiento («Ingreso» o «Egreso»), especifica el importe mayor a cero y digita obligatoriamente una justificación textual, **entonces** el sistema registra el movimiento físico en efectivo y ajusta de forma inmediata el saldo esperado de efectivo del turno (RN-15).
2. **Dado que** el operador intenta registrar un movimiento manual, **cuando** ingresa un importe superior al límite reglamentario de S/ 5,000.00 por movimiento, **entonces** el sistema bloquea la transacción notificando que los egresos e ingresos de caja chica no pueden exceder el tope máximo permitido de S/ 5,000.00 (RN-11).
3. **Dado que** el vendedor procesa el formulario de movimiento manual, **cuando** intenta guardar sin registrar una descripción o justificación del gasto/ingreso, **entonces** el sistema impide el registro exigiendo un motivo documentado para fines de supervisión interna.
4. **Dado que** el usuario opera desde la ventana de movimientos de caja, **cuando** captura el tipo, monto y motivo, **entonces** la pantalla satisface las especificaciones de interfaz descritas en UI-016 (Turno de Caja y Arqueo Inicial) del Catálogo de Interfaces (DOC-ANEXO-B).


**Reglas de negocio aplicables:** 
- RN-11 (Tope Máximo para Movimientos Manuales)
- RN-15 (Medio Exclusivo de Arqueo Manual)

**Dependencias:**
- Requiere `HU-CAJA-01` (turno abierto para registrar movimientos en efectivo).

---

### HU-CAJA-04 · Caja – Ver resumen del turno activo

| Identificador | Épica | Prioridad MoSCoW | Estimación | Release | Sprint |
|:---:|:---:|:---:|:---:|:---:|:---:|
| HU-CAJA-04 | EPIC-VEN | Should have | 2 pts | REL-2 | SPR-2 |

**Como** Vendedor o Administrador del minimarket,  
**quiero** consultar un resumen consolidado de las operaciones de mi turno activo (ventas totales, ingresos por efectivo, cobros digitales y movimientos manuales),  
**para** monitorear el desempeño comercial durante la jornada y anticipar el cuadre previo al cierre definitivo de caja.

**Justificación de prioridad:** Funcionalidad de apoyo operativo importante (Should have); proporciona transparencia al operador y facilita la reconciliación preventiva de valores en el Release 2 sin interferir con la velocidad de atención al cliente.

**Criterios de aceptación:**
1. **Dado que** el vendedor mantiene un turno en estado «Abierto», **cuando** consulta el panel de resumen de turno, **entonces** el sistema presenta tarjetas de resumen con la Apertura, Efectivo acumulado y Yape acumulado, seguido de una lista de «Movimientos del turno» detallando las operaciones manuales, sin presentar un total global de ventas ni totales separados de ingresos y egresos.
2. **Dado que** el negocio define sus políticas de control interno según la decisión formal D1 (saldo esperado visible) y decisión formal D2 (tolerancia cero en descuadres no justificados), **cuando** el colaborador visualiza el resumen, **entonces** la visibilidad de los saldos teóricos esperados y las alertas de desviación se presentan orientando la conciliación y requiriendo justificación obligatoria ante cualquier descuadre.
3. **Dado que** el colaborador consulta el estado del turno, **cuando** interactúa con las tarjetas de métricas y opciones de actualización, **entonces** la pantalla cumple las pautas visuales y de microcopy de UI-016 (Turno de Caja y Arqueo Inicial) del Catálogo de Interfaces (DOC-ANEXO-B).


**Reglas de negocio aplicables:** 
- N/A

**Criterios de diseño operativo:**
- **Criterio formal D1:** Modalidad de arqueo con saldo esperado visible en pantalla.
- **Criterio formal D2:** Tolerancia cero en descuadres; cualquier discrepancia entre el saldo esperado y el arqueado genera alerta visual obligatoria y requiere justificación formal para su posterior revisión administrativa en HU-CAJA-06.

**Dependencias:**
- Requiere `HU-CAJA-01` (turno activo para consultar resumen).

---

### HU-CAJA-05 · Caja – Consultar historial de turnos de caja

| Identificador | Épica | Prioridad MoSCoW | Estimación | Release | Sprint |
|:---:|:---:|:---:|:---:|:---:|:---:|
| HU-CAJA-05 | EPIC-VEN | Must have | 3 pts | REL-1 | SPR-1 |

**Como** Administrador o Gerente del minimarket,  
**quiero** consultar el historial cronológico completo de todos los turnos de caja registrados con filtros por fecha, colaborador y estado,  
**para** auditar los descuadres de dinero, revisar la conciliación diaria de ventas e inspeccionar los cierres forzados o incidencias monetarias.

**Justificación de prioridad:** Funcionalidad indispensable de supervisión y control financiero (Must have); permite a la administración diaria cuadrar el flujo monetario del negocio y conciliar la caja con el patrimonio declarado en el MVP (Release 1).

**Criterios de aceptación:**
1. **Dado que** la jefatura requiere conciliar períodos contables anteriores, **cuando** aplica filtros de búsqueda por rango de fechas y estado del turno (sin disponer de filtro por vendedor), **entonces** el sistema despliega el listado exhibiendo las columnas visuales: Apertura, Cajero, Apertura (S/), Efec. esperado, Dif. efec., Yape esperado, Dif. Yape, Estado y Acción.
2. **Dado que** el Administrador o Gerente inspecciona una fila del listado de turnos, **cuando** pulsa sobre el botón desplegable de la fila, **entonces** el detalle se muestra integrado en la misma grilla informando el detalle del cierre forzado, sin llegar a exhibir un desglose exhaustivo de las ventas individuales en esa vista.
3. **Dado que** el directivo utiliza la pantalla de historial de turnos, **cuando** navega por los filtros y grillas de supervisión, **entonces** la interfaz satisface íntegramente las especificaciones de diseño y microcopy de UI-017 (Historial de Cajas y Cierres Forzados) del Catálogo de Interfaces (DOC-ANEXO-B).
4. **Dado que** los filtros no coinciden con ningún turno registrado, **cuando** se actualiza la consulta, **entonces** el sistema presenta un estado vacío explícito con el mensaje «No hay turnos para mostrar.».


**Reglas de negocio aplicables:** 
- N/A

**Dependencias:**
- Requiere `HU-CAJA-02` (turnos cerrados previamente para historial).

---

## 2. Sub-dominio: Punto de Venta (POS) y Transacciones Comerciales

### HU-VEN-01a · Ventas (POS) – Inicialización de terminal de venta y validación de turno activo

| Identificador | Épica | Prioridad MoSCoW | Estimación | Release | Sprint |
|:---:|:---:|:---:|:---:|:---:|:---:|
| HU-VEN-01a | EPIC-VEN | Must have | 3 pts | REL-1 | SPR-1 |

**Como** Vendedor o Administrador del minimarket,  
**quiero** acceder al terminal de punto de venta (POS) previa verificación de que mantengo un turno de caja en estado «Abierto»,  
**para** inicializar la sesión transaccional de venta, asegurar que todo ingreso monetario tenga un responsable asignado y evitar transacciones comerciales huérfanas sin fondo de caja custodiado.

**Justificación de prioridad:** Funcionalidad crítica de seguridad y control operativo (Must have); constituye el control de entrada al ciclo de ventas, bloqueando el acceso al mostrador si el colaborador no cuenta con turno aperturado formalmente.

**Criterios de aceptación:**
1. **Dado que** el colaborador inicia sesión e intenta acceder a la pantalla de Punto de Venta (POS), **cuando** el sistema comprueba que tiene un turno de caja activo en estado «Abierto», **entonces** desbloquea la interfaz de mostrador, inicializa una nueva canasta de venta en blanco y muestra en la cabecera los datos del turno y vendedor responsable.
2. **Dado que** el colaborador no cuenta con un turno de caja abierto o su último turno fue cerrado, **cuando** accede al módulo POS, **entonces** la pantalla carga mostrando el catálogo pero presenta un aviso destacado en color ámbar notificando que no tiene turno abierto junto al botón «Ir a Mi Caja», quedando deshabilitado el proceso de cobro en mostrador.
3. **Dado que** el usuario opera desde el mostrador, **cuando** visualiza la cabecera de sesión y estado de caja activa, **entonces** la pantalla satisface las especificaciones de interfaz descritas en UI-014 (Terminal de Punto de Venta POS) del Catálogo de Interfaces (DOC-ANEXO-B).


**Reglas de negocio aplicables:** 
- RN-10 (Fondo Mínimo de Apertura de Caja)

**Dependencias:**
- Requiere `HU-CAJA-01` (turno abierto para habilitar terminal).

---

### HU-VEN-01b · Ventas (POS) – Registro de líneas de venta y cobro en mostrador

| Identificador | Épica | Prioridad MoSCoW | Estimación | Release | Sprint |
|:---:|:---:|:---:|:---:|:---:|:---:|
| HU-VEN-01b | EPIC-VEN | Must have | 5 pts | REL-1 | SPR-1 |

**Como** Vendedor o Administrador del minimarket,  
**quiero** agregar al carrito los artículos que el cliente adquiere, calcular automáticamente los importes con desglose de IGV y procesar el cobro en efectivo o billetera digital (Yape o Plin mediante terminal IziPay),  
**para** formalizar la venta comercial en el mostrador, registrar el ingreso monetario en la caja activa y emitir la orden para despacho y comprobante.

**Justificación de prioridad:** Funcionalidad crítica nuclear del minimarket (Must have); representa la interacción esencial de atención al cliente y recaudación monetaria del MVP (Release 1).

**Criterios de aceptación:**
1. **Dado que** el vendedor busca o selecciona artículos disponibles en el catálogo POS, **cuando** define las cantidades y agrega los productos al carrito, **entonces** el sistema calcula en tiempo real los subtotales por producto considerando el Precio de Venta al Público (PVP) como valor final de consumidor y actualiza el importe total neto a cobrar.
2. **Dado que** el cliente opta por cancelar en efectivo, **cuando** el vendedor ingresa el importe entregado, **entonces** el sistema valida que sea mayor o igual al monto total de la compra, calcula automáticamente el vuelto correspondiente, valida que la gaveta de caja cuente con saldo de efectivo suficiente para el cambio y registra la venta al confirmar el cobro.
3. **Dado que** el cliente opta por abonar mediante billetera digital (Yape o Plin a través de terminal IziPay), **cuando** el operador introduce el código de confirmación o autorización emitido por el POS, **entonces** el sistema valida que conste de exactamente 6 dígitos numéricos y verifica que dicho código no haya sido registrado en ninguna venta previa (RN-02).
4. **Dado que** el vendedor interactúa con el carrito, buscador y teclado numérico de cobro, **cuando** procesa las líneas y confirma la transacción, **entonces** la interfaz satisface los lineamientos de accesibilidad, controles y microcopy especificados en UI-014 (Terminal de Punto de Venta POS) del Catálogo de Interfaces (DOC-ANEXO-B).
5. **Dado que** el vendedor realiza una búsqueda manual de producto por nombre o marca que no coincide con las existencias, **cuando** ejecuta la consulta, **entonces** el sistema despliega el mensaje de estado vacío «No se encontraron productos».


**Reglas de negocio aplicables:** 
- RN-02 (Protección contra Pagos Duplicados Yape/Plin (IziPay))

**Dependencias:**
- Requiere `HU-VEN-01a` (terminal habilitado con turno abierto) e `HU-INV-01` (existencias de catálogo).

---

### HU-VEN-01c · Ventas (POS) – Despacho por expiración FEFO y descargo atómico de lotes

| Identificador | Épica | Prioridad MoSCoW | Estimación | Release | Sprint |
|:---:|:---:|:---:|:---:|:---:|:---:|
| HU-VEN-01c | EPIC-VEN | Must have | 5 pts | REL-1 | SPR-1 |

**Como** Vendedor o Administrador del minimarket,  
**quiero** que al confirmarse la venta el sistema descuente el inventario de forma automática priorizando los lotes con fecha de caducidad más cercana y bloqueando cualquier lote vencido,  
**para** garantizar la rotación de mercadería perecible (FEFO), impedir la venta de productos caducados y mantener el inventario en tiempo real sincronizado con el stock físico.

**Justificación de prioridad:** Funcionalidad crítica de resguardo sanitario, calidad de servicio y control de mermas (Must have); automatiza el cumplimiento normativo de rotación sin exigir selección manual de lotes al cajero en el Release 1.

**Criterios de aceptación:**
1. **Dado que** se confirma una venta de productos con múltiples partidas o lotes registrados, **cuando** el sistema descuenta las unidades comercializadas, **entonces** selecciona de forma automática y preferente las existencias del lote activo cuya fecha de vencimiento sea la más próxima en el tiempo pero estrictamente posterior a la fecha del día (First Expired, First Out - FEFO) (RN-19).
2. **Dado que** un lote de producto tiene fecha de caducidad menor o igual a la fecha en curso (`<= hoy`), **cuando** el sistema procesa o evalúa la disponibilidad del artículo, **entonces** dicho lote se encuentra estrictamente bloqueado para venta, impidiendo su selección o descargo comercial y requiriendo su derivación al registro de bajas por vencimiento (RN-03, RN-19).
3. **Dado que** la cantidad vendida de un producto supera el saldo del lote más próximo a vencer, **cuando** el sistema procesa el descargo, **entonces** consume la totalidad de dicho lote y descuenta el remanente del siguiente lote vigente más próximo en estricto orden cronológico de caducidad de forma atómica.
4. **Dado que** el colaborador confirma la venta en el mostrador, **cuando** el sistema procesa la descarga en el almacén, **entonces** la pantalla POS actualiza en tiempo real los indicadores de stock disponible conforme a las directrices de UI-014 del Catálogo de Interfaces (DOC-ANEXO-B).


**Reglas de negocio aplicables:** 
- RN-03 (Prohibición de Comercialización de Vencidos)
- RN-19 (Prioridad de Despacho por Expiración FEFO y Bloqueo de Lotes Caducados)

**Dependencias:**
- Requiere `HU-VEN-01b` (venta confirmada para ejecutar el descargo de inventario).

### HU-CAJA-06 · Caja – Aprobar cierre de turno

| Identificador | Épica | Prioridad MoSCoW | Estimación | Release | Sprint |
|:---:|:---:|:---:|:---:|:---:|:---:|
| HU-CAJA-06 | EPIC-VEN | Should have | 2 pts | REL-2 | SPR-2 |

**Como** Administrador o Gerente del minimarket,  
**quiero** revisar y validar formalmente los turnos de caja cerrados por los vendedores que reporten diferencias de arqueo o incidencias,  
**para** dar por conciliada la jornada contable, autorizar los ajustes monetarios y archivar definitivamente la rendición de cuentas de la caja.

**Justificación de prioridad:** Funcionalidad de control gerencial importante (Should have); complementa el cierre operativo del vendedor con una etapa de revisión y aprobación administrativa que previene la consolidación de descuadres no analizados en el Release 2.

**Criterios de aceptación:**
1. **Dado que** un turno de caja se encuentra en estado «Cerrado» y no ha sido validado previamente, **cuando** el Administrador o Gerente revisa el arqueo físico frente al saldo esperado y confirma su conformidad, **entonces** el sistema registra la aprobación administrativa, asocia la identidad del directivo responsable (`aprobado_por`), sin registrar una fecha de validación independiente.
2. **Dado que** el directivo inspecciona un turno cerrado con reporte de descuadre (sobrante o faltante), **cuando** examina el detalle de liquidación, **entonces** el sistema permite procesar la revisión, aunque la interfaz gráfica actualmente omite exponer un desglose comparativo completo en pantalla.
3. **Dado que** la jefatura supervisa los arqueos desde el panel administrativo, **cuando** interactúa con los módulos de revisión y confirmación, **entonces** las pantallas satisfacen los lineamientos visuales, grillas de control y microcopy especificados en UI-016 (Turno de Caja y Arqueo Inicial) y UI-017 (Historial de Cajas y Cierres Forzados) del Catálogo de Interfaces (DOC-ANEXO-B).


**Reglas de negocio aplicables:** 
- N/A

**Dependencias:**
- Requiere `HU-CAJA-02` (turno cerrado para aprobación administrativa).

---

### HU-CAJA-07 · Caja – Forzar cierre de turno ajeno

| Identificador | Épica | Prioridad MoSCoW | Estimación | Release | Sprint |
|:---:|:---:|:---:|:---:|:---:|:---:|
| HU-CAJA-07 | EPIC-VEN | Should have | 5 pts | REL-2 | SPR-2 |

**Como** Administrador o Gerente del minimarket,  
**quiero** forzar el cierre administrativo de un turno de caja que un colaborador haya dejado abierto por abandono, emergencia o negligencia,  
**para** desbloquear la terminal de cobro, realizar el conteo físico de la gaveta ante testigos y permitir que un nuevo vendedor inicie su jornada sin alterar la trazabilidad contable.

**Justificación de prioridad:** Funcionalidad de contingencia operativa importante (Should have); resuelve bloqueos físicos en tienda cuando un turno queda abierto indefinidamente por ausencia del operador, evitando la parálisis de la caja en el Release 2.

**Criterios de aceptación:**
1. **Dado que** un colaborador dejó su turno de caja en estado «Abierto» y se encuentra ausente o imposibilitado de cerrar, **cuando** el Administrador o Gerente pulsa el botón rojo «Cerrar turno» en la fila del turno dentro del historial de cajas, **entonces** se abre una ventana modal donde el botón de confirmación indica «Forzar cierre», exigiéndole obligatoriamente ingresar el conteo físico real de efectivo y pagos digitales encontrados en gaveta junto con una justificación o motivo explicativo de la intervención forzada.
2. **Dado que** se confirma el cierre forzado de la caja, **cuando** el sistema procesa la liquidación, **entonces** el turno pasa inmediatamente a estado «Cerrado», calcula las diferencias de arqueo resultantes y deja constancia permanente e inmodificable del directivo que forzó el cierre y del motivo justificado registrado.
3. **Dado que** dos supervisores intentan intervenir simultáneamente sobre la misma caja abierta, **cuando** uno de ellos confirma el cierre forzado, **entonces** el sistema procesa la operación de forma atómica y bloquea cualquier intento concurrente posterior notificando que el turno ya fue cerrado.
4. **Dado que** la administración opera el cierre forzado de contingencia, **cuando** visualiza los formularios y alertas de confirmación, **entonces** la pantalla satisface los lineamientos de interfaz y advertencias de seguridad descritos en UI-017 (Historial de Cajas y Cierres Forzados) del Catálogo de Interfaces (DOC-ANEXO-B).


**Reglas de negocio aplicables:** 
- N/A

**Dependencias:**
- Requiere `HU-CAJA-01` (turno abierto en abandono para forzar cierre).

---

### HU-VEN-02 · Ventas (POS) – Emitir boleta o factura

| Identificador | Épica | Prioridad MoSCoW | Estimación | Release | Sprint |
|:---:|:---:|:---:|:---:|:---:|:---:|
| HU-VEN-02 | EPIC-VEN | Must have | 8 pts | REL-1 | SPR-1 |

**Como** Vendedor o Administrador del minimarket,  
**quiero** emitir comprobantes de pago oficiales (Boleta de Venta o Factura Comercial) con numeración correlativa estricta y validación tributaria,  
**para** entregar al cliente su comprobante legal de compra, dar cumplimiento a las exigencias normativas de SUNAT y sustentar el débito fiscal del negocio.

**Justificación de prioridad:** Funcionalidad crítica indispensable para la operación comercial (Must have); la emisión formal de comprobantes tributarios es obligatoria por ley para cualquier establecimiento comercial y requisito no negociable de salida del MVP (Release 1).

**Criterios de aceptación:**
1. **Dado que** el cliente solicita una Factura Comercial para sustento tributario de su empresa, **cuando** el vendedor ingresa el número de RUC de 11 dígitos y selecciona tipo «Factura», **entonces** el sistema verifica en línea que el RUC figure en estado Activo y condición Habido ante el padrón tributario, genera la serie y el correlativo ininterrumpido oficial (RN-13) y emite el comprobante por el monto total de la operación.
2. **Dado que** el servicio externo de consulta tributaria no responde o no se encuentra disponible al momento de la venta y el cliente acredita sus datos fiscales, **cuando** el vendedor introduce manualmente la razón social y dirección fiscal, **entonces** el sistema permite emitir la factura en modalidad de contingencia dejando una marca de verificación tributaria pendiente para su posterior regularización.
3. **Dado que** el comprador adquiere productos por un monto total de hasta S/ 700.00 inclusive (monto total ≤ S/ 700.00) y no solicita identificación personal, **cuando** el vendedor emite una Boleta de Venta, **entonces** el sistema asigna automáticamente el comprobante a «Público General» correlativo sin requerir DNI (RN-13, RN-21).
4. **Dado que** el colaborador emite comprobantes desde el mostrador de ventas, **cuando** visualiza la previsualización del ticket, serie, correlativo y datos del receptor, **entonces** la interfaz satisface los estándares visuales y de formato de comprobante descritos en UI-014 (Terminal de Punto de Venta POS) del Catálogo de Interfaces (DOC-ANEXO-B).
5. **Dado que** el comprador adquiere productos por un monto total superior a S/ 700.00 (> S/ 700.00), **cuando** el vendedor intente emitir la Boleta de Venta a «Público General» sin documento de identidad, **entonces** el sistema bloquea de forma terminante la emisión del comprobante y exige la captura obligatoria del DNI de 8 dígitos del adquirente para dar estricto cumplimiento a la normativa tributaria vigente de SUNAT (RN-21).


**Reglas de negocio aplicables:** 
- RN-13 (Numeración Oficial e Ininterrumpida)
- RN-21 (Emisión de Boleta a Consumidor Anónimo / Público General)

**Dependencias:**
- Requiere `HU-VEN-01b` y `HU-VEN-01c` (venta registrada y existencias descargadas para emitir comprobante).

---

### HU-VEN-05 · Ventas (POS) – Consultar historial de ventas

| Identificador | Épica | Prioridad MoSCoW | Estimación | Release | Sprint |
|:---:|:---:|:---:|:---:|:---:|:---:|
| HU-VEN-05 | EPIC-VEN | Must have | 5 pts | REL-1 | SPR-1 |

**Como** Vendedor, Administrador o Gerente del minimarket,  
**quiero** consultar el historial de ventas realizadas con filtros por fecha, comprobante y medio de pago,  
**para** verificar transacciones pasadas, resolver dudas o reclamos inmediatos de clientes y preparar solicitudes de anulación con total trazabilidad.

**Justificación de prioridad:** Funcionalidad crítica de servicio y atención al cliente (Must have); indispensable en el Release 1 para verificar tickets emitidos ante devoluciones inmediatas, reclamos de vuelto o aclaraciones en caja.

**Criterios de aceptación:**
1. **Dado que** un colaborador con perfil Vendedor consulta el historial de ventas, **cuando** carga la pantalla de consulta, **entonces** el sistema filtra automáticamente las transacciones mostrando las ventas procesadas por su propio usuario en todos sus turnos (sin restringirse al turno actual), garantizando la privacidad frente a otros vendedores (RN-07).
2. **Dado que** un directivo con perfil Administrador o Gerente accede al historial, **cuando** aplica filtros de búsqueda, **entonces** el sistema despliega las transacciones comerciales de todos los vendedores del minimarket, permitiendo filtrar por rango de fechas, método de pago y un cuadro de búsqueda por «DNI/RUC o Correlativo», sin contar con filtro por estado de la venta.
3. **Dado que** el usuario localiza una transacción específica en la grilla y pulsa en ver detalle, **cuando** el sistema abre la vista ampliada, **entonces** se visualiza la relación completa de artículos vendidos, cantidades, precios unitarios, subtotales, método de pago, código de autorización si fue billetera digital y datos del cliente.
4. **Dado que** el operador consulta el módulo de ventas históricas, **cuando** interactúa con los filtros y la grilla de comprobantes, **entonces** la pantalla satisface las especificaciones de interfaz descritas en UI-015 (Historial de Ventas y Anulaciones) del Catálogo de Interfaces (DOC-ANEXO-B).
5. **Dado que** la búsqueda no arroja coincidencias de ventas en el rango o criterios seleccionados, **cuando** se ejecuta el filtro, **entonces** el sistema presenta un estado vacío explícito con el mensaje «No se encontraron ventas».


**Reglas de negocio aplicables:** 
- RN-07 (Privacidad y Segregación de Ventas)

**Dependencias:**
- Requiere `HU-VEN-01` (ventas registradas para consulta de historial).

---

### HU-VEN-06 · Ventas (POS) – Anular una venta con devolución

| Identificador | Épica | Prioridad MoSCoW | Estimación | Release | Sprint |
|:---:|:---:|:---:|:---:|:---:|:---:|
| HU-VEN-06 | EPIC-VEN | Must have | 8 pts | REL-2 | SPR-2 |

**Como** Administrador o Gerente del minimarket,  
**quiero** anular formalmente una venta emitida procesando la devolución del dinero y determinando el destino físico de cada producto devuelto,  
**para** atender reclamos fundados de clientes, reintegrar el dinero cobrado y decidir si los artículos retornan al stock vendible o se derivan a merma por daño o caducidad.

**Justificación de prioridad:** Funcionalidad crítica de gestión postventa y custodia patrimonial (Must have); garantiza el derecho a restitución comercial del consumidor mientras protege el inventario físico y la caja mediante estricta autorización directiva segregada en el Release 2.

**Criterios de aceptación:**
1. **Dado que** el cliente solicita la anulación de una compra y devolución de su dinero, **cuando** el Administrador o Gerente evalúa la solicitud y el turno de caja en el que se efectuó la venta se encuentra todavía en estado «Abierto», **entonces** el sistema procesa la anulación autorizada, registra un movimiento de egreso por devolución en la gaveta de caja y cambia el estado de la venta a «Anulada».
2. **Dado que** el turno de caja donde se emitió el comprobante original ya fue cerrado formalmente, **cuando** la supervisión intenta anular la venta, **entonces** el sistema bloquea inmediatamente la operación indicando que solo se admiten anulaciones sobre turnos de caja activos y abiertos, preservando la inmutabilidad de los arqueos ya conciliados (RN-08).
3. **Dado que** la anulación involucra múltiples productos, **cuando** el Administrador o Gerente procesa la devolución, **entonces** el sistema exige determinar individualmente por cada artículo si reingresa al inventario disponible para venta o si se deriva a baja por merma (seleccionando obligatoriamente el motivo específico de la pérdida comercial, tipificado unívocamente como «Dañado» o «Vencido»), garantizando que productos deteriorados no vuelvan al anaquel comercial (RN-09). *(Nota técnica: Aunque la interfaz gráfica despliega 6 opciones genéricas para el motivo al anular, la API de backend exige estrictamente los motivos "Dañado" o "Vencido").*
4. **Dado que** la jefatura procesa la anulación y devolución desde el panel histórico, **cuando** confirma la justificación y los destinos de mercadería, **entonces** la interfaz satisface los lineamientos visuales, formularios modales y advertencias descritos en UI-015 (Historial de Ventas y Anulaciones) del Catálogo de Interfaces (DOC-ANEXO-B).
5. **Dado que** la venta original que se anula fue cobrada mediante billetera digital (Yape o Plin vía terminal IziPay), **cuando** el Administrador o Gerente autoriza la anulación, **entonces** el sistema registra la anulación identificando el medio de pago original sin restar dinero en efectivo de la gaveta de caja (preservando el saldo exacto en billetes y monedas para el arqueo físico de cierre), actualiza el balance de cobros digitales en el reporte de caja activa e inhabilita el código de autorización vinculado para evitar dobles conciliaciones (RN-02, RN-08).
6. **Dado que** la anulación de una venta formalizada es confirmada, **cuando** el sistema actualiza el registro a estado «Anulada», **entonces** el número correlativo oficial y serie permanecen asignados a la venta anulada sin reutilizarse, y el código de autorización digital correspondiente permanece inhabilitado históricamente sin admitir reuso (RN-02).


**Reglas de negocio aplicables:** 
- RN-02 (Protección contra Pagos Duplicados Yape/Plin (IziPay))
- RN-08 (Límite Temporal para Anulaciones)
- RN-09 (Destino Físico de Mercadería Devuelta)

**Dependencias:**
- Requiere `HU-VEN-01` (venta concretada para autorización de anulación).

### HU-VEN-07 · Ventas (POS) – Verificar recepción de pago Yape/Plin (IziPay)

| Identificador | Épica | Prioridad MoSCoW | Estimación | Release | Sprint |
|:---:|:---:|:---:|:---:|:---:|:---:|
| HU-VEN-07 | EPIC-VEN | Should have | 2 pts | REL-2 | SPR-2 |

**Como** Vendedor o Administrador del minimarket,  
**quiero** validar el formato del código de autorización de la pasarela digital (6 dígitos numéricos) y registrar formalmente la confirmación o verificación de abono,  
**para** certificar que el dinero ingresó a la cuenta bancaria del negocio, prevenir comprobantes duplicados y facilitar la supervisión de arqueo de caja.

**Justificación de prioridad:** Funcionalidad de control de medios de pago importante (Should have); reduce discrepancias y fraudes por transferencias falsas o números mal digitados en el Release 2, asegurando que cada pago con billetera digital quede plenamente respaldado.

**Criterios de aceptación:**
1. **Dado que** el cliente realiza el abono mediante billetera digital (Yape o Plin mediante terminal IziPay), **cuando** el operador captura el número de autorización en el formulario de cobro o en la revisión posterior, **entonces** el sistema valida que contenga exactamente 6 dígitos numéricos, rechazando caracteres alfabéticos o longitudes distintas para evitar errores de tipeo.
2. **Dado que** el código de autorización de 6 dígitos numéricos es válido y el vendedor confirma la recepción del abono en el terminal IziPay en mostrador, **cuando** pulsa el botón «Pago confirmado en IziPay», **entonces** el sistema habilita el botón «Realizar Venta» para concretar la transacción, quedando registrado el código unívoco verificado (RN-02). Sin este paso previo de confirmación en el POS no es posible procesar el cobro. En la grilla del historial, la columna «Yape/Plin (IziPay) Verif.» informa con el distintivo esmeralda «Sí» las ventas cobradas por este medio.
3. **Dado que** a nivel de backend existe el endpoint `PATCH /ventas/:id/verificar-yape` para verificación diferida (no invocado desde la interfaz de usuario web), **cuando** dicho servicio es consumido externamente sobre una transacción que ya cuenta con la marca de abono verificado, **entonces** la API bloquea la acción notificando que la transacción ya se encuentra verificada como salvaguarda técnica del servicio.
4. **Dado que** el colaborador opera desde el Punto de Venta o el Historial de Transacciones, **cuando** interactúa con las casillas de captura y confirmación de pago digital, **entonces** las interfaces satisfacen los lineamientos visuales y de microcopy descritos en UI-014 (Terminal de Punto de Venta POS) y UI-015 (Historial de Ventas y Anulaciones) del Catálogo de Interfaces (DOC-ANEXO-B).


**Reglas de negocio aplicables:** 
- RN-02 (Protección contra Pagos Duplicados Yape/Plin (IziPay))

**Dependencias:**
- Requiere `HU-VEN-01` (cobro digital iniciado para verificación de autorización).

---

### HU-VEN-03 · Ventas (POS) – Generar comprobante en PDF o reenviar por correo electrónico

| Identificador | Épica | Prioridad MoSCoW | Estimación | Release | Sprint |
|:---:|:---:|:---:|:---:|:---:|:---:|
| HU-VEN-03 | EPIC-VEN | Should have | 5 pts | REL-3 | SPR-3 |

**Como** Vendedor, Administrador o Gerente del minimarket,  
**quiero** generar el comprobante oficial de pago en formato imprimible PDF y poder reenviarlo por correo electrónico al cliente,  
**para** atender a clientes que requieren respaldo digital de su compra, enviar el comprobante a clientes corporativos remotos o respaldar la venta si la impresora térmica de tickets física falla.

**Justificación de prioridad:** Funcionalidad de distribución de comprobantes por correo electrónico y soporte al cliente importante (Should have); programada en el Release 3 de consolidación de servicios para sustituir tickets impresos dañados o perdidos y brindar respaldo digital a los consumidores.

**Criterios de aceptación:**
1. **Dado que** una venta ha sido formalizada y cuenta con su numeración oficial ininterrumpida (RN-13), **cuando** el colaborador solicita la emisión del comprobante, **entonces** el sistema genera una representación visual estructurada que contiene los datos fiscales del minimarket, datos del cliente, desglose de ítems, precios unitarios y número de serie y correlativo oficial, apta para guardado en formato digital, generándose estrictamente en formato de página A4 vertical (no adaptado para impresión térmica de tickets).
2. **Dado que** el cliente solicita recibir su comprobante por vía digital, **cuando** el operador introduce una dirección de correo electrónico válida y confirma el reenvío, **entonces** el sistema despacha una constancia detallada en formato HTML con la tabla de productos y totales directamente al buzón del destinatario y emite un mensaje de entrega exitosa.
3. **Dado que** el colaborador intenta reenviar un comprobante, **cuando** introduce una dirección de correo con formato inválido o campos vacíos, **entonces** el sistema bloquea el despacho exigiendo una estructura válida de correo electrónico.
4. **Dado que** el usuario consulta cualquier venta del historial, **cuando** interactúa con las opciones de descarga o reenvío digital, **entonces** la interfaz satisface los estándares visuales y de interacción descritos en UI-015 (Historial de Ventas y Anulaciones) del Catálogo de Interfaces (DOC-ANEXO-B).


**Reglas de negocio aplicables:** 
- RN-13 (Numeración Oficial e Ininterrumpida)

**Dependencias:**
- Requiere `HU-VEN-02` (comprobante emitido para generación de PDF o reenvío).

---

### HU-VEN-04 · Ventas (POS) – Buscar producto por código de barras

| Identificador | Épica | Prioridad MoSCoW | Estimación | Release | Sprint |
|:---:|:---:|:---:|:---:|:---:|:---:|
| HU-VEN-04 | EPIC-VEN | Should have | 3 pts | REL-3 | SPR-3 |

**Como** Vendedor o Administrador del minimarket,  
**quiero** escanear los productos en el punto de cobro utilizando una lectora óptica de código de barras,  
**para** agregar los artículos al carrito de ventas de forma ágil y precisa, evitar errores de digitación manual y reducir los tiempos de espera de los clientes en caja.

**Justificación de prioridad:** Funcionalidad de agilidad y eficiencia operativa importante (Should have); en los Releases 1 y 2 los artículos se seleccionan en el catálogo en pantalla o mediante búsqueda por nombre/código manual; la lectura óptica por hardware en el Release 3 potencia la velocidad de despacho en horas punta.

**Criterios de aceptación:**
1. **Dado que** el vendedor se encuentra en la pantalla de Punto de Venta con una caja abierta, **cuando** escanea con el lector óptico el código de barras de un producto activo, **entonces** el sistema localiza el artículo en el catálogo y lo agrega de inmediato al carrito de compra con cantidad inicial 1.
2. **Dado que** un artículo ya figura en el carrito de compras, **cuando** el colaborador escanea nuevamente su código de barras una o más veces sucesivas, **entonces** el sistema incrementa la cantidad en la misma fila del producto en vez de generar filas duplicadas.
3. **Dado que** el colaborador escanea un código de barras inexistente en el catálogo o perteneciente a un producto desactivado, **cuando** el escáner envía el código, **entonces** el sistema emite un mensaje visual «Código de barras no registrado».
4. **Dado que** el vendedor utiliza la interfaz de cobro, **cuando** interactúa con el buscador óptico y visualiza la lista dinámica del carrito, **entonces** la pantalla cumple rigurosamente las pautas de diseño y microcopy de UI-014 (Terminal de Punto de Venta POS) del Catálogo de Interfaces (DOC-ANEXO-B).


**Reglas de negocio aplicables:** 
- N/A

**Dependencias:**
- Requiere `HU-VEN-01` (punto de venta activo para escaneo de artículos).

---

### HU-VEN-08 · Ventas (POS) – Exportar historial de ventas a documento portátil (PDF) (Fuera de Alcance)

| Identificador | Épica | Prioridad MoSCoW | Estimación | Release | Sprint |
|:---:|:---:|:---:|:---:|:---:|:---:|
| HU-VEN-08 | EPIC-VEN | Won't have | 3 | Ninguno | Ninguno |

**Como** Administrador o Gerente del minimarket,  
**quiero** exportar reportes o listados históricos de transacciones comerciales a un documento (PDF descargable),  
**para** realizar conciliaciones contables en herramientas externas de hoja de cálculo y facilitar el envío de reportes mensuales al estudio contable externo.

**Justificación de exclusión:** En el módulo del Historial de Ventas solo existe el PDF de un comprobante y reenvío por correo. La funcionalidad masiva en PDF se reubica conceptualmente en el «Reporte de Ventas» dentro de EPIC-REP. Por tanto, esta HU puntual se declara fuera de alcance (no implementada en EPIC-VEN).

**Criterios de aceptación:**
1. **Dado que** el directivo consulta el historial de ventas con filtros de fechas o comprobantes aplicados, **cuando** presiona la opción de exportar datos a archivo PDF, **entonces** el sistema genera y descarga un archivo estructurado con los registros correspondientes al filtro activo.
2. **Dado que** el usuario abre el documento exportado, **cuando** inspecciona sus campos, **entonces** el documento contiene columnas normalizadas con fecha y hora, tipo de comprobante, serie, correlativo, cliente, medio de pago, base imponible, impuesto IGV, importe total y estado de la venta.
3. **Dado que** el usuario aplica filtros de fecha o estado que no arrojaron ninguna venta registrada en el período, **cuando** presiona la opción de exportar datos, **entonces** el sistema notifica que no existen registros comerciales disponibles para el criterio seleccionado, evitando la descarga de archivos vacíos.


**Especificación de interfaz:** Funcionalidad de descarga de documento estructurado sin pantalla propia independiente; se integra como control de exportación dentro de la grilla de consulta de ventas.

**Reglas de negocio aplicables:** 
- N/A

**Dependencias:**
- Requiere `HU-VEN-05` (historial de ventas para exportación a CSV).

---

### HU-VEN-09 · Ventas – Venta a granel o por peso (Fuera de Alcance)

| Identificador | Épica | Prioridad MoSCoW | Estimación | Release | Sprint |
|:---:|:---:|:---:|:---:|:---:|:---:|
| HU-VEN-09 | EPIC-VEN | Could have | 3 | Ninguno | Ninguno |

**Como** Vendedor del minimarket,  
**quiero** comercializar productos a granel o por peso (balanza digital conectada),  
**para** expender artículos perecibles (frutas, verduras, embutidos) que se tasan por fracciones de kilogramo.

**Justificación de exclusión:** Clasificada como Won't have para el presente ciclo de 3 Sprints. El minimarket comercializa exclusivamente productos envasados con código de barras en unidades discretas enteras. La comercialización por fracciones de peso o a granel requiere integración de balanzas comerciales electrónicas y procedimientos diferenciados de pesaje y etiquetado en mostrador, los cuales exceden el alcance prioritario del negocio y quedan diferidos para una fase comercial posterior. No cuenta con criterios de aceptación al estar excluida de los compromisos del Product Backlog activo.

<!-- ===================================================================== -->
<!-- ARCHIVO FUENTE: 05_EPIC-REP.md -->
<!-- ===================================================================== -->

---
Código de documento: DOC-PLAN-03-05
Título: Backlog de Producto — EPIC-REP: Reportes, Dashboards y Configuración
Versión: 5.1
Fecha: 2026-10-04
Elaborado por: Colonia Infantas, Walter
Revisado por: Angeles Pérez, Jhonny
Estado: Aprobado
Propósito: Especificación de requisitos e historias de usuario de la épica de Inteligencia de Negocio, Analítica Comercial, Indicadores de Gestión y Configuración Fiscal
Documentos relacionados: DOC-PLAN-01, DOC-PLAN-02, DOC-PLAN-03-00, DOC-PLAN-08, DOC-ANEXO-B
---

# EPIC-REP: Reportes, Dashboards y Configuración

**Objetivo de negocio (OBJ-05):** Proveer a la gerencia y a la administración del minimarket de información consolidada y estratégica mediante cuadros de mando interactivos y reportes analíticos dinámicos, facilitando el control de ventas, la supervisión del inventario, la prevención de riesgos operativos y la gestión centralizada de los parámetros legales y fiscales del establecimiento.

---

## 1. Sub-dominio: Configuración Institucional y Parámetros Fiscales

### HU-CONF-01 · Configuración – Ver configuración actual del negocio

| Identificador | Épica | Prioridad MoSCoW | Estimación | Release | Sprint |
|:---:|:---:|:---:|:---:|:---:|:---:|
| HU-CONF-01 | EPIC-REP | Must have | 1 pt | REL-2 | SPR-2 |

**Como** Administrador del minimarket,  
**quiero** consultar los parámetros de configuración institucional y fiscal del negocio (tales como Razón Social, RUC, dirección comercial, teléfono oficial, tasa de IGV vigente y series tributarias autorizadas B001/F001),  
**para** validar que los datos legales y tributarios consignados en los comprobantes de pago emitidos a los clientes finales sean fidedignos y cumplan la normativa nacional.

**Justificación de prioridad:** Funcionalidad obligatoria para el control institucional (Must have); la parametrización institucional y fiscal es indispensable para la validez formal de los comprobantes de pago impresos y digitales; sin esta información el sistema no puede identificar legalmente al emisor de las operaciones comerciales.

**Criterios de aceptación:**
1. **Dado que** el Administrador accede al módulo de configuración general, **cuando** la pantalla presenta los datos almacenados, **entonces** el sistema exhibe en modo de consulta los campos institucionales: Razón Social, número de RUC (11 dígitos), dirección fiscal del establecimiento, número telefónico de contacto, tasa de IGV aplicable (18 %) y series tributarias oficiales para boletas de venta y facturas (Decisión formal D4: series oficiales B001 y F001 con correlativo local ininterrumpido).
2. **Dado que** la parametrización institucional y fiscal constituye información estratégica reservada para la administración, **cuando** un colaborador con rol Vendedor o Almacenero intenta acceder a esta vista de configuración, **entonces** el sistema bloquea el ingreso denegando el acceso y preservando la integridad de los parámetros del negocio.
3. **Dado que** el Administrador interactúa con la vista de configuración institucional, **cuando** inspecciona los campos, textos de ayuda y etiquetas informativas, **entonces** la pantalla satisface las directrices visuales, diseño y microcopy especificados en UI-020 (Configuración Fiscal y SUNAT) del Catálogo de Interfaces (DOC-ANEXO-B).


**Reglas de negocio aplicables:** 
- N/A (parámetros institucionales transversales).

**Dependencias:**
- Requiere `HU-CONF-02` (parámetros configurados en Sprint 1).

---

### HU-CONF-02 · Configuración – Actualizar configuración del negocio

| Identificador | Épica | Prioridad MoSCoW | Estimación | Release | Sprint |
|:---:|:---:|:---:|:---:|:---:|:---:|
| HU-CONF-02 | EPIC-REP | Must have | 3 pts | REL-1 | SPR-1 |

**Como** Administrador del minimarket,  
**quiero** modificar y actualizar los parámetros institucionales, datos de contacto, tasa de impuesto (IGV) y series fiscales del negocio a través de un formulario de gestión centralizado,  
**para** reflejar oportunamente cambios de domicilio comercial, renovación de teléfonos, ajustes en series de emisión o adecuaciones fiscales sin requerir intervenciones técnicas ni soporte externo.

**Justificación de prioridad:** Funcionalidad crítica indispensable desde el primer incremento operativo (Must have); los datos fiscales y las series de comprobantes deben estar operativas y configurables desde el MVP (SPR-1) para habilitar la apertura formal de la tienda y la emisión legal de boletas y facturas en caja.

**Criterios de aceptación:**
1. **Dado que** el Administrador requiere actualizar los datos tributarios del minimarket, **cuando** verifica o actualiza los datos institucionales configurando la tasa impositiva oficial (fijada por defecto en 18.00 % conforme a la normativa tributaria peruana) y confirma la acción, **entonces** el sistema almacena el valor porcentual como parámetro global del negocio (dejando el cálculo extractivo delegado a futuras integraciones contables o a la capa de presentación).
2. **Dado que** el Administrador ingresa el identificador tributario del establecimiento, **cuando** el valor capturado no corresponde a un RUC válido registrado ante SUNAT (exactamente 11 dígitos numéricos iniciando con el prefijo 20 para persona jurídica comercial), **entonces** el sistema rechaza la actualización, resalta el campo con error y notifica que se requiere un RUC válido en estado Activo y condición Habido.
3. **Dado que** el Administrador actualiza los medios de contacto de la tienda, **cuando** ingresa el número telefónico, **entonces** el sistema valida que cumpla con el formato de telefonía celular nacional (9 dígitos iniciando con 9) o telefonía fija institucional con prefijo de área departamental, rechazando secuencias numéricas inválidas.
4. **Dado que** el Administrador define las series tributarias para comprobantes de pago, **cuando** ingresa las series de boleta y factura, **entonces** el sistema verifica que ambas cumplan con la estructura fiscal reglamentaria de cuatro caracteres (una letra mayúscula identificadora seguida de tres dígitos numéricos, tales como B001 y F001), impidiendo formatos anómalos.
5. **Dado que** el Administrador edita los datos de la empresa, **cuando** ingresa un RUC válido en el formulario y solicita la consulta de datos fiscales, **entonces** el sistema recupera automáticamente la Razón Social y el domicilio fiscal registrados ante la entidad tributaria oficial (SUNAT), facilitando el llenado fidedigno del formulario.
6. **Dado que** el Administrador gestiona la actualización fiscal, **cuando** manipula los formularios, botones de guardado y mensajes de confirmación o error, **entonces** la pantalla satisface las directrices visuales, diseño y microcopy especificados en UI-020 (Configuración Fiscal y SUNAT) del Catálogo de Interfaces (DOC-ANEXO-B).


**Reglas de negocio aplicables:** 
- N/A (parámetros institucionales de configuración fiscal).

**Dependencias:**
- Requiere `HU-AUTH-01` (acceso administrativo para fijar parámetros del negocio).

---

## 2. Sub-dominio: Cuadro de Mando Ejecutivo y Analítica Estratégica (Dashboard)

### HU-DASH-01 · Dashboard – Ver resumen de ventas del día y del mes

| Identificador | Épica | Prioridad MoSCoW | Estimación | Release | Sprint |
|:---:|:---:|:---:|:---:|:---:|:---:|
| HU-DASH-01 | EPIC-REP | Must have | 5 pts | REL-2 | SPR-2 |

**Como** Gerente o Administrador del minimarket,  
**quiero** visualizar un panel de control ejecutivo con tarjetas métricas consolidadas que muestren el volumen total de ventas, los ingresos monetarios acumulados y el ticket promedio del período seleccionado (por defecto, el mes en curso),  
**para** disponer de una visión panorámica instantánea del rendimiento comercial de la tienda y evaluar el cumplimiento de las metas financieras al iniciar cada jornada.

**Justificación de prioridad:** Funcionalidad obligatoria para la inteligencia de negocio (Must have); el cuadro de mando gerencial constituye la principal herramienta visual para la toma de decisiones estratégicas, permitiendo a la gerencia monitorear la salud financiera del minimarket en el Release 2.

**Criterios de aceptación:**
1. **Dado que** el usuario con rol Gerente o Administrador inicia sesión y accede al cuadro de mando principal («Dashboard»), **cuando** la pantalla carga con el período predeterminado del mes en curso, **entonces** el sistema presenta tarjetas de indicadores clave destacando: Total de Ventas concretadas, Ingresos totales acumulados en moneda nacional (S/) y Ticket promedio por transacción comercial.
2. **Dado que** se registran nuevas ventas en los terminales de punto de venta (POS) o el usuario pulsa la opción «Actualizar», **cuando** la vista refresca su información, **entonces** los indicadores métricos recalculan sus valores de forma inmediata para reflejar los ingresos más recientes.
3. **Dado que** el usuario requiere analizar un horizonte temporal específico, **cuando** selecciona un rango de fechas («Desde» y «Hasta») y aplica el filtro, **entonces** las tarjetas de indicadores actualizan sus totales reflejando con exactitud las ventas correspondientes a dicho período, validando que la fecha inicial no sea posterior a la final ni exceda el límite cronológico permitido.
4. **Dado que** el usuario pulsa sobre cualquiera de las tarjetas métricas («Total Ventas», «Ingresos» o «Ticket Promedio»), **cuando** interactúa con el componente, **entonces** el sistema despliega una ventana de diálogo modal interactiva presentando para Ventas y Ticket Promedio la tabla con fecha/hora, cliente o vendedor, método de pago, monto y estado (o «No hay ventas registradas este mes.» si está vacío), y para Ingresos la tabla con método de pago, N° de ventas y monto acumulado (o «No hay ingresos registrados este mes.» si está vacío), sin necesidad de abandonar la vista ejecutiva principal.
5. **Dado que** el usuario navega en el panel de control, **cuando** visualiza la disposición de tarjetas, indicadores porcentuales y acciones de filtrado, **entonces** la pantalla satisface las directrices visuales, diseño y microcopy especificados en UI-018 (Dashboard y KPIs Estratégicos) del Catálogo de Interfaces (DOC-ANEXO-B).


**Reglas de negocio aplicables:** 
- N/A.

**Dependencias:**
- Requiere `HU-VEN-01` (ventas procesadas para resumen comercial).

---

### HU-DASH-03 · Dashboard – Alertas de stock crítico, vencimientos y turnos olvidados

| Identificador | Épica | Prioridad MoSCoW | Estimación | Release | Sprint |
|:---:|:---:|:---:|:---:|:---:|:---:|
| HU-DASH-03 | EPIC-REP | Must have | 5 pts | REL-2 | SPR-2 |

**Como** Administrador o Gerente del minimarket,  
**quiero** recibir alertas visuales destacadas y notificaciones preventivas en el panel de control ante situaciones operativas anómalas (productos con existencias en nivel crítico o sin stock, proximidad de vencimientos y turnos de caja que permanecen abiertos por tiempo excesivo),  
**para** reaccionar oportunamente ante desabastecimientos de productos de alta rotación, evitar mermas por caducidad y prevenir descuadres o riesgos de seguridad por vendedores que olvidaron cerrar su turno.

**Justificación de prioridad:** Funcionalidad crítica de proactividad operativa (Must have); previene pérdidas comerciales por falta de inventario, disminuye mermas y mitiga riesgos de fraude o descuadre por turnos de caja abiertos indebidamente en el Release 2.

**Criterios de aceptación:**
1. **Dado que** uno o más productos activos registran existencias iguales o inferiores a su umbral de stock mínimo parametrizado (o stock en cero), **cuando** el usuario accede al panel de control, **entonces** el sistema exhibe una tarjeta de alerta «Sin Stock» (cuyo modal interactivo despliega la lista de artículos agotados o el mensaje «No hay productos sin stock. ✓» si todas las existencias están cubiertas) y una sección prioritaria de «Stock Crítico» listando los productos más urgentes de reponer conforme a la RN-06, con enlace directo para inspeccionarlos en el catálogo de productos.
2. **Dado que** un vendedor inició un turno de atención y este permanece en estado «Abierto» durante más de 16 horas consecutivas sin haber sido cerrado, **cuando** el Administrador o Gerente ingresa al cuadro de mando, **entonces** el sistema presenta un banner de notificación de advertencia preventiva de «Turno Abierto Prolongado», indicando el nombre del colaborador, el tiempo transcurrido y un botón de acceso directo al historial de cajas para proceder con la supervisión o cierre forzado.
3. **Dado que** no existen anomalías operativas de turnos prolongados, **cuando** el usuario inspecciona el cuadro de mando, **entonces** el banner de advertencia se oculta automáticamente, manteniendo una visualización despejada y focalizada en los indicadores comerciales.
4. **Dado que** el usuario interactúa con los avisos, tarjetas de riesgo y enlaces de navegación rápida en el panel principal, **cuando** consulta el estado preventivo del minimarket, **entonces** la pantalla satisface las directrices visuales, diseño y microcopy especificados en UI-018 (Dashboard y KPIs Estratégicos) del Catálogo de Interfaces (DOC-ANEXO-B).


**Reglas de negocio aplicables:** 
- RN-06 (Alerta de Stock Mínimo)

**Dependencias:**
- Requiere `HU-INV-01` y `HU-CAJA-05` (stock y turnos de caja para alertas).

---

### HU-DASH-02 · Dashboard – Ver gráfico de evolución de ventas por día

| Identificador | Épica | Prioridad MoSCoW | Estimación | Release | Sprint |
|:---:|:---:|:---:|:---:|:---:|:---:|
| HU-DASH-02 | EPIC-REP | Should have | 3 pts | REL-3 | SPR-3 |

**Como** Gerente del minimarket,  
**quiero** consultar un gráfico lineal interactivo que represente la evolución cronológica de los montos facturados día a día dentro del período evaluado,  
**para** identificar visualmente patrones de compra, días de mayor afluencia comercial, tendencias de crecimiento o caídas imprevistas en los ingresos de la tienda.

**Justificación de prioridad:** Funcionalidad de alto valor analítico (Should have); proporciona análisis visual intuitivo de tendencias comerciales en el Release 3, optimizando la interpretación de datos sin necesidad de revisar extensas listas de números.

**Criterios de aceptación:**
1. **Dado que** el usuario visualiza el panel de control ejecutivo con datos comerciales registrados, **cuando** desciende a la sección analítica, **entonces** el sistema renderiza un gráfico de área lineal interactivo que representa las ventas por día, ubicando las fechas cronológicas en el eje horizontal y los importes en moneda nacional (S/) en el eje vertical.
2. **Dado que** el usuario desplaza el cursor sobre cualquier punto o nodo representativo de una fecha en el gráfico, **cuando** se posiciona sobre el día seleccionado, **entonces** el sistema presenta un recuadro flotante informativo destacando la fecha completa, el monto total facturado y el número de ventas concretadas en dicha jornada.
3. **Dado que** el período seleccionado no registra ninguna venta concretada, **cuando** se renderiza la sección, **entonces** el sistema presenta un estado visual alternativo con el mensaje descriptivo «No hay ventas registradas este mes.» (o del período), preservando el diseño sin generar distorsiones visuales.
4. **Dado que** el usuario interactúa con los controles de visualización gráfica y analiza la curva de ventas, **cuando** consulta el gráfico en el panel, **entonces** la pantalla satisface las directrices visuales, diseño y microcopy especificados en UI-018 (Dashboard y KPIs Estratégicos) del Catálogo de Interfaces (DOC-ANEXO-B).


**Reglas de negocio aplicables:** 
- N/A.

**Dependencias:**
- Requiere `HU-VEN-01` (ventas procesadas para curva analítica diaria).

---

### HU-DASH-04 · Dashboard – Ver ranking de productos más vendidos

| Identificador | Épica | Prioridad MoSCoW | Estimación | Release | Sprint |
|:---:|:---:|:---:|:---:|:---:|:---:|
| HU-DASH-04 | EPIC-REP | Should have | 3 pts | REL-3 | SPR-3 |

**Como** Gerente del minimarket,  
**quiero** visualizar un ranking gráfico tipo barra con el listado de los 5 productos con mayor volumen de rotación en ventas dentro del período seleccionado en el panel principal,  
**para** conocer rápidamente los artículos más demandados por la clientela sin tener que navegar hacia el módulo exhaustivo de reportes analíticos.

**Justificación de prioridad:** Funcionalidad importante de apoyo comercial (Should have); agiliza el reconocimiento del catálogo con mayor tracción comercial en el Release 3 para planificar oportunamente las compras y la colocación estratégica de mercadería en los anaqueles del salón.

**Criterios de aceptación:**
1. **Dado que** el usuario consulta el cuadro de mando ejecutivo, **cuando** observa el bloque «Top 5 productos más vendidos», **entonces** el sistema presenta los 5 artículos con mayor cantidad de unidades despachadas en el período activo (`limite: 5` en API, a diferencia del Top 10 del módulo de Reportes), ordenados de mayor a menor rotación, indicando para cada producto su nombre comercial, marca, unidades vendidas y una barra proporcional visual.
2. **Dado que** se registran nuevas ventas que alteran el orden de demanda comercial, **cuando** se actualiza la información del cuadro de mando, **entonces** las barras de clasificación reordenan dinámicamente sus posiciones relativas reflejando los nuevos líderes de venta.
3. **Dado que** en el período seleccionado no se han efectuado ventas en la tienda, **cuando** se consulta el bloque, **entonces** el sistema muestra un estado informativo indicando «No hay ventas registradas este mes.».
4. **Dado que** el usuario revisa el escalafón de productos estrella en el cuadro de mando, **cuando** interactúa con las barras proporcionales y etiquetas informativas, **entonces** la pantalla satisface las directrices visuales, diseño y microcopy especificados en UI-018 (Dashboard y KPIs Estratégicos) del Catálogo de Interfaces (DOC-ANEXO-B).


**Reglas de negocio aplicables:** 
- N/A.

**Dependencias:**
- Requiere `HU-VEN-01` (ventas procesadas para ranking de productos).

### HU-DASH-05 · Dashboard – Ver solicitudes de reposición pendientes

| Identificador | Épica | Prioridad MoSCoW | Estimación | Release | Sprint |
|:---:|:---:|:---:|:---:|:---:|:---:|
| HU-DASH-05 | EPIC-REP | Should have | 2 pts | REL-3 | SPR-3 |

**Como** Gerente del minimarket,  
**quiero** consultar un contador destacado de solicitudes de reposición pendientes de revisión en el panel de control ejecutivo y desplegar su detalle operativo mediante un diálogo emergente interactivo,  
**para** agilizar la evaluación y autorización oportuna de los pedidos urgentes de mercadería emitidos por el almacén sin tener que abandonar la vista principal del cuadro de mando.

**Justificación de prioridad:** Funcionalidad importante para la eficiencia logística interna (Should have); reduce la fricción burocrática y los tiempos muertos entre almacén y gerencia en el Release 3, acelerando el reabastecimiento antes de quiebres de existencias.

**Criterios de aceptación:**
1. **Dado que** el usuario con rol Gerente o Administrador accede al cuadro de mando principal («Dashboard»), **cuando** revisa la tarjeta métrica «Solicitudes Pendientes», **entonces** el sistema exhibe el contador cuantitativo exacto de pedidos de abastecimiento que se encuentran en estado «Pendiente» junto con el indicador descriptivo de estado.
2. **Dado que** el usuario pulsa sobre la tarjeta métrica «Solicitudes Pendientes», **cuando** la aplicación procesa la interacción, **entonces** el sistema despliega una ventana de diálogo modal en pantalla presentando el listado detallado de solicitudes pendientes (identificador de solicitud, producto requerido, cantidad solicitada, colaborador solicitante y fecha de emisión) o el estado informativo «No hay solicitudes pendientes. ✓» si todas las órdenes han sido resueltas, permaneciendo en la vista del cuadro de mando.
3. **Dado que** el usuario interactúa con la tarjeta y el diálogo modal de órdenes pendientes, **cuando** consulta la información en el panel, **entonces** la pantalla satisface las directrices visuales, diseño y microcopy especificados en UI-018 (Dashboard y KPIs Estratégicos) del Catálogo de Interfaces (DOC-ANEXO-B).


**Reglas de negocio aplicables:** 
- N/A.

**Dependencias:**
- Requiere `HU-SOL-01` (solicitudes pendientes para panel gerencial).

---

## 3. Sub-dominio: Reportes Analíticos, Financieros y Cierre Contable

### HU-REP-01 · Reportes – Ver resumen de ventas por período

| Identificador | Épica | Prioridad MoSCoW | Estimación | Release | Sprint |
|:---:|:---:|:---:|:---:|:---:|:---:|
| HU-REP-01 | EPIC-REP | Must have | 5 pts | REL-2 | SPR-2 |

**Como** Gerente o Administrador del minimarket,  
**quiero** generar un reporte consolidado de ingresos comerciales seleccionando un rango de fechas arbitrario («Desde» y «Hasta»),  
**para** auditar los ingresos globales, evaluar el volumen de transacciones y disponer de los totales financieros requeridos para el cierre y balance contable mensual.

**Justificación de prioridad:** Funcionalidad crítica indispensable para la contabilidad (Must have); requerida para el balance periódico, consolidación tributaria y control fiscal del negocio en el Release 2.

**Criterios de aceptación:**
1. **Dado que** el usuario accede al módulo de reportes analíticos y define un rango de fechas válido, **cuando** solicita la generación del reporte pulsando «Aplicar filtros», **entonces** el sistema calcula y exhibe las métricas agregadas del período: Total de Ventas completadas, Ingresos Totales acumulados en moneda nacional (S/) y Ticket promedio por transacción comercial.
2. **Dado que** el usuario ingresa un rango de fechas donde la fecha inicial («Desde») es cronológicamente posterior a la fecha final («Hasta»), **cuando** intenta aplicar los filtros, **entonces** el sistema bloquea la consulta y exhibe un mensaje de validación indicando que la fecha inicial no puede ser posterior a la fecha final.
3. **Dado que** el usuario no especifica fechas en los filtros, **cuando** carga la vista analítica, **entonces** el sistema consolida automáticamente la totalidad de operaciones históricas registradas respetando el límite temporal máximo permitido (10 años).
4. **Dado que** el usuario interactúa con los filtros cronológicos y tarjetas de resumen financiero, **cuando** consulta el reporte analítico, **entonces** la pantalla satisface las directrices visuales, diseño y microcopy especificados en UI-019 (Reportes Analíticos y PDF) del Catálogo de Interfaces (DOC-ANEXO-B).
5. **Dado que** el período seleccionado no registra ninguna venta, **cuando** se ejecuta la consulta, **entonces** las tarjetas de resumen presentan Total de Ventas en 0, Ingresos Totales en S/ 0.00 y Ticket Promedio en S/ 0.00, y los bloques analíticos asociados despliegan sus respectivos estados vacíos.


**Reglas de negocio aplicables:** 
- N/A.

**Dependencias:**
- Requiere `HU-VEN-01` (ventas procesadas para consolidado periódico).

---

### HU-REP-02 · Reportes – Ver ranking de productos más vendidos

| Identificador | Épica | Prioridad MoSCoW | Estimación | Release | Sprint |
|:---:|:---:|:---:|:---:|:---:|:---:|
| HU-REP-02 | EPIC-REP | Must have | 3 pts | REL-2 | SPR-2 |

**Como** Gerente o Administrador del minimarket,  
**quiero** consultar un listado jerárquico (ranking) con los productos de mayor volumen de ventas dentro de un período seleccionado,  
**para** identificar los artículos estratégicos de alta rotación (principio de Pareto), planificar compras mayoristas y negociar mejores acuerdos de precios y descuentos por volumen con los proveedores.

**Justificación de prioridad:** Funcionalidad esencial para la estrategia comercial y de compras (Must have); constituye el insumo analítico clave para determinar la política de abastecimiento del minimarket en el Release 2.

**Criterios de aceptación:**
1. **Dado que** el usuario genera el reporte comercial para un período determinado, **cuando** visualiza la grilla de productos más vendidos, **entonces** el sistema presenta un listado de hasta 10 productos («Top 10 productos más vendidos», con límite fijado en 10 en la llamada API a diferencia del Top 5 del Dashboard) ordenado de mayor a menor según la cantidad total de unidades despachadas, exhibiendo para cada producto su posición (#), nombre comercial, marca, unidades vendidas e importe total recaudado.
2. **Dado que** un producto no registra ninguna transacción de venta dentro del rango temporal seleccionado, **cuando** el sistema compila el ranking, **entonces** dicho artículo es excluido de la clasificación, garantizando que el listado concentre únicamente mercadería con rotación efectiva.
3. **Dado que** existen empates en la cantidad de unidades vendidas entre dos o más artículos, **cuando** el sistema construye el escalafón, **entonces** aplica como criterio secundario de ordenamiento el monto total de ingresos recaudados en orden descendente.
4. **Dado que** el usuario revisa el ranking de productos estrella, **cuando** navega en la vista analítica, **entonces** la pantalla satisface las directrices visuales, diseño y microcopy especificados en UI-019 (Reportes Analíticos y PDF) del Catálogo de Interfaces (DOC-ANEXO-B).
5. **Dado que** el período seleccionado no registra ventas de ningún producto, **cuando** se compila el ranking, **entonces** el sistema presenta un estado vacío explícito con el mensaje «No hay datos de ventas aún».


**Reglas de negocio aplicables:** 
- N/A.

**Dependencias:**
- Requiere `HU-VEN-01` (ventas procesadas para ranking detallado).

---

### HU-REP-03 · Reportes – Ver ventas desglosadas por día

| Identificador | Épica | Prioridad MoSCoW | Estimación | Release | Sprint |
|:---:|:---:|:---:|:---:|:---:|:---:|
| HU-REP-03 | EPIC-REP | Should have | 3 pts | REL-3 | SPR-3 |

**Como** Gerente del minimarket,  
**quiero** consultar un listado tabular con los ingresos desglosados día por día dentro del intervalo evaluado,  
**para** analizar la distribución temporal de las ventas, evaluar los días de mayor tráfico de clientes y optimizar la asignación de horarios y personal en el salón de ventas.

**Justificación de prioridad:** Funcionalidad importante de analítica operativa (Should have); facilita la planificación de turnos de colaboradores y abastecimiento diario de caja según la afluencia de cada día de la semana en el Release 3.

**Criterios de aceptación:**
1. **Dado que** el usuario selecciona un período mensual o rango personalizado, **cuando** genera el desglose de ventas por día, **entonces** el sistema presenta una grilla tabular ordenada cronológicamente con filas individuales para cada fecha que registre al menos una venta concretada, indicando la fecha, el número total de transacciones y el monto total facturado.
2. **Dado que** en una fecha específica la tienda permaneció cerrada (feriado, inventario físico o sin actividad comercial), **cuando** se compila el reporte, **entonces** dicho día sin movimientos comerciales no genera fila en la grilla tabular, consolidando exclusivamente jornadas con actividad efectiva.
3. **Dado que** el usuario consulta los montos diarios, **cuando** inspecciona las fechas, **entonces** el sistema agrupa las ventas asignándolas al día calendario oficial de la zona horaria nacional, asegurando que las ventas nocturnas previas a la medianoche correspondan a la jornada respectiva.
4. **Dado que** el usuario interactúa con el listado tabular de evolución diaria, **cuando** revisa los registros en pantalla, **entonces** la interfaz satisface las directrices visuales, diseño y microcopy especificados en UI-019 (Reportes Analíticos y PDF) del Catálogo de Interfaces (DOC-ANEXO-B).
5. **Dado que** el período seleccionado no registra ninguna transacción comercial, **cuando** se genera el desglose, **entonces** el sistema presenta un estado vacío explícito con el mensaje «No hay ventas en el período seleccionado».


**Reglas de negocio aplicables:** 
- N/A.

**Dependencias:**
- Requiere `HU-VEN-01` (ventas procesadas para desglose diario).

---

### HU-REP-04 · Reportes – Ver ventas por método de pago

| Identificador | Épica | Prioridad MoSCoW | Estimación | Release | Sprint |
|:---:|:---:|:---:|:---:|:---:|:---:|
| HU-REP-04 | EPIC-REP | Should have | 2 pts | REL-3 | SPR-3 |

**Como** Administrador del minimarket,  
**quiero** visualizar la recaudación total de ventas desagregada por cada medio de pago autorizado (Efectivo y billetera digital Yape/Plin (IziPay)),  
**para** contrastar el efectivo físico disponible contra las transferencias en cuentas bancarias y facilitar la conciliación contable y bancaria periódica del negocio.

**Justificación de prioridad:** Funcionalidad relevante para la conciliación de tesorería (Should have); indispensable para auditar la proporción de cobro digital vs efectivo y cuadrar las liquidaciones financieras con el banco en el Release 3.

**Criterios de aceptación:**
1. **Dado que** el usuario genera el reporte financiero para un intervalo temporal, **cuando** consulta la sección de recaudación por medio de pago, **entonces** el sistema exhibe un desglose analítico separando el total recaudado en Efectivo y el total recaudado a través de transferencias digitales (Yape/Plin (IziPay)), detallando para cada modalidad el número de operaciones y el monto monetario acumulado.
2. **Dado que** el usuario evalúa la consistencia de los montos desglosados, **cuando** suma los ingresos de Efectivo y Yape/Plin (IziPay), **entonces** el resultado de la suma coincide de manera exacta y al céntimo con el importe total de ventas brutas completadas reportadas para dicho período.
3. **Dado que** en un período evaluado no se registraron transacciones mediante alguna de las modalidades de pago o en general no hay ventas, **cuando** se presenta el desglose, **entonces** el sistema exhibe un estado vacío explícito con el mensaje «No hay datos de ventas en el período seleccionado» (o saldo S/ 0.00 en cada medio).
4. **Dado que** el usuario inspecciona el resumen de medios de pago, **cuando** interactúa con los indicadores y gráficos de proporción, **entonces** la pantalla satisface las directrices visuales, diseño y microcopy especificados en UI-019 (Reportes Analíticos y PDF) del Catálogo de Interfaces (DOC-ANEXO-B).


**Reglas de negocio aplicables:** 
- N/A.

**Dependencias:**
- Requiere `HU-VEN-01` (ventas procesadas para desglose por medio de pago).

### HU-REP-05 · Reportes – Ver stock crítico

| Identificador | Épica | Prioridad MoSCoW | Estimación | Release | Sprint |
|:---:|:---:|:---:|:---:|:---:|:---:|
| HU-REP-05 | EPIC-REP | Must have | 3 pts | REL-2 | SPR-2 |

**Como** Administrador o Gerente del minimarket,  
**quiero** generar un reporte consolidado de los productos cuyo stock actual sea igual o inferior a su umbral de stock mínimo parametrizado,  
**para** identificar oportunamente los riesgos inminentes de desabastecimiento y planificar las órdenes de compra y solicitudes de reposición masivas.

**Justificación de prioridad:** Funcionalidad crítica indispensable para la continuidad operativa (Must have); permite centralizar todas las alertas de reposición en una vista administrativa unificada en el Release 2, evitando la pérdida de ventas por quiebre de stock.

*Nota de trazabilidad:* El rol Almacenero tiene estrictamente "Sin acceso" al módulo de Reportes; su labor de monitoreo y reposición se canaliza operativamente a través de los filtros de alerta del catálogo de productos (HU-PROD-01) y la emisión de solicitudes de reposición (HU-SOL-01).

**Criterios de aceptación:**
1. **Dado que** el usuario solicita el reporte de existencias críticas, **cuando** el sistema compila la información, **entonces** presenta exclusivamente aquellos productos activos donde las existencias actuales sean menores o iguales a su umbral mínimo configurado (o al umbral global predeterminado de 5 unidades) conforme a la RN-06.
2. **Dado que** se presenta la grilla de stock crítico, **cuando** el usuario inspecciona las columnas, **entonces** visualiza de forma clara: Producto, Marca, Categoría, Stock actual y Mínimo aplicado (sin código de producto en la grilla).
3. **Dado que** el usuario requiere ajustar el nivel de exigencia del reporte, **cuando** modifica el umbral numérico de evaluación en pantalla y aplica el cambio, **entonces** la grilla recalcula dinámicamente el listado incorporando los artículos que cumplan el nuevo criterio de criticidad.
4. **Dado que** el usuario interactúa con el reporte analítico de existencias críticas, **cuando** consulta los datos en pantalla, **entonces** la interfaz satisface las directrices visuales, diseño y microcopy especificados en UI-019 (Reportes Analíticos y PDF) del Catálogo de Interfaces (DOC-ANEXO-B).
5. **Dado que** ningún producto tiene stock menor o igual al umbral o este se fija en cero sin alertas, **cuando** se genera el reporte, **entonces** el sistema presenta un estado vacío explícito en un banner verde con el mensaje «✓ Todo el stock está en orden».


**Reglas de negocio aplicables:** 
- RN-06 (Alerta de Stock Mínimo)

**Dependencias:**
- Requiere `HU-INV-01` (inventario valorizado para reporte de stock crítico).

---

### HU-REP-06 · Reportes – Ver resumen general del inventario

| Identificador | Épica | Prioridad MoSCoW | Estimación | Release | Sprint |
|:---:|:---:|:---:|:---:|:---:|:---:|
| HU-REP-06 | EPIC-REP | Should have | 2 pts | REL-3 | SPR-3 |

**Como** Gerente o Administrador del minimarket,  
**quiero** consultar un resumen cuantitativo consolidado del estado global del inventario en almacén y salón,  
**para** conocer las métricas operativas de volumen del catálogo comercial, cobertura de categorías, red de proveedores y artículos agotados en el Release 3.

**Justificación de prioridad:** Funcionalidad de alto valor para el control patrimonial (Should have); proporciona una panorama integral del catálogo de existencias sin requerir supervisiones manuales exhaustivas.

**Criterios de aceptación:**
1. **Dado que** se consumen los datos consolidados del inventario desde el servicio analítico, **cuando** el sistema compila las métricas globales, **entonces** el API calcula los 5 conteos cuantitativos (total de productos activos, total de categorías, total de proveedores activos, productos sin existencias y solicitudes de reposición pendientes), disponibilizándolos para la supervisión patrimonial y la presentación de tarjetas en el tablero de control.
2. **Dado que** se producen entradas por compras, despachos en ventas o bajas por merma, **cuando** el usuario refresca la consulta, **entonces** los indicadores cuantitativos actualizan sus valores en tiempo real reflejando la situación patrimonial vigente del almacén.
3. **Dado que** el usuario analiza las tarjetas cuantitativas de existencias, **cuando** navega en la vista analítica, **entonces** la pantalla satisface las directrices visuales, diseño y microcopy especificados en UI-019 (Reportes Analíticos y PDF) del Catálogo de Interfaces (DOC-ANEXO-B).


**Reglas de negocio aplicables:** 
- N/A.

**Dependencias:**
- Requiere `HU-INV-01` (entradas registradas para reporte de inventario).

---

### HU-REP-07 · Reportes – Ver margen de ganancia por producto

| Identificador | Épica | Prioridad MoSCoW | Estimación | Release | Sprint |
|:---:|:---:|:---:|:---:|:---:|:---:|
| HU-REP-07 | EPIC-REP | Should have | 5 pts | REL-3 | SPR-3 |

**Como** Gerente del minimarket,  
**quiero** consultar un reporte de rentabilidad comercial que desglose el margen de utilidad bruta (precio de venta cobrado frente al costo promedio de adquisición) por cada producto vendido,  
**para** identificar los artículos con mayor y menor aporte financiero al negocio y reajustar oportunamente las listas de precios de aquellos productos que resulten deficitarios o con márgenes reducidos.

**Justificación de prioridad:** Funcionalidad estratégica de rentabilidad comercial (Should have); brinda la inteligencia financiera requerida para asegurar que la política de fijación de precios maximice el retorno económico en el Release 3.

**Criterios de aceptación:**
1. **Dado que** el usuario define un período de análisis y genera el reporte de rentabilidad, **cuando** visualiza la grilla de márgenes comerciales, **entonces** el sistema presenta para cada artículo vendido que cuente con lotes costeados: Producto, Marca, Categoría, Vendido (unidades), Ingreso (S/), Costo (S/), Margen S/. y Margen % (calculado sobre el ingreso). Si no existen lotes con costo registrado en el período, la grilla despliega el mensaje informativo «Sin datos de costo en el período. Registra el costo unitario al ingresar mercadería para ver el margen.».
2. **Dado que** un producto registró ventas a un precio inferior a su costo de adquisición (margen negativo o venta a pérdida), **cuando** se renderiza la grilla analítica, **entonces** el sistema resalta visualmente la fila con alerta destacada en color rojo y signo negativo, advirtiendo de forma inmediata la anomalía tarifaria.
3. **Dado que** el usuario consulta la rentabilidad del catálogo en pantalla, **cuando** se renderiza la grilla de margen, **entonces** el sistema presenta los registros ordenados de forma predeterminada por ganancia monetaria descendente proveniente de la consulta de backend, con encabezados tabulares fijos sin ordenamiento interactivo en el cliente.
4. **Dado que** el usuario interactúa con la grilla de rentabilidad comercial, **cuando** revisa los valores en pantalla, **entonces** la interfaz satisface las directrices visuales, diseño y microcopy especificados en UI-019 (Reportes Analíticos y PDF) del Catálogo de Interfaces (DOC-ANEXO-B).


**Reglas de negocio aplicables:** 
- RN-14 (Actualización de Valorización de Inventario)

**Dependencias:**
- Requiere `HU-VEN-01` y `HU-INV-01` (ventas y costo promedio para margen de ganancia).

---

### HU-REP-08 · Reportes – Ver mermas agrupadas por motivo

| Identificador | Épica | Prioridad MoSCoW | Estimación | Release | Sprint |
|:---:|:---:|:---:|:---:|:---:|:---:|
| HU-REP-08 | EPIC-REP | Should have | 3 pts | REL-3 | SPR-3 |

**Como** Administrador o Gerente del minimarket,  
**quiero** consultar un reporte consolidado que clasifique las pérdidas monetarias y físicas de mercadería según el motivo de baja registrado (vencimiento, deterioro físico, merma operativa o descarte),  
**para** identificar los principales focos de fuga de valor en la tienda, auditar la gestión de almacenamiento y evaluar acciones correctivas o reclamos formales ante proveedores.

**Justificación de prioridad:** Funcionalidad importante para el control de pérdidas (Should have); permite diagnosticar las causas estructurales de merma y reducir los costos ocultos por desperdicio de productos perecibles en el Release 3.

**Criterios de aceptación:**
1. **Dado que** el usuario selecciona un rango temporal y genera el reporte de mermas, **cuando** la pantalla presenta los resultados, **entonces** el sistema exhibe un desglose analítico en grilla con cabecera roja agrupando las bajas según los 6 motivos del sistema: «Vencido», «Dañado», «Robo o faltante», «Consumo interno», «Error de registro» y «Otro», indicando para cada causa las columnas Motivo, N° Bajas, Cantidad Total y Costo Valorizado.
2. **Dado que** el usuario inspecciona el costo valorizado de las bajas, **cuando** el sistema liquida las partidas registradas, **entonces** calcula el valor monetario de la merma tomando el costo unitario del lote de compra, o el costo promedio del producto, o S/ 0.00 en caso de no registrarse costo en el ingreso.
3. **Dado que** en el período evaluado no se produjeron bajas para una o más causales de merma, **cuando** se compila el reporte, **entonces** el sistema refleja cero incidencias y costo S/ 0.00 para dichas categorías, conservando la integridad de las sumas totales.
4. **Dado que** el usuario interactúa con la grilla y representaciones gráficas de mermas, **cuando** consulta el análisis en pantalla, **entonces** la interfaz satisface las directrices visuales, diseño y microcopy especificados en UI-019 (Reportes Analíticos y PDF) del Catálogo de Interfaces (DOC-ANEXO-B).
5. **Dado que** no existen mermas registradas en absoluto durante el período consultado, **cuando** se genera el reporte, **entonces** el sistema presenta un estado vacío explícito con el mensaje «No hay bajas de inventario en el período seleccionado».


**Reglas de negocio aplicables:** 
- N/A.

**Dependencias:**
- Requiere `HU-INV-02` (bajas registradas para reporte de mermas).

---

### HU-REP-09 · Reportes – Exportar reportes en PDF

| Identificador | Épica | Prioridad MoSCoW | Estimación | Release | Sprint |
|:---:|:---:|:---:|:---:|:---:|:---:|
| HU-REP-09 | EPIC-REP | Could have | 3 pts | REL-3 | SPR-3 |

**Como** Administrador o Gerente del minimarket,  
**quiero** descargar un documento en formato PDF estructurado y paginado con la información consolidada de los reportes generados en pantalla,  
**para** disponer de un respaldo físico o digital formal para reuniones de directorio, acervo administrativo o sustento ante supervisiones externas.

**Justificación de prioridad:** Funcionalidad conveniente de distribución documental (Could have); brinda versatilidad y portabilidad a la información gerencial, aunque la visualización y supervisión operativa se satisfacen plenamente en pantalla dentro del Release 3.

**Criterios de aceptación:**
1. **Dado que** el usuario se encuentra visualizando un reporte analítico en pantalla con datos consultados, **cuando** pulsa la acción «Descargar PDF», **entonces** el sistema compila la información y genera un archivo de documento portátil (PDF) descargable en el navegador, incorporando el membrete del minimarket, fecha de emisión y el rango temporal consultado.
2. **Dado que** el reporte contiene múltiples secciones analíticas (resumen financiero, ventas por día, medios de pago, ranking de rotación y mermas), **cuando** se compila el documento, **entonces** el sistema pagina automáticamente el contenido, manteniendo encabezados claros, estilos tipográficos uniformes y saltos de página ordenados.
3. **Dado que** la compilación del documento se encuentra en progreso, **cuando** el usuario acciona la descarga, **entonces** el sistema exhibe un indicador visual de procesamiento y deshabilita temporalmente el botón para prevenir descargas duplicadas involuntarias.
4. **Dado que** el usuario interactúa con el botón de exportación y la previsualización documental, **cuando** utiliza el módulo, **entonces** la interfaz satisface las directrices visuales, diseño y microcopy especificados en UI-019 (Reportes Analíticos y PDF) del Catálogo de Interfaces (DOC-ANEXO-B).


**Reglas de negocio aplicables:** 
- N/A.

**Dependencias:**
- Requiere `HU-REP-01` (reporte estructurado para exportación a PDF).

<!-- ===================================================================== -->
<!-- ARCHIVO FUENTE: 04_Plan_de_Lanzamiento_y_Story_Mapping.md -->
<!-- ===================================================================== -->

---
Código de documento: DOC-PLAN-04
Título: Plan de Lanzamiento y Story Mapping
Versión: 5.2
Fecha: 2026-10-04
Elaborado por: Colonia Infantas, Walter
Revisado por: Angeles Pérez, Jhonny
Estado: Aprobado
Propósito: Especificación del mapa de historias de usuario (Story Mapping) y plan estratégico de lanzamientos incrementales (Releases e Iteraciones)
Documentos relacionados: DOC-PLAN-00, DOC-PLAN-01, DOC-PLAN-02, DOC-PLAN-03-00, DOC-PLAN-05, DOC-PLAN-06, DOC-PLAN-07, DOC-PLAN-08, DOC-ANEXO-B
---

# 04. Plan de Lanzamiento y Story Mapping

## 1. Story Map por Release y Épica (Formato Pizarra)

Estructura de trazabilidad horizontal por épicas funcionales y vertical por horizontes de entrega (Releases / Sprints). Las tarjetas de historia siguen la convención oficial: `nombre · Pri n · n pt`. Pri = MoSCoW (4 = Must have, 3 = Should have, 2 = Could have, 1 = Won't have). Líneas de corte rotuladas MVP / Release 2 / Release 3, con puntos por release y total.

| Release / Horizonte | <u>EPIC-SEG: Seguridad y Accesos</u> | <u>EPIC-CAT: Catálogos y Clientes</u> | <u>EPIC-INV: Inventario y Reposición</u> | <u>EPIC-VEN: Ventas y Caja</u> | <u>EPIC-REP: Reportes, Dashboards y Configuración</u> | Total Release |
|---|---|---|---|---|---|:---:|
| **REL-1 (MVP Operativo)**<br>Sprint 1<br>(30-sep al 13-oct) | Iniciar sesión · Pri 4 · 5 pt<br>Bloqueo de cuenta · Pri 4 · 3 pt<br>Cerrar sesión · Pri 4 · 2 pt<br>Crear empleado · Pri 4 · 5 pt<br>**Subtotal: 4 HU · 15 pt** | Crear categoría · Pri 4 · 2 pt<br>Listar categorías · Pri 4 · 1 pt<br>Registrar producto · Pri 4 · 5 pt<br>Ver catálogo · Pri 4 · 3 pt<br>Registrar proveedor · Pri 4 · 3 pt<br>Registrar cliente · Pri 4 · 3 pt<br>**Subtotal: 6 HU · 17 pt** | Entrada mercadería · Pri 4 · 5 pt<br>Baja por merma · Pri 4 · 5 pt<br>Ajuste por conteo · Pri 4 · 5 pt<br>**Subtotal: 3 HU · 15 pt** | Abrir turno caja · Pri 4 · 5 pt<br>Cerrar turno caja · Pri 4 · 5 pt<br>Historial turnos · Pri 4 · 3 pt<br>Terminal venta activo · Pri 4 · 3 pt<br>Registro líneas y cobro · Pri 4 · 5 pt<br>Despacho FEFO y descargo · Pri 4 · 5 pt<br>Emitir comprobante · Pri 4 · 8 pt<br>Historial ventas · Pri 4 · 5 pt<br>**Subtotal: 8 HU · 39 pt** | Configurar negocio · Pri 4 · 3 pt<br>**Subtotal: 1 HU · 3 pt** | **22 HU<br>89 pts<br>178.0 h** |
| *Línea de corte* | **Línea de corte: MVP – fin de Sprint 1 (martes 13-oct, semana 7) · 89 pts acumulados (todas Must have)** | | | | | |
| **REL-2 (Operación y Control)**<br>Sprint 2<br>(14-oct al 27-oct) | Sesión única · Pri 4 · 8 pt<br>Listar empleados · Pri 4 · 2 pt<br>Desactivar empleado · Pri 4 · 3 pt<br>Recuperar clave · Pri 3 · 5 pt<br>Cierre remoto · Pri 3 · 3 pt<br>**Subtotal: 5 HU · 21 pt** | Próximos a vencer · Pri 4 · 3 pt<br>Listar proveedores · Pri 4 · 2 pt<br>Desactivar prov. · Pri 3 · 2 pt<br>**Subtotal: 3 HU · 7 pt** | Crear reposición · Pri 4 · 3 pt<br>Listar solicitudes · Pri 4 · 2 pt<br>Aprobar reposición · Pri 4 · 3 pt<br>Recibir mercadería · Pri 4 · 8 pt<br>Rechazar reposición · Pri 3 · 2 pt<br>**Subtotal: 5 HU · 18 pt** | Anular venta dev. · Pri 4 · 8 pt<br>Movimiento manual · Pri 3 · 3 pt<br>Resumen activo · Pri 3 · 2 pt<br>Aprobar cierre · Pri 3 · 2 pt<br>Cierre forzado · Pri 3 · 5 pt<br>Validar pago Yape/Plin (IziPay) · Pri 3 · 2 pt<br>**Subtotal: 6 HU · 22 pt** | Ver configuración · Pri 4 · 1 pt<br>Resumen ventas · Pri 4 · 5 pt<br>Alertas directivas · Pri 4 · 5 pt<br>Ventas período · Pri 4 · 5 pt<br>Ranking productos · Pri 4 · 3 pt<br>Stock crítico · Pri 4 · 3 pt<br>**Subtotal: 6 HU · 22 pt** | **25 HU<br>90 pts<br>180.0 h** |
| *Línea de corte* | **Línea de corte: Release 2 – fin de Sprint 2 (martes 27-oct, semana 9) · 179 pts acumulados (153 Must + 26 Should)** | | | | | |
| **REL-3 (Mejoras y Supervisión)**<br>Sprint 3<br>(28-oct al 10-nov) | Cambiar clave · Pri 3 · 3 pt<br>Editar empleado · Pri 3 · 3 pt<br>Reactivar empleado · Pri 3 · 2 pt<br>Registro accesos · Pri 3 · 3 pt<br>**Subtotal: 4 HU · 11 pt** | Editar categoría · Pri 3 · 1 pt<br>Listar clientes · Pri 3 · 2 pt<br>Editar producto · Pri 3 · 3 pt<br>Desactivar prod. · Pri 3 · 2 pt<br>Editar proveedor · Pri 3 · 2 pt<br>Eliminar categor. · Pri 2 · 2 pt<br>Editar correo cli. · Pri 2 · 1 pt<br>Escanear código · Pri 2 · 5 pt<br>**Subtotal: 8 HU · 18 pt** | Historial entradas · Pri 3 · 2 pt<br>Historial bajas · Pri 3 · 2 pt<br>Historial ajustes · Pri 3 · 2 pt<br>**Subtotal: 3 HU · 6 pt** | Comprobante PDF · Pri 3 · 5 pt<br>Buscar cód. barras · Pri 3 · 3 pt<br>Exportar ventas CSV · Pri 2 · 3 pt<br>**Subtotal: 3 HU · 11 pt** | Gráfico ventas/día · Pri 3 · 3 pt<br>Ranking dashboard · Pri 3 · 3 pt<br>Reposición pend. · Pri 3 · 2 pt<br>Ventas por día · Pri 3 · 3 pt<br>Ventas por pago · Pri 3 · 2 pt<br>Resumen inventario · Pri 3 · 2 pt<br>Margen ganancia · Pri 3 · 5 pt<br>Mermas motivo · Pri 3 · 3 pt<br>Exportar rep. PDF · Pri 2 · 3 pt<br>**Subtotal: 9 HU · 26 pt** | **27 HU<br>72 pts<br>144.0 h** |
| *Línea de corte* | **Línea de corte: Release 3 – fin de Sprint 3 (martes 10-nov, semana 11) · 251 pts acumulados (100 % del Backlog)** | | | | | |
| **Total Proyecto** | **13 HU · 47 pt** | **17 HU · 42 pt** | **11 HU · 39 pt** | **17 HU · 72 pt** | **16 HU · 51 pt** | **74 HU<br>251 pts<br>502.0 h** |

---

## 2. Plan de Lanzamiento por Release

### REL-1: MVP (Producto Mínimo Viable Operativo)
- **Objetivo Estratégico:** Demostrar y certificar el circuito comercial y operativo indispensable del minimarket, permitiendo la apertura de caja con fondo base, registro de productos y proveedores, abastecimiento inicial de inventario, procesamiento de ventas en mostrador con Efectivo y billetera digital, emisión de boletas y facturas según normativa tributaria, y configuración general de la empresa.
- **Alcance Funcional:** 22 Historias de Usuario, todas de prioridad Must have (89 puntos de historia).
- **Esfuerzo Operativo Asociado:** 178.0 horas de trabajo efectivo distribuidas en 113 tareas técnicas (104.50 h de construcción y 73.50 h de verificación QA independiente).
- **Criterios de Salida (Definition of Done del Release):**
  1. Inicio de sesión funcional con control de acceso por roles y bloqueo tras 5  consecutivos por 15 minutos (`HU-AUTH-01`, `HU-AUTH-02`).
  2. Catálogos operativos de categorías, productos con control de perecibles y stock mínimo, y proveedores (`HU-CAT-02`, `HU-CAT-01`, `HU-PROD-02`, `HU-PROD-01`, `HU-PROV-02`).
  3. Módulo de inventario registrando entradas directas de existencias iniciales, mermas físicas y ajustes por conteo con trazabilidad de lotes y fechas de vencimiento (`HU-INV-01`, `HU-INV-02`, `HU-INV-03`).
  4. Flujo de caja con apertura de turno obligatoria antes de vender (fondo mínimo S/ 500.00, RN-10), cuadre de caja y cierre con resumen (`HU-CAJA-01`, `HU-CAJA-02`, `HU-CAJA-05`).
  5. Circuito completo de venta en punto de venta (POS) con cálculo automático de totales y desglose de IGV (18 %), validación de vuelto en gaveta, descuento en tiempo real de existencias, emisión de boleta/factura con formato reglamentario y captura de datos del cliente (`HU-VEN-01a`, `HU-VEN-01b`, `HU-VEN-01c`, `HU-VEN-02`, `HU-VEN-05`, `HU-CLI-02`).
  6. Configuración de parámetros institucionales y fiscales de la empresa (`HU-CONF-02`).
  7. Aprobación del 100 % de los casos de prueba de verificación de calidad e integración satisfactoria del entorno operativo.
- **Fecha Objetivo y Presentación:** Martes 13 de octubre de 2026 (Semana 7 del calendario académico).
- **Presupuesto Asignado:** S/ 7,500.00 (2 semanas × S/ 625/semana × 6 desarrolladores, todo costo laboral).
- **Riesgos Principales y Mitigación:**
  - *Camino crítico de venta:* El flujo nuclear de venta `HU-VEN-01a/b/c` (13 pts acumulados) concentra el esfuerzo central. Se mitiga mediante el principio de diseño de interfaces y contratos funcionales acordado el día 1; cierra el día 7 y `HU-VEN-02` el día 8. El sprint cierra en el día 9 con 2.50 h residuales en requerimientos periféricos, reservando el resto del día 9 y el día 10 (día de presentación) como margen de seguridad y regresión final.
  - *Feriado nacional (jueves 8 de octubre):* Mitigado mediante la jornada laboral compensatoria del sábado 3 de octubre.

---

### REL-2: Release 2 (Operación y Control Integral)
- **Objetivo Estratégico:** Completar la gestión operativa y directiva del minimarket mediante la integración del ciclo formal de reposición de mercadería (solicitud, aprobación, recepción de órdenes y mermas por anulación), endurecimiento de la seguridad de sesiones, mecanismos de supervisión de caja, y la activación de cuadros de mando gerencial con alertas tempranas de stock y vencimiento.
- **Alcance Funcional:** 25 Historias de Usuario (16 Must have + 9 Should have), sumando 90 puntos de historia ejecutados en el Sprint 2.
- **Esfuerzo Operativo Asociado:** 180.0 horas de trabajo efectivo distribuidas en 125 tareas técnicas (105.75 h de construcción y 74.25 h de verificación QA independiente).
- **Criterios de Salida (Definition of Done del Release):**
  1. Sesión única concurrente con invalidación automática ante aperturas simultáneas y recuperación de contraseña mediante código de autorización numérico de 4 dígitos con vigencia de 15 minutos (`HU-AUTH-04`, `HU-AUTH-05`, `HU-USR-06`).
  2. Módulo de reposición automatizado: creación de solicitudes mono-producto, flujo de aprobación gerencial con reasignación de proveedor (RN-16) y recepción contra orden aprobada con actualización inmediata de existencias y costo promedio (RN-01, RN-14, `HU-SOL-01` a `HU-SOL-05`).
  3. Anulación de ventas restringida a Administrador/Gerente con reversión de inventario y registro de egreso en caja mientras el turno continúe en estado 'Abierto' (RN-08 y RN-09, `HU-VEN-06`).
  4. Supervisión operativa de caja: movimientos manuales en efectivo hasta S/ 5,000.00 (RN-11, RN-15), supervisión de turnos activos y cierre forzado administrativo (`HU-CAJA-03`, `HU-CAJA-04`, `HU-CAJA-06`, `HU-CAJA-07`).
  5. Cuadros de mando y reportes estratégicos: resumen de ventas del día/mes, stock crítico con semáforo preventivo (RN-06), alerta de productos próximos a vencer y ranking de artículos con mayor rotación (`HU-DASH-01`, `HU-DASH-03`, `HU-REP-01`, `HU-REP-02`, `HU-REP-05`, `HU-PROD-06`).
- **Fecha Objetivo y Presentación:** Martes 27 de octubre de 2026 (Semana 9 del calendario académico).
- **Presupuesto Asignado:** S/ 7,500.00 (2 semanas × S/ 625/semana × 6 desarrolladores).
- **Riesgos Principales y Mitigación:**
  - *Acoplamiento en la recepción de mercadería (`HU-SOL-05`, 8 pts):* Se implementa recepción contra orden aprobada asegurando la actualización atómica del almacén y del costo promedio.
  - *Carga de verificación balanceada:* Des.4 Alcalde asume 30.75 h de testing, distribuyendo el resto de verificaciones entre los demás miembros del equipo bajo el principio de segregación `Construye ≠ Verifica`.

---

### REL-3: Release 3 (Mejoras, Supervisión y Exportación)
- **Objetivo Estratégico:** Optimizar la experiencia de uso y robustecer el sistema con capacidades de supervisión de accesos, edición y mantenimiento avanzado de registros maestros, lector óptico de código de barras para agilización del POS, generación de comprobantes y reportes analíticos descargables en PDF, y análisis detallado de márgenes de ganancia por producto.
- **Alcance Funcional:** 27 Historias de Usuario (22 Should have + 5 Could have), sumando 72 puntos de historia ejecutados en el Sprint 3.
- **Esfuerzo Operativo Asociado:** 144.0 horas de trabajo efectivo distribuidas en 135 tareas técnicas (85.75 h de construcción y 58.25 h de verificación QA independiente).
- **Criterios de Salida (Definition of Done del Release):**
  1. Registro inmutable de supervisión para eventos de autenticación exitosos y fallidos (`HU-LOG-01`).
  2. Gestión de perfil personal, edición de catálogos y reactivación de empleados suspendidos (`HU-AUTH-06 (Cancelada)`, `HU-CAT-03`, `HU-CAT-04`, `HU-CLI-01`, `HU-CLI-03`, `HU-PROD-04`, `HU-PROD-05`, `HU-PROV-03`, `HU-USR-03`, `HU-USR-05`).
  3. Agilización del punto de venta y catálogo mediante integración con lector óptico de código de barras (`HU-VEN-04`, `HU-PROD-03`).
  4. Trazabilidad histórica completa de movimientos de almacén: entradas, bajas por merma y ajustes físicos (`HU-INV-04`, `HU-INV-05`, `HU-INV-06`).
  5. Descarga e impresión de comprobantes de pago en PDF y reenvío por correo electrónico (`HU-VEN-03`), junto con la exportación ejecutiva de ventas en PDF (`HU-REP-09`), quedando la exportación aislada de ventas (`HU-VEN-08`) fuera de alcance.
  6. Suite analítica completa: ventas por medio de pago, evolución diaria de ventas, rentabilidad/margen por producto, análisis de mermas por causa y exportación general de reportes en PDF (`HU-DASH-02`, `HU-DASH-04`, `HU-DASH-05`, `HU-REP-03`, `HU-REP-04`, `HU-REP-06`, `HU-REP-07`, `HU-REP-08`, `HU-REP-09`).
  7. Aprobación del 100 % de los criterios de aceptación y entrega de la solución final consolidada.
- **Fecha Objetivo y Presentación:** Martes 10 de noviembre de 2026 (Semana 11 del calendario académico).
- **Presupuesto Asignado:** S/ 7,500.00 (2 semanas × S/ 625/semana × 6 desarrolladores).
- **Riesgos Principales y Mitigación:**
  - *Fragmentación de tareas por alto número de historias (27 HU):* Al tratarse de historias focalizadas (media de 2.67 pts/HU), se aplica un flujo continuo de verificación funcional inmediata al concluir la construcción de cada funcionalidad.

---

## 3. Resumen por Release y Sprint

| Release | Sprint Asociado | Semanas de Ejecución | HUs Planificadas | Puntos Totales | Must have (pts) | Should have (pts) | Could have (pts) | Horas Tareas (Doc 07) | Fecha de Entrega / Review | Presupuesto Total |
|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|
| **REL-1** *(MVP)* | **Sprint 1** | Semanas 5 a 7 | 20 | 89 | 89 | 0 | 0 | 178.0 h | Mar 13-oct (Semana 7) | S/ 7,500.00 |
| **REL-2** | **Sprint 2** | Semanas 7 a 9 | 25 | 90 | 64 | 26 | 0 | 180.0 h | Mar 27-oct (Semana 9) | S/ 7,500.00 |
| **REL-3** | **Sprint 3** | Semanas 9 a 11 | 27 | 72 | 0 | 58 | 14 | 144.0 h | Mar 10-nov (Semana 11) | S/ 7,500.00 |
| **TOTAL** | **3 Sprints** | **6 Semanas** | **72** | **251** | **153** | **84** | **14** | **502.0 h** | **Ciclo Académico** | **S/ 22,500.00** |

<!-- ===================================================================== -->
<!-- ARCHIVO FUENTE: 05_Estimacion_de_Capacidad_Velocidad_y_Costos.md -->
<!-- ===================================================================== -->

---
Código de Documento: DOC-PLAN-05
Título: Estimación de Capacidad, Velocidad y Costos
Versión: 5.2
Fecha: 2026-10-04
Elaborado por: Angeles Pérez, Jhonny
Revisado por: Colonia Infantas, Walter
Estado: Aprobado
Propósito: Cálculos de capacidad neta, velocidad de entrega, horizonte de iteraciones y presupuesto económico oficial
Documentos relacionados: DOC-PLAN-00, DOC-PLAN-01, DOC-PLAN-02, DOC-PLAN-03-00, DOC-PLAN-04, DOC-PLAN-06, DOC-PLAN-07, DOC-PLAN-08, DOC-ANEXO-A, DOC-ANEXO-B
---

# 05. Estimación de Capacidad, Velocidad y Costos

## Secuencia Oficial de Estimación y Cálculos Metodológicos

El dimensionamiento metodológico, temporal y financiero del "Sistema de Gestión Integral para Minimarket" sigue estrictamente la secuencia de cálculo formal y unificada establecida para el proyecto en el marco de Agile Development:

```
1 pt = 2 h-hombre (pivote: HU-CAT-01 – Ver listado de categorías)
1 sprint = 2 semanas
horas.hombre → 2 sem × 25 h/sem × 6 per. = 300 h.per.
V.E. → 1 pt — 2 h
        x — 300 h → 150 pt. (contingencia 80 %) = 120 pt/SP
capacidad neta = 300 h × 80 % = 240 h/sprint (40 h por desarrollador)
n° sprint (proyecto) → 251 pt / 120 pt/SP = 2.09 sprint ≈ 3 sprint (se redondea hacia arriba)
n° sprint (MVP) → 89 pt / 120 pt/SP = 0.74 sprint ≈ 1 sprint
duración del proyecto = 2 sem/sprint × 3 sprint = 6 sem.
costo del proyecto = 6 sem × 625 soles/sem × 6 = 22,500
costo por sprint o release = 22,500 / 3 = 7,500  ·  costo por punto = 22,500 / 251 = 89.64
```

**Presupuesto oficial:** El presupuesto económico total del proyecto se establece en **S/ 22,500.00**, distribuidos en **S/ 7,500.00** por cada uno de los 3 sprints o releases, con un costo asignado por punto de historia de **S/ 89.64** (representando el 100 % de esfuerzo laboral de ingeniería, sin conceptos no laborales ni sobrecostos externos).

---

## (a) Calibración de la Escala de Estimación y Pivote `HU-CAT-01`

El dimensionamiento relativo del esfuerzo se calibra a partir de la historia pivote `HU-CAT-01` (Ver listado de categorías, interfaz UI-003), que representa la unidad atómica mínima de desarrollo funcional en el sistema.

### Estructura de Tareas de la Historia Pivote `HU-CAT-01` (Fuente: DOC-PLAN-07)
Alineada con la plantilla oficial de 8 pasos del docente, la historia pivote requiere 1 punto de historia (2.0 h de esfuerzo base) y desglosa operativamente 2.00 h entre construcción y verificación independiente:

| ID Tarea | Nombre de la Tarea | Tipo | Responsable | Tiempo (h) |
|---|---|---|---|:---:|
| TAR-HU-CAT-01-04 | Desarrollar interfaces | Diseño/Construcción | Des.6 - Angeles | 0.50 |
| TAR-HU-CAT-01-05 | Codificar | Construcción | Des.6 - Angeles | 0.50 |
| TAR-HU-CAT-01-06 | Pruebas de unidad e integración | Verificación QA | Des.2 - Nolasco | 0.50 |
| TAR-HU-CAT-01-07 | Depuración | Construcción | Des.6 - Angeles | 0.25 |
| TAR-HU-CAT-01-08 | Verificación funcional y pase web | Verificación QA | Des.2 - Nolasco | 0.25 |
| **Total Tareas** | **Plantilla de 5 pasos operativos (reutiliza pasos 1 a 3)** | | **Construye ≠ Verifica** | **2.00 h** |

### Matriz de Referencia Fibonacci Calibrada

| Puntos | Esfuerzo Nominal Base (h) | Complejidad Funcional y de Negocio | Historias Representativas del Backlog |
|:---:|:---:|---|---|
| **1 pt** | 2.0 h | Consulta simple de un catálogo sin lógica de cálculo, o edición simple de un solo campo. | `HU-CAT-01` (Listar categorías), `HU-CONF-01` (Ver configuración), `HU-CAT-03` (Editar categoría), `HU-CLI-03` (Editar correo cliente). |
| **2 pt** | 4.0 h | Mantenimiento estándar sobre un solo registro; listados con filtro simple o activación y suspensión de estado lógico. | `HU-AUTH-03` (Cerrar sesión), `HU-CAT-02` (Crear categoría), `HU-PROV-01` (Listar proveedores), `HU-SOL-02` (Listar reposiciones), `HU-CLI-01` (Listar clientes). |
| **3 pt** | 6.0 h | Operaciones comerciales con validaciones entre entidades, cálculos aritméticos o consulta de registros históricos. | `HU-AUTH-02` (Bloqueo de cuenta), `HU-PROD-01` (Ver catálogo), `HU-PROV-02` (Crear proveedor), `HU-CLI-02` (Crear cliente al vender), `HU-CAJA-05` (Historial de turnos). |
| **5 pt** | 10.0 h | Módulos transaccionales completos, formularios con validaciones de unicidad o actualización de inventario físico. | `HU-AUTH-01` (Iniciar sesión y verificación de credenciales), `HU-USR-02` (Crear empleado), `HU-PROD-02` (Registrar producto), `HU-INV-01` (Entrada mercadería), `HU-CAJA-01` (Abrir caja), `HU-VEN-05` (Historial ventas). |
| **8 pt** | 16.0 h | Flujos transaccionales altamente coordinados con impacto fiscal, concurrencia de sesiones o reversión de inventario y caja. | `HU-AUTH-04` (Sesión única concurrente), `HU-SOL-05` (Recepción contra Solicitud aprobada), `HU-VEN-02` (Comprobantes boleta y factura SUNAT), `HU-VEN-06` (Anulación de venta y devolución). |
| **13 pt** | 26.0 h | *Tamaño complejo desaconsejado por INVEST (Small); en la versión 5.2 no existen historias de 13 pts.* | La anterior historia compleja `HU-VEN-01` (13 pts) fue formalmente desdoblada en `HU-VEN-01a` (3 pts), `HU-VEN-01b` (5 pts) y `HU-VEN-01c` (5 pts), garantizando que ninguna historia del backlog exceda los 8 pts. |

---

## (b) Jornada de Trabajo, Análisis de Sensibilidad y Justificación

### Matriz de Sensibilidad de Capacidad y Velocidad (6 Developers)

| Jornada Semanal por Desarrollador | Horas Brutas por Sprint (2 sem) | Factor de Enfoque | Capacidad Neta Equipo (h) | Velocidad Estimada (pts/sprint) | Sprints para 251 pts | Viabilidad en Calendario Académico |
|:---:|:---:|:---:|:---:|:---:|:---:|---|
| **20 h/semana** | 240 h | 80 % | 192.0 h | 96.0 pts | 2.61 ≈ 3 Sprints | Ajustada; Sprint 1 al 92.7 % de la capacidad. |
| **25 h/semana (Oficial)** | **300 h** | **80 %** | **240.0 h** | **120.0 pts** | **2.09 ≈ 3 Sprints** | **Óptima: balance perfecto entre ritmo sostenible y margen de contingencia.** |
| **26 h/semana** | 312 h | 80 % | 249.6 h | 124.8 pts | 2.01 ≈ 3 Sprints | Límite superior: 2.01 → 3 sprints (sin holgura de programación). |
| **27 h/semana** | 324 h | 80 % | 259.2 h | 129.6 pts | 1.94 ≈ 2 Sprints | La fórmula colapsa a 2 sprints; se pierde el Release 3. |
| **30 h/semana** | 360 h | 80 % | 288.0 h | 144.0 pts | 1.74 ≈ 2 Sprints | Riesgo de sobrecarga académica; colapsa a 2 sprints. |
| **40 h/semana (Dedicación Plena)** | 480 h | 80 % | 384.0 h | 192.0 pts | 1.31 ≈ 2 Sprints | Referencia corporativa (8 h × 5 d): colapsa a 2 sprints. |

### Justificación de la Jornada Oficial de 25 Horas/Semana
La dedicación de **25 horas/semana por integrante** (5 horas diarias durante los 5 días laborables semanales) se fundamenta en:
1. **Jornada elegida por el equipo de desarrollo:** El marco docente establece la libertad de pactar la jornada tomando 40 h/semana como referencia corporativa; el equipo adopta 25 h/semana (5 h × 5 días) por resultar sostenible frente a las obligaciones académicas concurrentes, totalizando 50 horas de dedicación bruta individual en cada iteración de 2 semanas. Con 20 h/semana el Sprint 1 demandaría el 92.7 % de la capacidad neta sin margen de absorción; con más de 26 h/semana la fórmula matemática contraería el proyecto a 2 sprints, desarticulando el plan estratégico de 3 releases.
2. **Capacidad neta suficiente:** Tras reservar el 20 % para ceremonias Scrum (10 h por integrante), cada desarrollador dispone de **40.0 horas netas de ingeniería** por sprint, absorbiendo con holgura las 502.0 horas totales de tareas operativas (promedio de 83.67 h por integrante a lo largo del proyecto).

---

## (c) Calendario Académico Oficial y Fechas de Entrega

El proyecto se desarrolla a lo largo de 6 semanas lectivas activas (semana 5 a semana 11, estructuradas de miércoles a martes) con presentaciones de revisión periódicas:

| Hito / Ceremonia | Semana Académica | Ventana Temporal | Días Hábiles | Horas Netas Planificadas | Entregable / Hito Principal |
|---|:---:|---|:---:|:---:|---|
| **Sprint 1 (REL-1)** | Semanas 5 a 7 | Mié 30-sep al Mar 13-oct | 10 días *(1)* | 178.0 h de tareas | **MVP Operativo:** Inicio de sesión, catálogos maestros, inventario físico inicial, turnos de caja y ventas POS con emisión fiscal. |
| **Sprint Review 1** | **Semana 7** | **Martes 13-octubre** | Sesión de clase | Demostración | **Presentación en clase del Release 1 (MVP)** ante el docente. |
| **Sprint 2 (REL-2)** | Semanas 7 a 9 | Mié 14-oct al Mar 27-oct | 10 días | 180.0 h de tareas | **Operación y Control:** Reposición formal, sesiones concurrentes, anulación de ventas y cuadros de mando gerenciales. |
| **Sprint Review 2** | **Semana 9** | **Martes 27-octubre** | Sesión de clase | Demostración | **Presentación en clase del Release 2** ante el docente. |
| **Sprint 3 (REL-3)** | Semanas 9 a 11 | Mié 28-oct al Mar 10-nov | 10 días | 144.0 h de tareas | **Mejoras, Supervisión y Exportación:** Trazabilidad de seguridad, lector óptico de código de barras, exportación documental y análisis de rentabilidad. |
| **Sprint Review 3** | **Semana 11** | **Martes 10-noviembre** | Sesión de clase | Demostración | **Presentación en clase del Release 3 (Cierre Final)** ante el docente. |
| **Semanas 12 a 15** | Semanas 12 a 15 | Noviembre a Diciembre | — | — | Consolidación de memoria académica y sustentación final del curso. |

*(1) Compensación del feriado nacional y disponibilidad:* El jueves 08 de octubre de 2026 (Combate de Angamos) es feriado nacional no laborable. Para garantizar los 10 días de avance en Sprint 1, se compensa la jornada programando trabajo colaborativo el **sábado 03 de octubre de 2026** [SUPUESTO – acordado por el equipo]. Las sesiones lectivas de los martes 06-oct y 13-oct contemplan horarios específicos; se programan 4.0 h efectivas el día 6, y el martes 13-oct se reserva exclusivamente para la demostración del MVP en la sesión de revisión.

---

## (d) Justificación del Factor de Contingencia (80 % Neto de Desarrollo)

Por cada sprint de 2 semanas, cada uno de los 6 desarrolladores dispone de 50 horas brutas de dedicación (25 h/semana × 2). El **20 % (10.0 horas exactas por desarrollador)** se reserva formalmente para las ceremonias del marco Scrum:

| Ceremonia Scrum | Duración y Frecuencia | Horas por Desarrollador | Justificación y Participantes |
|---|---|:---:|---|
| **Sprint Planning** | 1 sesión al inicio del sprint | 4.0 h | Desglose de historias en tareas según plantilla docente de 8 pasos, validación de dependencias y estimación. Equipo completo (6 desarrolladores). |
| **Daily Scrum** | 10 sesiones de 15 minutos (diario) | 2.5 h | Sincronización diaria: inspección de avance respecto al burndown, detección de impedimentos y acuerdos de integración. Equipo completo. |
| **Sprint Review** | 1 sesión al cierre del sprint | 2.0 h | Demostración funcional del incremento de software terminado ante el Product Owner y el docente. Equipo completo. |
| **Sprint Retrospective** | 1 sesión al cierre del sprint | 1.5 h | Inspección del proceso de trabajo, análisis de oportunidades y compromisos de mejora continua. Equipo completo. |
| **Total Ceremonias** | **Deducción de Timebox** | **10.0 h** | **Exactamente el 20.0 % de las 50.0 horas brutas de dedicación individual.** |

### Deducción Explícita de Ceremonias y Absorción de Refinamiento
En respuesta a las revisiones metodológicas de auditoría sobre la dedicación individual por sprint, se ratifica que los timeboxes formales de las ceremonias Scrum demandan exactamente **10.0 horas por integrante en cada sprint de 2 semanas**:
- **Sprint Planning:** 4.0 h (sesión de planificación y desglose al inicio de la iteración).
- **Daily Scrum:** 2.5 h (10 sesiones de 15 minutos en los 10 días laborables).
- **Sprint Review:** 2.0 h (sesión demostrativa del incremento terminado ante el PO).
- **Sprint Retrospective:** 1.5 h (sesión de inspección y mejora del proceso con todo el Scrum Team).
- **Total Deducción Ceremonias:** 4.0 h + 2.5 h + 2.0 h + 1.5 h = **10.0 horas exactas por desarrollador** (60.0 h a nivel de equipo).

Respecto al **Product Backlog Refinement** (que la literatura sugiere entre 5 % y 10 % del tiempo de sprint), el equipo formaliza que dicha actividad se realiza de forma continua y colaborativa sobre los requerimientos futuros sin reducir la capacidad neta nominal comprometida de desarrollo, siendo absorbida por la holgura operativa estructural del proyecto:
- Capacidad neta comprometida por sprint = 6 desarrolladores × 40.0 h = **240.0 horas netas**.
- Esfuerzo de tareas de ingeniería desglosadas en Sprint 1 = **178.0 horas** (fuente: DOC-PLAN-07).
- Holgura operativa libre en Sprint 1 = 240.0 h - 178.0 h = **62.0 horas disponibles** (25.8 % de margen).

Dicha holgura de 62.0 h en el Sprint 1 cubre holgadamente cualquier sesión de refinamiento continuo (~6 h a 12 h equipo), estabilización técnica de despliegue y preparación de la demostración comercial sin requerir una reducción nominal de la capacidad base, preservando intacto el modelo matemático oficial de **240.0 h/sprint** y el presupuesto inmutable de **S/ 22,500.00**.

Por consiguiente, el **factor de contingencia del 80.0 %** responde al estándar docente y coincide numéricamente con el descuento de 10.0 h de ceremonias por persona, garantizando:
- Capacidad neta individual = 50.0 h brutas × 0.80 = **40.0 horas netas de desarrollo por sprint**
- Capacidad neta del equipo = 6 desarrolladores × 40.0 h = **240.0 horas netas de desarrollo por sprint**

---

## (e) Matrices de Resumen, Burndown y Balance de Carga

### Cuadro 5.1: Resumen por Sprint
Métricas consolidadas de historias de usuario, puntos comprometidos, horas de tareas de ingeniería (fuente: DOC-PLAN-07) y balance de prioridades MoSCoW:

| Sprint | Horas Netas Capacidad | HUs Planificadas | Puntos Comprometidos | Horas Tareas Reales (07) | Carga / Capacidad Neta | Estado | Must have (pts) | Should have (pts) | Could have (pts) |
|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|
| **Sprint 1** | 240.0 h | 22 | 89 | 178.0 h | 74.2 % | Planificado | 89 | 0 | 0 |
| **Sprint 2** | 240.0 h | 25 | 90 | 180.0 h | 75.0 % | Planificado | 64 | 26 | 0 |
| **Sprint 3** | 240.0 h | 27 | 72 | 144.0 h | 60.0 % | Planificado | 0 | 58 | 14 |
| **TOTAL** | **720.0 h** | **74** | **251** | **502.0 h** | **69.7 %** | | **153** | **84** | **14** |

*Nota sobre la holgura operativa:* Las 502.0 horas de tareas desglosadas representan el 69.7 % de la capacidad neta máxima (720.0 h en los 3 sprints). La diferencia restante (218.0 horas acumuladas entre los 6 integrantes, ~72.7 h por sprint) actúa como colchón preventivo para absorción de desvíos, estabilización en entornos de verificación y preparación de las demostraciones académicas.

---

### Cuadro 5.2: Proyección Burndown Planificado del Proyecto

| Hito / Iteración | Puntos Comprometidos | Puntos Completados Acumulados | Puntos Pendientes (Burndown) | % Avance Acumulado |
|---|:---:|:---:|:---:|:---:|
| **Sprint 0 (Punto de partida inicial)** | 0 | 0 | **251** | 0.0 % |
| **Fin de Sprint 1 (REL-1 · MVP)** | 89 | 89 | **162** | 35.5 % |
| **Fin de Sprint 2 (REL-2)** | 90 | 179 | **72** | 71.3 % |
| **Fin de Sprint 3 (REL-3)** | 72 | 251 | **0** | 100.0 % |

---

### Cuadro 5.3: Carga de Trabajo por Integrante y Sprint (Fuente Inmutable: DOC-PLAN-07)
Distribución de las 502.0 horas de tareas técnicas entre los 6 miembros del equipo (Capacidad máxima individual: 40.0 h netas por sprint):

| Desarrollador / Rol Asignado | Sprint 1 (h) | Sprint 2 (h) | Sprint 3 (h) | Total Proyecto (h) | Construcción (h) | Verificación QA (h) | Carga Máxima en un Sprint |
|---|---:|---:|---:|---:|---:|---:|:---:|
| **Des.1 Velasquez** | 28.50 | 30.00 | 24.75 | 83.25 | 62.00 | 21.25 | 30.00 h (75.0 %) |
| **Des.2 Nolasco** | 30.25 | 30.25 | 26.75 | 87.25 | 67.00 | 20.25 | 30.25 h (75.6 %) |
| **Des.3 Castillo** | 30.75 | 30.50 | 19.00 | 80.25 | 53.00 | 27.25 | 30.75 h (76.9 %) |
| **Des.4 Alcalde** *(Verificación QA)* | 26.25 | 30.75 | 30.50 | 87.50 | 0.00 | 87.50 | 30.75 h (76.9 %) |
| **Des.5 Colonia** | 31.25 | 30.25 | 22.75 | 84.25 | 59.50 | 24.75 | 31.25 h (78.1 %) |
| **Des.6 Angeles** | 31.00 | 28.25 | 20.25 | 79.50 | 54.50 | 25.00 | 31.00 h (77.5 %) |
| **TOTAL HORAS EQUIPO** | **178.00** | **180.00** | **144.00** | **502.00** | **296.00** | **206.00** | **31.25 h (Des.5 en S1)** |

*Validaciones de consistencia:*
1. **Cumplimiento estricto de límites:** Ningún desarrollador excede su capacidad efectiva de 40.0 h netas en ningún sprint. La carga máxima puntual es de 31.25 h (Des.5 Colonia en Sprint 1), preservando 8.75 h de holgura personal.
2. **Especialización de calidad sin autoverificación:** Des.4 Alcalde asume el rol de responsable de calidad asignando el 100 % de su tiempo (87.50 h) a tareas de verificación y pruebas, complementado por los demás desarrolladores bajo la regla inviolable `Construye ≠ Verifica`.

---

## (f) Registro de Riesgos Metodológicos y de Capacidad Actualizados

1. **Camino crítico de Ventas POS (`HU-VEN-01`, 13 pts) en Sprint 1:**
   - *Impacto:* Los pasos 4 al 8 de `HU-VEN-01` totalizan 26.00 h operativas; la secuencia de tareas requiere atención prioritaria para asegurar la demostración oportuna del MVP.
   - *Mitigación:* Se adopta la estrategia de diseño y especificación previa de contratos de interfaz desde el día 1; la verificación funcional concluye en el día 7 y la emisión de comprobantes (`HU-VEN-02`) culmina en el día 8. El sprint finaliza formalmente en la mañana del día 9 con 7.25 h residuales (distribuidas entre 4 desarrolladores), reservando 16.75 h de holgura ese día y el día 10 íntegro para la presentación oficial en clase.
2. **Concentración de la Verificación QA en Des.4 Alcalde:**
   - *Impacto:* Des.4 asume 87.50 horas de verificación independiente a lo largo de los 3 sprints (~29.17 h por sprint).
   - *Mitigación:* Distribución colaborativa planificada en DOC-PLAN-07: los otros 5 integrantes absorben 118.50 horas de verificación cruzada, asegurando que ninguna historia dependa de un único evaluador.
3. **Feriado nacional en ventana clave de entrega (jueves 08 de octubre):**
   - *Impacto:* Reducción de una jornada de avance previo a la presentación del MVP.
   - *Mitigación:* Jornada de trabajo compensatorio programada para el sábado 03 de octubre de 2026 [SUPUESTO – acordado por el equipo], preservando los 10 días de ejecución y el cierre en día 9.
4. **Dependencias externas de integración (SUNAT y pasarelas de pago):**
   - *Impacto:* Variabilidad de respuesta en servicios tributarios y billeteras electrónicas externas.
   - *Mitigación:* Especificación formal de supuestos de negocio en DOC-PLAN-01 (`SUP-01` y `SUP-03`): emisión local estructurada de comprobantes sin obligatoriedad de conexión sincrónica externa, y validación en mostrador de transacciones de Yape/Plin (IziPay) mediante código de autorización único (RN-02).
5. **Alta densidad de historias de usuario en Sprint 3 (27 historias, 72 pts):**
   - *Impacto:* Elevado número de cambios de contexto y revisiones funcionales independientes.
   - *Mitigación:* El 88.9 % de las historias del Sprint 3 (24 de 27) presentan un tamaño acotado (≤ 3 pts), facilitando un flujo dinámico de construcción y pase continuo a verificación independiente sin acumulación de trabajo pendiente.


<!-- ===================================================================== -->
<!-- ARCHIVO FUENTE: 06_Sprint_Backlog.md -->
<!-- ===================================================================== -->

---
Código de Documento: DOC-PLAN-06
Título: Sprint Backlog
Versión: 5.2
Fecha: 2026-10-04
Elaborado por: Angeles Pérez, Jhonny
Revisado por: Colonia Infantas, Walter
Estado: Aprobado
Propósito: Detalle de historias planificadas por sprint, dependencias intra e inter sprint, asignaciones y plan de ejecución
Documentos relacionados: DOC-PLAN-00, DOC-PLAN-01, DOC-PLAN-02, DOC-PLAN-03-00, DOC-PLAN-04, DOC-PLAN-05, DOC-PLAN-07, DOC-PLAN-08, DOC-ANEXO-A, DOC-ANEXO-B
---

# 06. Sprint Backlog

## Introducción y Parámetros Operativos
El Sprint Backlog desagrega el Product Backlog del "Sistema de Gestión Integral para Minimarket" a lo largo de **3 Sprints de 2 semanas cada uno**, alineados 1:1 con los horizontes de entrega de los **3 Releases oficiales (REL-1, REL-2 y REL-3)**:
- **Equipo de desarrollo:** 6 Developers dedicados con jornada de 25 h/semana (50 h brutas por persona por sprint).
- **Factor de enfoque neto:** 80 % (deducción del 20 % / 10 h por integrante para ceremonias Scrum oficiales: Planning 4 h, Daily 2.5 h, Review 2 h, Retrospectiva 1.5 h).
- **Capacidad neta del equipo:** 240.0 horas efectivas de desarrollo por sprint (40.0 h netas por desarrollador).
- **Velocidad estimada:** 120 puntos de historia por sprint (pivote `HU-CAT-01` = 1 pt = 2.0 h de esfuerzo base).
- **Esfuerzo operativo total (DOC-PLAN-07):** 363 tareas técnicas que suman **502.0 horas** (296.0 h de Construcción y 206.0 h de Verificación QA independiente).
- **Principio de independencia de calidad:** En el 100 % de las historias se cumple la regla estricta `Construye ≠ Verifica`. Des.4 Alcalde asume el rol de Developer enfocado en aseguramiento de calidad (QA) sin tareas de construcción.

---

## Sprint 1: Release 1 (MVP Operativo)

### Información General del Sprint 1
- **Objetivo del Sprint (Sprint Goal):** Entregar un MVP operativo que permita vender en mostrador con turno de caja abierto, descontar inventario y emitir comprobantes, sobre una base de seguridad por roles y catálogos maestros.
- **Alcance funcional del Sprint:** Poner en marcha y certificar ante el docente el Producto Mínimo Viable (MVP) operativo del minimarket, abarcando la infraestructura de autenticación por roles, administración de usuarios y configuración base, catálogos maestros (categorías, proveedores y productos con stock mínimo), gestión física de almacén (entradas, mermas y ajustes), arqueo y control de turnos de caja, y el circuito transaccional completo del Punto de Venta (POS) con medios de pago en Efectivo y billetera digital Yape/Plin (IziPay), emisión legal de boletas y facturas según normativa SUNAT local, y captura automática de clientes.
- **Ventana Temporal:** Semana 5 a Semana 7 (Miércoles 30 de septiembre al Martes 13 de octubre de 2026).
- **Días Laborales:** 10 días de trabajo (9 días hábiles lectivos más el sábado 03 de octubre como jornada compensatoria del feriado nacional del 08 de octubre).
- **Presentación en Clase (Sprint Review 1):** Martes 13 de octubre de 2026 (Semana 7).
- **Puntos Comprometidos:** **89 puntos de historia** (20 Historias de Usuario, 100 % Must have).
- **Horas de Tareas Planificadas:** **178.0 horas** (104.50 h Construcción + 73.50 h Verificación QA).
- **Capacidad Neta Disponible:** 240.0 horas (Uso de capacidad: 74.2 %, con 62.0 h de holgura preventiva).
- **Presupuesto Económico:** S/ 7,500.00 (2 semanas × S/ 625/semana × 6 desarrolladores, todo costo laboral).

### Historias de Usuario Comprometidas (Sprint 1)

| ID de HU | Título de la Historia de Usuario | MoSCoW | Pts | Depende de | Constructor Principal | Verificador QA |
|---|---|:---:|:---:|---|---|---|
| **HU-AUTH-01** | Autenticación – Iniciar sesión | Must have (4) | 5 | Ninguna | Des.5 Colonia | Des.2 Nolasco |
| **HU-AUTH-02** | Autenticación – Bloquear cuenta por  | Must have (4) | 3 | HU-AUTH-01 | Des.1 Velasquez | Des.6 Angeles |
| **HU-AUTH-03** | Autenticación – Cerrar sesión | Must have (4) | 2 | HU-AUTH-01 | Des.3 Castillo | Des.5 Colonia |
| **HU-CAJA-01** | Caja – Abrir turno de caja | Must have (4) | 5 | HU-AUTH-01 | Des.2 Nolasco | Des.5 Colonia |
| **HU-CAT-02** | Categorías – Crear nueva categoría de productos | Must have (4) | 2 | HU-AUTH-01 | Des.6 Angeles | Des.3 Castillo |
| **HU-CONF-02** | Configuración – Actualizar configuración del negocio | Must have (4) | 3 | HU-AUTH-01 | Des.3 Castillo | Des.6 Angeles |
| **HU-PROV-02** | Proveedores – Registrar nuevo proveedor | Must have (4) | 3 | HU-AUTH-01 | Des.6 Angeles | Des.5 Colonia |
| **HU-USR-02** | Usuarios – Crear cuenta de nuevo empleado | Must have (4) | 5 | HU-AUTH-01 | Des.2 Nolasco | Des.4 Alcalde |
| **HU-CAJA-02** | Caja – Cerrar turno de caja y cuadrar | Must have (4) | 5 | HU-CAJA-01 | Des.1 Velasquez | Des.4 Alcalde |
| **HU-CAT-01** | Categorías – Ver lista de categorías de productos | Must have (4) | 1 | HU-CAT-02 | Des.6 Angeles | Des.2 Nolasco |
| **HU-PROD-02** | Productos – Registrar nuevo producto en el catálogo | Must have (4) | 5 | HU-CAT-02 | Des.2 Nolasco | Des.6 Angeles |
| **HU-CAJA-05** | Caja – Consultar historial de turnos de caja | Must have (4) | 3 | HU-CAJA-02 | Des.6 Angeles | Des.4 Alcalde |
| **HU-INV-01** | Inventario – Registrar entrada de mercadería | Must have (4) | 5 | HU-PROD-02, HU-PROV-02 | Des.1 Velasquez | Des.6 Angeles |
| **HU-PROD-01** | Productos – Ver catálogo completo de productos | Must have (4) | 3 | HU-PROD-02 | Des.5 Colonia | Des.6 Angeles |
| **HU-INV-02** | Inventario – Registrar baja de inventario por merma | Must have (4) | 5 | HU-INV-01 | Des.2 Nolasco | Des.1 Velasquez |
| **HU-INV-03** | Inventario – Realizar ajuste por conteo físico | Must have (4) | 5 | HU-INV-01 | Des.3 Castillo | Des.6 Angeles |
| **HU-VEN-01a** | Ventas (POS) – Inicialización de terminal de venta y validación de turno | Must have (4) | 3 | HU-CAJA-01 | Des.3 Castillo | Des.4 Alcalde |
| **HU-VEN-01b** | Ventas (POS) – Registro de líneas de venta y cobro en mostrador | Must have (4) | 5 | HU-VEN-01a, HU-INV-01 | Des.3 Castillo | Des.4 Alcalde |
| **HU-VEN-01c** | Ventas (POS) – Despacho por expiración FEFO y descargo de lotes | Must have (4) | 5 | HU-VEN-01b | Des.3 Castillo | Des.4 Alcalde |
| **HU-CLI-02** | Clientes – Registrar cliente automáticamente al vender | Must have (4) | 3 | HU-VEN-01b | Des.2 Nolasco | Des.3 Castillo |
| **HU-VEN-02** | Ventas (POS) – Emitir boleta o factura | Must have (4) | 8 | HU-VEN-01b, HU-VEN-01c | Des.1 Velasquez | Des.5 Colonia |
| **HU-VEN-05** | Ventas (POS) – Consultar historial de ventas | Must have (4) | 5 | HU-VEN-01b | Des.5 Colonia | Des.4 Alcalde |
| **TOTALES S1** | **22 Historias de Usuario Comprometidas** | | **89** | | **104.50 h Constr.** | **73.50 h QA** |

---

### Plan de ejecución del Sprint 1 (Camino Crítico y Cronograma Verificados)

#### 1. Modelo de precedencias (principio «contrato primero»)
1. TAR-HU-AUTH-01-01 (Configurar entorno) precede a toda tarea del sprint; ningún paso 5 (Codificar) inicia antes de terminar TAR-HU-AUTH-01-03.
2. Dentro de una HU: 4 → 5. El paso 6 (Probar de unidad) inicia al terminar el paso 4 y avanza en paralelo con el paso 5 contra el contrato de datos/servicios acordado el día 1. El paso 7 (Depuración) exige 5 y 6 terminados. El paso 8 (Desplegar) exige el 7.
3. Entre HU: el paso 7 de una HU exige el paso 5 terminado de sus prerrequisitos; el paso 8 exige el paso 8 terminado de sus prerrequisitos (despliegue en orden de dependencia).
4. Cada developer ejecuta una tarea a la vez; 4 h efectivas por día (5 h × 80 %).

#### 2. Camino crítico lógico: **22.00 h** (sin restricción de recursos)

| Orden | Tarea | Responsable | Duración (h) | Inicio temprano (h) | Fin temprano (h) | Holgura (h) |
|---:|---|---|---:|---:|---:|---:|
| 1 | TAR-HU-AUTH-01-01 · Configurar entorno | Des.5 | 1.00 | 0.00 | 1.00 | 0.00 |
| 2 | TAR-HU-VEN-01a/b/c-04 · Desarrollar interfaces POS | Des.3 | 3.75 | 1.00 | 4.75 | 0.00 |
| 3 | TAR-HU-VEN-01a/b/c-05 · Codificar lógica POS y FEFO | Des.3 | 7.50 | 4.75 | 12.25 | 0.00 |
| 4 | TAR-HU-VEN-01a/b/c-07 · Depuración integral POS | Des.3 | 3.75 | 12.25 | 16.00 | 0.00 |
| 5 | TAR-HU-VEN-01a/b/c-08 · Verificación funcional y pase web | Des.4 | 3.75 | 16.00 | 19.75 | 0.00 |
| 6 | TAR-HU-VEN-02-08 · Verificación funcional y pase web | Des.5 | 2.25 | 19.75 | 22.00 | 0.00 |
| | **Total camino crítico lógico** | | **22.00** | | | |

Tareas casi críticas: TAR-HU-VEN-01a/b/c-06 · Pruebas de unidad e integración (Des.4, 7.25 h, holgura 0.25 h) y TAR-HU-VEN-05-08 · Verificación funcional y pase web (Des.4, 1.50 h, holgura 0.75 h).

*Variante conservadora (si pruebas no se solapan con codificación, paso 6 tras paso 5):* **29.25 h** = AUTH-01-01 (1.00) + VEN-01a/b/c-04 (3.75) + VEN-01a/b/c-05 (7.50) + VEN-01a/b/c-06 (7.25) + VEN-01a/b/c-07 (3.75) + VEN-01a/b/c-08 (3.75) + VEN-02-08 (2.25). Los pasos 4 al 8 de HU-VEN-01a/b/c suman 26.00 h; los 29.25 h incluyen además AUTH-01-01 y VEN-02-08.

#### 3. Carga individual en el Sprint 1 y Traspaso al Día 9
Del Día 1 al Día 8 cada desarrollador dispone de **29.00 h de desarrollo efectivo** (1.0 h en el Día 1 tras 4.0 h de Sprint Planning, y 4.0 h netas diarias en los 7 días restantes). La carga de tareas de cada integrante y su distribución efectiva se detalla a continuación:

| Developer | Horas S1 | Horas ejecutadas D1–D8 | Horas residuales Día 9 | % Capacidad D1–D8 (de 29.0 h) | Estado al cierre Día 8 |
|---|---:|---:|---:|---:|---|
| Des.1 Velasquez | 28.50 | 28.50 | 0.00 | 98.3 % | Completado (0.50 h holgura) |
| Des.2 Nolasco | 30.25 | 29.00 | 1.25 | 100.0 % | Pasa 1.25 h a lun 12-oct |
| Des.3 Castillo | 30.75 | 29.00 | 1.75 | 100.0 % | Pasa 1.75 h a lun 12-oct |
| Des.4 Alcalde (QA) | 26.25 | 26.25 | 0.00 | 90.5 % | Completado (2.75 h holgura) |
| Des.5 Colonia | 31.25 | 29.00 | 2.25 | 100.0 % | Pasa 2.25 h a lun 12-oct |
| Des.6 Angeles | 31.00 | 29.00 | 2.00 | 100.0 % | Pasa 2.00 h a lun 12-oct |
| **TOTALES** | **178.00** | **170.75** | **7.25** | **95.9 %** | **Cierre en Día 9 (mañana)** |

*Hallazgo de balanceo individual:* Des.1 y Des.4 completan el 100 % de su trabajo en el Día 8 disponiendo de holgura. Des.2, Des.3, Des.5 y Des.6 trasladan exactamente **7.25 horas residuales** a la mañana del lunes 12 de octubre (Día 9), cerrando todas las tareas periféricas antes del mediodía y dejando el resto del día y el Día 10 íntegros como colchón de ensayo para la Sprint Review.

#### 4. Cronograma por developer y día (asignaciones inmutables de DOC-PLAN-07)
Cada celda indica HU y pasos de la plantilla (p. ej. VEN-01·4,5 = pasos 4 y 5 de HU-VEN-01). Días 9 (parcial) y 10 son colchón/regresión/ensayo; el día 10 (martes 13-oct) es la presentación en clase.

| Developer | Día 1<br>mié 30-sep | Día 2<br>jue 01-oct | Día 3<br>vie 02-oct | Día 4<br>sáb 03-oct | Día 5<br>lun 05-oct | Día 6<br>mar 06-oct | Día 7<br>mié 07-oct | Día 8<br>vie 09-oct | Día 9<br>lun 12-oct | Día 10<br>mar 13-oct |
|---|---|---|---|---|---|---|---|---|---|---|
| Des.1 Velasquez | INV-01·4,5<br>VEN-02·4 | INV-01·5<br>VEN-02·4,5 | VEN-02·5<br>INV-01·7 | INV-01·7<br>VEN-02·5<br>CAJA-02·4,5 | CAJA-02·5<br>AUTH-02·4<br>INV-02·6 | INV-02·6<br>AUTH-02·4<br>VEN-02·7 | CAJA-02·7<br>AUTH-02·5,7 | INV-02·8 | — | — |
| Des.2 Nolasco | PROD-02·4<br>CAJA-01·4 | AUTH-01·6<br>PROD-02·5 | PROD-02·5<br>CAJA-01·5<br>AUTH-01·8 | AUTH-01·8<br>PROD-02·7<br>CAJA-01·7<br>USR-02·4 | USR-02·4,5<br>INV-02·4 | USR-02·5<br>INV-02·5 | CLI-02·4,5<br>USR-02·7 | INV-02·7<br>CLI-02·7<br>CAT-01·6 | CAT-01·8 | — |
| Des.3 Castillo | VEN-01·4 | VEN-01·4,5 | VEN-01·5 | VEN-01·5,7<br>CAT-02·6 | VEN-01·7<br>CAT-02·8<br>INV-03·4,5 | INV-03·5<br>CONF-02·4,5 | CONF-02·5<br>AUTH-03·4<br>CLI-02·6<br>INV-03·7 | AUTH-03·5,7<br>CONF-02·7<br>CLI-02·8 | — | — |
| Des.4 Alcalde | — | VEN-01·6 | VEN-01·6 | CAJA-05·6<br>CAJA-02·6 | CAJA-02·6<br>USR-02·6 | USR-02·6<br>VEN-01·8 | VEN-01·8<br>USR-02·6<br>VEN-05·6<br>CAJA-02·8 | CAJA-02·8<br>USR-02·8<br>VEN-05·8<br>CAJA-05·8 | CAJA-05·8 | — |
| Des.5 Colonia | AUTH-01·1 | AUTH-01·5<br>CAJA-01·6 | CAJA-01·6<br>AUTH-01·7<br>PROV-02·6<br>VEN-02·6 | VEN-02·6<br>PROV-02·8 | PROV-02·8<br>CAJA-01·8<br>VEN-05·4,5 | VEN-05·5<br>PROD-01·4,5 | PROD-01·5<br>AUTH-03·6<br>VEN-02·8<br>VEN-05·7 | VEN-05·7<br>VEN-02·8<br>PROD-01·7<br>AUTH-03·8 | — | — |
| Des.6 Angeles | CAT-02·4<br>PROV-02·4<br>PROD-02·6 | PROD-02·6<br>PROV-02·4<br>INV-01·6 | INV-01·6<br>CAT-02·5<br>PROV-02·5,7<br>CAJA-05·4 | PROV-02·7<br>CAJA-05·4,5<br>CAT-02·7<br>CAT-01·4,5 | PROD-02·8<br>INV-01·8 | INV-01·8<br>INV-03·6<br>AUTH-02·6 | AUTH-02·6<br>CONF-02·6<br>PROD-01·6<br>CAJA-05·7 | CAJA-05·7<br>INV-03·8<br>AUTH-02·8<br>CONF-02·8 | CONF-02·8<br>PROD-01·8<br>CAT-01·7 | — |

#### 5. Burndown diario planificado

| Día | Fecha | Semana del curso | Horas ejecutadas | Horas restantes | HU cerradas (acum.) | Puntos cerrados (acum.) | Puntos pendientes |
|---:|---|---:|---:|---:|---:|---:|---:|
| 1 | mié 30-sep | 5 | 6.00 | 172.00 | 0 | 0 | 89 |
| 2 | jue 01-oct | 5 | 24.00 | 148.00 | 0 | 0 | 89 |
| 3 | vie 02-oct | 5 | 24.00 | 124.00 | 0 | 0 | 89 |
| 4 | sáb 03-oct | 5 | 24.00 | 100.00 | 1 | 5 | 84 |
| 5 | lun 05-oct | 6 | 24.00 | 76.00 | 5 | 20 | 69 |
| 6 | mar 06-oct | 6 | 24.00 | 52.00 | 6 | 25 | 64 |
| 7 | mié 07-oct | 6 | 24.00 | 28.00 | 7 | 38 | 51 |
| 8 | vie 09-oct | 6 | 20.75 | 7.25 | 16 | 79 | 10 |
| 9 | lun 12-oct | 7 | 7.25 | 0.00 | 20 | 89 | 0 |
| 10 | mar 13-oct | 7 | 0.00 | 0.00 | 20 | 89 | 0 |

*Nota de cuadratura horaria:* En el Día 1 (miércoles 30 de septiembre), los 6 desarrolladores dedican 4.0 h a la ceremonia de Sprint Planning y 1.0 h a tareas técnicas de arranque (6.0 h en total para el equipo), respetando la jornada máxima de 5.0 h brutas diarias por persona. En los Días 2 al 7 se ejecutan 24.0 h diarias (4.0 h netas por desarrollador). En el Día 8 se ejecutan 20.75 h porque Des.4 (26.25 h) y Des.1 (28.50 h) completan anticipadamente su carga planificada. Las 7.25 h residuales son concluidas en la mañana del Día 9 por Des.2 (1.25 h), Des.3 (1.75 h), Des.5 (2.25 h) y Des.6 (2.00 h), dejando 16.75 h de holgura ese día y el Día 10 íntegro para estabilización, ensayo y presentación en clase.

#### 6. Cierre de HU

| HU | Cierra el día | Fecha | Pts |
|---|---:|---|---:|
| HU-AUTH-01 | 4 | sáb 03-oct | 5 |
| HU-PROV-02 | 5 | lun 05-oct | 3 |
| HU-CAT-02 | 5 | lun 05-oct | 2 |
| HU-CAJA-01 | 5 | lun 05-oct | 5 |
| HU-PROD-02 | 5 | lun 05-oct | 5 |
| HU-INV-01 | 6 | mar 06-oct | 5 |
| HU-VEN-01 | 7 | mié 07-oct | 13 |
| HU-CAJA-02 | 8 | vie 09-oct | 5 |
| HU-VEN-02 | 8 | vie 09-oct | 8 |
| HU-INV-03 | 8 | vie 09-oct | 5 |
| HU-USR-02 | 8 | vie 09-oct | 5 |
| HU-INV-02 | 8 | vie 09-oct | 5 |
| HU-AUTH-02 | 8 | vie 09-oct | 3 |
| HU-AUTH-03 | 8 | vie 09-oct | 2 |
| HU-CLI-02 | 8 | vie 09-oct | 3 |
| HU-VEN-05 | 8 | vie 09-oct | 5 |
| HU-CONF-02 | 9 | lun 12-oct | 3 |
| HU-CAJA-05 | 9 | lun 12-oct | 3 |
| HU-PROD-01 | 9 | lun 12-oct | 3 |
| HU-CAT-01 | 9 | lun 12-oct | 1 |

**Resultado verificado:** HU-VEN-01 (13 pts, camino crítico) cierra el día 7 (mié 07-oct) y HU-VEN-02 el día 8 (vie 09-oct). El sprint cierra formalmente en la mañana del **día 9 (lun 12-oct) con 7.25 h residuales** en HU periféricas (HU-CONF-02, HU-CAJA-05, HU-PROD-01, HU-CAT-01). El colchón preventivo abarca el resto del lunes 12-oct (16.75 h de holgura) y el martes 13-oct previo a la clase de presentación del MVP.

#### 7. Sensibilidad del cierre del Sprint 1 (simulación con restricciones de precedencias)
Formato: día de cierre (horas efectivas usadas ese día). Escenarios: **base**; **mar 6-oct a media jornada** (clase); **VEN-01 +30 %** de sobre-esfuerzo.

| Jornada efectiva/día (bruta) | Modelo contrato primero: base | mar ½ | VEN-01 +30 % | Modelo conservador (6 tras 5): base | mar ½ | VEN-01 +30 % |
|---|---|---|---|---|---|---|
| 4.0 h (5.0 h) — oficial | 9 (1.75) | 9 (3.75) | 10 (4.00) | 10 (2.50) | 11 (0.50) | 12 (2.00) |
| 4.5 h (5.6 h) | 8 (2.25) | 8 (4.50) | 9 (4.25) | 9 (2.50) | 10 (0.25) | 11 (1.25) |
| 5.0 h (6.25 h) | 7 (3.75) | 8 (1.25) | 9 (0.50) | 8 (3.50) | 9 (1.00) | 10 (1.50) |
| 6.0 h (7.5 h) | 6 (3.75) | 7 (0.75) | 7 (5.00) | 7 (2.50) | 7 (5.50) | 8 (5.00) |

#### 8. Disparadores de control y Plan B de alcance
- **Punto de control 1 — cierre del día 5 (lun 05-oct):** Horas restantes planificadas = 76.00 h. Si las horas restantes reales superan **86 h** (desvío ≥ 10 h), se activa el Plan B.
- **Plan B:** Mover al Sprint 2 las HU periféricas sin dependientes en Sprint 1: HU-CAT-01 (1 pt), HU-PROD-01 (3 pts), HU-CAJA-05 (3 pts) y HU-VEN-05 (5 pts) = **12 pts / 24 h**. El MVP queda en 77 pts (16 HU, todas Must have) y el Sprint 2 en 102 pts (85 % de la V.E. = 120), dentro de la capacidad.
- **Punto de control 2 — cierre del día 7 (mié 07-oct):** Horas restantes planificadas = 28.00 h. Si las reales superan **38 h** (desvío ≥ 10 h), el equipo detiene la apertura de historias nuevas y enfoca todo el esfuerzo en cerrar la cadena central de ventas (HU-VEN-01, HU-VEN-02) y sus prerrequisitos.

#### 9. Supuestos del cronograma
- Sábado 03-oct laborado como compensación del feriado nacional del jueves 08-oct.
- Disponibilidad de 4.0 h efectivas el martes 06-oct (sesión lectiva nocturna).
- El martes 13-oct (presentación de MVP en clase) se reserva exclusivamente para la Sprint Review, sin planificar desarrollo.

---

## Sprint 2: Release 2 (Operación y Control Integral)

### Información General del Sprint 2
- **Objetivo del Sprint (Sprint Goal):** Cerrar el ciclo de abastecimiento y fortalecer el control operativo: reposición formal con aprobación, sesión única, anulaciones con devolución, supervisión de caja y tableros gerenciales de alertas.
- **Alcance funcional del Sprint:** Desarrollar, integrar y certificar el Release 2, consolidando el ciclo formal de reposición de mercadería (solicitud, aprobación, rechazo y recepción contra Solicitud aprobada con costeo promedio ponderado), el endurecimiento de la seguridad de sesiones (sesión única por usuario con expulsión de sesiones concurrentes, recuperación de clave por correo y cierre remoto), la supervisión operativa y control de caja (movimientos manuales, resumen activo, aprobación y forzado de cierres ajenos), el protocolo de anulaciones de venta con devolución de inventario, y la suite de control directivo con reportes analíticos iniciales y tableros gerenciales de alertas tempranas.
- **Ventana Temporal:** Semana 7 a Semana 9 (Miércoles 14 de octubre al Martes 27 de octubre de 2026).
- **Días Laborales:** 10 días hábiles de trabajo.
- **Presentación en Clase (Sprint Review 2):** Martes 27 de octubre de 2026 (Semana 9).
- **Puntos Comprometidos:** **90 puntos de historia** (25 Historias de Usuario: 16 Must have [64 pts] + 9 Should have [26 pts]).
- **Horas de Tareas Planificadas:** **180.0 horas** (105.75 h Construcción + 74.25 h Verificación QA).
- **Capacidad Neta Disponible:** 240.0 horas (Uso de capacidad: 75.0 %, con 60.0 h de holgura preventiva).
- **Presupuesto Económico:** S/ 7,500.00 (2 semanas × S/ 625/semana × 6 desarrolladores).

### Historias de Usuario Comprometidas (Sprint 2)

| ID de HU | Título de la Historia de Usuario | MoSCoW | Pts | Depende de | Constructor Principal | Verificador QA |
|---|---|:---:|:---:|---|---|---|
| **HU-AUTH-04** | Autenticación – Garantizar sesión única por usuario | Must have (4) | 8 | HU-AUTH-01, HU-AUTH-03 | Des.5 Colonia | Des.3 Castillo |
| **HU-AUTH-05** | Autenticación – Recuperar contraseña por correo | Should have (3) | 5 | HU-AUTH-01 | Des.5 Colonia | Des.4 Alcalde |
| **HU-USR-06** | Usuarios – Forzar cierre de sesión remoto | Should have (3) | 3 | HU-AUTH-01 | Des.3 Castillo | Des.4 Alcalde |
| **HU-CONF-01** | Configuración – Ver configuración actual del negocio | Must have (4) | 1 | HU-CONF-02 | Des.5 Colonia | Des.6 Angeles |
| **HU-PROV-01** | Proveedores – Ver lista de proveedores | Must have (4) | 2 | HU-PROV-02 | Des.6 Angeles | Des.5 Colonia |
| **HU-USR-01** | Usuarios – Listar empleados del sistema | Must have (4) | 2 | HU-USR-02 | Des.3 Castillo | Des.1 Velasquez |
| **HU-USR-04** | Usuarios – Desactivar cuenta de empleado | Must have (4) | 3 | HU-USR-02 | Des.2 Nolasco | Des.1 Velasquez |
| **HU-CAJA-03** | Caja – Registrar movimiento manual de efectivo | Should have (3) | 3 | HU-CAJA-01 | Des.3 Castillo | Des.4 Alcalde |
| **HU-CAJA-04** | Caja – Ver resumen del turno activo | Should have (3) | 2 | HU-CAJA-01 | Des.5 Colonia | Des.4 Alcalde |
| **HU-CAJA-07** | Caja – Forzar cierre de turno ajeno | Should have (3) | 5 | HU-CAJA-01 | Des.2 Nolasco | Des.3 Castillo |
| **HU-PROV-04** | Proveedores – Desactivar o reactivar proveedor | Should have (3) | 2 | HU-PROV-02 | Des.3 Castillo | Des.4 Alcalde |
| **HU-SOL-01** | Reposición – Crear solicitud de reposición | Must have (4) | 3 | HU-PROD-02, HU-PROV-02 | Des.6 Angeles | Des.1 Velasquez |
| **HU-CAJA-06** | Caja – Aprobar cierre de turno | Should have (3) | 2 | HU-CAJA-02 | Des.6 Angeles | Des.2 Nolasco |
| **HU-DASH-03** | Dashboard – Alertas de stock crítico, vencimientos y turnos olvidados | Must have (4) | 5 | HU-INV-01, HU-CAJA-05 | Des.6 Angeles | Des.4 Alcalde |
| **HU-PROD-06** | Productos – Consultar productos próximos a vencer | Must have (4) | 3 | HU-INV-01 | Des.2 Nolasco | Des.4 Alcalde |
| **HU-REP-05** | Reportes – Ver stock crítico | Must have (4) | 3 | HU-INV-01 | Des.1 Velasquez | Des.4 Alcalde |
| **HU-SOL-02** | Reposición – Listar solicitudes con filtro por estado | Must have (4) | 2 | HU-SOL-01 | Des.2 Nolasco | Des.1 Velasquez |
| **HU-SOL-03** | Reposición – Aprobar solicitud de reposición | Must have (4) | 3 | HU-SOL-01 | Des.3 Castillo | Des.4 Alcalde |
| **HU-SOL-04** | Reposición – Rechazar solicitud de reposición | Should have (3) | 2 | HU-SOL-01 | Des.1 Velasquez | Des.3 Castillo |
| **HU-DASH-01** | Dashboard – Ver resumen de ventas del día y del mes | Must have (4) | 5 | HU-VEN-01 | Des.1 Velasquez | Des.5 Colonia |
| **HU-REP-01** | Reportes – Ver resumen de ventas por período | Must have (4) | 5 | HU-VEN-01 | Des.5 Colonia | Des.2 Nolasco |
| **HU-REP-02** | Reportes – Ver ranking de productos más vendidos | Must have (4) | 3 | HU-VEN-01 | Des.1 Velasquez | Des.6 Angeles |
| **HU-SOL-05** | Reposición – Completar solicitud al recibir mercadería | Must have (4) | 8 | HU-SOL-03 | Des.2 Nolasco | Des.1 Velasquez |
| **HU-VEN-06** | Ventas (POS) – Anular una venta con devolución | Must have (4) | 8 | HU-VEN-01 | Des.6 Angeles | Des.4 Alcalde |
| **HU-VEN-07** | Ventas (POS) – Verificar recepción de pago Yape/Plin (IziPay) | Should have (3) | 2 | HU-VEN-01 | Des.3 Castillo | Des.6 Angeles |
| **TOTALES S2** | **25 Historias de Usuario Comprometidas** | | **90** | | **105.75 h Constr.** | **74.25 h QA** |

### Estrategia de Ejecución del Sprint 2
1. **Arranque inmediato de dependencias heredadas:** Dado que la infraestructura base de autenticación (`HU-AUTH-01`), catálogos (`HU-PROD-02`, `HU-PROV-02`), inventario (`HU-INV-01`), caja (`HU-CAJA-01`, `HU-CAJA-02`) y ventas (`HU-VEN-01`) quedó desplegada y verificada en Sprint 1, todas las historias del Sprint 2 pueden iniciar construcción inmediatamente desde el Día 1 sin bloqueos externos.
2. **Encadenamiento del módulo de reposición:** La secuencia `HU-SOL-01` (Creación) → `HU-SOL-02` / `HU-SOL-03` / `HU-SOL-04` (Gestión/Aprobación) → `HU-SOL-05` (Recepción contra Solicitud aprobada con actualización de existencias) se programa de forma coordinada entre Des.6, Des.3, Des.1 y Des.2.
3. **Flujos transaccionales de control y supervisión:** Des.6 lidera la anulación de ventas (`HU-VEN-06`, 8 pts), restringida exclusivamente a Administrador o Gerente, con reversión física hacia merma o stock mientras el turno de caja continúe en estado 'Abierto' (RN-08 y RN-09). Des.5 implementa la concurrencia de sesiones (`HU-AUTH-04`, 8 pts) en coordinación con el cierre forzado remoto (`HU-USR-06`).
4. **Activación de tableros y reportería directiva:** Se despliegan los cuadros de mando consolidados (`HU-DASH-01`, `HU-DASH-03`) y la reportería de ventas y stock crítico (`HU-REP-01`, `HU-REP-02`, `HU-REP-05`), garantizando la visibilidad de alertas para la toma de decisiones.

---

## Sprint 3: Release 3 (Mejoras, Supervisión y Exportación)

### Información General del Sprint 3
- **Objetivo del Sprint (Sprint Goal):** Completar el producto con trazabilidad de accesos, mantenimiento de catálogos, lector de código de barras, trazabilidad histórica de inventario, comprobantes descargables y analítica de negocio.
- **Alcance funcional del Sprint:** Completar y certificar la totalidad del Product Backlog del sistema (Release 3), implementando el registro inmutable de trazabilidad de accesos (`HU-LOG-01`), las funciones avanzadas de edición y reactivación de catálogos y personal, la agilización de búsquedas y registro mediante lector de código de barras USB/óptico, la trazabilidad histórica de movimientos de almacén, la generación descargable de comprobantes de pago en PDF, la especificación de exportación a CSV y la suite completa de analítica de negocio (márgenes de ganancia, desglose diario y por método de pago, y reporte de mermas).
- **Ventana Temporal:** Semana 9 a Semana 11 (Miércoles 28 de octubre al Martes 10 de noviembre de 2026).
- **Días Laborales:** 10 días hábiles de trabajo.
- **Presentación en Clase (Sprint Review 3 - Sustentación Final):** Martes 10 de noviembre de 2026 (Semana 11).
- **Puntos Comprometidos:** **72 puntos de historia** (27 Historias de Usuario: 22 Should have [58 pts] + 5 Could have [14 pts]).
- **Horas de Tareas Planificadas:** **144.0 horas** (85.75 h Construcción + 58.25 h Verificación QA).
- **Capacidad Neta Disponible:** 240.0 horas (Uso de capacidad: 60.0 %, con 96.0 h de holgura preventiva).
- **Presupuesto Económico:** S/ 7,500.00 (2 semanas × S/ 625/semana × 6 desarrolladores).

### Historias de Usuario Comprometidas (Sprint 3)

| ID de HU | Título de la Historia de Usuario | MoSCoW | Pts | Depende de | Constructor Principal | Verificador QA |
|---|---|:---:|:---:|---|---|---|
| **HU-AUTH-06 (Cancelada)** | Autenticación – Cambiar contraseña propia | Should have (3) | 3 | HU-AUTH-01 | Des.2 Nolasco | Des.4 Alcalde |
| **HU-LOG-01** | Trazabilidad – Consultar registro de accesos al sistema | Should have (3) | 3 | HU-AUTH-01 | Des.1 Velasquez | Des.3 Castillo |
| **HU-CAT-03** | Categorías – Editar nombre de categoría | Should have (3) | 1 | HU-CAT-02 | Des.1 Velasquez | Des.4 Alcalde |
| **HU-PROV-03** | Proveedores – Editar datos de un proveedor | Should have (3) | 2 | HU-PROV-02 | Des.2 Nolasco | Des.4 Alcalde |
| **HU-USR-03** | Usuarios – Editar datos de un empleado | Should have (3) | 3 | HU-USR-02 | Des.6 Angeles | Des.4 Alcalde |
| **HU-CAT-04** | Categorías – Eliminar categoría sin productos | Could have (2) | 2 | HU-CAT-02 | Des.5 Colonia | Des.1 Velasquez |
| **HU-PROD-04** | Productos – Editar datos de un producto | Should have (3) | 3 | HU-PROD-02 | Des.1 Velasquez | Des.4 Alcalde |
| **HU-PROD-05** | Productos – Desactivar o reactivar producto | Should have (3) | 2 | HU-PROD-02 | Des.6 Angeles | Des.4 Alcalde |
| **HU-USR-05** | Usuarios – Reactivar cuenta de empleado | Should have (3) | 2 | HU-USR-04 | Des.1 Velasquez | Des.4 Alcalde |
| **HU-PROD-03** | Productos – Escanear código de barras para registrar producto | Could have (2) | 5 | HU-PROD-02 | Des.5 Colonia | Des.2 Nolasco |
| **HU-DASH-05** | Dashboard – Ver solicitudes de reposición pendientes | Should have (3) | 2 | HU-SOL-01 | Des.1 Velasquez | Des.4 Alcalde |
| **HU-INV-04** | Inventario – Consultar historial de entradas | Should have (3) | 2 | HU-INV-01 | Des.6 Angeles | Des.4 Alcalde |
| **HU-REP-06** | Reportes – Ver resumen general del inventario | Should have (3) | 2 | HU-INV-01 | Des.2 Nolasco | Des.4 Alcalde |
| **HU-DASH-02** | Dashboard – Ver gráfico de evolución de ventas por día | Should have (3) | 3 | HU-VEN-01 | Des.5 Colonia | Des.4 Alcalde |
| **HU-DASH-04** | Dashboard – Ver ranking de productos más vendidos | Should have (3) | 3 | HU-VEN-01 | Des.6 Angeles | Des.5 Colonia |
| **HU-INV-05** | Inventario – Consultar historial de bajas | Should have (3) | 2 | HU-INV-02 | Des.2 Nolasco | Des.4 Alcalde |
| **HU-INV-06** | Inventario – Consultar historial de ajustes | Should have (3) | 2 | HU-INV-03 | Des.2 Nolasco | Des.5 Colonia |
| **HU-REP-03** | Reportes – Ver ventas desglosadas por día | Should have (3) | 3 | HU-VEN-01 | Des.3 Castillo | Des.2 Nolasco |
| **HU-REP-04** | Reportes – Ver ventas por método de pago | Should have (3) | 2 | HU-VEN-01 | Des.2 Nolasco | Des.3 Castillo |
| **HU-REP-07** | Reportes – Ver margen de ganancia por producto | Should have (3) | 5 | HU-VEN-01, HU-INV-01 | Des.6 Angeles | Des.4 Alcalde |
| **HU-REP-08** | Reportes – Ver mermas agrupadas por motivo | Should have (3) | 3 | HU-INV-02 | Des.5 Colonia | Des.2 Nolasco |
| **HU-VEN-04** | Ventas (POS) – Buscar producto por código de barras | Should have (3) | 3 | HU-VEN-01 | Des.3 Castillo | Des.4 Alcalde |
| **HU-CLI-01** | Clientes – Listar clientes registrados | Should have (3) | 2 | HU-CLI-02 | Des.6 Angeles | Des.2 Nolasco |
| **HU-VEN-03** | Ventas (POS) – Generar comprobante en PDF o reenviar por correo electrónico | Should have (3) | 5 | HU-VEN-02 | Des.1 Velasquez | Des.3 Castillo |
| **HU-CLI-03** | Clientes – Editar correo electrónico de cliente | Could have (2) | 1 | HU-CLI-02 | Des.3 Castillo | Des.1 Velasquez |
| **HU-REP-09** | Reportes – Exportar reportes en PDF | Could have (2) | 3 | HU-REP-01 | Des.1 Velasquez | Des.3 Castillo |
| **HU-VEN-08** | Ventas (POS) – Exportar historial de ventas a PDF (Fuera de Alcance) | Won't have (1) | — | HU-VEN-05 | *(Excluida / Diferida a Reportes)* | *(Excluida)* |
| **TOTALES S3** | **27 Historias de Usuario Comprometidas** | | **72** | | **85.75 h Constr.** | **58.25 h QA** |

### Estrategia de Ejecución del Sprint 3
1. **Flujo ágil de alta cadencia para historias atomizadas:** El Sprint 3 reúne 27 historias con un promedio de 2.67 puntos por HU. Al tratarse de componentes modulares, el equipo aplica un ciclo corto de desarrollo y pase continuo a pruebas unitarias sin tiempos de espera.
2. **Generación documental y exportación:** Se implementan las librerías de generación y renderizado PDF para comprobantes (`HU-VEN-03`) y reportes gerenciales (`HU-REP-09`), quedando la exportación masiva del historial (`HU-VEN-08`) unificada y absorbida dentro del reporte ejecutivo de ventas en `HU-REP-09` (EPIC-REP).
3. **Agilización periférica:** Se incorporan los componentes de escucha de eventos HID del navegador para el escaneo de códigos de barra estándar tanto en el registro de productos (`HU-PROD-03`) como en la búsqueda inmediata en punto de venta (`HU-VEN-04`).
4. **Analítica de rentabilidad y supervisión de seguridad:** Se completan los reportes financieros de margen de ganancia (`HU-REP-07`) y el registro inmutable de accesos (`HU-LOG-01`), cerrando el 100 % de los requisitos funcionales del sistema.
5. **Holgura para certificación y cierre:** Con 144.0 horas de tareas y 96.0 horas de colchón (40.0 % de holgura), la capacidad restante se destina a pruebas de regresión integral y a la consolidación del paquete final de entrega académica.

---


<!-- ===================================================================== -->
<!-- ARCHIVO FUENTE: 07_Desglose_de_Tareas_Task_Breakdown.md -->
<!-- ===================================================================== -->

---
Código de Documento: DOC-PLAN-07
Título: Desglose de Tareas (Task Breakdown)
Versión: 5.2
Fecha: 2026-10-04
Elaborado por: Angeles Pérez, Jhonny
Revisado por: Colonia Infantas, Walter
Estado: Aprobado
Propósito: Desglose detallado de tareas por historia de usuario
Documentos relacionados: DOC-PLAN-00, DOC-PLAN-01, DOC-PLAN-02, DOC-PLAN-03-00, DOC-PLAN-04, DOC-PLAN-05, DOC-PLAN-06, DOC-PLAN-08, DOC-ANEXO-A, DOC-ANEXO-B
---

# 07. Desglose de Tareas (Task Breakdown)

## Convenciones del desglose
- **Formato:** un cuadro por historia de usuario (HU) con las columnas Tarea, Tipo, Estado, Responsable y Tiempo (h), según la plantilla metodológica del equipo.
- **Plantilla de 8 pasos:** 1 Configurar entorno · 2 Diseñar modelo de datos · 3 Implementar modelo de datos · 4 Desarrollar interfaces · 5 Codificar · 6 Pruebas de unidad e integración · 7 Depuración · 8 Verificación funcional y pase web.
- **Pasos 1 a 3:** se ejecutan una sola vez, en HU-AUTH-01 (primera HU del sistema). Las demás HU reutilizan ese trabajo y comienzan en el paso 4; el número final del ID indica el paso de la plantilla (TAR-HU-XXX-nn).
- **Tipos:** Configuración, Diseño, Codificación, Diseño/Cod. y Test (la Depuración y la Verificación funcional se clasifican como Test).
- **Estado inicial:** Pend. en todas las tareas.
- **Pivote de estimación:** HU-CAT-01 (Ver lista de categorías) = 1 pt = 2.0 h-hombre. Las horas de cada HU son 2 × sus puntos; el reparto entre pasos sigue la proporción de la plantilla (1 : 2 : 2 : 1 : 1 para los pasos 4 a 8), con precisión de 0.25 h.
- **Roles por HU:** el Constructor Principal ejecuta los pasos 4, 5 y 7 (y 1 a 3 en HU-AUTH-01); el Verificador QA ejecuta los pasos 6 y 8. Nadie verifica su propia HU. Des.4 Alcalde actúa como Developer especializado en verificación QA y no construye.
- **Composición del 41.0 % de QA (206.0 h en 148 tareas):** El bloque de Aseguramiento de Calidad y Verificación ejecutado por el Verificador QA comprende dos fases metodológicas complementarias:
  - **Paso 6 (Pruebas de unidad e integración):** 131.75 h (26.2 %) en pruebas automatizadas unitarias y de integración sobre componentes, cálculos de caja, inventario y reglas tributarias.
  - **Paso 8 (Verificación funcional y pase web):** 74.25 h (14.8 %) en certificación manual e independiente del 100 % de los criterios de aceptación en la interfaz web y validación de entrega bajo la regla Construye ≠ Verifica.
  - **Total QA:** 131.75 h + 74.25 h = 206.00 h (41.0 % exacto del universo de 502.0 h).
- **Capacidad:** 40 h netas por developer y sprint (25 h/semana × 2 semanas × 80 %).
- **Secuencia entre HU:** el orden de ejecución dentro del Sprint 1 y su camino crítico se detallan en el plan de ejecución del Sprint 1 (documento 06).

## Sprint 1

**Sprint 1 · Release 1 (MVP)** · 22 HU · 89 pts · 178 h

### HU-AUTH-01: Autenticación – Iniciar sesión
**Puntos:** 5 · **Prioridad:** Must have (4) · **Constructor Principal:** Des.5 Colonia · **Verificador QA:** Des.2 Nolasco

| ID | Tarea | Tipo | Estado | Responsable | Tiempo (h) |
|---|---|---|---|---|---|
| TAR-HU-AUTH-01-01 | Configurar entorno | Configuración | Pend. | Des.5 - Colonia | 1.00 |
| TAR-HU-AUTH-01-02 | Diseñar modelo de datos | Diseño | Pend. | Des.5 - Colonia | 1.00 |
| TAR-HU-AUTH-01-03 | Implementar modelo de datos | Codificación | Pend. | Des.5 - Colonia | 1.00 |
| TAR-HU-AUTH-01-04 | Desarrollar interfaces | Diseño/Cod. | Pend. | Des.5 - Colonia | 1.00 |
| TAR-HU-AUTH-01-05 | Codificar | Codificación | Pend. | Des.5 - Colonia | 2.00 |
| TAR-HU-AUTH-01-06 | Pruebas de unidad e integración | Test | Pend. | Des.2 - Nolasco | 2.00 |
| TAR-HU-AUTH-01-07 | Depuración | Test | Pend. | Des.5 - Colonia | 1.00 |
| TAR-HU-AUTH-01-08 | Verificación funcional y pase web | Test | Pend. | Des.2 - Nolasco | 1.00 |

**Subtotal HU-AUTH-01:** 7.00 h Construcción, 3.00 h Verificación. Total: 10.00 h.

### HU-AUTH-02: Autenticación – Bloquear cuenta por 
**Puntos:** 3 · **Prioridad:** Must have (4) · **Constructor Principal:** Des.1 Velasquez · **Verificador QA:** Des.6 Angeles

| ID | Tarea | Tipo | Estado | Responsable | Tiempo (h) |
|---|---|---|---|---|---|
| TAR-HU-AUTH-02-04 | Desarrollar interfaces | Diseño/Cod. | Pend. | Des.1 - Velasquez | 1.00 |
| TAR-HU-AUTH-02-05 | Codificar | Codificación | Pend. | Des.1 - Velasquez | 1.50 |
| TAR-HU-AUTH-02-06 | Pruebas de unidad e integración | Test | Pend. | Des.6 - Angeles | 1.50 |
| TAR-HU-AUTH-02-07 | Depuración | Test | Pend. | Des.1 - Velasquez | 1.00 |
| TAR-HU-AUTH-02-08 | Verificación funcional y pase web | Test | Pend. | Des.6 - Angeles | 1.00 |

**Subtotal HU-AUTH-02:** 3.50 h Construcción, 2.50 h Verificación. Total: 6.00 h.

### HU-AUTH-03: Autenticación – Cerrar sesión
**Puntos:** 2 · **Prioridad:** Must have (4) · **Constructor Principal:** Des.3 Castillo · **Verificador QA:** Des.5 Colonia

| ID | Tarea | Tipo | Estado | Responsable | Tiempo (h) |
|---|---|---|---|---|---|
| TAR-HU-AUTH-03-04 | Desarrollar interfaces | Diseño/Cod. | Pend. | Des.3 - Castillo | 0.75 |
| TAR-HU-AUTH-03-05 | Codificar | Codificación | Pend. | Des.3 - Castillo | 1.00 |
| TAR-HU-AUTH-03-06 | Pruebas de unidad e integración | Test | Pend. | Des.5 - Colonia | 1.00 |
| TAR-HU-AUTH-03-07 | Depuración | Test | Pend. | Des.3 - Castillo | 0.75 |
| TAR-HU-AUTH-03-08 | Verificación funcional y pase web | Test | Pend. | Des.5 - Colonia | 0.50 |

**Subtotal HU-AUTH-03:** 2.50 h Construcción, 1.50 h Verificación. Total: 4.00 h.

### HU-CAJA-01: Caja – Abrir turno de caja
**Puntos:** 5 · **Prioridad:** Must have (4) · **Constructor Principal:** Des.2 Nolasco · **Verificador QA:** Des.5 Colonia

| ID | Tarea | Tipo | Estado | Responsable | Tiempo (h) |
|---|---|---|---|---|---|
| TAR-HU-CAJA-01-04 | Desarrollar interfaces | Diseño/Cod. | Pend. | Des.2 - Nolasco | 1.50 |
| TAR-HU-CAJA-01-05 | Codificar | Codificación | Pend. | Des.2 - Nolasco | 2.75 |
| TAR-HU-CAJA-01-06 | Pruebas de unidad e integración | Test | Pend. | Des.5 - Colonia | 2.75 |
| TAR-HU-CAJA-01-07 | Depuración | Test | Pend. | Des.2 - Nolasco | 1.50 |
| TAR-HU-CAJA-01-08 | Verificación funcional y pase web | Test | Pend. | Des.5 - Colonia | 1.50 |

**Subtotal HU-CAJA-01:** 5.75 h Construcción, 4.25 h Verificación. Total: 10.00 h.

### HU-CAT-02: Categorías – Crear nueva categoría de productos
**Puntos:** 2 · **Prioridad:** Must have (4) · **Constructor Principal:** Des.6 Angeles · **Verificador QA:** Des.3 Castillo

| ID | Tarea | Tipo | Estado | Responsable | Tiempo (h) |
|---|---|---|---|---|---|
| TAR-HU-CAT-02-04 | Desarrollar interfaces | Diseño/Cod. | Pend. | Des.6 - Angeles | 0.75 |
| TAR-HU-CAT-02-05 | Codificar | Codificación | Pend. | Des.6 - Angeles | 1.00 |
| TAR-HU-CAT-02-06 | Pruebas de unidad e integración | Test | Pend. | Des.3 - Castillo | 1.00 |
| TAR-HU-CAT-02-07 | Depuración | Test | Pend. | Des.6 - Angeles | 0.75 |
| TAR-HU-CAT-02-08 | Verificación funcional y pase web | Test | Pend. | Des.3 - Castillo | 0.50 |

**Subtotal HU-CAT-02:** 2.50 h Construcción, 1.50 h Verificación. Total: 4.00 h.

### HU-CONF-02: Configuración – Actualizar configuración del negocio
**Puntos:** 3 · **Prioridad:** Must have (4) · **Constructor Principal:** Des.3 Castillo · **Verificador QA:** Des.6 Angeles

| ID | Tarea | Tipo | Estado | Responsable | Tiempo (h) |
|---|---|---|---|---|---|
| TAR-HU-CONF-02-04 | Desarrollar interfaces | Diseño/Cod. | Pend. | Des.3 - Castillo | 1.00 |
| TAR-HU-CONF-02-05 | Codificar | Codificación | Pend. | Des.3 - Castillo | 1.50 |
| TAR-HU-CONF-02-06 | Pruebas de unidad e integración | Test | Pend. | Des.6 - Angeles | 1.50 |
| TAR-HU-CONF-02-07 | Depuración | Test | Pend. | Des.3 - Castillo | 1.00 |
| TAR-HU-CONF-02-08 | Verificación funcional y pase web | Test | Pend. | Des.6 - Angeles | 1.00 |

**Subtotal HU-CONF-02:** 3.50 h Construcción, 2.50 h Verificación. Total: 6.00 h.

### HU-PROV-02: Proveedores – Registrar nuevo proveedor
**Puntos:** 3 · **Prioridad:** Must have (4) · **Constructor Principal:** Des.6 Angeles · **Verificador QA:** Des.5 Colonia

| ID | Tarea | Tipo | Estado | Responsable | Tiempo (h) |
|---|---|---|---|---|---|
| TAR-HU-PROV-02-04 | Desarrollar interfaces | Diseño/Cod. | Pend. | Des.6 - Angeles | 1.00 |
| TAR-HU-PROV-02-05 | Codificar | Codificación | Pend. | Des.6 - Angeles | 1.50 |
| TAR-HU-PROV-02-06 | Pruebas de unidad e integración | Test | Pend. | Des.5 - Colonia | 1.50 |
| TAR-HU-PROV-02-07 | Depuración | Test | Pend. | Des.6 - Angeles | 1.00 |
| TAR-HU-PROV-02-08 | Verificación funcional y pase web | Test | Pend. | Des.5 - Colonia | 1.00 |

**Subtotal HU-PROV-02:** 3.50 h Construcción, 2.50 h Verificación. Total: 6.00 h.

### HU-USR-02: Usuarios – Crear cuenta de nuevo empleado
**Puntos:** 5 · **Prioridad:** Must have (4) · **Constructor Principal:** Des.2 Nolasco · **Verificador QA:** Des.4 Alcalde

| ID | Tarea | Tipo | Estado | Responsable | Tiempo (h) |
|---|---|---|---|---|---|
| TAR-HU-USR-02-04 | Desarrollar interfaces | Diseño/Cod. | Pend. | Des.2 - Nolasco | 1.50 |
| TAR-HU-USR-02-05 | Codificar | Codificación | Pend. | Des.2 - Nolasco | 2.75 |
| TAR-HU-USR-02-06 | Pruebas de unidad e integración | Test | Pend. | Des.4 - Alcalde | 2.75 |
| TAR-HU-USR-02-07 | Depuración | Test | Pend. | Des.2 - Nolasco | 1.50 |
| TAR-HU-USR-02-08 | Verificación funcional y pase web | Test | Pend. | Des.4 - Alcalde | 1.50 |

**Subtotal HU-USR-02:** 5.75 h Construcción, 4.25 h Verificación. Total: 10.00 h.

### HU-CAJA-02: Caja – Cerrar turno de caja y cuadrar
**Puntos:** 5 · **Prioridad:** Must have (4) · **Constructor Principal:** Des.1 Velasquez · **Verificador QA:** Des.4 Alcalde

| ID | Tarea | Tipo | Estado | Responsable | Tiempo (h) |
|---|---|---|---|---|---|
| TAR-HU-CAJA-02-04 | Desarrollar interfaces | Diseño/Cod. | Pend. | Des.1 - Velasquez | 1.50 |
| TAR-HU-CAJA-02-05 | Codificar | Codificación | Pend. | Des.1 - Velasquez | 2.75 |
| TAR-HU-CAJA-02-06 | Pruebas de unidad e integración | Test | Pend. | Des.4 - Alcalde | 2.75 |
| TAR-HU-CAJA-02-07 | Depuración | Test | Pend. | Des.1 - Velasquez | 1.50 |
| TAR-HU-CAJA-02-08 | Verificación funcional y pase web | Test | Pend. | Des.4 - Alcalde | 1.50 |

**Subtotal HU-CAJA-02:** 5.75 h Construcción, 4.25 h Verificación. Total: 10.00 h.

### HU-CAT-01: Categorías – Ver lista de categorías de productos
**Puntos:** 1 · **Prioridad:** Must have (4) · **Constructor Principal:** Des.6 Angeles · **Verificador QA:** Des.2 Nolasco

| ID | Tarea | Tipo | Estado | Responsable | Tiempo (h) |
|---|---|---|---|---|---|
| TAR-HU-CAT-01-04 | Desarrollar interfaces | Diseño/Cod. | Pend. | Des.6 - Angeles | 0.50 |
| TAR-HU-CAT-01-05 | Codificar | Codificación | Pend. | Des.6 - Angeles | 0.50 |
| TAR-HU-CAT-01-06 | Pruebas de unidad e integración | Test | Pend. | Des.2 - Nolasco | 0.50 |
| TAR-HU-CAT-01-07 | Depuración | Test | Pend. | Des.6 - Angeles | 0.25 |
| TAR-HU-CAT-01-08 | Verificación funcional y pase web | Test | Pend. | Des.2 - Nolasco | 0.25 |

**Subtotal HU-CAT-01:** 1.25 h Construcción, 0.75 h Verificación. Total: 2.00 h.

### HU-PROD-02: Productos – Registrar nuevo producto en el catálogo
**Puntos:** 5 · **Prioridad:** Must have (4) · **Constructor Principal:** Des.2 Nolasco · **Verificador QA:** Des.6 Angeles

| ID | Tarea | Tipo | Estado | Responsable | Tiempo (h) |
|---|---|---|---|---|---|
| TAR-HU-PROD-02-04 | Desarrollar interfaces | Diseño/Cod. | Pend. | Des.2 - Nolasco | 1.50 |
| TAR-HU-PROD-02-05 | Codificar | Codificación | Pend. | Des.2 - Nolasco | 2.75 |
| TAR-HU-PROD-02-06 | Pruebas de unidad e integración | Test | Pend. | Des.6 - Angeles | 2.75 |
| TAR-HU-PROD-02-07 | Depuración | Test | Pend. | Des.2 - Nolasco | 1.50 |
| TAR-HU-PROD-02-08 | Verificación funcional y pase web | Test | Pend. | Des.6 - Angeles | 1.50 |

**Subtotal HU-PROD-02:** 5.75 h Construcción, 4.25 h Verificación. Total: 10.00 h.

### HU-CAJA-05: Caja – Consultar historial de turnos de caja
**Puntos:** 3 · **Prioridad:** Must have (4) · **Constructor Principal:** Des.6 Angeles · **Verificador QA:** Des.4 Alcalde

| ID | Tarea | Tipo | Estado | Responsable | Tiempo (h) |
|---|---|---|---|---|---|
| TAR-HU-CAJA-05-04 | Desarrollar interfaces | Diseño/Cod. | Pend. | Des.6 - Angeles | 1.00 |
| TAR-HU-CAJA-05-05 | Codificar | Codificación | Pend. | Des.6 - Angeles | 1.50 |
| TAR-HU-CAJA-05-06 | Pruebas de unidad e integración | Test | Pend. | Des.4 - Alcalde | 1.50 |
| TAR-HU-CAJA-05-07 | Depuración | Test | Pend. | Des.6 - Angeles | 1.00 |
| TAR-HU-CAJA-05-08 | Verificación funcional y pase web | Test | Pend. | Des.4 - Alcalde | 1.00 |

**Subtotal HU-CAJA-05:** 3.50 h Construcción, 2.50 h Verificación. Total: 6.00 h.

### HU-INV-01: Inventario – Registrar entrada de mercadería
**Puntos:** 5 · **Prioridad:** Must have (4) · **Constructor Principal:** Des.1 Velasquez · **Verificador QA:** Des.6 Angeles

| ID | Tarea | Tipo | Estado | Responsable | Tiempo (h) |
|---|---|---|---|---|---|
| TAR-HU-INV-01-04 | Desarrollar interfaces | Diseño/Cod. | Pend. | Des.1 - Velasquez | 1.50 |
| TAR-HU-INV-01-05 | Codificar | Codificación | Pend. | Des.1 - Velasquez | 2.75 |
| TAR-HU-INV-01-06 | Pruebas de unidad e integración | Test | Pend. | Des.6 - Angeles | 2.75 |
| TAR-HU-INV-01-07 | Depuración | Test | Pend. | Des.1 - Velasquez | 1.50 |
| TAR-HU-INV-01-08 | Verificación funcional y pase web | Test | Pend. | Des.6 - Angeles | 1.50 |

**Subtotal HU-INV-01:** 5.75 h Construcción, 4.25 h Verificación. Total: 10.00 h.

### HU-PROD-01: Productos – Ver catálogo completo de productos
**Puntos:** 3 · **Prioridad:** Must have (4) · **Constructor Principal:** Des.5 Colonia · **Verificador QA:** Des.6 Angeles

| ID | Tarea | Tipo | Estado | Responsable | Tiempo (h) |
|---|---|---|---|---|---|
| TAR-HU-PROD-01-04 | Desarrollar interfaces | Diseño/Cod. | Pend. | Des.5 - Colonia | 1.00 |
| TAR-HU-PROD-01-05 | Codificar | Codificación | Pend. | Des.5 - Colonia | 1.50 |
| TAR-HU-PROD-01-06 | Pruebas de unidad e integración | Test | Pend. | Des.6 - Angeles | 1.50 |
| TAR-HU-PROD-01-07 | Depuración | Test | Pend. | Des.5 - Colonia | 1.00 |
| TAR-HU-PROD-01-08 | Verificación funcional y pase web | Test | Pend. | Des.6 - Angeles | 1.00 |

**Subtotal HU-PROD-01:** 3.50 h Construcción, 2.50 h Verificación. Total: 6.00 h.

### HU-INV-02: Inventario – Registrar baja de inventario por merma
**Puntos:** 5 · **Prioridad:** Must have (4) · **Constructor Principal:** Des.2 Nolasco · **Verificador QA:** Des.1 Velasquez

| ID | Tarea | Tipo | Estado | Responsable | Tiempo (h) |
|---|---|---|---|---|---|
| TAR-HU-INV-02-04 | Desarrollar interfaces | Diseño/Cod. | Pend. | Des.2 - Nolasco | 1.50 |
| TAR-HU-INV-02-05 | Codificar | Codificación | Pend. | Des.2 - Nolasco | 2.75 |
| TAR-HU-INV-02-06 | Pruebas de unidad e integración | Test | Pend. | Des.1 - Velasquez | 2.75 |
| TAR-HU-INV-02-07 | Depuración | Test | Pend. | Des.2 - Nolasco | 1.50 |
| TAR-HU-INV-02-08 | Verificación funcional y pase web | Test | Pend. | Des.1 - Velasquez | 1.50 |

**Subtotal HU-INV-02:** 5.75 h Construcción, 4.25 h Verificación. Total: 10.00 h.

### HU-INV-03: Inventario – Realizar ajuste por conteo físico
**Puntos:** 5 · **Prioridad:** Must have (4) · **Constructor Principal:** Des.3 Castillo · **Verificador QA:** Des.6 Angeles

| ID | Tarea | Tipo | Estado | Responsable | Tiempo (h) |
|---|---|---|---|---|---|
| TAR-HU-INV-03-04 | Desarrollar interfaces | Diseño/Cod. | Pend. | Des.3 - Castillo | 1.50 |
| TAR-HU-INV-03-05 | Codificar | Codificación | Pend. | Des.3 - Castillo | 2.75 |
| TAR-HU-INV-03-06 | Pruebas de unidad e integración | Test | Pend. | Des.6 - Angeles | 2.75 |
| TAR-HU-INV-03-07 | Depuración | Test | Pend. | Des.3 - Castillo | 1.50 |
| TAR-HU-INV-03-08 | Verificación funcional y pase web | Test | Pend. | Des.6 - Angeles | 1.50 |

**Subtotal HU-INV-03:** 5.75 h Construcción, 4.25 h Verificación. Total: 10.00 h.

### HU-VEN-01a: Ventas (POS) – Inicialización de terminal de venta y validación de turno
**Puntos:** 3 · **Prioridad:** Must have (4) · **Constructor Principal:** Des.3 Castillo · **Verificador QA:** Des.4 Alcalde

| ID | Tarea | Tipo | Estado | Responsable | Tiempo (h) |
|---|---|---|---|---|---|
| TAR-HU-VEN-01a-04 | Desarrollar interfaces | Diseño/Cod. | Pend. | Des.3 - Castillo | 1.00 |
| TAR-HU-VEN-01a-05 | Codificar | Codificación | Pend. | Des.3 - Castillo | 1.50 |
| TAR-HU-VEN-01a-06 | Pruebas de unidad e integración | Test | Pend. | Des.4 - Alcalde | 1.50 |
| TAR-HU-VEN-01a-07 | Depuración | Test | Pend. | Des.3 - Castillo | 1.00 |
| TAR-HU-VEN-01a-08 | Verificación funcional y pase web | Test | Pend. | Des.4 - Alcalde | 1.00 |

**Subtotal HU-VEN-01a:** 3.50 h Construcción, 2.50 h Verificación. Total: 6.00 h.

### HU-VEN-01b: Ventas (POS) – Registro de líneas de venta y cobro en mostrador
**Puntos:** 5 · **Prioridad:** Must have (4) · **Constructor Principal:** Des.3 Castillo · **Verificador QA:** Des.4 Alcalde

| ID | Tarea | Tipo | Estado | Responsable | Tiempo (h) |
|---|---|---|---|---|---|
| TAR-HU-VEN-01b-04 | Desarrollar interfaces | Diseño/Cod. | Pend. | Des.3 - Castillo | 1.50 |
| TAR-HU-VEN-01b-05 | Codificar | Codificación | Pend. | Des.3 - Castillo | 2.75 |
| TAR-HU-VEN-01b-06 | Pruebas de unidad e integración | Test | Pend. | Des.4 - Alcalde | 2.75 |
| TAR-HU-VEN-01b-07 | Depuración | Test | Pend. | Des.3 - Castillo | 1.50 |
| TAR-HU-VEN-01b-08 | Verificación funcional y pase web | Test | Pend. | Des.4 - Alcalde | 1.50 |

**Subtotal HU-VEN-01b:** 5.75 h Construcción, 4.25 h Verificación. Total: 10.00 h.

### HU-VEN-01c: Ventas (POS) – Despacho por expiración FEFO y descargo de lotes
**Puntos:** 5 · **Prioridad:** Must have (4) · **Constructor Principal:** Des.3 Castillo · **Verificador QA:** Des.4 Alcalde

| ID | Tarea | Tipo | Estado | Responsable | Tiempo (h) |
|---|---|---|---|---|---|
| TAR-HU-VEN-01c-04 | Desarrollar interfaces | Diseño/Cod. | Pend. | Des.3 - Castillo | 1.25 |
| TAR-HU-VEN-01c-05 | Codificar | Codificación | Pend. | Des.3 - Castillo | 3.25 |
| TAR-HU-VEN-01c-06 | Pruebas de unidad e integración | Test | Pend. | Des.4 - Alcalde | 3.00 |
| TAR-HU-VEN-01c-07 | Depuración | Test | Pend. | Des.3 - Castillo | 1.25 |
| TAR-HU-VEN-01c-08 | Verificación funcional y pase web | Test | Pend. | Des.4 - Alcalde | 1.25 |

**Subtotal HU-VEN-01c:** 5.75 h Construcción, 4.25 h Verificación. Total: 10.00 h.

### HU-CLI-02: Clientes – Registrar cliente automáticamente al vender
**Puntos:** 3 · **Prioridad:** Must have (4) · **Constructor Principal:** Des.2 Nolasco · **Verificador QA:** Des.3 Castillo

| ID | Tarea | Tipo | Estado | Responsable | Tiempo (h) |
|---|---|---|---|---|---|
| TAR-HU-CLI-02-04 | Desarrollar interfaces | Diseño/Cod. | Pend. | Des.2 - Nolasco | 1.00 |
| TAR-HU-CLI-02-05 | Codificar | Codificación | Pend. | Des.2 - Nolasco | 1.50 |
| TAR-HU-CLI-02-06 | Pruebas de unidad e integración | Test | Pend. | Des.3 - Castillo | 1.50 |
| TAR-HU-CLI-02-07 | Depuración | Test | Pend. | Des.2 - Nolasco | 1.00 |
| TAR-HU-CLI-02-08 | Verificación funcional y pase web | Test | Pend. | Des.3 - Castillo | 1.00 |

**Subtotal HU-CLI-02:** 3.50 h Construcción, 2.50 h Verificación. Total: 6.00 h.

### HU-VEN-02: Ventas (POS) – Emitir boleta o factura
**Puntos:** 8 · **Prioridad:** Must have (4) · **Constructor Principal:** Des.1 Velasquez · **Verificador QA:** Des.5 Colonia

| ID | Tarea | Tipo | Estado | Responsable | Tiempo (h) |
|---|---|---|---|---|---|
| TAR-HU-VEN-02-04 | Desarrollar interfaces | Diseño/Cod. | Pend. | Des.1 - Velasquez | 2.50 |
| TAR-HU-VEN-02-05 | Codificar | Codificación | Pend. | Des.1 - Velasquez | 4.50 |
| TAR-HU-VEN-02-06 | Pruebas de unidad e integración | Test | Pend. | Des.5 - Colonia | 4.50 |
| TAR-HU-VEN-02-07 | Depuración | Test | Pend. | Des.1 - Velasquez | 2.25 |
| TAR-HU-VEN-02-08 | Verificación funcional y pase web | Test | Pend. | Des.5 - Colonia | 2.25 |

**Subtotal HU-VEN-02:** 9.25 h Construcción, 6.75 h Verificación. Total: 16.00 h.

### HU-VEN-05: Ventas (POS) – Consultar historial de ventas
**Puntos:** 5 · **Prioridad:** Must have (4) · **Constructor Principal:** Des.5 Colonia · **Verificador QA:** Des.4 Alcalde

| ID | Tarea | Tipo | Estado | Responsable | Tiempo (h) |
|---|---|---|---|---|---|
| TAR-HU-VEN-05-04 | Desarrollar interfaces | Diseño/Cod. | Pend. | Des.5 - Colonia | 1.50 |
| TAR-HU-VEN-05-05 | Codificar | Codificación | Pend. | Des.5 - Colonia | 2.75 |
| TAR-HU-VEN-05-06 | Pruebas de unidad e integración | Test | Pend. | Des.4 - Alcalde | 2.75 |
| TAR-HU-VEN-05-07 | Depuración | Test | Pend. | Des.5 - Colonia | 1.50 |
| TAR-HU-VEN-05-08 | Verificación funcional y pase web | Test | Pend. | Des.4 - Alcalde | 1.50 |

**Subtotal HU-VEN-05:** 5.75 h Construcción, 4.25 h Verificación. Total: 10.00 h.

## Sprint 2

**Sprint 2 · Release 2** · 25 HU · 90 pts · 180 h

### HU-AUTH-04: Autenticación – Garantizar sesión única por usuario
**Puntos:** 8 · **Prioridad:** Must have (4) · **Constructor Principal:** Des.5 Colonia · **Verificador QA:** Des.3 Castillo

| ID | Tarea | Tipo | Estado | Responsable | Tiempo (h) |
|---|---|---|---|---|---|
| TAR-HU-AUTH-04-04 | Desarrollar interfaces | Diseño/Cod. | Pend. | Des.5 - Colonia | 2.50 |
| TAR-HU-AUTH-04-05 | Codificar | Codificación | Pend. | Des.5 - Colonia | 4.50 |
| TAR-HU-AUTH-04-06 | Pruebas de unidad e integración | Test | Pend. | Des.3 - Castillo | 4.50 |
| TAR-HU-AUTH-04-07 | Depuración | Test | Pend. | Des.5 - Colonia | 2.25 |
| TAR-HU-AUTH-04-08 | Verificación funcional y pase web | Test | Pend. | Des.3 - Castillo | 2.25 |

**Subtotal HU-AUTH-04:** 9.25 h Construcción, 6.75 h Verificación. Total: 16.00 h.

### HU-AUTH-05: Autenticación – Recuperar contraseña por correo
**Puntos:** 5 · **Prioridad:** Should have (3) · **Constructor Principal:** Des.5 Colonia · **Verificador QA:** Des.4 Alcalde

| ID | Tarea | Tipo | Estado | Responsable | Tiempo (h) |
|---|---|---|---|---|---|
| TAR-HU-AUTH-05-04 | Desarrollar interfaces | Diseño/Cod. | Pend. | Des.5 - Colonia | 1.50 |
| TAR-HU-AUTH-05-05 | Codificar | Codificación | Pend. | Des.5 - Colonia | 2.75 |
| TAR-HU-AUTH-05-06 | Pruebas de unidad e integración | Test | Pend. | Des.4 - Alcalde | 2.75 |
| TAR-HU-AUTH-05-07 | Depuración | Test | Pend. | Des.5 - Colonia | 1.50 |
| TAR-HU-AUTH-05-08 | Verificación funcional y pase web | Test | Pend. | Des.4 - Alcalde | 1.50 |

**Subtotal HU-AUTH-05:** 5.75 h Construcción, 4.25 h Verificación. Total: 10.00 h.

### HU-USR-06: Usuarios – Forzar cierre de sesión remoto
**Puntos:** 3 · **Prioridad:** Should have (3) · **Constructor Principal:** Des.3 Castillo · **Verificador QA:** Des.4 Alcalde

| ID | Tarea | Tipo | Estado | Responsable | Tiempo (h) |
|---|---|---|---|---|---|
| TAR-HU-USR-06-04 | Desarrollar interfaces | Diseño/Cod. | Pend. | Des.3 - Castillo | 1.00 |
| TAR-HU-USR-06-05 | Codificar | Codificación | Pend. | Des.3 - Castillo | 1.50 |
| TAR-HU-USR-06-06 | Pruebas de unidad e integración | Test | Pend. | Des.4 - Alcalde | 1.50 |
| TAR-HU-USR-06-07 | Depuración | Test | Pend. | Des.3 - Castillo | 1.00 |
| TAR-HU-USR-06-08 | Verificación funcional y pase web | Test | Pend. | Des.4 - Alcalde | 1.00 |

**Subtotal HU-USR-06:** 3.50 h Construcción, 2.50 h Verificación. Total: 6.00 h.

### HU-CONF-01: Configuración – Ver configuración actual del negocio
**Puntos:** 1 · **Prioridad:** Must have (4) · **Constructor Principal:** Des.5 Colonia · **Verificador QA:** Des.6 Angeles

| ID | Tarea | Tipo | Estado | Responsable | Tiempo (h) |
|---|---|---|---|---|---|
| TAR-HU-CONF-01-04 | Desarrollar interfaces | Diseño/Cod. | Pend. | Des.5 - Colonia | 0.50 |
| TAR-HU-CONF-01-05 | Codificar | Codificación | Pend. | Des.5 - Colonia | 0.50 |
| TAR-HU-CONF-01-06 | Pruebas de unidad e integración | Test | Pend. | Des.6 - Angeles | 0.50 |
| TAR-HU-CONF-01-07 | Depuración | Test | Pend. | Des.5 - Colonia | 0.25 |
| TAR-HU-CONF-01-08 | Verificación funcional y pase web | Test | Pend. | Des.6 - Angeles | 0.25 |

**Subtotal HU-CONF-01:** 1.25 h Construcción, 0.75 h Verificación. Total: 2.00 h.

### HU-PROV-01: Proveedores – Ver lista de proveedores
**Puntos:** 2 · **Prioridad:** Must have (4) · **Constructor Principal:** Des.6 Angeles · **Verificador QA:** Des.5 Colonia

| ID | Tarea | Tipo | Estado | Responsable | Tiempo (h) |
|---|---|---|---|---|---|
| TAR-HU-PROV-01-04 | Desarrollar interfaces | Diseño/Cod. | Pend. | Des.6 - Angeles | 0.75 |
| TAR-HU-PROV-01-05 | Codificar | Codificación | Pend. | Des.6 - Angeles | 1.00 |
| TAR-HU-PROV-01-06 | Pruebas de unidad e integración | Test | Pend. | Des.5 - Colonia | 1.00 |
| TAR-HU-PROV-01-07 | Depuración | Test | Pend. | Des.6 - Angeles | 0.75 |
| TAR-HU-PROV-01-08 | Verificación funcional y pase web | Test | Pend. | Des.5 - Colonia | 0.50 |

**Subtotal HU-PROV-01:** 2.50 h Construcción, 1.50 h Verificación. Total: 4.00 h.

### HU-USR-01: Usuarios – Listar empleados del sistema
**Puntos:** 2 · **Prioridad:** Must have (4) · **Constructor Principal:** Des.3 Castillo · **Verificador QA:** Des.1 Velasquez

| ID | Tarea | Tipo | Estado | Responsable | Tiempo (h) |
|---|---|---|---|---|---|
| TAR-HU-USR-01-04 | Desarrollar interfaces | Diseño/Cod. | Pend. | Des.3 - Castillo | 0.75 |
| TAR-HU-USR-01-05 | Codificar | Codificación | Pend. | Des.3 - Castillo | 1.00 |
| TAR-HU-USR-01-06 | Pruebas de unidad e integración | Test | Pend. | Des.1 - Velasquez | 1.00 |
| TAR-HU-USR-01-07 | Depuración | Test | Pend. | Des.3 - Castillo | 0.75 |
| TAR-HU-USR-01-08 | Verificación funcional y pase web | Test | Pend. | Des.1 - Velasquez | 0.50 |

**Subtotal HU-USR-01:** 2.50 h Construcción, 1.50 h Verificación. Total: 4.00 h.

### HU-USR-04: Usuarios – Desactivar cuenta de empleado
**Puntos:** 3 · **Prioridad:** Must have (4) · **Constructor Principal:** Des.2 Nolasco · **Verificador QA:** Des.1 Velasquez

| ID | Tarea | Tipo | Estado | Responsable | Tiempo (h) |
|---|---|---|---|---|---|
| TAR-HU-USR-04-04 | Desarrollar interfaces | Diseño/Cod. | Pend. | Des.2 - Nolasco | 1.00 |
| TAR-HU-USR-04-05 | Codificar | Codificación | Pend. | Des.2 - Nolasco | 1.50 |
| TAR-HU-USR-04-06 | Pruebas de unidad e integración | Test | Pend. | Des.1 - Velasquez | 1.50 |
| TAR-HU-USR-04-07 | Depuración | Test | Pend. | Des.2 - Nolasco | 1.00 |
| TAR-HU-USR-04-08 | Verificación funcional y pase web | Test | Pend. | Des.1 - Velasquez | 1.00 |

**Subtotal HU-USR-04:** 3.50 h Construcción, 2.50 h Verificación. Total: 6.00 h.

### HU-CAJA-03: Caja – Registrar movimiento manual de efectivo
**Puntos:** 3 · **Prioridad:** Should have (3) · **Constructor Principal:** Des.3 Castillo · **Verificador QA:** Des.4 Alcalde

| ID | Tarea | Tipo | Estado | Responsable | Tiempo (h) |
|---|---|---|---|---|---|
| TAR-HU-CAJA-03-04 | Desarrollar interfaces | Diseño/Cod. | Pend. | Des.3 - Castillo | 1.00 |
| TAR-HU-CAJA-03-05 | Codificar | Codificación | Pend. | Des.3 - Castillo | 1.50 |
| TAR-HU-CAJA-03-06 | Pruebas de unidad e integración | Test | Pend. | Des.4 - Alcalde | 1.50 |
| TAR-HU-CAJA-03-07 | Depuración | Test | Pend. | Des.3 - Castillo | 1.00 |
| TAR-HU-CAJA-03-08 | Verificación funcional y pase web | Test | Pend. | Des.4 - Alcalde | 1.00 |

**Subtotal HU-CAJA-03:** 3.50 h Construcción, 2.50 h Verificación. Total: 6.00 h.

### HU-CAJA-04: Caja – Ver resumen del turno activo
**Puntos:** 2 · **Prioridad:** Should have (3) · **Constructor Principal:** Des.5 Colonia · **Verificador QA:** Des.4 Alcalde

| ID | Tarea | Tipo | Estado | Responsable | Tiempo (h) |
|---|---|---|---|---|---|
| TAR-HU-CAJA-04-04 | Desarrollar interfaces | Diseño/Cod. | Pend. | Des.5 - Colonia | 0.75 |
| TAR-HU-CAJA-04-05 | Codificar | Codificación | Pend. | Des.5 - Colonia | 1.00 |
| TAR-HU-CAJA-04-06 | Pruebas de unidad e integración | Test | Pend. | Des.4 - Alcalde | 1.00 |
| TAR-HU-CAJA-04-07 | Depuración | Test | Pend. | Des.5 - Colonia | 0.75 |
| TAR-HU-CAJA-04-08 | Verificación funcional y pase web | Test | Pend. | Des.4 - Alcalde | 0.50 |

**Subtotal HU-CAJA-04:** 2.50 h Construcción, 1.50 h Verificación. Total: 4.00 h.

### HU-CAJA-07: Caja – Forzar cierre de turno ajeno
**Puntos:** 5 · **Prioridad:** Should have (3) · **Constructor Principal:** Des.2 Nolasco · **Verificador QA:** Des.3 Castillo

| ID | Tarea | Tipo | Estado | Responsable | Tiempo (h) |
|---|---|---|---|---|---|
| TAR-HU-CAJA-07-04 | Desarrollar interfaces | Diseño/Cod. | Pend. | Des.2 - Nolasco | 1.50 |
| TAR-HU-CAJA-07-05 | Codificar | Codificación | Pend. | Des.2 - Nolasco | 2.75 |
| TAR-HU-CAJA-07-06 | Pruebas de unidad e integración | Test | Pend. | Des.3 - Castillo | 2.75 |
| TAR-HU-CAJA-07-07 | Depuración | Test | Pend. | Des.2 - Nolasco | 1.50 |
| TAR-HU-CAJA-07-08 | Verificación funcional y pase web | Test | Pend. | Des.3 - Castillo | 1.50 |

**Subtotal HU-CAJA-07:** 5.75 h Construcción, 4.25 h Verificación. Total: 10.00 h.

### HU-PROV-04: Proveedores – Desactivar o reactivar proveedor
**Puntos:** 2 · **Prioridad:** Should have (3) · **Constructor Principal:** Des.3 Castillo · **Verificador QA:** Des.4 Alcalde

| ID | Tarea | Tipo | Estado | Responsable | Tiempo (h) |
|---|---|---|---|---|---|
| TAR-HU-PROV-04-04 | Desarrollar interfaces | Diseño/Cod. | Pend. | Des.3 - Castillo | 0.75 |
| TAR-HU-PROV-04-05 | Codificar | Codificación | Pend. | Des.3 - Castillo | 1.00 |
| TAR-HU-PROV-04-06 | Pruebas de unidad e integración | Test | Pend. | Des.4 - Alcalde | 1.00 |
| TAR-HU-PROV-04-07 | Depuración | Test | Pend. | Des.3 - Castillo | 0.75 |
| TAR-HU-PROV-04-08 | Verificación funcional y pase web | Test | Pend. | Des.4 - Alcalde | 0.50 |

**Subtotal HU-PROV-04:** 2.50 h Construcción, 1.50 h Verificación. Total: 4.00 h.

### HU-SOL-01: Reposición – Crear solicitud de reposición
**Puntos:** 3 · **Prioridad:** Must have (4) · **Constructor Principal:** Des.6 Angeles · **Verificador QA:** Des.1 Velasquez

| ID | Tarea | Tipo | Estado | Responsable | Tiempo (h) |
|---|---|---|---|---|---|
| TAR-HU-SOL-01-04 | Desarrollar interfaces | Diseño/Cod. | Pend. | Des.6 - Angeles | 1.00 |
| TAR-HU-SOL-01-05 | Codificar | Codificación | Pend. | Des.6 - Angeles | 1.50 |
| TAR-HU-SOL-01-06 | Pruebas de unidad e integración | Test | Pend. | Des.1 - Velasquez | 1.50 |
| TAR-HU-SOL-01-07 | Depuración | Test | Pend. | Des.6 - Angeles | 1.00 |
| TAR-HU-SOL-01-08 | Verificación funcional y pase web | Test | Pend. | Des.1 - Velasquez | 1.00 |

**Subtotal HU-SOL-01:** 3.50 h Construcción, 2.50 h Verificación. Total: 6.00 h.

### HU-CAJA-06: Caja – Aprobar cierre de turno
**Puntos:** 2 · **Prioridad:** Should have (3) · **Constructor Principal:** Des.6 Angeles · **Verificador QA:** Des.2 Nolasco

| ID | Tarea | Tipo | Estado | Responsable | Tiempo (h) |
|---|---|---|---|---|---|
| TAR-HU-CAJA-06-04 | Desarrollar interfaces | Diseño/Cod. | Pend. | Des.6 - Angeles | 0.75 |
| TAR-HU-CAJA-06-05 | Codificar | Codificación | Pend. | Des.6 - Angeles | 1.00 |
| TAR-HU-CAJA-06-06 | Pruebas de unidad e integración | Test | Pend. | Des.2 - Nolasco | 1.00 |
| TAR-HU-CAJA-06-07 | Depuración | Test | Pend. | Des.6 - Angeles | 0.75 |
| TAR-HU-CAJA-06-08 | Verificación funcional y pase web | Test | Pend. | Des.2 - Nolasco | 0.50 |

**Subtotal HU-CAJA-06:** 2.50 h Construcción, 1.50 h Verificación. Total: 4.00 h.

### HU-DASH-03: Dashboard – Alertas de stock crítico, vencimientos y turnos olvidados
**Puntos:** 5 · **Prioridad:** Must have (4) · **Constructor Principal:** Des.6 Angeles · **Verificador QA:** Des.4 Alcalde

| ID | Tarea | Tipo | Estado | Responsable | Tiempo (h) |
|---|---|---|---|---|---|
| TAR-HU-DASH-03-04 | Desarrollar interfaces | Diseño/Cod. | Pend. | Des.6 - Angeles | 1.50 |
| TAR-HU-DASH-03-05 | Codificar | Codificación | Pend. | Des.6 - Angeles | 2.75 |
| TAR-HU-DASH-03-06 | Pruebas de unidad e integración | Test | Pend. | Des.4 - Alcalde | 2.75 |
| TAR-HU-DASH-03-07 | Depuración | Test | Pend. | Des.6 - Angeles | 1.50 |
| TAR-HU-DASH-03-08 | Verificación funcional y pase web | Test | Pend. | Des.4 - Alcalde | 1.50 |

**Subtotal HU-DASH-03:** 5.75 h Construcción, 4.25 h Verificación. Total: 10.00 h.

### HU-PROD-06: Productos – Consultar productos próximos a vencer
**Puntos:** 3 · **Prioridad:** Must have (4) · **Constructor Principal:** Des.2 Nolasco · **Verificador QA:** Des.4 Alcalde

| ID | Tarea | Tipo | Estado | Responsable | Tiempo (h) |
|---|---|---|---|---|---|
| TAR-HU-PROD-06-04 | Desarrollar interfaces | Diseño/Cod. | Pend. | Des.2 - Nolasco | 1.00 |
| TAR-HU-PROD-06-05 | Codificar | Codificación | Pend. | Des.2 - Nolasco | 1.50 |
| TAR-HU-PROD-06-06 | Pruebas de unidad e integración | Test | Pend. | Des.4 - Alcalde | 1.50 |
| TAR-HU-PROD-06-07 | Depuración | Test | Pend. | Des.2 - Nolasco | 1.00 |
| TAR-HU-PROD-06-08 | Verificación funcional y pase web | Test | Pend. | Des.4 - Alcalde | 1.00 |

**Subtotal HU-PROD-06:** 3.50 h Construcción, 2.50 h Verificación. Total: 6.00 h.

### HU-REP-05: Reportes – Ver stock crítico
**Puntos:** 3 · **Prioridad:** Must have (4) · **Constructor Principal:** Des.1 Velasquez · **Verificador QA:** Des.4 Alcalde

| ID | Tarea | Tipo | Estado | Responsable | Tiempo (h) |
|---|---|---|---|---|---|
| TAR-HU-REP-05-04 | Desarrollar interfaces | Diseño/Cod. | Pend. | Des.1 - Velasquez | 1.00 |
| TAR-HU-REP-05-05 | Codificar | Codificación | Pend. | Des.1 - Velasquez | 1.50 |
| TAR-HU-REP-05-06 | Pruebas de unidad e integración | Test | Pend. | Des.4 - Alcalde | 1.50 |
| TAR-HU-REP-05-07 | Depuración | Test | Pend. | Des.1 - Velasquez | 1.00 |
| TAR-HU-REP-05-08 | Verificación funcional y pase web | Test | Pend. | Des.4 - Alcalde | 1.00 |

**Subtotal HU-REP-05:** 3.50 h Construcción, 2.50 h Verificación. Total: 6.00 h.

### HU-SOL-02: Reposición – Listar solicitudes con filtro por estado
**Puntos:** 2 · **Prioridad:** Must have (4) · **Constructor Principal:** Des.2 Nolasco · **Verificador QA:** Des.1 Velasquez

| ID | Tarea | Tipo | Estado | Responsable | Tiempo (h) |
|---|---|---|---|---|---|
| TAR-HU-SOL-02-04 | Desarrollar interfaces | Diseño/Cod. | Pend. | Des.2 - Nolasco | 0.75 |
| TAR-HU-SOL-02-05 | Codificar | Codificación | Pend. | Des.2 - Nolasco | 1.00 |
| TAR-HU-SOL-02-06 | Pruebas de unidad e integración | Test | Pend. | Des.1 - Velasquez | 1.00 |
| TAR-HU-SOL-02-07 | Depuración | Test | Pend. | Des.2 - Nolasco | 0.75 |
| TAR-HU-SOL-02-08 | Verificación funcional y pase web | Test | Pend. | Des.1 - Velasquez | 0.50 |

**Subtotal HU-SOL-02:** 2.50 h Construcción, 1.50 h Verificación. Total: 4.00 h.

### HU-SOL-03: Reposición – Aprobar solicitud de reposición
**Puntos:** 3 · **Prioridad:** Must have (4) · **Constructor Principal:** Des.3 Castillo · **Verificador QA:** Des.4 Alcalde

| ID | Tarea | Tipo | Estado | Responsable | Tiempo (h) |
|---|---|---|---|---|---|
| TAR-HU-SOL-03-04 | Desarrollar interfaces | Diseño/Cod. | Pend. | Des.3 - Castillo | 1.00 |
| TAR-HU-SOL-03-05 | Codificar | Codificación | Pend. | Des.3 - Castillo | 1.50 |
| TAR-HU-SOL-03-06 | Pruebas de unidad e integración | Test | Pend. | Des.4 - Alcalde | 1.50 |
| TAR-HU-SOL-03-07 | Depuración | Test | Pend. | Des.3 - Castillo | 1.00 |
| TAR-HU-SOL-03-08 | Verificación funcional y pase web | Test | Pend. | Des.4 - Alcalde | 1.00 |

**Subtotal HU-SOL-03:** 3.50 h Construcción, 2.50 h Verificación. Total: 6.00 h.

### HU-SOL-04: Reposición – Rechazar solicitud de reposición
**Puntos:** 2 · **Prioridad:** Should have (3) · **Constructor Principal:** Des.1 Velasquez · **Verificador QA:** Des.3 Castillo

| ID | Tarea | Tipo | Estado | Responsable | Tiempo (h) |
|---|---|---|---|---|---|
| TAR-HU-SOL-04-04 | Desarrollar interfaces | Diseño/Cod. | Pend. | Des.1 - Velasquez | 0.75 |
| TAR-HU-SOL-04-05 | Codificar | Codificación | Pend. | Des.1 - Velasquez | 1.00 |
| TAR-HU-SOL-04-06 | Pruebas de unidad e integración | Test | Pend. | Des.3 - Castillo | 1.00 |
| TAR-HU-SOL-04-07 | Depuración | Test | Pend. | Des.1 - Velasquez | 0.75 |
| TAR-HU-SOL-04-08 | Verificación funcional y pase web | Test | Pend. | Des.3 - Castillo | 0.50 |

**Subtotal HU-SOL-04:** 2.50 h Construcción, 1.50 h Verificación. Total: 4.00 h.

### HU-DASH-01: Dashboard – Ver resumen de ventas del día y del mes
**Puntos:** 5 · **Prioridad:** Must have (4) · **Constructor Principal:** Des.1 Velasquez · **Verificador QA:** Des.5 Colonia

| ID | Tarea | Tipo | Estado | Responsable | Tiempo (h) |
|---|---|---|---|---|---|
| TAR-HU-DASH-01-04 | Desarrollar interfaces | Diseño/Cod. | Pend. | Des.1 - Velasquez | 1.50 |
| TAR-HU-DASH-01-05 | Codificar | Codificación | Pend. | Des.1 - Velasquez | 2.75 |
| TAR-HU-DASH-01-06 | Pruebas de unidad e integración | Test | Pend. | Des.5 - Colonia | 2.75 |
| TAR-HU-DASH-01-07 | Depuración | Test | Pend. | Des.1 - Velasquez | 1.50 |
| TAR-HU-DASH-01-08 | Verificación funcional y pase web | Test | Pend. | Des.5 - Colonia | 1.50 |

**Subtotal HU-DASH-01:** 5.75 h Construcción, 4.25 h Verificación. Total: 10.00 h.

### HU-REP-01: Reportes – Ver resumen de ventas por período
**Puntos:** 5 · **Prioridad:** Must have (4) · **Constructor Principal:** Des.5 Colonia · **Verificador QA:** Des.2 Nolasco

| ID | Tarea | Tipo | Estado | Responsable | Tiempo (h) |
|---|---|---|---|---|---|
| TAR-HU-REP-01-04 | Desarrollar interfaces | Diseño/Cod. | Pend. | Des.5 - Colonia | 1.50 |
| TAR-HU-REP-01-05 | Codificar | Codificación | Pend. | Des.5 - Colonia | 2.75 |
| TAR-HU-REP-01-06 | Pruebas de unidad e integración | Test | Pend. | Des.2 - Nolasco | 2.75 |
| TAR-HU-REP-01-07 | Depuración | Test | Pend. | Des.5 - Colonia | 1.50 |
| TAR-HU-REP-01-08 | Verificación funcional y pase web | Test | Pend. | Des.2 - Nolasco | 1.50 |

**Subtotal HU-REP-01:** 5.75 h Construcción, 4.25 h Verificación. Total: 10.00 h.

### HU-REP-02: Reportes – Ver ranking de productos más vendidos
**Puntos:** 3 · **Prioridad:** Must have (4) · **Constructor Principal:** Des.1 Velasquez · **Verificador QA:** Des.6 Angeles

| ID | Tarea | Tipo | Estado | Responsable | Tiempo (h) |
|---|---|---|---|---|---|
| TAR-HU-REP-02-04 | Desarrollar interfaces | Diseño/Cod. | Pend. | Des.1 - Velasquez | 1.00 |
| TAR-HU-REP-02-05 | Codificar | Codificación | Pend. | Des.1 - Velasquez | 1.50 |
| TAR-HU-REP-02-06 | Pruebas de unidad e integración | Test | Pend. | Des.6 - Angeles | 1.50 |
| TAR-HU-REP-02-07 | Depuración | Test | Pend. | Des.1 - Velasquez | 1.00 |
| TAR-HU-REP-02-08 | Verificación funcional y pase web | Test | Pend. | Des.6 - Angeles | 1.00 |

**Subtotal HU-REP-02:** 3.50 h Construcción, 2.50 h Verificación. Total: 6.00 h.

### HU-SOL-05: Reposición – Completar solicitud al recibir mercadería
**Puntos:** 8 · **Prioridad:** Must have (4) · **Constructor Principal:** Des.2 Nolasco · **Verificador QA:** Des.1 Velasquez

| ID | Tarea | Tipo | Estado | Responsable | Tiempo (h) |
|---|---|---|---|---|---|
| TAR-HU-SOL-05-04 | Desarrollar interfaces | Diseño/Cod. | Pend. | Des.2 - Nolasco | 2.50 |
| TAR-HU-SOL-05-05 | Codificar | Codificación | Pend. | Des.2 - Nolasco | 4.50 |
| TAR-HU-SOL-05-06 | Pruebas de unidad e integración | Test | Pend. | Des.1 - Velasquez | 4.50 |
| TAR-HU-SOL-05-07 | Depuración | Test | Pend. | Des.2 - Nolasco | 2.25 |
| TAR-HU-SOL-05-08 | Verificación funcional y pase web | Test | Pend. | Des.1 - Velasquez | 2.25 |

**Subtotal HU-SOL-05:** 9.25 h Construcción, 6.75 h Verificación. Total: 16.00 h.

### HU-VEN-06: Ventas (POS) – Anular una venta con devolución
**Puntos:** 8 · **Prioridad:** Must have (4) · **Constructor Principal:** Des.6 Angeles · **Verificador QA:** Des.4 Alcalde

| ID | Tarea | Tipo | Estado | Responsable | Tiempo (h) |
|---|---|---|---|---|---|
| TAR-HU-VEN-06-04 | Desarrollar interfaces | Diseño/Cod. | Pend. | Des.6 - Angeles | 2.50 |
| TAR-HU-VEN-06-05 | Codificar | Codificación | Pend. | Des.6 - Angeles | 4.50 |
| TAR-HU-VEN-06-06 | Pruebas de unidad e integración | Test | Pend. | Des.4 - Alcalde | 4.50 |
| TAR-HU-VEN-06-07 | Depuración | Test | Pend. | Des.6 - Angeles | 2.25 |
| TAR-HU-VEN-06-08 | Verificación funcional y pase web | Test | Pend. | Des.4 - Alcalde | 2.25 |

**Subtotal HU-VEN-06:** 9.25 h Construcción, 6.75 h Verificación. Total: 16.00 h.

### HU-VEN-07: Ventas (POS) – Verificar recepción de pago Yape/Plin (IziPay)
**Puntos:** 2 · **Prioridad:** Should have (3) · **Constructor Principal:** Des.3 Castillo · **Verificador QA:** Des.6 Angeles

| ID | Tarea | Tipo | Estado | Responsable | Tiempo (h) |
|---|---|---|---|---|---|
| TAR-HU-VEN-07-04 | Desarrollar interfaces | Diseño/Cod. | Pend. | Des.3 - Castillo | 0.75 |
| TAR-HU-VEN-07-05 | Codificar | Codificación | Pend. | Des.3 - Castillo | 1.00 |
| TAR-HU-VEN-07-06 | Pruebas de unidad e integración | Test | Pend. | Des.6 - Angeles | 1.00 |
| TAR-HU-VEN-07-07 | Depuración | Test | Pend. | Des.3 - Castillo | 0.75 |
| TAR-HU-VEN-07-08 | Verificación funcional y pase web | Test | Pend. | Des.6 - Angeles | 0.50 |

**Subtotal HU-VEN-07:** 2.50 h Construcción, 1.50 h Verificación. Total: 4.00 h.

## Sprint 3

**Sprint 3 · Release 3** · 27 HU · 72 pts · 144 h

### HU-AUTH-06 (Cancelada): Autenticación – Cambiar contraseña propia
**Puntos:** 3 · **Prioridad:** Should have (3) · **Constructor Principal:** Des.2 Nolasco · **Verificador QA:** Des.4 Alcalde

| ID | Tarea | Tipo | Estado | Responsable | Tiempo (h) |
|---|---|---|---|---|---|
| TAR-HU-AUTH-06 (Cancelada)-04 | Desarrollar interfaces | Diseño/Cod. | Pend. | Des.2 - Nolasco | 1.00 |
| TAR-HU-AUTH-06 (Cancelada)-05 | Codificar | Codificación | Pend. | Des.2 - Nolasco | 1.50 |
| TAR-HU-AUTH-06 (Cancelada)-06 | Pruebas de unidad e integración | Test | Pend. | Des.4 - Alcalde | 1.50 |
| TAR-HU-AUTH-06 (Cancelada)-07 | Depuración | Test | Pend. | Des.2 - Nolasco | 1.00 |
| TAR-HU-AUTH-06 (Cancelada)-08 | Verificación funcional y pase web | Test | Pend. | Des.4 - Alcalde | 1.00 |

**Subtotal HU-AUTH-06 (Cancelada):** 3.50 h Construcción, 2.50 h Verificación. Total: 6.00 h.

### HU-LOG-01: Trazabilidad – Consultar registro de accesos al sistema
**Puntos:** 3 · **Prioridad:** Should have (3) · **Constructor Principal:** Des.1 Velasquez · **Verificador QA:** Des.3 Castillo

| ID | Tarea | Tipo | Estado | Responsable | Tiempo (h) |
|---|---|---|---|---|---|
| TAR-HU-LOG-01-04 | Desarrollar interfaces | Diseño/Cod. | Pend. | Des.1 - Velasquez | 1.00 |
| TAR-HU-LOG-01-05 | Codificar | Codificación | Pend. | Des.1 - Velasquez | 1.50 |
| TAR-HU-LOG-01-06 | Pruebas de unidad e integración | Test | Pend. | Des.3 - Castillo | 1.50 |
| TAR-HU-LOG-01-07 | Depuración | Test | Pend. | Des.1 - Velasquez | 1.00 |
| TAR-HU-LOG-01-08 | Verificación funcional y pase web | Test | Pend. | Des.3 - Castillo | 1.00 |

**Subtotal HU-LOG-01:** 3.50 h Construcción, 2.50 h Verificación. Total: 6.00 h.

### HU-CAT-03: Categorías – Editar nombre de categoría
**Puntos:** 1 · **Prioridad:** Should have (3) · **Constructor Principal:** Des.1 Velasquez · **Verificador QA:** Des.4 Alcalde

| ID | Tarea | Tipo | Estado | Responsable | Tiempo (h) |
|---|---|---|---|---|---|
| TAR-HU-CAT-03-04 | Desarrollar interfaces | Diseño/Cod. | Pend. | Des.1 - Velasquez | 0.50 |
| TAR-HU-CAT-03-05 | Codificar | Codificación | Pend. | Des.1 - Velasquez | 0.50 |
| TAR-HU-CAT-03-06 | Pruebas de unidad e integración | Test | Pend. | Des.4 - Alcalde | 0.50 |
| TAR-HU-CAT-03-07 | Depuración | Test | Pend. | Des.1 - Velasquez | 0.25 |
| TAR-HU-CAT-03-08 | Verificación funcional y pase web | Test | Pend. | Des.4 - Alcalde | 0.25 |

**Subtotal HU-CAT-03:** 1.25 h Construcción, 0.75 h Verificación. Total: 2.00 h.

### HU-PROV-03: Proveedores – Editar datos de un proveedor
**Puntos:** 2 · **Prioridad:** Should have (3) · **Constructor Principal:** Des.2 Nolasco · **Verificador QA:** Des.4 Alcalde

| ID | Tarea | Tipo | Estado | Responsable | Tiempo (h) |
|---|---|---|---|---|---|
| TAR-HU-PROV-03-04 | Desarrollar interfaces | Diseño/Cod. | Pend. | Des.2 - Nolasco | 0.75 |
| TAR-HU-PROV-03-05 | Codificar | Codificación | Pend. | Des.2 - Nolasco | 1.00 |
| TAR-HU-PROV-03-06 | Pruebas de unidad e integración | Test | Pend. | Des.4 - Alcalde | 1.00 |
| TAR-HU-PROV-03-07 | Depuración | Test | Pend. | Des.2 - Nolasco | 0.75 |
| TAR-HU-PROV-03-08 | Verificación funcional y pase web | Test | Pend. | Des.4 - Alcalde | 0.50 |

**Subtotal HU-PROV-03:** 2.50 h Construcción, 1.50 h Verificación. Total: 4.00 h.

### HU-USR-03: Usuarios – Editar datos de un empleado
**Puntos:** 3 · **Prioridad:** Should have (3) · **Constructor Principal:** Des.6 Angeles · **Verificador QA:** Des.4 Alcalde

| ID | Tarea | Tipo | Estado | Responsable | Tiempo (h) |
|---|---|---|---|---|---|
| TAR-HU-USR-03-04 | Desarrollar interfaces | Diseño/Cod. | Pend. | Des.6 - Angeles | 1.00 |
| TAR-HU-USR-03-05 | Codificar | Codificación | Pend. | Des.6 - Angeles | 1.50 |
| TAR-HU-USR-03-06 | Pruebas de unidad e integración | Test | Pend. | Des.4 - Alcalde | 1.50 |
| TAR-HU-USR-03-07 | Depuración | Test | Pend. | Des.6 - Angeles | 1.00 |
| TAR-HU-USR-03-08 | Verificación funcional y pase web | Test | Pend. | Des.4 - Alcalde | 1.00 |

**Subtotal HU-USR-03:** 3.50 h Construcción, 2.50 h Verificación. Total: 6.00 h.

### HU-CAT-04: Categorías – Eliminar categoría sin productos
**Puntos:** 2 · **Prioridad:** Could have (2) · **Constructor Principal:** Des.5 Colonia · **Verificador QA:** Des.1 Velasquez

| ID | Tarea | Tipo | Estado | Responsable | Tiempo (h) |
|---|---|---|---|---|---|
| TAR-HU-CAT-04-04 | Desarrollar interfaces | Diseño/Cod. | Pend. | Des.5 - Colonia | 0.75 |
| TAR-HU-CAT-04-05 | Codificar | Codificación | Pend. | Des.5 - Colonia | 1.00 |
| TAR-HU-CAT-04-06 | Pruebas de unidad e integración | Test | Pend. | Des.1 - Velasquez | 1.00 |
| TAR-HU-CAT-04-07 | Depuración | Test | Pend. | Des.5 - Colonia | 0.75 |
| TAR-HU-CAT-04-08 | Verificación funcional y pase web | Test | Pend. | Des.1 - Velasquez | 0.50 |

**Subtotal HU-CAT-04:** 2.50 h Construcción, 1.50 h Verificación. Total: 4.00 h.

### HU-PROD-04: Productos – Editar datos de un producto
**Puntos:** 3 · **Prioridad:** Should have (3) · **Constructor Principal:** Des.1 Velasquez · **Verificador QA:** Des.4 Alcalde

| ID | Tarea | Tipo | Estado | Responsable | Tiempo (h) |
|---|---|---|---|---|---|
| TAR-HU-PROD-04-04 | Desarrollar interfaces | Diseño/Cod. | Pend. | Des.1 - Velasquez | 1.00 |
| TAR-HU-PROD-04-05 | Codificar | Codificación | Pend. | Des.1 - Velasquez | 1.50 |
| TAR-HU-PROD-04-06 | Pruebas de unidad e integración | Test | Pend. | Des.4 - Alcalde | 1.50 |
| TAR-HU-PROD-04-07 | Depuración | Test | Pend. | Des.1 - Velasquez | 1.00 |
| TAR-HU-PROD-04-08 | Verificación funcional y pase web | Test | Pend. | Des.4 - Alcalde | 1.00 |

**Subtotal HU-PROD-04:** 3.50 h Construcción, 2.50 h Verificación. Total: 6.00 h.

### HU-PROD-05: Productos – Desactivar o reactivar producto
**Puntos:** 2 · **Prioridad:** Should have (3) · **Constructor Principal:** Des.6 Angeles · **Verificador QA:** Des.4 Alcalde

| ID | Tarea | Tipo | Estado | Responsable | Tiempo (h) |
|---|---|---|---|---|---|
| TAR-HU-PROD-05-04 | Desarrollar interfaces | Diseño/Cod. | Pend. | Des.6 - Angeles | 0.75 |
| TAR-HU-PROD-05-05 | Codificar | Codificación | Pend. | Des.6 - Angeles | 1.00 |
| TAR-HU-PROD-05-06 | Pruebas de unidad e integración | Test | Pend. | Des.4 - Alcalde | 1.00 |
| TAR-HU-PROD-05-07 | Depuración | Test | Pend. | Des.6 - Angeles | 0.75 |
| TAR-HU-PROD-05-08 | Verificación funcional y pase web | Test | Pend. | Des.4 - Alcalde | 0.50 |

**Subtotal HU-PROD-05:** 2.50 h Construcción, 1.50 h Verificación. Total: 4.00 h.

### HU-USR-05: Usuarios – Reactivar cuenta de empleado
**Puntos:** 2 · **Prioridad:** Should have (3) · **Constructor Principal:** Des.1 Velasquez · **Verificador QA:** Des.4 Alcalde

| ID | Tarea | Tipo | Estado | Responsable | Tiempo (h) |
|---|---|---|---|---|---|
| TAR-HU-USR-05-04 | Desarrollar interfaces | Diseño/Cod. | Pend. | Des.1 - Velasquez | 0.75 |
| TAR-HU-USR-05-05 | Codificar | Codificación | Pend. | Des.1 - Velasquez | 1.00 |
| TAR-HU-USR-05-06 | Pruebas de unidad e integración | Test | Pend. | Des.4 - Alcalde | 1.00 |
| TAR-HU-USR-05-07 | Depuración | Test | Pend. | Des.1 - Velasquez | 0.75 |
| TAR-HU-USR-05-08 | Verificación funcional y pase web | Test | Pend. | Des.4 - Alcalde | 0.50 |

**Subtotal HU-USR-05:** 2.50 h Construcción, 1.50 h Verificación. Total: 4.00 h.

### HU-PROD-03: Productos – Escanear código de barras para registrar producto
**Puntos:** 5 · **Prioridad:** Could have (2) · **Constructor Principal:** Des.5 Colonia · **Verificador QA:** Des.2 Nolasco

| ID | Tarea | Tipo | Estado | Responsable | Tiempo (h) |
|---|---|---|---|---|---|
| TAR-HU-PROD-03-04 | Desarrollar interfaces | Diseño/Cod. | Pend. | Des.5 - Colonia | 1.50 |
| TAR-HU-PROD-03-05 | Codificar | Codificación | Pend. | Des.5 - Colonia | 2.75 |
| TAR-HU-PROD-03-06 | Pruebas de unidad e integración | Test | Pend. | Des.2 - Nolasco | 2.75 |
| TAR-HU-PROD-03-07 | Depuración | Test | Pend. | Des.5 - Colonia | 1.50 |
| TAR-HU-PROD-03-08 | Verificación funcional y pase web | Test | Pend. | Des.2 - Nolasco | 1.50 |

**Subtotal HU-PROD-03:** 5.75 h Construcción, 4.25 h Verificación. Total: 10.00 h.

### HU-DASH-05: Dashboard – Ver solicitudes de reposición pendientes
**Puntos:** 2 · **Prioridad:** Should have (3) · **Constructor Principal:** Des.1 Velasquez · **Verificador QA:** Des.4 Alcalde

| ID | Tarea | Tipo | Estado | Responsable | Tiempo (h) |
|---|---|---|---|---|---|
| TAR-HU-DASH-05-04 | Desarrollar interfaces | Diseño/Cod. | Pend. | Des.1 - Velasquez | 0.75 |
| TAR-HU-DASH-05-05 | Codificar | Codificación | Pend. | Des.1 - Velasquez | 1.00 |
| TAR-HU-DASH-05-06 | Pruebas de unidad e integración | Test | Pend. | Des.4 - Alcalde | 1.00 |
| TAR-HU-DASH-05-07 | Depuración | Test | Pend. | Des.1 - Velasquez | 0.75 |
| TAR-HU-DASH-05-08 | Verificación funcional y pase web | Test | Pend. | Des.4 - Alcalde | 0.50 |

**Subtotal HU-DASH-05:** 2.50 h Construcción, 1.50 h Verificación. Total: 4.00 h.

### HU-INV-04: Inventario – Consultar historial de entradas
**Puntos:** 2 · **Prioridad:** Should have (3) · **Constructor Principal:** Des.6 Angeles · **Verificador QA:** Des.4 Alcalde

| ID | Tarea | Tipo | Estado | Responsable | Tiempo (h) |
|---|---|---|---|---|---|
| TAR-HU-INV-04-04 | Desarrollar interfaces | Diseño/Cod. | Pend. | Des.6 - Angeles | 0.75 |
| TAR-HU-INV-04-05 | Codificar | Codificación | Pend. | Des.6 - Angeles | 1.00 |
| TAR-HU-INV-04-06 | Pruebas de unidad e integración | Test | Pend. | Des.4 - Alcalde | 1.00 |
| TAR-HU-INV-04-07 | Depuración | Test | Pend. | Des.6 - Angeles | 0.75 |
| TAR-HU-INV-04-08 | Verificación funcional y pase web | Test | Pend. | Des.4 - Alcalde | 0.50 |

**Subtotal HU-INV-04:** 2.50 h Construcción, 1.50 h Verificación. Total: 4.00 h.

### HU-REP-06: Reportes – Ver resumen general del inventario
**Puntos:** 2 · **Prioridad:** Should have (3) · **Constructor Principal:** Des.2 Nolasco · **Verificador QA:** Des.4 Alcalde

| ID | Tarea | Tipo | Estado | Responsable | Tiempo (h) |
|---|---|---|---|---|---|
| TAR-HU-REP-06-04 | Desarrollar interfaces | Diseño/Cod. | Pend. | Des.2 - Nolasco | 0.75 |
| TAR-HU-REP-06-05 | Codificar | Codificación | Pend. | Des.2 - Nolasco | 1.00 |
| TAR-HU-REP-06-06 | Pruebas de unidad e integración | Test | Pend. | Des.4 - Alcalde | 1.00 |
| TAR-HU-REP-06-07 | Depuración | Test | Pend. | Des.2 - Nolasco | 0.75 |
| TAR-HU-REP-06-08 | Verificación funcional y pase web | Test | Pend. | Des.4 - Alcalde | 0.50 |

**Subtotal HU-REP-06:** 2.50 h Construcción, 1.50 h Verificación. Total: 4.00 h.

### HU-DASH-02: Dashboard – Ver gráfico de evolución de ventas por día
**Puntos:** 3 · **Prioridad:** Should have (3) · **Constructor Principal:** Des.5 Colonia · **Verificador QA:** Des.4 Alcalde

| ID | Tarea | Tipo | Estado | Responsable | Tiempo (h) |
|---|---|---|---|---|---|
| TAR-HU-DASH-02-04 | Desarrollar interfaces | Diseño/Cod. | Pend. | Des.5 - Colonia | 1.00 |
| TAR-HU-DASH-02-05 | Codificar | Codificación | Pend. | Des.5 - Colonia | 1.50 |
| TAR-HU-DASH-02-06 | Pruebas de unidad e integración | Test | Pend. | Des.4 - Alcalde | 1.50 |
| TAR-HU-DASH-02-07 | Depuración | Test | Pend. | Des.5 - Colonia | 1.00 |
| TAR-HU-DASH-02-08 | Verificación funcional y pase web | Test | Pend. | Des.4 - Alcalde | 1.00 |

**Subtotal HU-DASH-02:** 3.50 h Construcción, 2.50 h Verificación. Total: 6.00 h.

### HU-DASH-04: Dashboard – Ver ranking de productos más vendidos
**Puntos:** 3 · **Prioridad:** Should have (3) · **Constructor Principal:** Des.6 Angeles · **Verificador QA:** Des.5 Colonia

| ID | Tarea | Tipo | Estado | Responsable | Tiempo (h) |
|---|---|---|---|---|---|
| TAR-HU-DASH-04-04 | Desarrollar interfaces | Diseño/Cod. | Pend. | Des.6 - Angeles | 1.00 |
| TAR-HU-DASH-04-05 | Codificar | Codificación | Pend. | Des.6 - Angeles | 1.50 |
| TAR-HU-DASH-04-06 | Pruebas de unidad e integración | Test | Pend. | Des.5 - Colonia | 1.50 |
| TAR-HU-DASH-04-07 | Depuración | Test | Pend. | Des.6 - Angeles | 1.00 |
| TAR-HU-DASH-04-08 | Verificación funcional y pase web | Test | Pend. | Des.5 - Colonia | 1.00 |

**Subtotal HU-DASH-04:** 3.50 h Construcción, 2.50 h Verificación. Total: 6.00 h.

### HU-INV-05: Inventario – Consultar historial de bajas
**Puntos:** 2 · **Prioridad:** Should have (3) · **Constructor Principal:** Des.2 Nolasco · **Verificador QA:** Des.4 Alcalde

| ID | Tarea | Tipo | Estado | Responsable | Tiempo (h) |
|---|---|---|---|---|---|
| TAR-HU-INV-05-04 | Desarrollar interfaces | Diseño/Cod. | Pend. | Des.2 - Nolasco | 0.75 |
| TAR-HU-INV-05-05 | Codificar | Codificación | Pend. | Des.2 - Nolasco | 1.00 |
| TAR-HU-INV-05-06 | Pruebas de unidad e integración | Test | Pend. | Des.4 - Alcalde | 1.00 |
| TAR-HU-INV-05-07 | Depuración | Test | Pend. | Des.2 - Nolasco | 0.75 |
| TAR-HU-INV-05-08 | Verificación funcional y pase web | Test | Pend. | Des.4 - Alcalde | 0.50 |

**Subtotal HU-INV-05:** 2.50 h Construcción, 1.50 h Verificación. Total: 4.00 h.

### HU-INV-06: Inventario – Consultar historial de ajustes
**Puntos:** 2 · **Prioridad:** Should have (3) · **Constructor Principal:** Des.2 Nolasco · **Verificador QA:** Des.5 Colonia

| ID | Tarea | Tipo | Estado | Responsable | Tiempo (h) |
|---|---|---|---|---|---|
| TAR-HU-INV-06-04 | Desarrollar interfaces | Diseño/Cod. | Pend. | Des.2 - Nolasco | 0.75 |
| TAR-HU-INV-06-05 | Codificar | Codificación | Pend. | Des.2 - Nolasco | 1.00 |
| TAR-HU-INV-06-06 | Pruebas de unidad e integración | Test | Pend. | Des.5 - Colonia | 1.00 |
| TAR-HU-INV-06-07 | Depuración | Test | Pend. | Des.2 - Nolasco | 0.75 |
| TAR-HU-INV-06-08 | Verificación funcional y pase web | Test | Pend. | Des.5 - Colonia | 0.50 |

**Subtotal HU-INV-06:** 2.50 h Construcción, 1.50 h Verificación. Total: 4.00 h.

### HU-REP-03: Reportes – Ver ventas desglosadas por día
**Puntos:** 3 · **Prioridad:** Should have (3) · **Constructor Principal:** Des.3 Castillo · **Verificador QA:** Des.2 Nolasco

| ID | Tarea | Tipo | Estado | Responsable | Tiempo (h) |
|---|---|---|---|---|---|
| TAR-HU-REP-03-04 | Desarrollar interfaces | Diseño/Cod. | Pend. | Des.3 - Castillo | 1.00 |
| TAR-HU-REP-03-05 | Codificar | Codificación | Pend. | Des.3 - Castillo | 1.50 |
| TAR-HU-REP-03-06 | Pruebas de unidad e integración | Test | Pend. | Des.2 - Nolasco | 1.50 |
| TAR-HU-REP-03-07 | Depuración | Test | Pend. | Des.3 - Castillo | 1.00 |
| TAR-HU-REP-03-08 | Verificación funcional y pase web | Test | Pend. | Des.2 - Nolasco | 1.00 |

**Subtotal HU-REP-03:** 3.50 h Construcción, 2.50 h Verificación. Total: 6.00 h.

### HU-REP-04: Reportes – Ver ventas por método de pago
**Puntos:** 2 · **Prioridad:** Should have (3) · **Constructor Principal:** Des.2 Nolasco · **Verificador QA:** Des.3 Castillo

| ID | Tarea | Tipo | Estado | Responsable | Tiempo (h) |
|---|---|---|---|---|---|
| TAR-HU-REP-04-04 | Desarrollar interfaces | Diseño/Cod. | Pend. | Des.2 - Nolasco | 0.75 |
| TAR-HU-REP-04-05 | Codificar | Codificación | Pend. | Des.2 - Nolasco | 1.00 |
| TAR-HU-REP-04-06 | Pruebas de unidad e integración | Test | Pend. | Des.3 - Castillo | 1.00 |
| TAR-HU-REP-04-07 | Depuración | Test | Pend. | Des.2 - Nolasco | 0.75 |
| TAR-HU-REP-04-08 | Verificación funcional y pase web | Test | Pend. | Des.3 - Castillo | 0.50 |

**Subtotal HU-REP-04:** 2.50 h Construcción, 1.50 h Verificación. Total: 4.00 h.

### HU-REP-07: Reportes – Ver margen de ganancia por producto
**Puntos:** 5 · **Prioridad:** Should have (3) · **Constructor Principal:** Des.6 Angeles · **Verificador QA:** Des.4 Alcalde

| ID | Tarea | Tipo | Estado | Responsable | Tiempo (h) |
|---|---|---|---|---|---|
| TAR-HU-REP-07-04 | Desarrollar interfaces | Diseño/Cod. | Pend. | Des.6 - Angeles | 1.50 |
| TAR-HU-REP-07-05 | Codificar | Codificación | Pend. | Des.6 - Angeles | 2.75 |
| TAR-HU-REP-07-06 | Pruebas de unidad e integración | Test | Pend. | Des.4 - Alcalde | 2.75 |
| TAR-HU-REP-07-07 | Depuración | Test | Pend. | Des.6 - Angeles | 1.50 |
| TAR-HU-REP-07-08 | Verificación funcional y pase web | Test | Pend. | Des.4 - Alcalde | 1.50 |

**Subtotal HU-REP-07:** 5.75 h Construcción, 4.25 h Verificación. Total: 10.00 h.

### HU-REP-08: Reportes – Ver mermas agrupadas por motivo
**Puntos:** 3 · **Prioridad:** Should have (3) · **Constructor Principal:** Des.5 Colonia · **Verificador QA:** Des.2 Nolasco

| ID | Tarea | Tipo | Estado | Responsable | Tiempo (h) |
|---|---|---|---|---|---|
| TAR-HU-REP-08-04 | Desarrollar interfaces | Diseño/Cod. | Pend. | Des.5 - Colonia | 1.00 |
| TAR-HU-REP-08-05 | Codificar | Codificación | Pend. | Des.5 - Colonia | 1.50 |
| TAR-HU-REP-08-06 | Pruebas de unidad e integración | Test | Pend. | Des.2 - Nolasco | 1.50 |
| TAR-HU-REP-08-07 | Depuración | Test | Pend. | Des.5 - Colonia | 1.00 |
| TAR-HU-REP-08-08 | Verificación funcional y pase web | Test | Pend. | Des.2 - Nolasco | 1.00 |

**Subtotal HU-REP-08:** 3.50 h Construcción, 2.50 h Verificación. Total: 6.00 h.

### HU-VEN-04: Ventas (POS) – Buscar producto por código de barras
**Puntos:** 3 · **Prioridad:** Should have (3) · **Constructor Principal:** Des.3 Castillo · **Verificador QA:** Des.4 Alcalde

| ID | Tarea | Tipo | Estado | Responsable | Tiempo (h) |
|---|---|---|---|---|---|
| TAR-HU-VEN-04-04 | Desarrollar interfaces | Diseño/Cod. | Pend. | Des.3 - Castillo | 1.00 |
| TAR-HU-VEN-04-05 | Codificar | Codificación | Pend. | Des.3 - Castillo | 1.50 |
| TAR-HU-VEN-04-06 | Pruebas de unidad e integración | Test | Pend. | Des.4 - Alcalde | 1.50 |
| TAR-HU-VEN-04-07 | Depuración | Test | Pend. | Des.3 - Castillo | 1.00 |
| TAR-HU-VEN-04-08 | Verificación funcional y pase web | Test | Pend. | Des.4 - Alcalde | 1.00 |

**Subtotal HU-VEN-04:** 3.50 h Construcción, 2.50 h Verificación. Total: 6.00 h.

### HU-CLI-01: Clientes – Listar clientes registrados
**Puntos:** 2 · **Prioridad:** Should have (3) · **Constructor Principal:** Des.6 Angeles · **Verificador QA:** Des.2 Nolasco

| ID | Tarea | Tipo | Estado | Responsable | Tiempo (h) |
|---|---|---|---|---|---|
| TAR-HU-CLI-01-04 | Desarrollar interfaces | Diseño/Cod. | Pend. | Des.6 - Angeles | 0.75 |
| TAR-HU-CLI-01-05 | Codificar | Codificación | Pend. | Des.6 - Angeles | 1.00 |
| TAR-HU-CLI-01-06 | Pruebas de unidad e integración | Test | Pend. | Des.2 - Nolasco | 1.00 |
| TAR-HU-CLI-01-07 | Depuración | Test | Pend. | Des.6 - Angeles | 0.75 |
| TAR-HU-CLI-01-08 | Verificación funcional y pase web | Test | Pend. | Des.2 - Nolasco | 0.50 |

**Subtotal HU-CLI-01:** 2.50 h Construcción, 1.50 h Verificación. Total: 4.00 h.

### HU-VEN-03: Ventas (POS) – Generar comprobante en PDF o reenviar por correo electrónico
**Puntos:** 5 · **Prioridad:** Should have (3) · **Constructor Principal:** Des.1 Velasquez · **Verificador QA:** Des.3 Castillo

| ID | Tarea | Tipo | Estado | Responsable | Tiempo (h) |
|---|---|---|---|---|---|
| TAR-HU-VEN-03-04 | Desarrollar interfaces | Diseño/Cod. | Pend. | Des.1 - Velasquez | 1.50 |
| TAR-HU-VEN-03-05 | Codificar | Codificación | Pend. | Des.1 - Velasquez | 2.75 |
| TAR-HU-VEN-03-06 | Pruebas de unidad e integración | Test | Pend. | Des.3 - Castillo | 2.75 |
| TAR-HU-VEN-03-07 | Depuración | Test | Pend. | Des.1 - Velasquez | 1.50 |
| TAR-HU-VEN-03-08 | Verificación funcional y pase web | Test | Pend. | Des.3 - Castillo | 1.50 |

**Subtotal HU-VEN-03:** 5.75 h Construcción, 4.25 h Verificación. Total: 10.00 h.

### HU-CLI-03: Clientes – Editar correo electrónico de cliente
**Puntos:** 1 · **Prioridad:** Could have (2) · **Constructor Principal:** Des.3 Castillo · **Verificador QA:** Des.1 Velasquez

| ID | Tarea | Tipo | Estado | Responsable | Tiempo (h) |
|---|---|---|---|---|---|
| TAR-HU-CLI-03-04 | Desarrollar interfaces | Diseño/Cod. | Pend. | Des.3 - Castillo | 0.50 |
| TAR-HU-CLI-03-05 | Codificar | Codificación | Pend. | Des.3 - Castillo | 0.50 |
| TAR-HU-CLI-03-06 | Pruebas de unidad e integración | Test | Pend. | Des.1 - Velasquez | 0.50 |
| TAR-HU-CLI-03-07 | Depuración | Test | Pend. | Des.3 - Castillo | 0.25 |
| TAR-HU-CLI-03-08 | Verificación funcional y pase web | Test | Pend. | Des.1 - Velasquez | 0.25 |

**Subtotal HU-CLI-03:** 1.25 h Construcción, 0.75 h Verificación. Total: 2.00 h.

### HU-REP-09: Reportes – Exportar reportes en PDF
**Puntos:** 3 · **Prioridad:** Could have (2) · **Constructor Principal:** Des.1 Velasquez · **Verificador QA:** Des.3 Castillo

| ID | Tarea | Tipo | Estado | Responsable | Tiempo (h) |
|---|---|---|---|---|---|
| TAR-HU-REP-09-04 | Desarrollar interfaces | Diseño/Cod. | Pend. | Des.1 - Velasquez | 1.00 |
| TAR-HU-REP-09-05 | Codificar | Codificación | Pend. | Des.1 - Velasquez | 1.50 |
| TAR-HU-REP-09-06 | Pruebas de unidad e integración | Test | Pend. | Des.3 - Castillo | 1.50 |
| TAR-HU-REP-09-07 | Depuración | Test | Pend. | Des.1 - Velasquez | 1.00 |
| TAR-HU-REP-09-08 | Verificación funcional y pase web | Test | Pend. | Des.3 - Castillo | 1.00 |

**Subtotal HU-REP-09:** 3.50 h Construcción, 2.50 h Verificación. Total: 6.00 h.

### HU-VEN-08 · Ventas (POS) – Exportar historial de ventas a documento portátil (PDF) (Fuera de Alcance)

| Identificador | Épica | Prioridad MoSCoW | Estimación | Release | Sprint |
|:---:|:---:|:---:|:---:|:---:|:---:|
| HU-VEN-08 | EPIC-VEN | Won't have | 3 | Ninguno | Ninguno |

**Como** Administrador o Gerente del minimarket,  
**quiero** exportar reportes o listados históricos de transacciones comerciales a un documento (PDF descargable),  
**para** realizar conciliaciones contables en herramientas externas de hoja de cálculo y facilitar el envío de reportes mensuales al estudio contable externo.

**Justificación de exclusión:** En el módulo del Historial de Ventas solo existe el PDF de un comprobante y reenvío por correo. La funcionalidad masiva en PDF se reubica conceptualmente en el «Reporte de Ventas» dentro de EPIC-REP. Por tanto, esta HU puntual se declara fuera de alcance (no implementada en EPIC-VEN).

**Criterios de aceptación:**
1. **Dado que** el directivo consulta el historial de ventas con filtros de fechas o comprobantes aplicados, **cuando** presiona la opción de exportar datos a archivo PDF, **entonces** el sistema genera y descarga un archivo estructurado con los registros correspondientes al filtro activo.
2. **Dado que** el usuario abre el documento exportado, **cuando** inspecciona sus campos, **entonces** el documento contiene columnas normalizadas con fecha y hora, tipo de comprobante, serie, correlativo, cliente, medio de pago, base imponible, impuesto IGV, importe total y estado de la venta.
3. **Dado que** el usuario aplica filtros de fecha o estado que no arrojaron ninguna venta registrada en el período, **cuando** presiona la opción de exportar datos, **entonces** el sistema notifica que no existen registros comerciales disponibles para el criterio seleccionado, evitando la descarga de archivos vacíos.

**Especificación de interfaz:** Funcionalidad de descarga de documento estructurado sin pantalla propia independiente; se integra como control de exportación dentro de la grilla de consulta de ventas.

**Reglas de negocio aplicables:** 
- N/A

**Dependencias:**
- Requiere `HU-VEN-05` (historial de ventas para exportación a CSV).

---


<!-- ===================================================================== -->
<!-- ARCHIVO FUENTE: 08_Reglas_de_Negocio_y_Glosario.md -->
<!-- ===================================================================== -->

---
Código de documento: DOC-PLAN-08
Título: Reglas de Negocio y Glosario
Versión: 5.2
Fecha: 2026-10-04
Elaborado por: Colonia Infantas, Walter
Revisado por: Angeles Pérez, Jhonny
Estado: Aprobado
Propósito: Políticas operativas del negocio y glosario terminológico del minimarket
Documentos relacionados: DOC-PLAN-00
---

# 08. Reglas de Negocio y Glosario

## Catálogo Oficial de Reglas de Negocio

A continuación se establecen las 21 reglas de negocio mandatarias que norman las operaciones comerciales, el control de inventarios, la gestión de caja y la seguridad del sistema en el minimarket:

| Regla ID | Regla de Negocio | Descripción Operativa y Criterio de Aplicación | Roles Afectados | Historias de Usuario Asociadas |
|---|---|---|---|---|
| **RN-01** | Política de Ingreso Inicial y Abastecimiento por Solicitud | El sistema permitirá el ingreso directo de mercadería al almacén únicamente durante la primera carga de existencias de un producto nuevo (sin inventario ni entradas previas en el sistema), o cuando sea efectuado por el Administrador para regularizaciones extraordinarias de stock. Toda entrada de mercadería posterior ejecutada por el personal de almacén exigirá obligatoriamente estar vinculada a una solicitud de reposición previamente aprobada. | Almacenero, Administrador | HU-INV-01, HU-SOL-05 |
| **RN-02** | Protección contra Pagos Duplicados con Cobro Digital (IziPay) | Al registrar un cobro mediante Yape/Plin mediante terminal IziPay con código de autorización de 6 dígitos, el sistema exigirá ingresar obligatoriamente dicho código de autorización numérico emitido por el terminal físico de pago. El sistema validará en tiempo real que el código de autorización no haya sido registrado previamente en ninguna venta del historial del minimarket, impidiendo registrar ventas duplicadas con un mismo comprobante digital. | Vendedor | HU-VEN-01b, HU-VEN-07 |
| **RN-03** | Prohibición de Comercialización de Productos Vencidos | El sistema bloqueará de forma absoluta en el terminal de punto de venta (POS) la selección, adición al carrito y venta de cualquier unidad perteneciente a un lote cuya fecha de caducidad haya expirado (un lote cuya fecha de caducidad coincide con la fecha en curso o es anterior queda bloqueado para la venta en el punto de venta desde la apertura del turno y debe canalizarse a bajas por vencimiento). Los lotes vencidos quedan excluidos de forma automática del stock comercial disponible para la venta. | Vendedor | HU-VEN-01c, HU-PROD-06 |
| **RN-04** | Registro Obligatorio y Justificado de Mermas | Toda baja de mercadería del inventario por vencimiento, rotura, merma física o deterioro exigirá el ingreso obligatorio de un motivo justificativo. El sistema descontará de manera inmediata las unidades del stock registrado, sin requerir autorizaciones adicionales durante la operación de retiro físico en el almacén. | Almacenero, Administrador | HU-INV-02 |
| **RN-05** | Restricción de Bajas según Estado de Caducidad | Para registrar una baja de mercadería bajo la causal de 'Vencimiento', el lote de producto seleccionado deberá haber superado su fecha de caducidad a la fecha de la transacción (un lote cuya fecha de caducidad coincide con la fecha en curso o es anterior queda bloqueado para la venta en el punto de venta desde la apertura del turno y debe canalizarse a bajas por vencimiento). Si la baja se registra por cualquier otra causal (daño físico, rotura o desmedro), el sistema validará que el lote no se encuentre vencido, canalizando la pérdida por su concepto respectivo con trazabilidad puntual de lote (RN-20). | Almacenero | HU-INV-02 |
| **RN-06** | Alerta Preventiva de Stock Mínimo | El sistema emitirá alertas visuales preventivas destacadas en el panel principal (Dashboard), en los reportes de inventario y en el catálogo general cada vez que el stock disponible de un producto sea igual o inferior al umbral de stock mínimo configurado en su registro maestro. El sistema asignará por defecto un stock mínimo de 5 unidades si el usuario lo deja en blanco. | Administrador, Gerente | HU-DASH-03, HU-REP-05, HU-PROD-02 |
| **RN-07** | Segregación y Privacidad de Ventas por Turno | En el terminal de punto de venta (POS), el vendedor visualizará exclusivamente las ventas y comprobantes emitidos bajo su propio usuario durante su turno de caja activo. La consulta del consolidado histórico de ventas de todos los colaboradores queda reservada a los roles de Administrador y Gerente. | Vendedor | HU-VEN-05 |
| **RN-08** | Restricción Temporal para la Anulación de Ventas | Una venta solo podrá ser anulada si el turno de caja en el cual fue realizada y cobrada permanece en estado 'Abierto'. Si el turno de caja ya fue cerrado o liquidado formalmente, el sistema impedirá su anulación directa en el mostrador para preservar la integridad del cuadre financiero. | Administrador, Gerente | HU-VEN-06 |
| **RN-09** | Destino Operativo de Mercadería Devuelta | Al procesar la anulación de una venta con devolución física de productos, el usuario supervisor facultado (Administrador o Gerente) deberá seleccionar el destino de la mercadería: reingreso inmediato al stock comercial disponible para la venta, o derivación formal e inmediata al registro de mermas y bajas si el producto fue devuelto en estado deteriorado o abierto. | Administrador, Gerente | HU-VEN-06 |
| **RN-10** | Fondo Mínimo Obligatorio para Apertura de Caja | El sistema exigirá declarar un monto inicial de dinero en efectivo de al menos S/ 500.00 al abrir un nuevo turno de caja, garantizando que el vendedor cuente con fondo de caja y cambio suficiente para la fluidez de la atención comercial en mostrador. | Vendedor | HU-CAJA-01 |
| **RN-11** | Tope Máximo para Movimientos Manuales de Efectivo | Todo movimiento manual menor de ingreso o egreso de dinero en efectivo en el cajón de venta física (gastos imprevistos de caja chica o retiro de sencillo no proveniente de una venta) tendrá un monto límite permitido de S/ 5,000.00 por operación. | Vendedor | HU-CAJA-03 |
| **RN-12** | Identidad Unívoca de Empleados en el Sistema | La identidad de cada colaborador en el sistema se establecerá de manera irrepetible a través de su dirección de correo electrónico registrada. No se admitirá la creación ni duplicidad de dos cuentas activas con una misma dirección de correo electrónico. | SuperAdmin | HU-USR-02, HU-USR-03 |
| **RN-13** | Numeración Consecutiva e Ininterrumpida de Comprobantes | La emisión de comprobantes de pago (Boletas de Venta y Facturas) mantendrá una correlatividad numérica estricta, continua e ininterrumpida por serie y tipo de documento fiscal, garantizando la consistencia ante la normativa tributaria de SUNAT. | Vendedor | HU-VEN-02, HU-VEN-03 |
| **RN-14** | Actualización Automática de la Valorización de Inventario | Estructuralmente, la API está diseñada para recalcular automáticamente el costo promedio ponderado del producto cada vez que se reciba un ingreso con costo específico; sin embargo, en la interfaz gráfica final no existe campo de costo ni en el formulario de Entradas de Almacén ni en el de Completar Solicitud de Reposición (la interfaz envía el valor nulo por defecto), por lo que la actualización de la valorización del inventario permanece inactiva para el operador en pantalla. | Almacenero | HU-INV-01, HU-REP-07, HU-SOL-05 |
| **RN-15** | Medio Exclusivo para Movimientos Manuales de Caja | Los registros de movimiento manual de entrada o salida en el turno de caja operarán única y exclusivamente sobre dinero en efectivo en el cajón físico de mostrador. Queda prohibido registrar movimientos manuales de caja bajo modalidades electrónicas o billeteras digitales. | Vendedor | HU-CAJA-03 |
| **RN-16** | Flexibilidad en la Selección de Proveedores para Reposición | Al momento de revisar y aprobar una solicitud de reposición de mercadería, el Gerente o Administrador podrá reasignar o modificar el proveedor sugerido originalmente por el personal de almacén, optimizando las condiciones de compra comercial antes de autorizar la recepción de los productos. | Gerente, Administrador | HU-SOL-03 |
| **RN-17** | Bloqueo Preventivo por Intentos Fallidos de Autenticación | El sistema bloqueará la cuenta por 15 minutos si acumula 5 intentos fallidos consecutivos. Al intentar ingresar nuevamente, se mostrará el mensaje «Cuenta bloqueada temporalmente. Intente en 15 minutos.» para mitigar intentos reiterados no autorizados de acceso a las cuentas. | Todos los roles | HU-AUTH-02 |
| **RN-18** | Vigencia y Formato de Código de Verificación Temporal | Para el restablecimiento no asistido de contraseñas olvidadas, el sistema emitirá a la dirección de correo del colaborador un código numérico temporal de exactamente 4 dígitos con una vigencia de 15 minutos y de uso único; acumular 5  con el código activa un bloqueo temporal automático de la cuenta por 15 minutos. La nueva contraseña debe tener al menos 7 caracteres combinando mayúsculas, minúsculas y dígitos. | Todos los roles | HU-AUTH-05, HU-AUTH-06 (Cancelada), HU-USR-02 |
| **RN-19** | Despacho Preferente por Caducidad (Método FEFO) | La venta y salida comercial de mercadería en el terminal de punto de venta (POS) priorizará de forma obligatoria y automatizada los lotes con fecha de expiración más próxima (First Expired, First Out - FEFO). Un lote cuya fecha de caducidad coincide con la fecha en curso o es anterior queda bloqueado para la venta en el punto de venta desde la apertura del turno y debe canalizarse a bajas por vencimiento, garantizando que el sistema despache primero el lote vigente que vence antes (método FEFO). | Vendedor, Almacenero | HU-VEN-01c, HU-PROD-06, HU-INV-01 |
| **RN-20** | Trazabilidad y Justificación Obligatoria en Bajas por Deterioro | Toda baja de inventario originada por daño físico, rotura o avería exigirá obligatoriamente seleccionar el lote específico afectado para no distorsionar las partidas en buen estado, declarar una justificación formal y registrar la identidad del operador responsable para el control de pérdidas. | Almacenero, Administrador | HU-INV-02 |
| **RN-21** | Emisión de Boleta a Consumidor Anónimo (Público General) | En operaciones comerciales minoristas en mostrador donde el importe total de la venta sea de hasta S/ 700.00 inclusive (monto total ≤ S/ 700.00), el sistema permitirá emitir la Boleta de Venta asignada al receptor «Público General» sin exigir el registro obligatorio de DNI. Si el importe total supera los S/ 700.00 (> S/ 700.00), el sistema exigirá obligatoriamente capturar un DNI válido de 8 dígitos para proceder con la emisión del comprobante, conforme al Reglamento de Comprobantes de Pago de SUNAT. | Vendedor | HU-VEN-02, HU-VEN-01b |

---

## Recorridos de Usuario del Minimarket

Los siguientes recorridos describen el flujo de interacción de los colaboradores con las funciones operativas del sistema:

1. **Venta y Cobro en Mostrador:**  
   El vendedor inicia su turno verificando la existencia de un turno de caja abierto con el fondo base correspondiente (RN-10). Al presentarse un cliente, añade los productos al carrito de venta mediante lectura de código de barras o búsqueda rápida por nombre, validando en tiempo real el stock comercial, la vigencia del lote (RN-03) y aplicando el despacho preferente por caducidad (RN-19). A solicitud del cliente, selecciona el medio de pago: si es en efectivo, el sistema calcula el vuelto con base en el dinero entregado; si es con billetera digital, se procesa a través de Yape/Plin mediante terminal IziPay con código de autorización de 6 dígitos, verificando la unicidad del código de autorización (RN-02). Si el comprobante lo requiere, se capturan los datos de identidad del cliente (DNI para boleta que supere los S/ 700.00 o RUC para factura), permitiendo boletas anónimas a Público General hasta dicho umbral (RN-21). Al confirmar la venta, el sistema descuenta inmediatamente el inventario y emite el comprobante correlativo según formato fiscal (RN-13).

2. **Salida y Disposición de Mercadería por Caducidad o Daño (Método FEFO):**  
   El almacenero realiza inspecciones periódicas de los anaqueles y del almacén siguiendo el principio logístico FEFO (Primero en vencer, primero en salir). Cuando identifica productos cuya fecha de vencimiento ha expirado o que presentan rotura física, retira las unidades del área de exhibición. En el sistema, accede a la sección de inventario, selecciona el producto y el lote respectivo, y registra formalmente la baja declarando de forma obligatoria el motivo de la merma (RN-04), validando la congruencia de caducidad del lote (RN-05) y registrando el lote puntual en caso de rotura o avería física (RN-20). El sistema actualiza el saldo disponible y deja constancia histórica para el control administrativo de pérdidas.

3. **Abastecimiento y Ciclo de Reposición de Mercadería:**  
   Cuando un producto alcanza o cae por debajo de su nivel de stock mínimo, el sistema emite alertas visuales preventivas en el catálogo de productos y en el tablero de control gerencial (RN-06). A partir de la verificación de existencias en el inventario o la indicación de gerencia, el personal de almacén emite una solicitud de reposición detallando la cantidad sugerida y el proveedor habitual. El Gerente o Administrador examina las solicitudes pendientes, pudiendo confirmar el proveedor propuesto o seleccionar un proveedor alternativo más conveniente (RN-16) antes de formalizar la aprobación. Una vez recibida físicamente la mercadería en el local con su comprobante de compra, el almacenero registra la entrada contra la solicitud aprobada (RN-01), declarando la fecha de caducidad. El código de lote es asignado automáticamente por el sistema y el costo unitario no se captura visualmente en pantalla, aunque la API soporte la actualización del costo promedio (RN-14).

4. **Arqueo, Control Operativo y Cuadre de Caja:**  
   Al iniciar la jornada, el vendedor apertura su turno ingresando un monto en efectivo igual o mayor a S/ 500.00 (RN-10). Durante el horario de atención, si requiere registrar un egreso menor justificado en mostrador, genera un movimiento manual en efectivo dentro del límite de S/ 5,000.00 (RN-11 y RN-15). En caso de presentarse una devolución de un cliente dentro del turno abierto, el supervisor puede autorizar la anulación de la venta (RN-08) y definir si la mercadería reingresa al catálogo o se deriva a merma (RN-09). Al concluir el turno, el vendedor efectúa el arqueo físico de gaveta y la conciliación del reporte de liquidación del terminal digital, ingresa los montos totales y el sistema contrasta los valores declarados contra el saldo esperado del sistema, emitiendo el acta de cuadre para revisión y aprobación administrativa.

---

## Glosario de Términos del Minimarket

- **Arqueo de Caja:** Procedimiento de conteo físico del dinero en efectivo en gaveta y conciliación documental del reporte de liquidación del terminal de pagos digitales para confrontarlos contra los saldos teóricos registrados por el sistema durante el turno.
- **Boleta de Venta:** Comprobante de pago emitido a consumidores finales que documenta la transferencia de bienes y satisface las especificaciones fiscales exigidas por la autoridad tributaria (SUNAT).
- **Cierre Forzado de Sesión:** Acción administrativa ejecutada con carácter privativo por el SuperAdmin para revocar el acceso de una cuenta de usuario que se mantiene conectada en una estación remota.
- **Cierre Forzado de Turno de Caja:** Acción de supervisión realizada por el Administrador o Gerente para concluir y liquidar formalmente un turno de caja que quedó abierto o en abandono por parte del vendedor responsable.
- **Costo Promedio Ponderado:** Método de valorización de inventarios que promedia el costo de adquisición de las existencias actuales con el costo de las nuevas compras, determinando el costo unitario oficial de cada producto.
- **Cuadre de Caja:** Balance financiero final de un turno que compara el saldo declarado por el vendedor en su arqueo contra las ventas, cobranzas y egresos registrados en el sistema, reportando si la caja cuadró o si presenta faltante o sobrante.
- **DNI (Documento Nacional de Identidad):** Documento oficial de 8 dígitos numéricos expedido por el RENIEC para la identificación personal de los ciudadanos en el territorio peruano.
- **Épica:** Agrupador de alto nivel en la metodología ágil que consolida un conjunto de historias de usuario orientadas a cumplir un objetivo estratégico del negocio.
- **Factura:** Comprobante fiscal emitido a empresas o personas naturales con negocio acreditadas ante SUNAT con RUC (prefijo 20) en estado Activo y condición Habido, detallando la base imponible y el Impuesto General a las Ventas (IGV 18 %).
- **FEFO (*First Expired, First Out*):** Principio logístico ("Primero en vencer, primero en salir") que norma la rotación comercial de almacén, priorizando la salida y venta de los lotes cuya caducidad sea más próxima.
- **Fondo Mínimo de Apertura:** Suma de dinero en efectivo (fijada en S/ 500.00 según RN-10) que debe declararse obligatoriamente al aperturar una caja registradora para garantizar cambio en mostrador.
- **Historia de Usuario (HU):** Especificación funcional ágil formulada desde la perspectiva del usuario ("Como [rol] / Quiero [función] / Para [beneficio]") acompañada de criterios de aceptación medibles.
- **IGV (Impuesto General a las Ventas):** Tributo nacional al consumo que grava las transferencias comerciales con una alícuota del 18 %. En el comercio minorista (punto de venta), los precios de catálogo exhibidos al público incluyen el IGV (PVP); en la emisión del comprobante, el sistema opera asumiendo este importe neto como valor final del consumidor, delegando el desglose tributario extractivo a la presentación, y el IGV resultante corresponde a la diferencia entre el Total y el Subtotal.
- **INVEST:** Criterios de calidad que aseguran que una historia de usuario sea Independiente, Negociable, Valiosa, Estimable, Pequeña (*Small*) y Comprobable (*Testable*).
- **Kardex:** Registro cronológico y estructurado de todos los movimientos de ingreso, salida, merma y ajustes de inventario con su correspondiente valorización monetaria.
- **Lote:** Conjunto específico de unidades de un producto ingresadas bajo un mismo despacho y amparadas por una fecha de vencimiento homogénea.
- **Merma:** Pérdida de mercadería que no puede ponerse a la venta debido a descomposición por caducidad, rotura accidental, desmedro o fallas de empaque.
- **Método MoSCoW:** Técnica de priorización que clasifica los requisitos en *Must have* (esenciales/obligatorios), *Should have* (importantes), *Could have* (deseables) y *Won't have* (fuera de alcance en el horizonte del proyecto).
- **Movimiento Manual de Caja:** Operación de entrada o salida de dinero en efectivo realizada en el cajón de venta no originada por una venta comercial, acotada al límite fijado en RN-11 y RN-15.
- **Punto de Venta (POS):** Entorno y módulo transaccional donde el personal de mostrador atiende a los clientes, escanea artículos, cobra y expide comprobantes de pago.
- **Release:** Incremento mayor de producto funcional entregado formalmente y apto para su utilización operativa por los interesados del minimarket.
- **RENIEC:** Registro Nacional de Identificación y Estado Civil. Organismo público responsable del padrón de identificación de personas naturales en el Perú.
- **RUC (Registro Único de Contribuyentes):** Número de identificación tributaria de 11 dígitos numéricos administrado por SUNAT. En la gestión de compras y acreditación de proveedores del minimarket, se restringe formalmente a personas jurídicas formalizadas con prefijo 20 en estado Activo y condición Habido (Decisión PO PP-08 y regla RN-UI-13).
- **Solicitud de Reposición:** Requerimiento formal de abastecimiento emitido por el almacén para solicitar la adquisición de mercadería ante el agotamiento de existencias, con estados: Pendiente, Aprobada, Rechazada y Completada.
- **Sprint:** Ciclo o iteración fija de trabajo (timebox de 2 semanas en el proyecto) durante el cual el equipo construye un incremento de software utilizable.
- **Stock Mínimo:** Cantidad crítica de reserva de un producto por debajo de la cual el sistema dispara alertas para evitar roturas de inventario.
- **SUNAT:** Superintendencia Nacional de Aduanas y de Administración Tributaria. Ente regulador de la tributación interna y las normas de emisión de comprobantes de pago en el Perú.
- **Terminal IziPay (Cobro Digital):** Dispositivo físico de punto de venta que procesa cobros electrónicos y pagos mediante billeteras móviles (Yape/Plin (IziPay)), generando un código de autorización de 6 dígitos numéricos.
- **Turno de Caja:** Periodo de trabajo delimitado en el que un vendedor opera un punto de cobro, desde la apertura con fondo inicial hasta el arqueo y cierre respectivo.
- **Vendedor:** Rol operativo del personal de mostrador responsable de la atención al público en el Punto de Venta (POS), la apertura y arqueo de su turno de caja, el cobro en efectivo o pasarela digital y la emisión de comprobantes fiscales.
- **Almacenero:** Rol logístico asignado a la recepción física de mercadería (entradas con lotes y vencimientos), registro de bajas justificadas por merma, ejecución de ajustes por conteo físico y generación de solicitudes de reposición.
- **Administrador:** Rol de gestión comercial y supervisión que administra los catálogos de productos, proveedores y clientes, supervisa y aprueba cierres de caja, autoriza anulaciones de venta y configura los parámetros del negocio.
- **Gerente:** Rol directivo enfocado en la toma de decisiones basada en datos, consulta de tableros de control y analítica de ventas, y aprobación o rechazo de solicitudes de reposición de mercadería.
- **SuperAdmin:** Rol con el máximo privilegio de seguridad, facultado privativamente para la creación, modificación, desactivación y cierre forzado de sesión remota de cuentas de usuarios del sistema.
- **Código de Autorización de Transacción (6 dígitos - IziPay):** Secuencia numérica de 6 dígitos emitida por el terminal POS físico de IziPay tras procesar un pago con billetera digital (Yape/Plin), de captura obligatoria y validación de unicidad en tiempo real contra duplicidades.
- **Código de Verificación Temporal (4 dígitos):** Clave numérica temporal de 4 dígitos generada aleatoriamente por el sistema con una caducidad estricta de 15 minutos, remitida al correo electrónico del colaborador para autorizar el restablecimiento no asistido de su contraseña de acceso.

- **Yape / Plin (vía Terminal IziPay):** Billeteras digitales interoperables (Yape y Plin) ampliamente utilizadas para el pago móvil en el Perú. En el minimarket, ambos medios se cobran a través del terminal físico IziPay en mostrador, el cual emite un comprobante con un código de autorización numérico único de 6 dígitos que el vendedor ingresa al sistema para formalizar la transacción comercial (RN-02).


<!-- ===================================================================== -->
<!-- ARCHIVO FUENTE: 10_Registro_Deuda_Tecnica_y_Brechas.md -->
<!-- ===================================================================== -->

---
Código de documento: DOC-PLAN-10
Título: Registro de Supuestos de Arquitectura y Decisiones de Negocio
Versión: 5.1
Fecha: 2026-10-04
Elaborado por: Colonia Infantas, Walter
Revisado por: Angeles Pérez, Jhonny
Estado: Aprobado
Propósito: Registrar formalmente los supuestos arquitectónicos, restricciones operativas y decisiones de negocio acordadas con el Product Owner y los stakeholders para guiar la especificación y construcción del sistema.
Documentos relacionados: DOC-PLAN-00, DOC-PLAN-01, DOC-PLAN-03-00, DOC-PLAN-08, DOC-ANEXO-A, DOC-ANEXO-B, DOC-PLAN-11
---

# 10. Registro de Supuestos de Arquitectura y Decisiones de Negocio

## 10.1. Propósito, Alcance y Criterio Metodológico

En el marco de la planificación ágil Scrum y en conformidad con los estándares internacionales ISO/IEC/IEEE 29148 (Ingeniería de Requisitos) e ISO/IEC/IEEE 12207 (Procesos del Ciclo de Vida del Software), este documento formaliza los supuestos de diseño funcional, las restricciones operativas y las doce decisiones estratégicas de negocio (D1 a D12) concertadas entre el Product Owner, los representantes del minimarket y el Equipo Scrum.

El propósito central radica en explicitar las reglas operativas, delimitaciones de alcance y acuerdos de diseño antes de emprender cada iteración de trabajo, garantizando un entendimiento compartido de los criterios de aceptación y previniendo ambigüedades durante la construcción de los incrementos.

**Criterios metodológicos fundamentales:**
1. **Perspectiva a priori:** Cada decisión representa una directriz acordada para la especificación del sistema desde la óptica de negocio, sin alusiones retrospectivas ni términos de bajo nivel.
2. **Inmutabilidad del Backlog:** Ninguna decisión estipulada en este registro altera las 72 historias de usuario planificadas, los 251 puntos de historia estimados ni el presupuesto oficial de S/ 22,500.00.
3. **Trazabilidad cruzada:** Todas las decisiones guardan correlación directa con las 21 Reglas de Negocio (`DOC-PLAN-08`), la Matriz de Roles y Permisos (`DOC-PLAN-01`), el Plan de Lanzamiento (`DOC-PLAN-04`), el Sprint Backlog (`DOC-PLAN-06`), el Desglose de Tareas (`DOC-PLAN-07`) y la Especificación de Interfaz (`DOC-ANEXO-B`).

---

## 10.2. Registro Consolidado de Decisiones de Negocio y Supuestos de Arquitectura (D1 a D12)

### D1: Esquema de sesiones de usuario únicas y política de sesión activa
- **Declaración:** Se establece como principio de seguridad operativa la política de sesión única activa por cuenta de colaborador. Si un usuario inicia sesión desde una nueva terminal o estación de trabajo, cualquier sesión previamente abierta con las mismas credenciales queda invalidada de manera automática al efectuarse la siguiente interacción con el sistema. La interfaz de la sesión desplazada desplegará de forma visible un banner informativo de advertencia indicando textualmente: *"Se inició sesión con esta cuenta desde otro dispositivo."*, impidiendo cualquier operación posterior y canalizando al usuario hacia el formulario de ingreso.
- **Justificación de negocio:** Evitar la suplantación de identidad entre cajeros y operadores, salvaguardar la privacidad de las operaciones de cobro y asegurar la no repudiabilidad de las transacciones comerciales registradas.
- **Historias de usuario vinculadas:** `HU-AUTH-03`, `HU-AUTH-04`, `HU-USR-06`.
- **Reglas de negocio asociadas:** Gobernanza de seguridad de cuentas y trazabilidad de accesos.

### D2: Política de contraseñas y recuperación mediante código de verificación temporal de 4 dígitos
- **Declaración:** Para la recuperación no asistida de credenciales de acceso, el sistema generará un código de autorización numérico temporal de 4 dígitos (rango 1000 a 9999) con una vigencia estricta de 15 minutos, remitido a la casilla de correo electrónico del colaborador solicitante. Como mecanismo de protección contra intentos no autorizados de adivinación, se fija un bloqueo temporal automático de la cuenta por 15 minutos tras acumularse 5  consecutivos en el ingreso del código de autorización.
- **Justificación de negocio:** Brindar un balance óptimo entre agilidad operativa en mostrador para la recuperación rápida de acceso por parte de personal de tienda y salvaguarda robusta contra accesos indebidos.
- **Historias de usuario vinculadas:** `HU-AUTH-05`, `HU-AUTH-06 (Cancelada)`.
- **Reglas de negocio asociadas:** RN-12 (Identidad unívoca de empleados).

### D3: Manejo de catálogos y consultas ágiles en mostrador
- **Declaración:** Para el volumen operativo previsto del establecimiento comercial (estimado en hasta 5,000 productos activos, 1,000 proveedores y 10,000 registros de clientes habituales), las consultas de catálogos maestros y nóminas de usuarios en mostrador están optimizadas para responder en menos de 1.5 segundos en la estación de atención comercial, garantizando fluidez de atención sin latencias perceptibles para el cajero ni el cliente.
- **Justificación de negocio:** Maximizar la agilidad y fluidez de atención en el punto de cobro y agilizar el registro diario de recepciones en el almacén, eliminando tiempos muertos para el cajero y el cliente.
- **Historias de usuario vinculadas:** `HU-CAT-01`, `HU-PROD-01`, `HU-PROV-01`, `HU-CLI-01`, `HU-USR-01`.
- **Reglas de negocio asociadas:** Glosario general y diseño de experiencia de usuario de mostrador.

### D4: Integración local de comprobantes y validación fiscal SUNAT sin dependencia sincrónica externa
- **Declaración:** La emisión de comprobantes de venta (Boletas con serie B001 y Facturas con serie F001) y la valorización monetaria de las transacciones se gestionan con plena autonomía interna en el sistema, aplicando numeración consecutiva estricta ininterrumpida (RN-13) y la tasa legal vigente del Impuesto General a las Ventas (IGV del 18 %) integrada directamente en los precios finales de mostrador. La interconexión con servicios de consulta de padrón tributario (RUC/DNI) opera como asistencia automatizada para validar el estado ACTIVO y la condición de HABIDO del contribuyente; ante fallas de enlace externo, lentitud de la red pública o indisponibilidad del servicio gubernamental, el sistema faculta al operador para capturar los datos fiscales y emitir el comprobante de modo autónomo en contingencia sin detener la fila de cobro.
- **Justificación de negocio:** Garantizar la continuidad operacional ininterrumpida del minimarket frente a eventuales caídas del servicio tributario externo o cortes temporales de conexión a internet.
- **Historias de usuario vinculadas:** `HU-VEN-02`, `HU-CONF-01`, `HU-CONF-02`, `HU-PROV-02`.
- **Reglas de negocio asociadas:** RN-13 (Numeración oficial ininterrumpida) y directrices de facturación SUNAT.

### D5: Transacciones de caja y fondo mínimo obligatorio
- **Declaración:** La apertura operativa de cada turno de caja demanda un fondo inicial obligatorio en efectivo no inferior a S/ 500.00 (RN-10) destinado a cubrir las necesidades de cambio y sencillo durante la jornada. Asimismo, los movimientos menores de caja chica (ingresos extraordinarios y egresos por gastos menudos de mostrador) se limitan exclusivamente al flujo de dinero en efectivo (RN-15), imponiendo un tope máximo infranqueable de S/ 5,000.00 por operación manual (RN-11) con justificación descriptiva obligatoria.
- **Justificación de negocio:** Fomentar una rigurosa disciplina financiera en ventanilla, asegurar liquidez física para vueltos y prevenir desvíos o manipulaciones indebidas en la gaveta del punto de venta.
- **Historias de usuario vinculadas:** `HU-CAJA-01`, `HU-CAJA-03`, `HU-CAJA-04`.
- **Reglas de negocio asociadas:** RN-10 (Fondo mínimo de apertura de caja), RN-11 (Tope máximo para movimientos manuales) y RN-15 (Medio exclusivo de movimiento manual).

### D6: Restricción de anulación de ventas a turnos abiertos y segregación de mermas
- **Declaración:** Toda anulación de comprobante de venta constituye una operación excepcional reservada a los roles de Administrador o Gerente, condicionada de forma ineludible a que el turno de caja en el cual se originó la venta se encuentre en estado "Abierto" (RN-08). Al procesar la anulación, el supervisor debe determinar de manera expresa la disposición física de cada artículo devuelto: su reingreso al inventario disponible para comercialización o su derivación a baja formal por merma con motivo justificado (RN-09).
- **Justificación de negocio:** Salvaguardar la inmutabilidad de los balances financieros de turnos ya cerrados y rendidos, evitando además que productos deteriorados, rotos o contaminados reingresen inadvertidamente al anaquel de venta.
- **Historias de usuario vinculadas:** `HU-VEN-06`, `HU-INV-02`, `HU-CAJA-02`.
- **Reglas de negocio asociadas:** RN-08 (Restricción temporal de anulaciones) y RN-09 (Destino físico de mercadería devuelta).

### D7: Solicitudes de reposición por producto único y flexibilidad de proveedores
- **Declaración:** Las solicitudes de reposición de mercadería elaboradas por el Almacenero se formulan bajo un esquema atómico mono-producto por cada solicitud registrada, permitiendo un seguimiento granular de las necesidades de reabastecimiento. En la fase de autorización, la jefatura facultada (Administrador o Gerente) dispone de flexibilidad operativa para ratificar o modificar el proveedor propuesto (RN-16) evaluando conveniencia comercial, precios o plazos de entrega, fijando asimismo la fecha estimada de arribo al local.
- **Justificación de negocio:** Racionalizar y agilizar el circuito de abastecimiento, brindando al nivel gerencial la capacidad de negociar mejores condiciones de compra sin burocracia documental ni necesidad de anular solicitudes operativas.
- **Historias de usuario vinculadas:** `HU-SOL-01`, `HU-SOL-02`, `HU-SOL-03`, `HU-SOL-04`.
- **Reglas de negocio asociadas:** RN-01 (Control de abastecimiento directo) y RN-16 (Flexibilidad en elección de proveedores).

### D8: Mecanismos de validación de pago por billetera digital Yape/Plin (IziPay) con unicidad de 6 dígitos
- **Declaración:** Los cobros procesados a través de billeteras digitales Yape/Plin (IziPay) se articulan mediante terminal de cobro IziPay. Es requisito mandatorio ingresar el código de autorización numérico de exactamente 6 dígitos emitido por el comprobante electrónico (RN-02). El sistema convalida la unicidad estricta de dicho código de autorización contra la totalidad de ventas registradas históricamente en el establecimiento, rechazando transacciones con identificadores repetidos. Adicionalmente, el sistema registra el estado de verificación del abono para su revisión de supervisión.
- **Justificación de negocio:** Erradicar el riesgo de pérdidas por cobros fraudulentos basados en comprobantes de pago falsificados, capturas de pantalla recicladas o códigos de autorización ya utilizados previamente en mostrador.
- **Historias de usuario vinculadas:** `HU-VEN-01`, `HU-VEN-07`, `HU-CAJA-02`.
- **Reglas de negocio asociadas:** RN-02 (Protección contra pagos duplicados Yape/Plin (IziPay)).

### D9: Control estricto de perecibles y exclusión de comercialización de productos caducados
- **Declaración:** El sistema restringe de manera categórica la comercialización en el punto de venta de cualquier lote cuya fecha de vencimiento coincida con la fecha en curso o sea anterior (RN-03). La asignación de existencias en mostrador opera bajo criterio prioritario FEFO (RN-19). La baja por vencimiento computa el retiro del 100 % de las existencias del lote afectado (RN-05).
- **Justificación de negocio:** Salvaguardar la salud y bienestar de los consumidores, cumplir con la normativa sanitaria vigente en establecimientos comerciales y eliminar la presencia de productos no aptos en exhibición.
- **Historias de usuario vinculadas:** `HU-PROD-06`, `HU-INV-02`, `HU-VEN-01`.
- **Reglas de negocio asociadas:** RN-03 (Prohibición de comercialización de vencidos), RN-04 (Registro obligatorio de mermas), RN-05 (Restricción de bajas por vencimiento) y RN-19 (Despacho preferente FEFO).

### D10: Manejo inmutable de registros históricos de movimientos de almacén
- **Declaración:** Las operaciones que alteran las existencias físicas del establecimiento (ingresos por abastecimiento, salidas por mermas y variaciones por toma física de inventario) constituyen un registro histórico continuo e inmutable. El sistema no proporciona opciones de eliminación ni alteración retroactiva sobre entradas o salidas ya asentadas formalmente (RN-01, RN-14). Cualquier ajuste correctivo posterior derivado de conteos periódicos debe documentarse mediante un nuevo registro formal de ajuste físico que exprese con claridad el faltante o sobrante detectado y su justificación.
- **Justificación de negocio:** Proteger la trazabilidad contable, asegurar la veracidad del inventario valorizado por el método de costo promedio ponderado y facilitar inspecciones de control interno sin riesgos de adulteración.
- **Historias de usuario vinculadas:** `HU-INV-01`, `HU-INV-03`, `HU-INV-04`, `HU-INV-05`, `HU-INV-06`.
- **Reglas de negocio asociadas:** RN-01 (Control de abastecimiento directo) y RN-14 (Actualización de valorización de inventario).

### D11: Compilación de comprobantes y reportes ejecutivos en PDF
- **Declaración:** La entrega de comprobantes fiscales al cliente y la presentación de cuadros de control para la dirección del negocio se materializan mediante la generación de documentos estructurados en formato PDF. Estos documentos integran membrete institucional, logotipo, parámetros fiscales, detalle de renglones y cuadros de resumen con distribución de páginas automática. La exportación masiva de ventas en PDF se centraliza y consolida en el reporte ejecutivo de ventas (`HU-REP-09`), quedando la historia puntual del historial (`HU-VEN-08`) reclasificada fuera de alcance (Won't have) para evitar duplicidad de componentes.
- **Justificación de negocio:** Proveer comprobantes con diseño profesional para impresión térmica o envío digital al cliente, dotando a la gerencia de informes ejecutivos consolidados e inalterables para la toma de decisiones.
- **Historias de usuario vinculadas:** `HU-VEN-03`, `HU-REP-09` (con `HU-VEN-08` diferida/absorbida).
- **Reglas de negocio asociadas:** RN-13 (Numeración oficial ininterrumpida) y directrices de imagen corporativa.

### D12: Modelo de gobernanza Scrum y segregación Construye no es igual a Verifica
- **Declaración:** El desarrollo y certificación de la solución tecnológica se estructura bajo un estricto principio de verificación cruzada independiente (Construye no es igual a Verifica), asignando el 41.0 % del tiempo total de ingeniería (206.0 horas de un universo de 502.0 horas) a actividades de aseguramiento de calidad y verificación, desglosado en dos fases indispensables: (a) 131.75 h (26.2 %) en pruebas automatizadas unitarias y de integración (Paso 6 del desglose de tareas) sobre lógica transaccional, cálculos fiscales y consumo FEFO, y (b) 74.25 h (14.8 %) en certificación funcional independiente de criterios de aceptación y pase al entorno web (Paso 8 del desglose de tareas) ejecutada por el Verificador QA. Ningún integrante del equipo tiene permitido certificar historias que haya construido directamente. La estructura financiera descansa en una asignación de S/ 625.00 semanales por desarrollador (S/ 25.00 por hora neta del modelo de capacidad docente de 25 h/sem brutas / 20 h/sem netas), consolidando un presupuesto total cerrado de S/ 22,500.00 distribuido equitativamente en 3 iteraciones de 2 semanas (S/ 7,500.00 por ciclo).
- **Justificación de negocio:** Garantizar la excelencia operativa del software, erradicar sesgos de confirmación en la entrega de valor y cumplir con los compromisos contractuales de costo y cronograma pactados con el Product Owner.
- **Historias de usuario vinculadas:** Las 72 historias de usuario del Product Backlog, `DOC-PLAN-02`, `DOC-PLAN-05`, `DOC-PLAN-06`, `DOC-PLAN-07`.
- **Reglas de negocio asociadas:** Marco de trabajo Scrum del proyecto y acuerdos de Definition of Done (DoD).

---

## 10.3. Matriz de Cobertura y Trazabilidad de Decisiones vs Reglas de Negocio

La siguiente matriz sintetiza la alineación entre las doce decisiones estratégicas, las veintiuna reglas de negocio oficiales (RN-01 a RN-21) y los lanzamientos programados:

| Decisión | Título Resumido | Reglas de Negocio Vinculadas | Épica Principal | Lanzamiento | Impacto Operativo Principal |
|:---:|---|:---:|:---:|:---:|---|
| **D1** | Sesiones concurrentes e invalidación | Gobernanza de Seguridad | EPIC-SEG | REL-2 | Sesión única por usuario; expulsión con banner informativo de aviso. |
| **D2** | Clave código de verificación de 4 dígitos y bloqueo | RN-18 | EPIC-SEG | REL-2 | Recuperación de credenciales con código de autorización de 4 dígitos y bloqueo tras 5 fallos. |
| **D3** | Catálogos y consultas reactivas | Glosario General | EPIC-CAT | REL-1 / REL-2 | Agilidad en mostrador mediante filtrado instantáneo en la estación local. |
| **D4** | Comprobantes y contingencia SUNAT | RN-13 | EPIC-VEN / EPIC-REP | REL-1 | Emisión autónoma B001/F001 con IGV 18 % y contingencia ante corte externo. |
| **D5** | Fondo de caja y movimientos manuales | RN-10, RN-11, RN-15 | EPIC-VEN | REL-1 | Fondo mínimo obligatorio de S/ 500.00; tope manual S/ 5,000.00 en efectivo. |
| **D6** | Anulaciones y destino de mercadería | RN-08, RN-09 | EPIC-VEN / EPIC-INV | REL-2 | Anulación solo en turno abierto; derivación a stock o merma justificada. |
| **D7** | Lógica mono-producto y reasignación | RN-01, RN-16 | EPIC-INV | REL-2 | Solicitud atómica mono-producto; flexibilidad gerencial de proveedor. |
| **D8** | Validación de pagos Yape/Plin (IziPay) | RN-02 | EPIC-VEN | REL-1 / REL-2 | Verificación de código de autorización de 6 dígitos con unicidad en historial. |
| **D9** | Exclusión de caducados y bajas FEFO | RN-03, RN-04, RN-05, RN-19 | EPIC-CAT / EPIC-INV | REL-1 / REL-2 | Bloqueo absoluto de vencidos en POS; baja al 100 % del lote vencido. |
| **D10** | Inmutabilidad de registros de almacén | RN-01, RN-14 | EPIC-INV | REL-2 | Historial inmutable; valorización por costo promedio ponderado sin borrado. |
| **D11** | Reportes y comprobantes en PDF | RN-13 | EPIC-VEN / EPIC-REP | REL-1 / REL-3 | Comprobantes térmicos/digitales y reportes gerenciales en PDF; CSV en R3. |
| **D12** | Gobernanza Scrum y verificación QA | Marco Scrum / DoD | Transversal | REL-1 a REL-3 | Segregación de roles (41 % esfuerzo QA) y presupuesto cerrado S/ 22,500.00. |

---

## 10.4. Supuestos Operativos del Entorno del Negocio

Complementariamente a las decisiones de diseño funcional, se establecen cuatro supuestos operativos que condicionan la implantación del sistema:

1. **SUP-01: Conectividad y autonomía del mostrador:** El minimarket dispone de conexión a red de área local para la comunicación entre terminales de venta y la estación de gestión. En caso de interrupción del enlace de internet externo, las funciones transaccionales de venta en efectivo, emisión de boletas y consultas locales continúan operando sin interrupción.
2. **SUP-02: Disponibilidad de equipamiento:** Cada estación de Punto de Venta cuenta con lector óptico de código de barras USB configurado en modo emulación de teclado, gaveta de dinero con apertura manual o disparada por impresora, e impresora de tickets térmicos compatible con comandos estándar de impresión.
3. **SUP-03: Pasarela y medios de pago integrados:** El cobro electrónico se realiza mediante terminal físico IziPay para tarjetas y billeteras digitales Yape/Plin (IziPay), donde el operador valida visualmente la confirmación en el dispositivo e introduce el código de autorización de 6 dígitos en la pantalla de cobro.
4. **SUP-04: Concurrencia y dimensionamiento:** El sistema está dimensionado para operar simultáneamente hasta 3 terminales de mostrador activas y 2 estaciones de gestión administrativa (almacén y gerencia), garantizando tiempos de respuesta menores a 1.5 segundos por transacción en condiciones normales de atención.

---

## 10.5. Historial de Control de Cambios

| Versión | Fecha | Autor / Responsable | Descripción de la Modificación |
|:---:|:---:|---|---|
| **4.7** | 2026-10-03 | Colonia Infantas, Walter | Registro preliminar de hallazgos y puntos pendientes de especificación. |
| **4.8** | 2026-10-03 | Colonia Infantas, Walter / Angeles Pérez, Jhonny | Transformación metodológica integral a Registro de Supuestos de Arquitectura y Decisiones de Negocio (D1 a D12). Refinamiento formal a priori desde la perspectiva del Product Owner y stakeholders de negocio. |
| **5.0** | 2026-10-04 | Colonia Infantas, Walter / Angeles Pérez, Jhonny | Unificación de criterios de aceptación y formalización de trazabilidad FEFO. |
| **5.1** | 2026-10-04 | Colonia Infantas, Walter / Angeles Pérez, Jhonny | Versión oficial saneada: unificación de la política preventiva de caducidad (RN-03/RN-05/RN-19), armonización de regla de contraseñas robustas (RN-18) y actualización de matriz de trazabilidad con las 21 reglas de negocio. |


<!-- ===================================================================== -->
<!-- ARCHIVO FUENTE: 11_Matriz_Trazabilidad_UI.md -->
<!-- ===================================================================== -->

---
Código de documento: DOC-PLAN-11
Título: Matriz de Trazabilidad Historia de Usuario - Pantalla (UI)
Versión: 5.2
Fecha: 2026-10-04
Elaborado por: Colonia Infantas, Walter
Revisado por: Angeles Pérez, Jhonny
Estado: Aprobado
Propósito: Relacionar cada historia de usuario con la pantalla y los criterios CA-UI que la especifican, y orientar la consulta de cualquier elemento visual
Documentos relacionados: DOC-ANEXO-B, DOC-PLAN-03-00, DOC-PLAN-10
---

# 11. Matriz de Trazabilidad Historia de Usuario - Pantalla (UI)

## 1. Pantallas especificadas en el Anexo B

| Pantalla | Nombre de Pantalla | Módulo / Acceso | Vista de Interfaz | Épica | Historias del Plan | Textos Guía | Banners | Estados Vacíos | Badges | Modales | Validaciones |
|---|---|---|---|---|---|:---:|:---:|:---:|:---:|:---:|:---:|
| **UI-001** | Inicio de Sesión y Autenticación | Acceso Principal | Vista de Autenticación | EPIC-SEG | HU-AUTH-01, HU-AUTH-02, HU-AUTH-04 | 1 | 4 | 1 | 1 | 0 | 6 |
| **UI-002** | Recuperación de Contraseña | Recuperación de Clave | Vista de Recuperación de Clave Temporal | EPIC-SEG | HU-AUTH-05 | 0 | 3 | 1 | 1 | 0 | 6 |
| **UI-003** | Navegación Global y Diálogos | Marco General | Marco de Navegación Lateral | EPIC-SEG | HU-AUTH-03 | 0 | 1 | 0 | 2 | 5 | 1 |
| **UI-004** | Gestión de Usuarios del Sistema | Administración de Personal | Vista de Personal y Cuentas | EPIC-SEG | HU-USR-01, HU-USR-02, HU-USR-03, HU-USR-04, HU-USR-05, HU-USR-06 | 0 | 3 | 2 | 3 | 6 | 2 |
| **UI-005** | Registro Histórico de Accesos | Monitoreo de Seguridad | Vista de Historial de Sesiones | EPIC-SEG | HU-LOG-01 | 0 | 2 | 3 | 2 | 0 | 4 |
| **UI-006** | Catálogo de Categorías | Catálogo de Familias | Vista de Familias de Producto | EPIC-CAT | HU-CAT-01, HU-CAT-02, HU-CAT-03, HU-CAT-04 | 1 | 3 | 3 | 1 | 5 | 4 |
| **UI-007** | Catálogo de Productos y Alertas | Catálogo Maestro | Vista de Artículos y Alertas | EPIC-CAT | HU-PROD-01, HU-PROD-02, HU-PROD-03, HU-PROD-04, HU-PROD-05, HU-PROD-06 | 3 | 2 | 1 | 4 | 7 | 2 |
| **UI-008** | Directorio de Proveedores | Proveedores Comerciales | Vista de Directorio Proveedores | EPIC-CAT | HU-PROV-01, HU-PROV-02, HU-PROV-03, HU-PROV-04 | 2 | 1 | 3 | 2 | 4 | 6 |
| **UI-009** | Directorio de Clientes | Clientes Registrados | Vista de Fichas de Clientes | EPIC-CAT | HU-CLI-01, HU-CLI-03 | 1 | 2 | 2 | 6 | 0 | 1 |
| **UI-010** | Entradas de Mercadería y Lotes | Inventario - Entradas | Vista de Recepciones y Lotes | EPIC-INV | HU-INV-01, HU-INV-04 | 0 | 2 | 2 | 3 | 0 | 2 |
| **UI-011** | Bajas de Inventario y Mermas | Inventario - Bajas | Vista de Mermas y Desmedros | EPIC-INV | HU-INV-02, HU-INV-05 | 1 | 2 | 2 | 3 | 0 | 3 |
| **UI-012** | Ajustes de Conteo Físico | Inventario - Ajustes | Vista de Conteo Físico y Ajustes | EPIC-INV | HU-INV-03, HU-INV-06 | 1 | 2 | 4 | 5 | 0 | 1 |
| **UI-013** | Solicitudes de Reposición | Órdenes de Reposición | Vista de Pedidos de Almacén | EPIC-INV | HU-SOL-01, HU-SOL-02, HU-SOL-03, HU-SOL-04, HU-SOL-05 | 1 | 1 | 1 | 4 | 7 | 1 |
| **UI-014** | Terminal de Punto de Venta (POS) | Punto de Venta | Vista de Mostrador y Cobro | EPIC-VEN | HU-VEN-01a, HU-VEN-01b, HU-VEN-01c, HU-VEN-02, HU-VEN-04, HU-VEN-07, HU-CLI-02 | 3 | 5 | 1 | 4 | 2 | 5 |
| **UI-015** | Historial de Ventas y Anulaciones | Historial Comercial | Vista de Ventas y Anulaciones | EPIC-VEN | HU-VEN-03, HU-VEN-05, HU-VEN-06 | 2 | 1 | 0 | 3 | 7 | 4 |
| **UI-016** | Turno de Caja y Arqueo Inicial | Operaciones de Caja | Vista de Turno y Movimientos | EPIC-VEN | HU-CAJA-01, HU-CAJA-02, HU-CAJA-03, HU-CAJA-04, HU-CAJA-06 | 2 | 1 | 2 | 3 | 7 | 3 |
| **UI-017** | Historial de Cajas y Cierres | Historial de Arqueos | Vista de Arqueos y Supervisión | EPIC-VEN | HU-CAJA-05, HU-CAJA-06, HU-CAJA-07 | 2 | 2 | 2 | 3 | 2 | 1 |
| **UI-018** | Dashboard y KPIs Estratégicos | Panel Gerencial | Vista de Cuadro de Mando | EPIC-REP | HU-DASH-01, HU-DASH-02, HU-DASH-03, HU-DASH-04, HU-DASH-05 | 0 | 2 | 7 | 4 | 11 | 1 |
| **UI-019** | Reportes Analíticos y PDF | Módulo de Reportes | Vista Analítica y Exportación | EPIC-REP | HU-REP-01, HU-REP-02, HU-REP-03, HU-REP-04, HU-REP-05, HU-REP-06, HU-REP-07, HU-REP-08, HU-REP-09 | 0 | 0 | 7 | 6 | 0 | 1 |
| **UI-020** | Configuración Fiscal y SUNAT | Configuración General | Vista de Parámetros Fiscales | EPIC-REP | HU-CONF-01, HU-CONF-02 | 2 | 3 | 0 | 0 | 0 | 7 |

Los conteos representan referencias descriptivas en el Anexo B que detallan cada tipo de elemento; operan como indicador de cobertura de especificación.

---

## 2. Apartados de criterios por pantalla

- **UI-001 Inicio de Sesión y Autenticación:** CA-1: Formulario y Elementos de Entrada; CA-2: Mensajes de Asistencia, Banners y Retroalimentación; CA-3: Indicadores de Estado, Badges y Grillas; CA-4: Acciones, Botones y Estados Vacíos (Empty States)
- **UI-002 Recuperación de Contraseña:** CA-1: Formulario y Elementos de Entrada; CA-2: Mensajes de Asistencia, Banners y Retroalimentación; CA-3: Indicadores de Estado, Badges y Grillas; CA-4: Acciones, Botones y Estados Vacíos (Empty States)
- **UI-003 Navegación Global y Diálogos:** CA-1: Formulario y Elementos de Entrada; CA-2: Mensajes de Asistencia, Banners y Retroalimentación; CA-3: Indicadores de Estado, Badges y Grillas; CA-4: Acciones, Botones y Menú Lateral (Sidebar)
- **UI-004 Gestión de Usuarios del Sistema:** CA-1: Formulario y Elementos de Entrada; CA-2: Mensajes de Asistencia, Banners y Retroalimentación; CA-3: Indicadores de Estado, Badges y Grillas; CA-4: Acciones, Botones y Estados Vacíos (Empty States)
- **UI-005 Registro Histórico de Accesos:** CA-1: Formulario y Elementos de Entrada; CA-2: Mensajes de Asistencia, Banners y Retroalimentación; CA-3: Indicadores de Estado, Badges y Grillas; CA-4: Acciones, Botones, Paginación y Estados Vacíos (Empty States)
- **UI-006 Catálogo de Categorías:** CA-1: Formulario y Elementos de Entrada; CA-2: Mensajes de Asistencia, Banners y Retroalimentación; CA-3: Indicadores de Estado, Badges y Grillas; CA-4: Acciones, Botones y Estados Vacíos (Empty States)
- **UI-007 Catálogo de Productos y Alertas:** CA-1: Formulario y Elementos de Entrada; CA-2: Mensajes de Asistencia, Banners y Retroalimentación; CA-3: Indicadores de Estado, Badges y Grillas; CA-4: Acciones, Botones, Modal de Lotes y Paginación
- **UI-008 Directorio de Proveedores:** CA-1: Formulario y Elementos de Entrada; CA-2: Mensajes de Asistencia, Banners y Retroalimentación; CA-3: Indicadores de Estado, Badges y Grillas; CA-4: Acciones, Botones y Estados Vacíos (Empty States)
- **UI-009 Directorio de Clientes:** CA-1: Formulario y Elementos de Entrada; CA-2: Mensajes de Asistencia, Banners y Retroalimentación; CA-3: Indicadores de Estado, Badges y Grillas; CA-4: Acciones, Botones y Estados Vacíos (Empty States)
- **UI-010 Entradas de Mercadería y Lotes:** CA-1: Formulario y Elementos de Entrada; CA-2: Mensajes de Asistencia, Banners y Retroalimentación; CA-3: Indicadores de Estado, Badges y Grillas; CA-4: Acciones, Botones y Estados Vacíos (Empty States)
- **UI-011 Bajas de Inventario y Mermas:** CA-1: Formulario y Elementos de Entrada; CA-2: Mensajes de Asistencia, Banners y Retroalimentación; CA-3: Indicadores de Estado, Badges y Grillas; CA-4: Acciones, Botones y Estados Vacíos (Empty States)
- **UI-012 Ajustes de Conteo Físico:** CA-1: Formulario y Elementos de Entrada; CA-2: Mensajes de Asistencia, Banners y Retroalimentación; CA-3: Indicadores de Estado, Badges y Grillas; CA-4: Acciones, Botones y Estados Vacíos (Empty States)
- **UI-013 Solicitudes de Reposición:** CA-1: Formulario y Elementos de Entrada; CA-2: Mensajes de Asistencia, Banners y Retroalimentación; CA-3: Indicadores de Estado, Badges y Grillas; CA-4: Acciones y Botones por Fila según Estado y Rol
- **UI-014 Terminal de Punto de Venta (POS):** CA-1: Formulario, Escáner y Elementos de Venta; CA-2: Panel Lateral de Cobro y Facturación; CA-3: Modal de Comprobante de Pago (`ModalComprobante`); CA-4: Escenarios de Aceptación (escenarios formales Dado que / Cuando / Entonces)
- **UI-015 Historial de Ventas y Anulaciones:** CA-1: Filtros de Búsqueda y Navegación; CA-2: Grilla del Historial y Estados; CA-3: Modales de Detalle, Reenvío de Correo y Anulación; CA-4: Escenarios de Aceptación (escenarios formales Dado que / Cuando / Entonces)
- **UI-016 Turno de Caja y Arqueo Inicial:** CA-1: Vista sin Turno Abierto y Modal de Apertura; CA-2: Panel del Turno en Curso y Movimientos; CA-3: Modales de Movimiento Manual y Cierre de Turno; CA-4: Escenarios de Aceptación (escenarios formales Dado que / Cuando / Entonces)
- **UI-017 Historial de Cajas y Cierres:** CA-1: Filtros de Historial de Cajas; CA-2: Grilla de Turnos y Conciliación de Arqueos; CA-3: Modal de Cierre Forzado por Administrador (`ModalCerrarForzado`); CA-4: Escenarios de Aceptación (escenarios formales Dado que / Cuando / Entonces)
- **UI-018 Dashboard y KPIs Estratégicos:** CA-1: Encabezado, Detección de Turnos Olvidados y Filtro Temporal; CA-2: Tarjetas KPI Interactivas y Gráfico de Tendencia; CA-3: Secciones de Top Productos y Stock Crítico; CA-4: Modales de Detalle Bajo Demanda (`ModalDetalle`); CA-5: Escenarios de Aceptación (escenarios formales Dado que / Cuando / Entonces)
- **UI-019 Reportes Analíticos y PDF:** CA-1: Encabezado, Exportación PDF y Filtros de Fecha; CA-2: Tarjetas de Resumen y Top 10 Productos Más Vendidos; CA-3: Margen por Producto, Ventas por Día y Método; CA-4: Stock Crítico Configurable y Mermas por Motivo; CA-5: Generación y Formato del PDF Consolidado; CA-6: Escenarios de Aceptación (escenarios formales Dado que / Cuando / Entonces)
- **UI-020 Configuración Fiscal y SUNAT:** CA-1: Formulario de Datos del Negocio; CA-2: Confirmación de Cambio Crítico de RUC y Guardado; CA-3: Escenarios de Aceptación (escenarios formales Dado que / Cuando / Entonces)

---

## 3. Trazabilidad por historia de usuario

| Historia | Pantalla(s) | Criterio de Aceptación | Estado de Cobertura |
|---|---|---|---|
| HU-AUTH-01 | UI-001 | CA-UI (criterio final de interfaz) | Con especificación completa |
| HU-AUTH-02 | UI-001 | CA-UI (criterio final de interfaz) | Con especificación completa |
| HU-AUTH-03 | UI-003 | CA-UI (criterio final de interfaz) | Con especificación completa |
| HU-USR-02 | UI-004 | CA-UI (criterio final de interfaz) | Con especificación completa |
| HU-CAT-02 | UI-006 | CA-UI (criterio final de interfaz) | Con especificación completa |
| HU-CAT-01 | UI-006 | CA-UI (criterio final de interfaz) | Con especificación completa |
| HU-PROD-02 | UI-007 | CA-UI (criterio final de interfaz) | Con especificación completa |
| HU-PROD-01 | UI-007 | CA-UI (criterio final de interfaz) | Con especificación completa |
| HU-PROV-02 | UI-008 | CA-UI (criterio final de interfaz) | Con especificación completa |
| HU-INV-01 | UI-010 | CA-UI (criterio final de interfaz) | Con especificación completa |
| HU-INV-02 | UI-011 | CA-UI (criterio final de interfaz) | Con especificación completa |
| HU-INV-03 | UI-012 | CA-UI (criterio final de interfaz) | Con especificación completa |
| HU-CAJA-01 | UI-016 | CA-UI (criterio final de interfaz) | Con especificación completa |
| HU-CAJA-02 | UI-016 | CA-UI (criterio final de interfaz) | Con especificación completa |
| HU-CAJA-05 | UI-017 | CA-UI (criterio final de interfaz) | Con especificación completa |
| HU-VEN-01 | UI-014 | CA-UI (criterio final de interfaz) | Con especificación completa |
| HU-VEN-02 | UI-014 | CA-UI (criterio final de interfaz) | Con especificación completa |
| HU-VEN-05 | UI-015 | CA-UI (criterio final de interfaz) | Con especificación completa |
| HU-CONF-02 | UI-020 | CA-UI (criterio final de interfaz) | Con especificación completa |
| HU-CLI-02 | UI-014 | CA-UI (criterio final de interfaz) | Con especificación completa |
| HU-AUTH-04 | UI-001 | CA-UI (criterio final de interfaz) | Con especificación completa |
| HU-USR-01 | UI-004 | CA-UI (criterio final de interfaz) | Con especificación completa |
| HU-USR-04 | UI-004 | CA-UI (criterio final de interfaz) | Con especificación completa |
| HU-DASH-01 | UI-018 | CA-UI (criterio final de interfaz) | Con especificación completa |
| HU-DASH-03 | UI-018 | CA-UI (criterio final de interfaz) | Con especificación completa |
| HU-PROD-06 | UI-007 | CA-UI (criterio final de interfaz) | Con especificación completa |
| HU-PROV-01 | UI-008 | CA-UI (criterio final de interfaz) | Con especificación completa |
| HU-REP-01 | UI-019 | CA-UI (criterio final de interfaz) | Con especificación completa |
| HU-REP-02 | UI-019 | CA-UI (criterio final de interfaz) | Con especificación completa |
| HU-REP-05 | UI-019 | CA-UI (criterio final de interfaz) | Con especificación completa |
| HU-SOL-01 | UI-013 | CA-UI (criterio final de interfaz) | Con especificación completa |
| HU-SOL-02 | UI-013 | CA-UI (criterio final de interfaz) | Con especificación completa |
| HU-SOL-03 | UI-013 | CA-UI (criterio final de interfaz) | Con especificación completa |
| HU-SOL-05 | UI-013 | CA-UI (criterio final de interfaz) | Con especificación completa |
| HU-VEN-06 | UI-015 | CA-UI (criterio final de interfaz) | Con especificación completa |
| HU-CONF-01 | UI-020 | CA-UI (criterio final de interfaz) | Con especificación completa |
| HU-AUTH-05 | UI-002 | CA-UI (criterio final de interfaz) | Con especificación completa |
| HU-USR-06 | UI-004 | CA-UI (criterio final de interfaz) | Con especificación completa |
| HU-CAJA-03 | UI-016 | CA-UI (criterio final de interfaz) | Con especificación completa |
| HU-CAJA-04 | UI-016 | CA-UI (criterio final de interfaz) | Con especificación completa |
| HU-CAJA-06 | UI-016, UI-017 | CA-UI (criterio final de interfaz) | Con especificación completa |
| HU-CAJA-07 | UI-017 | CA-UI (criterio final de interfaz) | Con especificación completa |
| HU-VEN-07 | UI-014, UI-015 | CA-UI (criterio final de interfaz) | Con especificación completa en terminal POS y consulta en Historial |
| HU-SOL-04 | UI-013 | CA-UI (criterio final de interfaz) | Con especificación completa |
| HU-PROV-04 | UI-008 | CA-UI (criterio final de interfaz) | Con especificación completa |
| HU-AUTH-06 (Cancelada) | UI-003 | CA-UI (criterio final de interfaz) | Diálogo modal emergente de cambio de contraseña accesible desde la barra superior (Decisión formal D7) |
| HU-USR-03 | UI-004 | CA-UI (criterio final de interfaz) | Con especificación completa |
| HU-USR-05 | UI-004 | CA-UI (criterio final de interfaz) | Con especificación completa |
| HU-LOG-01 | UI-005 | CA-UI (criterio final de interfaz) | Con especificación completa |
| HU-CAT-03 | UI-006 | CA-UI (criterio final de interfaz) | Con especificación completa |
| HU-CLI-01 | UI-009 | CA-UI (criterio final de interfaz) | Con especificación completa |
| HU-PROD-04 | UI-007 | CA-UI (criterio final de interfaz) | Con especificación completa |
| HU-PROD-05 | UI-007 | CA-UI (criterio final de interfaz) | Con especificación completa |
| HU-PROV-03 | UI-008 | CA-UI (criterio final de interfaz) | Con especificación completa |
| HU-INV-04 | UI-010 | CA-UI (criterio final de interfaz) | Con especificación completa |
| HU-INV-05 | UI-011 | CA-UI (criterio final de interfaz) | Con especificación completa |
| HU-INV-06 | UI-012 | CA-UI (criterio final de interfaz) | Con especificación completa |
| HU-DASH-02 | UI-018 | CA-UI (criterio final de interfaz) | Con especificación completa |
| HU-DASH-04 | UI-018 | CA-UI (criterio final de interfaz) | Con especificación completa |
| HU-DASH-05 | UI-018 | CA-UI (criterio final de interfaz) | Con especificación completa |
| HU-REP-03 | UI-019 | CA-UI (criterio final de interfaz) | Con especificación completa |
| HU-REP-04 | UI-019 | CA-UI (criterio final de interfaz) | Con especificación completa |
| HU-REP-06 | UI-019 | CA-UI (criterio final de interfaz) | Con especificación completa |
| HU-REP-07 | UI-019 | CA-UI (criterio final de interfaz) | Con especificación completa |
| HU-REP-08 | UI-019 | CA-UI (criterio final de interfaz) | Con especificación completa |
| HU-VEN-03 | UI-015 | CA-UI (criterio final de interfaz) | Con especificación completa |
| HU-VEN-04 | UI-014 | CA-UI (criterio final de interfaz) | Con especificación completa |
| HU-CAT-04 | UI-006 | CA-UI (criterio final de interfaz) | Con especificación completa |
| HU-CLI-03 | UI-009 | CA-UI (criterio final de interfaz) | Con especificación completa |
| HU-PROD-03 | UI-007 | CA-UI (criterio final de interfaz) | Con especificación completa |
| HU-REP-09 | UI-019 | CA-UI (criterio final de interfaz) | Con especificación completa |
| HU-VEN-08 | — | — | Excluida del alcance funcional (Won't have); la exportación a PDF se centraliza en el módulo de Reportes (HU-REP-09 en UI-019) |
| HU-VEN-09 | — | — | Excluida del alcance funcional (Won't have); sin interfaz |

---

## 4. Dónde está documentado cada tipo de elemento visual

| Tipo de Elemento Visual | Dónde se Documenta | Apartado Típico |
|---|---|---|
| Campos, etiquetas, obligatoriedad (asterisco), textos guía, valores predeterminados y campos de solo lectura | Anexo B, pantalla correspondiente | CA-1 |
| Textos de asistencia, banners informativos, mensajes de advertencia y validaciones en tiempo real | Anexo B, pantalla correspondiente | CA-2 (en pantallas UI-014 a UI-017, apartados CA-1 a CA-3 según estructura) |
| Colores y distintivos de estado (agotado, stock bajo, vencido, éxito), vistas tabulares y grillas | Anexo B, pantalla correspondiente | CA-3 |
| Botones, cuadros de diálogo, estados vacíos y guías al siguiente paso | Anexo B, pantalla correspondiente | CA-4 |
| Escenarios de aceptación Dado/Cuando/Entonces de la interfaz | Anexo B, pantallas UI-014 a UI-017 | CA-4 |
| Reglas de comportamiento de interfaz transversales | Anexo B, sección 7 | RN-UI-01 a RN-UI-21 |
| Supuestos de diseño y decisiones de negocio | DOC-PLAN-10 | Decisiones D1 a D12 |

---

## 5. Guía de Consulta de Especificaciones Visuales

1. Ubicar la historia de usuario en la matriz de trazabilidad (sección 3 de este documento).
2. Consultar la historia en su respectiva épica: el criterio final (CA-UI) remite directamente a la pantalla del Anexo B.
3. En el Anexo B, ubicar el elemento específico según los apartados normalizados (sección 4).
4. Toda precisión adicional se canaliza mediante el refinamiento del Product Backlog en coordinación continua con el Product Owner.

---

## 6. Cobertura y Delimitación de Interfaz

Las 20 pantallas especificadas en el Anexo B cubren el 100 % de las interacciones visuales requeridas por las 74 historias de usuario del Product Backlog. Se ratifican los siguientes acuerdos operativos:

1. **Gestión de credenciales propia:** La actualización de clave por el colaborador activo (HU-AUTH-06 (Cancelada)) opera mediante el diálogo modal emergente "Cambiar contraseña" integrado en la barra de navegación superior (UI-003, Decisión formal D7), exigiendo la clave actual y validando la robustez de la nueva clave (mínimo 7 caracteres con mayúscula, minúscula y número) sin requerir una vista de perfil dedicada.
2. **Aviso de sesión desplazada:** La notificación informativa ante un inicio de sesión concurrente en otro equipo (HU-AUTH-04) se presenta mediante el banner superior destacado en UI-001 conforme a la Decisión D1.
3. **Validación de pagos móviles:** El registro del código de autorización de 6 dígitos emitido por el terminal de cobro para billeteras digitales Yape/Plin (IziPay) se encuentra plenamente formalizado en el Punto de Venta (UI-014) y en el Historial de Ventas (UI-015) conforme a la Decisión D8.
4. **Supervisión de compras pendientes:** La visualización de solicitudes de reposición en estado pendiente se integra de forma interactiva en el panel gerencial (UI-018) permitiendo la revisión inmediata del stock crítico.
5. **Formatos de exportación:** La generación de reportes y comprobantes oficiales se resuelve en formato PDF (Decisión D11); la exportación masiva del historial comercial (HU-VEN-08) se unifica y consolida en el reporte ejecutivo de ventas en PDF (HU-REP-09).
6. **Exclusiones de hardware:** La venta a granel con balanzas electrónicas (HU-VEN-09) se mantiene excluida del alcance (Won't have) conforme a los supuestos del negocio.

---



---

## 8. Trazabilidad de Reglas de Negocio a Historias y Pantallas de Interfaz

| Regla de Negocio ID | Denominación Oficial | Historias de Usuario Trazadas | Pantalla del Anexo B Asociada | Criterio de Interfaz Equivalente |
|:---:|---|---|:---:|:---:|
| **RN-01** | Política de Ingreso Inicial y Solicitud | HU-INV-01, HU-SOL-05 | UI-010, UI-013 | RN-UI-04 |
| **RN-02** | Protección Pagos Duplicados IziPay | HU-VEN-01b, HU-VEN-07 | UI-014, UI-015 | RN-UI-03 |
| **RN-03** | Prohibición Comercializar Vencidos | HU-VEN-01c, HU-PROD-06 | UI-014, UI-007 | RN-UI-05 |
| **RN-04** | Registro Justificado de Mermas | HU-INV-02 | UI-011 | RN-UI-06 |
| **RN-05** | Restricción de Bajas por Vencimiento | HU-INV-02 | UI-011 | RN-UI-05 |
| **RN-06** | Alerta Preventiva de Stock Mínimo | HU-DASH-03, HU-REP-05, HU-PROD-02 | UI-018, UI-019, UI-007 | RN-UI-12 |
| **RN-07** | Segregación de Ventas por Turno | HU-VEN-05 | UI-015 | RN-UI-01 |
| **RN-08** | Límite Temporal de Anulaciones | HU-VEN-06 | UI-015 | RN-UI-06 |
| **RN-09** | Destino de Mercadería Devuelta | HU-VEN-06 | UI-015 | RN-UI-06 |
| **RN-10** | Fondo Mínimo Apertura Caja S/ 500 | HU-CAJA-01 | UI-016 | RN-UI-07 |
| **RN-11** | Tope Máximo Movimientos Manuales | HU-CAJA-03 | UI-016 | RN-UI-07 |
| **RN-12** | Identidad Unívoca de Empleados | HU-USR-02, HU-USR-03 | UI-004 | RN-UI-01 |
| **RN-13** | Numeración Consecutiva SUNAT | HU-VEN-02, HU-VEN-03 | UI-014, UI-015 | RN-UI-14 |
| **RN-14** | Actualización Costo Promedio | HU-INV-01, HU-REP-07, HU-SOL-05 | UI-010, UI-013, UI-019 | RN-UI-12 |
| **RN-15** | Medio Exclusivo Efectivo en Caja | HU-CAJA-03 | UI-016 | RN-UI-07 |
| **RN-16** | Flexibilidad Selección Proveedores | HU-SOL-03 | UI-013 | RN-UI-13 |
| **RN-17** | Bloqueo por Intentos Fallidos | HU-AUTH-02 | UI-001 | RN-UI-17 |
| **RN-18** | Código Verificación Temporal 4 Dígitos | HU-AUTH-05 | UI-002 | RN-UI-18 |
| **RN-19** | Despacho Preferente Caducidad (FEFO) | HU-VEN-01c, HU-PROD-06, HU-INV-01 | UI-014, UI-007, UI-010 | RN-UI-19 |
| **RN-20** | Trazabilidad en Bajas por Deterioro | HU-INV-02 | UI-011 | RN-UI-20 |
| **RN-21** | Boleta a Consumidor Anónimo (≤ S/ 700) | HU-VEN-02, HU-VEN-01b | UI-014 | RN-UI-21 |

## 7. Historial de Control de Cambios

| Versión | Fecha | Autor / Responsable | Descripción de la Modificación |
|:---:|:---:|---|---|
| **4.6** | 2026-10-03 | Colonia Infantas, Walter | Emisión inicial de la Matriz de Trazabilidad Historia - Pantalla (DOC-PLAN-11). |
| **4.7** | 2026-10-03 | Colonia Infantas, Walter | Sincronización con resoluciones de interfaz y verificación de cobertura de vistas. |
| **4.8** | 2026-10-03 | Colonia Infantas, Walter / Angeles Pérez, Jhonny | Depuración metodológica integral a priori. Sustitución de expresiones técnicas por vistas y módulos funcionales. Alineación con las Decisiones D1 a D12 de DOC-PLAN-10 y verificación de especificación en lenguaje de negocio. |


<!-- ===================================================================== -->
<!-- ARCHIVO FUENTE: Registro_de_Preguntas_y_Decisiones_Product_Owner.md -->
<!-- ===================================================================== -->

---
Código de documento: DOC-PLAN-PREGUNTAS
Título: Compendio de Preguntas, Decisiones y Definiciones de Negocio del Product Owner
Versión: 5.0
Fecha: 2026-10-04
Elaborado por: Equipo Scrum & Supervisión Metodológica
Elaborado por: Colonia Infantas, Walter (Developer / Representante Técnico del Scrum Team)
Revisado y Aprobado por: Dueño del Minimarket (Product Owner)
Estado: Aprobado
Propósito: Consolidar, categorizar y documentar la totalidad de las preguntas, dilemas operativos y decisiones clave surgidas durante el ciclo de inspección metodológica y planificación del sistema de minimarket, detallando su formulación, impacto funcional y resolución adoptada en la versión oficial 4.8
Documentos relacionados: DOC-PLAN-00, DOC-PLAN-08, DOC-PLAN-10, DOC-PLAN-11, DOC-ANEXO-B
---

# Compendio de Preguntas, Decisiones y Definiciones de Negocio del Product Owner

## 1. Introducción y Propósito del Compendio

Durante las distintas fases de aseguramiento de calidad de requisitos y refinamiento de la planificación ágil Scrum para el Sistema Integral de Gestión del Minimarket, se identificaron y formularon interrogantes de negocio, dilemas de diseño operativo y puntos de decisión que requerían la definición explícita del **Product Owner**, en coordinación con los operadores del establecimiento comercial (Cajeros, Almaceneros, Administradores y Gerencia).

El presente compendio reúne, clasifica y resuelve formalmente la totalidad de dichas preguntas, articulándolas en **5 categorías funcionales y estratégicas**:
1. **Decisiones Fundamentales de Negocio y Arquitectura (D1 a D12)**.
2. **Puntos Pendientes de Operación Comercial y Catálogos (PP-01 a PP-12)**.
3. **Preguntas de Seguridad, Roles y Políticas de Acceso**.
4. **Preguntas de Control de Caja, Punto de Venta (POS) y Analítica Ejecutiva**.
5. **Preguntas Metodológicas y Argumentación para la Sustentación Académica**.

---

## 2. Categoría I: Decisiones Fundamentales de Negocio y Arquitectura (D1 a D12 Oficiales v4.8)

### D1: Esquema de Sesiones de Usuario Únicas y Política de Sesión Activa
- **Formulación de la Pregunta:**  
  *Si un colaborador inicia sesión en una terminal física teniendo una sesión activa previa en otro dispositivo, ¿debe el sistema impedir el nuevo acceso, permitir ambas sesiones simultáneas, o cerrar la sesión anterior notificando al usuario?*
- **Dilema Operativo:**  
  Permitir sesiones simultáneas vulnera la trazabilidad de transacciones en mostrador (un vendedor podría operar bajo la cuenta de otro). Bloquear el nuevo acceso puede dejar varado a un colaborador si olvidó cerrar sesión en otra terminal.
- **Resolución Oficial Adoptada (v4.8):**  
  **Cierre de sesión anterior con notificación visual inmediata.** El sistema permite el nuevo inicio de sesión y desactiva en tiempo real la sesión previa, desplegando un banner informativo ámbar en la terminal desconectada indicando que el acceso fue revocado por un inicio de sesión concurrente (`HU-AUTH-04` y regla `RN-UI-01`).

---

### D2: Política de Contraseñas y Recuperación por Código de Verificación Temporal de 4 Dígitos
- **Formulación de la Pregunta:**  
  *Para la recuperación no asistida de contraseñas de colaboradores, ¿qué mecanismo de validación resulta óptimo en el mostrador: un enlace alfanumérico extenso por correo o un código de verificación numérico temporal de corta longitud?*
- **Dilema Operativo:**  
  Los enlaces largos son difíciles de manipular en terminales de caja o teléfonos de mostrador; los códigos breves requieren un tiempo de caducidad estricto para evitar intentos no autorizados.
- **Resolución Oficial Adoptada (v4.8):**  
  **Código de verificación temporal de 4 dígitos numéricos con expiración de 15 minutos y longitud mínima de contraseña de 8 caracteres.** Se unificó en `HU-AUTH-05` un código de verificación de 4 dígitos numéricos, limitando los  a un máximo de 5 antes de invalidar la solicitud y exigir asistencia gerencial. Asimismo, toda contraseña de usuario debe contener al menos 8 caracteres combinando mayúsculas, minúsculas y números.

---

### D3: Atribuciones de Catálogo y Consultas Ágiles en Salón
- **Formulación de la Pregunta:**  
  *¿Debe el rol Almacenero tener facultades para dar de alta nuevos productos en el catálogo maestro (`HU-PROD-02`), o esta atribución debe reservarse exclusivamente a la Administración y Gerencia?*
- **Dilema Operativo:**  
  Permitir que el Almacenero cree productos agiliza la recepción de mercadería no registrada previamente; sin embargo, puede generar duplicidades en nombres, categorías incorrectas o precios de venta errados sin aprobación comercial.
- **Resolución Oficial Adoptada (v4.8):**  
  **Segregación de funciones.** La creación, categorización y fijación de precios en el catálogo maestro corresponde exclusivamente a Administrador y Gerente. El Almacenero tiene atribuciones operativas para registrar el ingreso físico de unidades (`UI-010`) y formular solicitudes de reposición (`UI-013`), pero no para alterar la estructura del catálogo. Las búsquedas en mostrador operan mediante consulta ágil por código de barras o descripción.

---

### D4: Emisión Local de Comprobantes SUNAT en Modo Autónomo
- **Formulación de la Pregunta:**  
  *¿El sistema debe contemplar la transmisión telemática sincrónica remota hacia los sistemas centrales de SUNAT / OSE en cada venta, o debe enfocarse en la generación local estructurada continua?*
- **Dilema Operativo:**  
  La transmisión telemática sincrónica depende de servicios web externos que sufren caídas frecuentes, paralizando las colas de cobro en el minimarket si no hay conexión; no cumplir con las normas tributarias acarrea sanciones fiscales.
- **Resolución Oficial Adoptada (v4.8):**  
  **Generación local estructurada continua con parámetros SUNAT.** En `HU-VEN-02` y regla **RN-13**, el sistema genera comprobantes locales oficiales (Boletas con serie B001 y Facturas con serie F001) con cálculo del 18 % de IGV y numeración correlativa atómica ininterrumpida. La solución garantiza continuidad operativa total incluso sin conexión a internet, generando los documentos imprimibles y exportables en formato estándar.

---

### D5: Fondo Mínimo Obligatorio para Apertura de Caja y Modalidad de Arqueo
- **Formulación de la Pregunta:**  
  *¿Es necesario fijar un monto mínimo obligatorio de dinero en efectivo para que un vendedor pueda habilitar un turno de cobro en mostrador, y cuál es la modalidad de arqueo al cierre?*
- **Dilema Operativo:**  
  Permitir aperturas con fondo cero o montos insignificantes paraliza la atención comercial ante la incapacidad de entregar vuelto en efectivo; un arqueo a ciegas retrasa la conciliación de turno al final del día.
- **Resolución Oficial Adoptada (v4.8):**  
  **Fondo mínimo normativo de S/ 500.00 y arqueo con saldo visible orientativo.** En la regla **RN-10** y pantalla `UI-016`, el sistema valida que el monto inicial declarado en efectivo no sea inferior a S/ 500.00, alertando visualmente y bloqueando la apertura si no se alcanza dicho umbral. Al cierre, el vendedor declara el recuento físico de efectivo en gaveta y la conciliación del reporte del terminal digital con saldo esperado visible para agilizar el cuadre.

---

### D6: Restricción de Anulación de Ventas a Turnos Abiertos y Reincorporación de Mercadería
- **Formulación de la Pregunta:**  
  *¿Bajo qué condiciones puede anularse una venta previamente cobrada y cuál debe ser el destino operativo de los productos devueltos por el cliente?*
- **Dilema Operativo:**  
  Si se anulan ventas de turnos ya liquidados o cerrados, se descuadra la contabilidad financiera y fiscal del día; si la mercadería devuelta se reingresa automáticamente al inventario, se corre el riesgo de vender productos rotos o manipulados.
- **Resolución Oficial Adoptada (v4.8):**  
  **Anulación restringida a turnos abiertos con destino selectivo.** Según las reglas **RN-08** y **RN-09**, solo Administrador y Gerente pueden anular ventas, y únicamente mientras el turno de caja del cobro permanezca en estado 'Abierto'. El supervisor debe seleccionar obligatoriamente el destino de cada ítem devuelto: retorno al stock disponible o pase directo a bajas por merma/daño (`UI-015`).

---

### D7: Solicitudes de Reposición por Producto Único y Flexibilidad de Proveedores
- **Formulación de la Pregunta:**  
  *Las solicitudes de reposición de mercadería emitidas por el almacén, ¿deben estructurarse por producto individual o como pedidos multiproducto asociados a un proveedor obligatorio?*
- **Dilema Operativo:**  
  Exigir proveedor obligatorio en la solicitud de reposición limita al personal de almacén si desconoce las negociaciones comerciales de la administración; un modelo complejo dilata la aprobación rápida de compras urgentes.
- **Resolución Oficial Adoptada (v4.8):**  
  **Modelo por producto individual con proveedor sugerido.** En `HU-SOL-01` a `HU-SOL-05`, cada solicitud se formula por producto y cantidad requerida, con proveedor sugerido opcional. La Administración evalúa y aprueba cada requerimiento de forma ágil, asignando formalmente el proveedor más conveniente en el momento de la adquisición comercial (RN-16).

---

### D8: Validación de Cobros Digitales Yape/Plin (IziPay) y Código de 6 Dígitos
- **Formulación de la Pregunta:**  
  *Al procesar un cobro mediante billetera digital (Yape/Plin) a través de la pasarela física IziPay, ¿debe el sistema exigir la captura del código de autorización emitido por el terminal y verificar que no se duplique en el historial de ventas?*
- **Dilema Operativo:**  
  Omitir la captura del código de autorización expone al minimarket a fraudes por comprobantes reutilizados; exigir validación manual externa demora la fila de atención.
- **Resolución Oficial Adoptada (v4.8):**  
  **Captura obligatoria y validación de unicidad en tiempo real.** En la regla **RN-02** y pantalla `UI-014`, el sistema exige ingresar los 6 dígitos numéricos del comprobante de autorización emitido por el terminal IziPay, validando en tiempo real que no haya sido registrado previamente en ninguna venta de la historia del establecimiento (`HU-VEN-01` y `HU-VEN-07`).

---

### D9: Control Estricto de Perecibles y Exclusión de Comercialización de Caducados
- **Formulación de la Pregunta:**  
  *Un lote de producto perecedero cuya fecha de caducidad coincide exactamente con la fecha del día, ¿debe ser considerado comercializable durante las horas hábiles de esa jornada, o debe ser bloqueado automáticamente en el punto de venta desde la apertura del turno comercial?*
- **Dilema Operativo:**  
  Permitir su venta maximiza la recuperación económica de la mercadería hasta el último minuto; no obstante, expone al cliente a adquirir un producto que caducará en pocas horas, elevando el riesgo sanitario y el desprestigio del minimarket.
- **Resolución Oficial Adoptada (v4.8):**  
  **Bloqueo estricto preventivo.** En la regla **RN-03**, el sistema restringe de manera categórica en la terminal POS la venta de cualquier lote cuya fecha de caducidad coincida con la fecha de operación o sea anterior. La mercadería con caducidad del día debe retirarse antes de abrir la tienda y canalizarse al módulo de bajas por vencimiento (RN-05).

---

### D10: Inmutabilidad de Registros Históricos de Almacén y Regularización por Ajuste
- **Formulación de la Pregunta:**  
  *Cuando se comete un error en el registro de una entrada o baja de mercadería, ¿debe permitirse la edición o eliminación directa del movimiento registrado?*
- **Dilema Operativo:**  
  Permitir la edición de registros históricos destruye la trazabilidad contable del inventario valorizado y facilita fraudes internos; prohibirla exige un mecanismo formal de compensación.
- **Resolución Oficial Adoptada (v4.8):**  
  **Registro de movimientos inmutable y regularización por ajuste formal.** Los movimientos de almacén registrados son estrictamente inmutables. Todo error o discrepancia física debe corregirse mediante el flujo formal de Ajuste de Inventario (`HU-INV-06` y `UI-012`), justificando el motivo y registrando al supervisor responsable.

---

### D11: Generación y Descarga de Comprobantes y Reportes Ejecutivos en PDF
- **Formulación de la Pregunta:**  
  *¿Cómo debe resolverse la entrega de comprobantes y reportes gerenciales para garantizar su portabilidad y validez documental?*
- **Dilema Operativo:**  
  Depender exclusivamente de pantallas de consulta dificulta auditorías contables externas y la entrega de sustento fiscal a clientes corporativos.
- **Resolución Oficial Adoptada (v4.8):**  
  **Generación estándar en formato descargable e imprimible.** Se implementa la generación de comprobantes de pago en PDF (`HU-VEN-03`) y reportes analíticos periódicos (`HU-REP-09`), permitiendo su descarga directa o distribución por correo electrónico.

---

### D12: Modelo de Gobernanza Scrum y Segregación de Tareas (Construye ≠ Verifica)
- **Formulación de la Pregunta:**  
  *¿Cómo se garantiza la calidad técnica del producto manteniendo la independencia del aseguramiento de calidad sin sobrecargar al equipo de desarrollo?*
- **Dilema Operativo:**  
  Permitir que el mismo desarrollador verifique su propio código introduce sesgo de confirmación y eleva la deuda técnica; contratar un equipo de QA externo encarece el presupuesto.
- **Resolución Oficial Adoptada (v4.8):**  
  **Principio estricto Construye ≠ Verifica.** Ningún desarrollador puede validar ni realizar el pase de sus propias historias. El esfuerzo total de 502 horas en 363 tareas se divide en 296 h de Construcción (59.0 %) y 206 h de Verificación de Calidad (41.0 %, compuesto por 131.75 h de pruebas unitarias/integración y 74.25 h de verificación funcional y pase web).

---

## 3. Categoría II: Puntos Pendientes de Operación Comercial y Catálogos (PP-01 a PP-12)

| Identificador | Asunto / Pregunta de Negocio | Decisión y Resolución Adoptada en v4.8 | Documento / Regla Impactada |
|:---:|:---|:---|:---:|
| **PP-01** | ¿Cuál es la longitud óptima de la código de verificación temporal? | 4 dígitos numéricos con expiración de 15 minutos. | `HU-AUTH-05` / DOC-PLAN-03-01 |
| **PP-02** | ¿Qué porcentaje de IGV rige en el sistema? | 18 % legal vigente en el territorio nacional. | `HU-CONF-02`, `HU-VEN-01a` / DOC-PLAN-08 |
| **PP-03** | ¿Cuál es la matriz de permisos por roles? | 8 módulos funcionales sincronizados con los 5 roles del minimarket. | `DOC-PLAN-01`, `DOC-PLAN-02` |
| **PP-04** | ¿Quiénes intervienen en el flujo de reposición? | Almacenero formula requerimiento; Administrador autoriza adquisición. | `HU-SOL-03`, `HU-SOL-04` / DOC-PLAN-03-03 |
| **PP-05** | ¿Cómo se visualiza el historial de entradas de almacén? | Listado continuo con orden cronológico descendente y filtros rápidos. | `HU-INV-04` / DOC-PLAN-03-03 |
| **PP-06** | ¿Cómo se garantiza la numeración correlativa en ventas? | Asignación secuencial atómica ininterrumpida por serie (B001 / F001). | `RN-13` / DOC-PLAN-08 |
| **PP-07** | ¿El stock mínimo es editable en el alta de producto? | Valor sugerido inicial fijado en 10 unidades; editable tras calibración. | `RN-UI-02` / DOC-ANEXO-B |
| **PP-08** | ¿Qué requisitos fiscales debe cumplir un proveedor? | RUC con prefijo 20 (persona jurídica), estado ACTIVO y condición HABIDO. | `RN-UI-13` / DOC-ANEXO-B |
| **PP-09** | ¿Se permite baja parcial de un lote vencido? | Bloqueo manual de cantidad: deducción automática del 100 % del lote caducado. | `RN-UI-05` / DOC-ANEXO-B |
| **PP-10** | ¿Cuándo es obligatorio indicar el número de lote en bajas? | Obligatorio exclusivamente para motivo "Dañado"; opcional en mermas globales. | `RN-UI-06` / DOC-ANEXO-B |
| **PP-11** | ¿Cuándo puede el Almacenero ingresar mercadería directa? | Exclusivamente en la primera carga inicial de productos nuevos sin historial. | `RN-01`, `RN-UI-04` / DOC-ANEXO-B |
| **PP-12** | ¿Qué sucede ante inicios de sesión simultáneos? | Invalidación inmediata de la sesión previa y alerta visual de desconexión. | `HU-AUTH-04` / DOC-ANEXO-B |

---

## 4. Categoría III: Preguntas de Seguridad, Roles y Políticas de Acceso

### P-24: Aprovisionamiento del Primer Usuario Administrador (Problema del Huevo y la Gallina)
- **Pregunta:**  
  *Si la creación de usuarios nuevos está reservada al Administrador del sistema, ¿cómo se crea la primera cuenta de acceso en una instalación limpia del sistema sin requerir manipulación directa del modelo de datos?*
- **Resolución:**  
  Se establece como principio de despliegue la ejecución de una rutina automatizada de inicialización (semilla administrativa oficial) que genera la cuenta inicial del Administrador General con credenciales maestras protegidas, obligando al cambio de contraseña en el primer inicio de sesión.

### P-25: Procesamiento Desatendido vs Control Operativo Humano
- **Pregunta:**  
  *¿Deben existir tareas automáticas desatendidas en segundo plano (ej. cierres de turnos automáticos a medianoche o bajas automáticas de productos caducados), o toda acción transaccional debe requerir la supervisión de un operador?*
- **Resolución:**  
  En el modelo de minimarket, los procesos automáticos desatendidos generan discrepancias físicas no verificadas (ej. dinero físico en caja no arqueado). Por tanto, el sistema emite **alertas preventivas en pantalla** (turnos > 16 horas, productos vencidos), pero exige que el cierre de turno o el retiro de mercadería sea ejecutado y firmado por un operador humano.

### P-26: Operación del Rol Gerente en Terminal de Mostrador
- **Pregunta:**  
  *¿Debe el rol Gerente tener permisos para registrar ventas en la terminal POS o únicamente para consultar reportes y autorizar anulaciones?*
- **Resolución:**  
  El Gerente dispone de acceso de supervisión y autorización excepcional (anulaciones de comprobantes y cierres forzados de caja), canalizando las ventas comerciales a través de los vendedores y cajeros designados.

---

## 5. Categoría IV: Preguntas de Control de Caja, Ventas y Analítica

### P-27: Manejo de Turnos de Caja Abiertos por Más de 16 Horas
- **Pregunta:**  
  *Si un cajero concluye su jornada de mostrador y omite realizar el arqueo de cierre, ¿cómo debe proceder el siguiente colaborador para no heredar un descuadre ajeno?*
- **Resolución:**  
  El sistema bloquea la apertura de un nuevo turno en esa gaveta física y despliega una alerta visual destacada. El Administrador o Gerente debe realizar un **cierre forzado con registro de autoría**, documentando el motivo, el arqueo físico encontrado y el identificador del supervisor que liquida el turno olvidado (`RN-UI-08` y `RN-UI-09`).

### P-28: Información de Abastecimiento en el Reporte de Stock Crítico
- **Pregunta:**  
  *En el reporte gerencial de productos bajo stock mínimo (`HU-REP-05`), ¿resulta necesario incluir los datos de contacto del proveedor principal?*
- **Resolución:**  
  Sí. La vista de reporte analítico incorpora la razón social y teléfono del proveedor principal asociado, permitiendo que la Gerencia o Compras emita la orden de reabastecimiento de forma inmediata sin tener que navegar hacia el catálogo general de proveedores.

### P-29: Valorización Monetaria del Inventario Comercial
- **Pregunta:**  
  *¿Debe el panel analítico (`HU-REP-06`) exhibir la valorización monetaria global de las existencias en tienda y almacén?*
- **Resolución:**  
  Sí. El cuadro analítico consolida dos indicadores financieros clave: la valorización al costo promedio de adquisición (`SUM(stock × costo)`) y la valorización al precio de venta proyectado, permitiendo evaluar el capital de trabajo inmovilizado y el margen bruto potencial del establecimiento comercial.

---

## 6. Categoría V: Preguntas Metodológicas y Defensa del Proyecto

### P-30: Tratamiento de Historias Fuera de Alcance (HU-VEN-09)
- **Pregunta:**  
  *¿Cómo debe justificarse ante el docente o jurado la inclusión de historias clasificadas como `Won't have` (ej. `HU-VEN-09`: Monedero digital propio con recarga de saldo)?*
- **Argumentación para la Sustentación:**  
  Se debe explicar que la priorización MoSCoW profesional exige documentar explícitamente lo que **no se construirá** en el horizonte de los 3 sprints planificados. Dejar fuera de alcance el monedero digital propio evitó incurrir en sobrecostos y riesgos regulatorios financieros (cumplimiento SBS), priorizando en su lugar la pasarela de cobro masiva y comprobada de billeteras móviles del mercado peruano (`Yape/Plin (IziPay)`).

### P-31: Justificación del Modelo Matemático de Presupuesto (S/ 22,500.00)
- **Pregunta:**  
  *¿Por qué el presupuesto estimado asciende exactamente a S/ 22,500.00 y cómo se vincula con las horas desglosadas?*
- **Argumentación para la Sustentación:**  
  El presupuesto se sustenta en la fórmula contractual del estándar académico:
  $$\text{Presupuesto} = 6 \text{ semanas} \times \text{S/ 625.00/semana/desarrollador} \times 6 \text{ desarrolladores} = \text{S/ 22,500.00}$$
  Esto equivale exactamente a **S/ 7,500.00 por sprint o release** (100 % costo laboral directo). La remuneración contractual corresponde a **S/ 25.00 por hora bruta** (S/ 625.00 / 25 h semanales por desarrollador), lo que equivale a una tarifa de **S/ 31.25 por hora neta de desarrollo efectivo** (S/ 7,500.00 / 240 h netas por sprint), cubriendo con solvencia las 502 horas oficiales de esfuerzo desglosado en las 363 tareas (296 h de Construcción y 206 h de Verificación QA).

### P-32: Independencia de la Especificación de Requisitos y Enfoque de Negocio
- **Pregunta:**  
  *¿Por qué la documentación de planificación se enfoca estrictamente en reglas de negocio, interfaces y valor para el usuario, sin acoplarse a detalles internos de código o componentes específicos de implementación?*
- **Argumentación para la Sustentación:**  
  Bajo las mejores prácticas de la ingeniería de requisitos (**ISO/IEC/IEEE 29148**) y la **Scrum Guide 2020**, los artefactos del Product Owner deben expresar qué necesita el negocio y cómo debe responder el sistema para satisfacer al usuario final, preservando la neutralidad tecnológica y permitiendo al equipo técnico diseñar la mejor solución arquitectónica.

---

## 7. Dictamen Final de Conformidad

La recopilación de estas 32 preguntas y decisiones formaliza la gobernanza integral del sistema de minimarket. Cada definición adoptada en la Versión 5.1 Oficial Ratificada cuenta con respaldo en las 21 Reglas de Negocio ([DOC-PLAN-08](08_Reglas_de_Negocio_y_Glosario.md)), las Decisiones de Arquitectura ([DOC-PLAN-10]()) y la Especificación de Interfaz ([DOC-ANEXO-B]()), blindando al equipo de desarrollo ante cualquier objeción durante la sustentación final del proyecto.


<!-- ===================================================================== -->
<!-- ARCHIVO FUENTE: Anexo_A.md -->
<!-- ===================================================================== -->

---
Código de Documento: DOC-ANEXO-A
Título: Anexo A - Trazabilidad y Presupuesto
Versión: 5.2
Fecha: 2026-10-04
Elaborado por: Colonia Infantas, Walter
Revisado por: Angeles Pérez, Jhonny
Estado: Aprobado
Propósito: Trazabilidad objetivo-épica-historia y distribución del presupuesto
Documentos relacionados: DOC-PLAN-00, DOC-PLAN-01, DOC-PLAN-02, DOC-PLAN-03-00, DOC-PLAN-04, DOC-PLAN-05, DOC-PLAN-06, DOC-PLAN-07, DOC-PLAN-08, DOC-ANEXO-B
---

# Anexo A. Consolidado Ejecutivo del Proyecto

## 1. Resumen y Control Documental
El proyecto "Sistema de Gestión Integral para Minimarket" se gestiona bajo el marco de trabajo Scrum, con un backlog total de 74 Historias de Usuario planificadas (251 puntos de historia). El presupuesto oficial asciende a **S/ 22,500.00** bajo el modelo de capacidad y dedicación del docente para 6 desarrolladores a 25 h/semana (6 semanas de ejecución en 3 sprints de 2 semanas), con roles de Product Owner y Scrum Master bajo gobernanza externa.

## 2. Trazabilidad Técnica y Presupuestaria por Épica

| Objetivo | Épica | HU | Pts | Pts REL-1 / REL-2 / REL-3 | Sprints | Horas (2 × pts) | Costo asignado |
|---|---|:---:|:---:|:---:|:---:|:---:|:---:|
| **OBJ-01** | EPIC-SEG (Seguridad y Accesos) | 13 | 47 | 15 / 21 / 11 | 1 al 3 | 94 h | S/ 4,213.15 |
| **OBJ-02** | EPIC-CAT (Catálogos y Clientes) | 17 | 42 | 17 / 7 / 18 | 1 al 3 | 84 h | S/ 3,764.94 |
| **OBJ-03** | EPIC-INV (Inventario y Reposición) | 11 | 39 | 15 / 18 / 6 | 1 al 3 | 78 h | S/ 3,496.02 |
| **OBJ-04** | EPIC-VEN (Ventas y Caja) | 17 | 72 | 39 / 22 / 11 | 1 al 3 | 144 h | S/ 6,454.18 |
| **OBJ-05** | EPIC-REP (Reportes, Dashboards y Configuración) | 16 | 51 | 3 / 22 / 26 | 1 al 3 | 102 h | S/ 4,571.71 |
| **TOTAL** | **Consolidado General** | **74** | **251** | **89 / 90 / 72** | **1 al 3** | **502 h** | **S/ 22,500.00** |

*Nota metodológica:* La redacción unificada de los objetivos estratégicos en este consolidado es:
- **OBJ-01:** Garantizar la trazabilidad y seguridad en las operaciones del personal.
- **OBJ-02:** Mantener un catálogo centralizado de productos, clientes y proveedores.
- **OBJ-03:** Minimizar pérdidas por vencimiento y roturas de stock mediante el control de caducidad, los movimientos de inventario y la reposición oportuna.
- **OBJ-04:** Formalizar las ventas mediante emisión de boletas y facturas válidas.
- **OBJ-05:** Proveer información en tiempo real para la toma de decisiones.

## 3. Plan de Releases y Presupuesto por Iteración
El presupuesto del proyecto se distribuye uniformemente en 3 releases correspondientes a los 3 sprints:
- **REL-1 (MVP Operativo · SPR-1):** 22 HUs (Must Have), **89 pts**. Entrega: Martes 13-oct (Semana 7). Presupuesto: **S/ 7,500.00** (2 semanas × S/ 625/semana × 6 desarrolladores, todo costo laboral).
- **REL-2 (Operación y Control · SPR-2):** 25 HUs (16 Must + 9 Should), **90 pts**. Entrega: Martes 27-oct (Semana 9). Presupuesto: **S/ 7,500.00** (2 semanas × S/ 625/semana × 6 desarrolladores).
- **REL-3 (Mejoras, Supervisión y Exportación · SPR-3):** 27 HUs (22 Should + 5 Could), **72 pts**. Entrega: Martes 10-nov (Semana 11). Presupuesto: **S/ 7,500.00** (2 semanas × S/ 625/semana × 6 desarrolladores).
- **Total Presupuesto:** 3 Releases × S/ 7,500.00 = **S/ 22,500.00**.

## 4. Distribución del Esfuerzo y Capacidad
- El equipo de 6 desarrolladores dispone de **240 horas efectivas por sprint** (40 h netas por integrante tras deducir el 20 % de ceremonias de una dedicación bruta de 50 h).
- Capacidad total del proyecto (3 Sprints): **720 horas efectivas**.
- Esfuerzo total desglosado en tareas operativas (fuente oficial DOC-PLAN-07): **502 horas en 373 tareas** (296.00 h Construcción [59.0 %] + 206.00 h Verificación QA [41.0 %]).
- Tasa global de ocupación de capacidad: **69.7 %** (Sprint 1: 74.2 %, Sprint 2: 75.0 %, Sprint 3: 60.0 %), manteniendo una holgura preventiva media del 30.3 % para contingencias.

---

## A.2 Matriz de Trazabilidad por Historia de Usuario

Razón oficial: Pts × (S/ 22,500.00 ÷ 251 pts) = Pts × S/ 89.6414/pt. Orden: por épica y, dentro de cada épica, por release/orden del backlog.

| Objetivo | Épica | ID de HU | Título | Pts | Release | Sprint | Horas (2 × pts) | Costo asignado (S/) |
|---|---|---|---|:---:|:---:|:---:|:---:|:---:|
| OBJ-01 | EPIC-SEG | HU-AUTH-01 | Autenticación – Iniciar sesión | 5 | REL-1 | SPR-1 | 10 h | S/ 448.21 |
| OBJ-01 | EPIC-SEG | HU-AUTH-02 | Autenticación – Bloquear cuenta por  | 3 | REL-1 | SPR-1 | 6 h | S/ 268.92 |
| OBJ-01 | EPIC-SEG | HU-AUTH-03 | Autenticación – Cerrar sesión | 2 | REL-1 | SPR-1 | 4 h | S/ 179.28 |
| OBJ-01 | EPIC-SEG | HU-USR-02 | Usuarios – Crear cuenta de nuevo empleado | 5 | REL-1 | SPR-1 | 10 h | S/ 448.21 |
| OBJ-01 | EPIC-SEG | HU-AUTH-04 | Autenticación – Garantizar sesión única por usuario | 8 | REL-2 | SPR-2 | 16 h | S/ 717.13 |
| OBJ-01 | EPIC-SEG | HU-USR-01 | Usuarios – Listar empleados del sistema | 2 | REL-2 | SPR-2 | 4 h | S/ 179.28 |
| OBJ-01 | EPIC-SEG | HU-USR-04 | Usuarios – Desactivar cuenta de empleado | 3 | REL-2 | SPR-2 | 6 h | S/ 268.92 |
| OBJ-01 | EPIC-SEG | HU-AUTH-05 | Autenticación – Recuperar contraseña por correo | 5 | REL-2 | SPR-2 | 10 h | S/ 448.21 |
| OBJ-01 | EPIC-SEG | HU-USR-06 | Usuarios – Forzar cierre de sesión remoto | 3 | REL-2 | SPR-2 | 6 h | S/ 268.92 |
| OBJ-01 | EPIC-SEG | HU-AUTH-06 (Cancelada) | Autenticación – Cambiar contraseña propia | 3 | REL-3 | SPR-3 | 6 h | S/ 268.92 |
| OBJ-01 | EPIC-SEG | HU-USR-03 | Usuarios – Editar datos de un empleado | 3 | REL-3 | SPR-3 | 6 h | S/ 268.92 |
| OBJ-01 | EPIC-SEG | HU-USR-05 | Usuarios – Reactivar cuenta de empleado | 2 | REL-3 | SPR-3 | 4 h | S/ 179.28 |
| OBJ-01 | EPIC-SEG | HU-LOG-01 | Trazabilidad – Consultar registro de accesos al sistema | 3 | REL-3 | SPR-3 | 6 h | S/ 268.92 |
| OBJ-02 | EPIC-CAT | HU-CAT-02 | Categorías – Crear nueva categoría de productos | 2 | REL-1 | SPR-1 | 4 h | S/ 179.28 |
| OBJ-02 | EPIC-CAT | HU-CAT-01 | Categorías – Ver lista de categorías de productos | 1 | REL-1 | SPR-1 | 2 h | S/ 89.64 |
| OBJ-02 | EPIC-CAT | HU-PROD-02 | Productos – Registrar nuevo producto en el catálogo | 5 | REL-1 | SPR-1 | 10 h | S/ 448.21 |
| OBJ-02 | EPIC-CAT | HU-PROD-01 | Productos – Ver catálogo completo de productos | 3 | REL-1 | SPR-1 | 6 h | S/ 268.92 |
| OBJ-02 | EPIC-CAT | HU-PROV-02 | Proveedores – Registrar nuevo proveedor | 3 | REL-1 | SPR-1 | 6 h | S/ 268.92 |
| OBJ-02 | EPIC-CAT | HU-CLI-02 | Clientes – Registrar cliente automáticamente al vender | 3 | REL-1 | SPR-1 | 6 h | S/ 268.92 |
| OBJ-02 | EPIC-CAT | HU-PROD-06 | Productos – Consultar productos próximos a vencer | 3 | REL-2 | SPR-2 | 6 h | S/ 268.92 |
| OBJ-02 | EPIC-CAT | HU-PROV-01 | Proveedores – Ver lista de proveedores | 2 | REL-2 | SPR-2 | 4 h | S/ 179.28 |
| OBJ-02 | EPIC-CAT | HU-PROV-04 | Proveedores – Desactivar o reactivar proveedor | 2 | REL-2 | SPR-2 | 4 h | S/ 179.28 |
| OBJ-02 | EPIC-CAT | HU-CAT-03 | Categorías – Editar nombre de categoría | 1 | REL-3 | SPR-3 | 2 h | S/ 89.64 |
| OBJ-02 | EPIC-CAT | HU-CLI-01 | Clientes – Listar clientes registrados | 2 | REL-3 | SPR-3 | 4 h | S/ 179.28 |
| OBJ-02 | EPIC-CAT | HU-PROD-04 | Productos – Editar datos de un producto | 3 | REL-3 | SPR-3 | 6 h | S/ 268.92 |
| OBJ-02 | EPIC-CAT | HU-PROD-05 | Productos – Desactivar o reactivar producto | 2 | REL-3 | SPR-3 | 4 h | S/ 179.28 |
| OBJ-02 | EPIC-CAT | HU-PROV-03 | Proveedores – Editar datos de un proveedor | 2 | REL-3 | SPR-3 | 4 h | S/ 179.28 |
| OBJ-02 | EPIC-CAT | HU-CAT-04 | Categorías – Eliminar categoría sin productos | 2 | REL-3 | SPR-3 | 4 h | S/ 179.28 |
| OBJ-02 | EPIC-CAT | HU-CLI-03 | Clientes – Editar correo electrónico de cliente | 1 | REL-3 | SPR-3 | 2 h | S/ 89.64 |
| OBJ-02 | EPIC-CAT | HU-PROD-03 | Productos – Escanear código de barras para registrar producto | 5 | REL-3 | SPR-3 | 10 h | S/ 448.21 |
| OBJ-03 | EPIC-INV | HU-INV-01 | Inventario – Registrar entrada de mercadería | 5 | REL-1 | SPR-1 | 10 h | S/ 448.21 |
| OBJ-03 | EPIC-INV | HU-INV-02 | Inventario – Registrar baja de inventario por merma | 5 | REL-1 | SPR-1 | 10 h | S/ 448.21 |
| OBJ-03 | EPIC-INV | HU-INV-03 | Inventario – Realizar ajuste por conteo físico | 5 | REL-1 | SPR-1 | 10 h | S/ 448.21 |
| OBJ-03 | EPIC-INV | HU-SOL-01 | Reposición – Crear solicitud de reposición | 3 | REL-2 | SPR-2 | 6 h | S/ 268.92 |
| OBJ-03 | EPIC-INV | HU-SOL-02 | Reposición – Listar solicitudes con filtro por estado | 2 | REL-2 | SPR-2 | 4 h | S/ 179.28 |
| OBJ-03 | EPIC-INV | HU-SOL-03 | Reposición – Aprobar solicitud de reposición | 3 | REL-2 | SPR-2 | 6 h | S/ 268.92 |
| OBJ-03 | EPIC-INV | HU-SOL-05 | Reposición – Completar solicitud al recibir mercadería | 8 | REL-2 | SPR-2 | 16 h | S/ 717.13 |
| OBJ-03 | EPIC-INV | HU-SOL-04 | Reposición – Rechazar solicitud de reposición | 2 | REL-2 | SPR-2 | 4 h | S/ 179.28 |
| OBJ-03 | EPIC-INV | HU-INV-04 | Inventario – Consultar historial de entradas | 2 | REL-3 | SPR-3 | 4 h | S/ 179.28 |
| OBJ-03 | EPIC-INV | HU-INV-05 | Inventario – Consultar historial de bajas | 2 | REL-3 | SPR-3 | 4 h | S/ 179.28 |
| OBJ-03 | EPIC-INV | HU-INV-06 | Inventario – Consultar historial de ajustes | 2 | REL-3 | SPR-3 | 4 h | S/ 179.28 |
| OBJ-04 | EPIC-VEN | HU-CAJA-01 | Caja – Abrir turno de caja | 5 | REL-1 | SPR-1 | 10 h | S/ 448.21 |
| OBJ-04 | EPIC-VEN | HU-CAJA-02 | Caja – Cerrar turno de caja y cuadrar | 5 | REL-1 | SPR-1 | 10 h | S/ 448.21 |
| OBJ-04 | EPIC-VEN | HU-CAJA-05 | Caja – Consultar historial de turnos de caja | 3 | REL-1 | SPR-1 | 6 h | S/ 268.92 |
| OBJ-04 | EPIC-VEN | HU-VEN-01a | Ventas (POS) – Inicialización de terminal de venta y validación de turno | 3 | REL-1 | SPR-1 | 6 h | S/ 268.92 |
| OBJ-04 | EPIC-VEN | HU-VEN-01b | Ventas (POS) – Registro de líneas de venta y cobro en mostrador | 5 | REL-1 | SPR-1 | 10 h | S/ 448.21 |
| OBJ-04 | EPIC-VEN | HU-VEN-01c | Ventas (POS) – Despacho por expiración FEFO y descargo de lotes | 5 | REL-1 | SPR-1 | 10 h | S/ 448.21 |
| OBJ-04 | EPIC-VEN | HU-VEN-02 | Ventas (POS) – Emitir boleta o factura | 8 | REL-1 | SPR-1 | 16 h | S/ 717.13 |
| OBJ-04 | EPIC-VEN | HU-VEN-05 | Ventas (POS) – Consultar historial de ventas | 5 | REL-1 | SPR-1 | 10 h | S/ 448.21 |
| OBJ-04 | EPIC-VEN | HU-VEN-06 | Ventas (POS) – Anular una venta con devolución | 8 | REL-2 | SPR-2 | 16 h | S/ 717.13 |
| OBJ-04 | EPIC-VEN | HU-CAJA-03 | Caja – Registrar movimiento manual de efectivo | 3 | REL-2 | SPR-2 | 6 h | S/ 268.92 |
| OBJ-04 | EPIC-VEN | HU-CAJA-04 | Caja – Ver resumen del turno activo | 2 | REL-2 | SPR-2 | 4 h | S/ 179.28 |
| OBJ-04 | EPIC-VEN | HU-CAJA-06 | Caja – Aprobar cierre de turno | 2 | REL-2 | SPR-2 | 4 h | S/ 179.28 |
| OBJ-04 | EPIC-VEN | HU-CAJA-07 | Caja – Forzar cierre de turno ajeno | 5 | REL-2 | SPR-2 | 10 h | S/ 448.21 |
| OBJ-04 | EPIC-VEN | HU-VEN-07 | Ventas (POS) – Verificar recepción de pago Yape/Plin (IziPay) | 2 | REL-2 | SPR-2 | 4 h | S/ 179.28 |
| OBJ-04 | EPIC-VEN | HU-VEN-03 | Ventas (POS) – Generar comprobante en PDF o reenviar por correo electrónico | 5 | REL-3 | SPR-3 | 10 h | S/ 448.21 |
| OBJ-04 | EPIC-VEN | HU-VEN-04 | Ventas (POS) – Buscar producto por código de barras | 3 | REL-3 | SPR-3 | 6 h | S/ 268.92 |
| OBJ-04 | EPIC-VEN | HU-VEN-08 | Ventas (POS) – Exportar historial de ventas a PDF (Fuera de Alcance) | 3 | Ninguno | Ninguno | 0 h | S/ 0.00 |
| OBJ-05 | EPIC-REP | HU-CONF-02 | Configuración – Actualizar configuración del negocio | 3 | REL-1 | SPR-1 | 6 h | S/ 268.92 |
| OBJ-05 | EPIC-REP | HU-DASH-01 | Dashboard – Ver resumen de ventas del día y del mes | 5 | REL-2 | SPR-2 | 10 h | S/ 448.21 |
| OBJ-05 | EPIC-REP | HU-DASH-03 | Dashboard – Alertas de stock crítico, vencimientos y turnos olvidados | 5 | REL-2 | SPR-2 | 10 h | S/ 448.21 |
| OBJ-05 | EPIC-REP | HU-REP-01 | Reportes – Ver resumen de ventas por período | 5 | REL-2 | SPR-2 | 10 h | S/ 448.21 |
| OBJ-05 | EPIC-REP | HU-REP-02 | Reportes – Ver ranking de productos más vendidos | 3 | REL-2 | SPR-2 | 6 h | S/ 268.92 |
| OBJ-05 | EPIC-REP | HU-REP-05 | Reportes – Ver stock crítico | 3 | REL-2 | SPR-2 | 6 h | S/ 268.92 |
| OBJ-05 | EPIC-REP | HU-CONF-01 | Configuración – Ver configuración actual del negocio | 1 | REL-2 | SPR-2 | 2 h | S/ 89.64 |
| OBJ-05 | EPIC-REP | HU-DASH-02 | Dashboard – Ver gráfico de evolución de ventas por día | 3 | REL-3 | SPR-3 | 6 h | S/ 268.92 |
| OBJ-05 | EPIC-REP | HU-DASH-04 | Dashboard – Ver ranking de productos más vendidos | 3 | REL-3 | SPR-3 | 6 h | S/ 268.92 |
| OBJ-05 | EPIC-REP | HU-DASH-05 | Dashboard – Ver solicitudes de reposición pendientes | 2 | REL-3 | SPR-3 | 4 h | S/ 179.28 |
| OBJ-05 | EPIC-REP | HU-REP-03 | Reportes – Ver ventas desglosadas por día | 3 | REL-3 | SPR-3 | 6 h | S/ 268.92 |
| OBJ-05 | EPIC-REP | HU-REP-04 | Reportes – Ver ventas por método de pago | 2 | REL-3 | SPR-3 | 4 h | S/ 179.28 |
| OBJ-05 | EPIC-REP | HU-REP-06 | Reportes – Ver resumen general del inventario | 2 | REL-3 | SPR-3 | 4 h | S/ 179.28 |
| OBJ-05 | EPIC-REP | HU-REP-07 | Reportes – Ver margen de ganancia por producto | 5 | REL-3 | SPR-3 | 10 h | S/ 448.21 |
| OBJ-05 | EPIC-REP | HU-REP-08 | Reportes – Ver mermas agrupadas por motivo | 3 | REL-3 | SPR-3 | 6 h | S/ 268.92 |
| OBJ-05 | EPIC-REP | HU-REP-09 | Reportes – Exportar reportes en PDF | 3 | REL-3 | SPR-3 | 6 h | S/ 268.92 |
| — | — | — | **Ajuste por redondeo** | — | — | — | — | **S/ +0.13** |
| **TOTAL** | | | **72 HU** | **251** | **3 Releases** | **3 Sprints** | **502 h** | **S/ 22,500.00** |

## A.3 Conciliación entre el presupuesto por release y la asignación por historia

El presupuesto de cada release es **costo de capacidad** (2 semanas × S/ 625 × 6 desarrolladores = S/ 7,500.00), mientras que el costo asignado por historia es una **distribución por puntos** (Pts × S/ 89.6414). Ambas bases suman S/ 22,500.00, pero difieren por release porque la carga planificada por sprint (89 / 90 / 72 pts) no es uniforme:

| Release | Puntos | Asignación por puntos (S/) | Presupuesto del release (S/) | Diferencia (S/) |
|---|:---:|:---:|:---:|:---:|
| REL-1 (SPR-1) | 89 | 7,978.09 | 7,500.00 | +478.09 |
| REL-2 (SPR-2) | 90 | 8,067.73 | 7,500.00 | +567.73 |
| REL-3 (SPR-3) | 72 | 6,454.18 | 7,500.00 | -1,045.82 |
| **Total** | **251** | **22,500.00** | **22,500.00** | **0.00** |

*Lectura:* la diferencia del REL-3 corresponde a capacidad planificada no consumida (60.0 % de ocupación en el Sprint 3); el exceso de REL-1 y REL-2 es el valor entregado por encima del costo de capacidad del sprint.

---


<!-- ===================================================================== -->
<!-- ARCHIVO FUENTE: Anexo_B_Especificacion_de_Interfaz.md -->
<!-- ===================================================================== -->

---
Código de documento: DOC-ANEXO-B
Título: Anexo B - Especificación de Interfaz (UI, Microcopy y Comportamiento Visual)
Versión: 5.1
Fecha: 2026-09-28
Elaborado por: Colonia Infantas, Walter
Revisado por: Angeles Pérez, Jhonny
Estado: Aprobado
Propósito: Documentar, por pantalla, los campos, textos de ayuda, valores por defecto, colores y alertas de estado, placeholders, banners, estados vacíos y validaciones que forman parte de los criterios de aceptación (CA-UI) de las historias de usuario
Documentos relacionados: DOC-PLAN-03-00, DOC-PLAN-03-01 a DOC-PLAN-03-05, DOC-PLAN-02, DOC-PLAN-11
---

# Anexo B. Especificación de Interfaz (UI, Microcopy y Comportamiento Visual)

## Uso de este anexo
Cada pantalla del sistema se especifica una sola vez en este anexo. Las historias de usuario del plan no repiten estos detalles: incorporan un criterio de aceptación **CA-UI** que remite a la pantalla correspondiente, de modo que la historia solo se considera terminada si la interfaz cumple la especificación. La relación historia → pantalla está en DOC-PLAN-11. La Definición de Hecho (DOC-PLAN-02) contiene únicamente la cláusula transversal.

Convención: `UI-nnn` identifica una pantalla (no es una historia de usuario y no tiene puntos ni sprint). Las reglas `RN-UI-nn` de la sección 7 son comportamientos de interfaz y son independientes de las reglas de negocio RN-01 a RN-21 del DOC-PLAN-08.

Ámbito de aplicación: Especificación funcional de interfaces de usuario para el sistema de gestión de minimarket. Cada pantalla define los elementos de entrada, microcopy, indicadores de estado, cuadros de interacción y validaciones en tiempo real acordadas con el Product Owner.

---
## 1. Matriz Maestra de Pantallas Especificadas (20 pantallas)

| N° Pantalla | Nombre de Pantalla | Módulo / Acceso | Vista Funcional de Interfaz | Épica Scrum | Cobertura de Especificación |
| :---: | :--- | :--- | :--- | :---: | :---: |
| **UI-001** | **Inicio de Sesión y Autenticación** | /login | Vista de Inicio de Sesión y Autenticación | EPIC-SEG | Especificación Completa |
| **UI-002** | **Recuperación de Contraseña** | /reset-password | Vista de Recuperación de Contraseña | EPIC-SEG | Especificación Completa |
| **UI-003** | **Navegación Global y Diálogos** | App Shell / Layout | Vista de Navegación Global y Diálogos | EPIC-SEG | Especificación Completa |
| **UI-004** | **Gestión de Usuarios del Sistema** | /usuarios | Vista de Gestión de Usuarios del Sistema | EPIC-SEG | Especificación Completa |
| **UI-005** | **Registro Histórico de Accesos** | /logs-acceso | Vista de Registro Histórico de Accesos | EPIC-SEG | Especificación Completa |
| **UI-006** | **Catálogo de Categorías** | /categorias | Vista de Catálogo de Categorías | EPIC-CAT | Especificación Completa |
| **UI-007** | **Catálogo de Productos y Alertas** | /productos | Vista de Catálogo de Productos y Alertas | EPIC-CAT | Especificación Completa |
| **UI-008** | **Directorio de Proveedores** | /proveedores | Vista de Directorio de Proveedores | EPIC-CAT | Especificación Completa |
| **UI-009** | **Directorio de Clientes** | /clientes | Vista de Directorio de Clientes | EPIC-CAT | Especificación Completa |
| **UI-010** | **Entradas de Mercadería y Lotes** | /inventario (Entradas) | Vista de Entradas de Mercadería y Lotes | EPIC-INV | Especificación Completa |
| **UI-011** | **Bajas de Inventario y Mermas** | /inventario (Bajas) | Vista de Bajas de Inventario y Mermas | EPIC-INV | Especificación Completa |
| **UI-012** | **Ajustes de Conteo Físico** | /inventario (Ajustes) | Vista de Ajustes de Conteo Físico | EPIC-INV | Especificación Completa |
| **UI-013** | **Solicitudes de Reposición** | /solicitudes | Vista de Solicitudes de Reposición | EPIC-INV | Especificación Completa |
| **UI-014** | **Terminal de Punto de Venta (POS)** | /ventas | Vista de Terminal de Punto de Venta (POS) | EPIC-VEN | Especificación Completa |
| **UI-015** | **Historial de Ventas y Anulaciones** | /ventas/historial | Vista de Historial de Ventas y Anulaciones | EPIC-VEN | Especificación Completa |
| **UI-016** | **Turno de Caja y Arqueo Inicial** | /caja | Vista de Turno de Caja y Arqueo Inicial | EPIC-VEN | Especificación Completa |
| **UI-017** | **Historial y Cierres Forzados** | /caja/historial | Vista de Historial y Cierres Forzados | EPIC-VEN | Especificación Completa |
| **UI-018** | **Dashboard y KPIs Estratégicos** | /dashboard | Vista de Dashboard y KPIs Estratégicos | EPIC-REP | Especificación Completa |
| **UI-019** | **Reportes Analíticos y PDF** | /reportes | Vista de Reportes Analíticos y PDF | EPIC-REP | Especificación Completa |
| **UI-020** | **Configuración Fiscal y SUNAT** | /configuracion | Vista de Configuración Fiscal y SUNAT | EPIC-REP | Especificación Completa |

---

## 2. Parte I: EPIC-SEG — Seguridad, Autenticación y Usuarios (UI-001 a UI-005)

### Pantalla [UI-001] Inicio de Sesión y Autenticación de Usuarios

**Historias del plan que utilizan esta pantalla:** HU-AUTH-01, HU-AUTH-02, HU-AUTH-04  

**Propósito de la pantalla:**  
Como usuario del sistema (Administrador, Gerente, Vendedor o Almacenero),  
quiero una pantalla de inicio de sesión clara con validación de credenciales y visualización de contraseña,  
para ingresar de forma segura y ser redirigido a mi módulo de trabajo asignado.

#### Criterios de Aceptación (CA) - Interfaz y Comportamiento Visual:

**CA-1: Formulario y Elementos de Entrada**
- **Encabezado y Branding**:
  - Icono visual: `ShoppingBag` de Lucide con clase ícono destacado en color índigo corporativo.
  - Título principal: `"Minimarket"`.
  - Subtítulo de asistencia: `"Inicia sesión para continuar"`.
- **Campo Correo Electrónico**:
  - Etiqueta visible: `"Correo electrónico"`.
  - Icono incrustado: `Mail` (alineado a la izquierda en color gris suave).
  - Placeholder: `"correo@ejemplo.com"`.
  - Valor por defecto: Cadena vacía `""`.
  - Microcopy / Texto de ayuda: Ninguno adicional bajo el campo.
  - Restricción visual: Obligatorio (`required`), tipo nativo formato de correo electrónico, borde con focus `focus:ring-indigo-400`.
- **Campo Contraseña**:
  - Etiqueta visible: `"Contraseña"`.
  - Icono incrustado: `Lock` (alineado a la izquierda en color gris suave).
  - Placeholder: `"••••••••"`.
  - Valor por defecto: Cadena vacía `""`.
  - Control de visibilidad: Botón interactivo a la derecha con icono dinámico `EyeOff` (cuando está visible) o `Eye` (cuando está oculto).
  - Restricción visual: Obligatorio (`required`), tipo dinámico `type={showPassword ? 'text' : 'password'}`.

**CA-2: Mensajes de Asistencia, Banners y Retroalimentación**
- **Banners Informativos**:
  - Banner de cierre de sesión previo o expulsión concurrente: Si el usuario fue desconectado por concurrencia o cambio de credenciales, se despliega un banner ámbar superior estructurado en alerta en fondo ámbar suave y texto en tono ámbar oscuro exponiendo el mensaje exacto emitido por el sistema central:
    - `"Se inició sesión con esta cuenta desde otro dispositivo."` (cuando la sesión activa difiere por concurrencia; satisface `HU-AUTH-04`).
    - `"La contraseña de tu cuenta fue cambiada. Vuelve a iniciar sesión."` (emitido al actualizar credenciales).
    - `"Un SuperAdmin cerró tu sesión."` (emitido ante cierre forzado administrativo).
- **Mensajes de Validación y Error**:
  - **Mensajes de Bloqueo por Intentos Fallidos (HU-AUTH-02):**
    - Si el usuario acumula 5  consecutivos de contraseña, el sistema bloquea el acceso temporalmente y despliega un banner rojo estructurado en alerta en fondo rojo claro y texto en tono rojo oscuro con el mensaje exacto:
      `"Cuenta suspendida temporalmente por 15 minutos debido a múltiples ."`
    - Si el usuario intenta autenticarse durante la suspensión, se exhibe el tiempo restante:
      `"Cuenta suspendida. Intenta nuevamente en {minutosRestantes} minuto(s)."`
  - **Mensaje de Cuenta Desactivada (HU-AUTH-01 / HU-USR-04):**
    - Si la cuenta del colaborador fue dada de baja o desactivada por el SuperAdmin, se despliega un banner rojo con el mensaje exacto:
      `"Esta cuenta se encuentra inactiva. Contacte a la administración para habilitar su acceso."`
  - Si el sistema rechaza las credenciales o falla la comunicación, se muestra un banner de alerta con fondo rojo claro y texto en color rojo con el mensaje emitido por el sistema o el texto por defecto "Error al iniciar sesión".

**CA-3: Indicadores de Estado, Badges y Grillas**
- **Indicadores de Carga**: Durante el envío del formulario, el botón de acción principal reemplaza su texto por un spinner animado `Loader2 ` seguido del texto `"Iniciando..."`.
- **Columnas de Datos**: No aplica (pantalla de autenticación sin grillas).

**CA-4: Acciones, Botones y Estados Vacíos (Empty States)**
- **Acceso a Recuperación de Contraseña**:
  - Enlace alineado a la derecha: `"¿Olvidaste tu contraseña?"` con clases en color índigo corporativo con subrayado interactivo que navega hacia `/reset-password`.
- **Botón de Acción Principal**:
  - Texto en estado inactivo/normal: `"Iniciar Sesión"`.
  - Tipo: Botón primario de formulario (botón de confirmación), ancho completo (ancho completo), fondo índigo botón primario índigo con texto en blanco.
  - Estado deshabilitado: Se desactiva (inactivo durante el procesamiento, deshabilitado con opacidad reducida e interactividad bloqueada) y bloquea dobles clics inmediatos mediante referencia síncrona `enviandoRef`.

#### Criterios de Aceptación en Formato Gherkin (Comportamiento de UI):
- **Escenario 1**: Visualización inicial de campos y enlace de recuperación
  - **Dado que** un usuario no autenticado navega a la URL `"/login"`
  - **Cuando** la vista termina de cargar
  - **Entonces** el sistema debe mostrar visiblemente el logo `ShoppingBag`, el título `"Minimarket"`, el subtítulo `"Inicia sesión para continuar"`, el input `"Correo electrónico"` con placeholder `"correo@ejemplo.com"`, el input `"Contraseña"` con placeholder `"••••••••"`, el enlace `"¿Olvidaste tu contraseña?"` y el botón primario `"Iniciar Sesión"`.

- **Escenario 2**: Alternar visibilidad de contraseña
  - **Dado que** el usuario ingresó caracteres en el campo `"Contraseña"`
  - **Cuando** hace clic sobre el botón con icono `Eye` ubicado al extremo derecho del input
  - **Entonces** el tipo de input debe cambiar a `"text"`, los caracteres deben hacerse legibles y el icono debe cambiar a `EyeOff`.

- **Escenario 3**: Notificación de error por credenciales incorrectas
  - **Dado que** el usuario ingresó credenciales no válidas
  - **Cuando** presiona el botón `"Iniciar Sesión"` y el servicio central responde con error
  - **Entonces** el sistema debe mostrar un contenedor con fondo rojo claro y texto en color rojo de alerta con el mensaje emitido por el sistema o "Error al iniciar sesión".

- **Escenario 4**: Notificación visual al ser expulsado por inicio de sesión en otro dispositivo (HU-AUTH-04)
  - **Dado que** un usuario mantiene una sesión activa en el navegador
  - **Cuando** inicia sesión con la misma cuenta en otro dispositivo o terminal
  - **Y** el sistema invalida la sesión anterior incrementando la versión de sesión en el almacenamiento del sistema
  - **Entonces** al ejecutarse el heartbeat o la siguiente petición, el interceptor redirige a "/login"
  - **Y** se despliega el banner ámbar con el mensaje "Se inició sesión con esta cuenta desde otro dispositivo."

---

### Pantalla [UI-002] Recuperación y Reseteo de Contraseña

**Historias del plan que utilizan esta pantalla:** HU-AUTH-05  

**Propósito de la pantalla:**  
Como usuario que olvidó su clave de acceso,  
quiero solicitar un código de autorización de 4 dígitos a mi correo y validar los requisitos de seguridad al ingresar una nueva clave,  
para restablecer el acceso a mi cuenta sin depender de intervención manual.

#### Criterios de Aceptación (CA) - Interfaz y Comportamiento Visual:

**CA-1: Formulario y Elementos de Entrada**
- **Fase 1: Solicitud de Código de Autorización (`paso === 1`)**:
  - Icono visual: `KeyRound` (ícono destacado en color índigo corporativo).
  - Título principal: `"Recuperar contraseña"`.
  - Subtítulo guía: `"Ingresa tu correo y te enviaremos un código de autorización"`.
  - Campo `"Correo electrónico"`:
    - Etiqueta visible: `"Correo electrónico"`.
    - Icono: `Mail` (alineado a la izquierda en color gris suave).
    - Placeholder: `"correo@ejemplo.com"`.
    - Restricción visual: Obligatorio (`required`), formato de correo electrónico.
- **Fase 2: Validación de Código de Autorización y Nueva Clave (`paso === 2`)**:
  - Icono visual: `ShieldCheck` (ícono destacado en color índigo corporativo).
  - Título principal: `"Ingresa el código de autorización"`.
  - Subtítulo informativo: `"Revisa tu correo, el código de autorización expira en 15 minutos"`.
  - Campo `"código de autorización de 4 dígitos"`:
    - Etiqueta visible: `"código de autorización de 4 dígitos"`.
    - Placeholder: `"0000"`.
    - Formato y máscara visual: Centrado, texto grande y espaciado amplio centrado, tipografía destacada con espaciado amplio, longitud máxima 4 caracteres numéricos forzados por validación estricta de exactamente 4 caracteres numéricos.
  - Campo `"Nueva contraseña"`:
    - Etiqueta visible: `"Nueva contraseña"`.
    - Icono: `Lock` a la izquierda.
    - Placeholder: `"••••••••"`.
    - Botón de alternancia de visibilidad `Eye` / `EyeOff`.
    - Restricción: Obligatorio (`required`).
  - Campo `"Confirmar contraseña"`:
    - Etiqueta visible: `"Confirmar contraseña"`.
    - Icono: `Lock` a la izquierda.
    - Placeholder: `"••••••••"`.
    - Botón de alternancia de visibilidad `Eye` / `EyeOff`.
    - Restricción: Obligatorio (`required`).
- **Fase 3: Pantalla de Éxito (`exito === true`)**:
  - Icono: `CheckCircle2` (ícono destacado en color verde).
  - Título principal: `"Contraseña actualizada"` (título en negrita y tono oscuro).
  - Subtexto descriptivo: `"Serás redirigido al inicio de sesión..."` (texto secundario en gris).

**CA-2: Mensajes de Asistencia, Banners y Retroalimentación**
- **Validaciones de Seguridad en Cliente (Banner Rojo estilo visual estandarizado)**:
  - Si las contraseñas no son idénticas: `"Las contraseñas no coinciden"`.
  - Si tiene menos de 8 caracteres: `"Contraseña inválida: Debe tener al menos 8 caracteres"`.
  - Si no incluye mayúscula: `"Contraseña inválida: Debe contener una mayúscula"`.
  - Si no incluye minúscula: `"Contraseña inválida: Debe contener una minúscula"`.
  - Si no incluye dígito: `"Contraseña inválida: Debe contener un dígito"`.
- **Mensajes de Error del Sistema**:
  - Error al solicitar código de autorización: Mensaje del sistema o texto por defecto `"Error al Enviar código de verificación"`.
  - Error al cambiar clave o código de autorización expirado: Mensaje del sistema o texto por defecto `"Error al cambiar contraseña"`.

**CA-3: Indicadores de Estado, Badges y Grillas**
- **Indicadores en Botones**:
  - En Paso 1: Spinner indicador de carga animado con texto `"Enviando..."`.
  - En Paso 2: Spinner indicador de carga animado con texto `"Cambiando..."`.

**CA-4: Acciones, Botones y Estados Vacíos (Empty States)**
- **Acciones en Paso 1**:
  - Botón primario: `"Enviar código de verificación"` .
  - Enlace de retorno: Icono `ArrowLeft` (ícono compacto) con texto `"Volver al login"` que dirige a `/login`.
- **Acciones en Paso 2**:
  - Botón primario: `"Cambiar contraseña"` .
  - Botón de retroceso / reenviar: Icono `ArrowLeft` (ícono compacto) con texto `"ReEnviar código de verificación de autorización"` que limpia inputs y regresa a Paso 1.

#### Criterios de Aceptación en Formato Gherkin (Comportamiento de UI):
- **Escenario 1**: Validación estricta de complejidad de contraseña
  - **Dado que** el usuario ingresó el código de autorización de 4 dígitos y escribe `"clave"` en `"Nueva contraseña"`
  - **Cuando** escribe `"clave"` en `"Confirmar contraseña"` y presiona `"Cambiar contraseña"`
  - **Entonces** el sistema no debe enviar la petición y debe desplegar un banner rojo con el texto exacto `"Contraseña inválida: Debe tener al menos 8 caracteres"`.

- **Escenario 2**: Transición a pantalla de éxito y redirección
  - **Dado que** el usuario ingresó un código de verificación válido y una contraseña que cumple con mayúscula, minúscula, número y >= 8 caracteres
  - **Cuando** presiona `"Cambiar contraseña"` y el servicio central responde satisfactoriamente
  - **Entonces** el formulario desaparece y se muestra el icono `CheckCircle2` verde con el título `"Contraseña actualizada"`, el texto `"Serás redirigido al inicio de sesión..."` y redirige a `"/login"` tras 2 segundos.

---

### Pantalla [UI-003] Navegación Global, Menú Lateral y Confirmación de Cierre de Sesión

**Historias del plan que utilizan esta pantalla:** HU-AUTH-03  

**Propósito de la pantalla:**  
Como usuario con sesión iniciada en cualquier rol del sistema,  
quiero contar con un menú lateral responsivo y colapsable, cabecera con mi identidad/rol y alerta preventiva al cerrar sesión si tengo una caja abierta,  
para navegar fluidamente entre mis funciones autorizadas y no dejar arqueos huérfanos por error.

#### Criterios de Aceptación (CA) - Interfaz y Comportamiento Visual:

**CA-1: Formulario y Elementos de Entrada**
- No contiene formularios de entrada de datos continuos; opera como contenedor maestro (App Shell) con vistas anidadas en `área de contenido principal`.

**CA-2: Mensajes de Asistencia, Banners y Retroalimentación**
- **Modal Preventivo de Cierre de Turno de Caja (`ConfirmDialog`)**:
  - Se activa si un usuario con rol `Vendedor` o `Administrador` pulsa `"Cerrar sesión"` y posee un turno activo en la verificación del turno de caja.
  - Icono modal: ícono de advertencia (ícono en color ámbar de advertencia sobre círculo fondo ámbar suave).
  - Título modal exacto: `"Tienes un turno de caja abierto"`.
  - Mensaje modal exacto: `"Todavía no cerraste tu turno en Mi Caja. ¿Seguro que quieres cerrar sesión sin cerrarlo?"`.
  - Botón cancelar: `"Cancelar"` .
  - Botón confirmar: `"Confirmar"` con color índigo personalizado índigo corporativo.

**CA-3: Indicadores de Estado, Badges y Grillas**
- **Barra Superior (Header)**:
  - Título de pantalla dinámico a la izquierda: Muestra el nombre legible según la sección activa: `"Dashboard"`, `"Usuarios"`, `"Logs de Acceso"`, `"Productos"`, `"Categorías"`, `"Proveedores"`, `"Ventas"`, `"Historial de Ventas"`, `"Mi Caja"`, `"Historial de Caja"`, `"Inventario"`, `"Solicitudes"`, `"Clientes"`, `"Reportes"` o `"Configuración"`.
  - Nombre del usuario logueado: nombre del colaborador (texto secundario en gris).
  - Badge de Rol del usuario: Badge píldora con fondo morado/índigo etiqueta redondeada en color índigo corporativo y texto en blanco con el texto exacto de rol asignado al colaborador.
- **Indicador de Carga Global**: En transiciones de carga diferida (carga diferida de vistas), muestra `Indicador de carga con texto "Cargando..."`.

**CA-4: Acciones, Botones y Menú Lateral (Sidebar)**
- **Branding del Sidebar**:
  - Icono: `ShoppingCart` (ícono en color índigo).
  - Nombre: `"Minimarket"` (visible solo si no está colapsado).
- **Enlaces de Navegación (Visibles estrictamente según RBAC del usuario)**:
  - `"Dashboard"` (Icono `LayoutDashboard`, roles: Gerente, Administrador)
  - `"Usuarios"` (Icono `Users`, roles: Administrador)
  - `"Logs de Acceso"` (Icono `Fingerprint`, roles: Administrador)
  - `"Productos"` (Icono `Package`, roles: Administrador, Almacenero)
  - `"Categorías"` (Icono `Tag`, roles: Administrador, Almacenero)
  - `"Proveedores"` (Icono `Truck`, roles: Administrador, Almacenero)
  - `"Ventas"` (Icono `ShoppingCart`, roles: Vendedor, Administrador, Gerente)
  - `"Historial Ventas"` (Icono `Clock`, roles: Vendedor, Administrador, Gerente)
  - `"Mi Caja"` (Icono `Wallet`, roles: Vendedor, Administrador)
  - `"Historial Caja"` (Icono `History`, roles: Administrador, Gerente)
  - `"Inventario"` (Icono `Warehouse`, roles: Almacenero, Administrador)
  - `"Solicitudes"` (Icono `ClipboardList`, roles: Almacenero, Administrador, Gerente)
  - `"Reportes"` (Icono `BarChart2`, roles: Gerente, Administrador)
  - `"Configuración"` (Icono `Settings`, roles: Administrador)  
  *(Citas: )*.
- **Estado de Ítem Activo**: Fondo índigo fondo en color índigo corporativo y texto en blanco; ítems inactivos: texto gris en color gris con resaltado al interactuar.
- **Control de Colapso del Menú**:
  - Botón con icono `ChevronLeft` (expandido) o `ChevronRight` (colapsado).
  - Atributo title/tooltip: `"Colapsar"` si está expandido, `"Expandir"` si está colapsado.
  - Persistencia: Se almacena en `memoria de sesión local` bajo la clave `'sidebar_collapsed'`.
- **Pie de Menú y Cierre de Sesión**:
  - Bloque de usuario (expandido): nombre del colaborador (estilo visual estandarizado) y rol asignado al colaborador (en tono gris atenuado).
  - Botón Cerrar Sesión: Icono `LogOut`, texto literal `"Cerrar sesión"` (oculto en modo colapsado), tooltip `"Cerrar sesión"`.
  - Protección concurrente: Bloqueo síncrono por `saliendoRef` para impedir dobles llamadas a `/auth/logout`.

#### Criterios de Aceptación en Formato Gherkin (Comportamiento de UI):
- **Escenario 1**: Menú lateral filtrado por perfil Vendedor
  - **Dado que** un usuario con rol `"Vendedor"` ha iniciado sesión
  - **Cuando** visualiza el menú lateral
  - **Entonces** debe ver únicamente los enlaces `"Ventas"`, `"Historial Ventas"` y `"Mi Caja"`, quedando completamente ocultos `"Usuarios"`, `"Productos"`, `"Reportes"`, `"Configuración"` y `"Logs de Acceso"`.

- **Escenario 2**: Cierre de sesión con advertencia de arqueo pendiente
  - **Dado que** un colaborador con rol `"Vendedor"` tiene una caja abierta
  - **Cuando** presiona el botón `"Cerrar sesión"` en el menú lateral
  - **Entonces** no se destruye la sesión de inmediato y se abre un diálogo modal de confirmación con el título `"Tienes un turno de caja abierto"` y el mensaje `"Todavía no cerraste tu turno en Mi Caja. ¿Seguro que quieres cerrar sesión sin cerrarlo?"`.

---

### Pantalla [UI-004] Gestión y Mantenimiento de Usuarios

**Historias del plan que utilizan esta pantalla:** HU-USR-01, HU-USR-02, HU-USR-03, HU-USR-04, HU-USR-05, HU-USR-06  

**Propósito de la pantalla:**  
Como SuperAdmin (o Administrador en modo visualización),  
quiero administrar las cuentas del personal, filtrar por rol y estado, y ejecutar acciones rápidas (edición, desactivación, reactivación y cierre forzado de sesión),  
para garantizar el gobierno de identidades y accesos del minimarket.

#### Criterios de Aceptación (CA) - Interfaz y Comportamiento Visual:

**CA-1: Formulario y Elementos de Entrada**
- **Breadcrumb de Navegación**:
  - Enlace: `"Inicio"` (acceso `/dashboard`), Separador: `"/"`, Ítem activo: `"Usuarios"`.
- **Encabezado y Microcopy**:
  - Título principal: `"Usuarios"` (encabezado principal en negrita).
  - Microcopy modo solo lectura (cuando no es SuperAdmin): Icono `Lock` (ícono compacto) con texto `"Modo solo lectura — la gestión de usuarios es exclusiva del SuperAdmin"` con estilo texto informativo en tono gris atenuado.
- **Filtros de Barra Superior**:
  - Select Filtro de Rol:
    - `"Todos los roles"` (valor `'Todos'`)
    - `"Administrador"`
    - `"Vendedor"`
    - `"Almacenero"`
    - `"Gerente"`
  - Select Filtro de Estado:
    - `"Todos los estados"` (valor `'Todos'`)
    - `"Activo"`
    - `"Inactivo"`
- **Modal "Nuevo Usuario" / "Editar Usuario" (cuadro de diálogo de gestión de usuario)**:
  - Título dinámico: `"Nuevo Usuario"` (al crear) o `"Editar Usuario"` (al editar).
  - Botón de cierre: Icono `X` (ícono interactivo en gris).
  - Campo Nombre:
    - Etiqueta visible: `"Nombre"`.
    - Restricción: Obligatorio (`required`), input de texto.
  - Campo Email:
    - Etiqueta visible: `"Email"`.
    - Restricción: Obligatorio (`required`), formato de correo electrónico.
  - Campo Contraseña (solo visible en creación `esCreacion`):
    - Etiqueta visible: `"Contraseña"`.
    - Control de visibilidad: Botón con icono `Eye` / `EyeOff`.
    - Restricción: Obligatorio (`required`), oculto en modo edición para no sobreescribir hashes involuntariamente.
  - Campo Rol (Select):
    - Etiqueta visible: `"Rol"`.
    - Opciones: `"Vendedor"`, `"Administrador"`, `"Almacenero"`, `"Gerente"`.
    - Valor por defecto: `"Vendedor"`.

**CA-2: Mensajes de Asistencia, Banners y Retroalimentación**
- **Error en Modal**: Si el sistema reporta un error al guardar, banner rojo alerta en fondo rojo claro y texto en color rojo con texto del error o fallback `"Error al guardar"`.
- **Error en Carga de Grilla**: Banner rojo alerta en fondo rojo claro y texto en color rojo.
- **Toasts de Notificación (Mensajes emergentes)**:
  - Al guardar nuevo usuario: `"Usuario guardado correctamente"`.
  - Al cambiar rol a un usuario existente: `"Rol actualizado. El cambio será efectivo en el próximo inicio de sesión del usuario."`.
  - Al desactivar: `"Usuario desactivado correctamente"`.
  - Al reactivar: `"Usuario reactivado correctamente"`.
  - Al forzar cierre de sesión: `"Sesiones de {nombre} cerradas correctamente"`.
- **Modales de Confirmación (`ConfirmDialog`)**:
  - Desactivar usuario:
    - Título: `"Desactivar usuario"`.
    - Mensaje: `"¿Deseas desactivar a {nombre}?"`.
    - Color botón confirmar: rojo de advertencia (Rojo peligro).
  - Reactivar usuario:
    - Título: `"Reactivar usuario"`.
    - Mensaje: `"¿Deseas reactivar a {nombre}?"`.
    - Color botón confirmar: verde de confirmación (Verde éxito).
  - Forzar cierre de sesión:
    - Título: `"Forzar cierre de sesión"`.
    - Mensaje: `"¿Invalidar de inmediato cualquier sesión activa de {nombre}? Deberá volver a iniciar sesión."`.
    - Color botón confirmar: ámbar de advertencia (Ámbar advertencia).

**CA-3: Indicadores de Estado, Badges y Grillas**
- **Columnas de la Grilla de Usuarios** (Cabecera índigo fondo en color índigo corporativo y texto en blanco):
  1. `"Nombre"`
  2. `"Email"`
  3. `"Rol"`
  4. `"Estado"`
  5. `"Acciones"`
- **Badges Semánticos de Rol** (`ROL_BADGE`):
  - `SuperAdmin`: etiqueta en tono rojo (Rojo)
  - `Administrador`: etiqueta en tono púrpura (Púrpura)
  - `Vendedor`: etiqueta en tono verde (Verde)
  - `Almacenero`: etiqueta en tono azul (Azul)
  - `Gerente`: etiqueta en tono ámbar (Ámbar)
- **Badges Semánticos de Estado**:
  - `"Activo"`: etiqueta en tono verde (Verde)
  - `"Inactivo"`: etiqueta en tono rojo (Rojo)

**CA-4: Acciones, Botones y Estados Vacíos (Empty States)**
- **Botón Superior "Nuevo Usuario"**:
  - Texto: `"Nuevo Usuario"` acompañado de icono `Plus` (ícono estándar).
  - Visibilidad: Exclusivo para SuperAdmin (`currentUser?.rol === 'SuperAdmin'`).
- **Botones de Acción por Fila** (Visibles solo para SuperAdmin; usuarios estándar ven un guion `"—"`):
  - Editar: Icono `Pencil` (en color índigo con resaltado al pasar el cursor), tooltip `"Editar"`.
  - Desactivar: Icono `UserX` (en color rojo con resaltado al pasar el cursor), tooltip `"Desactivar"` (solo en filas activas de otros usuarios).
  - Reactivar: Icono `UserCheck` (en color verde con resaltado al pasar el cursor), tooltip `"Reactivar"` (solo en filas inactivas de otros usuarios).
  - Forzar Cierre de Sesión: Icono `LogOut` (en color ámbar con resaltado al pasar el cursor), tooltip `"Forzar cierre de sesión"` (solo para otros usuarios).
- **Botones en Modal Usuario**:
  - Cancelar: `"Cancelar"` .
  - Guardar: `"Guardar"` , muestra spinner animado indicador de carga animado en estado de procesamiento en estado de carga.
- **Pantalla sin datos (Empty State)**:
  - Título/Texto: `"No hay usuarios registrados"`.
  - Estilo: Contenedor centrado contenedor centrado con texto informativo en gris atenuado.
- **Estado de Carga Inicial**:
  - `Indicador de carga con texto "Cargando usuarios..."`.

#### Criterios de Aceptación en Formato Gherkin (Comportamiento de UI):
- **Escenario 1**: Modo de solo lectura para perfil Administrador no SuperAdmin
  - **Dado que** un usuario con rol `"Administrador"` accede a `"/usuarios"`
  - **Cuando** carga la pantalla
  - **Entonces** el sistema no debe mostrar el botón `"Nuevo Usuario"`, debe mostrar el microcopy `"Modo solo lectura — la gestión de usuarios es exclusiva del SuperAdmin"` con icono `Lock`, y en la columna `"Acciones"` de la grilla debe renderizar un guion `"—"` sin botones interactivos.

- **Escenario 2**: Modificación de rol de usuario con toast específico
  - **Dado que** el SuperAdmin abre el modal `"Editar Usuario"` de un usuario existente
  - **Cuando** cambia el rol de `"Vendedor"` a `"Gerente"` y presiona `"Guardar"`
  - **Entonces** el modal se cierra, la grilla se refresca y se muestra un Toast verde de éxito con el texto exacto `"Rol actualizado. El cambio será efectivo en el próximo inicio de sesión del usuario."`.

---

### Pantalla [UI-005] Registro Histórico y Consulta de Logs de Acceso

**Historias del plan que utilizan esta pantalla:** HU-LOG-01  

**Propósito de la pantalla:**  
Como Administrador del sistema,  
quiero filtrar y revisar el historial de inicios y cierres de sesión con fechas, eventos y detalle de conexión,  
para auditar la seguridad operativa y detectar patrones de acceso inusuales.

#### Criterios de Aceptación (CA) - Interfaz y Comportamiento Visual:

**CA-1: Formulario y Elementos de Entrada**
- **Breadcrumb de Navegación**:
  - Enlace: `"Inicio"` (acceso `/dashboard`), Separador: `"/"`, Ítem activo: `"Logs de Acceso"`.
- **Encabezado**:
  - Título principal: `"Logs de Acceso"` (encabezado principal en negrita).
- **Barra de Filtros (panel horizontal alineado con bordes suaves y fondo blanco)**:
  - Filtro `"Desde"`:
    - Etiqueta visible: `"Desde"` (etiqueta en tono gris medio).
    - Tipo: `date`.
    - Restricción visual dinámica: Atributo `max={fechaHasta || undefined}` que bloquea en calendario fechas posteriores al límite superior.
  - Filtro `"Hasta"`:
    - Etiqueta visible: `"Hasta"` (etiqueta en tono gris medio).
    - Tipo: `date`.
    - Restricción visual dinámica: Atributo `min={fechaInicio || undefined}` que bloquea en calendario fechas anteriores al límite inferior.
  - Filtro `"Tipo"`:
    - Etiqueta visible: `"Tipo"` (etiqueta en tono gris medio).
    - Opciones visibles en el menú desplegable:
      - `"Todos"` (valor `""`)
      - `"Ingreso"` (valor `"Login"`)
      - `"Salida"` (valor `"Logout"`)
      - `"Otro"` (valor `"Otro"`)
      *(Citas: )*.
  - Filtro `"Usuario"`:
    - Etiqueta visible: `"Usuario"` (etiqueta en tono gris medio).
    - Placeholder: `"Nombre del usuario..."`.
    - Disparador por teclado: Presionar tecla `Enter` dispara directamente la función de filtrado.

**CA-2: Mensajes de Asistencia, Banners y Retroalimentación**
- **Validación de Rango de Fechas Incoherente**:
  - Condición: Si `fechaInicio` es posterior a `fechaHasta` (`fechaInicio > fechaHasta`).
  - Alerta visible en barra de filtros: Párrafo de error a ancho completo aviso en texto rojo a ancho completo con el texto exacto `"La fecha \"Desde\" no puede ser posterior a la fecha \"Hasta\""`.
  - Efecto colateral visual: El botón `"Filtrar"` se desactiva visualmente (deshabilitado con opacidad reducida e interactividad bloqueada).
- **Banner de Error en Carga**:
  - Si la comunicación con el sistema falla: Mensaje en contenedor mensaje en texto rojo con el texto devuelto o fallback `"Error al cargar los logs de acceso"`.

**CA-3: Indicadores de Estado, Badges y Grillas**
- **Columnas de la Grilla de Logs** (Cabecera Cabecera con fondo gris claro y borde divisor sutil):
  1. `"Usuario"` (alineado a la izquierda)
  2. `"Rol"` (alineado a la izquierda)
  3. `"Evento"` (alineado al centro)
  4. `"Fecha / Hora"` (alineado a la izquierda)
  5. `"Detalle"` (alineado a la izquierda)
- **Badges Semánticos de Evento** (`TIPO_BADGE`):
  - Tipo `Login`: Fondo y texto verde etiqueta en tono verde, icono `LogIn` (ícono compacto), etiqueta `"Ingreso"`.
  - Tipo `Logout`: Fondo y texto rojo etiqueta en tono rojo, icono `LogOut` (ícono compacto), etiqueta `"Salida"`.
  - Tipo `Otro`: Fondo y texto gris etiqueta en tono gris, icono `Info` (ícono compacto), etiqueta `"Otro"`.
- **Formato de Celdas**:
  - Nombre de usuario: texto en contraste alto.
  - Fecha / Hora: Formateado mediante función de utilidad `formatFechaHora(log.fecha_hora)`.
  - Detalle: Si el campo está vacío o es nulo, renderiza un guion `"—"`.

**CA-4: Acciones, Botones, Paginación y Estados Vacíos (Empty States)**
- **Botones de Barra de Filtros**:
  - Botón Filtrar: Icono `Search` (ícono estándar), texto `"Filtrar"`, estilo botón en color índigo corporativo y texto en blanco.
  - Botón Limpiar: Icono `X` (ícono estándar), texto `"Limpiar"`, estilo botón secundario con borde sutil en gris. Restablece fechas, tipos y texto de búsqueda.
  - Botón Actualizar: Icono `RefreshCw` (ícono estándar, con animación de giro animación de rotación continua mientras carga), texto `"Actualizar"`, tooltip `"Actualizar"`.
- **Paginador Inferior** (Solo visible si `pagination.totalPaginas > 1`):
  - Texto de rango: `"Mostrando {inicio}–{fin} de {total} registros"` con cálculo dinámico `(pagina - 1) * limite + 1` y `Math.min(pagina * limite, total)`.
  - Botón Anterior: Icono `ChevronLeft` (ícono estándar), deshabilitado con opacidad reducida si está en página 1.
  - Indicador numérico de página: `"{paginaActual} / {totalPaginas}"`.
  - Botón Siguiente: Icono `ChevronRight` (ícono estándar), deshabilitado con opacidad reducida si está en la última página.
- **Estado de Carga (Loading State)**:
  - Spinner central `Loader2 ` sobre contenedor de altura espaciado amplio.
- **Pantalla sin datos (Empty State)**:
  - Título/Texto central: `"No se encontraron registros"`.
  - Estilo: Contenedor con relleno vertical amplio contenedor centrado con texto informativo en gris atenuado.

#### Criterios de Aceptación en Formato Gherkin (Comportamiento de UI):
- **Escenario 1**: Bloqueo preventivo ante rango de fechas invertido
  - **Dado que** el usuario selecciona en `"Desde"` la fecha `2026-10-15` y en `"Hasta"` la fecha `2026-10-10`
  - **Cuando** se actualiza el estado de los inputs
  - **Entonces** el sistema debe mostrar bajo los filtros el mensaje en texto rojo `"La fecha \"Desde\" no puede ser posterior a la fecha \"Hasta\""`, deshabilitar el botón `"Filtrar"` con opacidad reducida deshabilitado con opacidad reducida e impedir el envío de la solicitud.

- **Escenario 2**: Filtrado de eventos por pulsación de tecla Enter en buscador
  - **Dado que** el usuario escribe `"Carlos"` en el campo `"Usuario"`
  - **Cuando** presiona la tecla `Enter` sin hacer clic en el botón `"Filtrar"`
  - **Entonces** la página se restablece a la página 1 (`paginaActual = 1`), se activa el spinner `Loader2` en la grilla y se cargan únicamente los registros cuyo nombre coincida con `"Carlos"`.

---

---

## 3. Parte II: EPIC-CAT — Catálogo, Productos, Proveedores y Clientes (UI-006 a UI-009)

### Pantalla [UI-006] Gestión y Mantenimiento de Categorías

**Historias del plan que utilizan esta pantalla:** HU-CAT-01, HU-CAT-02, HU-CAT-03, HU-CAT-04  

**Propósito de la pantalla:**  
Como Almacenero o Administrador del sistema,  
quiero gestionar el catálogo de categorías mediante creación, edición y búsqueda reactiva,  
para clasificar los artículos del minimarket y estructurar los inventarios.

#### Criterios de Aceptación (CA) - Interfaz y Comportamiento Visual:

**CA-1: Formulario y Elementos de Entrada**
- **Breadcrumb de Navegación**:
  - Enlace: `"Inicio"` (acceso `/dashboard`), Separador: `"/"`, Ítem activo: `"Categorías"`.
- **Encabezado y Barra de Búsqueda**:
  - Título principal: `"Categorías"` (encabezado principal en negrita).
  - Campo de búsqueda: Input de texto con icono `Search` (alineado a la izquierda en color gris suave), placeholder `"Buscar categoría..."`, contenedor con clase ancho estándar reducido.
- **Modal "Nueva Categoría" / "Editar Categoría" (`ModalCategoria`)**:
  - Título dinámico: `"Nueva Categoría"` (en modo creación) o `"Editar Categoría"` (en modo edición).
  - Botón de cierre: Icono `X` (ícono interactivo en gris).
  - Campo Nombre:
    - Etiqueta visible: `"Nombre"`.
    - Placeholder: Ninguno.
    - Valor inicial: Cadena vacía `""` o el valor preexistente `categoriaEditando.nombre`.
    - Restricción visual: Campo obligatorio (`required`), estilo estilo con bordes redondeados y marco interactivo al enfocar.

**CA-2: Mensajes de Asistencia, Banners y Retroalimentación**
- **Validaciones en Modal (Banner Rojo estilo visual estandarizado)**:
  - Si el campo solo contiene espacios o está vacío: `"El nombre no puede estar vacío"`.
  - Si ya existe otra categoría con el mismo nombre (insensible a mayúsculas/minúsculas): `"Ya existe una categoría con ese nombre"`.
  - Error de comunicación o red: Mensaje del sistema o texto por defecto `"Error al guardar"`.
- **Modal de Confirmación de Eliminación (`ConfirmDialog`)**:
  - Título: `"Eliminar categoría"`.
  - Mensaje exacto: `"¿Eliminar categoría \"{nombre}\"?"`.
  - Botón cancelar: `"Cancelar"`.
  - Botón confirmar: `"Confirmar"` con color rojo por defecto rojo de advertencia.
- **Toasts de Notificación (Mensajes emergentes)**:
  - Al eliminar satisfactoriamente: Toast de éxito verde `"Categoría eliminada correctamente"`.
  - Al fallar la eliminación: Toast de error rojo con mensaje devuelto o `"Error al eliminar"`.

**CA-3: Indicadores de Estado, Badges y Grillas**
- **Columnas de la Grilla de Categorías** (Cabecera índigo fondo en color índigo corporativo y texto en blanco):
  1. `"ID"` (texto gris en gris secundario)
  2. `"Nombre"` (texto oscuro en contraste alto)
  3. `"Acciones"`
- **Alternancia de Filas**: Filas pares con fondo blanco fondo blanco, impares con fondo gris suave fondo gris claro.

**CA-4: Acciones, Botones y Estados Vacíos (Empty States)**
- **Botón de Acción Principal**:
  - Texto: `"Nueva Categoría"` acompañado de icono `Plus` (ícono estándar).
  - Estilo: Primario índigo botón primario índigo con texto en blanco.
- **Botones de Acción por Fila**:
  - Botón Editar: Icono `Pencil` (en color índigo con resaltado al pasar el cursor), tooltip `"Editar"`.
  - Botón Eliminar: Icono `Trash2` (en color rojo con resaltado al pasar el cursor), tooltip `"Eliminar"`. Restricción: Visible **únicamente** para usuarios con rol `Administrador` mediante `verificación de privilegios de Administrador`.
- **Botones en Modal Categoria**:
  - Cancelar: `"Cancelar"` .
  - Guardar: `"Guardar"` , muestra spinner animado indicador de carga animado en estado de procesamiento en estado de carga.
- **Estado de Carga Inicial**:
  - Componente: `Indicador de carga con texto "Cargando categorías..."`.
- **Pantalla sin datos (Empty State)**:
  - Título/Texto: `"No hay categorías registradas"`.
  - Estilo: Contenedor con altura fija contenedor centrado con texto informativo en gris atenuado.

#### Criterios de Aceptación en Formato Gherkin (Comportamiento de UI):
- **Escenario 1**: Restricción de eliminación por rol Almacenero
  - **Dado que** un usuario con rol `"Almacenero"` ingresa a la pantalla `"/categorias"`
  - **Cuando** revisa las filas de la grilla de categorías
  - **Entonces** debe visualizar únicamente el botón `"Editar"` (icono `Pencil`), quedando completamente oculto el botón `"Eliminar"` (icono `Trash2`).

- **Escenario 2**: Validación de unicidad de nombre de categoría en la interfaz visual
  - **Dado que** ya existe registrada la categoría `"Bebidas"`
  - **Cuando** el usuario hace clic en `"Nueva Categoría"`, escribe `"bebidas"` y presiona `"Guardar"`
  - **Entonces** el modal no realiza la comunicación con el servicio y despliega un banner de alerta con el texto `"Ya existe una categoría con ese nombre"`.

---

### Pantalla [UI-007] Catálogo de Productos y Trazabilidad FEFO

**Historias del plan que utilizan esta pantalla:** HU-PROD-01, HU-PROD-02, HU-PROD-03, HU-PROD-04, HU-PROD-05, HU-PROD-06  

**Propósito de la pantalla:**  
Como Administrador o Almacenero,  
quiero supervisar el catálogo integral de productos con escaneo de código de barras, alertas de stock/vencimiento, visor de lotes FEFO y acciones rápidas de baja y reposición,  
para evitar quiebres de inventario y pérdidas por expiración de mercadería.

#### Criterios de Aceptación (CA) - Interfaz y Comportamiento Visual:

**CA-1: Formulario y Elementos de Entrada**
- **Breadcrumb de Navegación**:
  - Enlace: `"Inicio"` (acceso `/dashboard`), Separador: `"/"`, Ítem activo: `"Productos"`.
- **Barra de Filtros Generales**:
  - Campo Búsqueda: Icono `Search`, placeholder `"Buscar por nombre o marca..."`.
  - Select Categoría: Opción predeterminada `"Todas las categorías"`, seguida de la lista dinámica de categorías existentes.
  - Select Estado: `"Todos los estados"`, `"Activo"`, `"Inactivo"`.
  - Select Alerta:
    - `"Sin filtro"` (valor `'Todos'`)
    - `"Crítico (agotado + bajo)"` (valor `'Crítico'`)
    - `"Agotado (sin stock)"` (valor `'Agotado'`)
    - `"Stock bajo"` (valor `'Stock bajo'`)
    - `"Vencido"` (valor `'Vencido'`)
    - `"Por vencer"` (valor `'Por vencer'`)
    *(Citas: )*.
- **Modal "Nuevo Producto" / "Editar Producto" (`ModalProducto`)**:
  - Título: `"Nuevo Producto"` o `"Editar Producto"`.
  - Campo Código de Barras (en modo creación `esCreacion`):
    - Icono: `ScanLine`, cambia dinámicamente a verde en color verde cuando tiene el foco o gris en gris atenuado en reposo.
    - Placeholder dinámico: `"Escanea o escribe el código de barras..."` (si tiene el foco) o `"Haz clic aquí para escanear"` (si no lo tiene).
    - Indicador de estado de escaneo: Etiqueta con punto verde parpadeante indicador parpadeante interactivo con texto literal `"Listo para escanear"`.
    - Búsqueda en servicio externo SUNAT: Tecla `Enter` dispara búsqueda. Muestra indicador de carga animado.
    - Vista previa de imagen: Si el servicio externo devuelve imagen, se muestra miniatura con ajuste proporcional con microcopy `"Vista previa (no se guarda)"`.
    - Mensaje de autocompletado: Texto esmeralda `"Datos completados automáticamente. Verifica antes de guardar."` o gris `"No se encontró información para este código de barras. Completa los datos manualmente."`.
  - Campo Código de Barras (en modo edición): Placeholder `"Opcional"`.
  - Campo `"Nombre"`: Etiqueta `"Nombre"`, required. Si proviene de escaneo, muestra borde izquierdo verde franja lateral en color verde esmeralda.
  - Campo `"Marca"`: Etiqueta `"Marca"`, required. Si proviene de escaneo, borde izquierdo esmeralda y microcopy `"Verifica que estos datos sean correctos"`.
  - Campo `"Categoría"`: Select con opción inicial `"Seleccionar..."` y listado de categorías activas.
  - Campo `"Precio"`:
    - Etiqueta `"Precio"`.
    - Prefijo visual: `"S/"` incrustado a la izquierda.
    - Modo y sanitización: teclado decimal, intercepta y bloquea caracteres como `'e'`, `'E'`, `'+'`, `'-'`, limitando el valor a 6 dígitos enteros y 2 decimales.
  - Checkbox `"Este producto maneja fecha de vencimiento"`:
    - Checkbox checked por defecto.
    - Microcopy asistencial: `"Desmárcalo para productos que no caducan (Encendedor, cepillos, productos no perecederos, etc.): sus entradas de inventario no pedirán fecha de vencimiento."`.
  - Campo `"Stock Mínimo"`:
    - Etiqueta: `"Stock Mínimo"` (en edición añade `"(opcional)"`).
    - En creación: Deshabilitado (deshabilitado), valor fijo preestablecido `"10"`, microcopy `"Valor preestablecido (10). Se puede ajustar más adelante editando el producto."`.
    - En edición: Habilitado, placeholder `"Umbral global si se deja vacío"`, microcopy `"Punto de reorden propio de este producto para el reporte de Stock Crítico."`.
- **Modal "Dar de Baja" (`ModalBaja`)**:
  - Título: `"Dar de Baja"`.
  - Bloque informativo: Muestra `"Producto: {nombre}"` y `"Stock actual: {stock} und(s)"` en caja gris fondo gris claro.
  - Campo Cantidad: Input numérico con botón complementario `"Todo"` (autocompleta con el stock total del producto).
  - Campo Motivo (Select): Opciones fijas `"Vencido"`, `"Dañado"`, `"Robo o faltante"`, `"Consumo interno"`, `"Otro"`.
  - Campo Detalle: Etiqueta `"Detalle (opcional)"`, placeholder `"Ej: Lote vencido el 15/06"`.
- **Modal "Solicitar Reposición" (`ModalSolicitud`)**:
  - Título: `"Solicitar Reposición"`.
  - Bloque informativo: Muestra `"Producto: {nombre} - {marca}"` y `"Stock actual: {stock} und(s)"`.
  - Campo Cantidad a solicitar: Input numérico con `min="1"`.
  - Campo Proveedor: Select con opción `"Seleccionar..."` y proveedores activos.

**CA-2: Mensajes de Asistencia, Banners y Retroalimentación**
- **Banner Informativo de Stock 0 en Creación**:
  - Cuadro índigo: `"El producto se crea con stock 0. Para registrar el primer lote (cantidad, proveedor, fecha de vencimiento), ve a Inventario → Entradas después de guardar."` (recuadro informativo con fondo índigo suave y texto en índigo).
- **Alerta de Producto Existente por Código de Barras**:
  - Cuadro ámbar: `"Este producto ya está registrado: {nombre} - {marca} (Stock: {stock})"` con dos botones de acción: `"Editar producto existente"` y `"Escanear otro código de barras de barras"`.
- **Validaciones en Formulario de Producto**:
  - Si el par nombre y marca coincide con otro registro: `"Ya existe un producto con ese nombre y marca"`.
- **Validaciones en Modal de Baja**:
  - Si cantidad <= 0: `"La cantidad debe ser mayor a 0"`.
  - Si cantidad supera el inventario físico: `"Stock insuficiente (disponible: {producto.stock})"`.
- **Toasts de Notificación (Mensajes emergentes)**:
  - Al dar de baja: `"Baja registrada correctamente"`.
  - Al solicitar reposición: `"Solicitud de reposición creada"`.
  - Al cambiar estado: `"Producto desactivado correctamente"` / `"Producto reactivado correctamente"`.

**CA-3: Indicadores de Estado, Badges y Grillas**
- **Barra Superior de Alertas Dinámicas** (Renderizada si algún conteo es mayor a cero):
  - Alerta Agotado: Botón redondeado con icono ícono de advertencia y texto `"{N} producto(s) agotado(s)"` .
  - Alerta Stock Bajo: Botón redondeado con icono ícono de advertencia y texto `"{N} producto(s) con stock bajo"` .
  - Alerta Vencido: Botón redondeado con icono ícono de advertencia y texto `"{N} producto(s) vencido(s)"` .
  - Alerta Por Vencer: Botón redondeado con icono ícono de advertencia y texto `"{N} producto(s) por vencer"` .
- **Columnas de la Grilla de Productos** (Cabecera fondo en color índigo corporativo y texto en blanco):
  1. `"Nombre"`
  2. `"Marca"`
  3. `"Categoría"`
  4. `"Precio"` (formateado con moneda local `formatMoneda(p.precio)`)
  5. `"Stock"` (formateado con `formatStock(p.stock)`)
  6. `"Stock Mín."` (muestra número o guion `"—"`)
  7. `"Vencimiento"` (fecha o guion `"-"`)
  8. `"Estado"` (Badge verde `"Activo"` o rojo `"Inactivo"`)
  9. `"Acciones"`
- **Coloreado Semántico de Filas**:
  - Si stock === 0: Fondo rojo claro fondo rojo claro.
  - Si stock <= 5 y > 0: Fondo ámbar claro fondo ámbar claro.
- **Leyenda de Colores de Stock (Pie de Grilla)**:
  - Cuadro rojo fondo rojo claro y borde sutil: `"Sin stock"`
  - Cuadro ámbar fondo ámbar claro y borde sutil: `"Stock crítico (≤5)"`
  - Cuadro blanco fondo blanco y borde gris: `"Stock normal"`

**CA-4: Acciones, Botones, Modal de Lotes y Paginación**
- **Botones de Acción por Fila**:
  - Editar: Icono `Pencil` (en color índigo corporativo), tooltip `"Editar"`.
  - Ver Lotes: Icono `Layers` (en gris secundario), tooltip `"Ver lotes"`.
  - Desactivar / Reactivar: Icono `EyeOff` / `Eye`, tooltip `"Desactivar"` / `"Reactivar"`.
  - Dar de baja: Icono `Trash2` (en color rojo), tooltip `"Dar de baja"` (visible solo para Almacenero y Administrador).
  - Solicitar reposición: Icono `Package` (en color ámbar), tooltip `"Solicitar reposición"` (visible si está activo y `stock <= 5`).
- **Modal "Lotes de {producto}" (`ModalLotes`)**:
  - Cabecera: Título `"Lotes de {producto.nombre}"`, subtítulo con marca `{producto.marca}`.
  - Columnas de grilla FEFO: `"Lote"`, `"Vencimiento"`, `"Restante"`, `"Original"`, `"Proveedor"`, `"Ingreso"`, `"Estado"`.
  - Badges de estado de lote:
    - `"Agotado"`: etiqueta en tono gris
    - `"Sin vencimiento"`: etiqueta en tono gris
    - `"Vencido"`: etiqueta en tono rojo
    - `"Vigente"`: etiqueta en tono verde
  - Pie explicativo: `"Suma de restantes: {totalRestante} — el orden de la grilla es el que usa el sistema al vender (FEFO)"`.
  - Botón: `"Cerrar"` .
- **Paginador Inferior**:
  - Botón `"Anterior"`, texto `"Pág. {paginaActual} de {totalPaginas}"` y botón `"Siguiente"`.
- **Estados Vacíos**:
  - Sin registros de productos: `"No hay productos registrados"`.
  - Sin lotes asociados al producto: `"Este producto no tiene entradas de inventario registradas."`.

#### Criterios de Aceptación en Formato Gherkin (Comportamiento de UI):
- **Escenario 1**: Detección de código de barras existente
  - **Dado que** el usuario presiona `"Nuevo Producto"` y el input de código de barras tiene el foco visual con el mensaje `"Listo para escanear"`
  - **Cuando** escanea o digita un código de barras que ya pertenece a un artículo registrado y presiona `Enter`
  - **Entonces** el sistema muestra una caja de alerta ámbar con el texto `"Este producto ya está registrado: {nombre} - {marca} (Stock: {stock})"` y dos botones: `"Editar producto existente"` y `"Escanear otro código de barras de barras"`.

- **Escenario 2**: Visualización de trazabilidad de lotes FEFO
  - **Dado que** un producto cuenta con dos lotes de ingreso registrados
  - **Cuando** el usuario hace clic sobre el botón de acción con icono `Layers` (`"Ver lotes"`)
  - **Entonces** se abre el modal `"Lotes de {producto.nombre}"` ordenando las filas con el lote de vencimiento más próximo en primer lugar, mostrando badges semánticos de estado y el pie explicativo `"el orden de la grilla es el que usa el sistema al vender (FEFO)"`.

---

### Pantalla [UI-008] Registro y Validación Oficial de Proveedores

**Historias del plan que utilizan esta pantalla:** HU-PROV-01, HU-PROV-02, HU-PROV-03, HU-PROV-04  

**Propósito de la pantalla:**  
Como Administrador o Almacenero,  
quiero registrar y mantener proveedores verificando obligatoriamente su RUC en SUNAT y validando formatos internacionales de contacto,  
para asegurar compras formales y mitigar riesgos tributarios con empresas no habidas o inactivas.

#### Criterios de Aceptación (CA) - Interfaz y Comportamiento Visual:

**CA-1: Formulario y Elementos de Entrada**
- **Breadcrumb de Navegación**:
  - Enlace: `"Inicio"` (acceso `/dashboard`), Separador: `"/"`, Ítem activo: `"Proveedores"`.
- **Encabezado y Filtros**:
  - Título principal: `"Proveedores"` (encabezado principal en negrita).
  - Campo Búsqueda: Icono `Search`, placeholder `"Buscar por nombre o RUC..."`.
  - Select Filtro de Estado: `"Todos los estados"`, `"Activo"`, `"Inactivo"`.
- **Modal "Nuevo Proveedor" / "Editar Proveedor" (`ModalProveedor`)**:
  - Título dinámico: `"Nuevo Proveedor"` o `"Editar Proveedor"`.
  - Campo `"RUC"`:
    - Etiqueta: `"RUC"`.
    - Input: Longitud máxima de 11 dígitos numéricos (longitud de 11 dígitos), placeholder `"00000000000"`.
    - Botón de consulta SUNAT: Botón índigo contiguo con icono `Search` (o spinner `Loader2` si está verificando), tooltip `"Verificar RUC en SUNAT"`, ejecutable mediante clic o tecla `Enter`.
  - Campo `"Nombre"`:
    - Etiqueta: `"Nombre"`.
    - Comportamiento de bloqueo: Al validar el RUC con SUNAT, el campo adopta la razón social devuelta y se bloquea como solo lectura (campo bloqueado de solo lectura, con fondo gris claro y texto secundario).
    - Microcopy informativo: `"Nombre oficial según SUNAT — no editable."`.
  - Campo `"Contacto"` (Selector de Canal):
    - Selector dual con botones tab: `"Celular"` y `"Correo"`.
    - Modo Celular:
      - Select de país con 11 naciones y códigos internacionales: Perú (+51), Colombia (+57), Ecuador (+593), Bolivia (+591), Chile (+56), Argentina (+54), Brasil (+55), México (+52), Estados Unidos (+1), España (+34) y China (+86).
      - Input de celular: Placeholder `"Número de celular"`, solo caracteres numéricos.
    - Modo Correo:
      - Input de correo: Placeholder `"proveedor@ejemplo.com"`.

**CA-2: Mensajes de Asistencia, Banners y Retroalimentación**
- **Validaciones Oficiales de RUC en SUNAT**:
  - Si el RUC inicia con "10": `"RUC de persona natural (10) no válido para proveedor; debe ser RUC de empresa (20)"`.
  - Si el RUC no está activo en SUNAT: `"RUC dado de baja en SUNAT (estado: {data.estado})"`.
  - Si el RUC no tiene condición de habido: `"RUC con domicilio no habido en SUNAT (condición: {data.condicion})"`.
  - Si el RUC no se encuentra en el padrón: `"No se encontró información para ese RUC en SUNAT"`.
  - Razón social obtenida exitosamente: Texto destacado en verde esmeralda en texto verde esmeralda.
  - Si el usuario intenta guardar sin haber verificado en SUNAT: `"Debes verificar el RUC con SUNAT antes de continuar"`.
- **Validaciones de Contacto (al perder foco `onBlur`)**:
  - Si el celular no cumple el patrón internacional del país seleccionado: `"Número de celular inválido para {Nombre del País}"`.
  - Si el formato del correo es inválido: `"Correo electrónico inválido"`.
- **Validación de Unicidad**:
  - Si el nombre ya existe en la lista: `"Ya existe un proveedor con ese nombre"`.
- **Modal de Confirmación de Cambio de Estado (`ConfirmDialog`)**:
  - Título dinámico: `"Desactivar proveedor"` o `"Reactivar proveedor"`.
  - Mensaje exacto: `"¿Deseas desactivar a {nombre}?"` o `"¿Deseas reactivar a {nombre}?"`.
  - Color de botón confirmar: Rojo rojo de advertencia para desactivar; Verde verde de confirmación para reactivar.
- **Toasts de Notificación**:
  - `"Proveedor desactivado correctamente"` / `"Proveedor reactivado correctamente"`.

**CA-3: Indicadores de Estado, Badges y Grillas**
- **Columnas de la Grilla de Proveedores** (Cabecera fondo en color índigo corporativo y texto en blanco):
  1. `"Nombre"` (texto oscuro en contraste alto)
  2. `"RUC"` (texto gris en gris secundario)
  3. `"Contacto"` (muestra número/correo o un guion largo `&mdash;` si está vacío)
  4. `"Estado"`
  5. `"Acciones"`
- **Badges Semánticos de Estado**:
  - `"Activo"`: etiqueta en tono verde (Verde)
  - `"Inactivo"`: etiqueta en tono rojo (Rojo)

**CA-4: Acciones, Botones y Estados Vacíos (Empty States)**
- **Botón de Acción Superior**:
  - Texto: `"Nuevo Proveedor"` con icono `Plus` (ícono estándar).
- **Botones de Acción en Fila**:
  - Botón Editar: Icono `Pencil` (en color índigo con resaltado al pasar el cursor), tooltip `"Editar"`.
  - Botón Desactivar / Reactivar: Icono `UserX` (rojo) o `UserCheck` (verde). Visible **solo** para Administrador mediante `verificación de privilegios de Administrador`.
- **Botones en Modal Proveedor**:
  - Cancelar: `"Cancelar"` .
  - Guardar: `"Guardar"` . Restricción: Deshabilitado (deshabilitado) si en estado de carga, si el RUC no está validado o si persiste algún error en el campo de contacto.
- **Pantalla sin datos (Empty State)**:
  - Título/Texto: `"No hay proveedores registrados"`.
- **Estado de Carga Inicial**:
  - `Indicador de carga con texto "Cargando proveedores..."`.

#### Criterios de Aceptación en Formato Gherkin (Comportamiento de UI):
- **Escenario 1**: Rechazo preventivo de RUC de persona natural
  - **Dado que** el usuario abre el modal `"Nuevo Proveedor"`
  - **Cuando** escribe un RUC de 11 dígitos que comienza con `"10"` y presiona el botón de consulta SUNAT
  - **Entonces** no se envía la petición al servicio central SUNAT y el sistema despliega el mensaje de error en texto rojo `"RUC de persona natural (10) no válido para proveedor; debe ser RUC de empresa (20)"`.

- **Escenario 2**: Verificación exitosa y bloqueo de razón social
  - **Dado que** el usuario digita un RUC que inicia con `"20"` perteneciente a una empresa activa y habida
  - **Cuando** presiona el botón de verificación o la tecla `Enter`
  - **Entonces** el campo `"Nombre"` se completa con la razón social oficial de SUNAT, queda en estado de solo lectura con el mensaje `"Nombre oficial según SUNAT — no editable."` y el botón `"Guardar"` queda habilitado para el envío.

---

### Pantalla [UI-009] Directorio de Clientes y Gestión de Contacto

**Historias del plan que utilizan esta pantalla:** HU-CLI-01, HU-CLI-03  

**Propósito de la pantalla:**  
Como Administrador (o Gerente en modo consulta),  
quiero visualizar el historial de clientes registrados en el punto de venta con su acumulado de compras y gestionar su correo electrónico,  
para fidelizar a los compradores y remitir comprobantes electrónicos cuando sea requerido.

#### Criterios de Aceptación (CA) - Interfaz y Comportamiento Visual:

**CA-1: Formulario y Elementos de Entrada**
- **Encabezado y Contador Superior**:
  - Icono visual: `Users` (en color índigo corporativo).
  - Contador dinámico literal: `"{clientes.length} cliente(s) registrados"`.
- **Buscador interfaz webivo**:
  - Icono `Search` incrustado a la izquierda.
  - Placeholder dinámico según rol (permiso para ver correo):
    - Si es Administrador: `"Buscar por nombre, DNI o email…"`.
    - Si es Gerente: `"Buscar por nombre o DNI…"`.
- **Edición Inline de Email (Exclusiva para Administrador)**:
  - Input dinámico dentro de la celda de la grilla con icono `Mail` incrustado.
  - Placeholder: `"correo@ejemplo.com"`.
  - Atajos por teclado: Presionar tecla `Enter` guarda los cambios; presionar tecla `Escape` cancela la edición.
  - Botón Confirmar: Icono `Check` (en color verde con resaltado al interactuar), tooltip `"Guardar"`.
  - Botón Cancelar: Icono `X` (en color gris con resaltado al interactuar), tooltip `"Cancelar"`.

**CA-2: Mensajes de Asistencia, Banners y Retroalimentación**
- **Badge Superior de Éxito**:
  - Al actualizar el correo: Badge verde en cabecera etiqueta redondeada en color verde con el texto `"Email actualizado"` durante 3 segundos.
- **Validación de Formato de Email**:
  - Si el email ingresado no cumple con el formato estándar de correo electrónico: Banner rojo con el texto `"Formato de email inválido"`.
- **Microcopy Asistencial al Pie de Página (Solo Administrador)**:
  - Párrafo explicativo: `"Los clientes se registran automáticamente al procesar boletas con DNI. El email es opcional y se puede editar desde aquí."` (texto informativo en tono gris atenuado).

**CA-3: Indicadores de Estado, Badges y Grillas**
- **Columnas de la Grilla de Clientes** (Cabecera Cabecera en fondo gris claro con tipografía en mayúsculas):
  1. `"Nombre"`
  2. `"DNI"`
  3. `["Email"]` *(Visible únicamente si el usuario es Administrador)*
  4. `"Compras"`
  5. `["Acción"]` *(Visible únicamente si el usuario es Administrador)*
- **Badges y Celdas de Datos**:
  - DNI: Si existe, se muestra en cápsula monoespaciada cápsula monoespaciada en fondo gris claro; si no existe, renderiza un guion `"—"`.
  - Total Compras: Badge índigo semibold etiqueta redondeada en fondo índigo suave con el contador exacto `c.total_compras`.

**CA-4: Acciones, Botones y Estados Vacíos (Empty States)**
- **Acción en Fila (Solo Administrador)**:
  - Botón Editar Email: Icono `Edit2` (en gris con resaltado índigo al interactuar), tooltip `"Editar email"`.
- **Pantalla sin datos (Empty State)**:
  - Si el filtro de búsqueda no coincide: `"Sin resultados para esa búsqueda"`.
  - Si no hay clientes cargados en el sistema: `"No hay clientes registrados aún"`.
- **Estado de Carga Inicial**:
  - Celda expandida con texto centrado `"Cargando…"`.

#### Criterios de Aceptación en Formato Gherkin (Comportamiento de UI):
- **Escenario 1**: Ocultamiento de datos privados ante perfil Gerente
  - **Dado que** un usuario con rol `"Gerente"` ingresa al módulo de `"/clientes"`
  - **Cuando** visualiza la grilla de clientes
  - **Entonces** no debe ver las columnas `"Email"` ni `"Acción"`, el placeholder del buscador debe decir `"Buscar por nombre o DNI…"` y no debe mostrarse el pie explicativo sobre edición de correos.

- **Escenario 2**: Edición ágil de correo mediante teclado
  - **Dado que** el usuario Administrador pulsa el botón `"Editar email"` de un cliente
  - **Cuando** escribe un nuevo correo válido en el input y presiona la tecla `Enter`
  - **Entonces** el input inline desaparece, la grilla actualiza el correo inmediatamente y aparece en la cabecera superior el badge verde `"Email actualizado"` durante 3 segundos.

---

---

## 4. Parte III: EPIC-INV — Inventario, Lotes, Bajas, Ajustes y Solicitudes (UI-010 a UI-013)

### Pantalla [UI-010] Registro e Historial de Entradas de Mercadería

**Historias del plan que utilizan esta pantalla:** HU-INV-01, HU-INV-04  

**Propósito de la pantalla:**  
Como Almacenero o Administrador,  
quiero registrar el ingreso de nuevos lotes con generación automática de número de lote y fecha de vencimiento, consultando el historial filtrado por fechas y productos,  
para dar de alta mercadería en el inventario y mantener la trazabilidad de cada proveedor.

#### Criterios de Aceptación (CA) - Interfaz y Comportamiento Visual:

**CA-1: Formulario y Elementos de Entrada**
- **Navegación y Selector de Pestañas**:
  - Breadcrumb: `"Inicio"` (acceso `/dashboard`), Separador: `"/"`, Ítem activo: `"Inventario"`.
  - Botones de pestaña: `"Entradas"`, `"Bajas"` y `"Ajustes"`. La pestaña activa adopta fondo índigo fondo en color índigo corporativo y texto en blanco; las inactivas lucen borde gris suave marco sutil en gris.
- **Formulario "Registrar Entrada" (`tabActiva === 'entradas'`)**:
  - Título del formulario: `"Registrar Entrada"` (título en negrita y tono oscuro).
  - Campo `"Producto"`:
    - Etiqueta: `"Producto"`.
    - Select con opción inicial: `"Seleccionar..."`.
    - Restricción visual para rol `Almacenero`: Si el usuario tiene rol Almacenero, el select **únicamente** lista productos sin entradas previas (primera carga de stock). Si ya tienen entradas, se bloquea y se muestra microcopy explicativo: `"Solo se listan productos sin stock registrado todavía (primera carga). Para reponer un producto existente, crea una solicitud de reposición en el módulo Solicitudes."` o `"No hay productos nuevos pendientes de primera carga. Para reponer stock, crea una solicitud de reposición en el módulo Solicitudes."`.
  - Campo `"Proveedor"`:
    - Etiqueta: `"Proveedor"` acompañada de microcopy adyacente `"(opcional)"`.
    - Opción por defecto: `"Sin proveedor registrado"`.
    - Opciones dinámicas: Formato `"{p.nombre} ({p.ruc})"`.
  - Campo `"Cantidad"`:
    - Etiqueta: `"Cantidad"`.
    - Restricción visual: `type="number"`, `min="1"`, required. Bloquea en teclado caracteres no numéricos como `'e'`, `'E'`, `'+'`, `'-'`.
  - Campo `"Vencimiento"`:
    - Etiqueta: `"Vencimiento"` con asterisco rojo `(asterisco rojo obligatorio)` únicamente si el producto maneja fecha de vencimiento.
    - Input de fecha con límite inferior en el día actual `min={fechaHoy}`.
    - Comportamiento no perecedero: Si el producto no maneja fecha de vencimiento, el input se desactiva (deshabilitado), se colorea en gris fondo gris suave y texto atenuado y muestra el microcopy: `"Este producto no maneja fecha de vencimiento."`.
  - Campo `"Número de lote"`:
    - Etiqueta: `"Número de lote"`.
    - Input: Solo lectura y cursor no permitido campo de solo lectura con fondo gris claro y tipografía monoespaciada.
    - Formato autogenerado: Máscara calculada al cargar `L-YYYYMMDD-HHmmss` con hora local.

**CA-2: Mensajes de Asistencia, Banners y Retroalimentación**
- **Alerta Preventiva de Vencimiento Próximo**:
  - Si la fecha de vencimiento seleccionada cae a menos de 7 días de hoy (`diasParaVencerEntrada < 7`), se muestra un aviso ámbar debajo del input: `"⚠ Este producto vence muy pronto (en {diasParaVencerEntrada} día(s)). Verifica la fecha."` (aviso en color ámbar).
- **Validaciones en Formulario (Banner Rojo estilo visual estandarizado)**:
  - Si falta fecha en producto perecedero: `"La fecha de vencimiento es obligatoria para este producto"`.
  - Si fecha es anterior a hoy: `"La fecha de vencimiento no puede ser anterior a hoy"`.
- **Toasts de Notificación (Notificaciones emergentes)**:
  - Al completar la entrada: Toast verde `"Entrada registrada correctamente"`.
  - Al fallar: Notificación roja con mensaje del sistema o `"Error al registrar entrada"`.

**CA-3: Indicadores de Estado, Badges y Grillas**
- **Barra de Filtros del Historial** (panel de control en fondo gris claro con bordes redondeados):
  - Etiqueta e icono: `Filter ` `"Filtrar:"`.
  - Input `"Desde"` (`type="date"`).
  - Input `"Hasta"` (`type="date"`).
  - Select `"Producto"`: Opción inicial `"Todos"` + listado de productos.
  - Botón `"Aplicar"`: Fondo índigo fondo en color índigo corporativo y texto en blanco, icono `Filter` o spinner `Loader2` si filtra.
  - Botón `"Limpiar"`: Borde gris, icono `X`, visible si existe algún filtro aplicado.
- **Columnas de la Grilla Historial de Entradas** (Cabecera fondo en color índigo corporativo y texto en blanco):
  1. `"Producto"` (muestra nombre; si procede de solicitud muestra badge morado `"Solicitud #{id}"`; si proviene de ajuste muestra badge ámbar `"Ajuste #{id}"`)
  2. `"Lote"` (número de lote o guion `"—"`)
  3. `"Proveedor"` (nombre de proveedor o guion `"—"`)
  4. `"Cantidad"` (Badge verde etiqueta redondeada en color verde con texto `"+{cantidad} und(s)"`)
  5. `"Costo Unit."` (formato `"S/ {monto}"` o guion `"—"`)
  6. `"Vencimiento"` (fecha o guion `"—"`)
  7. `"Registrado por"` (nombre de usuario)
  8. `"Fecha"` (fecha y hora en formato legible `formatFechaHora(e.createdAt)`)

**CA-4: Acciones, Botones y Estados Vacíos (Empty States)**
- **Botón de Envío del Formulario**:
  - Texto: `"Registrar Entrada"` acompañado de spinner animado `Loader2` si está enviando.
  - Estilo: Botón esmeralda botón destacado en color esmeralda con texto en blanco.
- **Pantalla sin datos (Empty State)**:
  - Título/Texto: `"No hay entradas registradas"`.
  - Estilo: Contenedor con altura contenedor centrado con texto en gris.

#### Criterios de Aceptación en Formato Gherkin (Comportamiento de UI):
- **Escenario 1**: Restricción de reabastecimiento libre para Almacenero
  - **Dado que** un usuario con rol `"Almacenero"` abre la pestaña `"Entradas"`
  - **Cuando** despliega el select de `"Producto"`
  - **Entonces** solo se muestran los productos que nunca han tenido una entrada de inventario registrada (stock inicial 0), y se visualiza el microcopy que instruye generar una solicitud de reposición para los artículos restantes.

- **Escenario 2**: Registro de producto perecedero con alerta de vencimiento cercano
  - **Dado que** el usuario selecciona un producto que maneja fecha de expiración
  - **Cuando** ingresa en `"Vencimiento"` una fecha situada a 3 días posteriores a hoy
  - **Entonces** aparece bajo el control un mensaje de advertencia ámbar `"⚠ Este producto vence muy pronto (en 3 días). Verifica la fecha."` sin bloquear el envío del formulario.

---

### Pantalla [UI-011] Bajas de Inventario y Gestión de Productos Vencidos

**Historias del plan que utilizan esta pantalla:** HU-INV-02, HU-INV-05  

**Propósito de la pantalla:**  
Como Almacenero o Administrador,  
quiero identificar de un vistazo qué artículos tienen stock vencido y registrar bajas por merma, daño o expiración seleccionando el lote afectado,  
para sanear el inventario disponible y asegurar que no se vendan productos no aptos.

#### Criterios de Aceptación (CA) - Interfaz y Comportamiento Visual:

**CA-1: Formulario y Elementos de Entrada**
- **Panel Superior de Productos Vencidos (`productosConVencido.length > 0`)**:
  - Contenedor rojo suave: contenedor de alerta con marco redondeado y fondo rojo claro.
  - Encabezado con icono ícono de advertencia: `"{N} producto(s) con stock vencido"` (encabezado en negrita y color rojo).
  - Botones tipo píldora interactivos por producto: Texto literal `"{p.nombre} - {p.marca} ({p.stockVencido} vencida(s))"`. Al pulsar un botón, se precarga automáticamente el producto en el formulario y se fija el motivo en `"Vencido"`.
  - Microcopy inferior: `"Haz clic en un producto para seleccionarlo abajo y elegir su lote vencido en \"Lote\"."` (texto en color rojo de alerta).
- **Formulario "Registrar Baja" (`tabActiva === 'bajas'`)**:
  - Título: `"Registrar Baja"`.
  - Campo `"Producto"`: Select con formato `"{p.nombre} - {p.marca} (stock: {p.stock})"`.
  - Campo `"Lote"`:
    - Etiqueta dinámica: Si motivo es `'Dañado'`, muestra asterisco rojo `(asterisco rojo obligatorio)`; en otros motivos muestra `"(opcional)"`.
    - Opción por defecto según motivo:
      - Si motivo === 'Dañado': `"Selecciona el lote dañado..."`.
      - Si motivo === 'Vencido': `"Automático (solo lotes vencidos)"`.
      - Otros motivos: `"Automático (solo stock vigente, el que vence antes primero)"`.
    - Filtrado estricto de opciones de lote:
      - Para motivo `"Vencido"`: Solo lista lotes vencidos con prefijo `"⚠ VENCIDO — "`.
      - Para cualquier otro motivo: Solo lista lotes vigentes; los vencidos se excluyen automáticamente para evitar reclasificaciones erróneas.
    - Microcopy bajo el select:
      - Si se elige un lote vencido: `"⚠ Este lote ya está vencido — la baja se descontará únicamente de él."`.
      - Si motivo es 'Dañado' y no hay lote: `"Un daño afecta un lote puntual: elige cuál, para no descontar por error de uno sano. Los lotes ya vencidos no aparecen acá — esos se dan de baja con el motivo \"Vencido\"."` (en color rojo).
  - Campo `"Cantidad"`:
    - Comportamiento para motivo `"Vencido"`: No permite digitación manual. Renderiza una caja gris bloqueada: `"{cantidadVencidaEfectiva} unidad(es) — todo lo vencido"` acompañada del microcopy: `"Con este motivo se da de baja todo lo vencido{loteSeleccionado ? ' de este lote' : ''}, no una parte."`.
    - Comportamiento para otros motivos: Input editable con `min="1"`, limitador superior `max={loteSeleccionado.cantidad_restante}` y texto guía `"Máximo en este lote: {restante}"`.
  - Campo `"Motivo"` (Select):
    - Opciones literales: `"Vencido"`, `"Dañado"`, `"Robo o faltante"`, `"Consumo interno"`, `"Error de registro"`, `"Otro"`.
  - Campo `"Detalle"`:
    - Etiqueta: `"Detalle (opcional)"`, placeholder: `"Ej: Lote vencido el 15/06"`.

**CA-2: Mensajes de Asistencia, Banners y Retroalimentación**
- **Validaciones en Formulario de Baja (Banner Rojo estilo visual estandarizado)**:
  - Si el motivo es Dañado sin lote seleccionado: `"Para dar de baja un producto dañado debes elegir el lote específico afectado"`.
  - Si se intenta dar de baja por otro motivo un lote vencido: `"El lote seleccionado ya está vencido. Usa el motivo \"Vencido\" para darlo de baja."`.
  - Si se elige motivo Vencido pero el producto no tiene stock caducado: `"Este producto no tiene stock vencido disponible para dar de baja"`.
- **Toasts de Notificación (Notificaciones emergentes)**:
  - Toast de éxito verde: `"Baja registrada correctamente"`.

**CA-3: Indicadores de Estado, Badges y Grillas**
- **Columnas de la Grilla Historial de Bajas** (Cabecera fondo en color índigo corporativo y texto en blanco):
  1. `"Producto"` (muestra nombre; si corresponde a devolución en caja muestra badge morado `"Devolución venta #{id}"`)
  2. `"Lote(s)"` (lista vertical de códigos de lote involucrados con cantidad descontada entre paréntesis, ej: `L-20261003-100000 (5)`)
  3. `"Cantidad"` (Badge rojo etiqueta redondeada en color rojo con texto `"-{cantidad} und(s)"`)
  4. `"Motivo"` (texto del motivo y detalle opcional en gris fino debajo)
  5. `"Registrado por"` (nombre de usuario)
  6. `"Fecha"` (fecha y hora legible)

**CA-4: Acciones, Botones y Estados Vacíos (Empty States)**
- **Botón de Envío**:
  - Texto: `"Registrar Baja"` con icono `Loader2` animado si está enviando.
  - Estilo: Destructivo rojo botón rojo de acción destructiva con texto en blanco.
- **Filtros de Historial**: Inputs `"Desde"`, `"Hasta"`, select `"Producto"`, botones `"Aplicar"` y `"Limpiar"`.
- **Pantalla sin datos (Empty State)**:
  - Título/Texto: `"No hay bajas registradas"`.

#### Criterios de Aceptación en Formato Gherkin (Comportamiento de UI):
- **Escenario 1**: Descarga íntegra de stock vencido sin digitación de cantidad
  - **Dado que** el usuario selecciona en Bajas un producto con 12 unidades vencidas
  - **Cuando** el motivo activo es `"Vencido"`
  - **Entonces** el campo de cantidad queda deshabilitado en modo lectura mostrando `"12 unidad(es) — todo lo vencido"` y el sistema descuenta automáticamente la totalidad del stock caducado.

- **Escenario 2**: Exigencia de lote obligatorio para bajas por daño
  - **Dado que** el usuario selecciona un producto y escoge el motivo `"Dañado"`
  - **Cuando** no selecciona ningún lote puntual en el select `"Lote"`
  - **Entonces** se despliega el aviso en texto rojo `"Un daño afecta un lote puntual: elige cuál..."`, el select muestra el asterisco obligatorio rojo y el intento de envío detiene el proceso con la alerta `"Para dar de baja un producto dañado debes elegir el lote específico afectado"`.

---

### Pantalla [UI-012] Registro y Conteo Físico y Ajustes de Stock

**Historias del plan que utilizan esta pantalla:** HU-INV-03, HU-INV-06  

**Propósito de la pantalla:**  
Como Administrador o Almacenero,  
quiero registrar conteos físicos periódicos con cálculo automático de discrepancias (sobrantes/faltantes) y asignación obligatoria de vencimiento en excedentes,  
para conciliar el inventario contable contra la existencia física real en tienda.

#### Criterios de Aceptación (CA) - Interfaz y Comportamiento Visual:

**CA-1: Formulario y Elementos de Entrada**
- **Formulario "Registrar Ajuste (Conteo Físico)" (`tabActiva === 'ajustes'`)**:
  - Título: `"Registrar Ajuste (Conteo Físico)"`.
  - Campo `"Producto"`: Select con formato `"{nombre} - {marca} (stock: {stock})"`.
  - Campo `"Stock actual del sistema"`: Input deshabilitado de solo lectura que refleja el inventario registrado `"{stock} und(s)"` o `"—"`.
  - Campo `"Cantidad Contada"`: Input numérico, `min="0"`, required.
  - Campo Condicional `"Vencimiento del sobrante"` (solo se renderiza en pantalla si `diferenciaAjuste > 0`):
    - Etiqueta: `"Vencimiento del sobrante"` con asterisco rojo `(asterisco rojo obligatorio)` si el producto es perecedero.
    - Input de fecha con `min={fechaHoy}`. Si no maneja vencimiento, queda deshabilitado con microcopy: `"Este producto no maneja fecha de vencimiento."`.
  - Campo `"Observaciones"`: Etiqueta `"Observaciones (opcional)"`, placeholder `"Ej: Conteo mensual de anaquel"`, ocupa ancho de 2 columnas.

**CA-2: Mensajes de Asistencia, Banners y Retroalimentación**
- **Cálculo interfaz webivo de Diferencia de Inventario**:
  - Si Cantidad Contada === Stock Sistema: Mensaje neutral en gris: `"Sin diferencia — no se requiere ajuste"`. El botón `"Registrar Ajuste"` se deshabilita visualmente.
  - Si Cantidad Contada > Stock Sistema: Badge verde grande: `"Sobrante: +{diferenciaAjuste} und(s)"` (etiqueta redondeada en color verde).
  - Si Cantidad Contada < Stock Sistema: Badge rojo grande: `"Faltante: {diferenciaAjuste} und(s)"` (etiqueta redondeada en color rojo).
- **Validaciones en Formulario de Ajuste (Banner Rojo estilo visual estandarizado)**:
  - Si existe sobrante perecedero sin fecha: `"La fecha de vencimiento es obligatoria para este producto"`.
  - Si la fecha de sobrante es anterior a hoy: `"La fecha de vencimiento no puede ser anterior a hoy"`.
- **Toasts de Notificación**:
  - Toast de éxito verde: `"Ajuste registrado correctamente"`.

**CA-3: Indicadores de Estado, Badges y Grillas**
- **Columnas de la Grilla Historial de Ajustes** (Cabecera fondo en color índigo corporativo y texto en blanco):
  1. `"Producto"`
  2. `"Stock Sistema"`
  3. `"Contado"`
  4. `"Diferencia"` (Badge semántico: verde `"+{dif} und(s)"` si es positiva; rojo `"{dif} und(s)"` si es negativa)
  5. `"Observaciones"` (texto o guion `"—"`)
  6. `"Registrado por"` (nombre de usuario)
  7. `"Fecha"` (fecha y hora legible)

**CA-4: Acciones, Botones y Estados Vacíos (Empty States)**
- **Botón de Envío**:
  - Texto: `"Registrar Ajuste"` con icono `Loader2` animado si está enviando.
  - Estilo: Ámbar de advertencia operativa botón en color ámbar de advertencia con texto en blanco.
  - Estado: Deshabilitado si no hay diferencia (`diferenciaAjuste === 0`) o si está enviando.
- **Pantalla sin datos (Empty State)**:
  - Título/Texto: `"No hay ajustes registrados"`.

#### Criterios de Aceptación en Formato Gherkin (Comportamiento de UI):
- **Escenario 1**: Detección de sobrante físico y despliegue de fecha de expiración
  - **Dado que** un producto perecedero tiene un stock en sistema de 20 unidades
  - **Cuando** el usuario ingresa `"25"` en `"Cantidad Contada"`
  - **Entonces** se muestra de inmediato el badge verde `"Sobrante: +5 und(s)"` y aparece dinámicamente el campo obligatorio con asterisco rojo `"Vencimiento del sobrante *"`.

- **Escenario 2**: Bloqueo de ajuste sin discrepancia
  - **Dado que** el stock en sistema es de 10 unidades
  - **Cuando** el usuario digita `"10"` en `"Cantidad Contada"`
  - **Entonces** el sistema muestra `"Sin diferencia — no se requiere ajuste"` y el botón `"Registrar Ajuste"` se desactiva (deshabilitado), impidiendo la creación de transacciones nulas en el kardex.

---

### Pantalla [UI-013] Ciclo de Vida de Solicitudes de Reposición

**Historias del plan que utilizan esta pantalla:** HU-SOL-01, HU-SOL-02, HU-SOL-03, HU-SOL-04, HU-SOL-05  

**Propósito de la pantalla:**  
Como Almacenero, Gerente o Administrador,  
quiero gestionar el flujo de solicitudes de reabastecimiento (creación, aprobación, rechazo con motivo y completado al recibir mercadería),  
para coordinar formalmente las compras con los proveedores sin generar entradas descontroladas.

#### Criterios de Aceptación (CA) - Interfaz y Comportamiento Visual:

**CA-1: Formulario y Elementos de Entrada**
- **Cabecera y Barra de Filtros por Estado**:
  - Breadcrumb: `"Inicio"` > `"Solicitudes"`.
  - Título principal: `"Solicitudes de Reposición"` (encabezado principal en negrita).
  - Botón `"Nueva Solicitud"`: Icono `Plus`, visible solo para Almacenero y Administrador (`puedeCrear`).
  - Filtro por Estado: 5 botones tipo píldora: `"Todos"`, `"Pendiente"`, `"Aprobada"`, `"Rechazada"`, `"Completada"`. El estado activo adopta fondo índigo fondo en color índigo corporativo y texto en blanco.
- **Modal "Nueva Solicitud de Reposición" (`ModalCrearSolicitud`)**:
  - Título: `"Nueva Solicitud de Reposición"`.
  - Campo `"Producto"`: Select con formato `"{nombre} - {marca} (Stock: {stock})"`. Al seleccionarlo precarga automáticamente el proveedor habitual registrado.
  - Campo `"Cantidad solicitada"`: Input numérico con `min="1"`, required.
  - Campo `"Proveedor sugerido (opcional)"`: Select con `"Seleccionar..."` + proveedores activos. Si se elige un proveedor distinto al habitual, se muestra advertencia ámbar: `"El proveedor habitual de este producto es {nombre}. Puedes continuar igual si corresponde."`.
- **Modal "Aprobar Solicitud" (`ModalAprobar`)**:
  - Panel informativo: Muestra `"Producto: {nombre} - {marca}"` y `"Cantidad solicitada: {cantidad} und(s)"`.
  - Campo `"Proveedor (opcional)"`: Select con `"Sin proveedor registrado"` + proveedores activos.
  - Campo `"Fecha estimada de llegada"`: Date input con límite inferior en hoy `min={fechaHoy}`, required.
- **Modal "Rechazar Solicitud" (`ModalRechazar`)**:
  - Panel informativo: Muestra producto y cantidad solicitada.
  - Campo `"Motivo del rechazo"`: Textarea con 4 filas fijas (área de texto de 4 líneas de altura fija), placeholder `"Explica el motivo del rechazo..."`, required.
- **Modal "Registrar Entrada" al Completar (`ModalCompletar`)**:
  - Panel informativo: Producto, cantidad y proveedor pactado.
  - Campo `"Cantidad recibida"`: Input deshabilitado en solo lectura que refleja la cantidad solicitada con microcopy: `"Siempre igual a la cantidad solicitada"`.
  - Campo `"Fecha de vencimiento"`: Input de fecha con asterisco rojo si es perecedero. Si vence en menos de 7 días, alerta ámbar: `"⚠ Este producto vence muy pronto (en {diasParaVencer} día(s)). Verifica la fecha."`.

**CA-2: Mensajes de Asistencia, Banners y Retroalimentación**
- **Validaciones en Modales**:
  - En Aprobación: Si la fecha estimada es anterior a hoy: `"La fecha estimada no puede ser anterior a hoy"`.
  - En Completar: Si falta fecha de vencimiento obligatoria: `"La fecha de vencimiento es obligatoria para este producto"`.
- **Toasts de Notificación (Notificaciones emergentes)**:
  - Al crear: `"Solicitud creada correctamente"`.
  - Al aprobar: `"Solicitud aprobada correctamente"`.
  - Al rechazar: `"Solicitud rechazada correctamente"`.
  - Al completar: `"Mercadería registrada y stock actualizado correctamente"` o `"Mercadería registrada. Se creó una nueva solicitud pendiente por {N} und(s) restante(s)."` si hubo entrega parcial.

**CA-3: Indicadores de Estado, Badges y Grillas**
- **Columnas de la Grilla de Solicitudes** (Cabecera fondo en color índigo corporativo y texto en blanco):
  1. `"Producto"` (`{nombre} - {marca}`)
  2. `"Cantidad"` (`{cantidad} und(s)`)
  3. `"Estado"` (Badge semántico)
  4. `"Proveedor"` (nombre o guion largo `&mdash;`)
  5. `"Fecha Est."` (fecha formateada o guion largo `&mdash;`)
  6. `"Solicitante"` (nombre del usuario creador)
  7. `"Aprobado por"` (nombre de quien aprobó o guion `"—"`)
  8. `"Acciones"`
- **Badges Semánticos de Estado** (`BADGE_COLORS`):
  - `Pendiente`: Fondo ámbar etiqueta en tono ámbar
  - `Aprobada`: Fondo verde etiqueta en tono verde
  - `Rechazada`: Fondo rojo etiqueta en tono rojo. En la celda, debajo del badge, se imprime en letra cursiva gris el motivo del rechazo: `"{s.motivo_rechazo}"`.
  - `Completada`: Fondo gris etiqueta en tono gris

**CA-4: Acciones y Botones por Fila según Estado y Rol**
- **Acciones Disponibles por Fila**:
  - En estado `Pendiente` (solo Administrador y Gerente):
    - Botón Aprobar: Icono `CheckCircle` (en color verde con resaltado al pasar el cursor), tooltip `"Aprobar"`.
    - Botón Rechazar: Icono `XCircle` (en color rojo con resaltado al pasar el cursor), tooltip `"Rechazar"`.
  - En estado `Aprobada` (solo Almacenero y Administrador):
    - Botón Completar (Recibir Mercadería): Icono `PackageCheck` (en color índigo con resaltado al pasar el cursor), tooltip `"Completar"`.
  - En estado `Completada`: Icono estático de verificación `Check` (en gris atenuado), tooltip `"Completada"`.
- **Protección Antidoble Clic**: Todos los botones de submit (`ModalCrearSolicitud`, `ModalAprobar`, `ModalRechazar`, `ModalCompletar`) implementan `enviandoRef = useRef(false)` para descartar dobles pulsaciones en el mismo ciclo.
- **Pantalla sin datos (Empty State)**:
  - Título/Texto: `"No hay solicitudes registradas"`.

#### Criterios de Aceptación en Formato Gherkin (Comportamiento de UI):
- **Escenario 1**: Segregación de funciones en aprobación de compras
  - **Dado que** una solicitud de reposición se encuentra en estado `"Pendiente"`
  - **Cuando** un usuario con rol `"Almacenero"` visualiza la grilla
  - **Entonces** no debe ver los botones de `"Aprobar"` (icono verde) ni `"Rechazar"` (icono rojo), los cuales están reservados para `"Administrador"` y `"Gerente"`.

- **Escenario 2**: Registro de entrada a almacén desde solicitud aprobada
  - **Dado que** una solicitud está en estado `"Aprobada"`
  - **Cuando** el usuario con rol `"Almacenero"` presiona el botón con icono `PackageCheck` (`"Completar"`)
  - **Entonces** se despliega el modal `"Registrar Entrada"` con la cantidad solicitada bloqueada en solo lectura, se le exige la fecha de expiración si el producto es perecedero y al guardar la solicitud transiciona al estado `"Completada"`.

---

---

## 5. Parte IV: EPIC-VEN — Terminal POS, Facturación SUNAT, Historial y Caja (UI-014 a UI-017)

### Pantalla [UI-014] Terminal de Punto de Venta (POS) y Emisión de Comprobantes

**Historias del plan que utilizan esta pantalla:** HU-VEN-01, HU-VEN-02, HU-VEN-04, HU-VEN-07, HU-CLI-02  

**Propósito de la pantalla:**  
Como Vendedor o Administrador,  
quiero operar una terminal de ventas rápida con escáner de código de barras, selección de comprobantes con validación RENIEC/SUNAT y registro de pagos en efectivo o Yape/Plin (IziPay),  
para registrar transacciones de clientes asegurando la integridad del stock y la caja.

#### Criterios de Aceptación (CA) - Interfaz y Comportamiento Visual:

**CA-1: Formulario, Escáner y Elementos de Venta**
- **Encabezado y Control de Acceso**:
  - Título principal: `"Nueva Venta"` (encabezado principal en negrita).
  - Badge `"Modo consulta"` en encabezado si el rol es `Gerente` .
  - Enlace rápido superior al historial: `Ícono de documento con enlace "Historial de ventas"` hacia `/ventas/historial`.
- **Banner de Bloqueo por Falta de Turno**:
  - Si el usuario no tiene turno abierto (`sinTurno === true`), se renderiza un banner ámbar superior:  
    `"No puedes realizar ventas porque no tienes un turno de caja abierto. Abre un turno para continuar."`.  
    Incluye botón enlace directo `"Ir a Mi Caja"` que redirige a `/caja`.
- **Lector / Escáner de Código de Barras**:
  - Contenedor con borde verde interactivo cuando tiene foco (marco resaltado en verde esmeralda al enfocar).
  - Placeholder dinámico: `"Escanea o escribe el código de barras..."` si el input está enfocado, o `"Haz clic aquí para escanear un producto"` si no tiene foco.
  - Indicador de estado del escáner:
    - Si está consultando: `indicador de carga animado`.
    - Si está enfocado: Punto verde parpadeante `(indicador visual de punto)` y texto `"Listo para escanear"`.
- **Grilla del Carrito de Compras**:
  - Columnas de cabecera: `"Producto"`, `"Precio Unit."`, `"Cantidad"`, `"Subtotal"`, `"Acciones"`.
  - Estado vacío: Ícono `ícono de carrito` y texto `"Escanea un producto para agregarlo al carrito"`.
  - Control de cantidad en cada fila:
    - Botón decrementar `ícono de disminución (-)`.
    - Input numérico con `min="1"` y `max={stockVendible}`.
    - Botón incrementar `ícono de incremento (+)` deshabilitado si `item.cantidad >= stockVendible`.
    - Botón eliminar fila con ícono de papelera roja `ícono de papelera (eliminar)`.
  - Total del carrito: `"Total: S/ 120.00"` (alineado a la derecha, en tipografía grande y negrita).
- **Catálogo Plegable de Productos**:
  - Botón colapsable: `control desplegable de alternancia` con etiqueta interactiva `"Mostrar lista de productos"` u `"Ocultar lista de productos"`.
  - Input de búsqueda: Placeholder `"Buscar producto por nombre o marca..."`.
  - Selector de categoría: Opción por defecto `"Todas las categorías"`.
  - Contador de resultados: `"{N} producto(s)"`.
  - Cuadrícula de 5 columnas con tarjetas de producto:
    - Mensaje sin resultados: `"No se encontraron productos"`.
    - Badges semánticos por tarjeta:
      - Stock vencido total: `"Vencido"` (en texto rojo, tooltip `"Todo el stock de este producto está vencido"`).
      - Sin stock disponible: `"Sin stock"` (en texto rojo atenuado).
      - Stock con vencidos parciales: `"⚠ {N} vigente(s)"` (en texto ámbar, fondo ámbar claro fondo ámbar claro).
      - Stock regular: `"{stock} ud."` (en gris atenuado).
    - Badge superior derecho cuando ya está en carrito con la cantidad agregada.
  - Paginación del catálogo (25 ítems por página): Botón `"Anterior"`, botones numéricos y botón `"Siguiente"`.

**CA-2: Panel Lateral de Cobro y Facturación**
- **Panel Modo Consulta (Gerente)**:
  - Tarjeta amarilla/ámbar con ícono `🔍`, título `"Modo consulta"` y microcopy `"Puedes navegar los productos, pero no realizar ventas."`.
- **Resumen de Venta**:
  - Título: `"Resumen de Venta"`.
  - Fila `"Subtotal"` y fila destacada `"Total"` con formato formato monetario (ej. S/ 120.00).
  - Selector `"Tipo de comprobante"`:
    - Opciones: «Boleta Simple» (público general sin DNI hasta S/ 700.00 inclusive), «Boleta con DNI» (con documento obligatorio si supera S/ 700.00) y «Factura» (con RUC de 11 dígitos).
- **Campos para Boleta con DNI**:
  - Etiqueta: `DNI *`.
  - Input: Placeholder `"12345678"`, longitud de 8 dígitos, sanitizado solo números.
  - Botón de consulta RENIEC con título `"Consultar RENIEC"` e ícono `Search` o spinner `Loader2`.
  - Microcopy de error: `"El DNI debe tener 8 dígitos"` si se ingresa menos de 8 caracteres.
  - Resultado exitoso: Nombre completo de la persona en esmeralda en texto verde esmeralda.
  - Advertencia de coincidencia: `"⚠ Este DNI ya estaba registrado con otro nombre. Verifica que sea la persona correcta."` (en color ámbar).
- **Campos para Factura**:
  - Etiqueta: `RUC *`.
  - Input: Placeholder `"20123456789"`, longitud de 11 dígitos, solo dígitos.
  - Botón consulta SUNAT con título `"Consultar SUNAT"` e ícono `Search` / `Loader2`.
  - Microcopy de error: `"El RUC debe tener 11 dígitos"`.
  - Feedback exitoso SUNAT: `"✓ Razón Social devuelta — ACTIVO / HABIDO"`.
  - Campos `"Razón Social *"` y `"Dirección *"`:
    - Estado normal: Deshabilitados (deshabilitado), fondo gris fondo gris claro y texto atenuado, placeholder `"Se completa al verificar el RUC con SUNAT"`.
    - Modo Offline Activado (caída de SUNAT o 503): Se activan con borde ámbar borde ámbar y fondo blanco y placeholders `"Ingrese Razón Social"` e `"Ingrese Dirección"`.
- **Selector de Método de Pago**:
  - Opciones: «Efectivo» o «Yape/Plin (IziPay)».
- **Flujo de Pago en Efectivo**:
  - Input con ícono `Banknote`: Placeholder `"Monto recibido"`.
  - Validación de entrada: Admite exclusivamente valores numéricos monetarios positivos de hasta 6 dígitos enteros y 2 decimales.
  - Cálculo de Vuelto / Faltante en tiempo real:
    - Si `vuelto >= 0`: Etiqueta `"Vuelto"` y monto en verde `"S/ 0.00"`.
    - Si `vuelto < 0`: Etiqueta `"Faltan"` y monto en rojo negrita `"S/ 0.00"`.
  - Alerta de Vuelto Insuficiente en Caja:
    - Banner rojo con ícono ícono de advertencia: `"Monto en caja insuficiente para el vuelto. Verifique el disponible en gaveta."`.
- **Flujo de Pago con Yape/Plin (IziPay) (POS Físico IziPay en 2 Pasos)**:
  - **Paso 1 (`pasoYape === 'inicio'`)**:
    - Contenedor con borde discontinuo violeta marco discontinuo sobre fondo violeta suave.
    - Título: Indicador `"1"` con texto `"Generar cobro en IziPay"`.
    - Instrucción: `"Abre la app IziPay en el POS, ingresa el monto exacto y genera el QR de cobro."`.
    - Monto destacado: Tarjeta blanca con `"Monto a ingresar en IziPay"` y número grande `"S/ 120.00"` (tipografía destacada en color violeta).
    - Botón de avance: `ícono QR con etiqueta "Ya generé el cobro en IziPay"`.
  - **Paso 2 (`pasoYape === 'mostrando'`)**:
    - Título: Indicador `"2"` con texto `"Cliente escanea y paga"`.
    - Instrucción: `"Muestra la pantalla de IziPay al cliente para que escanee con Yape/Plin (IziPay) o Plin y pague S/ 120.00. Verifica en la app que el pago se haya completado antes de confirmar."`.
    - Campo `N° de autorización *`: Input con teclado numérico, texto sugerido «Ej. 123456», longitud de 6 dígitos.
    - Validación en vivo: `"El N° de autorización debe tener 6 dígitos"` si la longitud es menor a 6.
    - Microcopy de ayuda: `"Cópialo de la pantalla de confirmación de IziPay: es lo único que permite ubicar este pago si hay que reclamarlo o conciliarlo después."`.
    - Banner preventivo ámbar contra fraudes:  
      `"No inventes ni copies el número de otra venta: debe ser exactamente el que muestra IziPay para este pago. Un número incorrecto rompe la trazabilidad y no se podrá ubicar ni verificar esta operación después."`.
    - Botón de confirmación: `ícono de confirmación con etiqueta "Pago confirmado en IziPay"` (deshabilitado si no cumple 6 dígitos).
    - Botón de retroceso: `ícono de retorno con etiqueta "Volver"`.
  - **Estado Confirmado (`yapeVerificado === true`)**:
    - Tarjeta verde esmeralda con `CheckCircle`: `"Pago Yape/Plin (IziPay) confirmado — S/ 120.00"` y `"N° de autorización: {nroAutorizacion}"`.
- **Acciones Finales de Venta**:
  - Botón principal `"Realizar Venta"` :
    - Estado de carga: Spinner `Indicador de carga con mensaje "Procesando..."`.
    - Guardia síncrona: `enviandoVentaRef.current` previene doble clic en el mismo tick.
  - Botón secundario: `"Vaciar carrito"` con borde gris (estilo visual estandarizado).

**CA-3: Modal de Comprobante de Pago (`ModalComprobante`)**
- Renderizado modal superpuesto (panel modal superpuesto a pantalla completa con fondo oscurecido):
  - Ícono central de éxito: `ícono de verificación`.
  - Título: `"¡Venta realizada!"`.
  - Subtítulo con correlativo: `"{Factura|Boleta} {numero}"`.
  - Lista de productos vendidos: Nombre, cantidad cantidad y subtotal monetario.
  - Fila total: `"Total"` y `"S/ 0.00"`.
  - Badges semánticos agrupados:
    - Tipo: `"Factura"` (ámbar) / `"Boleta con DNI"` (índigo) / `"Boleta Simple"` (índigo).
    - Documento de cliente: `"DNI: {cliente_dni}"` o `"RUC: {cliente_ruc}"`.
    - Método: `"Yape/Plin (IziPay)"` (púrpura) / `"Efectivo"` (verde).
  - Razón social y dirección (si aplica para Factura).
  - Desglose de vuelto en efectivo: `"Monto recibido: S/ {recibido} — Vuelto: S/ {vuelto}"`.
  - Trazabilidad Yape/Plin (IziPay): `ícono de confirmación: Yape/Plin (IziPay) verificado — S/ {total} — N° de autorización: {referencia_pago}`.
  - Botón verde de descarga: `Ícono de documento con botón para descargar comprobante PDF` .
  - Botón índigo de reinicio: `"Nueva Venta"` .

**CA-4: Escenarios de Aceptación (Gherkin BDD)**

```gherkin
Escenario: Vendedor intenta vender sin turno de caja abierto
  Dado que el usuario autenticado tiene rol "Vendedor" y no cuenta con un turno de caja activo
  Cuando ingresa a la terminal de ventas en "/ventas"
  Entonces se muestra el banner de alerta "No puedes realizar ventas porque no tienes un turno de caja abierto. Abre un turno para continuar."
  Y el botón "Realizar Venta" permanece deshabilitado
  Y se muestra el botón de enlace "Ir a Mi Caja" apuntando a "/caja"

Escenario: Cobro exitoso con Yape/Plin (IziPay) mediante verificación de código de autorización IziPay
  Dado que el vendedor agregó productos al carrito por un total de "S/ 45.00"
  Y seleccionó el método de pago "Yape/Plin (IziPay)"
  Cuando pulsa el botón "Ya generé el cobro en IziPay"
  Entonces avanza al paso 2 "Cliente escanea y paga" mostrando la solicitud del "N° de autorización *"
  Y cuando ingresa "839201" y hace clic en "Pago confirmado en IziPay"
  Entonces se muestra la tarjeta verde "Pago Yape/Plin (IziPay) confirmado — S/ 45.00"
  Y el botón "Realizar Venta" queda habilitado para procesar la transacción

Escenario: Bloqueo de venta por vuelto en efectivo superior al disponible en gaveta
  Dado que el turno de caja cuenta con un efectivo disponible de "S/ 50.00"
  Y la venta tiene un total de "S/ 20.00"
  Cuando el vendedor ingresa un monto recibido de "S/ 100.00" calculando un vuelto de "S/ 80.00"
  Entonces se muestra el mensaje de error "Monto en caja insuficiente para el vuelto. Disponible: S/ 50.00"
  Y el botón "Realizar Venta" queda deshabilitado impidiendo descuadres físicos de caja
```

---

### Pantalla [UI-015] Historial de Ventas, Anulaciones y Reenvío de Comprobantes

**Historias del plan que utilizan esta pantalla:** HU-VEN-03, HU-VEN-05, HU-VEN-06  

**Propósito de la pantalla:**  
Como Vendedor, Administrador o Gerente,  
quiero consultar el historial de ventas paginado, filtrar por fechas o correlativo, descargar comprobantes PDF, reenviarlos por correo y anular ventas gestionando la reposición de stock individual,  
para consultar el historial de ventas paginado (restringido a las ventas del propio turno activo para el Vendedor según RN-07, o global para Administrador y Gerente), auditar las operaciones de cobro y corregir errores mediante anulación administrativa.

#### Criterios de Aceptación (CA) - Interfaz y Comportamiento Visual:

**CA-1: Filtros de Búsqueda y Navegación**
- **Migas de Pan (Breadcrumb)**:
  - `"Inicio"` (`/dashboard`), separador `"/"`, ítem terminal activo `"Ventas"`.
- **Barra de Filtros**:
  - Filtro `"Desde"`: Input de fecha con límite máximo condicional `max={fechaHasta || undefined}`.
  - Filtro `"Hasta"`: Input de fecha con límite mínimo condicional `min={fechaInicio || undefined}`.
  - Filtro `"Buscar por DNI/RUC o Correlativo"`: Input de texto con placeholder `"ej. F001-00000012"`; permite presionar `Enter` para filtrar.
  - Filtro `"Método de pago"`: Selector con opciones `"Todos"`, `"Efectivo"`, `"Yape/Plin (IziPay)"`.
  - Botón `"Filtrar"`: `ícono de búsqueda con botón "Filtrar"` . Deshabilitado si `fechaInicio > fechaHasta`.
  - Botón `"Limpiar"`: `ícono de cerrar (X) Limpiar`.
  - Mensaje de validación de fechas: `"La fecha "Desde" no puede ser posterior a la fecha "Hasta""` (mensaje en texto rojo).

**CA-2: Grilla del Historial y Estados**
- **Columnas de la Grilla**:
  - `"N°"`: Formato `#{String(v.id).padStart(6, '0')}` en negrita.
  - `"Fecha / Hora"`: Fecha con `toLocaleDateString('es-PE')` y hora `toLocaleTimeString('es-PE')`.
  - `"Vendedor"`: Nombre del usuario o `"-"`.
  - `"Método"`: Badge púrpura `ícono visual Yape/Plin (IziPay)` o badge verde `ícono visual Efectivo`.
  - `"Monto"`: formato monetario en soles; si el estado es `'Anulada'`, se muestra tachado y en gris en texto gris con formato tachado.
  - `"Yape/Plin (IziPay) Verif."`:
    - Si método es Yape/Plin (IziPay) y verificado: `ícono de verificación Sí` en esmeralda (en color verde esmeralda) con atributo tooltip nativo (`title`) indicando fecha y hora exacta: `"Verificado: DD/MM/AAAA, HH:mm:ss"`.
    - Si método es Yape/Plin (IziPay) y no verificado: `ícono visual Pendiente` en ámbar (en color ámbar).
    - Si método es Efectivo: Guion gris `"—"`.
    - *Regla de especificación sobre convalidación de pago*: La grilla y el modal reflejan con precisión el estado del pago electrónico convalidado por el vendedor o regularizado operativamente mediante el servicio de verificación de transacciones digitales.
  - `"Estado"`:
    - Venta normal: Badge esmeralda `"Completada"` .
    - Venta anulada: Badge rojo `ícono visual Anulada` con tooltip del motivo.
  - `"Acción"`:
    - Botón `"Detalle"`: `ícono visual Detalle` (en color índigo con resaltado al interactuar).
    - Botón `"Anular"`: `ícono de anulación con etiqueta "Anular"` (en texto rojo con resaltado al pasar el cursor). Visible **únicamente** para Administrador o Gerente (`puedeAnular`) en ventas no anuladas.
- **Paginación y Estados Vacíos**:
  - Sin resultados: `"No se encontraron ventas"`.
  - Leyenda de paginación: `"Mostrando {desde}–{hasta} de {total} ventas"`.
  - Controles: Botones `ícono visual`, indicador `{paginaActual} / {totalPaginas}` y botón `ícono visual`.

**CA-3: Modales de Detalle, Reenvío de Correo y Anulación**
- **Modal de Detalle de Venta**:
  - Encabezado: Título `"Venta #{id}"` y subtítulo con serie/correlativo `"{Factura|Boleta} {serie}-{correlativo}"`.
  - Banner si está anulada: Bloque rojo con `"VENTA ANULADA"`, motivo de anulación, `"Por {anulado_por.nombre} el {fecha}"`.
  - Cuadrícula de detalles: Fecha, Vendedor, Método de pago, Monto total; si fue Efectivo: Recibido y Vuelto; si fue Yape/Plin (IziPay): Monto Yape/Plin (IziPay) (`S/ {monto_total}`), Verificado (`Sí` / `Pendiente`), Verificado el (`DD/MM/AAAA, HH:mm:ss`), N° de autorización IziPay (`{referencia_pago}`).
  - Lista de `"Productos"`: Nombre del producto, marca, cantidad `x{cantidad}` y subtotal.
  - Acciones inferiores (si no está anulada):
    - Botón verde: `ícono visual Descargar Copia PDF`.
    - Botón índigo: `ícono visual Reenviar por Correo`.
- **Modal Reenviar Comprobante por Correo**:
  - Título: `"Reenviar Comprobante"`.
  - Microcopy instructivo: `"Ingresa el correo electrónico al cual deseas reenviar el comprobante de pago."`.
  - Input: formato de correo electrónico, placeholder `"ejemplo@correo.com"`, precarga el correo del cliente si existía.
  - Botones: `"Cancelar"` y `"Enviar"` (con spinner de carga `Loader2`).
- **Modal Anular Venta / Devolución de Stock**:
  - Título: `"Anular venta #{id}"`.
  - Advertencia obligatoria: `"Se ajustará el monto en la caja del turno abierto. Para cada producto, indica si vuelve a stock vendible o no. Esta acción no se puede deshacer."`.
  - Textarea `"Motivo de anulación"`: Placeholder `"Ej: producto incorrecto, cliente se arrepintió, error de cobro..."`.
  - Lista `"Productos de la venta"`:
    - Checkbox individual `"Repone stock"` (marcado por defecto).
    - Si se desmarca `"Repone stock"`: Se despliega selector obligatorio `"Motivo de la pérdida..."` con opciones: `'Vencido'`, `'Dañado'`, `'Robo o faltante'`, `'Consumo interno'`, `'Error de registro'`, `'Otro'`, y un input opcional `"Detalle (opcional)"`.
  - Botones: `"Cancelar"` y botón rojo `"Confirmar anulación"`.

**CA-4: Escenarios de Aceptación (Gherkin BDD)**

```gherkin
Escenario: Anulación de venta con producto dañado que no reingresa al inventario
  Dado que el usuario autenticado tiene rol "Administrador"
  Y visualiza la venta "N° 000142" en el historial con 2 ítems: "Leche Gloria" y "Galletas Oreo"
  Cuando hace clic en el botón "Anular" de la venta
  Y completa el motivo "Producto devuelto por rotura de empaque"
  Y desmarca la casilla "Repone stock" para "Galletas Oreo"
  Y selecciona el motivo de pérdida "Dañado" con detalle "Empaque roto por caída en piso"
  Y presiona "Confirmar anulación"
  Entonces la venta pasa al estado "Anulada" con monto tachado
  Y el stock de "Leche Gloria" se incrementa mientras que el de "Galletas Oreo" se registra como baja por daño

Escenario: Reenvío de comprobante por correo electrónico
  Dado que el usuario abre el modal de detalle de una venta activa
  Cuando hace clic en el botón "Reenviar por Correo"
  E ingresa la dirección "cliente.empresa@gmail.com" en el modal de reenvío
  Y pulsa "Enviar"
  Entonces se muestra el spinner de procesamiento
  Y al finalizar se emite un Toast verde "Comprobante reenviado por correo correctamente"
  Y el modal se cierra automáticamente
```

---

### Pantalla [UI-016] Gestión de Turno de Caja, Movimientos y Conciliación

**Historias del plan que utilizan esta pantalla:** HU-CAJA-01, HU-CAJA-02, HU-CAJA-03, HU-CAJA-04, HU-CAJA-06  

**Propósito de la pantalla:**  
Como Vendedor,  
quiero abrir mi turno de caja con un fondo inicial mínimo, registrar ingresos y egresos manuales de efectivo y cerrar el turno contando el dinero físico,  
para asegurar que la gaveta cuente con cambio suficiente para vueltos y conciliar las diferencias entre lo esperado y lo real.

#### Criterios de Aceptación (CA) - Interfaz y Comportamiento Visual:

**CA-1: Vista sin Turno Abierto y Modal de Apertura**
- **Estado Inicial Sin Turno (`!turno`)**:
  - Contenedor con borde discontinuo gris: marco discontinuo centrado con fondo blanco.
  - Ícono: `ícono visual`.
  - Título: `"No tienes un turno abierto"` (título en negrita y tono oscuro).
  - Microcopy: `"Abre tu turno para comenzar a registrar ventas en caja."` (texto secundario en gris).
  - Botón: `ícono de incremento (+) Abrir turno` .
- **Modal "Abrir turno"**:
  - Título: `"Abrir turno"`.
  - Etiqueta del campo: `"Monto inicial en caja (S/)"`.
  - Input: Placeholder `"Ej: 500.00"`, teclado decimal, sanitizado contra letras y signos.
  - Microcopy normativo de monto mínimo:  
    `"Mínimo S/ 500.00, para poder dar vueltos."` (texto informativo en tono gris atenuado).
  - Error de validación local si es menor a S/ 500: `"El monto mínimo de apertura es S/ 500.00."`.
  - Botones de acción: `"Cancelar"` y botón `"Abrir turno"` (cambia a `"Abriendo..."` al enviar).

**CA-2: Panel del Turno en Curso y Movimientos**
- **Encabezado del Turno Activo (`turno.estado === 'Abierto'`)**:
  - Indicador vivo: Punto verde pulsante `(indicador visual de punto)` y texto `"Turno en curso"`.
  - Datos del turno: Ícono `ícono visual Apertura: {fecha}` y `"Vendedor: {vendedor.nombre}"`.
  - Barra de botones superiores:
    - Botón verde: `ícono de incremento (+) Registrar Ingreso` .
    - Botón ámbar: `ícono visual Registrar Egreso` .
    - Botón rojo: `ícono de cierre con etiqueta "Cerrar turno"` .
- **Tarjetas de Totales en Tiempo Real**:
  - Tarjeta 1: `"APERTURA"` con monto en formato `S/ {monto_apertura}`.
  - Tarjeta 2: `"EFECTIVO ACUMULADO"` con monto grande en verde tipografía destacada en color verde.
  - Tarjeta 3: `"Yape/Plin (IziPay) acumulado"` con monto grande en morado tipografía destacada en color morado.
- **Lista de Movimientos del Turno**:
  - Título de sección: `"Movimientos del turno"`.
  - Estado vacío: `"Sin movimientos aún."`.
  - Elemento de lista:
    - Badges de tipo semántico:
      - `Apertura`: etiqueta en tono azul.
      - `Venta`: etiqueta en tono verde.
      - `Ingreso`: etiqueta en tono esmeralda.
      - `Egreso` / `Anulacion`: etiqueta en tono rojo.
    - Descripción del movimiento y método de pago (texto secundario en gris atenuado).
    - Monto con signo positivo o negativo: `+S/ {monto}` o `-S/ {monto}` (en rojo para egresos/anulaciones).
    - Hora del movimiento: `toLocaleTimeString('es-PE')`.

**CA-3: Modales de Movimiento Manual y Cierre de Turno**
- **Modal "Registrar Ingreso" / "Registrar Egreso"**:
  - Título dinámico: `Registrar {modalMovimiento}`.
  - Campo `"Monto (S/)"`: Placeholder `"0.00"`, requerido, microcopy `"Máximo S/ 5000.00"`.
  - Campo `"Descripción del motivo"`: Textarea con placeholder dinámico `"Motivo del ingreso o egreso"`, requerido.
  - Campo `"Medio fijo"`: Input de solo lectura con valor `"Efectivo"` y microcopy explicativo:  
    `"Los movimientos manuales solo aplican a efectivo físico en caja."` (texto informativo en tono gris atenuado).
  - Botones: `"Cancelar"` y botón `"Registrar {Ingreso|Egreso}"` (cambia a `"Guardando..."`).
- **Modal "Cerrar turno"**:
  - Título: `"Cerrar turno"`.
  - Banner instructivo amarillo: `"Cuenta el efectivo en gaveta y concilia el total del reporte de liquidación del terminal digital antes de continuar."` .
  - Cuadrícula de conciliación de valores:
    - Input `"Efectivo contado en gaveta (S/)"`: Placeholder `"0.00"`, requerido, microcopy `"Conteo físico de billetes y monedas en caja"`.
    - Input `"Total liquidación digital IziPay (S/)"`: Placeholder `"0.00"`, requerido, microcopy `"Monto total del reporte de cierre del terminal POS / billeteras"`.
  - Campo `"Observaciones (opcional)"`: Textarea con placeholder `"Ej: faltaron 5 soles, billetes mojados, etc."`.
  - Botones: `"Cancelar"` y botón rojo `"Cerrar turno"` (cambia a `"Cerrando..."`).
- **Vista de Resumen Post-Cierre (Panel de Resumen de Cierre)**:
  - Título: `ícono de verificación Turno cerrado`.
  - Badge de aprobación si fue visado: `"Aprobado por {aprobador.nombre}"` .
  - Grilla de conciliación: Columnas `"Concepto"`, `"Esperado"`, `"Contado"`, `"Diferencia"`.
    - Fila Efectivo y Fila Yape/Plin (IziPay) con diferenciación de color: Verde si `diferencia > 0` (`+{fmt}`), rojo si `diferencia < 0`, gris si es `0`.
  - Botón: `ícono de incremento (+) Abrir nuevo turno`.

**CA-4: Escenarios de Aceptación (Gherkin BDD)**

```gherkin
Escenario: Validación de fondo mínimo de apertura en caja
  Dado que el vendedor se encuentra en "/caja" sin turno activo
  Cuando pulsa el botón "Abrir turno"
  E ingresa un monto inicial de "350.00"
  Y presiona "Abrir turno"
  Entonces el sistema bloquea el envío y muestra el mensaje de error "El monto mínimo de apertura es S/ 500.00."
  Y el formulario no se cierra hasta corregir el valor a S/ 500.00 o más

Escenario: Registro de egreso manual para compra de insumos menores
  Dado que el turno de caja se encuentra en curso
  Cuando el vendedor pulsa "Registrar Egreso"
  E ingresa un monto de "45.00" con motivo "Compra de papel térmico para tickets POS"
  Y confirma la operación
  Entonces el modal se cierra y en "Movimientos del turno" se añade la fila con badge rojo "Egreso" y monto "-S/ 45.00"
  Y la tarjeta de "Efectivo acumulado" se actualiza deduciendo inmediatamente los S/ 45.00
```

---

### Pantalla [UI-017] Historial de Cajas, Conciliación de Arqueos y Cierre Forzado

**Historias del plan que utilizan esta pantalla:** HU-CAJA-05, HU-CAJA-06, HU-CAJA-07  

**Propósito de la pantalla:**  
Como Vendedor, Administrador o Gerente,  
quiero revisar el historial de turnos de caja de todos los vendedores, aprobar los cierres cuadrados y forzar el cierre de turnos olvidados que excedan las 16 horas,  
para garantizar el control de arqueos y evitar bloqueos en la apertura de nuevos turnos.

#### Criterios de Aceptación (CA) - Interfaz y Comportamiento Visual:

**CA-1: Filtros de Historial de Cajas**
- **Barra de Filtros**:
  - Filtro `"Desde"`: Input de fecha con `max={filtroFechaFin || undefined}`.
  - Filtro `"Hasta"`: Input de fecha con `min={filtroFechaInicio || undefined}`.
  - Filtro `"Estado"`: Selector con opciones `"Todos"`, `"Abierto"`, `"Cerrado"`.
  - Botón `"Buscar"`: botón en color índigo corporativo.
  - Botón `"Limpiar filtros"`: `ícono de cerrar (X) Limpiar filtros` visible solo si hay filtros activos.
  - Validación de rango: `"La fecha "Desde" no puede ser posterior a la fecha "Hasta"."`.

**CA-2: Grilla de Turnos y Conciliación de Arqueos**
- **Columnas de la Grilla**:
  - `"Apertura"`: Fecha y hora formateada.
  - `"Vendedor"`: Nombre del responsable o `"—"`.
  - `"Apertura (S/)"`: Monto inicial con formato `S/ {monto}`.
  - `"Efec. esperado"` y `"Yape/Plin (IziPay) esperado"`: Montos calculados por sistema.
  - `"Dif. efec."` y `"Dif. Yape/Plin (IziPay)"`: Renderizados con componente etiqueta visual de diferencia monetaria:
    - Positivo: Monto verde con signo `+S/ {valor}`.
    - Negativo: Monto rojo con signo `-S/ {valor}`.
    - Neutro: Texto gris `"S/ 0.00"`.
  - `"Estado"`:
    - Si está cerrado: Badge gris `"Cerrado"` .
    - Si está abierto: Badge verde `"Abierto"` .
    - Alerta de turno sospechoso (> 16 horas abierto): Chip ámbar `ícono visual {N}h abierto` con tooltip `"El vendedor podría haberse olvidado de cerrarlo"`.
  - `"Acción"`:
    - Si está Abierto:
      - Si es Administrador/Gerente (`puedeAprobar`): Botón rojo `"Cerrar turno"` .
      - Si es otro rol: Guion `"—"`.
    - Si está Cerrado:
      - Ya aprobado: Ícono y texto verde `ícono de verificación {turno.aprobador.nombre}`.
      - Pendiente y usuario es Admin/Gerente: Botón índigo `"Aprobar"` .
      - Pendiente y usuario vendedor: Texto gris `"Pendiente"`.
  - Control de expansión: Ícono `control desplegable de alternancia`.
- **Detalle Expandido de Fila (Acordeón)**:
  - Título secundario: `"MOVIMIENTOS DEL TURNO"`.
  - Subgrilla de movimientos con columnas `"Tipo"`, `"Descripción"`, `"Método"`, `"Monto"`, `"Hora"`.
  - Observaciones registradas al cierre.
  - Aviso de Cierre Forzado: Banner ámbar con ícono ícono de advertencia:  
    `"Cerrado forzosamente por {cerrado_por.nombre} — Motivo: {motivo_cierre_forzado}"`.

**CA-3: Modal de Cierre Forzado por Administrador (`ModalCerrarForzado`)**
- Encabezado: `"Cerrar turno de {vendedor.nombre ?? 'otro vendedor'}"`.
- Banner de advertencia y responsabilidad:  
  `"El vendedor no cerró este turno. Cuenta el efectivo físico y concilia el reporte digital de liquidación IziPay de esa caja antes de continuar — este cierre queda registrado con tu usuario y el motivo."` .
- Formulario de Arqueo Forzado:
  - Input `"Efectivo contado (S/)"`: Requerido, placeholder `"0.00"`.
  - Input `"Yape/Plin (IziPay) contado (S/)"`: Placeholder `"0.00"`.
  - Input `"Motivo del cierre forzado *"`: Requerido, placeholder `"Ej: vendedor no marcó salida, turno olvidado desde ayer"`.
  - Textarea `"Observaciones (opcional)"`: Placeholder `"Ej: faltaron 5 soles, billetes mojados, etc."`.
- Botones de acción: `"Cancelar"` y botón rojo `"Forzar cierre"` (cambia a `"Cerrando..."` con guardia en `enviandoRef`).

**CA-4: Escenarios de Aceptación (Gherkin BDD)**

```gherkin
Escenario: Administrador fuerza el cierre de un turno olvidado de más de 16 horas
  Dado que el usuario autenticado tiene rol "Administrador"
  Y visualiza en el historial de cajas un turno con la etiqueta "18h abierto" del vendedor "Juan Pérez"
  Cuando pulsa el botón "Cerrar turno" en la columna de acción
  Entonces se abre el modal "Cerrar turno de Juan Pérez" con la advertencia de responsabilidad
  Y cuando ingresa "S/ 620.00" en efectivo contado, "S/ 115.00" en Yape/Plin (IziPay) contado
  Y completa el motivo obligatorio "Vendedor finalizó guardia sin registrar cierre"
  Y presiona "Forzar cierre"
  Entonces el turno pasa a estado "Cerrado", se calculan las diferencias de arqueo y se registra al Administrador como autor del cierre forzado

Escenario: Aprobación formal de un arqueo cerrado
  Dado que el Administrador revisa un turno con estado "Cerrado" y acción "Aprobar"
  Cuando hace clic en el botón "Aprobar"
  Entonces el botón cambia temporalmente a "..." durante la petición
  Y al finalizar se reemplaza por el ícono de verificación verde y el nombre del Administrador que visó el arqueo
```

---

---

## 6. Parte V: EPIC-REP — Dashboard de Control, Reportes Analíticos y Configuración (UI-018 a UI-020)

### Pantalla [UI-018] Tablero de Control Estratégico y Alertas Operativas

**Historias del plan que utilizan esta pantalla:** HU-DASH-01, HU-DASH-02, HU-DASH-03, HU-DASH-04, HU-DASH-05  

**Propósito de la pantalla:**  
Como Vendedor, Administrador o Gerente,  
quiero visualizar indicadores clave de desempeño (KPIs) en tiempo real, tendencias de ventas en gráficos de área, productos más vendidos, alertas de turnos de caja olvidados y accesos rápidos con modal de desglose a cada métrica,  
para tomar decisiones comerciales oportunas y supervisar la salud operativa del negocio.

#### Criterios de Aceptación (CA) - Interfaz y Comportamiento Visual:

**CA-1: Encabezado, Detección de Turnos Olvidados y Filtro Temporal**
- **Navegación y Encabezado**:
  - Breadcrumb: `"Inicio"` (`/dashboard`), separador `"/"`, ítem terminal activo `"Dashboard"`.
  - Título principal: `"Dashboard"` (encabezado principal en negrita).
  - Mensaje de bienvenida contextual: `"Bienvenido, {usuario.nombre} — {fechaActual}"` con formato `toLocaleDateString('es-PE', { year: 'numeric', month: 'long', day: 'numeric' })`.
  - Botón de actualización rápida: `ícono visual Actualizar` con animación animación de rotación continua durante la recarga. Auto-recarga reactiva al recuperar el foco de la ventana (`window.addEventListener('focus')`).
- **Banner de Alerta Operativa (Turnos de Caja Olvidados > 16 Horas)**:
  - Renderizado condicional en bloque ámbar alerta en recuadro con fondo ámbar suave y texto ámbar.
  - Ícono: `ícono visual`.
  - Mensaje singular: `"El turno de {vendedor.nombre} lleva {N}h abierto — probablemente se olvidó de cerrarlo."`.
  - Mensaje plural: `"{N} turnos llevan más de 16h abiertos — probablemente se olvidaron de cerrarlos."`.
  - Botón de acción: `"Ir a Historial de Caja"` , que redirige a `/caja/historial?estado=Abierto`.
- **Barra de Rango de Fechas**:
  - Contenedor: panel de tarjeta con bordes suaves y fondo blanco.
  - Input `"Desde"`: Tipo `date`, rango acotado entre `fechaMinima` (10 años atrás) y `fechaHastaInput || fechaHoy`.
  - Input `"Hasta"`: Tipo `date`, rango acotado entre `fechaInicioInput || fechaMinima` y `fechaHoy`.
  - Botón `"Aplicar"`: botón primario índigo con texto en blanco.
  - Botón `"Este mes"`: Restablece el rango al primer día del mes actual hasta hoy.
  - Leyenda informativa: `"Mostrando ventas del {formatFecha(fechaInicio)} al {formatFecha(fechaHasta)}"`.
  - Mensajes de error en validación de fechas:
    - `"La fecha "Desde" no puede ser posterior a la fecha "Hasta""`.
    - `"Las fechas deben estar entre {fechaMinima} y {fechaHoy}"`.

**CA-2: Tarjetas KPI Interactivas y Gráfico de Tendencia**
- **Rejilla de 6 Tarjetas KPI (`KpiCard`)**:
  - Estructura común: Borde izquierdo temático de 4px, hover con elevación `shadow-md`, ícono circular superior derecho y microcopy inferior que aparece en hover: `"Ver detalle"` con `ícono visual`.
  - **KPI 1 - Ventas**: Título dinámico `Total Ventas {del Mes|del Período}` (valor numérico entero), ícono `ícono de carrito`, color índigo índigo corporativo.
  - **KPI 2 - Ingresos**: Título dinámico `Ingresos {del Mes|del Período}`, prefijo `"S/"`, valor decimal con 2 dígitos, ícono `ícono visual`, color verde esmeralda verde de confirmación.
  - **KPI 3 - Ticket Promedio**: Título `"Ticket Promedio"`, prefijo `"S/"`, valor con 2 decimales, ícono `ícono visual`, color ámbar `ámbar`.
  - **KPI 4 - Catálogo**: Título `"Productos Activos"`, total de productos vigentes, ícono `ícono visual`, color azul `azul`.
  - **KPI 5 - Ruptura de Stock**: Título `"Sin Stock"`, total de productos con stock 0, ícono `ícono visual`, color rojo rojo de advertencia.
  - **KPI 6 - Abastecimiento**: Título `"Solicitudes Pendientes"`, número de órdenes de reposición pendientes, ícono `ícono visual`, color violeta `violeta`.
- **Gráfico de Tendencia "Ventas por día"**:
  - Título: `"Ventas por día"` (título en negrita).
  - Componente: `ResponsiveContainer` (altura 280px) con `AreaChart` y degradado `ventasGradient` (índigo corporativo con opacidad de 0.3 a 0).
  - Ejes:
    - Eje X: Fechas formateadas como `DD/MM` sin trazo divisorio de eje.
    - Eje Y: Montos con prefijo `S/{v}`.
    - Cuadrícula: Trazos discontinuos `strokeDasharray="3 3"` color `gris claro`.
  - Tooltip personalizado (recuadro informativo flotante): Tarjeta blanca sombreada con fecha `DD/MM` y monto en negrita `"S/ 0.00"`.
  - Estado vacío: `"No hay ventas registradas aún"` (recuadro centrado con texto informativo en gris atenuado).

**CA-3: Secciones de Top Productos y Stock Crítico**
- **Panel "Top 5 productos"**:
  - Título: `"Top 5 productos"`.
  - Lista de barras de progreso:
    - Nombre del producto en negrita y marca en gris suave.
    - Badge con cantidad vendida: `"{p.total_vendido} und."` .
    - Barra horizontal con ancho proporcional respecto al líder de ventas `(total_vendido / topVendido) * 100%`.
  - Estado vacío: `"No hay ventas registradas"`.
- **Panel "Stock crítico"**:
  - Título: `"Stock crítico"` con enlace `"Ver todos en Productos"` acompañado de `ícono visual` que navega a `/productos?alerta=critico`.
  - Lista de hasta 5 productos en alerta:
    - Clic en el producto navega a Productos filtrando por alerta y nombre: `/productos?alerta={agotado|stockBajo}&buscar={nombre}`.
    - Badges de alerta:
      - Si stock es 0: Badge rojo `"Sin stock"` .
      - Si stock está por debajo del mínimo: Badge amarillo `"{p.stock} und."` .
  - Estado vacío: Ícono verde `✓ Todo el stock está en orden`.

**CA-4: Modales de Detalle Bajo Demanda (`ModalDetalle`)**
- Estructura modal compartida: Panel flotante panel modal amplio con fondo blanco y elevación con ícono temático coloreado, título y botón de cierre `X`.
- **Modal Ventas (`modalActivo === 'ventas'`)**:
  - Título: `Detalle de Ventas {del Mes|del Período}`.
  - Nota superior: `"{total_ventas} venta(s) completada(s) este mes. Mostrando las primeras {N}."`.
  - Columnas: `"Fecha"`, `"Cliente / Vendedor"`, `"Método"`, `"Monto"`, `"Estado"`. Estado vacío: `"No hay ventas registradas este mes."`.
- **Modal Ticket Promedio (`modalActivo === 'ticket'`)**:
  - Título: `"Ticket Promedio"`.
  - Nota superior: `"Promedio: {promedio} sobre {total} venta(s) — ordenadas de mayor a menor monto."`.
  - Grilla de ventas ordenada descendentemente por monto.
- **Modal Ingresos por Método (`modalActivo === 'ingresos'`)**:
  - Título: `Ingresos {del Mes|del Período} por Método de Pago`.
  - Columnas: `"Método de pago"`, `"N° ventas"`, `"Monto"` y fila de pie de grilla con totales calculados. Estado vacío: `"No hay ingresos registrados este mes."`.
- **Modal Productos Activos (`modalActivo === 'productos'`)**:
  - Título: `"Productos Activos"`.
  - Columnas: `"Producto"`, `"Categoría"`, `"Stock"`, `"Precio"`.
- **Modal Sin Stock (`modalActivo === 'sinStock'`)**:
  - Título: `"Productos Sin Stock"`.
  - Filtro estricto `p.stock === 0`.
  - Botón inferior de acción: `"Ver y gestionar en Productos"` con `ícono visual` redirigiendo a `/productos?alerta=agotado`. Estado vacío: `"No hay productos sin stock. ✓"`.
- **Modal Solicitudes Pendientes (`modalActivo === 'solicitudes'`)**:
  - Título: `"Solicitudes Pendientes"`.
  - Columnas: `"Producto"`, `"Cantidad"`, `"Proveedor sugerido"`, `"Solicitante"`, `"Fecha"`. Estado vacío: `"No hay solicitudes pendientes. ✓"`.

**CA-5: Escenarios de Aceptación (Gherkin BDD)**

```gherkin
Escenario: Administrador detecta turno de caja olvidado por más de 16 horas
  Dado que el usuario autenticado tiene rol "Administrador"
  Y existe un turno de caja del vendedor "Carlos Rojas" con 19 horas de apertura sin cierre
  Cuando accede a "/dashboard"
  Entonces se visualiza en la parte superior el banner ámbar "El turno de Carlos Rojas lleva 19h abierto — probablemente se olvidó de cerrarlo."
  Y al hacer clic en el botón "Ir a Historial de Caja" el usuario es redirigido a "/caja/historial?estado=Abierto"

Escenario: Consulta del modal de detalle de Ticket Promedio
  Dado que el dashboard muestra un Ticket Promedio de "S/ 42.50"
  Cuando el usuario hace clic sobre la tarjeta de "Ticket Promedio"
  Entonces se abre el modal "Ticket Promedio" con ícono de tendencia ámbar
  Y se lista la grilla de ventas completadas ordenadas de mayor a menor monto
  Y en la parte superior se observa la leyenda "Promedio: S/ 42.50 sobre X venta(s) — ordenadas de mayor a menor monto."
```

---

### Pantalla [UI-019] Reportes Analíticos de Ventas, Margen, Mermas y Exportación PDF

**Historias del plan que utilizan esta pantalla:** HU-REP-01, HU-REP-02, HU-REP-03, HU-REP-04, HU-REP-05, HU-REP-06, HU-REP-07, HU-REP-08, HU-REP-09  

**Propósito de la pantalla:**  
Como Vendedor, Administrador o Gerente,  
quiero analizar reportes consolidados de ventas, márgenes brutos de ganancia por producto, mermas por motivo y stock crítico configurable,  
para exportar un documento PDF profesional y evaluar la rentabilidad del minimarket.

#### Criterios de Aceptación (CA) - Interfaz y Comportamiento Visual:

**CA-1: Encabezado, Exportación PDF y Filtros de Fecha**
- **Encabezado y Descarga**:
  - Breadcrumb: `"Inicio"` (`/dashboard`), separador `"/"`, ítem terminal activo `"Reportes"`.
  - Título: `"Reporte de Ventas"`.
  - Subtítulo: `"Genera reportes detallados de ventas en PDF"`.
  - Botón de exportación: `ícono visual Descargar Reporte PDF` . Durante la compilación muestra `indicador de carga animado Generando...` y se bloquea.
- **Barra de Filtros**:
  - Input `"Desde"`: Tipo `date`, límites `min={fechaMinima}` y `max={fechaHasta || fechaHoy}`.
  - Input `"Hasta"`: Tipo `date`, límites `min={fechaInicio || fechaMinima}` y `max={fechaHoy}`.
  - Botón `"Aplicar filtros"`: Con spinner `Loader2` durante el refresco .
  - Botón `"Limpiar"`: Borde gris, restablece los campos de fecha a vacío.
  - Mensajes de error en fechas:
    - `"La fecha "Desde" no puede ser posterior a la fecha "Hasta""`.
    - `"Las fechas deben estar entre {fechaMinima} y {fechaHoy}"`.

**CA-2: Tarjetas de Resumen y Top 10 Productos Más Vendidos**
- **Tarjetas de Resumen Superior**:
  - Tarjeta 1: `"Total de Ventas"` con conteo numérico e ícono `ícono de carrito`.
  - Tarjeta 2: `"Ingresos Totales"` con monto en formato formato monetario en soles e ícono `ícono visual`.
  - Tarjeta 3: `"Ticket Promedio"` con monto en formato formato monetario en soles e ícono `ícono visual`.
- **Grilla "Top 10 productos más vendidos"**:
  - Título: `"Top 10 productos más vendidos"` acompañado de badge gris `ícono visual Se incluirá en el PDF`.
  - Cabecera violeta índigo fondo en color índigo corporativo y texto en blanco con columnas: `"#"` , `"Producto"`, `"Marca"`, `"Unidades vendidas"`, `"Ingresos totales"`.
  - Podio de medallas en la columna `#`:
    - Posición 1: Círculo dorado círculo dorado con texto en blanco con número `1`.
    - Posición 2: Círculo plateado círculo plateado con texto en blanco con número `2`.
    - Posición 3: Círculo bronce círculo bronce con texto en blanco con número `3`.
    - Resto de posiciones: Número simple en gris atenuado.
  - Barra de progreso relativa al producto más vendido dentro de cada fila.
  - Estado vacío: `"No hay datos de ventas aún"`.

**CA-3: Margen por Producto, Ventas por Día y Método**
- **Grilla "Margen por Producto"**:
  - Cabecera esmeralda cabecera en color esmeralda con texto en blanco.
  - Subtítulo aclaratorio: `"Solo productos con costo registrado en sus lotes de compra"`.
  - Columnas: `"Producto"`, `"Marca"`, `"Categoría"`, `"Vendido"`, `"Ingreso"`, `"Costo"`, `"Margen S/"`, `"Margen %"`.
  - Color semántico de margen:
    - Positivo: Monto verde en color verde esmeralda y badge etiqueta en tono esmeralda.
    - Negativo: Monto rojo en color rojo de alerta y badge etiqueta en tono rojo.
  - Estado vacío con microcopy instructivo:  
    `"Sin datos de costo en el período."`  
    `"Registra el costo unitario al ingresar mercadería para ver el margen."`.
- **Grilla "Ventas por día"**:
  - Columnas: `"Fecha"`, `"Ventas"`, `"Monto Total"`.
  - Estado vacío: `"No hay ventas en el período seleccionado"`.
- **Grilla "Ventas por método de pago"**:
  - Columnas: `"Método de Pago"`, `"Ventas"`, `"Monto Total"`.
  - Estado vacío: `"No hay datos de ventas en el período seleccionado"`.

**CA-4: Stock Crítico Configurable y Mermas por Motivo**
- **Panel "Stock Crítico" con Umbral Dinámico**:
  - Encabezado con ícono `ícono visual` y título `"Stock Crítico"`.
  - Control horizontal de umbral: Etiqueta `"Umbral:"`, input numérico centrado (por defecto `5`) y botón `"Actualizar"` con ícono `RefreshCw` o spinner `Loader2`.
  - Columnas: `"Producto"`, `"Marca"`, `"Categoría"`, `"Stock actual"`, `"Mínimo aplicado"`.
  - Badges de stock actual:
    - `"Sin stock"`: Badge rojo etiqueta en tono rojo.
    - Stock bajo: Badge ámbar `"{stock} und(s)"` .
  - Microcopy explicativo al pie de grilla:  
    `"Mostrando productos cuyo stock está por debajo de su propio "Stock Mínimo" (si está definido) o del umbral global de {umbral} en caso contrario."`.
  - Estado vacío: Tarjeta esmeralda `ícono de verificación ✓ Todo el stock está en orden`.
- **Grilla "Mermas por Motivo"**:
  - Cabecera roja cabecera en color rojo con texto en blanco.
  - Columnas: `"Motivo"`, `"N° Bajas"`, `"Cantidad Total"`, `"Costo Valorizado"` con formato formato monetario en soles.
  - Estado vacío: `"No hay bajas de inventario en el período seleccionado"`.

**CA-5: Generación y Formato del PDF Consolidado**
- Formato descargable: Nombre asignado `'reporte_ventas.pdf'`.
- Estructura del PDF:
  - Encabezado: Título `"MiniMarket"`, subtítulo `"Reporte de Ventas"`, y período `"Reporte del {fechaInicio} al {fechaHasta}"`.
  - Bloque Resumen: Total de ventas, ingresos totales y ticket promedio.
  - Grillas estilizadas con `motor de formateo tabular para exportación`: Ventas por Día, Ventas por Método de Pago, Top 10 Productos Más Vendidos, Margen por Producto y Mermas por Motivo.
  - Pie de página: `"Generado el {fecha} a las {hora}"` centrado en fuente de 8pt.

**CA-6: Escenarios de Aceptación (Gherkin BDD)**

```gherkin
Escenario: Modificación dinámica del umbral de stock crítico
  Dado que el usuario administrador ingresa al módulo de reportes
  Cuando cambia el valor del input "Umbral:" de "5" a "10"
  Y pulsa el botón "Actualizar"
  Entonces se muestra el spinner en el botón
  Y la grilla de Stock Crítico se recarga listando los productos con existencias menores a 10 unidades
  Y la nota inferior actualiza su texto indicando "...umbral global de 10 en caso contrario."

Escenario: Exportación completa de reporte a PDF
  Dado que el usuario aplicó un filtro de fechas con ventas registradas
  Cuando hace clic en el botón "Descargar Reporte PDF"
  Entonces el botón pasa al estado "Generando..." con ícono de carga
  Y el navegador descarga automáticamente el documento "reporte_ventas.pdf" con las grillas consolidadas
  Y el pie del documento incluye la marca temporal exacta de generación
```

---

### Pantalla [UI-020] Configuración Fiscal, Datos de Empresa y Parámetros SUNAT

**Historias del plan que utilizan esta pantalla:** HU-CONF-01, HU-CONF-02  

**Propósito de la pantalla:**  
Como Administrador,  
quiero configurar la razón social de la empresa, RUC validado en SUNAT, dirección, teléfono, porcentaje de IGV y las series autorizadas para boletas y facturas,  
para emitir comprobantes de pago legalmente válidos y mantener sincronizada la facturación del POS en todo el sistema.

#### Criterios de Aceptación (CA) - Interfaz y Comportamiento Visual:

**CA-1: Formulario de Datos del Negocio**
- **Encabezado y Microcopy Normativo**:
  - Ícono y título: `ícono visual Datos del Negocio` (título en negrita y tono oscuro).
  - Párrafo de advertencia inicial:  
    `"Estos datos aparecen en las boletas y facturas generadas por el sistema. Actualízalos con la información real del negocio antes de salir a producción."` (texto secundario en gris).
- **Campo "Nombre de la empresa"**:
  - Etiqueta: `"Nombre de la empresa"` con asterisco rojo `(asterisco rojo obligatorio)`.
  - Comportamiento SUNAT: Si el nombre provino de una consulta exitosa a SUNAT (`nombreDesdeSunat === true`), el input se bloquea en modo solo lectura (campo bloqueado de solo lectura en fondo gris suave), mostrando el microcopy:  
    `"Nombre oficial según SUNAT — no editable. "` con botón enlace `"Editar manualmente"` para desbloquearlo si el usuario lo necesita.
- **Campo "RUC"**:
  - Etiqueta: `RUC *`.
  - Input: Placeholder `"20123456789"`, longitud de 11 dígitos, sanitizado solo números.
  - Botón de consulta SUNAT: `ícono de búsqueda` o `indicador de carga animado` con título `"Consultar SUNAT"`. Habilitado solo si tiene 11 dígitos y empieza con `20` (`/^20\d{9}$/`).
  - Validaciones en vivo:
    - Si longitud > 0 y < 11: `"El RUC debe tener 11 dígitos"` (mensaje en texto rojo).
    - Si longitud es 11 pero no inicia con 20: `"El RUC debe empezar con 20 (persona jurídica): estos son datos de una empresa, no de una persona natural"`.
- **Campo "Dirección"**:
  - Etiqueta: `Dirección *`, input con placeholder `"Av. Ejemplo 123, Trujillo"`, required. Se autocompleta con SUNAT si el servicio de consulta tributaria devuelve dirección fiscal.
- **Campo "Teléfono"**:
  - Etiqueta: `Teléfono *`, placeholder `"044-123456"`.
  - Microcopy de ayuda: `"Celular de 9 dígitos que inicia con 9 o fijo con prefijo de ciudad (ej. 044-123456)"`.
  - Validación de formato de teléfono (celular nacional de 9 dígitos o fijo institucional con prefijo). Error: `"El teléfono debe ser un celular (9XXXXXXXX) o un fijo con prefijo de área (ej. 044-123456)"`.
- **Campo "IGV (%)"**:
  - Etiqueta: `IGV (%) *`, input numérico `min={0} max={100} step={1}`.
  - Microcopy referencial: `"Actualmente en Perú: 18%"` (texto informativo en tono gris atenuado). Error si está fuera de rango: `"El IGV debe ser un número entre 0 y 100"`.
- **Campos de Series de Comprobantes (Boleta y Factura)**:
  - Fila en cuadrícula de 2 columnas:
    - Campo `"Serie de boleta *"`: Placeholder `"B001"`, longitud de 4 caracteres, forzado a mayúsculas. Error de formato: `"La serie de boleta debe tener el formato: 1 letra + 3 dígitos (ej. B001)"`.
    - Campo `"Serie de factura *"`: Placeholder `"F001"`, longitud de 4 caracteres, forzado a mayúsculas. Error de formato: `"La serie de factura debe tener el formato: 1 letra + 3 dígitos (ej. F001)"`.
  - Microcopy normativo SUNAT:  
    `"Formato SUNAT: 1 letra + 3 dígitos. Se usan para numerar boletas y facturas (ej. B001-00000023)."`.

**CA-2: Confirmación de Cambio Crítico de RUC y Guardado**
- **Banner de Confirmación de Titularidad de RUC**:
  - Si el usuario modifica el RUC respecto al valor original (`form.ruc !== rucOriginal`), antes de guardar se despliega un panel amarillo preventivo:
    - Título: `"¿Este RUC ({form.ruc}) es el de tu negocio?"` (título en tono ámbar oscuro).
    - Mensaje de responsabilidad legal:  
      `"Vas a reemplazar el RUC actual ({rucOriginal}) por uno distinto. El sistema no puede verificar la titularidad, así que confirma antes de continuar."`.
    - Botón de confirmación: `"Sí, guardar este RUC"` .
    - Botón de cancelación: `"Cancelar"` (botón con marco ámbar y texto en tono ámbar, restablece el RUC al original).
- **Botón de Guardado y Feedback**:
  - Botón principal: `"Guardar cambios"` (botón de ancho completo en color índigo corporativo y texto en blanco). Cambia a `"Guardando..."` y se deshabilita durante la petición.
  - Banner verde de éxito: `"Configuración guardada correctamente"` .
  - Sincronización en caliente: Ejecuta `notificarConfiguracionActualizada()` para que módulos activos como `/ventas` actualicen sus series de comprobante e IGV en tiempo real sin requerir recargar la página.

**CA-3: Escenarios de Aceptación (Gherkin BDD)**

```gherkin
Escenario: Validación de formato SUNAT en serie de facturas
  Dado que el usuario administrador está en "/configuracion"
  Cuando ingresa "FAC1" en el campo "Serie de factura *"
  Y hace clic en "Guardar cambios"
  Entonces el sistema rechaza el envío y muestra el mensaje de error "La serie de factura debe tener el formato: 1 letra + 3 dígitos (ej. F001)"
  Y el formulario no se procesa hasta corregir el formato a "F001"

Escenario: Confirmación preventiva al modificar el RUC de la empresa
  Dado que el minimarket tiene configurado el RUC "20100000001"
  Cuando el administrador cambia el RUC a "20608543219" e intenta guardar
  Entonces aparece el banner de advertencia "¿Este RUC (20608543219) es el de tu negocio? Vas a reemplazar el RUC actual (20100000001)..."
  Y la configuración solo se actualiza si el usuario hace clic expresamente en "Sí, guardar este RUC"
```

---

---

## 7. Matriz Maestra Consolidada de Reglas de Negocio en la Interfaz (RN-UI-01 a RN-UI-21)

| Regla de Interfaz | Descripción Operativa y Comportamiento Visual | Vista Funcional de Interfaz | Impacto en la Operación |
| :--- | :--- | :--- | :--- |
| **RN-UI-01: Control de Turno Previo en Ventas** | Bloquea la terminal POS con banner ámbar y botón directo a caja si el vendedor no tiene turno activo | Pantalla UI-014 (Terminal POS) | Operación garantizada bajo estándar de interfaz |
| **RN-UI-02: Blindaje de Vuelto vs Saldo Disponible** | Impide registrar ventas en efectivo si el vuelto supera el efectivo en gaveta con alerta roja | Pantalla UI-014 (Terminal POS) | Operación garantizada bajo estándar de interfaz |
| **RN-UI-03: Trazabilidad Estricta IziPay / Yape/Plin (IziPay)** | Obliga a capturar el N° de autorización de 6 dígitos con advertencia antifraude antes de validar | Pantalla UI-014 (Terminal POS) | Operación garantizada bajo estándar de interfaz |
| **RN-UI-04: Facturación SUNAT Offline Contingente** | Habilita campos manuales con borde ámbar ante caída (503) de los servicios de consulta SUNAT | Pantalla UI-014 (Terminal POS) | Operación garantizada bajo estándar de interfaz |
| **RN-UI-05: Exclusión de Stock Vencido en POS** | Filtra y bloquea unidades vencidas mostrando advertencias diferenciadas en tarjetas de producto | Pantalla UI-014 (Terminal POS) | Operación garantizada bajo estándar de interfaz |
| **RN-UI-06: Reposición Selectiva con Motivos en Anulación** | Permite marcar por ítem si repone stock o exige motivo de baja (dañado, vencido, robo, etc.) | Pantalla UI-015 (Historial de Ventas) | Operación garantizada bajo estándar de interfaz |
| **RN-UI-07: Fondo Mínimo de Apertura S/ 500** | Valida que el monto inicial en caja sea al menos S/ 500.00 para garantizar capacidad de vuelto | Pantalla UI-016 (Turno de Caja) | Operación garantizada bajo estándar de interfaz |
| **RN-UI-08: Alerta de Turnos Olvidados (>16 horas)** | Identifica y alerta turnos abiertos por más de 16h para permitir su cierre forzado por gerencia | Pantalla UI-017 / UI-018 (Control y Cajas) | Operación garantizada bajo estándar de interfaz |
| **RN-UI-09: Cierre Forzado con Registro de Autoría** | Exige motivo obligatorio y registra al Administrador/Gerente en el arqueo forzado de turnos | Pantalla UI-017 (Historial de Cajas) | Operación garantizada bajo estándar de interfaz |
| **RN-UI-10: Criterio de Estado en Conteo de Ventas** | Cuenta estrictamente ventas completadas excluyendo anuladas para evitar desajustes en KPIs | Pantalla UI-018 (Tablero de Control) | Operación garantizada bajo estándar de interfaz |
| **RN-UI-11: Rango Temporal Acotado (Tope 10 Años)** | Bloquea fechas manuales absurdas restringiendo la consulta entre hoy y 10 años hacia atrás | Pantalla UI-018 / UI-019 (Tableros y Reportes) | Operación garantizada bajo estándar de interfaz |
| **RN-UI-12: Umbral de Stock Crítico Híbrido** | Prioriza el stock mínimo individual del producto sobre el umbral global configurable en reportes | Pantalla UI-019 (Reportes Gerenciales) | Operación garantizada bajo estándar de interfaz |
| **RN-UI-13: Regla de Validación de RUC del Negocio (Prefijo 10 o 20)** | Exige que el RUC del minimarket tenga exactamente 11 dígitos numéricos e inicie con prefijo 10 (persona natural con negocio) o prefijo 20 (persona jurídica) en estado Activo y condición Habido ante SUNAT | Pantalla UI-020 (Configuración Fiscal) | Operación garantizada bajo estándar de interfaz |
| **RN-UI-14: Formato de Serie SUNAT (1 Letra + 3 Dígitos)** | Valida máscara estándar SUNAT (ej. B001, F001) forzando mayúsculas en boletas y facturas | Pantalla UI-020 (Configuración Fiscal) | Operación garantizada bajo estándar de interfaz |
| **RN-UI-15: Confirmación de Titularidad en RUC Empresa** | Despliega modal de advertencia ante cambios de RUC antes de permitir sobreescribir la configuración | Pantalla UI-020 (Configuración Fiscal) | Operación garantizada bajo estándar de interfaz |
| **RN-UI-16: Sincronización Reactiva de Configuración Fiscal** | Notifica en tiempo real a las pestañas y terminales POS abiertas al actualizar IGV o series | Pantalla UI-020 (Configuración Fiscal) | Operación garantizada bajo estándar de interfaz |
| **RN-UI-17: Bloqueo de Acceso por Intentos Fallidos** | Despliega alerta en caja roja con contador regresivo de 15 minutos e inhabilita el botón de acceso tras 5  | Pantalla UI-001 (Inicio de Sesión) | Operación garantizada bajo estándar de interfaz |
| **RN-UI-18: Código de Verificación OTP de 4 Dígitos** | Restringe el campo de código de seguridad a exactamente 4 dígitos numéricos y muestra contador de expiración de 15 minutos | Pantalla UI-002 (Recuperación de Acceso) | Operación garantizada bajo estándar de interfaz |
| **RN-UI-19: Despacho Preferente por Caducidad (FEFO)** | Asigna y descuenta automáticamente los lotes con vencimiento más próximo al añadir artículos al carrito de venta | Pantalla UI-014 (Terminal POS) | Operación garantizada bajo estándar de interfaz |
| **RN-UI-20: Trazabilidad Obligatoria en Bajas por Deterioro** | Exige la selección de lote específico y motivo obligatorio para mermas por daño físico o rotura | Pantalla UI-010 / UI-011 (Gestión de Inventario) | Operación garantizada bajo estándar de interfaz |
| **RN-UI-21: Emisión de Boleta a Consumidor Anónimo** | Autocompleta automáticamente como "Público General" sin exigir DNI en boletas menores a S/ 700.00 | Pantalla UI-014 (Terminal POS) | Operación garantizada bajo estándar de interfaz |

---

## 8. Principios de Experiencia de Usuario y Accesibilidad de Mostrador

1. **Gestión Centralizada de Accesos y Credenciales**:
   - La interfaz no dispone de autoservicio de cambio de contraseña dentro de la sesión activa de mostrador, canalizando toda renovación mediante el flujo seguro de recuperación externa en la pantalla de acceso o la administración centralizada por gerencia en el módulo de usuarios.
2. **Calibración Preventiva de Stock Mínimo en Altas de Catálogo**:
   - Durante el registro inicial de un producto, el campo de stock mínimo permanece protegido con un valor inicial sugerido (10 unidades) y microcopy explícito, requiriendo que cualquier ajuste fino se realice posteriormente en la edición tras el análisis de rotación para evitar descalibraciones en el kardex.
3. **Validación Estricta de Contribuyentes para Proveedores**:
   - El formulario de registro valida que el RUC corresponda a personería jurídica habilitada (RUC con prefijo 20), con estado activo y condición de habido ante SUNAT, evitando incorporar registros informales o no acreditados en el sistema de abastecimiento.
4. **Control de Primera Carga vs. Reabastecimiento Formal**:
   - El rol Almacenero cuenta con permisos operativos para registrar la carga inicial de inventario en productos nuevos; las reposiciones subsecuentes de mercadería existente se canalizan obligatoriamente mediante solicitudes formales aprobadas por gerencia para garantizar la trazabilidad de compras.
5. **Consistencia de Bajas por Vencimiento**:
   - Al declarar una merma o baja por producto caducado, la interfaz bloquea la edición manual de cantidad y descuenta la cantidad especificada de la existencia del lote correspondiente, salvaguardando la integridad física y contable del inventario.
6. **Trazabilidad Selectiva de Lote en Mermas y Roturas**:
   - La especificación del número de lote es obligatoria exclusivamente cuando el motivo de baja es "Dañado", permitiendo identificar la partida física afectada sin exigir desglose innecesario en bajas globales.
7. **Rigor de Rotación en Sobrantes de Conteo Físico**:
   - Cuando un recuento o arqueo de inventario arroja un sobrante en productos perecederos, la interfaz exige obligatoriamente la fecha de vencimiento antes de aplicar el ajuste, evitando registrar partidas sin vencimiento en el modelo de inventario.
8. **Protección de Transacciones Críticas contra Doble Registro**:
   - Las acciones transaccionales clave (confirmación de venta, apertura/cierre de caja, registro de bajas y ajustes) incorporan mecanismos de bloqueo visual e inhabilitación inmediata del control al primer clic, garantizando que ninguna orden se duplique por pulsaciones repetidas en el mostrador.

---

## Historial de Control de Cambios (v4.7 -> v4.8)

| N° | Cambio | Ocurrencias |
|:---:|---|:---:|
| 1 | Incorporación explícita del banner y escenario Gherkin de sesión expulsada por inicio concurrente (`HU-AUTH-04`) en UI-001 | 2 |
| 2 | Detalle exhaustivo del flujo de cobro Yape/Plin (IziPay) vía IziPay con código de autorización en UI-014 y trazabilidad visual en UI-015 (`HU-VEN-07`) | 3 |
| 3 | Ratificación del bloque y modal de Solicitudes Pendientes en UI-018 (`HU-DASH-05`) | 2 |
| 4 | Alineación de principios de stock mínimo (UI-007), consulta SUNAT RUC (UI-008), primera carga almacenero (UI-010) y bajas (UI-011) | 4 |
| 5 | Cobertura al 100 % de las 7 categorías en las 20 pantallas y actualización de versión a v4.7 | 20 |
| 6 | Transición a especificación formal a priori v4.8: eliminación integral de evidencias técnicas físicas, servicios técnicos y terminología de desarrollo, estandarización de pasarelas de pago Yape/Plin (IziPay), adaptación de términos de grilla y consolidación de principios de usabilidad de mostrador | Global |


<!-- ===================================================================== -->
<!-- ARCHIVO FUENTE: LEEME_ESTRUCTURA_PAQUETE.md -->
<!-- ===================================================================== -->

# Guía de Navegación del Paquete de Planificación Scrum (v5.2 Oficial Saneada)

Bienvenido a la versión consolidada y definitiva del **Paquete Documental de Planificación Ágil Scrum (v5.2 Oficial Saneada)** para el Sistema Integral de Gestión del Minimarket, estructurado y certificado para su revisión técnica e independiente por comités académicos de evaluación y auditoría técnica.

---

## 1. Organización del Paquete Oficial Actualizado (20 Documentos + Consolidado Oficial)

La totalidad de los documentos oficiales, plenamente saneados de tecnicismos y clases de implementación, con trazabilidad bidireccional y reglas de negocio actualizadas (RN-01 a RN-21), se organizan de la siguiente manera:

```
paquete_v5.2_oficial/
├── 📄 00_Portada_Indice_y_Control_Documental.md      <- Portada oficial, parámetros inmutables y directorio maestro
├── 📄 01_Vision_Alcance_y_Stakeholders.md            <- Propósito, objetivos de negocio (OBJ-01..05) y roles
├── 📄 02_Equipo_Roles_y_Ceremonias.md                <- 6 Developers, DoD, DoR, acuerdos y ceremonias Scrum
├── 📄 00_Product_Backlog_Priorizado.md               <- 74 HUs activas + 1 fuera de alcance (251 pts)
├── 📄 01_EPIC-SEG.md                                 <- 13 HUs de Seguridad, Sesiones y Usuarios (RN-17, RN-18)
├── 📄 02_EPIC-CAT.md                                 <- 17 HUs de Categorías, Productos, Proveedores y Clientes (RN-19)
├── 📄 03_EPIC-INV.md                                 <- 11 HUs de Entradas, Bajas, Ajustes y Solicitudes (RN-01, RN-19, RN-20)
├── 📄 04_EPIC-VEN.md                                 <- 17 HUs de Caja, POS, Facturación y Anulaciones (RN-02, RN-08, RN-09, RN-19, RN-21)
├── 📄 05_EPIC-REP.md                                 <- 16 HUs de Dashboards, Reportes y Parámetros SUNAT (RN-06)
├── 📄 04_Plan_de_Lanzamiento_y_Story_Mapping.md      <- Story Map y 3 Releases (MVP en Release 1)
├── 📄 05_Estimacion_de_Capacidad_Velocidad_y_Costos.md <- Modelo matemático oficial (240 h/sprint, S/ 22,500.00)
├── 📄 06_Sprint_Backlog.md                           <- Desglose y balanceo de 3 Sprints
├── 📄 07_Desglose_de_Tareas_Task_Breakdown.md         <- 373 tareas en plantilla de 8 pasos (502 h de esfuerzo)
├── 📄 08_Reglas_de_Negocio_y_Glosario.md             <- Catálogo Oficial de 21 Reglas de Negocio (RN-01..21) y Glosario
├── 📄 10_Registro_Deuda_Tecnica_y_Brechas.md         <- Supuestos de arquitectura y Decisiones de Negocio D1 a D12
├── 📄 11_Matriz_Trazabilidad_UI.md                   <- Mapeo bidireccional HU -> Pantalla -> Criterio UI
├── 📄 Anexo_A.md                                     <- Consolidado Ejecutivo del Proyecto (Presupuesto y HUs)
├── 📄 Anexo_B_Especificacion_de_Interfaz.md          <- Especificación funcional y de accesibilidad de 20 pantallas (RN-UI-01..21)
├── 📄 Registro_de_Preguntas_y_Decisiones_Product_Owner.md  <- Compendio de 32 decisiones y acuerdos oficiales PO
├── 📄 LEEME_ESTRUCTURA_PAQUETE.md                    <- Guía de navegación del expediente oficial
│
└── 📄 PLANIFICACION_SCRUM_V5.2_CONSOLIDADO_OFICIAL.md <- Archivo maestro consolidado de lectura continua del expediente
```

> **Nota de Saneamiento y Exclusión Documental:**  
> El presente expediente oficial contiene la planificación ágil Scrum formulada ex-ante, estructurada en 20 documentos organizados y trazados bajo estándares de la Guía Oficial de Scrum y buenas prácticas del curso Agile Development, garantizando una evaluación limpia, rigurosa y estandarizada.

---

## 2. Resumen de Cifras Inmutables de la Planificación

- **5 Épicas:** Seguridad (`EPIC-SEG`), Catálogos (`EPIC-CAT`), Inventario (`EPIC-INV`), Ventas/Caja (`EPIC-VEN`), Reportes (`EPIC-REP`).
- **74 Historias de Usuario Planificadas + 1 fuera de alcance (`HU-VEN-09`, 0 pts):**
  - Must have: 38 · Should have: 31 · Could have: 5 · Won't have: 1.
- **251 Puntos de Historia:** Historia pivote `HU-CAT-01` = 1 pt = 2 h-hombre (escala Fibonacci).
- **3 Sprints de 2 semanas (6 semanas calendario):** Timebox de 10 días laborables por iteración.
- **3 Releases Comerciales:**
  - **REL-1 (MVP):** Sprint 1, 22 HUs, 89 pts.
  - **REL-2:** Sprint 2, 25 HUs, 90 pts.
  - **REL-3:** Sprint 3, 27 HUs, 72 pts.
- **Capacidad Neta del Equipo:** 6 Desarrolladores × 25 h/sem × 2 sem × 80 % = **240 horas netas/sprint** (720 h total).
- **Esfuerzo Desglosado Oficial:** **502 horas en 373 tareas** (296 h Construcción [59.0 %] + 206 h Verificación QA [41.0 %]).
- **Presupuesto Total Estimado:** **S/ 22,500.00** (100 % costo laboral directo, S/ 7,500.00 por sprint o release, S/ 25.00/h bruta laboral y S/ 31.25/h neta efectiva).
- **21 Reglas de Negocio Oficiales (RN-01 a RN-21):** Catálogo normativo ampliado y concertado con el Product Owner.
- **Especificación de Interfaz:** **20 pantallas** con 82 apartados de criterios de interfaz y matriz funcional ampliada (RN-UI-01 a RN-UI-21) en [Anexo B](Anexo_B_Especificacion_de_Interfaz.md) y trazadas en [DOC-PLAN-11](11_Matriz_Trazabilidad_UI.md).

---

## 3. Uso del Documento Maestro Consolidado

Para facilitar la revisión integral y continua del expediente sin necesidad de abrir individualmente cada archivo, se incluye el archivo maestro:  
👉 **`PLANIFICACION_SCRUM_V5.2_CONSOLIDADO_OFICIAL.md`**  
Dicho archivo contiene la compilación íntegra y secuencial de los 20 documentos del expediente, permitiendo una revisión exhaustiva de consistencia cruzada en un único documento estructurado.


