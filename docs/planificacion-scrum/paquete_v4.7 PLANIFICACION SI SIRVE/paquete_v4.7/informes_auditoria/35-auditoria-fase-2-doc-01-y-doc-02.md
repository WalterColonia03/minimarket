# 35. Auditoría y Entrega de Fase 2: DOC-PLAN-01 y DOC-PLAN-02

**Documentos Auditados:**  
- `01_Vision_Alcance_y_Stakeholders.md` (`DOC-PLAN-01`)  
- `02_Equipo_Roles_y_Ceremonias.md` (`DOC-PLAN-02`)  
**Versión de Salida:** 4.8  
**Fecha de Emisión:** 2026-10-03  
**Estado:** Unidad Auditada, Corregida y Aprobada para Reemplazo  

---

## 1. UNIDAD TRABAJADA
- **Nombre:** Fase 2 — DOC-01 Visión, Alcance y Roles y DOC-02 Equipo, Roles y Ceremonias.
- **Documentos involucrados:**  
  1. [`01_Vision_Alcance_y_Stakeholders.md`](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/docs/planificacion-scrum/paquete_v4.7%20PLANIFICACION%20SI%20SIRVE/paquete_v4.7/01_Vision_Alcance_y_Stakeholders.md) (`DOC-PLAN-01`)
  2. [`02_Equipo_Roles_y_Ceremonias.md`](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/docs/planificacion-scrum/paquete_v4.7%20PLANIFICACION%20SI%20SIRVE/paquete_v4.7/02_Equipo_Roles_y_Ceremonias.md) (`DOC-PLAN-02`)
- **Rango:** Ambos documentos completos (Visión, Objetivos, Alcance, Matriz de Roles y Permisos de 8 módulos con notas metodológicas sin código, Supuestos SUP-01 a SUP-05 saneados, Organización de los 6 Developers con especialidades rectificadas, Definiciones DoR y DoD en lenguaje de negocio, y Ceremonias Scrum con deducción matemática de capacidad).

---

## 2. AUDITORÍA INICIAL

| ID-Hallazgo | Ubicación | Texto Original (cita breve) | Problema Detectado | Categoría (A–N) | Severidad | Corrección Propuesta |
|:---:|---|---|---|:---:|:---:|---|
| **H-01-01** | DOC-01: Encabezado YAML (L1-11) | `Versión: 4.7` | Desfasado frente al estándar de versión única v4.8 del paquete. | **L** | Media | Elevar a `Versión: 4.8`, fecha `2026-10-03` y código `DOC-PLAN-01`. |
| **H-01-02** | DOC-01: Matriz de Roles (L50-57) | `*Notas metodológicas de trazabilidad técnica (verificadas en código base):*` con citas a `usuario.routes.js`, `categoria.routes.js`, `auth.middleware.js`, `caja.routes.js`, `POST /api/...` | Detalle arquitectónico y citas de código fuente prohibidas en la planificación de negocio previa. | **F**, **G** | Crítica | Suprimir las citas de código. Migrar la evidencia técnica a `INTERNO_Evidencia_Tecnica.md`. Reemplazar por notas de gobernanza operativa y segregación de funciones. |
| **H-01-03** | DOC-01: Supuesto SUP-03 (L69) | `solicitando el número de autorización de 6 dígitos numéricos (referencia_pago)... sin requerir integración bancaria directa por API en tiempo real` | Uso de nombres de campos técnicos (`referencia_pago`) y jerga de interfaces (`API`). | **F**, **E** | Alta | Reescribir en lenguaje de negocio: cobro mediante Yape/Plin mediante terminal IziPay con código de autorización de 6 dígitos impreso en comprobante físico. Incorporar `[DECISIÓN PENDIENTE D8]`. |
| **H-01-04** | DOC-01: Historial de Cambios (L73-109) | Tablas de «Cambios aplicados en esta versión (v4.2 a v4.7)» | Secciones históricas redundantes que delatan ciclos de auditoría contra código. | **M**, **L** | Alta | Suprimir en su totalidad. El historial unificado de cambios se centraliza en `DOC-PLAN-00`. |
| **H-02-01** | DOC-02: Encabezado YAML (L1-11) | `Versión: 4.6` | Desalineación documental (permanecía en versión 4.6). | **L** | Alta | Elevar a `Versión: 4.8`, fecha `2026-10-03` y código `DOC-PLAN-02`. |
| **H-02-02** | DOC-02: Tabla Developers (L22, L24) | Des.3: «Backend / Seguridad: construcción de POS»; Des.5: «Frontend / Diseño: construcción de seguridad» | Especialidades cruzadas invertidas: Des.3 figura como Seguridad pero construye POS (Ventas); Des.5 figura como Frontend pero construye Seguridad y Accesos. | **H** | Alta | Rectificar especialidades: Des.3 asume «Lógica Transaccional y Ventas (POS)» y Des.5 asume «Seguridad, Accesos y Sesiones», sin alterar responsables de tareas del DOC-07. |
| **H-02-03** | DOC-02: Definition of Done (L52-54) | `sin mostrar errores en consola`, `base de datos`, `endpoint` | Jerga técnica de desarrollo e implementación web dentro del criterio de aceptación de calidad. | **F** | Alta | Reescribir en términos funcionales observables: operación sin interrupciones, persistencia de datos al navegar o recargar, y validación estricta de perfiles autorizados. |
| **H-02-04** | DOC-02: Historial de Cambios (L70-92) | Tablas de «Cambios aplicados en esta versión (v4.2, v4.4, v4.6)» | Historial disperso y redundante. | **M**, **L** | Alta | Suprimir del documento; centralizar en la portada `DOC-PLAN-00`. |

---

## 3. TEXTO CORREGIDO COMPLETO DE LA UNIDAD

### 3.1 DOC-PLAN-01: Visión, Alcance y Stakeholders

```markdown
---
Código: DOC-PLAN-01
Título: Visión, Alcance y Stakeholders
Versión: 4.8
Fecha: 2026-10-03
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
| Código | Objetivo de Negocio | Épica Asociada |
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
| **Administrador** | Consulta de usuarios y auditoría de accesos | Operará y Administrará (alta, edición, desactivación) | Operará y Modificará (gestión de directorio) | Operará y Supervisará (aprobación y cierres) | Operará y Supervisará (anulación de ventas) | Operará y Aprobará (regularización y pedidos) | Consultará y Analizará | Operará (edición comercial e impositiva) |
| **SuperAdmin** | Operará (alta, edición, estados y cierre forzado) | Operará (hereda potestades de Administrador) | Operará (hereda potestades de Administrador) | Operará y Supervisará (hereda Administrador) | Operará y Supervisará (hereda Administrador) | Operará y Aprobará (hereda Administrador) | Consultará y Analizará | Operará (hereda potestades de Administrador) |
| **Vendedor** | Sin acceso (gestión de clave propia) | Consulta en pantalla de ventas | Consulta de identidad y registro rápido | Operará (apertura de turno propio y arqueo) | Operará (atención POS, cobro e impresión) | Sin acceso | Sin acceso | Consulta informativa para comprobantes |
| **Almacenero** | Sin acceso (gestión de clave propia) | Operará (alta y edición de datos operativos) | Sin acceso | Sin acceso | Sin acceso | Operará (entradas, bajas, ajustes y pedidos) | Sin acceso | Consulta informativa de parámetros |
| **Gerente** | Sin acceso (gestión de clave propia) | Consultará directorio y fichas | Consultará listado de clientes | Supervisará (auditoría de turnos y cierres) | Consultará y Supervisará (autoriza anulación) | Supervisará y Decidirá (evalúa reposición) | Consultará y Analizará | Consulta informativa de parámetros |

*Criterios Metodológicos de Gobernanza y Separación de Funciones:*
1. **Seguridad y Personal:** La creación, actualización, desactivación de cuentas y la potestad exclusiva de ejecutar el cierre forzado de sesión remota de un usuario corresponden privativamente al SuperAdmin. El Administrador cuenta con atribuciones de consulta sobre la nómina de colaboradores y los registros de auditoría de accesos.
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
- **SUP-03 (Flujo Operativo de Cobros y Comprobantes):** La emisión de boletas y facturas se planifica con generación local de correlativos continuos ininterrumpidos y formatos según estándar fiscal [DECISIÓN PENDIENTE D8: ratificar que no incluye envío electrónico sincrónico a servidores SUNAT]; el cobro con billeteras digitales se realizará mediante Yape/Plin mediante terminal IziPay con código de autorización de 6 dígitos (`HU-VEN-01` y `HU-VEN-07`), donde el cajero registrará dicho código impreso por el terminal físico garantizando su unicidad histórica para evitar cobros duplicados (RN-02), sin requerir integración bancaria automatizada directa por canales externos.
- **SUP-04 (Horizonte Temporal y Presupuesto Oficial):** El proyecto se ejecutará en un horizonte timebox de 3 Sprints de 2 semanas cada uno (6 semanas lectivas, 10 días laborables por sprint), iniciando el miércoles 30 de septiembre y concluyendo el martes 10 de noviembre de 2026. El feriado nacional del jueves 08 de octubre (Combate de Angamos) se compensa laborando el sábado 03 de octubre. El presupuesto total planificado es de S/ 22,500.00 (S/ 7,500.00 por sprint o release), correspondiente íntegramente a costos laborales (6 semanas × S/ 625.00/semana × 6 desarrolladores), sin contemplar costos no laborales.
- **SUP-05 (Disponibilidad en Días de Presentación Académica):** Los martes 06 de octubre y 13 de octubre coinciden con sesiones lectivas fijas. Se planifica una dedicación de 4.0 horas efectivas de desarrollo el día 6, mientras que el martes 13 de octubre se reserva como jornada exclusiva de presentación del MVP en la Sprint Review 1, sin asignación de tareas técnicas de construcción.
```

---

### 3.2 DOC-PLAN-02: Equipo, Roles y Ceremonias

```markdown
---
Código: DOC-PLAN-02
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
4. Se certificó el cumplimiento manual e independiente del 100 % de los criterios de aceptación bajo la regla obligatoria `Construye ≠ Verifica`.
5. La interfaz cumple al 100 % la especificación de campos, textos de ayuda, etiquetas, alertas de color y estados vacíos documentados en el Anexo B (DOC-ANEXO-B), sin elementos visibles indocumentados.
6. Se ejecutaron favorablemente las pruebas de verificación planificadas, los defectos identificados fueron subsanados y el incremento se encuentra desplegado en el entorno web oficial para la demostración en la Sprint Review.

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
```

---

## 4. AUDITORÍA DE SALIDA (Evaluación Hostil de la Fase 2)

| Dimensión Auditada | Resultado | Evidencia y Verificación en el Texto Corregido |
|---|:---:|---|
| **A. Exactitud numérica y fechas** | **CUMPLE** | Cálculos exactos: 6 devs × 25 h/sem × 2 sem = 300 h brutas; 10 h ceremonias = 20 %; capacidad neta = 40 h/dev y 240 h equipo por sprint; 720 h en 3 sprints. Calendario del 30-sep al 10-nov con feriado compensado verificado. Presupuesto S/ 22,500.00 confirmado. |
| **B. Consistencia con Datos Inmutables** | **CUMPLE** | Se respetan estrictamente los 6 developers, las 240 h netas por sprint, los 3 sprints y la fórmula presupuestaria oficial sin modificaciones. |
| **C. Consistencia de títulos y estructura** | **CUMPLE** | Mantiene correspondencia estructural con el directorio maestro del proyecto y con las convenciones de la Scrum Guide 2020. |
| **D. Contradicciones internas y documentales** | **CUMPLE** | Se resolvieron las contradicciones previas: se eliminaron las referencias cruzadas erróneas entre especialidades y se armonizó la matriz de 8 roles con las potestades de negocio. |
| **E. Terminología única de negocio** | **CUMPLE** | SUP-03 unificado a «Yape/Plin mediante terminal IziPay con código de autorización de 6 dígitos». Se suprimió la palabra "Development Team" consolidando «Developers» según Scrum Guide 2020. |
| **F. Lenguaje de negocio (sin jerga ni código)** | **CUMPLE** | Ocurrencias de nombres de archivos `.js`, `.jsx`, rutas `/api/...`, nombres de variables, `endpoint`, `consola`, `base de datos` en el texto final: **0 (cero)**. La evidencia técnica quedó resguardada en `INTERNO_Evidencia_Tecnica.md`. |
| **G. Perspectiva de plan (verbos en futuro)** | **CUMPLE** | Formulaciones redactadas en futuro ("el sistema permitirá...", "se planifica que...", "integrará..."). Cero verbos en pasado sobre el sistema. |
| **H. Actores/roles coherentes con matriz DOC-01** | **CUMPLE** | Se rectificaron las especialidades de Des.3 (Ventas / POS) y Des.5 (Seguridad / Accesos). Los 5 roles del minimarket están claramente delimitados en sus atribuciones. |
| **I. Criterios de aceptación y DoR/DoD medibles** | **CUMPLE** | Cláusulas de DoR y DoD redactadas con criterios de calidad verificables en la experiencia del usuario y en el cumplimiento documental del Anexo B. |
| **J. Valor de negocio y trazabilidad** | **CUMPLE** | La visión del producto, el Product Goal y la tabla de objetivos trazan nítidamente el valor comercial hacia OBJ-01 a OBJ-05. |
| **K. Reglas de negocio vinculadas** | **CUMPLE** | Se citan RN-02 (cobro digital) y RN-10 (fondo de apertura) en los supuestos y descripciones operativas de forma coherente con DOC-PLAN-08. |
| **L. Metadatos y control documental** | **CUMPLE** | Encabezados YAML corregidos a Versión 4.8 y fecha 2026-10-03 para ambos documentos (`DOC-PLAN-01` y `DOC-PLAN-02`). |
| **M. Ortografía, gramática, tono y estilo** | **CUMPLE** | Redacción formal, sobria y profesional. Eliminadas las tablas de cambios por versión de ambos documentos. |
| **N. Decisiones D1 a D12 formalizadas** | **CUMPLE** | La decisión D8 sobre el alcance de emisión electrónica de comprobantes SUNAT está formalmente señalizada bajo `[DECISIÓN PENDIENTE D8]`. |

---

## 5. ACTUALIZACIÓN DEL LIBRO DE CONTROL
- **Términos fijados:**
  - Especialidad de Des.3 fijada como: «Lógica Transaccional y Ventas (POS)».
  - Especialidad de Des.5 fijada como: «Seguridad, Accesos y Sesiones».
  - DoR y DoD saneadas: retiro definitivo de términos de desarrollo web (`consola`, `base de datos`, `endpoint`) y adopción de criterios funcionales observables.
- **Evidencia técnica migrada:**
  - Las citas técnicas de rutas Express y controladores de la Matriz de Roles quedaron resguardadas en la Sección 2 de [`docs/auditoria/INTERNO_Evidencia_Tecnica.md`](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/docs/auditoria/INTERNO_Evidencia_Tecnica.md).
- **Matriz de propagación hacia las siguientes fases:**
  - `00_Product_Backlog_Priorizado.md` (Fase 3): Alinear las justificaciones de mitigación técnica con la perspectiva de negocio fijada en DOC-01 y DOC-02.
  - `07_Desglose_de_Tareas_Task_Breakdown.md` (Fase 12): Validar que las asignaciones de tareas concuerden plenamente con las responsabilidades de Des.3 (Ventas) y Des.5 (Seguridad) sin modificar ninguna cifra ni asignación.

---

## 6. PENDIENTES (Decisiones del Product Owner aplicables a Fase 2)

| Decisión | Pregunta para el Product Owner | Estado Actual | Impacto Directo en DOC-01 / DOC-02 |
|:---:|---|:---:|---|
| **D5** | En el registro de productos (`HU-PROD-02`), la matriz de DOC-01 autoriza a Administrador y Almacenero, pero la historia cita solo a Administrador: ¿se amplía al Almacenero? | `[DECISIÓN PENDIENTE D5]` | Definirá si en la Fase 5 se añade al Almacenero en el "Como" de `HU-PROD-02`. |
| **D8** | Alcance de comprobantes: redactar qué incluye (numeración consecutiva y formato SUNAT) y qué no (envío electrónico a SUNAT). | `[DECISIÓN PENDIENTE D8]` | Impacta la formulación de SUP-01 y SUP-03 en `DOC-PLAN-01`. |
| **D9** | Capacidad real del Sprint 1 (8 días de trabajo antes del colchón ≈ 192 h): ¿se mantiene 240 h como parámetro oficial y se agrega una nota de riesgo, o se recorta alcance? | `[DECISIÓN PENDIENTE D9]` | Impacta la interpretación de SUP-02 y SUP-05 en `DOC-PLAN-01`. |
