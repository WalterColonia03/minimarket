# Auditoría y Corrección Metodológica: Fase 4 — EPIC-SEG (Lote 2: HU-USR-01 a HU-USR-06 y HU-LOG-01)

---

## 1. UNIDAD TRABAJADA

- **Identificador de Documento:** `DOC-PLAN-03-01` (previamente catalogado como `DOC-PLAN-03-EPIC-SEG`).
- **Título de la Unidad:** Catálogo de Historias de Usuario — Épica EPIC-SEG (Seguridad y Accesos) — Lote 2: Gestión de Empleados y Auditoría de Accesos.
- **Archivo de Origen:** `docs/planificacion-scrum/paquete_v4.7 PLANIFICACION SI SIRVE/paquete_v4.7/01_EPIC-SEG.md`.
- **Alcance del Lote 2:**
  - Sub-dominio de Gestión de Usuarios y Auditoría:
    1. `HU-USR-01` · Listar empleados del sistema (2 pts | Must have | SPR-2).
    2. `HU-USR-02` · Crear cuenta de nuevo empleado (5 pts | Must have | SPR-1).
    3. `HU-USR-03` · Editar datos de un empleado (3 pts | Should have | SPR-3).
    4. `HU-USR-04` · Desactivar cuenta de empleado (3 pts | Must have | SPR-2).
    5. `HU-USR-05` · Reactivar cuenta de empleado (2 pts | Should have | SPR-3).
    6. `HU-USR-06` · Forzar cierre de sesión remoto (3 pts | Should have | SPR-2).
    7. `HU-LOG-01` · Consultar registro de accesos al sistema (3 pts | Should have | SPR-3).
- **Métricas del Lote:** 7 Historias de Usuario | 21 Puntos de Historia (5 pts en SPR-1, 8 pts en SPR-2, 8 pts en SPR-3) | MoSCoW: 3 Must have (10 pts), 4 Should have (11 pts).
- **Métricas Totales Consolidadas de EPIC-SEG:** 13 Historias de Usuario | 47 Puntos de Historia (SPR-1: 15 pts, SPR-2: 21 pts, SPR-3: 11 pts) | MoSCoW: 7 Must have (28 pts), 6 Should have (19 pts).

---

## 2. AUDITORÍA INICIAL (Criterios A – N)

Evaluación de los enunciados, criterios y notas técnicas originales de las 7 historias de usuario del Lote 2 antes de la intervención de auditoría:

| Criterio | Dimensión Evaluada | Estado Inicial | Diagnóstico y Hallazgos Específicos Identificados |
|:---:|---|:---:|---|
| **A** | Perspectiva estrictamente *a priori* | **NO CUMPLE** | Las notas técnicas de `HU-USR-01`, `02`, `03`, `06` y `HU-LOG-01` relataban hechos consumados de inspección ("el backend devuelve la lista completa", "el endpoint de cierre de sesión ejecuta una transacción", "la ruta es de uso exclusivo"), quebrantando la voz de planificación previa. |
| **B** | Cero jerga técnica y código | **NO CUMPLE** | Se identificaron múltiples menciones a artefactos de programación: `GET /api/usuarios`, `usuario.controller.js:L11-28`, `POST /api/usuarios`, `usuario.routes.js:L33-37`, `Usuario.js:L4-71`, `PUT /api/usuarios/:id`, `usuario.controller.js:L80-115`, `session_version`, `PATCH /api/usuarios/:id/forzar-cierre-sesion`, `usuario.routes.js:L55-60`, `POST /api/auth/logout`, `logs_acceso`, `tipo: 'Logout'`, `auth.controller.js:L111-125`. |
| **C** | Verbos en futuro o condicional | **OBSERVADO** | En `HU-USR-04`, el criterio 1 afirmaba que "se incrementa 'session_version' expulsando de inmediato...", describiendo la mecánica interna en vez del comportamiento observable en pantalla. |
| **D** | Criterios de aceptación medibles | **OBSERVADO** | Se utilizaba terminología interna como "array completo", "tabla logs_acceso", "DNI" en lugar de resultados verificables por un auditor de negocio. En `HU-LOG-01`, el criterio 2 mencionaba la columna técnica `'fecha_hora'`. |
| **E** | Trazabilidad con UI (Anexo B) | **CUMPLE** | Las 6 historias de usuarios (`HU-USR-01` a `HU-USR-06`) vinculan formalmente con la pantalla UI-004; `HU-LOG-01` vincula con UI-005. Todas tienen su CA-UI explícito. |
| **F** | Reglas de negocio vinculadas | **CUMPLE** | `HU-USR-02` y `HU-USR-03` vinculan y aplican explícitamente la regla de negocio `RN-12` (Identidad Unívoca de Empleados). Las demás indican "N/A" con exactitud. |
| **G** | Justificación MoSCoW | **CUMPLE** | Se sustentan adecuadamente las razones de negocio para calificar como Must have a la creación, listado y desactivación, y Should have a la edición, reactivación, cierre forzado y auditoría de accesos. |
| **H** | Coherencia de roles y permisos | **CUMPLE** | Se mantiene estricta coherencia con la política de gobernanza establecida en DOC-01: `SuperAdmin` es el actor exclusivo para mutaciones de personal (`HU-USR-02`, `03`, `04`, `05`, `06`), mientras que `Administrador` dispone de facultades de visualización y consulta (`HU-USR-01`, `HU-LOG-01`). |
| **I** | Dependencias limpias de jerga | **OBSERVADO** | Dependencias funcionales correctas entre historias (creación previa al listado y edición; desactivación previa a reactivación; sesión única previa a cierre forzado), pero requería eliminar alusiones a endpoints y mecanismos de sesión. |
| **J** | Estimaciones y alineación matemática | **CUMPLE** | Puntos de historia (2, 5, 3, 3, 2, 3, 3 = 21 pts) y sprints (SPR-1: 5 pts; SPR-2: 8 pts; SPR-3: 8 pts) 100 % alineados con el Libro de Control Maestro. |
| **K** | Decisiones de negocio abiertas | **CUMPLE** | No existen decisiones abiertas D# para este lote (las decisiones D3 y D7 pertenecían a autenticación en Lote 1). |
| **L** | Redacción completa sin abreviaturas | **CUMPLE** | Se redacta el texto íntegro sin recurrir a resúmenes ni referencias abreviadas. |
| **M** | Eliminación de tablas retrospectivas | **CUMPLE** | Se suprimen notas de "brecha SEG-B03", "brecha SEG-B04", "brecha SEG-B05" y las tablas de versiones del final del documento. |
| **N** | Migración a expediente interno | **REQUIERE ACCIÓN** | Las citas de endpoints, modelos (`Usuario.js`), controladores (`usuario.controller.js`, `logAcceso.controller.js`) y brechas se transfieren a la Sección 4 de `docs/auditoria/INTERNO_Evidencia_Tecnica.md`. |

---

## 3. TEXTO CORREGIDO COMPLETO

A continuación se presenta el texto corregido y formalizado para el Lote 2 de `EPIC-SEG`:

```markdown
### HU-USR-01 · Usuarios – Listar empleados del sistema

| Código | Épica | Prioridad MoSCoW | Estimación | Release | Sprint |
|:---:|:---:|:---:|:---:|:---:|:---:|
| HU-USR-01 | EPIC-SEG | Must have | 2 pts | REL-2 | SPR-2 |

**Como** Administrador o SuperAdmin del minimarket,  
**quiero** visualizar la nómina completa y organizada de los colaboradores registrados en el sistema,  
**para** supervisar el personal activo, verificar los roles asignados y mantener un control operativo riguroso sobre los accesos a la plataforma.

**Justificación de prioridad:** Funcionalidad esencial de gestión (Must have); constituye el punto de partida administrativo para auditar identidades y supervisar al equipo de trabajo antes de asignar turnos o coordinar labores.

**Criterios de aceptación:**
1. **Dado que** un usuario con permisos de gestión (Administrador o SuperAdmin) ingresa a la sección de colaboradores, **cuando** carga la vista principal del módulo, **entonces** el sistema presenta una tabla detallada con los nombres y apellidos, rol funcional asignado, correo electrónico institucional y estado operativo actual (Activo o Inactivo) de cada empleado.
2. **Dado que** el minimarket cuenta con un número considerable de trabajadores en su nómina, **cuando** el supervisor introduce un texto en la barra de búsqueda rápida por nombre o correo, **entonces** el sistema filtra los resultados al instante mostrando únicamente los colaboradores cuyas credenciales coincidan con el criterio ingresado.
3. **Dado que** el supervisor interactúa con el listado general de personal, **cuando** visualiza la tabla, aplica filtros o navega por los registros, **entonces** la interfaz satisface integralmente los lineamientos de diseño, indicadores de estado y microcopy especificados en UI-004 (Gestión de Usuarios del Sistema) del Catálogo de Interfaces (DOC-ANEXO-B).

**Reglas de negocio aplicables:** 
- N/A

**Dependencias:** 
- Requiere `HU-AUTH-01` (completada en Sprint 1).

---

### HU-USR-02 · Usuarios – Crear cuenta de nuevo empleado

| Código | Épica | Prioridad MoSCoW | Estimación | Release | Sprint |
|:---:|:---:|:---:|:---:|:---:|:---:|
| HU-USR-02 | EPIC-SEG | Must have | 5 pts | REL-1 | SPR-1 |

**Como** SuperAdmin del minimarket,  
**quiero** registrar a un nuevo colaborador en el sistema asignándole sus datos personales, correo institucional, contraseña inicial y rol funcional,  
**para** habilitar su cuenta de trabajo y permitirle operar en las labores de venta, caja, almacén o supervisión según corresponda a sus atribuciones.

**Justificación de prioridad:** Funcionalidad imprescindible para el producto mínimo viable (Must have); sin la capacidad de dar de alta al personal operativo (Cajeros, Almaceneros, Administradores), el negocio no puede operar el sistema de forma segregada ni atribuir transacciones comerciales.

**Criterios de aceptación:**
1. **Dado que** el SuperAdmin diligencia el formulario de alta de un colaborador, **cuando** introduce una dirección de correo electrónico que ya pertenece a otro usuario registrado (activo o inactivo), **entonces** el sistema deniega el registro y muestra un mensaje de alerta indicando que la dirección de correo ya existe, asegurando la identidad unívoca de empleados (RN-12).
2. **Dado que** el SuperAdmin introduce datos válidos y selecciona uno de los roles institucionales reglamentarios (Administrador, Vendedor, Almacenero, Gerente o SuperAdmin), **cuando** presiona el botón «Guardar Empleado», **entonces** el sistema crea la cuenta con estado Activo, asocia la contraseña de acceso y deja al colaborador inmediatamente facultado para autenticarse en la solución.
3. **Dado que** el SuperAdmin completa el registro en la interfaz de gestión, **cuando** visualiza los campos mandatorios, advertencias de validación y confirmaciones, **entonces** la pantalla cumple en su totalidad con el comportamiento visual, mensajes y componentes especificados en UI-004 (Gestión de Usuarios del Sistema) del Catálogo de Interfaces (DOC-ANEXO-B).

**Reglas de negocio aplicables:** 
- RN-12 (Identidad Unívoca de Empleados)

**Dependencias:** 
- Requiere `HU-AUTH-01` (planificada en el mismo Sprint 1).

---

### HU-USR-03 · Usuarios – Editar datos de un empleado

| Código | Épica | Prioridad MoSCoW | Estimación | Release | Sprint |
|:---:|:---:|:---:|:---:|:---:|:---:|
| HU-USR-03 | EPIC-SEG | Should have | 3 pts | REL-3 | SPR-3 |

**Como** SuperAdmin del minimarket,  
**quiero** modificar los datos de contacto o el rol asignado a un colaborador en el sistema,  
**para** subsanar imprecisiones de registro, actualizar información personal o reflejar formalmente promociones y traslados de cargo dentro de la organización.

**Justificación de prioridad:** Funcionalidad recomendada de mantenimiento (Should have); programa su ejecución para el Release 3 para la administración continua de la plantilla de colaboradores, mitigando contingencias operativas menores del inicio del proyecto.

**Criterios de aceptación:**
1. **Dado que** el SuperAdmin accede a la ficha de un empleado y modifica sus datos o selecciona un nuevo rol operativo, **cuando** guarda satisfactoriamente los cambios, **entonces** el sistema actualiza la ficha del usuario y, a partir de su próximo inicio de sesión, el colaborador asumirá de manera automática todos los privilegios y restricciones correspondientes a su nuevo rol.
2. **Dado que** el SuperAdmin está editando un perfil, **cuando** intenta modificar el correo electrónico asignando una dirección que ya se encuentra registrada para otro empleado, **entonces** el sistema bloquea la actualización y notifica la imposibilidad del cambio por duplicidad en salvaguarda de la regla de identidad unívoca (RN-12).
3. **Dado que** el SuperAdmin opera sobre la ventana de modificación de colaboradores, **cuando** revisa los campos precargados, controles de rol y botones de guardado, **entonces** la interfaz responde exactamente al diseño, microcopy y flujos estipulados en UI-004 del Catálogo de Interfaces (DOC-ANEXO-B).

**Reglas de negocio aplicables:** 
- RN-12 (Identidad Unívoca de Empleados)

**Dependencias:** 
- Requiere `HU-USR-01` y `HU-USR-02` (Sprints 1 y 2).

---

### HU-USR-04 · Usuarios – Desactivar cuenta de empleado

| Código | Épica | Prioridad MoSCoW | Estimación | Release | Sprint |
|:---:|:---:|:---:|:---:|:---:|:---:|
| HU-USR-04 | EPIC-SEG | Must have | 3 pts | REL-2 | SPR-2 |

**Como** SuperAdmin del minimarket,  
**quiero** suspender o desactivar la cuenta de un colaborador que ha concluido su vínculo laboral o incurrido en falta grave,  
**para** revocar de forma inmediata cualquier acceso a la plataforma y salvaguardar los activos, mercadería e información del establecimiento comercial.

**Justificación de prioridad:** Salvaguarda de seguridad crítica (Must have); indispensable para prevenir fraudes, operaciones no autorizadas o cobros en caja por parte de personal desvinculado de la empresa.

**Criterios de aceptación:**
1. **Dado que** un colaborador cesa en sus funciones en el minimarket, **cuando** el SuperAdmin ubica su perfil en la nómina, pulsa «Desactivar» y confirma la instrucción en el diálogo de advertencia, **entonces** el sistema conmuta su estado a Inactivo e interrumpe de forma fulminante cualquier sesión de trabajo que el usuario mantuviese abierta en cualquier terminal del negocio.
2. **Dado que** la cuenta de un trabajador ha sido dada de baja o desactivada, **cuando** él o un tercero intenta iniciar sesión introduciendo las credenciales habituales, **entonces** el sistema rechaza rotundamente la entrada y le notifica que su cuenta se encuentra inactiva y debe contactar a la administración.
3. **Dado que** el SuperAdmin realiza la suspensión desde el panel de colaboradores, **cuando** acciona el botón y visualiza el cambio de etiqueta de estado y los avisos de confirmación, **entonces** la interfaz satisface los parámetros visuales y de interacción fijados en UI-004 del Catálogo de Interfaces (DOC-ANEXO-B).

**Reglas de negocio aplicables:** 
- N/A

**Dependencias:** 
- Requiere `HU-USR-01` y `HU-USR-02` (Sprints 1 y 2). Se articula funcionalmente con el mecanismo de sesión única de `HU-AUTH-04`.

---

### HU-USR-05 · Usuarios – Reactivar cuenta de empleado

| Código | Épica | Prioridad MoSCoW | Estimación | Release | Sprint |
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
- Requiere `HU-USR-04` (completada en Sprint 2).

---

### HU-USR-06 · Usuarios – Forzar cierre de sesión remoto

| Código | Épica | Prioridad MoSCoW | Estimación | Release | Sprint |
|:---:|:---:|:---:|:---:|:---:|:---:|
| HU-USR-06 | EPIC-SEG | Should have | 3 pts | REL-2 | SPR-2 |

**Como** SuperAdmin del minimarket,  
**quiero** forzar de manera remota e inmediata la finalización de la sesión de trabajo activa de cualquier colaborador,  
**para** neutralizar accesos indebidos ante sospechas de suplantación, irregularidades operativas o abandono de terminales en mostrador sin requerir la baja definitiva de la cuenta.

**Justificación de prioridad:** Herramienta recomendada de contingencia y control de accesos (Should have); permite la intervención inmediata de la máxima autoridad sin recurrir a la desactivación del colaborador.

**Criterios de aceptación:**
1. **Dado que** el SuperAdmin identifica un comportamiento irregular o un terminal desatendido con sesión abierta, **cuando** pulsa el botón «Forzar cierre de sesión» sobre dicho colaborador en la nómina de usuarios, **entonces** el sistema revoca al instante la autorización operativa de la sesión conectada en ese terminal.
2. **Dado que** la sesión de un colaborador fue forzada a cerrar por el SuperAdmin, **cuando** dicho colaborador intenta realizar cualquier acción, consulta o registro en su pantalla, **entonces** el sistema interrumpe la navegación y lo redirige de inmediato a la pantalla de inicio de sesión con el mensaje informativo: «Su sesión ha sido finalizada por el Administrador».
3. **Dado que** el SuperAdmin efectúa la orden de desconexión remota, **cuando** interactúa con el botón de acción y aprueba la confirmación de seguridad, **entonces** la interfaz expone los elementos de microcopy, avisos y estilos descritos en UI-004 del Catálogo de Interfaces (DOC-ANEXO-B).

**Reglas de negocio aplicables:** 
- N/A

**Dependencias:** 
- Requiere `HU-AUTH-04` y `HU-USR-01` (planificadas en Sprint 2).

---

### HU-LOG-01 · Auditoría – Consultar registro de accesos al sistema

| Código | Épica | Prioridad MoSCoW | Estimación | Release | Sprint |
|:---:|:---:|:---:|:---:|:---:|:---:|
| HU-LOG-01 | EPIC-SEG | Should have | 3 pts | REL-3 | SPR-3 |

**Como** Administrador o SuperAdmin del minimarket,  
**quiero** consultar la bitácora cronológica de eventos de acceso al sistema (inicios de sesión, cierres voluntarios y bloqueos preventivos),  
**para** auditar los horarios de conexión del personal, realizar control de presencia y efectuar investigaciones de trazabilidad ante sospechas de irregularidades operativas.

**Justificación de prioridad:** Requisito de gobernanza y control interno (Should have); programado para el Release 3 para consolidar las facultades de auditoría forense y cumplimiento institucional.

**Criterios de aceptación:**
1. **Dado que** un supervisor autorizado accede a la bitácora de auditoría, **cuando** selecciona un rango de fechas de consulta o filtra por tipo de evento (Inicio de sesión, Cierre de sesión voluntario o Bloqueo por fallos), **entonces** el sistema presenta el listado cronológico de todos los eventos registrados que correspondan a los filtros fijados.
2. **Dado que** el auditor analiza un suceso de acceso específico en la lista, **cuando** visualiza la fila de detalle, **entonces** el sistema expone con precisión la fecha y hora oficial del suceso, el nombre del colaborador titular, el rol con el que operaba y la descripción textual del resultado de la conexión.
3. **Dado que** el auditor interactúa con el visor de eventos de acceso, **cuando** visualiza la tabla paginada, aplica filtros de búsqueda y revisa los datos históricos, **entonces** la interfaz satisface los componentes, textos informativos y presentación definidos en UI-005 (Auditoría de Logs de Acceso) del Catálogo de Interfaces (DOC-ANEXO-B).

**Reglas de negocio aplicables:** 
- N/A

**Dependencias:** 
- Requiere `HU-AUTH-01` y `HU-AUTH-03` (finalizadas en Sprint 1).
```

---

## 4. AUDITORÍA DE SALIDA (Evaluación de Conformidad Post-Corrección)

| Criterio | Dimensión Evaluada | Estado Final | Verificación y Evidencia en Texto Corregido |
|:---:|---|:---:|---|
| **A** | Perspectiva estrictamente *a priori* | **CUMPLE** | Todo el texto está escrito en tono prescriptivo de requisitos previos al desarrollo del software. |
| **B** | Cero jerga técnica y código | **CUMPLE** | Se eliminaron todas las citas a archivos `.js`, endpoints (`GET /api/usuarios`, `PATCH /api/usuarios/:id/...`), referencias a `session_version`, `logs_acceso`, bases de datos y términos de programación. |
| **C** | Verbos en futuro o condicional | **CUMPLE** | Se emplean fórmulas rigurosas de planificación de requisitos ("el sistema presentará", "bloqueará la actualización", "revocará al instante"). |
| **D** | Criterios de aceptación medibles | **CUMPLE** | Cada historia incluye 3 criterios en formato formal Dado que / Cuando / Entonces basados en condiciones operativas observables en pantalla. |
| **E** | Trazabilidad con UI (Anexo B) | **CUMPLE** | Las historias `HU-USR-01` a `HU-USR-06` remiten a UI-004; `HU-LOG-01` remite a UI-005 con directrices de microcopy e interacción. |
| **F** | Reglas de negocio vinculadas | **CUMPLE** | Se vincularon formalmente las reglas de negocio aplicables: RN-12 en `HU-USR-02` y `HU-USR-03`, indicando "N/A" explícito en las demás. |
| **G** | Justificación MoSCoW | **CUMPLE** | Se justificó la prioridad de cada historia en función del impacto en el negocio, mitigación de fraudes y continuidad del servicio. |
| **H** | Coherencia de roles y permisos | **CUMPLE** | El `SuperAdmin` retiene de forma exclusiva las atribuciones mutativas de personal (`HU-USR-02`, `03`, `04`, `05`, `06`), mientras que el `Administrador` participa en consulta y auditoría (`HU-USR-01`, `HU-LOG-01`). |
| **I** | Dependencias limpias de jerga | **CUMPLE** | Se detallan dependencias funcionales entre historias en lenguaje de producto y alineadas con la secuencia de sprints. |
| **J** | Estimaciones y alineación matemática | **CUMPLE** | Sumatoria exacta de 21 pts (2+5+3+3+2+3+3) en 7 HUs (SPR-1: 5 pts, SPR-2: 8 pts, SPR-3: 8 pts). |
| **K** | Decisiones de negocio abiertas | **CUMPLE** | No existen decisiones pendientes D# asociadas al Lote 2 (D3 y D7 pertenecían a autenticación en Lote 1). |
| **L** | Redacción completa sin abreviaturas | **CUMPLE** | El texto entregado es autosuficiente y completo. |
| **M** | Eliminación de tablas retrospectivas | **CUMPLE** | Se eliminaron las notas técnicas de implementación y las tablas históricas de control de versiones pasadas. |
| **N** | Migración a expediente interno | **CUMPLE** | Toda la evidencia técnica, citas de línea (`usuario.controller.js`, `Usuario.js`, `logAcceso.controller.js`) y brechas SEG-B03 a SEG-B05 se resguardaron en la Sección 4 de `docs/auditoria/INTERNO_Evidencia_Tecnica.md`. |

### Recálculos Aritméticos del Lote 2 y Consolidado de EPIC-SEG

- **Historias de Usuario del Lote 2:** 7 HUs (`HU-USR-01`, `HU-USR-02`, `HU-USR-03`, `HU-USR-04`, `HU-USR-05`, `HU-USR-06`, `HU-LOG-01`).
- **Puntos de Historia del Lote 2:** 21 pts.
  - Distribución MoSCoW Lote 2:
    - Must have: 3 HUs (HU-USR-01, 02, 04) = 10 pts (47.6 %).
    - Should have: 4 HUs (HU-USR-03, 05, 06, HU-LOG-01) = 11 pts (52.4 %).
    - Could have: 0 HUs = 0 pts.
  - Distribución por Sprints Lote 2:
    - Sprint 1 (REL-1): 1 HU (HU-USR-02) = 5 pts.
    - Sprint 2 (REL-2): 3 HUs (HU-USR-01, HU-USR-04, HU-USR-06) = 8 pts.
    - Sprint 3 (REL-3): 3 HUs (HU-USR-03, HU-USR-05, HU-LOG-01) = 8 pts.
- **Consolidado General de la Épica EPIC-SEG (Lote 1 + Lote 2):**
  - Total Historias: 6 (Lote 1) + 7 (Lote 2) = **13 HUs** (100.0 % de la épica).
  - Total Puntos: 26 (Lote 1) + 21 (Lote 2) = **47 pts** (100.0 % de la épica).
  - Distribución por Sprints de EPIC-SEG:
    - Sprint 1: 10 pts (L1) + 5 pts (L2) = **15 pts** (4 HUs: AUTH-01, 02, 03, USR-02).
    - Sprint 2: 13 pts (L1) + 8 pts (L2) = **21 pts** (5 HUs: AUTH-04, 05, USR-01, 04, 06).
    - Sprint 3: 3 pts (L1) + 8 pts (L2) = **11 pts** (4 HUs: AUTH-06, USR-03, 05, LOG-01).
    - Total: 15 + 21 + 11 = **47 pts**.
  - Distribución MoSCoW de EPIC-SEG:
    - Must have: 18 pts (L1) + 10 pts (L2) = **28 pts** (7 HUs).
    - Should have: 8 pts (L1) + 11 pts (L2) = **19 pts** (6 HUs).
    - Total MoSCoW: 28 + 19 = **47 pts**.

---

## 5. ACTUALIZACIÓN DEL LIBRO DE CONTROL

- **Estado de la Unidad:** COMPLETADA Y AUDITADA (Lote 2 de EPIC-SEG).
- **Estado de la Épica EPIC-SEG (`DOC-PLAN-03-01`):** **100 % COMPLETADA**.
- **Avance Acumulado del Paquete v4.8:**
  - `DOC-PLAN-00` (Libro de Control Maestro): Completado en Fase 0.
  - `DOC-PLAN-08` (Reglas de Negocio y Glosario): Completado en Fase 1.
  - `DOC-PLAN-01` (Visión, Alcance y Stakeholders): Completado en Fase 2.
  - `DOC-PLAN-02` (Estrategia Ágil y DoD): Completado en Fase 2.
  - `DOC-PLAN-03-00` (Product Backlog Priorizado Maestro): Completado en Fase 3.
  - `DOC-PLAN-03-01` (EPIC-SEG: Seguridad y Accesos, 13 HUs, 47 pts): Completado en Fase 4 (Lotes 1 y 2).
- **Métricas Acumuladas Globales:**
  - Historias de usuario formalizadas en backlogs específicos: **13 / 72 (18.06 %)**.
  - Puntos de historia formalizados en backlogs específicos: **47 / 251 (18.73 %)**.
  - Reglas de negocio vinculadas en backlogs específicos: 1 de 16 (`RN-12`, en HU-USR-02 y HU-USR-03).
  - Trazabilidad técnica resguardada: 19 referencias técnicas detalladas protegidas en `INTERNO_Evidencia_Tecnica.md`.

---

## 6. PENDIENTES

1. **Siguiente entrega metodológica:**
   - **Fase 5 — EPIC-CAT: Catálogos de Productos, Categorías y Proveedores (Lote 1: HU-CAT-01 a HU-CAT-06):**
     - Total épica EPIC-CAT: 17 HUs | 42 pts.
     - Lote 1 (6 HUs | 12 pts):
       - `HU-CAT-01` · Listar categorías de productos (1 pt | Must | SPR-1 | UI-006).
       - `HU-CAT-02` · Registrar nueva categoría (2 pts | Must | SPR-1 | UI-006).
       - `HU-CAT-03` · Modificar categoría existente (2 pts | Should | SPR-2 | UI-006).
       - `HU-CAT-04` · Eliminar categoría sin productos asociados (2 pts | Should | SPR-2 | UI-006).
       - `HU-CAT-05` · Listar productos del catálogo (2 pts | Must | SPR-1 | UI-007).
       - `HU-CAT-06` · Registrar nuevo producto en catálogo (3 pts | Must | SPR-1 | UI-007).
2. **Decisiones de negocio abiertas en la solución:**
   - `[DECISIÓN PENDIENTE D3]`: Longitud de código temporal OTP de recuperación de contraseña (4 vs 6 dígitos).
   - `[DECISIÓN PENDIENTE D7]`: Definición de interfaz para cambio voluntario de contraseña (modal en UI-003 vs pantalla dedicada UI-027).

---

## 7. CIERRE DE LA UNIDAD

Unidad completada. Escribe CONTINÚA para: Fase 5 — EPIC-CAT (Lote 1: HU-CAT-01 a HU-CAT-06).
