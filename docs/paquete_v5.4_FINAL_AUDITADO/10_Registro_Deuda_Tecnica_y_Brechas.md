---
Código de documento: DOC-PLAN-10
Título: Registro de Supuestos de Arquitectura y Decisiones de Negocio
Versión: 5.1
Fecha: 2026-10-04
Elaborado por: Colonia Infantas, Walter
Revisado por: Angeles Pérez, Jhonny
Estado: Aprobado
Propósito: Registrar formalmente los supuestos arquitectónicos, restricciones operativas y decisiones de negocio acordadas con el Product Owner y los stakeholders para guiar la especificación y construcción del sistema.
Documentos relacionados: DOC-PLAN-00, DOC-PLAN-01, DOC-PLAN-03-00, DOC-PLAN-08, DOC-ANEXO-A, DOC-ANEXO-B, DOC-PLAN-11
---

# 10. Registro de Supuestos de Arquitectura y Decisiones de Negocio

## 10.1. Propósito, Alcance y Criterio Metodológico

En el marco de la planificación ágil Scrum y en conformidad con los estándares internacionales ISO/IEC/IEEE 29148 (Ingeniería de Requisitos) e ISO/IEC/IEEE 12207 (Procesos del Ciclo de Vida del Software), este documento formaliza los supuestos de diseño funcional, las restricciones operativas y las doce decisiones estratégicas de negocio (D1 a D12) concertadas entre el Product Owner, los representantes del minimarket y el Equipo Scrum.

El propósito central radica en explicitar las reglas operativas, delimitaciones de alcance y acuerdos de diseño antes de emprender cada iteración de trabajo, garantizando un entendimiento compartido de los criterios de aceptación y previniendo ambigüedades durante la construcción de los incrementos.

**Criterios metodológicos fundamentales:**
1. **Perspectiva a priori:** Cada decisión representa una directriz acordada para la especificación del sistema desde la óptica de negocio, sin alusiones retrospectivas ni términos de bajo nivel.
2. **Inmutabilidad del Backlog:** Ninguna decisión estipulada en este registro altera las 72 historias de usuario planificadas, los 251 puntos de historia estimados ni el presupuesto oficial de S/ 22,500.00.
3. **Trazabilidad cruzada:** Todas las decisiones guardan correlación directa con las 21 Reglas de Negocio (`DOC-PLAN-08`), la Matriz de Roles y Permisos (`DOC-PLAN-01`), el Plan de Lanzamiento (`DOC-PLAN-04`), el Sprint Backlog (`DOC-PLAN-06`), el Desglose de Tareas (`DOC-PLAN-07`) y la Especificación de Interfaz (`DOC-ANEXO-B`).

---

## 10.2. Registro Consolidado de Decisiones de Negocio y Supuestos de Arquitectura (D1 a D12)

### D1: Esquema de sesiones de usuario únicas y política de sesión activa
- **Declaración:** Se establece como principio de seguridad operativa la política de sesión única activa por cuenta de colaborador. Si un usuario inicia sesión desde una nueva terminal o estación de trabajo, cualquier sesión previamente abierta con las mismas credenciales queda invalidada de manera automática al efectuarse la siguiente interacción con el sistema. La interfaz de la sesión desplazada desplegará de forma visible un banner informativo de advertencia indicando textualmente: *"Se inició sesión con esta cuenta desde otro dispositivo."*, impidiendo cualquier operación posterior y canalizando al usuario hacia el formulario de ingreso.
- **Justificación de negocio:** Evitar la suplantación de identidad entre cajeros y operadores, salvaguardar la privacidad de las operaciones de cobro y asegurar la no repudiabilidad de las transacciones comerciales registradas.
- **Historias de usuario vinculadas:** `HU-AUTH-03`, `HU-AUTH-04`, `HU-USR-06`.
- **Reglas de negocio asociadas:** Gobernanza de seguridad de cuentas y trazabilidad de accesos.

### D2: Política de contraseñas y recuperación mediante código de verificación temporal de 4 dígitos
- **Declaración:** Para la recuperación no asistida de credenciales de acceso, el sistema generará un código de autorización numérico temporal de 4 dígitos (rango 1000 a 9999) con una vigencia estricta de 15 minutos, remitido a la casilla de correo electrónico del colaborador solicitante. Como mecanismo de protección contra intentos no autorizados de adivinación, se fija un bloqueo temporal automático de la cuenta por 15 minutos tras acumularse 5  consecutivos en el ingreso del código de autorización.
- **Justificación de negocio:** Brindar un balance óptimo entre agilidad operativa en mostrador para la recuperación rápida de acceso por parte de personal de tienda y salvaguarda robusta contra accesos indebidos.
- **Historias de usuario vinculadas:** `HU-AUTH-05`, `HU-AUTH-06 (Cancelada)`.
- **Reglas de negocio asociadas:** RN-12 (Identidad unívoca de empleados).

### D3: Manejo de catálogos y consultas ágiles en mostrador
- **Declaración:** Para el volumen operativo previsto del establecimiento comercial (estimado en hasta 5,000 productos activos, 1,000 proveedores y 10,000 registros de clientes habituales), las consultas de catálogos maestros y nóminas de usuarios en mostrador están optimizadas para responder en menos de 1.5 segundos en la estación de atención comercial, garantizando fluidez de atención sin latencias perceptibles para el cajero ni el cliente.
- **Justificación de negocio:** Maximizar la agilidad y fluidez de atención en el punto de cobro y agilizar el registro diario de recepciones en el almacén, eliminando tiempos muertos para el cajero y el cliente.
- **Historias de usuario vinculadas:** `HU-CAT-01`, `HU-PROD-01`, `HU-PROV-01`, `HU-CLI-01`, `HU-USR-01`.
- **Reglas de negocio asociadas:** Glosario general y diseño de experiencia de usuario de mostrador.

### D4: Integración local de comprobantes y validación fiscal SUNAT sin dependencia sincrónica externa
- **Declaración:** La emisión de comprobantes de venta (Boletas con serie B001 y Facturas con serie F001) y la valorización monetaria de las transacciones se gestionan con plena autonomía interna en el sistema, aplicando numeración consecutiva estricta ininterrumpida (RN-13) y la tasa legal vigente del Impuesto General a las Ventas (IGV del 18 %) integrada directamente en los precios finales de mostrador. La interconexión con servicios de consulta de padrón tributario (RUC/DNI) opera como asistencia automatizada para validar el estado ACTIVO y la condición de HABIDO del contribuyente; ante fallas de enlace externo, lentitud de la red pública o indisponibilidad del servicio gubernamental, el sistema faculta al operador para capturar los datos fiscales y emitir el comprobante de modo autónomo en contingencia sin detener la fila de cobro.
- **Justificación de negocio:** Garantizar la continuidad operacional ininterrumpida del minimarket frente a eventuales caídas del servicio tributario externo o cortes temporales de conexión a internet.
- **Historias de usuario vinculadas:** `HU-VEN-02`, `HU-CONF-01`, `HU-CONF-02`, `HU-PROV-02`.
- **Reglas de negocio asociadas:** RN-13 (Numeración oficial ininterrumpida) y directrices de facturación SUNAT.

### D5: Transacciones de caja y fondo mínimo obligatorio
- **Declaración:** La apertura operativa de cada turno de caja demanda un fondo inicial obligatorio en efectivo no inferior a S/ 500.00 (RN-10) destinado a cubrir las necesidades de cambio y sencillo durante la jornada. Asimismo, los movimientos menores de caja chica (ingresos extraordinarios y egresos por gastos menudos de mostrador) se limitan exclusivamente al flujo de dinero en efectivo (RN-15), imponiendo un tope máximo infranqueable de S/ 5,000.00 por operación manual (RN-11) con justificación descriptiva obligatoria.
- **Justificación de negocio:** Fomentar una rigurosa disciplina financiera en ventanilla, asegurar liquidez física para vueltos y prevenir desvíos o manipulaciones indebidas en la gaveta del punto de venta.
- **Historias de usuario vinculadas:** `HU-CAJA-01`, `HU-CAJA-03`, `HU-CAJA-04`.
- **Reglas de negocio asociadas:** RN-10 (Fondo mínimo de apertura de caja), RN-11 (Tope máximo para movimientos manuales) y RN-15 (Medio exclusivo de movimiento manual).

### D6: Restricción de anulación de ventas a turnos abiertos y segregación de mermas
- **Declaración:** Toda anulación de comprobante de venta constituye una operación excepcional reservada a los roles de Administrador o Gerente, condicionada de forma ineludible a que el turno de caja en el cual se originó la venta se encuentre en estado "Abierto" (RN-08). Al procesar la anulación, el supervisor debe determinar de manera expresa la disposición física de cada artículo devuelto: su reingreso al inventario disponible para comercialización o su derivación a baja formal por merma con motivo justificado (RN-09).
- **Justificación de negocio:** Salvaguardar la inmutabilidad de los balances financieros de turnos ya cerrados y rendidos, evitando además que productos deteriorados, rotos o contaminados reingresen inadvertidamente al anaquel de venta.
- **Historias de usuario vinculadas:** `HU-VEN-06`, `HU-INV-02`, `HU-CAJA-02`.
- **Reglas de negocio asociadas:** RN-08 (Restricción temporal de anulaciones) y RN-09 (Destino físico de mercadería devuelta).

### D7: Solicitudes de reposición por producto único y flexibilidad de proveedores
- **Declaración:** Las solicitudes de reposición de mercadería elaboradas por el Almacenero se formulan bajo un esquema atómico mono-producto por cada solicitud registrada, permitiendo un seguimiento granular de las necesidades de reabastecimiento. En la fase de autorización, la jefatura facultada (Administrador o Gerente) dispone de flexibilidad operativa para ratificar o modificar el proveedor propuesto (RN-16) evaluando conveniencia comercial, precios o plazos de entrega, fijando asimismo la fecha estimada de arribo al local.
- **Justificación de negocio:** Racionalizar y agilizar el circuito de abastecimiento, brindando al nivel gerencial la capacidad de negociar mejores condiciones de compra sin burocracia documental ni necesidad de anular solicitudes operativas.
- **Historias de usuario vinculadas:** `HU-SOL-01`, `HU-SOL-02`, `HU-SOL-03`, `HU-SOL-04`.
- **Reglas de negocio asociadas:** RN-01 (Control de abastecimiento directo) y RN-16 (Flexibilidad en elección de proveedores).

### D8: Mecanismos de validación de pago por billetera digital Yape/Plin (IziPay) con unicidad de 6 dígitos
- **Declaración:** Los cobros procesados a través de billeteras digitales Yape/Plin (IziPay) se articulan mediante terminal de cobro IziPay. Es requisito mandatorio ingresar el código de autorización numérico de exactamente 6 dígitos emitido por el comprobante electrónico (RN-02). El sistema convalida la unicidad estricta de dicho código de autorización contra la totalidad de ventas registradas históricamente en el establecimiento, rechazando transacciones con identificadores repetidos. Adicionalmente, el sistema registra el estado de verificación del abono para su revisión de supervisión.
- **Justificación de negocio:** Erradicar el riesgo de pérdidas por cobros fraudulentos basados en comprobantes de pago falsificados, capturas de pantalla recicladas o códigos de autorización ya utilizados previamente en mostrador.
- **Historias de usuario vinculadas:** `HU-VEN-01`, `HU-VEN-07`, `HU-CAJA-02`.
- **Reglas de negocio asociadas:** RN-02 (Protección contra pagos duplicados Yape/Plin (IziPay)).

### D9: Control estricto de perecibles y exclusión de comercialización de productos caducados
- **Declaración:** El sistema restringe de manera categórica la comercialización en el punto de venta de cualquier lote cuya fecha de vencimiento coincida con la fecha en curso o sea anterior (RN-03). La asignación de existencias en mostrador opera bajo criterio prioritario FEFO (RN-19). La baja por vencimiento computa el retiro del 100 % de las existencias del lote afectado (RN-05).
- **Justificación de negocio:** Salvaguardar la salud y bienestar de los consumidores, cumplir con la normativa sanitaria vigente en establecimientos comerciales y eliminar la presencia de productos no aptos en exhibición.
- **Historias de usuario vinculadas:** `HU-PROD-06`, `HU-INV-02`, `HU-VEN-01`.
- **Reglas de negocio asociadas:** RN-03 (Prohibición de comercialización de vencidos), RN-04 (Registro obligatorio de mermas), RN-05 (Restricción de bajas por vencimiento) y RN-19 (Despacho preferente FEFO).

### D10: Manejo inmutable de registros históricos de movimientos de almacén
- **Declaración:** Las operaciones que alteran las existencias físicas del establecimiento (ingresos por abastecimiento, salidas por mermas y variaciones por toma física de inventario) constituyen un registro histórico continuo e inmutable. El sistema no proporciona opciones de eliminación ni alteración retroactiva sobre entradas o salidas ya asentadas formalmente (RN-01, RN-14). Cualquier ajuste correctivo posterior derivado de conteos periódicos debe documentarse mediante un nuevo registro formal de ajuste físico que exprese con claridad el faltante o sobrante detectado y su justificación.
- **Justificación de negocio:** Proteger la trazabilidad contable, asegurar la veracidad del inventario valorizado por el método de costo promedio ponderado y facilitar inspecciones de control interno sin riesgos de adulteración.
- **Historias de usuario vinculadas:** `HU-INV-01`, `HU-INV-03`, `HU-INV-04`, `HU-INV-05`, `HU-INV-06`.
- **Reglas de negocio asociadas:** RN-01 (Control de abastecimiento directo) y RN-14 (Actualización de valorización de inventario).

### D11: Compilación de comprobantes y reportes ejecutivos en PDF
- **Declaración:** La entrega de comprobantes fiscales al cliente y la presentación de cuadros de control para la dirección del negocio se materializan mediante la generación de documentos estructurados en formato PDF. Estos documentos integran membrete institucional, logotipo, parámetros fiscales, detalle de renglones y cuadros de resumen con distribución de páginas automática. La exportación masiva de ventas en PDF se centraliza y consolida en el reporte ejecutivo de ventas (`HU-REP-09`), quedando la historia puntual del historial (`HU-VEN-08`) reclasificada fuera de alcance (Won't have) para evitar duplicidad de componentes.
- **Justificación de negocio:** Proveer comprobantes con diseño profesional para impresión térmica o envío digital al cliente, dotando a la gerencia de informes ejecutivos consolidados e inalterables para la toma de decisiones.
- **Historias de usuario vinculadas:** `HU-VEN-03`, `HU-REP-09` (con `HU-VEN-08` diferida/absorbida).
- **Reglas de negocio asociadas:** RN-13 (Numeración oficial ininterrumpida) y directrices de imagen corporativa.

### D12: Modelo de gobernanza Scrum y segregación Construye no es igual a Verifica
- **Declaración:** El desarrollo y certificación de la solución tecnológica se estructura bajo un estricto principio de verificación cruzada independiente (Construye no es igual a Verifica), asignando el 41.0 % del tiempo total de ingeniería (206.0 horas de un universo de 502.0 horas) a actividades de aseguramiento de calidad y verificación, desglosado en dos fases indispensables: (a) 131.75 h (26.2 %) en pruebas automatizadas unitarias y de integración (Paso 6 del desglose de tareas) sobre lógica transaccional, cálculos fiscales y consumo FEFO, y (b) 74.25 h (14.8 %) en certificación funcional independiente de criterios de aceptación y pase al entorno web (Paso 8 del desglose de tareas) ejecutada por el Verificador QA. Ningún integrante del equipo tiene permitido certificar historias que haya construido directamente. La estructura financiera descansa en una asignación de S/ 625.00 semanales por desarrollador (S/ 25.00 por hora neta del modelo de capacidad docente de 25 h/sem brutas / 20 h/sem netas), consolidando un presupuesto total cerrado de S/ 22,500.00 distribuido equitativamente en 3 iteraciones de 2 semanas (S/ 7,500.00 por ciclo).
- **Justificación de negocio:** Garantizar la excelencia operativa del software, erradicar sesgos de confirmación en la entrega de valor y cumplir con los compromisos contractuales de costo y cronograma pactados con el Product Owner.
- **Historias de usuario vinculadas:** Las 72 historias de usuario del Product Backlog, `DOC-PLAN-02`, `DOC-PLAN-05`, `DOC-PLAN-06`, `DOC-PLAN-07`.
- **Reglas de negocio asociadas:** Marco de trabajo Scrum del proyecto y acuerdos de Definition of Done (DoD).

---

## 10.3. Matriz de Cobertura y Trazabilidad de Decisiones vs Reglas de Negocio

La siguiente matriz sintetiza la alineación entre las doce decisiones estratégicas, las veintiuna reglas de negocio oficiales (RN-01 a RN-21) y los lanzamientos programados:

| Decisión | Título Resumido | Reglas de Negocio Vinculadas | Épica Principal | Lanzamiento | Impacto Operativo Principal |
|:---:|---|:---:|:---:|:---:|---|
| **D1** | Sesiones concurrentes e invalidación | Gobernanza de Seguridad | EPIC-SEG | REL-2 | Sesión única por usuario; expulsión con banner informativo de aviso. |
| **D2** | Clave código de verificación de 4 dígitos y bloqueo | RN-18 | EPIC-SEG | REL-2 | Recuperación de credenciales con código de autorización de 4 dígitos y bloqueo tras 5 fallos. |
| **D3** | Catálogos y consultas reactivas | Glosario General | EPIC-CAT | REL-1 / REL-2 | Agilidad en mostrador mediante filtrado instantáneo en la estación local. |
| **D4** | Comprobantes y contingencia SUNAT | RN-13 | EPIC-VEN / EPIC-REP | REL-1 | Emisión autónoma B001/F001 con IGV 18 % y contingencia ante corte externo. |
| **D5** | Fondo de caja y movimientos manuales | RN-10, RN-11, RN-15 | EPIC-VEN | REL-1 | Fondo mínimo obligatorio de S/ 500.00; tope manual S/ 5,000.00 en efectivo. |
| **D6** | Anulaciones y destino de mercadería | RN-08, RN-09 | EPIC-VEN / EPIC-INV | REL-2 | Anulación solo en turno abierto; derivación a stock o merma justificada. |
| **D7** | Lógica mono-producto y reasignación | RN-01, RN-16 | EPIC-INV | REL-2 | Solicitud atómica mono-producto; flexibilidad gerencial de proveedor. |
| **D8** | Validación de pagos Yape/Plin (IziPay) | RN-02 | EPIC-VEN | REL-1 / REL-2 | Verificación de código de autorización de 6 dígitos con unicidad en historial. |
| **D9** | Exclusión de caducados y bajas FEFO | RN-03, RN-04, RN-05, RN-19 | EPIC-CAT / EPIC-INV | REL-1 / REL-2 | Bloqueo absoluto de vencidos en POS; baja al 100 % del lote vencido. |
| **D10** | Inmutabilidad de registros de almacén | RN-01, RN-14 | EPIC-INV | REL-2 | Historial inmutable; valorización por costo promedio ponderado sin borrado. |
| **D11** | Reportes y comprobantes en PDF | RN-13 | EPIC-VEN / EPIC-REP | REL-1 / REL-3 | Comprobantes térmicos/digitales y reportes gerenciales en PDF; CSV en R3. |
| **D12** | Gobernanza Scrum y verificación QA | Marco Scrum / DoD | Transversal | REL-1 a REL-3 | Segregación de roles (41 % esfuerzo QA) y presupuesto cerrado S/ 22,500.00. |

---

## 10.4. Supuestos Operativos del Entorno del Negocio

Complementariamente a las decisiones de diseño funcional, se establecen cuatro supuestos operativos que condicionan la implantación del sistema:

1. **SUP-01: Conectividad y autonomía del mostrador:** El minimarket dispone de conexión a red de área local para la comunicación entre terminales de venta y la estación de gestión. En caso de interrupción del enlace de internet externo, las funciones transaccionales de venta en efectivo, emisión de boletas y consultas locales continúan operando sin interrupción.
2. **SUP-02: Disponibilidad de equipamiento:** Cada estación de Punto de Venta cuenta con lector óptico de código de barras USB configurado en modo emulación de teclado, gaveta de dinero con apertura manual o disparada por impresora, e impresora de tickets térmicos compatible con comandos estándar de impresión.
3. **SUP-03: Pasarela y medios de pago integrados:** El cobro electrónico se realiza mediante terminal físico IziPay para tarjetas y billeteras digitales Yape/Plin (IziPay), donde el operador valida visualmente la confirmación en el dispositivo e introduce el código de autorización de 6 dígitos en la pantalla de cobro.
4. **SUP-04: Concurrencia y dimensionamiento:** El sistema está dimensionado para operar simultáneamente hasta 3 terminales de mostrador activas y 2 estaciones de gestión administrativa (almacén y gerencia), garantizando tiempos de respuesta menores a 1.5 segundos por transacción en condiciones normales de atención.

---

## 10.5. Historial de Control de Cambios

| Versión | Fecha | Autor / Responsable | Descripción de la Modificación |
|:---:|:---:|---|---|
| **4.7** | 2026-10-03 | Colonia Infantas, Walter | Registro preliminar de hallazgos y puntos pendientes de especificación. |
| **4.8** | 2026-10-03 | Colonia Infantas, Walter / Angeles Pérez, Jhonny | Transformación metodológica integral a Registro de Supuestos de Arquitectura y Decisiones de Negocio (D1 a D12). Refinamiento formal a priori desde la perspectiva del Product Owner y stakeholders de negocio. |
| **5.0** | 2026-10-04 | Colonia Infantas, Walter / Angeles Pérez, Jhonny | Unificación de criterios de aceptación y formalización de trazabilidad FEFO. |
| **5.1** | 2026-10-04 | Colonia Infantas, Walter / Angeles Pérez, Jhonny | Versión oficial saneada: unificación de la política preventiva de caducidad (RN-03/RN-05/RN-19), armonización de regla de contraseñas robustas (RN-18) y actualización de matriz de trazabilidad con las 21 reglas de negocio. |
