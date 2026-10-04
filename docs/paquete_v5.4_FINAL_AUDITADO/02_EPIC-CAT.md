---
Código de documento: DOC-PLAN-03-02
Título: Backlog de Producto — EPIC-CAT: Catálogos y Clientes
Versión: 5.1
Fecha: 2026-10-04
Elaborado por: Colonia Infantas, Walter
Revisado por: Angeles Pérez, Jhonny
Estado: Aprobado
Propósito: Especificación de requisitos e historias de usuario de la épica de Catálogos Maestros y Clientes
Documentos relacionados: DOC-PLAN-01, DOC-PLAN-02, DOC-PLAN-03-00, DOC-PLAN-08, DOC-ANEXO-B
---

# EPIC-CAT: Catálogos y Clientes

**Objetivo de negocio (OBJ-02):** Centralizar la administración estructurada y unificada del catálogo maestro de productos, categorías taxonómicas, directorio de proveedores y cartera de clientes, asegurando la integridad, consistencia y disponibilidad de la información base requerida por los módulos de abastecimiento, inventario, punto de venta y reportería.

---

## 1. Sub-dominio: Taxonomía de Categorías de Productos

### HU-CAT-01 · Categorías – Ver lista de categorías de productos

| Identificador | Épica | Prioridad MoSCoW | Estimación | Release | Sprint |
|:---:|:---:|:---:|:---:|:---:|:---:|
| HU-CAT-01 | EPIC-CAT | Must have | 1 pt | REL-1 | SPR-1 |

**Como** Almacenero o Administrador del minimarket,  
**quiero** visualizar la lista completa y organizada de categorías de productos registradas en el sistema,  
**para** conocer la estructura taxonómica de las mercaderías y clasificar con exactitud los artículos durante la recepción e inventario.

**Justificación de prioridad:** Funcionalidad núcleo esencial (Must have); permite consultar los rubros base del catálogo necesarios antes de listar o crear productos específicos. **Constituye la historia pivote oficial de estimación del proyecto (1 punto de historia = 2.0 horas netas de esfuerzo de construcción y verificación)**.

**Criterios de aceptación:**
1. **Dado que** un colaborador habilitado (Almacenero o Administrador) accede a la sección de categorías de productos, **cuando** el sistema carga la pantalla principal del módulo, **entonces** presenta la lista completa de categorías registradas.
2. **Dado que** el minimarket dispone de una nómina extensa de familias de artículos, **cuando** el usuario introduce un término en la barra de búsqueda rápida, **entonces** el sistema filtra de forma inmediata la grilla mostrando las coincidencias exactas o parciales.
3. **Dado que** el usuario consulta las categorías comerciales, **cuando** interactúa con la lista, filtros y botones de navegación, **entonces** la interfaz satisface integralmente los lineamientos visuales, indicadores y microcopy especificados en UI-006 (Catálogo de Categorías) del Catálogo de Interfaces (DOC-ANEXO-B).
4. **Dado que** la búsqueda no coincide con ninguna categoría registrada, **cuando** se actualiza la grilla, **entonces** el sistema presenta un estado vacío explícito con el mensaje «No se encontraron resultados».

**Reglas de negocio aplicables:** 
- N/A

**Dependencias:**
- Requiere `HU-CAT-02` (categoría creada previamente).

---

### HU-CAT-02 · Categorías – Crear nueva categoría de productos

| Identificador | Épica | Prioridad MoSCoW | Estimación | Release | Sprint |
|:---:|:---:|:---:|:---:|:---:|:---:|
| HU-CAT-02 | EPIC-CAT | Must have | 2 pts | REL-1 | SPR-1 |

**Como** Administrador o Almacenero del minimarket,  
**quiero** registrar una nueva categoría de productos en el catálogo maestro,  
**para** clasificar y organizar las nuevas familias de mercadería que se incorporen al surtido del establecimiento comercial.

**Justificación de prioridad:** Funcionalidad crítica de configuración inicial (Must have); prerrequisito bloqueante para el alta de productos en el sistema, ya que ningún producto puede registrarse sin estar asociado a una categoría válida.

**Criterios de aceptación:**
1. **Dado que** el usuario completa el formulario de registro introduciendo una denominación de categoría inédita, **cuando** presiona el botón «Guardar Categoría», **entonces** el sistema crea la nueva categoría de forma exitosa, la incorpora al catálogo activo y actualiza la lista disponible al instante.
2. **Dado que** el usuario intenta registrar una categoría, **cuando** ingresa un nombre que ya se encuentra registrado previamente en el sistema (sin distinguir mayúsculas de minúsculas), **entonces** el sistema rechaza el guardado y muestra un mensaje de advertencia informando sobre la duplicidad del rubro.
3. **Dado que** el colaborador interactúa con el formulario de alta, **cuando** introduce datos y valida la operación, **entonces** la interfaz responde estrictamente a la estructura de campos, validaciones y diseño descritos en UI-006 del Catálogo de Interfaces (DOC-ANEXO-B).

**Reglas de negocio aplicables:** 
- N/A

**Dependencias:**
- Requiere `HU-AUTH-01` (precedencia lógica del backlog).

---

### HU-CAT-03 · Categorías – Editar nombre de categoría

| Identificador | Épica | Prioridad MoSCoW | Estimación | Release | Sprint |
|:---:|:---:|:---:|:---:|:---:|:---:|
| HU-CAT-03 | EPIC-CAT | Should have | 1 pt | REL-3 | SPR-3 |

**Como** Administrador o Almacenero del minimarket,  
**quiero** modificar el nombre de una categoría de productos existente,  
**para** subsanar imprecisiones tipográficas, actualizar denominaciones comerciales o reorganizar rubros de productos sin perder el historial de mercadería.

**Justificación de prioridad:** Funcionalidad recomendada de mantenimiento de datos (Should have); programada para el Release 3 para la administración continua del catálogo, permitiendo correcciones autónomas desde la aplicación.

**Criterios de aceptación:**
1. **Dado que** el usuario selecciona una categoría previamente registrada y actualiza su denominación por un nombre válido y no duplicado, **cuando** guarda los cambios, **entonces** el sistema actualiza la ficha de la categoría y todos los productos vinculados reflejan de forma automática la nueva denominación sin perder sus asociaciones.
2. **Dado que** el usuario está editando una categoría, **cuando** borra el contenido dejando el nombre en blanco o digita un nombre que ya pertenece a otra categoría registrada, **entonces** el sistema bloquea la actualización y le exige ingresar una denominación válida y no repetida.
3. **Dado que** el colaborador ejecuta la edición en el panel de categorías, **cuando** interactúa con el formulario modal y confirma la modificación, **entonces** la interfaz expone los controles, mensajes y estilos detallados en UI-006 del Catálogo de Interfaces (DOC-ANEXO-B).

**Reglas de negocio aplicables:** 
- N/A

**Dependencias:**
- Requiere `HU-CAT-02` (categoría existente para edición).

---

### HU-CAT-04 · Categorías – Eliminar categoría sin productos

| Identificador | Épica | Prioridad MoSCoW | Estimación | Release | Sprint |
|:---:|:---:|:---:|:---:|:---:|:---:|
| HU-CAT-04 | EPIC-CAT | Could have | 2 pts | REL-3 | SPR-3 |

**Como** Administrador del minimarket,  
**quiero** eliminar definitivamente aquellas categorías que fueron creadas por error y que no cuentan con ningún producto asociado,  
**para** mantener una taxonomía depurada, libre de rubros obsoletos o vacíos en el catálogo comercial.

**Justificación de prioridad:** Funcionalidad deseable de higiene de datos (Could have); no interrumpe el flujo de ventas ni compras; se restringe de forma exclusiva al Administrador para resguardar la consistencia estructural del negocio.

**Criterios de aceptación:**
1. **Dado que** una categoría no posee ningún producto vinculado en el catálogo, **cuando** el Administrador pulsa el botón de eliminación y aprueba el diálogo de confirmación, **entonces** el sistema suprime la categoría de forma permanente y la retira de todas las listas de selección.
2. **Dado que** una categoría tiene uno o más productos asignados (activos o inactivos), **cuando** el Administrador intenta eliminarla, **entonces** el sistema bloquea terminantemente la acción y despliega un mensaje notificando que no se pueden eliminar categorías con artículos vinculados, instruyendo al usuario a reasignar los productos antes de intentar su borrado.
3. **Dado que** el Administrador ejecuta la acción de retiro, **cuando** atiende los mensajes preventivos y confirma la eliminación, **entonces** la interacción visual satisface las advertencias, colores y flujos definidos en UI-006 del Catálogo de Interfaces (DOC-ANEXO-B).

**Reglas de negocio aplicables:** 
- N/A

**Dependencias:**
- Requiere `HU-CAT-02` (categoría sin artículos asociados para eliminación).

---

## 2. Sub-dominio: Directorio de Proveedores Comerciales (Parte 1)

### HU-PROV-01 · Proveedores – Ver lista de proveedores

| Identificador | Épica | Prioridad MoSCoW | Estimación | Release | Sprint |
|:---:|:---:|:---:|:---:|:---:|:---:|
| HU-PROV-01 | EPIC-CAT | Must have | 2 pts | REL-2 | SPR-2 |

**Como** Almacenero o Administrador del minimarket,  
**quiero** consultar el directorio consolidado de empresas proveedoras registradas en el sistema,  
**para** verificar su información de contacto, fiscal y de habilitación comercial al gestionar solicitudes de abastecimiento y pedidos de compra.

**Justificación de prioridad:** Requisito indispensable de aprovisionamiento (Must have); programado para el Release 2 para brindar visibilidad completa a la gestión de reposiciones formalizadas.

**Criterios de aceptación:**
1. **Dado que** un colaborador con perfil autorizado accede al módulo de proveedores, **cuando** carga la pantalla principal, **entonces** el sistema expone una grilla organizada con el RUC oficial de 11 dígitos, razón social de la empresa proveedora, canal de contacto principal (teléfono o correo electrónico) y estado de habilitación operativa (Activo o Inactivo).
2. **Dado que** la empresa mantiene relaciones comerciales con múltiples proveedores, **cuando** el operador introduce un criterio de búsqueda por razón social o número de RUC, **entonces** el sistema filtra los registros de inmediato presentando únicamente los proveedores coincidentes.
3. **Dado que** el operador interactúa con el directorio de proveedores, **cuando** visualiza la grilla, aplica filtros o revisa los indicadores de estado, **entonces** la interfaz satisface íntegramente las pautas visuales y microcopy descritos en UI-008 (Directorio de Proveedores) del Catálogo de Interfaces (DOC-ANEXO-B).
4. **Dado que** la búsqueda no coincide con ningún proveedor registrado, **cuando** se ejecuta el filtro, **entonces** el sistema presenta un estado vacío explícito con el mensaje «No se encontraron resultados».

**Reglas de negocio aplicables:** 
- N/A

**Dependencias:**
- Requiere `HU-PROV-02` (proveedor registrado en catálogo).

---

### HU-PROV-02 · Proveedores – Registrar nuevo proveedor

| Identificador | Épica | Prioridad MoSCoW | Estimación | Release | Sprint |
|:---:|:---:|:---:|:---:|:---:|:---:|
| HU-PROV-02 | EPIC-CAT | Must have | 3 pts | REL-1 | SPR-1 |

**Como** Administrador o Almacenero del minimarket,  
**quiero** dar de alta a una empresa proveedora en el sistema validando sus datos tributarios de forma oficial,  
**para** habilitarla formalmente en el sistema y permitir la recepción de mercadería y vinculación de comprobantes de compra a su nombre.

**Justificación de prioridad:** Funcionalidad crítica de aprovisionamiento (Must have); prerrequisito obligatorio para el proceso de entrada de mercadería (`HU-INV-01`), ya que toda recepción física exige asociar un proveedor habilitado.

**Criterios de aceptación:**
1. **Dado que** el usuario digita un número de RUC de 11 dígitos numéricos correspondiente a una empresa formal (excluyendo números que inicien con 10) y la razón social, **cuando** solicita el registro en el formulario, **entonces** el sistema consulta la API de SUNAT, valida el formato de la numeración, la no duplicidad del documento y **bloquea obligatoriamente el alta si el estado fiscal es distinto a ACTIVO o la condición es distinta a HABIDO**, previniendo el registro de proveedores inhabilitados.
2. **Dado que** los datos fiscales han sido validados satisfactoriamente y el usuario completa la información de contacto comercial, **cuando** presiona el botón «Guardar Proveedor», **entonces** el sistema registra la ficha del proveedor en estado Activo y la deja inmediatamente habilitada para operaciones de compra y recepción.
3. **Dado que** el usuario ingresa un número de RUC que ya pertenece a otro proveedor registrado, un RUC con prefijo 10 o un documento tributario que no se encuentre en condición activa y habida, **cuando** intenta procesar el registro, **entonces** el sistema rechaza la operación e indica claramente la causal de rechazo impidiendo la creación de fichas inconsistentes.
4. **Dado que** el usuario opera sobre el formulario de alta de proveedores, **cuando** visualiza los campos, etiquetas de validación y confirmaciones, **entonces** la pantalla satisface integralmente los estándares de presentación y diseño de UI-008 del Catálogo de Interfaces (DOC-ANEXO-B).

**Reglas de negocio aplicables:** 
- N/A

**Dependencias:**
- Requiere `HU-AUTH-01` (control de acceso administrativo).

### HU-PROV-03 · Proveedores – Editar datos de un proveedor

| Identificador | Épica | Prioridad MoSCoW | Estimación | Release | Sprint |
|:---:|:---:|:---:|:---:|:---:|:---:|
| HU-PROV-03 | EPIC-CAT | Should have | 2 pts | REL-3 | SPR-3 |

**Como** Administrador o Almacenero del minimarket,  
**quiero** actualizar la información de contacto o corregir datos de una empresa proveedora registrada,  
**para** mantener al día los canales de comunicación y asegurar la coordinación logística del abastecimiento de mercaderías.

**Justificación de prioridad:** Funcionalidad recomendada de mantenimiento (Should have); programada para el Release 3 para la administración continua de la cartera de proveedores comerciales, permitiendo subsanar variaciones de números de teléfono, correos o nombres comerciales sin asistencia técnica.

**Criterios de aceptación:**
1. **Dado que** un colaborador con perfil autorizado accede a la ficha de un proveedor existente, **cuando** actualiza los datos del canal de contacto (número telefónico o correo electrónico) y pulsa «Guardar Cambios», **entonces** el sistema actualiza de inmediato el registro en el directorio comercial y refleja la nueva información en las consultas operativas.
2. **Dado que** el colaborador intenta modificar el RUC de una empresa proveedora, **cuando** ingresa una numeración que no cumple con el formato reglamentario de 11 dígitos numéricos o que coincide con el RUC de otro proveedor ya existente, **entonces** el sistema bloquea la actualización y emite una alerta indicando el error de formato o la colisión de identidad tributaria.
3. **Dado que** el colaborador opera sobre el formulario de edición de proveedores, **cuando** visualiza los campos precargados, controles de guardado y avisos de confirmación, **entonces** la interfaz satisface integralmente los estándares visuales, microcopy e indicadores de estado detallados en UI-008 (Directorio de Proveedores) del Catálogo de Interfaces (DOC-ANEXO-B).

**Reglas de negocio aplicables:** 
- N/A

**Dependencias:**
- Requiere `HU-PROV-02` (proveedor registrado para edición).

---

### HU-PROV-04 · Proveedores – Desactivar o reactivar proveedor

| Identificador | Épica | Prioridad MoSCoW | Estimación | Release | Sprint |
|:---:|:---:|:---:|:---:|:---:|:---:|
| HU-PROV-04 | EPIC-CAT | Should have | 2 pts | REL-2 | SPR-2 |

**Como** Administrador del minimarket,  
**quiero** suspender o reactivar la condición operativa de una empresa proveedora en el sistema,  
**para** impedir la emisión de pedidos o compras a empresas dadas de baja o con observaciones contractuales sin destruir su historial comercial ni alterar los registros contables precedentes.

**Justificación de prioridad:** Salvaguarda administrativa de gobernanza comercial (Should have); programada para el Release 2 para brindar control estricto sobre las empresas autorizadas al momento de habilitar el flujo formal de solicitudes de reposición.

**Criterios de aceptación:**
1. **Dado que** el Administrador identifica a una empresa proveedora con la que se ha concluido el vínculo comercial, **cuando** pulsa la opción «Desactivar» y ratifica la instrucción en el diálogo de advertencia, **entonces** el sistema conmuta su estado a Inactivo y lo retira de manera automática de los desplegables de selección para solicitudes de reposición y órdenes de compra.
2. **Dado que** una empresa proveedora suspendida reanuda relaciones comerciales satisfactorias con el establecimiento, **cuando** el Administrador ubica su ficha en el directorio y presiona «Reactivar», **entonces** el sistema restituye su estado a Activo y la deja inmediatamente habilitada para nuevas transacciones de abastecimiento.
3. **Dado que** el Administrador gestiona la suspensión o reactivación en la pantalla del directorio, **cuando** confirma la instrucción y revisa el cambio de estado en la grilla, **entonces** la interfaz responde con las directrices visuales, alertas y comportamiento especificados en UI-008 del Catálogo de Interfaces (DOC-ANEXO-B).

**Reglas de negocio aplicables:** 
- N/A

**Dependencias:**
- Requiere `HU-PROV-02` (proveedor registrado para cambio de estado).

---

## 3. Sub-dominio: Cartera de Clientes

### HU-CLI-01 · Clientes – Listar clientes registrados

| Identificador | Épica | Prioridad MoSCoW | Estimación | Release | Sprint |
|:---:|:---:|:---:|:---:|:---:|:---:|
| HU-CLI-01 | EPIC-CAT | Should have | 2 pts | REL-3 | SPR-3 |

**Como** Administrador o Gerente del minimarket,  
**quiero** consultar la nómina completa y organizada de los clientes registrados en la plataforma,  
**para** supervisar la base de compradores del establecimiento, auditar sus datos de contacto y obtener información para futuras iniciativas comerciales y de fidelización.

**Justificación de prioridad:** Funcionalidad analítica y de fidelización (Should have); programada para el Release 3 para enriquecer la toma de decisiones comerciales una vez que el flujo principal de ventas y caja se encuentre consolidado.

**Criterios de aceptación:**
1. **Dado que** un colaborador con perfil autorizado (Administrador o Gerente) ingresa a la sección de clientes, **cuando** el sistema carga la pantalla principal del módulo, **entonces** expone una grilla con los nombres y apellidos o razón social, número de documento de identidad (DNI de 8 dígitos), correo electrónico de contacto y la cantidad total de compras (número de transacciones) acumuladas por cada cliente.
2. **Dado que** la empresa dispone de una cartera extensa de compradores, **cuando** el Administrador o Gerente ingresa un texto en la barra de búsqueda rápida por nombre o número de documento, **entonces** el sistema filtra la lista al instante presentando únicamente las coincidencias pertinentes.
3. **Dado que** el Administrador o Gerente interactúa con el visor de compradores, **cuando** visualiza la grilla, aplica filtros de búsqueda o revisa los acumulados comerciales, **entonces** la pantalla cumple rigurosamente las pautas de presentación, paginación y microcopy definidas en UI-009 (Directorio de Clientes) del Catálogo de Interfaces (DOC-ANEXO-B).
4. **Dado que** la búsqueda no coincide con ningún cliente registrado, **cuando** se actualiza la lista, **entonces** el sistema presenta un estado vacío explícito con el mensaje «No se encontraron resultados».

**Reglas de negocio aplicables:** 
- N/A

**Dependencias:**
- Requiere `HU-CLI-02` (clientes registrados previamente en el punto de venta).

---

### HU-CLI-02 · Clientes – Registrar cliente automáticamente al vender

| Identificador | Épica | Prioridad MoSCoW | Estimación | Release | Sprint |
|:---:|:---:|:---:|:---:|:---:|:---:|
| HU-CLI-02 | EPIC-CAT | Must have | 3 pts | REL-1 | SPR-1 |

**Como** Vendedor del minimarket,  
**quiero** registrar o asociar con agilidad la identificación del cliente (DNI o RUC) durante el flujo de cobro en el punto de venta,  
**para** emitir comprobantes de pago válidos conforme a los requerimientos tributarios oficiales sin demorar ni entorpecer el despacho de la fila de atención.

**Justificación de prioridad:** Funcionalidad crítica indispensable para el producto mínimo viable (Must have); mandatoria por regulación fiscal para la emisión de boletas identificadas y facturas comerciales en el mostrador del negocio.

**Criterios de aceptación:**
1. **Dado que** el vendedor está formalizando una venta mediante Boleta de Venta (formato SUNAT), **cuando** digita un número de DNI de 8 dígitos numéricos no registrado con anterioridad y el nombre del comprador, **entonces** el sistema registra de forma automática la ficha del nuevo cliente en el directorio y la asocia de forma atómica a la venta en curso sin salir del flujo de cobro.
2. **Dado que** el comprador solicita la emisión de una Factura comercial, **cuando** el vendedor digita el número de RUC de 11 dígitos, la razón social y la dirección fiscal de la empresa adquirente, **entonces** el sistema vincula inmediatamente dichos datos fiscales al comprobante de venta generado.
3. **Dado que** el cliente que se acerca a caja ya se encuentra registrado previamente en el minimarket, **cuando** el vendedor digita su número de documento en la casilla correspondiente, **entonces** el sistema autocompleta de inmediato sus datos personales en pantalla evitando duplicidades en el directorio.
4. **Dado que** el vendedor atiende la captura de datos en el terminal de venta, **cuando** interactúa con las casillas de identificación del comprador y los mensajes informativos, **entonces** la interfaz satisface integralmente los estándares visuales y de interacción descritos en UI-014 (Terminal de Punto de Venta POS) del Catálogo de Interfaces (DOC-ANEXO-B).

**Reglas de negocio aplicables:** 
- N/A

**Dependencias:**
- Requiere `HU-VEN-01` (transacción de venta en mostrador para captura de cliente).

---

### HU-CLI-03 · Clientes – Editar correo electrónico de cliente

| Identificador | Épica | Prioridad MoSCoW | Estimación | Release | Sprint |
|:---:|:---:|:---:|:---:|:---:|:---:|
| HU-CLI-03 | EPIC-CAT | Could have | 1 pt | REL-3 | SPR-3 |

**Como** Administrador o SuperAdmin del minimarket,  
**quiero** modificar o corregir la dirección de correo electrónico registrada para un cliente en su ficha del directorio,  
**para** garantizar el despacho efectivo y sin rebotes de sus comprobantes de pago electrónicos y notas de venta digitales en caso de cambio de casilla digital.

**Justificación de prioridad:** Funcionalidad accesoria de servicio postventa (Could have); programada para el Release 3 para optimizar la comunicación digital; totalmente prescindible para la operación diaria presencial del minimarket.

**Criterios de aceptación:**
1. **Dado que** un cliente solicita formalmente la actualización de su casilla digital, **cuando** el usuario autorizado localiza su registro en el directorio de clientes, modifica la dirección de correo electrónico y guarda los cambios, **entonces** el sistema actualiza de inmediato la ficha del comprador para los futuros despachos de comprobantes digitales.
2. **Dado que** el usuario digita la nueva dirección, **cuando** introduce una estructura que no corresponde a un formato de correo electrónico válido (omisión del símbolo arroba o dominio ausente), **entonces** el sistema resalta el campo con borde de alerta, bloquea el guardado y exige una estructura digital reglamentaria.
3. **Dado que** el colaborador efectúa la corrección en la vista de clientes, **cuando** atiende el formulario modal y valida la actualización, **entonces** la pantalla satisface los componentes y textos informativos estipulados en UI-009 del Catálogo de Interfaces (DOC-ANEXO-B).

**Reglas de negocio aplicables:** 
- N/A

**Dependencias:**
- Requiere `HU-CLI-02` (cliente registrado para actualización de datos).

## 4. Sub-dominio: Catálogo Maestro de Productos

### HU-PROD-01 · Productos – Ver catálogo completo de productos

| Identificador | Épica | Prioridad MoSCoW | Estimación | Release | Sprint |
|:---:|:---:|:---:|:---:|:---:|:---:|
| HU-PROD-01 | EPIC-CAT | Must have | 3 pts | REL-1 | SPR-1 |

**Como** Almacenero o Administrador del minimarket,  
**quiero** consultar el catálogo maestro consolidado de productos comerciales,  
**para** verificar precios de venta, costos de adquisición de referencia y existencias totales al recepcionar mercaderías o realizar supervisiones físicas en bodega.

**Justificación de prioridad:** Funcionalidad núcleo esencial para el producto mínimo viable (Must have); consulta obligatoria para la gestión de existencias y control físico en almacén. En mostrador, el personal de ventas consulta productos exclusivamente a través del terminal POS (`HU-VEN-01`).

**Criterios de aceptación:**
1. **Dado que** un colaborador con perfil autorizado (Almacenero o Administrador) ingresa al módulo de catálogo maestro, **cuando** carga la vista principal, **entonces** el sistema presenta la relación íntegra de artículos registrados mostrando su código de barras comercial, denominación del producto, marca del fabricante, categoría asignada, precio de venta al público, costo promedio de adquisición referencial y stock total disponible.
2. **Dado que** el minimarket mantiene cientos de artículos en su catálogo comercial, **cuando** el usuario introduce un texto en la barra de búsqueda rápida por nombre o código de barras, **entonces** el sistema filtra los resultados al instante presentando las coincidencias pertinentes.
3. **Dado que** el usuario consulta el inventario del catálogo, **cuando** interactúa con las filas de la grilla, buscadores y controles de visualización, **entonces** la pantalla satisface integralmente los componentes visuales, indicadores de estado y microcopy de UI-007 (Catálogo de Productos y Alertas) del Catálogo de Interfaces (DOC-ANEXO-B).
4. **Dado que** la búsqueda no arroja coincidencias en el catálogo, **cuando** se ejecuta el filtro, **entonces** el sistema presenta un estado vacío explícito con el mensaje «No se encontraron resultados».

**Reglas de negocio aplicables:** 
- N/A

**Dependencias:**
- Requiere `HU-PROD-02` (productos registrados en catálogo).

---

### HU-PROD-02 · Productos – Registrar nuevo producto en el catálogo

| Identificador | Épica | Prioridad MoSCoW | Estimación | Release | Sprint |
|:---:|:---:|:---:|:---:|:---:|:---:|
| HU-PROD-02 | EPIC-CAT | Must have | 5 pts | REL-1 | SPR-1 |

**Como** Administrador o Almacenero del minimarket,  
**quiero** dar de alta un nuevo producto en el catálogo maestro definiendo sus datos descriptivos, clasificación comercial y parámetros de control preventivo,  
**para** habilitar su recepción física en el almacén y permitir su posterior venta en el punto de atención al cliente.

**Justificación de prioridad:** Funcionalidad crítica de aprovisionamiento (Must have); bloqueador operativo directo: si un producto no existe formalmente en el catálogo maestro, el almacenero no puede registrar entradas de mercadería ni generar inventario en bodega.

**Criterios de aceptación:**
1. **Dado que** el usuario completa el formulario de registro ingresando código de barras comercial, nombre descriptivo, marca, categoría reglamentaria y precio de venta unitario, **cuando** presiona el botón «Guardar Producto», **entonces** el sistema crea la ficha del artículo en estado Activo con stock físico en cero y costo de adquisición inicial en cero (el cual se actualizará automáticamente conforme ingresen lotes reales al almacén).
2. **Dado que** el usuario introduce un código de barras que ya se encuentra asignado a otro producto registrado en el minimarket, **cuando** intenta procesar el alta, **entonces** el sistema deniega el guardado y emite un mensaje de error notificando la duplicidad del código comercial.
3. **Dado que** el usuario diligencia la ficha técnica del artículo, **cuando** revisa los parámetros de control, **entonces** el sistema inicializa el umbral de stock mínimo en blanco (sin límite predeterminado), permitiendo al usuario ingresar un valor de forma opcional y permite marcar si el producto maneja fecha de caducidad para activar el control preventivo de alertas (RN-06).
4. **Dado que** el usuario interactúa con la ventana de registro de productos, **cuando** completa los campos requeridos y confirma la operación, **entonces** la pantalla satisface rigurosamente los lineamientos de diseño, validaciones numéricas y formato definidos en UI-007 del Catálogo de Interfaces (DOC-ANEXO-B).

**Reglas de negocio aplicables:** 
- RN-06 (Alerta de Stock Mínimo)

**Dependencias:**
- Requiere `HU-CAT-02` (categoría base para clasificar el producto).

---

### HU-PROD-03 · Productos – Escanear código de barras para registrar producto

| Identificador | Épica | Prioridad MoSCoW | Estimación | Release | Sprint |
|:---:|:---:|:---:|:---:|:---:|:---:|
| HU-PROD-03 | EPIC-CAT | Could have | 5 pts | REL-3 | SPR-3 |

**Como** Almacenero del minimarket,  
**quiero** capturar el código de barras comercial mediante el lector óptico durante el alta de un producto e importar sus datos descriptivos básicos desde bases de datos externas,  
**para** acelerar la catalogación de nuevos artículos sin necesidad de transcribir manualmente los empaques comerciales.

**Justificación de prioridad:** Característica deseable de aceleración operativa (Could have); optimiza los tiempos de ingreso de nuevos productos al catálogo en el Release 3, manteniéndose el alta manual por teclado como mecanismo plenamente asegurado desde el Sprint 1.

**Criterios de aceptación:**
1. **Dado que** el usuario tiene abierto el formulario de nuevo producto, **cuando** acciona la lectora óptica sobre el código de barras impreso en el empaque de la mercadería, **entonces** el sistema captura al instante la serie numérica en el campo de código de barras.
2. **Dado que** el código de barras ha sido capturado, **cuando** el sistema consulta los servicios de catalogación comercial externos disponibles, **entonces** autorrellena de manera automática el nombre comercial del artículo, la marca del fabricante y propone la categoría sugerida, permitiendo al usuario su revisión y ajuste antes de confirmar.
3. **Dado que** la consulta externa no encuentra coincidencias o no se dispone de conexión con los directorios comerciales exteriores, **cuando** concluye la búsqueda, **entonces** el sistema conserva el código capturado y deja los campos de texto habilitados para el ingreso manual directo sin impedir el registro.
4. **Dado que** el operador interactúa con el flujo de escaneo y consulta asistida, **cuando** visualiza los indicadores de búsqueda y autocompletado en pantalla, **entonces** la interfaz satisface integralmente las directrices de UI-007 del Catálogo de Interfaces (DOC-ANEXO-B).

**Reglas de negocio aplicables:** 
- N/A

**Dependencias:**
- Requiere `HU-PROD-02` (producto registrado para captura de código).

---

### HU-PROD-04 · Productos – Editar datos de un producto

| Identificador | Épica | Prioridad MoSCoW | Estimación | Release | Sprint |
|:---:|:---:|:---:|:---:|:---:|:---:|
| HU-PROD-04 | EPIC-CAT | Should have | 3 pts | REL-3 | SPR-3 |

**Como** Administrador o Almacenero del minimarket,  
**quiero** modificar los datos comerciales de un producto registrado (precio de venta, código de barras, denominación o umbral de stock mínimo),  
**para** reflejar oportunamente las variaciones de precios del mercado, corregir nomenclaturas o calibrar los umbrales de alerta de reposición sin desajustar el stock físico existente.

**Justificación de prioridad:** Funcionalidad recomendada de mantenimiento continuo (Should have); programada para el Release 3 para dotar de flexibilidad comercial al catálogo frente a alzas de precios mayoristas o rediseños de empaques.

**Criterios de aceptación:**
1. **Dado que** un colaborador con perfil autorizado accede a la edición de un producto y actualiza su precio de venta al público, **cuando** guarda la modificación, **entonces** el sistema actualiza la ficha del artículo y el nuevo precio rige de inmediato para todas las transacciones futuras en el punto de venta.
2. **Dado que** el usuario ajusta el valor del stock mínimo o datos informativos del producto, **cuando** confirma los cambios, **entonces** el sistema actualiza la configuración de alertas en la ficha maestra manteniendo estrictamente inalteradas las cantidades de stock real existentes en bodega.
3. **Dado que** el usuario opera sobre el formulario modal de edición, **cuando** interactúa con los controles, advertencias y botones de guardado, **entonces** la pantalla responde exactamente a los parámetros visuales, validaciones y microcopy detallados en UI-007 del Catálogo de Interfaces (DOC-ANEXO-B).

**Reglas de negocio aplicables:** 
- N/A

**Dependencias:**
- Requiere `HU-PROD-02` (ficha de producto para modificación).

---

### HU-PROD-05 · Productos – Desactivar o reactivar producto

| Identificador | Épica | Prioridad MoSCoW | Estimación | Release | Sprint |
|:---:|:---:|:---:|:---:|:---:|:---:|
| HU-PROD-05 | EPIC-CAT | Should have | 2 pts | REL-3 | SPR-3 |

**Como** Administrador o Almacenero del minimarket,  
**quiero** suspender temporalmente o reactivar la comercialización de un producto en el catálogo,  
**para** ocultar mercaderías descontinuadas o fuera de temporada sin eliminar su ficha ni vulnerar la integridad del historial de ventas y compras pasadas.

**Justificación de prioridad:** Funcionalidad de gobernanza de catálogo (Should have); mantiene un catálogo ágil y depurado para la venta en mostrador sin romper los vínculos históricos de supervisión contable.

**Criterios de aceptación:**
1. **Dado que** un producto no volverá a comercializarse temporal o permanentemente, **cuando** el usuario autorizado pulsa «Desactivar» y confirma la instrucción, **entonces** el sistema conmuta su estado a Inactivo y lo excluye automáticamente de las búsquedas en el terminal de venta y de los catálogos activos.
2. **Dado que** el establecimiento reanuda la compra y venta de un producto previamente suspendido, **cuando** el usuario ubica el registro y presiona «Reactivar», **entonces** el sistema restituye su condición a Activo dejándolo disponible de inmediato para recepciones en almacén y comercialización en caja.
3. **Dado que** el colaborador administra la disponibilidad del artículo, **cuando** atiende los diálogos de advertencia y revisa el cambio de estado en la grilla, **entonces** la interfaz satisface los lineamientos descritos en UI-007 del Catálogo de Interfaces (DOC-ANEXO-B).

**Reglas de negocio aplicables:** 
- N/A

**Dependencias:**
- Requiere `HU-PROD-02` (producto registrado para cambio de estado).

---

### HU-PROD-06 · Productos – Consultar productos próximos a vencer

| Identificador | Épica | Prioridad MoSCoW | Estimación | Release | Sprint |
|:---:|:---:|:---:|:---:|:---:|:---:|
| HU-PROD-06 | EPIC-CAT | Must have | 3 pts | REL-2 | SPR-2 |

**Como** Almacenero o Administrador del minimarket,  
**quiero** consultar un reporte preventivo consolidado de los lotes de mercadería con fechas de caducidad próximas o vencidas,  
**para** coordinar oportunamente promociones de liquidación, rotaciones de mercadería o bajas formales de inventario antes de que los productos representen un riesgo sanitario o pérdida comercial irreparable.

**Justificación de prioridad:** Control mandatorio sanitario y financiero (Must have); programado para el Release 2 como salvaguarda preventiva contra sanciones regulatorias y merma económica en góndola.

**Criterios de aceptación:**
1. **Dado que** un colaborador con perfil autorizado accede a la sección de control de vencimientos, **cuando** el sistema examina el inventario almacenado, **entonces** presenta un consolidado agrupado por producto (no por lote individual) mostrando el stock total próximo a vencer (próximos 30 días) y el stock ya vencido, junto con la fecha de vencimiento más próxima de cada producto, resaltando con distintivos de alerta visual roja aquellos que ya tengan cantidades caducadas.
2. **Dado que** un lote de mercadería ha superado su fecha límite de caducidad (un lote cuya fecha de caducidad coincide con la fecha en curso o es anterior queda bloqueado para la venta en el punto de venta desde la apertura del turno y debe canalizarse a bajas por vencimiento), **cuando** un vendedor intenta despachar dicho producto en el terminal de punto de venta, **entonces** el sistema bloquea de forma terminante la operación excluyendo el lote vencido e informando stock cero disponible para venta, en estricto cumplimiento de la prohibición de comercialización de productos caducados (RN-03, RN-19).
3. **Dado que** el usuario monitorea el panel preventivo de caducidades, **cuando** visualiza la grilla, aplica filtros por días de vigencia y examina los avisos de alerta, **entonces** la interfaz satisface los patrones de diseño, colores de advertencia y microcopy de UI-007 del Catálogo de Interfaces (DOC-ANEXO-B).

**Reglas de negocio aplicables:** 
- RN-03 (Prohibición de Comercialización de Vencidos)
- RN-19 (Prioridad de Despacho por Expiración FEFO y Bloqueo de Lotes Caducados)

**Dependencias:**
- Requiere `HU-INV-01` (lotes ingresados con fechas de vencimiento).