---
Código de documento: DOC-PLAN-03-04
Título: Backlog de Producto — EPIC-VEN: Ventas, Caja y Facturación Electrónica
Versión: 4.8
Fecha: 2026-10-03
Elaborado por: Colonia Infantas, Walter
Revisado por: Angeles Pérez, Jhonny
Estado: Aprobado
Propósito: Especificación de requisitos e historias de usuario de la épica de Gestión de Ventas en Mostrador, Control de Cajas y Comprobantes de Pago
Documentos relacionados: DOC-PLAN-01, DOC-PLAN-02, DOC-PLAN-03-00, DOC-PLAN-08, DOC-ANEXO-B
---

# EPIC-VEN: Ventas, Caja y Facturación Electrónica

**Objetivo de negocio (OBJ-04):** Procesar las transacciones comerciales de venta en el salón de atención al público de forma ágil, emitiendo comprobantes de pago válidos ante la normativa tributaria nacional (SUNAT), resguardando la integridad del inventario por despacho preferente de vencimiento y asegurando el cuadre exacto del dinero en las cajas del minimarket mediante estrictos mecanismos de control y arqueo físico.

---

## 1. Sub-dominio: Operaciones de Turno de Caja y Arqueo Físico

### HU-CAJA-01 · Caja – Abrir turno de caja

| Identificador | Épica | Prioridad MoSCoW | Estimación | Release | Sprint |
|:---:|:---:|:---:|:---:|:---:|:---:|
| HU-CAJA-01 | EPIC-VEN | Must have | 5 pts | REL-1 | SPR-1 |

**Como** Vendedor o Administrador del minimarket,  
**quiero** abrir formalmente mi turno de caja registrando el fondo monetario inicial (efectivo en gaveta),  
**para** habilitar las operaciones de venta en el terminal de punto de venta (POS) y establecer la base dineraria obligatoria para el arqueo y cuadre al cierre de jornada.

**Justificación de prioridad:** Funcionalidad crítica indispensable para el producto mínimo viable (Must have); sin un turno abierto con fondo verificado, el sistema bloquea cualquier transacción comercial, impidiendo ventas sin trazabilidad financiera y garantizando la custodia del dinero físico.

**Criterios de aceptación:**
1. **Dado que** el colaborador inicia su turno de atención y no cuenta con otro turno activo abierto en el sistema, **cuando** ingresa el importe de apertura igual o superior al fondo mínimo obligatorio de S/ 500.00 y confirma la operación, **entonces** el sistema crea el turno en estado «Abierto», genera el movimiento contable inicial de apertura en efectivo y desbloquea el acceso a la pantalla de Punto de Venta (POS).
2. **Dado que** el usuario intenta abrir turno, **cuando** ingresa un monto de apertura inferior a S/ 500.00 o valores negativos/no numéricos, **entonces** el sistema rechaza la apertura notificando que el importe mínimo reglamentario es de S/ 500.00 para garantizar el cambio y vuelto desde la primera venta (RN-10).
3. **Dado que** el colaborador ya cuenta con un turno de caja previamente abierto y no cerrado, **cuando** intenta abrir un nuevo turno concurrente, **entonces** el sistema bloquea la acción indicando que debe proceder con el cierre de su turno activo antes de aperturar uno nuevo.
4. **Dado que** el colaborador interactúa con el módulo de turno de caja, **cuando** captura el monto inicial y visualiza las indicaciones de fondo mínimo, **entonces** la pantalla satisface las directrices visuales, controles y microcopy especificados en UI-016 (Turno de Caja y Arqueo Inicial) del Catálogo de Interfaces (DOC-ANEXO-B).

**Reglas de negocio aplicables:** 
- RN-10 (Fondo Mínimo de Apertura de Caja)

**Dependencias:** 
- Requiere `HU-AUTH-01` (inicio de sesión del cajero) y `HU-CONF-02` (parámetros de tienda).

---

### HU-CAJA-02 · Caja – Cerrar turno de caja y cuadrar

| Identificador | Épica | Prioridad MoSCoW | Estimación | Release | Sprint |
|:---:|:---:|:---:|:---:|:---:|:---:|
| HU-CAJA-02 | EPIC-VEN | Must have | 5 pts | REL-1 | SPR-1 |

**Como** Vendedor o Administrador del minimarket,  
**quiero** cerrar formalmente mi turno de caja declarando el arqueo físico de efectivo y pagos digitales (Yape/Plin (IziPay)/Plin (IziPay)),  
**para** que el sistema calcule el cuadre de caja (sobrante o faltante), deshabilite nuevas ventas en dicho turno y deje constancia auditable de la custodia monetaria.

**Justificación de prioridad:** Funcionalidad crítica de control antifraude y cuadre contable (Must have); el cierre con declaración de valores físicos es el mecanismo nuclear para verificar que lo recaudado coincida con las ventas registradas.

**Criterios de aceptación:**
1. **Dado que** el colaborador finaliza su jornada con un turno en estado «Abierto», **cuando** ingresa el arqueo físico de dinero contando e introduciendo los montos reales de efectivo y pagos por billetera digital y confirma el cierre, **entonces** el sistema pasa el turno a estado «Cerrado», calcula automáticamente las diferencias respecto a los saldos esperados, registra las observaciones del cajero e inhabilita inmediatamente las funciones de cobro en el POS para ese turno.
2. **Dado que** el colaborador ejecuta el arqueo de cierre, **cuando** se somete a la modalidad de supervisión `[DECISIÓN PENDIENTE D1]`, **entonces** el formulario de cierre procesará la declaración bajo el estándar institucional acordado (conteo ciego sin exhibición previa de saldos esperados en pantalla o verificación guiada con saldo teórico visible).
3. **Dado que** un turno ha quedado formalmente en estado «Cerrado», **cuando** el cajero intenta registrar una nueva venta o movimiento manual bajo dicho turno, **entonces** el sistema deniega el acceso exigiendo la apertura de un nuevo turno para continuar operando.
4. **Dado que** el usuario interactúa con el formulario de arqueo final, **cuando** declara los importes físicos y visualiza el resumen del cuadre, **entonces** la interfaz satisface rigurosamente los estándares visuales y de microcopy de UI-016 (Turno de Caja y Arqueo Inicial) del Catálogo de Interfaces (DOC-ANEXO-B).

**Reglas de negocio aplicables:** 
- N/A

**Decisiones pendientes:**
- `[DECISIÓN PENDIENTE D1]`: Modalidad de arqueo de caja al cierre de turno. Opciones en evaluación por el Product Owner: Cierre ciego (el cajero no visualiza los totales calculados por el sistema hasta después de confirmar su conteo físico, mitigando fraudes) frente a Cierre con saldo esperado visible (el cajero ve los totales teóricos en pantalla para orientar la reconciliación antes de guardar).

**Dependencias:** 
- Requiere `HU-CAJA-01` (existencia de un turno abierto).

---

### HU-CAJA-03 · Caja – Registrar movimiento manual de efectivo

| Identificador | Épica | Prioridad MoSCoW | Estimación | Release | Sprint |
|:---:|:---:|:---:|:---:|:---:|:---:|
| HU-CAJA-03 | EPIC-VEN | Should have | 3 pts | REL-2 | SPR-2 |

**Como** Vendedor o Administrador del minimarket,  
**quiero** registrar entradas o salidas manuales de efectivo físico en la gaveta con su debida justificación escrita,  
**para** documentar compras menores de emergencia, pagos de servicios básicos o inyecciones de sencillo para vuelto sin alterar los registros de ventas y manteniendo cuadrada la caja.

**Justificación de prioridad:** Funcionalidad de flexibilidad operativa importante (Should have); en el Release 1 el minimarket opera exclusivamente cobros de venta y fondo inicial; el Release 2 introduce el manejo controlado de caja chica para gastos operativos menores.

**Criterios de aceptación:**
1. **Dado que** el colaborador requiere ingresar o retirar dinero en efectivo de la gaveta por un concepto operativo (ejemplo: retiro para compra de insumos de limpieza o inyección de sencillo para cambio), **cuando** selecciona el tipo de movimiento («Ingreso» o «Egreso»), especifica el importe mayor a cero y digita obligatoriamente una justificación textual, **entonces** el sistema registra el movimiento físico en efectivo y ajusta de forma inmediata el saldo esperado de efectivo del turno (RN-15).
2. **Dado que** el operador intenta registrar un movimiento manual, **cuando** ingresa un importe superior al límite reglamentario de S/ 5,000.00 por movimiento, **entonces** el sistema bloquea la transacción notificando que los egresos e ingresos de caja chica no pueden exceder el tope máximo permitido de S/ 5,000.00 (RN-11).
3. **Dado que** el cajero procesa el formulario de movimiento manual, **cuando** intenta guardar sin registrar una descripción o justificación del gasto/ingreso, **entonces** el sistema impide el registro exigiendo un motivo documentado para fines de supervisión interna.
4. **Dado que** el usuario opera desde la ventana de movimientos de caja, **cuando** captura el tipo, monto y motivo, **entonces** la pantalla satisface las especificaciones de interfaz descritas en UI-016 (Turno de Caja y Arqueo Inicial) del Catálogo de Interfaces (DOC-ANEXO-B).

**Reglas de negocio aplicables:** 
- RN-11 (Tope Máximo para Movimientos Manuales)
- RN-15 (Medio Exclusivo de Arqueo Manual)

**Dependencias:** 
- Requiere `HU-CAJA-01` (turno activo en estado Abierto).

---

### HU-CAJA-04 · Caja – Ver resumen del turno activo

| Identificador | Épica | Prioridad MoSCoW | Estimación | Release | Sprint |
|:---:|:---:|:---:|:---:|:---:|:---:|
| HU-CAJA-04 | EPIC-VEN | Should have | 2 pts | REL-2 | SPR-2 |

**Como** Vendedor o Administrador del minimarket,  
**quiero** consultar un resumen consolidado de las operaciones de mi turno activo (ventas totales, ingresos por efectivo, cobros digitales y movimientos manuales),  
**para** monitorear el desempeño comercial durante la jornada y anticipar el cuadre previo al cierre definitivo de caja.

**Justificación de prioridad:** Funcionalidad de apoyo operativo importante (Should have); proporciona transparencia al operador y facilita la reconciliación preventiva de valores en el Release 2 sin interferir con la velocidad de atención al cliente.

**Criterios de aceptación:**
1. **Dado que** el cajero mantiene un turno en estado «Abierto», **cuando** consulta el panel de resumen de turno, **entonces** el sistema presenta un tablero consolidado con el monto de apertura, el volumen acumulado de ventas, el subtotal recaudado en efectivo físico, el total capturado en pagos digitales y los ingresos/egresos manuales procesados.
2. **Dado que** el negocio define sus políticas de control interno según `[DECISIÓN PENDIENTE D1]` y `[DECISIÓN PENDIENTE D2]`, **cuando** el colaborador visualiza el resumen, **entonces** la visibilidad de los saldos teóricos esperados y las alertas de desviación se presentarán con base en las directrices de arqueo y tolerancia de descuadre adoptadas por la gerencia.
3. **Dado que** el colaborador consulta el estado del turno, **cuando** interactúa con las tarjetas de métricas y opciones de actualización, **entonces** la pantalla cumple las pautas visuales y de microcopy de UI-016 (Turno de Caja y Arqueo Inicial) del Catálogo de Interfaces (DOC-ANEXO-B).

**Reglas de negocio aplicables:** 
- N/A

**Decisiones pendientes:**
- `[DECISIÓN PENDIENTE D1]`: Modalidad de arqueo de caja (Cierre ciego vs Cierre con saldo esperado en pantalla).
- `[DECISIÓN PENDIENTE D2]`: Tolerancia monetaria máxima permitida en descuadres de caja. Opciones en evaluación por el Product Owner: tolerancia cero (cualquier discrepancia genera alerta y requiere validación administrativa en HU-CAJA-06) frente a tolerancia operativa menor (ejemplo: ± S/ 2.00 por redondeos comerciales de monedas de baja denominación).

**Dependencias:** 
- Requiere `HU-CAJA-01` (turno activo en estado Abierto).

---

### HU-CAJA-05 · Caja – Consultar historial de turnos de caja

| Identificador | Épica | Prioridad MoSCoW | Estimación | Release | Sprint |
|:---:|:---:|:---:|:---:|:---:|:---:|
| HU-CAJA-05 | EPIC-VEN | Must have | 3 pts | REL-1 | SPR-1 |

**Como** Administrador o Gerente del minimarket,  
**quiero** consultar el historial cronológico completo de todos los turnos de caja registrados con filtros por fecha, colaborador y estado,  
**para** auditar los descuadres de dinero, revisar la conciliación diaria de ventas e inspeccionar los cierres forzados o incidencias monetarias.

**Justificación de prioridad:** Funcionalidad indispensable de supervisión y control financiero (Must have); permite a la administración diaria cuadrar el flujo monetario del negocio y conciliar la caja con el patrimonio declarado en el MVP (Release 1).

**Criterios de aceptación:**
1. **Dado que** la jefatura requiere conciliar períodos contables anteriores, **cuando** aplica filtros de búsqueda por rango de fechas, cajero responsable o estado del turno («Abierto» o «Cerrado»), **entonces** el sistema despliega el listado cronológico de turnos exhibiendo identificador, colaborador, fecha y hora de apertura/cierre, monto inicial, efectivo esperado, monto físico declarado, diferencias de arqueo y estado.
2. **Dado que** el auditor inspecciona una fila del listado de turnos, **cuando** pulsa sobre el registro o su botón de detalle, **entonces** el sistema exhibe el desglose exhaustivo de movimientos del turno, incluyendo las ventas individuales realizadas, movimientos manuales de caja chica y, de corresponder, la identidad del supervisor que intervino en cierres forzados con su motivo fundamentado.
3. **Dado que** el directivo utiliza la pantalla de historial de turnos, **cuando** navega por los filtros y grillas de supervisión, **entonces** la interfaz satisface íntegramente las especificaciones de diseño y microcopy de UI-017 (Historial de Cajas y Cierres Forzados) del Catálogo de Interfaces (DOC-ANEXO-B).

**Reglas de negocio aplicables:** 
- N/A

**Dependencias:** 
- Requiere `HU-CAJA-01` y `HU-CAJA-02` (generación de turnos y cierres en Sprint 1).

---

## 2. Sub-dominio: Punto de Venta (POS) y Transacciones Comerciales

### HU-VEN-01 · Ventas (POS) – Registrar una venta con Efectivo o Yape/Plin (IziPay)

| Identificador | Épica | Prioridad MoSCoW | Estimación | Release | Sprint |
|:---:|:---:|:---:|:---:|:---:|:---:|
| HU-VEN-01 | EPIC-VEN | Must have | 13 pts | REL-1 | SPR-1 |

**Como** Vendedor o Administrador del minimarket,  
**quiero** agregar al carrito los artículos que el cliente adquiere y procesar el cobro mediante dinero en efectivo o billetera digital (Yape/Plin (IziPay) o Plin vía terminal IziPay),  
**para** formalizar la transacción comercial, descontar inmediatamente las existencias según el orden de vencimiento y registrar los ingresos en la caja activa.

**Justificación de prioridad:** Funcionalidad neurálgica nuclear del minimarket (Must have); representa el corazón transaccional (13 pts) del sistema. Se mantiene indivisible en el Sprint 1 por su indivisibilidad funcional en el mostrador de ventas indispensable para el MVP. Domina la camino crítico del Sprint 1 y establece el estándar operativo de cobro en tienda.

**Criterios de aceptación:**
1. **Dado que** el colaborador agrega artículos válidos y activos al carrito de compras en el terminal POS con un turno de caja en estado «Abierto», **cuando** selecciona como medio de pago «Efectivo» e ingresa el monto entregado por el cliente, **entonces** el sistema valida que el importe entregado sea igual o superior al total de la compra, verifica que la gaveta de caja disponga de efectivo suficiente para entregar el vuelto correspondiente, ejecuta la transacción descontando los lotes de inventario bajo el principio de despacho por expiración preferente (primero en expirar, primero en salir) y registra la venta emitiendo el comprobante.
2. **Dado que** el cliente opta por cancelar mediante billetera digital (Yape/Plin (IziPay) o Plin mediante terminal de pago IziPay), **cuando** el cajero ingresa el código de autorización emitido por la pasarela de pagos, **entonces** el sistema exige que conste de exactamente 6 dígitos numéricos y verifica que no haya sido utilizado en ninguna transacción comercial previa en el historial del negocio para prevenir fraudes por comprobantes reutilizados (RN-02).
3. **Dado que** un producto cuenta con unidades físicas pero su lote de procedencia registra una fecha de caducidad expirada o igual a la fecha actual, **cuando** el vendedor intente seleccionarlo o agregarlo al carrito POS, **entonces** el sistema bloquea inmediatamente la operación e impide comercializar artículos caducados (RN-03).
4. **Dado que** el colaborador opera en el mostrador de atención al público, **cuando** interactúa con el catálogo de artículos, buscador, carrito interactivo, cálculo automático de importes y modal de confirmación de cobro, **entonces** la pantalla satisface con exactitud las especificaciones de diseño, controles y microcopy de UI-014 (Terminal de Punto de Venta POS) del Catálogo de Interfaces (DOC-ANEXO-B).

**Estructura metodológica pedagógica complementaria (Criterio INVEST - Small):**  
Para fines de documentación y análisis granular del esfuerzo sin alterar los 13 pts indivisibles del Backlog Maestro, la historia se desglosa en:  
- **HU-VEN-01a:** Carrito POS, catálogo en memoria y cálculo automático de totales con desglose de IGV 18 % (5 pts).  
- **HU-VEN-01b:** Transacción de pago en efectivo con validación de liquidez de gaveta para vuelto y descuento preferente de existencias (3 pts).  
- **HU-VEN-01c:** Transacción de pago con billetera digital (Yape/Plin (IziPay)/Plin (IziPay) vía IziPay) y validación de unicidad de código de autorización de 6 dígitos numéricos RN-02 (5 pts).

**Reglas de negocio aplicables:** 
- RN-02 (Protección contra Pagos Duplicados Yape/Plin (IziPay))
- RN-03 (Prohibición de Comercialización de Vencidos)

**Dependencias:** 
- Requiere `HU-CAJA-01` (turno de caja abierto), `HU-PROD-02` (catálogo de productos) y `HU-INV-01` (existencia de stock físico).

### HU-CAJA-06 · Caja – Aprobar cierre de turno

| Identificador | Épica | Prioridad MoSCoW | Estimación | Release | Sprint |
|:---:|:---:|:---:|:---:|:---:|:---:|
| HU-CAJA-06 | EPIC-VEN | Should have | 2 pts | REL-2 | SPR-2 |

**Como** Administrador o Gerente del minimarket,  
**quiero** revisar y validar formalmente los turnos de caja cerrados por los vendedores que reporten diferencias de arqueo o incidencias,  
**para** dar por conciliada la jornada contable, autorizar los ajustes monetarios y archivar definitivamente la rendición de cuentas de la caja.

**Justificación de prioridad:** Funcionalidad de control gerencial importante (Should have); complementa el cierre operativo del vendedor con una etapa de revisión y aprobación administrativa que previene la consolidación de descuadres no analizados en el Release 2.

**Criterios de aceptación:**
1. **Dado que** un turno de caja se encuentra en estado «Cerrado» y no ha sido validado previamente, **cuando** el Administrador o Gerente revisa el arqueo físico frente al saldo esperado y confirma su conformidad, **entonces** el sistema registra la aprobación administrativa, asocia la identidad del directivo responsable y la fecha de validación, manteniendo el estado «Cerrado» definitivo del turno.
2. **Dado que** el directivo inspecciona un turno cerrado con reporte de descuadre (sobrante o faltante), **cuando** examina el detalle de liquidación, **entonces** el sistema expone el desglose comparativo de montos: fondo de apertura, recaudación en efectivo, ventas digitales, egresos e ingresos manuales, monto físico declarado por el cajero y la diferencia monetaria resultante.
3. **Dado que** la jefatura supervisa los arqueos desde el panel administrativo, **cuando** interactúa con los módulos de revisión y confirmación, **entonces** las pantallas satisfacen los lineamientos visuales, grillas de control y microcopy especificados en UI-016 (Turno de Caja y Arqueo Inicial) y UI-017 (Historial de Cajas y Cierres Forzados) del Catálogo de Interfaces (DOC-ANEXO-B).

**Reglas de negocio aplicables:** 
- N/A

**Dependencias:** 
- Requiere `HU-CAJA-02` (cierre de turnos por los cajeros).

---

### HU-CAJA-07 · Caja – Forzar cierre de turno ajeno

| Identificador | Épica | Prioridad MoSCoW | Estimación | Release | Sprint |
|:---:|:---:|:---:|:---:|:---:|:---:|
| HU-CAJA-07 | EPIC-VEN | Should have | 5 pts | REL-2 | SPR-2 |

**Como** Administrador o Gerente del minimarket,  
**quiero** forzar el cierre administrativo de un turno de caja que un colaborador haya dejado abierto por abandono, emergencia o negligencia,  
**para** desbloquear la terminal de cobro, realizar el conteo físico de la gaveta ante testigos y permitir que un nuevo cajero inicie su jornada sin alterar la trazabilidad contable.

**Justificación de prioridad:** Funcionalidad de contingencia operativa importante (Should have); resuelve bloqueos físicos en tienda cuando un turno queda abierto indefinidamente por ausencia del operador, evitando la parálisis de la caja en el Release 2.

**Criterios de aceptación:**
1. **Dado que** un colaborador dejó su turno de caja en estado «Abierto» y se encuentra ausente o imposibilitado de cerrar, **cuando** el Administrador o Gerente ejecuta el cierre forzado de dicha caja, **entonces** el sistema le exige obligatoriamente ingresar el conteo físico real de efectivo y pagos digitales encontrados en gaveta y documentar una justificación o motivo explicativo de la intervención.
2. **Dado que** se confirma el cierre forzado de la caja, **cuando** el sistema procesa la liquidación, **entonces** el turno pasa inmediatamente a estado «Cerrado», calcula las diferencias de arqueo resultantes y deja constancia permanente e inmodificable del directivo que forzó el cierre y del motivo justificado registrado.
3. **Dado que** dos supervisores intentan intervenir simultáneamente sobre la misma caja abierta, **cuando** uno de ellos confirma el cierre forzado, **entonces** el sistema procesa la operación de forma atómica y bloquea cualquier intento concurrente posterior notificando que el turno ya fue cerrado.
4. **Dado que** la administración opera el cierre forzado de contingencia, **cuando** visualiza los formularios y alertas de confirmación, **entonces** la pantalla satisface los lineamientos de interfaz y advertencias de seguridad descritos en UI-017 (Historial de Cajas y Cierres Forzados) del Catálogo de Interfaces (DOC-ANEXO-B).

**Reglas de negocio aplicables:** 
- N/A

**Dependencias:** 
- Requiere `HU-CAJA-01` (existencia de un turno de caja abierto).

---

### HU-VEN-02 · Ventas (POS) – Emitir boleta o factura

| Identificador | Épica | Prioridad MoSCoW | Estimación | Release | Sprint |
|:---:|:---:|:---:|:---:|:---:|:---:|
| HU-VEN-02 | EPIC-VEN | Must have | 8 pts | REL-1 | SPR-1 |

**Como** Vendedor o Administrador del minimarket,  
**quiero** emitir comprobantes de pago oficiales (Boleta de Venta o Factura Comercial) con numeración correlativa estricta y validación tributaria,  
**para** entregar al cliente su comprobante legal de compra, dar cumplimiento a las exigencias normativas de SUNAT y sustentar el débito fiscal del negocio.

**Justificación de prioridad:** Funcionalidad crítica indispensable para la operación comercial (Must have); la emisión formal de comprobantes tributarios es obligatoria por ley para cualquier establecimiento comercial y requisito no negociable de salida del MVP (Release 1).

**Criterios de aceptación:**
1. **Dado que** el cliente solicita una Factura Comercial para sustento tributario de su empresa, **cuando** el vendedor ingresa el número de RUC de 11 dígitos y selecciona tipo «Factura», **entonces** el sistema verifica en línea que el RUC figure en estado Activo y condición Habido ante el padrón tributario, genera la serie y el correlativo ininterrumpido oficial (RN-13) y emite el comprobante desglosando base imponible e Impuesto General a las Ventas (IGV 18 %).
2. **Dado que** el servicio externo de consulta tributaria no responde o no se encuentra disponible al momento de la venta y el cliente acredita sus datos fiscales, **cuando** el cajero introduce manualmente la razón social y dirección fiscal, **entonces** el sistema permite emitir la factura en modalidad de contingencia dejando una marca de verificación tributaria pendiente para su posterior regularización.
3. **Dado que** el comprador requiere una Boleta de Venta sin identificación personal, **cuando** el cajero no introduce un documento de identidad, **entonces** el sistema emite automáticamente el comprobante asignado a «Cliente Genérico» asignando el siguiente número correlativo correlacionado e inalterable de la serie de boletas (RN-13).
4. **Dado que** el colaborador emite comprobantes desde el mostrador de ventas, **cuando** visualiza la previsualización del ticket, serie, correlativo y datos del receptor, **entonces** la interfaz satisface los estándares visuales y de formato de comprobante descritos en UI-014 (Terminal de Punto de Venta POS) del Catálogo de Interfaces (DOC-ANEXO-B).

**Reglas de negocio aplicables:** 
- RN-13 (Numeración Oficial e Ininterrumpida)

**Dependencias:** 
- Requiere `HU-VEN-01` (cobro de la transacción de venta en POS).

---

### HU-VEN-05 · Ventas (POS) – Consultar historial de ventas

| Identificador | Épica | Prioridad MoSCoW | Estimación | Release | Sprint |
|:---:|:---:|:---:|:---:|:---:|:---:|
| HU-VEN-05 | EPIC-VEN | Must have | 5 pts | REL-1 | SPR-1 |

**Como** Vendedor, Administrador o Gerente del minimarket,  
**quiero** consultar el historial de ventas realizadas con filtros por fecha, comprobante y medio de pago,  
**para** verificar transacciones pasadas, resolver dudas o reclamos inmediatos de clientes y preparar solicitudes de anulación con total trazabilidad.

**Justificación de prioridad:** Funcionalidad crítica de servicio y atención al cliente (Must have); indispensable en el Release 1 para verificar tickets emitidos ante devoluciones inmediatas, reclamos de vuelto o aclaraciones en caja.

**Criterios de aceptación:**
1. **Dado que** un colaborador con perfil Vendedor consulta el historial de ventas, **cuando** carga la pantalla de consulta, **entonces** el sistema filtra automáticamente las transacciones mostrando únicamente las ventas procesadas por su propio usuario durante su turno, garantizando la privacidad y segregación estricta entre cajeros (RN-07).
2. **Dado que** un directivo con perfil Administrador o Gerente accede al historial, **cuando** aplica filtros de búsqueda, **entonces** el sistema despliega las transacciones comerciales de todos los cajeros del minimarket, permitiendo filtrar por rango de fechas, número de serie/correlativo, medio de pago y estado de la venta.
3. **Dado que** el usuario localiza una transacción específica en la grilla y pulsa en ver detalle, **cuando** el sistema abre la vista ampliada, **entonces** se visualiza la relación completa de artículos vendidos, cantidades, precios unitarios, subtotales, método de pago, código de autorización si fue billetera digital y datos del cliente.
4. **Dado que** el operador consulta el módulo de ventas históricas, **cuando** interactúa con los filtros y la grilla de comprobantes, **entonces** la pantalla satisface las especificaciones de interfaz descritas en UI-015 (Historial de Ventas y Anulaciones) del Catálogo de Interfaces (DOC-ANEXO-B).

**Reglas de negocio aplicables:** 
- RN-07 (Privacidad y Segregación de Ventas)

**Dependencias:** 
- Requiere `HU-VEN-01` y `HU-VEN-02` (ventas registradas con comprobante emitido).

---

### HU-VEN-06 · Ventas (POS) – Anular una venta con devolución

| Identificador | Épica | Prioridad MoSCoW | Estimación | Release | Sprint |
|:---:|:---:|:---:|:---:|:---:|:---:|
| HU-VEN-06 | EPIC-VEN | Must have | 8 pts | REL-2 | SPR-2 |

**Como** Administrador o Gerente del minimarket,  
**quiero** anular formalmente una venta emitida procesando la devolución del dinero y determinando el destino físico de cada producto devuelto,  
**para** atender reclamos fundados de clientes, reintegrar el dinero cobrado y decidir si los artículos retornan al stock vendible o se derivan a merma por daño o caducidad.

**Justificación de prioridad:** Funcionalidad crítica de gestión postventa y custodia patrimonial (Must have); garantiza el derecho a restitución comercial del consumidor mientras protege el inventario físico y la caja mediante estricta autorización directiva segregada en el Release 2.

**Criterios de aceptación:**
1. **Dado que** el cliente solicita la anulación de una compra y devolución de su dinero, **cuando** el Administrador o Gerente evalúa la solicitud y el turno de caja en el que se efectuó la venta se encuentra todavía en estado «Abierto», **entonces** el sistema procesa la anulación autorizada, registra un movimiento de egreso por devolución en la gaveta de caja y cambia el estado de la venta a «Anulada».
2. **Dado que** el turno de caja donde se emitió el comprobante original ya fue cerrado formalmente, **cuando** la supervisión intenta anular la venta, **entonces** el sistema bloquea inmediatamente la operación indicando que solo se admiten anulaciones sobre turnos de caja activos y abiertos, preservando la inmutabilidad de los arqueos ya conciliados (RN-08).
3. **Dado que** la anulación involucra múltiples productos, **cuando** el supervisor procesa la devolución, **entonces** el sistema exige determinar individualmente por cada artículo si reingresa al inventario disponible para venta o si se deriva a baja por merma (seleccionando obligatoriamente el motivo de pérdida como avería, rotura o defecto), garantizando que productos deteriorados no vuelvan al anaquel comercial (RN-09).
4. **Dado que** la jefatura procesa la anulación y devolución desde el panel histórico, **cuando** confirma la justificación y los destinos de mercadería, **entonces** la interfaz satisface los lineamientos visuales, formularios modales y advertencias descritos en UI-015 (Historial de Ventas y Anulaciones) del Catálogo de Interfaces (DOC-ANEXO-B).

**Reglas de negocio aplicables:** 
- RN-08 (Límite Temporal para Anulaciones)
- RN-09 (Destino Físico de Mercadería Devuelta)

**Dependencias:** 
- Requiere `HU-VEN-05` (localización de la venta en el historial), `HU-CAJA-01` (turno de caja abierto) y `HU-INV-02` (mecanismo de registro de bajas por merma).

### HU-VEN-07 · Ventas (POS) – Verificar recepción de pago Yape/Plin (IziPay)

| Identificador | Épica | Prioridad MoSCoW | Estimación | Release | Sprint |
|:---:|:---:|:---:|:---:|:---:|:---:|
| HU-VEN-07 | EPIC-VEN | Should have | 2 pts | REL-2 | SPR-2 |

**Como** Vendedor o Administrador del minimarket,  
**quiero** validar el formato del código de autorización de la pasarela digital (6 dígitos numéricos) y registrar formalmente la confirmación o verificación de abono,  
**para** certificar que el dinero ingresó a la cuenta bancaria del negocio, prevenir comprobantes duplicados y facilitar la supervisión de arqueo de caja.

**Justificación de prioridad:** Funcionalidad de control de medios de pago importante (Should have); reduce discrepancias y fraudes por transferencias falsas o números mal digitados en el Release 2, asegurando que cada pago con billetera digital quede plenamente respaldado.

**Criterios de aceptación:**
1. **Dado que** el cliente realiza el abono mediante billetera digital (Yape/Plin (IziPay) o Plin mediante terminal de pago IziPay), **cuando** el operador captura el número de autorización en el formulario de cobro o en la revisión posterior, **entonces** el sistema valida que contenga exactamente 6 dígitos numéricos, rechazando caracteres alfabéticos o longitudes distintas para evitar errores de tipeo.
2. **Dado que** el código de autorización de 6 dígitos numéricos es sintácticamente correcto, **cuando** el operador o supervisor confirma la verificación de la transacción, **entonces** el sistema valida que no haya sido registrado en ninguna venta histórica previa (RN-02) y actualiza el estado de la venta como «Verificado», consignando la identidad del colaborador responsable y la fecha de verificación.
3. **Dado que** una transacción ya cuenta con la marca de abono verificado, **cuando** cualquier operador intente marcarla nuevamente como verificada, **entonces** el sistema bloquea la acción notificando que la transacción ya se encuentra verificada.
4. **Dado que** el colaborador opera desde el Punto de Venta o el Historial de Transacciones, **cuando** interactúa con las casillas de captura y confirmación de pago digital, **entonces** las interfaces satisfacen los lineamientos visuales y de microcopy descritos en UI-014 (Terminal de Punto de Venta POS) y UI-015 (Historial de Ventas y Anulaciones) del Catálogo de Interfaces (DOC-ANEXO-B).

**Reglas de negocio aplicables:** 
- RN-02 (Protección contra Pagos Duplicados Yape/Plin (IziPay))

**Dependencias:** 
- Requiere `HU-VEN-01` (cobro con billeteras digitales en POS).

---

### HU-VEN-03 · Ventas (POS) – Generar comprobante en PDF o reenviar por correo electrónico

| Identificador | Épica | Prioridad MoSCoW | Estimación | Release | Sprint |
|:---:|:---:|:---:|:---:|:---:|:---:|
| HU-VEN-03 | EPIC-VEN | Should have | 5 pts | REL-3 | SPR-3 |

**Como** Vendedor, Administrador o Gerente del minimarket,  
**quiero** generar el comprobante oficial de pago en formato imprimible PDF y poder reenviarlo por correo electrónico al cliente,  
**para** atender a clientes que requieren respaldo digital de su compra, enviar el comprobante a clientes corporativos remotos o respaldar la venta si la ticketera física falla.

**Justificación de prioridad:** Funcionalidad de omnicanalidad y soporte al cliente importante (Should have); programada en el Release 3 de consolidación de servicios para sustituir tickets impresos dañados o perdidos y brindar respaldo digital a los consumidores.

**Criterios de aceptación:**
1. **Dado que** una venta ha sido formalizada y cuenta con su numeración oficial ininterrumpida (RN-13), **cuando** el colaborador solicita la descarga del comprobante en formato digital, **entonces** el sistema genera un documento PDF estructurado que contiene los datos fiscales del minimarket, datos del cliente, desglose de ítems, precios, impuestos (IGV 18 %) y número de serie y correlativo oficial.
2. **Dado que** el cliente solicita recibir su comprobante por vía digital, **cuando** el operador introduce una dirección de correo electrónico válida y confirma el reenvío, **entonces** el sistema despacha el comprobante detallado con formato tributario al buzón del destinatario y emite un mensaje de entrega exitosa.
3. **Dado que** el colaborador intenta reenviar un comprobante, **cuando** introduce una dirección de correo con formato inválido o campos vacíos, **entonces** el sistema bloquea el despacho exigiendo una estructura válida de correo electrónico.
4. **Dado que** el usuario consulta cualquier venta del historial, **cuando** interactúa con las opciones de descarga o reenvío digital, **entonces** la interfaz satisface los estándares visuales y de interacción descritos en UI-015 (Historial de Ventas y Anulaciones) del Catálogo de Interfaces (DOC-ANEXO-B).

**Reglas de negocio aplicables:** 
- RN-13 (Numeración Oficial e Ininterrumpida)

**Dependencias:** 
- Requiere `HU-VEN-02` (emisión de comprobantes con numeración oficial) y `HU-VEN-05` (historial de ventas).

---

### HU-VEN-04 · Ventas (POS) – Buscar producto por código de barras

| Identificador | Épica | Prioridad MoSCoW | Estimación | Release | Sprint |
|:---:|:---:|:---:|:---:|:---:|:---:|
| HU-VEN-04 | EPIC-VEN | Should have | 3 pts | REL-3 | SPR-3 |

**Como** Vendedor o Administrador del minimarket,  
**quiero** escanear los productos en el punto de cobro utilizando una lectora óptica de código de barras,  
**para** agregar los artículos al carrito de ventas de forma ultrarrápida, evitar errores de digitación manual y reducir los tiempos de espera de los clientes en caja.

**Justificación de prioridad:** Funcionalidad de agilidad y eficiencia operativa importante (Should have); en los Releases 1 y 2 los artículos se seleccionan en el catálogo en pantalla o mediante búsqueda por nombre/código manual; la lectura óptica por hardware en el Release 3 potencia la velocidad de despacho en horas punta.

**Criterios de aceptación:**
1. **Dado que** el vendedor se encuentra en la pantalla de Punto de Venta con una caja abierta, **cuando** escanea con el lector óptico el código de barras de un producto activo, **entonces** el sistema localiza el artículo en el catálogo y lo agrega de inmediato al carrito de compra con cantidad inicial 1.
2. **Dado que** un artículo ya figura en el carrito de compras, **cuando** el colaborador escanea nuevamente su código de barras una o más veces sucesivas, **entonces** el sistema incrementa la cantidad en la misma fila del producto en vez de generar filas duplicadas.
3. **Dado que** el colaborador escanea un código de barras inexistente en el catálogo o perteneciente a un producto desactivado, **cuando** el escáner envía el código, **entonces** el sistema emite una alerta auditiva o visual notificando que el código no corresponde a ningún producto comercializable activo.
4. **Dado que** el cajero utiliza la interfaz de cobro, **cuando** interactúa con el buscador óptico y visualiza la lista dinámica del carrito, **entonces** la pantalla cumple rigurosamente las pautas de diseño y microcopy de UI-014 (Terminal de Punto de Venta POS) del Catálogo de Interfaces (DOC-ANEXO-B).

**Reglas de negocio aplicables:** 
- N/A

**Dependencias:** 
- Requiere `HU-VEN-01` (carrito de compras en POS) y `HU-PROD-03` (catálogo con código de barras registrado).

---

### HU-VEN-08 · Ventas (POS) – Exportar historial de ventas a documento plano estructurado (CSV)

| Identificador | Épica | Prioridad MoSCoW | Estimación | Release | Sprint |
|:---:|:---:|:---:|:---:|:---:|:---:|
| HU-VEN-08 | EPIC-VEN | Could have | 3 pts | REL-3 | SPR-3 |

**Como** Administrador o Gerente del minimarket,  
**quiero** exportar el listado histórico de transacciones comerciales a un documento estructurado de datos (CSV delimitado por comas),  
**para** realizar conciliaciones contables en herramientas externas de hoja de cálculo y facilitar el envío de reportes mensuales al estudio contable externo.

**Justificación de prioridad:** Funcionalidad deseable de conveniencia administrativa (Could have); ofrece utilidad para cruces de información contable mensual, pero el minimarket puede operar normalmente y emitir reportes en pantalla sin esta exportación externa.

**Criterios de aceptación:**
1. **Dado que** el directivo consulta el historial de ventas con filtros de fechas o comprobantes aplicados, **cuando** presiona la opción de exportar datos a archivo plano, **entonces** el sistema genera y descarga un archivo estructurado con los registros correspondientes al filtro activo.
2. **Dado que** el usuario abre el documento exportado, **cuando** inspecciona sus campos, **entonces** el documento contiene columnas normalizadas con fecha y hora, tipo de comprobante, serie, correlativo, cliente, medio de pago, base imponible, impuesto IGV, importe total y estado de la venta.

**Especificación de interfaz:** Funcionalidad de descarga de documento estructurado sin pantalla propia independiente; se integra como control de exportación dentro de la grilla de consulta de ventas.

**Reglas de negocio aplicables:** 
- N/A

**Dependencias:** 
- Requiere `HU-VEN-05` (historial de ventas).

---

### HU-VEN-09 · Ventas – Venta a granel o por peso (Fuera de Alcance)

| Identificador | Épica | Prioridad MoSCoW | Estimación | Release | Sprint |
|:---:|:---:|:---:|:---:|:---:|:---:|
| HU-VEN-09 | EPIC-VEN | Won't have (este release) | Sin estimar (0 pts) | Ninguno | Ninguno |

**Como** Vendedor del minimarket,  
**quiero** comercializar productos a granel o por peso (balanza digital conectada),  
**para** expender artículos perecibles (frutas, verduras, embutidos) que se tasan por fracciones de kilogramo.

**Justificación de exclusión:** Clasificada como Won't have para el presente ciclo de 3 Sprints. El modelo de datos comercial, catálogo de productos y control de existencias del minimarket operan bajo unidades enteras discretas ('und'). La incorporación de cantidades fraccionarias con integración directa de balanzas electrónicas exige rediseñar el cálculo de precios, el control de mermas y la pesquería/etiquetado, por lo que se reserva formalmente para una fase posterior de evolución del producto. No cuenta con criterios de aceptación al no formar parte de los compromisos de entrega de los Sprints planificados.