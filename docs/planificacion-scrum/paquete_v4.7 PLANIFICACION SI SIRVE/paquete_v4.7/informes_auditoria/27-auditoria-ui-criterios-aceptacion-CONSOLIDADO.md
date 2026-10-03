# Auditoría UI Exhaustiva y Criterios de Aceptación Consolidados (Frontend Minimarket)

> **Documento de Auditoría N°**: 27 (Consolidado Maestro)  
> **Área**: Frontend (React) - Capa de Presentación e Interacción Visual  
> **Épicas Auditadas**: EPIC-SEG, EPIC-CAT, EPIC-INV, EPIC-VEN, EPIC-REP (100% de Vistas y Componentes)  
> **Historias de Usuario UI Cubiertas**: 20 HU (`HU-UI-001` a `HU-UI-020`)  
> **Estado de Verificación**: 100% HECHO (Citas directas de archivo y línea inspeccionadas en código activo)  
> **Metodología**: Scrum Backlog Acceptance Criteria (Taxonomía UI Literal & Escenarios Gherkin BDD)  

---

## 1. Matriz Maestra de Trazabilidad y Cobertura UI (20 Historias de Usuario)

| N° HU | Módulo / Pantalla Auditada | Ruta Web | Archivo Fuente Componente | Líneas Totales | Épica Scrum | Estado Auditoría |
| :---: | :--- | :--- | :--- | :---: | :---: | :---: |
| **HU-UI-001** | **Inicio de Sesión y Autenticación** | `/login` | `client/src/modules/auth/LoginPage.jsx` | 155 | EPIC-SEG | Auditado 100% |
| **HU-UI-002** | **Recuperación de Contraseña** | `/reset-password` | `client/src/modules/auth/ResetPasswordPage.jsx` | 274 | EPIC-SEG | Auditado 100% |
| **HU-UI-003** | **Navegación Global y Diálogos** | App Shell / Layout | `client/src/components/MainLayout.jsx` | 213 | EPIC-SEG | Auditado 100% |
| **HU-UI-004** | **Gestión de Usuarios del Sistema** | `/usuarios` | `client/src/modules/usuarios/UsuariosPage.jsx` | 428 | EPIC-SEG | Auditado 100% |
| **HU-UI-005** | **Auditoría de Logs de Acceso** | `/logs-acceso` | `client/src/modules/logs/LogsAccesoPage.jsx` | 231 | EPIC-SEG | Auditado 100% |
| **HU-UI-006** | **Catálogo de Categorías** | `/categorias` | `client/src/modules/categorias/CategoriasPage.jsx` | 267 | EPIC-CAT | Auditado 100% |
| **HU-UI-007** | **Catálogo de Productos y Alertas** | `/productos` | `client/src/modules/productos/ProductosPage.jsx` | 895 | EPIC-CAT | Auditado 100% |
| **HU-UI-008** | **Directorio de Proveedores** | `/proveedores` | `client/src/modules/proveedores/ProveedoresPage.jsx` | 510 | EPIC-CAT | Auditado 100% |
| **HU-UI-009** | **Directorio de Clientes** | `/clientes` | `client/src/modules/clientes/ClientesPage.jsx` | 496 | EPIC-CAT | Auditado 100% |
| **HU-UI-010** | **Entradas de Mercadería y Lotes** | `/inventario` (Entradas) | `client/src/modules/inventario/InventarioPage.jsx` | 1,271 | EPIC-INV | Auditado 100% |
| **HU-UI-011** | **Bajas de Inventario y Mermas** | `/inventario` (Bajas) | `client/src/modules/inventario/InventarioPage.jsx` | 1,271 | EPIC-INV | Auditado 100% |
| **HU-UI-012** | **Ajustes de Conteo Físico** | `/inventario` (Ajustes) | `client/src/modules/inventario/InventarioPage.jsx` | 1,271 | EPIC-INV | Auditado 100% |
| **HU-UI-013** | **Solicitudes de Reposición** | `/solicitudes` | `client/src/modules/solicitudes/SolicitudesPage.jsx` | 713 | EPIC-INV | Auditado 100% |
| **HU-UI-014** | **Terminal de Punto de Venta (POS)** | `/ventas` | `client/src/modules/ventas/VentasPage.jsx` | 1,274 | EPIC-VEN | Auditado 100% |
| **HU-UI-015** | **Historial de Ventas y Anulaciones** | `/ventas/historial` | `client/src/modules/ventas/HistorialVentasPage.jsx` | 658 | EPIC-VEN | Auditado 100% |
| **HU-UI-016** | **Turno de Caja y Arqueo Inicial** | `/caja` | `client/src/modules/caja/CajaPage.jsx` | 497 | EPIC-VEN | Auditado 100% |
| **HU-UI-017** | **Historial y Cierres Forzados** | `/caja/historial` | `client/src/modules/caja/HistorialCajaPage.jsx` | 488 | EPIC-VEN | Auditado 100% |
| **HU-UI-018** | **Dashboard y KPIs Estratégicos** | `/dashboard` | `client/src/modules/dashboard/DashboardPage.jsx` | 830 | EPIC-REP | Auditado 100% |
| **HU-UI-019** | **Reportes Analíticos y PDF** | `/reportes` | `client/src/modules/reportes/ReportesPage.jsx` | 750 | EPIC-REP | Auditado 100% |
| **HU-UI-020** | **Configuración Fiscal y SUNAT** | `/configuracion` | `client/src/modules/configuracion/ConfiguracionPage.jsx` | 356 | EPIC-REP | Auditado 100% |

---

## 2. Parte I: EPIC-SEG — Seguridad, Autenticación y Usuarios (HU-UI-001 a HU-UI-005)

### Historia de Usuario: [HU-UI-001] Inicio de Sesión y Autenticación de Usuarios
**Archivo fuente verificado:** [`client/src/modules/auth/LoginPage.jsx`](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/auth/LoginPage.jsx#L1-L155)  
**Clasificación de Evidencia:** `[HECHO]`

**Narrativa:**  
Como usuario del sistema (Administrador, Gerente, Vendedor o Almacenero),  
quiero una pantalla de inicio de sesión clara con validación de credenciales y visualización de contraseña,  
para ingresar de forma segura y ser redirigido a mi módulo de trabajo asignado.

#### Criterios de Aceptación (CA) - Interfaz y Comportamiento Visual:

**CA-1: Formulario y Elementos de Entrada**
- **Encabezado y Branding**:
  - Icono visual: `ShoppingBag` de Lucide con clase `h-10 w-10 text-[#6366f1]` ([Línea 68](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/auth/LoginPage.jsx#L68)).
  - Título principal: `"Minimarket"` ([Línea 69](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/auth/LoginPage.jsx#L69)).
  - Subtítulo de asistencia: `"Inicia sesión para continuar"` ([Línea 70](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/auth/LoginPage.jsx#L70)).
- **Campo Correo Electrónico**:
  - Etiqueta visible: `"Correo electrónico"` ([Línea 82](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/auth/LoginPage.jsx#L82)).
  - Icono incrustado: `Mail` (`left-3 top-1/2 text-gray-400`, [Línea 85](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/auth/LoginPage.jsx#L85)).
  - Placeholder: `"correo@ejemplo.com"` ([Línea 91](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/auth/LoginPage.jsx#L91)).
  - Valor por defecto: Cadena vacía `""`.
  - Microcopy / Texto de ayuda: Ninguno adicional bajo el campo.
  - Restricción visual: Obligatorio (`required`), tipo nativo `type="email"`, borde con focus `focus:ring-indigo-400` ([Líneas 86-93](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/auth/LoginPage.jsx#L86-L93)).
- **Campo Contraseña**:
  - Etiqueta visible: `"Contraseña"` ([Línea 99](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/auth/LoginPage.jsx#L99)).
  - Icono incrustado: `Lock` (`left-3 top-1/2 text-gray-400`, [Línea 102](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/auth/LoginPage.jsx#L102)).
  - Placeholder: `"••••••••"` ([Línea 108](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/auth/LoginPage.jsx#L108)).
  - Valor por defecto: Cadena vacía `""`.
  - Control de visibilidad: Botón interactivo a la derecha con icono dinámico `EyeOff` (cuando está visible) o `Eye` (cuando está oculto) ([Líneas 111-117](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/auth/LoginPage.jsx#L111-L117)).
  - Restricción visual: Obligatorio (`required`), tipo dinámico `type={showPassword ? 'text' : 'password'}` ([Líneas 104-107](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/auth/LoginPage.jsx#L104-L107)).

**CA-2: Mensajes de Asistencia, Banners y Retroalimentación**
- **Banners Informativos**:
  - Banner de cierre de sesión previo: Si existe mensaje en `sessionStorage` (`auth_logout_mensaje`), se muestra banner ámbar con contenedor `rounded-lg bg-amber-50 px-4 py-2.5 text-sm text-amber-700` ([Líneas 73-77](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/auth/LoginPage.jsx#L73-L77)).
- **Mensajes de Validación y Error**:
  - Si el backend rechaza las credenciales o falla la conexión, se muestra un banner rojo con estilo `rounded-lg bg-red-50 px-4 py-2 text-sm text-red-600` con el mensaje exacto proveniente del servidor o el texto fallback `"Error al iniciar sesión"` ([Líneas 57, 130-134](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/auth/LoginPage.jsx#L57-L134)).

**CA-3: Indicadores de Estado, Badges y Tablas**
- **Indicadores de Carga**: Durante el envío del formulario, el botón de acción principal reemplaza su texto por un spinner animado `Loader2 className="h-4 w-4 animate-spin"` seguido del texto `"Iniciando..."` ([Líneas 141-145](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/auth/LoginPage.jsx#L141-L145)).
- **Columnas de Datos**: No aplica (pantalla de autenticación sin tablas).

**CA-4: Acciones, Botones y Estados Vacíos (Empty States)**
- **Acceso a Recuperación de Contraseña**:
  - Enlace alineado a la derecha: `"¿Olvidaste tu contraseña?"` con clases `text-sm text-indigo-500 hover:underline` que navega hacia `/reset-password` ([Líneas 121-127](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/auth/LoginPage.jsx#L121-L127)).
- **Botón de Acción Principal**:
  - Texto en estado inactivo/normal: `"Iniciar Sesión"` ([Línea 147](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/auth/LoginPage.jsx#L147)).
  - Tipo: Botón primario de formulario (`type="submit"`), ancho completo (`w-full`), fondo índigo `bg-[#6366f1] hover:bg-indigo-600 text-white` ([Línea 139](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/auth/LoginPage.jsx#L139)).
  - Estado deshabilitado: Se desactiva (`disabled={loading}`, `disabled:opacity-70 disabled:cursor-not-allowed`) y bloquea dobles clics inmediatos mediante referencia síncrona `enviandoRef` ([Líneas 29, 47-48, 138](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/auth/LoginPage.jsx#L29-L138)).

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
  - **Cuando** presiona el botón `"Iniciar Sesión"` y el servidor responde con error
  - **Entonces** el sistema debe mostrar un contenedor con fondo rojo claro `bg-red-50` y texto rojo `text-red-600` con el mensaje devuelto por la API o `"Error al iniciar sesión"`.

---

### Historia de Usuario: [HU-UI-002] Recuperación y Reseteo de Contraseña
**Archivo fuente verificado:** [`client/src/modules/auth/ResetPasswordPage.jsx`](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/auth/ResetPasswordPage.jsx#L1-L274)  
**Clasificación de Evidencia:** `[HECHO]`

**Narrativa:**  
Como usuario que olvidó su clave de acceso,  
quiero solicitar un código de 4 dígitos a mi correo y validar los requisitos de seguridad al ingresar una nueva clave,  
para restablecer el acceso a mi cuenta sin depender de intervención manual.

#### Criterios de Aceptación (CA) - Interfaz y Comportamiento Visual:

**CA-1: Formulario y Elementos de Entrada**
- **Fase 1: Solicitud de Código (`paso === 1`)**:
  - Icono visual: `KeyRound` (`h-10 w-10 text-[#6366f1]`, [Línea 105](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/auth/ResetPasswordPage.jsx#L105)).
  - Título principal: `"Recuperar contraseña"` ([Línea 106](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/auth/ResetPasswordPage.jsx#L106)).
  - Subtítulo guía: `"Ingresa tu correo y te enviaremos un código"` ([Líneas 107-109](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/auth/ResetPasswordPage.jsx#L107-L109)).
  - Campo `"Correo electrónico"`:
    - Etiqueta visible: `"Correo electrónico"` ([Línea 114](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/auth/ResetPasswordPage.jsx#L114)).
    - Icono: `Mail` (`left-3 top-1/2 text-gray-400`).
    - Placeholder: `"correo@ejemplo.com"` ([Línea 124](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/auth/ResetPasswordPage.jsx#L124)).
    - Restricción visual: Obligatorio (`required`), `type="email"`.
- **Fase 2: Validación de Código y Nueva Clave (`paso === 2`)**:
  - Icono visual: `ShieldCheck` (`h-10 w-10 text-[#6366f1]`, [Línea 165](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/auth/ResetPasswordPage.jsx#L165)).
  - Título principal: `"Ingresa el código"` ([Línea 166](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/auth/ResetPasswordPage.jsx#L166)).
  - Subtítulo informativo: `"Revisa tu correo, el código expira en 15 minutos"` ([Líneas 167-169](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/auth/ResetPasswordPage.jsx#L167-L169)).
  - Campo `"Código de 4 dígitos"`:
    - Etiqueta visible: `"Código de 4 dígitos"` ([Línea 175](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/auth/ResetPasswordPage.jsx#L175)).
    - Placeholder: `"0000"` ([Línea 184](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/auth/ResetPasswordPage.jsx#L184)).
    - Formato y máscara visual: Centrado, texto grande y espaciado amplio `text-center text-lg tracking-widest`, longitud máxima 4 caracteres numéricos forzados por sanitización regex `replace(/\D/g, '').slice(0, 4)` ([Líneas 180, 183-185](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/auth/ResetPasswordPage.jsx#L180-L185)).
  - Campo `"Nueva contraseña"`:
    - Etiqueta visible: `"Nueva contraseña"` ([Línea 190](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/auth/ResetPasswordPage.jsx#L190)).
    - Icono: `Lock` a la izquierda.
    - Placeholder: `"••••••••"` ([Línea 199](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/auth/ResetPasswordPage.jsx#L199)).
    - Botón de alternancia de visibilidad `Eye` / `EyeOff` ([Líneas 203-208](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/auth/ResetPasswordPage.jsx#L203-L208)).
    - Restricción: Obligatorio (`required`).
  - Campo `"Confirmar contraseña"`:
    - Etiqueta visible: `"Confirmar contraseña"` ([Línea 214](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/auth/ResetPasswordPage.jsx#L214)).
    - Icono: `Lock` a la izquierda.
    - Placeholder: `"••••••••"` ([Línea 223](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/auth/ResetPasswordPage.jsx#L223)).
    - Botón de alternancia de visibilidad `Eye` / `EyeOff` ([Líneas 227-232](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/auth/ResetPasswordPage.jsx#L227-L232)).
    - Restricción: Obligatorio (`required`).
- **Fase 3: Pantalla de Éxito (`exito === true`)**:
  - Icono: `CheckCircle2` (`h-12 w-12 text-green-500`, [Línea 89](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/auth/ResetPasswordPage.jsx#L89)).
  - Título principal: `"Contraseña actualizada"` (`text-xl font-bold text-gray-800`, [Línea 90](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/auth/ResetPasswordPage.jsx#L90)).
  - Subtexto descriptivo: `"Serás redirigido al inicio de sesión..."` (`text-sm text-gray-500`, [Líneas 91-93](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/auth/ResetPasswordPage.jsx#L91-L93)).

**CA-2: Mensajes de Asistencia, Banners y Retroalimentación**
- **Validaciones de Seguridad en Cliente (Banner Rojo `bg-red-50 text-red-600`)**:
  - Si las contraseñas no son idénticas: `"Las contraseñas no coinciden"` ([Línea 48](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/auth/ResetPasswordPage.jsx#L48)).
  - Si tiene menos de 7 caracteres: `"Contraseña inválida: Debe tener al menos 7 caracteres"` ([Líneas 21, 54](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/auth/ResetPasswordPage.jsx#L21-L54)).
  - Si no incluye mayúscula: `"Contraseña inválida: Debe contener una mayúscula"` ([Líneas 22, 54](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/auth/ResetPasswordPage.jsx#L22-L54)).
  - Si no incluye minúscula: `"Contraseña inválida: Debe contener una minúscula"` ([Líneas 23, 54](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/auth/ResetPasswordPage.jsx#L23-L54)).
  - Si no incluye dígito: `"Contraseña inválida: Debe contener un dígito"` ([Líneas 24, 54](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/auth/ResetPasswordPage.jsx#L24-L54)).
- **Mensajes de Error del Servidor**:
  - Error al solicitar código: Texto de API o fallback `"Error al enviar código"` ([Línea 37](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/auth/ResetPasswordPage.jsx#L37)).
  - Error al cambiar clave o código expirado: Texto de API o fallback `"Error al cambiar contraseña"` ([Línea 71](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/auth/ResetPasswordPage.jsx#L71)).

**CA-3: Indicadores de Estado, Badges y Tablas**
- **Indicadores en Botones**:
  - En Paso 1: Spinner `Loader2 animate-spin` con texto `"Enviando..."` ([Líneas 143-145](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/auth/ResetPasswordPage.jsx#L143-L145)).
  - En Paso 2: Spinner `Loader2 animate-spin` con texto `"Cambiando..."` ([Líneas 249-251](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/auth/ResetPasswordPage.jsx#L249-L251)).

**CA-4: Acciones, Botones y Estados Vacíos (Empty States)**
- **Acciones en Paso 1**:
  - Botón primario: `"Enviar código"` (`bg-[#6366f1] text-white hover:bg-indigo-600`, [Línea 147](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/auth/ResetPasswordPage.jsx#L147)).
  - Enlace de retorno: Icono `ArrowLeft` (`h-3 w-3`) con texto `"Volver al login"` que dirige a `/login` ([Líneas 153-159](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/auth/ResetPasswordPage.jsx#L153-L159)).
- **Acciones en Paso 2**:
  - Botón primario: `"Cambiar contraseña"` (`bg-[#6366f1] text-white hover:bg-indigo-600`, [Línea 253](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/auth/ResetPasswordPage.jsx#L253)).
  - Botón de retroceso / reenviar: Icono `ArrowLeft` (`h-3 w-3`) con texto `"Reenviar código"` que limpia inputs y regresa a Paso 1 ([Líneas 77-83, 259-266](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/auth/ResetPasswordPage.jsx#L77-L266)).

#### Criterios de Aceptación en Formato Gherkin (Comportamiento de UI):
- **Escenario 1**: Validación estricta de complejidad de contraseña
  - **Dado que** el usuario ingresó el código de 4 dígitos y escribe `"clave"` en `"Nueva contraseña"`
  - **Cuando** escribe `"clave"` en `"Confirmar contraseña"` y presiona `"Cambiar contraseña"`
  - **Entonces** el sistema no debe enviar la petición y debe desplegar un banner rojo con el texto exacto `"Contraseña inválida: Debe tener al menos 7 caracteres"`.

- **Escenario 2**: Transición a pantalla de éxito y redirección
  - **Dado que** el usuario ingresó un código válido y una contraseña que cumple con mayúscula, minúscula, número y >= 7 caracteres
  - **Cuando** presiona `"Cambiar contraseña"` y el servidor responde satisfactoriamente
  - **Entonces** el formulario desaparece y se muestra el icono `CheckCircle2` verde con el título `"Contraseña actualizada"`, el texto `"Serás redirigido al inicio de sesión..."` y redirige a `"/login"` tras 2 segundos.

---

### Historia de Usuario: [HU-UI-003] Navegación Global, Menú Lateral y Confirmación de Cierre de Sesión
**Archivo fuente verificado:** [`client/src/components/MainLayout.jsx`](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/components/MainLayout.jsx#L1-L213), [`client/src/components/ConfirmDialog.jsx`](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/components/ConfirmDialog.jsx#L1-L35)  
**Clasificación de Evidencia:** `[HECHO]`

**Narrativa:**  
Como usuario con sesión iniciada en cualquier rol del sistema,  
quiero contar con un menú lateral responsivo y colapsable, cabecera con mi identidad/rol y alerta preventiva al cerrar sesión si tengo una caja abierta,  
para navegar fluidamente entre mis funciones autorizadas y no dejar arqueos huérfanos por error.

#### Criterios de Aceptación (CA) - Interfaz y Comportamiento Visual:

**CA-1: Formulario y Elementos de Entrada**
- No contiene formularios de entrada de datos continuos; opera como contenedor maestro (App Shell) con rutas anidadas en `<Outlet />` ([Línea 192](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/components/MainLayout.jsx#L192)).

**CA-2: Mensajes de Asistencia, Banners y Retroalimentación**
- **Modal Preventivo de Cierre de Turno de Caja (`ConfirmDialog`)**:
  - Se activa si un usuario con rol `Vendedor` o `Administrador` pulsa `"Cerrar sesión"` y posee un turno activo en el endpoint `/caja/activo` ([Líneas 99-105, 197-209](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/components/MainLayout.jsx#L99-L209)).
  - Icono modal: `AlertTriangle` (`h-6 w-6 text-amber-500` sobre círculo `bg-amber-100`, [ConfirmDialog.jsx: Líneas 10-12](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/components/ConfirmDialog.jsx#L10-L12)).
  - Título modal exacto: `"Tienes un turno de caja abierto"` ([Línea 199](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/components/MainLayout.jsx#L199)).
  - Mensaje modal exacto: `"Todavía no cerraste tu turno en Mi Caja. ¿Seguro que quieres cerrar sesión sin cerrarlo?"` ([Línea 200](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/components/MainLayout.jsx#L200)).
  - Botón cancelar: `"Cancelar"` (`bg-gray-100 hover:bg-gray-200 text-gray-700`, [ConfirmDialog.jsx: Línea 21](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/components/ConfirmDialog.jsx#L21)).
  - Botón confirmar: `"Confirmar"` con color índigo personalizado `#6366f1` ([Línea 201](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/components/MainLayout.jsx#L201)).

**CA-3: Indicadores de Estado, Badges y Tablas**
- **Barra Superior (Header)**:
  - Título de pantalla dinámico a la izquierda: Muestra el nombre legible según la ruta activa: `"Dashboard"`, `"Usuarios"`, `"Logs de Acceso"`, `"Productos"`, `"Categorías"`, `"Proveedores"`, `"Ventas"`, `"Historial de Ventas"`, `"Mi Caja"`, `"Historial de Caja"`, `"Inventario"`, `"Solicitudes"`, `"Clientes"`, `"Reportes"` o `"Configuración"` ([Líneas 45-61, 118, 182](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/components/MainLayout.jsx#L45-L182)).
  - Nombre del usuario logueado: `usuario?.nombre` (`text-sm text-gray-500`, [Línea 184](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/components/MainLayout.jsx#L184)).
  - Badge de Rol del usuario: Badge píldora con fondo morado/índigo `rounded-full bg-[#6366f1] px-2.5 py-0.5 text-xs font-medium text-white` con el texto exacto de `usuario?.rol` ([Líneas 185-187](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/components/MainLayout.jsx#L185-L187)).
- **Indicador de Carga Global**: En transiciones de carga diferida (React Suspense lazy loading), muestra `<Spinner texto="Cargando..." />` ([Línea 191](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/components/MainLayout.jsx#L191)).

**CA-4: Acciones, Botones y Menú Lateral (Sidebar)**
- **Branding del Sidebar**:
  - Icono: `ShoppingCart` (`h-6 w-6 text-indigo-400`, [Línea 128](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/components/MainLayout.jsx#L128)).
  - Nombre: `"Minimarket"` (visible solo si no está colapsado, [Línea 129](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/components/MainLayout.jsx#L129)).
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
  *(Citas: [Líneas 28-43, 134-151](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/components/MainLayout.jsx#L28-L151))*.
- **Estado de Ítem Activo**: Fondo índigo `bg-[#6366f1] text-white`; ítems inactivos: texto gris `text-[#9ca3af] hover:bg-[#1f2937] hover:text-white` ([Líneas 141-144](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/components/MainLayout.jsx#L141-L144)).
- **Control de Colapso del Menú**:
  - Botón con icono `ChevronLeft` (expandido) o `ChevronRight` (colapsado) ([Línea 160](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/components/MainLayout.jsx#L160)).
  - Atributo title/tooltip: `"Colapsar"` si está expandido, `"Expandir"` si está colapsado ([Línea 158](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/components/MainLayout.jsx#L158)).
  - Persistencia: Se almacena en `localStorage` bajo la clave `'sidebar_collapsed'` ([Líneas 67-69, 81](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/components/MainLayout.jsx#L67-L81)).
- **Pie de Menú y Cierre de Sesión**:
  - Bloque de usuario (expandido): `usuario?.nombre` (`text-white`) y `usuario?.rol` (`text-[#9ca3af]`) ([Líneas 163-166](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/components/MainLayout.jsx#L163-L166)).
  - Botón Cerrar Sesión: Icono `LogOut`, texto literal `"Cerrar sesión"` (oculto en modo colapsado), tooltip `"Cerrar sesión"` ([Líneas 169-176](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/components/MainLayout.jsx#L169-L176)).
  - Protección concurrente: Bloqueo síncrono por `saliendoRef` para impedir dobles llamadas a `/auth/logout` ([Líneas 78, 90](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/components/MainLayout.jsx#L78-L90)).

#### Criterios de Aceptación en Formato Gherkin (Comportamiento de UI):
- **Escenario 1**: Menú lateral filtrado por perfil Vendedor
  - **Dado que** un usuario con rol `"Vendedor"` ha iniciado sesión
  - **Cuando** visualiza el menú lateral
  - **Entonces** debe ver únicamente los enlaces `"Ventas"`, `"Historial Ventas"` y `"Mi Caja"`, quedando completamente ocultos `"Usuarios"`, `"Productos"`, `"Reportes"`, `"Configuración"` y `"Logs de Acceso"`.

- **Escenario 2**: Cierre de sesión con advertencia de arqueo pendiente
  - **Dado que** un cajero con rol `"Vendedor"` tiene una caja abierta
  - **Cuando** presiona el botón `"Cerrar sesión"` en el menú lateral
  - **Entonces** no se destruye la sesión de inmediato y se abre un diálogo modal de confirmación con el título `"Tienes un turno de caja abierto"` y el mensaje `"Todavía no cerraste tu turno en Mi Caja. ¿Seguro que quieres cerrar sesión sin cerrarlo?"`.

---

### Historia de Usuario: [HU-UI-004] Gestión y Mantenimiento de Usuarios
**Archivo fuente verificado:** [`client/src/modules/usuarios/UsuariosPage.jsx`](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/usuarios/UsuariosPage.jsx#L1-L428)  
**Clasificación de Evidencia:** `[HECHO]`

**Narrativa:**  
Como SuperAdmin (o Administrador en modo visualización),  
quiero administrar las cuentas del personal, filtrar por rol y estado, y ejecutar acciones rápidas (edición, desactivación, reactivación y cierre forzado de sesión),  
para garantizar el gobierno de identidades y accesos del minimarket.

#### Criterios de Aceptación (CA) - Interfaz y Comportamiento Visual:

**CA-1: Formulario y Elementos de Entrada**
- **Breadcrumb de Navegación**:
  - Enlace: `"Inicio"` (ruta `/dashboard`), Separador: `"/"`, Ítem activo: `"Usuarios"` ([Líneas 259](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/usuarios/UsuariosPage.jsx#L259); [`Breadcrumb.jsx: Líneas 9-15`](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/components/Breadcrumb.jsx#L9-L15)).
- **Encabezado y Microcopy**:
  - Título principal: `"Usuarios"` (`text-2xl font-bold text-gray-800`, [Línea 263](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/usuarios/UsuariosPage.jsx#L263)).
  - Microcopy modo solo lectura (cuando no es SuperAdmin): Icono `Lock` (`h-3 w-3`) con texto `"Modo solo lectura — la gestión de usuarios es exclusiva del SuperAdmin"` con estilo `text-xs text-gray-400` ([Líneas 265-268](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/usuarios/UsuariosPage.jsx#L265-L268)).
- **Filtros de Barra Superior**:
  - Select Filtro de Rol ([Líneas 283-293](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/usuarios/UsuariosPage.jsx#L283-L293)):
    - `"Todos los roles"` (valor `'Todos'`)
    - `"Administrador"`
    - `"Vendedor"`
    - `"Almacenero"`
    - `"Gerente"`
  - Select Filtro de Estado ([Líneas 295-303](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/usuarios/UsuariosPage.jsx#L295-L303)):
    - `"Todos los estados"` (valor `'Todos'`)
    - `"Activo"`
    - `"Inactivo"`
- **Modal "Nuevo Usuario" / "Editar Usuario" (`ModalUsuario`)**:
  - Título dinámico: `"Nuevo Usuario"` (al crear) o `"Editar Usuario"` (al editar) ([Línea 75](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/usuarios/UsuariosPage.jsx#L75)).
  - Botón de cierre: Icono `X` (`h-5 w-5 text-gray-400 hover:text-gray-600`, [Línea 78](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/usuarios/UsuariosPage.jsx#L78)).
  - Campo Nombre:
    - Etiqueta visible: `"Nombre"` ([Línea 84](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/usuarios/UsuariosPage.jsx#L84)).
    - Restricción: Obligatorio (`required`), input de texto.
  - Campo Email:
    - Etiqueta visible: `"Email"` ([Línea 95](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/usuarios/UsuariosPage.jsx#L95)).
    - Restricción: Obligatorio (`required`), `type="email"`.
  - Campo Contraseña (solo visible en creación `esCreacion`):
    - Etiqueta visible: `"Contraseña"` ([Línea 107](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/usuarios/UsuariosPage.jsx#L107)).
    - Control de visibilidad: Botón con icono `Eye` / `EyeOff` ([Línea 121](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/usuarios/UsuariosPage.jsx#L121)).
    - Restricción: Obligatorio (`required`), oculto en modo edición para no sobreescribir hashes involuntariamente ([Línea 105](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/usuarios/UsuariosPage.jsx#L105)).
  - Campo Rol (Select):
    - Etiqueta visible: `"Rol"` ([Línea 128](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/usuarios/UsuariosPage.jsx#L128)).
    - Opciones: `"Vendedor"`, `"Administrador"`, `"Almacenero"`, `"Gerente"` ([Líneas 134-137](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/usuarios/UsuariosPage.jsx#L134-L137)).
    - Valor por defecto: `"Vendedor"` ([Línea 23](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/usuarios/UsuariosPage.jsx#L23)).

**CA-2: Mensajes de Asistencia, Banners y Retroalimentación**
- **Error en Modal**: Si la API falla al guardar, banner rojo `rounded-lg bg-red-50 px-4 py-2 text-sm text-red-600` con texto del error o fallback `"Error al guardar"` ([Línea 142](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/usuarios/UsuariosPage.jsx#L142)).
- **Error en Carga de Tabla**: Banner rojo `rounded-lg bg-red-50 px-4 py-3 text-sm text-red-600` ([Línea 309](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/usuarios/UsuariosPage.jsx#L309)).
- **Toasts de Notificación (`Toast.jsx`)**:
  - Al guardar nuevo usuario: `"Usuario guardado correctamente"` ([Línea 214](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/usuarios/UsuariosPage.jsx#L214)).
  - Al cambiar rol a un usuario existente: `"Rol actualizado. El cambio será efectivo en el próximo inicio de sesión del usuario."` ([Línea 212](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/usuarios/UsuariosPage.jsx#L212)).
  - Al desactivar: `"Usuario desactivado correctamente"` ([Línea 228](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/usuarios/UsuariosPage.jsx#L228)).
  - Al reactivar: `"Usuario reactivado correctamente"` ([Línea 228](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/usuarios/UsuariosPage.jsx#L228)).
  - Al forzar cierre de sesión: `"Sesiones de {nombre} cerradas correctamente"` ([Línea 241](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/usuarios/UsuariosPage.jsx#L241)).
- **Modales de Confirmación (`ConfirmDialog`)**:
  - Desactivar usuario:
    - Título: `"Desactivar usuario"` ([Línea 410](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/usuarios/UsuariosPage.jsx#L410)).
    - Mensaje: `"¿Deseas desactivar a {nombre}?"` ([Línea 411](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/usuarios/UsuariosPage.jsx#L411)).
    - Color botón confirmar: `#ef4444` (Rojo peligro, [Línea 414](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/usuarios/UsuariosPage.jsx#L414)).
  - Reactivar usuario:
    - Título: `"Reactivar usuario"` ([Línea 410](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/usuarios/UsuariosPage.jsx#L410)).
    - Mensaje: `"¿Deseas reactivar a {nombre}?"` ([Línea 411](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/usuarios/UsuariosPage.jsx#L411)).
    - Color botón confirmar: `#10b981` (Verde éxito, [Línea 414](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/usuarios/UsuariosPage.jsx#L414)).
  - Forzar cierre de sesión:
    - Título: `"Forzar cierre de sesión"` ([Línea 419](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/usuarios/UsuariosPage.jsx#L419)).
    - Mensaje: `"¿Invalidar de inmediato cualquier sesión activa de {nombre}? Deberá volver a iniciar sesión."` ([Línea 420](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/usuarios/UsuariosPage.jsx#L420)).
    - Color botón confirmar: `#d97706` (Ámbar advertencia, [Línea 423](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/usuarios/UsuariosPage.jsx#L423)).

**CA-3: Indicadores de Estado, Badges y Tablas**
- **Columnas de la Tabla de Usuarios** (Cabecera índigo `bg-[#6366f1] text-white`, [Líneas 318-324](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/usuarios/UsuariosPage.jsx#L318-L324)):
  1. `"Nombre"`
  2. `"Email"`
  3. `"Rol"`
  4. `"Estado"`
  5. `"Acciones"`
- **Badges Semánticos de Rol** (`ROL_BADGE`, [Líneas 11-17, 334-338](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/usuarios/UsuariosPage.jsx#L11-L338)):
  - `SuperAdmin`: `bg-red-100 text-red-800` (Rojo)
  - `Administrador`: `bg-purple-100 text-purple-700` (Púrpura)
  - `Vendedor`: `bg-green-100 text-green-800` (Verde)
  - `Almacenero`: `bg-blue-100 text-blue-800` (Azul)
  - `Gerente`: `bg-amber-100 text-amber-800` (Ámbar)
- **Badges Semánticos de Estado** ([Líneas 343-349](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/usuarios/UsuariosPage.jsx#L343-L349)):
  - `"Activo"`: `bg-green-100 text-green-700` (Verde)
  - `"Inactivo"`: `bg-red-100 text-red-700` (Rojo)

**CA-4: Acciones, Botones y Estados Vacíos (Empty States)**
- **Botón Superior "Nuevo Usuario"**:
  - Texto: `"Nuevo Usuario"` acompañado de icono `Plus` (`h-4 w-4`) ([Líneas 276-277](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/usuarios/UsuariosPage.jsx#L276-L277)).
  - Visibilidad: Exclusivo para SuperAdmin (`currentUser?.rol === 'SuperAdmin'`) ([Línea 272](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/usuarios/UsuariosPage.jsx#L272)).
- **Botones de Acción por Fila** (Visibles solo para SuperAdmin; usuarios estándar ven un guion `"—"`, [Líneas 353-391](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/usuarios/UsuariosPage.jsx#L353-L391)):
  - Editar: Icono `Pencil` (`text-[#6366f1] hover:bg-indigo-50`), tooltip `"Editar"`.
  - Desactivar: Icono `UserX` (`text-red-500 hover:bg-red-50`), tooltip `"Desactivar"` (solo en filas activas de otros usuarios).
  - Reactivar: Icono `UserCheck` (`text-green-500 hover:bg-green-50`), tooltip `"Reactivar"` (solo en filas inactivas de otros usuarios).
  - Forzar Cierre de Sesión: Icono `LogOut` (`text-amber-600 hover:bg-amber-50`), tooltip `"Forzar cierre de sesión"` (solo para otros usuarios).
- **Botones en Modal Usuario**:
  - Cancelar: `"Cancelar"` (`bg-gray-100 text-gray-700 hover:bg-gray-200`, [Línea 151](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/usuarios/UsuariosPage.jsx#L151)).
  - Guardar: `"Guardar"` (`bg-[#6366f1] text-white hover:bg-indigo-600`), muestra spinner animado `animate-spin rounded-full border-2 border-white` en estado de carga ([Líneas 156-160](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/usuarios/UsuariosPage.jsx#L156-L160)).
- **Pantalla sin datos (Empty State)**:
  - Título/Texto: `"No hay usuarios registrados"` ([Línea 312](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/usuarios/UsuariosPage.jsx#L312)).
  - Estilo: Contenedor centrado `flex h-64 items-center justify-center text-sm text-gray-400`.
- **Estado de Carga Inicial**:
  - `<Spinner texto="Cargando usuarios..." />` ([Línea 307](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/usuarios/UsuariosPage.jsx#L307)).

#### Criterios de Aceptación en Formato Gherkin (Comportamiento de UI):
- **Escenario 1**: Modo de solo lectura para perfil Administrador no SuperAdmin
  - **Dado que** un usuario con rol `"Administrador"` accede a `"/usuarios"`
  - **Cuando** carga la pantalla
  - **Entonces** el sistema no debe mostrar el botón `"Nuevo Usuario"`, debe mostrar el microcopy `"Modo solo lectura — la gestión de usuarios es exclusiva del SuperAdmin"` con icono `Lock`, y en la columna `"Acciones"` de la tabla debe renderizar un guion `"—"` sin botones interactivos.

- **Escenario 2**: Modificación de rol de usuario con toast específico
  - **Dado que** el SuperAdmin abre el modal `"Editar Usuario"` de un usuario existente
  - **Cuando** cambia el rol de `"Vendedor"` a `"Gerente"` y presiona `"Guardar"`
  - **Entonces** el modal se cierra, la tabla se refresca y se muestra un Toast verde de éxito con el texto exacto `"Rol actualizado. El cambio será efectivo en el próximo inicio de sesión del usuario."`.

---

### Historia de Usuario: [HU-UI-005] Auditoría y Consulta de Logs de Acceso
**Archivo fuente verificado:** [`client/src/modules/logs/LogsAccesoPage.jsx`](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/logs/LogsAccesoPage.jsx#L1-L231)  
**Clasificación de Evidencia:** `[HECHO]`

**Narrativa:**  
Como Administrador del sistema,  
quiero filtrar y revisar el historial de inicios y cierres de sesión con fechas, eventos y detalle de conexión,  
para auditar la seguridad operativa y detectar patrones de acceso inusuales.

#### Criterios de Aceptación (CA) - Interfaz y Comportamiento Visual:

**CA-1: Formulario y Elementos de Entrada**
- **Breadcrumb de Navegación**:
  - Enlace: `"Inicio"` (ruta `/dashboard`), Separador: `"/"`, Ítem activo: `"Logs de Acceso"` ([Línea 71](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/logs/LogsAccesoPage.jsx#L71)).
- **Encabezado**:
  - Título principal: `"Logs de Acceso"` (`text-2xl font-bold text-gray-800`, [Línea 74](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/logs/LogsAccesoPage.jsx#L74)).
- **Barra de Filtros (`flex flex-wrap items-end gap-3 rounded-xl bg-white p-4 shadow-sm`)**:
  - Filtro `"Desde"`:
    - Etiqueta visible: `"Desde"` (`text-xs font-medium text-gray-500`, [Línea 80](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/logs/LogsAccesoPage.jsx#L80)).
    - Tipo: `date` ([Línea 82](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/logs/LogsAccesoPage.jsx#L82)).
    - Restricción visual dinámica: Atributo `max={fechaHasta || undefined}` que bloquea en calendario fechas posteriores al límite superior ([Línea 84](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/logs/LogsAccesoPage.jsx#L84)).
  - Filtro `"Hasta"`:
    - Etiqueta visible: `"Hasta"` (`text-xs font-medium text-gray-500`, [Línea 90](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/logs/LogsAccesoPage.jsx#L90)).
    - Tipo: `date` ([Línea 92](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/logs/LogsAccesoPage.jsx#L92)).
    - Restricción visual dinámica: Atributo `min={fechaInicio || undefined}` que bloquea en calendario fechas anteriores al límite inferior ([Línea 94](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/logs/LogsAccesoPage.jsx#L94)).
  - Filtro `"Tipo"`:
    - Etiqueta visible: `"Tipo"` (`text-xs font-medium text-gray-500`, [Línea 100](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/logs/LogsAccesoPage.jsx#L100)).
    - Opciones visibles en `<select>`:
      - `"Todos"` (valor `""`)
      - `"Ingreso"` (valor `"Login"`)
      - `"Salida"` (valor `"Logout"`)
      - `"Otro"` (valor `"Otro"`)
      *(Citas: [Líneas 106-109](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/logs/LogsAccesoPage.jsx#L106-L109))*.
  - Filtro `"Usuario"`:
    - Etiqueta visible: `"Usuario"` (`text-xs font-medium text-gray-500`, [Línea 113](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/logs/LogsAccesoPage.jsx#L113)).
    - Placeholder: `"Nombre del usuario..."` ([Línea 119](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/logs/LogsAccesoPage.jsx#L119)).
    - Disparador por teclado: Presionar tecla `Enter` dispara directamente la función de filtrado ([Línea 118](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/logs/LogsAccesoPage.jsx#L118)).

**CA-2: Mensajes de Asistencia, Banners y Retroalimentación**
- **Validación de Rango de Fechas Incoherente**:
  - Condición: Si `fechaInicio` es posterior a `fechaHasta` (`fechaInicio > fechaHasta`).
  - Alerta visible en barra de filtros: Párrafo de error a ancho completo `w-full text-xs text-red-500` con el texto exacto `"La fecha \"Desde\" no puede ser posterior a la fecha \"Hasta\""` ([Líneas 147-151](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/logs/LogsAccesoPage.jsx#L147-L151)).
  - Efecto colateral visual: El botón `"Filtrar"` se desactiva visualmente (`disabled:opacity-50 disabled:cursor-not-allowed`, [Líneas 125-126](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/logs/LogsAccesoPage.jsx#L125-L126)).
- **Banner de Error en Carga**:
  - Si la llamada a la API falla: Mensaje en contenedor `px-6 py-4 text-sm text-red-600` con el texto devuelto o fallback `"Error al cargar los logs de acceso"` ([Líneas 51, 161](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/logs/LogsAccesoPage.jsx#L51-L161)).

**CA-3: Indicadores de Estado, Badges y Tablas**
- **Columnas de la Tabla de Logs** (Cabecera `border-b border-gray-100 bg-gray-50 text-gray-600`, [Líneas 169-175](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/logs/LogsAccesoPage.jsx#L169-L175)):
  1. `"Usuario"` (alineado a la izquierda)
  2. `"Rol"` (alineado a la izquierda)
  3. `"Evento"` (alineado al centro)
  4. `"Fecha / Hora"` (alineado a la izquierda)
  5. `"Detalle"` (alineado a la izquierda)
- **Badges Semánticos de Evento** (`TIPO_BADGE`, [Líneas 7-11, 186-189](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/logs/LogsAccesoPage.jsx#L7-L189)):
  - Tipo `Login`: Fondo y texto verde `bg-green-100 text-green-700`, icono `LogIn` (`h-3 w-3`), etiqueta `"Ingreso"`.
  - Tipo `Logout`: Fondo y texto rojo `bg-red-100 text-red-700`, icono `LogOut` (`h-3 w-3`), etiqueta `"Salida"`.
  - Tipo `Otro`: Fondo y texto gris `bg-gray-100 text-gray-600`, icono `Info` (`h-3 w-3`), etiqueta `"Otro"`.
- **Formato de Celdas**:
  - Nombre de usuario: `font-medium text-gray-800` ([Línea 183](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/logs/LogsAccesoPage.jsx#L183)).
  - Fecha / Hora: Formateado mediante función de utilidad `formatFechaHora(log.fecha_hora)` ([Línea 191](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/logs/LogsAccesoPage.jsx#L191)).
  - Detalle: Si el campo está vacío o es nulo, renderiza un guion `"—"` ([Línea 192](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/logs/LogsAccesoPage.jsx#L192)).

**CA-4: Acciones, Botones, Paginación y Estados Vacíos (Empty States)**
- **Botones de Barra de Filtros**:
  - Botón Filtrar: Icono `Search` (`h-4 w-4`), texto `"Filtrar"`, estilo `bg-indigo-600 hover:bg-indigo-700 text-white font-medium` ([Líneas 123-130](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/logs/LogsAccesoPage.jsx#L123-L130)).
  - Botón Limpiar: Icono `X` (`h-4 w-4`), texto `"Limpiar"`, estilo `border border-gray-200 text-gray-600 hover:bg-gray-50` ([Líneas 131-137](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/logs/LogsAccesoPage.jsx#L131-L137)). Restablece fechas, tipos y texto de búsqueda.
  - Botón Actualizar: Icono `RefreshCw` (`h-4 w-4`, con animación de giro `animate-spin` mientras carga), texto `"Actualizar"`, tooltip `"Actualizar"` ([Líneas 138-146](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/logs/LogsAccesoPage.jsx#L138-L146)).
- **Paginador Inferior** (Solo visible si `pagination.totalPaginas > 1`, [Líneas 201-224](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/logs/LogsAccesoPage.jsx#L201-L224)):
  - Texto de rango: `"Mostrando {inicio}–{fin} de {total} registros"` con cálculo dinámico `(pagina - 1) * limite + 1` y `Math.min(pagina * limite, total)`.
  - Botón Anterior: Icono `ChevronLeft` (`h-4 w-4`), deshabilitado con `opacity-40` si está en página 1 ([Líneas 207-212](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/logs/LogsAccesoPage.jsx#L207-L212)).
  - Indicador numérico de página: `"{paginaActual} / {totalPaginas}"` ([Línea 213](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/logs/LogsAccesoPage.jsx#L213)).
  - Botón Siguiente: Icono `ChevronRight` (`h-4 w-4`), deshabilitado con `opacity-40` si está en la última página ([Líneas 214-219](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/logs/LogsAccesoPage.jsx#L214-L219)).
- **Estado de Carga (Loading State)**:
  - Spinner central `Loader2 className="h-8 w-8 animate-spin text-indigo-500"` sobre contenedor de altura `py-20` ([Líneas 156-159](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/logs/LogsAccesoPage.jsx#L156-L159)).
- **Pantalla sin datos (Empty State)**:
  - Título/Texto central: `"No se encontraron registros"` ([Línea 163](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/logs/LogsAccesoPage.jsx#L163)).
  - Estilo: Contenedor con relleno vertical amplio `py-16 text-center text-sm text-gray-400`.

#### Criterios de Aceptación en Formato Gherkin (Comportamiento de UI):
- **Escenario 1**: Bloqueo preventivo ante rango de fechas invertido
  - **Dado que** el usuario selecciona en `"Desde"` la fecha `2026-10-15` y en `"Hasta"` la fecha `2026-10-10`
  - **Cuando** se actualiza el estado de los inputs
  - **Entonces** el sistema debe mostrar bajo los filtros el mensaje en texto rojo `"La fecha \"Desde\" no puede ser posterior a la fecha \"Hasta\""`, deshabilitar el botón `"Filtrar"` con opacidad reducida `disabled:opacity-50` e impedir el envío de la consulta HTTP.

- **Escenario 2**: Filtrado de eventos por pulsación de tecla Enter en buscador
  - **Dado que** el usuario escribe `"Carlos"` en el campo `"Usuario"`
  - **Cuando** presiona la tecla `Enter` sin hacer clic en el botón `"Filtrar"`
  - **Entonces** la página se restablece a la página 1 (`paginaActual = 1`), se activa el spinner `Loader2` en la tabla y se cargan únicamente los registros cuyo nombre coincida con `"Carlos"`.

---

---

## 3. Parte II: EPIC-CAT — Catálogo, Productos, Proveedores y Clientes (HU-UI-006 a HU-UI-009)

### Historia de Usuario: [HU-UI-006] Gestión y Mantenimiento de Categorías
**Archivo fuente verificado:** [`client/src/modules/categorias/CategoriasPage.jsx`](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/categorias/CategoriasPage.jsx#L1-L259)  
**Clasificación de Evidencia:** `[HECHO]`

**Narrativa:**  
Como Almacenero o Administrador del sistema,  
quiero gestionar el catálogo de categorías mediante creación, edición y búsqueda reactiva,  
para clasificar los artículos del minimarket y estructurar los inventarios.

#### Criterios de Aceptación (CA) - Interfaz y Comportamiento Visual:

**CA-1: Formulario y Elementos de Entrada**
- **Breadcrumb de Navegación**:
  - Enlace: `"Inicio"` (ruta `/dashboard`), Separador: `"/"`, Ítem activo: `"Categorías"` ([Línea 167](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/categorias/CategoriasPage.jsx#L167)).
- **Encabezado y Barra de Búsqueda**:
  - Título principal: `"Categorías"` (`text-2xl font-bold text-gray-800`, [Línea 170](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/categorias/CategoriasPage.jsx#L170)).
  - Campo de búsqueda: Input de texto con icono `Search` (`left-3 top-1/2 text-gray-400`), placeholder `"Buscar categoría..."`, contenedor con clase `max-w-xs` ([Líneas 180-189](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/categorias/CategoriasPage.jsx#L180-L189)).
- **Modal "Nueva Categoría" / "Editar Categoría" (`ModalCategoria`)**:
  - Título dinámico: `"Nueva Categoría"` (en modo creación) o `"Editar Categoría"` (en modo edición) ([Línea 68](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/categorias/CategoriasPage.jsx#L68)).
  - Botón de cierre: Icono `X` (`h-5 w-5 text-gray-400 hover:text-gray-600`, [Línea 71](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/categorias/CategoriasPage.jsx#L71)).
  - Campo Nombre:
    - Etiqueta visible: `"Nombre"` ([Línea 77](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/categorias/CategoriasPage.jsx#L77)).
    - Placeholder: Ninguno.
    - Valor inicial: Cadena vacía `""` o el valor preexistente `categoriaEditando.nombre` ([Línea 20](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/categorias/CategoriasPage.jsx#L20)).
    - Restricción visual: Campo obligatorio (`required`), estilo `rounded-lg border border-gray-200 px-4 py-2 focus:ring-indigo-400` ([Línea 83](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/categorias/CategoriasPage.jsx#L83)).

**CA-2: Mensajes de Asistencia, Banners y Retroalimentación**
- **Validaciones en Modal (Banner Rojo `bg-red-50 text-red-600`)**:
  - Si el campo solo contiene espacios o está vacío: `"El nombre no puede estar vacío"` ([Línea 33](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/categorias/CategoriasPage.jsx#L33)).
  - Si ya existe otra categoría con el mismo nombre (insensible a mayúsculas/minúsculas): `"Ya existe una categoría con ese nombre"` ([Líneas 40-45](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/categorias/CategoriasPage.jsx#L40-L45)).
  - Error de red o respuesta HTTP: Texto de API o fallback `"Error al guardar"` ([Líneas 57, 88](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/categorias/CategoriasPage.jsx#L57-L88)).
- **Modal de Confirmación de Eliminación (`ConfirmDialog`)**:
  - Título: `"Eliminar categoría"` ([Línea 251](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/categorias/CategoriasPage.jsx#L251)).
  - Mensaje exacto: `"¿Eliminar categoría \"{nombre}\"?"` ([Línea 252](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/categorias/CategoriasPage.jsx#L252)).
  - Botón cancelar: `"Cancelar"`.
  - Botón confirmar: `"Confirmar"` con color rojo por defecto `#ef4444`.
- **Toasts de Notificación (`Toast.jsx`)**:
  - Al eliminar satisfactoriamente: Toast de éxito verde `"Categoría eliminada correctamente"` ([Línea 153](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/categorias/CategoriasPage.jsx#L153)).
  - Al fallar la eliminación: Toast de error rojo con mensaje devuelto o `"Error al eliminar"` ([Línea 156](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/categorias/CategoriasPage.jsx#L156)).

**CA-3: Indicadores de Estado, Badges y Tablas**
- **Columnas de la Tabla de Categorías** (Cabecera índigo `bg-[#6366f1] text-white`, [Líneas 203-207](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/categorias/CategoriasPage.jsx#L203-L207)):
  1. `"ID"` (texto gris `text-gray-500`)
  2. `"Nombre"` (texto oscuro `text-gray-800`)
  3. `"Acciones"`
- **Alternancia de Filas**: Filas pares con fondo blanco `bg-white`, impares con fondo gris suave `bg-gray-50` ([Línea 211](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/categorias/CategoriasPage.jsx#L211)).

**CA-4: Acciones, Botones y Estados Vacíos (Empty States)**
- **Botón de Acción Principal**:
  - Texto: `"Nueva Categoría"` acompañado de icono `Plus` (`h-4 w-4`) ([Líneas 175-176](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/categorias/CategoriasPage.jsx#L175-L176)).
  - Estilo: Primario índigo `bg-[#6366f1] text-white hover:bg-indigo-600`.
- **Botones de Acción por Fila**:
  - Botón Editar: Icono `Pencil` (`text-[#6366f1] hover:bg-indigo-50`), tooltip `"Editar"` ([Líneas 216-222](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/categorias/CategoriasPage.jsx#L216-L222)).
  - Botón Eliminar: Icono `Trash2` (`text-red-500 hover:bg-red-50`), tooltip `"Eliminar"`. Restricción: Visible **únicamente** para usuarios con rol `Administrador` mediante `rolSatisface(usuario?.rol, ['Administrador'])` ([Líneas 223-231](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/categorias/CategoriasPage.jsx#L223-L231)).
- **Botones en Modal Categoria**:
  - Cancelar: `"Cancelar"` (`bg-gray-100 text-gray-700 hover:bg-gray-200`, [Línea 97](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/categorias/CategoriasPage.jsx#L97)).
  - Guardar: `"Guardar"` (`bg-[#6366f1] text-white hover:bg-indigo-600`), muestra spinner animado `animate-spin rounded-full border-2 border-white` en estado de carga ([Líneas 102-106](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/categorias/CategoriasPage.jsx#L102-L106)).
- **Estado de Carga Inicial**:
  - Componente: `<Spinner texto="Cargando categorías..." />` ([Línea 192](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/categorias/CategoriasPage.jsx#L192)).
- **Pantalla sin datos (Empty State)**:
  - Título/Texto: `"No hay categorías registradas"` ([Línea 197](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/categorias/CategoriasPage.jsx#L197)).
  - Estilo: Contenedor con altura fija `h-64 items-center justify-center text-sm text-gray-400`.

#### Criterios de Aceptación en Formato Gherkin (Comportamiento de UI):
- **Escenario 1**: Restricción de eliminación por rol Almacenero
  - **Dado que** un usuario con rol `"Almacenero"` ingresa a la pantalla `"/categorias"`
  - **Cuando** revisa las filas de la tabla de categorías
  - **Entonces** debe visualizar únicamente el botón `"Editar"` (icono `Pencil`), quedando completamente oculto el botón `"Eliminar"` (icono `Trash2`).

- **Escenario 2**: Validación de unicidad de nombre de categoría en frontend
  - **Dado que** ya existe registrada la categoría `"Bebidas"`
  - **Cuando** el usuario hace clic en `"Nueva Categoría"`, escribe `"bebidas"` y presiona `"Guardar"`
  - **Entonces** el modal no realiza la petición HTTP y despliega un banner de alerta con el texto `"Ya existe una categoría con ese nombre"`.

---

### Historia de Usuario: [HU-UI-007] Catálogo de Productos y Trazabilidad FEFO
**Archivo fuente verificado:** [`client/src/modules/productos/ProductosPage.jsx`](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/productos/ProductosPage.jsx#L1-L1229)  
**Clasificación de Evidencia:** `[HECHO]`

**Narrativa:**  
Como Administrador o Almacenero,  
quiero supervisar el catálogo integral de productos con escaneo de código de barras, alertas de stock/vencimiento, visor de lotes FEFO y acciones rápidas de baja y reposición,  
para evitar quiebres de inventario y pérdidas por expiración de mercadería.

#### Criterios de Aceptación (CA) - Interfaz y Comportamiento Visual:

**CA-1: Formulario y Elementos de Entrada**
- **Breadcrumb de Navegación**:
  - Enlace: `"Inicio"` (ruta `/dashboard`), Separador: `"/"`, Ítem activo: `"Productos"` ([Línea 915](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/productos/ProductosPage.jsx#L915)).
- **Barra de Filtros Generales**:
  - Campo Búsqueda: Icono `Search`, placeholder `"Buscar por nombre o marca..."` ([Línea 992](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/productos/ProductosPage.jsx#L992)).
  - Select Categoría: Opción predeterminada `"Todas las categorías"`, seguida de la lista dinámica de categorías existentes ([Líneas 1002-1005](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/productos/ProductosPage.jsx#L1002-L1005)).
  - Select Estado: `"Todos los estados"`, `"Activo"`, `"Inactivo"` ([Líneas 1013-1015](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/productos/ProductosPage.jsx#L1013-L1015)).
  - Select Alerta:
    - `"Sin filtro"` (valor `'Todos'`)
    - `"Crítico (agotado + bajo)"` (valor `'Crítico'`)
    - `"Agotado (sin stock)"` (valor `'Agotado'`)
    - `"Stock bajo"` (valor `'Stock bajo'`)
    - `"Vencido"` (valor `'Vencido'`)
    - `"Por vencer"` (valor `'Por vencer'`)
    *(Citas: [Líneas 1023-1028](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/productos/ProductosPage.jsx#L1023-L1028))*.
- **Modal "Nuevo Producto" / "Editar Producto" (`ModalProducto`)**:
  - Título: `"Nuevo Producto"` o `"Editar Producto"` ([Línea 176](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/productos/ProductosPage.jsx#L176)).
  - Campo Código de Barras (en modo creación `esCreacion`):
    - Icono: `ScanLine`, cambia dinámicamente a verde `text-green-500` cuando tiene el foco o gris `text-gray-400` en reposo ([Línea 189](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/productos/ProductosPage.jsx#L189)).
    - Placeholder dinámico: `"Escanea o escribe el código..."` (si tiene el foco) o `"Haz clic aquí para escanear"` (si no lo tiene) ([Línea 198](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/productos/ProductosPage.jsx#L198)).
    - Indicador de estado de escaneo: Etiqueta con punto verde parpadeante `animate-pulse` con texto literal `"Listo para escanear"` ([Líneas 207-210](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/productos/ProductosPage.jsx#L207-L210)).
    - Búsqueda en API externa: Tecla `Enter` dispara búsqueda. Muestra spinner `Loader2 animate-spin` ([Línea 205](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/productos/ProductosPage.jsx#L205)).
    - Vista previa de imagen: Si la API devuelve imagen, se muestra miniatura `h-14 w-14 object-cover` con microcopy `"Vista previa (no se guarda)"` ([Líneas 213-217](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/productos/ProductosPage.jsx#L213-L217)).
    - Mensaje de autocompletado: Texto esmeralda `"Datos completados automáticamente. Verifica antes de guardar."` o gris `"No se encontró información para este código. Completa los datos manualmente."` ([Líneas 118, 120, 220-222](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/productos/ProductosPage.jsx#L118-L222)).
  - Campo Código de Barras (en modo edición): Placeholder `"Opcional"` ([Línea 255](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/productos/ProductosPage.jsx#L255)).
  - Campo `"Nombre"`: Etiqueta `"Nombre"`, required. Si proviene de escaneo, muestra borde izquierdo verde `border-l-4 border-l-emerald-400` ([Líneas 262-270](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/productos/ProductosPage.jsx#L262-L270)).
  - Campo `"Marca"`: Etiqueta `"Marca"`, required. Si proviene de escaneo, borde izquierdo esmeralda y microcopy `"Verifica que estos datos sean correctos"` ([Líneas 275-287](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/productos/ProductosPage.jsx#L275-L287)).
  - Campo `"Categoría"`: Select con opción inicial `"Seleccionar..."` y listado de categorías activas ([Líneas 291-300](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/productos/ProductosPage.jsx#L291-L300)).
  - Campo `"Precio"`:
    - Etiqueta `"Precio"` ([Línea 306](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/productos/ProductosPage.jsx#L306)).
    - Prefijo visual: `"S./"` incrustado a la izquierda ([Línea 308](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/productos/ProductosPage.jsx#L308)).
    - Modo y sanitización: `inputMode="decimal"`, intercepta y bloquea caracteres como `'e'`, `'E'`, `'+'`, `'-'`, limitando el valor a 6 dígitos enteros y 2 decimales ([Líneas 27-47, 311-321](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/productos/ProductosPage.jsx#L27-L321)).
  - Checkbox `"Este producto maneja fecha de vencimiento"`:
    - Checkbox checked por defecto ([Líneas 55, 330-336](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/productos/ProductosPage.jsx#L55-L336)).
    - Microcopy asistencial: `"Desmárcalo para productos que no caducan (Encendedor, cepillos, productos no perecederos, etc.): sus entradas de inventario no pedirán fecha de vencimiento."` ([Líneas 341-343](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/productos/ProductosPage.jsx#L341-L343)).
  - Campo `"Stock Mínimo"`:
    - Etiqueta: `"Stock Mínimo"` (en edición añade `"(opcional)"`) ([Línea 355](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/productos/ProductosPage.jsx#L355)).
    - En creación: Deshabilitado (`disabled`), valor fijo preestablecido `"10"`, microcopy `"Valor preestablecido (10). Se puede ajustar más adelante editando el producto."` ([Líneas 83, 362, 367](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/productos/ProductosPage.jsx#L83-L367)).
    - En edición: Habilitado, placeholder `"Umbral global si se deja vacío"`, microcopy `"Punto de reorden propio de este producto para el reporte de Stock Crítico."` ([Líneas 363, 369](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/productos/ProductosPage.jsx#L363-L369)).
- **Modal "Dar de Baja" (`ModalBaja`)**:
  - Título: `"Dar de Baja"` ([Línea 657](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/productos/ProductosPage.jsx#L657)).
  - Bloque informativo: Muestra `"Producto: {nombre}"` y `"Stock actual: {stock} und(s)"` en caja gris `bg-gray-50` ([Líneas 663-666](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/productos/ProductosPage.jsx#L663-L666)).
  - Campo Cantidad: Input numérico con botón complementario `"Todo"` (autocompleta con el stock total del producto) ([Líneas 673-688](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/productos/ProductosPage.jsx#L673-L688)).
  - Campo Motivo (Select): Opciones fijas `"Vencido"`, `"Dañado"`, `"Robo o faltante"`, `"Consumo interno"`, `"Otro"` ([Líneas 611, 693-703](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/productos/ProductosPage.jsx#L611-L703)).
  - Campo Detalle: Etiqueta `"Detalle (opcional)"`, placeholder `"Ej: Lote vencido el 15/06"` ([Líneas 707-716](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/productos/ProductosPage.jsx#L707-L716)).
- **Modal "Solicitar Reposición" (`ModalSolicitud`)**:
  - Título: `"Solicitar Reposición"` ([Línea 564](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/productos/ProductosPage.jsx#L564)).
  - Bloque informativo: Muestra `"Producto: {nombre} - {marca}"` y `"Stock actual: {stock} und(s)"` ([Líneas 567-570](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/productos/ProductosPage.jsx#L567-L570)).
  - Campo Cantidad a solicitar: Input numérico con `min="1"` ([Líneas 573-580](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/productos/ProductosPage.jsx#L573-L580)).
  - Campo Proveedor: Select con opción `"Seleccionar..."` y proveedores activos ([Líneas 582-594](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/productos/ProductosPage.jsx#L582-L594)).

**CA-2: Mensajes de Asistencia, Banners y Retroalimentación**
- **Banner Informativo de Stock 0 en Creación**:
  - Cuadro índigo: `"El producto se crea con stock 0. Para registrar el primer lote (cantidad, proveedor, fecha de vencimiento), ve a Inventario → Entradas después de guardar."` (`rounded-lg border border-indigo-100 bg-indigo-50 px-4 py-3 text-xs text-indigo-700`, [Líneas 347-350](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/productos/ProductosPage.jsx#L347-L350)).
- **Alerta de Producto Existente por Código de Barras**:
  - Cuadro ámbar: `"Este producto ya está registrado: {nombre} - {marca} (Stock: {stock})"` con dos botones de acción: `"Editar producto existente"` y `"Escanear otro código"` ([Líneas 225-245](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/productos/ProductosPage.jsx#L225-L245)).
- **Validaciones en Formulario de Producto**:
  - Si el par nombre y marca coincide con otro registro: `"Ya existe un producto con ese nombre y marca"` ([Línea 145](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/productos/ProductosPage.jsx#L145)).
- **Validaciones en Modal de Baja**:
  - Si cantidad <= 0: `"La cantidad debe ser mayor a 0"` ([Línea 634](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/productos/ProductosPage.jsx#L634)).
  - Si cantidad supera el inventario físico: `"Stock insuficiente (disponible: {producto.stock})"` ([Línea 635](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/productos/ProductosPage.jsx#L635)).
- **Toasts de Notificación (`Toast.jsx`)**:
  - Al dar de baja: `"Baja registrada correctamente"` ([Línea 1194](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/productos/ProductosPage.jsx#L1194)).
  - Al solicitar reposición: `"Solicitud de reposición creada"` ([Línea 1213](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/productos/ProductosPage.jsx#L1213)).
  - Al cambiar estado: `"Producto desactivado correctamente"` / `"Producto reactivado correctamente"` ([Línea 831](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/productos/ProductosPage.jsx#L831)).

**CA-3: Indicadores de Estado, Badges y Tablas**
- **Barra Superior de Alertas Dinámicas** (Renderizada si algún conteo es mayor a cero, [Líneas 917-972](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/productos/ProductosPage.jsx#L917-L972)):
  - Alerta Agotado: Botón redondeado con icono `AlertTriangle` y texto `"{N} producto(s) agotado(s)"` (`bg-red-100 text-red-700`).
  - Alerta Stock Bajo: Botón redondeado con icono `AlertTriangle` y texto `"{N} producto(s) con stock bajo"` (`bg-amber-100 text-amber-700`).
  - Alerta Vencido: Botón redondeado con icono `AlertTriangle` y texto `"{N} producto(s) vencido(s)"` (`bg-red-100 text-red-700`).
  - Alerta Por Vencer: Botón redondeado con icono `AlertTriangle` y texto `"{N} producto(s) por vencer"` (`bg-yellow-100 text-yellow-700`).
- **Columnas de la Tabla de Productos** (Cabecera `bg-[#6366f1] text-white`, [Líneas 1045-1055](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/productos/ProductosPage.jsx#L1045-L1055)):
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
  - Si stock === 0: Fondo rojo claro `bg-red-50` ([Línea 907](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/productos/ProductosPage.jsx#L907)).
  - Si stock <= 5 y > 0: Fondo ámbar claro `bg-amber-50` ([Línea 908](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/productos/ProductosPage.jsx#L908)).
- **Leyenda de Colores de Stock (Pie de Tabla)** ([Líneas 1138-1151](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/productos/ProductosPage.jsx#L1138-L1151)):
  - Cuadro rojo `bg-red-100 border-red-200`: `"Sin stock"`
  - Cuadro ámbar `bg-amber-100 border-amber-200`: `"Stock crítico (≤5)"`
  - Cuadro blanco `bg-white border-gray-300`: `"Stock normal"`

**CA-4: Acciones, Botones, Modal de Lotes y Paginación**
- **Botones de Acción por Fila** ([Líneas 1082-1129](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/productos/ProductosPage.jsx#L1082-L1129)):
  - Editar: Icono `Pencil` (`text-[#6366f1]`), tooltip `"Editar"`.
  - Ver Lotes: Icono `Layers` (`text-gray-500`), tooltip `"Ver lotes"`.
  - Desactivar / Reactivar: Icono `EyeOff` / `Eye`, tooltip `"Desactivar"` / `"Reactivar"`.
  - Dar de baja: Icono `Trash2` (`text-red-500`), tooltip `"Dar de baja"` (visible solo para Almacenero y Administrador).
  - Solicitar reposición: Icono `Package` (`text-amber-600`), tooltip `"Solicitar reposición"` (visible si está activo y `stock <= 5`).
- **Modal "Lotes de {producto}" (`ModalLotes`)**:
  - Cabecera: Título `"Lotes de {producto.nombre}"`, subtítulo con marca `{producto.marca}` ([Líneas 451-452](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/productos/ProductosPage.jsx#L451-L452)).
  - Columnas de tabla FEFO: `"Lote"`, `"Vencimiento"`, `"Restante"`, `"Original"`, `"Proveedor"`, `"Ingreso"`, `"Estado"` ([Líneas 473-480](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/productos/ProductosPage.jsx#L473-L480)).
  - Badges de estado de lote ([Líneas 425-430](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/productos/ProductosPage.jsx#L425-L430)):
    - `"Agotado"`: `bg-gray-100 text-gray-500`
    - `"Sin vencimiento"`: `bg-gray-100 text-gray-600`
    - `"Vencido"`: `bg-red-100 text-red-700`
    - `"Vigente"`: `bg-green-100 text-green-700`
  - Pie explicativo: `"Suma de restantes: {totalRestante} — el orden de la tabla es el que usa el sistema al vender (FEFO)"` ([Línea 507](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/productos/ProductosPage.jsx#L507)).
  - Botón: `"Cerrar"` (`bg-gray-100 text-gray-700`, [Línea 518](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/productos/ProductosPage.jsx#L518)).
- **Paginador Inferior**:
  - Botón `"Anterior"`, texto `"Pág. {paginaActual} de {totalPaginas}"` y botón `"Siguiente"` ([Líneas 1154-1172](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/productos/ProductosPage.jsx#L1154-L1172)).
- **Estados Vacíos**:
  - Sin registros de productos: `"No hay productos registrados"` ([Línea 1038](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/productos/ProductosPage.jsx#L1038)).
  - Sin lotes asociados al producto: `"Este producto no tiene entradas de inventario registradas."` ([Línea 466](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/productos/ProductosPage.jsx#L466)).

#### Criterios de Aceptación en Formato Gherkin (Comportamiento de UI):
- **Escenario 1**: Detección de código de barras existente
  - **Dado que** el usuario presiona `"Nuevo Producto"` y el input de código de barras tiene el foco visual con el mensaje `"Listo para escanear"`
  - **Cuando** escanea o digita un código que ya pertenece a un artículo registrado y presiona `Enter`
  - **Entonces** el sistema muestra una caja de alerta ámbar con el texto `"Este producto ya está registrado: {nombre} - {marca} (Stock: {stock})"` y dos botones: `"Editar producto existente"` y `"Escanear otro código"`.

- **Escenario 2**: Visualización de trazabilidad de lotes FEFO
  - **Dado que** un producto cuenta con dos lotes de ingreso registrados
  - **Cuando** el usuario hace clic sobre el botón de acción con icono `Layers` (`"Ver lotes"`)
  - **Entonces** se abre el modal `"Lotes de {producto.nombre}"` ordenando las filas con el lote de vencimiento más próximo en primer lugar, mostrando badges semánticos de estado y el pie explicativo `"el orden de la tabla es el que usa el sistema al vender (FEFO)"`.

---

### Historia de Usuario: [HU-UI-008] Registro y Validación Oficial de Proveedores
**Archivo fuente verificado:** [`client/src/modules/proveedores/ProveedoresPage.jsx`](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/proveedores/ProveedoresPage.jsx#L1-L557)  
**Clasificación de Evidencia:** `[HECHO]`

**Narrativa:**  
Como Administrador o Almacenero,  
quiero registrar y mantener proveedores verificando obligatoriamente su RUC en SUNAT y validando formatos internacionales de contacto,  
para asegurar compras formales y mitigar riesgos tributarios con empresas no habidas o inactivas.

#### Criterios de Aceptación (CA) - Interfaz y Comportamiento Visual:

**CA-1: Formulario y Elementos de Entrada**
- **Breadcrumb de Navegación**:
  - Enlace: `"Inicio"` (ruta `/dashboard`), Separador: `"/"`, Ítem activo: `"Proveedores"` ([Línea 424](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/proveedores/ProveedoresPage.jsx#L424)).
- **Encabezado y Filtros**:
  - Título principal: `"Proveedores"` (`text-2xl font-bold text-gray-800`, [Línea 427](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/proveedores/ProveedoresPage.jsx#L427)).
  - Campo Búsqueda: Icono `Search`, placeholder `"Buscar por nombre o RUC..."` ([Línea 444](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/proveedores/ProveedoresPage.jsx#L444)).
  - Select Filtro de Estado: `"Todos los estados"`, `"Activo"`, `"Inactivo"` ([Líneas 454-456](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/proveedores/ProveedoresPage.jsx#L454-L456)).
- **Modal "Nuevo Proveedor" / "Editar Proveedor" (`ModalProveedor`)**:
  - Título dinámico: `"Nuevo Proveedor"` o `"Editar Proveedor"` ([Línea 198](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/proveedores/ProveedoresPage.jsx#L198)).
  - Campo `"RUC"`:
    - Etiqueta: `"RUC"` ([Línea 226](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/proveedores/ProveedoresPage.jsx#L226)).
    - Input: Longitud máxima de 11 dígitos numéricos (`maxLength={11}`), placeholder `"00000000000"` ([Líneas 230-242](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/proveedores/ProveedoresPage.jsx#L230-L242)).
    - Botón de consulta SUNAT: Botón índigo contiguo con icono `Search` (o spinner `Loader2` si está verificando), tooltip `"Verificar RUC en SUNAT"`, ejecutable mediante clic o tecla `Enter` ([Líneas 239, 245-252](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/proveedores/ProveedoresPage.jsx#L239-L252)).
  - Campo `"Nombre"`:
    - Etiqueta: `"Nombre"` ([Línea 207](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/proveedores/ProveedoresPage.jsx#L207)).
    - Comportamiento de bloqueo: Al validar el RUC con SUNAT, el campo adopta la razón social devuelta y se bloquea como solo lectura (`readOnly={nombreBloqueado}`, estilo `bg-gray-50 text-gray-600`) ([Líneas 128-131, 212-216](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/proveedores/ProveedoresPage.jsx#L128-L216)).
    - Microcopy informativo: `"Nombre oficial según SUNAT — no editable."` ([Línea 220](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/proveedores/ProveedoresPage.jsx#L220)).
  - Campo `"Contacto"` (Selector de Canal):
    - Selector dual con botones tab: `"Celular"` y `"Correo"` ([Líneas 264-287](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/proveedores/ProveedoresPage.jsx#L264-L287)).
    - Modo Celular:
      - Select de país con 11 naciones y códigos internacionales: Perú (+51), Colombia (+57), Ecuador (+593), Bolivia (+591), Chile (+56), Argentina (+54), Brasil (+55), México (+52), Estados Unidos (+1), España (+34) y China (+86) ([Líneas 16-27, 291-301](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/proveedores/ProveedoresPage.jsx#L16-L301)).
      - Input de celular: Placeholder `"Número de celular"`, solo caracteres numéricos ([Líneas 302-312](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/proveedores/ProveedoresPage.jsx#L302-L312)).
    - Modo Correo:
      - Input de correo: Placeholder `"proveedor@ejemplo.com"` ([Líneas 315-325](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/proveedores/ProveedoresPage.jsx#L315-L325)).

**CA-2: Mensajes de Asistencia, Banners y Retroalimentación**
- **Validaciones Oficiales de RUC en SUNAT**:
  - Si el RUC inicia con "10": `"RUC de persona natural (10) no válido para proveedor; debe ser RUC de empresa (20)"` ([Línea 109](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/proveedores/ProveedoresPage.jsx#L109)).
  - Si el RUC no está activo en SUNAT: `"RUC dado de baja en SUNAT (estado: {data.estado})"` ([Línea 116](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/proveedores/ProveedoresPage.jsx#L116)).
  - Si el RUC no tiene condición de habido: `"RUC con domicilio no habido en SUNAT (condición: {data.condicion})"` ([Línea 120](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/proveedores/ProveedoresPage.jsx#L120)).
  - Si el RUC no se encuentra en el padrón: `"No se encontró información para ese RUC en SUNAT"` ([Línea 133](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/proveedores/ProveedoresPage.jsx#L133)).
  - Razón social obtenida exitosamente: Texto destacado en verde esmeralda `text-emerald-600 font-medium` ([Línea 258](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/proveedores/ProveedoresPage.jsx#L258)).
  - Si el usuario intenta guardar sin haber verificado en SUNAT: `"Debes verificar el RUC con SUNAT antes de continuar"` ([Línea 148](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/proveedores/ProveedoresPage.jsx#L148)).
- **Validaciones de Contacto (al perder foco `onBlur`)**:
  - Si el celular no cumple el patrón internacional del país seleccionado: `"Número de celular inválido para {Nombre del País}"` ([Líneas 44, 308](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/proveedores/ProveedoresPage.jsx#L44-L308)).
  - Si el formato del correo es inválido: `"Correo electrónico inválido"` ([Líneas 33, 321](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/proveedores/ProveedoresPage.jsx#L33-L321)).
- **Validación de Unicidad**:
  - Si el nombre ya existe en la lista: `"Ya existe un proveedor con ese nombre"` ([Línea 172](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/proveedores/ProveedoresPage.jsx#L172)).
- **Modal de Confirmación de Cambio de Estado (`ConfirmDialog`)**:
  - Título dinámico: `"Desactivar proveedor"` o `"Reactivar proveedor"` ([Línea 548](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/proveedores/ProveedoresPage.jsx#L548)).
  - Mensaje exacto: `"¿Deseas desactivar a {nombre}?"` o `"¿Deseas reactivar a {nombre}?"` ([Línea 549](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/proveedores/ProveedoresPage.jsx#L549)).
  - Color de botón confirmar: Rojo `#ef4444` para desactivar; Verde `#10b981` para reactivar ([Línea 552](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/proveedores/ProveedoresPage.jsx#L552)).
- **Toasts de Notificación**:
  - `"Proveedor desactivado correctamente"` / `"Proveedor reactivado correctamente"` ([Línea 403](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/proveedores/ProveedoresPage.jsx#L403)).

**CA-3: Indicadores de Estado, Badges y Tablas**
- **Columnas de la Tabla de Proveedores** (Cabecera `bg-[#6366f1] text-white`, [Líneas 472-478](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/proveedores/ProveedoresPage.jsx#L472-L478)):
  1. `"Nombre"` (texto oscuro `text-gray-800`)
  2. `"RUC"` (texto gris `text-gray-500`)
  3. `"Contacto"` (muestra número/correo o un guion largo `&mdash;` si está vacío, [Líneas 486-490](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/proveedores/ProveedoresPage.jsx#L486-L490))
  4. `"Estado"`
  5. `"Acciones"`
- **Badges Semánticos de Estado** ([Líneas 494-500](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/proveedores/ProveedoresPage.jsx#L494-L500)):
  - `"Activo"`: `bg-green-100 text-green-800` (Verde)
  - `"Inactivo"`: `bg-red-100 text-red-700` (Rojo)

**CA-4: Acciones, Botones y Estados Vacíos (Empty States)**
- **Botón de Acción Superior**:
  - Texto: `"Nuevo Proveedor"` con icono `Plus` (`h-4 w-4`) ([Líneas 430-433](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/proveedores/ProveedoresPage.jsx#L430-L433)).
- **Botones de Acción en Fila**:
  - Botón Editar: Icono `Pencil` (`text-[#6366f1] hover:bg-indigo-50`), tooltip `"Editar"` ([Línea 509](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/proveedores/ProveedoresPage.jsx#L509)).
  - Botón Desactivar / Reactivar: Icono `UserX` (rojo) o `UserCheck` (verde). Visible **solo** para Administrador mediante `rolSatisface(usuario?.rol, ['Administrador'])` ([Líneas 512-528](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/proveedores/ProveedoresPage.jsx#L512-L528)).
- **Botones en Modal Proveedor**:
  - Cancelar: `"Cancelar"` (`bg-gray-100 text-gray-700`, [Línea 342](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/proveedores/ProveedoresPage.jsx#L342)).
  - Guardar: `"Guardar"` (`bg-[#6366f1] text-white`). Restricción: Deshabilitado (`disabled`) si `loading`, si `!rucValidado` o si persiste algún error en el campo de contacto ([Líneas 346-351](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/proveedores/ProveedoresPage.jsx#L346-L351)).
- **Pantalla sin datos (Empty State)**:
  - Título/Texto: `"No hay proveedores registrados"` ([Línea 466](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/proveedores/ProveedoresPage.jsx#L466)).
- **Estado de Carga Inicial**:
  - `<Spinner texto="Cargando proveedores..." />` ([Línea 461](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/proveedores/ProveedoresPage.jsx#L461)).

#### Criterios de Aceptación en Formato Gherkin (Comportamiento de UI):
- **Escenario 1**: Rechazo preventivo de RUC de persona natural
  - **Dado que** el usuario abre el modal `"Nuevo Proveedor"`
  - **Cuando** escribe un RUC de 11 dígitos que comienza con `"10"` y presiona el botón de consulta SUNAT
  - **Entonces** no se envía la petición al servidor SUNAT y el sistema despliega el mensaje de error en texto rojo `"RUC de persona natural (10) no válido para proveedor; debe ser RUC de empresa (20)"`.

- **Escenario 2**: Verificación exitosa y bloqueo de razón social
  - **Dado que** el usuario digita un RUC que inicia con `"20"` perteneciente a una empresa activa y habida
  - **Cuando** presiona el botón de verificación o la tecla `Enter`
  - **Entonces** el campo `"Nombre"` se completa con la razón social oficial de SUNAT, queda en estado de solo lectura con el mensaje `"Nombre oficial según SUNAT — no editable."` y el botón `"Guardar"` queda habilitado para el envío.

---

### Historia de Usuario: [HU-UI-009] Directorio de Clientes y Gestión de Contacto
**Archivo fuente verificado:** [`client/src/modules/clientes/ClientesPage.jsx`](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/clientes/ClientesPage.jsx#L1-L236)  
**Clasificación de Evidencia:** `[HECHO]`

**Narrativa:**  
Como Administrador (o Gerente en modo consulta),  
quiero visualizar el historial de clientes registrados en el punto de venta con su acumulado de compras y gestionar su correo electrónico,  
para fidelizar a los compradores y remitir comprobantes electrónicos cuando sea requerido.

#### Criterios de Aceptación (CA) - Interfaz y Comportamiento Visual:

**CA-1: Formulario y Elementos de Entrada**
- **Encabezado y Contador Superior**:
  - Icono visual: `Users` (`h-5 w-5 text-indigo-500`, [Línea 78](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/clientes/ClientesPage.jsx#L78)).
  - Contador dinámico literal: `"{clientes.length} cliente(s) registrados"` ([Líneas 79-81](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/clientes/ClientesPage.jsx#L79-L81)).
- **Buscador Reactivo**:
  - Icono `Search` incrustado a la izquierda ([Línea 98](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/clientes/ClientesPage.jsx#L98)).
  - Placeholder dinámico según rol (`puedeVerEmail`):
    - Si es Administrador: `"Buscar por nombre, DNI o email…"` ([Línea 101](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/clientes/ClientesPage.jsx#L101)).
    - Si es Gerente: `"Buscar por nombre o DNI…"` ([Línea 101](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/clientes/ClientesPage.jsx#L101)).
- **Edición Inline de Email (Exclusiva para Administrador)**:
  - Input dinámico dentro de la celda de la tabla con icono `Mail` incrustado ([Líneas 165-177](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/clientes/ClientesPage.jsx#L165-L177)).
  - Placeholder: `"correo@ejemplo.com"`.
  - Atajos por teclado: Presionar tecla `Enter` guarda los cambios; presionar tecla `Escape` cancela la edición ([Líneas 171-172](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/clientes/ClientesPage.jsx#L171-L172)).
  - Botón Confirmar: Icono `Check` (`text-green-600 hover:bg-green-50`), tooltip `"Guardar"` ([Líneas 183-185](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/clientes/ClientesPage.jsx#L183-L185)).
  - Botón Cancelar: Icono `X` (`text-gray-400 hover:bg-gray-100`), tooltip `"Cancelar"` ([Líneas 188-193](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/clientes/ClientesPage.jsx#L188-L193)).

**CA-2: Mensajes de Asistencia, Banners y Retroalimentación**
- **Badge Superior de Éxito**:
  - Al actualizar el correo: Badge verde en cabecera `rounded-full bg-green-100 px-3 py-1 text-xs font-medium text-green-700` con el texto `"Email actualizado"` durante 3 segundos ([Líneas 64-65, 83-87](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/clientes/ClientesPage.jsx#L64-L87)).
- **Validación de Formato de Email**:
  - Si el email ingresado no cumple con el regex de correo: Banner rojo con el texto `"Formato de email inválido"` ([Líneas 55, 90-94](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/clientes/ClientesPage.jsx#L55-L94)).
- **Microcopy Asistencial al Pie de Página (Solo Administrador)**:
  - Párrafo explicativo: `"Los clientes se registran automáticamente al procesar boletas con DNI. El email es opcional y se puede editar desde aquí."` (`text-xs text-gray-400`, [Líneas 228-232](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/clientes/ClientesPage.jsx#L228-L232)).

**CA-3: Indicadores de Estado, Badges y Tablas**
- **Columnas de la Tabla de Clientes** (Cabecera `bg-gray-50 text-gray-500 uppercase`, [Líneas 112-132](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/clientes/ClientesPage.jsx#L112-L132)):
  1. `"Nombre"`
  2. `"DNI"`
  3. `["Email"]` *(Visible únicamente si el usuario es Administrador)*
  4. `"Compras"`
  5. `["Acción"]` *(Visible únicamente si el usuario es Administrador)*
- **Badges y Celdas de Datos**:
  - DNI: Si existe, se muestra en cápsula monoespaciada `rounded-full bg-gray-100 px-2 py-0.5 font-mono text-xs`; si no existe, renderiza un guion `"—"` ([Líneas 153-157](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/clientes/ClientesPage.jsx#L153-L157)).
  - Total Compras: Badge índigo semibold `rounded-full bg-indigo-50 px-2.5 py-0.5 text-xs font-semibold text-indigo-600` con el contador exacto `c.total_compras` ([Líneas 203-205](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/clientes/ClientesPage.jsx#L203-L205)).

**CA-4: Acciones, Botones y Estados Vacíos (Empty States)**
- **Acción en Fila (Solo Administrador)**:
  - Botón Editar Email: Icono `Edit2` (`text-gray-400 hover:text-indigo-600`), tooltip `"Editar email"` ([Líneas 210-216](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/clientes/ClientesPage.jsx#L210-L216)).
- **Pantalla sin datos (Empty State)** ([Línea 144](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/clientes/ClientesPage.jsx#L144)):
  - Si el filtro de búsqueda no coincide: `"Sin resultados para esa búsqueda"`.
  - Si no hay clientes cargados en el sistema: `"No hay clientes registrados aún"`.
- **Estado de Carga Inicial**:
  - Celda expandida con texto centrado `"Cargando…"` ([Línea 138](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/clientes/ClientesPage.jsx#L138)).

#### Criterios de Aceptación en Formato Gherkin (Comportamiento de UI):
- **Escenario 1**: Ocultamiento de datos privados ante perfil Gerente
  - **Dado que** un usuario con rol `"Gerente"` ingresa al módulo de `"/clientes"`
  - **Cuando** visualiza la tabla de clientes
  - **Entonces** no debe ver las columnas `"Email"` ni `"Acción"`, el placeholder del buscador debe decir `"Buscar por nombre o DNI…"` y no debe mostrarse el pie explicativo sobre edición de correos.

- **Escenario 2**: Edición ágil de correo mediante teclado
  - **Dado que** el usuario Administrador pulsa el botón `"Editar email"` de un cliente
  - **Cuando** escribe un nuevo correo válido en el input y presiona la tecla `Enter`
  - **Entonces** el input inline desaparece, la tabla actualiza el correo inmediatamente y aparece en la cabecera superior el badge verde `"Email actualizado"` durante 3 segundos.

---

---

## 4. Parte III: EPIC-INV — Inventario, Lotes, Bajas, Ajustes y Solicitudes (HU-UI-010 a HU-UI-013)

### Historia de Usuario: [HU-UI-010] Registro e Historial de Entradas de Mercadería
**Archivo fuente verificado:** [`client/src/modules/inventario/InventarioPage.jsx`](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/inventario/InventarioPage.jsx#L1-L721)  
**Clasificación de Evidencia:** `[HECHO]`

**Narrativa:**  
Como Almacenero o Administrador,  
quiero registrar el ingreso de nuevos lotes con generación automática de código y fecha de vencimiento, consultando el historial filtrado por fechas y productos,  
para dar de alta mercadería en el inventario y mantener la trazabilidad de cada proveedor.

#### Criterios de Aceptación (CA) - Interfaz y Comportamiento Visual:

**CA-1: Formulario y Elementos de Entrada**
- **Navegación y Selector de Pestañas**:
  - Breadcrumb: `"Inicio"` (ruta `/dashboard`), Separador: `"/"`, Ítem activo: `"Inventario"` ([Línea 430](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/inventario/InventarioPage.jsx#L430)).
  - Botones de pestaña: `"Entradas"`, `"Bajas"` y `"Ajustes"`. La pestaña activa adopta fondo índigo `bg-[#6366f1] text-white`; las inactivas lucen borde gris suave `border border-gray-200 text-gray-500` ([Líneas 436-465](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/inventario/InventarioPage.jsx#L436-L465)).
- **Formulario "Registrar Entrada" (`tabActiva === 'entradas'`)**:
  - Título del formulario: `"Registrar Entrada"` (`text-gray-700 font-semibold`, [Línea 472](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/inventario/InventarioPage.jsx#L472)).
  - Campo `"Producto"`:
    - Etiqueta: `"Producto"` ([Línea 476](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/inventario/InventarioPage.jsx#L476)).
    - Select con opción inicial: `"Seleccionar..."` ([Línea 483](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/inventario/InventarioPage.jsx#L483)).
    - Restricción visual para rol `Almacenero`: Si el usuario tiene rol Almacenero, el select **únicamente** lista productos sin entradas previas (primera carga de stock). Si ya tienen entradas, se bloquea y se muestra microcopy explicativo: `"Solo se listan productos sin stock registrado todavía (primera carga). Para reponer un producto existente, crea una solicitud de reposición en el módulo Solicitudes."` o `"No hay productos nuevos pendientes de primera carga. Para reponer stock, crea una solicitud de reposición en el módulo Solicitudes."` ([Líneas 316-318, 490-496](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/inventario/InventarioPage.jsx#L316-L496)).
  - Campo `"Proveedor"`:
    - Etiqueta: `"Proveedor"` acompañada de microcopy en línea `"(opcional)"` ([Línea 500](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/inventario/InventarioPage.jsx#L500)).
    - Opción por defecto: `"Sin proveedor registrado"` ([Línea 507](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/inventario/InventarioPage.jsx#L507)).
    - Opciones dinámicas: Formato `"{p.nombre} ({p.ruc})"` ([Línea 510](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/inventario/InventarioPage.jsx#L510)).
  - Campo `"Cantidad"`:
    - Etiqueta: `"Cantidad"` ([Línea 517](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/inventario/InventarioPage.jsx#L517)).
    - Restricción visual: `type="number"`, `min="1"`, required. Bloquea en teclado caracteres no numéricos como `'e'`, `'E'`, `'+'`, `'-'` ([Líneas 520-525](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/inventario/InventarioPage.jsx#L520-L525)).
  - Campo `"Vencimiento"`:
    - Etiqueta: `"Vencimiento"` con asterisco rojo `<span className="text-red-500">*</span>` únicamente si el producto maneja fecha de vencimiento ([Línea 531](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/inventario/InventarioPage.jsx#L531)).
    - Input de fecha con límite inferior en el día actual `min={fechaHoy}` ([Línea 537](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/inventario/InventarioPage.jsx#L537)).
    - Comportamiento no perecedero: Si `productoSeleccionado.maneja_vencimiento === false`, el input se desactiva (`disabled`), se colorea en gris `bg-gray-50 text-gray-400` y muestra el microcopy: `"Este producto no maneja fecha de vencimiento."` ([Líneas 539-544](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/inventario/InventarioPage.jsx#L539-L544)).
  - Campo `"Código de lote"`:
    - Etiqueta: `"Código de lote"` ([Línea 553](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/inventario/InventarioPage.jsx#L553)).
    - Input: Solo lectura y cursor no permitido `readOnly cursor-not-allowed bg-gray-50 font-mono text-gray-600` ([Líneas 557-562](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/inventario/InventarioPage.jsx#L557-L562)).
    - Formato autogenerado: Máscara calculada al cargar `L-YYYYMMDD-HHmmss` con hora local ([Líneas 17-23](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/inventario/InventarioPage.jsx#L17-L23)).

**CA-2: Mensajes de Asistencia, Banners y Retroalimentación**
- **Alerta Preventiva de Vencimiento Próximo**:
  - Si la fecha de vencimiento seleccionada cae a menos de 7 días de hoy (`diasParaVencerEntrada < 7`), se muestra un aviso ámbar debajo del input: `"⚠ Este producto vence muy pronto (en {diasParaVencerEntrada} día(s)). Verifica la fecha."` (`text-xs text-amber-600`, [Líneas 545-549](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/inventario/InventarioPage.jsx#L545-L549)).
- **Validaciones en Formulario (Banner Rojo `bg-red-50 text-red-600`)**:
  - Si falta fecha en producto perecedero: `"La fecha de vencimiento es obligatoria para este producto"` ([Línea 219](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/inventario/InventarioPage.jsx#L219)).
  - Si fecha es anterior a hoy: `"La fecha de vencimiento no puede ser anterior a hoy"` ([Línea 223](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/inventario/InventarioPage.jsx#L223)).
- **Toasts de Notificación (`Toast.jsx`)**:
  - Al completar la entrada: Toast verde `"Entrada registrada correctamente"` ([Línea 237](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/inventario/InventarioPage.jsx#L237)).
  - Al fallar: Toast rojo con mensaje de backend o `"Error al registrar entrada"` ([Línea 251](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/inventario/InventarioPage.jsx#L251)).

**CA-3: Indicadores de Estado, Badges y Tablas**
- **Barra de Filtros del Historial** (`mb-4 flex flex-wrap items-end gap-3 rounded-xl bg-gray-50 p-3`):
  - Etiqueta e icono: `Filter className="h-4 w-4"` `"Filtrar:"` ([Líneas 589-591](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/inventario/InventarioPage.jsx#L589-L591)).
  - Input `"Desde"` (`type="date"`).
  - Input `"Hasta"` (`type="date"`).
  - Select `"Producto"`: Opción inicial `"Todos"` + listado de productos ([Líneas 623-633](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/inventario/InventarioPage.jsx#L623-L633)).
  - Botón `"Aplicar"`: Fondo índigo `bg-[#6366f1] text-white`, icono `Filter` o spinner `Loader2` si filtra ([Líneas 634-641](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/inventario/InventarioPage.jsx#L634-L641)).
  - Botón `"Limpiar"`: Borde gris, icono `X`, visible si existe algún filtro aplicado ([Líneas 642-650](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/inventario/InventarioPage.jsx#L642-L650)).
- **Columnas de la Tabla Historial de Entradas** (Cabecera `bg-[#6366f1] text-white`, [Líneas 662-671](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/inventario/InventarioPage.jsx#L662-L671)):
  1. `"Producto"` (muestra nombre; si procede de solicitud muestra badge morado `"Solicitud #{id}"`; si proviene de ajuste muestra badge ámbar `"Ajuste #{id}"`, [Líneas 678-687](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/inventario/InventarioPage.jsx#L678-L687))
  2. `"Lote"` (código de lote o guion `"—"`)
  3. `"Proveedor"` (nombre de proveedor o guion `"—"`)
  4. `"Cantidad"` (Badge verde `rounded-full bg-green-100 text-green-700` con texto `"+{cantidad} und(s)"`, [Línea 697](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/inventario/InventarioPage.jsx#L697))
  5. `"Costo Unit."` (formato `"S/. {monto}"` o guion `"—"`)
  6. `"Vencimiento"` (fecha o guion `"—"`)
  7. `"Registrado por"` (nombre de usuario)
  8. `"Fecha"` (fecha y hora en formato legible `formatFechaHora(e.createdAt)`)

**CA-4: Acciones, Botones y Estados Vacíos (Empty States)**
- **Botón de Envío del Formulario**:
  - Texto: `"Registrar Entrada"` acompañado de spinner animado `Loader2` si está enviando ([Líneas 574-575](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/inventario/InventarioPage.jsx#L574-L575)).
  - Estilo: Botón esmeralda `bg-[#10b981] hover:bg-emerald-600 text-white font-medium`.
- **Pantalla sin datos (Empty State)**:
  - Título/Texto: `"No hay entradas registradas"` ([Línea 656](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/inventario/InventarioPage.jsx#L656)).
  - Estilo: Contenedor con altura `h-32 items-center justify-center text-sm text-gray-400`.

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

### Historia de Usuario: [HU-UI-011] Bajas de Inventario y Gestión de Productos Vencidos
**Archivo fuente verificado:** [`client/src/modules/inventario/InventarioPage.jsx`](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/inventario/InventarioPage.jsx#L722-L1036)  
**Clasificación de Evidencia:** `[HECHO]`

**Narrativa:**  
Como Almacenero o Administrador,  
quiero identificar de un vistazo qué artículos tienen stock vencido y registrar bajas por merma, daño o expiración seleccionando el lote afectado,  
para sanear el inventario disponible y asegurar que no se vendan productos no aptos.

#### Criterios de Aceptación (CA) - Interfaz y Comportamiento Visual:

**CA-1: Formulario y Elementos de Entrada**
- **Panel Superior de Productos Vencidos (`productosConVencido.length > 0`)**:
  - Contenedor rojo suave: `rounded-2xl border border-red-100 bg-red-50 p-4` ([Línea 726](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/inventario/InventarioPage.jsx#L726)).
  - Encabezado con icono `AlertTriangle`: `"{N} producto(s) con stock vencido"` (`text-sm font-semibold text-red-700`, [Líneas 727-730](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/inventario/InventarioPage.jsx#L727-L730)).
  - Botones tipo píldora interactivos por producto: Texto literal `"{p.nombre} - {p.marca} ({p.stockVencido} vencida(s))"`. Al pulsar un botón, se precarga automáticamente el producto en el formulario y se fija el motivo en `"Vencido"` ([Líneas 732-745](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/inventario/InventarioPage.jsx#L732-L745)).
  - Microcopy inferior: `"Haz clic en un producto para seleccionarlo abajo y elegir su lote vencido en \"Lote\"."` (`text-xs text-red-600`, [Línea 748](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/inventario/InventarioPage.jsx#L748)).
- **Formulario "Registrar Baja" (`tabActiva === 'bajas'`)**:
  - Título: `"Registrar Baja"` ([Línea 755](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/inventario/InventarioPage.jsx#L755)).
  - Campo `"Producto"`: Select con formato `"{p.nombre} - {p.marca} (stock: {p.stock})"` ([Líneas 760-772](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/inventario/InventarioPage.jsx#L760-L772)).
  - Campo `"Lote"`:
    - Etiqueta dinámica: Si motivo es `'Dañado'`, muestra asterisco rojo `<span className="text-red-500">*</span>`; en otros motivos muestra `"(opcional)"` ([Líneas 776-781](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/inventario/InventarioPage.jsx#L776-L781)).
    - Opción por defecto según motivo:
      - Si motivo === 'Dañado': `"Selecciona el lote dañado..."` ([Línea 792](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/inventario/InventarioPage.jsx#L792)).
      - Si motivo === 'Vencido': `"Automático (solo lotes vencidos)"` ([Línea 794](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/inventario/InventarioPage.jsx#L794)).
      - Otros motivos: `"Automático (solo stock vigente, el que vence antes primero)"` ([Línea 795](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/inventario/InventarioPage.jsx#L795)).
    - Filtrado estricto de opciones de lote:
      - Para motivo `"Vencido"`: Solo lista lotes vencidos con prefijo `"⚠ VENCIDO — "` ([Líneas 342, 799](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/inventario/InventarioPage.jsx#L342-L799)).
      - Para cualquier otro motivo: Solo lista lotes vigentes; los vencidos se excluyen automáticamente para evitar reclasificaciones erróneas ([Línea 344](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/inventario/InventarioPage.jsx#L344)).
    - Microcopy bajo el select:
      - Si se elige un lote vencido: `"⚠ Este lote ya está vencido — la baja se descontará únicamente de él."` ([Línea 809](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/inventario/InventarioPage.jsx#L809)).
      - Si motivo es 'Dañado' y no hay lote: `"Un daño afecta un lote puntual: elige cuál, para no descontar por error de uno sano. Los lotes ya vencidos no aparecen acá — esos se dan de baja con el motivo \"Vencido\"."` (`text-red-500`, [Línea 814](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/inventario/InventarioPage.jsx#L814)).
  - Campo `"Cantidad"`:
    - Comportamiento para motivo `"Vencido"`: No permite digitación manual. Renderiza una caja gris bloqueada: `"{cantidadVencidaEfectiva} unidad(es) — todo lo vencido"` acompañada del microcopy: `"Con este motivo se da de baja todo lo vencido{loteSeleccionado ? ' de este lote' : ''}, no una parte."` ([Líneas 828-836](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/inventario/InventarioPage.jsx#L828-L836)).
    - Comportamiento para otros motivos: Input editable con `min="1"`, limitador superior `max={loteSeleccionado.cantidad_restante}` y texto guía `"Máximo en este lote: {restante}"` ([Líneas 839-852](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/inventario/InventarioPage.jsx#L839-L852)).
  - Campo `"Motivo"` (Select):
    - Opciones literales: `"Vencido"`, `"Dañado"`, `"Robo o faltante"`, `"Consumo interno"`, `"Error de registro"`, `"Otro"` ([Líneas 13, 858-866](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/inventario/InventarioPage.jsx#L13-L866)).
  - Campo `"Detalle"`:
    - Etiqueta: `"Detalle (opcional)"`, placeholder: `"Ej: Lote vencido el 15/06"` ([Líneas 869-878](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/inventario/InventarioPage.jsx#L869-L878)).

**CA-2: Mensajes de Asistencia, Banners y Retroalimentación**
- **Validaciones en Formulario de Baja (Banner Rojo `bg-red-50 text-red-600`)**:
  - Si el motivo es Dañado sin lote seleccionado: `"Para dar de baja un producto dañado debes elegir el lote específico afectado"` ([Línea 263](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/inventario/InventarioPage.jsx#L263)).
  - Si se intenta dar de baja por otro motivo un lote vencido: `"El lote seleccionado ya está vencido. Usa el motivo \"Vencido\" para darlo de baja."` ([Línea 267](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/inventario/InventarioPage.jsx#L267)).
  - Si se elige motivo Vencido pero el producto no tiene stock caducado: `"Este producto no tiene stock vencido disponible para dar de baja"` ([Línea 273](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/inventario/InventarioPage.jsx#L273)).
- **Toasts de Notificación (`Toast.jsx`)**:
  - Toast de éxito verde: `"Baja registrada correctamente"` ([Línea 286](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/inventario/InventarioPage.jsx#L286)).

**CA-3: Indicadores de Estado, Badges y Tablas**
- **Columnas de la Tabla Historial de Bajas** (Cabecera `bg-[#6366f1] text-white`, [Líneas 978-986](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/inventario/InventarioPage.jsx#L978-L986)):
  1. `"Producto"` (muestra nombre; si corresponde a devolución en caja muestra badge morado `"Devolución venta #{id}"`, [Líneas 993-995](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/inventario/InventarioPage.jsx#L993-L995))
  2. `"Lote(s)"` (lista vertical de códigos de lote involucrados con cantidad descontada entre paréntesis, ej: `L-20261003-100000 (5)`)
  3. `"Cantidad"` (Badge rojo `rounded-full bg-red-100 text-red-700` con texto `"-{cantidad} und(s)"`, [Línea 1014](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/inventario/InventarioPage.jsx#L1014))
  4. `"Motivo"` (texto del motivo y detalle opcional en gris fino debajo)
  5. `"Registrado por"` (nombre de usuario)
  6. `"Fecha"` (fecha y hora legible)

**CA-4: Acciones, Botones y Estados Vacíos (Empty States)**
- **Botón de Envío**:
  - Texto: `"Registrar Baja"` con icono `Loader2` animado si está enviando ([Líneas 890-891](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/inventario/InventarioPage.jsx#L890-L891)).
  - Estilo: Destructivo rojo `bg-[#ef4444] hover:bg-red-600 text-white`.
- **Filtros de Historial**: Inputs `"Desde"`, `"Hasta"`, select `"Producto"`, botones `"Aplicar"` y `"Limpiar"` ([Líneas 909-966](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/inventario/InventarioPage.jsx#L909-L966)).
- **Pantalla sin datos (Empty State)**:
  - Título/Texto: `"No hay bajas registradas"` ([Línea 972](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/inventario/InventarioPage.jsx#L972)).

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

### Historia de Usuario: [HU-UI-012] Auditoría de Conteo Físico y Ajustes de Stock
**Archivo fuente verificado:** [`client/src/modules/inventario/InventarioPage.jsx`](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/inventario/InventarioPage.jsx#L1037-L1267)  
**Clasificación de Evidencia:** `[HECHO]`

**Narrativa:**  
Como Administrador o Almacenero,  
quiero registrar conteos físicos periódicos con cálculo automático de discrepancias (sobrantes/faltantes) y asignación obligatoria de vencimiento en excedentes,  
para conciliar el inventario contable contra la existencia física real en tienda.

#### Criterios de Aceptación (CA) - Interfaz y Comportamiento Visual:

**CA-1: Formulario y Elementos de Entrada**
- **Formulario "Registrar Ajuste (Conteo Físico)" (`tabActiva === 'ajustes'`)**:
  - Título: `"Registrar Ajuste (Conteo Físico)"` ([Línea 1041](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/inventario/InventarioPage.jsx#L1041)).
  - Campo `"Producto"`: Select con formato `"{nombre} - {marca} (stock: {stock})"` ([Líneas 1046-1058](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/inventario/InventarioPage.jsx#L1046-L1058)).
  - Campo `"Stock actual del sistema"`: Input deshabilitado de solo lectura que refleja el inventario registrado `"{stock} und(s)"` o `"—"` ([Líneas 1061-1067](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/inventario/InventarioPage.jsx#L1061-L1067)).
  - Campo `"Cantidad Contada"`: Input numérico, `min="0"`, required ([Líneas 1070-1080](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/inventario/InventarioPage.jsx#L1070-L1080)).
  - Campo Condicional `"Vencimiento del sobrante"` (solo se renderiza en pantalla si `diferenciaAjuste > 0`):
    - Etiqueta: `"Vencimiento del sobrante"` con asterisco rojo `<span className="text-red-500">*</span>` si el producto es perecedero ([Línea 1084](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/inventario/InventarioPage.jsx#L1084)).
    - Input de fecha con `min={fechaHoy}`. Si no maneja vencimiento, queda deshabilitado con microcopy: `"Este producto no maneja fecha de vencimiento."` ([Líneas 1086-1097](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/inventario/InventarioPage.jsx#L1086-L1097)).
  - Campo `"Observaciones"`: Etiqueta `"Observaciones (opcional)"`, placeholder `"Ej: Conteo mensual de anaquel"`, ocupa ancho de 2 columnas ([Líneas 1101-1111](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/inventario/InventarioPage.jsx#L1101-L1111)).

**CA-2: Mensajes de Asistencia, Banners y Retroalimentación**
- **Cálculo Reactivo de Diferencia de Inventario**:
  - Si Cantidad Contada === Stock Sistema: Mensaje neutral en gris: `"Sin diferencia — no se requiere ajuste"` ([Línea 1115](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/inventario/InventarioPage.jsx#L1115)). El botón `"Registrar Ajuste"` se deshabilita visualmente ([Línea 1134](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/inventario/InventarioPage.jsx#L1134)).
  - Si Cantidad Contada > Stock Sistema: Badge verde grande: `"Sobrante: +{diferenciaAjuste} und(s)"` (`rounded-full bg-green-100 px-3 py-1.5 text-sm font-medium text-green-700`, [Líneas 1117-1119](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/inventario/InventarioPage.jsx#L1117-L1119)).
  - Si Cantidad Contada < Stock Sistema: Badge rojo grande: `"Faltante: {diferenciaAjuste} und(s)"` (`rounded-full bg-red-100 px-3 py-1.5 text-sm font-medium text-red-700`, [Líneas 1121-1123](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/inventario/InventarioPage.jsx#L1121-L1123)).
- **Validaciones en Formulario de Ajuste (Banner Rojo `bg-red-50 text-red-600`)**:
  - Si existe sobrante perecedero sin fecha: `"La fecha de vencimiento es obligatoria para este producto"` ([Línea 388](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/inventario/InventarioPage.jsx#L388)).
  - Si la fecha de sobrante es retroactiva: `"La fecha de vencimiento no puede ser anterior a hoy"` ([Línea 392](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/inventario/InventarioPage.jsx#L392)).
- **Toasts de Notificación**:
  - Toast de éxito verde: `"Ajuste registrado correctamente"` ([Línea 404](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/inventario/InventarioPage.jsx#L404)).

**CA-3: Indicadores de Estado, Badges y Tablas**
- **Columnas de la Tabla Historial de Ajustes** (Cabecera `bg-[#6366f1] text-white`, [Líneas 1225-1234](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/inventario/InventarioPage.jsx#L1225-L1234)):
  1. `"Producto"`
  2. `"Stock Sistema"`
  3. `"Contado"`
  4. `"Diferencia"` (Badge semántico: verde `"+{dif} und(s)"` si es positiva; rojo `"{dif} und(s)"` si es negativa, [Líneas 1244-1248](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/inventario/InventarioPage.jsx#L1244-L1248))
  5. `"Observaciones"` (texto o guion `"—"`)
  6. `"Registrado por"` (nombre de usuario)
  7. `"Fecha"` (fecha y hora legible)

**CA-4: Acciones, Botones y Estados Vacíos (Empty States)**
- **Botón de Envío**:
  - Texto: `"Registrar Ajuste"` con icono `Loader2` animado si está enviando ([Líneas 1137-1138](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/inventario/InventarioPage.jsx#L1137-L1138)).
  - Estilo: Ámbar de advertencia operativa `bg-amber-500 hover:bg-amber-600 text-white`.
  - Estado: Deshabilitado si no hay diferencia (`diferenciaAjuste === 0`) o si está enviando ([Línea 1134](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/inventario/InventarioPage.jsx#L1134)).
- **Pantalla sin datos (Empty State)**:
  - Título/Texto: `"No hay ajustes registrados"` ([Línea 1219](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/inventario/InventarioPage.jsx#L1219)).

#### Criterios de Aceptación en Formato Gherkin (Comportamiento de UI):
- **Escenario 1**: Detección de sobrante físico y despliegue de fecha de expiración
  - **Dado que** un producto perecedero tiene un stock en sistema de 20 unidades
  - **Cuando** el usuario ingresa `"25"` en `"Cantidad Contada"`
  - **Entonces** se muestra de inmediato el badge verde `"Sobrante: +5 und(s)"` y aparece dinámicamente el campo obligatorio con asterisco rojo `"Vencimiento del sobrante *"`.

- **Escenario 2**: Bloqueo de ajuste sin discrepancia
  - **Dado que** el stock en sistema es de 10 unidades
  - **Cuando** el usuario digita `"10"` en `"Cantidad Contada"`
  - **Entonces** el sistema muestra `"Sin diferencia — no se requiere ajuste"` y el botón `"Registrar Ajuste"` se desactiva (`disabled`), impidiendo la creación de transacciones nulas en el kardex.

---

### Historia de Usuario: [HU-UI-013] Ciclo de Vida de Solicitudes de Reposición
**Archivo fuente verificado:** [`client/src/modules/solicitudes/SolicitudesPage.jsx`](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/solicitudes/SolicitudesPage.jsx#L1-L713)  
**Clasificación de Evidencia:** `[HECHO]`

**Narrativa:**  
Como Almacenero, Gerente o Administrador,  
quiero gestionar el flujo de solicitudes de reabastecimiento (creación, aprobación, rechazo con motivo y completado al recibir mercadería),  
para coordinar formalmente las compras con los proveedores sin generar entradas descontroladas.

#### Criterios de Aceptación (CA) - Interfaz y Comportamiento Visual:

**CA-1: Formulario y Elementos de Entrada**
- **Cabecera y Barra de Filtros por Estado**:
  - Breadcrumb: `"Inicio"` > `"Solicitudes"` ([Línea 520](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/solicitudes/SolicitudesPage.jsx#L520)).
  - Título principal: `"Solicitudes de Reposición"` (`text-2xl font-bold text-gray-800`, [Línea 523](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/solicitudes/SolicitudesPage.jsx#L523)).
  - Botón `"Nueva Solicitud"`: Icono `Plus`, visible solo para Almacenero y Administrador (`puedeCrear`, [Líneas 511, 525-532](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/solicitudes/SolicitudesPage.jsx#L511-L532)).
  - Filtro por Estado: 5 botones tipo píldora: `"Todos"`, `"Pendiente"`, `"Aprobada"`, `"Rechazada"`, `"Completada"`. El estado activo adopta fondo índigo `bg-[#6366f1] text-white` ([Líneas 13, 540-553](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/solicitudes/SolicitudesPage.jsx#L13-L553)).
- **Modal "Nueva Solicitud de Reposición" (`ModalCrearSolicitud`)**:
  - Título: `"Nueva Solicitud de Reposición"` ([Línea 85](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/solicitudes/SolicitudesPage.jsx#L85)).
  - Campo `"Producto"`: Select con formato `"{nombre} - {marca} (Stock: {stock})"`. Al seleccionarlo precarga automáticamente el proveedor habitual registrado ([Líneas 50-56, 91-101](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/solicitudes/SolicitudesPage.jsx#L50-L101)).
  - Campo `"Cantidad solicitada"`: Input numérico con `min="1"`, required ([Líneas 104-110](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/solicitudes/SolicitudesPage.jsx#L104-L110)).
  - Campo `"Proveedor sugerido (opcional)"`: Select con `"Seleccionar..."` + proveedores activos. Si se elige un proveedor distinto al habitual, se muestra advertencia ámbar: `"El proveedor habitual de este producto es {nombre}. Puedes continuar igual si corresponde."` ([Líneas 113-128](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/solicitudes/SolicitudesPage.jsx#L113-L128)).
- **Modal "Aprobar Solicitud" (`ModalAprobar`)**:
  - Panel informativo: Muestra `"Producto: {nombre} - {marca}"` y `"Cantidad solicitada: {cantidad} und(s)"` ([Líneas 202-205](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/solicitudes/SolicitudesPage.jsx#L202-L205)).
  - Campo `"Proveedor (opcional)"`: Select con `"Sin proveedor registrado"` + proveedores activos ([Líneas 208-220](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/solicitudes/SolicitudesPage.jsx#L208-L220)).
  - Campo `"Fecha estimada de llegada"`: Date input con límite inferior en hoy `min={fechaHoy}`, required ([Líneas 228-235](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/solicitudes/SolicitudesPage.jsx#L228-L235)).
- **Modal "Rechazar Solicitud" (`ModalRechazar`)**:
  - Panel informativo: Muestra producto y cantidad solicitada ([Líneas 294-297](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/solicitudes/SolicitudesPage.jsx#L294-L297)).
  - Campo `"Motivo del rechazo"`: Textarea con 4 filas fijas (`rows={4} resize-none`), placeholder `"Explica el motivo del rechazo..."`, required ([Líneas 300-308](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/solicitudes/SolicitudesPage.jsx#L300-L308)).
- **Modal "Registrar Entrada" al Completar (`ModalCompletar`)**:
  - Panel informativo: Producto, cantidad y proveedor pactado ([Líneas 392-398](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/solicitudes/SolicitudesPage.jsx#L392-L398)).
  - Campo `"Cantidad recibida"`: Input deshabilitado en solo lectura que refleja la cantidad solicitada con microcopy: `"Siempre igual a la cantidad solicitada"` ([Líneas 402-414](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/solicitudes/SolicitudesPage.jsx#L402-L414)).
  - Campo `"Fecha de vencimiento"`: Input de fecha con asterisco rojo si es perecedero. Si vence en menos de 7 días, alerta ámbar: `"⚠ Este producto vence muy pronto (en {diasParaVencer} día(s)). Verifica la fecha."` ([Líneas 417-436](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/solicitudes/SolicitudesPage.jsx#L417-L436)).

**CA-2: Mensajes de Asistencia, Banners y Retroalimentación**
- **Validaciones en Modales**:
  - En Aprobación: Si la fecha estimada es retroactiva: `"La fecha estimada no puede ser anterior a hoy"` ([Línea 173](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/solicitudes/SolicitudesPage.jsx#L173)).
  - En Completar: Si falta fecha de vencimiento obligatoria: `"La fecha de vencimiento es obligatoria para este producto"` ([Línea 357](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/solicitudes/SolicitudesPage.jsx#L357)).
- **Toasts de Notificación (`Toast.jsx`)**:
  - Al crear: `"Solicitud creada correctamente"` ([Línea 661](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/solicitudes/SolicitudesPage.jsx#L661)).
  - Al aprobar: `"Solicitud aprobada correctamente"` ([Línea 675](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/solicitudes/SolicitudesPage.jsx#L675)).
  - Al rechazar: `"Solicitud rechazada correctamente"` ([Línea 687](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/solicitudes/SolicitudesPage.jsx#L687)).
  - Al completar: `"Mercadería registrada y stock actualizado correctamente"` o `"Mercadería registrada. Se creó una nueva solicitud pendiente por {N} und(s) restante(s)."` si hubo entrega parcial ([Líneas 702-704](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/solicitudes/SolicitudesPage.jsx#L702-L704)).

**CA-3: Indicadores de Estado, Badges y Tablas**
- **Columnas de la Tabla de Solicitudes** (Cabecera `bg-[#6366f1] text-white`, [Líneas 564-572](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/solicitudes/SolicitudesPage.jsx#L564-L572)):
  1. `"Producto"` (`{nombre} - {marca}`)
  2. `"Cantidad"` (`{cantidad} und(s)`)
  3. `"Estado"` (Badge semántico)
  4. `"Proveedor"` (nombre o guion largo `&mdash;`)
  5. `"Fecha Est."` (fecha formateada o guion largo `&mdash;`)
  6. `"Solicitante"` (nombre del usuario creador)
  7. `"Aprobado por"` (nombre de quien aprobó o guion `"—"`)
  8. `"Acciones"`
- **Badges Semánticos de Estado** (`BADGE_COLORS`, [Líneas 15-20, 582-587](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/solicitudes/SolicitudesPage.jsx#L15-L587)):
  - `Pendiente`: Fondo ámbar `bg-[#fef3c7] text-[#92400e]`
  - `Aprobada`: Fondo verde `bg-[#d1fae5] text-[#065f46]`
  - `Rechazada`: Fondo rojo `bg-[#fee2e2] text-[#991b1b]`. En la celda, debajo del badge, se imprime en letra cursiva gris el motivo del rechazo: `<p className="mt-1 text-xs text-gray-400 italic">{s.motivo_rechazo}</p>`.
  - `Completada`: Fondo gris `bg-[#f3f4f6] text-[#6b7280]`

**CA-4: Acciones y Botones por Fila según Estado y Rol**
- **Acciones Disponibles por Fila** ([Líneas 612-646](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/solicitudes/SolicitudesPage.jsx#L612-L646)):
  - En estado `Pendiente` (solo Administrador y Gerente):
    - Botón Aprobar: Icono `CheckCircle` (`h-5 w-5 text-[#10b981] hover:bg-green-50`), tooltip `"Aprobar"`.
    - Botón Rechazar: Icono `XCircle` (`h-5 w-5 text-[#ef4444] hover:bg-red-50`), tooltip `"Rechazar"`.
  - En estado `Aprobada` (solo Almacenero y Administrador):
    - Botón Completar (Recibir Mercadería): Icono `PackageCheck` (`h-5 w-5 text-[#6366f1] hover:bg-indigo-50`), tooltip `"Completar"`.
  - En estado `Completada`: Icono estático de verificación `Check` (`text-gray-400`), tooltip `"Completada"`.
- **Protección Antidoble Clic**: Todos los botones de submit (`ModalCrearSolicitud`, `ModalAprobar`, `ModalRechazar`, `ModalCompletar`) implementan `enviandoRef = useRef(false)` para descartar dobles pulsaciones en el mismo ciclo ([Líneas 30, 151, 257, 332](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/solicitudes/SolicitudesPage.jsx#L30-L332)).
- **Pantalla sin datos (Empty State)**:
  - Título/Texto: `"No hay solicitudes registradas"` ([Línea 558](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/solicitudes/SolicitudesPage.jsx#L558)).

#### Criterios de Aceptación en Formato Gherkin (Comportamiento de UI):
- **Escenario 1**: Segregación de funciones en aprobación de compras
  - **Dado que** una solicitud de reposición se encuentra en estado `"Pendiente"`
  - **Cuando** un usuario con rol `"Almacenero"` visualiza la tabla
  - **Entonces** no debe ver los botones de `"Aprobar"` (icono verde) ni `"Rechazar"` (icono rojo), los cuales están reservados para `"Administrador"` y `"Gerente"`.

- **Escenario 2**: Registro de entrada a almacén desde solicitud aprobada
  - **Dado que** una solicitud está en estado `"Aprobada"`
  - **Cuando** el usuario con rol `"Almacenero"` presiona el botón con icono `PackageCheck` (`"Completar"`)
  - **Entonces** se despliega el modal `"Registrar Entrada"` con la cantidad solicitada bloqueada en solo lectura, se le exige la fecha de expiración si el producto es perecedero y al guardar la solicitud transiciona al estado `"Completada"`.

---

---

## 5. Parte IV: EPIC-VEN — Terminal POS, Facturación SUNAT, Historial y Caja (HU-UI-014 a HU-UI-017)

### Historia de Usuario: [HU-UI-014] Terminal de Punto de Venta (POS) y Facturación Electrónica
**Archivo fuente verificado:** [`client/src/modules/ventas/VentasPage.jsx`](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/ventas/VentasPage.jsx#L1-L1274)  
**Clasificación de Evidencia:** `[HECHO]`

**Narrativa:**  
Como Cajero o Administrador,  
quiero operar una terminal de ventas rápida con escáner de código de barras, selección de comprobantes con validación RENIEC/SUNAT y registro de pagos en efectivo o Yape/IziPay,  
para registrar transacciones de clientes asegurando la integridad del stock y la caja.

#### Criterios de Aceptación (CA) - Interfaz y Comportamiento Visual:

**CA-1: Formulario, Escáner y Elementos de Venta**
- **Encabezado y Control de Acceso**:
  - Título principal: `"Nueva Venta"` (`text-2xl font-bold text-gray-800`, [Línea 668](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/ventas/VentasPage.jsx#L668)).
  - Badge `"Modo consulta"` en encabezado si el rol es `Gerente` (`bg-amber-100 text-amber-700`, [Línea 672](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/ventas/VentasPage.jsx#L672)).
  - Enlace rápido superior al historial: `<FileText className="h-4 w-4" /> Historial de ventas` hacia `/ventas/historial` ([Línea 678](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/ventas/VentasPage.jsx#L678)).
- **Banner de Bloqueo por Falta de Turno**:
  - Si el usuario no tiene turno abierto (`sinTurno === true`), se renderiza un banner ámbar superior:  
    `"No puedes realizar ventas porque no tienes un turno de caja abierto. Abre un turno para continuar."` ([Línea 689](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/ventas/VentasPage.jsx#L689)).  
    Incluye botón enlace directo `"Ir a Mi Caja"` que redirige a `/caja` ([Línea 694](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/ventas/VentasPage.jsx#L694)).
- **Lector / Escáner de Código de Barras**:
  - Contenedor con borde verde interactivo cuando tiene foco (`border-emerald-400 ring-2 ring-emerald-100`, [Línea 709](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/ventas/VentasPage.jsx#L709)).
  - Placeholder dinámico: `"Escanea o escribe el código..."` si el input está enfocado, o `"Haz clic aquí para escanear un producto"` si no tiene foco ([Líneas 724-725](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/ventas/VentasPage.jsx#L724-L725)).
  - Indicador de estado del escáner:
    - Si está consultando: `<Loader2 className="h-4 w-4 animate-spin text-indigo-500" />` ([Línea 739](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/ventas/VentasPage.jsx#L739)).
    - Si está enfocado: Punto verde parpadeante `<span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />` y texto `"Listo para escanear"` ([Línea 743](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/ventas/VentasPage.jsx#L743)).
- **Tabla del Carrito de Compras**:
  - Columnas de cabecera: `"Producto"`, `"Precio Unit."`, `"Cantidad"`, `"Subtotal"`, `"Acciones"` ([Líneas 753-757](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/ventas/VentasPage.jsx#L753-L757)).
  - Estado vacío: Ícono `<ShoppingCart className="mx-auto h-8 w-8 text-gray-300" />` y texto `"Escanea un producto para agregarlo al carrito"` ([Líneas 763-764](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/ventas/VentasPage.jsx#L763-L764)).
  - Control de cantidad en cada fila:
    - Botón decrementar `<Minus className="h-3 w-3" />` ([Línea 783](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/ventas/VentasPage.jsx#L783)).
    - Input numérico con `min="1"` y `max={stockVendible}` ([Líneas 786-791](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/ventas/VentasPage.jsx#L786-L791)).
    - Botón incrementar `<Plus className="h-3 w-3" />` deshabilitado si `item.cantidad >= stockVendible` ([Línea 796](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/ventas/VentasPage.jsx#L796)).
    - Botón eliminar fila con ícono de papelera roja `<Trash2 className="h-4 w-4" />` ([Línea 803](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/ventas/VentasPage.jsx#L803)).
  - Total del carrito: `"Total: S/. {total.toFixed(2)}"` (`text-right text-xl font-bold text-gray-800`, [Línea 815](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/ventas/VentasPage.jsx#L815)).
- **Catálogo Plegable de Productos**:
  - Botón colapsable: `<ChevronDown / ChevronUp className="h-4 w-4" />` con etiqueta interactiva `"Mostrar lista de productos"` u `"Ocultar lista de productos"` ([Líneas 820-825](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/ventas/VentasPage.jsx#L820-L825)).
  - Input de búsqueda: Placeholder `"Buscar producto por nombre o marca..."` ([Línea 836](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/ventas/VentasPage.jsx#L836)).
  - Selector de categoría: Opción por defecto `"Todas las categorías"` ([Línea 845](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/ventas/VentasPage.jsx#L845)).
  - Contador de resultados: `"{N} producto(s)"` ([Línea 851](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/ventas/VentasPage.jsx#L851)).
  - Cuadrícula de 5 columnas con tarjetas de producto ([Línea 855](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/ventas/VentasPage.jsx#L855)):
    - Mensaje sin resultados: `"No se encontraron productos"` ([Línea 858](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/ventas/VentasPage.jsx#L858)).
    - Badges semánticos por tarjeta:
      - Stock vencido total: `"Vencido"` (`text-red-500 font-medium`, tooltip `"Todo el stock de este producto está vencido"`, [Líneas 882, 891](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/ventas/VentasPage.jsx#L882-L891)).
      - Sin stock disponible: `"Sin stock"` (`text-red-400 font-medium`, [Línea 893](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/ventas/VentasPage.jsx#L893)).
      - Stock con vencidos parciales: `"⚠ {N} vigente(s)"` (`text-amber-600 font-medium`, fondo ámbar claro `bg-amber-50`, [Líneas 874, 895](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/ventas/VentasPage.jsx#L874-L895)).
      - Stock regular: `"{stock} ud."` (`text-gray-400`, [Línea 897](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/ventas/VentasPage.jsx#L897)).
    - Badge superior derecho cuando ya está en carrito con la cantidad agregada ([Línea 901](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/ventas/VentasPage.jsx#L901)).
  - Paginación del catálogo (25 ítems por página): Botón `"Anterior"`, botones numéricos y botón `"Siguiente"` ([Líneas 918-940](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/ventas/VentasPage.jsx#L918-L940)).

**CA-2: Panel Lateral de Cobro y Facturación**
- **Panel Modo Consulta (Gerente)**:
  - Tarjeta amarilla/ámbar con ícono `🔍`, título `"Modo consulta"` y microcopy `"Puedes navegar los productos, pero no realizar ventas."` ([Líneas 952-956](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/ventas/VentasPage.jsx#L952-L956)).
- **Resumen de Venta**:
  - Título: `"Resumen de Venta"` ([Línea 964](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/ventas/VentasPage.jsx#L964)).
  - Fila `"Subtotal"` y fila destacada `"Total"` con formato `S/. {total.toFixed(2)}` ([Líneas 969-974](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/ventas/VentasPage.jsx#L969-L974)).
  - Selector `"Tipo de comprobante"`:
    - Opciones: `<option value="BoletaSimple">Boleta Simple</option>`, `<option value="BoletaDNI">Boleta con DNI</option>`, `<option value="Factura">Factura</option>` ([Líneas 987-989](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/ventas/VentasPage.jsx#L987-L989)).
- **Campos para Boleta con DNI**:
  - Etiqueta: `DNI *` ([Línea 995](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/ventas/VentasPage.jsx#L995)).
  - Input: Placeholder `"12345678"`, `maxLength={8}`, sanitizado solo números ([Líneas 1000-1004](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/ventas/VentasPage.jsx#L1000-L1004)).
  - Botón de consulta RENIEC con título `"Consultar RENIEC"` e ícono `Search` o spinner `Loader2` ([Líneas 1010-1014](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/ventas/VentasPage.jsx#L1010-L1014)).
  - Microcopy de error: `"El DNI debe tener 8 dígitos"` si se ingresa menos de 8 caracteres ([Línea 1017](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/ventas/VentasPage.jsx#L1017)).
  - Resultado exitoso: Nombre completo de la persona en esmeralda `text-emerald-600 font-medium` ([Línea 1020](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/ventas/VentasPage.jsx#L1020)).
  - Advertencia de coincidencia: `"⚠ Este DNI ya estaba registrado con otro nombre. Verifica que sea la persona correcta."` (`text-amber-600`, [Líneas 1023-1025](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/ventas/VentasPage.jsx#L1023-L1025)).
- **Campos para Factura**:
  - Etiqueta: `RUC *` ([Línea 1033](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/ventas/VentasPage.jsx#L1033)).
  - Input: Placeholder `"20123456789"`, `maxLength={11}`, solo dígitos ([Líneas 1045-1047](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/ventas/VentasPage.jsx#L1045-L1047)).
  - Botón consulta SUNAT con título `"Consultar SUNAT"` e ícono `Search` / `Loader2` ([Líneas 1053-1057](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/ventas/VentasPage.jsx#L1053-L1057)).
  - Microcopy de error: `"El RUC debe tener 11 dígitos"` ([Línea 1060](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/ventas/VentasPage.jsx#L1060)).
  - Feedback exitoso SUNAT: `"✓ {razon_social} — {estado} / {condicion}"` ([Línea 1064](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/ventas/VentasPage.jsx#L1064)).
  - Campos `"Razón Social *"` y `"Dirección *"`:
    - Estado normal: Deshabilitados (`disabled`), fondo gris `bg-gray-50 text-gray-500`, placeholder `"Se completa al verificar el RUC con SUNAT"` ([Líneas 1074-1076, 1084-1086](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/ventas/VentasPage.jsx#L1074-L1086)).
    - Modo Offline Activado (caída de SUNAT o 503): Se activan con borde ámbar `border-amber-400 bg-white` y placeholders `"Ingrese Razón Social"` e `"Ingrese Dirección"` ([Líneas 1075-1076, 1085-1086](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/ventas/VentasPage.jsx#L1075-L1086)).
- **Selector de Método de Pago**:
  - Opciones: `<option value="Efectivo">Efectivo</option>`, `<option value="Yape">Yape</option>` ([Líneas 1098-1099](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/ventas/VentasPage.jsx#L1098-L1099)).
- **Flujo de Pago en Efectivo**:
  - Input con ícono `Banknote`: Placeholder `"Monto recibido"` ([Líneas 1195, 1209](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/ventas/VentasPage.jsx#L1195-L1209)).
  - Sanitización estricta: Bloquea teclas `'e'`, `'E'`, `'+'`, `'-'`, limita a 6 dígitos enteros y 2 decimales ([Líneas 18-38, 1201-1207](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/ventas/VentasPage.jsx#L18-L1207)).
  - Cálculo de Vuelto / Faltante en tiempo real:
    - Si `vuelto >= 0`: Etiqueta `"Vuelto"` y monto en verde `"S/. {vuelto.toFixed(2)}"` ([Líneas 1216-1217](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/ventas/VentasPage.jsx#L1216-L1217)).
    - Si `vuelto < 0`: Etiqueta `"Faltan"` y monto en rojo negrita `"S/. {Math.abs(vuelto).toFixed(2)}"` ([Líneas 1221-1222](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/ventas/VentasPage.jsx#L1221-L1222)).
  - Alerta de Vuelto Insuficiente en Caja:
    - Banner rojo con ícono `AlertTriangle`: `"Monto en caja insuficiente para el vuelto. Disponible: S/. {efectivoDisponible.toFixed(2)}"` ([Líneas 1227-1230](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/ventas/VentasPage.jsx#L1227-L1230)).
- **Flujo de Pago con Yape / Plin (POS Físico IziPay en 2 Pasos)**:
  - **Paso 1 (`pasoYape === 'inicio'`)**:
    - Contenedor con borde discontinuo violeta `border-dashed border-violet-200 bg-violet-50` ([Línea 1115](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/ventas/VentasPage.jsx#L1115)).
    - Título: Indicador `"1"` con texto `"Generar cobro en IziPay"` ([Líneas 1117-1118](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/ventas/VentasPage.jsx#L1117-L1118)).
    - Instrucción: `"Abre la app IziPay en el POS, ingresa el monto exacto y genera el QR de cobro."` ([Líneas 1120-1122](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/ventas/VentasPage.jsx#L1120-L1122)).
    - Monto destacado: Tarjeta blanca con `"Monto a ingresar en IziPay"` y número grande `"S/. {total.toFixed(2)}"` (`text-2xl font-bold text-violet-700`, [Líneas 1124-1126](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/ventas/VentasPage.jsx#L1124-L1126)).
    - Botón de avance: `<QrCode className="h-4 w-4" /> Ya generé el cobro en IziPay` ([Líneas 1131-1133](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/ventas/VentasPage.jsx#L1131-L1133)).
  - **Paso 2 (`pasoYape === 'mostrando'`)**:
    - Título: Indicador `"2"` con texto `"Cliente escanea y paga"` ([Líneas 1138-1139](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/ventas/VentasPage.jsx#L1138-L1139)).
    - Instrucción: `"Muestra la pantalla de IziPay al cliente para que escanee con Yape o Plin y pague S/. {total.toFixed(2)}. Verifica en la app que el pago se haya completado antes de confirmar."` ([Líneas 1141-1143](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/ventas/VentasPage.jsx#L1141-L1143)).
    - Campo `N° de autorización *`: Input con `inputMode="numeric"`, `placeholder="Ej. 123456"`, `maxLength={6}` ([Líneas 1146-1155](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/ventas/VentasPage.jsx#L1146-L1155)).
    - Validación en vivo: `"El N° de autorización debe tener 6 dígitos"` si la longitud es menor a 6 ([Línea 1158](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/ventas/VentasPage.jsx#L1158)).
    - Microcopy de ayuda: `"Cópialo de la pantalla de confirmación de IziPay: es lo único que permite ubicar este pago si hay que reclamarlo o conciliarlo después."` ([Líneas 1160-1162](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/ventas/VentasPage.jsx#L1160-L1162)).
    - Banner preventivo ámbar contra fraudes:  
      `"No inventes ni copies el número de otra venta: debe ser exactamente el que muestra IziPay para este pago. Un número incorrecto rompe la trazabilidad y no se podrá ubicar ni verificar esta operación después."` ([Líneas 1163-1170](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/ventas/VentasPage.jsx#L1163-L1170)).
    - Botón de confirmación: `<CheckCircle className="h-4 w-4" /> Pago confirmado en IziPay` (deshabilitado si no cumple 6 dígitos, [Líneas 1172-1178](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/ventas/VentasPage.jsx#L1172-L1178)).
    - Botón de retroceso: `<X className="h-4 w-4" /> Volver` ([Líneas 1180-1185](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/ventas/VentasPage.jsx#L1180-L1185)).
  - **Estado Confirmado (`yapeVerificado === true`)**:
    - Tarjeta verde esmeralda con `CheckCircle`: `"Pago Yape/Plin confirmado — S/. {total.toFixed(2)}"` y `"N° de autorización: {nroAutorizacion}"` ([Líneas 1105-1111](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/ventas/VentasPage.jsx#L1105-L1111)).
- **Acciones Finales de Venta**:
  - Botón principal `"Realizar Venta"` (`bg-[#6366f1] hover:bg-indigo-600`, [Líneas 1242-1254](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/ventas/VentasPage.jsx#L1242-L1254)):
    - Estado de carga: Spinner `<Loader2 className="h-4 w-4 animate-spin" /> Procesando...` ([Líneas 1248-1249](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/ventas/VentasPage.jsx#L1248-L1249)).
    - Guardia síncrona: `enviandoVentaRef.current` previene doble clic en el mismo tick ([Línea 579](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/ventas/VentasPage.jsx#L579)).
  - Botón secundario: `"Vaciar carrito"` con borde gris (`hover:bg-gray-50`, [Líneas 1256-1261](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/ventas/VentasPage.jsx#L1256-L1261)).

**CA-3: Modal de Comprobante de Pago (`ModalComprobante`)**
- Renderizado modal superpuesto (`fixed inset-0 z-50 bg-black/50`, [Línea 53](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/ventas/VentasPage.jsx#L53)):
  - Ícono central de éxito: `<CheckCircle className="mx-auto h-12 w-12 text-green-500" />` ([Línea 63](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/ventas/VentasPage.jsx#L63)).
  - Título: `"¡Venta realizada!"` ([Línea 64](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/ventas/VentasPage.jsx#L64)).
  - Subtítulo con correlativo: `"{Factura|Boleta} {numero}"` ([Línea 65](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/ventas/VentasPage.jsx#L65)).
  - Lista de productos vendidos: Nombre, cantidad `x{cantidad}` y subtotal `S/. {subtotal.toFixed(2)}` ([Líneas 69-78](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/ventas/VentasPage.jsx#L69-L78)).
  - Fila total: `"Total"` y `"S/. {monto_total.toFixed(2)}"` ([Líneas 84-87](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/ventas/VentasPage.jsx#L84-L87)).
  - Badges semánticos agrupados:
    - Tipo: `"Factura"` (ámbar) / `"Boleta con DNI"` (índigo) / `"Boleta Simple"` (índigo) ([Líneas 91-97](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/ventas/VentasPage.jsx#L91-L97)).
    - Documento de cliente: `"DNI: {cliente_dni}"` o `"RUC: {cliente_ruc}"` ([Líneas 98-103](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/ventas/VentasPage.jsx#L98-L103)).
    - Método: `"Yape"` (púrpura) / `"Efectivo"` (verde) ([Líneas 104-110](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/ventas/VentasPage.jsx#L104-L110)).
  - Razón social y dirección (si aplica para Factura, [Líneas 112-117](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/ventas/VentasPage.jsx#L112-L117)).
  - Desglose de vuelto en efectivo: `"Monto recibido: S/. {recibido} — Vuelto: S/. {vuelto}"` ([Líneas 120-123](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/ventas/VentasPage.jsx#L120-L123)).
  - Trazabilidad Yape: `<CheckCircle className="mr-1 inline h-3 w-3" /> Yape verificado — S/. {total} — N° de autorización: {referencia_pago}` ([Líneas 126-132](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/ventas/VentasPage.jsx#L126-L132)).
  - Botón verde de descarga: `<FileText className="h-4 w-4" /> {esFactura ? 'Descargar Factura PDF' : 'Descargar Boleta PDF'}` (`bg-emerald-500 hover:bg-emerald-600`, [Líneas 140-146](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/ventas/VentasPage.jsx#L140-L146)).
  - Botón índigo de reinicio: `"Nueva Venta"` (`bg-[#6366f1] hover:bg-indigo-600`, [Líneas 148-153](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/ventas/VentasPage.jsx#L148-L153)).

**CA-4: Escenarios de Aceptación (Gherkin BDD)**

```gherkin
Escenario: Cajero intenta vender sin turno de caja abierto
  Dado que el usuario autenticado tiene rol "Cajero" y no cuenta con un turno de caja activo
  Cuando ingresa a la terminal de ventas en "/ventas"
  Entonces se muestra el banner de alerta "No puedes realizar ventas porque no tienes un turno de caja abierto. Abre un turno para continuar."
  Y el botón "Realizar Venta" permanece deshabilitado
  Y se muestra el botón de enlace "Ir a Mi Caja" apuntando a "/caja"

Escenario: Cobro exitoso con Yape mediante verificación de código IziPay
  Dado que el cajero agregó productos al carrito por un total de "S/. 45.00"
  Y seleccionó el método de pago "Yape"
  Cuando pulsa el botón "Ya generé el cobro en IziPay"
  Entonces avanza al paso 2 "Cliente escanea y paga" mostrando la solicitud del "N° de autorización *"
  Y cuando ingresa "839201" y hace clic en "Pago confirmado en IziPay"
  Entonces se muestra la tarjeta verde "Pago Yape/Plin confirmado — S/. 45.00"
  Y el botón "Realizar Venta" queda habilitado para procesar la transacción

Escenario: Bloqueo de venta por vuelto en efectivo superior al disponible en gaveta
  Dado que el turno de caja cuenta con un efectivo disponible de "S/. 50.00"
  Y la venta tiene un total de "S/. 20.00"
  Cuando el cajero ingresa un monto recibido de "S/. 100.00" calculando un vuelto de "S/. 80.00"
  Entonces se muestra el mensaje de error "Monto en caja insuficiente para el vuelto. Disponible: S/. 50.00"
  Y el botón "Realizar Venta" queda deshabilitado impidiendo descuadres físicos de caja
```

---

### Historia de Usuario: [HU-UI-015] Historial de Ventas, Anulaciones y Reenvío de Comprobantes
**Archivo fuente verificado:** [`client/src/modules/ventas/HistorialVentasPage.jsx`](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/ventas/HistorialVentasPage.jsx#L1-L658)  
**Clasificación de Evidencia:** `[HECHO]`

**Narrativa:**  
Como Administrador o Gerente,  
quiero consultar el historial de ventas paginado, filtrar por fechas o correlativo, descargar comprobantes PDF, reenviarlos por correo y anular ventas gestionando la reposición de stock individual,  
para auditar las operaciones de cobro y corregir errores de facturación cumpliendo la trazabilidad de inventario.

#### Criterios de Aceptación (CA) - Interfaz y Comportamiento Visual:

**CA-1: Filtros de Búsqueda y Navegación**
- **Migas de Pan (Breadcrumb)**:
  - `"Inicio"` (`/dashboard`), separador `"/"`, ítem terminal activo `"Ventas"` ([Líneas 193-195](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/ventas/HistorialVentasPage.jsx#L193-L195)).
- **Barra de Filtros**:
  - Filtro `"Desde"`: Input de fecha con límite máximo condicional `max={fechaHasta || undefined}` ([Líneas 200-207](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/ventas/HistorialVentasPage.jsx#L200-L207)).
  - Filtro `"Hasta"`: Input de fecha con límite mínimo condicional `min={fechaInicio || undefined}` ([Líneas 209-217](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/ventas/HistorialVentasPage.jsx#L209-L217)).
  - Filtro `"Buscar por DNI/RUC o Correlativo"`: Input de texto con placeholder `"ej. F001-00000012"`; permite presionar `Enter` para filtrar ([Líneas 220-229](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/ventas/HistorialVentasPage.jsx#L220-L229)).
  - Filtro `"Método de pago"`: Selector con opciones `"Todos"`, `"Efectivo"`, `"Yape"` ([Líneas 231-241](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/ventas/HistorialVentasPage.jsx#L231-L241)).
  - Botón `"Filtrar"`: `<Search className="mr-1 inline h-4 w-4" /> Filtrar` (`bg-indigo-600 hover:bg-indigo-700`, [Líneas 242-249](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/ventas/HistorialVentasPage.jsx#L242-L249)). Deshabilitado si `fechaInicio > fechaHasta`.
  - Botón `"Limpiar"`: `<X className="mr-1 inline h-4 w-4" /> Limpiar` ([Líneas 250-256](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/ventas/HistorialVentasPage.jsx#L250-L256)).
  - Mensaje de validación de fechas: `"La fecha "Desde" no puede ser posterior a la fecha "Hasta""` (`text-xs text-red-500`, [Líneas 258-260](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/ventas/HistorialVentasPage.jsx#L258-L260)).

**CA-2: Tabla del Historial y Estados**
- **Columnas de la Tabla**:
  - `"N°"`: Formato `#{String(v.id).padStart(6, '0')}` en negrita ([Líneas 280, 293](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/ventas/HistorialVentasPage.jsx#L280-L293)).
  - `"Fecha / Hora"`: Fecha con `toLocaleDateString('es-PE')` y hora `toLocaleTimeString('es-PE')` ([Líneas 281, 295-296](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/ventas/HistorialVentasPage.jsx#L281-L296)).
  - `"Cajero"`: Nombre del usuario o `"-"` ([Líneas 282, 298](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/ventas/HistorialVentasPage.jsx#L282-L298)).
  - `"Método"`: Badge púrpura `<Smartphone /> Yape` o badge verde `<Banknote /> Efectivo` ([Líneas 283, 300-307](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/ventas/HistorialVentasPage.jsx#L283-L307)).
  - `"Monto"`: `S/. {monto_total.toFixed(2)}`; si el estado es `'Anulada'`, se muestra tachado y en gris `text-gray-400 line-through` ([Líneas 284, 309](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/ventas/HistorialVentasPage.jsx#L284-L309)).
  - `"Yape Verif."`:
    - Si método es Yape y verificado: `<CheckCircle /> Sí` en esmeralda ([Línea 313](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/ventas/HistorialVentasPage.jsx#L313)).
    - Si método es Yape y no verificado: `<XCircle /> Pendiente` en ámbar ([Línea 318](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/ventas/HistorialVentasPage.jsx#L318)).
    - Si método es Efectivo: Guion gris `"—"` ([Línea 324](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/ventas/HistorialVentasPage.jsx#L324)).
  - `"Estado"`:
    - Venta normal: Badge esmeralda `"Completada"` (`bg-emerald-100 text-emerald-700`, [Línea 337](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/ventas/HistorialVentasPage.jsx#L337)).
    - Venta anulada: Badge rojo `<Ban className="h-3 w-3" /> Anulada` con tooltip del motivo ([Líneas 330-334](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/ventas/HistorialVentasPage.jsx#L330-L334)).
  - `"Acción"`:
    - Botón `"Detalle"`: `<Eye className="h-3.5 w-3.5" /> Detalle` (`text-indigo-600 hover:bg-indigo-50`, [Líneas 346-350](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/ventas/HistorialVentasPage.jsx#L346-L350)).
    - Botón `"Anular"`: `<Ban className="h-3.5 w-3.5" /> Anular` (`text-red-600 hover:bg-red-50`, [Líneas 353-358](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/ventas/HistorialVentasPage.jsx#L353-L358)). Visible **únicamente** para Administrador o Gerente (`puedeAnular`) en ventas no anuladas.
- **Paginación y Estados Vacíos**:
  - Sin resultados: `"No se encontraron ventas"` ([Línea 273](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/ventas/HistorialVentasPage.jsx#L273)).
  - Leyenda de paginación: `"Mostrando {desde}–{hasta} de {total} ventas"` ([Línea 372](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/ventas/HistorialVentasPage.jsx#L372)).
  - Controles: Botones `<ChevronLeft />`, indicador `{paginaActual} / {totalPaginas}` y botón `<ChevronRight />` ([Líneas 375-390](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/ventas/HistorialVentasPage.jsx#L375-L390)).

**CA-3: Modales de Detalle, Reenvío de Correo y Anulación**
- **Modal de Detalle de Venta**:
  - Encabezado: Título `"Venta #{id}"` y subtítulo con serie/correlativo `"{Factura|Boleta} {serie}-{correlativo}"` ([Líneas 403-405](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/ventas/HistorialVentasPage.jsx#L403-L405)).
  - Banner si está anulada: Bloque rojo con `"VENTA ANULADA"`, motivo de anulación, `"Por {anulado_por.nombre} el {fecha}"` ([Líneas 415-421](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/ventas/HistorialVentasPage.jsx#L415-L421)).
  - Cuadrícula de detalles: Fecha, Cajero, Método de pago, Monto total; si fue Efectivo: Recibido y Vuelto; si fue Yape: Monto Yape, Verificado (Sí/Pendiente), Verificado el, N° de autorización IziPay ([Líneas 424-482](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/ventas/HistorialVentasPage.jsx#L424-L482)).
  - Lista de `"Productos"`: Nombre del producto, marca, cantidad `x{cantidad}` y subtotal ([Líneas 485-496](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/ventas/HistorialVentasPage.jsx#L485-L496)).
  - Acciones inferiores (si no está anulada):
    - Botón verde: `<FileText className="h-4 w-4" /> Descargar Copia PDF` ([Líneas 501-507](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/ventas/HistorialVentasPage.jsx#L501-L507)).
    - Botón índigo: `<Mail className="h-4 w-4" /> Reenviar por Correo` ([Líneas 508-517](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/ventas/HistorialVentasPage.jsx#L508-L517)).
- **Modal Reenviar Comprobante por Correo**:
  - Título: `"Reenviar Comprobante"` ([Línea 621](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/ventas/HistorialVentasPage.jsx#L621)).
  - Microcopy instructivo: `"Ingresa el correo electrónico al cual deseas reenviar el comprobante de pago."` ([Líneas 622-624](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/ventas/HistorialVentasPage.jsx#L622-L624)).
  - Input: `type="email"`, placeholder `"ejemplo@correo.com"`, precarga el correo del cliente si existía ([Líneas 510, 626-631](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/ventas/HistorialVentasPage.jsx#L510-L631)).
  - Botones: `"Cancelar"` y `"Enviar"` (con spinner de carga `Loader2`, [Líneas 634-648](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/ventas/HistorialVentasPage.jsx#L634-L648)).
- **Modal Anular Venta / Devolución de Stock**:
  - Título: `"Anular venta #{id}"` ([Línea 533](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/ventas/HistorialVentasPage.jsx#L533)).
  - Advertencia obligatoria: `"Se ajustará el monto en la caja del turno abierto. Para cada producto, indica si vuelve a stock vendible o no. Esta acción no se puede deshacer."` ([Líneas 535-537](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/ventas/HistorialVentasPage.jsx#L535-L537)).
  - Textarea `"Motivo de anulación"`: Placeholder `"Ej: producto incorrecto, cliente se arrepintió, error de cobro..."` ([Líneas 540-548](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/ventas/HistorialVentasPage.jsx#L540-L548)).
  - Lista `"Productos de la venta"`:
    - Checkbox individual `"Repone stock"` (marcado por defecto, [Líneas 561-568](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/ventas/HistorialVentasPage.jsx#L561-L568)).
    - Si se desmarca `"Repone stock"`: Se despliega selector obligatorio `"Motivo de la pérdida..."` con opciones: `'Vencido'`, `'Dañado'`, `'Robo o faltante'`, `'Consumo interno'`, `'Error de registro'`, `'Otro'`, y un input opcional `"Detalle (opcional)"` ([Líneas 16, 570-590](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/ventas/HistorialVentasPage.jsx#L16-L590)).
  - Botones: `"Cancelar"` y botón rojo `"Confirmar anulación"` ([Líneas 597-611](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/ventas/HistorialVentasPage.jsx#L597-L611)).

**CA-4: Escenarios de Aceptación (Gherkin BDD)**

```gherkin
Escenario: Anulación de venta con producto dañado que no reingresa al inventario
  Dado que el usuario autenticado tiene rol "Administrador"
  Y visualiza la venta "#000142" en el historial con 2 ítems: "Leche Gloria" y "Galletas Oreo"
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

### Historia de Usuario: [HU-UI-016] Gestión de Turno de Caja, Movimientos y Conciliación
**Archivo fuente verificado:** [`client/src/modules/caja/CajaPage.jsx`](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/caja/CajaPage.jsx#L1-L497)  
**Clasificación de Evidencia:** `[HECHO]`

**Narrativa:**  
Como Cajero,  
quiero abrir mi turno de caja con un fondo inicial mínimo, registrar ingresos y egresos manuales de efectivo y cerrar el turno contando el dinero físico,  
para asegurar que la gaveta cuente con cambio suficiente para vueltos y conciliar las diferencias entre lo esperado y lo real.

#### Criterios de Aceptación (CA) - Interfaz y Comportamiento Visual:

**CA-1: Vista sin Turno Abierto y Modal de Apertura**
- **Estado Inicial Sin Turno (`!turno`)**:
  - Contenedor con borde discontinuo gris: `border-2 border-dashed border-gray-300 bg-white p-12 text-center` ([Línea 186](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/caja/CajaPage.jsx#L186)).
  - Ícono: `<DollarSign className="mx-auto h-12 w-12 text-gray-400" />` ([Línea 187](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/caja/CajaPage.jsx#L187)).
  - Título: `"No tienes un turno abierto"` (`text-lg font-semibold text-gray-700`, [Línea 188](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/caja/CajaPage.jsx#L188)).
  - Microcopy: `"Abre tu turno para comenzar a registrar ventas en caja."` (`text-sm text-gray-500`, [Línea 189](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/caja/CajaPage.jsx#L189)).
  - Botón: `<Plus className="h-4 w-4" /> Abrir turno` (`bg-indigo-600 hover:bg-indigo-700`, [Líneas 190-195](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/caja/CajaPage.jsx#L190-L195)).
- **Modal "Abrir turno"**:
  - Título: `"Abrir turno"` ([Línea 315](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/caja/CajaPage.jsx#L315)).
  - Etiqueta del campo: `"Monto inicial en caja (S/)"` ([Línea 319](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/caja/CajaPage.jsx#L319)).
  - Input: Placeholder `"Ej: 500.00"`, `inputMode="decimal"`, sanitizado contra letras y signos ([Líneas 11-26, 321-327](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/caja/CajaPage.jsx#L11-L327)).
  - Microcopy normativo de monto mínimo:  
    `"Mínimo S/ 500.00, para poder dar vueltos."` (`text-xs text-gray-400`, [Línea 329](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/caja/CajaPage.jsx#L329)).
  - Error de validación local si es menor a S/ 500: `"El monto mínimo de apertura es S/ 500.00."` ([Línea 90](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/caja/CajaPage.jsx#L90)).
  - Botones de acción: `"Cancelar"` y botón `"Abrir turno"` (cambia a `"Abriendo..."` al enviar, [Líneas 333-340](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/caja/CajaPage.jsx#L333-L340)).

**CA-2: Panel del Turno en Curso y Movimientos**
- **Encabezado del Turno Activo (`turno.estado === 'Abierto'`)**:
  - Indicador vivo: Punto verde pulsante `<span className="h-2.5 w-2.5 rounded-full bg-green-500 animate-pulse" />` y texto `"Turno en curso"` ([Líneas 207-208](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/caja/CajaPage.jsx#L207-L208)).
  - Datos del turno: Ícono `<Clock className="inline h-3.5 w-3.5 mr-1" /> Apertura: {fecha}` y `"Cajero: {cajero.nombre}"` ([Líneas 210-216](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/caja/CajaPage.jsx#L210-L216)).
  - Barra de botones superiores:
    - Botón verde: `<Plus className="h-4 w-4" /> Registrar Ingreso` (`bg-emerald-600 hover:bg-emerald-700`, [Líneas 220-224](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/caja/CajaPage.jsx#L220-L224)).
    - Botón ámbar: `<TrendingDown className="h-4 w-4" /> Registrar Egreso` (`bg-amber-500 hover:bg-amber-600`, [Líneas 226-230](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/caja/CajaPage.jsx#L226-L230)).
    - Botón rojo: `<X className="h-4 w-4" /> Cerrar turno` (`bg-red-600 hover:bg-red-700`, [Líneas 232-236](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/caja/CajaPage.jsx#L232-L236)).
- **Tarjetas de Totales en Tiempo Real**:
  - Tarjeta 1: `"APERTURA"` con monto en formato `S/ {monto_apertura}` ([Líneas 244-245](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/caja/CajaPage.jsx#L244-L245)).
  - Tarjeta 2: `"EFECTIVO ACUMULADO"` con monto grande en verde `text-2xl font-bold text-green-600` ([Líneas 248-249](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/caja/CajaPage.jsx#L248-L249)).
  - Tarjeta 3: `"YAPE ACUMULADO"` con monto grande en morado `text-2xl font-bold text-purple-600` ([Líneas 252-253](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/caja/CajaPage.jsx#L252-L253)).
- **Lista de Movimientos del Turno**:
  - Título de sección: `"Movimientos del turno"` ([Línea 260](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/caja/CajaPage.jsx#L260)).
  - Estado vacío: `"Sin movimientos aún."` ([Línea 263](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/caja/CajaPage.jsx#L263)).
  - Elemento de lista:
    - Badges de tipo semántico:
      - `Apertura`: `bg-blue-100 text-blue-700` ([Línea 32](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/caja/CajaPage.jsx#L32)).
      - `Venta`: `bg-green-100 text-green-700` ([Línea 33](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/caja/CajaPage.jsx#L33)).
      - `Ingreso`: `bg-emerald-100 text-emerald-700` ([Línea 34](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/caja/CajaPage.jsx#L34)).
      - `Egreso` / `Anulacion`: `bg-red-100 text-red-700` ([Líneas 35-36](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/caja/CajaPage.jsx#L35-L36)).
    - Descripción del movimiento y método de pago (`text-gray-400 text-xs`, [Líneas 272-273](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/caja/CajaPage.jsx#L272-L273)).
    - Monto con signo positivo o negativo: `+S/ {monto}` o `-S/ {monto}` (en rojo para egresos/anulaciones, [Líneas 276-277](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/caja/CajaPage.jsx#L276-L277)).
    - Hora del movimiento: `toLocaleTimeString('es-PE')` ([Líneas 279-281](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/caja/CajaPage.jsx#L279-L281)).

**CA-3: Modales de Movimiento Manual y Cierre de Turno**
- **Modal "Registrar Ingreso" / "Registrar Egreso"**:
  - Título dinámico: `Registrar {modalMovimiento}` ([Línea 395](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/caja/CajaPage.jsx#L395)).
  - Campo `"Monto (S/)"`: Placeholder `"0.00"`, requerido, microcopy `"Máximo S/ 5000.00"` ([Líneas 398-405](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/caja/CajaPage.jsx#L398-L405)).
  - Campo `"Descripción del motivo"`: Textarea con placeholder dinámico `"Motivo del {ingreso|egreso}"`, requerido ([Líneas 408-416](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/caja/CajaPage.jsx#L408-L416)).
  - Campo `"Medio fijo"`: Input de solo lectura con valor `"Efectivo"` y microcopy explicativo:  
    `"Los movimientos manuales solo aplican a efectivo físico en caja."` (`text-xs text-gray-400`, [Líneas 419-426](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/caja/CajaPage.jsx#L419-L426)).
  - Botones: `"Cancelar"` y botón `"Registrar {Ingreso|Egreso}"` (cambia a `"Guardando..."`, [Líneas 429-439](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/caja/CajaPage.jsx#L429-L439)).
- **Modal "Cerrar turno"**:
  - Título: `"Cerrar turno"` ([Línea 348](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/caja/CajaPage.jsx#L348)).
  - Banner instructivo amarillo: `"Cuenta el efectivo y Yape físico antes de continuar."` (`bg-yellow-50 text-yellow-800`, [Líneas 349-351](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/caja/CajaPage.jsx#L349-L351)).
  - Cuadrícula de conteo físico:
    - Input `"Efectivo contado (S/)"`: Placeholder `"0.00"`, requerido ([Líneas 355-361](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/caja/CajaPage.jsx#L355-L361)).
    - Input `"Yape contado (S/)"`: Placeholder `"0.00"` ([Líneas 364-370](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/caja/CajaPage.jsx#L364-L370)).
  - Campo `"Observaciones (opcional)"`: Textarea con placeholder `"Ej: faltaron 5 soles, billetes mojados, etc."` ([Líneas 373-377](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/caja/CajaPage.jsx#L373-L377)).
  - Botones: `"Cancelar"` y botón rojo `"Cerrar turno"` (cambia a `"Cerrando..."`, [Líneas 380-388](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/caja/CajaPage.jsx#L380-L388)).
- **Vista de Resumen Post-Cierre (`ResumenCierre`)**:
  - Título: `<CheckCircle className="h-5 w-5 text-green-600" /> Turno cerrado` ([Líneas 295-296](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/caja/CajaPage.jsx#L295-L296)).
  - Badge de aprobación si fue visado: `"Aprobado por {aprobador.nombre}"` (`bg-green-100 text-green-700`, [Líneas 298-300](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/caja/CajaPage.jsx#L298-L300)).
  - Tabla de conciliación: Columnas `"Concepto"`, `"Esperado"`, `"Contado"`, `"Diferencia"` ([Líneas 466-471](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/caja/CajaPage.jsx#L466-L471)).
    - Fila Efectivo y Fila Yape con diferenciación de color: Verde si `diferencia > 0` (`+{fmt}`), rojo si `diferencia < 0`, gris si es `0` ([Líneas 455-460, 474-475](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/caja/CajaPage.jsx#L455-L475)).
  - Botón: `<Plus className="h-4 w-4" /> Abrir nuevo turno` ([Líneas 306-309](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/caja/CajaPage.jsx#L306-L309)).

**CA-4: Escenarios de Aceptación (Gherkin BDD)**

```gherkin
Escenario: Validación de fondo mínimo de apertura en caja
  Dado que el cajero se encuentra en "/caja" sin turno activo
  Cuando pulsa el botón "Abrir turno"
  E ingresa un monto inicial de "350.00"
  Y presiona "Abrir turno"
  Entonces el sistema bloquea el envío y muestra el mensaje de error "El monto mínimo de apertura es S/ 500.00."
  Y el formulario no se cierra hasta corregir el valor a S/ 500.00 o más

Escenario: Registro de egreso manual para compra de insumos menores
  Dado que el turno de caja se encuentra en curso
  Cuando el cajero pulsa "Registrar Egreso"
  E ingresa un monto de "45.00" con motivo "Compra de papel térmico para tickets POS"
  Y confirma la operación
  Entonces el modal se cierra y en "Movimientos del turno" se añade la fila con badge rojo "Egreso" y monto "-S/ 45.00"
  Y la tarjeta de "Efectivo acumulado" se actualiza deduciendo inmediatamente los S/ 45.00
```

---

### Historia de Usuario: [HU-UI-017] Historial de Cajas, Conciliación de Arqueos y Cierre Forzado
**Archivo fuente verificado:** [`client/src/modules/caja/HistorialCajaPage.jsx`](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/caja/HistorialCajaPage.jsx#L1-L488)  
**Clasificación de Evidencia:** `[HECHO]`

**Narrativa:**  
Como Administrador o Gerente,  
quiero revisar el historial de turnos de caja de todos los cajeros, aprobar los cierres cuadrados y forzar el cierre de turnos olvidados que excedan las 16 horas,  
para garantizar el control de arqueos y evitar bloqueos en la apertura de nuevos turnos.

#### Criterios de Aceptación (CA) - Interfaz y Comportamiento Visual:

**CA-1: Filtros de Historial de Cajas**
- **Barra de Filtros**:
  - Filtro `"Desde"`: Input de fecha con `max={filtroFechaFin || undefined}` ([Líneas 393-397](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/caja/HistorialCajaPage.jsx#L393-L397)).
  - Filtro `"Hasta"`: Input de fecha con `min={filtroFechaInicio || undefined}` ([Líneas 399-403](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/caja/HistorialCajaPage.jsx#L399-L403)).
  - Filtro `"Estado"`: Selector con opciones `"Todos"`, `"Abierto"`, `"Cerrado"` ([Líneas 405-411](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/caja/HistorialCajaPage.jsx#L405-L411)).
  - Botón `"Buscar"`: `bg-indigo-600 hover:bg-indigo-700` ([Líneas 413-416](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/caja/HistorialCajaPage.jsx#L413-L416)).
  - Botón `"Limpiar filtros"`: `<X className="h-3.5 w-3.5" /> Limpiar filtros` visible solo si hay filtros activos ([Líneas 417-425](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/caja/HistorialCajaPage.jsx#L417-L425)).
  - Validación de rango: `"La fecha "Desde" no puede ser posterior a la fecha "Hasta"."` ([Línea 349](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/caja/HistorialCajaPage.jsx#L349)).

**CA-2: Tabla de Turnos y Conciliación de Arqueos**
- **Columnas de la Tabla**:
  - `"Apertura"`: Fecha y hora formateada ([Líneas 444, 205](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/caja/HistorialCajaPage.jsx#L444-L205)).
  - `"Cajero"`: Nombre del responsable o `"—"` ([Líneas 445, 206](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/caja/HistorialCajaPage.jsx#L445-L206)).
  - `"Apertura (S/)"`: Monto inicial con formato `S/ {monto}` ([Líneas 446, 207](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/caja/HistorialCajaPage.jsx#L446-L207)).
  - `"Efec. esperado"` y `"Yape esperado"`: Montos calculados por sistema ([Líneas 447, 449, 208, 210](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/caja/HistorialCajaPage.jsx#L447-L210)).
  - `"Dif. efec."` y `"Dif. Yape"`: Renderizados con componente `BadgeDiff`:
    - Positivo: Monto verde con signo `+S/ {valor}` ([Línea 156](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/caja/HistorialCajaPage.jsx#L156)).
    - Negativo: Monto rojo con signo `-S/ {valor}` ([Línea 157](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/caja/HistorialCajaPage.jsx#L157)).
    - Neutro: Texto gris `"S/ 0.00"` ([Línea 158](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/caja/HistorialCajaPage.jsx#L158)).
  - `"Estado"`:
    - Si está cerrado: Badge gris `"Cerrado"` (`bg-gray-100 text-gray-600`, [Línea 222](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/caja/HistorialCajaPage.jsx#L222)).
    - Si está abierto: Badge verde `"Abierto"` (`bg-green-100 text-green-700`, [Línea 215](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/caja/HistorialCajaPage.jsx#L215)).
    - Alerta de turno sospechoso (> 16 horas abierto): Chip ámbar `<AlertTriangle className="h-3 w-3" /> {N}h abierto` con tooltip `"El cajero podría haberse olvidado de cerrarlo"` ([Líneas 216-220](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/caja/HistorialCajaPage.jsx#L216-L220)).
  - `"Acción"`:
    - Si está Abierto:
      - Si es Administrador/Gerente (`puedeAprobar`): Botón rojo `"Cerrar turno"` (`bg-red-600 hover:bg-red-700`, [Líneas 228-232](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/caja/HistorialCajaPage.jsx#L228-L232)).
      - Si es otro rol: Guion `"—"` ([Línea 234](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/caja/HistorialCajaPage.jsx#L234)).
    - Si está Cerrado:
      - Ya aprobado: Ícono y texto verde `<CheckCircle className="h-3.5 w-3.5" /> {turno.aprobador.nombre}` ([Líneas 236-238](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/caja/HistorialCajaPage.jsx#L236-L238)).
      - Pendiente y usuario es Admin/Gerente: Botón índigo `"Aprobar"` (`bg-indigo-600 hover:bg-indigo-700`, [Líneas 240-245](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/caja/HistorialCajaPage.jsx#L240-L245)).
      - Pendiente y usuario cajero: Texto gris `"Pendiente"` ([Línea 247](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/caja/HistorialCajaPage.jsx#L247)).
  - Control de expansión: Ícono `<ChevronDown / ChevronUp className="h-4 w-4" />` ([Línea 251](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/caja/HistorialCajaPage.jsx#L251)).
- **Detalle Expandido de Fila (Acordeón)**:
  - Título secundario: `"MOVIMIENTOS DEL TURNO"` ([Línea 258](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/caja/HistorialCajaPage.jsx#L258)).
  - Subtabla de movimientos con columnas `"Tipo"`, `"Descripción"`, `"Método"`, `"Monto"`, `"Hora"` ([Líneas 264-270](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/caja/HistorialCajaPage.jsx#L264-L270)).
  - Observaciones registradas al cierre ([Líneas 298-300](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/caja/HistorialCajaPage.jsx#L298-L300)).
  - Aviso de Cierre Forzado: Banner ámbar con ícono `AlertTriangle`:  
    `"Cerrado forzosamente por {cerrado_por.nombre} — Motivo: {motivo_cierre_forzado}"` ([Líneas 303-309](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/caja/HistorialCajaPage.jsx#L303-L309)).

**CA-3: Modal de Cierre Forzado por Administrador (`ModalCerrarForzado`)**
- Encabezado: `"Cerrar turno de {cajero.nombre ?? 'otro cajero'}"` ([Línea 79](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/caja/HistorialCajaPage.jsx#L79)).
- Banner de advertencia y responsabilidad:  
  `"El cajero no cerró este turno. Cuenta el efectivo y Yape físicos de esa caja antes de continuar — este cierre queda registrado con tu usuario y el motivo."` (`bg-amber-50 text-amber-800`, [Líneas 85-90](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/caja/HistorialCajaPage.jsx#L85-L90)).
- Formulario de Arqueo Forzado:
  - Input `"Efectivo contado (S/)"`: Requerido, placeholder `"0.00"` ([Líneas 95-102](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/caja/HistorialCajaPage.jsx#L95-L102)).
  - Input `"Yape contado (S/)"`: Placeholder `"0.00"` ([Líneas 105-110](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/caja/HistorialCajaPage.jsx#L105-L110)).
  - Input `"Motivo del cierre forzado *"`: Requerido, placeholder `"Ej: cajero no marcó salida, turno olvidado desde ayer"` ([Líneas 114-124](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/caja/HistorialCajaPage.jsx#L114-L124)).
  - Textarea `"Observaciones (opcional)"`: Placeholder `"Ej: faltaron 5 soles, billetes mojados, etc."` ([Líneas 127-131](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/caja/HistorialCajaPage.jsx#L127-L131)).
- Botones de acción: `"Cancelar"` y botón rojo `"Forzar cierre"` (cambia a `"Cerrando..."` con guardia en `enviandoRef`, [Líneas 137-145](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/caja/HistorialCajaPage.jsx#L137-L145)).

**CA-4: Escenarios de Aceptación (Gherkin BDD)**

```gherkin
Escenario: Administrador fuerza el cierre de un turno olvidado de más de 16 horas
  Dado que el usuario autenticado tiene rol "Administrador"
  Y visualiza en el historial de cajas un turno con la etiqueta "18h abierto" del cajero "Juan Pérez"
  Cuando pulsa el botón "Cerrar turno" en la columna de acción
  Entonces se abre el modal "Cerrar turno de Juan Pérez" con la advertencia de responsabilidad
  Y cuando ingresa "S/ 620.00" en efectivo contado, "S/ 115.00" en Yape contado
  Y completa el motivo obligatorio "Cajero finalizó guardia sin registrar cierre"
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

## 6. Parte V: EPIC-REP — Dashboard de Control, Reportes Analíticos y Configuración (HU-UI-018 a HU-UI-020)

### Historia de Usuario: [HU-UI-018] Tablero de Control Estratégico y Alertas Operativas
**Archivo fuente verificado:** [`client/src/modules/dashboard/DashboardPage.jsx`](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/dashboard/DashboardPage.jsx#L1-L830)  
**Clasificación de Evidencia:** `[HECHO]`

**Narrativa:**  
Como Administrador o Gerente,  
quiero visualizar indicadores clave de desempeño (KPIs) en tiempo real, tendencias de ventas en gráficos de área, productos más vendidos, alertas de turnos de caja olvidados y accesos rápidos con modal de desglose a cada métrica,  
para tomar decisiones comerciales oportunas y supervisar la salud operativa del negocio.

#### Criterios de Aceptación (CA) - Interfaz y Comportamiento Visual:

**CA-1: Encabezado, Detección de Turnos Olvidados y Filtro Temporal**
- **Navegación y Encabezado**:
  - Breadcrumb: `"Inicio"` (`/dashboard`), separador `"/"`, ítem terminal activo `"Dashboard"` ([Línea 511](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/dashboard/DashboardPage.jsx#L511)).
  - Título principal: `"Dashboard"` (`text-2xl font-bold text-gray-800`, [Línea 515](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/dashboard/DashboardPage.jsx#L515)).
  - Mensaje de bienvenida contextual: `"Bienvenido, {usuario.nombre} — {fechaActual}"` con formato `toLocaleDateString('es-PE', { year: 'numeric', month: 'long', day: 'numeric' })` ([Líneas 494-496, 516-518](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/dashboard/DashboardPage.jsx#L494-L518)).
  - Botón de actualización rápida: `<RefreshCw className="h-4 w-4" /> Actualizar` con animación `animate-spin` durante la recarga ([Líneas 521-527](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/dashboard/DashboardPage.jsx#L521-L527)). Auto-recarga reactiva al recuperar el foco de la ventana (`window.addEventListener('focus')`, [Líneas 396-400](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/dashboard/DashboardPage.jsx#L396-L400)).
- **Banner de Alerta Operativa (Turnos de Caja Olvidados > 16 Horas)**:
  - Renderizado condicional en bloque ámbar `border-amber-200 bg-amber-50 text-amber-800` ([Líneas 530-532](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/dashboard/DashboardPage.jsx#L530-L532)).
  - Ícono: `<AlertTriangle className="h-5 w-5 shrink-0 text-amber-500" />` ([Línea 532](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/dashboard/DashboardPage.jsx#L532)).
  - Mensaje singular: `"El turno de {cajero.nombre} lleva {N}h abierto — probablemente se olvidó de cerrarlo."` ([Línea 535](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/dashboard/DashboardPage.jsx#L535)).
  - Mensaje plural: `"{N} turnos llevan más de 16h abiertos — probablemente se olvidaron de cerrarlos."` ([Línea 537](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/dashboard/DashboardPage.jsx#L537)).
  - Botón de acción: `"Ir a Historial de Caja"` (`bg-amber-500 text-white hover:bg-amber-600`), que redirige a `/caja/historial?estado=Abierto` ([Líneas 540-545](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/dashboard/DashboardPage.jsx#L540-L545)).
- **Barra de Rango de Fechas**:
  - Contenedor: `rounded-xl border border-gray-100 bg-white p-4 shadow-sm` ([Línea 552](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/dashboard/DashboardPage.jsx#L552)).
  - Input `"Desde"`: Tipo `date`, rango acotado entre `fechaMinima` (10 años atrás) y `fechaHastaInput || fechaHoy` ([Líneas 554-563](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/dashboard/DashboardPage.jsx#L554-L563)).
  - Input `"Hasta"`: Tipo `date`, rango acotado entre `fechaInicioInput || fechaMinima` y `fechaHoy` ([Líneas 565-574](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/dashboard/DashboardPage.jsx#L565-L574)).
  - Botón `"Aplicar"`: `bg-[#6366f1] text-white hover:bg-indigo-600` ([Líneas 576-580](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/dashboard/DashboardPage.jsx#L576-L580)).
  - Botón `"Este mes"`: Restablece el rango al primer día del mes actual hasta hoy ([Líneas 581-586](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/dashboard/DashboardPage.jsx#L581-L586)).
  - Leyenda informativa: `"Mostrando ventas del {formatFecha(fechaInicio)} al {formatFecha(fechaHasta)}"` ([Líneas 588-589](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/dashboard/DashboardPage.jsx#L588-L589)).
  - Mensajes de error en validación de fechas:
    - `"La fecha "Desde" no puede ser posterior a la fecha "Hasta""` ([Línea 356](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/dashboard/DashboardPage.jsx#L356)).
    - `"Las fechas deben estar entre {fechaMinima} y {fechaHoy}"` ([Línea 363](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/dashboard/DashboardPage.jsx#L363)).

**CA-2: Tarjetas KPI Interactivas y Gráfico de Tendencia**
- **Rejilla de 6 Tarjetas KPI (`KpiCard`)**:
  - Estructura común: Borde izquierdo temático de 4px, hover con elevación `shadow-md`, ícono circular superior derecho y microcopy inferior que aparece en hover: `"Ver detalle"` con `<ChevronRight className="h-3 w-3" />` ([Líneas 28-58](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/dashboard/DashboardPage.jsx#L28-L58)).
  - **KPI 1 - Ventas**: Título dinámico `Total Ventas {del Mes|del Período}` (valor numérico entero), ícono `<ShoppingCart />`, color índigo `#6366f1` ([Líneas 601-607](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/dashboard/DashboardPage.jsx#L601-L607)).
  - **KPI 2 - Ingresos**: Título dinámico `Ingresos {del Mes|del Período}`, prefijo `"S./"`, valor decimal con 2 dígitos, ícono `<DollarSign />`, color verde esmeralda `#10b981` ([Líneas 608-615](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/dashboard/DashboardPage.jsx#L608-L615)).
  - **KPI 3 - Ticket Promedio**: Título `"Ticket Promedio"`, prefijo `"S./"`, valor con 2 decimales, ícono `<TrendingUp />`, color ámbar `#f59e0b` ([Líneas 616-623](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/dashboard/DashboardPage.jsx#L616-L623)).
  - **KPI 4 - Catálogo**: Título `"Productos Activos"`, total de productos vigentes, ícono `<Package />`, color azul `#3b82f6` ([Líneas 624-630](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/dashboard/DashboardPage.jsx#L624-L630)).
  - **KPI 5 - Ruptura de Stock**: Título `"Sin Stock"`, total de productos con stock 0, ícono `<AlertTriangle />`, color rojo `#ef4444` ([Líneas 631-637](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/dashboard/DashboardPage.jsx#L631-L637)).
  - **KPI 6 - Abastecimiento**: Título `"Solicitudes Pendientes"`, número de órdenes de reposición pendientes, ícono `<ClipboardList />`, color violeta `#8b5cf6` ([Líneas 638-644](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/dashboard/DashboardPage.jsx#L638-L644)).
- **Gráfico de Tendencia "Ventas por día"**:
  - Título: `"Ventas por día"` (`font-semibold text-gray-700`, [Línea 648](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/dashboard/DashboardPage.jsx#L648)).
  - Componente: `ResponsiveContainer` (altura 280px) con `AreaChart` y degradado `ventasGradient` (`#6366f1` con opacidad de 0.3 a 0) ([Líneas 650-656](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/dashboard/DashboardPage.jsx#L650-L656)).
  - Ejes:
    - Eje X: Fechas formateadas como `DD/MM` sin línea de eje ([Líneas 659-665](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/dashboard/DashboardPage.jsx#L659-L665)).
    - Eje Y: Montos con prefijo `S/{v}` ([Líneas 666-671](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/dashboard/DashboardPage.jsx#L666-L671)).
    - Cuadrícula: Líneas discontinuas `strokeDasharray="3 3"` color `#f0f0f0` ([Línea 658](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/dashboard/DashboardPage.jsx#L658)).
  - Tooltip personalizado (`CustomTooltip`): Tarjeta blanca sombreada con fecha `DD/MM` y monto en negrita `"S/. {monto.toFixed(2)}"` ([Líneas 272-286](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/dashboard/DashboardPage.jsx#L272-L286)).
  - Estado vacío: `"No hay ventas registradas aún"` (`h-60 flex items-center justify-center text-sm text-gray-400`, [Línea 684](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/dashboard/DashboardPage.jsx#L684)).

**CA-3: Secciones de Top Productos y Stock Crítico**
- **Panel "Top 5 productos"**:
  - Título: `"Top 5 productos"` ([Línea 691](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/dashboard/DashboardPage.jsx#L691)).
  - Lista de barras de progreso:
    - Nombre del producto en negrita y marca en gris suave ([Línea 698](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/dashboard/DashboardPage.jsx#L698)).
    - Badge con cantidad vendida: `"{p.total_vendido} und."` (`bg-[#6366f1] text-white text-xs`, [Línea 701](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/dashboard/DashboardPage.jsx#L701)).
    - Barra horizontal con ancho proporcional respecto al líder de ventas `(total_vendido / topVendido) * 100%` ([Líneas 704-712](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/dashboard/DashboardPage.jsx#L704-L712)).
  - Estado vacío: `"No hay ventas registradas"` ([Línea 719](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/dashboard/DashboardPage.jsx#L719)).
- **Panel "Stock crítico"**:
  - Título: `"Stock crítico"` con enlace `"Ver todos en Productos"` acompañado de `<ChevronRight className="h-3 w-3" />` que navega a `/productos?alerta=critico` ([Líneas 726-733](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/dashboard/DashboardPage.jsx#L726-L733)).
  - Lista de hasta 5 productos en alerta:
    - Clic en el producto navega a Productos filtrando por alerta y nombre: `/productos?alerta={agotado|stockBajo}&buscar={nombre}` ([Línea 741](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/dashboard/DashboardPage.jsx#L741)).
    - Badges de alerta:
      - Si stock es 0: Badge rojo `"Sin stock"` (`bg-red-100 text-red-700`, [Línea 753](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/dashboard/DashboardPage.jsx#L753)).
      - Si stock está por debajo del mínimo: Badge amarillo `"{p.stock} und."` (`bg-yellow-100 text-yellow-700`, [Línea 753](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/dashboard/DashboardPage.jsx#L753)).
  - Estado vacío: Ícono verde `<span className="text-lg">✓</span> Todo el stock está en orden` ([Línea 761](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/dashboard/DashboardPage.jsx#L761)).

**CA-4: Modales de Detalle Bajo Demanda (`ModalDetalle`)**
- Estructura modal compartida: Panel flotante `max-w-2xl bg-white shadow-xl` con ícono temático coloreado, título y botón de cierre `X` ([Líneas 65-103](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/dashboard/DashboardPage.jsx#L65-L103)).
- **Modal Ventas (`modalActivo === 'ventas'`)**:
  - Título: `Detalle de Ventas {del Mes|del Período}` ([Línea 774](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/dashboard/DashboardPage.jsx#L774)).
  - Nota superior: `"{total_ventas} venta(s) completada(s) este mes. Mostrando las primeras {N}."` ([Líneas 787-792](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/dashboard/DashboardPage.jsx#L787-L792)).
  - Columnas: `"Fecha"`, `"Cliente / Vendedor"`, `"Método"`, `"Monto"`, `"Estado"` ([Líneas 119-123](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/dashboard/DashboardPage.jsx#L119-L123)). Estado vacío: `"No hay ventas registradas este mes."` ([Línea 110](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/dashboard/DashboardPage.jsx#L110)).
- **Modal Ticket Promedio (`modalActivo === 'ticket'`)**:
  - Título: `"Ticket Promedio"` ([Línea 293](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/dashboard/DashboardPage.jsx#L293)).
  - Nota superior: `"Promedio: {promedio} sobre {total} venta(s) — ordenadas de mayor a menor monto."` ([Líneas 800-805](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/dashboard/DashboardPage.jsx#L800-L805)).
  - Tabla de ventas ordenada descendentemente por monto ([Línea 798](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/dashboard/DashboardPage.jsx#L798)).
- **Modal Ingresos por Método (`modalActivo === 'ingresos'`)**:
  - Título: `Ingresos {del Mes|del Período} por Método de Pago` ([Línea 775](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/dashboard/DashboardPage.jsx#L775)).
  - Columnas: `"Método de pago"`, `"N° ventas"`, `"Monto"` y fila de pie de tabla con totales calculados ([Líneas 163-183](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/dashboard/DashboardPage.jsx#L163-L183)). Estado vacío: `"No hay ingresos registrados este mes."` ([Línea 155](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/dashboard/DashboardPage.jsx#L155)).
- **Modal Productos Activos (`modalActivo === 'productos'`)**:
  - Título: `"Productos Activos"` ([Línea 294](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/dashboard/DashboardPage.jsx#L294)).
  - Columnas: `"Producto"`, `"Categoría"`, `"Stock"`, `"Precio"` ([Líneas 203-206](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/dashboard/DashboardPage.jsx#L203-L206)).
- **Modal Sin Stock (`modalActivo === 'sinStock'`)**:
  - Título: `"Productos Sin Stock"` ([Línea 295](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/dashboard/DashboardPage.jsx#L295)).
  - Filtro estricto `p.stock === 0` ([Línea 190](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/dashboard/DashboardPage.jsx#L190)).
  - Botón inferior de acción: `"Ver y gestionar en Productos"` con `<ChevronRight className="h-3.5 w-3.5" />` redirigiendo a `/productos?alerta=agotado` ([Líneas 815-820](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/dashboard/DashboardPage.jsx#L815-L820)). Estado vacío: `"No hay productos sin stock. ✓"` ([Línea 194](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/dashboard/DashboardPage.jsx#L194)).
- **Modal Solicitudes Pendientes (`modalActivo === 'solicitudes'`)**:
  - Título: `"Solicitudes Pendientes"` ([Línea 296](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/dashboard/DashboardPage.jsx#L296)).
  - Columnas: `"Producto"`, `"Cantidad"`, `"Proveedor sugerido"`, `"Solicitante"`, `"Fecha"` ([Líneas 247-251](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/dashboard/DashboardPage.jsx#L247-L251)). Estado vacío: `"No hay solicitudes pendientes. ✓"` ([Línea 240](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/dashboard/DashboardPage.jsx#L240)).

**CA-5: Escenarios de Aceptación (Gherkin BDD)**

```gherkin
Escenario: Administrador detecta turno de caja olvidado por más de 16 horas
  Dado que el usuario autenticado tiene rol "Administrador"
  Y existe un turno de caja del cajero "Carlos Rojas" con 19 horas de apertura sin cierre
  Cuando accede a "/dashboard"
  Entonces se visualiza en la parte superior el banner ámbar "El turno de Carlos Rojas lleva 19h abierto — probablemente se olvidó de cerrarlo."
  Y al hacer clic en el botón "Ir a Historial de Caja" el usuario es redirigido a "/caja/historial?estado=Abierto"

Escenario: Consulta del modal de detalle de Ticket Promedio
  Dado que el dashboard muestra un Ticket Promedio de "S./ 42.50"
  Cuando el usuario hace clic sobre la tarjeta de "Ticket Promedio"
  Entonces se abre el modal "Ticket Promedio" con ícono de tendencia ámbar
  Y se lista la tabla de ventas completadas ordenadas de mayor a menor monto
  Y en la parte superior se observa la leyenda "Promedio: S/ 42.50 sobre X venta(s) — ordenadas de mayor a menor monto."
```

---

### Historia de Usuario: [HU-UI-019] Reportes Analíticos de Ventas, Margen, Mermas y Exportación PDF
**Archivo fuente verificado:** [`client/src/modules/reportes/ReportesPage.jsx`](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/reportes/ReportesPage.jsx#L1-L750)  
**Clasificación de Evidencia:** `[HECHO]`

**Narrativa:**  
Como Administrador o Gerente,  
quiero analizar reportes consolidados de ventas, márgenes brutos de ganancia por producto, mermas por motivo y stock crítico configurable,  
para exportar un documento PDF profesional y evaluar la rentabilidad del minimarket.

#### Criterios de Aceptación (CA) - Interfaz y Comportamiento Visual:

**CA-1: Encabezado, Exportación PDF y Filtros de Fecha**
- **Encabezado y Descarga**:
  - Breadcrumb: `"Inicio"` (`/dashboard`), separador `"/"`, ítem terminal activo `"Reportes"` ([Línea 325](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/reportes/ReportesPage.jsx#L325)).
  - Título: `"Reporte de Ventas"` ([Línea 329](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/reportes/ReportesPage.jsx#L329)).
  - Subtítulo: `"Genera reportes detallados de ventas en PDF"` ([Línea 330](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/reportes/ReportesPage.jsx#L330)).
  - Botón de exportación: `<Download className="h-4 w-4" /> Descargar Reporte PDF` (`bg-[#6366f1] text-white hover:bg-indigo-600`, [Líneas 332-343](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/reportes/ReportesPage.jsx#L332-L343)). Durante la compilación muestra `<Loader2 className="h-4 w-4 animate-spin" /> Generando...` y se bloquea ([Líneas 337-342](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/reportes/ReportesPage.jsx#L337-L342)).
- **Barra de Filtros**:
  - Input `"Desde"`: Tipo `date`, límites `min={fechaMinima}` y `max={fechaHasta || fechaHoy}` ([Líneas 349-356](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/reportes/ReportesPage.jsx#L349-L356)).
  - Input `"Hasta"`: Tipo `date`, límites `min={fechaInicio || fechaMinima}` y `max={fechaHoy}` ([Líneas 358-366](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/reportes/ReportesPage.jsx#L358-L366)).
  - Botón `"Aplicar filtros"`: Con spinner `Loader2` durante el refresco (`bg-[#6366f1]`, [Líneas 368-375](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/reportes/ReportesPage.jsx#L368-L375)).
  - Botón `"Limpiar"`: Borde gris, restablece los campos de fecha a vacío ([Líneas 376-382](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/reportes/ReportesPage.jsx#L376-L382)).
  - Mensajes de error en fechas:
    - `"La fecha "Desde" no puede ser posterior a la fecha "Hasta""` ([Línea 66](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/reportes/ReportesPage.jsx#L66)).
    - `"Las fechas deben estar entre {fechaMinima} y {fechaHoy}"` ([Línea 71](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/reportes/ReportesPage.jsx#L71)).

**CA-2: Tarjetas de Resumen y Top 10 Productos Más Vendidos**
- **Tarjetas de Resumen Superior**:
  - Tarjeta 1: `"Total de Ventas"` con conteo numérico e ícono `<ShoppingCart />` ([Líneas 397-406](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/reportes/ReportesPage.jsx#L397-L406)).
  - Tarjeta 2: `"Ingresos Totales"` con monto en formato `S/ {monto_total.toFixed(2)}` e ícono `<DollarSign />` ([Líneas 408-417](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/reportes/ReportesPage.jsx#L408-L417)).
  - Tarjeta 3: `"Ticket Promedio"` con monto en formato `S/ {promedio_venta.toFixed(2)}` e ícono `<TrendingUp />` ([Líneas 419-428](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/reportes/ReportesPage.jsx#L419-L428)).
- **Tabla "Top 10 productos más vendidos"**:
  - Título: `"Top 10 productos más vendidos"` acompañado de badge gris `<FileText className="h-4 w-4" /> Se incluirá en el PDF` ([Líneas 435-439](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/reportes/ReportesPage.jsx#L435-L439)).
  - Cabecera violeta índigo `bg-[#6366f1] text-white` con columnas: `"#"` , `"Producto"`, `"Marca"`, `"Unidades vendidas"`, `"Ingresos totales"` ([Líneas 445-451](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/reportes/ReportesPage.jsx#L445-L451)).
  - Podio de medallas en la columna `#`:
    - Posición 1: Círculo dorado `bg-yellow-400 text-white font-bold` con número `1` ([Línea 460](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/reportes/ReportesPage.jsx#L460)).
    - Posición 2: Círculo plateado `bg-gray-300 text-white font-bold` con número `2` ([Línea 462](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/reportes/ReportesPage.jsx#L462)).
    - Posición 3: Círculo bronce `bg-amber-700 text-white font-bold` con número `3` ([Línea 464](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/reportes/ReportesPage.jsx#L464)).
    - Resto de posiciones: Número simple `text-gray-400` ([Línea 466](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/reportes/ReportesPage.jsx#L466)).
  - Barra de progreso relativa al producto más vendido dentro de cada fila ([Líneas 471-475](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/reportes/ReportesPage.jsx#L471-L475)).
  - Estado vacío: `"No hay datos de ventas aún"` ([Línea 495](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/reportes/ReportesPage.jsx#L495)).

**CA-3: Margen por Producto, Ventas por Día y Método**
- **Tabla "Margen por Producto"**:
  - Cabecera esmeralda `bg-emerald-600 text-white` ([Línea 516](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/reportes/ReportesPage.jsx#L516)).
  - Subtítulo aclaratorio: `"Solo productos con costo registrado en sus lotes de compra"` ([Línea 505](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/reportes/ReportesPage.jsx#L505)).
  - Columnas: `"Producto"`, `"Marca"`, `"Categoría"`, `"Vendido"`, `"Ingreso"`, `"Costo"`, `"Margen S/."`, `"Margen %"` ([Líneas 517-524](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/reportes/ReportesPage.jsx#L517-L524)).
  - Color semántico de margen:
    - Positivo: Monto verde `text-emerald-600` y badge `bg-emerald-100 text-emerald-700` ([Líneas 538, 543](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/reportes/ReportesPage.jsx#L538-L543)).
    - Negativo: Monto rojo `text-red-600` y badge `bg-red-100 text-red-700` ([Líneas 538, 543](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/reportes/ReportesPage.jsx#L538-L543)).
  - Estado vacío con microcopy instructivo:  
    `"Sin datos de costo en el período."`  
    `"Registra el costo unitario al ingresar mercadería para ver el margen."` ([Líneas 555-558](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/reportes/ReportesPage.jsx#L555-L558)).
- **Tabla "Ventas por día"**:
  - Columnas: `"Fecha"`, `"Ventas"`, `"Monto Total"` ([Líneas 570-572](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/reportes/ReportesPage.jsx#L570-L572)).
  - Estado vacío: `"No hay ventas en el período seleccionado"` ([Línea 588](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/reportes/ReportesPage.jsx#L588)).
- **Tabla "Ventas por método de pago"**:
  - Columnas: `"Método de Pago"`, `"Ventas"`, `"Monto Total"` ([Líneas 601-603](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/reportes/ReportesPage.jsx#L601-L603)).
  - Estado vacío: `"No hay datos de ventas en el período seleccionado"` ([Línea 619](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/reportes/ReportesPage.jsx#L619)).

**CA-4: Stock Crítico Configurable y Mermas por Motivo**
- **Panel "Stock Crítico" con Umbral Dinámico**:
  - Encabezado con ícono `<AlertTriangle className="h-5 w-5 text-amber-500" />` y título `"Stock Crítico"` ([Líneas 629-631](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/reportes/ReportesPage.jsx#L629-L631)).
  - Control de umbral en línea: Etiqueta `"Umbral:"`, input numérico centrado (por defecto `5`) y botón `"Actualizar"` con ícono `RefreshCw` o spinner `Loader2` ([Líneas 634-653](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/reportes/ReportesPage.jsx#L634-L653)).
  - Columnas: `"Producto"`, `"Marca"`, `"Categoría"`, `"Stock actual"`, `"Mínimo aplicado"` ([Líneas 671-675](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/reportes/ReportesPage.jsx#L671-L675)).
  - Badges de stock actual:
    - `"Sin stock"`: Badge rojo `bg-red-100 text-red-700` ([Líneas 686-688](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/reportes/ReportesPage.jsx#L686-L688)).
    - Stock bajo: Badge ámbar `"{stock} und(s)"` (`bg-amber-100 text-amber-700`, [Líneas 690-692](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/reportes/ReportesPage.jsx#L690-L692)).
  - Microcopy explicativo al pie de tabla:  
    `"Mostrando productos cuyo stock está por debajo de su propio "Stock Mínimo" (si está definido) o del umbral global de {umbral} en caso contrario."` ([Línea 703](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/reportes/ReportesPage.jsx#L703)).
  - Estado vacío: Tarjeta esmeralda `<CheckCircle className="h-5 w-5" /> ✓ Todo el stock está en orden` ([Líneas 662-665](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/reportes/ReportesPage.jsx#L662-L665)).
- **Tabla "Mermas por Motivo"**:
  - Cabecera roja `bg-red-500 text-white` ([Línea 722](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/reportes/ReportesPage.jsx#L722)).
  - Columnas: `"Motivo"`, `"N° Bajas"`, `"Cantidad Total"`, `"Costo Valorizado"` con formato `S/ {monto.toFixed(2)}` ([Líneas 723-726, 735](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/reportes/ReportesPage.jsx#L723-L735)).
  - Estado vacío: `"No hay bajas de inventario en el período seleccionado"` ([Línea 743](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/reportes/ReportesPage.jsx#L743)).

**CA-5: Generación y Formato del PDF Consolidado**
- Archivo generado: Nombre descargado `'reporte_ventas.pdf'` ([Línea 304](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/reportes/ReportesPage.jsx#L304)).
- Estructura del PDF:
  - Encabezado: Título `"MiniMarket"`, subtítulo `"Reporte de Ventas"`, y período `"Reporte del {fechaInicio} al {fechaHasta}"` ([Líneas 150-161](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/reportes/ReportesPage.jsx#L150-L161)).
  - Bloque Resumen: Total de ventas, ingresos totales y ticket promedio ([Líneas 163-174](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/reportes/ReportesPage.jsx#L163-L174)).
  - Tablas estilizadas con `jspdf-autotable`: Ventas por Día, Ventas por Método de Pago, Top 10 Productos Más Vendidos, Margen por Producto y Mermas por Motivo ([Líneas 176-297](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/reportes/ReportesPage.jsx#L176-L297)).
  - Pie de página: `"Generado el {fecha} a las {hora}"` centrado en fuente de 8pt ([Líneas 300-302](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/reportes/ReportesPage.jsx#L300-L302)).

**CA-6: Escenarios de Aceptación (Gherkin BDD)**

```gherkin
Escenario: Modificación dinámica del umbral de stock crítico
  Dado que el usuario administrador ingresa al módulo de reportes
  Cuando cambia el valor del input "Umbral:" de "5" a "10"
  Y pulsa el botón "Actualizar"
  Entonces se muestra el spinner en el botón
  Y la tabla de Stock Crítico se recarga listando los productos con existencias menores a 10 unidades
  Y la nota inferior actualiza su texto indicando "...umbral global de 10 en caso contrario."

Escenario: Exportación completa de reporte a PDF
  Dado que el usuario aplicó un filtro de fechas con ventas registradas
  Cuando hace clic en el botón "Descargar Reporte PDF"
  Entonces el botón pasa al estado "Generando..." con ícono de carga
  Y el navegador descarga automáticamente el archivo "reporte_ventas.pdf" con las tablas consolidadas
  Y el pie del documento incluye la marca temporal exacta de generación
```

---

### Historia de Usuario: [HU-UI-020] Configuración Fiscal, Datos de Empresa y Parámetros SUNAT
**Archivo fuente verificado:** [`client/src/modules/configuracion/ConfiguracionPage.jsx`](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/configuracion/ConfiguracionPage.jsx#L1-L356)  
**Clasificación de Evidencia:** `[HECHO]`

**Narrativa:**  
Como Administrador,  
quiero configurar la razón social de la empresa, RUC validado en SUNAT, dirección, teléfono, porcentaje de IGV y las series autorizadas para boletas y facturas,  
para emitir comprobantes de pago legalmente válidos y mantener sincronizada la facturación del POS en todo el sistema.

#### Criterios de Aceptación (CA) - Interfaz y Comportamiento Visual:

**CA-1: Formulario de Datos del Negocio**
- **Encabezado y Microcopy Normativo**:
  - Ícono y título: `<Settings className="h-6 w-6 text-indigo-500" /> Datos del Negocio` (`text-xl font-bold text-gray-800`, [Líneas 147-148](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/configuracion/ConfiguracionPage.jsx#L147-L148)).
  - Párrafo de advertencia inicial:  
    `"Estos datos aparecen en las boletas y facturas generadas por el sistema. Actualízalos con la información real del negocio antes de salir a producción."` (`text-sm text-gray-500`, [Líneas 152-154](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/configuracion/ConfiguracionPage.jsx#L152-L154)).
- **Campo "Nombre de la empresa"**:
  - Etiqueta: `"Nombre de la empresa"` con asterisco rojo `<span className="text-red-500">*</span>` ([Líneas 159-161](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/configuracion/ConfiguracionPage.jsx#L159-L161)).
  - Comportamiento SUNAT: Si el nombre provino de una consulta exitosa a SUNAT (`nombreDesdeSunat === true`), el input se bloquea en modo solo lectura (`readOnly bg-gray-50 text-gray-600`), mostrando el microcopy:  
    `"Nombre oficial según SUNAT — no editable. "` con botón enlace `"Editar manualmente"` para desbloquearlo si el usuario lo necesita ([Líneas 167-183](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/configuracion/ConfiguracionPage.jsx#L167-L183)).
- **Campo "RUC"**:
  - Etiqueta: `RUC *` ([Línea 189](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/configuracion/ConfiguracionPage.jsx#L189)).
  - Input: Placeholder `"20123456789"`, `maxLength={11}`, sanitizado solo números ([Líneas 197-206](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/configuracion/ConfiguracionPage.jsx#L197-L206)).
  - Botón de consulta SUNAT: `<Search className="h-4 w-4" />` o `<Loader2 className="h-4 w-4 animate-spin" />` con título `"Consultar SUNAT"` ([Líneas 207-215](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/configuracion/ConfiguracionPage.jsx#L207-L215)). Habilitado solo si tiene 11 dígitos y empieza con `20` (`/^20\d{9}$/`).
  - Validaciones en vivo:
    - Si longitud > 0 y < 11: `"El RUC debe tener 11 dígitos"` (`text-xs text-red-500`, [Línea 218](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/configuracion/ConfiguracionPage.jsx#L218)).
    - Si longitud es 11 pero no inicia con 20: `"El RUC debe empezar con 20 (persona jurídica): estos son datos de una empresa, no de una persona natural"` ([Línea 221](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/configuracion/ConfiguracionPage.jsx#L221)).
- **Campo "Dirección"**:
  - Etiqueta: `Dirección *`, input con placeholder `"Av. Ejemplo 123, Trujillo"`, required ([Líneas 227-236](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/configuracion/ConfiguracionPage.jsx#L227-L236)). Se autocompleta con SUNAT si la API devuelve dirección.
- **Campo "Teléfono"**:
  - Etiqueta: `Teléfono *`, placeholder `"044-123456"` ([Líneas 242-251](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/configuracion/ConfiguracionPage.jsx#L242-L251)).
  - Microcopy de ayuda: `"Celular de 9 dígitos que inicia con 9 o fijo con código de ciudad (ej. 044-123456)"` ([Línea 253](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/configuracion/ConfiguracionPage.jsx#L253)).
  - Validación con regex: `^(9\d{8}|0\d{1,3}-?\d{6,7})$`. Error: `"El teléfono debe ser un celular (9XXXXXXXX) o un fijo con código de área (ej. 044-123456)"` ([Líneas 78, 90](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/configuracion/ConfiguracionPage.jsx#L78-L90)).
- **Campo "IGV (%)"**:
  - Etiqueta: `IGV (%) *`, input numérico `min={0} max={100} step={1}` ([Líneas 258-269](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/configuracion/ConfiguracionPage.jsx#L258-L269)).
  - Microcopy referencial: `"Actualmente en Perú: 18%"` (`text-xs text-gray-400`, [Línea 271](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/configuracion/ConfiguracionPage.jsx#L271)). Error si está fuera de rango: `"El IGV debe ser un número entre 0 y 100"` ([Línea 95](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/configuracion/ConfiguracionPage.jsx#L95)).
- **Campos de Series de Comprobantes (Boleta y Factura)**:
  - Fila en cuadrícula de 2 columnas ([Línea 274](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/configuracion/ConfiguracionPage.jsx#L274)):
    - Campo `"Serie de boleta *"`: Placeholder `"B001"`, `maxLength={4}`, forzado a mayúsculas ([Líneas 276-290](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/configuracion/ConfiguracionPage.jsx#L276-L290)). Error de formato: `"La serie de boleta debe tener el formato: 1 letra + 3 dígitos (ej. B001)"` ([Línea 100](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/configuracion/ConfiguracionPage.jsx#L100)).
    - Campo `"Serie de factura *"`: Placeholder `"F001"`, `maxLength={4}`, forzado a mayúsculas ([Líneas 293-307](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/configuracion/ConfiguracionPage.jsx#L293-L307)). Error de formato: `"La serie de factura debe tener el formato: 1 letra + 3 dígitos (ej. F001)"` ([Línea 103](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/configuracion/ConfiguracionPage.jsx#L103)).
  - Microcopy normativo SUNAT:  
    `"Formato SUNAT: 1 letra + 3 dígitos. Se usan para numerar boletas y facturas (ej. B001-00000023)."` ([Línea 310](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/configuracion/ConfiguracionPage.jsx#L310)).

**CA-2: Confirmación de Cambio Crítico de RUC y Guardado**
- **Banner de Confirmación de Titularidad de RUC**:
  - Si el usuario modifica el RUC respecto al valor original (`form.ruc !== rucOriginal`), antes de guardar se despliega un panel amarillo preventivo ([Líneas 110, 319-342](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/configuracion/ConfiguracionPage.jsx#L110-L342)):
    - Título: `"¿Este RUC ({form.ruc}) es el de tu negocio?"` (`font-medium text-yellow-800`, [Línea 321](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/configuracion/ConfiguracionPage.jsx#L321)).
    - Mensaje de responsabilidad legal:  
      `"Vas a reemplazar el RUC actual ({rucOriginal}) por uno distinto. El sistema no puede verificar la titularidad, así que confirma antes de continuar."` ([Líneas 322-325](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/configuracion/ConfiguracionPage.jsx#L322-L325)).
    - Botón de confirmación: `"Sí, guardar este RUC"` (`bg-yellow-600 hover:bg-yellow-700 text-white`, [Líneas 327-332](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/configuracion/ConfiguracionPage.jsx#L327-L332)).
    - Botón de cancelación: `"Cancelar"` (`border-yellow-300 text-yellow-800 hover:bg-yellow-100`, restablece el RUC al original, [Líneas 131-134, 333-339](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/configuracion/ConfiguracionPage.jsx#L131-L339)).
- **Botón de Guardado y Feedback**:
  - Botón principal: `"Guardar cambios"` (`w-full bg-[#6366f1] text-white hover:bg-indigo-600`, [Líneas 344-350](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/configuracion/ConfiguracionPage.jsx#L344-L350)). Cambia a `"Guardando..."` y se deshabilita durante la petición.
  - Banner verde de éxito: `"Configuración guardada correctamente"` (`bg-green-50 text-green-600`, [Línea 316](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/configuracion/ConfiguracionPage.jsx#L316)).
  - Sincronización en caliente: Ejecuta `notificarConfiguracionActualizada()` para que módulos activos como `/ventas` actualicen sus series de comprobante e IGV en tiempo real sin requerir recargar la página ([Línea 123](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/configuracion/ConfiguracionPage.jsx#L123)).

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

## 7. Matriz Maestra Consolidada de Reglas de Negocio en la Interfaz (RN-01 a RN-16)

| Regla de Negocio | Descripción Operativa y Comportamiento en UI | Componente React Verificado | Cita Verificada (Líneas) | Estado Evidencia |
| :--- | :--- | :--- | :---: | :---: |
| **RN-01: Control de Turno Previo en Ventas** | Bloquea la terminal POS con banner ámbar y botón directo a caja si el cajero no tiene turno activo | `VentasPage.jsx` | [Líneas 585-588, 683-698](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/ventas/VentasPage.jsx#L585-L698) | `[HECHO]` |
| **RN-02: Blindaje de Vuelto vs Saldo Disponible** | Impide registrar ventas en efectivo si el vuelto supera el efectivo en gaveta con alerta roja | `VentasPage.jsx` | [Líneas 590-593, 1226-1231](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/ventas/VentasPage.jsx#L590-L1231) | `[HECHO]` |
| **RN-03: Trazabilidad Estricta IziPay / Yape** | Obliga a capturar el N° de autorización de 6 dígitos con advertencia antifraude antes de validar | `VentasPage.jsx` | [Líneas 1146-1178](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/ventas/VentasPage.jsx#L1146-L1178) | `[HECHO]` |
| **RN-04: Facturación SUNAT Offline Contingente** | Habilita campos manuales con borde ámbar ante caída (503) de los servicios de consulta SUNAT | `VentasPage.jsx` | [Líneas 558-561, 1074-1088](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/ventas/VentasPage.jsx#L558-L1088) | `[HECHO]` |
| **RN-05: Exclusión de Stock Vencido en POS** | Filtra y bloquea unidades vencidas mostrando advertencias diferenciadas en tarjetas de producto | `VentasPage.jsx` | [Líneas 610-618, 862-898](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/ventas/VentasPage.jsx#L610-L898) | `[HECHO]` |
| **RN-06: Reposición Selectiva con Motivos en Anulación** | Permite marcar por ítem si repone stock o exige motivo de baja (dañado, vencido, robo, etc.) | `HistorialVentasPage.jsx` | [Líneas 551-594](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/ventas/HistorialVentasPage.jsx#L551-L594) | `[HECHO]` |
| **RN-07: Fondo Mínimo de Apertura S/ 500** | Valida que el monto inicial en caja sea al menos S/ 500.00 para garantizar capacidad de vuelto | `CajaPage.jsx` | [Líneas 45, 89-91, 328-330](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/caja/CajaPage.jsx#L45-L330) | `[HECHO]` |
| **RN-08: Alerta de Turnos Olvidados (>16 horas)** | Identifica y alerta turnos abiertos por más de 16h para permitir su cierre forzado por gerencia | `DashboardPage.jsx` / `HistorialCajaPage.jsx` | [Dashboard L25, 530-546](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/dashboard/DashboardPage.jsx#L25-L546) / [Caja L15, 216-220](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/caja/HistorialCajaPage.jsx#L15-L220) | `[HECHO]` |
| **RN-09: Cierre Forzado con Registro de Autoría** | Exige motivo obligatorio y registra al Administrador/Gerente en el arqueo forzado de turnos | `HistorialCajaPage.jsx` | [Líneas 59-64, 85-125, 303-309](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/caja/HistorialCajaPage.jsx#L59-L309) | `[HECHO]` |
| **RN-10: Criterio de Estado en Conteo de Ventas** | Cuenta estrictamente ventas completadas excluyendo anuladas para evitar desajustes en KPIs | `DashboardPage.jsx` | [Líneas 433-441](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/dashboard/DashboardPage.jsx#L433-L441) | `[HECHO]` |
| **RN-11: Rango Temporal Acotado (Tope 10 Años)** | Bloquea fechas manuales absurdas restringiendo la consulta entre hoy y 10 años hacia atrás | `DashboardPage.jsx` / `ReportesPage.jsx` | [Dashboard L20, 361-364](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/dashboard/DashboardPage.jsx#L20-L364) / [Reportes L13, 69-72](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/reportes/ReportesPage.jsx#L13-L72) | `[HECHO]` |
| **RN-12: Umbral de Stock Crítico Híbrido** | Prioriza el stock mínimo individual del producto sobre el umbral global configurable en reportes | `ReportesPage.jsx` | [Líneas 51-55, 633-705](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/reportes/ReportesPage.jsx#L51-L705) | `[HECHO]` |
| **RN-13: Regla de RUC Persona Jurídica (Prefijo 20)** | Exige que el RUC del negocio tenga 11 dígitos y empiece obligatoriamente por 20 | `ConfiguracionPage.jsx` | [Líneas 85-87, 220-222](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/configuracion/ConfiguracionPage.jsx#L85-L222) | `[HECHO]` |
| **RN-14: Formato de Serie SUNAT (1 Letra + 3 Dígitos)** | Valida máscara estándar SUNAT (ej. B001, F001) forzando mayúsculas en boletas y facturas | `ConfiguracionPage.jsx` | [Líneas 98-104, 274-311](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/configuracion/ConfiguracionPage.jsx#L98-L311) | `[HECHO]` |
| **RN-15: Confirmación de Titularidad en RUC Empresa** | Despliega modal de advertencia ante cambios de RUC antes de permitir sobreescribir la configuración | `ConfiguracionPage.jsx` | [Líneas 106-113, 319-342](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/configuracion/ConfiguracionPage.jsx#L106-L342) | `[HECHO]` |
| **RN-16: Sincronización Reactiva de Configuración Fiscal** | Notifica en tiempo real a las pestañas y terminales POS abiertas al actualizar IGV o series | `ConfiguracionPage.jsx` | [Líneas 4, 123](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/configuracion/ConfiguracionPage.jsx#L4-L123) | `[HECHO]` |

---

## 8. Hallazgos Críticos Consolidados de Interfaz y Usabilidad (Frontend vs Documentación Previa)

1. **`[HECHO]` Ausencia Total de Pantalla "Mi Perfil" / "Cambiar Clave Propia"**:
   - En el menú lateral ([`MainLayout.jsx: Líneas 28-43`](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/components/MainLayout.jsx#L28-L43)) no existe ningún enlace hacia un perfil propio o modal para cambio de contraseña estando autenticado. Todo cambio de contraseña en la UI está restringido a la recuperación no autenticada en `/reset-password` o a la asignación inicial al crear un usuario en `/usuarios`.
2. **`[HECHO]` Campo Stock Mínimo Bloqueado al Crear Producto**:
   - En [`ProductosPage.jsx:L362`](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/productos/ProductosPage.jsx#L362), el input "Stock Mínimo" está deshabilitado (`disabled={esCreacion}`) con valor inicial fijo `10` y microcopy explícito: *"Valor preestablecido (10). Se puede ajustar más adelante editando el producto."* Esto previene descalibraciones del kardex durante el alta inicial.
3. **`[HECHO]` Bloqueo Estricto de Proveedores con RUC 10 o de Baja en SUNAT**:
   - En [`ProveedoresPage.jsx:L108-121`](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/proveedores/ProveedoresPage.jsx#L108-L121), el formulario impide registrar proveedores cuyo RUC empiece por 10 (persona natural), no se encuentre en estado `ACTIVO` o no tenga condición de `HABIDO`.
4. **`[HECHO]` Restricción de Primera Carga para el Almacenero en Entradas**:
   - En [`InventarioPage.jsx:L316-318`](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/inventario/InventarioPage.jsx#L316-L318), el Almacenero **no puede ingresar mercadería libremente** para productos existentes; el selector solo le permite registrar la primera entrada (stock inicial 0). Cualquier reposición subsecuente debe originarse mediante una Solicitud aprobada.
5. **`[HECHO]` Bajas por Motivo Vencido con Bloqueo de Cantidad**:
   - En [`InventarioPage.jsx:L828-836`](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/inventario/InventarioPage.jsx#L828-L836), cuando se selecciona el motivo "Vencido", el campo de cantidad no es editable: el sistema bloquea el input y toma automáticamente el 100% del stock caducado del lote o del producto.
6. **`[HECHO]` Lote Obligatorio Exclusivamente para Motivo Dañado**:
   - En [`InventarioPage.jsx:L787, 812`](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/inventario/InventarioPage.jsx#L787-L812), el campo "Lote" solo es obligatorio (`required`) cuando el motivo de baja es "Dañado", obligando a especificar qué partida física se estropeó para no castigar lotes en buen estado.
7. **`[HECHO]` Exigencia de Vencimiento en Sobrantes de Conteo Físico**:
   - En [`InventarioPage.jsx:L1081-1099`](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/inventario/InventarioPage.jsx#L1081-L1099), cuando un ajuste físico arroja un sobrante (`Cantidad Contada > Stock`), el sistema despliega obligatoriamente el campo de fecha de vencimiento si el producto es perecedero para no generar lotes sin expiración en el kardex FEFO.
8. **`[HECHO]` Prevención de Concurrencia en Operaciones Críticas**:
   - Se implementan referencias síncronas (`useRef(false)`) en Login, Logout, Realizar Venta, Aprobación de Arqueo y Cierre Forzado para blindar la UI contra dobles clics en el mismo tick de ejecución de React.

