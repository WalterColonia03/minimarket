# Informe Maestro de Auditoría Técnica y Trazabilidad Scrum — Minimarket

**Fecha de Consolidación:** 30 de Septiembre de 2026  
**Auditor:** Auditor Técnico Senior de Software & Especialista en Documentación Ágil (Scrum)  
**Proyecto:** Sistema de Gestión Integral para Minimarket  
**Documento Único Centralizado:** `docs/auditoria/INFORME-AUDITORIA-TECNICA-CONSOLIDADA.md`  
**Estado:** Auditoría Técnica Integral por Fases (Fase de Solo Lectura, sin modificación a código operativo ni a documentos de planificación Scrum).  

---

## 0. Marco Metodológico y Reglas Fijas de Auditoría

En cumplimiento estricto de las directrices fijadas para esta auditoría:
1. **Evidencia obligatoria:** Todo hallazgo cita archivo y línea exactos (`archivo:línea`), verificados en el código ejecutable y no heredados sin contrastar.
2. **Prohibido inventar:** Ausencia de evidencia se declara taxativamente como *"no hay evidencia suficiente"*.
3. **Calificación epistemológica:** Toda aseveración se rotula formalmente como **`[HECHO]`** (verificado empíricamente con cita), **`[SUPUESTO]`** (inferencia técnica razonada) o **`[PREGUNTA]`** (decisión reservada al equipo/PO).
4. **Fase de solo lectura:** Prohibida la alteración de lógica backend/frontend o redacción de backlog preexistente.
5. **Consolidación en documento único:** Toda la auditoría del sistema (análisis transversal global y análisis detallado módulo por módulo) reside en este único archivo para erradicar la dispersión documental.
6. **Profundidad antes que velocidad:** Análisis exhaustivo historia por historia, modelo por modelo y componente por componente.

---

## 1. Tablero General de Avance de la Auditoría

| Módulo / Dominio | Épica | Historias | Reglas de Negocio Clave | Estado de Auditoría | Coincidencia Global Estimada |
|---|---|:---:|---|:---:|:---:|
| **Transversal Global** | **SISTEMA COMPLETO** | 72 HUs | RN-01 a RN-16 | **Completado e Integrado** | — |
| **Módulo 1** | **EPIC-SEG** (Seguridad y Usuarios) | 13 HUs | RN-12 | **Completado e Integrado** | 81.5% |
| **Módulo 2** | **EPIC-CAT** (Catálogo y Entidades) | 17 HUs | RN-01, RN-03 | **Completado e Integrado** | 89.4% |
| **Módulo 3** | **EPIC-INV** (Inventario y Almacén) | 11 HUs | RN-01, RN-04, RN-05, RN-14, RN-16 | **Completado e Integrado** | 86.4% |
| **Módulo 4** | **EPIC-VEN** (Ventas, POS y Caja) | 15 HUs | RN-02, RN-07, RN-08, RN-10, RN-11, RN-13, RN-15 | **Completado e Integrado** | 89.7% |
| **Módulo 5** | **EPIC-REP / CONF** (Reportes, Dashboards y Configuración) | 16 HUs | RN-06, RN-14 | **Completado e Integrado** | 85.1% |
| **TOTAL PROYECTO** | **5 ÉPICAS CONSOLIDADAS** | **72 HUs (201 pts)** | **RN-01 a RN-16** | **AUDITORÍA 100% COMPLETADA** | **86.9%** |

---

# SECCIÓN GLOBAL · MATRIZ TRANSVERSAL DE INCONSISTENCIAS Y TRAZABILIDAD BIDIRECCIONAL (DOC-15)

Esta sección consolida el barrido de alto nivel entre la documentación ágil (`docs/planificacion-scrum/`) y el código fuente en producción (`server/` y `client/`).

---

### G.1 Inconsistencias en Reglas de Negocio (RN vs Código Real)

#### G.1.1 RN-01: Guía de Remisión en Abastecimiento
- **En Documentación ([08_Reglas_de_Negocio_y_Glosario.md:L19](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/docs/planificacion-scrum/08_Reglas_de_Negocio_y_Glosario.md#L19)):**  
  > *"RN-01 | Control de Abastecimiento Directo | Guía de remisión obligatoria | Supuesto del equipo – validar con el PO | Almacenero | HU-INV-01, HU-SOL-05"*
- **En Código Fuente:**  
  - **[HECHO]** En [EntradaMercaderia.js:L1-78](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/server/models/EntradaMercaderia.js#L1-L78), el modelo no posee la columna `guia_remision` ni ningún campo afín.
  - **[HECHO]** En [inventario.controller.js:L28-120](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/server/controllers/inventario.controller.js#L28-L120) (`registrarEntrada`) y líneas 563-649 (`completarSolicitud`), el backend no recibe ni valida ninguna guía de remisión física.
- **Veredicto:** **Ruptura de trazabilidad.** La regla RN-01 es una política no implementada en el sistema.

#### G.1.2 RN-02: Control de Duplicidad en Pagos Yape
- **En Documentación ([08_Reglas_de_Negocio_y_Glosario.md:L20](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/docs/planificacion-scrum/08_Reglas_de_Negocio_y_Glosario.md#L20)):**  
  > *"RN-02 | Protección contra Pagos Duplicados Yape | Nro de operación único por día | Supuesto del equipo – validar con el PO"*
- **En Código Fuente:**  
  - **[HECHO]** En [Venta.js:L113-120](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/server/models/Venta.js#L113-L120), el campo implementado es `referencia_pago`, restringido por expresión regular a exactamente 6 dígitos numéricos (`validate: { is: /^\d{6}$/ }`), y cuenta con restricción `unique: true` a nivel de base de datos **global** (no se resetea por día).
  - **[HECHO]** Corresponde al número de autorización de IziPay (POS físico), no a un número de operación arbitrario de Yape.
- **Veredicto:** **Inconsistencia de especificación.** El código es más estricto que la documentación (unicidad histórica global vs. unicidad diaria) y exige formato de 6 dígitos de POS IziPay.

#### G.1.3 RN-04: Justificación Obligatoria de Mermas (> S/ 50 con Firma)
- **En Documentación ([08_Reglas_de_Negocio_y_Glosario.md:L22](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/docs/planificacion-scrum/08_Reglas_de_Negocio_y_Glosario.md#L22)):**  
  > *"RN-04 | Justificación Obligatoria de Mermas | Firma si valor > S/ 50 | Supuesto del equipo – validar con el PO | Almacenero | HU-INV-02"*
- **En Código Fuente:**  
  - **[HECHO]** En [BajaInventario.js:L4-52](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/server/models/BajaInventario.js#L4-L52), la entidad almacena únicamente `producto_id`, `cantidad`, `motivo`, `motivo_detalle`, `usuario_id` y `venta_id`.
  - **[HECHO]** En [inventario.controller.js:L160-262](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/server/controllers/inventario.controller.js#L160-L262) (`registrarBaja`), no existe ninguna comprobación de importe monetario ni mecanismo de firma física/digital.
- **Veredicto:** **Ruptura de trazabilidad.** La regla RN-04 no existe en la implementación.

#### G.1.4 RN-07: Privacidad y Segregación de Ventas
- **En Documentación ([08_Reglas_de_Negocio_y_Glosario.md:L25](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/docs/planificacion-scrum/08_Reglas_de_Negocio_y_Glosario.md#L25)):**  
  > *"RN-07 | Privacidad y Segregación de Ventas | Vendedor solo ve su turno | Supuesto del equipo – validar con el PO | Vendedor | HU-VEN-05"*
- **En Código Fuente:**  
  - **[HECHO]** En [venta.controller.js:L151-154](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/server/controllers/venta.controller.js#L151-L154):
    ```javascript
    // Un Vendedor solo ve sus propias ventas; Administrador/Gerente ven todas.
    if (req.usuario.rol === 'Vendedor') {
      where.usuario_id = req.usuario.id;
    }
    ```
- **Veredicto:** **Inconsistencia lógica.** El filtro real es por `usuario_id`. Un vendedor puede consultar todas las ventas que ha realizado históricamente a lo largo de todos sus turnos pasados, no únicamente las de su turno activo.

#### G.1.5 RN-08: Límite Temporal para Anulaciones
- **En Documentación ([08_Reglas_de_Negocio_y_Glosario.md:L26](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/docs/planificacion-scrum/08_Reglas_de_Negocio_y_Glosario.md#L26)):**  
  > *"RN-08 | Límite Temporal para Anulaciones | Máximo 24 horas tras emisión | Supuesto del equipo – validar con el PO | HU-VEN-06"*
- **En Código Fuente:**  
  - **[HECHO]** En [venta.domain.service.js:L232-235](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/server/services/venta.domain.service.js#L232-L235):
    ```javascript
    const turno = await Turno.findByPk(movimientoVenta.turno_id);
    if (!turno || turno.estado !== 'Abierto') {
      throw { status: 400, mensaje: 'Solo se pueden anular ventas del turno de caja actualmente abierto' };
    }
    ```
- **Veredicto:** **Inconsistencia funcional.** El código no valida horas transcurridas (ni 24 h ni ninguna otra marca temporal); la anulación se bloquea si el turno de caja donde se cobró ya fue cerrado (incluso si ocurrió hace 1 hora).

#### G.1.6 RN-12: Identidad Unívoca de Empleados mediante DNI
- **En Documentación ([08_Reglas_de_Negocio_y_Glosario.md:L30](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/docs/planificacion-scrum/08_Reglas_de_Negocio_y_Glosario.md#L30)):**  
  > *"RN-12 | Identidad Unívoca de Empleados | DNI debe ser único en la BD | Supuesto del equipo – validar con el PO | Administrador | HU-USR-02, HU-USR-03"*
- **En Código Fuente:**  
  - **[HECHO]** En [Usuario.js:L4-71](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/server/models/Usuario.js#L4-L71), la tabla `usuarios` **no tiene columna DNI**.
  - **[HECHO]** En [usuario.controller.js:L36-60](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/server/controllers/usuario.controller.js#L36-L60) y en la vista React [UsuariosPage.jsx](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/usuarios/UsuariosPage.jsx), el identificador único es estrictamente el campo `email`.
- **Veredicto:** **Inconsistencia crítica.** La regla de negocio exige un campo inexistente en la estructura de base de datos de usuarios.

---

### G.2 Inconsistencias en Criterios de Aceptación Críticos

#### G.2.1 HU-AUTH-02: Bloqueo de Cuenta por Intentos Fallidos
- **En Documentación ([01_EPIC-SEG.md:L48](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/docs/planificacion-scrum/03_Product_Backlog/01_EPIC-SEG.md#L48)):** Bloqueo al tercer intento por 15 minutos o desbloqueo manual por el Administrador.
- **En Código Fuente ([auth.controller.js:L12](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/server/controllers/auth.controller.js#L12)):** `const INTENTOS_MAX = 5`.
- **Veredicto:** **Discrepancia paramétrica.** El sistema bloquea al **quinto intento fallido**, no al tercero, y no existe endpoint de desbloqueo manual.

#### G.2.2 HU-AUTH-04: Control de Sesión Única por Usuario
- **En Documentación ([01_EPIC-SEG.md:L86](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/docs/planificacion-scrum/03_Product_Backlog/01_EPIC-SEG.md#L86)):** El sistema no permite el nuevo acceso hasta cerrar la sesión previa.
- **En Código Fuente ([auth.controller.js:L57-71](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/server/controllers/auth.controller.js#L57-L71)):** Permite el nuevo login y expulsa activamente la sesión previa vía incremento de `session_version`.
- **Veredicto:** **Contradicción arquitectural.** La documentación describe bloqueo de login; el código implementa expulsión/invalidación de la sesión anterior.

#### G.2.3 HU-CAJA-07: Forzar Cierre de Turno Ajeno
- **En Documentación ([04_EPIC-VEN.md:L222](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/docs/planificacion-scrum/03_Product_Backlog/04_EPIC-VEN.md#L222)):** Tras 12 horas abiertas, el turno se cierra asumiendo que el monto declarado es igual al esperado en sistema (cierre a ciegas automático).
- **En Código Fuente ([caja.controller.js:L140-155](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/server/controllers/caja.controller.js#L140-L155)):** El código **prohíbe el cierre a ciegas**. Exige obligatoriamente ingresar los montos contados reales (`monto_contado_efectivo`, `monto_contado_yape`) y motivo del cierre forzado. Tampoco verifica si pasaron 12 horas.
- **Veredicto:** **Contradicción flagrante.** El código implementa exactamente lo contrario al criterio de la HU (exige arqueo manual obligatorio).

#### G.2.4 HU-LOG-01: Registro de Auditoría de Accesos
- **En Documentación ([01_EPIC-SEG.md:L200-201](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/docs/planificacion-scrum/03_Product_Backlog/01_EPIC-SEG.md#L200-L201)):** Listar accesos exitosos y fallidos con IP o terminal.
- **En Código Fuente:** [LogAcceso.js:L4-44](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/server/models/LogAcceso.js#L4-L44) no tiene columna `ip` ni `terminal`, y [auth.controller.js](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/server/controllers/auth.controller.js) no audita fallos de contraseña.
- **Veredicto:** **Criterios no cumplidos en código.**

#### G.2.5 HU-CLI-02: Registro Automático de Clientes al Vender
- **En Documentación ([02_EPIC-CAT.md:L166-175](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/docs/planificacion-scrum/03_Product_Backlog/02_EPIC-CAT.md#L166-L175)):** Registra automáticamente a los clientes en la base de datos tanto para ventas con Boleta (DNI) como con Factura (RUC).
- **En Código Fuente ([venta.domain.service.js:L143-151](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/server/services/venta.domain.service.js#L143-L151)):** `Cliente.findOrCreate` solo se dispara si existe `cliente_dni`. La entidad `Cliente` no posee campo RUC; las facturas guardan la razón social en la venta, pero no en el catálogo de clientes.
- **Veredicto:** **Alcance asimétrico.** El autoregistro solo aplica para personas naturales con DNI.

---

### G.3 Inconsistencias en Roles, Permisos y Actores (RBAC)

| Historia de Usuario | Actor en Documentación | Comportamiento Real en Código | Cita de Evidencia en Código | Veredicto |
|---|---|---|---|---|
| **HU-REP-05** | *"Como Almacenero..."* ([05_EPIC-REP.md:L125](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/docs/planificacion-scrum/03_Product_Backlog/05_EPIC-REP.md#L125)) | **HTTP 403 Forbidden** para Almacenero. Solo Administrador y Gerente. | [reporte.routes.js:L8](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/server/routes/reporte.routes.js#L8), [App.jsx:L128](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/App.jsx#L128) | **Inconsistencia grave** |
| **HU-DASH-03** | *"Como Administrador o Almacenero..."* ([05_EPIC-REP.md:L74](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/docs/planificacion-scrum/03_Product_Backlog/05_EPIC-REP.md#L74)) | Almacenero es redirigido a `/inventario` al intentar ver el Dashboard. | [PrivateRoute.jsx:L10,29](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/components/PrivateRoute.jsx#L10), [App.jsx:L48](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/App.jsx#L48) | **Inconsistencia grave** |
| **HU-VEN-06** | *"Como Administrador o Vendedor autorizado..."* ([04_EPIC-VEN.md:L127](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/docs/planificacion-scrum/03_Product_Backlog/04_EPIC-VEN.md#L127)) | Vendedor no tiene botón de anular ni permiso en la API. Exclusivo de Admin/Gerente. | [venta.routes.js:L47](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/server/routes/venta.routes.js#L47), [HistorialVentasPage.jsx:L22](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/ventas/HistorialVentasPage.jsx#L22) | **Inconsistencia de actor** |
| **HU-PROD-01** | *"Como Vendedor o Almacenero..."* ([02_EPIC-CAT.md:L74](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/docs/planificacion-scrum/03_Product_Backlog/02_EPIC-CAT.md#L74)) | Vendedor tiene bloqueado el acceso a `/productos`. Solo consulta en el POS. | [producto.routes.js:L19](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/server/routes/producto.routes.js#L19), [App.jsx:L80](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/App.jsx#L80) | **Inconsistencia de actor** |
| **HU-USR-02 al 06** | *"Como Administrador..."* ([01_EPIC-SEG.md](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/docs/planificacion-scrum/03_Product_Backlog/01_EPIC-SEG.md)) | Administrador tiene **Solo Lectura** en `/usuarios`. Crear, editar, desactivar y forzar cierre es exclusivo de **SuperAdmin**. | [usuario.routes.js:L33,40,58,65](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/server/routes/usuario.routes.js#L33), [UsuariosPage.jsx:L264-279](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/usuarios/UsuariosPage.jsx#L264-L279) | **Inconsistencia de privilegio** |
| **HU-CLI-03** | *"Como Vendedor o Administrador..."* ([02_EPIC-CAT.md:L303](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/docs/planificacion-scrum/03_Product_Backlog/02_EPIC-CAT.md#L303)) | Vendedor tiene prohibida la edición de email (HTTP 403) y no accede a `/clientes`. | [cliente.routes.js:L23](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/server/routes/cliente.routes.js#L23), [App.jsx:L160](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/App.jsx#L160) | **Inconsistencia de privilegio** |

---

### G.4 Inconsistencias de Alcance y Deuda Técnica no Declarada

#### G.4.1 HU-VEN-08: Exportar Historial de Ventas a CSV
- **En Documentación ([06_Sprint_Backlog.md:L254](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/docs/planificacion-scrum/06_Sprint_Backlog.md#L254)):**  
  Comprometida para el Sprint 3 (REL-3) con 3 puntos de historia y tareas técnicas de desarrollo (TAR-HU-VEN-08-04 a 08).
- **En Código Fuente:**  
  - **[HECHO]** No existe ningún endpoint en `server/routes/venta.routes.js` que emita formato CSV.
  - **[HECHO]** En [HistorialVentasPage.jsx:L1-658](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/ventas/HistorialVentasPage.jsx#L1-L658), no existe ningún botón ni función para descargar o procesar archivos `.csv`.
- **Veredicto:** **Funcionalidad fantasma.** La historia figura planificada con horas de construcción ejecutadas en la documentación, pero no tiene una sola línea de código en el repositorio.

---

### G.5 Trazabilidad de Verificación y Pruebas Automatizadas (DoD)

- **En Documentación ([06_Sprint_Backlog.md:L21-22](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/docs/planificacion-scrum/06_Sprint_Backlog.md#L21-L22)):**  
  > Se declaran 206.0 horas de verificación independiente asignadas a tareas de prueba unitaria (`·6: Probar de unidad`) para el 100 % de las 72 historias de usuario bajo la regla `Construye ≠ Verifica`.
- **En Código Fuente:**  
  - **[HECHO]** En el backend ([server/tests/integration/](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/server/tests/integration/)), existen únicamente **5 archivos de prueba**:
    1. `caja_concurrencia.test.js`
    2. `fefo_consumption.test.js`
    3. `merma_robo.test.js`
    4. `sesion_unica.test.js`
    5. `sunat_reemision.test.js`
  - **[HECHO]** En el frontend, solo existen 2 pruebas de componentes: `VentasScanner.test.jsx` y `CajaPage.test.jsx`.
- **Veredicto:** **Brecha de trazabilidad en aseguramiento de calidad.** 65 de las 72 historias de usuario planificadas no cuentan con un archivo de test automatizado en el repositorio. La verificación de dichas historias fue manual.

---

# SECCIÓN I · MÓDULO 1: SEGURIDAD, AUTENTICACIÓN Y GESTIÓN DE USUARIOS (EPIC-SEG)

### Alcance
13 Historias de Usuario ([01_EPIC-SEG.md](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/docs/planificacion-scrum/03_Product_Backlog/01_EPIC-SEG.md)): `HU-AUTH-01` a `HU-AUTH-06`, `HU-USR-01` a `HU-USR-06`, `HU-LOG-01`; Regla `RN-12`; modelos [Usuario.js](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/server/models/Usuario.js), [LogAcceso.js](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/server/models/LogAcceso.js); controladores [auth.controller.js](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/server/controllers/auth.controller.js), [usuario.controller.js](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/server/controllers/usuario.controller.js), [logAcceso.controller.js](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/server/controllers/logAcceso.controller.js); vistas React correspondientes y test [sesion_unica.test.js](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/server/tests/integration/sesion_unica.test.js).

---

### 1.1 Auditoría Historia por Historia (EPIC-SEG)

#### HU-AUTH-01 · Iniciar sesión
* **Planificación:** Must have · 5 pts · SPR-1 · REL-1. Redirección a "dashboard principal correspondiente a su rol".
* **Código:**
  - **[HECHO]** Backend implementado en [auth.controller.js:L15-95](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/server/controllers/auth.controller.js#L15-L95). Valida `activo: true`, contraseña Bcrypt y aplica rate limiting de 10 peticiones cada 15 min en [auth.routes.js:L8-14](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/server/routes/auth.routes.js#L8-L14).
  - **[HECHO]** En [LoginPage.jsx:L7-13](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/auth/LoginPage.jsx#L7-L13), `ROL_REDIRECT` envía a `Vendedor` a `/ventas` y a `Almacenero` a `/inventario` directamente, dado que el acceso a `/dashboard` les está vedado en [App.jsx:L48](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/App.jsx#L48).
* **Hallazgo:** Discrepancia conceptual menor en Criterio 1: los roles operativos no tienen "dashboard principal", sino que van a sus terminales de trabajo.
* **Calificación:** **Cumple al 90%**.

#### HU-AUTH-02 · Bloquear cuenta por intentos fallidos
* **Planificación:** Must have · 3 pts · SPR-1 · REL-1. Bloqueo tras 3 intentos fallidos por 15 minutos o desbloqueo manual por el Administrador.
* **Código:**
  - **[HECHO]** En [auth.controller.js:L12](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/server/controllers/auth.controller.js#L12), `const INTENTOS_MAX = 5`. El bloqueo se activa al 5to fallo, no al 3ro.
  - **[HECHO]** El desbloqueo es puramente automático por tiempo (`bloqueado_hasta` en [auth.controller.js:L27-33](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/server/controllers/auth.controller.js#L27-L33)). No existe función ni botón para desbloqueo manual por parte del Administrador.
* **Hallazgo:** Inconsistencia de umbral (5 vs 3) e inexistencia del mecanismo de desbloqueo administrativo.
* **Calificación:** **Cumple al 80% (Inconsistencia de especificación)**.

#### HU-AUTH-03 · Cerrar sesión
* **Planificación:** Must have · 2 pts · SPR-1 · REL-1.
* **Código:**
  - **[HECHO]** Backend en [auth.controller.js:L102-126](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/server/controllers/auth.controller.js#L102-L126) con lock transaccional pesimista para idempotencia y registro de `LogAcceso` tipo `Logout`.
  - **[HECHO]** Frontend en [AuthContext.jsx:L45-62](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/context/AuthContext.jsx#L45-L62), protección de historial en [PrivateRoute.jsx:L24-26](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/components/PrivateRoute.jsx#L24-L26) y advertencia de turno abierto en [MainLayout.jsx:L89-115](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/components/MainLayout.jsx#L89-L115).
* **Calificación:** **Cumple al 100%**.

#### HU-AUTH-04 · Garantizar sesión única por usuario
* **Planificación:** Must have · 8 pts · SPR-2 · REL-2. Plantea que el sistema *bloquea el nuevo inicio de sesión* si ya existe uno activo.
* **Código:**
  - **[HECHO]** La implementación real en [auth.controller.js:L57-71](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/server/controllers/auth.controller.js#L57-L71) y comprobada en [sesion_unica.test.js:L19-46](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/server/tests/integration/sesion_unica.test.js#L19-L46) **admite el nuevo login y expulsa activamente la sesión previa** incrementando `session_version`. La terminal anterior recibe HTTP 401 en su siguiente petición o en el heartbeat de 12 segundos ([AuthContext.jsx:L30-36](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/context/AuthContext.jsx#L30-L36)).
* **Hallazgo:** Inversión de lógica respecto a la documentación. La decisión técnica aplicada es superior (evita empleados bloqueados por sesiones fantasma), pero contradice el Criterio 1 del backlog.
* **Calificación:** **Cumple al 90% (Divergencia arquitectural)**.

#### HU-AUTH-05 · Recuperar contraseña por correo
* **Planificación:** Should have · 5 pts · SPR-2 · REL-2. Enlace temporal por correo con validez de 1 hora.
* **Código:**
  - **[HECHO]** En [auth.controller.js:L176,199](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/server/controllers/auth.controller.js#L176) y [ResetPasswordPage.jsx:L8-75](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/auth/ResetPasswordPage.jsx#L8-L75), el sistema genera un **código numérico OTP de 4 dígitos** válido por **15 minutos**. No existe enlace ni token en URL.
* **Hallazgo:** Discrepancia de mecanismo (código OTP vs enlace) y tiempo de vida (15 min vs 60 min).
* **Calificación:** **Cumple al 85%**.

#### HU-AUTH-06 · Cambiar contraseña propia
* **Planificación:** Should have · 3 pts · SPR-3 · REL-3. Formulario en perfil de usuario autenticado.
* **Código:**
  - **[HECHO]** Endpoint backend completo en [usuario.controller.js:L109-138](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/server/controllers/usuario.controller.js#L109-L138) (`PATCH /api/usuarios/me/password`).
  - **[HECHO]** **No existe interfaz de usuario ni modal en el frontend React** para que el usuario autenticado consuma este endpoint.
* **Hallazgo:** Deuda técnica de frontend no declarada.
* **Calificación:** **Cumple al 50% (Backend 100%, Frontend 0%)**.

#### HU-USR-01 a HU-USR-06 · Gestión de Usuarios y Roles
* **Planificación:** Declaran al `Administrador` como el actor encargado de listar, crear, editar, desactivar, reactivar y forzar cierre de sesión, exigiendo validación de DNI (RN-12).
* **Código:**
  - **[HECHO] Exclusividad de SuperAdmin:** En [usuario.routes.js:L33-72](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/server/routes/usuario.routes.js#L33-L72), todas las mutaciones (`POST`, `PUT`, `desactivar`, `reactivar`, `forzar-cierre-sesion`) tienen `verificarRol('SuperAdmin')`. El Administrador recibe HTTP 403 Forbidden.
  - **[HECHO] Modo Solo Lectura en UI:** [UsuariosPage.jsx:L264-279](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/usuarios/UsuariosPage.jsx#L264-L279) oculta los botones de acción al `Administrador` y muestra el banner: *"Modo solo lectura: Solo el SuperAdmin puede crear o modificar usuarios"*.
  - **[HECHO] Inexistencia de DNI:** En [Usuario.js:L4-71](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/server/models/Usuario.js#L4-L71), la tabla `usuarios` **no contiene la columna `dni`**. La unicidad del empleado descansa en la columna `email`.
* **Calificación:** `HU-USR-01` (85%), `HU-USR-02` (80%), `HU-USR-03` (80%), `HU-USR-04` (90%), `HU-USR-05` (90%), `HU-USR-06` (90%).

#### HU-LOG-01 · Registro de accesos al sistema
* **Planificación:** Should have · 3 pts · SPR-3 · REL-3. Accesos exitosos y fallidos con hora, usuario e IP/terminal.
* **Código:**
  - **[HECHO]** [LogAcceso.js:L4-44](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/server/models/LogAcceso.js#L4-L44) no posee columnas para dirección IP ni terminal.
  - **[HECHO]** En [auth.controller.js](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/server/controllers/auth.controller.js), los accesos fallidos no se registran en `LogAcceso` (solo se auditan inicios y cierres exitosos).
* **Calificación:** **Cumple al 60%**.

---

# SECCIÓN II · MÓDULO 2: CATÁLOGO Y ENTIDADES MAESTRAS (EPIC-CAT)

### Alcance
17 Historias de Usuario ([02_EPIC-CAT.md](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/docs/planificacion-scrum/03_Product_Backlog/02_EPIC-CAT.md)): `HU-CAT-01` a `HU-CAT-04`, `HU-PROD-01` a `HU-PROD-06`, `HU-PROV-01` a `HU-PROV-04`, `HU-CLI-01` a `HU-CLI-03`; Reglas `RN-01`, `RN-03`; modelos [Categoria.js](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/server/models/Categoria.js), [Producto.js](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/server/models/Producto.js), [Proveedor.js](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/server/models/Proveedor.js), [Cliente.js](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/server/models/Cliente.js); servicios [barcodeService.js](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/server/services/barcodeService.js), [consulta.service.js](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/server/services/consulta.service.js); controladores y vistas correspondientes.

---

### 2.1 Auditoría Historia por Historia (EPIC-CAT)

#### HU-CAT-01 · Categorías – Ver lista de categorías
* **Planificación:** Must have · 1 pt (Pivote) · SPR-1 · REL-1. Actor: Almacenero. Lista nombres y descripciones; filtro buscador instantáneo.
* **Código:**
  - **[HECHO]** `GET /api/categorias` en [categoria.routes.js:L17](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/server/routes/categoria.routes.js#L17) y [categoria.controller.js:L6-14](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/server/controllers/categoria.controller.js#L6-L14). Buscador en tiempo real en [CategoriasPage.jsx:L160-162](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/categorias/CategoriasPage.jsx#L160-L162).
* **Hallazgo:** Inconsistencia de modelo: la tabla física `categorias` ([Categoria.js:L4-18](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/server/models/Categoria.js#L4-L18)) solo almacena `id` y `nombre`; **no existe la columna `descripcion`**.
* **Calificación:** **Cumple al 85%**.

#### HU-CAT-02 · Categorías – Crear nueva categoría
* **Planificación:** Must have · 2 pts · SPR-1 · REL-1. Actor: Administrador. Previene nombres duplicados.
* **Código:**
  - **[HECHO]** [categoria.controller.js:L17-39](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/server/controllers/categoria.controller.js#L17-L39) valida contra duplicados con `Op.iLike`.
  - **[HECHO]** En [categoria.routes.js:L22](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/server/routes/categoria.routes.js#L22), se autoriza tanto a `Administrador` como a `Almacenero` (permiso ampliado en código).
* **Calificación:** **Cumple al 95%**.

#### HU-CAT-03 · Categorías – Editar nombre o descripción
* **Planificación:** Should have · 1 pt · SPR-3 · REL-3. Actor: Administrador.
* **Código:**
  - **[HECHO]** [categoria.controller.js:L42-70](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/server/controllers/categoria.controller.js#L42-L70) actualiza nombre validando no vacío y no duplicado (`Op.ne`).
  - **[HECHO]** No existe campo de descripción ni en backend ni en frontend.
* **Calificación:** **Cumple al 90%**.

#### HU-CAT-04 · Categorías – Eliminar categoría sin productos
* **Planificación:** Could have · 2 pts · SPR-3 · REL-3. Actor: Administrador.
* **Código:**
  - **[HECHO]** [categoria.controller.js:L73-95](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/server/controllers/categoria.controller.js#L73-L95) comprueba `Producto.count({ where: { categoria_id } })`. Bloquea con 400 si tiene productos; si no, elimina.
  - **[HECHO]** Restricción estricta a `Administrador` en [categoria.routes.js:L36](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/server/routes/categoria.routes.js#L36) y botón condicional con `ConfirmDialog` en [CategoriasPage.jsx:L223-231](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/categorias/CategoriasPage.jsx#L223-L231).
* **Calificación:** **Cumple al 100%**.

#### HU-PROD-01 · Productos – Ver catálogo completo
* **Planificación:** Must have · 3 pts · SPR-1 · REL-1. Actor: Almacenero. Lista paginada con stock, precio y filtro por nombre o código.
* **Código:**
  - **[HECHO]** [producto.controller.js:L78-87](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/server/controllers/producto.controller.js#L78-L87) incluye categorías, proveedores y cálculo dinámico de `proxima_fecha_vencimiento` y `stock_vigente`.
  - **[HECHO]** Paginación cliente de 12 ítems y filtros multicriterio en [ProductosPage.jsx:L781, L871-900](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/productos/ProductosPage.jsx#L781).
* **Calificación:** **Cumple al 95%**.

#### HU-PROD-02 · Productos – Registrar nuevo producto
* **Planificación:** Must have · 5 pts · SPR-1 · REL-1. Actor: Administrador. Completa ficha (código, nombre, categoría, unidad, costo) naciendo con stock 0; valida duplicidad de código; clasifica perecible y define stock mínimo.
* **Código:**
  - **[HECHO]** [producto.controller.js:L189-258](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/server/controllers/producto.controller.js#L189-L258) inicializa obligatoriamente `stock: 0`, valida código de barras único y admite `maneja_vencimiento` y `stock_minimo`.
* **Hallazgos:**
  - En [Producto.js:L4-85](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/server/models/Producto.js#L4-L85) **no existe la columna `unidad` ni `unidad_medida`**. Todo se computa en enteros.
  - El costo no se ingresa en la ficha del producto, sino en la primera recepción física ([EntradaMercaderia.js](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/server/models/EntradaMercaderia.js)).
* **Calificación:** **Cumple al 85%**.

#### HU-PROD-03 · Productos – Escanear código de barras para registro
* **Planificación:** Could have · 5 pts · SPR-3 · REL-3. Actor: Almacenero.
* **Código:**
  - **[HECHO]** [ProductosPage.jsx:L190-200](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/productos/ProductosPage.jsx#L190-L200) captura el retorno `Enter` de la lectora óptica HID y ejecuta `handleBuscarCodigo`.
  - **[HECHO]** El backend en [barcodeService.js:L4-51](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/server/services/barcodeService.js#L4-L51) y [producto.controller.js:L123-169](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/server/controllers/producto.controller.js#L123-L169) consulta OpenFoodFacts, OpenProductsFacts y OpenBeautyFacts, autocompletando nombre, marca, categoría sugerida e imagen.
* **Calificación:** **Cumple al 100% (Sobrecumplimiento técnico)**.

#### HU-PROD-04 · Productos – Editar datos de un producto
* **Planificación:** Should have · 3 pts · SPR-3 · REL-3. Actualiza precio (reflejado en POS) y bloquea cambio de unidad de medida si tiene stock.
* **Código:**
  - **[HECHO]** [producto.controller.js:L261-335](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/server/controllers/producto.controller.js#L261-L335) actualiza precio y se refleja de inmediato en POS (`GET /api/productos/activos`).
  - **[HECHO]** Criterio 2 no implementado en código por inexistencia del concepto de unidad de medida en el esquema relacional.
* **Calificación:** **Cumple al 75%**.

#### HU-PROD-05 · Productos – Desactivar o reactivar producto
* **Planificación:** Should have · 2 pts · SPR-3 · REL-3.
* **Código:**
  - **[HECHO]** `PATCH /api/productos/:id/desactivar` y `/reactivar` en [producto.controller.js:L338-367](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/server/controllers/producto.controller.js#L338-L367). El POS (`listarActivos`) filtra `where: { activo: true }`, excluyéndolo al instante.
* **Calificación:** **Cumple al 95%**.

#### HU-PROD-06 · Productos – Consultar productos próximos a vencer (RN-03)
* **Planificación:** Must have · 3 pts · SPR-2 · REL-2. Lista lotes que vencen en 30 días destacando en rojo los vencidos. POS bloquea venta de vencidos.
* **Código:**
  - **[HECHO]** Endpoint `GET /api/productos/vencer?dias=30` en [producto.controller.js:L383-433](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/server/controllers/producto.controller.js#L383-L433) y badges de alerta en [ProductosPage.jsx:L945-971](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/productos/ProductosPage.jsx#L945-L971).
  - **[HECHO] Blindaje estricto de RN-03:** [producto.controller.js:L38-63](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/server/controllers/producto.controller.js#L38-L63) y [venta.domain.service.js:L81-99](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/server/services/venta.domain.service.js#L81-L99) excluyen lotes vencidos del stock disponible para venta y del algoritmo de despacho FEFO.
* **Calificación:** **Cumple al 100%**.

#### HU-PROV-01 · Proveedores – Ver lista de proveedores
* **Planificación:** Must have · 2 pts · SPR-2 · REL-2. Muestra RUC, razón social, teléfonos y correos.
* **Código:**
  - **[HECHO]** [proveedor.controller.js:L20-30](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/server/controllers/proveedor.controller.js#L20-L30) y [ProveedoresPage.jsx:L470-535](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/proveedores/ProveedoresPage.jsx#L470-L535).
  - **[HECHO]** En [Proveedor.js:L4-35](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/server/models/Proveedor.js#L4-L35), teléfono y correo no son columnas separadas, sino un único campo consolidado `contacto: STRING`.
* **Calificación:** **Cumple al 90%**.

#### HU-PROV-02 · Proveedores – Registrar nuevo proveedor
* **Planificación:** Must have · 3 pts · SPR-1 · REL-1. Valida RUC de 11 dígitos y unicidad.
* **Código:**
  - **[HECHO]** [proveedor.controller.js:L45-85](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/server/controllers/proveedor.controller.js#L45-L85) valida RUC de 11 dígitos, bloquea prefijo '10' (persona natural) exigiendo prefijo '20' (empresa) y valida teléfono con `libphonenumber-js`.
  - **[HECHO]** [ProveedoresPage.jsx:L102-137](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/proveedores/ProveedoresPage.jsx#L102-L137) conecta con SUNAT en vivo vía [consulta.service.js](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/server/services/consulta.service.js), exige estado `ACTIVO` y condición `HABIDO`, y fija la razón social oficial.
* **Calificación:** **Cumple al 100% (Sobrecumplimiento de validación fiscal)**.

#### HU-PROV-03 · Proveedores – Editar datos de proveedor
* **Planificación:** Should have · 2 pts · SPR-3 · REL-3.
* **Código:**
  - **[HECHO]** [proveedor.controller.js:L87-137](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/server/controllers/proveedor.controller.js#L87-L137) y modal en [ProveedoresPage.jsx:L505-511](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/proveedores/ProveedoresPage.jsx#L505-L511).
* **Calificación:** **Cumple al 100%**.

#### HU-PROV-04 · Proveedores – Desactivar o reactivar proveedor
* **Planificación:** Should have · 2 pts · SPR-2 · REL-2. Proveedor desactivado no figura en órdenes o solicitudes.
* **Código:**
  - **[HECHO]** `PATCH /api/proveedores/:id/desactivar` y `/reactivar` en [proveedor.controller.js:L139-167](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/server/controllers/proveedor.controller.js#L139-L167). Exclusivo de `Administrador`.
  - **[HECHO]** El parámetro `?soloActivos=true` se consume en modales de reposición ([ProductosPage.jsx:L793](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/productos/ProductosPage.jsx#L793)) y en el módulo de solicitudes, excluyendo a los inactivos.
* **Calificación:** **Cumple al 100%**.

#### HU-CLI-01 · Clientes – Listar clientes registrados
* **Planificación:** Should have · 2 pts · SPR-3 · REL-3.
* **Código:**
  - **[HECHO]** Backend en [cliente.controller.js:L29-48](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/server/controllers/cliente.controller.js#L29-L48) (`listar`), ordenado alfabéticamente con cómputo de compras.
  - **[HECHO] Pantalla Huérfana en Navegación (Defecto Crítico de UI):** El archivo [ClientesPage.jsx](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/clientes/ClientesPage.jsx) existe y está mapeado en [App.jsx:L158-164](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/App.jsx#L158-L164), pero **no figura en `NAV_ITEMS` dentro de [MainLayout.jsx:L28-43](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/components/MainLayout.jsx#L28-L43)**. Ningún usuario puede acceder a ella mediante el menú lateral.
* **Calificación:** **Cumple al 70%**.

#### HU-CLI-02 · Clientes – Registrar cliente automáticamente al vender
* **Planificación:** Must have · 3 pts · SPR-1 · REL-1. Digitado de DNI/RUC durante venta registra silenciosamente sin duplicar.
* **Código:**
  - **[HECHO]** [venta.domain.service.js:L144-151](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/server/services/venta.domain.service.js#L144-L151) ejecuta `Cliente.findOrCreate({ where: { dni: cliente_dni } })`.
  - **[HECHO] Persistencia Asimétrica:** En el modelo [Cliente.js:L14-20](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/server/models/Cliente.js#L14-L20), la columna es `dni: STRING(8)`. Si la venta es con RUC (Factura), los datos empresariales **no se persisten en la tabla `clientes`**, sino desnormalizados en [Venta.js:L84-95](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/server/models/Venta.js#L84-L95).
* **Calificación:** **Cumple al 85%**.

#### HU-CLI-03 · Clientes – Editar correo electrónico de cliente
* **Planificación:** Could have · 1 pt · SPR-3 · REL-3. Actor: Vendedor o Administrador.
* **Código:**
  - **[HECHO] Exclusión del Vendedor:** En [cliente.routes.js:L23](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/server/routes/cliente.routes.js#L23), la ruta exige `verificarRol('Administrador')` (Vendedor recibe 403). En [App.jsx:L160](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/App.jsx#L160), la página está restringida a Administrador y Gerente. En [ClientesPage.jsx:L9-12](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/clientes/ClientesPage.jsx#L9-L12), el botón de edición solo se dibuja para Administrador.
* **Calificación:** **Cumple al 60% (Vendedor bloqueado)**.

---

# SECCIÓN III · MÓDULO 3: INVENTARIO, REPOSICIÓN Y ALMACÉN (EPIC-INV)

### Alcance
11 Historias de Usuario ([03_EPIC-INV.md](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/docs/planificacion-scrum/03_Product_Backlog/03_EPIC-INV.md)): `HU-INV-01` a `HU-INV-06`, `HU-SOL-01` a `HU-SOL-05`; Reglas de Negocio `RN-01`, `RN-04`, `RN-05`, `RN-14`, `RN-16`; modelos relacionales [EntradaMercaderia.js](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/server/models/EntradaMercaderia.js), [BajaInventario.js](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/server/models/BajaInventario.js), [AjusteInventario.js](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/server/models/AjusteInventario.js), [SolicitudReposicion.js](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/server/models/SolicitudReposicion.js), [ConsumoLote.js](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/server/models/ConsumoLote.js); rutas [inventario.routes.js](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/server/routes/inventario.routes.js); controladores [inventario.controller.js](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/server/controllers/inventario.controller.js); servicios de dominio [inventario.service.js](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/server/services/inventario.service.js); módulos React [InventarioPage.jsx](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/inventario/InventarioPage.jsx) y [SolicitudesPage.jsx](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/solicitudes/SolicitudesPage.jsx); tests [merma_robo.test.js](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/server/tests/integration/merma_robo.test.js) y [fefo_consumption.test.js](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/server/tests/integration/fefo_consumption.test.js).

---

### 3.1 Auditoría Historia por Historia (EPIC-INV)

#### HU-INV-01 · Inventario – Registrar entrada de mercadería
* **Planificación:** Must have · 5 pts · SPR-1 · REL-1. Actor: Almacenero. Suma stock, recalcula costo promedio con guía de remisión (RN-01, RN-14). Si falta guía, bloquea. Si es perecible, exige lote y vencimiento para FEFO.
* **Código:**
  - **[HECHO] Ruptura total de RN-01:** En [EntradaMercaderia.js:L1-78](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/server/models/EntradaMercaderia.js#L1-L78), no existe el campo `guia_remision`. En [inventario.controller.js:L59-133](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/server/controllers/inventario.controller.js#L59-L133) (`registrarEntrada`), el backend nunca solicita ni valida ninguna guía de remisión física. Criterio 2 incumplido al 100%.
  - **[HECHO] Validación FEFO y Caducidad:** [inventario.controller.js:L34-47,81-83](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/server/controllers/inventario.controller.js#L34-L47) valida estrictamente que si `producto.maneja_vencimiento` es verdadero, `fecha_vencimiento` sea obligatoria, posterior a `hoyPeru()` y menor a 15 años. En [InventarioPage.jsx:L216-226](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/inventario/InventarioPage.jsx#L216-L226) se bloquea el formulario si falta la fecha.
  - **[HECHO] Desconexión de Costo Promedio en Frontend (RN-14):** El backend en [inventario.service.js:L32-41](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/server/services/inventario.service.js#L32-L41) implementa la fórmula de costo promedio ponderado: `((stockActual * costo_promedio + cantidad * costo_unitario) / (stockActual + cantidad))`. Sin embargo, en el formulario React [InventarioPage.jsx:L234](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/inventario/InventarioPage.jsx#L234), el payload envía `costo_unitario: null`, impidiendo actualizar el costo promedio desde la vista de entrada libre.
  - **[HECHO] Restricción Operativa de Rol no Documentada:** En [inventario.controller.js:L91-96](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/server/controllers/inventario.controller.js#L91-L96) y [InventarioPage.jsx:L316-318](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/inventario/InventarioPage.jsx#L316-L318), el `Almacenero` solo puede registrar directamente la primera carga de stock de un producto (`tieneEntradasPrevias === 0`). A partir de la segunda entrada en adelante, el backend rechaza la operación con HTTP 403 (*"Este producto ya tiene stock registrado. Para reponerlo, crea una solicitud de reposición"*), obligándolo a canalizar la reposición por el módulo de Solicitudes.
* **Calificación:** **Cumple al 65% (Falla RN-01, RN-14 neutralizada en UI de entradas directas)**.

#### HU-INV-02 · Inventario – Registrar baja de inventario por merma
* **Planificación:** Must have · 5 pts · SPR-1 · REL-1. Actor: Almacenero. Si valor supera S/ 50 (RN-04), exige firma o aprobación digital de Administrador o Gerente. Si da de baja por vencimiento y el lote no está vencido, rechaza (RN-05).
* **Código:**
  - **[HECHO] Ruptura total de RN-04:** En [BajaInventario.js:L4-52](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/server/models/BajaInventario.js#L4-L52), la tabla solo almacena `producto_id`, `cantidad`, `motivo`, `motivo_detalle`, `usuario_id` y `venta_id`. No existe columna para usuario aprobador ni mecanismo de firma. En [inventario.controller.js:L181-277](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/server/controllers/inventario.controller.js#L181-L277), el Almacenero puede registrar mermas de montos ilimitados sin ninguna autorización gerencial.
  - **[HECHO] Blindaje estricto de RN-05:** [inventario.controller.js:L228-234](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/server/controllers/inventario.controller.js#L228-L234) valida que si `motivo === 'Vencido'`, `lote.fecha_vencimiento <= hoyPeru()`. Si no está caducado, rechaza con HTTP 400. Si el lote ya venció y se intenta otro motivo, exige usar "Vencido". Además, el servicio FEFO ([inventario.service.js:L58-72](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/server/services/inventario.service.js#L58-L72)) con flag `soloVencido: true` garantiza que una baja por vencimiento jamás descuente de stock vigente.
  - **[HECHO] Selección Quirúrgica de Lotes Dañados:** [inventario.controller.js:L200-202](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/server/controllers/inventario.controller.js#L200-L202) exige obligatoriamente indicar el lote específico si el motivo es "Dañado", impidiendo que el algoritmo automático FEFO descuente de un lote en buen estado.
* **Calificación:** **Cumple al 70% (RN-04 inexistente, RN-05 blindada al 100%)**.

#### HU-INV-03 · Inventario – Realizar ajuste por conteo físico
* **Planificación:** Must have · 5 pts · SPR-1 · REL-1. Actor: Almacenero. Conteo físico manual actualiza stock teórico con registro de auditoría. Exige obligatoriamente comentario detallado explicando el descuadre.
* **Código:**
  - **[HECHO]** Backend transaccional en [inventario.controller.js:L311-389](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/server/controllers/inventario.controller.js#L311-L389) (`registrarAjuste`) con bloqueo pesimista `t.LOCK.UPDATE`. Si el conteo es idéntico al sistema (`diferencia === 0`), rechaza la operación.
  - **[HECHO] Manejo Asimétrico +/-:** Si la diferencia es positiva (sobrante), invoca `crearLote` exigiendo fecha de vencimiento si es perecible ([L338-342]) para evitar lotes fantasma. Si es negativa (faltante), invoca `consumirStockFIFO` vinculando los `ConsumoLote` al `ajuste_id` ([L363-368]).
  - **[HECHO] Test de Integración:** Comprobado empíricamente en [merma_robo.test.js:L55-96](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/server/tests/integration/merma_robo.test.js#L55-L96), donde un conteo ciego con faltante de 8 unidades consume 5 del lote más antiguo y 3 del lote reciente por FEFO, auditando la pérdida valorizada en S/ 86.
  - **[HECHO] Comentario no estrictamente obligatorio:** En [AjusteInventario.js:L33-36](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/server/models/AjusteInventario.js#L33-L36) y [inventario.controller.js:L349](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/server/controllers/inventario.controller.js#L349), `observaciones` admite `null` y no se bloquea si el usuario lo deja en blanco en la UI ([InventarioPage.jsx:L402](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/inventario/InventarioPage.jsx#L402)).
* **Calificación:** **Cumple al 90%**.

#### HU-SOL-01 · Reposición – Crear solicitud de reposición
* **Planificación:** Must have · 3 pts · SPR-2 · REL-2. Actor: Almacenero. Selecciona productos y proveedor, genera Solicitud en estado "Pendiente". Cantidad 0 rechazada.
* **Código:**
  - **[HECHO] Arquitectura Monoproducto:** En [SolicitudReposicion.js:L4-80](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/server/models/SolicitudReposicion.js#L4-L80), el modelo relaciona directamente un solo `producto_id` por fila. No existe tabla intermedia cabecera-detalle (`DetalleSolicitudReposicion`). Cada solicitud corresponde a una orden de un único producto.
  - **[HECHO] Validaciones y Ciclo Inicial:** [inventario.controller.js:L433-466](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/server/controllers/inventario.controller.js#L433-L466) valida que `cantidad` sea entero > 0 y crea la solicitud con `estado: 'Pendiente'`.
  - **[HECHO] Experiencia de Usuario:** [SolicitudesPage.jsx:L50-56, 124-128](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/solicitudes/SolicitudesPage.jsx#L50-L56) precarga automáticamente el proveedor habitual del producto y advierte si se escoge uno alterno.
* **Calificación:** **Cumple al 95%**.

#### HU-SOL-02 · Reposición – Listar solicitudes con filtro por estado
* **Planificación:** Must have · 2 pts · SPR-2 · REL-2. Actor: Almacenero o Gerente. Filtro "Pendientes" actualiza grilla con solicitudes por aprobar. Clic en número abre detalle con productos solicitados.
* **Código:**
  - **[HECHO]** Backend implementado en [inventario.controller.js:L468-488](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/server/controllers/inventario.controller.js#L468-L488) (`GET /api/inventario/solicitudes?estado=Pendiente`), con includes de producto, proveedor, solicitante y aprobador.
  - **[HECHO]** Frontend [SolicitudesPage.jsx:L507-509, 539-553](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/solicitudes/SolicitudesPage.jsx#L507-L509) cuenta con botones de filtro rápido y badges estilizados.
  - **[HECHO]** Debido a la arquitectura monoproducto, no se requiere pantalla emergente de desglose: todos los datos del producto solicitado se muestran directamente en la fila de la grilla ([L577-580]).
* **Calificación:** **Cumple al 95%**.

#### HU-SOL-03 · Reposición – Aprobar solicitud de reposición
* **Planificación:** Must have · 3 pts · SPR-2 · REL-2. Actor: Gerente o Administrador. Pulsa "Aprobar", pasa a "Aprobada" y genera PDF de orden de compra. Permite cambiar de proveedor si no hay stock (RN-16).
* **Código:**
  - **[HECHO] Cumplimiento de RN-16:** En [inventario.controller.js:L510](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/server/controllers/inventario.controller.js#L510) y [SolicitudesPage.jsx:L208-226](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/solicitudes/SolicitudesPage.jsx#L208-L226), el aprobador puede reasignar el proveedor antes de confirmar y registrar una fecha estimada de entrega.
  - **[HECHO] Transición y Aprobador:** Actualiza `estado = 'Aprobada'` y almacena `usuario_aprobador_id = req.usuario.id`.
  - **[HECHO] Inexistencia de PDF de Orden de Compra:** Ni el backend (`inventario.controller.js`) ni el frontend (`SolicitudesPage.jsx`) poseen código de generación de PDF para órdenes de compra. Criterio 1 cumplido parcialmente (estado sí cambia, PDF no existe).
* **Calificación:** **Cumple al 75% (RN-16 100%, Deuda de PDF de Orden de Compra)**.

#### HU-SOL-05 · Reposición – Completar solicitud al recibir mercadería
* **Planificación:** Must have · 8 pts · SPR-2 · REL-2. Actor: Almacenero. Marca ítems recibidos, aumenta stock, recalcula costo promedio (RN-14) y pasa a "Completada". Exige guía de remisión (RN-01). Supuesto de entrega total.
* **Código:**
  - **[HECHO] Transición y Stock:** [inventario.controller.js:L563-649](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/server/controllers/inventario.controller.js#L563-L649) pasa a `estado: 'Completada'` y crea el nuevo lote incrementando el stock físico.
  - **[HECHO] Ruptura de RN-01:** No se solicita número de guía de remisión en la transacción ni en el formulario modal ([SolicitudesPage.jsx:L383-460](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/solicitudes/SolicitudesPage.jsx#L383-L460)).
  - **[HECHO] Sobrediseño Backend vs Bloqueo en Frontend:** En el backend ([inventario.controller.js:L598-626](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/server/controllers/inventario.controller.js#L598-L626)), el sistema contempla recepciones parciales: si `cantidadRecibida < solicitud.cantidad`, genera automáticamente una solicitud hija en estado "Pendiente" vinculada por `solicitud_origen_id`. Sin embargo, en el frontend ([SolicitudesPage.jsx:L406-413](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/solicitudes/SolicitudesPage.jsx#L406-L413)), el campo `cantidad_recibida` está **deshabilitado (`disabled`)** y forzado al 100% de la cantidad solicitada con la leyenda *"Siempre igual a la cantidad solicitada"*. La UI bloquea la recepción fraccionada construida en el servidor.
* **Calificación:** **Cumple al 70%**.

#### HU-INV-04 · Inventario – Consultar historial de entradas
* **Planificación:** Should have · 2 pts · SPR-3 · REL-3. Actor: Almacenero. Filtro por fecha, lista entradas con montos. Entradas pasadas inmutables.
* **Código:**
  - **[HECHO]** Backend en [inventario.controller.js:L135-163](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/server/controllers/inventario.controller.js#L135-L163) con filtros de fecha (`inicioDiaPeru`, `finDiaPeruExclusivo`) y producto.
  - **[HECHO]** Grilla interactiva en [InventarioPage.jsx:L132-155, 600-750](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/inventario/InventarioPage.jsx).
  - **[HECHO] Inmutabilidad por Diseño:** [inventario.routes.js:L9-25](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/server/routes/inventario.routes.js#L9-L25) no declara ninguna ruta `PUT`, `PATCH` ni `DELETE` para `/entradas`, haciendo imposible la alteración retroactiva de un lote ingresado.
* **Calificación:** **Cumple al 100%**.

#### HU-INV-05 · Inventario – Consultar historial de bajas
* **Planificación:** Should have · 2 pts · SPR-3 · REL-3. Actor: Administrador. Filtro por motivo "Vencimiento", detalle muestra usuario que registró y usuario que aprobó.
* **Código:**
  - **[HECHO]** Backend en [inventario.controller.js:L279-307](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/server/controllers/inventario.controller.js#L279-L307) (`listarBajas`).
  - **[HECHO] Trazabilidad Detallada de Lote:** La consulta incluye `consumos` y `lote`, permitiendo ver el `codigo_lote` y la `fecha_vencimiento` exacta de la que se extrajo la mercadería mermada ([L172-179]).
  - **[HECHO] Usuario Aprobador Ausente:** Solo expone `usuario.nombre` (el autor de la baja). La columna de usuario aprobador es inexistente debido a la omisión de la regla RN-04.
* **Calificación:** **Cumple al 85%**.

#### HU-INV-06 · Inventario – Consultar historial de ajustes
* **Planificación:** Should have · 2 pts · SPR-3 · REL-3. Actor: Administrador. Filtro por producto, visualiza ajustes manuales +/- con comentario obligatorio del almacenero.
* **Código:**
  - **[HECHO]** Backend en [inventario.controller.js:L391-422](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/server/controllers/inventario.controller.js#L391-L422) (`listarAjustes`) y frontend [InventarioPage.jsx:L850-950](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/inventario/InventarioPage.jsx).
  - **[HECHO]** Muestra stock previo del sistema, conteo físico, diferencia (+ verde / - rojo), fecha, usuario y observaciones registradas.
* **Calificación:** **Cumple al 95%**.

#### HU-SOL-04 · Reposición – Rechazar solicitud de reposición
* **Planificación:** Should have · 2 pts · SPR-2 · REL-2. Actor: Gerente. Exige motivo de rechazo y cambia estado a "Rechazada". Almacenero no puede recibir mercadería de orden rechazada.
* **Código:**
  - **[HECHO]** Backend en [inventario.controller.js:L529-561](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/server/controllers/inventario.controller.js#L529-L561) (`rechazarSolicitud`). Exige rol `Administrador` o `Gerente` ([inventario.routes.js:L73-76](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/server/routes/inventario.routes.js#L73-L76)), guarda `motivo_rechazo` y `usuario_aprobador_id`.
  - **[HECHO]** Frontend [SolicitudesPage.jsx:L253-324](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/solicitudes/SolicitudesPage.jsx#L253-L324) obliga a llenar el motivo antes de enviar.
  - **[HECHO] Bloqueo Estricto de Recepción:** [inventario.controller.js:L573-575](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/server/controllers/inventario.controller.js#L573-L575) exige que la solicitud esté `'Aprobada'` para completarse. Si está `'Rechazada'`, retorna HTTP 400. En UI, la acción de recepción solo se renderiza si `estado === 'Aprobada'` ([L631]).
* **Calificación:** **Cumple al 100%**.

---

# SECCIÓN IV · MÓDULO 4: VENTAS, POS Y GESTIÓN DE CAJA (EPIC-VEN)

### Alcance
15 Historias de Usuario ([04_EPIC-VEN.md](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/docs/planificacion-scrum/03_Product_Backlog/04_EPIC-VEN.md)): `HU-CAJA-01` a `HU-CAJA-07`, `HU-VEN-01` a `HU-VEN-08`; Reglas de Negocio `RN-02`, `RN-07`, `RN-08`, `RN-09`, `RN-10`, `RN-11`, `RN-13`, `RN-15`; modelos relacionales [Turno.js](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/server/models/Turno.js), [MovimientoCaja.js](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/server/models/MovimientoCaja.js), [Venta.js](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/server/models/Venta.js), [DetalleVenta.js](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/server/models/DetalleVenta.js), [Configuracion.js](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/server/models/Configuracion.js), [Cliente.js](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/server/models/Cliente.js), [BajaInventario.js](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/server/models/BajaInventario.js); rutas [caja.routes.js](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/server/routes/caja.routes.js), [venta.routes.js](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/server/routes/venta.routes.js); controladores [caja.controller.js](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/server/controllers/caja.controller.js), [venta.controller.js](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/server/controllers/venta.controller.js); servicios de dominio [venta.domain.service.js](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/server/services/venta.domain.service.js), [caja.service.js](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/server/services/caja.service.js), [mail.service.js](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/server/services/mail.service.js); módulos React [VentasPage.jsx](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/ventas/VentasPage.jsx), [HistorialVentasPage.jsx](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/ventas/HistorialVentasPage.jsx), [CajaPage.jsx](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/caja/CajaPage.jsx); utilidades [comprobante.js](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/utils/comprobante.js); tests de integración y componentes [caja_concurrencia.test.js](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/server/tests/integration/caja_concurrencia.test.js), [sunat_reemision.test.js](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/server/tests/integration/sunat_reemision.test.js), [CajaPage.test.jsx](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/caja/CajaPage.test.jsx), [VentasScanner.test.jsx](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/ventas/VentasScanner.test.jsx).

---

### 4.1 Auditoría Historia por Historia (EPIC-VEN)

#### HU-CAJA-01 · Caja – Abrir turno de caja
* **Planificación:** Must have · 5 pts · SPR-1 · REL-1. Actor: Vendedor. Ingreso de monto inicial (base S/ 500) habilita POS. Monto menor a S/ 500 es bloqueado (RN-10).
* **Código:**
  - **[HECHO] Blindaje de RN-10:** En [caja.controller.js:L11, 34-38](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/server/controllers/caja.controller.js#L11), `const MONTO_MINIMO_APERTURA_CAJA = 500;`. Si `monto_apertura < 500`, rechaza con HTTP 400 (*"El monto mínimo de apertura es S/ 500.00, para poder dar vueltos durante el turno"*).
  - **[HECHO] Transacción y Control de Duplicidad:** [caja.controller.js:L49-73](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/server/controllers/caja.controller.js#L49-L73) crea el `Turno` en estado `'Abierto'`, registra el `MovimientoCaja` de tipo `'Apertura'` de forma atómica y captura colisiones de restricción única.
  - **[HECHO] Bloqueo en POS sin Turno:** [VentasPage.jsx:L217-240](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/ventas/VentasPage.jsx#L217-L240) y [venta.domain.service.js:L35-40](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/server/services/venta.domain.service.js#L35-L40) bloquean la venta si no existe turno abierto para el usuario autenticado.
* **Calificación:** **Cumple al 100% (RN-10 blindada)**.

#### HU-CAJA-02 · Caja – Cerrar turno de caja y cuadrar
* **Planificación:** Must have · 5 pts · SPR-1 · REL-1. Actor: Vendedor. Declara efectivo físico contado, emite reporte de cuadre y desactiva ventas en POS.
* **Código:**
  - **[HECHO] Arqueo Obligatorio:** En [caja.controller.js:L87-138](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/server/controllers/caja.controller.js#L87-L138) (`cerrar` y `aplicarCierre`), el sistema exige declarar `monto_contado_efectivo` y `monto_contado_yape`.
  - **[HECHO] Conciliación y Diferencias:** Cruza contra `calcularEsperados(turno.movimientos)` ([caja.service.js:L1-35](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/server/services/caja.service.js#L1-L35)), guarda las diferencias en efectivo/Yape y cambia estado a `'Cerrado'`.
  - **[HECHO] Test Automatizado RTL:** Verificado con prueba de componente en [CajaPage.test.jsx:L43-94](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/caja/CajaPage.test.jsx#L43-L94), comprobando la apertura del modal, ingreso de contados y cierre exitoso.
* **Calificación:** **Cumple al 100%**.

#### HU-CAJA-05 · Caja – Consultar historial de turnos de caja
* **Planificación:** Must have · 3 pts · SPR-1 · REL-1. Actor: Administrador. Filtro de turnos por rango de fechas muestra vendedor, monto esperado, declarado y diferencia. Clic abre detalle de ventas.
* **Código:**
  - **[HECHO]** Backend implementado en [caja.controller.js:L263-310](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/server/controllers/caja.controller.js#L263-L310) (`historial` y `obtenerTurno`), con includes de cajero, aprobador y todos los movimientos.
  - **[HECHO]** Frontend [CajaPage.jsx](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/caja/CajaPage.jsx) pestaña "Historial de turnos" permite filtrar por fechas y desplegar el detalle con todas las transacciones del turno.
* **Calificación:** **Cumple al 100%**.

#### HU-VEN-01 · Ventas (POS) – Registrar una venta con Efectivo o Yape
* **Planificación:** Must have · 13 pts · SPR-1 · REL-1. Actor: Vendedor. Descuenta stock, calcula vuelto, valida Yape contra duplicados en el día (RN-02) y bloquea venta de productos vencidos (RN-03).
* **Código:**
  - **[HECHO] Lógica Transaccional Central (13 pts):** [venta.controller.js:L18-124](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/server/controllers/venta.controller.js#L18-L124) y [venta.domain.service.js:L18-203](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/server/services/venta.domain.service.js#L18-L203). Aplica ordenamiento determinístico por `producto_id` para prevenir deadlocks en base de datos.
  - **[HECHO] Vuelto Validado contra Caja:** [venta.domain.service.js:L71-78, 123-129](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/server/services/venta.domain.service.js#L71-L78) verifica que el dinero en efectivo disponible en el cajón alcance para dar el vuelto; si no alcanza, bloquea la venta con HTTP 400. Testeado en [caja_concurrencia.test.js:L60-79](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/server/tests/integration/caja_concurrencia.test.js#L60-L79).
  - **[HECHO] Blindaje de RN-03:** [venta.domain.service.js:L54-57, 187](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/server/services/venta.domain.service.js#L54-L57) ejecuta `calcularStockVigente` y `consumirStockFIFO` con `soloVigente: true`, imposibilitando vender lotes caducados.
  - **[HECHO] Inconsistencia de Especificación en RN-02:** En [Venta.js:L113-120](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/server/models/Venta.js#L113-L120) y [venta.controller.js:L33-45](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/server/controllers/venta.controller.js#L33-L45), el código valida exactamente 6 dígitos numéricos (`referencia_pago`) del voucher del POS físico (IziPay), con unicidad global en la BD en vez de unicidad diaria.
* **Calificación:** **Cumple al 95% (Inconsistencia menor en formato de RN-02)**.

#### HU-VEN-02 · Ventas (POS) – Emitir boleta o factura
* **Planificación:** Must have · 8 pts · SPR-1 · REL-1. Actor: Vendedor. Factura exige RUC válido con desglose fiscal y correlativo continuo (RN-13). Boleta rápida a "Cliente Genérico".
* **Código:**
  - **[HECHO] Integración Fiscal SUNAT:** [venta.controller.js:L59-81](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/server/controllers/venta.controller.js#L59-L81) valida RUC de 11 dígitos, consulta a SUNAT en tiempo real exigiendo estado `ACTIVO` y condición `HABIDO`.
  - **[HECHO] Correlatividad Atómica (RN-13):** [venta.domain.service.js:L135-142, 163-164](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/server/services/venta.domain.service.js#L135-L142) aplica lock pesimista sobre `Configuracion` id=1 para incrementar atómicamente `correlativo_factura` (serie F001) o `correlativo_boleta` (serie B001), evitando saltos de numeración.
* **Calificación:** **Cumple al 100% (RN-13 cumplida)**.

#### HU-VEN-05 · Ventas (POS) – Consultar historial de ventas
* **Planificación:** Must have · 5 pts · SPR-1 · REL-1. Actor: Vendedor. Solo visualiza ventas de su turno actual ocultando otros turnos (RN-07). Búsqueda por número de boleta muestra detalles.
* **Código:**
  - **[HECHO] Inconsistencia Lógica en RN-07:** En [venta.controller.js:L151-154](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/server/controllers/venta.controller.js#L151-L154):
    ```javascript
    if (req.usuario.rol === 'Vendedor') {
      where.usuario_id = req.usuario.id;
    }
    ```
    El filtro aplicado en base de datos es por `usuario_id`, no por turno activo (`turno_id`). Un cajero puede consultar todas las ventas históricas que ha emitido en cualquier turno anterior.
  - **[HECHO] Búsqueda Multicriterio:** [venta.controller.js:L265-315](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/server/controllers/venta.controller.js#L265-L315) (`buscarComprobantes`) permite filtrar por serie, correlativo o documento del cliente. Comprobado en [sunat_reemision.test.js:L60-75](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/server/tests/integration/sunat_reemision.test.js#L60-L75).
* **Calificación:** **Cumple al 85% (Filtro por usuario vs turno en RN-07)**.

#### HU-VEN-06 · Ventas (POS) – Anular una venta con devolución
* **Planificación:** Must have · 8 pts · SPR-2 · REL-2. Actor: Administrador o Gerente. Procesa devolución de caja y devuelve productos a cuarentena/merma o stock (RN-09). Bloquea si supera 24 horas (RN-08).
* **Código:**
  - **[HECHO] Inconsistencia Funcional en RN-08:** En [venta.domain.service.js:L232-235](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/server/services/venta.domain.service.js#L232-L235), el código no comprueba horas transcurridas (24 h no existe en código); valida estrictamente que `turno.estado === 'Abierto'`. Si el turno cerró hace 10 minutos, no permite anular; si el turno sigue abierto tras 30 horas, la permite.
  - **[HECHO] Implementación Ejemplar de RN-09:** En [venta.domain.service.js:L216-225, 243-258](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/server/services/venta.domain.service.js#L216-L225), por cada producto se decide si vuelve a stock vendible (`reponer_stock: true`) o si se declara pérdida (`reponer_stock: false`). En este último caso, el sistema crea automáticamente una `BajaInventario` asociada a la venta y no devuelve el stock al almacén disponible.
  - **[HECHO] Movimiento de Caja:** Genera `MovimientoCaja` de tipo `'Anulacion'` descontando el dinero devuelto del arqueo de caja.
* **Calificación:** **Cumple al 80% (Inconsistencia temporal en RN-08; RN-09 al 100%)**.

#### HU-CAJA-03 · Caja – Registrar movimiento manual de efectivo
* **Planificación:** Should have · 3 pts · SPR-2 · REL-2. Actor: Vendedor. Salida/ingreso manual disminuye/aumenta esperado de cierre. Bloquea si supera tope de S/ 5,000 (RN-11). Medio exclusivo de efectivo (RN-15).
* **Código:**
  - **[HECHO] Blindaje de RN-11 y RN-15:** En [caja.controller.js:L15, 226-250](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/server/controllers/caja.controller.js#L15), `const MONTO_MAXIMO_MOVIMIENTO = 5000;`. Si `monto > 5000`, retorna HTTP 400. Fija forzosamente `metodo = 'Efectivo'` (RN-15: prohibido registrar movimientos manuales de Yape).
  - **[HECHO] Test de Integración:** Comprobado en [caja_concurrencia.test.js:L81-107](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/server/tests/integration/caja_concurrencia.test.js#L81-L107) (rechaza intento de S/ 6,000 y acepta S/ 4,000).
* **Calificación:** **Cumple al 100% (RN-11 y RN-15 blindadas)**.

#### HU-CAJA-04 · Caja – Ver resumen del turno activo
* **Planificación:** Should have · 2 pts · SPR-2 · REL-2. Actor: Vendedor. Tablero en tiempo real muestra dinero esperado en cajón separado por métodos de pago.
* **Código:**
  - **[HECHO]** Backend en [caja.controller.js:L197-213](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/server/controllers/caja.controller.js#L197-L213) (`obtenerActivo`).
  - **[HECHO]** Vista React [CajaPage.jsx](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/caja/CajaPage.jsx) muestra tarjetas desglosadas (Apertura, Ventas Efectivo, Ventas Yape, Ingresos, Egresos, Esperado en Cajón) con recarga automática sincronizada por contexto.
* **Calificación:** **Cumple al 100%**.

#### HU-CAJA-06 · Caja – Aprobar cierre de turno
* **Planificación:** Should have · 2 pts · SPR-2 · REL-2. Actor: Administrador. Revisa y aprueba cierre de turno con descuadre, pasando a estado "Conciliado" con notas internas.
* **Código:**
  - **[HECHO]** Backend en [caja.controller.js:L312-334](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/server/controllers/caja.controller.js#L312-L334) (`aprobar`). Exige rol Administrador o Gerente, valida estado `'Cerrado'` y registra `aprobado_por = req.usuario.id`.
  - **[HECHO]** Frontend [CajaPage.jsx](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/caja/CajaPage.jsx) renderiza el botón "Aprobar arqueo" y muestra el sello de aprobación directiva.
* **Calificación:** **Cumple al 95%**.

#### HU-CAJA-07 · Caja – Forzar cierre de turno ajeno
* **Planificación:** Should have · 5 pts · SPR-2 · REL-2. Actor: Administrador. Cierra turno abandonado (> 12 h) asumiendo que el monto declarado es igual al esperado en sistema. Marca de "Cierre Forzado".
* **Código:**
  - **[HECHO] Decisión Técnica Superior (Seguridad Antifraude):** En [caja.controller.js:L140-194](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/server/controllers/caja.controller.js#L140-L194) (`cerrarForzado`), el sistema **rechaza el cierre a ciegas**. Exige expresamente que el Administrador cuente el dinero físico real (`monto_contado_efectivo`, `monto_contado_yape`) y declare un motivo obligatorio, registrando `cerrado_por` y `motivo_cierre_forzado`.
* **Calificación:** **Cumple al 90% (Divergencia intencional por auditoría física)**.

#### HU-VEN-03 · Ventas (POS) – Generar comprobante en PDF
* **Planificación:** Should have · 5 pts · SPR-3 · REL-3. Actor: Vendedor. Descarga o envío de boleta/factura en formato PDF legal formateado, tanto al cobrar como desde el historial.
* **Código:**
  - **[HECHO] Implementación Integral:** En [comprobante.js:L1-320](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/utils/comprobante.js#L1-L320), genera comprobante en PDF vía `html2pdf.js`, con código QR dinámico SUNAT (`QRCode`), desglose fiscal completo, conversión de monto a letras en Soles (`numeroALetras`), y pie de página fiscal.
  - **[HECHO] Envío por Correo Electrónico:** Integra envío y reenvío de comprobantes por email vía Nodemailer ([venta.domain.service.js:L280-368](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/server/services/venta.domain.service.js#L280-L368), [sunat_reemision.test.js:L77-91](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/server/tests/integration/sunat_reemision.test.js#L77-L91)).
* **Calificación:** **Cumple al 100% (Sobrecumplimiento técnico)**.

#### HU-VEN-04 · Ventas (POS) – Buscar producto por código de barras
* **Planificación:** Should have · 3 pts · SPR-3 · REL-3. Actor: Vendedor. Escaneo con lector óptico agrega al carrito con cantidad 1; escaneos repetidos incrementan cantidad en la misma línea sin duplicar.
* **Código:**
  - **[HECHO] Manejo de Lector Óptico:** [VentasPage.jsx:L246-294](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/ventas/VentasPage.jsx#L246-L294) implementa `buscarPorCodigo` contra `GET /api/productos/codigo/:codigo`.
  - **[HECHO] Auto-foco y Consolidación:** [VentasPage.jsx:L250-265, 375-385](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/ventas/VentasPage.jsx#L250-L265) recaptura el foco en el input del escáner automáticamente e incrementa la cantidad en la misma fila del carrito. Testeado en [VentasScanner.test.jsx:L32-108](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/ventas/VentasScanner.test.jsx#L32-L108).
* **Calificación:** **Cumple al 100%**.

#### HU-VEN-07 · Ventas (POS) – Verificar recepción de pago Yape
* **Planificación:** Should have · 2 pts · SPR-2 · REL-2. Actor: Vendedor. Verifica formato y sintaxis de código de operación (RN-02) y lo asocia al comprobante.
* **Código:**
  - **[HECHO]** Backend valida 6 dígitos numéricos en [venta.controller.js:L33-35](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/server/controllers/venta.controller.js#L33-L35). Modal de cobro en [VentasPage.jsx:L173-176](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/ventas/VentasPage.jsx#L173-L176) impide finalizar el cobro sin digitar el código del comprobante POS. Endpoint `PATCH /api/ventas/:id/verificar-yape` permite verificación diferida con sello de usuario y hora ([L204-234]).
* **Calificación:** **Cumple al 100%**.

#### HU-VEN-08 · Ventas (POS) – Exportar historial de ventas a CSV
* **Planificación:** Could have · 3 pts · SPR-3 · REL-3. Actor: Administrador. Exporta ventas filtradas a formato CSV o Excel con datos delimitados.
* **Código:**
  - **[HECHO] Inexistencia Absoluta de Código (0%):** Búsqueda exhaustiva en [HistorialVentasPage.jsx](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/ventas/HistorialVentasPage.jsx), [venta.routes.js](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/server/routes/venta.routes.js) y [venta.controller.js](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/server/controllers/venta.controller.js) confirma que **no existe ningún botón, función ni endpoint para exportar a CSV**.
* **Calificación:** **Cumple al 0% (Funcionalidad fantasma / Deuda técnica total)**.

---

# SECCIÓN V · AUDITORÍA TÉCNICA DETALLADA: MÓDULO 5 (EPIC-REP / CONF)

### Dominio: Reportes, Dashboards y Configuración General del Sistema
* **Total Historias de Usuario:** 16 HUs (2 de Configuración, 5 de Dashboard, 9 de Reportes)
* **Total Puntos de Historia:** 46 Story Points (1 pt + 3 pts + 5 pts + 3 pts + 5 pts + 3 pts + 2 pts + 5 pts + 3 pts + 3 pts + 2 pts + 3 pts + 2 pts + 5 pts + 3 pts + 3 pts)
* **Reglas de Negocio Clave Vinculadas:** `RN-06` (Alerta de Stock Mínimo), `RN-14` (Costo Promedio Ponderado / Margen de Ganancia)
* **Archivos Clave Inspeccionados:**
  - Backend Rutas: [configuracion.routes.js](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/server/routes/configuracion.routes.js), [reporte.routes.js](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/server/routes/reporte.routes.js)
  - Backend Controladores: [configuracion.controller.js](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/server/controllers/configuracion.controller.js), [reporte.controller.js](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/server/controllers/reporte.controller.js)
  - Backend Modelos y Presenters: [Configuracion.js](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/server/models/Configuracion.js), [reporte.presenter.js](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/server/presenters/reporte.presenter.js)
  - Frontend Páginas y Hooks: [ConfiguracionPage.jsx](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/configuracion/ConfiguracionPage.jsx), [DashboardPage.jsx](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/dashboard/DashboardPage.jsx), [ReportesPage.jsx](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/reportes/ReportesPage.jsx), [useConfiguracion.js](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/hooks/useConfiguracion.js)

---

### V.1 Análisis Detallado Historia por Historia

#### HU-CONF-01 · Configuración – Ver configuración actual del negocio
* **Planificación:** Must have · 1 pt · SPR-2 · REL-2. Actor: Administrador. Carga Razón Social, RUC, dirección e IGV actual. Si un vendedor intenta ingresar, el sistema le deniega el acceso.
* **Código:**
  - **[HECHO] Control de Acceso Estricto (RBAC):** En [App.jsx:L166-172](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/App.jsx#L166-L172), la ruta `/configuracion` está protegida por `<PrivateRoute roles={['Administrador']}><ConfiguracionPage /></PrivateRoute>`. El rol `Vendedor` (y `Almacenero`) es redirigido automáticamente fuera de la vista y no visualiza el botón en [Sidebar.jsx](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/components/Sidebar.jsx).
  - **[HECHO] Carga de Parámetros:** [ConfiguracionPage.jsx:L34-50](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/configuracion/ConfiguracionPage.jsx#L34-L50) invoca `GET /api/configuracion` (accesible para lectura general en [configuracion.routes.js:L10](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/server/routes/configuracion.routes.js#L10) para cálculo de impuestos en terminales POS), cargando Razón Social, RUC, dirección, teléfono, IGV, serie de boleta y serie de factura.
  - **[HECHO] Ausencia de Logo en Modelo y UI:** A pesar de que la narrativa de la HU menciona *(como IGV, razón social, logo)*, la entidad [Configuracion.js:L4-60](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/server/models/Configuracion.js#L4-L60) y el formulario no contienen atributo para almacenar archivos o URLs de logotipo corporativo.
* **Calificación:** **Cumple al 90%** (RBAC y campos legales completos; omisión menor de atributo `logo`).

#### HU-CONF-02 · Configuración – Actualizar configuración del negocio
* **Planificación:** Must have · 3 pts · SPR-1 · REL-1. Actor: Administrador. Modifica parámetros fiscales (IGV), razón social o series sin tocar base de datos. Próximas ventas calculan impuestos con el nuevo IGV. Si RUC no tiene 11 dígitos, rechaza.
* **Código:**
  - **[HECHO] Validaciones Backend Robustas:** [configuracion.controller.js:L29-71](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/server/controllers/configuracion.controller.js#L29-L71) valida con regex que el RUC tenga exactamente 11 dígitos y empiece obligatoriamente con `20` (persona jurídica) (`/^20\d{9}$/`), teléfono válido (celular peruano de 9 dígitos o fijo con código de área), IGV numérico entre 0 y 100, y series alfanuméricas de 4 caracteres (`/^[A-Z]\d{3}$/`).
  - **[HECHO] Propagación Reactiva:** Al guardar, [ConfiguracionPage.jsx:L117-123](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/configuracion/ConfiguracionPage.jsx#L117-L123) invoca `notificarConfiguracionActualizada()`, disparando un CustomEvent en ventana que refresca instantáneamente el hook [useConfiguracion.js:L14-25](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/hooks/useConfiguracion.js#L14-L25) montado en la pantalla de ventas ([VentasPage.jsx:L162](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/ventas/VentasPage.jsx#L162)) sin forzar recarga de página.
  - **[HECHO] Confirmación Anti-error en RUC:** [ConfiguracionPage.jsx:L106-113, 319-342](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/configuracion/ConfiguracionPage.jsx#L106-L113) detecta si el usuario está alterando el RUC del negocio y exige una confirmación modal preventiva antes de sobreescribir la identidad tributaria.
* **Calificación:** **Cumple al 90%** (Exigencia de validaciones tributarias completas y propagación en tiempo real; ausencia de selector de logo).

#### HU-DASH-01 · Dashboard – Ver resumen de ventas del día y del mes
* **Planificación:** Must have · 5 pts · SPR-2 · REL-2. Actor: Gerente o Administrador. Tarjetas superiores muestran ingresos en Soles de hoy y del mes en curso. Si ocurre una venta nueva, al recargar se actualizan los montos.
* **Código:**
  - **[HECHO] Tarjetas de Métricas:** [DashboardPage.jsx:L601-645](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/dashboard/DashboardPage.jsx#L601-L645) renderiza 6 KPI Cards: `Total Ventas`, `Ingresos (S/.)`, `Ticket Promedio`, `Productos Activos`, `Sin Stock` y `Solicitudes Pendientes`.
  - **[HECHO] Desviación en Presentación Simultánea Día vs Mes:** El endpoint backend [reporte.controller.js:L38-58](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/server/controllers/reporte.controller.js#L38-L58) (`resumenVentas`) procesa el rango recibido en query. El Dashboard inicializa por defecto el filtro en el mes en curso ([DashboardPage.jsx:L308-311, 332-333](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/dashboard/DashboardPage.jsx#L308-L311)), mostrando los montos del mes en la tarjeta "Ingresos del Mes". **No existe una tarjeta estática separada dedicada exclusivamente a las "Ventas del Día"**. Para ver el total del día, el usuario debe acotar el selector de fechas al día de hoy o revisar el gráfico cronológico inferior.
  - **[HECHO] Auto-refresco en Foco:** [DashboardPage.jsx:L396-400](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/dashboard/DashboardPage.jsx#L396-L400) escucha el evento `window.addEventListener('focus')` y re-ejecuta `fetchData(true)` al volver a la pestaña, reflejando inmediatamente ventas efectuadas en otros terminales.
* **Calificación:** **Cumple al 80%** (KPIs dinámicos y actualizables; omite tarjeta individual para el día).

#### HU-DASH-02 · Dashboard – Ver gráfico de evolución de ventas por día
* **Planificación:** Should have · 3 pts · SPR-3 · REL-3. Actor: Gerente. Gráfico de líneas interactivas con montos de la última semana y tooltip con monto exacto al pasar el cursor.
* **Código:**
  - **[HECHO] Implementación Recharts:** [DashboardPage.jsx:L647-687](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/dashboard/DashboardPage.jsx#L647-L687) renderiza un `AreaChart` interactivo estilizado con degradado púrpura (`#6366f1`), ejes con formato de moneda peruana y fecha DD/MM.
  - **[HECHO] Tooltip Personalizado:** [DashboardPage.jsx:L272-286](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/dashboard/DashboardPage.jsx#L272-L286) (`CustomTooltip`) despliega la fecha legible y el monto exacto formateado en Soles (`S/. XX.XX`).
  - **[HECHO] Agrupación por Zona Horaria Perú:** [reporte.controller.js:L106-117](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/server/controllers/reporte.controller.js#L106-L117) utiliza `("createdAt" AT TIME ZONE 'America/Lima')::date` para garantizar que las ventas nocturnas (ej. 22:00 Lima = 03:00 UTC) se agrupen en el día calendario peruano exacto.
* **Calificación:** **Cumple al 100%**.

#### HU-DASH-03 · Dashboard – Alertas de stock crítico, vencimientos y turnos olvidados
* **Planificación:** Must have · 5 pts · SPR-2 · REL-2. Regla `RN-06`. Actor: Administrador o Gerente. Muestra alerta de reposición si stock <= mínimo parametrizado. Muestra alerta si un turno de caja lleva más de 12 horas abierto.
* **Código:**
  - **[HECHO] Alerta de Stock Crítico:** Implementada doblemente en la tarjeta "Sin Stock" ([DashboardPage.jsx:L632-637](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/dashboard/DashboardPage.jsx#L632-L637)) y en el panel inferior "Stock crítico" ([L724-765]), con enlace directo a `/productos?alerta=critico`.
  - **[HECHO] Alerta de Turno Prolongado con Discrepancia de Horas:** [DashboardPage.jsx:L25, 507, 530-547](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/dashboard/DashboardPage.jsx#L25) evalúa si un turno excede `HORAS_ALERTA_TURNO_ABIERTO = 16` horas (el criterio de aceptación 2 fijaba 12 horas). Si se supera, despliega un banner de advertencia color ámbar con botón de navegación directa hacia `Historial de Caja`.
  - **[HECHO] Omisión de Alerta de Vencimientos:** El Dashboard no contiene ningún indicador ni widget sobre productos vencidos o próximos a expirar (búsqueda de cadenas de lotes o vencimientos arroja cero coincidencias en `DashboardPage.jsx`). Estas alertas están confinadas a las vistas de inventario y lotes.
* **Calificación:** **Cumple al 75%** (Alertas de stock y turnos funcionales; omisión de vencimientos y discrepancia de umbral horario 16h vs 12h).

#### HU-DASH-04 · Dashboard – Ver ranking de productos más vendidos
* **Planificación:** Should have · 3 pts · SPR-3 · REL-3. Actor: Gerente. Gráfico de barras con el top 5 productos más vendidos del mes, reordenado automáticamente de mayor a menor.
* **Código:**
  - **[HECHO] Barra de Progreso Proporcional:** [DashboardPage.jsx:L690-722](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/dashboard/DashboardPage.jsx#L690-L722) consulta `/reportes/ventas/productos-top?limite=5` y renderiza el top 5 con el nombre del producto, marca, unidades vendidas y una barra horizontal animada proporcional a la rotación (`(p.total_vendido / topVendido) * 100%`).
  - **[HECHO] Orden Descendente Garantizado:** El backend [reporte.controller.js:L84](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/server/controllers/reporte.controller.js#L84) impone `order: [[sequelize.literal('total_vendido'), 'DESC']]`.
* **Calificación:** **Cumple al 95%** (Visualización horizontal CSS fluida y responsiva en lugar de `BarChart` SVG de Recharts).

#### HU-DASH-05 · Dashboard – Ver solicitudes de reposición pendientes
* **Planificación:** Should have · 2 pts · SPR-3 · REL-3. Actor: Gerente. Globo/tarjeta con contador exacto de solicitudes pendientes. Al pulsar, redirige a la vista de aprobación.
* **Código:**
  - **[HECHO] Contador de Solicitudes:** La tarjeta "Solicitudes Pendientes" ([DashboardPage.jsx:L639-644](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/dashboard/DashboardPage.jsx#L639-L644)) consume `inventario.solicitudes_pendientes` calculado por `SolicitudReposicion.count({ where: { estado: 'Pendiente' } })` en [reporte.controller.js:L202](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/server/controllers/reporte.controller.js#L202).
  - **[HECHO] Apertura de Modal vs Redirección:** Al hacer clic en la tarjeta ([L643]), en lugar de redirigir a `/inventario/solicitudes` (como estipula el criterio 2), se despliega localmente el modal [TablaSolicitudes:L238-269, 824](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/dashboard/DashboardPage.jsx#L238-L269) con la lista de solicitudes pendientes y sus proveedores sugeridos.
* **Calificación:** **Cumple al 85%** (Métrica exacta y modal de inspección in-situ; omite redirección directa al módulo de aprobación).

#### HU-REP-01 · Reportes – Ver resumen de ventas por período
* **Planificación:** Must have · 5 pts · SPR-2 · REL-2. Actor: Gerente. Selecciona rango de fechas y lista ventas totales. Si fecha de inicio > fin, muestra error de validación e impide continuar.
* **Código:**
  - **[HECHO] Validación de Rango Invertido:** [ReportesPage.jsx:L65-68](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/reportes/ReportesPage.jsx#L65-L68) valida `fechaInicio > fechaHasta` bloqueando el fetch y mostrando `"La fecha 'Desde' no puede ser posterior a la fecha 'Hasta'"`. En el backend, [reporte.controller.js:L16-21, 26](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/server/controllers/reporte.controller.js#L16-L21) (`validarRangoFecha`) rechaza peticiones incoherentes con código HTTP 400.
  - **[HECHO] Resumen Ejecutivo:** [ReportesPage.jsx:L396-430](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/reportes/ReportesPage.jsx#L396-L430) muestra Total de Ventas, Ingresos Totales y Ticket Promedio consolidados para el período exacto.
* **Calificación:** **Cumple al 100%**.

#### HU-REP-02 · Reportes – Ver ranking de productos más vendidos
* **Planificación:** Must have · 3 pts · SPR-2 · REL-2. Actor: Gerente o Administrador. Ordenado de mayor a menor por cantidad vendida. Productos sin ventas en el rango quedan excluidos.
* **Código:**
  - **[HECHO] Agrupación y Ordenamiento:** [reporte.controller.js:L60-94](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/server/controllers/reporte.controller.js#L60-L94) (`productosTop`) ejecuta `SUM(cantidad)` sobre `DetalleVenta` con `inner join` sobre ventas en estado 'Completada', agrupando por producto y ordenando por `total_vendido DESC`.
  - **[HECHO] Exclusión Automática:** Al usarse `required: true` (inner join) en la relación con `Venta`, los ítems sin transacciones quedan fuera del resultado sin ensuciar la visualización.
  - **[HECHO] Renderizado con Medallero:** [ReportesPage.jsx:L432-498](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/reportes/ReportesPage.jsx#L432-L498) presenta una tabla estilizada destacando los 3 primeros puestos con medallas en color oro, plata y bronce, barras de avance e importes en moneda nacional.
* **Calificación:** **Cumple al 100%**.

#### HU-REP-03 · Reportes – Ver ventas desglosadas por día
* **Planificación:** Should have · 3 pts · SPR-3 · REL-3. Actor: Gerente. Tabla con ingresos desglosados día por día en el mes seleccionado. Días sin ventas (feriados/cerrados) deben mostrar S/ 0.00.
* **Código:**
  - **[HECHO] Agrupación por Fecha Local:** [reporte.controller.js:L96-126](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/server/controllers/reporte.controller.js#L96-L126) y [ReportesPage.jsx:L562-591](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/reportes/ReportesPage.jsx#L562-L591) listan cada día con su número de transacciones e ingreso acumulado.
  - **[HECHO] Omisión de Días con Cero Ventas (Sin `generate_series`):** La consulta SQL agrupa únicamente sobre las ventas existentes (`GROUP BY FECHA_PERU`). Si en un día específico el minimarket no registró transacciones, dicho día es omitido de la tabla en lugar de generar una fila artificial con monto `S/ 0.00` como exige el criterio 2.
* **Calificación:** **Cumple al 80%** (Desglose verificado; falta relleno continuo de serie temporal).

#### HU-REP-04 · Reportes – Ver ventas por método de pago
* **Planificación:** Should have · 2 pts · SPR-3 · REL-3. Actor: Administrador. Desglosa montos cobrados en Efectivo vs Yape para conciliación bancaria. La sumatoria coincide exactamente con el monto bruto facturado.
* **Código:**
  - **[HECHO] Cuadre Contable:** Backend [reporte.controller.js:L128-149](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/server/controllers/reporte.controller.js#L128-L149) (`ventasPorMetodoPago`) agrupa las ventas completadas por `metodo_pago`. En [ReportesPage.jsx:L593-622](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/reportes/ReportesPage.jsx#L593-L622) y el modal del Dashboard ([DashboardPage.jsx:L153-187](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/dashboard/DashboardPage.jsx#L153-L187)), se tabula el detalle y pie de tabla garantizando que `Efectivo + Yape = Total Facturado`.
* **Calificación:** **Cumple al 100%**.

#### HU-REP-05 · Reportes – Ver stock crítico
* **Planificación:** Must have · 3 pts · SPR-2 · REL-2. Actor: Administrador o Gerente. Consolida productos con `stock <= stock_minimo`. Muestra explícitamente el proveedor asociado a cada producto para agilizar órdenes.
* **Código:**
  - **[HECHO] Umbral Dinámico:** [reporte.controller.js:L151-187](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/server/controllers/reporte.controller.js#L151-L187) filtra productos activos donde `Producto.stock <= COALESCE(Producto.stock_minimo, limite)`. En [ReportesPage.jsx:L627-707](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/reportes/ReportesPage.jsx#L627-L707), el usuario puede ajustar interactivamente el umbral numérico de sensibilidad.
  - **[HECHO] Omisión de Columna Proveedor:** En la consulta backend ([L167]), el modelo solo incluye la asociación `categoria`, omitiendo `proveedor`. Consiguientemente, la tabla en [ReportesPage.jsx:L670-676](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/reportes/ReportesPage.jsx#L670-L676) solo muestra columnas `Producto`, `Marca`, `Categoría`, `Stock actual` y `Mínimo aplicado`, omitiendo al proveedor asociado (criterio 2).
  - **[HECHO] Confirmación de Permisos del Almacenero:** En línea con la nota de trazabilidad de la HU, el endpoint está restringido por `verificarRol('Gerente', 'Administrador')` en [reporte.routes.js:L8](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/server/routes/reporte.routes.js#L8).
* **Calificación:** **Cumple al 80%** (Cálculo de criticidad y umbral dinámico impecables; falta asociación visual del proveedor).

#### HU-REP-06 · Reportes – Ver resumen general del inventario
* **Planificación:** Should have · 2 pts · SPR-3 · REL-3. Actor: Gerente o Administrador. Calcula la valorización total del inventario multiplicando el stock actual de cada producto por su costo promedio (RN-14), tomando valores del Kardex.
* **Código:**
  - **[HECHO] Desviación Crítica / Funcionalidad No Implementada:** El endpoint `/api/reportes/inventario/resumen` ([reporte.controller.js:L189-216](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/server/controllers/reporte.controller.js#L189-L216)) únicamente cuenta entidades (`total_productos`, `total_categorias`, `total_proveedores`, `productos_sin_stock`, `solicitudes_pendientes`). **No existe en backend ninguna consulta que ejecute `SUM(stock * costo_promedio)`**.
  - **[HECHO] Ausencia de Vista en Reportes:** [ReportesPage.jsx](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/reportes/ReportesPage.jsx) ni siquiera consume este endpoint ni presenta una sección de "Inventario Valorizado" (el endpoint solo es llamado por el Dashboard para poblar las tarjetas de conteo).
* **Calificación:** **Cumple al 30% (Desviación crítica de especificación)**.

#### HU-REP-07 · Reportes – Ver margen de ganancia por producto
* **Planificación:** Should have · 5 pts · SPR-3 · REL-3. Regla `RN-14`. Actor: Gerente. Margen de utilidad bruta (Precio venta menos Costo). Si un producto se vende bajo su costo, se resalta en rojo con margen negativo.
* **Código:**
  - **[HECHO] Trazabilidad Contable Superior a la Planificación:** La consulta SQL en [reporte.controller.js:L239-260](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/server/controllers/reporte.controller.js#L239-L260) une `detalle_ventas` con `consumos_lote` y `entradas_mercaderia`, calculando `costo_total = SUM(cl.cantidad * em.costo_unitario)`. En vez de una aproximación teórica por costo promedio global, audita el costo real de adquisición de cada lote despachado por FEFO.
  - **[HECHO] Cálculo de Porcentajes y Resaltado Negativo:** [reporte.presenter.js:L47-50](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/server/presenters/reporte.presenter.js#L47-L50) computa `margen_pct`. En [ReportesPage.jsx:L538-546](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/reportes/ReportesPage.jsx#L538-L546), si el margen es menor o igual a cero, se aplica la clase condicional `text-red-600` y badge `bg-red-100 text-red-700`.
* **Calificación:** **Cumple al 95%** (Fidelidad analítica excepcional lote a lote).

#### HU-REP-08 · Reportes – Ver mermas agrupadas por motivo
* **Planificación:** Should have · 3 pts · SPR-3 · REL-3. Actor: Administrador o Gerente. Gráficos y tablas agrupando dinero perdido por categoría de merma (vencimiento, daño, operativa). Al exportar, cada fila indica fecha, producto y costo.
* **Código:**
  - **[HECHO] Valorización de Mermas:** [reporte.controller.js:L294-308](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/server/controllers/reporte.controller.js#L294-L308) agrupa las bajas por `b.motivo` y valoriza la pérdida multiplicando la cantidad dada de baja por el costo unitario de la entrada consumida (`COALESCE(em.costo_unitario, p.costo_promedio, 0)`).
  - **[HECHO] Omisión de Gráficos:** [ReportesPage.jsx:L710-746](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/reportes/ReportesPage.jsx#L710-L746) renderiza únicamente una tabla resumen. No contiene gráficos de barras ni sectores para mermas (criterio 1).
  - **[HECHO] Exportación Resumida vs Detallada:** En el PDF generado ([ReportesPage.jsx:L275-297](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/reportes/ReportesPage.jsx#L275-L297)), se exporta la tabla de totales agrupados por motivo (`Motivo`, `N° Bajas`, `Cantidad Total`, `Costo Valorizado`), en lugar del listado detallado fila por fila con fecha y producto indicado en el criterio 2.
* **Calificación:** **Cumple al 80%** (Cálculo financiero exacto; carece de gráfica visual y exportación granular).

#### HU-REP-09 · Reportes – Exportar reportes en PDF
* **Planificación:** Could have · 3 pts · SPR-3 · REL-3. Actor: Administrador o Gerente. Botón "Exportar a PDF" que descarga reporte maquetado con logo institucional. Paginación automática conservando encabezados en tablas extensas.
* **Código:**
  - **[HECHO] Maquetación Profesional con `jsPDF` y `jspdf-autotable`:** [ReportesPage.jsx:L140-310](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/reportes/ReportesPage.jsx#L140-L310) (`generarPDF`) compila e inserta secuencialmente: Resumen de Ventas, Ventas por Día, Métodos de Pago, Top 10 Productos, Margen por Producto y Mermas por Motivo. Cada tabla define cabeceras tematizadas (`fillColor` con paleta de la aplicación) y salto de página automático (`addPage`) cuando `y > 220/240`.
  - **[HECHO] Encabezado Tipográfico sin Logo:** El encabezado del documento emplea texto plano `doc.text('MiniMarket', 105, y, { align: 'center' })` en lugar de una imagen vectorial o mapa de bits de logotipo corporativo (consecuencia de la ausencia de logo en `Configuracion`).
* **Calificación:** **Cumple al 90%** (Generador de PDF completo, robusto y paginado; encabezado tipográfico).

---

### V.2 Síntesis de Coincidencia Técnica — Módulo 5

| Métrica del Módulo 5 | Valor Auditado | Observación del Auditor Senior |
|---|:---:|---|
| **Historias Planificadas** | 16 HUs | 2 Must (Conf) + 2 Must (Dash) + 3 Must (Rep) + 8 Should + 1 Could |
| **Story Points en Juego** | 46 pts | 23% del esfuerzo total del backlog ágil |
| **Puntos Equivalentes Validados** | 39.15 pts | Deducciones por omisión de inventario valorizado y gráficas de merma |
| **Porcentaje de Coincidencia** | **85.1%** | **Nivel de implementación funcional Sólido** |
| **Cobertura de Pruebas Unitarias/Integración** | **0% (0/16 HUs)** | No se hallaron archivos `.test.js` ni `.spec.js` para reportes o configuración |

---

## Cuadro Epistemológico Maestro Consolidado (Proyecto Completo)

| Afirmación / Hallazgo | Tipo | Justificación y Evidencia Comprobada en Sesión |
|---|:---:|---|
| La apertura de caja exige obligatoriamente un fondo mínimo de S/ 500 (`RN-10`). | **[HECHO]** | [caja.controller.js:L11, 34-38](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/server/controllers/caja.controller.js#L11), [CajaPage.jsx:L10](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/caja/CajaPage.jsx#L10). |
| Los movimientos manuales de caja tienen tope de S/ 5,000 (`RN-11`) y son exclusivos en efectivo (`RN-15`). | **[HECHO]** | [caja.controller.js:L15, 226-250](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/server/controllers/caja.controller.js#L15), [caja_concurrencia.test.js:L81-107](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/server/tests/integration/caja_concurrencia.test.js#L81-L107). |
| La emisión de comprobantes incrementa atómicamente la serie y correlativo oficial con bloqueo pesimista (`RN-13`). | **[HECHO]** | [venta.domain.service.js:L135-142, 163-164](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/server/services/venta.domain.service.js#L135-L142). |
| `RN-09` está implementada al 100%: anulación permite retornar productos a stock o dar de baja por merma en `BajaInventario`. | **[HECHO]** | [venta.domain.service.js:L216-225, 243-258](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/server/services/venta.domain.service.js#L216-L225). |
| `HU-VEN-03` genera PDF legal con QR dinámico SUNAT, desglose fiscal y soporte de reenvío por correo electrónico. | **[HECHO]** | [comprobante.js:L1-320](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/utils/comprobante.js#L1-L320), [sunat_reemision.test.js:L77-91](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/server/tests/integration/sunat_reemision.test.js#L77-L91). |
| `HU-VEN-04` escanea código óptico, reenfoca automáticamente el cursor y acumula unidades sin duplicar filas. | **[HECHO]** | [VentasPage.jsx:L250-265, 375-385](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/ventas/VentasPage.jsx#L250-L265), [VentasScanner.test.jsx:L32-108](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/ventas/VentasScanner.test.jsx#L32-L108). |
| `HU-VEN-08` (Exportar ventas a CSV) tiene 0% de código implementado en todo el repositorio. | **[HECHO]** | Cero ocurrencias en [HistorialVentasPage.jsx](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/ventas/HistorialVentasPage.jsx) y [venta.routes.js](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/server/routes/venta.routes.js). |
| La configuración del sistema exige RUC 20 de persona jurídica, teléfono peruano válido y series SUNAT oficiales. | **[HECHO]** | [configuracion.controller.js:L33-53](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/server/controllers/configuracion.controller.js#L33-L53), [ConfiguracionPage.jsx:L85-104](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/configuracion/ConfiguracionPage.jsx#L85-L104). |
| El cambio de IGV o parámetros del negocio se propaga a los terminales POS sin recarga mediante eventos en cliente. | **[HECHO]** | [ConfiguracionPage.jsx:L123](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/configuracion/ConfiguracionPage.jsx#L123), [useConfiguracion.js:L14-25](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/hooks/useConfiguracion.js#L14-L25). |
| El modelo `Configuracion` y las pantallas no admiten la carga ni visualización de logotipo corporativo. | **[HECHO]** | [Configuracion.js:L4-60](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/server/models/Configuracion.js#L4-L60), [ConfiguracionPage.jsx:L7-15](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/configuracion/ConfiguracionPage.jsx#L7-L15). |
| El cálculo del margen de utilidad (`HU-REP-07`) rastrea el costo exacto del lote despachado por FEFO en vez de un costo promedio global. | **[HECHO]** | [reporte.controller.js:L252-254](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/server/controllers/reporte.controller.js#L252-L254), [reporte.presenter.js:L31-50](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/server/presenters/reporte.presenter.js#L31-L50). |
| `HU-REP-06` (Inventario Valorizado) no está implementada: el endpoint solo entrega conteos enteros de entidades. | **[HECHO]** | [reporte.controller.js:L189-216](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/server/controllers/reporte.controller.js#L189-L216). |
| El reporte de Stock Crítico (`HU-REP-05`) omite la columna y asociación del Proveedor. | **[HECHO]** | [reporte.controller.js:L167](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/server/controllers/reporte.controller.js#L167), [ReportesPage.jsx:L670-676](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/reportes/ReportesPage.jsx#L670-L676). |
| El Almacenero tiene acceso estrictamente denegado al módulo de Reportes y al Dashboard en backend y frontend. | **[HECHO]** | [reporte.routes.js:L8](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/server/routes/reporte.routes.js#L8), [App.jsx:L109, 159](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/App.jsx#L109). |
| La exportación de reportes en PDF compila 6 secciones completas con tablas formateadas y paginación automática. | **[HECHO]** | [ReportesPage.jsx:L140-310](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/reportes/ReportesPage.jsx#L140-L310). |
| El cierre forzado (`HU-CAJA-07`) exige conteo físico real y motivo en vez de cierre a ciegas como medida antifraude. | **[HECHO]** | [caja.controller.js:L140-155](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/server/controllers/caja.controller.js#L140-L155). |
| No existe columna `guia_remision` en backend para entradas de mercadería (`RN-01`). | **[HECHO]** | [EntradaMercaderia.js:L1-78](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/server/models/EntradaMercaderia.js#L1-L78), [inventario.controller.js:L59-130](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/server/controllers/inventario.controller.js#L59-L130). |
| La regla `RN-04` (firma/aprobación de mermas > S/ 50) no está implementada en base de datos ni backend. | **[HECHO]** | [BajaInventario.js:L4-52](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/server/models/BajaInventario.js#L4-L52), [inventario.controller.js:L181-277](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/server/controllers/inventario.controller.js#L181-L277). |
| La regla `RN-05` está blindada: bajas por vencimiento solo proceden si `fecha_vencimiento <= hoyPeru()`. | **[HECHO]** | [inventario.controller.js:L228-234](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/server/controllers/inventario.controller.js#L228-L234), [inventario.service.js:L58-72](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/server/services/inventario.service.js#L58-L72). |
| La regla `RN-14` (costo promedio ponderado) se calcula en backend al ingresar lote con costo. | **[HECHO]** | [inventario.service.js:L32-41](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/server/services/inventario.service.js#L32-L41). |
| La regla `RN-16` permite reasignar proveedor al momento de aprobar solicitud de reposición. | **[HECHO]** | [inventario.controller.js:L510](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/server/controllers/inventario.controller.js#L510), [SolicitudesPage.jsx:L208-226](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/solicitudes/SolicitudesPage.jsx#L208-L226). |
| El modelo `SolicitudReposicion` es monoproducto (1 producto por solicitud), no cabecera-detalle. | **[HECHO]** | [SolicitudReposicion.js:L10-25](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/server/models/SolicitudReposicion.js#L10-L25). |
| `HU-SOL-03` no genera documento PDF de orden de compra al aprobar la solicitud. | **[HECHO]** | Cero ocurrencias de bibliotecas PDF en [inventario.controller.js](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/server/controllers/inventario.controller.js) y [SolicitudesPage.jsx:L169-191](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/solicitudes/SolicitudesPage.jsx#L169-L191). |
| El backend soporta recepción parcial con solicitud hija vinculada, pero la UI la desactiva con `disabled`. | **[HECHO]** | [inventario.controller.js:L598-626](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/server/controllers/inventario.controller.js#L598-L626), [SolicitudesPage.jsx:L406-413](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/solicitudes/SolicitudesPage.jsx#L406-L413). |
| El Almacenero tiene bloqueado el ingreso libre de entradas directas si el producto ya cuenta con stock previo. | **[HECHO]** | [inventario.controller.js:L91-96](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/server/controllers/inventario.controller.js#L91-L96), [InventarioPage.jsx:L316-318](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/inventario/InventarioPage.jsx#L316-L318). |
| `RN-08` no valida límite de 24 horas; valida que el turno de caja siga con estado 'Abierto'. | **[HECHO]** | [venta.domain.service.js:L234](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/server/services/venta.domain.service.js#L234). |
| La tabla `usuarios` carece de campo `dni`; la unicidad descansa en `email` (`RN-12`). | **[HECHO]** | [Usuario.js:L4-71](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/server/models/Usuario.js#L4-L71). |
| Mutaciones de usuarios (`POST`, `PUT`, `desactivar`) son exclusivas de `SuperAdmin`. | **[HECHO]** | [usuario.routes.js:L33-72](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/server/routes/usuario.routes.js#L33-L72). |
| `HU-AUTH-04` expulsa sesiones concurrentes incrementando `session_version` en vez de bloquear login. | **[HECHO]** | [auth.controller.js:L57-71](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/server/controllers/auth.controller.js#L57-L71), [sesion_unica.test.js:L19-46](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/server/tests/integration/sesion_unica.test.js#L19-L46). |
| 65 de las 72 historias de usuario carecen de tests unitarios/integración en Jest o Vitest. | **[HECHO]** | Búsqueda exhaustiva en [server/tests/](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/server/tests/) y [client/src/](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/). |
| `HU-AUTH-06` carece por completo de pantalla o modal en React. | **[HECHO]** | 0 coincidencias de `/me/password` en [client/src/](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/). |
| La ruta `/clientes` no está enlazada en el menú lateral del frontend (`NAV_ITEMS`). | **[HECHO]** | [MainLayout.jsx:L28-43](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/components/MainLayout.jsx#L28-L43). |
| La edición de correos de clientes (`HU-CLI-03`) prohíbe el acceso al `Vendedor`. | **[HECHO]** | [cliente.routes.js:L23](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/server/routes/cliente.routes.js#L23), [ClientesPage.jsx:L9-12](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/clientes/ClientesPage.jsx#L9-L12). |
| La regla `RN-03` bloquea lotes caducados en cálculo de stock y algoritmo de ventas. | **[HECHO]** | [producto.controller.js:L38-63](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/server/controllers/producto.controller.js#L38-L63), [venta.domain.service.js:L81-99](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/server/services/venta.domain.service.js#L81-L99). |
| `HU-PROD-03` implementa autocompletado desde OpenFoodFacts y APIs mundiales. | **[HECHO]** | [barcodeService.js:L4-51](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/server/services/barcodeService.js#L4-L51), [ProductosPage.jsx:L102-127](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/productos/ProductosPage.jsx#L102-L127). |
| Los proveedores exigen RUC 20 (empresa) y validación en vivo de condición HABIDO ante SUNAT. | **[HECHO]** | [proveedor.controller.js:L58](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/server/controllers/proveedor.controller.js#L58), [ProveedoresPage.jsx:L108-111](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/modules/proveedores/ProveedoresPage.jsx#L108-L111). |
| La discrepancia entre la documentación y el código se debe a que la documentación se generó por ingeniería inversa con otra IA post-despliegue. | **[SUPUESTO]** | Confirmado por el contexto operativo del proyecto y comentarios de implementación. |
| ¿Desea el equipo registrar formalmente estas discrepancias como Deuda Técnica en la entrega o ajustar los criterios de las HUs? | **[PREGUNTA]** | Decisión pendiente para alineación y gobernanza académica. |

---

## Resumen Ejecutivo Final y Conclusiones del Proyecto

Tras auditar minuciosamente las **72 Historias de Usuario (201 Story Points)** distribuidas en las 5 épicas del proyecto y contrastar cada línea de código con los documentos ágiles de planificación Scrum:

1. **Balance General de Coincidencia:**
   - **Módulo 1 (Seguridad y Usuarios - EPIC-SEG):** 13 HUs · 27 pts · **81.5%**
   - **Módulo 2 (Catálogo y Clientes - EPIC-CAT):** 17 HUs · 47 pts · **89.4%**
   - **Módulo 3 (Inventario y Almacén - EPIC-INV):** 11 HUs · 33 pts · **86.4%**
   - **Módulo 4 (Ventas, POS y Caja - EPIC-VEN):** 15 HUs · 48 pts · **89.7%**
   - **Módulo 5 (Reportes y Dashboards - EPIC-REP / CONF):** 16 HUs · 46 pts · **85.1%**
   - **PROMEDIO GLOBAL PONDERADO DEL SISTEMA:** **86.9% de coincidencia técnica.**

2. **Fortalezas Arquitectónicas Destacadas:**
   - Blindaje de transacciones de caja y ventas con bloqueo pesimista (`SELECT FOR UPDATE`), transacciones ACID completas y resolución matemática de saldos en efectivo.
   - Algoritmo de despacho FEFO riguroso para productos perecibles que impide comercializar o ingresar mercadería con fecha caducada.
   - Emisión legal de comprobantes con correlativo atómico por serie, cálculo tributario de IGV y generación de PDFs con QR dinámico según normativa SUNAT.
   - Trazabilidad contable en reportes de margen conectada directamente a los costos reales de cada lote consumido.

3. **Principales Inconsistencias y Deudas Técnicas Identificadas:**
   - **Funcionalidades Fantasma (0% Código):** `HU-VEN-08` (Exportar ventas a CSV) carece por completo de backend y frontend; `HU-AUTH-06` carece de pantalla en frontend.
   - **Desviaciones en Reglas de Negocio:** `RN-01` (sin guía de remisión), `RN-04` (sin firma/tope de S/ 50 en mermas), `RN-07` (filtrado por usuario histórico en vez de turno), `RN-08` (cierre de turno en vez de 24h).
   - **Gaps de Especificación en Reportes:** `HU-REP-06` no entrega valorización del inventario (solo recuentos de entidades); `HU-REP-05` omite el proveedor en su tabla; `HU-DASH-03` omite alertas de lotes por vencer en el panel ejecutivo.
   - **Deuda Técnica de Calidad y Pruebas (DoD):** Solo 7 historias (9.7%) poseen pruebas automatizadas (`sesion_unica`, `merma_robo`, `fefo_consumption`, `caja_concurrencia`, `sunat_reemision`, `VentasScanner`, `CajaPage`). 65 de las 72 HUs carecen de pruebas unitarias o de integración.


