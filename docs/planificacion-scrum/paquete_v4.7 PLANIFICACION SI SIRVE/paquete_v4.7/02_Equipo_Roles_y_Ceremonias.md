---
Código de documento: DOC-PLAN-02
Título: Equipo, Roles y Ceremonias
Versión: 4.8
Fecha: 2026-10-03
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
| **Des.4** | Alcalde Navarro, Sebastian | Developer | **Calidad y Pruebas (QA Lead):** liderazgo de pruebas funcionales, verificación cruzada independiente, certificación de criterios de aceptación y preparación de despliegues web. |
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
| **Sprint Retrospective** | 1 sesión al cierre del sprint | 1.5 h | Análisis reflexivo del proceso de trabajo, identificación de cuellos de botella y acuerdos de mejora continua. Participan: SM y 6 Developers. |
| **Total Ceremonias** | **Deducción de Timebox** | **10.0 h** | **Representa exactamente el 20.0 % de las 50.0 horas brutas de dedicación individual.** |

**Justificación Metodológica de la Capacidad Neta (80 %):**  
El factor de contingencia del 80 % es el parámetro oficial adoptado por el equipo y coincide de forma exacta con deducir 10.0 horas de ceremonias Scrum por integrante a lo largo de cada sprint de 2 semanas (4.0 h Planning + 2.5 h Daily + 2.0 h Review + 1.5 h Retrospectiva = 10.0 h). Sobre una dedicación bruta de 50.0 horas por persona (25 h/semana × 2 semanas), las ceremonias representan exactamente el 20.0 % del tiempo. Por consiguiente, el 80.0 % restante corresponde a capacidad neta de ingeniería:
- **Capacidad neta por desarrollador:** 50.0 h brutas × 0.80 = **40.0 horas netas por sprint**.
- **Capacidad neta del equipo (6 Developers):** 6 × 40.0 h = **240.0 horas netas por sprint**.
- **Capacidad neta acumulada del proyecto (3 Sprints):** 3 × 240.0 h = **720.0 horas netas**.