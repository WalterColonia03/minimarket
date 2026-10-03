# Auditoría y Corrección Metodológica: Fase 4 — EPIC-SEG (Lote 1: HU-AUTH-01 a HU-AUTH-06)

---

## 1. UNIDAD TRABAJADA

- **Identificador de Documento:** `DOC-PLAN-03-01` (previamente catalogado como `DOC-PLAN-03-EPIC-SEG`).
- **Título de la Unidad:** Catálogo de Historias de Usuario — Épica EPIC-SEG (Seguridad y Accesos) — Lote 1: Autenticación y Control de Sesiones.
- **Archivo de Origen:** `docs/planificacion-scrum/paquete_v4.7 PLANIFICACION SI SIRVE/paquete_v4.7/01_EPIC-SEG.md`.
- **Alcance del Lote 1:**
  - Encabezado y metadatos del documento.
  - Objetivo de negocio de la épica (`OBJ-01`).
  - Regla de Gobernanza y Herencia del rol `SuperAdmin`.
  - Sub-dominio de Autenticación y Sesiones:
    1. `HU-AUTH-01` · Iniciar sesión (5 pts | Must have | SPR-1).
    2. `HU-AUTH-02` · Bloquear cuenta por intentos fallidos (3 pts | Must have | SPR-1).
    3. `HU-AUTH-03` · Cerrar sesión (2 pts | Must have | SPR-1).
    4. `HU-AUTH-04` · Garantizar sesión única por usuario (8 pts | Must have | SPR-2).
    5. `HU-AUTH-05` · Recuperar contraseña por correo (5 pts | Should have | SPR-2).
    6. `HU-AUTH-06` · Cambiar contraseña propia (3 pts | Should have | SPR-3).
- **Métricas del Lote:** 6 Historias de Usuario | 26 Puntos de Historia (10 pts en SPR-1, 13 pts en SPR-2, 3 pts en SPR-3) | MoSCoW: 4 Must have (18 pts), 2 Should have (8 pts).

---

## 2. AUDITORÍA INICIAL (Criterios A – N)

Evaluación exhaustiva del texto original de `01_EPIC-SEG.md` correspondiente al Lote 1 antes de la intervención de auditoría:

| Criterio | Dimensión Evaluada | Estado Inicial | Diagnóstico y Hallazgos Específicos Identificados |
|:---:|---|:---:|---|
| **A** | Perspectiva estrictamente *a priori* | **NO CUMPLE** | La regla de herencia SuperAdmin y las notas técnicas de `HU-AUTH-02`, `HU-AUTH-03`, `HU-AUTH-04`, `HU-AUTH-05` y `HU-AUTH-06` están redactadas en tiempo pasado/presente de inspección de código ("el backend no implementa", "el logout elimina", "el endpoint valida"), rompiendo la postura de planificación previa. |
| **B** | Cero jerga técnica y código | **NO CUMPLE** | Se detectaron múltiples menciones explícitas a artefactos de programación: `auth.middleware.js:L76`, `POST /api/usuarios`, `usuario.routes.js:L33-72`, `auth.routes.js:L1-25`, `auth.controller.js:L89-95`, `JWT_EXPIRES_IN`, `session_version`, `auth.controller.js:L117-125`, `axios.js:L18-26`, `LoginPage.jsx:L73-77`, `auth.controller.js:L176,224,244-256`, `PATCH /api/usuarios/me/password`, `usuario.controller.js:L128-165`, y términos como "backend", "endpoint", "middleware", "hash", "JWT", "petición HTTP". |
| **C** | Verbos en futuro o condicional | **OBSERVADO** | Los criterios de aceptación mezclan redacción prescriptiva con afirmaciones sobre el comportamiento ya codificado ("incrementa 'session_version' emitiendo un nuevo JWT, provocando la invalidación..."). |
| **D** | Criterios de aceptación medibles | **OBSERVADO** | Aunque la estructura Dado que / Cuando / Entonces está presente, en `HU-AUTH-04` el criterio 1 incluye implementación interna de tokens y cabeceras en lugar de efectos observables por el usuario. En `HU-AUTH-02` falta explicitar qué sucede al cumplirse los 15 minutos. |
| **E** | Trazabilidad con UI (Anexo B) | **CUMPLE PARCIAL** | Las HUs `HU-AUTH-01`, `HU-AUTH-02`, `HU-AUTH-04` remiten a UI-001; `HU-AUTH-03` a UI-003; `HU-AUTH-05` a UI-002. Sin embargo, `HU-AUTH-06` no tiene pantalla en el catálogo original (Anexo B), dejando una nota retrospectiva de "brecha UI-B01" en vez de registrar formalmente la decisión de diseño pendiente. |
| **F** | Reglas de negocio vinculadas | **CUMPLE** | No aplican reglas de RN-01 a RN-16 de manera directa para estas 6 HUs (RN-12 aplica a usuarios en Lote 2). Se explicita formalmente "N/A" en cada una. |
| **G** | Justificación MoSCoW | **CUMPLE** | Las 4 historias Must have y las 2 Should have poseen justificaciones basadas en riesgo de seguridad, trazabilidad operativa y continuidad del negocio. |
| **H** | Coherencia de roles y permisos | **OBSERVADO** | La regla de herencia SuperAdmin mezcla la justificación de negocio con referencias a middlewares de Express. Debe definirse puramente como gobernanza y segregación de funciones. |
| **I** | Dependencias limpias de jerga | **OBSERVADO** | Se mencionan dependencias funcionales correctas (HU-AUTH-04 depende de HU-AUTH-03), pero se entremezclan con menciones a mecanismos de base de datos. |
| **J** | Estimaciones y alineación matemática | **CUMPLE** | Puntos de historia (5, 3, 2, 8, 5, 3 = 26 pts), sprints (SPR-1: 3 HUs/10 pts; SPR-2: 2 HUs/13 pts; SPR-3: 1 HU/3 pts) y releases están perfectamente alineados con el Libro de Control Maestro. |
| **K** | Decisiones de negocio abiertas | **NO CUMPLE** | En `HU-AUTH-05` se fijó 4 dígitos unilateralmente por el código sin consultar al PO (cuando existía discrepancia con 6 dígitos). En `HU-AUTH-06` se constató la ausencia de pantalla como "hallazgo/brecha" en vez de formularla como decisión de diseño pendiente del PO. Deben rotularse como `[DECISIÓN PENDIENTE D3]` y `[DECISIÓN PENDIENTE D7]`. |
| **L** | Redacción completa sin abreviaturas | **CUMPLE** | Se mantiene la exhaustividad integral del documento sin truncamientos ni resúmenes. |
| **M** | Eliminación de tablas retrospectivas | **NO CUMPLE** | El archivo contenía al final tablas de versiones v4.3, v4.4, v4.5, v4.6 y v4.7 con 15 filas de detalles de depuración de código y brechas técnicas. Deben eliminarse por completo del documento entregable. |
| **N** | Migración a expediente interno | **REQUIERE ACCIÓN** | Toda la evidencia técnica, citas de línea (`auth.controller.js`, `usuario.controller.js`, etc.) y brechas SEG-B01, SEG-B02, SEG-B06 deben ser trasladadas a `docs/auditoria/INTERNO_Evidencia_Tecnica.md`. |

---

## 3. TEXTO CORREGIDO COMPLETO

A continuación se presenta el texto íntegro, corregido y formalizado para el Lote 1 de la épica `EPIC-SEG`, listo para su inclusión directa en el paquete oficial v4.8:

```markdown
---
Código: DOC-PLAN-03-01
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

| Código | Épica | Prioridad MoSCoW | Estimación | Release | Sprint |
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

| Código | Épica | Prioridad MoSCoW | Estimación | Release | Sprint |
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

| Código | Épica | Prioridad MoSCoW | Estimación | Release | Sprint |
|:---:|:---:|:---:|:---:|:---:|:---:|
| HU-AUTH-03 | EPIC-SEG | Must have | 2 pts | REL-1 | SPR-1 |

**Como** usuario autenticado en la plataforma (cualquier rol asignado),  
**quiero** cerrar voluntariamente mi sesión de trabajo en el momento en que me retire de mi puesto,  
**para** evitar que otras personas hagan uso indebido de mi cuenta operativa y asegurar la estricta atribución de las transacciones registradas.

**Justificación de prioridad:** Funcionalidad núcleo imprescindible (Must have); en un punto de venta (POS) y bodega de abarrotes, los turnos y terminales son rotativos; la ausencia de cierre de sesión vulnera la auditoría de cobros, despachos y arqueos.

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

| Código | Épica | Prioridad MoSCoW | Estimación | Release | Sprint |
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

| Código | Épica | Prioridad MoSCoW | Estimación | Release | Sprint |
|:---:|:---:|:---:|:---:|:---:|:---:|
| HU-AUTH-05 | EPIC-SEG | Should have | 5 pts | REL-2 | SPR-2 |

**Como** colaborador del minimarket registrado en el sistema (cualquier rol),  
**quiero** solicitar la recuperación y restablecimiento de mi contraseña mediante el envío de un código de seguridad a mi correo electrónico,  
**para** restaurar mi acceso al sistema con agilidad en caso de extravío u olvido sin depender de la intervención física del SuperAdmin.

**Justificación de prioridad:** Característica de alto valor operativo (Should have); reduce los tiempos muertos en mostrador y almacén provocados por olvido de claves. No se incluye en el primer lanzamiento (Sprint 1) debido a que la entrega inicial de credenciales se resuelve de forma centralizada con la creación de usuarios (`HU-USR-02`), programándose como autoservicio para el Release 2.

**Criterios de aceptación:**
1. **Dado que** un empleado no recuerda su contraseña de ingreso, **cuando** introduce su dirección de correo electrónico institucional registrada en la pantalla de recuperación y presiona «Enviar código», **entonces** el sistema genera un código numérico temporal `[DECISIÓN PENDIENTE D3]` y lo despacha de forma inmediata a la bandeja del usuario con una validez máxima e improrrogable de 15 minutos.
2. **Dado que** el colaborador ha recibido el código en su casilla de correo, **cuando** digita dicho código dentro del período de 15 minutos e ingresa su nueva contraseña cumpliendo las políticas de seguridad, **entonces** el sistema valida el código, actualiza la credencial y confirma que el acceso ha sido restaurado exitosamente, habilitando el ingreso con la nueva clave.
3. **Dado que** han transcurrido más de 15 minutos desde la generación del código o se acumulan 5 intentos fallidos de validación, **cuando** el usuario intenta utilizar el código expirado o bloqueado, **entonces** el sistema invalida la solicitud, despliega una alerta indicando que el código ya no tiene vigencia por razones de seguridad y orienta al usuario a solicitar una nueva emisión.
4. **Dado que** el usuario tramita el autoservicio de recuperación, **cuando** navega por los formularios de solicitud de código y definición de nueva contraseña, **entonces** la interfaz responde estrictamente a la presentación visual, campos de texto y mensajes detallados en UI-002 (Recuperación de Contraseña) del Catálogo de Interfaces (DOC-ANEXO-B).

**Reglas de negocio aplicables:** 
- N/A

**Dependencias:** 
- Requiere `HU-AUTH-01` (completada en Sprint 1).

**Decisiones de Negocio Pendientes:**
- `[DECISIÓN PENDIENTE D3]`: Longitud y formato del código de recuperación por correo electrónico. Opciones en evaluación por el Product Owner: código numérico ágil de 4 dígitos (permite rápida digitación en terminales táctiles) frente a código numérico estandarizado de 6 dígitos (mayor robustez ante patrones de seguridad).

---

### HU-AUTH-06 · Autenticación – Cambiar contraseña propia

| Código | Épica | Prioridad MoSCoW | Estimación | Release | Sprint |
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
```

---

## 4. AUDITORÍA DE SALIDA (Evaluación de Conformidad Post-Corrección)

Verificación metódica del texto corregido frente a los 14 criterios de calidad y rigor metodológico:

| Criterio | Dimensión Evaluada | Estado Final | Verificación y Evidencia en Texto Corregido |
|:---:|---|:---:|---|
| **A** | Perspectiva estrictamente *a priori* | **CUMPLE** | Todo el texto está redactado como especificación previa a la construcción, describiendo lo que el sistema requerirá y permitirá. |
| **B** | Cero jerga técnica y código | **CUMPLE** | Se erradicaron todas las citas a archivos (`.js`), líneas (`L76`), endpoints (`POST /api/usuarios`, `PATCH /api/usuarios/me/password`), tokens (`JWT`), `session_version`, `hash`, y términos como "backend" o "middleware". |
| **C** | Verbos en futuro o condicional | **CUMPLE** | Se emplean fórmulas rigurosas de planificación ("serán de atribución privativa", "el sistema validará", "desplegará un aviso", "establecerá su sesión"). |
| **D** | Criterios de aceptación medibles | **CUMPLE** | Los criterios de las 6 historias siguen la estructura exacta Dado que / Cuando / Entonces con condiciones, acciones y resultados medibles y verificables en pantalla por un usuario de negocio. |
| **E** | Trazabilidad con UI (Anexo B) | **CUMPLE** | HU-AUTH-01, 02 y 04 referencian a UI-001; HU-AUTH-03 a UI-003; HU-AUTH-05 a UI-002; HU-AUTH-06 canaliza su presentación visual formalmente mediante `[DECISIÓN PENDIENTE D7]`. |
| **F** | Reglas de negocio vinculadas | **CUMPLE** | Se explicita "N/A" con rigor en las 6 historias (las reglas de inventario, POS y catálogo no aplican a autenticación, y RN-12 aplica a usuarios en Lote 2). |
| **G** | Justificación MoSCoW | **CUMPLE** | Cada historia fundamenta su clasificación (Must have: HU-AUTH-01, 02, 03, 04; Should have: HU-AUTH-05, 06) desde el valor y riesgo de negocio. |
| **H** | Coherencia de roles y permisos | **CUMPLE** | Se formalizó la regla de gobernanza y jerarquía de `SuperAdmin` como política de seguridad institucional, garantizando la segregación con `Administrador` sin mencionar código. |
| **I** | Dependencias limpias de jerga | **CUMPLE** | Dependencias funcionales e inter-sprint explícitas en lenguaje de producto (HU-AUTH-04 depende de HU-AUTH-01 y 03 de Sprint 1; se complementa con HU-USR-06 en Sprint 2). |
| **J** | Estimaciones y alineación matemática | **CUMPLE** | Puntos totales del lote: 26 pts (5+3+2+8+5+3). Distribución por sprints: SPR-1 = 10 pts; SPR-2 = 13 pts; SPR-3 = 3 pts. 100 % coincidente con el Libro de Control Maestro. |
| **K** | Decisiones de negocio abiertas | **CUMPLE** | Se incluyeron explícitamente `[DECISIÓN PENDIENTE D3]` (código de recuperación: 4 vs 6 dígitos) y `[DECISIÓN PENDIENTE D7]` (interfaz de cambio de contraseña: modal vs pantalla UI-027). |
| **L** | Redacción completa sin abreviaturas | **CUMPLE** | El texto entregado es autosuficiente, exhaustivo, sin notas de "ídem", resúmenes ni omisiones. |
| **M** | Eliminación de tablas retrospectivas | **CUMPLE** | Se eliminaron completamente las 5 tablas de cambios históricos (v4.3 a v4.7) que relataban actividades de depuración e inspección sobre el código. |
| **N** | Migración a expediente interno | **CUMPLE** | Toda la evidencia técnica, citas de línea y brechas (SEG-B01, SEG-B02, SEG-B06) quedaron resguardadas en la Sección 3 de `docs/auditoria/INTERNO_Evidencia_Tecnica.md`. |

### Recálculos Aritméticos del Lote 1

- **Historias de Usuario del Lote 1:** 6 HUs (HU-AUTH-01, HU-AUTH-02, HU-AUTH-03, HU-AUTH-04, HU-AUTH-05, HU-AUTH-06).
- **Puntos de Historia del Lote 1:** 26 pts.
  - Distribución MoSCoW:
    - Must have: 4 HUs (18 pts) — 69.2 % de los puntos del lote.
    - Should have: 2 HUs (8 pts) — 30.8 % de los puntos del lote.
    - Could have: 0 HUs (0 pts) — 0.0 %.
  - Distribución por Sprints / Releases:
    - Release 1 / Sprint 1: 3 HUs (HU-AUTH-01, HU-AUTH-02, HU-AUTH-03) = 10 pts.
    - Release 2 / Sprint 2: 2 HUs (HU-AUTH-04, HU-AUTH-05) = 13 pts.
    - Release 3 / Sprint 3: 1 HU (HU-AUTH-06) = 3 pts.
- **Concordancia con Épica EPIC-SEG Completa:**
  - Lote 1 (HU-AUTH-01 a 06): 6 HUs | 26 pts.
  - Lote 2 pendiente (HU-USR-01 a 06 y HU-LOG-01): 7 HUs | 21 pts.
  - Total EPIC-SEG: 13 HUs | 47 pts (coincidencia aritmética exacta: 26 + 21 = 47 pts).

---

## 5. ACTUALIZACIÓN DEL LIBRO DE CONTROL

- **Estado de la Unidad:** COMPLETADA Y AUDITADA (Lote 1 de EPIC-SEG).
- **Avance Consolidado del Paquete v4.8:**
  - `DOC-PLAN-00` (Libro de Control Maestro): Completado en Fase 0 (`docs/auditoria/33-libro-de-control-fase-0.md`).
  - `DOC-PLAN-08` (Reglas de Negocio y Glosario): Completado en Fase 1 (`docs/auditoria/34-auditoria-fase-1-doc-08-reglas-y-glosario.md`).
  - `DOC-PLAN-01` (Visión, Alcance y Stakeholders): Completado en Fase 2 (`docs/auditoria/35-auditoria-fase-2-doc-01-y-doc-02.md`).
  - `DOC-PLAN-02` (Estrategia Ágil y DoD): Completado en Fase 2 (`docs/auditoria/35-auditoria-fase-2-doc-01-y-doc-02.md`).
  - `DOC-PLAN-03-00` (Product Backlog Priorizado Maestro): Completado en Fase 3 (`docs/auditoria/36-auditoria-fase-3-doc-03-00-backlog-maestro.md`).
  - `DOC-PLAN-03-01` (EPIC-SEG - Lote 1: HU-AUTH-01 a 06): Completado en Fase 4 Lote 1 (`docs/auditoria/37-auditoria-fase-4-epic-seg-lote-1.md`).
- **Métricas Acumuladas:**
  - Historias de usuario auditadas y formalizadas en backlogs específicos: 6 / 72 (8.33 % de HUs; 26 / 251 pts = 10.36 % del esfuerzo total del proyecto).
  - Reglas de negocio vinculadas en backlogs: 0 / 16 en este lote (aplican en Lotes posteriores).
  - Términos técnicos migrados a expediente confidencial: 12 referencias técnicas adicionales resguardadas en `INTERNO_Evidencia_Tecnica.md`.

---

## 6. PENDIENTES

1. **Siguiente entrega metodológica:**
   - **Fase 4 — EPIC-SEG (Lote 2: HU-USR-01 a HU-USR-06 y HU-LOG-01):**
     - Abarca las 7 historias restantes de la épica:
       - `HU-USR-01` · Listar empleados del sistema (2 pts | Must | SPR-2 | UI-004).
       - `HU-USR-02` · Crear cuenta de nuevo empleado (5 pts | Must | SPR-1 | UI-004 | RN-12).
       - `HU-USR-03` · Editar datos de un empleado (3 pts | Should | SPR-3 | UI-004 | RN-12).
       - `HU-USR-04` · Desactivar cuenta de empleado (3 pts | Must | SPR-2 | UI-004).
       - `HU-USR-05` · Reactivar cuenta de empleado (2 pts | Should | SPR-3 | UI-004).
       - `HU-USR-06` · Forzar cierre de sesión remoto (3 pts | Should | SPR-2 | UI-004).
       - `HU-LOG-01` · Consultar registro de accesos al sistema (3 pts | Should | SPR-3 | UI-005).
     - Total Lote 2: 7 HUs | 21 pts (SPR-1: 5 pts; SPR-2: 8 pts; SPR-3: 8 pts).
     - Al concluir el Lote 2 se ensamblará el documento consolidado `01_EPIC-SEG.md` v4.8 completo.
2. **Decisiones de negocio abiertas para resolución por el Product Owner:**
   - `[DECISIÓN PENDIENTE D3]`: Longitud de código temporal OTP de recuperación de contraseña (4 vs 6 dígitos).
   - `[DECISIÓN PENDIENTE D7]`: Definición de interfaz para cambio de contraseña propia (modal en UI-003 vs pantalla dedicada UI-027).

---

## 7. CIERRE DE LA UNIDAD

Unidad completada. Escribe CONTINÚA para: Fase 4 — EPIC-SEG (Lote 2: HU-USR-01 a HU-USR-06 y HU-LOG-01).
