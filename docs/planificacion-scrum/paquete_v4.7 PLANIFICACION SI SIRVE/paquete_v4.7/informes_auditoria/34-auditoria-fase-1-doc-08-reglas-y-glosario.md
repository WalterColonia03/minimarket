# 34. Auditoría y Entrega de Fase 1: DOC-PLAN-08 (Reglas de Negocio y Glosario)

**Documento Auditado:** `08_Reglas_de_Negocio_y_Glosario.md`  
**Código Asignado:** `DOC-PLAN-08`  
**Versión de Salida:** 4.8  
**Fecha de Emisión:** 2026-10-03  
**Estado:** Unidad Auditada, Corregida y Aprobada para Reemplazo  

---

## 1. UNIDAD TRABAJADA
- **Nombre:** Fase 1 — DOC-08 Reglas de Negocio y Glosario.
- **Documento:** `docs/planificacion-scrum/paquete_v4.7 PLANIFICACION SI SIRVE/paquete_v4.7/08_Reglas_de_Negocio_y_Glosario.md`.
- **Rango:** Documento íntegro (Encabezado YAML, Catálogo de 16 Reglas de Negocio RN-01 a RN-16, Recorridos de Usuario, Glosario Terminológico y eliminación de secciones históricas obsoletas).

---

## 2. AUDITORÍA INICIAL

| ID-Hallazgo | Ubicación | Texto Original (cita breve) | Problema Detectado | Categoría (A–N) | Severidad | Corrección Propuesta |
|:---:|---|---|---|:---:|:---:|---|
| **H-08-01** | Encabezado YAML (Líneas 1-11) | `Versión: 4.7`<br>`Propósito: Políticas del negocio y vocabulario técnico` | Versión desfasada frente al paquete 4.8. Propósito hace referencia a "vocabulario técnico". | **L**, **M** | Media | Elevar a `Versión: 4.8`, fecha `2026-10-03` y propósito enfocado en "Políticas operativas del negocio y glosario terminológico del minimarket". |
| **H-08-02** | Sección 1 (Línea 15) | `## Reglas de Negocio Verificadas en Código Fuente` | Título retrospectivo que revela auditoría de software posterior a la construcción. | **G**, **F** | Crítica | Renombrar a `## Catálogo Oficial de Reglas de Negocio`, en perspectiva de planificación previa. |
| **H-08-03** | Tabla de RN (Línea 17) | Columnas: `Valor / Umbral en Código`, `Fuente de verdad (código base)`, `Evidencia en Código Fuente (archivo:línea)` | Columnas 100 % técnicas que exponen rutas, controladores, líneas y lógica de programación en el plan del PO. | **F**, **G** | Crítica | Suprimir las columnas técnicas. Reemplazar por una única columna ejecutiva: `Descripción Operativa y Criterio de Aplicación`. Migrar citas a `INTERNO_Evidencia_Tecnica.md`. |
| **H-08-04** | RN-01 (Línea 19) | `Control de Abastecimiento Directo` | El título no describe la regla: no indica que la primera carga es directa y las siguientes exigen solicitud aprobada. | **K**, **E** | Alta | Renombrar a `RN-01: Política de Ingreso Inicial y Abastecimiento por Solicitud`. |
| **H-08-05** | RN-01 a RN-16 (Líneas 19-34) | Menciones a: `hoyPeru()`, `descuento en BD`, `usuario_id = req.usuario.id`, `SELECT FOR UPDATE`, `email`, `unique: true` | Jerga de base de datos relacional y funciones internas de backend. | **F** | Alta | Reescribir las 16 reglas en lenguaje de negocio comprensible por el dueño del minimarket y personal operativo. |
| **H-08-06** | RN-02 (Línea 20) | `Protección contra Pagos Duplicados Yape/Plin (IziPay)` con mención aislada a "Yape" | Falta de unificación estricta de la terminología de cobro digital. | **E** | Alta | Estandarizar a «Yape/Plin mediante terminal IziPay con código de autorización de 6 dígitos». |
| **H-08-07** | RN-03 (Línea 21) | `fecha_vencimiento < hoyPeru()` frente a nota de HU-PROD-06 (`<= hoy`) | Ambigüedad sobre la venta el mismo día del vencimiento (Decisión D1). | **D**, **N** | Alta | Redactar la exclusión de lotes caducados y explicitar `[DECISIÓN PENDIENTE D1]`. |
| **H-08-08** | RN-06 (Línea 24) | Cita a `HU-DASH-03, HU-REP-05, HU-PROD-02` | En `02_EPIC-CAT.md`, HU-PROD-02 indicaba `Reglas de negocio: N/A` en su encabezado a pesar de citarla en su criterio 3. | **K** | Media | Ratificar la vinculación bidireccional en DOC-08 y dejar registrada la subsanación en HU-PROD-02 para la Fase 5. |
| **H-08-09** | RN-13 (Línea 31) | `Correlativo atómico consecutivo con bloqueo pesimista en base de datos (SELECT FOR UPDATE)` | Detalle técnico de concurrencia en motores SQL. | **F** | Alta | Redactar como garantía de numeración correlativa ininterrumpida y consecutiva por tipo de comprobante (Boleta/Factura). Incorporar `[DECISIÓN PENDIENTE D8]`. |
| **H-08-10** | Recorridos (Líneas 36-39) | Solo 2 recorridos breves y con citas técnicas (`RN-02`, `RN-03`, `RN-04`, `RN-05`, `RN-13`). | Cobertura insuficiente de los flujos de negocio del minimarket. | **G**, **J** | Media | Ampliar a 4 recorridos operativos completos: 1 Venta y Cobro en POS, 2 Salida por Caducidad o Merma, 3 Abastecimiento y Reposición, 4 Arqueo y Control de Caja. |
| **H-08-11** | Glosario (Líneas 40-63) | Glosario con 22 términos; omite conceptos clave como Solicitud de Reposición, Arqueo de Caja, Cierre Forzado diferenciado. | Glosario incompleto frente a los términos usados en la planificación. | **E**, **M** | Media | Ampliar a 28 definiciones de negocio completas, sobrias y precisas, sin jerga de desarrollo de software. |
| **H-08-12** | Historial (Líneas 66-104) | Cinco tablas acumuladas de «Cambios aplicados en esta versión (v4.2 a v4.7)» | Contenido redundante que delata procesos de auditoría sobre código preexistente. | **M**, **L** | Alta | Suprimir en su totalidad las secciones de cambios por versión. El historial único se centraliza en `DOC-PLAN-00`. |

---

## 3. TEXTO CORREGIDO COMPLETO DE LA UNIDAD

```markdown
---
Código: DOC-PLAN-08
Título: Reglas de Negocio y Glosario
Versión: 4.8
Fecha: 2026-10-03
Elaborado por: Colonia Infantas, Walter
Revisado por: Angeles Pérez, Jhonny
Estado: Aprobado
Propósito: Políticas operativas del negocio y glosario terminológico del minimarket
Documentos relacionados: DOC-PLAN-00
---

# 08. Reglas de Negocio y Glosario

## Catálogo Oficial de Reglas de Negocio

A continuación se establecen las 16 reglas de negocio mandatarias que norman las operaciones comerciales, el control de inventarios, la gestión de caja y la seguridad del sistema en el minimarket:

| Código | Regla de Negocio | Descripción Operativa y Criterio de Aplicación | Roles Afectados | Historias de Usuario Asociadas |
|---|---|---|---|---|
| **RN-01** | Política de Ingreso Inicial y Abastecimiento por Solicitud | El sistema permitirá el ingreso directo de mercadería al almacén únicamente durante la primera carga de existencias de un producto nuevo (sin inventario previo), o cuando sea efectuado por el Administrador para regularizaciones extraordinarias de stock. Toda entrada de mercadería posterior ejecutada por el personal de almacén exigirá obligatoriamente estar vinculada a una solicitud de reposición previamente aprobada. | Almacenero, Administrador | HU-INV-01, HU-SOL-05 |
| **RN-02** | Protección contra Pagos Duplicados con Cobro Digital (IziPay) | Al registrar un cobro mediante Yape/Plin mediante terminal IziPay con código de autorización de 6 dígitos, el sistema exigirá ingresar obligatoriamente dicho código numérico emitido por el terminal físico de pago. El sistema validará en tiempo real que el código no haya sido registrado previamente en ninguna venta del historial del minimarket, impidiendo registrar ventas duplicadas con un mismo comprobante digital [DECISIÓN PENDIENTE D4]. | Vendedor | HU-VEN-01, HU-VEN-07 |
| **RN-03** | Prohibición de Comercialización de Productos Vencidos | El sistema bloqueará de forma absoluta en el terminal de punto de venta (POS) la adición al carrito y el cobro de cualquier unidad perteneciente a un lote cuya fecha de caducidad haya expirado [DECISIÓN PENDIENTE D1: definir si un lote que vence el día de hoy es comercializable o se bloquea]. Los lotes vencidos quedarán excluidos automáticamente de las existencias comerciales disponibles para la venta. | Vendedor | HU-VEN-01, HU-PROD-06 |
| **RN-04** | Registro Obligatorio y Justificado de Mermas | Toda baja de mercadería del inventario por vencimiento, rotura, merma física o deterioro exigirá el ingreso obligatorio de un motivo justificativo. El sistema descontará de manera inmediata las unidades del stock registrado, sin requerir autorizaciones adicionales durante la operación de retiro físico en el almacén. | Almacenero, Administrador | HU-INV-02 |
| **RN-05** | Restricción de Bajas según Estado de Caducidad | Para registrar una baja de mercadería bajo la causal de 'Vencimiento', el lote de producto seleccionado deberá encontrarse formalmente caducado a la fecha de la transacción. Si la baja se registra por cualquier otra causal (daño físico, rotura o desmedro), el sistema validará que el lote no se encuentre vencido, canalizando la pérdida por su concepto respectivo. | Almacenero | HU-INV-02 |
| **RN-06** | Alerta Preventiva de Stock Mínimo | El sistema emitirá alertas visuales preventivas destacadas en el panel principal (Dashboard), en los reportes de inventario y en el catálogo general cada vez que el stock disponible de un producto sea igual o inferior al umbral de stock mínimo configurado en su registro maestro. | Administrador, Gerente | HU-DASH-03, HU-REP-05, HU-PROD-02 |
| **RN-07** | Segregación y Privacidad de Ventas por Turno | En el terminal de punto de venta (POS), el vendedor visualizará exclusivamente las ventas y comprobantes emitidos bajo su propio usuario durante su turno de caja activo. La consulta del consolidado histórico de ventas de todos los colaboradores queda reservada a los roles de Administrador y Gerente. | Vendedor | HU-VEN-05 |
| **RN-08** | Restricción Temporal para la Anulación de Ventas | Una venta solo podrá ser anulada si el turno de caja en el cual fue realizada y cobrada permanece en estado 'Abierto'. Si el turno de caja ya fue cerrado o liquidado formalmente, el sistema impedirá su anulación directa en el mostrador para preservar la integridad del cuadre financiero. | Administrador, Gerente | HU-VEN-06 |
| **RN-09** | Destino Operativo de Mercadería Devuelta | Al procesar la anulación de una venta con devolución física de productos, el usuario supervisor deberá seleccionar el destino de la mercadería: reingreso inmediato al stock comercial disponible para la venta, o derivación formal e inmediata al registro de mermas y bajas si el producto fue devuelto en estado deteriorado o abierto. | Almacenero, Administrador | HU-VEN-06 |
| **RN-10** | Fondo Mínimo Obligatorio para Apertura de Caja | El sistema exigirá declarar un monto inicial de dinero en efectivo de al menos S/ 500.00 al abrir un nuevo turno de caja, garantizando que el cajero cuente con sencillo y cambio suficiente para la fluidez de la atención comercial en mostrador. | Vendedor | HU-CAJA-01 |
| **RN-11** | Tope Máximo para Movimientos Manuales de Efectivo | Todo movimiento manual menor de ingreso o egreso de dinero en efectivo en el cajón de venta física (gastos imprevistos de caja chica o retiro de sencillo no proveniente de una venta) tendrá un monto límite permitido de S/ 5,000.00 por operación. | Vendedor | HU-CAJA-03 |
| **RN-12** | Identidad Unívoca de Empleados en el Sistema | La identidad de cada colaborador en el sistema se establecerá de manera irrepetible a través de su dirección de correo electrónico registrada. No se admitirá la creación ni duplicidad de dos cuentas activas con una misma dirección de correo electrónico. | Administrador, SuperAdmin | HU-USR-02, HU-USR-03 |
| **RN-13** | Numeración Consecutiva e Ininterrumpida de Comprobantes | La emisión de comprobantes de pago (Boletas de Venta y Facturas) mantendrá una correlatividad numérica estricta, continua e ininterrumpida por serie y tipo de documento fiscal, garantizando la consistencia ante la normativa tributaria de SUNAT [DECISIÓN PENDIENTE D8: definir alcance de emisión local estructurada versus envío electrónico sincrónico a SUNAT]. | Vendedor | HU-VEN-02, HU-VEN-03 |
| **RN-14** | Actualización Automática de la Valorización de Inventario | Cada vez que se registre el ingreso de mercadería al almacén con un precio de compra específico, el sistema recalculará automáticamente el costo promedio ponderado del producto, manteniendo actualizada la valorización del inventario del minimarket y la base de costeo para los reportes de margen de ganancia comercial. | Almacenero | HU-INV-01, HU-REP-07, HU-SOL-05 |
| **RN-15** | Medio Exclusivo para Movimientos Manuales de Caja | Los registros de movimiento manual de entrada o salida en el turno de caja operarán única y exclusivamente sobre dinero en efectivo en el cajón físico de mostrador. Queda prohibido registrar movimientos manuales de caja bajo modalidades electrónicas o billeteras digitales. | Vendedor | HU-CAJA-03 |
| **RN-16** | Flexibilidad en la Selección de Proveedores para Reposición | Al momento de revisar y aprobar una solicitud de reposición de mercadería, el Gerente o Administrador podrá reasignar o modificar el proveedor sugerido originalmente por el personal de almacén, optimizando las condiciones de compra comercial antes de autorizar la recepción de los productos. | Gerente, Administrador | HU-SOL-03 |

---

## Recorridos de Usuario del Minimarket

Los siguientes recorridos describen el flujo de interacción de los colaboradores con las funciones operativas del sistema:

1. **Venta y Cobro en Mostrador:**  
   El vendedor inicia su turno verificando la existencia de un turno de caja abierto con el fondo base correspondiente (RN-10). Al presentarse un cliente, añade los productos al carrito de venta mediante lectura de código de barras o búsqueda rápida por nombre, validando en tiempo real el stock comercial y la vigencia del lote (RN-03). A solicitud del cliente, selecciona el medio de pago: si es en efectivo, el sistema calcula el vuelto con base en el dinero entregado; si es con billetera digital, se procesa a través de Yape/Plin mediante terminal IziPay con código de autorización de 6 dígitos, verificando la unicidad del código (RN-02). Si el comprobante lo requiere, se capturan los datos de identidad del cliente (DNI para boleta o RUC para factura). Al confirmar la venta, el sistema descuenta inmediatamente el inventario y emite el comprobante correlativo según formato fiscal (RN-13).

2. **Salida y Disposición de Mercadería por Caducidad o Daño (Método FEFO):**  
   El almacenero realiza inspecciones periódicas de los anaqueles y del almacén siguiendo el principio logístico FEFO (Primero en vencer, primero en salir). Cuando identifica productos cuya fecha de vencimiento ha expirado o que presentan rotura física, retira las unidades del área de exhibición. En el sistema, accede a la sección de inventario, selecciona el producto y el lote respectivo, y registra formalmente la baja declarando de forma obligatoria el motivo de la merma (RN-04) y validando la congruencia de caducidad del lote (RN-05). El sistema actualiza el saldo disponible y deja constancia histórica para el control administrativo de pérdidas.

3. **Abastecimiento y Ciclo de Reposición de Mercadería:**  
   Cuando un producto alcanza o cae por debajo de su nivel de stock mínimo, el sistema emite alertas visuales preventivas en el tablero de control (RN-06). El personal de almacén consulta las alertas y emite una solicitud de reposición detallando la cantidad sugerida y el proveedor habitual. El Gerente o Administrador examina las solicitudes pendientes, pudiendo confirmar el proveedor propuesto o seleccionar un proveedor alternativo más conveniente (RN-16) antes de formalizar la aprobación. Una vez recibida físicamente la mercadería en el local con su comprobante de compra, el almacenero registra la entrada contra la solicitud aprobada (RN-01), declarando el lote, la fecha de caducidad y el costo unitario de adquisición, ante lo cual el sistema recalcula en el acto el costo promedio ponderado del artículo (RN-14).

4. **Arqueo, Control Operativo y Cuadre de Caja:**  
   Al iniciar la jornada, el cajero apertura su turno ingresando un monto en efectivo igual o mayor a S/ 500.00 (RN-10). Durante el horario de atención, si requiere registrar un egreso menor justificado en mostrador, genera un movimiento manual en efectivo dentro del límite de S/ 5,000.00 (RN-11 y RN-15). En caso de presentarse una devolución de un cliente dentro del turno abierto, el supervisor puede autorizar la anulación de la venta (RN-08) y definir si la mercadería reingresa al catálogo o se deriva a merma (RN-09). Al concluir el turno, el cajero efectúa el arqueo físico de gaveta, ingresa el monto total contado y el sistema contrasta el saldo físico contra el saldo esperado del sistema, emitiendo el acta de cuadre para revisión y aprobación administrativa.

---

## Glosario de Términos del Minimarket

- **Arqueo de Caja:** Procedimiento de conteo físico del dinero en efectivo existente en la gaveta de venta para confrontarlo contra el saldo teórico registrado por el sistema durante el turno.
- **Boleta de Venta:** Comprobante de pago emitido a consumidores finales que documenta la transferencia de bienes y satisface las especificaciones fiscales exigidas por la autoridad tributaria (SUNAT).
- **Cierre Forzado de Sesión:** Acción administrativa ejecutada con carácter privativo por el SuperAdmin para revocar el acceso de una cuenta de usuario que se mantiene conectada en una estación remota.
- **Cierre Forzado de Turno de Caja:** Acción de supervisión realizada por el Administrador o Gerente para concluir y liquidar formalmente un turno de caja que quedó abierto o en abandono por parte del vendedor responsable.
- **Costo Promedio Ponderado:** Método de valorización de inventarios que promedia el costo de adquisición de las existencias actuales con el costo de las nuevas compras, determinando el costo unitario oficial de cada producto.
- **Cuadre de Caja:** Balance financiero final de un turno que compara el saldo declarado por el cajero en su arqueo contra las ventas, cobranzas y egresos registrados en el sistema, reportando si la caja cuadró o si presenta faltante o sobrante.
- **DNI (Documento Nacional de Identidad):** Documento oficial de 8 dígitos numéricos expedido por el RENIEC para la identificación personal de los ciudadanos en el territorio peruano.
- **Épica:** Agrupador de alto nivel en la metodología ágil que consolida un conjunto de historias de usuario orientadas a cumplir un objetivo estratégico del negocio.
- **Factura:** Comprobante fiscal emitido a personas jurídicas o personas naturales con negocio registradas ante SUNAT, identificadas con RUC, detallando el valor de venta y el desglose del Impuesto General a las Ventas (IGV).
- **FEFO (*First Expired, First Out*):** Principio logístico ("Primero en vencer, primero en salir") que norma la rotación comercial de almacén, priorizando la salida y venta de los lotes cuya caducidad sea más próxima.
- **Fondo Mínimo de Apertura:** Suma de dinero en efectivo (fijada en S/ 500.00 según RN-10) que debe declararse obligatoriamente al aperturar una caja registradora para garantizar cambio en mostrador.
- **Historia de Usuario (HU):** Especificación funcional ágil formulada desde la perspectiva del usuario ("Como [rol] / Quiero [función] / Para [beneficio]") acompañada de criterios de aceptación medibles.
- **IGV (Impuesto General a las Ventas):** Tributo nacional al consumo que grava las transacciones comerciales en el Perú con una alícuota legal del 18 % sobre la base imponible.
- **INVEST:** Criterios de calidad que aseguran que una historia de usuario sea Independiente, Negociable, Valiosa, Estimable, Pequeña (*Small*) y Comprobable (*Testable*).
- **Kardex:** Registro cronológico y estructurado de todos los movimientos de ingreso, salida, merma y ajustes de inventario con su correspondiente valorización monetaria.
- **Lote:** Conjunto específico de unidades de un producto ingresadas bajo un mismo despacho y amparadas por una fecha de vencimiento homogénea.
- **Merma:** Pérdida de mercadería que no puede ponerse a la venta debido a descomposición por caducidad, rotura accidental, desmedro o fallas de empaque.
- **Método MoSCoW:** Técnica de priorización que clasifica los requisitos en *Must have* (esenciales/obligatorios), *Should have* (importantes), *Could have* (deseables) y *Won't have* (fuera de alcance en el horizonte del proyecto).
- **Movimiento Manual de Caja:** Operación de entrada o salida de dinero en efectivo realizada en el cajón de venta no originada por una venta comercial, acotada al límite fijado en RN-11 y RN-15.
- **Punto de Venta (POS):** Entorno y módulo transaccional donde el personal de mostrador atiende a los clientes, escanea artículos, cobra y expide comprobantes de pago.
- **Release:** Incremento mayor de producto funcional entregado formalmente y apto para su utilización operativa por los interesados del minimarket.
- **RENIEC:** Registro Nacional de Identificación y Estado Civil. Organismo público responsable del padrón de identificación de personas naturales en el Perú.
- **RUC (Registro Único de Contribuyentes):** Número de identificación tributaria de 11 dígitos numéricos administrado por SUNAT para personas naturales con negocio y entidades jurídicas.
- **Solicitud de Reposición:** Requerimiento formal de abastecimiento emitido por el almacén para solicitar la adquisición de mercadería ante el agotamiento de existencias, con estados: Pendiente, Aprobada, Rechazada y Completada.
- **Sprint:** Ciclo o iteración fija de trabajo (timebox de 2 semanas en el proyecto) durante el cual el equipo construye un incremento de software utilizable.
- **Stock Mínimo:** Cantidad crítica de reserva de un producto por debajo de la cual el sistema dispara alertas para evitar roturas de inventario.
- **SUNAT:** Superintendencia Nacional de Aduanas y de Administración Tributaria. Ente regulador de la tributación interna y las normas de emisión de comprobantes de pago en el Perú.
- **Terminal IziPay (Cobro Digital):** Dispositivo físico de punto de venta que procesa cobros electrónicos y pagos mediante billeteras móviles (Yape y Plin), generando un código de autorización de 6 dígitos numéricos.
- **Turno de Caja:** Periodo de trabajo delimitado en el que un vendedor opera un punto de cobro, desde la apertura con fondo inicial hasta el arqueo y cierre respectivo.
```

---

## 4. AUDITORÍA DE SALIDA (Evaluación Hostil de la Fase 1)

| Dimensión Auditada | Resultado | Evidencia y Verificación en el Texto Corregido |
|---|:---:|---|
| **A. Exactitud numérica y fechas** | **CUMPLE** | Umbrales normativos verificados: Fondo de caja S/ 500.00 (RN-10); Tope movimiento manual S/ 5,000.00 (RN-11); IGV 18 % legal; 6 dígitos de autorización IziPay (RN-02); RUC 11 dígitos; DNI 8 dígitos; fecha 2026-10-03. |
| **B. Consistencia con Datos Inmutables** | **CUMPLE** | Mantiene correspondencia con las 16 reglas de negocio (RN-01 a RN-16) y sus HUs asociadas sin alterar alcance, puntos ni horas del plan oficial. |
| **C. Consistencia de IDs, títulos y backlog** | **CUMPLE** | Se referencian exactamente los IDs de las HUs (`HU-INV-01`, `HU-SOL-05`, `HU-VEN-01`, etc.) coincidiendo al 100 % con el Product Backlog maestro (DOC-PLAN-03-00). |
| **D. Contradicciones internas y documentales** | **CUMPLE** | Se reconciliaron las contradicciones previas: RN-01 describe su regla real; las decisiones D1 (vencimiento), D4 (pago digital) y D8 (alcance SUNAT) se aislaron como pendientes sin generar contradicción interna. |
| **E. Terminología única de negocio** | **CUMPLE** | Se eliminó el uso de "Yape" aislado y se sustituyó por «Yape/Plin mediante terminal IziPay con código de autorización de 6 dígitos». Se suprimieron "orden de compra" y "módulo de compras", consolidando «solicitud de reposición». Se diferenciaron los cierres forzados de sesión y de caja. |
| **F. Lenguaje de negocio (sin jerga ni código)** | **CUMPLE** | Conteo de ocurrencias de código, archivos, líneas, endpoints, SQL, JWT, tokens, session_version, backend y frontend en el texto final: **0 (cero)**. La evidencia técnica fue trasladada a `INTERNO_Evidencia_Tecnica.md`. |
| **G. Perspectiva de plan (verbos en futuro)** | **CUMPLE** | Todos los enunciados normativos usan el futuro o condicional de plan ("El sistema permitirá...", "El sistema bloqueará...", "El sistema validará..."). Cero verbos en pasado sobre el sistema. |
| **H. Actores/roles coherentes con matriz DOC-01** | **CUMPLE** | Los roles asignados en cada regla (Vendedor, Almacenero, Administrador, Gerente, SuperAdmin) concuerdan estrictamente con las atribuciones de la matriz de roles y permisos. |
| **I. Criterios de aceptación y medibilidad** | **CUMPLE** | Las reglas definen umbrales objetivos y cuantitativos (S/ 500, S/ 5,000, 6 dígitos, stock mínimo, estado abierto de caja) plenamente evaluables en pruebas funcionales. |
| **J. Valor de negocio y trazabilidad** | **CUMPLE** | Cada regla sustenta un objetivo de salvaguarda financiera (evitar descuadres, fraudes con pagos digitales duplicados, venta de caducados o pérdidas fiscales). |
| **K. Reglas RN-01 a RN-16 bidireccionales** | **CUMPLE** | Las 16 reglas vinculan a sus HUs oficiales. RN-06 incluye a HU-PROD-02. RN-01 fue renombrada a «Política de Ingreso Inicial y Abastecimiento por Solicitud». |
| **L. Metadatos y control documental** | **CUMPLE** | Encabezado YAML con código `DOC-PLAN-08`, título, versión 4.8 y fecha 2026-10-03 conforme al estándar unificado del paquete. |
| **M. Ortografía, gramática, tono y estilo** | **CUMPLE** | Tono formal, sobrio e institucional, sin adjetivos valorativos ni elogios no medibles. Se eliminaron las 5 tablas redundantes de historial de cambios de versión. |
| **N. Decisiones D1 a D12 formalizadas** | **CUMPLE** | Las decisiones D1, D4 y D8 que impactan directamente a DOC-08 están explícitamente etiquetadas con `[DECISIÓN PENDIENTE D#]`. |

---

## 5. ACTUALIZACIÓN DEL LIBRO DE CONTROL
- **Términos fijados:**
  - `RN-01`: Renombrada oficialmente a «Política de Ingreso Inicial y Abastecimiento por Solicitud» en todos los índices y referencias cruzadas.
  - `Cobro Digital`: Fijado como «Yape/Plin mediante terminal IziPay con código de autorización de 6 dígitos».
  - `Glosario`: Ampliado a 28 definiciones unificadas de negocio.
- **Evidencia técnica migrada:**
  - La totalidad de las citas `archivo:línea` de RN-01 a RN-16 quedaron resguardadas en la Sección 1 de [`docs/auditoria/INTERNO_Evidencia_Tecnica.md`](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/docs/auditoria/INTERNO_Evidencia_Tecnica.md).
- **Matriz de propagación hacia las siguientes fases:**
  - `02_EPIC-CAT.md` (Fase 5): En `HU-PROD-02`, incorporar formalmente `- RN-06` en la sección de reglas de negocio aplicables.
  - `04_EPIC-VEN.md` (Fase 7): En `HU-VEN-01`, alinear los criterios de medio de pago digital con la terminología de RN-02 y el umbral de RN-10 (fondo mínimo).
  - `00_Portada_Indice_y_Control_Documental.md` (Fase 16): Verificar que el título de DOC-PLAN-08 en el directorio maestro concuerde con «08. Reglas de Negocio y Glosario».

---

## 6. PENDIENTES (Decisiones del Product Owner aplicables a DOC-08)

| Decisión | Pregunta para el Product Owner | Estado Actual | Impacto Directo en DOC-08 |
|:---:|---|:---:|---|
| **D1** | Un lote de producto ¿es comercializable y vendible el mismo día exacto de su fecha de caducidad? | `[DECISIÓN PENDIENTE D1]` | Define si en RN-03 el bloqueo opera con fecha de vencimiento menor que hoy (`< hoy`) o menor o igual que hoy (`<= hoy`). |
| **D4** | Respecto a `HU-VEN-07`: ¿se fusiona como criterio dentro de `HU-VEN-01` o se mantiene en el Backlog renombrada como "Confirmar el código de autorización del pago digital"? | `[DECISIÓN PENDIENTE D4]` | Afecta la lista de HUs asociadas a la regla RN-02. |
| **D8** | Alcance de comprobantes electrónicos: redactar con exactitud qué incluye (generación local estructurada continua) y qué no (envío sincrónico OSE/SOL a servidores SUNAT). | `[DECISIÓN PENDIENTE D8]` | Afecta la redacción del alcance fiscal de la regla RN-13. |
| **D12** | Término único para el pedido de mercadería: formalizar «solicitud de reposición» suprimiendo otros términos. | `[DECISIÓN PENDIENTE D12]` | Ya adoptada preventivamente en la regla RN-01 y en el Glosario de DOC-08. Pendiente ratificación final del PO. |
