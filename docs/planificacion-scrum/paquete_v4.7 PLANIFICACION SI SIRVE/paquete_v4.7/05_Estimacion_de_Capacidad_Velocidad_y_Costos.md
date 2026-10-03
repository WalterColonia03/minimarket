---
Código de Documento: DOC-PLAN-05
Título: Estimación de Capacidad, Velocidad y Costos
Versión: 4.8
Fecha: 2026-10-03
Elaborado por: Angeles Pérez, Jhonny
Revisado por: Colonia Infantas, Walter
Estado: Aprobado
Propósito: Cálculos de capacidad neta, velocidad de entrega, horizonte de iteraciones y presupuesto económico oficial
Documentos relacionados: DOC-PLAN-00, DOC-PLAN-01, DOC-PLAN-02, DOC-PLAN-03-00, DOC-PLAN-04, DOC-PLAN-06, DOC-PLAN-07, DOC-PLAN-08, DOC-ANEXO-A, DOC-ANEXO-B
---

# 05. Estimación de Capacidad, Velocidad y Costos

## Secuencia Oficial de Estimación y Cálculos (Plantilla del Docente)

El dimensionamiento metodológico, temporal y financiero del "Sistema de Gestión Integral para Minimarket" sigue estrictamente la secuencia de cálculo formal y unificada requerida por el docente de Agile Development:

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
| TAR-HU-CAT-01-06 | Probar de unidad | Verificación QA | Des.2 - Nolasco | 0.50 |
| TAR-HU-CAT-01-07 | Depuración | Construcción | Des.6 - Angeles | 0.25 |
| TAR-HU-CAT-01-08 | Desplegar en la web | Verificación QA | Des.2 - Nolasco | 0.25 |
| **Total Tareas** | **Plantilla de 5 pasos operativos (reutiliza pasos 1 a 3)** | | **Construye ≠ Verifica** | **2.00 h** |

### Matriz de Referencia Fibonacci Calibrada

| Puntos | Esfuerzo Nominal Base (h) | Complejidad Funcional y de Negocio | Historias Representativas del Backlog |
|:---:|:---:|---|---|
| **1 pt** | 2.0 h | Consulta simple de un catálogo sin lógica de cálculo, o edición simple de un solo campo. | `HU-CAT-01` (Listar categorías), `HU-CONF-01` (Ver configuración), `HU-CAT-03` (Editar categoría), `HU-CLI-03` (Editar correo cliente). |
| **2 pt** | 4.0 h | Mantenimiento estándar sobre un solo registro; listados con filtro simple o activación y suspensión de estado lógico. | `HU-AUTH-03` (Cerrar sesión), `HU-CAT-02` (Crear categoría), `HU-PROV-01` (Listar proveedores), `HU-SOL-02` (Listar reposiciones), `HU-CLI-01` (Listar clientes). |
| **3 pt** | 6.0 h | Operaciones comerciales con validaciones entre entidades, cálculos aritméticos o consulta de registros históricos. | `HU-AUTH-02` (Bloqueo de cuenta), `HU-PROD-01` (Ver catálogo), `HU-PROV-02` (Crear proveedor), `HU-CLI-02` (Crear cliente al vender), `HU-CAJA-05` (Historial de turnos). |
| **5 pt** | 10.0 h | Módulos transaccionales completos, formularios con validaciones de unicidad o actualización de inventario físico. | `HU-AUTH-01` (Iniciar sesión y verificación de credenciales), `HU-USR-02` (Crear empleado), `HU-PROD-02` (Registrar producto), `HU-INV-01` (Entrada mercadería), `HU-CAJA-01` (Abrir caja), `HU-VEN-05` (Historial ventas). |
| **8 pt** | 16.0 h | Flujos transaccionales altamente coordinados con impacto fiscal, concurrencia de sesiones o reversión de inventario y caja. | `HU-AUTH-04` (Sesión única concurrente), `HU-SOL-05` (Recepción contra Solicitud aprobada), `HU-VEN-02` (Comprobantes boleta y factura SUNAT), `HU-VEN-06` (Anulación de venta y devolución). |
| **13 pt** | 26.0 h | Núcleo transaccional de máxima criticidad y densidad operativa del negocio. | `HU-VEN-01` (Venta en mostrador POS: cálculo de totales, desglose de IGV 18 %, pagos en Efectivo / billetera digital Yape/Plin (IziPay) y descuento automático de inventario). |

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

Por consiguiente, el **factor de contingencia del 80.0 %** responde al estándar docente y coincide numéricamente con el descuento de 10.0 h de ceremonias por persona, garantizando:
- Capacidad neta individual = 50.0 h brutas × 0.80 = **40.0 horas netas de desarrollo por sprint**
- Capacidad neta del equipo = 6 desarrolladores × 40.0 h = **240.0 horas netas de desarrollo por sprint**

---

## (e) Matrices de Resumen, Burndown y Balance de Carga

### Cuadro 5.1: Resumen por Sprint
Métricas consolidadas de historias de usuario, puntos comprometidos, horas de tareas de ingeniería (fuente: DOC-PLAN-07) y balance de prioridades MoSCoW:

| Sprint | Horas Netas Capacidad | HUs Planificadas | Puntos Comprometidos | Horas Tareas Reales (07) | Carga / Capacidad Neta | Estado | Must have (pts) | Should have (pts) | Could have (pts) |
|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|
| **Sprint 1** | 240.0 h | 20 | 89 | 178.0 h | 74.2 % | Planificado | 89 | 0 | 0 |
| **Sprint 2** | 240.0 h | 25 | 90 | 180.0 h | 75.0 % | Planificado | 64 | 26 | 0 |
| **Sprint 3** | 240.0 h | 27 | 72 | 144.0 h | 60.0 % | Planificado | 0 | 58 | 14 |
| **TOTAL** | **720.0 h** | **72** | **251** | **502.0 h** | **69.7 %** | | **153** | **84** | **14** |

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
| **Des.4 Alcalde** *(QA Lead)* | 26.25 | 30.75 | 30.50 | 87.50 | 0.00 | 87.50 | 30.75 h (76.9 %) |
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
   - *Mitigación:* Se adopta la estrategia de diseño y especificación previa de contratos de interfaz desde el día 1; la verificación funcional concluye en el día 7 y la emisión de comprobantes (`HU-VEN-02`) culmina en el día 8. El sprint finaliza en el día 9 con 2.50 h residuales, reservando holgura operativa y el día 10 para la presentación oficial en clase.
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
