---
Código de documento: DOC-PLAN-03-03
Título: Backlog de Producto — EPIC-INV: Inventario y Reposición
Versión: 5.1
Fecha: 2026-10-04
Elaborado por: Colonia Infantas, Walter
Revisado por: Angeles Pérez, Jhonny
Estado: Aprobado
Propósito: Especificación de requisitos e historias de usuario de la épica de Gestión de Inventario Físico y Abastecimiento
Documentos relacionados: DOC-PLAN-01, DOC-PLAN-02, DOC-PLAN-03-00, DOC-PLAN-08, DOC-ANEXO-B
---

# EPIC-INV: Inventario y Reposición

**Objetivo de negocio (OBJ-03):** Minimizar pérdidas económicas por caducidad de mercaderías y evitar quiebres de stock en el punto de atención al público, mediante el control riguroso de fechas de vencimiento, la trazabilidad de los movimientos físicos de bodega (entradas, bajas y ajustes) y la gestión sistemática y oportuna de solicitudes de reposición comercial.

---

## 1. Sub-dominio: Movimientos Físicos de Inventario

### HU-INV-01 · Inventario – Registrar entrada de mercadería

| Identificador | Épica | Prioridad MoSCoW | Estimación | Release | Sprint |
|:---:|:---:|:---:|:---:|:---:|:---:|
| HU-INV-01 | EPIC-INV | Must have | 5 pts | REL-1 | SPR-1 |

**Como** Almacenero o Administrador del minimarket,  
**quiero** registrar el ingreso físico de mercadería a bodega con sus datos de lote y costos de adquisición,  
**para** incrementar el stock disponible para venta, registrar las fechas de vencimiento preventivas y actualizar de forma automatizada la valorización del inventario comercial.

**Justificación de prioridad:** Funcionalidad crítica indispensable para el producto mínimo viable (Must have); sin la capacidad de dar entrada física a los productos recibidos de proveedores, las existencias se mantienen en cero y se imposibilita cualquier venta en el punto de cobro.

**Criterios de aceptación:**
1. **Dado que** el operador recibe un lote de productos físicos para carga inicial de stock o para regularización administrativa autorizada, **cuando** registra el producto, empresa proveedora habilitada (opcional), cantidad ingresada y fecha de vencimiento (si el producto lo maneja), **entonces** el sistema suma de inmediato las unidades al stock disponible, asigna de forma automática y obligatoria un código de lote autogenerado, y el costo unitario no se ingresa por interfaz quedando registrado nulo en el envío, aunque la API soporte la valorización y recalcule automáticamente el costo promedio ponderado (RN-14).
2. **Dado que** el producto ya registra movimientos de entrada de mercadería previos en el minimarket, **cuando** el Almacenero intenta registrar un abastecimiento mediante ingreso directo, **entonces** el producto no aparecerá listado en el selector de la interfaz visual (presentando un aviso explicativo) y el sistema además cuenta con un bloqueo a nivel API notificando que las reposiciones regulares posteriores exigen obligatoriamente tramitar una Solicitud de Reposición aprobada (RN-01), conservando el Administrador la facultad de ingreso directo.
3. **Dado que** la mercadería recibida corresponde a un producto clasificado como perecible, **cuando** se procesa la entrada física, **entonces** el sistema exige obligatoriamente la captura de la fecha de vencimiento (que no puede ser anterior a la fecha actual y tiene un límite máximo de 15 años a futuro, mostrando una alerta visual si vence en menos de 7 días) alimentando el control preventivo FEFO (RN-19). Si se ingresa la fecha de hoy, el lote se crea pero nace automáticamente bloqueado para venta.
4. **Dado que** el operador interactúa con el módulo de recepción de mercadería, **cuando** visualiza los campos de captura de lote, cálculos de costo y botones de confirmación, **entonces** la pantalla cumple rigurosamente con los patrones de diseño y microcopy especificados en UI-010 (Entradas de Mercadería y Lotes) del Catálogo de Interfaces (DOC-ANEXO-B).

**Reglas de negocio aplicables:** 
- RN-01 (Política de Ingreso Inicial y Abastecimiento por Solicitud)
- RN-14 (Actualización de Valorización de Inventario)
- RN-19 (Prioridad de Despacho por Expiración FEFO y Bloqueo de Lotes Caducados)

**Dependencias:**
- Requiere `HU-PROD-02` y `HU-PROV-02` (artículo y proveedor registrados para recepción).

---

### HU-INV-02 · Inventario – Registrar baja de inventario por merma

| Identificador | Épica | Prioridad MoSCoW | Estimación | Release | Sprint |
|:---:|:---:|:---:|:---:|:---:|:---:|
| HU-INV-02 | EPIC-INV | Must have | 5 pts | REL-1 | SPR-1 |

**Como** Almacenero o Administrador del minimarket,  
**quiero** registrar la baja formal de mercadería averiada, rota o vencida en el almacén,  
**para** reflejar la pérdida real en el sistema, conciliar el valor real del inventario y retirar inmediatamente las unidades deterioradas del stock comercializable.

**Justificación de prioridad:** Funcionalidad esencial de control contable y operativo (Must have); indispensable para mantener la veracidad de las existencias y evitar que mercadería dañada o caducada se ofrezca al público o distorsione los arqueos de bodega.

**Criterios de aceptación:**
1. **Dado que** un artículo sufrió merma física o pérdida, **cuando** el operador registra la baja seleccionando los motivos justificados (Vencido, Dañado, Robo o faltante -con detalle obligatorio-, Consumo interno, Error de registro u Otro), **entonces** si elige «Dañado» el sistema exige obligatoriamente seleccionar el lote específico, descontando de inmediato las unidades del stock físico. Si elige un motivo distinto a «Vencido» y no selecciona lote, el sistema descuenta la baja únicamente del stock vigente en buen estado (RN-04, RN-20).
2. **Dado que** el operador registra una baja por el motivo explícito «Vencido», **cuando** selecciona el producto afectado, **entonces** el sistema bloquea el ingreso de cantidad asumiendo automáticamente todo el stock vencido consolidado o el de un lote vencido específico elegido, impidiendo el registro de cantidades parciales desde la interfaz gráfica, aunque la API sí acepta cantidades parciales (RN-05).
3. **Dado que** el colaborador opera sobre el panel de mermas, **cuando** selecciona los motivos reglamentarios, confirma las cantidades y visualiza los indicadores de stock restante, **entonces** la interfaz satisface los lineamientos de diseño, advertencias y microcopy descritos en UI-011 (Bajas de Inventario y Mermas) del Catálogo de Interfaces (DOC-ANEXO-B).

**Reglas de negocio aplicables:** 
- RN-04 (Registro Obligatorio de Mermas)
- RN-05 (Restricción de Bajas por Vencimiento)
- RN-20 (Bajas de Inventario por Motivo Dañado con Selección Obligatoria de Lote)

**Dependencias:**
- Requiere `HU-INV-01` (existencia de stock físico de lote para registrar baja).

---

### HU-INV-03 · Inventario – Realizar ajuste por conteo físico

| Identificador | Épica | Prioridad MoSCoW | Estimación | Release | Sprint |
|:---:|:---:|:---:|:---:|:---:|:---:|
| HU-INV-03 | EPIC-INV | Must have | 5 pts | REL-1 | SPR-1 |

**Como** Almacenero o Administrador del minimarket,  
**quiero** regularizar el saldo de inventario de un producto tras la realización de un conteo físico presencial en estanterías o bodega,  
**para** conciliar las discrepancias entre el stock teórico del sistema y la existencia física real en tienda asegurando la exactitud operativa.

**Justificación de prioridad:** Funcionalidad crítica de conciliación (Must have); las diferencias operativas menores (mermas no detectadas, errores de conteo o extravíos) son inevitables en el comercio minorista; sin esta función, los descuadres bloquean las ventas y descalibran los pedidos de reposición.

**Criterios de aceptación:**
1. **Dado que** el sistema registra un saldo teórico distinto al conteo físico verificado en tienda (por ejemplo, 10 unidades en pantalla frente a 8 unidades reales contadas), **cuando** el operador introduce la cantidad física constatada, **entonces** el sistema actualiza de inmediato el stock disponible ajustándolo al saldo real y genera un registro de supervisión con la diferencia neta. Si el ajuste resulta en un sobrante (diferencia positiva), el sistema exige registrar una fecha de vencimiento si el producto lo maneja y automáticamente genera un código de lote de ingreso.
2. **Dado que** el operador confirma un ajuste de inventario, **cuando** procesa la operación en pantalla, **entonces** el sistema le solicita registrar obligatoriamente una justificación o comentario explicativo sobre la causa de la discrepancia constatada para fines de trazabilidad y control interno, el cual es exigido por la API aunque la interfaz lo marque como opcional.
3. **Dado que** el colaborador interactúa con el formulario de regularización, **cuando** digita los conteos físicos, revisa las diferencias calculadas y confirma el ajuste, **entonces** la pantalla responde con la estructura visual, validaciones y microcopy definidos en UI-012 (Ajustes de Conteo Físico) del Catálogo de Interfaces (DOC-ANEXO-B).

**Reglas de negocio aplicables:** 
- N/A

**Dependencias:**
- Requiere `HU-INV-01` (existencia de inventario registrado para conciliar ajuste).

---

### HU-INV-04 · Inventario – Consultar historial de entradas

| Identificador | Épica | Prioridad MoSCoW | Estimación | Release | Sprint |
|:---:|:---:|:---:|:---:|:---:|:---:|
| HU-INV-04 | EPIC-INV | Should have | 2 pts | REL-3 | SPR-3 |

**Como** Almacenero o Administrador del minimarket,  
**quiero** consultar la bitácora histórica cronológica de todas las recepciones de mercadería con filtros por rango de fechas y producto,  
**para** auditar los ingresos efectuados, verificar costos de compra y resolver discrepancias documentales con proveedores.

**Justificación de prioridad:** Funcionalidad recomendada de supervisión y conciliación (Should have); programada para el Release 3 para fortalecer la supervisión documental y trazabilidad contable de los abastecimientos.

**Criterios de aceptación:**
1. **Dado que** un usuario autorizado ingresa al historial de recepciones, **cuando** aplica filtros por período de tiempo o selecciona un producto específico, **entonces** el sistema presenta la lista cronológica completa de entradas registradas, detallando fecha y hora de ingreso, empresa proveedora, lote, cantidad recepcionada y costo unitario de adquisición.
2. **Dado que** un usuario revisa un registro histórico de recepción, **cuando** examina la información, **entonces** el sistema expone todos los datos de la operación directamente integrados en las columnas de la grilla sin disponer de una vista de detalle en modal separado, en modo de solo lectura estricto.
3. **Dado que** el usuario navega por la consulta de recepciones, **cuando** aplica filtros, revisa las columnas de datos y utiliza los controles de visualización, **entonces** la interfaz satisface integralmente los estándares visuales de UI-010 del Catálogo de Interfaces (DOC-ANEXO-B).
4. **Dado que** los filtros aplicados no devuelven coincidencias, **cuando** se ejecuta la consulta, **entonces** el sistema presenta un estado vacío explícito con el mensaje «No hay entradas registradas».

**Reglas de negocio aplicables:** 
- N/A

**Dependencias:**
- Requiere `HU-INV-01` (entradas previas para consultar historial).

---

### HU-INV-05 · Inventario – Consultar historial de bajas

| Identificador | Épica | Prioridad MoSCoW | Estimación | Release | Sprint |
|:---:|:---:|:---:|:---:|:---:|:---:|
| HU-INV-05 | EPIC-INV | Should have | 2 pts | REL-3 | SPR-3 |

**Como** Administrador o Almacenero del minimarket,  
**quiero** consultar el reporte histórico consolidado de todas las bajas de mercadería registradas por merma o caducidad,  
**para** analizar las principales causas de pérdida económica, identificar patrones de deterioro y adoptar medidas correctivas con marcas o proveedores.

**Justificación de prioridad:** Funcionalidad recomendada de control de pérdidas (Should have); programada para el Release 3 para dotar a la administración de información analítica sobre mermas sin afectar la operación diaria.

**Criterios de aceptación:**
1. **Dado que** el Administrador o Almacenero accede a la sección histórica de mermas, **cuando** carga la consulta, **entonces** el sistema expone una grilla cronológica detallada con la fecha de la baja, producto afectado, lote correspondiente, cantidad de unidades retiradas y el motivo comercial justificado (Dañado, Vencido u otro).
2. **Dado que** el Administrador o Almacenero audita un registro de merma específico, **cuando** examina la información, **entonces** el sistema expone con exactitud la identidad del colaborador que autorizó la baja, presentando todos los datos correspondientes en las columnas de la grilla directamente, al carecer de una vista en modal de detalle separado.
3. **Dado que** el Administrador o Almacenero interactúa con el visor de bajas históricas, **cuando** visualiza los registros, aplica filtros y consulta los motivos, **entonces** la pantalla responde a los patrones de diseño y microcopy especificados en UI-011 del Catálogo de Interfaces (DOC-ANEXO-B).
4. **Dado que** los filtros de búsqueda no arrojan ninguna baja histórica, **cuando** se actualiza la grilla, **entonces** el sistema presenta un estado vacío explícito con el mensaje «No hay bajas registradas».

**Reglas de negocio aplicables:** 
- N/A

**Dependencias:**
- Requiere `HU-INV-02` (bajas previas para consultar historial).

---

### HU-INV-06 · Inventario – Consultar historial de ajustes

| Identificador | Épica | Prioridad MoSCoW | Estimación | Release | Sprint |
|:---:|:---:|:---:|:---:|:---:|:---:|
| HU-INV-06 | EPIC-INV | Should have | 2 pts | REL-3 | SPR-3 |

**Como** Administrador o Almacenero del minimarket,  
**quiero** revisar la bitácora histórica de ajustes manuales por conteo físico,  
**para** auditar la frecuencia de descuadres en estanterías, investigar posibles mermas ocultas y evaluar la exactitud del control de bodega.

**Justificación de prioridad:** Funcionalidad recomendada de supervisión física (Should have); programada para el Release 3 para consolidar el control interno del negocio frente a riesgos de pérdidas no registradas.

**Criterios de aceptación:**
1. **Dado que** el Administrador o Almacenero audita las correcciones manuales de inventario, **cuando** realiza una búsqueda por producto o rango temporal, **entonces** el sistema expone el historial de todos los ajustes registrados directamente en las columnas de la grilla (sin vista de detalle extra), indicando la fecha, el saldo previo ("Stock Sistema"), el saldo verificado ("Contado") y la diferencia neta generada.
2. **Dado que** el Administrador o Almacenero examina un ajuste individual, **cuando** revisa el historial, **entonces** el sistema expone el comentario o justificación registrado como una columna visible en el registro de ajuste.
3. **Dado que** el Administrador o Almacenero utiliza el panel de supervisión de conteos, **cuando** interactúa con los filtros y la grilla de resultados, **entonces** la interfaz cumple con las especificaciones de diseño y microcopy de UI-012 del Catálogo de Interfaces (DOC-ANEXO-B).
4. **Dado que** los filtros de búsqueda no encuentran ningún ajuste, **cuando** se ejecuta la consulta, **entonces** el sistema presenta un estado vacío explícito con el mensaje «No hay ajustes registradas».

**Reglas de negocio aplicables:** 
- N/A

**Dependencias:**
- Requiere `HU-INV-03` (ajustes previos para consultar historial).

## 2. Sub-dominio: Reposición de Mercadería y Abastecimiento Comercial

### HU-SOL-01 · Reposición – Crear solicitud de reposición

| Identificador | Épica | Prioridad MoSCoW | Estimación | Release | Sprint |
|:---:|:---:|:---:|:---:|:---:|:---:|
| HU-SOL-01 | EPIC-INV | Must have | 3 pts | REL-2 | SPR-2 |

**Como** Almacenero o Administrador del minimarket,  
**quiero** generar una solicitud formal de reposición de mercadería para un producto determinado,  
**para** formalizar el requerimiento de abastecimiento ante los proveedores habituales y prevenir el desabastecimiento en el salón de ventas.

**Justificación de prioridad:** Funcionalidad crítica de abastecimiento (Must have); formaliza el inicio del ciclo de adquisiciones del minimarket, sustituyendo pedidos verbales o informales por un registro auditable que previene la compra desordenada y asegura el control previo del gasto comercial.

**Criterios de aceptación:**
1. **Dado que** el colaborador detecta bajo stock o necesidad de reposición de un artículo, **cuando** selecciona el producto del catálogo y registra la cantidad requerida junto con el proveedor sugerido, **entonces** el sistema genera una nueva solicitud de reposición individual en estado «Pendiente».
2. **Dado que** el usuario introduce los datos de la solicitud, **cuando** intenta ingresar una cantidad menor o igual a cero o valores no numéricos, **entonces** el sistema bloquea el registro exigiendo una cantidad entera estrictamente positiva.
3. **Dado que** el colaborador opera desde la pantalla «Solicitudes de Reposición», **cuando** interactúa con los controles de selección, formularios y confirmación de pedidos, **entonces** la interfaz satisface los lineamientos de diseño, controles y microcopy especificados en UI-013 (Solicitudes de Reposición) del Catálogo de Interfaces (DOC-ANEXO-B).

**Reglas de negocio aplicables:** 
- N/A

**Dependencias:**
- Requiere `HU-PROD-02` y `HU-PROV-02` (producto y proveedor registrados).

---

### HU-SOL-02 · Reposición – Listar solicitudes con filtro por estado

| Identificador | Épica | Prioridad MoSCoW | Estimación | Release | Sprint |
|:---:|:---:|:---:|:---:|:---:|:---:|
| HU-SOL-02 | EPIC-INV | Must have | 2 pts | REL-2 | SPR-2 |

**Como** Almacenero, Gerente o Administrador del minimarket,  
**quiero** visualizar la lista cronológica de solicitudes de reposición con filtros selectivos por estado,  
**para** realizar el seguimiento del ciclo de vida de cada requerimiento de abastecimiento (Pendiente, Aprobada, Rechazada, Completada).

**Justificación de prioridad:** Funcionalidad indispensable de control operacional (Must have); proporciona visibilidad transversal a todas las áreas del minimarket para identificar oportunamente los pedidos en trámite, autorizados, recibidos o descartados.

**Criterios de aceptación:**
1. **Dado que** el usuario ingresa al módulo de reposiciones, **cuando** aplica filtros por estado («Pendiente», «Aprobada», «Rechazada», «Completada») o selecciona visualizar todas, **entonces** el sistema presenta el listado cronológico de solicitudes ordenado desde la más reciente, desplegando la información obligatoriamente en las columnas visuales: Producto, Cantidad, Estado, Proveedor, Fecha Est., Solicitante, Aprobado por y Acciones, sin existir la columna de Fecha de creación.
2. **Dado que** el usuario examina una solicitud específica en el listado, **cuando** revisa los registros en grilla, **entonces** el sistema expone toda la información a nivel de tabla sin disponer de la opción de hacer clic sobre la fila para abrir ningún modal de detalle extra. En caso de ser una solicitud rechazada, el motivo de rechazo aparecerá textualmente bajo el badge de estado en la misma columna.
3. **Dado que** el usuario consulta el panel de reposiciones, **cuando** visualiza la grilla de datos, tarjetas de estado y botones de filtrado, **entonces** la pantalla cumple rigurosamente los estándares de interfaz visual de UI-013 (Solicitudes de Reposición) del Catálogo de Interfaces (DOC-ANEXO-B).
4. **Dado que** la lista de solicitudes no contiene registros que cumplan con los filtros, **cuando** se actualiza la grilla, **entonces** el sistema presenta un estado vacío explícito con el mensaje «No hay solicitudes registradas».

**Reglas de negocio aplicables:** 
- N/A

**Dependencias:**
- Requiere `HU-SOL-01` (solicitudes generadas previamente).

---

### HU-SOL-03 · Reposición – Aprobar solicitud de reposición

| Identificador | Épica | Prioridad MoSCoW | Estimación | Release | Sprint |
|:---:|:---:|:---:|:---:|:---:|:---:|
| HU-SOL-03 | EPIC-INV | Must have | 3 pts | REL-2 | SPR-2 |

**Como** Gerente o Administrador del minimarket,  
**quiero** revisar y autorizar las solicitudes de reposición pendientes, con la posibilidad de reasignar el proveedor comercial y registrar una fecha estimada de llegada,  
**para** controlar el presupuesto de compras, garantizar las mejores condiciones de adquisición y facultar al almacén para recibir la mercadería cuando arribe.

**Justificación de prioridad:** Funcionalidad indispensable de segregación de funciones (Must have); separa la solicitud operativa del compromiso financiero, garantizando que el almacén plantee necesidades pero solo los roles gerenciales comprometan recursos económicos.

**Criterios de aceptación:**
1. **Dado que** una solicitud de reposición se encuentra en estado «Pendiente», **cuando** el Gerente o Administrador la evalúa favorablemente y confirma la aprobación, **entonces** el sistema cambia su estado a «Aprobada», registra la identidad del aprobador y la fecha de autorización, habilitando la orden para su posterior recepción física en bodega.
2. **Dado que** el producto puede ser suministrado por distintos proveedores o existen condiciones comerciales preferentes al momento de la revisión, **cuando** la jefatura está por autorizar la solicitud, **entonces** el sistema permite modificar o asignar un proveedor alternativo antes de formalizar la aprobación (RN-16).
3. **Dado que** el aprobador dispone del compromiso de entrega del proveedor, **cuando** autoriza la orden desde la pantalla, **entonces** la interfaz gráfica le exige registrar de forma obligatoria una fecha estimada de llegada (que no puede ser anterior a la fecha actual) para fines de previsión, independientemente de que la API la requiera como opcional.
4. **Dado que** la jefatura opera en la bandeja de autorización, **cuando** interactúa con los diálogos y confirmaciones de aprobación, **entonces** la interfaz satisface las especificaciones de diseño y microcopy de UI-013 (Solicitudes de Reposición) del Catálogo de Interfaces (DOC-ANEXO-B).

**Reglas de negocio aplicables:** 
- RN-16 (Flexibilidad en Elección de Proveedores)

**Dependencias:**
- Requiere `HU-SOL-01` (solicitud pendiente para aprobación).

---

### HU-SOL-04 · Reposición – Rechazar solicitud de reposición

| Identificador | Épica | Prioridad MoSCoW | Estimación | Release | Sprint |
|:---:|:---:|:---:|:---:|:---:|:---:|
| HU-SOL-04 | EPIC-INV | Should have | 2 pts | REL-2 | SPR-2 |

**Como** Gerente o Administrador del minimarket,  
**quiero** rechazar una solicitud de reposición que resulte innecesaria o financieramente inviable, registrando el motivo de la denegación,  
**para** evitar sobrestock, optimizar la liquidez del negocio y documentar formalmente las razones de la no compra ante el área solicitante.

**Justificación de prioridad:** Funcionalidad de control gerencial importante (Should have); cierra el ciclo de vida de los requerimientos denegados, evitando solicitudes pendientes indefinidas y garantizando la retroalimentación hacia el personal de bodega.

**Criterios de aceptación:**
1. **Dado que** una solicitud de reposición está en estado «Pendiente», **cuando** el Gerente o Administrador decide denegarla, **entonces** el sistema cambia su estado a «Rechazada», registra la identidad del responsable y exige consignar de forma obligatoria desde la interfaz una justificación o motivo explicativo del rechazo.
2. **Dado que** una solicitud ha sido marcada como «Rechazada», **cuando** un colaborador de almacén intente procesar una recepción física contra dicho documento, **entonces** el sistema bloquea cualquier ingreso de mercadería asociado al mismo.
3. **Dado que** la jefatura interactúa con el modal o panel de denegación, **cuando** introduce el motivo y confirma la acción, **entonces** la pantalla satisface las directrices visuales, advertencias y microcopy descritos en UI-013 (Solicitudes de Reposición) del Catálogo de Interfaces (DOC-ANEXO-B).

**Reglas de negocio aplicables:** 
- N/A

**Dependencias:**
- Requiere `HU-SOL-01` (solicitud pendiente para rechazo).

---

### HU-SOL-05 · Reposición – Completar solicitud al recibir mercadería

| Identificador | Épica | Prioridad MoSCoW | Estimación | Release | Sprint |
|:---:|:---:|:---:|:---:|:---:|:---:|
| HU-SOL-05 | EPIC-INV | Must have | 8 pts | REL-2 | SPR-2 |

**Como** Almacenero o Administrador del minimarket,  
**quiero** completar una solicitud de reposición aprobada al recibir físicamente la mercadería en bodega, capturando los datos del lote, vencimiento y costo real,  
**para** dar ingreso formal a las existencias comerciales, actualizar automáticamente la valorización del inventario y cerrar la orden de abastecimiento.

**Justificación de prioridad:** Funcionalidad crítica nuclear (Must have); es la historia central del circuito de compras regulares del minimarket, ya que conecta la orden comercial autorizada con la entrada física a bodega, el recálculo ponderado del costo contable y el control FEFO de caducidad.

**Criterios de aceptación:**
1. **Dado que** el pedido de reposición arriba físicamente al almacén con una orden en estado «Aprobada», **cuando** el operador registra la recepción, la interfaz gráfica no le permite registrar el número de lote (siendo este autogenerado por el backend) ni el costo unitario de adquisición (que se omite visualmente enviando null de forma fija). Tras ingresar el vencimiento (obligatorio para perecibles), **entonces** el sistema suma de inmediato las cantidades al stock y cambia el estado a «Completada», aunque la API sí pueda soportar costos que recalculen el promedio ponderado.
2. **Dado que** se completa la recepción de mercadería contra la solicitud aprobada, **cuando** la transacción concluye exitosamente, **entonces** el sistema genera de forma atómica el registro de movimiento en el historial de entradas de inventario vinculándolo a la solicitud original para garantizar la estricta trazabilidad de abastecimiento (RN-01).
3. **Dado que** la funcionalidad de recepción parcial de mercadería es soportada estructuralmente por el backend, **cuando** el usuario intenta registrarla visualmente en pantalla, **entonces** la interfaz bloquea el registro estableciendo la "Cantidad recibida" como igual a la cantidad solicitada, por lo que el cierre de recepción parcial queda inaccesible para el operador final.
4. **Dado que** el colaborador procesa la recepción de mercadería desde el módulo de reposiciones, **cuando** interactúa con los formularios de ingreso de lote, costos, vencimiento y confirmación de entrega, **entonces** la interfaz satisface íntegramente los estándares de diseño, validaciones visuales y microcopy descritos en UI-013 (Solicitudes de Reposición) del Catálogo de Interfaces (DOC-ANEXO-B).

**Reglas de negocio aplicables:** 
- RN-01 (Política de Ingreso Inicial y Abastecimiento por Solicitud)
- RN-14 (Actualización de Valorización de Inventario)

**Dependencias:**
- Requiere `HU-SOL-03` (solicitud formalmente aprobada para recibir mercadería).