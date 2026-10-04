---
Código de documento: DOC-PLAN-PREGUNTAS
Título: Compendio de Preguntas, Decisiones y Definiciones de Negocio del Product Owner
Versión: 5.0
Fecha: 2026-10-04
Elaborado por: Equipo Scrum & Supervisión Metodológica
Elaborado por: Colonia Infantas, Walter (Developer / Representante Técnico del Scrum Team)
Revisado y Aprobado por: Dueño del Minimarket (Product Owner)
Estado: Aprobado
Propósito: Consolidar, categorizar y documentar la totalidad de las preguntas, dilemas operativos y decisiones clave surgidas durante el ciclo de inspección metodológica y planificación del sistema de minimarket, detallando su formulación, impacto funcional y resolución adoptada en la versión oficial 4.8
Documentos relacionados: DOC-PLAN-00, DOC-PLAN-08, DOC-PLAN-10, DOC-PLAN-11, DOC-ANEXO-B
---

# Compendio de Preguntas, Decisiones y Definiciones de Negocio del Product Owner

## 1. Introducción y Propósito del Compendio

Durante las distintas fases de aseguramiento de calidad de requisitos y refinamiento de la planificación ágil Scrum para el Sistema Integral de Gestión del Minimarket, se identificaron y formularon interrogantes de negocio, dilemas de diseño operativo y puntos de decisión que requerían la definición explícita del **Product Owner**, en coordinación con los operadores del establecimiento comercial (Cajeros, Almaceneros, Administradores y Gerencia).

El presente compendio reúne, clasifica y resuelve formalmente la totalidad de dichas preguntas, articulándolas en **5 categorías funcionales y estratégicas**:
1. **Decisiones Fundamentales de Negocio y Arquitectura (D1 a D12)**.
2. **Puntos Pendientes de Operación Comercial y Catálogos (PP-01 a PP-12)**.
3. **Preguntas de Seguridad, Roles y Políticas de Acceso**.
4. **Preguntas de Control de Caja, Punto de Venta (POS) y Analítica Ejecutiva**.
5. **Preguntas Metodológicas y Argumentación para la Sustentación Académica**.

---

## 2. Categoría I: Decisiones Fundamentales de Negocio y Arquitectura (D1 a D12 Oficiales v4.8)

### D1: Esquema de Sesiones de Usuario Únicas y Política de Sesión Activa
- **Formulación de la Pregunta:**  
  *Si un colaborador inicia sesión en una terminal física teniendo una sesión activa previa en otro dispositivo, ¿debe el sistema impedir el nuevo acceso, permitir ambas sesiones simultáneas, o cerrar la sesión anterior notificando al usuario?*
- **Dilema Operativo:**  
  Permitir sesiones simultáneas vulnera la trazabilidad de transacciones en mostrador (un vendedor podría operar bajo la cuenta de otro). Bloquear el nuevo acceso puede dejar varado a un colaborador si olvidó cerrar sesión en otra terminal.
- **Resolución Oficial Adoptada (v4.8):**  
  **Cierre de sesión anterior con notificación visual inmediata.** El sistema permite el nuevo inicio de sesión y desactiva en tiempo real la sesión previa, desplegando un banner informativo ámbar en la terminal desconectada indicando que el acceso fue revocado por un inicio de sesión concurrente (`HU-AUTH-04` y regla `RN-UI-01`).

---

### D2: Política de Contraseñas y Recuperación por Código de Verificación Temporal de 4 Dígitos
- **Formulación de la Pregunta:**  
  *Para la recuperación no asistida de contraseñas de colaboradores, ¿qué mecanismo de validación resulta óptimo en el mostrador: un enlace alfanumérico extenso por correo o un código de verificación numérico temporal de corta longitud?*
- **Dilema Operativo:**  
  Los enlaces largos son difíciles de manipular en terminales de caja o teléfonos de mostrador; los códigos breves requieren un tiempo de caducidad estricto para evitar intentos no autorizados.
- **Resolución Oficial Adoptada (v4.8):**  
  **Código de verificación temporal de 4 dígitos numéricos con expiración de 15 minutos y longitud mínima de contraseña de 8 caracteres.** Se unificó en `HU-AUTH-05` un código de verificación de 4 dígitos numéricos, limitando los intentos fallidos a un máximo de 5 antes de invalidar la solicitud y exigir asistencia gerencial. Asimismo, toda contraseña de usuario debe contener al menos 8 caracteres combinando mayúsculas, minúsculas y números.

---

### D3: Atribuciones de Catálogo y Consultas Ágiles en Salón
- **Formulación de la Pregunta:**  
  *¿Debe el rol Almacenero tener facultades para dar de alta nuevos productos en el catálogo maestro (`HU-PROD-02`), o esta atribución debe reservarse exclusivamente a la Administración y Gerencia?*
- **Dilema Operativo:**  
  Permitir que el Almacenero cree productos agiliza la recepción de mercadería no registrada previamente; sin embargo, puede generar duplicidades en nombres, categorías incorrectas o precios de venta errados sin aprobación comercial.
- **Resolución Oficial Adoptada (v4.8):**  
  **Segregación de funciones.** La creación, categorización y fijación de precios en el catálogo maestro corresponde exclusivamente a Administrador y Gerente. El Almacenero tiene atribuciones operativas para registrar el ingreso físico de unidades (`UI-010`) y formular solicitudes de reposición (`UI-013`), pero no para alterar la estructura del catálogo. Las búsquedas en mostrador operan mediante consulta ágil por código de barras o descripción.

---

### D4: Emisión Local de Comprobantes SUNAT en Modo Autónomo
- **Formulación de la Pregunta:**  
  *¿El sistema debe contemplar la transmisión telemática sincrónica remota hacia los sistemas centrales de SUNAT / OSE en cada venta, o debe enfocarse en la generación local estructurada continua?*
- **Dilema Operativo:**  
  La transmisión telemática sincrónica depende de servicios web externos que sufren caídas frecuentes, paralizando las colas de cobro en el minimarket si no hay conexión; no cumplir con las normas tributarias acarrea sanciones fiscales.
- **Resolución Oficial Adoptada (v4.8):**  
  **Generación local estructurada continua con parámetros SUNAT.** En `HU-VEN-02` y regla **RN-13**, el sistema genera comprobantes locales oficiales (Boletas con serie B001 y Facturas con serie F001) con cálculo del 18 % de IGV y numeración correlativa atómica ininterrumpida. La solución garantiza continuidad operativa total incluso sin conexión a internet, generando los documentos imprimibles y exportables en formato estándar.

---

### D5: Fondo Mínimo Obligatorio para Apertura de Caja y Modalidad de Arqueo
- **Formulación de la Pregunta:**  
  *¿Es necesario fijar un monto mínimo obligatorio de dinero en efectivo para que un vendedor pueda habilitar un turno de cobro en mostrador, y cuál es la modalidad de arqueo al cierre?*
- **Dilema Operativo:**  
  Permitir aperturas con fondo cero o montos insignificantes paraliza la atención comercial ante la incapacidad de entregar vuelto en efectivo; un arqueo a ciegas retrasa la conciliación de turno al final del día.
- **Resolución Oficial Adoptada (v4.8):**  
  **Fondo mínimo normativo de S/ 500.00 y arqueo con saldo visible orientativo.** En la regla **RN-10** y pantalla `UI-016`, el sistema valida que el monto inicial declarado en efectivo no sea inferior a S/ 500.00, alertando visualmente y bloqueando la apertura si no se alcanza dicho umbral. Al cierre, el vendedor declara el recuento físico de efectivo en gaveta y la conciliación del reporte del terminal digital con saldo esperado visible para agilizar el cuadre.

---

### D6: Restricción de Anulación de Ventas a Turnos Abiertos y Reincorporación de Mercadería
- **Formulación de la Pregunta:**  
  *¿Bajo qué condiciones puede anularse una venta previamente cobrada y cuál debe ser el destino operativo de los productos devueltos por el cliente?*
- **Dilema Operativo:**  
  Si se anulan ventas de turnos ya liquidados o cerrados, se descuadra la contabilidad financiera y fiscal del día; si la mercadería devuelta se reingresa automáticamente al inventario, se corre el riesgo de vender productos rotos o manipulados.
- **Resolución Oficial Adoptada (v4.8):**  
  **Anulación restringida a turnos abiertos con destino selectivo.** Según las reglas **RN-08** y **RN-09**, solo Administrador y Gerente pueden anular ventas, y únicamente mientras el turno de caja del cobro permanezca en estado 'Abierto'. El supervisor debe seleccionar obligatoriamente el destino de cada ítem devuelto: retorno al stock disponible o pase directo a bajas por merma/daño (`UI-015`).

---

### D7: Solicitudes de Reposición por Producto Único y Flexibilidad de Proveedores
- **Formulación de la Pregunta:**  
  *Las solicitudes de reposición de mercadería emitidas por el almacén, ¿deben estructurarse por producto individual o como pedidos multiproducto asociados a un proveedor obligatorio?*
- **Dilema Operativo:**  
  Exigir proveedor obligatorio en la solicitud de reposición limita al personal de almacén si desconoce las negociaciones comerciales de la administración; un modelo complejo dilata la aprobación rápida de compras urgentes.
- **Resolución Oficial Adoptada (v4.8):**  
  **Modelo por producto individual con proveedor sugerido.** En `HU-SOL-01` a `HU-SOL-05`, cada solicitud se formula por producto y cantidad requerida, con proveedor sugerido opcional. La Administración evalúa y aprueba cada requerimiento de forma ágil, asignando formalmente el proveedor más conveniente en el momento de la adquisición comercial (RN-16).

---

### D8: Validación de Cobros Digitales Yape/Plin (IziPay) y Código de 6 Dígitos
- **Formulación de la Pregunta:**  
  *Al procesar un cobro mediante billetera digital (Yape/Plin) a través de la pasarela física IziPay, ¿debe el sistema exigir la captura del código de autorización emitido por el terminal y verificar que no se duplique en el historial de ventas?*
- **Dilema Operativo:**  
  Omitir la captura del código de autorización expone al minimarket a fraudes por comprobantes reutilizados; exigir validación manual externa demora la fila de atención.
- **Resolución Oficial Adoptada (v4.8):**  
  **Captura obligatoria y validación de unicidad en tiempo real.** En la regla **RN-02** y pantalla `UI-014`, el sistema exige ingresar los 6 dígitos numéricos del comprobante de autorización emitido por el terminal IziPay, validando en tiempo real que no haya sido registrado previamente en ninguna venta de la historia del establecimiento (`HU-VEN-01` y `HU-VEN-07`).

---

### D9: Control Estricto de Perecibles y Exclusión de Comercialización de Caducados
- **Formulación de la Pregunta:**  
  *Un lote de producto perecedero cuya fecha de caducidad coincide exactamente con la fecha del día, ¿debe ser considerado comercializable durante las horas hábiles de esa jornada, o debe ser bloqueado automáticamente en el punto de venta desde la apertura del turno comercial?*
- **Dilema Operativo:**  
  Permitir su venta maximiza la recuperación económica de la mercadería hasta el último minuto; no obstante, expone al cliente a adquirir un producto que caducará en pocas horas, elevando el riesgo sanitario y el desprestigio del minimarket.
- **Resolución Oficial Adoptada (v4.8):**  
  **Bloqueo estricto preventivo.** En la regla **RN-03**, el sistema restringe de manera categórica en la terminal POS la venta de cualquier lote cuya fecha de caducidad coincida con la fecha de operación o sea anterior. La mercadería con caducidad del día debe retirarse antes de abrir la tienda y canalizarse al módulo de bajas por vencimiento (RN-05).

---

### D10: Inmutabilidad de Registros Históricos de Almacén y Regularización por Ajuste
- **Formulación de la Pregunta:**  
  *Cuando se comete un error en el registro de una entrada o baja de mercadería, ¿debe permitirse la edición o eliminación directa del movimiento registrado?*
- **Dilema Operativo:**  
  Permitir la edición de registros históricos destruye la trazabilidad contable del inventario valorizado y facilita fraudes internos; prohibirla exige un mecanismo formal de compensación.
- **Resolución Oficial Adoptada (v4.8):**  
  **Registro de movimientos inmutable y regularización por ajuste formal.** Los movimientos de almacén registrados son estrictamente inmutables. Todo error o discrepancia física debe corregirse mediante el flujo formal de Ajuste de Inventario (`HU-INV-06` y `UI-012`), justificando el motivo y registrando al supervisor responsable.

---

### D11: Generación y Descarga de Comprobantes y Reportes Ejecutivos en PDF
- **Formulación de la Pregunta:**  
  *¿Cómo debe resolverse la entrega de comprobantes y reportes gerenciales para garantizar su portabilidad y validez documental?*
- **Dilema Operativo:**  
  Depender exclusivamente de pantallas de consulta dificulta auditorías contables externas y la entrega de sustento fiscal a clientes corporativos.
- **Resolución Oficial Adoptada (v4.8):**  
  **Generación estándar en formato descargable e imprimible.** Se implementa la generación de comprobantes de pago en PDF (`HU-VEN-03`) y reportes analíticos periódicos (`HU-REP-09`), permitiendo su descarga directa o distribución por correo electrónico.

---

### D12: Modelo de Gobernanza Scrum y Segregación de Tareas (Construye ≠ Verifica)
- **Formulación de la Pregunta:**  
  *¿Cómo se garantiza la calidad técnica del producto manteniendo la independencia del aseguramiento de calidad sin sobrecargar al equipo de desarrollo?*
- **Dilema Operativo:**  
  Permitir que el mismo desarrollador verifique su propio código introduce sesgo de confirmación y eleva la deuda técnica; contratar un equipo de QA externo encarece el presupuesto.
- **Resolución Oficial Adoptada (v4.8):**  
  **Principio estricto Construye ≠ Verifica.** Ningún desarrollador puede validar ni realizar el pase de sus propias historias. El esfuerzo total de 502 horas en 363 tareas se divide en 296 h de Construcción (59.0 %) y 206 h de Verificación de Calidad (41.0 %, compuesto por 131.75 h de pruebas unitarias/integración y 74.25 h de verificación funcional y pase web).

---

## 3. Categoría II: Puntos Pendientes de Operación Comercial y Catálogos (PP-01 a PP-12)

| Identificador | Asunto / Pregunta de Negocio | Decisión y Resolución Adoptada en v4.8 | Documento / Regla Impactada |
|:---:|:---|:---|:---:|
| **PP-01** | ¿Cuál es la longitud óptima de la código de verificación temporal? | 4 dígitos numéricos con expiración de 15 minutos. | `HU-AUTH-05` / DOC-PLAN-03-01 |
| **PP-02** | ¿Qué porcentaje de IGV rige en el sistema? | 18 % legal vigente en el territorio nacional. | `HU-CONF-02`, `HU-VEN-01a` / DOC-PLAN-08 |
| **PP-03** | ¿Cuál es la matriz de permisos por roles? | 8 módulos funcionales sincronizados con los 5 roles del minimarket. | `DOC-PLAN-01`, `DOC-PLAN-02` |
| **PP-04** | ¿Quiénes intervienen en el flujo de reposición? | Almacenero formula requerimiento; Administrador autoriza adquisición. | `HU-SOL-03`, `HU-SOL-04` / DOC-PLAN-03-03 |
| **PP-05** | ¿Cómo se visualiza el historial de entradas de almacén? | Listado continuo con orden cronológico descendente y filtros rápidos. | `HU-INV-04` / DOC-PLAN-03-03 |
| **PP-06** | ¿Cómo se garantiza la numeración correlativa en ventas? | Asignación secuencial atómica ininterrumpida por serie (B001 / F001). | `RN-13` / DOC-PLAN-08 |
| **PP-07** | ¿El stock mínimo es editable en el alta de producto? | Valor sugerido inicial fijado en 10 unidades; editable tras calibración. | `RN-UI-02` / DOC-ANEXO-B |
| **PP-08** | ¿Qué requisitos fiscales debe cumplir un proveedor? | RUC con prefijo 20 (persona jurídica), estado ACTIVO y condición HABIDO. | `RN-UI-13` / DOC-ANEXO-B |
| **PP-09** | ¿Se permite baja parcial de un lote vencido? | Bloqueo manual de cantidad: deducción automática del 100 % del lote caducado. | `RN-UI-05` / DOC-ANEXO-B |
| **PP-10** | ¿Cuándo es obligatorio indicar el número de lote en bajas? | Obligatorio exclusivamente para motivo "Dañado"; opcional en mermas globales. | `RN-UI-06` / DOC-ANEXO-B |
| **PP-11** | ¿Cuándo puede el Almacenero ingresar mercadería directa? | Exclusivamente en la primera carga inicial de productos nuevos sin historial. | `RN-01`, `RN-UI-04` / DOC-ANEXO-B |
| **PP-12** | ¿Qué sucede ante inicios de sesión simultáneos? | Invalidación inmediata de la sesión previa y alerta visual de desconexión. | `HU-AUTH-04` / DOC-ANEXO-B |

---

## 4. Categoría III: Preguntas de Seguridad, Roles y Políticas de Acceso

### P-24: Aprovisionamiento del Primer Usuario Administrador (Problema del Huevo y la Gallina)
- **Pregunta:**  
  *Si la creación de usuarios nuevos está reservada al Administrador del sistema, ¿cómo se crea la primera cuenta de acceso en una instalación limpia del sistema sin requerir manipulación directa del modelo de datos?*
- **Resolución:**  
  Se establece como principio de despliegue la ejecución de una rutina automatizada de inicialización (semilla administrativa oficial) que genera la cuenta inicial del Administrador General con credenciales maestras protegidas, obligando al cambio de contraseña en el primer inicio de sesión.

### P-25: Procesamiento Desatendido vs Control Operativo Humano
- **Pregunta:**  
  *¿Deben existir tareas automáticas desatendidas en segundo plano (ej. cierres de turnos automáticos a medianoche o bajas automáticas de productos caducados), o toda acción transaccional debe requerir la supervisión de un operador?*
- **Resolución:**  
  En el modelo de minimarket, los procesos automáticos desatendidos generan discrepancias físicas no verificadas (ej. dinero físico en caja no arqueado). Por tanto, el sistema emite **alertas preventivas en pantalla** (turnos > 16 horas, productos vencidos), pero exige que el cierre de turno o el retiro de mercadería sea ejecutado y firmado por un operador humano.

### P-26: Operación del Rol Gerente en Terminal de Mostrador
- **Pregunta:**  
  *¿Debe el rol Gerente tener permisos para registrar ventas en la terminal POS o únicamente para consultar reportes y autorizar anulaciones?*
- **Resolución:**  
  El Gerente dispone de acceso de supervisión y autorización excepcional (anulaciones de comprobantes y cierres forzados de caja), canalizando las ventas comerciales a través de los vendedores y cajeros designados.

---

## 5. Categoría IV: Preguntas de Control de Caja, Ventas y Analítica

### P-27: Manejo de Turnos de Caja Abiertos por Más de 16 Horas
- **Pregunta:**  
  *Si un cajero concluye su jornada de mostrador y omite realizar el arqueo de cierre, ¿cómo debe proceder el siguiente colaborador para no heredar un descuadre ajeno?*
- **Resolución:**  
  El sistema bloquea la apertura de un nuevo turno en esa gaveta física y despliega una alerta visual destacada. El Administrador o Gerente debe realizar un **cierre forzado con registro de autoría**, documentando el motivo, el arqueo físico encontrado y el identificador del supervisor que liquida el turno olvidado (`RN-UI-08` y `RN-UI-09`).

### P-28: Información de Abastecimiento en el Reporte de Stock Crítico
- **Pregunta:**  
  *En el reporte gerencial de productos bajo stock mínimo (`HU-REP-05`), ¿resulta necesario incluir los datos de contacto del proveedor principal?*
- **Resolución:**  
  Sí. La vista de reporte analítico incorpora la razón social y teléfono del proveedor principal asociado, permitiendo que la Gerencia o Compras emita la orden de reabastecimiento de forma inmediata sin tener que navegar hacia el catálogo general de proveedores.

### P-29: Valorización Monetaria del Inventario Comercial
- **Pregunta:**  
  *¿Debe el panel analítico (`HU-REP-06`) exhibir la valorización monetaria global de las existencias en tienda y almacén?*
- **Resolución:**  
  Sí. El cuadro analítico consolida dos indicadores financieros clave: la valorización al costo promedio de adquisición (`SUM(stock × costo)`) y la valorización al precio de venta proyectado, permitiendo evaluar el capital de trabajo inmovilizado y el margen bruto potencial del establecimiento comercial.

---

## 6. Categoría V: Preguntas Metodológicas y Defensa del Proyecto

### P-30: Tratamiento de Historias Fuera de Alcance (HU-VEN-09)
- **Pregunta:**  
  *¿Cómo debe justificarse ante el docente o jurado la inclusión de historias clasificadas como `Won't have` (ej. `HU-VEN-09`: Monedero digital propio con recarga de saldo)?*
- **Argumentación para la Sustentación:**  
  Se debe explicar que la priorización MoSCoW profesional exige documentar explícitamente lo que **no se construirá** en el horizonte de los 3 sprints planificados. Dejar fuera de alcance el monedero digital propio evitó incurrir en sobrecostos y riesgos regulatorios financieros (cumplimiento SBS), priorizando en su lugar la pasarela de cobro masiva y comprobada de billeteras móviles del mercado peruano (`Yape/Plin (IziPay)`).

### P-31: Justificación del Modelo Matemático de Presupuesto (S/ 22,500.00)
- **Pregunta:**  
  *¿Por qué el presupuesto estimado asciende exactamente a S/ 22,500.00 y cómo se vincula con las horas desglosadas?*
- **Argumentación para la Sustentación:**  
  El presupuesto se sustenta en la fórmula contractual del estándar académico:
  $$\text{Presupuesto} = 6 \text{ semanas} \times \text{S/ 625.00/semana/desarrollador} \times 6 \text{ desarrolladores} = \text{S/ 22,500.00}$$
  Esto equivale exactamente a **S/ 7,500.00 por sprint o release** (100 % costo laboral directo). La remuneración contractual corresponde a **S/ 25.00 por hora bruta** (S/ 625.00 / 25 h semanales por desarrollador), lo que equivale a una tarifa de **S/ 31.25 por hora neta de desarrollo efectivo** (S/ 7,500.00 / 240 h netas por sprint), cubriendo con solvencia las 502 horas oficiales de esfuerzo desglosado en las 363 tareas (296 h de Construcción y 206 h de Verificación QA).

### P-32: Independencia de la Especificación de Requisitos y Enfoque de Negocio
- **Pregunta:**  
  *¿Por qué la documentación de planificación se enfoca estrictamente en reglas de negocio, interfaces y valor para el usuario, sin acoplarse a detalles internos de código o componentes específicos de implementación?*
- **Argumentación para la Sustentación:**  
  Bajo las mejores prácticas de la ingeniería de requisitos (**ISO/IEC/IEEE 29148**) y la **Scrum Guide 2020**, los artefactos del Product Owner deben expresar qué necesita el negocio y cómo debe responder el sistema para satisfacer al usuario final, preservando la neutralidad tecnológica y permitiendo al equipo técnico diseñar la mejor solución arquitectónica.

---

## 7. Dictamen Final de Conformidad

La recopilación de estas 32 preguntas y decisiones formaliza la gobernanza integral del sistema de minimarket. Cada definición adoptada en la Versión 5.1 Oficial Ratificada cuenta con respaldo en las 21 Reglas de Negocio ([DOC-PLAN-08](08_Reglas_de_Negocio_y_Glosario.md)), las Decisiones de Arquitectura ([DOC-PLAN-10]()) y la Especificación de Interfaz ([DOC-ANEXO-B]()), blindando al equipo de desarrollo ante cualquier objeción durante la sustentación final del proyecto.
