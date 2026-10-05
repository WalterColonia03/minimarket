---
Código de documento: DOC-PLAN-03-05
Título: Backlog de Producto — EPIC-REP: Reportes, Dashboards y Configuración
Versión: 5.1
Fecha: 2026-10-04
Elaborado por: Colonia Infantas, Walter
Revisado por: Angeles Pérez, Jhonny
Estado: Aprobado
Propósito: Especificación de requisitos e historias de usuario de la épica de Inteligencia de Negocio, Analítica Comercial, Indicadores de Gestión y Configuración Fiscal
Documentos relacionados: DOC-PLAN-01, DOC-PLAN-02, DOC-PLAN-03-00, DOC-PLAN-08, DOC-ANEXO-B
---

# EPIC-REP: Reportes, Dashboards y Configuración

**Objetivo de negocio (OBJ-05):** Proveer a la gerencia y a la administración del minimarket de información consolidada y estratégica mediante cuadros de mando interactivos y reportes analíticos dinámicos, facilitando el control de ventas, la supervisión del inventario, la prevención de riesgos operativos y la gestión centralizada de los parámetros legales y fiscales del establecimiento.

---

## 1. Sub-dominio: Configuración Institucional y Parámetros Fiscales

### HU-CONF-01 · Configuración – Ver configuración actual del negocio

| Identificador | Épica | Prioridad MoSCoW | Estimación | Release | Sprint |
|:---:|:---:|:---:|:---:|:---:|:---:|
| HU-CONF-01 | EPIC-REP | Must have | 1 pt | REL-2 | SPR-2 |

**Como** Administrador del minimarket,  
**quiero** consultar los parámetros de configuración institucional y fiscal del negocio (tales como Razón Social, RUC, dirección comercial, teléfono oficial, tasa de IGV vigente y series tributarias autorizadas B001/F001),  
**para** validar que los datos legales y tributarios consignados en los comprobantes de pago emitidos a los clientes finales sean fidedignos y cumplan la normativa nacional.

**Justificación de prioridad:** Funcionalidad obligatoria para el control institucional (Must have); la parametrización institucional y fiscal es indispensable para la validez formal de los comprobantes de pago impresos y digitales; sin esta información el sistema no puede identificar legalmente al emisor de las operaciones comerciales.

**Criterios de aceptación:**
1. **Dado que** el Administrador accede al módulo de configuración general, **cuando** la pantalla presenta los datos almacenados, **entonces** el sistema exhibe en modo de consulta los campos institucionales: Razón Social, número de RUC (11 dígitos), dirección fiscal del establecimiento, número telefónico de contacto, tasa de IGV aplicable (18 %) y series tributarias oficiales para boletas de venta y facturas (Decisión formal D4: series oficiales B001 y F001 con correlativo local ininterrumpido).
2. **Dado que** la parametrización institucional y fiscal constituye información estratégica reservada para la administración, **cuando** un colaborador con rol Vendedor o Almacenero intenta acceder a esta vista de configuración, **entonces** el sistema bloquea el ingreso denegando el acceso y preservando la integridad de los parámetros del negocio.
3. **Dado que** el Administrador interactúa con la vista de configuración institucional, **cuando** inspecciona los campos, textos de ayuda y etiquetas informativas, **entonces** la pantalla satisface las directrices visuales, diseño y microcopy especificados en UI-020 (Configuración Fiscal y SUNAT) del Catálogo de Interfaces (DOC-ANEXO-B).

**Reglas de negocio aplicables:** 
- N/A (parámetros institucionales transversales).

**Dependencias:**
- Requiere `HU-CONF-02` (parámetros configurados en Sprint 1).

---

### HU-CONF-02 · Configuración – Actualizar configuración del negocio

| Identificador | Épica | Prioridad MoSCoW | Estimación | Release | Sprint |
|:---:|:---:|:---:|:---:|:---:|:---:|
| HU-CONF-02 | EPIC-REP | Must have | 3 pts | REL-1 | SPR-1 |

**Como** Administrador del minimarket,  
**quiero** modificar y actualizar los parámetros institucionales, datos de contacto, tasa de impuesto (IGV) y series fiscales del negocio a través de un formulario de gestión centralizado,  
**para** reflejar oportunamente cambios de domicilio comercial, renovación de teléfonos, ajustes en series de emisión o adecuaciones fiscales sin requerir intervenciones técnicas ni soporte externo.

**Justificación de prioridad:** Funcionalidad crítica indispensable desde el primer incremento operativo (Must have); los datos fiscales y las series de comprobantes deben estar operativas y configurables desde el MVP (SPR-1) para habilitar la apertura formal de la tienda y la emisión legal de boletas y facturas en caja.

**Criterios de aceptación:**
1. **Dado que** el Administrador requiere actualizar los datos tributarios del minimarket, **cuando** verifica o actualiza los datos institucionales configurando la tasa impositiva oficial (fijada por defecto en 18.00 % conforme a la normativa tributaria peruana) y confirma la acción, **entonces** el sistema almacena el valor porcentual como parámetro global del negocio (dejando el cálculo extractivo delegado a futuras integraciones contables o a la capa de presentación).
2. **Dado que** el Administrador ingresa el identificador tributario del establecimiento, **cuando** el valor capturado no corresponde a un RUC válido registrado ante SUNAT (exactamente 11 dígitos numéricos iniciando con el prefijo 20 para persona jurídica comercial), **entonces** el sistema rechaza la actualización, resalta el campo con error y notifica que se requiere un RUC válido en estado Activo y condición Habido.
3. **Dado que** el Administrador actualiza los medios de contacto de la tienda, **cuando** ingresa el número telefónico, **entonces** el sistema valida que cumpla con el formato de telefonía celular nacional (9 dígitos iniciando con 9) o telefonía fija institucional con prefijo de área departamental, rechazando secuencias numéricas inválidas.
4. **Dado que** el Administrador define las series tributarias para comprobantes de pago, **cuando** ingresa las series de boleta y factura, **entonces** el sistema verifica que ambas cumplan con la estructura fiscal reglamentaria de cuatro caracteres (una letra mayúscula identificadora seguida de tres dígitos numéricos, tales como B001 y F001), impidiendo formatos anómalos.
5. **Dado que** el Administrador edita los datos de la empresa, **cuando** ingresa un RUC válido en el formulario y solicita la consulta de datos fiscales, **entonces** el sistema recupera automáticamente la Razón Social y el domicilio fiscal registrados ante la entidad tributaria oficial (SUNAT), facilitando el llenado fidedigno del formulario.
6. **Dado que** el Administrador gestiona la actualización fiscal, **cuando** manipula los formularios, botones de guardado y mensajes de confirmación o error, **entonces** la pantalla satisface las directrices visuales, diseño y microcopy especificados en UI-020 (Configuración Fiscal y SUNAT) del Catálogo de Interfaces (DOC-ANEXO-B).

**Reglas de negocio aplicables:** 
- N/A (parámetros institucionales de configuración fiscal).

**Dependencias:**
- Requiere `HU-AUTH-01` (acceso administrativo para fijar parámetros del negocio).

---

## 2. Sub-dominio: Cuadro de Mando Ejecutivo y Analítica Estratégica (Dashboard)

### HU-DASH-01 · Dashboard – Ver resumen de ventas del día y del mes

| Identificador | Épica | Prioridad MoSCoW | Estimación | Release | Sprint |
|:---:|:---:|:---:|:---:|:---:|:---:|
| HU-DASH-01 | EPIC-REP | Must have | 5 pts | REL-2 | SPR-2 |

**Como** Gerente o Administrador del minimarket,  
**quiero** visualizar un panel de control ejecutivo con tarjetas métricas consolidadas que muestren el volumen total de ventas, los ingresos monetarios acumulados y el ticket promedio del período seleccionado (por defecto, el mes en curso),  
**para** disponer de una visión panorámica instantánea del rendimiento comercial de la tienda y evaluar el cumplimiento de las metas financieras al iniciar cada jornada.

**Justificación de prioridad:** Funcionalidad obligatoria para la inteligencia de negocio (Must have); el cuadro de mando gerencial constituye la principal herramienta visual para la toma de decisiones estratégicas, permitiendo a la gerencia monitorear la salud financiera del minimarket en el Release 2.

**Criterios de aceptación:**
1. **Dado que** el usuario con rol Gerente o Administrador inicia sesión y accede al cuadro de mando principal («Dashboard»), **cuando** la pantalla carga con el período predeterminado del mes en curso, **entonces** el sistema presenta tarjetas de indicadores clave destacando: Total de Ventas concretadas, Ingresos totales acumulados en moneda nacional (S/) y Ticket promedio por transacción comercial.
2. **Dado que** se registran nuevas ventas en los terminales de punto de venta (POS) o el usuario pulsa la opción «Actualizar», **cuando** la vista refresca su información, **entonces** los indicadores métricos recalculan sus valores de forma inmediata para reflejar los ingresos más recientes.
3. **Dado que** el usuario requiere analizar un horizonte temporal específico, **cuando** selecciona un rango de fechas («Desde» y «Hasta») y aplica el filtro, **entonces** las tarjetas de indicadores actualizan sus totales reflejando con exactitud las ventas correspondientes a dicho período, validando que la fecha inicial no sea posterior a la final ni exceda el límite cronológico permitido.
4. **Dado que** el usuario pulsa sobre cualquiera de las tarjetas métricas («Total Ventas», «Ingresos» o «Ticket Promedio»), **cuando** interactúa con el componente, **entonces** el sistema despliega una ventana de diálogo modal interactiva presentando para Ventas y Ticket Promedio la tabla con fecha/hora, cliente o vendedor, método de pago, monto y estado (o «No hay ventas registradas este mes.» si está vacío), y para Ingresos la tabla con método de pago, N° de ventas y monto acumulado (o «No hay ingresos registrados este mes.» si está vacío), sin necesidad de abandonar la vista ejecutiva principal.
5. **Dado que** el usuario navega en el panel de control, **cuando** visualiza la disposición de tarjetas, indicadores porcentuales y acciones de filtrado, **entonces** la pantalla satisface las directrices visuales, diseño y microcopy especificados en UI-018 (Dashboard y KPIs Estratégicos) del Catálogo de Interfaces (DOC-ANEXO-B).

**Reglas de negocio aplicables:** 
- N/A.

**Dependencias:**
- Requiere `HU-VEN-01` (ventas procesadas para resumen comercial).

---

### HU-DASH-03 · Dashboard – Alertas de stock crítico, vencimientos y turnos olvidados

| Identificador | Épica | Prioridad MoSCoW | Estimación | Release | Sprint |
|:---:|:---:|:---:|:---:|:---:|:---:|
| HU-DASH-03 | EPIC-REP | Must have | 5 pts | REL-2 | SPR-2 |

**Como** Administrador o Gerente del minimarket,  
**quiero** recibir alertas visuales destacadas y notificaciones preventivas en el panel de control ante situaciones operativas anómalas (productos con existencias en nivel crítico o sin stock, proximidad de vencimientos y turnos de caja que permanecen abiertos por tiempo excesivo),  
**para** reaccionar oportunamente ante desabastecimientos de productos de alta rotación, evitar mermas por caducidad y prevenir descuadres o riesgos de seguridad por vendedores que olvidaron cerrar su turno.

**Justificación de prioridad:** Funcionalidad crítica de proactividad operativa (Must have); previene pérdidas comerciales por falta de inventario, disminuye mermas y mitiga riesgos de fraude o descuadre por turnos de caja abiertos indebidamente en el Release 2.

**Criterios de aceptación:**
1. **Dado que** uno o más productos activos registran existencias iguales o inferiores a su umbral de stock mínimo parametrizado (o stock en cero), **cuando** el usuario accede al panel de control, **entonces** el sistema exhibe una tarjeta de alerta «Sin Stock» (cuyo modal interactivo despliega la lista de artículos agotados o el mensaje «No hay productos sin stock. ✓» si todas las existencias están cubiertas) y una sección prioritaria de «Stock Crítico» listando los productos más urgentes de reponer conforme a la RN-06, con enlace directo para inspeccionarlos en el catálogo de productos.
2. **Dado que** un vendedor inició un turno de atención y este permanece en estado «Abierto» durante más de 16 horas consecutivas sin haber sido cerrado, **cuando** el Administrador o Gerente ingresa al cuadro de mando, **entonces** el sistema presenta un banner de notificación de advertencia preventiva de «Turno Abierto Prolongado», indicando el nombre del colaborador, el tiempo transcurrido y un botón de acceso directo al historial de cajas para proceder con la supervisión o cierre forzado.
3. **Dado que** no existen anomalías operativas de turnos prolongados, **cuando** el usuario inspecciona el cuadro de mando, **entonces** el banner de advertencia se oculta automáticamente, manteniendo una visualización despejada y focalizada en los indicadores comerciales.
4. **Dado que** el usuario interactúa con los avisos, tarjetas de riesgo y enlaces de navegación rápida en el panel principal, **cuando** consulta el estado preventivo del minimarket, **entonces** la pantalla satisface las directrices visuales, diseño y microcopy especificados en UI-018 (Dashboard y KPIs Estratégicos) del Catálogo de Interfaces (DOC-ANEXO-B).

**Reglas de negocio aplicables:** 
- RN-06 (Alerta de Stock Mínimo)

**Dependencias:**
- Requiere `HU-INV-01` y `HU-CAJA-05` (stock y turnos de caja para alertas).

---

### HU-DASH-02 · Dashboard – Ver gráfico de evolución de ventas por día

| Identificador | Épica | Prioridad MoSCoW | Estimación | Release | Sprint |
|:---:|:---:|:---:|:---:|:---:|:---:|
| HU-DASH-02 | EPIC-REP | Should have | 3 pts | REL-3 | SPR-3 |

**Como** Gerente del minimarket,  
**quiero** consultar un gráfico lineal interactivo que represente la evolución cronológica de los montos facturados día a día dentro del período evaluado,  
**para** identificar visualmente patrones de compra, días de mayor afluencia comercial, tendencias de crecimiento o caídas imprevistas en los ingresos de la tienda.

**Justificación de prioridad:** Funcionalidad de alto valor analítico (Should have); proporciona análisis visual intuitivo de tendencias comerciales en el Release 3, optimizando la interpretación de datos sin necesidad de revisar extensas listas de números.

**Criterios de aceptación:**
1. **Dado que** el usuario visualiza el panel de control ejecutivo con datos comerciales registrados, **cuando** desciende a la sección analítica, **entonces** el sistema renderiza un gráfico de área lineal interactivo que representa las ventas por día, ubicando las fechas cronológicas en el eje horizontal y los importes en moneda nacional (S/) en el eje vertical.
2. **Dado que** el usuario desplaza el cursor sobre cualquier punto o nodo representativo de una fecha en el gráfico, **cuando** se posiciona sobre el día seleccionado, **entonces** el sistema presenta un recuadro flotante informativo destacando la fecha completa, el monto total facturado y el número de ventas concretadas en dicha jornada.
3. **Dado que** el período seleccionado no registra ninguna venta concretada, **cuando** se renderiza la sección, **entonces** el sistema presenta un estado visual alternativo con el mensaje descriptivo «No hay ventas registradas este mes.» (o del período), preservando el diseño sin generar distorsiones visuales.
4. **Dado que** el usuario interactúa con los controles de visualización gráfica y analiza la curva de ventas, **cuando** consulta el gráfico en el panel, **entonces** la pantalla satisface las directrices visuales, diseño y microcopy especificados en UI-018 (Dashboard y KPIs Estratégicos) del Catálogo de Interfaces (DOC-ANEXO-B).

**Reglas de negocio aplicables:** 
- N/A.

**Dependencias:**
- Requiere `HU-VEN-01` (ventas procesadas para curva analítica diaria).

---

### HU-DASH-04 · Dashboard – Ver ranking de productos más vendidos

| Identificador | Épica | Prioridad MoSCoW | Estimación | Release | Sprint |
|:---:|:---:|:---:|:---:|:---:|:---:|
| HU-DASH-04 | EPIC-REP | Should have | 3 pts | REL-3 | SPR-3 |

**Como** Gerente del minimarket,  
**quiero** visualizar un ranking gráfico tipo barra con el listado de los 5 productos con mayor volumen de rotación en ventas dentro del período seleccionado en el panel principal («Top 5 productos más vendidos»),  
**para** conocer rápidamente los artículos más demandados por la clientela sin tener que navegar hacia el módulo exhaustivo de reportes analíticos.

**Justificación de prioridad:** Funcionalidad importante de apoyo comercial (Should have); agiliza el reconocimiento del catálogo con mayor tracción comercial en el Release 3 para planificar oportunamente las compras y la colocación estratégica de mercadería en los anaqueles del salón.

**Criterios de aceptación:**
1. **Dado que** el usuario consulta el cuadro de mando ejecutivo, **cuando** observa el bloque «Top 5 productos más vendidos», **entonces** el sistema presenta los 5 artículos con mayor cantidad de unidades despachadas en el período activo (`limite: 5` en API, a diferencia del Top 10 del módulo de Reportes), ordenados de mayor a menor rotación, indicando para cada producto su nombre comercial, marca, unidades vendidas y una barra proporcional visual.
2. **Dado que** se registran nuevas ventas que alteran el orden de demanda comercial, **cuando** se actualiza la información del cuadro de mando, **entonces** las barras de clasificación reordenan dinámicamente sus posiciones relativas reflejando los nuevos líderes de venta.
3. **Dado que** en el período seleccionado no se han efectuado ventas en la tienda, **cuando** se consulta el bloque, **entonces** el sistema muestra un estado informativo indicando «No hay ventas registradas este mes.».
4. **Dado que** el usuario revisa el escalafón de productos estrella en el cuadro de mando, **cuando** interactúa con las barras proporcionales y etiquetas informativas, **entonces** la pantalla satisface las directrices visuales, diseño y microcopy especificados en UI-018 (Dashboard y KPIs Estratégicos) del Catálogo de Interfaces (DOC-ANEXO-B).

**Reglas de negocio aplicables:** 
- N/A.

**Dependencias:**
- Requiere `HU-VEN-01` (ventas procesadas para ranking de productos).

### HU-DASH-05 · Dashboard – Ver solicitudes de reposición pendientes

| Identificador | Épica | Prioridad MoSCoW | Estimación | Release | Sprint |
|:---:|:---:|:---:|:---:|:---:|:---:|
| HU-DASH-05 | EPIC-REP | Should have | 2 pts | REL-3 | SPR-3 |

**Como** Gerente del minimarket,  
**quiero** consultar un contador destacado de solicitudes de reposición pendientes de revisión en el panel de control ejecutivo y desplegar su detalle operativo mediante un diálogo emergente interactivo,  
**para** agilizar la evaluación y autorización oportuna de los pedidos urgentes de mercadería emitidos por el almacén sin tener que abandonar la vista principal del cuadro de mando.

**Justificación de prioridad:** Funcionalidad importante para la eficiencia logística interna (Should have); reduce la fricción burocrática y los tiempos muertos entre almacén y gerencia en el Release 3, acelerando el reabastecimiento antes de quiebres de existencias.

**Criterios de aceptación:**
1. **Dado que** el usuario con rol Gerente o Administrador accede al cuadro de mando principal («Dashboard»), **cuando** revisa la tarjeta métrica «Solicitudes Pendientes», **entonces** el sistema exhibe el contador cuantitativo exacto de pedidos de abastecimiento que se encuentran en estado «Pendiente» junto con el indicador descriptivo de estado.
2. **Dado que** el usuario pulsa sobre la tarjeta métrica «Solicitudes Pendientes», **cuando** la aplicación procesa la interacción, **entonces** el sistema despliega una ventana de diálogo modal en pantalla presentando el listado detallado de solicitudes pendientes (identificador de solicitud, producto requerido, cantidad solicitada, colaborador solicitante y fecha de emisión) o el estado informativo «No hay solicitudes pendientes. ✓» si todas las órdenes han sido resueltas, permaneciendo en la vista del cuadro de mando.
3. **Dado que** el usuario interactúa con la tarjeta y el diálogo modal de órdenes pendientes, **cuando** consulta la información en el panel, **entonces** la pantalla satisface las directrices visuales, diseño y microcopy especificados en UI-018 (Dashboard y KPIs Estratégicos) del Catálogo de Interfaces (DOC-ANEXO-B).

**Reglas de negocio aplicables:** 
- N/A.

**Dependencias:**
- Requiere `HU-SOL-01` (solicitudes pendientes para panel gerencial).

---

## 3. Sub-dominio: Reportes Analíticos, Financieros y Cierre Contable

### HU-REP-01 · Reportes – Ver resumen de ventas por período

| Identificador | Épica | Prioridad MoSCoW | Estimación | Release | Sprint |
|:---:|:---:|:---:|:---:|:---:|:---:|
| HU-REP-01 | EPIC-REP | Must have | 5 pts | REL-2 | SPR-2 |

**Como** Gerente o Administrador del minimarket,  
**quiero** generar un reporte consolidado de ingresos comerciales seleccionando un rango de fechas arbitrario («Desde» y «Hasta»),  
**para** auditar los ingresos globales, evaluar el volumen de transacciones y disponer de los totales financieros requeridos para el cierre y balance contable mensual.

**Justificación de prioridad:** Funcionalidad crítica indispensable para la contabilidad (Must have); requerida para el balance periódico, consolidación tributaria y control fiscal del negocio en el Release 2.

**Criterios de aceptación:**
1. **Dado que** el usuario accede al módulo de reportes analíticos y define un rango de fechas válido, **cuando** solicita la generación del reporte pulsando «Aplicar filtros», **entonces** el sistema calcula y exhibe las métricas agregadas del período: Total de Ventas completadas, Ingresos Totales acumulados en moneda nacional (S/) y Ticket promedio por transacción comercial.
2. **Dado que** el usuario ingresa un rango de fechas donde la fecha inicial («Desde») es cronológicamente posterior a la fecha final («Hasta»), **cuando** intenta aplicar los filtros, **entonces** el sistema bloquea la consulta y exhibe un mensaje de validación indicando que la fecha inicial no puede ser posterior a la fecha final.
3. **Dado que** el usuario no especifica fechas en los filtros, **cuando** carga la vista analítica, **entonces** el sistema consolida automáticamente la totalidad de operaciones históricas registradas respetando el límite temporal máximo permitido (10 años).
4. **Dado que** el usuario interactúa con los filtros cronológicos y tarjetas de resumen financiero, **cuando** consulta el reporte analítico, **entonces** la pantalla satisface las directrices visuales, diseño y microcopy especificados en UI-019 (Reportes Analíticos y PDF) del Catálogo de Interfaces (DOC-ANEXO-B).
5. **Dado que** el período seleccionado no registra ninguna venta, **cuando** se ejecuta la consulta, **entonces** las tarjetas de resumen presentan Total de Ventas en 0, Ingresos Totales en S/ 0.00 y Ticket Promedio en S/ 0.00, y los bloques analíticos asociados despliegan sus respectivos estados vacíos.

**Reglas de negocio aplicables:** 
- N/A.

**Dependencias:**
- Requiere `HU-VEN-01` (ventas procesadas para consolidado periódico).

---

### HU-REP-02 · Reportes – Ver ranking de productos más vendidos

| Identificador | Épica | Prioridad MoSCoW | Estimación | Release | Sprint |
|:---:|:---:|:---:|:---:|:---:|:---:|
| HU-REP-02 | EPIC-REP | Must have | 3 pts | REL-2 | SPR-2 |

**Como** Gerente o Administrador del minimarket,  
**quiero** consultar un listado jerárquico (ranking) con los 10 productos de mayor volumen de ventas dentro de un período seleccionado («Top 10 productos más vendidos»),  
**para** identificar los artículos estratégicos de alta rotación (principio de Pareto), planificar compras mayoristas y negociar mejores acuerdos de precios y descuentos por volumen con los proveedores.

**Justificación de prioridad:** Funcionalidad esencial para la estrategia comercial y de compras (Must have); constituye el insumo analítico clave para determinar la política de abastecimiento del minimarket en el Release 2.

**Criterios de aceptación:**
1. **Dado que** el usuario genera el reporte comercial para un período determinado, **cuando** visualiza la grilla de productos más vendidos, **entonces** el sistema presenta un listado de hasta 10 productos («Top 10 productos más vendidos», con límite fijado en 10 en la llamada API a diferencia del Top 5 del Dashboard) ordenado de mayor a menor según la cantidad total de unidades despachadas, exhibiendo para cada producto su posición (#), nombre comercial, marca, unidades vendidas e importe total recaudado.
2. **Dado que** un producto no registra ninguna transacción de venta dentro del rango temporal seleccionado, **cuando** el sistema compila el ranking, **entonces** dicho artículo es excluido de la clasificación, garantizando que el listado concentre únicamente mercadería con rotación efectiva.
3. **Dado que** existen empates en la cantidad de unidades vendidas entre dos o más artículos, **cuando** el sistema construye el escalafón, **entonces** aplica como criterio secundario de ordenamiento el monto total de ingresos recaudados en orden descendente.
4. **Dado que** el usuario revisa el ranking de productos estrella, **cuando** navega en la vista analítica, **entonces** la pantalla satisface las directrices visuales, diseño y microcopy especificados en UI-019 (Reportes Analíticos y PDF) del Catálogo de Interfaces (DOC-ANEXO-B).
5. **Dado que** el período seleccionado no registra ventas de ningún producto, **cuando** se compila el ranking, **entonces** el sistema presenta un estado vacío explícito con el mensaje «No hay datos de ventas aún».

**Reglas de negocio aplicables:** 
- N/A.

**Dependencias:**
- Requiere `HU-VEN-01` (ventas procesadas para ranking detallado).

---

### HU-REP-03 · Reportes – Ver ventas desglosadas por día

| Identificador | Épica | Prioridad MoSCoW | Estimación | Release | Sprint |
|:---:|:---:|:---:|:---:|:---:|:---:|
| HU-REP-03 | EPIC-REP | Should have | 3 pts | REL-3 | SPR-3 |

**Como** Gerente del minimarket,  
**quiero** consultar un listado tabular con los ingresos desglosados día por día dentro del intervalo evaluado,  
**para** analizar la distribución temporal de las ventas, evaluar los días de mayor tráfico de clientes y optimizar la asignación de horarios y personal en el salón de ventas.

**Justificación de prioridad:** Funcionalidad importante de analítica operativa (Should have); facilita la planificación de turnos de colaboradores y abastecimiento diario de caja según la afluencia de cada día de la semana en el Release 3.

**Criterios de aceptación:**
1. **Dado que** el usuario selecciona un período mensual o rango personalizado, **cuando** genera el desglose de ventas por día, **entonces** el sistema presenta una grilla tabular ordenada cronológicamente con filas individuales para cada fecha que registre al menos una venta concretada, indicando la fecha, el número total de transacciones y el monto total facturado.
2. **Dado que** en una fecha específica la tienda permaneció cerrada (feriado, inventario físico o sin actividad comercial), **cuando** se compila el reporte, **entonces** dicho día sin movimientos comerciales no genera fila en la grilla tabular, consolidando exclusivamente jornadas con actividad efectiva.
3. **Dado que** el usuario consulta los montos diarios, **cuando** inspecciona las fechas, **entonces** el sistema agrupa las ventas asignándolas al día calendario oficial de la zona horaria nacional, asegurando que las ventas nocturnas previas a la medianoche correspondan a la jornada respectiva.
4. **Dado que** el usuario interactúa con el listado tabular de evolución diaria, **cuando** revisa los registros en pantalla, **entonces** la interfaz satisface las directrices visuales, diseño y microcopy especificados en UI-019 (Reportes Analíticos y PDF) del Catálogo de Interfaces (DOC-ANEXO-B).
5. **Dado que** el período seleccionado no registra ninguna transacción comercial, **cuando** se genera el desglose, **entonces** el sistema presenta un estado vacío explícito con el mensaje «No hay ventas en el período seleccionado».

**Reglas de negocio aplicables:** 
- N/A.

**Dependencias:**
- Requiere `HU-VEN-01` (ventas procesadas para desglose diario).

---

### HU-REP-04 · Reportes – Ver ventas por método de pago

| Identificador | Épica | Prioridad MoSCoW | Estimación | Release | Sprint |
|:---:|:---:|:---:|:---:|:---:|:---:|
| HU-REP-04 | EPIC-REP | Should have | 2 pts | REL-3 | SPR-3 |

**Como** Administrador del minimarket,  
**quiero** visualizar la recaudación total de ventas desagregada por cada medio de pago autorizado (Efectivo y billetera digital Yape/Plin (IziPay)),  
**para** contrastar el efectivo físico disponible contra las transferencias en cuentas bancarias y facilitar la conciliación contable y bancaria periódica del negocio.

**Justificación de prioridad:** Funcionalidad relevante para la conciliación de tesorería (Should have); indispensable para auditar la proporción de cobro digital vs efectivo y cuadrar las liquidaciones financieras con el banco en el Release 3.

**Criterios de aceptación:**
1. **Dado que** el usuario genera el reporte financiero para un intervalo temporal, **cuando** consulta la sección de recaudación por medio de pago, **entonces** el sistema exhibe un desglose analítico separando el total recaudado en Efectivo y el total recaudado a través de transferencias digitales (Yape/Plin (IziPay)), detallando para cada modalidad el número de operaciones y el monto monetario acumulado.
2. **Dado que** el usuario evalúa la consistencia de los montos desglosados, **cuando** suma los ingresos de Efectivo y Yape/Plin (IziPay), **entonces** el resultado de la suma coincide de manera exacta y al céntimo con el importe total de ventas brutas completadas reportadas para dicho período.
3. **Dado que** en un período evaluado no se registraron transacciones mediante alguna de las modalidades de pago o en general no hay ventas, **cuando** se presenta el desglose, **entonces** el sistema exhibe un estado vacío explícito con el mensaje «No hay datos de ventas en el período seleccionado» (o saldo S/ 0.00 en cada medio).
4. **Dado que** el usuario inspecciona el resumen de medios de pago, **cuando** interactúa con los indicadores y gráficos de proporción, **entonces** la pantalla satisface las directrices visuales, diseño y microcopy especificados en UI-019 (Reportes Analíticos y PDF) del Catálogo de Interfaces (DOC-ANEXO-B).

**Reglas de negocio aplicables:** 
- N/A.

**Dependencias:**
- Requiere `HU-VEN-01` (ventas procesadas para desglose por medio de pago).

### HU-REP-05 · Reportes – Ver stock crítico

| Identificador | Épica | Prioridad MoSCoW | Estimación | Release | Sprint |
|:---:|:---:|:---:|:---:|:---:|:---:|
| HU-REP-05 | EPIC-REP | Must have | 3 pts | REL-2 | SPR-2 |

**Como** Administrador o Gerente del minimarket,  
**quiero** generar un reporte consolidado de los productos cuyo stock actual sea igual o inferior a su umbral de stock mínimo parametrizado,  
**para** identificar oportunamente los riesgos inminentes de desabastecimiento y planificar las órdenes de compra y solicitudes de reposición masivas.

**Justificación de prioridad:** Funcionalidad crítica indispensable para la continuidad operativa (Must have); permite centralizar todas las alertas de reposición en una vista administrativa unificada en el Release 2, evitando la pérdida de ventas por quiebre de stock.

*Nota de trazabilidad:* El rol Almacenero tiene estrictamente "Sin acceso" al módulo de Reportes; su labor de monitoreo y reposición se canaliza operativamente a través de los filtros de alerta del catálogo de productos (HU-PROD-01) y la emisión de solicitudes de reposición (HU-SOL-01).

**Criterios de aceptación:**
1. **Dado que** el usuario solicita el reporte de existencias críticas, **cuando** el sistema compila la información, **entonces** presenta exclusivamente aquellos productos activos donde las existencias actuales sean menores o iguales a su umbral mínimo configurado (o al umbral global predeterminado de 5 unidades) conforme a la RN-06.
2. **Dado que** se presenta la grilla de stock crítico, **cuando** el usuario inspecciona las columnas, **entonces** visualiza de forma clara: Producto, Marca, Categoría, Stock actual y Mínimo aplicado (sin código de producto en la grilla).
3. **Dado que** el usuario requiere ajustar el nivel de exigencia del reporte, **cuando** modifica el umbral numérico de evaluación en pantalla y aplica el cambio, **entonces** la grilla recalcula dinámicamente el listado incorporando los artículos que cumplan el nuevo criterio de criticidad.
4. **Dado que** el usuario interactúa con el reporte analítico de existencias críticas, **cuando** consulta los datos en pantalla, **entonces** la interfaz satisface las directrices visuales, diseño y microcopy especificados en UI-019 (Reportes Analíticos y PDF) del Catálogo de Interfaces (DOC-ANEXO-B).
5. **Dado que** ningún producto tiene stock menor o igual al umbral o este se fija en cero sin alertas, **cuando** se genera el reporte, **entonces** el sistema presenta un estado vacío explícito en un banner verde con el mensaje «✓ Todo el stock está en orden».

**Reglas de negocio aplicables:** 
- RN-06 (Alerta de Stock Mínimo)

**Dependencias:**
- Requiere `HU-INV-01` (inventario valorizado para reporte de stock crítico).

---

### HU-REP-06 · Reportes – Ver resumen general del inventario

| Identificador | Épica | Prioridad MoSCoW | Estimación | Release | Sprint |
|:---:|:---:|:---:|:---:|:---:|:---:|
| HU-REP-06 | EPIC-REP | Should have | 2 pts | REL-3 | SPR-3 |

**Como** Gerente o Administrador del minimarket,  
**quiero** consultar un resumen cuantitativo consolidado del estado global del inventario en almacén y salón,  
**para** conocer las métricas operativas de volumen del catálogo comercial, cobertura de categorías, red de proveedores y artículos agotados en el Release 3.

**Justificación de prioridad:** Funcionalidad de alto valor para el control patrimonial (Should have); proporciona una panorama integral del catálogo de existencias sin requerir supervisiones manuales exhaustivas.  
*(Nota técnica de arquitectura):* A nivel de backend, el endpoint `/reportes/inventario/resumen` calcula los 5 indicadores cuantitativos (total de productos, total de categorías, total de proveedores, productos sin stock y solicitudes pendientes); en la interfaz web actual, estos datos se canalizan hacia el Dashboard en tarjetas individuales (Productos Activos, Sin Stock y Solicitudes Pendientes), mientras que las métricas de categorías y proveedores no se renderizan en una sección visual independiente de Reportes.

**Criterios de aceptación:**
1. **Dado que** se consumen los datos consolidados del inventario desde el servicio analítico, **cuando** el sistema compila las métricas globales, **entonces** el API calcula los 5 conteos cuantitativos (total de productos activos, total de categorías, total de proveedores activos, productos sin existencias y solicitudes de reposición pendientes), disponibilizándolos para la supervisión patrimonial y la presentación de tarjetas en el tablero de control.
2. **Dado que** se producen entradas por compras, despachos en ventas o bajas por merma, **cuando** el usuario refresca la consulta, **entonces** los indicadores cuantitativos actualizan sus valores en tiempo real reflejando la situación patrimonial vigente del almacén.
3. **Dado que** el usuario analiza las tarjetas cuantitativas de existencias, **cuando** navega en la vista analítica, **entonces** la pantalla satisface las directrices visuales, diseño y microcopy especificados en UI-019 (Reportes Analíticos y PDF) del Catálogo de Interfaces (DOC-ANEXO-B).

**Reglas de negocio aplicables:** 
- N/A.

**Dependencias:**
- Requiere `HU-INV-01` (entradas registradas para reporte de inventario).

---

### HU-REP-07 · Reportes – Ver margen de ganancia por producto

| Identificador | Épica | Prioridad MoSCoW | Estimación | Release | Sprint |
|:---:|:---:|:---:|:---:|:---:|:---:|
| HU-REP-07 | EPIC-REP | Should have | 5 pts | REL-3 | SPR-3 |

**Como** Gerente del minimarket,  
**quiero** consultar un reporte de rentabilidad comercial que desglose el margen de utilidad bruta (precio de venta cobrado frente al costo promedio de adquisición) por cada producto vendido,  
**para** identificar los artículos con mayor y menor aporte financiero al negocio y reajustar oportunamente las listas de precios de aquellos productos que resulten deficitarios o con márgenes reducidos.

**Justificación de prioridad:** Funcionalidad estratégica de rentabilidad comercial (Should have); brinda la inteligencia financiera requerida para asegurar que la política de fijación de precios maximice el retorno económico en el Release 3.  
*(Nota de dependencia operativa de costeo):* El cálculo del margen de ganancia depende estrictamente de consumos de lotes que posean un costo unitario registrado (`em.costo_unitario` no nulo). Debido a que los formularios de carga de entradas y recepción de reposición en la interfaz web actual no solicitan el costo (enviando valor nulo por defecto según RN-14), los movimientos generados exclusivamente por la interfaz de usuario presentarán un reporte de margen vacío con el aviso: «Sin datos de costo en el período. Registra el costo unitario al ingresar mercadería para ver el margen.».

**Criterios de aceptación:**
1. **Dado que** el usuario define un período de análisis y genera el reporte de rentabilidad, **cuando** visualiza la grilla de márgenes comerciales, **entonces** el sistema presenta para cada artículo vendido que cuente con lotes costeados: Producto, Marca, Categoría, Vendido (unidades), Ingreso (S/), Costo (S/), Margen S/. y Margen % (calculado sobre el ingreso). Si no existen lotes con costo registrado en el período, la grilla despliega el mensaje informativo «Sin datos de costo en el período. Registra el costo unitario al ingresar mercadería para ver el margen.».
2. **Dado que** un producto registró ventas a un precio inferior a su costo de adquisición (margen negativo o venta a pérdida), **cuando** se renderiza la grilla analítica, **entonces** el sistema resalta visualmente la fila con alerta destacada en color rojo y signo negativo, advirtiendo de forma inmediata la anomalía tarifaria.
3. **Dado que** el usuario consulta la rentabilidad del catálogo en pantalla, **cuando** se renderiza la grilla de margen, **entonces** el sistema presenta los registros ordenados de forma predeterminada por ganancia monetaria descendente proveniente de la consulta de backend, con encabezados tabulares fijos sin ordenamiento interactivo en el cliente.
4. **Dado que** el usuario interactúa con la grilla de rentabilidad comercial, **cuando** revisa los valores en pantalla, **entonces** la interfaz satisface las directrices visuales, diseño y microcopy especificados en UI-019 (Reportes Analíticos y PDF) del Catálogo de Interfaces (DOC-ANEXO-B).

**Reglas de negocio aplicables:** 
- RN-14 (Actualización de Valorización de Inventario)

**Dependencias:**
- Requiere `HU-VEN-01` y `HU-INV-01` (ventas y costo promedio para margen de ganancia).

---

### HU-REP-08 · Reportes – Ver mermas agrupadas por motivo

| Identificador | Épica | Prioridad MoSCoW | Estimación | Release | Sprint |
|:---:|:---:|:---:|:---:|:---:|:---:|
| HU-REP-08 | EPIC-REP | Should have | 3 pts | REL-3 | SPR-3 |

**Como** Administrador o Gerente del minimarket,  
**quiero** consultar un reporte consolidado que clasifique las pérdidas monetarias y físicas de mercadería según el motivo de baja registrado (vencimiento, deterioro físico, merma operativa o descarte),  
**para** identificar los principales focos de fuga de valor en la tienda, auditar la gestión de almacenamiento y evaluar acciones correctivas o reclamos formales ante proveedores.

**Justificación de prioridad:** Funcionalidad importante para el control de pérdidas (Should have); permite diagnosticar las causas estructurales de merma y reducir los costos ocultos por desperdicio de productos perecibles en el Release 3.

**Criterios de aceptación:**
1. **Dado que** el usuario selecciona un rango temporal y genera el reporte de mermas, **cuando** la pantalla presenta los resultados, **entonces** el sistema exhibe un desglose analítico en grilla con cabecera roja agrupando las bajas según los 6 motivos del sistema: «Vencido», «Dañado», «Robo o faltante», «Consumo interno», «Error de registro» y «Otro», indicando para cada causa las columnas Motivo, N° Bajas, Cantidad Total y Costo Valorizado.
2. **Dado que** el usuario inspecciona el costo valorizado de las bajas, **cuando** el sistema liquida las partidas registradas, **entonces** calcula el valor monetario de la merma tomando el costo unitario del lote de compra, o el costo promedio del producto, o S/ 0.00 en caso de no registrarse costo en el ingreso.
3. **Dado que** en el período evaluado no se produjeron bajas para una o más causales de merma, **cuando** se compila el reporte, **entonces** el sistema refleja cero incidencias y costo S/ 0.00 para dichas categorías, conservando la integridad de las sumas totales.
4. **Dado que** el usuario interactúa con la grilla y representaciones gráficas de mermas, **cuando** consulta el análisis en pantalla, **entonces** la interfaz satisface las directrices visuales, diseño y microcopy especificados en UI-019 (Reportes Analíticos y PDF) del Catálogo de Interfaces (DOC-ANEXO-B).
5. **Dado que** no existen mermas registradas en absoluto durante el período consultado, **cuando** se genera el reporte, **entonces** el sistema presenta un estado vacío explícito con el mensaje «No hay bajas de inventario en el período seleccionado».

**Reglas de negocio aplicables:** 
- N/A.

**Dependencias:**
- Requiere `HU-INV-02` (bajas registradas para reporte de mermas).

---

### HU-REP-09 · Reportes – Exportar reportes en PDF

| Identificador | Épica | Prioridad MoSCoW | Estimación | Release | Sprint |
|:---:|:---:|:---:|:---:|:---:|:---:|
| HU-REP-09 | EPIC-REP | Could have | 3 pts | REL-3 | SPR-3 |

**Como** Administrador o Gerente del minimarket,  
**quiero** descargar un documento en formato PDF estructurado y paginado con la información consolidada de los reportes generados en pantalla,  
**para** disponer de un respaldo físico o digital formal para reuniones de directorio, acervo administrativo o sustento ante supervisiones externas.

**Justificación de prioridad:** Funcionalidad conveniente de distribución documental (Could have); brinda versatilidad y portabilidad a la información gerencial, aunque la visualización y supervisión operativa se satisfacen plenamente en pantalla dentro del Release 3.

**Criterios de aceptación:**
1. **Dado que** el usuario se encuentra visualizando un reporte analítico en pantalla con datos consultados, **cuando** pulsa la acción «Descargar PDF», **entonces** el sistema compila la información y genera un archivo de documento portátil (PDF) descargable en el navegador, incorporando el membrete del minimarket, fecha de emisión y el rango temporal consultado.
2. **Dado que** el reporte contiene múltiples secciones analíticas (resumen financiero, ventas por día, medios de pago, ranking de rotación y mermas), **cuando** se compila el documento, **entonces** el sistema pagina automáticamente el contenido, manteniendo encabezados claros, estilos tipográficos uniformes y saltos de página ordenados.
3. **Dado que** la compilación del documento se encuentra en progreso, **cuando** el usuario acciona la descarga, **entonces** el sistema exhibe un indicador visual de procesamiento y deshabilita temporalmente el botón para prevenir descargas duplicadas involuntarias.
4. **Dado que** el usuario interactúa con el botón de exportación y la previsualización documental, **cuando** utiliza el módulo, **entonces** la interfaz satisface las directrices visuales, diseño y microcopy especificados en UI-019 (Reportes Analíticos y PDF) del Catálogo de Interfaces (DOC-ANEXO-B).

**Reglas de negocio aplicables:** 
- N/A.

**Dependencias:**
- Requiere `HU-REP-01` (reporte estructurado para exportación a PDF).