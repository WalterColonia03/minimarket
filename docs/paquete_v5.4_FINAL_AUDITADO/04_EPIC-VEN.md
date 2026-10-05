---
Código de documento: DOC-PLAN-03-04
Título: Backlog de Producto — EPIC-VEN: Ventas, Caja y Comprobantes de Pago
Versión: 5.2
Fecha: 2026-10-04
Elaborado por: Colonia Infantas, Walter
Revisado por: Angeles Pérez, Jhonny
Estado: Aprobado
Propósito: Especificación de requisitos e historias de usuario de la épica de Gestión de Ventas en Mostrador, Control de Cajas y Comprobantes de Pago
Documentos relacionados: DOC-PLAN-01, DOC-PLAN-02, DOC-PLAN-03-00, DOC-PLAN-08, DOC-ANEXO-B
---

# EPIC-VEN: Ventas, Caja y Comprobantes de Pago

**Objetivo de negocio (OBJ-04):** Procesar las transacciones comerciales de venta en el salón de atención al público de forma ágil, emitiendo comprobantes de pago válidos ante la normativa tributaria nacional (SUNAT), resguardando la integridad del inventario por despacho preferente de vencimiento y asegurando el cuadre exacto del dinero en las cajas del minimarket mediante estrictos mecanismos de control y arqueo físico.

---

## 1. Sub-dominio: Operaciones de Turno de Caja y Arqueo Físico

### HU-CAJA-01 · Caja – Abrir turno de caja

| Identificador | Épica | Prioridad MoSCoW | Estimación | Release | Sprint |
|:---:|:---:|:---:|:---:|:---:|:---:|
| HU-CAJA-01 | EPIC-VEN | Must have | 5 pts | REL-1 | SPR-1 |

**Como** Vendedor o Administrador del minimarket,  
**quiero** abrir formalmente mi turno de caja registrando el fondo monetario inicial (efectivo en gaveta),  
**para** habilitar las operaciones de venta en el terminal de punto de venta (POS) y establecer el fondo inicial de caja en efectivo obligatoria para el arqueo y cuadre al cierre de jornada.

**Justificación de prioridad:** Funcionalidad crítica indispensable para el producto mínimo viable (Must have); sin un turno abierto con fondo verificado, el sistema bloquea cualquier transacción comercial, impidiendo ventas sin trazabilidad financiera y garantizando la custodia del dinero físico.

**Criterios de aceptación:**
1. **Dado que** el colaborador inicia su turno de atención y no cuenta con otro turno activo abierto en el sistema, **cuando** ingresa el importe de apertura igual o superior al fondo mínimo obligatorio de S/ 500.00 y confirma la operación, **entonces** el sistema crea el turno en estado «Abierto», genera el movimiento contable inicial de apertura en efectivo y desbloquea el acceso a la pantalla de Punto de Venta (POS).
2. **Dado que** el usuario intenta abrir turno, **cuando** ingresa un monto de apertura inferior a S/ 500.00 o valores negativos/no numéricos, **entonces** el sistema rechaza la apertura notificando que el importe mínimo reglamentario es de S/ 500.00 para garantizar el cambio y vuelto desde la primera venta (RN-10).
3. **Dado que** el colaborador ya cuenta con un turno de caja previamente abierto y no cerrado, **cuando** intenta abrir un nuevo turno concurrente, **entonces** el sistema bloquea la acción indicando que debe proceder con el cierre de su turno activo antes de aperturar uno nuevo.
4. **Dado que** el colaborador interactúa con el módulo de turno de caja, **cuando** captura el monto inicial y visualiza las indicaciones de fondo mínimo, **entonces** la pantalla satisface las directrices visuales, controles y microcopy especificados en UI-016 (Turno de Caja y Arqueo Inicial) del Catálogo de Interfaces (DOC-ANEXO-B).

**Reglas de negocio aplicables:** 
- RN-10 (Fondo Mínimo de Apertura de Caja)

**Dependencias:**
- Requiere `HU-AUTH-01` (sesión activa del vendedor para apertura).

---

### HU-CAJA-02 · Caja – Cerrar turno de caja y cuadrar

| Identificador | Épica | Prioridad MoSCoW | Estimación | Release | Sprint |
|:---:|:---:|:---:|:---:|:---:|:---:|
| HU-CAJA-02 | EPIC-VEN | Must have | 5 pts | REL-1 | SPR-1 |

**Como** Vendedor o Administrador del minimarket,  
**quiero** cerrar formalmente mi turno de caja declarando el arqueo físico de efectivo en gaveta y la conciliación del reporte de liquidación del terminal de pagos digitales (Yape/Plin vía IziPay),  
**para** que el sistema calcule el cuadre de caja (sobrante o faltante), deshabilite nuevas ventas en dicho turno y deje constancia auditable de la custodia monetaria.

**Justificación de prioridad:** Funcionalidad crítica de control antifraude y cuadre contable (Must have); el cierre con declaración de valores físicos y liquidación digital es el mecanismo nuclear para verificar que lo recaudado coincida con las ventas registradas.

**Criterios de aceptación:**
1. **Dado que** el colaborador finaliza su jornada con un turno en estado «Abierto», **cuando** ingresa el arqueo físico contando el efectivo en gaveta e introduce el total del reporte de liquidación emitido por el terminal IziPay para pagos digitales y confirma el cierre, **entonces** el sistema pasa el turno a estado «Cerrado», calcula automáticamente las diferencias respecto a los saldos esperados, registra las observaciones del vendedor e inhabilita inmediatamente las funciones de cobro en el POS para ese turno.
2. **Dado que** el colaborador ejecuta el arqueo de cierre, **cuando** introduce el recuento físico de efectivo y la liquidación del terminal digital, **entonces** el formulario de cierre procesará la declaración a través de un modal que indica «Cuenta el efectivo y Yape físico», sin exponer el saldo esperado en la vista de captura. Asimismo, el campo «Observaciones» se presenta visualmente como opcional en la interfaz, aunque la API lo exige como obligatorio en caso de registrarse un descuadre.
3. **Dado que** un turno ha quedado formalmente en estado «Cerrado», **cuando** el vendedor intenta registrar una nueva venta o movimiento manual bajo dicho turno, **entonces** el sistema deniega el acceso exigiendo la apertura de un nuevo turno para continuar operando.
4. **Dado que** el usuario interactúa con el formulario de arqueo final, **cuando** declara los importes físicos y la liquidación digital y visualiza el resumen del cuadre, **entonces** la interfaz satisface rigurosamente los estándares visuales y de microcopy de UI-016 (Turno de Caja y Arqueo Inicial) del Catálogo de Interfaces (DOC-ANEXO-B).

**Reglas de negocio aplicables:** 
- N/A

**Criterios de diseño operativo:**
- Modalidad de arqueo con saldo esperado visible en pantalla para orientar al vendedor en la conciliación del efectivo y la liquidación digital IziPay antes de confirmar el cierre.

**Dependencias:**
- Requiere `HU-CAJA-01` (turno abierto previamente para procesar el cierre).

---

### HU-CAJA-03 · Caja – Registrar movimiento manual de efectivo

| Identificador | Épica | Prioridad MoSCoW | Estimación | Release | Sprint |
|:---:|:---:|:---:|:---:|:---:|:---:|
| HU-CAJA-03 | EPIC-VEN | Should have | 3 pts | REL-2 | SPR-2 |

**Como** Vendedor o Administrador del minimarket,  
**quiero** registrar entradas o salidas manuales de efectivo físico en la gaveta con su debida justificación escrita,  
**para** documentar compras menores de emergencia, pagos de servicios básicos o ingresos manuales de efectivo para cambio para vuelto sin alterar los registros de ventas y manteniendo cuadrada la caja.

**Justificación de prioridad:** Funcionalidad de flexibilidad operativa importante (Should have); en el Release 1 el minimarket opera exclusivamente cobros de venta y fondo inicial; el Release 2 introduce el manejo controlado de caja chica para gastos operativos menores.

**Criterios de aceptación:**
1. **Dado que** el colaborador requiere ingresar o retirar dinero en efectivo de la gaveta por un concepto operativo (ejemplo: retiro para compra de insumos de limpieza o inyección de sencillo para cambio), **cuando** selecciona el tipo de movimiento («Ingreso» o «Egreso»), especifica el importe mayor a cero y digita obligatoriamente una justificación textual, **entonces** el sistema registra el movimiento físico en efectivo y ajusta de forma inmediata el saldo esperado de efectivo del turno (RN-15).
2. **Dado que** el operador intenta registrar un movimiento manual, **cuando** ingresa un importe superior al límite reglamentario de S/ 5,000.00 por movimiento, **entonces** el sistema bloquea la transacción notificando que los egresos e ingresos de caja chica no pueden exceder el tope máximo permitido de S/ 5,000.00 (RN-11).
3. **Dado que** el vendedor procesa el formulario de movimiento manual, **cuando** intenta guardar sin registrar una descripción o justificación del gasto/ingreso, **entonces** el sistema impide el registro exigiendo un motivo documentado para fines de supervisión interna.
4. **Dado que** el usuario opera desde la ventana de movimientos de caja, **cuando** captura el tipo, monto y motivo, **entonces** la pantalla satisface las especificaciones de interfaz descritas en UI-016 (Turno de Caja y Arqueo Inicial) del Catálogo de Interfaces (DOC-ANEXO-B).

**Reglas de negocio aplicables:** 
- RN-11 (Tope Máximo para Movimientos Manuales)
- RN-15 (Medio Exclusivo de Arqueo Manual)

**Dependencias:**
- Requiere `HU-CAJA-01` (turno abierto para registrar movimientos en efectivo).

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
1. **Dado que** el vendedor mantiene un turno en estado «Abierto», **cuando** consulta el panel de resumen de turno, **entonces** el sistema presenta tarjetas de resumen con la Apertura, Efectivo acumulado y Yape acumulado, seguido de una lista de «Movimientos del turno» detallando las operaciones manuales, sin presentar un total global de ventas ni totales separados de ingresos y egresos.
2. **Dado que** el negocio define sus políticas de control interno según la decisión formal D1 (saldo esperado visible) y decisión formal D2 (tolerancia cero en descuadres no justificados), **cuando** el colaborador visualiza el resumen, **entonces** la visibilidad de los saldos teóricos esperados y las alertas de desviación se presentan orientando la conciliación y requiriendo justificación obligatoria ante cualquier descuadre.
3. **Dado que** el colaborador consulta el estado del turno, **cuando** interactúa con las tarjetas de métricas y opciones de actualización, **entonces** la pantalla cumple las pautas visuales y de microcopy de UI-016 (Turno de Caja y Arqueo Inicial) del Catálogo de Interfaces (DOC-ANEXO-B).

**Reglas de negocio aplicables:** 
- N/A

**Criterios de diseño operativo:**
- **Criterio formal D1:** Modalidad de arqueo con saldo esperado visible en pantalla.
- **Criterio formal D2:** Tolerancia cero en descuadres; cualquier discrepancia entre el saldo esperado y el arqueado genera alerta visual obligatoria y requiere justificación formal para su posterior revisión administrativa en HU-CAJA-06.

**Dependencias:**
- Requiere `HU-CAJA-01` (turno activo para consultar resumen).

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
1. **Dado que** la jefatura requiere conciliar períodos contables anteriores, **cuando** aplica filtros de búsqueda por rango de fechas y estado del turno (sin disponer de filtro por vendedor), **entonces** el sistema despliega el listado exhibiendo las columnas visuales: Apertura, Cajero, Apertura (S/), Efec. esperado, Dif. efec., Yape esperado, Dif. Yape, Estado y Acción.
2. **Dado que** el Administrador o Gerente inspecciona una fila del listado de turnos, **cuando** pulsa sobre el botón desplegable de la fila, **entonces** el detalle se muestra integrado en la misma grilla informando el detalle del cierre forzado, sin llegar a exhibir un desglose exhaustivo de las ventas individuales en esa vista.
3. **Dado que** el directivo utiliza la pantalla de historial de turnos, **cuando** navega por los filtros y grillas de supervisión, **entonces** la interfaz satisface íntegramente las especificaciones de diseño y microcopy de UI-017 (Historial de Cajas y Cierres Forzados) del Catálogo de Interfaces (DOC-ANEXO-B).
4. **Dado que** los filtros no coinciden con ningún turno registrado, **cuando** se actualiza la consulta, **entonces** el sistema presenta un estado vacío explícito con el mensaje «No hay turnos para mostrar.».

**Reglas de negocio aplicables:** 
- N/A

**Dependencias:**
- Requiere `HU-CAJA-02` (turnos cerrados previamente para historial).

---

## 2. Sub-dominio: Punto de Venta (POS) y Transacciones Comerciales

### HU-VEN-01a · Ventas (POS) – Inicialización de terminal de venta y validación de turno activo

| Identificador | Épica | Prioridad MoSCoW | Estimación | Release | Sprint |
|:---:|:---:|:---:|:---:|:---:|:---:|
| HU-VEN-01a | EPIC-VEN | Must have | 3 pts | REL-1 | SPR-1 |

**Como** Vendedor o Administrador del minimarket,  
**quiero** acceder al terminal de punto de venta (POS) previa verificación de que mantengo un turno de caja en estado «Abierto»,  
**para** inicializar la sesión transaccional de venta, asegurar que todo ingreso monetario tenga un responsable asignado y evitar transacciones comerciales huérfanas sin fondo de caja custodiado.

**Justificación de prioridad:** Funcionalidad crítica de seguridad y control operativo (Must have); constituye el control de entrada al ciclo de ventas, bloqueando el acceso al mostrador si el colaborador no cuenta con turno aperturado formalmente.

**Criterios de aceptación:**
1. **Dado que** el colaborador inicia sesión e intenta acceder a la pantalla de Punto de Venta (POS), **cuando** el sistema comprueba que tiene un turno de caja activo en estado «Abierto», **entonces** desbloquea la interfaz de mostrador, inicializa una nueva canasta de venta en blanco y muestra en la cabecera los datos del turno y vendedor responsable.
2. **Dado que** el colaborador no cuenta con un turno de caja abierto o su último turno fue cerrado, **cuando** accede al módulo POS, **entonces** la pantalla carga mostrando el catálogo pero presenta un aviso destacado en color ámbar notificando que no tiene turno abierto junto al botón «Ir a Mi Caja», quedando deshabilitado el proceso de cobro en mostrador.
3. **Dado que** el usuario opera desde el mostrador, **cuando** visualiza la cabecera de sesión y estado de caja activa, **entonces** la pantalla satisface las especificaciones de interfaz descritas en UI-014 (Terminal de Punto de Venta POS) del Catálogo de Interfaces (DOC-ANEXO-B).

**Reglas de negocio aplicables:** 
- RN-10 (Fondo Mínimo de Apertura de Caja)

**Dependencias:**
- Requiere `HU-CAJA-01` (turno abierto para habilitar terminal).

---

### HU-VEN-01b · Ventas (POS) – Registro de líneas de venta y cobro en mostrador

| Identificador | Épica | Prioridad MoSCoW | Estimación | Release | Sprint |
|:---:|:---:|:---:|:---:|:---:|:---:|
| HU-VEN-01b | EPIC-VEN | Must have | 5 pts | REL-1 | SPR-1 |

**Como** Vendedor o Administrador del minimarket,  
**quiero** agregar al carrito los artículos que el cliente adquiere, calcular automáticamente los importes con desglose de IGV y procesar el cobro en efectivo o billetera digital (Yape o Plin mediante terminal IziPay),  
**para** formalizar la venta comercial en el mostrador, registrar el ingreso monetario en la caja activa y emitir la orden para despacho y comprobante.

**Justificación de prioridad:** Funcionalidad crítica nuclear del minimarket (Must have); representa la interacción esencial de atención al cliente y recaudación monetaria del MVP (Release 1).

**Criterios de aceptación:**
1. **Dado que** el vendedor busca o selecciona artículos disponibles en el catálogo POS, **cuando** define las cantidades y agrega los productos al carrito, **entonces** el sistema calcula en tiempo real los subtotales por producto considerando el Precio de Venta al Público (PVP) como valor final de consumidor y actualiza el importe total neto a cobrar.
2. **Dado que** el cliente opta por cancelar en efectivo, **cuando** el vendedor ingresa el importe entregado, **entonces** el sistema valida que sea mayor o igual al monto total de la compra, calcula automáticamente el vuelto correspondiente, valida que la gaveta de caja cuente con saldo de efectivo suficiente para el cambio y registra la venta al confirmar el cobro.
3. **Dado que** el cliente opta por abonar mediante billetera digital (Yape o Plin a través de terminal IziPay), **cuando** el operador introduce el código de confirmación o autorización emitido por el POS, **entonces** el sistema valida que conste de exactamente 6 dígitos numéricos y verifica que dicho código no haya sido registrado en ninguna venta previa (RN-02).
4. **Dado que** el vendedor interactúa con el carrito, buscador y teclado numérico de cobro, **cuando** procesa las líneas y confirma la transacción, **entonces** la interfaz satisface los lineamientos de accesibilidad, controles y microcopy especificados en UI-014 (Terminal de Punto de Venta POS) del Catálogo de Interfaces (DOC-ANEXO-B).
5. **Dado que** el vendedor realiza una búsqueda manual de producto por nombre o marca que no coincide con las existencias, **cuando** ejecuta la consulta, **entonces** el sistema despliega el mensaje de estado vacío «No se encontraron productos».

**Reglas de negocio aplicables:** 
- RN-02 (Protección contra Pagos Duplicados Yape/Plin (IziPay))

**Dependencias:**
- Requiere `HU-VEN-01a` (terminal habilitado con turno abierto) e `HU-INV-01` (existencias de catálogo).

---

### HU-VEN-01c · Ventas (POS) – Despacho por expiración FEFO y descargo atómico de lotes

| Identificador | Épica | Prioridad MoSCoW | Estimación | Release | Sprint |
|:---:|:---:|:---:|:---:|:---:|:---:|
| HU-VEN-01c | EPIC-VEN | Must have | 5 pts | REL-1 | SPR-1 |

**Como** Vendedor o Administrador del minimarket,  
**quiero** que al confirmarse la venta el sistema descuente el inventario de forma automática priorizando los lotes con fecha de caducidad más cercana y bloqueando cualquier lote vencido,  
**para** garantizar la rotación de mercadería perecible (FEFO), impedir la venta de productos caducados y mantener el inventario en tiempo real sincronizado con el stock físico.

**Justificación de prioridad:** Funcionalidad crítica de resguardo sanitario, calidad de servicio y control de mermas (Must have); automatiza el cumplimiento normativo de rotación sin exigir selección manual de lotes al Vendedor en el Release 1.

**Criterios de aceptación:**
1. **Dado que** se confirma una venta de productos con múltiples partidas o lotes registrados, **cuando** el sistema descuenta las unidades comercializadas, **entonces** selecciona de forma automática y preferente las existencias del lote activo cuya fecha de vencimiento sea la más próxima en el tiempo pero estrictamente posterior a la fecha del día (First Expired, First Out - FEFO) (RN-19).
2. **Dado que** un lote de producto tiene fecha de caducidad menor o igual a la fecha en curso (`<= hoy`), **cuando** el sistema procesa o evalúa la disponibilidad del artículo, **entonces** dicho lote se encuentra estrictamente bloqueado para venta, impidiendo su selección o descargo comercial y requiriendo su derivación al registro de bajas por vencimiento (RN-03, RN-19).
3. **Dado que** la cantidad vendida de un producto supera el saldo del lote más próximo a vencer, **cuando** el sistema procesa el descargo, **entonces** consume la totalidad de dicho lote y descuenta el remanente del siguiente lote vigente más próximo en estricto orden cronológico de caducidad de forma atómica.
4. **Dado que** el colaborador confirma la venta en el mostrador, **cuando** el sistema procesa la descarga en el almacén, **entonces** la pantalla POS actualiza en tiempo real los indicadores de stock disponible conforme a las directrices de UI-014 del Catálogo de Interfaces (DOC-ANEXO-B).

**Reglas de negocio aplicables:** 
- RN-03 (Prohibición de Comercialización de Vencidos)
- RN-19 (Prioridad de Despacho por Expiración FEFO y Bloqueo de Lotes Caducados)

**Dependencias:**
- Requiere `HU-VEN-01b` (venta confirmada para ejecutar el descargo de inventario).

### HU-CAJA-06 · Caja – Aprobar cierre de turno

| Identificador | Épica | Prioridad MoSCoW | Estimación | Release | Sprint |
|:---:|:---:|:---:|:---:|:---:|:---:|
| HU-CAJA-06 | EPIC-VEN | Should have | 2 pts | REL-2 | SPR-2 |

**Como** Administrador o Gerente del minimarket,  
**quiero** revisar y validar formalmente los turnos de caja cerrados por los vendedores que reporten diferencias de arqueo o incidencias,  
**para** dar por conciliada la jornada contable, autorizar los ajustes monetarios y archivar definitivamente la rendición de cuentas de la caja.

**Justificación de prioridad:** Funcionalidad de control gerencial importante (Should have); complementa el cierre operativo del vendedor con una etapa de revisión y aprobación administrativa que previene la consolidación de descuadres no analizados en el Release 2.

**Criterios de aceptación:**
1. **Dado que** un turno de caja se encuentra en estado «Cerrado» y no ha sido validado previamente, **cuando** el Administrador o Gerente revisa el arqueo físico frente al saldo esperado y confirma su conformidad, **entonces** el sistema registra la aprobación administrativa, asocia la identidad del directivo responsable (`aprobado_por`), sin registrar una fecha de validación independiente.
2. **Dado que** el directivo inspecciona un turno cerrado con reporte de descuadre (sobrante o faltante), **cuando** examina el detalle de liquidación, **entonces** el sistema permite procesar la revisión, aunque la interfaz gráfica actualmente omite exponer un desglose comparativo completo en pantalla.
3. **Dado que** la jefatura supervisa los arqueos desde el panel administrativo, **cuando** interactúa con los módulos de revisión y confirmación, **entonces** las pantallas satisfacen los lineamientos visuales, grillas de control y microcopy especificados en UI-016 (Turno de Caja y Arqueo Inicial) y UI-017 (Historial de Cajas y Cierres Forzados) del Catálogo de Interfaces (DOC-ANEXO-B).

**Reglas de negocio aplicables:** 
- N/A

**Dependencias:**
- Requiere `HU-CAJA-02` (turno cerrado para aprobación administrativa).

---

### HU-CAJA-07 · Caja – Forzar cierre de turno ajeno

| Identificador | Épica | Prioridad MoSCoW | Estimación | Release | Sprint |
|:---:|:---:|:---:|:---:|:---:|:---:|
| HU-CAJA-07 | EPIC-VEN | Should have | 5 pts | REL-2 | SPR-2 |

**Como** Administrador o Gerente del minimarket,  
**quiero** forzar el cierre administrativo de un turno de caja que un colaborador haya dejado abierto por abandono, emergencia o negligencia,  
**para** desbloquear la terminal de cobro, realizar el conteo físico de la gaveta ante testigos y permitir que un nuevo vendedor inicie su jornada sin alterar la trazabilidad contable.

**Justificación de prioridad:** Funcionalidad de contingencia operativa importante (Should have); resuelve bloqueos físicos en tienda cuando un turno queda abierto indefinidamente por ausencia del operador, evitando la parálisis de la caja en el Release 2.

**Criterios de aceptación:**
1. **Dado que** un colaborador dejó su turno de caja en estado «Abierto» y se encuentra ausente o imposibilitado de cerrar, **cuando** el Administrador o Gerente pulsa el botón rojo «Cerrar turno» en la fila del turno dentro del historial de cajas, **entonces** se abre una ventana modal donde el botón de confirmación indica «Forzar cierre», exigiéndole obligatoriamente ingresar el conteo físico real de efectivo y pagos digitales encontrados en gaveta junto con una justificación o motivo explicativo de la intervención forzada.
2. **Dado que** se confirma el cierre forzado de la caja, **cuando** el sistema procesa la liquidación, **entonces** el turno pasa inmediatamente a estado «Cerrado», calcula las diferencias de arqueo resultantes y deja constancia permanente e inmodificable del directivo que forzó el cierre y del motivo justificado registrado.
3. **Dado que** dos supervisores intentan intervenir simultáneamente sobre la misma caja abierta, **cuando** uno de ellos confirma el cierre forzado, **entonces** el sistema procesa la operación de forma atómica y bloquea cualquier intento concurrente posterior notificando que el turno ya fue cerrado.
4. **Dado que** la administración opera el cierre forzado de contingencia, **cuando** visualiza los formularios y alertas de confirmación, **entonces** la pantalla satisface los lineamientos de interfaz y advertencias de seguridad descritos en UI-017 (Historial de Cajas y Cierres Forzados) del Catálogo de Interfaces (DOC-ANEXO-B).

**Reglas de negocio aplicables:** 
- N/A

**Dependencias:**
- Requiere `HU-CAJA-01` (turno abierto en abandono para forzar cierre).

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
1. **Dado que** el cliente solicita una Factura Comercial para sustento tributario de su empresa, **cuando** el vendedor ingresa el número de RUC de 11 dígitos y selecciona tipo «Factura», **entonces** el sistema verifica en línea que el RUC figure en estado Activo y condición Habido ante el padrón tributario, genera la serie y el correlativo ininterrumpido oficial (RN-13) y emite el comprobante por el monto total de la operación.
2. **Dado que** el servicio externo de consulta tributaria no responde o no se encuentra disponible al momento de la venta y el cliente acredita sus datos fiscales, **cuando** el vendedor introduce manualmente la razón social y dirección fiscal, **entonces** el sistema permite emitir la factura en modalidad de contingencia dejando una marca de verificación tributaria pendiente para su posterior regularización.
3. **Dado que** el comprador adquiere productos por un monto total de hasta S/ 700.00 inclusive (monto total ≤ S/ 700.00) y no solicita identificación personal, **cuando** el vendedor emite una Boleta de Venta, **entonces** el sistema asigna automáticamente el comprobante a «Público General» correlativo sin requerir DNI (RN-13, RN-21).
4. **Dado que** el colaborador emite comprobantes desde el mostrador de ventas, **cuando** visualiza la previsualización del ticket, serie, correlativo y datos del receptor, **entonces** la interfaz satisface los estándares visuales y de formato de comprobante descritos en UI-014 (Terminal de Punto de Venta POS) del Catálogo de Interfaces (DOC-ANEXO-B).
5. **Dado que** el comprador adquiere productos por un monto total superior a S/ 700.00 (> S/ 700.00), **cuando** el vendedor intente emitir la Boleta de Venta a «Público General» sin documento de identidad, **entonces** el sistema bloquea de forma terminante la emisión del comprobante y exige la captura obligatoria del DNI de 8 dígitos del adquirente para dar estricto cumplimiento a la normativa tributaria vigente de SUNAT (RN-21).

**Reglas de negocio aplicables:** 
- RN-13 (Numeración Oficial e Ininterrumpida)
- RN-21 (Emisión de Boleta a Consumidor Anónimo / Público General)

**Dependencias:**
- Requiere `HU-VEN-01b` y `HU-VEN-01c` (venta registrada y existencias descargadas para emitir comprobante).

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
1. **Dado que** un colaborador con perfil Vendedor consulta el historial de ventas, **cuando** carga la pantalla de consulta, **entonces** el sistema filtra automáticamente las transacciones mostrando las ventas procesadas por su propio usuario en todos sus turnos (sin restringirse al turno actual), garantizando la privacidad frente a otros vendedores (RN-07).
2. **Dado que** un directivo con perfil Administrador o Gerente accede al historial, **cuando** aplica filtros de búsqueda, **entonces** el sistema despliega las transacciones comerciales de todos los vendedores del minimarket, permitiendo filtrar por rango de fechas, método de pago y un cuadro de búsqueda por «DNI/RUC o Correlativo», sin contar con filtro por estado de la venta.
3. **Dado que** el usuario localiza una transacción específica en la grilla y pulsa en ver detalle, **cuando** el sistema abre la vista ampliada, **entonces** se visualiza la relación completa de artículos vendidos, cantidades, precios unitarios, subtotales, método de pago, código de autorización si fue billetera digital y datos del cliente.
4. **Dado que** el operador consulta el módulo de ventas históricas, **cuando** interactúa con los filtros y la grilla de comprobantes, **entonces** la pantalla satisface las especificaciones de interfaz descritas en UI-015 (Historial de Ventas y Anulaciones) del Catálogo de Interfaces (DOC-ANEXO-B).
5. **Dado que** la búsqueda no arroja coincidencias de ventas en el rango o criterios seleccionados, **cuando** se ejecuta el filtro, **entonces** el sistema presenta un estado vacío explícito con el mensaje «No se encontraron ventas».

**Reglas de negocio aplicables:** 
- RN-07 (Privacidad y Segregación de Ventas)

**Dependencias:**
- Requiere `HU-VEN-01` (ventas registradas para consulta de historial).

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
3. **Dado que** la anulación involucra múltiples productos, **cuando** el Administrador o Gerente procesa la devolución, **entonces** el sistema exige determinar individualmente por cada artículo si reingresa al inventario disponible para venta o si se deriva a baja por merma (seleccionando obligatoriamente el motivo específico de la pérdida comercial, tipificado unívocamente como «Dañado» o «Vencido»), garantizando que productos deteriorados no vuelvan al anaquel comercial (RN-09). *(Nota técnica: Aunque la interfaz gráfica despliega 6 opciones genéricas para el motivo al anular, la API de backend exige estrictamente los motivos "Dañado" o "Vencido").*
4. **Dado que** la jefatura procesa la anulación y devolución desde el panel histórico, **cuando** confirma la justificación y los destinos de mercadería, **entonces** la interfaz satisface los lineamientos visuales, formularios modales y advertencias descritos en UI-015 (Historial de Ventas y Anulaciones) del Catálogo de Interfaces (DOC-ANEXO-B).
5. **Dado que** la venta original que se anula fue cobrada mediante billetera digital (Yape o Plin vía terminal IziPay), **cuando** el Administrador o Gerente autoriza la anulación, **entonces** el sistema registra la anulación identificando el medio de pago original sin restar dinero en efectivo de la gaveta de caja (preservando el saldo exacto en billetes y monedas para el arqueo físico de cierre), actualiza el balance de cobros digitales en el reporte de caja activa e inhabilita el código de autorización vinculado para evitar dobles conciliaciones (RN-02, RN-08).
6. **Dado que** la anulación de una venta formalizada es confirmada, **cuando** el sistema actualiza el registro a estado «Anulada», **entonces** el número correlativo oficial y serie permanecen asignados a la venta anulada sin reutilizarse, y el código de autorización digital correspondiente permanece inhabilitado históricamente sin admitir reuso (RN-02).

**Reglas de negocio aplicables:** 
- RN-02 (Protección contra Pagos Duplicados Yape/Plin (IziPay))
- RN-08 (Límite Temporal para Anulaciones)
- RN-09 (Destino Físico de Mercadería Devuelta)

**Dependencias:**
- Requiere `HU-VEN-01` (venta concretada para autorización de anulación).

### HU-VEN-07 · Ventas (POS) – Verificar recepción de pago Yape/Plin (IziPay)

| Identificador | Épica | Prioridad MoSCoW | Estimación | Release | Sprint |
|:---:|:---:|:---:|:---:|:---:|:---:|
| HU-VEN-07 | EPIC-VEN | Should have | 2 pts | REL-2 | SPR-2 |

**Como** Vendedor o Administrador del minimarket,  
**quiero** validar el formato del código de autorización de la pasarela digital (6 dígitos numéricos) y registrar formalmente la confirmación o verificación de abono,  
**para** certificar que el dinero ingresó a la cuenta bancaria del negocio, prevenir comprobantes duplicados y facilitar la supervisión de arqueo de caja.

**Justificación de prioridad:** Funcionalidad de control de medios de pago importante (Should have); reduce discrepancias y fraudes por transferencias falsas o números mal digitados en el Release 2, asegurando que cada pago con billetera digital quede plenamente respaldado.

**Criterios de aceptación:**
1. **Dado que** el cliente realiza el abono mediante billetera digital (Yape o Plin mediante terminal IziPay), **cuando** el operador captura el número de autorización en el formulario de cobro o en la revisión posterior, **entonces** el sistema valida que contenga exactamente 6 dígitos numéricos, rechazando caracteres alfabéticos o longitudes distintas para evitar errores de tipeo.
2. **Dado que** el código de autorización de 6 dígitos numéricos es válido y el vendedor confirma la recepción del abono en el terminal IziPay en mostrador, **cuando** pulsa el botón «Pago confirmado en IziPay», **entonces** el sistema habilita el botón «Realizar Venta» para concretar la transacción, quedando registrado el código unívoco verificado (RN-02). Sin este paso previo de confirmación en el POS no es posible procesar el cobro. En la grilla del historial, la columna «Yape/Plin (IziPay) Verif.» informa con el distintivo esmeralda «Sí» las ventas cobradas por este medio.
3. **Dado que** a nivel de backend existe el endpoint `PATCH /ventas/:id/verificar-yape` para verificación diferida (no invocado desde la interfaz de usuario web), **cuando** dicho servicio es consumido externamente sobre una transacción que ya cuenta con la marca de abono verificado, **entonces** la API bloquea la acción notificando que la transacción ya se encuentra verificada como salvaguarda técnica del servicio.
4. **Dado que** el colaborador opera desde el Punto de Venta o el Historial de Transacciones, **cuando** interactúa con las casillas de captura y confirmación de pago digital, **entonces** las interfaces satisfacen los lineamientos visuales y de microcopy descritos en UI-014 (Terminal de Punto de Venta POS) y UI-015 (Historial de Ventas y Anulaciones) del Catálogo de Interfaces (DOC-ANEXO-B).

**Reglas de negocio aplicables:** 
- RN-02 (Protección contra Pagos Duplicados Yape/Plin (IziPay))

**Dependencias:**
- Requiere `HU-VEN-01` (cobro digital iniciado para verificación de autorización).

---

### HU-VEN-03 · Ventas (POS) – Generar comprobante en PDF o reenviar por correo electrónico

| Identificador | Épica | Prioridad MoSCoW | Estimación | Release | Sprint |
|:---:|:---:|:---:|:---:|:---:|:---:|
| HU-VEN-03 | EPIC-VEN | Should have | 5 pts | REL-3 | SPR-3 |

**Como** Vendedor, Administrador o Gerente del minimarket,  
**quiero** generar el comprobante oficial de pago en formato imprimible PDF y poder reenviarlo por correo electrónico al cliente,  
**para** atender a clientes que requieren respaldo digital de su compra, enviar el comprobante a clientes corporativos remotos o respaldar la venta si la impresora térmica de tickets física falla.

**Justificación de prioridad:** Funcionalidad de distribución de comprobantes por correo electrónico y soporte al cliente importante (Should have); programada en el Release 3 de consolidación de servicios para sustituir tickets impresos dañados o perdidos y brindar respaldo digital a los consumidores.

**Criterios de aceptación:**
1. **Dado que** una venta ha sido formalizada y cuenta con su numeración oficial ininterrumpida (RN-13), **cuando** el colaborador solicita la emisión del comprobante, **entonces** el sistema genera una representación visual estructurada que contiene los datos fiscales del minimarket, datos del cliente, desglose de ítems, precios unitarios y número de serie y correlativo oficial, apta para guardado en formato digital, generándose estrictamente en formato de página A4 vertical (no adaptado para impresión térmica de tickets).
2. **Dado que** el cliente solicita recibir su comprobante por vía digital, **cuando** el operador introduce una dirección de correo electrónico válida y confirma el reenvío, **entonces** el sistema despacha una constancia detallada en formato HTML con la tabla de productos y totales directamente al buzón del destinatario y emite un mensaje de entrega exitosa.
3. **Dado que** el colaborador intenta reenviar un comprobante, **cuando** introduce una dirección de correo con formato inválido o campos vacíos, **entonces** el sistema bloquea el despacho exigiendo una estructura válida de correo electrónico.
4. **Dado que** el usuario consulta cualquier venta del historial, **cuando** interactúa con las opciones de descarga o reenvío digital, **entonces** la interfaz satisface los estándares visuales y de interacción descritos en UI-015 (Historial de Ventas y Anulaciones) del Catálogo de Interfaces (DOC-ANEXO-B).

**Reglas de negocio aplicables:** 
- RN-13 (Numeración Oficial e Ininterrumpida)

**Dependencias:**
- Requiere `HU-VEN-02` (comprobante emitido para generación de PDF o reenvío).

---

### HU-VEN-04 · Ventas (POS) – Buscar producto por código de barras

| Identificador | Épica | Prioridad MoSCoW | Estimación | Release | Sprint |
|:---:|:---:|:---:|:---:|:---:|:---:|
| HU-VEN-04 | EPIC-VEN | Should have | 3 pts | REL-3 | SPR-3 |

**Como** Vendedor o Administrador del minimarket,  
**quiero** escanear los productos en el punto de cobro utilizando una lectora óptica de código de barras,  
**para** agregar los artículos al carrito de ventas de forma ágil y precisa, evitar errores de digitación manual y reducir los tiempos de espera de los clientes en caja.

**Justificación de prioridad:** Funcionalidad de agilidad y eficiencia operativa importante (Should have); en los Releases 1 y 2 los artículos se seleccionan en el catálogo en pantalla o mediante búsqueda por nombre/código manual; la lectura óptica por hardware en el Release 3 potencia la velocidad de despacho en horas punta.

**Criterios de aceptación:**
1. **Dado que** el vendedor se encuentra en la pantalla de Punto de Venta con una caja abierta, **cuando** escanea con el lector óptico el código de barras de un producto activo, **entonces** el sistema localiza el artículo en el catálogo y lo agrega de inmediato al carrito de compra con cantidad inicial 1.
2. **Dado que** un artículo ya figura en el carrito de compras, **cuando** el colaborador escanea nuevamente su código de barras una o más veces sucesivas, **entonces** el sistema incrementa la cantidad en la misma fila del producto en vez de generar filas duplicadas.
3. **Dado que** el colaborador escanea un código de barras inexistente en el catálogo o perteneciente a un producto desactivado, **cuando** el escáner envía el código, **entonces** el sistema emite un mensaje visual «Código de barras no registrado».
4. **Dado que** el vendedor utiliza la interfaz de cobro, **cuando** interactúa con el buscador óptico y visualiza la lista dinámica del carrito, **entonces** la pantalla cumple rigurosamente las pautas de diseño y microcopy de UI-014 (Terminal de Punto de Venta POS) del Catálogo de Interfaces (DOC-ANEXO-B).

**Reglas de negocio aplicables:** 
- N/A

**Dependencias:**
- Requiere `HU-VEN-01` (punto de venta activo para escaneo de artículos).

---

### HU-VEN-08 · Ventas (POS) – Exportar historial de ventas a documento portátil (PDF) (Fuera de Alcance)

| Identificador | Épica | Prioridad MoSCoW | Estimación | Release | Sprint |
|:---:|:---:|:---:|:---:|:---:|:---:|
| HU-VEN-08 | EPIC-VEN | Won't have | 3 | Ninguno | Ninguno |

**Como** Administrador o Gerente del minimarket,  
**quiero** exportar reportes o listados históricos de transacciones comerciales a un documento (PDF descargable),  
**para** realizar conciliaciones contables en herramientas externas de hoja de cálculo y facilitar el envío de reportes mensuales al estudio contable externo.

**Justificación de exclusión:** En el módulo del Historial de Ventas solo existe el PDF de un comprobante y reenvío por correo. La funcionalidad masiva en PDF se reubica conceptualmente en el «Reporte de Ventas» dentro de EPIC-REP. Por tanto, esta HU puntual se declara fuera de alcance (no implementada en EPIC-VEN).

**Criterios de aceptación:**
1. **Dado que** el directivo consulta el historial de ventas con filtros de fechas o comprobantes aplicados, **cuando** presiona la opción de exportar datos a archivo PDF, **entonces** el sistema genera y descarga un archivo estructurado con los registros correspondientes al filtro activo.
2. **Dado que** el usuario abre el documento exportado, **cuando** inspecciona sus campos, **entonces** el documento contiene columnas normalizadas con fecha y hora, tipo de comprobante, serie, correlativo, cliente, medio de pago, base imponible, impuesto IGV, importe total y estado de la venta.
3. **Dado que** el usuario aplica filtros de fecha o estado que no arrojaron ninguna venta registrada en el período, **cuando** presiona la opción de exportar datos, **entonces** el sistema notifica que no existen registros comerciales disponibles para el criterio seleccionado, evitando la descarga de archivos vacíos.

**Especificación de interfaz:** Funcionalidad de descarga de documento estructurado sin pantalla propia independiente; se integra como control de exportación dentro de la grilla de consulta de ventas.

**Reglas de negocio aplicables:** 
- N/A

**Dependencias:**
- Requiere `HU-VEN-05` (historial de ventas para exportación a CSV).

---

### HU-VEN-09 · Ventas – Venta a granel o por peso (Fuera de Alcance)

| Identificador | Épica | Prioridad MoSCoW | Estimación | Release | Sprint |
|:---:|:---:|:---:|:---:|:---:|:---:|
| HU-VEN-09 | EPIC-VEN | Could have | 3 | Ninguno | Ninguno |

**Como** Vendedor del minimarket,  
**quiero** comercializar productos a granel o por peso (balanza digital conectada),  
**para** expender artículos perecibles (frutas, verduras, embutidos) que se tasan por fracciones de kilogramo.

**Justificación de exclusión:** Clasificada como Won't have para el presente ciclo de 3 Sprints. El minimarket comercializa exclusivamente productos envasados con código de barras en unidades discretas enteras. La comercialización por fracciones de peso o a granel requiere integración de balanzas comerciales electrónicas y procedimientos diferenciados de pesaje y etiquetado en mostrador, los cuales exceden el alcance prioritario del negocio y quedan diferidos para una fase comercial posterior. No cuenta con criterios de aceptación al estar excluida de los compromisos del Product Backlog activo.