---
Código de documento: DOC-PLAN-03-01
Título: Backlog de Producto — EPIC-SEG: Seguridad y Accesos
Versión: 4.8
Fecha: 2026-10-03
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
2. **Dado que** el operador introduce un correo no registrado o una contraseña incorrecta, **cuando** solicita iniciar sesión, **entonces** el sistema deniega el acceso, preserva la vista de ingreso y muestra un mensaje de advertencia: «Credenciales inválidas. Por favor verifique sus datos».
3. **Dado que** la cuenta del empleado ha sido configurada en estado inactivo o suspendido, **cuando** el operador intenta autenticarse con credenciales correctas, **entonces** el sistema rechaza el acceso y despliega una notificación informando que la cuenta se encuentra desactivada y que debe contactar al SuperAdmin.
4. **Dado que** el usuario interactúa con la interfaz de ingreso al sistema, **cuando** completa sus datos y visualiza controles, etiquetas y alertas, **entonces** la pantalla satisface integralmente los lineamientos visuales, componentes y microcopy especificados para UI-001 (Inicio de Sesión y Autenticación) en el Catálogo de Interfaces (DOC-ANEXO-B).

**Reglas de negocio aplicables:** 
- N/A

**Dependencias:** 
- Ninguna (historia base de acceso al sistema).

---

### HU-AUTH-02 · Autenticación – Bloquear cuenta por intentos fallidos

| Identificador | Épica | Prioridad MoSCoW | Estimación | Release | Sprint |
|:---:|:---:|:---:|:---:|:---:|:---:|
| HU-AUTH-02 | EPIC-SEG | Must have | 3 pts | REL-1 | SPR-1 |

**Como** Administrador del minimarket,  
**quiero** que el sistema bloquee temporalmente las cuentas de usuario que acumulen reiterados intentos fallidos de contraseña,  
**para** proteger la información comercial y financiera del negocio frente a intentos sistemáticos de adivinación o ataques de fuerza bruta en los terminales.

**Justificación de prioridad:** Funcionalidad de seguridad crítica (Must have); salvaguarda imprescindible para evitar accesos no autorizados en terminales compartidos de atención al público o cajas de cobro.

**Criterios de aceptación:**
1. **Dado que** un usuario incurre en 5 intentos consecutivos fallidos de autenticación sobre una misma cuenta de correo, **cuando** presiona «Iniciar Sesión» en el quinto intento fallido, **entonces** el sistema bloquea preventivamente el acceso a dicha cuenta por un período estricto de 15 minutos continuos y despliega un aviso indicando que la cuenta ha sido suspendida temporalmente por seguridad.
2. **Dado que** una cuenta se encuentra bajo bloqueo preventivo de 15 minutos, **cuando** cualquier operador intenta ingresar credenciales (inclusive si se digita la contraseña correcta), **entonces** el sistema deniega el acceso y muestra un mensaje indicando los minutos restantes de espera antes de permitir un nuevo intento.
3. **Dado que** el período de suspensión de 15 minutos ha concluido satisfactoriamente, **cuando** el empleado titular introduce nuevamente sus credenciales legítimas, **entonces** el sistema restablece automáticamente el contador de intentos fallidos a cero y concede el acceso regular a la plataforma.
4. **Dado que** el operador visualiza los avisos de advertencia e inhabilitación temporal en pantalla, **cuando** se suscitan bloqueos o advertencias de intentos fallidos, **entonces** la interfaz presenta los textos, colores de alerta y elementos de ayuda estipulados para UI-001 en el Catálogo de Interfaces (DOC-ANEXO-B).

**Reglas de negocio aplicables:** 
- N/A

**Dependencias:** 
- Requiere `HU-AUTH-01` (planificada en el mismo Sprint 1).

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

**Reglas de negocio aplicables:** 
- N/A

**Dependencias:** 
- Requiere `HU-AUTH-01` (planificada en el mismo Sprint 1).

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
- Requiere `HU-AUTH-01` y `HU-AUTH-03` (ambas finalizadas en Sprint 1). Se complementa operativamente con la funcionalidad de cierre forzado de sesión (`HU-USR-06`, Sprint 2).

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
1. **Dado que** un empleado no recuerda su contraseña de ingreso, **cuando** introduce su dirección de correo electrónico institucional institucional registrada en la pantalla de recuperación y presiona «Enviar código», **entonces** el sistema genera un código de autorización numérico temporal `[DECISIÓN PENDIENTE D3]` y lo despacha de forma inmediata a la bandeja del usuario con una validez máxima e improrrogable de 15 minutos.
2. **Dado que** el colaborador ha recibido el código de autorización en su casilla de correo, **cuando** digita dicho código dentro del período de 15 minutos e ingresa su nueva contraseña cumpliendo las políticas de seguridad, **entonces** el sistema valida el código, actualiza la credencial y confirma que el acceso ha sido restaurado exitosamente, habilitando el ingreso con la nueva clave.
3. **Dado que** han transcurrido más de 15 minutos desde la generación del código de autorización o se acumulan 5 intentos fallidos de validación, **cuando** el usuario intenta utilizar el código expirado o bloqueado, **entonces** el sistema invalida la solicitud, despliega una alerta indicando que el código ya no tiene vigencia por razones de seguridad y orienta al usuario a solicitar una nueva emisión.
4. **Dado que** el usuario tramita el autoservicio de recuperación, **cuando** navega por los formularios de solicitud de código y definición de nueva contraseña, **entonces** la interfaz responde estrictamente a la presentación visual, campos de texto y mensajes detallados en UI-002 (Recuperación de Contraseña) del Catálogo de Interfaces (DOC-ANEXO-B).

**Reglas de negocio aplicables:** 
- N/A

**Dependencias:** 
- Requiere `HU-AUTH-01` (completada en Sprint 1).

**Decisiones de Negocio Pendientes:**
- `[DECISIÓN PENDIENTE D3]`: Longitud y formato del código de autorización de recuperación por correo electrónico. Opciones en evaluación por el Product Owner: código de autorización numérico ágil de 4 dígitos (permite rápida digitación en terminales táctiles) frente a código de autorización numérico estandarizado de 6 dígitos (mayor robustez ante patrones de seguridad).

---

### HU-AUTH-06 · Autenticación – Cambiar contraseña propia

| Identificador | Épica | Prioridad MoSCoW | Estimación | Release | Sprint |
|:---:|:---:|:---:|:---:|:---:|:---:|
| HU-AUTH-06 | EPIC-SEG | Should have | 3 pts | REL-3 | SPR-3 |

**Como** usuario con sesión activa en el sistema (cualquier rol asignado),  
**quiero** cambiar mi contraseña personal de manera voluntaria desde mi entorno de usuario,  
**para** mantener la confidencialidad de mi cuenta, sustituir credenciales provisionales y cumplir periódicamente con normas de higiene digital.

**Justificación de prioridad:** Funcionalidad recomendada (Should have); promueve la autogestión y el fortalecimiento de la seguridad individual del personal, reduciendo la carga administrativa en el Release 3.

**Criterios de aceptación:**
1. **Dado que** un colaborador con sesión abierta accede a la funcionalidad de cambio de clave, **cuando** introduce su contraseña actual correcta y define una nueva contraseña que cumpla con los estándares de robustez del minimarket (mínimo 7 caracteres alfanuméricos combinando mayúsculas, minúsculas y números), **entonces** el sistema actualiza la contraseña de la cuenta, confirma el éxito de la operación y culmina las demás conexiones activas para demandar reautenticación segura con la clave recién establecida.
2. **Dado que** el colaborador intenta modificar su clave, **cuando** introduce erróneamente su contraseña actual, **entonces** el sistema rechaza la actualización, mantiene la clave original y notifica: «La contraseña actual ingresada es incorrecta».
3. **Dado que** el colaborador digita una nueva contraseña, **cuando** dicha combinación no satisface los requisitos mínimos de longitud o variedad de caracteres, **entonces** el sistema le indica de forma explícita las reglas pendientes por cumplir y bloquea el botón de confirmación hasta su debida satisfacción.
4. **Dado que** el colaborador efectúa la modificación de sus credenciales, **cuando** interactúa con los controles en pantalla, **entonces** la experiencia visual y formulario se ajustarán a lo resuelto en la definición de interfaz de usuario de `[DECISIÓN PENDIENTE D7]`.

**Reglas de negocio aplicables:** 
- N/A

**Dependencias:** 
- Requiere `HU-AUTH-01` y `HU-AUTH-03` (finalizadas en Sprint 1).

**Decisiones de Negocio Pendientes:**
- `[DECISIÓN PENDIENTE D7]`: Definición de la interfaz de usuario para autogestión de perfil y cambio voluntario de clave. Opciones en evaluación por el Product Owner: incorporación de un diálogo emergente (modal) desplegable desde la barra de navegación superior (UI-003) versus el diseño de una pantalla completa independiente dedicada al Perfil del Empleado (propuesta UI-027).

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
2. **Dado que** el minimarket cuenta con un número considerable de trabajadores en su nómina, **cuando** el supervisor introduce un texto en la barra de búsqueda rápida por nombre o correo, **entonces** el sistema filtra los resultados al instante mostrando únicamente los colaboradores cuyas credenciales coincidan con el criterio ingresado.
3. **Dado que** el supervisor interactúa con el listado general de personal, **cuando** visualiza la grilla, aplica filtros o navega por los registros, **entonces** la interfaz satisface integralmente los lineamientos de diseño, indicadores de estado y microcopy especificados en UI-004 (Gestión de Usuarios del Sistema) del Catálogo de Interfaces (DOC-ANEXO-B).

**Reglas de negocio aplicables:** 
- N/A

**Dependencias:** 
- Requiere `HU-AUTH-01` (completada en Sprint 1).

---

### HU-USR-02 · Usuarios – Crear cuenta de nuevo empleado

| Identificador | Épica | Prioridad MoSCoW | Estimación | Release | Sprint |
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

| Identificador | Épica | Prioridad MoSCoW | Estimación | Release | Sprint |
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

| Identificador | Épica | Prioridad MoSCoW | Estimación | Release | Sprint |
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
- Requiere `HU-USR-04` (completada en Sprint 2).

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
2. **Dado que** la sesión de un colaborador fue forzada a cerrar por el SuperAdmin, **cuando** dicho colaborador intenta realizar cualquier acción, consulta o registro en su pantalla, **entonces** el sistema interrumpe la navegación y lo redirige de inmediato a la pantalla de inicio de sesión con el mensaje informativo: «Su sesión ha sido finalizada por el Administrador».
3. **Dado que** el SuperAdmin efectúa la orden de desconexión remota, **cuando** interactúa con el botón de acción y aprueba la confirmación de seguridad, **entonces** la interfaz expone los elementos de microcopy, avisos y estilos descritos en UI-004 del Catálogo de Interfaces (DOC-ANEXO-B).

**Reglas de negocio aplicables:** 
- N/A

**Dependencias:** 
- Requiere `HU-AUTH-04` y `HU-USR-01` (planificadas en Sprint 2).

---

### HU-LOG-01 · Supervisión – Consultar registro de accesos al sistema

| Identificador | Épica | Prioridad MoSCoW | Estimación | Release | Sprint |
|:---:|:---:|:---:|:---:|:---:|:---:|
| HU-LOG-01 | EPIC-SEG | Should have | 3 pts | REL-3 | SPR-3 |

**Como** Administrador o SuperAdmin del minimarket,  
**quiero** consultar la bitácora cronológica de eventos de acceso al sistema (inicios de sesión, cierres voluntarios y bloqueos preventivos),  
**para** auditar los horarios de conexión del personal, realizar control de presencia y efectuar investigaciones de trazabilidad ante sospechas de irregularidades operativas.

**Justificación de prioridad:** Requisito de gobernanza y control interno (Should have); programado para el Release 3 para consolidar las facultades de supervisión forense y cumplimiento institucional.

**Criterios de aceptación:**
1. **Dado que** un supervisor autorizado accede a la bitácora de supervisión, **cuando** selecciona un rango de fechas de consulta o filtra por tipo de evento (Inicio de sesión, Cierre de sesión voluntario o Bloqueo por fallos), **entonces** el sistema presenta el listado cronológico de todos los eventos registrados que correspondan a los filtros fijados.
2. **Dado que** el auditor analiza un suceso de acceso específico en la lista, **cuando** visualiza la fila de detalle, **entonces** el sistema expone con precisión la fecha y hora oficial del suceso, el nombre del colaborador titular, el rol con el que operaba y la descripción textual del resultado de la conexión.
3. **Dado que** el auditor interactúa con el visor de eventos de acceso, **cuando** visualiza la grilla paginada, aplica filtros de búsqueda y revisa los datos históricos, **entonces** la interfaz satisface los componentes, textos informativos y presentación definidos en UI-005 (Supervisión de Logs de Acceso) del Catálogo de Interfaces (DOC-ANEXO-B).

**Reglas de negocio aplicables:** 
- N/A

**Dependencias:** 
- Requiere `HU-AUTH-01` y `HU-AUTH-03` (finalizadas en Sprint 1).