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
