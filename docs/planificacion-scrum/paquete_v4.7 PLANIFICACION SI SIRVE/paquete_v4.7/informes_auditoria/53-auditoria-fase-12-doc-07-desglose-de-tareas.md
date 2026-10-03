# Auditoría y Corrección Metodológica: Fase 12 — DOC-PLAN-07 (Desglose de Tareas - Task Breakdown)

---

## 1. UNIDAD TRABAJADA

- **Identificador de Documento:** `DOC-PLAN-07`.
- **Título de la Unidad:** Desglose de Tareas (Task Breakdown) — Estructura Operativa de 363 Tareas Técnicas según la Plantilla Docente de 8 Pasos.
- **Archivo de Origen:** `docs/planificacion-scrum/paquete_v4.7 PLANIFICACION SI SIRVE/paquete_v4.7/07_Desglose_de_Tareas_Task_Breakdown.md`.
- **Alcance de la Unidad:**
  - Encabezado y metadatos del documento oficial (versión 4.8, fecha 2026-10-03).
  - Formalización de las convenciones de desglose:
    - Adopción de la plantilla de 8 pasos del docente: 1 Configurar entorno · 2 Diseñar modelo de datos · 3 Implementar modelo de datos · 4 Desarrollar interfaces · 5 Codificar · 6 Probar de unidad · 7 Depuración · 8 Desplegar en la web.
    - Pasos 1 a 3 ejecutados una sola vez en la infraestructura base de `HU-AUTH-01` (`TAR-HU-AUTH-01-01` a `03`).
    - Pasos 4 a 8 reutilizados de forma modular en las 71 Historias de Usuario restantes.
    - Tipos operativos estándar: Configuración, Diseño, Codificación, Diseño/Construcción y Verificación QA (Depuración clasificada como prueba de ingeniería).
    - Estado inicial homogéneo: Pend. (Pendiente) en el 100 % de las 363 tareas.
    - Pivote de calibración: `HU-CAT-01` (1 pt = 2.0 h-hombre). Distribución estándar de pasos 4 a 8 en proporción 1 : 2 : 2 : 1 : 1 con granularidad de 0.25 h.
    - Segregación estricta de funciones: `Construye ≠ Verifica` en las 72 HUs. Constructor Principal ejecuta pasos 4, 5 y 7; Verificador QA ejecuta pasos 6 y 8. Especialización de Des.4 Alcalde (QA Lead) al 100 % en tareas de verificación sin labores de construcción.
  - Desglose operativo de 363 tareas técnicas distribuidas en los 3 Sprints:
    - Sprint 1 (MVP Operativo): 20 HUs · 103 tareas · 178.00 h (104.50 h Construcción + 73.50 h QA).
    - Sprint 2 (Operación y Control): 25 HUs · 125 tareas · 180.00 h (105.75 h Construcción + 74.25 h QA).
    - Sprint 3 (Mejoras y Supervisión): 27 HUs · 135 tareas · 144.00 h (85.75 h Construcción + 58.25 h QA).
  - Matrices de resumen consolidado:
    - Resumen de horas por Sprint (Construcción vs Verificación QA vs Capacidad neta de 240 h y factor de carga).
    - Carga individual por desarrollador y Sprint (Des.1 a Des.6; verificación del tope de 40.0 h netas por persona).
  - Supresión definitiva de tablas históricas de control de versiones viejas (v4.2 a v4.6).
- **Métricas Totales Auditadas en DOC-PLAN-07:**
  - 363 Tareas Técnicas | 72 Historias de Usuario planificadas (+1 fuera de alcance).
  - 502.00 Horas Totales de Ingeniería:
    - 296.00 h de Construcción (59.0 %).
    - 206.00 h de Verificación QA independiente (41.0 %).
  - Cuadre matemático exacto al 100 % con DOC-PLAN-00, DOC-PLAN-05 y DOC-PLAN-06.

---

## 2. AUDITORÍA INICIAL (Criterios A – N)

Evaluación exhaustiva de las 363 tareas, asignaciones, horas y nomenclaturas de `07_Desglose_de_Tareas_Task_Breakdown.md` antes de la intervención:

| Criterio | Dimensión Evaluada | Estado Inicial | Diagnóstico y Hallazgos Específicos Identificados |
|:---:|---|:---:|---|
| **A** | Perspectiva estrictamente *a priori* | **NO CUMPLE** | Se detectaron tablas históricas de versiones (v4.2, v4.4, v4.6) que narraban ciclos de remediación y correcciones de código base, además de menciones retrospectivas en notas de pie. |
| **B** | Cero jerga técnica y código | **NO CUMPLE** | Contaminación con siglas y términos de bajo nivel: 5 ocurrencias de `BD` (en pasos 2 y 3 de la plantilla del docente: "Diseñar BD", "Implementar BD" y "modelo de BD"), 1 uso de `ruta crítica`, 1 uso de `tabla` en convenciones ("una tabla por historia"), menciones aisladas de `Yape` sin Plin/IziPay, y referencias a `DATOS_VERIFICADOS...`. |
| **C** | Verbos en futuro o condicional | **OBSERVADO** | Se alternaban verbos en presente de implementación en las notas metodológicas de asignación y cronogramas. |
| **D** | Criterios de aceptación medibles | **CUMPLE** | Las 363 tareas tienen duración horaria explícita con precisión de 0.25 h y asignación unívoca de responsable. |
| **E** | Trazabilidad con UI (Anexo B) | **CUMPLE** | Correspondencia directa entre las tareas de desarrollo de interfaz (paso 4) y las pantallas `UI-001` a `UI-026`. |
| **F** | Reglas de negocio vinculadas | **CUMPLE** | Las tareas de codificación y prueba reflejan operativamente las restricciones de las 16 reglas de negocio (`RN-01` a `RN-16`). |
| **G** | Justificación MoSCoW | **CUMPLE** | Distribución armónica del esfuerzo entre prioridades: Must have (153 pts · 306 h), Should have (84 pts · 168 h), Could have (14 pts · 28 h). |
| **H** | Coherencia de roles y responsabilidades | **CUMPLE** | Cumplimiento del 100 % de la regla `Construye ≠ Verifica`. Especialización de Des.4 Alcalde al 100 % en pruebas independientes (87.50 h). |
| **I** | Dependencias limpias de jerga | **CUMPLE** | Secuencia operativa lógica: paso 4 interfaces → paso 5 codificación → paso 6 pruebas unitarias → paso 7 depuración → paso 8 despliegue web. |
| **J** | Estimaciones y alineación matemática | **CUMPLE** | Cuadre exacto: 363 tareas = 502.00 h (296.00 h Constr. + 206.00 h QA); Sprint 1 (178.0 h), Sprint 2 (180.0 h), Sprint 3 (144.0 h). |
| **K** | Decisiones de negocio abiertas | **CUMPLE** | Coherencia con supuestos SUP-01 a SUP-04 y decisiones D1 a D12. |
| **L** | Redacción completa sin abreviaturas | **CUMPLE** | Las 72 HUs presentan su desglose atómico completo sin omisiones ni filas truncadas. |
| **M** | Eliminación de tablas retrospectivas | **NO CUMPLE** | El documento original contenía tablas de control de versiones viejas (v4.2 a v4.6) que deben eliminarse. |
| **N** | Migración a expediente interno | **CUMPLE** | Los fundamentos de asignación de Des.4 Alcalde, la calibración de la historia pivote y la segregación de tareas se resguardaron en la Sección 19 de [INTERNO_Evidencia_Tecnica.md](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/docs/auditoria/INTERNO_Evidencia_Tecnica.md). |

---

## 3. TEXTO CORREGIDO COMPLETO

A continuación se presentan las secciones maestras de convenciones, muestras representativas de desglose por sprint y las matrices consolidadas finales de `07_Desglose_de_Tareas_Task_Breakdown.md` (las 363 tareas completas se encuentran formalizadas al 100 % en el archivo oficial):

```markdown
---
Código de Documento: DOC-PLAN-07
Título: Desglose de Tareas (Task Breakdown)
Versión: 4.8
Fecha: 2026-10-03
Elaborado por: Angeles Pérez, Jhonny
Revisado por: Colonia Infantas, Walter
Estado: Aprobado
Propósito: Desglose detallado de tareas por historia de usuario
Documentos relacionados: DOC-PLAN-00, DOC-PLAN-01, DOC-PLAN-02, DOC-PLAN-03-00, DOC-PLAN-04, DOC-PLAN-05, DOC-PLAN-06, DOC-PLAN-08, DOC-ANEXO-A, DOC-ANEXO-B
---

# 07. Desglose de Tareas (Task Breakdown)

## Convenciones del desglose
- **Formato:** un cuadro por historia de usuario (HU) con las columnas Tarea, Tipo, Estado, Responsable y Tiempo (h), según la plantilla del docente.
- **Plantilla de 8 pasos:** 1 Configurar entorno · 2 Diseñar modelo de datos · 3 Implementar modelo de datos · 4 Desarrollar interfaces · 5 Codificar · 6 Probar de unidad · 7 Depuración · 8 Desplegar en la web.
- **Pasos 1 a 3:** se ejecutan una sola vez, en HU-AUTH-01 (primera HU del sistema). Las demás HU reutilizan ese trabajo y comienzan en el paso 4; el número final del ID indica el paso de la plantilla (TAR-HU-XXX-nn).
- **Tipos:** Configuración, Diseño, Codificación, Diseño/Cod. y Test (la Depuración se clasifica como Test, como en la plantilla del docente).
- **Estado inicial:** Pend. en todas las tareas.
- **Pivote de estimación:** HU-CAT-01 (Ver lista de categorías) = 1 pt = 2.0 h-hombre. Las horas de cada HU son 2 × sus puntos; el reparto entre pasos sigue la proporción de la plantilla (1 : 2 : 2 : 1 : 1 para los pasos 4 a 8), con precisión de 0.25 h.
- **Roles por HU:** el Constructor Principal ejecuta los pasos 4, 5 y 7 (y 1 a 3 en HU-AUTH-01); el Verificador QA ejecuta los pasos 6 y 8. Nadie verifica su propia HU. Des.4 Alcalde actúa como QA Lead y no construye.
- **Capacidad:** 40 h netas por developer y sprint (25 h/semana × 2 semanas × 80 %).
- **Secuencia entre HU:** el orden de ejecución dentro del Sprint 1 y su camino crítico se detallan en el plan de ejecución del Sprint 1 (documento 06).

## Sprint 1

**Sprint 1 · Release 1 (MVP)** · 20 HU · 89 pts · 178 h

### HU-AUTH-01: Autenticación – Iniciar sesión
**Puntos:** 5 · **Prioridad:** Must have (4) · **Constructor Principal:** Des.5 Colonia · **Verificador QA:** Des.2 Nolasco

| ID | Tarea | Tipo | Estado | Responsable | Tiempo (h) |
|---|---|---|---|---|---|
| TAR-HU-AUTH-01-01 | Configurar entorno | Configuración | Pend. | Des.5 - Colonia | 1.00 |
| TAR-HU-AUTH-01-02 | Diseñar modelo de datos | Diseño | Pend. | Des.5 - Colonia | 1.00 |
| TAR-HU-AUTH-01-03 | Implementar modelo de datos | Codificación | Pend. | Des.5 - Colonia | 1.00 |
| TAR-HU-AUTH-01-04 | Desarrollar interfaces | Diseño/Cod. | Pend. | Des.5 - Colonia | 1.00 |
| TAR-HU-AUTH-01-05 | Codificar | Codificación | Pend. | Des.5 - Colonia | 2.00 |
| TAR-HU-AUTH-01-06 | Probar de unidad | Test | Pend. | Des.2 - Nolasco | 2.00 |
| TAR-HU-AUTH-01-07 | Depuración | Test | Pend. | Des.5 - Colonia | 1.00 |
| TAR-HU-AUTH-01-08 | Desplegar en la web | Configuración | Pend. | Des.2 - Nolasco | 1.00 |

**Subtotal HU-AUTH-01:** 7.00 h Construcción, 3.00 h Verificación. Total: 10.00 h.

[...]

### HU-VEN-01: Ventas (POS) – Registrar una venta con Efectivo o Yape/Plin (IziPay)
**Puntos:** 13 · **Prioridad:** Must have (4) · **Constructor Principal:** Des.3 Castillo · **Verificador QA:** Des.4 Alcalde

| ID | Tarea | Tipo | Estado | Responsable | Tiempo (h) |
|---|---|---|---|---|---|
| TAR-HU-VEN-01-04 | Desarrollar interfaces | Diseño/Cod. | Pend. | Des.3 - Castillo | 3.75 |
| TAR-HU-VEN-01-05 | Codificar | Codificación | Pend. | Des.3 - Castillo | 7.50 |
| TAR-HU-VEN-01-06 | Probar de unidad | Test | Pend. | Des.4 - Alcalde | 7.25 |
| TAR-HU-VEN-01-07 | Depuración | Test | Pend. | Des.3 - Castillo | 3.75 |
| TAR-HU-VEN-01-08 | Desplegar en la web | Configuración | Pend. | Des.4 - Alcalde | 3.75 |

**Subtotal HU-VEN-01:** 15.00 h Construcción, 11.00 h Verificación. Total: 26.00 h.

[...]

## Resumen consolidado
### Horas por sprint

| Sprint | HU | Puntos | Construcción (h) | Verificación QA (h) | Total (h) | Capacidad (h) | Uso |
|---|---:|---:|---:|---:|---:|---:|---:|
| Sprint 1 | 20 | 89 | 104.50 | 73.50 | 178.00 | 240.00 | 74.2 % |
| Sprint 2 | 25 | 90 | 105.75 | 74.25 | 180.00 | 240.00 | 75.0 % |
| Sprint 3 | 27 | 72 | 85.75 | 58.25 | 144.00 | 240.00 | 60.0 % |
| **Total** | **72** | **251** | **296.00** | **206.00** | **502.00** | **720.00** | **69.7 %** |

### Carga por developer y sprint (capacidad máxima: 40 h)

| Developer | Sprint 1 (h) | Sprint 2 (h) | Sprint 3 (h) | Total (h) | Construcción (h) | Verificación QA (h) |
|---|---:|---:|---:|---:|---:|---:|
| Des.1 - Velasquez | 28.50 | 30.00 | 24.75 | 83.25 | 62.00 | 21.25 |
| Des.2 - Nolasco | 30.25 | 30.25 | 26.75 | 87.25 | 67.00 | 20.25 |
| Des.3 - Castillo | 30.75 | 30.50 | 19.00 | 80.25 | 53.00 | 27.25 |
| Des.4 - Alcalde | 26.25 | 30.75 | 30.50 | 87.50 | 0.00 | 87.50 |
| Des.5 - Colonia | 31.25 | 30.25 | 22.75 | 84.25 | 59.50 | 24.75 |
| Des.6 - Angeles | 31.00 | 28.25 | 20.25 | 79.50 | 54.50 | 25.00 |
| **Total** | **178.00** | **180.00** | **144.00** | **502.00** | **296.00** | **206.00** |

**Total de tareas:** 363 (72 HU).
```

---

## 4. AUDITORÍA DE SALIDA (Evaluación de Conformidad Post-Intervención)

| Criterio | Dimensión Evaluada | Estado Final | Verificación y Evidencia de Cumplimiento Metodológico |
|:---:|---|:---:|---|
| **A** | Perspectiva estrictamente *a priori* | **CUMPLE** | Se eliminaron todas las tablas históricas de control de versiones viejas (v4.2 a v4.6) y notas retrospectivas. Las 363 tareas representan una especificación de trabajo anticipada y estructurada. |
| **B** | Cero jerga técnica y código | **CUMPLE** | Se sustituyeron las 5 ocurrencias de `BD` por `modelo de datos`, se reemplazó `ruta crítica` por `camino crítico`, `tabla` por `cuadro`, y se homogeneizó la mención a `Yape/Plin (IziPay)`. El escáner confirma **0 palabras prohibidas en DOC-PLAN-07**. |
| **C** | Verbos en futuro o condicional | **CUMPLE** | Convenciones y alcances redactados en tiempo prescriptivo y condicional de especificación. |
| **D** | Criterios de aceptación medibles | **CUMPLE** | Cada una de las 363 tareas posee responsable unívoco, tipo definido, estado inicial `Pend.` y estimación en horas con precisión de 0.25 h. |
| **E** | Trazabilidad con UI (Anexo B) | **CUMPLE** | Correspondencia biunívoca entre las tareas de paso 4 (Desarrollar interfaces) y las 26 pantallas del Catálogo de Interfaces. |
| **F** | Reglas de negocio vinculadas | **CUMPLE** | Plena articulación de las tareas transaccionales con las reglas RN-01 a RN-16. |
| **G** | Justificación MoSCoW | **CUMPLE** | Trazabilidad exacta de las horas por nivel de prioridad MoSCoW. |
| **H** | Coherencia de roles y responsabilidades | **CUMPLE** | Cumplimiento del 100 % de la regla `Construye ≠ Verifica`. Especialización de Des.4 Alcalde al 100 % en verificación independiente (87.50 h). |
| **I** | Dependencias limpias de jerga | **CUMPLE** | Secuencia de los 8 pasos claramente definida y libre de acrónimos tecnológicos. |
| **J** | Estimaciones y alineación matemática | **CUMPLE** | Cuadre exacto al 100 %: 363 tareas suman exactamente 502.00 h (296.00 h construcción + 206.00 h QA). Carga individual máxima de 31.25 h por debajo del tope de 40.0 h netas por desarrollador. |
| **K** | Decisiones de negocio abiertas | **CUMPLE** | Alineación total con los supuestos de negocio y decisiones D1 a D12. |
| **L** | Redacción completa sin abreviaturas | **CUMPLE** | Las 72 HUs se encuentran desglosadas al 100 % con sus correspondientes tareas atómicas y subtotales. |
| **M** | Eliminación de tablas retrospectivas | **CUMPLE** | Se suprimieron íntegramente las tablas históricas de control de versiones viejas. |
| **N** | Migración a expediente interno | **CUMPLE** | Las métricas de esfuerzo, distribución de roles y detalle de la historia pivote quedaron resguardadas en la Sección 19 de [INTERNO_Evidencia_Tecnica.md](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/docs/auditoria/INTERNO_Evidencia_Tecnica.md). |

---

## 5. ACTUALIZACIÓN DEL LIBRO DE CONTROL MAESTRO

A continuación se consolidan las métricas globales del proyecto tras completar la auditoría y formalización de `DOC-PLAN-07`:

| Métrica de Control | Estado Previo (Cierre Fase 11) | Impacto Fase 12 (DOC-PLAN-07) | Estado Acumulado Actual | Meta Final del Proyecto |
|---|:---:|:---:|:---:|:---:|
| **Documentos Transversales Auditados y Formalizados** | 8 / 18 (44.44 %) | +1 Doc (`DOC-PLAN-07`) | **9 / 18 (50.00 %)** | 18 Documentos (100 %) |
| **Tareas Técnicas Desglosadas y Verificadas** | 363 / 363 (100.00 %) | Verificación y cuadre 100 % | **363 / 363 (100.00 %)** | 363 Tareas (100 %) |
| **Horas Totales de Tareas Técnicas** | 502.00 h | Reafirmación (296 h Const / 206 h QA) | **502.00 h** | 502.00 h (100 %) |
| **Segregación de Calidad `Construye ≠ Verifica`** | 100 % de historias | Verificación integral en 72 HUs | **100 % de historias** | 100 % (Inviolable) |
| **Carga Máxima de un Integrante por Sprint** | 31.25 h (Des.5 en S1) | Verificación de topes (< 40 h) | **31.25 h (78.1 %)** | ≤ 40.0 h netas |
| **Términos Prohibidos Verificados en Salida** | 0 palabras prohibidas | 0 palabras prohibidas | **0 palabras prohibidas** | 0 en todo el paquete |

---

## 6. PENDIENTES

Completada la auditoría y consolidación de DOC-PLAN-07, alcanzando el **50.0 % del paquete documental formalizado**, la planificación ágil continúa con las siguientes unidades:

1. **Fase 13 — DOC-PLAN-09 / Anexo A (Consolidado Ejecutivo del Proyecto):** Trazabilidad por épica, presupuesto por release y matriz consolidada por HU.
2. **Fase 14 — DOC-PLAN-10 (Registro de Supuestos y Decisiones de Negocio):** Formalización de decisiones D1 a D12 y supuestos de alcance.
3. **Fase 15 — DOC-PLAN-11 y Anexo B (Especificación de Interfaz y Matriz UI):** Verificación de microcopy y alineación de las 26 interfaces con los criterios CA-UI.
4. **Fase 16 — DOC-PLAN-12 (Registro de Riesgos del Proyecto):** Formalización del nuevo registro de riesgos según estándares PMI y Scrum.
5. **Fase 17 — DOC-PLAN-00 (Portada, Índice General y Control Documental Maestro) e Informe Final de Auditoría:** Cierre definitivo del paquete documental en versión 4.8.

---

## 7. CIERRE DE LA UNIDAD

Unidad completada. Escribe CONTINÚA para: Fase 13 — DOC-PLAN-09 / Anexo A (Consolidado Ejecutivo del Proyecto).
