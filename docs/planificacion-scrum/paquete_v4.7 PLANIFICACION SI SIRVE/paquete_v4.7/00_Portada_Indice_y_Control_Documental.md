---
Código de documento: DOC-PLAN-00
Título: Planificación Scrum y Control Documental
Versión: 4.8
Fecha: 2026-09-28
Elaborado por: Angeles Pérez, Jhonny
Revisado por: Colonia Infantas, Walter
Estado: Aprobado
Propósito: Resumen ejecutivo y control del plan Scrum
Documentos relacionados: Todos los documentos de planificación (DOC-PLAN-01 a DOC-PLAN-11, DOC-ANEXO-A y DOC-ANEXO-B)
---

# 00. Resumen Ejecutivo y Control Documental

## Resumen de Cifras y Parámetros Planificados

| Métrica / Parámetro | Valor Oficial Planificado | Detalle Metodológico |
| :--- | :---: | :--- |
| **Épicas de Negocio** | **5 Épicas** | EPIC-SEG, EPIC-CAT, EPIC-INV, EPIC-VEN, EPIC-REP |
| **Historias de Usuario (HUs)** | **72 HU planificadas + 1 fuera de alcance** | Must have: 36 · Should have: 31 · Could have: 5 · Won't have: 1 |
| **Puntos de Historia Totales** | **251 pts** | Estimados con pivote HU-CAT-01 = 1 pt = 2 h-hombre (escala Fibonacci) |
| **Iteraciones (Sprints)** | **3 Sprints** | Duración: 2 semanas por sprint (6 semanas calendario, 10 días de trabajo c/u) |
| **Lanzamientos (Releases)** | **3 Releases** | REL-1 (MVP): SPR-1, 89 pts · REL-2: SPR-2, 90 pts · REL-3: SPR-3, 72 pts |
| **Capacidad Neta del Equipo** | **240 horas/sprint** | 6 Developers × 25 h/sem × 2 sem × 80 % contingencia neta (40 h c/u) |
| **Esfuerzo Total Desglosado** | **502 horas (363 tareas)** | 296 h Construcción (59.0 %) + 206 h Verificación QA (41.0 %) |
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
| 08 | `DOC-PLAN-03-04` | [EPIC-VEN: Ventas y Caja](04_EPIC-VEN.md) | 15 HUs de apertura/cierre de caja, POS, comprobantes y anulaciones | Colonia Infantas, Walter |
| 09 | `DOC-PLAN-03-05` | [EPIC-REP: Reportes, Dashboards y Configuración](05_EPIC-REP.md) | 16 HUs de reportes gerenciales, dashboards y configuración del local | Colonia Infantas, Walter |
| 10 | `DOC-PLAN-04` | [04. Plan de Lanzamiento y Story Mapping](04_Plan_de_Lanzamiento_y_Story_Mapping.md) | Story Map en formato docente (5 épicas, 3 releases) y líneas de corte | Colonia Infantas, Walter |
| 11 | `DOC-PLAN-05` | [05. Estimación de Capacidad, Velocidad y Costos](05_Estimacion_de_Capacidad_Velocidad_y_Costos.md) | Secuencia matemática oficial, sensibilidad, burndown y gestión de riesgos | Angeles Pérez, Jhonny |
| 12 | `DOC-PLAN-06` | [06. Sprint Backlog](06_Sprint_Backlog.md) | Plan de 3 sprints, asignación de tareas y plan de ejecución del Sprint 1 | Angeles Pérez, Jhonny |
| 13 | `DOC-PLAN-07` | [07. Desglose de Tareas (Task Breakdown)](07_Desglose_de_Tareas_Task_Breakdown.md) | Desglose oficial de 363 tareas en plantilla de 8 pasos | Angeles Pérez, Jhonny |
| 14 | `DOC-PLAN-08` | [08. Reglas de Negocio y Glosario](08_Reglas_de_Negocio_y_Glosario.md) | Catálogo de 16 reglas de negocio y glosario terminológico | Colonia Infantas, Walter |
| 15 | `DOC-PLAN-10` | [10. Registro de Supuestos de Arquitectura y Decisiones de Negocio](10_Registro_Deuda_Tecnica_y_Brechas.md) | Supuestos de diseño, decisiones arquitectónicas D1 a D12 y riesgos | Colonia Infantas, Walter |
| 16 | `DOC-PLAN-11` | [11. Matriz de Trazabilidad Historia-Pantalla](11_Matriz_Trazabilidad_UI.md) | Relación HU → pantalla → CA-UI, cobertura y guía de consulta | Colonia Infantas, Walter |
| 17 | `DOC-ANEXO-A` | [Anexo A. Consolidado Ejecutivo del Proyecto](Anexo_A.md) | Trazabilidad por épica, presupuesto por release y matriz por HU | Colonia Infantas, Walter |
| 18 | `DOC-ANEXO-B` | [Anexo B. Especificación de Interfaz (UI, microcopy y comportamiento visual)](Anexo_B_Especificacion_de_Interfaz.md) | Especificación por pantalla de campos, ayudas, colores de estado, banners, estados vacíos y validaciones | Colonia Infantas, Walter |

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
| **4.5** | 2026-10-03 | Equipo Scrum / Product Owner | Resolución formal de especificación de los 6 puntos de negocio PP-01 a PP-06: unificación de OTP a 4 dígitos (`HU-AUTH-05`, REL-2), IGV ajustado al 18 % legal vigente (`HU-CONF-02`, `HU-VEN-01a`, REL-1), ampliación de la matriz de roles a 8 módulos en DOC-PLAN-01, unificación de actores en reposición (`HU-SOL-03/04`), precisión de historial de entradas sin paginación (`HU-INV-04`) y estandarización de reglas RN-02 y RN-03 (DOC-PLAN-08). |
| **4.6** | 2026-10-03 | Equipo Scrum / Product Owner | Integración formal de la especificación de interfaz al plan: Anexo B (20 pantallas), criterio CA-UI en cada historia con pantalla, cláusulas de DoR/DoD, matriz de trazabilidad DOC-PLAN-11 y registro de decisiones de interfaz en DOC-PLAN-10. Versión única 4.6 para todo el paquete. |
| **4.7** | 2026-10-03 | Equipo Scrum / Product Owner | Cobertura exhaustiva de interfaz: inventario completo de textos visibles (472 elementos especificados; ausencia confirmada de textos legales), evaluación satisfactoria en las 7 categorías de UI por pantalla en Anexo B, resolución de puntos de negocio PP-07 a PP-12 (stock mínimo inicial sugerido en 10 al crear producto, consulta sincrónica RUC SUNAT para estado activo/habido, baja por vencimiento al 100 % sin exigencia de partida específica, cobro Yape/Plin (IziPay) vía terminal IziPay con código de autorización de 6 dígitos, primera carga de mercadería por almacenero para productos sin entradas previas y matriz de permisos por roles) y trazabilidad confirmada en DOC-PLAN-11. |
| **4.8** | 2026-10-03 | Equipo Scrum (6 Developers) / Product Owner | Elevación integral a estándar metodológico ágil Scrum formal a priori: eliminación completa de evidencias técnicas físicas, servicios de servidor y tecnicismos, estandarización unificada de pasarelas de pago Yape/Plin (IziPay), consolidación de principios de experiencia de usuario de mostrador y certificación de 0 términos prohibidos en la totalidad de los 18 documentos del paquete. |

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
| 1 | Elevación a estándar metodológico ágil Scrum a priori formal: eliminación íntegra de evidencias técnicas físicas, servicios de servidor y tecnicismos en los 18 documentos | Global |
| 2 | Actualización del Directorio Maestro con los 18 documentos oficiales del paquete y enlaces directos en el paquete documental | 18 |
| 3 | Estandarización unificada de métodos de cobro electrónico digital bajo la pasarela Yape/Plin (IziPay) | Global |
| 4 | Ratificación formal del presupuesto (S/ 22,500.00), esfuerzo (502 h / 363 tareas) y capacidad neta (240 h/sprint) con certificación de cero términos prohibidos | Global |
