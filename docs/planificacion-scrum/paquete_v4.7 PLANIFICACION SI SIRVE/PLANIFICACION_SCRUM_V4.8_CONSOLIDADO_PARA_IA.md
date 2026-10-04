# EXPEDIENTE CONSOLIDADO DE PLANIFICACIÓN SCRUM (VERSIÓN 4.8 OFICIAL)

> **Propósito de este archivo:** Documento unificado preparado para análisis integral por Inteligencia Artificial (Claude, ChatGPT, etc.).
> **Versión:** 4.8 Definitiva Oficial · 0 términos prohibidos · Perspectiva a priori formal.
> **Parámetros Inmutables:** 72 HUs activas (251 pts) · 3 Sprints (240 h/sprint) · 363 tareas (502 h) · Presupuesto S/ 22,500.00.
> **Estrategia de Calidad y DoD:** Pruebas automatizadas aprobadas (paso 6) + verificación funcional independiente (Construye ≠ Verifica).

---

# ====================================================================
# DOCUMENTO OFICIAL: 00_Portada_Indice_y_Control_Documental.md
# ====================================================================

---
Código de documento: DOC-PLAN-00
Título: Planificación Scrum y Control Documental
Versión: 4.8
Fecha: 2026-10-03
Elaborado por: Angeles Pérez, Jhonny
Revisado por: Colonia Infantas, Walter
Estado: Aprobado
Propósito: Resumen ejecutivo y control del plan Scrum
Documentos relacionados: Todos los documentos de planificación (DOC-PLAN-01 a DOC-PLAN-11, DOC-ANEXO-A y DOC-ANEXO-B)
---

# 00. Resumen Ejecutivo y Control Documental

## Resumen de Cifras y Parámetros Planificados

| Métrica / Parámetro | Valor Oficial Planificado | Detalle Metodológico |
| :--- | :---: | :--- |
| **Épicas de Negocio** | **5 Épicas** | EPIC-SEG, EPIC-CAT, EPIC-INV, EPIC-VEN, EPIC-REP |
| **Historias de Usuario (HUs)** | **72 HU planificadas + 1 fuera de alcance** | Must have: 36 · Should have: 31 · Could have: 5 · Won't have: 1 |
| **Puntos de Historia Totales** | **251 pts** | Estimados con pivote HU-CAT-01 = 1 pt = 2 h-hombre (escala Fibonacci) |
| **Iteraciones (Sprints)** | **3 Sprints** | Duración: 2 semanas por sprint (6 semanas calendario, 10 días de trabajo c/u) |
| **Lanzamientos (Releases)** | **3 Releases** | REL-1 (MVP): SPR-1, 89 pts · REL-2: SPR-2, 90 pts · REL-3: SPR-3, 72 pts |
| **Capacidad Neta del Equipo** | **240 horas/sprint** | 6 Developers × 25 h/sem × 2 sem × 80 % contingencia neta (40 h c/u) |
| **Esfuerzo Total Desglosado** | **502 horas (363 tareas)** | 296 h Construcción (59.0 %) + 206 h Verificación QA (41.0 %) |
| **Presupuesto Estimado Total** | **S/ 22,500.00** | 6 semanas × S/ 625/sem × 6 devs (todo costo laboral; S/ 7,500.00 por sprint o release) |
| **Especificación de Interfaz** | **20 pantallas · 82 apartados de CA** | Anexo B (DOC-ANEXO-B); cada historia con pantalla incluye un CA-UI; trazabilidad en DOC-PLAN-11 |

## Cadena de Trazabilidad Metodológica Obligatoria
`Objetivo de Negocio` → `Épica` → `Historia de Usuario` → `Criterio de Aceptación (negocio y CA-UI → Pantalla del Anexo B)` → `Release` → `Sprint` → `Tarea (Construcción/QA)` → `Costo/Esfuerzo`

## Convenciones de Identificación y Priorización

| Elemento Scrum | Prefijo / Identificador | Rango / Ejemplo | Criterio de Uso |
| :--- | :---: | :---: | :--- |
| **Objetivos de Negocio** | `OBJ-nn` | OBJ-01 al OBJ-05 | Metas estratégicas del minimarket |
| **Épicas Funcionales** | `EPIC-XXX` | EPIC-SEG, EPIC-CAT, etc. | Macro-agrupadores de valor de negocio |
| **Historias de Usuario** | `HU-MOD-nn` | HU-AUTH-01, HU-VEN-01 | Requisitos funcionales en formato "Como / Quiero / Para" |
| **Iteraciones** | `SPR-n` | SPR-1 al SPR-3 | Timebox fijo de 2 semanas de desarrollo (10 días hábiles) |
| **Lanzamientos** | `REL-n` | REL-1 al REL-3 | Hitos de entrega de valor comercial e incrementos operativos |
| **Tareas Operativas** | `TAR-HU-...` | TAR-HU-AUTH-01-01 | Actividades técnicas de Construcción (1-5, 7) y Verificación (6, 8) |
| **Priorización MoSCoW** | `MoSCoW` | Must (4), Should (3), Could (2), Won't (1) | Nivel de criticidad para el negocio |

## Directorio Maestro de Documentación Scrum

| N° | Código de Documento | Título del Documento | Propósito / Alcance | Responsable |
| :---: | :---: | :--- | :--- | :--- |
| 01 | `DOC-PLAN-00` | [00. Resumen Ejecutivo y Control Documental](00_Portada_Indice_y_Control_Documental.md) | Resumen ejecutivo, cifras oficiales y directorio maestro | Angeles Pérez, Jhonny |
| 02 | `DOC-PLAN-01` | [01. Visión, Alcance y Stakeholders](01_Vision_Alcance_y_Stakeholders.md) | Propósito del sistema, matriz de roles y supuestos oficiales | Angeles Pérez, Jhonny |
| 03 | `DOC-PLAN-02` | [02. Equipo, Roles y Ceremonias](02_Equipo_Roles_y_Ceremonias.md) | Organización de los 6 developers, acuerdos, DoD, DoR y ceremonias | Angeles Pérez, Jhonny |
| 04 | `DOC-PLAN-03-00` | [03. Product Backlog Priorizado](00_Product_Backlog_Priorizado.md) | Lista maestra de 72 HUs evaluadas bajo INVEST y MoSCoW | Colonia Infantas, Walter |
| 05 | `DOC-PLAN-03-01` | [EPIC-SEG: Seguridad y Accesos](01_EPIC-SEG.md) | 13 HUs de autenticación, control de sesiones y gestión de usuarios | Colonia Infantas, Walter |
| 06 | `DOC-PLAN-03-02` | [EPIC-CAT: Catálogos y Clientes](02_EPIC-CAT.md) | 17 HUs de categorías, productos, proveedores y clientes | Colonia Infantas, Walter |
| 07 | `DOC-PLAN-03-03` | [EPIC-INV: Inventario y Reposición](03_EPIC-INV.md) | 11 HUs de entradas, bajas, ajustes físicos y solicitudes de reposición | Colonia Infantas, Walter |
| 08 | `DOC-PLAN-03-04` | [EPIC-VEN: Ventas y Caja](04_EPIC-VEN.md) | 15 HUs de apertura/cierre de caja, POS, comprobantes y anulaciones | Colonia Infantas, Walter |
| 09 | `DOC-PLAN-03-05` | [EPIC-REP: Reportes, Dashboards y Configuración](05_EPIC-REP.md) | 16 HUs de reportes gerenciales, dashboards y configuración del local | Colonia Infantas, Walter |
| 10 | `DOC-PLAN-04` | [04. Plan de Lanzamiento y Story Mapping](04_Plan_de_Lanzamiento_y_Story_Mapping.md) | Story Map en formato docente (5 épicas, 3 releases) y líneas de corte | Colonia Infantas, Walter |
| 11 | `DOC-PLAN-05` | [05. Estimación de Capacidad, Velocidad y Costos](05_Estimacion_de_Capacidad_Velocidad_y_Costos.md) | Secuencia matemática oficial, sensibilidad, burndown y gestión de riesgos | Angeles Pérez, Jhonny |
| 12 | `DOC-PLAN-06` | [06. Sprint Backlog](06_Sprint_Backlog.md) | Plan de 3 sprints, asignación de tareas y plan de ejecución del Sprint 1 | Angeles Pérez, Jhonny |
| 13 | `DOC-PLAN-07` | [07. Desglose de Tareas (Task Breakdown)](07_Desglose_de_Tareas_Task_Breakdown.md) | Desglose oficial de 363 tareas en plantilla de 8 pasos | Angeles Pérez, Jhonny |
| 14 | `DOC-PLAN-08` | [08. Reglas de Negocio y Glosario](08_Reglas_de_Negocio_y_Glosario.md) | Catálogo de 16 reglas de negocio y glosario terminológico | Colonia Infantas, Walter |
| 15 | `DOC-PLAN-10` | [10. Registro de Supuestos de Arquitectura y Decisiones de Negocio](10_Registro_Deuda_Tecnica_y_Brechas.md) | Supuestos de diseño, decisiones arquitectónicas D1 a D12 y riesgos | Colonia Infantas, Walter |
| 16 | `DOC-PLAN-11` | [11. Matriz de Trazabilidad Historia-Pantalla](11_Matriz_Trazabilidad_UI.md) | Relación HU → pantalla → CA-UI, cobertura y guía de consulta | Colonia Infantas, Walter |
| 17 | `DOC-ANEXO-A` | [Anexo A. Consolidado Ejecutivo del Proyecto](Anexo_A.md) | Trazabilidad por épica, presupuesto por release y matriz por HU | Colonia Infantas, Walter |
| 18 | `DOC-ANEXO-B` | [Anexo B. Especificación de Interfaz (UI, microcopy y comportamiento visual)](Anexo_B_Especificacion_de_Interfaz.md) | Especificación por pantalla de campos, ayudas, colores de estado, banners, estados vacíos y validaciones | Colonia Infantas, Walter |

## Historial de Control de Cambios

| Versión | Fecha | Autor / Revisor | Descripción del Cambio |
| :---: | :---: | :--- | :--- |
| **1.0** | 2026-09-01 | Angeles Pérez, Jhonny | Emisión inicial del plan Scrum y desglose base de requisitos. |
| **2.0** | 2026-09-28 | Colonia Infantas, Walter | Saneamiento metodológico, calibración de tareas y balanceo de carga operativa. |
| **3.0** | 2026-09-28 | Equipo Scrum (6 Developers) | Transición a equipo de 6 desarrolladores, horizonte de 3 Sprints (6 semanas) y capacidad de 168 h/sprint. |
| **4.0** | 2026-09-30 | Equipo Scrum (6 Developers) | Ajuste a directivas académicas: definición de pivote, factor de contingencia del 80 %, 25 h/semana, MVP en Sprint 1, 3 releases y plan de ejecución del Sprint 1. |
| **4.1** | 2026-10-01 | Equipo Scrum / Colonia I. | Saneamiento integral del Product Backlog (EPIC-SEG a EPIC-REP) y Reglas de Negocio (RN-01 a RN-16) conforme al alcance funcional. |
| **4.2** | 2026-10-02 | Equipo Scrum / Product Owner | Alineación estricta con formato estándar y parámetros matemáticos oficiales de costos y Sprint 1. Presupuesto oficial fijado en S/ 22,500.00 (100 % costo laboral), estandarización de referencias y ratificación de 72 HUs / 251 pts. |
| **4.3** | 2026-10-03 | Equipo Scrum / Product Owner | Calibración funcional de criterios en las épicas EPIC-SEG, EPIC-CAT, EPIC-INV, EPIC-VEN y EPIC-REP; registro de supuestos operativos. |
| **4.4** | 2026-10-03 | Equipo Scrum / Product Owner | Unificación de versión del paquete, corrección de referencias cruzadas y de códigos de documento, especificación funcional de criterios de aceptación, registro de decisiones de arquitectura (DOC-PLAN-10) y conciliación presupuestaria. |
| **4.5** | 2026-10-03 | Equipo Scrum / Product Owner | Resolución formal de especificación de los 6 puntos de negocio PP-01 a PP-06: unificación de OTP a 4 dígitos (`HU-AUTH-05`, REL-2), IGV ajustado al 18 % legal vigente (`HU-CONF-02`, `HU-VEN-01a`, REL-1), ampliación de la matriz de roles a 8 módulos en DOC-PLAN-01, unificación de actores en reposición (`HU-SOL-03/04`), precisión de historial de entradas sin paginación (`HU-INV-04`) y estandarización de reglas RN-02 y RN-03 (DOC-PLAN-08). |
| **4.6** | 2026-10-03 | Equipo Scrum / Product Owner | Integración formal de la especificación de interfaz al plan: Anexo B (20 pantallas), criterio CA-UI en cada historia con pantalla, cláusulas de DoR/DoD, matriz de trazabilidad DOC-PLAN-11 y registro de decisiones de interfaz en DOC-PLAN-10. Versión única 4.6 para todo el paquete. |
| **4.7** | 2026-10-03 | Equipo Scrum / Product Owner | Cobertura exhaustiva de interfaz: inventario completo de textos visibles (472 elementos especificados; ausencia confirmada de textos legales), evaluación satisfactoria en las 7 categorías de UI por pantalla en Anexo B, resolución de puntos de negocio PP-07 a PP-12 (stock mínimo inicial sugerido en 10 al crear producto, consulta sincrónica RUC SUNAT para estado activo/habido, baja por vencimiento al 100 % sin exigencia de partida específica, cobro Yape/Plin (IziPay) vía terminal IziPay con código de autorización de 6 dígitos, primera carga de mercadería por almacenero para productos sin entradas previas y matriz de permisos por roles) y trazabilidad confirmada en DOC-PLAN-11. |
| **4.8** | 2026-10-03 | Equipo Scrum (6 Developers) / Product Owner | Elevación integral a estándar metodológico ágil Scrum formal a priori: eliminación completa de evidencias técnicas físicas, servicios de servidor y tecnicismos, estandarización unificada de pasarelas de pago Yape/Plin (IziPay), consolidación de principios de experiencia de usuario de mostrador y certificación de 0 términos prohibidos en la totalidad de los 18 documentos del paquete. |

## Cambios aplicados en esta versión (v4.2)

| Sección | Elemento Modificado | Estado Anterior (v4.1) | Estado Actual (v4.2) | Justificación Metodológica |
|---|---|---|---|---|
| Encabezado | Versión y Fecha | Versión 4.1, 2026-10-01 | Versión 4.2, 2026-10-02 | Actualización de ciclo formal Scrum. |
| Métricas | Presupuesto Total | S/ 22,050.00 (con S/ 450 no laborales) | S/ 22,500.00 (todo laboral) | Adopción de la fórmula oficial `sem × costo/sem × personas` sin recargos arbitrarios. |
| Directorio | Fila 12 (`DOC-PLAN-06`) | Referencia a "plan de ejecución 06a" | "plan de ejecución del Sprint 1" | Eliminación de código de documento inexistente DOC-PLAN-06a. |
| Historial | Control de versiones | Última entrada v4.1 | Adición de hito v4.2 | Registro formal de calibración y balanceo integral. |

## Cambios aplicados en esta versión (v4.4)

| N° | Cambio | Ocurrencias |
|:---:|---|:---:|
| 1 | Directorio (DOC-PLAN-10) e historial de versiones 4.3 y 4.4 | 2 |
| 2 | Alineación de versión y fecha del paquete (v4.4) | 1 |

## Cambios aplicados en esta versión (v4.5)

| N° | Cambio | Ocurrencias |
|:---:|---|:---:|
| 1 | Adición de versión 4.5 al historial de control de cambios con detalle de los 6 puntos de negocio resueltos | 1 |
| 2 | Alineación de versión y fecha del paquete (v4.5, 2026-10-03) | 1 |

## Cambios aplicados en esta versión (v4.6)

| N° | Cambio | Ocurrencias |
|:---:|---|:---:|
| 1 | Directorio (DOC-ANEXO-B, DOC-PLAN-11), cadena de trazabilidad, cifras de interfaz e historial 4.6 | 4 |
| 2 | Versión única del paquete (v4.6) y fecha 2026-10-03 | 1 |

## Cambios aplicados en esta versión (v4.7)

| N° | Cambio | Ocurrencias |
|:---:|---|:---:|
| 1 | Historial de Control de Cambios: incorporación del hito v4.7 con detalle de cobertura UI, resolución de PP-07 a PP-12 y alineación documental completa | 1 |
| 2 | Versión única del paquete elevada a v4.7 con fecha 2026-10-03 | 1 |

## Cambios aplicados en esta versión (v4.8)

| N° | Cambio | Ocurrencias |
|:---:|---|:---:|
| 1 | Elevación a estándar metodológico ágil Scrum a priori formal: eliminación íntegra de evidencias técnicas físicas, servicios de servidor y tecnicismos en los 18 documentos | Global |
| 2 | Actualización del Directorio Maestro con los 18 documentos oficiales del paquete y enlaces directos en el paquete documental | 18 |
| 3 | Estandarización unificada de métodos de cobro electrónico digital bajo la pasarela Yape/Plin (IziPay) | Global |
| 4 | Ratificación formal del presupuesto (S/ 22,500.00), esfuerzo (502 h / 363 tareas) y capacidad neta (240 h/sprint) con certificación de cero términos prohibidos | Global |

---

# ====================================================================
# DOCUMENTO OFICIAL: 01_Vision_Alcance_y_Stakeholders.md
# ====================================================================

---
Código de documento: DOC-PLAN-01
Título: Visión, Alcance y Stakeholders
Versión: 4.8
Fecha: 2026-10-03
Elaborado por: Angeles Pérez, Jhonny
Revisado por: Colonia Infantas, Walter
Estado: Aprobado
Propósito: Definir la visión del producto, objetivos de negocio, alcance y matriz de roles y permisos
Documentos relacionados: DOC-PLAN-00
---

# 01. Visión, Alcance y Stakeholders

## Visión del Producto
**Para** el dueño y colaboradores del minimarket **que** gestionan actualmente sus operaciones comerciales mediante registros manuales en papel, **el** Sistema de Gestión Integral **es un** software de ventas, almacén y administración **que** permitirá controlar las existencias en tiempo real, emitir comprobantes de pago según estándares fiscales vigentes y liquidar los turnos de caja con exactitud. **A diferencia de** los cuadernos físicos y hojas de cálculo desarticuladas, **nuestro producto** integrará el flujo de atención en mostrador con el descuento automático de inventario, validando las políticas comerciales del negocio en cada transacción.

## Objetivo del Producto (Product Goal)
Lograr que el 100 % de las ventas presenciales del minimarket se procesen digitalmente con emisión inmediata de comprobantes y descuento automático de inventario, reduciendo a cero los descuadres de caja y las pérdidas por caducidad en los primeros tres meses de operación formal.

## Objetivos de Negocio y Épicas
| Objetivo ID | Objetivo de Negocio | Épica Asociada |
|---|---|---|
| **OBJ-01** | Garantizar la trazabilidad y seguridad en las operaciones del personal. | EPIC-SEG (Seguridad y Accesos) |
| **OBJ-02** | Mantener un catálogo centralizado de productos, clientes y proveedores. | EPIC-CAT (Catálogos y Clientes) |
| **OBJ-03** | Minimizar pérdidas por vencimiento y roturas de stock mediante el control de caducidad, los movimientos de inventario y la reposición oportuna. | EPIC-INV (Inventario y Reposición) |
| **OBJ-04** | Formalizar las ventas mediante emisión de boletas y facturas válidas. | EPIC-VEN (Ventas y Caja) |
| **OBJ-05** | Proveer información en tiempo real para la toma de decisiones. | EPIC-REP (Reportes, Dashboards y Configuración) |

## Alcance del Proyecto

**Alcance Incluido:**
- Autenticación segura de usuarios, control de sesiones y trazabilidad de accesos por roles.
- Catálogos maestros de productos con control de lotes, fechas de caducidad y stock mínimo, categorías y proveedores.
- Gestión de inventario físico: entradas de mercadería, salidas justificadas por merma y ajustes por conteo físico.
- Punto de venta (POS) para atención en mostrador con cobro en efectivo y digital, y emisión correlativa de Boletas y Facturas.
- Gestión integral de turnos de caja: apertura con fondo mínimo, arqueos, movimientos manuales de efectivo y cuadre de cierre.
- Ciclo de reabastecimiento asistido mediante solicitudes de reposición con flujo de aprobación gerencial.
- Tableros de control gerencial con alertas tempranas y suite de reportes analíticos con opción de exportación.

**Fuera de Alcance (Won't have · 1):**
- Venta de productos a granel o fraccionados mediante balanza electrónica integrada por peso (`HU-VEN-09`).
- Portal de comercio electrónico (*e-commerce*) o canal de ventas por internet para despacho a domicilio.

## Matriz de Roles y Permisos (8 Módulos Funcionales)

| Rol del Negocio | Seguridad y Usuarios | Catálogos (Prod/Cat/Prov) | Clientes | Caja | Ventas | Inventario y Reposición | Reportes y Tableros | Configuración |
|---|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|
| **Administrador** | Consulta de usuarios y supervisión de accesos | Operará y Administrará (alta, edición, desactivación) | Operará y Modificará (gestión de directorio) | Operará y Supervisará (aprobación y cierres) | Operará y Supervisará (anulación de ventas) | Operará y Aprobará (regularización y pedidos) | Consultará y Analizará | Operará (edición comercial e impositiva) |
| **SuperAdmin** | Operará (alta, edición, estados y cierre forzado) | Operará (hereda potestades de Administrador) | Operará (hereda potestades de Administrador) | Operará y Supervisará (hereda Administrador) | Operará y Supervisará (hereda Administrador) | Operará y Aprobará (hereda Administrador) | Consultará y Analizará | Operará (hereda potestades de Administrador) |
| **Vendedor** | Sin acceso (gestión de clave propia) | Consulta en pantalla de ventas | Consulta de identidad y registro rápido | Operará (apertura de turno propio y arqueo) | Operará (atención POS, cobro e impresión) | Sin acceso | Sin acceso | Consulta informativa para comprobantes |
| **Almacenero** | Sin acceso (gestión de clave propia) | Operará (alta y edición de datos operativos) | Sin acceso | Sin acceso | Sin acceso | Operará (entradas, bajas, ajustes y pedidos) | Sin acceso | Consulta informativa de parámetros |
| **Gerente** | Sin acceso (gestión de clave propia) | Consultará directorio y fichas | Consultará listado de clientes | Supervisará (supervisión de turnos y cierres) | Consultará y Supervisará (autoriza anulación) | Supervisará y Decidirá (evalúa reposición) | Consultará y Analizará | Consulta informativa de parámetros |

*Criterios Metodológicos de Gobernanza y Separación de Funciones:*
1. **Seguridad y Personal:** La creación, actualización, desactivación de cuentas y la potestad exclusiva de ejecutar el cierre forzado de sesión remota de un usuario corresponden privativamente al SuperAdmin. El Administrador cuenta con atribuciones de consulta sobre la nómina de colaboradores y los registros de supervisión de accesos.
2. **Catálogos Comerciales:** El Almacenero participa en el alta y actualización de datos operativos de productos, categorías y proveedores para la dinámica diaria de almacén; sin embargo, las facultades de desactivar proveedores o dar de baja categorías quedan reservadas con exclusividad al Administrador.
3. **Clientes y Facturación:** La búsqueda rápida por documento (DNI o RUC) y el alta automática durante el proceso de cobro en mostrador están habilitadas para el Vendedor y Administrador para dinamizar la atención al cliente. La modificación directa de las fichas maestras de clientes en el directorio corresponde al Administrador.
4. **Inventario y Reabastecimiento:** El Almacenero ejecuta las entradas de mercadería, bajas por merma física y ajustes por conteo, originando además las solicitudes de reposición. No posee acceso a los tableros analíticos gerenciales de ventas ni márgenes comerciales; la aprobación o rechazo de solicitudes de reposición recae estrictamente en el Gerente o Administrador.
5. **Jerarquía Operativa del SuperAdmin:** El rol SuperAdmin posee la máxima jerarquía operativa del sistema, asumiendo de manera automática la totalidad de las potestades y facultades conferidas al Administrador, sumando a ellas la gestión privativa de cuentas y credenciales de los trabajadores.
6. **Configuración y Control Financiero de Caja:** La consulta de los parámetros comerciales del minimarket (datos de la empresa, correlativos) es accesible para la emisión de comprobantes, pero su modificación queda restringida al Administrador. En el módulo de Caja, la supervisión de arqueos, la aprobación formal de cierres de turno y la potestad de forzar el cierre de un turno abandonado por un cajero están asignadas indistintamente al Administrador y al Gerente.

## Stakeholders del Proyecto
| Stakeholder | Interés en el Proyecto | Nivel de Influencia |
|---|---|---|
| **Dueño del Minimarket (Product Owner - Externo)** | Maximizar la rentabilidad, erradicar mermas no justificadas y formalizar la facturación. | Alto |
| **Personal Operativo (Cajeros, Vendedores, Almaceneros)** | Disponer de una herramienta ágil, intuitiva y rápida para la atención y el control de existencias. | Medio |
| **Clientes Finales del Minimarket** | Recibir atención comercial rápida, comprobantes de pago formales y cálculo exacto de vueltos. | Bajo |
| **Docente / Asesor Académico (Scrum Master - Externo)** | Velar por el rigor metodológico, la gobernanza Scrum y la consistencia técnica de la entrega. | Alto |

## Supuestos y Restricciones del Plan

- **SUP-01 (Disponibilidad Normativa Fiscal):** Se asume que la autoridad tributaria (SUNAT) mantendrá vigentes las especificaciones de estructura de datos y formatos visuales para la emisión de comprobantes de pago (Boletas de Venta y Facturas).
- **SUP-02 (Capacidad del Equipo de Desarrollo):** El equipo está conformado por 6 desarrolladores con dedicación comprometida de 25 horas semanales por persona (5 horas diarias durante los 5 días laborables). La capacidad neta de ingeniería es de 240.0 horas efectivas por sprint de 2 semanas tras aplicar la deducción oficial del 20 % (10.0 horas por integrante) para ceremonias Scrum.
- **SUP-03 (Flujo Operativo de Cobros y Comprobantes):** La emisión de boletas y facturas se planifica con generación local de correlativos continuos ininterrumpidos y formatos según estándar fiscal [DECISIÓN PENDIENTE D8: ratificar que no incluye envío electrónico sincrónico a servidores SUNAT]; el cobro con billeteras digitales se realizará mediante Yape/Plin mediante terminal IziPay con código de autorización de 6 dígitos (`HU-VEN-01` y `HU-VEN-07`), donde el cajero registrará dicho código de autorización impreso por el terminal físico garantizando su unicidad histórica para evitar cobros duplicados (RN-02), sin requerir integración bancaria automatizada directa por canales externos.
- **SUP-04 (Horizonte Temporal y Presupuesto Oficial):** El proyecto se ejecutará en un horizonte timebox de 3 Sprints de 2 semanas cada uno (6 semanas lectivas, 10 días laborables por sprint), iniciando el miércoles 30 de septiembre y concluyendo el martes 10 de noviembre de 2026. El feriado nacional del jueves 08 de octubre (Combate de Angamos) se compensa laborando el sábado 03 de octubre. El presupuesto total planificado es de S/ 22,500.00 (S/ 7,500.00 por sprint o release), correspondiente íntegramente a costos laborales (6 semanas × S/ 625.00/semana × 6 desarrolladores), sin contemplar costos no laborales.
- **SUP-05 (Disponibilidad en Días de Presentación Académica):** Los martes 06 de octubre y 13 de octubre coinciden con sesiones lectivas fijas. Se planifica una dedicación de 4.0 horas efectivas de desarrollo el día 6, mientras que el martes 13 de octubre se reserva como jornada exclusiva de presentación del MVP en la Sprint Review 1, sin asignación de tareas técnicas de construcción.

---

# ====================================================================
# DOCUMENTO OFICIAL: 02_Equipo_Roles_y_Ceremonias.md
# ====================================================================

---
Código de documento: DOC-PLAN-02
Título: Equipo, Roles y Ceremonias
Versión: 4.8
Fecha: 2026-10-03
Elaborado por: Angeles Pérez, Jhonny
Revisado por: Colonia Infantas, Walter
Estado: Aprobado
Propósito: Definir la organización del equipo Scrum, acuerdos de trabajo, Definition of Ready, Definition of Done y ceremonias oficiales
Documentos relacionados: DOC-PLAN-00
---

# 02. Equipo, Roles y Ceremonias

## Developers (6 Desarrolladores)
El equipo técnico ejecutor está compuesto de manera fija por 6 desarrolladores universitarios con dedicación de 25 horas semanales por persona (5 horas diarias en los 5 días laborables de la semana; dedicación bruta: 50.0 horas por integrante en cada sprint de 2 semanas). El Scrum Team está integrado por el Product Owner, el Scrum Master y los 6 Developers. Los roles de gobernanza son externos al equipo de construcción: el dueño del minimarket asume la función de Product Owner (PO) y el docente asesor asume la función de Scrum Master (SM).

| Identificador | Integrante | Rol en el Equipo | Especialidad / Responsabilidades de Construcción |
|:---:|---|:---:|---|
| **Des.1** | Velasquez Revilla, Favio | Developer | **Lógica de Negocio e Inventario:** construcción de movimientos de almacén, políticas de existencias, cálculo de mermas y persistencia operativa. |
| **Des.2** | Nolasco Castillo, Juan David | Developer | **Flujos de Caja y Catálogos:** construcción de pantallas operativas de caja, registro de turnos y mantenimiento de catálogos maestros. |
| **Des.3** | Castillo Aranda, Jhordan Alexis | Developer | **Lógica Transaccional y Ventas (POS):** construcción del circuito de punto de venta, medios de pago en mostrador y generación de comprobantes. |
| **Des.4** | Alcalde Navarro, Sebastian | Developer | **Calidad y Pruebas (QA Lead):** liderazgo de pruebas funcionales, verificación cruzada independiente, certificación de criterios de aceptación y preparación de despliegues web. |
| **Des.5** | Colonia Infantas, Walter | Developer | **Seguridad, Accesos y Sesiones:** construcción del módulo de autenticación, control de sesiones de usuario, administración de accesos y configuración fiscal. |
| **Des.6** | Angeles Pérez, Jhonny | Developer | **Catálogos, Datos y Reportes:** construcción de módulos de proveedores, clientes, tableros analíticos e informes gerenciales. |

## Roles de Gobernanza Externa
- **Product Owner (PO - Externo):** Dueño del Minimarket. Establece las prioridades comerciales del negocio, valida el valor entregado y tiene la potestad exclusiva de aceptar formalmente los incrementos funcionales en la Sprint Review.
- **Scrum Master (SM - Externo):** Docente / Asesor Académico. Facilita la aplicación del marco Scrum, vela por el cumplimiento de los timeboxes y asesora metodológicamente al equipo removiendo impedimentos del entorno.

## Matriz RACI del Proyecto
| Entregable Metodológico | Product Owner (Externo) | Scrum Master (Externo) | Developers (6) |
|---|:---:|:---:|:---:|
| Product Backlog | Responsable (R), Aprobador (A) | Consultado (C) | Consultado (C), Informado (I) |
| Sprint Backlog | Consultado (C) | Consultado (C) | Responsable (R), Aprobador (A) |
| Incremento de Software Terminado | Aprobador (A) | Informado (I) | Responsable (R) |

## Acuerdos de Trabajo del Equipo
- El refinamiento del Product Backlog es una actividad continua y colaborativa a lo largo de cada iteración.
- Todo entregable debe satisfacer integralmente la Definición de Hecho (DoD) antes de someterse a demostración en la Sprint Review.
- Principio de independencia y objetividad de calidad: ningún desarrollador verificará su propia historia (`Construye ≠ Verifica` en el 100 % de las historias).
- Gestión anticipada de dependencias intra-sprint mediante el principio de "contrato primero" formalizado el día 1 de cada iteración.

## Definition of Ready (Definición de Preparado - DoR)
Una Historia de Usuario se considera lista para ser incorporada en un Sprint Planning si cumple con:
1. Está formulada desde la perspectiva del usuario ("Como [rol] / Quiero [función] / Para [beneficio]") con valor de negocio claro y trazabilidad a los objetivos OBJ-01 a OBJ-05.
2. Posee al menos dos criterios de aceptación específicos, medibles y redactados en formato estándar *Dado que / Cuando / Entonces*.
3. Ha sido estimada por el equipo en puntos de historia usando la escala Fibonacci, tomando como referencia calibrada el pivote oficial `HU-CAT-01` = 1 pt = 2.0 h-hombre.
4. Sus dependencias funcionales se encuentran resueltas en sprints previos o planificadas dentro de la misma iteración (ninguna dependencia hacia sprints futuros).
5. Si la historia involucra interfaz de usuario, la pantalla correspondiente se encuentra especificada en el Anexo B (DOC-ANEXO-B) y la historia incorpora su respectivo criterio de interfaz (CA-UI).

## Definition of Done (Definición de Hecho - DoD)
Un incremento de historia de usuario se considera terminado y potencialmente operable cuando:
1. La funcionalidad puede operarse íntegramente en el navegador web conforme al flujo de negocio planificado, sin interrupciones visuales ni bloqueos durante la experiencia de usuario.
2. Los registros ingresados o modificados se guardan de forma permanente, reflejándose de manera exacta al navegar entre pantallas, cambiar de módulo o recargar la vista.
3. El control de seguridad restringe el acceso validando estrictamente que solo los colaboradores con los roles autorizados puedan ingresar a la pantalla y operar sus funciones.
4. Se ejecutan y aprueban favorablemente las pruebas automatizadas planificadas (pruebas unitarias y de integración sobre la lógica de negocio, validaciones fiscales, control de caja y consumo FEFO correspondientes al paso 6 del desglose de tareas) sin fallos pendientes.
5. Se certificó la verificación funcional e independiente del 100 % de los criterios de aceptación en la interfaz web bajo la regla obligatoria `Construye ≠ Verifica` (el desarrollador asignado al rol de Verificador QA ejecuta la validación cruzada).
6. La interfaz cumple al 100 % la especificación de campos, textos de ayuda, etiquetas, alertas de color y estados vacíos documentados en el Anexo B (DOC-ANEXO-B), sin elementos visibles indocumentados.
7. Los defectos identificados durante la verificación fueron subsanados y el incremento integrado se encuentra disponible en el entorno web oficial para la demostración en la Sprint Review.

## Ceremonias Scrum y Cómputo de Capacidad

| Ceremonia Scrum | Timebox y Frecuencia | Dedicación por Developer | Objetivo de la Ceremonia y Participantes |
|---|---|:---:|---|
| **Sprint Planning** | 1 sesión al inicio del sprint | 4.0 h | Selección del alcance del sprint, definición del Objetivo del Sprint y desglose de historias en tareas operativas. Participan: PO, SM y 6 Developers. |
| **Daily Scrum** | 10 sesiones diarias de 15 minutos | 2.5 h | Sincronización diaria del equipo técnico para inspeccionar el avance hacia el Objetivo del Sprint y coordinar integraciones. Participan: 6 Developers. |
| **Sprint Review** | 1 sesión al cierre del sprint | 2.0 h | Demostración funcional en vivo del incremento de software terminado ante el Product Owner y el docente asesor. Participa: Scrum Team completo. |
| **Sprint Retrospective** | 1 sesión al cierre del sprint | 1.5 h | Análisis reflexivo del proceso de trabajo, identificación de cuellos de botella y acuerdos de mejora continua. Participan: SM y 6 Developers. |
| **Total Ceremonias** | **Deducción de Timebox** | **10.0 h** | **Representa exactamente el 20.0 % de las 50.0 horas brutas de dedicación individual.** |

**Justificación Metodológica de la Capacidad Neta (80 %):**  
El factor de contingencia del 80 % es el parámetro oficial adoptado por el equipo y coincide de forma exacta con deducir 10.0 horas de ceremonias Scrum por integrante a lo largo de cada sprint de 2 semanas (4.0 h Planning + 2.5 h Daily + 2.0 h Review + 1.5 h Retrospectiva = 10.0 h). Sobre una dedicación bruta de 50.0 horas por persona (25 h/semana × 2 semanas), las ceremonias representan exactamente el 20.0 % del tiempo. Por consiguiente, el 80.0 % restante corresponde a capacidad neta de ingeniería:
- **Capacidad neta por desarrollador:** 50.0 h brutas × 0.80 = **40.0 horas netas por sprint**.
- **Capacidad neta del equipo (6 Developers):** 6 × 40.0 h = **240.0 horas netas por sprint**.
- **Capacidad neta acumulada del proyecto (3 Sprints):** 3 × 240.0 h = **720.0 horas netas**.

---

# ====================================================================
# DOCUMENTO OFICIAL: 00_Product_Backlog_Priorizado.md
# ====================================================================

---
Código de documento: DOC-PLAN-03-00
Título: Product Backlog Priorizado
Versión: 4.8
Fecha: 2026-10-03
Elaborado por: Colonia Infantas, Walter
Revisado por: Angeles Pérez, Jhonny
Estado: Aprobado
Propósito: Lista maestra de Historias de Usuario, evaluación INVEST, mitigación de complejidad y priorización MoSCoW
Documentos relacionados: DOC-PLAN-00
---

# 03. Product Backlog Priorizado

## Verificación INVEST del Product Backlog

El 100 % de las 72 historias de usuario planificadas ha sido evaluado bajo los criterios de calidad INVEST:

| Criterio INVEST | Resultado | Sustento Metodológico y Criterio de Aplicación |
|---|:---:|---|
| **Independent (Independiente)** | Conforme con salvaguardas | Las dependencias entre historias se encuentran resueltas en sprints anteriores o planificadas dentro de la misma iteración mediante acuerdos de integración formalizados el día 1, garantizando que ninguna historia dependa de un sprint futuro. |
| **Negotiable (Negociable)** | Conforme | Los criterios de aceptación en formato estándar *Dado que / Cuando / Entonces* delimitan el alcance funcional y los resultados esperados, permitiendo flexibilidad en el diseño operativo en coordinación con el Product Owner. |
| **Valuable (Valiosa)** | Conforme | Cada historia está formulada desde la perspectiva de un rol específico del minimarket con un beneficio comercial claro y medible, trazando de forma directa a uno de los 5 objetivos estratégicos del negocio (OBJ-01 a OBJ-05). |
| **Estimable (Estimable)** | Conforme | La totalidad de las historias se encuentra estimada en puntos de historia utilizando la escala Fibonacci, tomando como referencia calibrada la historia pivote oficial `HU-CAT-01` = 1 pt = 2.0 h-hombre. |
| **Small (Pequeña)** | Conforme | El 93.1 % del backlog (67 de 72 historias) posee un tamaño ≤ 5 pts. Las 5 historias complejas (≥ 8 pts) cuentan con análisis de cohesión funcional y estrategias de mitigación. Para `HU-VEN-01` (13 pts) se incorpora una nota metodológica de descomposición opcional. |
| **Testable (Comprobable)** | Conforme | Cada historia dispone de pruebas automatizadas planificadas (paso 6 del desglose de tareas para lógica de dominio y validaciones) y al menos dos criterios de aceptación verificables en formato *Dado que / Cuando / Entonces*, complementados por la verificación funcional independiente de interfaz (`Construye ≠ Verifica`). Cada historia con pantalla incluye su criterio de interfaz (CA-UI) trazado al Anexo B. |

### Gestión y Mitigación de Historias Complejas (≥ 8 pts)

Las 5 historias con estimación igual o superior a 8 puntos de historia fueron analizadas para resguardar la viabilidad del flujo de trabajo y la estabilidad de las entregas:

| HU ID | Título de la Historia | Pts | Sprint | Riesgo Identificado | Estrategia de Mitigación en el Plan |
|---|---|:---:|:---:|---|---|
| **HU-AUTH-04** | Autenticación – Garantizar sesión única por usuario | 8 | SPR-2 | Complejidad en el control de accesos simultáneos desde múltiples dispositivos. | Se mantiene en 8 pts en Sprint 2 (REL-2). Se mitiga mediante la validación del estado de sesión activa por cuenta de usuario, desconectando de forma automática cualquier sesión previa al iniciar sesión en un nuevo puesto de trabajo, dependiendo de `HU-AUTH-03` y complementándose con el cierre forzado remoto por SuperAdmin (`HU-USR-06`). |
| **HU-SOL-05** | Reposición – Completar solicitud al recibir mercadería | 8 | SPR-2 | Múltiples actividades operativas: cotejo físico de ítems, actualización de existencias, recálculo de costo promedio y cierre del pedido. | Se mantiene en 8 pts en Sprint 2 (REL-2). Se mitiga exigiendo que toda recepción se realice obligatoriamente contra una solicitud de reposición previamente aprobada (RN-01 y RN-14), canalizando las notificaciones de stock crítico hacia el tablero gerencial (`HU-DASH-03`). |
| **HU-VEN-01** | Ventas (POS) – Registrar una venta con Efectivo o Yape/Plin (IziPay) | 13 | SPR-1 | Núcleo transaccional de máxima criticidad comercial; concentra la atención en mostrador y domina el camino crítico del Sprint 1 (22.00 h lógicas; ver DOC-PLAN-06). | Se mantiene indivisible en 13 pts por su valor operativo integral (el cobro en mostrador pierde sentido demostrable si se fragmenta). Se mitiga iniciando el desarrollo de la interfaz de venta desde el día 1 bajo acuerdo de servicio e implementando verificación continua con cierre planificado en el día 7 y colchón de estabilización. *(Ver nota de descomposición opcional abajo)*. |
| **HU-VEN-02** | Ventas (POS) – Emitir boleta o factura | 8 | SPR-1 | Generación de comprobantes fiscales con numeración correlativa continua y formatos tributarios SUNAT [DECISIÓN PENDIENTE D8]. | Se mantiene en 8 pts en Sprint 1 (REL-1). Se mitiga desacoplando la expedición documental del cálculo del carrito de ventas mediante especificación previa, ejecutando su verificación de comprobantes inmediatamente después de completar el flujo de venta de `HU-VEN-01`. |
| **HU-VEN-06** | Ventas (POS) – Anular una venta con devolución | 8 | SPR-2 | Impacto simultáneo en la gaveta de caja, egreso de efectivo, reversión de stock comercial y eventual derivación a merma. | Se mantiene en 8 pts en Sprint 2 (REL-2). Se mitiga reservando la autorización exclusivamente a Administrador o Gerente, requiriendo que el turno de caja se mantenga en estado 'Abierto' (RN-08) y aplicando el protocolo de destino a merma o inventario (RN-09). |

> **Nota metodológica de descomposición opcional (Criterio INVEST - Small):**  
> `HU-VEN-01` posee 13 puntos de historia por su indivisible cohesión operativa en el punto de cobro. Para fines de control granular y supervisión académica, se documenta la siguiente descomposición lógica opcional sin alterar los puntos ni los conteos oficiales del Backlog:  
> - **HU-VEN-01a:** Interfaz de carrito de venta POS, selección de artículos, cálculo automático de subtotales y desglose de IGV al 18 % (5 pts).  
> - **HU-VEN-01b:** Operación de cobro en efectivo con cálculo automático de vuelto y validación de saldo en gaveta física (3 pts).  
> - **HU-VEN-01c:** Operación de cobro mediante Yape/Plin mediante terminal IziPay con validación de código de autorización de 6 dígitos único (RN-02) (5 pts).

---

## Historias de Usuario Planificadas (1 a 72)

*Nota de ordenamiento:* Dentro de cada bloque MoSCoW, las historias se ordenan anteponiendo las historias prerrequisito antes que sus dependientes, asegurando una secuencia de ejecución lógica y sin bloqueos.

### Must have (36 Historias · 153 Puntos)

| Orden | HU ID | Título Oficial de la Historia de Usuario | Épica | MoSCoW | Puntos | Release | Sprint | Depende de |
|:---:|---|---|---|---|:---:|:---:|:---:|---|
| 1 | HU-AUTH-01 | Autenticación – Iniciar sesión | EPIC-SEG | Must have (4) | 5 | REL-1 | SPR-1 | Ninguna |
| 2 | HU-AUTH-02 | Autenticación – Bloquear cuenta por intentos fallidos | EPIC-SEG | Must have (4) | 3 | REL-1 | SPR-1 | HU-AUTH-01 |
| 3 | HU-AUTH-03 | Autenticación – Cerrar sesión | EPIC-SEG | Must have (4) | 2 | REL-1 | SPR-1 | HU-AUTH-01 |
| 4 | HU-USR-02 | Usuarios – Crear cuenta de nuevo empleado | EPIC-SEG | Must have (4) | 5 | REL-1 | SPR-1 | HU-AUTH-01 |
| 5 | HU-CAT-02 | Categorías – Crear nueva categoría de productos | EPIC-CAT | Must have (4) | 2 | REL-1 | SPR-1 | HU-AUTH-01 |
| 6 | HU-CAT-01 | Categorías – Ver lista de categorías de productos | EPIC-CAT | Must have (4) | 1 | REL-1 | SPR-1 | HU-CAT-02 |
| 7 | HU-PROD-02 | Productos – Registrar nuevo producto en el catálogo | EPIC-CAT | Must have (4) | 5 | REL-1 | SPR-1 | HU-CAT-02 |
| 8 | HU-PROD-01 | Productos – Ver catálogo completo de productos | EPIC-CAT | Must have (4) | 3 | REL-1 | SPR-1 | HU-PROD-02 |
| 9 | HU-PROV-02 | Proveedores – Registrar nuevo proveedor | EPIC-CAT | Must have (4) | 3 | REL-1 | SPR-1 | HU-AUTH-01 |
| 10 | HU-INV-01 | Inventario – Registrar entrada de mercadería | EPIC-INV | Must have (4) | 5 | REL-1 | SPR-1 | HU-PROD-02, HU-PROV-02 |
| 11 | HU-INV-02 | Inventario – Registrar baja de inventario por merma | EPIC-INV | Must have (4) | 5 | REL-1 | SPR-1 | HU-INV-01 |
| 12 | HU-INV-03 | Inventario – Realizar ajuste por conteo físico | EPIC-INV | Must have (4) | 5 | REL-1 | SPR-1 | HU-INV-01 |
| 13 | HU-CAJA-01 | Caja – Abrir turno de caja | EPIC-VEN | Must have (4) | 5 | REL-1 | SPR-1 | HU-AUTH-01 |
| 14 | HU-CAJA-02 | Caja – Cerrar turno de caja y cuadrar | EPIC-VEN | Must have (4) | 5 | REL-1 | SPR-1 | HU-CAJA-01 |
| 15 | HU-CAJA-05 | Caja – Consultar historial de turnos de caja | EPIC-VEN | Must have (4) | 3 | REL-1 | SPR-1 | HU-CAJA-02 |
| 16 | HU-VEN-01 | Ventas (POS) – Registrar una venta con Efectivo o Yape/Plin (IziPay) | EPIC-VEN | Must have (4) | 13 | REL-1 | SPR-1 | HU-CAJA-01, HU-INV-01 |
| 17 | HU-VEN-02 | Ventas (POS) – Emitir boleta o factura | EPIC-VEN | Must have (4) | 8 | REL-1 | SPR-1 | HU-VEN-01 |
| 18 | HU-VEN-05 | Ventas (POS) – Consultar historial de ventas | EPIC-VEN | Must have (4) | 5 | REL-1 | SPR-1 | HU-VEN-01 |
| 19 | HU-CONF-02 | Configuración – Actualizar configuración del negocio | EPIC-REP | Must have (4) | 3 | REL-1 | SPR-1 | HU-AUTH-01 |
| 20 | HU-CLI-02 | Clientes – Registrar cliente automáticamente al vender | EPIC-CAT | Must have (4) | 3 | REL-1 | SPR-1 | HU-VEN-01 |
| 21 | HU-AUTH-04 | Autenticación – Garantizar sesión única por usuario | EPIC-SEG | Must have (4) | 8 | REL-2 | SPR-2 | HU-AUTH-01, HU-AUTH-03 |
| 22 | HU-USR-01 | Usuarios – Listar empleados del sistema | EPIC-SEG | Must have (4) | 2 | REL-2 | SPR-2 | HU-USR-02 |
| 23 | HU-USR-04 | Usuarios – Desactivar cuenta de empleado | EPIC-SEG | Must have (4) | 3 | REL-2 | SPR-2 | HU-USR-02 |
| 24 | HU-DASH-01 | Dashboard – Ver resumen de ventas del día y del mes | EPIC-REP | Must have (4) | 5 | REL-2 | SPR-2 | HU-VEN-01 |
| 25 | HU-DASH-03 | Dashboard – Alertas de stock crítico, vencimientos y turnos olvidados | EPIC-REP | Must have (4) | 5 | REL-2 | SPR-2 | HU-INV-01, HU-CAJA-05 |
| 26 | HU-PROD-06 | Productos – Consultar productos próximos a vencer | EPIC-CAT | Must have (4) | 3 | REL-2 | SPR-2 | HU-INV-01 |
| 27 | HU-PROV-01 | Proveedores – Ver lista de proveedores | EPIC-CAT | Must have (4) | 2 | REL-2 | SPR-2 | HU-PROV-02 |
| 28 | HU-REP-01 | Reportes – Ver resumen de ventas por período | EPIC-REP | Must have (4) | 5 | REL-2 | SPR-2 | HU-VEN-01 |
| 29 | HU-REP-02 | Reportes – Ver ranking de productos más vendidos | EPIC-REP | Must have (4) | 3 | REL-2 | SPR-2 | HU-VEN-01 |
| 30 | HU-REP-05 | Reportes – Ver stock crítico | EPIC-REP | Must have (4) | 3 | REL-2 | SPR-2 | HU-INV-01 |
| 31 | HU-SOL-01 | Reposición – Crear solicitud de reposición | EPIC-INV | Must have (4) | 3 | REL-2 | SPR-2 | HU-PROD-02, HU-PROV-02 |
| 32 | HU-SOL-02 | Reposición – Listar solicitudes con filtro por estado | EPIC-INV | Must have (4) | 2 | REL-2 | SPR-2 | HU-SOL-01 |
| 33 | HU-SOL-03 | Reposición – Aprobar solicitud de reposición | EPIC-INV | Must have (4) | 3 | REL-2 | SPR-2 | HU-SOL-01 |
| 34 | HU-SOL-05 | Reposición – Completar solicitud al recibir mercadería | EPIC-INV | Must have (4) | 8 | REL-2 | SPR-2 | HU-SOL-03 |
| 35 | HU-VEN-06 | Ventas (POS) – Anular una venta con devolución | EPIC-VEN | Must have (4) | 8 | REL-2 | SPR-2 | HU-VEN-01 |
| 36 | HU-CONF-01 | Configuración – Ver configuración actual del negocio | EPIC-REP | Must have (4) | 1 | REL-2 | SPR-2 | HU-CONF-02 |

### Should have (31 Historias · 84 Puntos)

| Orden | HU ID | Título Oficial de la Historia de Usuario | Épica | MoSCoW | Puntos | Release | Sprint | Depende de |
|:---:|---|---|---|---|:---:|:---:|:---:|---|
| 37 | HU-AUTH-05 | Autenticación – Recuperar contraseña por correo | EPIC-SEG | Should have (3) | 5 | REL-2 | SPR-2 | HU-AUTH-01 |
| 38 | HU-USR-06 | Usuarios – Forzar cierre de sesión remoto | EPIC-SEG | Should have (3) | 3 | REL-2 | SPR-2 | HU-AUTH-01 |
| 39 | HU-CAJA-03 | Caja – Registrar movimiento manual de efectivo | EPIC-VEN | Should have (3) | 3 | REL-2 | SPR-2 | HU-CAJA-01 |
| 40 | HU-CAJA-04 | Caja – Ver resumen del turno activo | EPIC-VEN | Should have (3) | 2 | REL-2 | SPR-2 | HU-CAJA-01 |
| 41 | HU-CAJA-06 | Caja – Aprobar cierre de turno | EPIC-VEN | Should have (3) | 2 | REL-2 | SPR-2 | HU-CAJA-02 |
| 42 | HU-CAJA-07 | Caja – Forzar cierre de turno ajeno | EPIC-VEN | Should have (3) | 5 | REL-2 | SPR-2 | HU-CAJA-01 |
| 43 | HU-VEN-07 | Ventas (POS) – Confirmar el código de autorización del pago digital | EPIC-VEN | Should have (3) | 2 | REL-2 | SPR-2 | HU-VEN-01 |
| 44 | HU-SOL-04 | Reposición – Rechazar solicitud de reposición | EPIC-INV | Should have (3) | 2 | REL-2 | SPR-2 | HU-SOL-01 |
| 45 | HU-PROV-04 | Proveedores – Desactivar o reactivar proveedor | EPIC-CAT | Should have (3) | 2 | REL-2 | SPR-2 | HU-PROV-02 |
| 46 | HU-AUTH-06 | Autenticación – Cambiar contraseña propia | EPIC-SEG | Should have (3) | 3 | REL-3 | SPR-3 | HU-AUTH-01 |
| 47 | HU-USR-03 | Usuarios – Editar datos de un empleado | EPIC-SEG | Should have (3) | 3 | REL-3 | SPR-3 | HU-USR-02 |
| 48 | HU-USR-05 | Usuarios – Reactivar cuenta de empleado | EPIC-SEG | Should have (3) | 2 | REL-3 | SPR-3 | HU-USR-04 |
| 49 | HU-LOG-01 | Supervisión de accesos – Consultar registro de accesos al sistema | EPIC-SEG | Should have (3) | 3 | REL-3 | SPR-3 | HU-AUTH-01 |
| 50 | HU-CAT-03 | Categorías – Editar nombre de categoría | EPIC-CAT | Should have (3) | 1 | REL-3 | SPR-3 | HU-CAT-02 |
| 51 | HU-CLI-01 | Clientes – Listar clientes registrados | EPIC-CAT | Should have (3) | 2 | REL-3 | SPR-3 | HU-CLI-02 |
| 52 | HU-PROD-04 | Productos – Editar datos de un producto | EPIC-CAT | Should have (3) | 3 | REL-3 | SPR-3 | HU-PROD-02 |
| 53 | HU-PROD-05 | Productos – Desactivar o reactivar producto | EPIC-CAT | Should have (3) | 2 | REL-3 | SPR-3 | HU-PROD-02 |
| 54 | HU-PROV-03 | Proveedores – Editar datos de un proveedor | EPIC-CAT | Should have (3) | 2 | REL-3 | SPR-3 | HU-PROV-02 |
| 55 | HU-INV-04 | Inventario – Consultar historial de entradas | EPIC-INV | Should have (3) | 2 | REL-3 | SPR-3 | HU-INV-01 |
| 56 | HU-INV-05 | Inventario – Consultar historial de bajas | EPIC-INV | Should have (3) | 2 | REL-3 | SPR-3 | HU-INV-02 |
| 57 | HU-INV-06 | Inventario – Consultar historial de ajustes | EPIC-INV | Should have (3) | 2 | REL-3 | SPR-3 | HU-INV-03 |
| 58 | HU-DASH-02 | Dashboard – Ver gráfico de evolución de ventas por día | EPIC-REP | Should have (3) | 3 | REL-3 | SPR-3 | HU-VEN-01 |
| 59 | HU-DASH-04 | Dashboard – Ver ranking de productos más vendidos | EPIC-REP | Should have (3) | 3 | REL-3 | SPR-3 | HU-VEN-01 |
| 60 | HU-DASH-05 | Dashboard – Ver solicitudes de reposición pendientes | EPIC-REP | Should have (3) | 2 | REL-3 | SPR-3 | HU-SOL-01 |
| 61 | HU-REP-03 | Reportes – Ver ventas desglosadas por día | EPIC-REP | Should have (3) | 3 | REL-3 | SPR-3 | HU-VEN-01 |
| 62 | HU-REP-04 | Reportes – Ver ventas por método de pago | EPIC-REP | Should have (3) | 2 | REL-3 | SPR-3 | HU-VEN-01 |
| 63 | HU-REP-06 | Reportes – Ver resumen general del inventario | EPIC-REP | Should have (3) | 2 | REL-3 | SPR-3 | HU-INV-01 |
| 64 | HU-REP-07 | Reportes – Ver margen de ganancia por producto | EPIC-REP | Should have (3) | 5 | REL-3 | SPR-3 | HU-VEN-01, HU-INV-01 |
| 65 | HU-REP-08 | Reportes – Ver mermas agrupadas por motivo | EPIC-REP | Should have (3) | 3 | REL-3 | SPR-3 | HU-INV-02 |
| 66 | HU-VEN-03 | Ventas (POS) – Generar comprobante en PDF o reenviar por correo electrónico | EPIC-VEN | Should have (3) | 5 | REL-3 | SPR-3 | HU-VEN-02 |
| 67 | HU-VEN-04 | Ventas (POS) – Buscar producto por código de barras | EPIC-VEN | Should have (3) | 3 | REL-3 | SPR-3 | HU-VEN-01 |

### Could have (5 Historias · 14 Puntos)

| Orden | HU ID | Título Oficial de la Historia de Usuario | Épica | MoSCoW | Puntos | Release | Sprint | Depende de |
|:---:|---|---|---|---|:---:|:---:|:---:|---|
| 68 | HU-CAT-04 | Categorías – Eliminar categoría sin productos | EPIC-CAT | Could have (2) | 2 | REL-3 | SPR-3 | HU-CAT-02 |
| 69 | HU-CLI-03 | Clientes – Editar correo electrónico de cliente | EPIC-CAT | Could have (2) | 1 | REL-3 | SPR-3 | HU-CLI-02 |
| 70 | HU-PROD-03 | Productos – Escanear código de barras para registrar producto | EPIC-CAT | Could have (2) | 5 | REL-3 | SPR-3 | HU-PROD-02 |
| 71 | HU-REP-09 | Reportes – Exportar reportes en PDF | EPIC-REP | Could have (2) | 3 | REL-3 | SPR-3 | HU-REP-01 |
| 72 | HU-VEN-08 | Ventas (POS) – Exportar historial de ventas a CSV | EPIC-VEN | Could have (2) | 3 | REL-3 | SPR-3 | HU-VEN-05 |

---

## Fuera de Alcance (Won't have · 1 Historia)

| Orden | HU ID | Título Oficial de la Historia de Usuario | Épica | MoSCoW | Puntos | Release | Sprint | Depende de |
|:---:|---|---|---|---|:---:|:---:|:---:|---|
| N/A | HU-VEN-09 | Ventas – Venta a granel o por peso | EPIC-VEN | Won't have (1) | 0 | Ninguno | Ninguno | Ninguna |

---

# ====================================================================
# DOCUMENTO OFICIAL: 04_Plan_de_Lanzamiento_y_Story_Mapping.md
# ====================================================================

---
Código de documento: DOC-PLAN-04
Título: Plan de Lanzamiento y Story Mapping
Versión: 4.8
Fecha: 2026-10-03
Elaborado por: Colonia Infantas, Walter
Revisado por: Angeles Pérez, Jhonny
Estado: Aprobado
Propósito: Especificación del mapa de historias de usuario (Story Mapping) y plan estratégico de lanzamientos incrementales (Releases e Iteraciones)
Documentos relacionados: DOC-PLAN-00, DOC-PLAN-01, DOC-PLAN-02, DOC-PLAN-03-00, DOC-PLAN-05, DOC-PLAN-06, DOC-PLAN-07, DOC-PLAN-08, DOC-ANEXO-B
---

# 04. Plan de Lanzamiento y Story Mapping

## 1. Story Map por Release y Épica (Formato Pizarra)

Estructura de trazabilidad horizontal por épicas funcionales y vertical por horizontes de entrega (Releases / Sprints). Las tarjetas de historia siguen la convención oficial: `nombre · Pri n · n pt`. Pri = MoSCoW (4 = Must have, 3 = Should have, 2 = Could have, 1 = Won't have). Líneas de corte rotuladas MVP / Release 2 / Release 3, con puntos por release y total.

| Release / Horizonte | <u>EPIC-SEG: Seguridad y Accesos</u> | <u>EPIC-CAT: Catálogos y Clientes</u> | <u>EPIC-INV: Inventario y Reposición</u> | <u>EPIC-VEN: Ventas y Caja</u> | <u>EPIC-REP: Reportes, Dashboards y Configuración</u> | Total Release |
|---|---|---|---|---|---|:---:|
| **REL-1 (MVP Operativo)**<br>Sprint 1<br>(30-sep al 13-oct) | Iniciar sesión · Pri 4 · 5 pt<br>Bloqueo de cuenta · Pri 4 · 3 pt<br>Cerrar sesión · Pri 4 · 2 pt<br>Crear empleado · Pri 4 · 5 pt<br>**Subtotal: 4 HU · 15 pt** | Crear categoría · Pri 4 · 2 pt<br>Listar categorías · Pri 4 · 1 pt<br>Registrar producto · Pri 4 · 5 pt<br>Ver catálogo · Pri 4 · 3 pt<br>Registrar proveedor · Pri 4 · 3 pt<br>Registrar cliente · Pri 4 · 3 pt<br>**Subtotal: 6 HU · 17 pt** | Entrada mercadería · Pri 4 · 5 pt<br>Baja por merma · Pri 4 · 5 pt<br>Ajuste por conteo · Pri 4 · 5 pt<br>**Subtotal: 3 HU · 15 pt** | Abrir turno caja · Pri 4 · 5 pt<br>Cerrar turno caja · Pri 4 · 5 pt<br>Historial turnos · Pri 4 · 3 pt<br>Venta Efectivo/Yape/Plin (IziPay) · Pri 4 · 13 pt<br>Emitir comprobante · Pri 4 · 8 pt<br>Historial ventas · Pri 4 · 5 pt<br>**Subtotal: 6 HU · 39 pt** | Configurar negocio · Pri 4 · 3 pt<br>**Subtotal: 1 HU · 3 pt** | **20 HU<br>89 pts<br>178.0 h** |
| *Línea de corte* | **Línea de corte: MVP – fin de Sprint 1 (martes 13-oct, semana 7) · 89 pts acumulados (todas Must have)** | | | | | |
| **REL-2 (Operación y Control)**<br>Sprint 2<br>(14-oct al 27-oct) | Sesión única · Pri 4 · 8 pt<br>Listar empleados · Pri 4 · 2 pt<br>Desactivar empleado · Pri 4 · 3 pt<br>Recuperar clave · Pri 3 · 5 pt<br>Cierre remoto · Pri 3 · 3 pt<br>**Subtotal: 5 HU · 21 pt** | Próximos a vencer · Pri 4 · 3 pt<br>Listar proveedores · Pri 4 · 2 pt<br>Desactivar prov. · Pri 3 · 2 pt<br>**Subtotal: 3 HU · 7 pt** | Crear reposición · Pri 4 · 3 pt<br>Listar solicitudes · Pri 4 · 2 pt<br>Aprobar reposición · Pri 4 · 3 pt<br>Recibir mercadería · Pri 4 · 8 pt<br>Rechazar reposición · Pri 3 · 2 pt<br>**Subtotal: 5 HU · 18 pt** | Anular venta dev. · Pri 4 · 8 pt<br>Movimiento manual · Pri 3 · 3 pt<br>Resumen activo · Pri 3 · 2 pt<br>Aprobar cierre · Pri 3 · 2 pt<br>Cierre forzado · Pri 3 · 5 pt<br>Validar pago Yape/Plin (IziPay) · Pri 3 · 2 pt<br>**Subtotal: 6 HU · 22 pt** | Ver configuración · Pri 4 · 1 pt<br>Resumen ventas · Pri 4 · 5 pt<br>Alertas directivas · Pri 4 · 5 pt<br>Ventas período · Pri 4 · 5 pt<br>Ranking productos · Pri 4 · 3 pt<br>Stock crítico · Pri 4 · 3 pt<br>**Subtotal: 6 HU · 22 pt** | **25 HU<br>90 pts<br>180.0 h** |
| *Línea de corte* | **Línea de corte: Release 2 – fin de Sprint 2 (martes 27-oct, semana 9) · 179 pts acumulados (153 Must + 26 Should)** | | | | | |
| **REL-3 (Mejoras y Supervisión)**<br>Sprint 3<br>(28-oct al 10-nov) | Cambiar clave · Pri 3 · 3 pt<br>Editar empleado · Pri 3 · 3 pt<br>Reactivar empleado · Pri 3 · 2 pt<br>Registro accesos · Pri 3 · 3 pt<br>**Subtotal: 4 HU · 11 pt** | Editar categoría · Pri 3 · 1 pt<br>Listar clientes · Pri 3 · 2 pt<br>Editar producto · Pri 3 · 3 pt<br>Desactivar prod. · Pri 3 · 2 pt<br>Editar proveedor · Pri 3 · 2 pt<br>Eliminar categor. · Pri 2 · 2 pt<br>Editar correo cli. · Pri 2 · 1 pt<br>Escanear código · Pri 2 · 5 pt<br>**Subtotal: 8 HU · 18 pt** | Historial entradas · Pri 3 · 2 pt<br>Historial bajas · Pri 3 · 2 pt<br>Historial ajustes · Pri 3 · 2 pt<br>**Subtotal: 3 HU · 6 pt** | Comprobante PDF · Pri 3 · 5 pt<br>Buscar cód. barras · Pri 3 · 3 pt<br>Exportar ventas CSV · Pri 2 · 3 pt<br>**Subtotal: 3 HU · 11 pt** | Gráfico ventas/día · Pri 3 · 3 pt<br>Ranking dashboard · Pri 3 · 3 pt<br>Reposición pend. · Pri 3 · 2 pt<br>Ventas por día · Pri 3 · 3 pt<br>Ventas por pago · Pri 3 · 2 pt<br>Resumen inventario · Pri 3 · 2 pt<br>Margen ganancia · Pri 3 · 5 pt<br>Mermas motivo · Pri 3 · 3 pt<br>Exportar rep. PDF · Pri 2 · 3 pt<br>**Subtotal: 9 HU · 26 pt** | **27 HU<br>72 pts<br>144.0 h** |
| *Línea de corte* | **Línea de corte: Release 3 – fin de Sprint 3 (martes 10-nov, semana 11) · 251 pts acumulados (100 % del Backlog)** | | | | | |
| **Total Proyecto** | **13 HU · 47 pt** | **17 HU · 42 pt** | **11 HU · 39 pt** | **15 HU · 72 pt** | **16 HU · 51 pt** | **72 HU<br>251 pts<br>502.0 h** |

---

## 2. Plan de Lanzamiento por Release

### REL-1: MVP (Producto Mínimo Viable Operativo)
- **Objetivo Estratégico:** Demostrar y certificar el circuito comercial y operativo indispensable del minimarket, permitiendo la apertura de caja con fondo base, registro de productos y proveedores, abastecimiento inicial de inventario, procesamiento de ventas en mostrador con Efectivo y billetera digital, emisión de boletas y facturas según normativa tributaria, y configuración general de la empresa.
- **Alcance Funcional:** 20 Historias de Usuario, todas de prioridad Must have (89 puntos de historia).
- **Esfuerzo Operativo Asociado:** 178.0 horas de trabajo efectivo distribuidas en 103 tareas técnicas (104.50 h de construcción y 73.50 h de verificación QA independiente).
- **Criterios de Salida (Definition of Done del Release):**
  1. Inicio de sesión funcional con control de acceso por roles y bloqueo tras 5 intentos fallidos consecutivos por 15 minutos (`HU-AUTH-01`, `HU-AUTH-02`).
  2. Catálogos operativos de categorías, productos con control de perecibles y stock mínimo, y proveedores (`HU-CAT-02`, `HU-CAT-01`, `HU-PROD-02`, `HU-PROD-01`, `HU-PROV-02`).
  3. Módulo de inventario registrando entradas directas de existencias iniciales, mermas físicas y ajustes por conteo con trazabilidad de lotes y fechas de vencimiento (`HU-INV-01`, `HU-INV-02`, `HU-INV-03`).
  4. Flujo de caja con apertura de turno obligatoria antes de vender (fondo mínimo S/ 500.00, RN-10), cuadre de caja y cierre con resumen (`HU-CAJA-01`, `HU-CAJA-02`, `HU-CAJA-05`).
  5. Circuito completo de venta en punto de venta (POS) con cálculo automático de totales y desglose de IGV (18 %), validación de vuelto en gaveta, descuento en tiempo real de existencias, emisión de boleta/factura con formato reglamentario y captura de datos del cliente (`HU-VEN-01`, `HU-VEN-02`, `HU-VEN-05`, `HU-CLI-02`).
  6. Configuración de parámetros institucionales y fiscales de la empresa (`HU-CONF-02`).
  7. Aprobación del 100 % de los casos de prueba de verificación de calidad e integración satisfactoria del entorno operativo.
- **Fecha Objetivo y Presentación:** Martes 13 de octubre de 2026 (Semana 7 del calendario académico).
- **Presupuesto Asignado:** S/ 7,500.00 (2 semanas × S/ 625/semana × 6 desarrolladores, todo costo laboral).
- **Riesgos Principales y Mitigación:**
  - *Camino crítico de venta:* `HU-VEN-01` (13 pts) concentra el esfuerzo central. Se mitiga mediante el principio de diseño de interfaces y contratos funcionales acordado el día 1; cierra el día 7 y `HU-VEN-02` el día 8. El sprint cierra en el día 9 con 2.50 h residuales en requerimientos periféricos, reservando el resto del día 9 y el día 10 (día de presentación) como margen de seguridad y regresión final.
  - *Feriado nacional (jueves 8 de octubre):* Mitigado mediante la jornada laboral compensatoria del sábado 3 de octubre.

---

### REL-2: Release 2 (Operación y Control Integral)
- **Objetivo Estratégico:** Completar la gestión operativa y directiva del minimarket mediante la integración del ciclo formal de reposición de mercadería (solicitud, aprobación, recepción de órdenes y mermas por anulación), endurecimiento de la seguridad de sesiones, mecanismos de supervisión de caja, y la activación de cuadros de mando gerencial con alertas tempranas de stock y vencimiento.
- **Alcance Funcional:** 25 Historias de Usuario (16 Must have + 9 Should have), sumando 90 puntos de historia ejecutados en el Sprint 2.
- **Esfuerzo Operativo Asociado:** 180.0 horas de trabajo efectivo distribuidas en 125 tareas técnicas (105.75 h de construcción y 74.25 h de verificación QA independiente).
- **Criterios de Salida (Definition of Done del Release):**
  1. Sesión única concurrente con invalidación automática ante aperturas simultáneas y recuperación de contraseña mediante código de autorización numérico de 4 dígitos con vigencia de 15 minutos (`HU-AUTH-04`, `HU-AUTH-05`, `HU-USR-06`).
  2. Módulo de reposición automatizado: creación de solicitudes mono-producto, flujo de aprobación gerencial con reasignación de proveedor (RN-16) y recepción contra orden aprobada con actualización inmediata de existencias y costo promedio (RN-01, RN-14, `HU-SOL-01` a `HU-SOL-05`).
  3. Anulación de ventas restringida a Administrador/Gerente con reversión de inventario y registro de egreso en caja mientras el turno continúe en estado 'Abierto' (RN-08 y RN-09, `HU-VEN-06`).
  4. Supervisión operativa de caja: movimientos manuales en efectivo hasta S/ 5,000.00 (RN-11, RN-15), supervisión de turnos activos y cierre forzado administrativo (`HU-CAJA-03`, `HU-CAJA-04`, `HU-CAJA-06`, `HU-CAJA-07`).
  5. Cuadros de mando y reportes estratégicos: resumen de ventas del día/mes, stock crítico con semáforo preventivo (RN-06), alerta de productos próximos a vencer y ranking de artículos con mayor rotación (`HU-DASH-01`, `HU-DASH-03`, `HU-REP-01`, `HU-REP-02`, `HU-REP-05`, `HU-PROD-06`).
- **Fecha Objetivo y Presentación:** Martes 27 de octubre de 2026 (Semana 9 del calendario académico).
- **Presupuesto Asignado:** S/ 7,500.00 (2 semanas × S/ 625/semana × 6 desarrolladores).
- **Riesgos Principales y Mitigación:**
  - *Acoplamiento en la recepción de mercadería (`HU-SOL-05`, 8 pts):* Se implementa recepción contra orden aprobada asegurando la actualización atómica del almacén y del costo promedio.
  - *Carga de verificación balanceada:* Des.4 Alcalde asume 30.75 h de testing, distribuyendo el resto de verificaciones entre los demás miembros del equipo bajo el principio de segregación `Construye ≠ Verifica`.

---

### REL-3: Release 3 (Mejoras, Supervisión y Exportación)
- **Objetivo Estratégico:** Optimizar la experiencia de uso y robustecer el sistema con capacidades de supervisión de accesos, edición y mantenimiento avanzado de registros maestros, lector óptico de código de barras para agilización del POS, generación de comprobantes y reportes analíticos descargables en PDF, y análisis detallado de márgenes de ganancia por producto.
- **Alcance Funcional:** 27 Historias de Usuario (22 Should have + 5 Could have), sumando 72 puntos de historia ejecutados en el Sprint 3.
- **Esfuerzo Operativo Asociado:** 144.0 horas de trabajo efectivo distribuidas en 135 tareas técnicas (85.75 h de construcción y 58.25 h de verificación QA independiente).
- **Criterios de Salida (Definition of Done del Release):**
  1. Registro inmutable de supervisión para eventos de autenticación exitosos y fallidos (`HU-LOG-01`).
  2. Gestión de perfil personal, edición de catálogos y reactivación de empleados suspendidos (`HU-AUTH-06`, `HU-CAT-03`, `HU-CAT-04`, `HU-CLI-01`, `HU-CLI-03`, `HU-PROD-04`, `HU-PROD-05`, `HU-PROV-03`, `HU-USR-03`, `HU-USR-05`).
  3. Agilización del punto de venta y catálogo mediante integración con lector óptico de código de barras (`HU-VEN-04`, `HU-PROD-03`).
  4. Trazabilidad histórica completa de movimientos de almacén: entradas, bajas por merma y ajustes físicos (`HU-INV-04`, `HU-INV-05`, `HU-INV-06`).
  5. Descarga e impresión de comprobantes de pago en PDF y reenvío por correo electrónico (`HU-VEN-03`), junto con la especificación para exportación del historial a formato estructurado (`HU-VEN-08`).
  6. Suite analítica completa: ventas por medio de pago, evolución diaria de ventas, rentabilidad/margen por producto, análisis de mermas por causa y exportación general de reportes en PDF (`HU-DASH-02`, `HU-DASH-04`, `HU-DASH-05`, `HU-REP-03`, `HU-REP-04`, `HU-REP-06`, `HU-REP-07`, `HU-REP-08`, `HU-REP-09`).
  7. Aprobación del 100 % de los criterios de aceptación y entrega de la solución final consolidada.
- **Fecha Objetivo y Presentación:** Martes 10 de noviembre de 2026 (Semana 11 del calendario académico).
- **Presupuesto Asignado:** S/ 7,500.00 (2 semanas × S/ 625/semana × 6 desarrolladores).
- **Riesgos Principales y Mitigación:**
  - *Fragmentación de tareas por alto número de historias (27 HU):* Al tratarse de historias focalizadas (media de 2.67 pts/HU), se aplica un flujo continuo de verificación funcional inmediata al concluir la construcción de cada funcionalidad.

---

## 3. Resumen por Release y Sprint

| Release | Sprint Asociado | Semanas de Ejecución | HUs Planificadas | Puntos Totales | Must have (pts) | Should have (pts) | Could have (pts) | Horas Tareas (Doc 07) | Fecha de Entrega / Review | Presupuesto Total |
|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|
| **REL-1** *(MVP)* | **Sprint 1** | Semanas 5 a 7 | 20 | 89 | 89 | 0 | 0 | 178.0 h | Mar 13-oct (Semana 7) | S/ 7,500.00 |
| **REL-2** | **Sprint 2** | Semanas 7 a 9 | 25 | 90 | 64 | 26 | 0 | 180.0 h | Mar 27-oct (Semana 9) | S/ 7,500.00 |
| **REL-3** | **Sprint 3** | Semanas 9 a 11 | 27 | 72 | 0 | 58 | 14 | 144.0 h | Mar 10-nov (Semana 11) | S/ 7,500.00 |
| **TOTAL** | **3 Sprints** | **6 Semanas** | **72** | **251** | **153** | **84** | **14** | **502.0 h** | **Ciclo Académico** | **S/ 22,500.00** |

---

# ====================================================================
# DOCUMENTO OFICIAL: 05_Estimacion_de_Capacidad_Velocidad_y_Costos.md
# ====================================================================

---
Código de Documento: DOC-PLAN-05
Título: Estimación de Capacidad, Velocidad y Costos
Versión: 4.8
Fecha: 2026-10-03
Elaborado por: Angeles Pérez, Jhonny
Revisado por: Colonia Infantas, Walter
Estado: Aprobado
Propósito: Cálculos de capacidad neta, velocidad de entrega, horizonte de iteraciones y presupuesto económico oficial
Documentos relacionados: DOC-PLAN-00, DOC-PLAN-01, DOC-PLAN-02, DOC-PLAN-03-00, DOC-PLAN-04, DOC-PLAN-06, DOC-PLAN-07, DOC-PLAN-08, DOC-ANEXO-A, DOC-ANEXO-B
---

# 05. Estimación de Capacidad, Velocidad y Costos

## Secuencia Oficial de Estimación y Cálculos (Plantilla del Docente)

El dimensionamiento metodológico, temporal y financiero del "Sistema de Gestión Integral para Minimarket" sigue estrictamente la secuencia de cálculo formal y unificada requerida por el docente de Agile Development:

```
1 pt = 2 h-hombre (pivote: HU-CAT-01 – Ver listado de categorías)
1 sprint = 2 semanas
horas.hombre → 2 sem × 25 h/sem × 6 per. = 300 h.per.
V.E. → 1 pt — 2 h
        x — 300 h → 150 pt. (contingencia 80 %) = 120 pt/SP
capacidad neta = 300 h × 80 % = 240 h/sprint (40 h por desarrollador)
n° sprint (proyecto) → 251 pt / 120 pt/SP = 2.09 sprint ≈ 3 sprint (se redondea hacia arriba)
n° sprint (MVP) → 89 pt / 120 pt/SP = 0.74 sprint ≈ 1 sprint
duración del proyecto = 2 sem/sprint × 3 sprint = 6 sem.
costo del proyecto = 6 sem × 625 soles/sem × 6 = 22,500
costo por sprint o release = 22,500 / 3 = 7,500  ·  costo por punto = 22,500 / 251 = 89.64
```

**Presupuesto oficial:** El presupuesto económico total del proyecto se establece en **S/ 22,500.00**, distribuidos en **S/ 7,500.00** por cada uno de los 3 sprints o releases, con un costo asignado por punto de historia de **S/ 89.64** (representando el 100 % de esfuerzo laboral de ingeniería, sin conceptos no laborales ni sobrecostos externos).

---

## (a) Calibración de la Escala de Estimación y Pivote `HU-CAT-01`

El dimensionamiento relativo del esfuerzo se calibra a partir de la historia pivote `HU-CAT-01` (Ver listado de categorías, interfaz UI-003), que representa la unidad atómica mínima de desarrollo funcional en el sistema.

### Estructura de Tareas de la Historia Pivote `HU-CAT-01` (Fuente: DOC-PLAN-07)
Alineada con la plantilla oficial de 8 pasos del docente, la historia pivote requiere 1 punto de historia (2.0 h de esfuerzo base) y desglosa operativamente 2.00 h entre construcción y verificación independiente:

| ID Tarea | Nombre de la Tarea | Tipo | Responsable | Tiempo (h) |
|---|---|---|---|:---:|
| TAR-HU-CAT-01-04 | Desarrollar interfaces | Diseño/Construcción | Des.6 - Angeles | 0.50 |
| TAR-HU-CAT-01-05 | Codificar | Construcción | Des.6 - Angeles | 0.50 |
| TAR-HU-CAT-01-06 | Probar de unidad | Verificación QA | Des.2 - Nolasco | 0.50 |
| TAR-HU-CAT-01-07 | Depuración | Construcción | Des.6 - Angeles | 0.25 |
| TAR-HU-CAT-01-08 | Desplegar en la web | Verificación QA | Des.2 - Nolasco | 0.25 |
| **Total Tareas** | **Plantilla de 5 pasos operativos (reutiliza pasos 1 a 3)** | | **Construye ≠ Verifica** | **2.00 h** |

### Matriz de Referencia Fibonacci Calibrada

| Puntos | Esfuerzo Nominal Base (h) | Complejidad Funcional y de Negocio | Historias Representativas del Backlog |
|:---:|:---:|---|---|
| **1 pt** | 2.0 h | Consulta simple de un catálogo sin lógica de cálculo, o edición simple de un solo campo. | `HU-CAT-01` (Listar categorías), `HU-CONF-01` (Ver configuración), `HU-CAT-03` (Editar categoría), `HU-CLI-03` (Editar correo cliente). |
| **2 pt** | 4.0 h | Mantenimiento estándar sobre un solo registro; listados con filtro simple o activación y suspensión de estado lógico. | `HU-AUTH-03` (Cerrar sesión), `HU-CAT-02` (Crear categoría), `HU-PROV-01` (Listar proveedores), `HU-SOL-02` (Listar reposiciones), `HU-CLI-01` (Listar clientes). |
| **3 pt** | 6.0 h | Operaciones comerciales con validaciones entre entidades, cálculos aritméticos o consulta de registros históricos. | `HU-AUTH-02` (Bloqueo de cuenta), `HU-PROD-01` (Ver catálogo), `HU-PROV-02` (Crear proveedor), `HU-CLI-02` (Crear cliente al vender), `HU-CAJA-05` (Historial de turnos). |
| **5 pt** | 10.0 h | Módulos transaccionales completos, formularios con validaciones de unicidad o actualización de inventario físico. | `HU-AUTH-01` (Iniciar sesión y verificación de credenciales), `HU-USR-02` (Crear empleado), `HU-PROD-02` (Registrar producto), `HU-INV-01` (Entrada mercadería), `HU-CAJA-01` (Abrir caja), `HU-VEN-05` (Historial ventas). |
| **8 pt** | 16.0 h | Flujos transaccionales altamente coordinados con impacto fiscal, concurrencia de sesiones o reversión de inventario y caja. | `HU-AUTH-04` (Sesión única concurrente), `HU-SOL-05` (Recepción contra Solicitud aprobada), `HU-VEN-02` (Comprobantes boleta y factura SUNAT), `HU-VEN-06` (Anulación de venta y devolución). |
| **13 pt** | 26.0 h | Núcleo transaccional de máxima criticidad y densidad operativa del negocio. | `HU-VEN-01` (Venta en mostrador POS: cálculo de totales, desglose de IGV 18 %, pagos en Efectivo / billetera digital Yape/Plin (IziPay) y descuento automático de inventario). |

---

## (b) Jornada de Trabajo, Análisis de Sensibilidad y Justificación

### Matriz de Sensibilidad de Capacidad y Velocidad (6 Developers)

| Jornada Semanal por Desarrollador | Horas Brutas por Sprint (2 sem) | Factor de Enfoque | Capacidad Neta Equipo (h) | Velocidad Estimada (pts/sprint) | Sprints para 251 pts | Viabilidad en Calendario Académico |
|:---:|:---:|:---:|:---:|:---:|:---:|---|
| **20 h/semana** | 240 h | 80 % | 192.0 h | 96.0 pts | 2.61 ≈ 3 Sprints | Ajustada; Sprint 1 al 92.7 % de la capacidad. |
| **25 h/semana (Oficial)** | **300 h** | **80 %** | **240.0 h** | **120.0 pts** | **2.09 ≈ 3 Sprints** | **Óptima: balance perfecto entre ritmo sostenible y margen de contingencia.** |
| **26 h/semana** | 312 h | 80 % | 249.6 h | 124.8 pts | 2.01 ≈ 3 Sprints | Límite superior: 2.01 → 3 sprints (sin holgura de programación). |
| **27 h/semana** | 324 h | 80 % | 259.2 h | 129.6 pts | 1.94 ≈ 2 Sprints | La fórmula colapsa a 2 sprints; se pierde el Release 3. |
| **30 h/semana** | 360 h | 80 % | 288.0 h | 144.0 pts | 1.74 ≈ 2 Sprints | Riesgo de sobrecarga académica; colapsa a 2 sprints. |
| **40 h/semana (Dedicación Plena)** | 480 h | 80 % | 384.0 h | 192.0 pts | 1.31 ≈ 2 Sprints | Referencia corporativa (8 h × 5 d): colapsa a 2 sprints. |

### Justificación de la Jornada Oficial de 25 Horas/Semana
La dedicación de **25 horas/semana por integrante** (5 horas diarias durante los 5 días laborables semanales) se fundamenta en:
1. **Jornada elegida por el equipo de desarrollo:** El marco docente establece la libertad de pactar la jornada tomando 40 h/semana como referencia corporativa; el equipo adopta 25 h/semana (5 h × 5 días) por resultar sostenible frente a las obligaciones académicas concurrentes, totalizando 50 horas de dedicación bruta individual en cada iteración de 2 semanas. Con 20 h/semana el Sprint 1 demandaría el 92.7 % de la capacidad neta sin margen de absorción; con más de 26 h/semana la fórmula matemática contraería el proyecto a 2 sprints, desarticulando el plan estratégico de 3 releases.
2. **Capacidad neta suficiente:** Tras reservar el 20 % para ceremonias Scrum (10 h por integrante), cada desarrollador dispone de **40.0 horas netas de ingeniería** por sprint, absorbiendo con holgura las 502.0 horas totales de tareas operativas (promedio de 83.67 h por integrante a lo largo del proyecto).

---

## (c) Calendario Académico Oficial y Fechas de Entrega

El proyecto se desarrolla a lo largo de 6 semanas lectivas activas (semana 5 a semana 11, estructuradas de miércoles a martes) con presentaciones de revisión periódicas:

| Hito / Ceremonia | Semana Académica | Ventana Temporal | Días Hábiles | Horas Netas Planificadas | Entregable / Hito Principal |
|---|:---:|---|:---:|:---:|---|
| **Sprint 1 (REL-1)** | Semanas 5 a 7 | Mié 30-sep al Mar 13-oct | 10 días *(1)* | 178.0 h de tareas | **MVP Operativo:** Inicio de sesión, catálogos maestros, inventario físico inicial, turnos de caja y ventas POS con emisión fiscal. |
| **Sprint Review 1** | **Semana 7** | **Martes 13-octubre** | Sesión de clase | Demostración | **Presentación en clase del Release 1 (MVP)** ante el docente. |
| **Sprint 2 (REL-2)** | Semanas 7 a 9 | Mié 14-oct al Mar 27-oct | 10 días | 180.0 h de tareas | **Operación y Control:** Reposición formal, sesiones concurrentes, anulación de ventas y cuadros de mando gerenciales. |
| **Sprint Review 2** | **Semana 9** | **Martes 27-octubre** | Sesión de clase | Demostración | **Presentación en clase del Release 2** ante el docente. |
| **Sprint 3 (REL-3)** | Semanas 9 a 11 | Mié 28-oct al Mar 10-nov | 10 días | 144.0 h de tareas | **Mejoras, Supervisión y Exportación:** Trazabilidad de seguridad, lector óptico de código de barras, exportación documental y análisis de rentabilidad. |
| **Sprint Review 3** | **Semana 11** | **Martes 10-noviembre** | Sesión de clase | Demostración | **Presentación en clase del Release 3 (Cierre Final)** ante el docente. |
| **Semanas 12 a 15** | Semanas 12 a 15 | Noviembre a Diciembre | — | — | Consolidación de memoria académica y sustentación final del curso. |

*(1) Compensación del feriado nacional y disponibilidad:* El jueves 08 de octubre de 2026 (Combate de Angamos) es feriado nacional no laborable. Para garantizar los 10 días de avance en Sprint 1, se compensa la jornada programando trabajo colaborativo el **sábado 03 de octubre de 2026** [SUPUESTO – acordado por el equipo]. Las sesiones lectivas de los martes 06-oct y 13-oct contemplan horarios específicos; se programan 4.0 h efectivas el día 6, y el martes 13-oct se reserva exclusivamente para la demostración del MVP en la sesión de revisión.

---

## (d) Justificación del Factor de Contingencia (80 % Neto de Desarrollo)

Por cada sprint de 2 semanas, cada uno de los 6 desarrolladores dispone de 50 horas brutas de dedicación (25 h/semana × 2). El **20 % (10.0 horas exactas por desarrollador)** se reserva formalmente para las ceremonias del marco Scrum:

| Ceremonia Scrum | Duración y Frecuencia | Horas por Desarrollador | Justificación y Participantes |
|---|---|:---:|---|
| **Sprint Planning** | 1 sesión al inicio del sprint | 4.0 h | Desglose de historias en tareas según plantilla docente de 8 pasos, validación de dependencias y estimación. Equipo completo (6 desarrolladores). |
| **Daily Scrum** | 10 sesiones de 15 minutos (diario) | 2.5 h | Sincronización diaria: inspección de avance respecto al burndown, detección de impedimentos y acuerdos de integración. Equipo completo. |
| **Sprint Review** | 1 sesión al cierre del sprint | 2.0 h | Demostración funcional del incremento de software terminado ante el Product Owner y el docente. Equipo completo. |
| **Sprint Retrospective** | 1 sesión al cierre del sprint | 1.5 h | Inspección del proceso de trabajo, análisis de oportunidades y compromisos de mejora continua. Equipo completo. |
| **Total Ceremonias** | **Deducción de Timebox** | **10.0 h** | **Exactamente el 20.0 % de las 50.0 horas brutas de dedicación individual.** |

Por consiguiente, el **factor de contingencia del 80.0 %** responde al estándar docente y coincide numéricamente con el descuento de 10.0 h de ceremonias por persona, garantizando:
- Capacidad neta individual = 50.0 h brutas × 0.80 = **40.0 horas netas de desarrollo por sprint**
- Capacidad neta del equipo = 6 desarrolladores × 40.0 h = **240.0 horas netas de desarrollo por sprint**

---

## (e) Matrices de Resumen, Burndown y Balance de Carga

### Cuadro 5.1: Resumen por Sprint
Métricas consolidadas de historias de usuario, puntos comprometidos, horas de tareas de ingeniería (fuente: DOC-PLAN-07) y balance de prioridades MoSCoW:

| Sprint | Horas Netas Capacidad | HUs Planificadas | Puntos Comprometidos | Horas Tareas Reales (07) | Carga / Capacidad Neta | Estado | Must have (pts) | Should have (pts) | Could have (pts) |
|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|
| **Sprint 1** | 240.0 h | 20 | 89 | 178.0 h | 74.2 % | Planificado | 89 | 0 | 0 |
| **Sprint 2** | 240.0 h | 25 | 90 | 180.0 h | 75.0 % | Planificado | 64 | 26 | 0 |
| **Sprint 3** | 240.0 h | 27 | 72 | 144.0 h | 60.0 % | Planificado | 0 | 58 | 14 |
| **TOTAL** | **720.0 h** | **72** | **251** | **502.0 h** | **69.7 %** | | **153** | **84** | **14** |

*Nota sobre la holgura operativa:* Las 502.0 horas de tareas desglosadas representan el 69.7 % de la capacidad neta máxima (720.0 h en los 3 sprints). La diferencia restante (218.0 horas acumuladas entre los 6 integrantes, ~72.7 h por sprint) actúa como colchón preventivo para absorción de desvíos, estabilización en entornos de verificación y preparación de las demostraciones académicas.

---

### Cuadro 5.2: Proyección Burndown Planificado del Proyecto

| Hito / Iteración | Puntos Comprometidos | Puntos Completados Acumulados | Puntos Pendientes (Burndown) | % Avance Acumulado |
|---|:---:|:---:|:---:|:---:|
| **Sprint 0 (Punto de partida inicial)** | 0 | 0 | **251** | 0.0 % |
| **Fin de Sprint 1 (REL-1 · MVP)** | 89 | 89 | **162** | 35.5 % |
| **Fin de Sprint 2 (REL-2)** | 90 | 179 | **72** | 71.3 % |
| **Fin de Sprint 3 (REL-3)** | 72 | 251 | **0** | 100.0 % |

---

### Cuadro 5.3: Carga de Trabajo por Integrante y Sprint (Fuente Inmutable: DOC-PLAN-07)
Distribución de las 502.0 horas de tareas técnicas entre los 6 miembros del equipo (Capacidad máxima individual: 40.0 h netas por sprint):

| Desarrollador / Rol Asignado | Sprint 1 (h) | Sprint 2 (h) | Sprint 3 (h) | Total Proyecto (h) | Construcción (h) | Verificación QA (h) | Carga Máxima en un Sprint |
|---|---:|---:|---:|---:|---:|---:|:---:|
| **Des.1 Velasquez** | 28.50 | 30.00 | 24.75 | 83.25 | 62.00 | 21.25 | 30.00 h (75.0 %) |
| **Des.2 Nolasco** | 30.25 | 30.25 | 26.75 | 87.25 | 67.00 | 20.25 | 30.25 h (75.6 %) |
| **Des.3 Castillo** | 30.75 | 30.50 | 19.00 | 80.25 | 53.00 | 27.25 | 30.75 h (76.9 %) |
| **Des.4 Alcalde** *(QA Lead)* | 26.25 | 30.75 | 30.50 | 87.50 | 0.00 | 87.50 | 30.75 h (76.9 %) |
| **Des.5 Colonia** | 31.25 | 30.25 | 22.75 | 84.25 | 59.50 | 24.75 | 31.25 h (78.1 %) |
| **Des.6 Angeles** | 31.00 | 28.25 | 20.25 | 79.50 | 54.50 | 25.00 | 31.00 h (77.5 %) |
| **TOTAL HORAS EQUIPO** | **178.00** | **180.00** | **144.00** | **502.00** | **296.00** | **206.00** | **31.25 h (Des.5 en S1)** |

*Validaciones de consistencia:*
1. **Cumplimiento estricto de límites:** Ningún desarrollador excede su capacidad efectiva de 40.0 h netas en ningún sprint. La carga máxima puntual es de 31.25 h (Des.5 Colonia en Sprint 1), preservando 8.75 h de holgura personal.
2. **Especialización de calidad sin autoverificación:** Des.4 Alcalde asume el rol de responsable de calidad asignando el 100 % de su tiempo (87.50 h) a tareas de verificación y pruebas, complementado por los demás desarrolladores bajo la regla inviolable `Construye ≠ Verifica`.

---

## (f) Registro de Riesgos Metodológicos y de Capacidad Actualizados

1. **Camino crítico de Ventas POS (`HU-VEN-01`, 13 pts) en Sprint 1:**
   - *Impacto:* Los pasos 4 al 8 de `HU-VEN-01` totalizan 26.00 h operativas; la secuencia de tareas requiere atención prioritaria para asegurar la demostración oportuna del MVP.
   - *Mitigación:* Se adopta la estrategia de diseño y especificación previa de contratos de interfaz desde el día 1; la verificación funcional concluye en el día 7 y la emisión de comprobantes (`HU-VEN-02`) culmina en el día 8. El sprint finaliza en el día 9 con 2.50 h residuales, reservando holgura operativa y el día 10 para la presentación oficial en clase.
2. **Concentración de la Verificación QA en Des.4 Alcalde:**
   - *Impacto:* Des.4 asume 87.50 horas de verificación independiente a lo largo de los 3 sprints (~29.17 h por sprint).
   - *Mitigación:* Distribución colaborativa planificada en DOC-PLAN-07: los otros 5 integrantes absorben 118.50 horas de verificación cruzada, asegurando que ninguna historia dependa de un único evaluador.
3. **Feriado nacional en ventana clave de entrega (jueves 08 de octubre):**
   - *Impacto:* Reducción de una jornada de avance previo a la presentación del MVP.
   - *Mitigación:* Jornada de trabajo compensatorio programada para el sábado 03 de octubre de 2026 [SUPUESTO – acordado por el equipo], preservando los 10 días de ejecución y el cierre en día 9.
4. **Dependencias externas de integración (SUNAT y pasarelas de pago):**
   - *Impacto:* Variabilidad de respuesta en servicios tributarios y billeteras electrónicas externas.
   - *Mitigación:* Especificación formal de supuestos de negocio en DOC-PLAN-01 (`SUP-01` y `SUP-03`): emisión local estructurada de comprobantes sin obligatoriedad de conexión sincrónica externa, y validación en mostrador de transacciones de Yape/Plin (IziPay) mediante código de autorización único (RN-02).
5. **Alta densidad de historias de usuario en Sprint 3 (27 historias, 72 pts):**
   - *Impacto:* Elevado número de cambios de contexto y revisiones funcionales independientes.
   - *Mitigación:* El 88.9 % de las historias del Sprint 3 (24 de 27) presentan un tamaño acotado (≤ 3 pts), facilitando un flujo dinámico de construcción y pase continuo a verificación independiente sin acumulación de trabajo pendiente.

---

# ====================================================================
# DOCUMENTO OFICIAL: 06_Sprint_Backlog.md
# ====================================================================

---
Código de Documento: DOC-PLAN-06
Título: Sprint Backlog
Versión: 4.8
Fecha: 2026-10-03
Elaborado por: Angeles Pérez, Jhonny
Revisado por: Colonia Infantas, Walter
Estado: Aprobado
Propósito: Detalle de historias planificadas por sprint, dependencias intra e inter sprint, asignaciones y plan de ejecución
Documentos relacionados: DOC-PLAN-00, DOC-PLAN-01, DOC-PLAN-02, DOC-PLAN-03-00, DOC-PLAN-04, DOC-PLAN-05, DOC-PLAN-07, DOC-PLAN-08, DOC-ANEXO-A, DOC-ANEXO-B
---

# 06. Sprint Backlog

## Introducción y Parámetros Operativos
El Sprint Backlog desagrega el Product Backlog del "Sistema de Gestión Integral para Minimarket" a lo largo de **3 Sprints de 2 semanas cada uno**, alineados 1:1 con los horizontes de entrega de los **3 Releases oficiales (REL-1, REL-2 y REL-3)**:
- **Equipo de desarrollo:** 6 Developers dedicados con jornada de 25 h/semana (50 h brutas por persona por sprint).
- **Factor de enfoque neto:** 80 % (deducción del 20 % / 10 h por integrante para ceremonias Scrum oficiales: Planning 4 h, Daily 2.5 h, Review 2 h, Retrospectiva 1.5 h).
- **Capacidad neta del equipo:** 240.0 horas efectivas de desarrollo por sprint (40.0 h netas por desarrollador).
- **Velocidad estimada:** 120 puntos de historia por sprint (pivote `HU-CAT-01` = 1 pt = 2.0 h de esfuerzo base).
- **Esfuerzo operativo total (DOC-PLAN-07):** 363 tareas técnicas que suman **502.0 horas** (296.0 h de Construcción y 206.0 h de Verificación QA independiente).
- **Principio de independencia de calidad:** En el 100 % de las historias se cumple la regla estricta `Construye ≠ Verifica`. Des.4 Alcalde asume el rol exclusivo de QA Lead sin tareas de construcción.

---

## Sprint 1: Release 1 (MVP Operativo)

### Información General del Sprint 1
- **Objetivo del Sprint (Sprint Goal):** Entregar un MVP operativo que permita vender en mostrador con turno de caja abierto, descontar inventario y emitir comprobantes, sobre una base de seguridad por roles y catálogos maestros.
- **Alcance funcional del Sprint:** Poner en marcha y certificar ante el docente el Producto Mínimo Viable (MVP) operativo del minimarket, abarcando la infraestructura de autenticación por roles, administración de usuarios y configuración base, catálogos maestros (categorías, proveedores y productos con stock mínimo), gestión física de almacén (entradas, mermas y ajustes), arqueo y control de turnos de caja, y el circuito transaccional completo del Punto de Venta (POS) con medios de pago en Efectivo y billetera digital Yape/Plin (IziPay), emisión legal de boletas y facturas según normativa SUNAT local, y captura automática de clientes.
- **Ventana Temporal:** Semana 5 a Semana 7 (Miércoles 30 de septiembre al Martes 13 de octubre de 2026).
- **Días Laborales:** 10 días de trabajo (9 días hábiles lectivos más el sábado 03 de octubre como jornada compensatoria del feriado nacional del 08 de octubre).
- **Presentación en Clase (Sprint Review 1):** Martes 13 de octubre de 2026 (Semana 7).
- **Puntos Comprometidos:** **89 puntos de historia** (20 Historias de Usuario, 100 % Must have).
- **Horas de Tareas Planificadas:** **178.0 horas** (104.50 h Construcción + 73.50 h Verificación QA).
- **Capacidad Neta Disponible:** 240.0 horas (Uso de capacidad: 74.2 %, con 62.0 h de holgura preventiva).
- **Presupuesto Económico:** S/ 7,500.00 (2 semanas × S/ 625/semana × 6 desarrolladores, todo costo laboral).

### Historias de Usuario Comprometidas (Sprint 1)

| ID de HU | Título de la Historia de Usuario | MoSCoW | Pts | Depende de | Constructor Principal | Verificador QA |
|---|---|:---:|:---:|---|---|---|
| **HU-AUTH-01** | Autenticación – Iniciar sesión | Must have (4) | 5 | Ninguna | Des.5 Colonia | Des.2 Nolasco |
| **HU-AUTH-02** | Autenticación – Bloquear cuenta por intentos fallidos | Must have (4) | 3 | HU-AUTH-01 | Des.1 Velasquez | Des.6 Angeles |
| **HU-AUTH-03** | Autenticación – Cerrar sesión | Must have (4) | 2 | HU-AUTH-01 | Des.3 Castillo | Des.5 Colonia |
| **HU-CAJA-01** | Caja – Abrir turno de caja | Must have (4) | 5 | HU-AUTH-01 | Des.2 Nolasco | Des.5 Colonia |
| **HU-CAT-02** | Categorías – Crear nueva categoría de productos | Must have (4) | 2 | HU-AUTH-01 | Des.6 Angeles | Des.3 Castillo |
| **HU-CONF-02** | Configuración – Actualizar configuración del negocio | Must have (4) | 3 | HU-AUTH-01 | Des.3 Castillo | Des.6 Angeles |
| **HU-PROV-02** | Proveedores – Registrar nuevo proveedor | Must have (4) | 3 | HU-AUTH-01 | Des.6 Angeles | Des.5 Colonia |
| **HU-USR-02** | Usuarios – Crear cuenta de nuevo empleado | Must have (4) | 5 | HU-AUTH-01 | Des.2 Nolasco | Des.4 Alcalde |
| **HU-CAJA-02** | Caja – Cerrar turno de caja y cuadrar | Must have (4) | 5 | HU-CAJA-01 | Des.1 Velasquez | Des.4 Alcalde |
| **HU-CAT-01** | Categorías – Ver lista de categorías de productos | Must have (4) | 1 | HU-CAT-02 | Des.6 Angeles | Des.2 Nolasco |
| **HU-PROD-02** | Productos – Registrar nuevo producto en el catálogo | Must have (4) | 5 | HU-CAT-02 | Des.2 Nolasco | Des.6 Angeles |
| **HU-CAJA-05** | Caja – Consultar historial de turnos de caja | Must have (4) | 3 | HU-CAJA-02 | Des.6 Angeles | Des.4 Alcalde |
| **HU-INV-01** | Inventario – Registrar entrada de mercadería | Must have (4) | 5 | HU-PROD-02, HU-PROV-02 | Des.1 Velasquez | Des.6 Angeles |
| **HU-PROD-01** | Productos – Ver catálogo completo de productos | Must have (4) | 3 | HU-PROD-02 | Des.5 Colonia | Des.6 Angeles |
| **HU-INV-02** | Inventario – Registrar baja de inventario por merma | Must have (4) | 5 | HU-INV-01 | Des.2 Nolasco | Des.1 Velasquez |
| **HU-INV-03** | Inventario – Realizar ajuste por conteo físico | Must have (4) | 5 | HU-INV-01 | Des.3 Castillo | Des.6 Angeles |
| **HU-VEN-01** | Ventas (POS) – Registrar una venta con Efectivo o Yape/Plin (IziPay) | Must have (4) | 13 | HU-CAJA-01, HU-INV-01 | Des.3 Castillo | Des.4 Alcalde |
| **HU-CLI-02** | Clientes – Registrar cliente automáticamente al vender | Must have (4) | 3 | HU-VEN-01 | Des.2 Nolasco | Des.3 Castillo |
| **HU-VEN-02** | Ventas (POS) – Emitir boleta o factura | Must have (4) | 8 | HU-VEN-01 | Des.1 Velasquez | Des.5 Colonia |
| **HU-VEN-05** | Ventas (POS) – Consultar historial de ventas | Must have (4) | 5 | HU-VEN-01 | Des.5 Colonia | Des.4 Alcalde |
| **TOTALES S1** | **20 Historias de Usuario Comprometidas** | | **89** | | **104.50 h Constr.** | **73.50 h QA** |

---

### Plan de ejecución del Sprint 1 (Camino Crítico y Cronograma Verificados)

#### 1. Modelo de precedencias (principio «contrato primero»)
1. TAR-HU-AUTH-01-01 (Configurar entorno) precede a toda tarea del sprint; ningún paso 5 (Codificar) inicia antes de terminar TAR-HU-AUTH-01-03.
2. Dentro de una HU: 4 → 5. El paso 6 (Probar de unidad) inicia al terminar el paso 4 y avanza en paralelo con el paso 5 contra el contrato de datos/servicios acordado el día 1. El paso 7 (Depuración) exige 5 y 6 terminados. El paso 8 (Desplegar) exige el 7.
3. Entre HU: el paso 7 de una HU exige el paso 5 terminado de sus prerrequisitos; el paso 8 exige el paso 8 terminado de sus prerrequisitos (despliegue en orden de dependencia).
4. Cada developer ejecuta una tarea a la vez; 4 h efectivas por día (5 h × 80 %).

#### 2. Camino crítico lógico: **22.00 h** (sin restricción de recursos)

| Orden | Tarea | Responsable | Duración (h) | Inicio temprano (h) | Fin temprano (h) | Holgura (h) |
|---:|---|---|---:|---:|---:|---:|
| 1 | TAR-HU-AUTH-01-01 · Configurar entorno | Des.5 | 1.00 | 0.00 | 1.00 | 0.00 |
| 2 | TAR-HU-VEN-01-04 · Desarrollar interfaces | Des.3 | 3.75 | 1.00 | 4.75 | 0.00 |
| 3 | TAR-HU-VEN-01-05 · Codificar | Des.3 | 7.50 | 4.75 | 12.25 | 0.00 |
| 4 | TAR-HU-VEN-01-07 · Depuración | Des.3 | 3.75 | 12.25 | 16.00 | 0.00 |
| 5 | TAR-HU-VEN-01-08 · Desplegar en la web | Des.4 | 3.75 | 16.00 | 19.75 | 0.00 |
| 6 | TAR-HU-VEN-02-08 · Desplegar en la web | Des.5 | 2.25 | 19.75 | 22.00 | 0.00 |
| | **Total camino crítico lógico** | | **22.00** | | | |

Tareas casi críticas: TAR-HU-VEN-01-06 · Probar de unidad (Des.4, 7.25 h, holgura 0.25 h) y TAR-HU-VEN-05-08 · Desplegar en la web (Des.4, 1.50 h, holgura 0.75 h).

*Variante conservadora (si pruebas no se solapan con codificación, paso 6 tras paso 5):* **29.25 h** = AUTH-01-01 (1.00) + VEN-01-04 (3.75) + VEN-01-05 (7.50) + VEN-01-06 (7.25) + VEN-01-07 (3.75) + VEN-01-08 (3.75) + VEN-02-08 (2.25). Los pasos 4 al 8 de HU-VEN-01 suman 26.00 h; los 29.25 h incluyen además AUTH-01-01 y VEN-02-08.

#### 3. Carga individual en el Sprint 1 (horas de tareas ÷ 4 h efectivas/día)

| Developer | Horas S1 | Días efectivos necesarios | % de los 8 días planificados antes del colchón |
|---|---:|---:|---:|
| Des.1 Velasquez | 28.50 | 7.12 | 89.1 % |
| Des.2 Nolasco | 30.25 | 7.56 | 94.5 % |
| Des.3 Castillo | 30.75 | 7.69 | 96.1 % |
| Des.4 Alcalde | 26.25 | 6.56 | 82.0 % |
| Des.5 Colonia | 31.25 | 7.81 | 97.7 % |
| Des.6 Angeles | 31.00 | 7.75 | 96.9 % |

Hallazgo: Aunque el sprint usa el 74.2 % de la capacidad agregada (178 h de 240 h), Des.2, Des.3, Des.5 y Des.6 requieren entre 7.6 y 7.8 de los 8 días previos al colchón. Las dependencias secuenciales desplazan el cierre al día 9.

#### 4. Cronograma por developer y día (asignaciones inmutables de DOC-PLAN-07)
Cada celda indica HU y pasos de la plantilla (p. ej. VEN-01·4,5 = pasos 4 y 5 de HU-VEN-01). Días 9 (parcial) y 10 son colchón/regresión/ensayo; el día 10 (martes 13-oct) es la presentación en clase.

| Developer | Día 1<br>mié 30-sep | Día 2<br>jue 01-oct | Día 3<br>vie 02-oct | Día 4<br>sáb 03-oct | Día 5<br>lun 05-oct | Día 6<br>mar 06-oct | Día 7<br>mié 07-oct | Día 8<br>vie 09-oct | Día 9<br>lun 12-oct | Día 10<br>mar 13-oct |
|---|---|---|---|---|---|---|---|---|---|---|
| Des.1 Velasquez | INV-01·4,5<br>VEN-02·4 | INV-01·5<br>VEN-02·4,5 | VEN-02·5<br>INV-01·7 | INV-01·7<br>VEN-02·5<br>CAJA-02·4,5 | CAJA-02·5<br>AUTH-02·4<br>INV-02·6 | INV-02·6<br>AUTH-02·4<br>VEN-02·7 | CAJA-02·7<br>AUTH-02·5,7 | INV-02·8 | — | — |
| Des.2 Nolasco | PROD-02·4<br>CAJA-01·4 | AUTH-01·6<br>PROD-02·5 | PROD-02·5<br>CAJA-01·5<br>AUTH-01·8 | AUTH-01·8<br>PROD-02·7<br>CAJA-01·7<br>USR-02·4 | USR-02·4,5<br>INV-02·4 | USR-02·5<br>INV-02·5 | CLI-02·4,5<br>USR-02·7 | INV-02·7<br>CLI-02·7<br>CAT-01·6 | CAT-01·8 | — |
| Des.3 Castillo | VEN-01·4 | VEN-01·4,5 | VEN-01·5 | VEN-01·5,7<br>CAT-02·6 | VEN-01·7<br>CAT-02·8<br>INV-03·4,5 | INV-03·5<br>CONF-02·4,5 | CONF-02·5<br>AUTH-03·4<br>CLI-02·6<br>INV-03·7 | AUTH-03·5,7<br>CONF-02·7<br>CLI-02·8 | — | — |
| Des.4 Alcalde | — | VEN-01·6 | VEN-01·6 | CAJA-05·6<br>CAJA-02·6 | CAJA-02·6<br>USR-02·6 | USR-02·6<br>VEN-01·8 | VEN-01·8<br>USR-02·6<br>VEN-05·6<br>CAJA-02·8 | CAJA-02·8<br>USR-02·8<br>VEN-05·8<br>CAJA-05·8 | CAJA-05·8 | — |
| Des.5 Colonia | AUTH-01·1,2,3,4 | AUTH-01·5<br>CAJA-01·6 | CAJA-01·6<br>AUTH-01·7<br>PROV-02·6<br>VEN-02·6 | VEN-02·6<br>PROV-02·8 | PROV-02·8<br>CAJA-01·8<br>VEN-05·4,5 | VEN-05·5<br>PROD-01·4,5 | PROD-01·5<br>AUTH-03·6<br>VEN-02·8<br>VEN-05·7 | VEN-05·7<br>VEN-02·8<br>PROD-01·7<br>AUTH-03·8 | — | — |
| Des.6 Angeles | CAT-02·4<br>PROV-02·4<br>PROD-02·6 | PROD-02·6<br>PROV-02·4<br>INV-01·6 | INV-01·6<br>CAT-02·5<br>PROV-02·5,7<br>CAJA-05·4 | PROV-02·7<br>CAJA-05·4,5<br>CAT-02·7<br>CAT-01·4,5 | PROD-02·8<br>INV-01·8 | INV-01·8<br>INV-03·6<br>AUTH-02·6 | AUTH-02·6<br>CONF-02·6<br>PROD-01·6<br>CAJA-05·7 | CAJA-05·7<br>INV-03·8<br>AUTH-02·8<br>CONF-02·8 | CONF-02·8<br>PROD-01·8<br>CAT-01·7 | — |

#### 5. Burndown diario planificado

| Día | Fecha | Semana del curso | Horas ejecutadas | Horas restantes | HU cerradas (acum.) | Puntos cerrados (acum.) | Puntos pendientes |
|---:|---|---:|---:|---:|---:|---:|---:|
| 1 | mié 30-sep | 5 | 16.00 | 162.00 | 0 | 0 | 89 |
| 2 | jue 01-oct | 5 | 23.25 | 138.75 | 0 | 0 | 89 |
| 3 | vie 02-oct | 5 | 24.00 | 114.75 | 0 | 0 | 89 |
| 4 | sáb 03-oct | 5 | 22.25 | 92.50 | 1 | 5 | 84 |
| 5 | lun 05-oct | 6 | 22.50 | 70.00 | 5 | 20 | 69 |
| 6 | mar 06-oct | 6 | 24.00 | 46.00 | 6 | 25 | 64 |
| 7 | mié 07-oct | 6 | 24.00 | 22.00 | 7 | 38 | 51 |
| 8 | vie 09-oct | 6 | 19.50 | 2.50 | 16 | 79 | 10 |
| 9 | lun 12-oct | 7 | 2.50 | 0.00 | 20 | 89 | 0 |
| 10 | mar 13-oct | 7 | 0.00 | 0.00 | 20 | 89 | 0 |

#### 6. Cierre de HU

| HU | Cierra el día | Fecha | Pts |
|---|---:|---|---:|
| HU-AUTH-01 | 4 | sáb 03-oct | 5 |
| HU-PROV-02 | 5 | lun 05-oct | 3 |
| HU-CAT-02 | 5 | lun 05-oct | 2 |
| HU-CAJA-01 | 5 | lun 05-oct | 5 |
| HU-PROD-02 | 5 | lun 05-oct | 5 |
| HU-INV-01 | 6 | mar 06-oct | 5 |
| HU-VEN-01 | 7 | mié 07-oct | 13 |
| HU-CAJA-02 | 8 | vie 09-oct | 5 |
| HU-VEN-02 | 8 | vie 09-oct | 8 |
| HU-INV-03 | 8 | vie 09-oct | 5 |
| HU-USR-02 | 8 | vie 09-oct | 5 |
| HU-INV-02 | 8 | vie 09-oct | 5 |
| HU-AUTH-02 | 8 | vie 09-oct | 3 |
| HU-AUTH-03 | 8 | vie 09-oct | 2 |
| HU-CLI-02 | 8 | vie 09-oct | 3 |
| HU-VEN-05 | 8 | vie 09-oct | 5 |
| HU-CONF-02 | 9 | lun 12-oct | 3 |
| HU-CAJA-05 | 9 | lun 12-oct | 3 |
| HU-PROD-01 | 9 | lun 12-oct | 3 |
| HU-CAT-01 | 9 | lun 12-oct | 1 |

**Resultado verificado:** HU-VEN-01 (13 pts, camino crítico) cierra el día 7 (mié 07-oct) y HU-VEN-02 el día 8 (vie 09-oct). El sprint cierra formalmente el **día 9 (lun 12-oct) con 2.50 h residuales** en HU periféricas (HU-CONF-02, HU-CAJA-05, HU-PROD-01, HU-CAT-01). El colchón preventivo abarca el resto del lunes 12-oct y el martes 13-oct previo a la clase de presentación del MVP.

#### 7. Sensibilidad del cierre del Sprint 1 (simulación con restricciones de precedencias)
Formato: día de cierre (horas efectivas usadas ese día). Escenarios: **base**; **mar 6-oct a media jornada** (clase); **VEN-01 +30 %** de sobre-esfuerzo.

| Jornada efectiva/día (bruta) | Modelo contrato primero: base | mar ½ | VEN-01 +30 % | Modelo conservador (6 tras 5): base | mar ½ | VEN-01 +30 % |
|---|---|---|---|---|---|---|
| 4.0 h (5.0 h) — oficial | 9 (1.75) | 9 (3.75) | 10 (4.00) | 10 (2.50) | 11 (0.50) | 12 (2.00) |
| 4.5 h (5.6 h) | 8 (2.25) | 8 (4.50) | 9 (4.25) | 9 (2.50) | 10 (0.25) | 11 (1.25) |
| 5.0 h (6.25 h) | 7 (3.75) | 8 (1.25) | 9 (0.50) | 8 (3.50) | 9 (1.00) | 10 (1.50) |
| 6.0 h (7.5 h) | 6 (3.75) | 7 (0.75) | 7 (5.00) | 7 (2.50) | 7 (5.50) | 8 (5.00) |

#### 8. Disparadores de control y Plan B de alcance
- **Punto de control 1 — cierre del día 5 (lun 05-oct):** Horas restantes planificadas = 70.00 h. Si las horas restantes reales superan **80 h** (desvío ≥ 10 h), se activa el Plan B.
- **Plan B:** Mover al Sprint 2 las HU periféricas sin dependientes en Sprint 1: HU-CAT-01 (1 pt), HU-PROD-01 (3 pts), HU-CAJA-05 (3 pts) y HU-VEN-05 (5 pts) = **12 pts / 24 h**. El MVP queda en 77 pts (16 HU, todas Must have) y el Sprint 2 en 102 pts (85 % de la V.E. = 120), dentro de la capacidad.
- **Punto de control 2 — cierre del día 7 (mié 07-oct):** Horas restantes planificadas = 22.00 h. Si las reales superan **30 h**, el equipo detiene la apertura de historias nuevas y enfoca todo el esfuerzo en cerrar la cadena central de ventas (HU-VEN-01, HU-VEN-02) y sus prerrequisitos.

#### 9. Supuestos del cronograma
- Sábado 03-oct laborado como compensación del feriado nacional del jueves 08-oct.
- Disponibilidad de 4.0 h efectivas el martes 06-oct (sesión lectiva nocturna).
- El martes 13-oct (presentación de MVP en clase) se reserva exclusivamente para la Sprint Review, sin planificar desarrollo.

---

## Sprint 2: Release 2 (Operación y Control Integral)

### Información General del Sprint 2
- **Objetivo del Sprint (Sprint Goal):** Cerrar el ciclo de abastecimiento y fortalecer el control operativo: reposición formal con aprobación, sesión única, anulaciones con devolución, supervisión de caja y tableros gerenciales de alertas.
- **Alcance funcional del Sprint:** Desarrollar, integrar y certificar el Release 2, consolidando el ciclo formal de reposición de mercadería (solicitud, aprobación, rechazo y recepción contra Solicitud aprobada con costeo promedio ponderado), el endurecimiento de la seguridad de sesiones (sesión única por usuario con expulsión de sesiones concurrentes, recuperación de clave por correo y cierre remoto), la supervisión operativa y control de caja (movimientos manuales, resumen activo, aprobación y forzado de cierres ajenos), el protocolo de anulaciones de venta con devolución de inventario, y la suite de control directivo con reportes analíticos iniciales y tableros gerenciales de alertas tempranas.
- **Ventana Temporal:** Semana 7 a Semana 9 (Miércoles 14 de octubre al Martes 27 de octubre de 2026).
- **Días Laborales:** 10 días hábiles de trabajo.
- **Presentación en Clase (Sprint Review 2):** Martes 27 de octubre de 2026 (Semana 9).
- **Puntos Comprometidos:** **90 puntos de historia** (25 Historias de Usuario: 16 Must have [64 pts] + 9 Should have [26 pts]).
- **Horas de Tareas Planificadas:** **180.0 horas** (105.75 h Construcción + 74.25 h Verificación QA).
- **Capacidad Neta Disponible:** 240.0 horas (Uso de capacidad: 75.0 %, con 60.0 h de holgura preventiva).
- **Presupuesto Económico:** S/ 7,500.00 (2 semanas × S/ 625/semana × 6 desarrolladores).

### Historias de Usuario Comprometidas (Sprint 2)

| ID de HU | Título de la Historia de Usuario | MoSCoW | Pts | Depende de | Constructor Principal | Verificador QA |
|---|---|:---:|:---:|---|---|---|
| **HU-AUTH-04** | Autenticación – Garantizar sesión única por usuario | Must have (4) | 8 | HU-AUTH-01, HU-AUTH-03 | Des.5 Colonia | Des.3 Castillo |
| **HU-AUTH-05** | Autenticación – Recuperar contraseña por correo | Should have (3) | 5 | HU-AUTH-01 | Des.5 Colonia | Des.4 Alcalde |
| **HU-USR-06** | Usuarios – Forzar cierre de sesión remoto | Should have (3) | 3 | HU-AUTH-01 | Des.3 Castillo | Des.4 Alcalde |
| **HU-CONF-01** | Configuración – Ver configuración actual del negocio | Must have (4) | 1 | HU-CONF-02 | Des.5 Colonia | Des.6 Angeles |
| **HU-PROV-01** | Proveedores – Ver lista de proveedores | Must have (4) | 2 | HU-PROV-02 | Des.6 Angeles | Des.5 Colonia |
| **HU-USR-01** | Usuarios – Listar empleados del sistema | Must have (4) | 2 | HU-USR-02 | Des.3 Castillo | Des.1 Velasquez |
| **HU-USR-04** | Usuarios – Desactivar cuenta de empleado | Must have (4) | 3 | HU-USR-02 | Des.2 Nolasco | Des.1 Velasquez |
| **HU-CAJA-03** | Caja – Registrar movimiento manual de efectivo | Should have (3) | 3 | HU-CAJA-01 | Des.3 Castillo | Des.4 Alcalde |
| **HU-CAJA-04** | Caja – Ver resumen del turno activo | Should have (3) | 2 | HU-CAJA-01 | Des.5 Colonia | Des.4 Alcalde |
| **HU-CAJA-07** | Caja – Forzar cierre de turno ajeno | Should have (3) | 5 | HU-CAJA-01 | Des.2 Nolasco | Des.3 Castillo |
| **HU-PROV-04** | Proveedores – Desactivar o reactivar proveedor | Should have (3) | 2 | HU-PROV-02 | Des.3 Castillo | Des.4 Alcalde |
| **HU-SOL-01** | Reposición – Crear solicitud de reposición | Must have (4) | 3 | HU-PROD-02, HU-PROV-02 | Des.6 Angeles | Des.1 Velasquez |
| **HU-CAJA-06** | Caja – Aprobar cierre de turno | Should have (3) | 2 | HU-CAJA-02 | Des.6 Angeles | Des.2 Nolasco |
| **HU-DASH-03** | Dashboard – Alertas de stock crítico, vencimientos y turnos olvidados | Must have (4) | 5 | HU-INV-01, HU-CAJA-05 | Des.6 Angeles | Des.4 Alcalde |
| **HU-PROD-06** | Productos – Consultar productos próximos a vencer | Must have (4) | 3 | HU-INV-01 | Des.2 Nolasco | Des.4 Alcalde |
| **HU-REP-05** | Reportes – Ver stock crítico | Must have (4) | 3 | HU-INV-01 | Des.1 Velasquez | Des.4 Alcalde |
| **HU-SOL-02** | Reposición – Listar solicitudes con filtro por estado | Must have (4) | 2 | HU-SOL-01 | Des.2 Nolasco | Des.1 Velasquez |
| **HU-SOL-03** | Reposición – Aprobar solicitud de reposición | Must have (4) | 3 | HU-SOL-01 | Des.3 Castillo | Des.4 Alcalde |
| **HU-SOL-04** | Reposición – Rechazar solicitud de reposición | Should have (3) | 2 | HU-SOL-01 | Des.1 Velasquez | Des.3 Castillo |
| **HU-DASH-01** | Dashboard – Ver resumen de ventas del día y del mes | Must have (4) | 5 | HU-VEN-01 | Des.1 Velasquez | Des.5 Colonia |
| **HU-REP-01** | Reportes – Ver resumen de ventas por período | Must have (4) | 5 | HU-VEN-01 | Des.5 Colonia | Des.2 Nolasco |
| **HU-REP-02** | Reportes – Ver ranking de productos más vendidos | Must have (4) | 3 | HU-VEN-01 | Des.1 Velasquez | Des.6 Angeles |
| **HU-SOL-05** | Reposición – Completar solicitud al recibir mercadería | Must have (4) | 8 | HU-SOL-03 | Des.2 Nolasco | Des.1 Velasquez |
| **HU-VEN-06** | Ventas (POS) – Anular una venta con devolución | Must have (4) | 8 | HU-VEN-01 | Des.6 Angeles | Des.4 Alcalde |
| **HU-VEN-07** | Ventas (POS) – Verificar recepción de pago Yape/Plin (IziPay) | Should have (3) | 2 | HU-VEN-01 | Des.3 Castillo | Des.6 Angeles |
| **TOTALES S2** | **25 Historias de Usuario Comprometidas** | | **90** | | **105.75 h Constr.** | **74.25 h QA** |

### Estrategia de Ejecución del Sprint 2
1. **Arranque inmediato de dependencias heredadas:** Dado que la infraestructura base de autenticación (`HU-AUTH-01`), catálogos (`HU-PROD-02`, `HU-PROV-02`), inventario (`HU-INV-01`), caja (`HU-CAJA-01`, `HU-CAJA-02`) y ventas (`HU-VEN-01`) quedó desplegada y verificada en Sprint 1, todas las historias del Sprint 2 pueden iniciar construcción inmediatamente desde el Día 1 sin bloqueos externos.
2. **Encadenamiento del módulo de reposición:** La secuencia `HU-SOL-01` (Creación) → `HU-SOL-02` / `HU-SOL-03` / `HU-SOL-04` (Gestión/Aprobación) → `HU-SOL-05` (Recepción contra Solicitud aprobada con actualización de existencias) se programa de forma coordinada entre Des.6, Des.3, Des.1 y Des.2.
3. **Flujos transaccionales de control y supervisión:** Des.6 lidera la anulación de ventas (`HU-VEN-06`, 8 pts), restringida exclusivamente a Administrador o Gerente, con reversión física hacia merma o stock mientras el turno de caja continúe en estado 'Abierto' (RN-08 y RN-09). Des.5 implementa la concurrencia de sesiones (`HU-AUTH-04`, 8 pts) en coordinación con el cierre forzado remoto (`HU-USR-06`).
4. **Activación de tableros y reportería directiva:** Se despliegan los cuadros de mando consolidados (`HU-DASH-01`, `HU-DASH-03`) y la reportería de ventas y stock crítico (`HU-REP-01`, `HU-REP-02`, `HU-REP-05`), garantizando la visibilidad de alertas para la toma de decisiones.

---

## Sprint 3: Release 3 (Mejoras, Supervisión y Exportación)

### Información General del Sprint 3
- **Objetivo del Sprint (Sprint Goal):** Completar el producto con trazabilidad de accesos, mantenimiento de catálogos, lector de código de barras, trazabilidad histórica de inventario, comprobantes descargables y analítica de negocio.
- **Alcance funcional del Sprint:** Completar y certificar la totalidad del Product Backlog del sistema (Release 3), implementando el registro inmutable de trazabilidad de accesos (`HU-LOG-01`), las funciones avanzadas de edición y reactivación de catálogos y personal, la agilización de búsquedas y registro mediante lector de código de barras USB/óptico, la trazabilidad histórica de movimientos de almacén, la generación descargable de comprobantes de pago en PDF, la especificación de exportación a CSV y la suite completa de analítica de negocio (márgenes de ganancia, desglose diario y por método de pago, y reporte de mermas).
- **Ventana Temporal:** Semana 9 a Semana 11 (Miércoles 28 de octubre al Martes 10 de noviembre de 2026).
- **Días Laborales:** 10 días hábiles de trabajo.
- **Presentación en Clase (Sprint Review 3 - Sustentación Final):** Martes 10 de noviembre de 2026 (Semana 11).
- **Puntos Comprometidos:** **72 puntos de historia** (27 Historias de Usuario: 22 Should have [58 pts] + 5 Could have [14 pts]).
- **Horas de Tareas Planificadas:** **144.0 horas** (85.75 h Construcción + 58.25 h Verificación QA).
- **Capacidad Neta Disponible:** 240.0 horas (Uso de capacidad: 60.0 %, con 96.0 h de holgura preventiva).
- **Presupuesto Económico:** S/ 7,500.00 (2 semanas × S/ 625/semana × 6 desarrolladores).

### Historias de Usuario Comprometidas (Sprint 3)

| ID de HU | Título de la Historia de Usuario | MoSCoW | Pts | Depende de | Constructor Principal | Verificador QA |
|---|---|:---:|:---:|---|---|---|
| **HU-AUTH-06** | Autenticación – Cambiar contraseña propia | Should have (3) | 3 | HU-AUTH-01 | Des.2 Nolasco | Des.4 Alcalde |
| **HU-LOG-01** | Trazabilidad – Consultar registro de accesos al sistema | Should have (3) | 3 | HU-AUTH-01 | Des.1 Velasquez | Des.3 Castillo |
| **HU-CAT-03** | Categorías – Editar nombre de categoría | Should have (3) | 1 | HU-CAT-02 | Des.1 Velasquez | Des.4 Alcalde |
| **HU-PROV-03** | Proveedores – Editar datos de un proveedor | Should have (3) | 2 | HU-PROV-02 | Des.2 Nolasco | Des.4 Alcalde |
| **HU-USR-03** | Usuarios – Editar datos de un empleado | Should have (3) | 3 | HU-USR-02 | Des.6 Angeles | Des.4 Alcalde |
| **HU-CAT-04** | Categorías – Eliminar categoría sin productos | Could have (2) | 2 | HU-CAT-02 | Des.5 Colonia | Des.1 Velasquez |
| **HU-PROD-04** | Productos – Editar datos de un producto | Should have (3) | 3 | HU-PROD-02 | Des.1 Velasquez | Des.4 Alcalde |
| **HU-PROD-05** | Productos – Desactivar o reactivar producto | Should have (3) | 2 | HU-PROD-02 | Des.6 Angeles | Des.4 Alcalde |
| **HU-USR-05** | Usuarios – Reactivar cuenta de empleado | Should have (3) | 2 | HU-USR-04 | Des.1 Velasquez | Des.4 Alcalde |
| **HU-PROD-03** | Productos – Escanear código de barras para registrar producto | Could have (2) | 5 | HU-PROD-02 | Des.5 Colonia | Des.2 Nolasco |
| **HU-DASH-05** | Dashboard – Ver solicitudes de reposición pendientes | Should have (3) | 2 | HU-SOL-01 | Des.1 Velasquez | Des.4 Alcalde |
| **HU-INV-04** | Inventario – Consultar historial de entradas | Should have (3) | 2 | HU-INV-01 | Des.6 Angeles | Des.4 Alcalde |
| **HU-REP-06** | Reportes – Ver resumen general del inventario | Should have (3) | 2 | HU-INV-01 | Des.2 Nolasco | Des.4 Alcalde |
| **HU-DASH-02** | Dashboard – Ver gráfico de evolución de ventas por día | Should have (3) | 3 | HU-VEN-01 | Des.5 Colonia | Des.4 Alcalde |
| **HU-DASH-04** | Dashboard – Ver ranking de productos más vendidos | Should have (3) | 3 | HU-VEN-01 | Des.6 Angeles | Des.5 Colonia |
| **HU-INV-05** | Inventario – Consultar historial de bajas | Should have (3) | 2 | HU-INV-02 | Des.2 Nolasco | Des.4 Alcalde |
| **HU-INV-06** | Inventario – Consultar historial de ajustes | Should have (3) | 2 | HU-INV-03 | Des.2 Nolasco | Des.5 Colonia |
| **HU-REP-03** | Reportes – Ver ventas desglosadas por día | Should have (3) | 3 | HU-VEN-01 | Des.3 Castillo | Des.2 Nolasco |
| **HU-REP-04** | Reportes – Ver ventas por método de pago | Should have (3) | 2 | HU-VEN-01 | Des.2 Nolasco | Des.3 Castillo |
| **HU-REP-07** | Reportes – Ver margen de ganancia por producto | Should have (3) | 5 | HU-VEN-01, HU-INV-01 | Des.6 Angeles | Des.4 Alcalde |
| **HU-REP-08** | Reportes – Ver mermas agrupadas por motivo | Should have (3) | 3 | HU-INV-02 | Des.5 Colonia | Des.2 Nolasco |
| **HU-VEN-04** | Ventas (POS) – Buscar producto por código de barras | Should have (3) | 3 | HU-VEN-01 | Des.3 Castillo | Des.4 Alcalde |
| **HU-CLI-01** | Clientes – Listar clientes registrados | Should have (3) | 2 | HU-CLI-02 | Des.6 Angeles | Des.2 Nolasco |
| **HU-VEN-03** | Ventas (POS) – Generar comprobante en PDF o reenviar por correo electrónico | Should have (3) | 5 | HU-VEN-02 | Des.1 Velasquez | Des.3 Castillo |
| **HU-CLI-03** | Clientes – Editar correo electrónico de cliente | Could have (2) | 1 | HU-CLI-02 | Des.3 Castillo | Des.1 Velasquez |
| **HU-REP-09** | Reportes – Exportar reportes en PDF | Could have (2) | 3 | HU-REP-01 | Des.1 Velasquez | Des.3 Castillo |
| **HU-VEN-08** | Ventas (POS) – Exportar historial de ventas a CSV | Could have (2) | 3 | HU-VEN-05 | Des.5 Colonia | Des.4 Alcalde |
| **TOTALES S3** | **27 Historias de Usuario Comprometidas** | | **72** | | **85.75 h Constr.** | **58.25 h QA** |

### Estrategia de Ejecución del Sprint 3
1. **Flujo ágil de alta cadencia para historias atomizadas:** El Sprint 3 reúne 27 historias con un promedio de 2.67 puntos por HU. Al tratarse de componentes modulares, el equipo aplica un ciclo corto de desarrollo y pase continuo a pruebas unitarias sin tiempos de espera.
2. **Generación documental y exportación:** Se implementan las librerías de generación y renderizado PDF para comprobantes (`HU-VEN-03`) y reportes gerenciales (`HU-REP-09`), y la serialización a formato CSV estructurado para historial comercial (`HU-VEN-08`).
3. **Agilización periférica:** Se incorporan los componentes de escucha de eventos HID del navegador para el escaneo de códigos de barra estándar tanto en el registro de productos (`HU-PROD-03`) como en la búsqueda inmediata en punto de venta (`HU-VEN-04`).
4. **Analítica de rentabilidad y supervisión de seguridad:** Se completan los reportes financieros de margen de ganancia (`HU-REP-07`) y el registro inmutable de accesos (`HU-LOG-01`), cerrando el 100 % de los requisitos funcionales del sistema.
5. **Holgura para certificación y cierre:** Con 144.0 horas de tareas y 96.0 horas de colchón (40.0 % de holgura), la capacidad restante se destina a pruebas de regresión integral y a la consolidación del paquete final de entrega académica.

---

---

# ====================================================================
# DOCUMENTO OFICIAL: 08_Reglas_de_Negocio_y_Glosario.md
# ====================================================================

---
Código de documento: DOC-PLAN-08
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

| Regla ID | Regla de Negocio | Descripción Operativa y Criterio de Aplicación | Roles Afectados | Historias de Usuario Asociadas |
|---|---|---|---|---|
| **RN-01** | Política de Ingreso Inicial y Abastecimiento por Solicitud | El sistema permitirá el ingreso directo de mercadería al almacén únicamente durante la primera carga de existencias de un producto nuevo (sin inventario previo), o cuando sea efectuado por el Administrador para regularizaciones extraordinarias de stock. Toda entrada de mercadería posterior ejecutada por el personal de almacén exigirá obligatoriamente estar vinculada a una solicitud de reposición previamente aprobada. | Almacenero, Administrador | HU-INV-01, HU-SOL-05 |
| **RN-02** | Protección contra Pagos Duplicados con Cobro Digital (IziPay) | Al registrar un cobro mediante Yape/Plin mediante terminal IziPay con código de autorización de 6 dígitos, el sistema exigirá ingresar obligatoriamente dicho código de autorización numérico emitido por el terminal físico de pago. El sistema validará en tiempo real que el código de autorización no haya sido registrado previamente en ninguna venta del historial del minimarket, impidiendo registrar ventas duplicadas con un mismo comprobante digital [DECISIÓN PENDIENTE D4]. | Vendedor | HU-VEN-01, HU-VEN-07 |
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
   El vendedor inicia su turno verificando la existencia de un turno de caja abierto con el fondo base correspondiente (RN-10). Al presentarse un cliente, añade los productos al carrito de venta mediante lectura de código de barras o búsqueda rápida por nombre, validando en tiempo real el stock comercial y la vigencia del lote (RN-03). A solicitud del cliente, selecciona el medio de pago: si es en efectivo, el sistema calcula el vuelto con base en el dinero entregado; si es con billetera digital, se procesa a través de Yape/Plin mediante terminal IziPay con código de autorización de 6 dígitos, verificando la unicidad del código de autorización (RN-02). Si el comprobante lo requiere, se capturan los datos de identidad del cliente (DNI para boleta o RUC para factura). Al confirmar la venta, el sistema descuenta inmediatamente el inventario y emite el comprobante correlativo según formato fiscal (RN-13).

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
- **Cuadre de Caja:** Balance financiero final de un turno que compara el saldo declarado por el vendedor en su arqueo contra las ventas, cobranzas y egresos registrados en el sistema, reportando si la caja cuadró o si presenta faltante o sobrante.
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
- **Terminal IziPay (Cobro Digital):** Dispositivo físico de punto de venta que procesa cobros electrónicos y pagos mediante billeteras móviles (Yape/Plin (IziPay)), generando un código de autorización de 6 dígitos numéricos.
- **Turno de Caja:** Periodo de trabajo delimitado en el que un vendedor opera un punto de cobro, desde la apertura con fondo inicial hasta el arqueo y cierre respectivo.
- **Vendedor (Cajero):** Rol operativo del personal de mostrador responsable de la atención al público en el Punto de Venta (POS), la apertura y arqueo de su turno de caja, el cobro en efectivo o pasarela digital y la emisión de comprobantes fiscales.
- **Almacenero:** Rol logístico asignado a la recepción física de mercadería (entradas con lotes y vencimientos), registro de bajas justificadas por merma, ejecución de ajustes por conteo físico y generación de solicitudes de reposición.
- **Administrador:** Rol de gestión comercial y supervisión que administra los catálogos de productos, proveedores y clientes, supervisa y aprueba cierres de caja, autoriza anulaciones de venta y configura los parámetros del negocio.
- **Gerente:** Rol directivo enfocado en la toma de decisiones basada en datos, consulta de tableros de control y analítica de ventas, y aprobación o rechazo de solicitudes de reposición de mercadería.
- **SuperAdmin:** Rol con el máximo privilegio de seguridad, facultado privativamente para la creación, modificación, desactivación y cierre forzado de sesión remota de cuentas de usuarios del sistema.

---

# ====================================================================
# DOCUMENTO OFICIAL: Registro_de_Preguntas_y_Decisiones_Product_Owner.md
# ====================================================================

---
Código de documento: DOC-PLAN-PREGUNTAS
Título: Compendio de Preguntas, Decisiones y Definiciones de Negocio del Product Owner
Versión: 4.8
Fecha: 2026-10-03
Elaborado por: Equipo Scrum & Supervisión Metodológica
Revisado por: Colonia Infantas, Walter (Product Owner)
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

## 2. Categoría I: Decisiones Fundamentales de Negocio y Arquitectura (D1 a D12)

### D1: Expiración de Productos y Comercialización el Día de Caducidad
- **Formulación de la Pregunta:**  
  *Un lote de producto perecedero cuya fecha de caducidad coincide exactamente con la fecha del día (`fecha_vencimiento == hoy`), ¿debe ser considerado comercializable durante las horas hábiles de esa jornada, o debe ser bloqueado automáticamente en el punto de venta desde la apertura del turno comercial?*
- **Dilema Operativo:**  
  Permitir su venta maximiza la recuperación económica de la mercadería hasta el último minuto; no obstante, expone al cliente a adquirir un producto que caducará en pocas horas, elevando el riesgo sanitario y el desprestigio del minimarket.
- **Resolución Oficial Adoptada (v4.8):**  
  **Bloqueo estricto preventivo.** En la regla **RN-03**, el sistema restringe de manera categórica en la terminal POS la venta de cualquier lote cuya fecha de expiración sea menor o igual a la fecha de operación (`fecha_vencimiento <= hoy`). La mercadería con caducidad del día debe retirarse antes de abrir la tienda y canalizarse al módulo de bajas por merma.

---

### D2: Esquema de Sesiones Concurrentes y Política de Expulsión
- **Formulación de la Pregunta:**  
  *Si un colaborador inicia sesión en una terminal física teniendo una sesión activa previa en otro dispositivo, ¿debe el sistema impedir el nuevo acceso, permitir ambas sesiones simultáneas, o invalidar la sesión anterior notificando al usuario expulsado?*
- **Dilema Operativo:**  
  Permitir sesiones concurrentes vulnera la trazabilidad de transacciones en mostrador (un cajero podría operar bajo la cuenta de otro). Bloquear el nuevo acceso puede dejar varado a un colaborador si olvidó cerrar sesión en otra terminal.
- **Resolución Oficial Adoptada (v4.8):**  
  **Invalidación de sesión anterior con notificación visual inmediata.** El sistema permite el nuevo inicio de sesión y desactiva en tiempo real la sesión previa, desplegando un banner informativo ámbar en la terminal desconectada indicando que el acceso fue revocado por un inicio de sesión concurrente (`HU-AUTH-04` y regla `RN-UI-01`).

---

### D3: Recuperación de Credenciales de Acceso mediante Clave Temporal OTP
- **Formulación de la Pregunta:**  
  *Para la recuperación no asistida de contraseñas de colaboradores, ¿qué mecanismo de validación resulta óptimo en el mostrador: un enlace alfanumérico extenso por correo o un código de autorización numérico temporal de corta longitud?*
- **Dilema Operativo:**  
  Los enlaces largos son difíciles de manipular en terminales de caja o smartphones de mostrador; los códigos breves requieren un tiempo de caducidad estricto para evitar ataques de fuerza bruta.
- **Resolución Oficial Adoptada (v4.8):**  
  **Clave temporal OTP de 4 dígitos numéricos con expiración de 15 minutos.** Se unificó en `HU-AUTH-05` un código de autorización de 4 dígitos numéricos, limitando los intentos fallidos a un máximo de 3 antes de invalidar la solicitud y exigir asistencia gerencial.

---

### D4: Validación de Cobros Digitales Yape/Plin (IziPay) y Control Antifraude
- **Formulación de la Pregunta:**  
  *Al procesar un cobro mediante billetera digital (Yape/Plin (IziPay)) a través de la pasarela física IziPay, ¿debe el sistema exigir la captura del código de autorización emitido por el terminal y verificar que no se duplique en el historial de ventas?*
- **Dilema Operativo:**  
  Omitir la captura del código de autorización expone al minimarket a fraudes por capturas de pantalla falsificadas o reutilización del mismo comprobante por clientes inescrupulosos; exigir validación manual externa demora la fila de atención.
- **Resolución Oficial Adoptada (v4.8):**  
  **Captura obligatoria y validación de unicidad en tiempo real.** En la regla **RN-02** y pantalla `UI-014`, el sistema exige ingresar los 6 dígitos numéricos del comprobante de autorización emitido por el terminal IziPay, validando en tiempo real que no haya sido registrado previamente en ninguna venta de la historia del establecimiento (`HU-VEN-01` y `HU-VEN-07`).

---

### D5: Atribuciones para el Registro de Productos en Catálogo Maestro
- **Formulación de la Pregunta:**  
  *¿Debe el rol Almacenero tener facultades para dar de alta nuevos productos en el catálogo maestro (`HU-PROD-02`), o esta atribución debe reservarse exclusivamente a la Administración y Gerencia?*
- **Dilema Operativo:**  
  Permitir que el Almacenero cree productos agiliza la recepción de mercadería no registrada previamente; sin embargo, puede generar duplicidades en nombres, categorías incorrectas o precios de venta errados sin aprobación comercial.
- **Resolución Oficial Adoptada (v4.8):**  
  **Segregación de funciones.** La creación, categorización y fijación de precios en el catálogo maestro corresponde exclusivamente a Administrador y Gerente. El Almacenero tiene atribuciones operativas para registrar el ingreso físico de unidades (`UI-010`) y formular solicitudes de reposición (`UI-013`), pero no para alterar la estructura del catálogo.

---

### D6: Fondo Mínimo Obligatorio para Apertura de Caja
- **Formulación de la Pregunta:**  
  *¿Es necesario fijar un monto mínimo obligatorio de dinero en efectivo para que un cajero pueda habilitar un turno de cobro en mostrador?*
- **Dilema Operativo:**  
  Permitir aperturas con fondo cero o montos irrisorios paraliza la atención comercial ante la incapacidad de entregar vuelto en efectivo; exigir un monto excesivo inmoviliza capital innecesario en gavetas.
- **Resolución Oficial Adoptada (v4.8):**  
  **Fondo mínimo normativo de S/ 500.00.** En la regla **RN-10** y pantalla `UI-016`, el sistema valida que el monto inicial declarado en efectivo no sea inferior a S/ 500.00, alertando visualmente al cajero y bloqueando la apertura si no se alcanza dicho umbral de fluidez operativa.

---

### D7: Restricción de Anulación de Ventas y Reincorporación de Mercadería
- **Formulación de la Pregunta:**  
  *¿Bajo qué condiciones puede anularse una venta previamente cobrada y cuál debe ser el destino operativo de los productos devueltos por el cliente?*
- **Dilema Operativo:**  
  Si se anulan ventas de turnos ya liquidados o cerrados, se descuadra la contabilidad financiera y fiscal del día; si la mercadería devuelta se reingresa ciegamente al inventario, se corre el riesgo de vender productos rotos o manipulados.
- **Resolución Oficial Adoptada (v4.8):**  
  **Anulación restringida a turnos abiertos con destino selectivo.** Según las reglas **RN-08** y **RN-09**, solo Administrador y Gerente pueden anular ventas, y únicamente mientras el turno de caja del cobro permanezca en estado 'Abierto'. El supervisor debe seleccionar obligatoriamente el destino de cada ítem devuelto: retorno al stock disponible o pase directo a bajas por merma/daño (`UI-015`).

---

### D8: Estructura de Solicitudes de Reposición y Relación con Proveedores
- **Formulación de la Pregunta:**  
  *Las solicitudes de reposición de mercadería emitidas por el almacén, ¿deben estructurarse por producto individual o como pedidos multiproducto asociados a un proveedor obligatorio?*
- **Dilema Operativo:**  
  Exigir proveedor obligatorio en la solicitud de reposición limita al personal de almacén si desconoce las negociaciones comerciales de la administración; un modelo multiproducto complejo dilata la aprobación rápida de compras urgentes.
- **Resolución Oficial Adoptada (v4.8):**  
  **Modelo mono-producto con proveedor sugerido.** En `HU-SOL-01` a `HU-SOL-05`, cada solicitud se formula por producto y cantidad requerida, con proveedor sugerido opcional. La Administración evalúa y aprueba cada requerimiento de forma ágil, asignando formalmente el proveedor en el momento de la adquisición comercial.

---

### D9: Alcance Tributario de Comprobantes SUNAT (Offline vs Integración Externa)
- **Formulación de la Pregunta:**  
  *¿El sistema debe contemplar la transmisión telemática sincrónica remota hacia los servidores de SUNAT / OSE en cada venta, o debe enfocarse en la generación local estructurada continua?*
- **Dilema Operativo:**  
  La transmisión telemática sincrónica depende de servicios web externos que sufren caídas frecuentes, paralizando las colas de cobro en el minimarket si no hay conexión; no cumplir con las normas tributarias acarrea multas fiscales.
- **Resolución Oficial Adoptada (v4.8):**  
  **Generación local estructurada continua con parámetros SUNAT.** En `HU-VEN-02` y regla **RN-13**, el sistema genera comprobantes locales oficiales (Boletas con serie B001 y Facturas con serie F001) con cálculo del 18 % de IGV y numeración correlativa atómica ininterrumpida. La solución garantiza continuidad operativa total incluso sin conexión a internet, generando los documentos imprimibles y exportables en formato estándar.

---

### D10: Capacidad Neta del Sprint 1 y Gestión del Factor de Contingencia
- **Formulación de la Pregunta:**  
  *Dado que en la primera semana del Sprint 1 el equipo realiza ceremonias de alineación e inducción, ¿debe recortarse la capacidad oficial de 240 horas o mantenerse constante absorbiendo la varianza en el factor de contingencia?*
- **Dilema Operativo:**  
  Reducir la capacidad del Sprint 1 alteraría la métrica de velocidad y desbalancearía los modelos de costos; mantenerla sin justificación matemática aparenta optimismo irreal.
- **Resolución Oficial Adoptada (v4.8):**  
  **Capacidad oficial inmutable de 240 horas netas.** Se ratifica la fórmula matemática: 6 desarrolladores × 25 horas semanales × 2 semanas = 300 horas brutas; aplicando el 80 % de factor de disponibilidad neta = 240 horas netas por sprint (40 h netas por desarrollador). Las horas de inducción se absorben formalmente dentro de las 60 horas del margen de contingencia del 20 % no computadas en el esfuerzo de tareas (502 horas totales).

---

### D11: Inmutabilidad de Registros Históricos de Almacén y Control de Lotes
- **Formulación de la Pregunta:**  
  *Cuando se comete un error en el registro de una entrada o baja de mercadería, ¿debe permitirse la edición o eliminación directa del movimiento registrado?*
- **Dilema Operativo:**  
  Permitir la edición de registros históricos destruye la trazabilidad contable del kardex y facilita fraudes internos; prohibirla exige un mecanismo formal de compensación.
- **Resolución Oficial Adoptada (v4.8):**  
  **Kardex inmutable y regularización por ajuste formal.** Los movimientos de almacén registrados son estrictamente inmutables. Todo error o discrepancia física debe corregirse mediante el flujo formal de Ajuste de Inventario (`HU-INV-06` y `UI-012`), justificando el motivo y registrando al supervisor responsable.

---

### D12: Modelo de Gobernanza Scrum y Segregación de Tareas (Construye vs Verifica)
- **Formulación de la Pregunta:**  
  *¿Puede un mismo desarrollador programar la lógica de negocio de una historia y certificar a la vez sus pruebas de control de calidad (QA)?*
- **Dilema Operativo:**  
  Asignar construcción y verificación al mismo desarrollador reduce tiempos de coordinación; no obstante, genera sesgos de confirmación y permite que defectos no detectados pasen a producción.
- **Resolución Oficial Adoptada (v4.8):**  
  **Principio estricto de segregación "Construye no es igual a Verifica".** En [DOC-PLAN-07](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/docs/planificacion-scrum/paquete_v4.7%20PLANIFICACION%20SI%20SIRVE/paquete_v4.7/07_Desglose_de_Tareas_Task_Breakdown.md), las tareas de Construcción (pasos 1 a 5 y 7; 296 h) y las tareas de Verificación QA (pasos 6 y 8; 206 h) se asignan a desarrolladores distintos, garantizando objetividad y rigor en la certificación del incremento.

---

## 3. Categoría II: Puntos Pendientes de Operación Comercial y Catálogos (PP-01 a PP-12)

| Identificador | Asunto / Pregunta de Negocio | Decisión y Resolución Adoptada en v4.8 | Documento / Regla Impactada |
|:---:|:---|:---|:---:|
| **PP-01** | ¿Cuál es la longitud óptima de la clave temporal OTP? | 4 dígitos numéricos con expiración de 15 minutos. | `HU-AUTH-05` / DOC-PLAN-03-01 |
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
  Esto equivale exactamente a **S/ 7,500.00 por sprint o release** (100 % costo laboral directo). Dado que el equipo aporta 240 horas netas por sprint (40 h netas por desarrollador con factor 80 %), la tarifa neta efectiva resulta de **S/ 25.00 por hora neta**, cubriendo con solvencia las 502 horas oficiales de esfuerzo desglosado en las 363 tareas (296 h de Construcción y 206 h de Verificación QA).

### P-32: Separación entre Especificación Funcional y Evidencia Técnica
- **Pregunta:**  
  *¿Por qué en los 18 documentos de planificación no figuran detalles de programación ni especificaciones técnicas físicas?*
- **Argumentación para la Sustentación:**  
  Porque, bajo los estándares internacionales **ISO/IEC/IEEE 29148** y la **Scrum Guide 2020**, la especificación de requisitos del Product Owner debe ser una declaración contractual de valor y comportamiento del sistema (*a priori*), independiente de la tecnología de implementación subyacente. Los detalles técnicos físicos de construcción se encuentran resguardados con rigor en el expediente interno confidencial de ingeniería (`expediente interno de trazabilidad técnica`).

---

## 7. Dictamen Final de Conformidad

La recopilación de estas 32 preguntas y decisiones formaliza la gobernanza integral del sistema de minimarket. Cada definición adoptada en la versión 4.8 cuenta con respaldo en las 16 Reglas de Negocio ([DOC-PLAN-08](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/docs/planificacion-scrum/paquete_v4.7%20PLANIFICACION%20SI%20SIRVE/paquete_v4.7/08_Reglas_de_Negocio_y_Glosario.md)), las Decisiones de Arquitectura ([DOC-PLAN-10](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/docs/planificacion-scrum/paquete_v4.7%20PLANIFICACION%20SI%20SIRVE/paquete_v4.7/10_Registro_Deuda_Tecnica_y_Brechas.md)) y la Especificación de Interfaz ([DOC-ANEXO-B](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/docs/planificacion-scrum/paquete_v4.7%20PLANIFICACION%20SI%20SIRVE/paquete_v4.7/Anexo_B_Especificacion_de_Interfaz.md)), blindando al equipo de desarrollo ante cualquier objeción durante la sustentación final del proyecto.

---

# ====================================================================
# DOCUMENTO OFICIAL: 01_EPIC-SEG.md
# ====================================================================

---
Código de documento: DOC-PLAN-03-01
Título: Backlog de Producto — EPIC-SEG: Seguridad y Accesos
Versión: 4.8
Fecha: 2026-10-03
Elaborado por: Colonia Infantas, Walter
Revisado por: Angeles Pérez, Jhonny
Estado: Aprobado
Propósito: Especificación de requisitos e historias de usuario de la épica de Seguridad y Accesos
Documentos relacionados: DOC-PLAN-01, DOC-PLAN-02, DOC-PLAN-03-00, DOC-PLAN-08, DOC-ANEXO-B
---

# EPIC-SEG: Seguridad y Accesos

**Objetivo de negocio (OBJ-01):** Garantizar la seguridad, el control de acceso y la trazabilidad de las operaciones del minimarket para prevenir fraudes, fugas de información y accesos no autorizados al sistema comercial.

### Política de Gobernanza y Herencia del Rol SuperAdmin

El rol `SuperAdmin` constituye la máxima autoridad funcional y jerárquica del sistema, integrando por diseño todas las facultades operativas, administrativas y de supervisión contempladas para el rol `Administrador`. 

Con el propósito de salvaguardar el principio de separación de funciones y garantizar la gobernanza del negocio, las operaciones sensibles de gestión de personal —tales como la creación de nuevos empleados, la modificación de datos de identidad y roles, la desactivación preventiva y la reactivación de cuentas de trabajo— serán de **atribución privativa y exclusiva del SuperAdmin**. El rol `Administrador` dispondrá de permisos de consulta y visualización de la nómina de usuarios para coordinaciones operativas, sin capacidad de alteración directa de sus perfiles.

---

### HU-AUTH-01 · Autenticación – Iniciar sesión

| Identificador | Épica | Prioridad MoSCoW | Estimación | Release | Sprint |
|:---:|:---:|:---:|:---:|:---:|:---:|
| HU-AUTH-01 | EPIC-SEG | Must have | 5 pts | REL-1 | SPR-1 |

**Como** empleado habilitado del minimarket (Administrador, Vendedor, Almacenero, Gerente o SuperAdmin),  
**quiero** iniciar sesión introduciendo mi correo electrónico y contraseña asignada,  
**para** acceder de forma autenticada y segura a las funciones operativas que corresponden a mi rol en el negocio.

**Justificación de prioridad:** Funcionalidad núcleo esencial (Must have); constituye la compuerta obligatoria de control de acceso. Sin este mecanismo, ningún usuario puede operar la solución, bloqueando la totalidad de los flujos comerciales y de inventario del establecimiento.

**Criterios de aceptación:**
1. **Dado que** el operador es un empleado registrado y mantiene su cuenta en estado activo, **cuando** ingresa su correo electrónico registrado y contraseña válida en el formulario y pulsa el botón «Iniciar Sesión», **entonces** el sistema valida su identidad, establece su sesión de trabajo autorizada y lo redirige automáticamente al panel principal o vista operativa correspondiente a su rol.
2. **Dado que** el operador introduce un correo no registrado o una contraseña incorrecta, **cuando** solicita iniciar sesión, **entonces** el sistema deniega el acceso, preserva la vista de ingreso y muestra un mensaje de advertencia: «Credenciales inválidas. Por favor verifique sus datos».
3. **Dado que** la cuenta del empleado ha sido configurada en estado inactivo o suspendido, **cuando** el operador intenta autenticarse con credenciales correctas, **entonces** el sistema rechaza el acceso y despliega una notificación informando que la cuenta se encuentra desactivada y que debe contactar al SuperAdmin.
4. **Dado que** el usuario interactúa con la interfaz de ingreso al sistema, **cuando** completa sus datos y visualiza controles, etiquetas y alertas, **entonces** la pantalla satisface integralmente los lineamientos visuales, componentes y microcopy especificados para UI-001 (Inicio de Sesión y Autenticación) en el Catálogo de Interfaces (DOC-ANEXO-B).

**Reglas de negocio aplicables:** 
- N/A

**Dependencias:** 
- Ninguna (historia base de acceso al sistema).

---

### HU-AUTH-02 · Autenticación – Bloquear cuenta por intentos fallidos

| Identificador | Épica | Prioridad MoSCoW | Estimación | Release | Sprint |
|:---:|:---:|:---:|:---:|:---:|:---:|
| HU-AUTH-02 | EPIC-SEG | Must have | 3 pts | REL-1 | SPR-1 |

**Como** Administrador del minimarket,  
**quiero** que el sistema bloquee temporalmente las cuentas de usuario que acumulen reiterados intentos fallidos de contraseña,  
**para** proteger la información comercial y financiera del negocio frente a intentos sistemáticos de adivinación o ataques de fuerza bruta en los terminales.

**Justificación de prioridad:** Funcionalidad de seguridad crítica (Must have); salvaguarda imprescindible para evitar accesos no autorizados en terminales compartidos de atención al público o cajas de cobro.

**Criterios de aceptación:**
1. **Dado que** un usuario incurre en 5 intentos consecutivos fallidos de autenticación sobre una misma cuenta de correo, **cuando** presiona «Iniciar Sesión» en el quinto intento fallido, **entonces** el sistema bloquea preventivamente el acceso a dicha cuenta por un período estricto de 15 minutos continuos y despliega un aviso indicando que la cuenta ha sido suspendida temporalmente por seguridad.
2. **Dado que** una cuenta se encuentra bajo bloqueo preventivo de 15 minutos, **cuando** cualquier operador intenta ingresar credenciales (inclusive si se digita la contraseña correcta), **entonces** el sistema deniega el acceso y muestra un mensaje indicando los minutos restantes de espera antes de permitir un nuevo intento.
3. **Dado que** el período de suspensión de 15 minutos ha concluido satisfactoriamente, **cuando** el empleado titular introduce nuevamente sus credenciales legítimas, **entonces** el sistema restablece automáticamente el contador de intentos fallidos a cero y concede el acceso regular a la plataforma.
4. **Dado que** el operador visualiza los avisos de advertencia e inhabilitación temporal en pantalla, **cuando** se suscitan bloqueos o advertencias de intentos fallidos, **entonces** la interfaz presenta los textos, colores de alerta y elementos de ayuda estipulados para UI-001 en el Catálogo de Interfaces (DOC-ANEXO-B).

**Reglas de negocio aplicables:** 
- N/A

**Dependencias:** 
- Requiere `HU-AUTH-01` (planificada en el mismo Sprint 1).

---

### HU-AUTH-03 · Autenticación – Cerrar sesión

| Identificador | Épica | Prioridad MoSCoW | Estimación | Release | Sprint |
|:---:|:---:|:---:|:---:|:---:|:---:|
| HU-AUTH-03 | EPIC-SEG | Must have | 2 pts | REL-1 | SPR-1 |

**Como** usuario autenticado en la plataforma (cualquier rol asignado),  
**quiero** cerrar voluntariamente mi sesión de trabajo en el momento en que me retire de mi puesto,  
**para** evitar que otras personas hagan uso indebido de mi cuenta operativa y asegurar la estricta atribución de las transacciones registradas.

**Justificación de prioridad:** Funcionalidad núcleo imprescindible (Must have); en un punto de venta (POS) y bodega de abarrotes, los turnos y terminales son rotativos; la ausencia de cierre de sesión vulnera la supervisión de cobros, despachos y arqueos.

**Criterios de aceptación:**
1. **Dado que** un empleado mantiene su sesión de trabajo activa en el navegador, **cuando** hace clic sobre la opción «Cerrar Sesión» en la barra de navegación o menú de perfil, **entonces** el sistema culmina la sesión de forma inmediata, revoca la autorización operativa local y redirige al usuario a la pantalla de inicio de sesión.
2. **Dado que** el empleado ha cerrado su sesión de trabajo, **cuando** él u otra persona intenta ingresar a pantallas internas del sistema mediante los controles de retroceso o avance del navegador web, **entonces** el sistema bloquea la visualización de datos de negocio y exige obligatoriamente un nuevo inicio de sesión formal.
3. **Dado que** el operador interactúa con la barra superior de control del sistema, **cuando** despliega el menú de usuario y pulsa la opción de desconexión, **entonces** los controles, avisos de confirmación y diseño general cumplen los parámetros descritos en la pantalla UI-003 (Navegación Global y Diálogos) del Catálogo de Interfaces (DOC-ANEXO-B).

**Reglas de negocio aplicables:** 
- N/A

**Dependencias:** 
- Requiere `HU-AUTH-01` (planificada en el mismo Sprint 1).

---

### HU-AUTH-04 · Autenticación – Garantizar sesión única por usuario

| Identificador | Épica | Prioridad MoSCoW | Estimación | Release | Sprint |
|:---:|:---:|:---:|:---:|:---:|:---:|
| HU-AUTH-04 | EPIC-SEG | Must have | 8 pts | REL-2 | SPR-2 |

**Como** Administrador del minimarket,  
**quiero** que el sistema impida el inicio simultáneo de múltiples sesiones activas bajo una misma cuenta de usuario,  
**para** evitar la suplantación de identidad entre colaboradores y asegurar que cada transacción registrada corresponda unívocamente al operador en turno.

**Justificación de prioridad:** Funcionalidad esencial de seguridad (Must have); previene el uso compartido no autorizado de credenciales en terminales paralelos de venta o almacén, garantizando la fidelidad de los cierres de caja y registros de merma. Constituye una historia de alta complejidad técnica y operativa (8 pts), mitigada mediante validación sincronizada del identificador de sesión en cada interacción del navegador.

**Criterios de aceptación:**
1. **Dado que** el empleado A dispone de una sesión de trabajo activa en una computadora del minimarket, **cuando** el mismo empleado u otra persona inicia sesión con su cuenta en un segundo equipo o navegador, **entonces** el sistema transfiere de inmediato la validez operativa al nuevo dispositivo y cancela la autorización de la sesión anterior; ante la siguiente acción que intente el dispositivo previo, el sistema lo desconecta de inmediato y lo redirige a la pantalla de ingreso mostrando el banner informativo: «Se inició sesión con esta cuenta desde otro dispositivo».
2. **Dado que** un colaborador cerró de forma regular su sesión previa en su estación habitual, **cuando** ingresa sus credenciales en un nuevo terminal del establecimiento, **entonces** el sistema le permite el ingreso directo sin emitir alertas de concurrencia ni bloqueos de sesión.
3. **Dado que** un operador experimenta una desconexión por apertura de sesión concurrente, **cuando** visualiza la pantalla de ingreso con el aviso de advertencia, **entonces** la interfaz expone la alerta visual y formato definidos para UI-001 (Inicio de Sesión y Autenticación) en el Catálogo de Interfaces (DOC-ANEXO-B).

**Reglas de negocio aplicables:** 
- N/A

**Dependencias:** 
- Requiere `HU-AUTH-01` y `HU-AUTH-03` (ambas finalizadas en Sprint 1). Se complementa operativamente con la funcionalidad de cierre forzado de sesión (`HU-USR-06`, Sprint 2).

---

### HU-AUTH-05 · Autenticación – Recuperar contraseña por correo

| Identificador | Épica | Prioridad MoSCoW | Estimación | Release | Sprint |
|:---:|:---:|:---:|:---:|:---:|:---:|
| HU-AUTH-05 | EPIC-SEG | Should have | 5 pts | REL-2 | SPR-2 |

**Como** colaborador del minimarket registrado en el sistema (cualquier rol),  
**quiero** solicitar la recuperación y restablecimiento de mi contraseña mediante el envío de un código de seguridad a mi correo electrónico,  
**para** restaurar mi acceso al sistema con agilidad en caso de extravío u olvido sin depender de la intervención física del SuperAdmin.

**Justificación de prioridad:** Característica de alto valor operativo (Should have); reduce los tiempos muertos en mostrador y almacén provocados por olvido de claves. No se incluye en el primer lanzamiento (Sprint 1) debido a que la entrega inicial de credenciales se resuelve de forma centralizada con la creación de usuarios (`HU-USR-02`), programándose como autoservicio para el Release 2.

**Criterios de aceptación:**
1. **Dado que** un empleado no recuerda su contraseña de ingreso, **cuando** introduce su dirección de correo electrónico institucional institucional registrada en la pantalla de recuperación y presiona «Enviar código», **entonces** el sistema genera un código de autorización numérico temporal `[DECISIÓN PENDIENTE D3]` y lo despacha de forma inmediata a la bandeja del usuario con una validez máxima e improrrogable de 15 minutos.
2. **Dado que** el colaborador ha recibido el código de autorización en su casilla de correo, **cuando** digita dicho código dentro del período de 15 minutos e ingresa su nueva contraseña cumpliendo las políticas de seguridad, **entonces** el sistema valida el código, actualiza la credencial y confirma que el acceso ha sido restaurado exitosamente, habilitando el ingreso con la nueva clave.
3. **Dado que** han transcurrido más de 15 minutos desde la generación del código de autorización o se acumulan 5 intentos fallidos de validación, **cuando** el usuario intenta utilizar el código expirado o bloqueado, **entonces** el sistema invalida la solicitud, despliega una alerta indicando que el código ya no tiene vigencia por razones de seguridad y orienta al usuario a solicitar una nueva emisión.
4. **Dado que** el usuario tramita el autoservicio de recuperación, **cuando** navega por los formularios de solicitud de código y definición de nueva contraseña, **entonces** la interfaz responde estrictamente a la presentación visual, campos de texto y mensajes detallados en UI-002 (Recuperación de Contraseña) del Catálogo de Interfaces (DOC-ANEXO-B).

**Reglas de negocio aplicables:** 
- N/A

**Dependencias:** 
- Requiere `HU-AUTH-01` (completada en Sprint 1).

**Decisiones de Negocio Pendientes:**
- `[DECISIÓN PENDIENTE D3]`: Longitud y formato del código de autorización de recuperación por correo electrónico. Opciones en evaluación por el Product Owner: código de autorización numérico ágil de 4 dígitos (permite rápida digitación en terminales táctiles) frente a código de autorización numérico estandarizado de 6 dígitos (mayor robustez ante patrones de seguridad).

---

### HU-AUTH-06 · Autenticación – Cambiar contraseña propia

| Identificador | Épica | Prioridad MoSCoW | Estimación | Release | Sprint |
|:---:|:---:|:---:|:---:|:---:|:---:|
| HU-AUTH-06 | EPIC-SEG | Should have | 3 pts | REL-3 | SPR-3 |

**Como** usuario con sesión activa en el sistema (cualquier rol asignado),  
**quiero** cambiar mi contraseña personal de manera voluntaria desde mi entorno de usuario,  
**para** mantener la confidencialidad de mi cuenta, sustituir credenciales provisionales y cumplir periódicamente con normas de higiene digital.

**Justificación de prioridad:** Funcionalidad recomendada (Should have); promueve la autogestión y el fortalecimiento de la seguridad individual del personal, reduciendo la carga administrativa en el Release 3.

**Criterios de aceptación:**
1. **Dado que** un colaborador con sesión abierta accede a la funcionalidad de cambio de clave, **cuando** introduce su contraseña actual correcta y define una nueva contraseña que cumpla con los estándares de robustez del minimarket (mínimo 7 caracteres alfanuméricos combinando mayúsculas, minúsculas y números), **entonces** el sistema actualiza la contraseña de la cuenta, confirma el éxito de la operación y culmina las demás conexiones activas para demandar reautenticación segura con la clave recién establecida.
2. **Dado que** el colaborador intenta modificar su clave, **cuando** introduce erróneamente su contraseña actual, **entonces** el sistema rechaza la actualización, mantiene la clave original y notifica: «La contraseña actual ingresada es incorrecta».
3. **Dado que** el colaborador digita una nueva contraseña, **cuando** dicha combinación no satisface los requisitos mínimos de longitud o variedad de caracteres, **entonces** el sistema le indica de forma explícita las reglas pendientes por cumplir y bloquea el botón de confirmación hasta su debida satisfacción.
4. **Dado que** el colaborador efectúa la modificación de sus credenciales, **cuando** interactúa con los controles en pantalla, **entonces** la experiencia visual y formulario se ajustarán a lo resuelto en la definición de interfaz de usuario de `[DECISIÓN PENDIENTE D7]`.

**Reglas de negocio aplicables:** 
- N/A

**Dependencias:** 
- Requiere `HU-AUTH-01` y `HU-AUTH-03` (finalizadas en Sprint 1).

**Decisiones de Negocio Pendientes:**
- `[DECISIÓN PENDIENTE D7]`: Definición de la interfaz de usuario para autogestión de perfil y cambio voluntario de clave. Opciones en evaluación por el Product Owner: incorporación de un diálogo emergente (modal) desplegable desde la barra de navegación superior (UI-003) versus el diseño de una pantalla completa independiente dedicada al Perfil del Empleado (propuesta UI-027).

### HU-USR-01 · Usuarios – Listar empleados del sistema

| Identificador | Épica | Prioridad MoSCoW | Estimación | Release | Sprint |
|:---:|:---:|:---:|:---:|:---:|:---:|
| HU-USR-01 | EPIC-SEG | Must have | 2 pts | REL-2 | SPR-2 |

**Como** Administrador o SuperAdmin del minimarket,  
**quiero** visualizar la nómina completa y organizada de los colaboradores registrados en el sistema,  
**para** supervisar el personal activo, verificar los roles asignados y mantener un control operativo riguroso sobre los accesos a la plataforma.

**Justificación de prioridad:** Funcionalidad esencial de gestión (Must have); constituye el punto de partida administrativo para auditar identidades y supervisar al equipo de trabajo antes de asignar turnos o coordinar labores.

**Criterios de aceptación:**
1. **Dado que** un usuario con permisos de gestión (Administrador o SuperAdmin) ingresa a la sección de colaboradores, **cuando** carga la vista principal del módulo, **entonces** el sistema presenta una grilla detallada con los nombres y apellidos, rol funcional asignado, correo electrónico institucional y estado operativo actual (Activo o Inactivo) de cada empleado.
2. **Dado que** el minimarket cuenta con un número considerable de trabajadores en su nómina, **cuando** el supervisor introduce un texto en la barra de búsqueda rápida por nombre o correo, **entonces** el sistema filtra los resultados al instante mostrando únicamente los colaboradores cuyas credenciales coincidan con el criterio ingresado.
3. **Dado que** el supervisor interactúa con el listado general de personal, **cuando** visualiza la grilla, aplica filtros o navega por los registros, **entonces** la interfaz satisface integralmente los lineamientos de diseño, indicadores de estado y microcopy especificados en UI-004 (Gestión de Usuarios del Sistema) del Catálogo de Interfaces (DOC-ANEXO-B).

**Reglas de negocio aplicables:** 
- N/A

**Dependencias:** 
- Requiere `HU-AUTH-01` (completada en Sprint 1).

---

### HU-USR-02 · Usuarios – Crear cuenta de nuevo empleado

| Identificador | Épica | Prioridad MoSCoW | Estimación | Release | Sprint |
|:---:|:---:|:---:|:---:|:---:|:---:|
| HU-USR-02 | EPIC-SEG | Must have | 5 pts | REL-1 | SPR-1 |

**Como** SuperAdmin del minimarket,  
**quiero** registrar a un nuevo colaborador en el sistema asignándole sus datos personales, correo institucional, contraseña inicial y rol funcional,  
**para** habilitar su cuenta de trabajo y permitirle operar en las labores de venta, caja, almacén o supervisión según corresponda a sus atribuciones.

**Justificación de prioridad:** Funcionalidad imprescindible para el producto mínimo viable (Must have); sin la capacidad de dar de alta al personal operativo (Cajeros, Almaceneros, Administradores), el negocio no puede operar el sistema de forma segregada ni atribuir transacciones comerciales.

**Criterios de aceptación:**
1. **Dado que** el SuperAdmin diligencia el formulario de alta de un colaborador, **cuando** introduce una dirección de correo electrónico que ya pertenece a otro usuario registrado (activo o inactivo), **entonces** el sistema deniega el registro y muestra un mensaje de alerta indicando que la dirección de correo ya existe, asegurando la identidad unívoca de empleados (RN-12).
2. **Dado que** el SuperAdmin introduce datos válidos y selecciona uno de los roles institucionales reglamentarios (Administrador, Vendedor, Almacenero, Gerente o SuperAdmin), **cuando** presiona el botón «Guardar Empleado», **entonces** el sistema crea la cuenta con estado Activo, asocia la contraseña de acceso y deja al colaborador inmediatamente facultado para autenticarse en la solución.
3. **Dado que** el SuperAdmin completa el registro en la interfaz de gestión, **cuando** visualiza los campos mandatorios, advertencias de validación y confirmaciones, **entonces** la pantalla cumple en su totalidad con el comportamiento visual, mensajes y componentes especificados en UI-004 (Gestión de Usuarios del Sistema) del Catálogo de Interfaces (DOC-ANEXO-B).

**Reglas de negocio aplicables:** 
- RN-12 (Identidad Unívoca de Empleados)

**Dependencias:** 
- Requiere `HU-AUTH-01` (planificada en el mismo Sprint 1).

---

### HU-USR-03 · Usuarios – Editar datos de un empleado

| Identificador | Épica | Prioridad MoSCoW | Estimación | Release | Sprint |
|:---:|:---:|:---:|:---:|:---:|:---:|
| HU-USR-03 | EPIC-SEG | Should have | 3 pts | REL-3 | SPR-3 |

**Como** SuperAdmin del minimarket,  
**quiero** modificar los datos de contacto o el rol asignado a un colaborador en el sistema,  
**para** subsanar imprecisiones de registro, actualizar información personal o reflejar formalmente promociones y traslados de cargo dentro de la organización.

**Justificación de prioridad:** Funcionalidad recomendada de mantenimiento (Should have); programa su ejecución para el Release 3 para la administración continua de la plantilla de colaboradores, mitigando contingencias operativas menores del inicio del proyecto.

**Criterios de aceptación:**
1. **Dado que** el SuperAdmin accede a la ficha de un empleado y modifica sus datos o selecciona un nuevo rol operativo, **cuando** guarda satisfactoriamente los cambios, **entonces** el sistema actualiza la ficha del usuario y, a partir de su próximo inicio de sesión, el colaborador asumirá de manera automática todos los privilegios y restricciones correspondientes a su nuevo rol.
2. **Dado que** el SuperAdmin está editando un perfil, **cuando** intenta modificar el correo electrónico asignando una dirección que ya se encuentra registrada para otro empleado, **entonces** el sistema bloquea la actualización y notifica la imposibilidad del cambio por duplicidad en salvaguarda de la regla de identidad unívoca (RN-12).
3. **Dado que** el SuperAdmin opera sobre la ventana de modificación de colaboradores, **cuando** revisa los campos precargados, controles de rol y botones de guardado, **entonces** la interfaz responde exactamente al diseño, microcopy y flujos estipulados en UI-004 del Catálogo de Interfaces (DOC-ANEXO-B).

**Reglas de negocio aplicables:** 
- RN-12 (Identidad Unívoca de Empleados)

**Dependencias:** 
- Requiere `HU-USR-01` y `HU-USR-02` (Sprints 1 y 2).

---

### HU-USR-04 · Usuarios – Desactivar cuenta de empleado

| Identificador | Épica | Prioridad MoSCoW | Estimación | Release | Sprint |
|:---:|:---:|:---:|:---:|:---:|:---:|
| HU-USR-04 | EPIC-SEG | Must have | 3 pts | REL-2 | SPR-2 |

**Como** SuperAdmin del minimarket,  
**quiero** suspender o desactivar la cuenta de un colaborador que ha concluido su vínculo laboral o incurrido en falta grave,  
**para** revocar de forma inmediata cualquier acceso a la plataforma y salvaguardar los activos, mercadería e información del establecimiento comercial.

**Justificación de prioridad:** Salvaguarda de seguridad crítica (Must have); indispensable para prevenir fraudes, operaciones no autorizadas o cobros en caja por parte de personal desvinculado de la empresa.

**Criterios de aceptación:**
1. **Dado que** un colaborador cesa en sus funciones en el minimarket, **cuando** el SuperAdmin ubica su perfil en la nómina, pulsa «Desactivar» y confirma la instrucción en el diálogo de advertencia, **entonces** el sistema conmuta su estado a Inactivo e interrumpe de forma fulminante cualquier sesión de trabajo que el usuario mantuviese abierta en cualquier terminal del negocio.
2. **Dado que** la cuenta de un trabajador ha sido dada de baja o desactivada, **cuando** él o un tercero intenta iniciar sesión introduciendo las credenciales habituales, **entonces** el sistema rechaza rotundamente la entrada y le notifica que su cuenta se encuentra inactiva y debe contactar a la administración.
3. **Dado que** el SuperAdmin realiza la suspensión desde el panel de colaboradores, **cuando** acciona el botón y visualiza el cambio de etiqueta de estado y los avisos de confirmación, **entonces** la interfaz satisface los parámetros visuales y de interacción fijados en UI-004 del Catálogo de Interfaces (DOC-ANEXO-B).

**Reglas de negocio aplicables:** 
- N/A

**Dependencias:** 
- Requiere `HU-USR-01` y `HU-USR-02` (Sprints 1 y 2). Se articula funcionalmente con el mecanismo de sesión única de `HU-AUTH-04`.

---

### HU-USR-05 · Usuarios – Reactivar cuenta de empleado

| Identificador | Épica | Prioridad MoSCoW | Estimación | Release | Sprint |
|:---:|:---:|:---:|:---:|:---:|:---:|
| HU-USR-05 | EPIC-SEG | Should have | 2 pts | REL-3 | SPR-3 |

**Como** SuperAdmin del minimarket,  
**quiero** rehabilitar una cuenta de colaborador previamente suspendida o desactivada,  
**para** restablecer con agilidad el acceso de un trabajador reincorporado a la empresa preservando íntegro todo su historial transaccional, comercial y operativo previo.

**Justificación de prioridad:** Funcionalidad de optimización administrativa (Should have); reduce la carga operativa evitando la proliferación de cuentas duplicadas y resguardando la trazabilidad histórica de autoría en ventas y mermas.

**Criterios de aceptación:**
1. **Dado que** un exempleado se reincorpora al minimarket, **cuando** el SuperAdmin filtra los colaboradores en estado inactivo y pulsa la opción «Reactivar», **entonces** el sistema conmuta su estado a Activo y le permite de inmediato volver a autenticarse en el sistema con sus credenciales habilitadas.
2. **Dado que** la cuenta es reactivada en la plataforma, **cuando** el colaborador ingresa a realizar sus labores, **entonces** el sistema mantiene intacto su vínculo histórico con todas las operaciones de venta, caja e inventario que hubiese registrado en etapas laborales anteriores.
3. **Dado que** el SuperAdmin gestiona la reactivación en el módulo de personal, **cuando** confirma la restitución de la cuenta, **entonces** la interfaz presenta el cambio dinámico de indicador de estado y alertas visuales definidas en UI-004 del Catálogo de Interfaces (DOC-ANEXO-B).

**Reglas de negocio aplicables:** 
- N/A

**Dependencias:** 
- Requiere `HU-USR-04` (completada en Sprint 2).

---

### HU-USR-06 · Usuarios – Forzar cierre de sesión remoto

| Identificador | Épica | Prioridad MoSCoW | Estimación | Release | Sprint |
|:---:|:---:|:---:|:---:|:---:|:---:|
| HU-USR-06 | EPIC-SEG | Should have | 3 pts | REL-2 | SPR-2 |

**Como** SuperAdmin del minimarket,  
**quiero** forzar de manera remota e inmediata la finalización de la sesión de trabajo activa de cualquier colaborador,  
**para** neutralizar accesos indebidos ante sospechas de suplantación, irregularidades operativas o abandono de terminales en mostrador sin requerir la baja definitiva de la cuenta.

**Justificación de prioridad:** Herramienta recomendada de contingencia y control de accesos (Should have); permite la intervención inmediata de la máxima autoridad sin recurrir a la desactivación del colaborador.

**Criterios de aceptación:**
1. **Dado que** el SuperAdmin identifica un comportamiento irregular o un terminal desatendido con sesión abierta, **cuando** pulsa el botón «Forzar cierre de sesión» sobre dicho colaborador en la nómina de usuarios, **entonces** el sistema revoca al instante la autorización operativa de la sesión conectada en ese terminal.
2. **Dado que** la sesión de un colaborador fue forzada a cerrar por el SuperAdmin, **cuando** dicho colaborador intenta realizar cualquier acción, consulta o registro en su pantalla, **entonces** el sistema interrumpe la navegación y lo redirige de inmediato a la pantalla de inicio de sesión con el mensaje informativo: «Su sesión ha sido finalizada por el Administrador».
3. **Dado que** el SuperAdmin efectúa la orden de desconexión remota, **cuando** interactúa con el botón de acción y aprueba la confirmación de seguridad, **entonces** la interfaz expone los elementos de microcopy, avisos y estilos descritos en UI-004 del Catálogo de Interfaces (DOC-ANEXO-B).

**Reglas de negocio aplicables:** 
- N/A

**Dependencias:** 
- Requiere `HU-AUTH-04` y `HU-USR-01` (planificadas en Sprint 2).

---

### HU-LOG-01 · Supervisión – Consultar registro de accesos al sistema

| Identificador | Épica | Prioridad MoSCoW | Estimación | Release | Sprint |
|:---:|:---:|:---:|:---:|:---:|:---:|
| HU-LOG-01 | EPIC-SEG | Should have | 3 pts | REL-3 | SPR-3 |

**Como** Administrador o SuperAdmin del minimarket,  
**quiero** consultar la bitácora cronológica de eventos de acceso al sistema (inicios de sesión, cierres voluntarios y bloqueos preventivos),  
**para** auditar los horarios de conexión del personal, realizar control de presencia y efectuar investigaciones de trazabilidad ante sospechas de irregularidades operativas.

**Justificación de prioridad:** Requisito de gobernanza y control interno (Should have); programado para el Release 3 para consolidar las facultades de supervisión forense y cumplimiento institucional.

**Criterios de aceptación:**
1. **Dado que** un supervisor autorizado accede a la bitácora de supervisión, **cuando** selecciona un rango de fechas de consulta o filtra por tipo de evento (Inicio de sesión, Cierre de sesión voluntario o Bloqueo por fallos), **entonces** el sistema presenta el listado cronológico de todos los eventos registrados que correspondan a los filtros fijados.
2. **Dado que** el auditor analiza un suceso de acceso específico en la lista, **cuando** visualiza la fila de detalle, **entonces** el sistema expone con precisión la fecha y hora oficial del suceso, el nombre del colaborador titular, el rol con el que operaba y la descripción textual del resultado de la conexión.
3. **Dado que** el auditor interactúa con el visor de eventos de acceso, **cuando** visualiza la grilla paginada, aplica filtros de búsqueda y revisa los datos históricos, **entonces** la interfaz satisface los componentes, textos informativos y presentación definidos en UI-005 (Supervisión de Logs de Acceso) del Catálogo de Interfaces (DOC-ANEXO-B).

**Reglas de negocio aplicables:** 
- N/A

**Dependencias:** 
- Requiere `HU-AUTH-01` y `HU-AUTH-03` (finalizadas en Sprint 1).

---

# ====================================================================
# DOCUMENTO OFICIAL: 02_EPIC-CAT.md
# ====================================================================

---
Código de documento: DOC-PLAN-03-02
Título: Backlog de Producto — EPIC-CAT: Catálogos y Clientes
Versión: 4.8
Fecha: 2026-10-03
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
1. **Dado que** un colaborador habilitado (Almacenero o Administrador) accede a la sección de categorías de productos, **cuando** el sistema carga la pantalla principal del módulo, **entonces** presenta la lista completa de categorías registradas ordenadas alfabéticamente por su nombre comercial.
2. **Dado que** el minimarket dispone de una nómina extensa de familias de artículos, **cuando** el usuario introduce un término en la barra de búsqueda rápida, **entonces** el sistema filtra de forma inmediata la grilla mostrando las coincidencias exactas o parciales.
3. **Dado que** el usuario consulta las categorías comerciales, **cuando** interactúa con la lista, filtros y botones de navegación, **entonces** la interfaz satisface integralmente los lineamientos visuales, indicadores y microcopy especificados en UI-006 (Catálogo de Categorías) del Catálogo de Interfaces (DOC-ANEXO-B).

**Reglas de negocio aplicables:** 
- N/A

**Dependencias:** 
- Requiere `HU-CAT-02` (planificada en el mismo Sprint 1).

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
- Requiere `HU-AUTH-01` (completada en Sprint 1).

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
- Requiere `HU-CAT-02` (Sprint 1).

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
- Requiere `HU-CAT-02` (Sprint 1).

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

**Reglas de negocio aplicables:** 
- N/A

**Dependencias:** 
- Requiere `HU-PROV-02` (Sprint 1).

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
1. **Dado que** el usuario digita un número de RUC de 11 dígitos numéricos correspondiente a una empresa formal (excluyendo números que inicien con 10), **cuando** solicita la comprobación tributaria en el formulario, **entonces** el sistema realiza la consulta oficial de padrón, verifica que el contribuyente figure en estado activo y condición de habido, y autorrellena de manera automática e inmodificable la razón social registrada ante la autoridad tributaria.
2. **Dado que** los datos fiscales han sido validados satisfactoriamente y el usuario completa la información de contacto comercial, **cuando** presiona el botón «Guardar Proveedor», **entonces** el sistema registra la ficha del proveedor en estado Activo y la deja inmediatamente habilitada para operaciones de compra y recepción.
3. **Dado que** el usuario ingresa un número de RUC que ya pertenece a otro proveedor registrado, un RUC con prefijo 10 o un documento tributario que no se encuentre en condición activa y habida, **cuando** intenta procesar el registro, **entonces** el sistema rechaza la operación e indica claramente la causal de rechazo impidiendo la creación de fichas inconsistentes.
4. **Dado que** el usuario opera sobre el formulario de alta de proveedores, **cuando** visualiza los campos, etiquetas de validación y confirmaciones, **entonces** la pantalla satisface integralmente los estándares de presentación y diseño de UI-008 del Catálogo de Interfaces (DOC-ANEXO-B).

**Reglas de negocio aplicables:** 
- N/A

**Dependencias:** 
- Requiere `HU-AUTH-01` (completada en Sprint 1).

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
- Requiere `HU-PROV-02` (Sprint 1).

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
- Requiere `HU-PROV-02` (Sprint 1).

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
1. **Dado que** un colaborador con perfil autorizado (Administrador o Gerente) ingresa a la sección de clientes, **cuando** el sistema carga la pantalla principal del módulo, **entonces** expone una grilla con los nombres y apellidos o razón social, número de documento de identidad (DNI de 8 dígitos), correo electrónico de contacto y el importe monetario total de compras acumuladas por cada cliente.
2. **Dado que** la empresa dispone de una cartera extensa de compradores, **cuando** el supervisor ingresa un texto en la barra de búsqueda rápida por nombre o número de documento, **entonces** el sistema filtra la lista al instante presentando únicamente las coincidencias pertinentes.
3. **Dado que** el supervisor interactúa con el visor de compradores, **cuando** visualiza la grilla, aplica filtros de búsqueda o revisa los acumulados comerciales, **entonces** la pantalla cumple rigurosamente las pautas de presentación, paginación y microcopy definidas en UI-009 (Directorio de Clientes) del Catálogo de Interfaces (DOC-ANEXO-B).

**Reglas de negocio aplicables:** 
- N/A

**Dependencias:** 
- Requiere `HU-CLI-02` (Sprint 1).

---

### HU-CLI-02 · Clientes – Registrar cliente automáticamente al vender

| Identificador | Épica | Prioridad MoSCoW | Estimación | Release | Sprint |
|:---:|:---:|:---:|:---:|:---:|:---:|
| HU-CLI-02 | EPIC-CAT | Must have | 3 pts | REL-1 | SPR-1 |

**Como** Vendedor o Cajero del minimarket,  
**quiero** registrar o asociar con agilidad la identificación del cliente (DNI o RUC) durante el flujo de cobro en el punto de venta,  
**para** emitir comprobantes de pago válidos conforme a los requerimientos tributarios oficiales sin demorar ni entorpecer el despacho de la fila de atención.

**Justificación de prioridad:** Funcionalidad crítica indispensable para el producto mínimo viable (Must have); mandatoria por regulación fiscal para la emisión de boletas identificadas y facturas comerciales en el mostrador del negocio.

**Criterios de aceptación:**
1. **Dado que** el cajero está formalizando una venta mediante Boleta de Venta electrónica, **cuando** digita un número de DNI de 8 dígitos numéricos no registrado con anterioridad y el nombre del comprador, **entonces** el sistema registra de forma automática la ficha del nuevo cliente en el directorio y la asocia de forma atómica a la venta en curso sin salir del flujo de cobro.
2. **Dado que** el comprador solicita la emisión de una Factura comercial, **cuando** el cajero digita el número de RUC de 11 dígitos, la razón social y la dirección fiscal de la empresa adquirente, **entonces** el sistema vincula inmediatamente dichos datos fiscales al comprobante de venta generado.
3. **Dado que** el cliente que se acerca a caja ya se encuentra registrado previamente en el minimarket, **cuando** el cajero digita su número de documento en la casilla correspondiente, **entonces** el sistema autocompleta de inmediato sus datos personales en pantalla evitando duplicidades en el directorio.
4. **Dado que** el cajero atiende la captura de datos en el terminal de venta, **cuando** interactúa con las casillas de identificación del comprador y los mensajes informativos, **entonces** la interfaz satisface integralmente los estándares visuales y de interacción descritos en UI-014 (Terminal de Punto de Venta POS) del Catálogo de Interfaces (DOC-ANEXO-B).

**Reglas de negocio aplicables:** 
- N/A

**Dependencias:** 
- Requiere `HU-VEN-01` (planificada en el mismo Sprint 1).

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
- Requiere `HU-CLI-02` (Sprint 1).

## 4. Sub-dominio: Catálogo Maestro de Productos

### HU-PROD-01 · Productos – Ver catálogo completo de productos

| Identificador | Épica | Prioridad MoSCoW | Estimación | Release | Sprint |
|:---:|:---:|:---:|:---:|:---:|:---:|
| HU-PROD-01 | EPIC-CAT | Must have | 3 pts | REL-1 | SPR-1 |

**Como** Almacenero o Administrador del minimarket,  
**quiero** consultar el catálogo maestro consolidado de productos comerciales,  
**para** verificar precios de venta, costos de adquisición de referencia y existencias totales al recepcionar mercaderías o realizar supervisións físicas en bodega.

**Justificación de prioridad:** Funcionalidad núcleo esencial para el producto mínimo viable (Must have); consulta obligatoria para la gestión de existencias y control físico en almacén. En mostrador, el personal de ventas consulta productos exclusivamente a través del terminal POS (`HU-VEN-01`).

**Criterios de aceptación:**
1. **Dado que** un colaborador con perfil autorizado (Almacenero o Administrador) ingresa al módulo de catálogo maestro, **cuando** carga la vista principal, **entonces** el sistema presenta la relación íntegra de artículos registrados mostrando su código de barras comercial, denominación del producto, marca del fabricante, categoría asignada, precio de venta al público, costo promedio de adquisición referencial y stock total disponible.
2. **Dado que** el minimarket mantiene cientos de artículos en su catálogo comercial, **cuando** el usuario introduce un texto en la barra de búsqueda rápida por nombre o código de barras, **entonces** el sistema filtra los resultados al instante presentando las coincidencias pertinentes.
3. **Dado que** el usuario consulta el inventario del catálogo, **cuando** interactúa con las filas de la grilla, buscadores y controles de visualización, **entonces** la pantalla satisface integralmente los componentes visuales, indicadores de estado y microcopy de UI-007 (Catálogo de Productos y Alertas) del Catálogo de Interfaces (DOC-ANEXO-B).

**Reglas de negocio aplicables:** 
- N/A

**Dependencias:** 
- Requiere `HU-PROD-02` (planificada en el mismo Sprint 1).

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
3. **Dado que** el usuario diligencia la ficha técnica del artículo, **cuando** revisa los parámetros de control, **entonces** el sistema inicializa el umbral de stock mínimo en el valor predeterminado estándar de 10 unidades en modo de solo lectura (ajustable posteriormente durante la edición de la ficha) y permite marcar si el producto maneja fecha de caducidad para activar el control preventivo de alertas (RN-06).
4. **Dado que** el usuario interactúa con la ventana de registro de productos, **cuando** completa los campos requeridos y confirma la operación, **entonces** la pantalla satisface rigurosamente los lineamientos de diseño, validaciones numéricas y formato definidos en UI-007 del Catálogo de Interfaces (DOC-ANEXO-B).

**Reglas de negocio aplicables:** 
- RN-06 (Alerta de Stock Mínimo)

**Dependencias:** 
- Requiere `HU-CAT-02` (Sprint 1).

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
- Requiere `HU-PROD-02` (Sprint 1).

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
- Requiere `HU-PROD-02` (Sprint 1).

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
- Requiere `HU-PROD-02` (Sprint 1).

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
1. **Dado que** un colaborador con perfil autorizado accede a la sección de control de vencimientos, **cuando** el sistema examina los lotes de mercadería almacenados, **entonces** presenta una grilla ordenada cronológicamente con los lotes que vencen en los próximos 30 días, detallando el nombre comercial del producto, empresa proveedora de origen, lote asignado, fecha exacta de caducidad y el conteo de días restantes, resaltando con distintivo de alerta visual roja aquellos que ya se encuentren caducados.
2. **Dado que** un lote de mercadería ha superado su fecha límite de caducidad, **cuando** un vendedor intenta despachar dicho producto en el terminal de punto de venta, **entonces** el sistema bloquea de forma terminante la operación excluyendo el lote vencido e informando stock cero disponible para venta, en estricto cumplimiento de la prohibición de comercialización de productos caducados (RN-03).
3. **Dado que** el usuario monitorea el panel preventivo de caducidades, **cuando** visualiza la grilla, aplica filtros por días de vigencia y examina los avisos de alerta, **entonces** la interfaz satisface los patrones de diseño, colores de advertencia y microcopy de UI-007 del Catálogo de Interfaces (DOC-ANEXO-B).

**Reglas de negocio aplicables:** 
- RN-03 (Prohibición de Comercialización de Vencidos)

**Dependencias:** 
- Requiere `HU-INV-01` (ingreso de mercadería con lotes, Sprint 1).

---

# ====================================================================
# DOCUMENTO OFICIAL: 03_EPIC-INV.md
# ====================================================================

---
Código de documento: DOC-PLAN-03-03
Título: Backlog de Producto — EPIC-INV: Inventario y Reposición
Versión: 4.8
Fecha: 2026-10-03
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
1. **Dado que** el operador recibe un lote de productos físicos para carga inicial de stock o para regularización administrativa autorizada, **cuando** registra el producto, empresa proveedora habilitada, cantidad ingresada, costo unitario de compra y, de corresponder, el identificador de lote y fecha de vencimiento, **entonces** el sistema suma de inmediato las unidades al stock disponible y recalcula automáticamente el costo promedio ponderado de adquisición del artículo (RN-14).
2. **Dado que** el producto ya registra movimientos de entrada de mercadería previos en el minimarket, **cuando** el Almacenero intenta registrar un abastecimiento mediante ingreso directo, **entonces** el sistema bloquea la operación y notifica que las reposiciones regulares posteriores exigen obligatoriamente tramitar una Solicitud de Reposición aprobada (RN-01), conservando el Administrador la facultad de ingreso directo para regularizaciones operativas de supervisión.
3. **Dado que** la mercadería recibida corresponde a un producto clasificado como perecible que maneja fecha de caducidad, **cuando** se procesa la entrada física, **entonces** el sistema exige obligatoriamente la captura del número de lote y la fecha de vencimiento para alimentar el control preventivo de despacho por expiración preferente.
4. **Dado que** el operador interactúa con el módulo de recepción de mercadería, **cuando** visualiza los campos de captura de lote, cálculos de costo y botones de confirmación, **entonces** la pantalla cumple rigurosamente con los patrones de diseño y microcopy especificados en UI-010 (Entradas de Mercadería y Lotes) del Catálogo de Interfaces (DOC-ANEXO-B).

**Reglas de negocio aplicables:** 
- RN-01 (Política de Ingreso Inicial y Abastecimiento por Solicitud)
- RN-14 (Actualización de Valorización de Inventario)

**Dependencias:** 
- Requiere `HU-PROD-02` y `HU-PROV-02` (planificadas en el mismo Sprint 1).

---

### HU-INV-02 · Inventario – Registrar baja de inventario por merma

| Identificador | Épica | Prioridad MoSCoW | Estimación | Release | Sprint |
|:---:|:---:|:---:|:---:|:---:|:---:|
| HU-INV-02 | EPIC-INV | Must have | 5 pts | REL-1 | SPR-1 |

**Como** Almacenero o Administrador del minimarket,  
**quiero** registrar la baja formal de mercadería averiada, rota o vencida en el almacén,  
**para** reflejar la pérdida real en el sistema, sincerar el patrimonio comercial y retirar inmediatamente las unidades deterioradas del stock comercializable.

**Justificación de prioridad:** Funcionalidad esencial de control contable y operativo (Must have); indispensable para mantener la veracidad de las existencias y evitar que mercadería dañada o caducada se ofrezca al público o distorsione los arqueos de bodega.

**Criterios de aceptación:**
1. **Dado que** un artículo se deterioró, rompió o sufrió merma física durante su manipulación, **cuando** el operador registra la baja seleccionando el motivo «Dañado» u otro motivo justificado, **entonces** el sistema exige obligatoriamente seleccionar el lote específico afectado para no perjudicar partidas en buen estado y descuenta de inmediato las unidades del stock físico disponible (RN-04).
2. **Dado que** el operador registra una baja por motivo «Vencimiento», **cuando** selecciona el producto y el lote caducado, **entonces** el sistema bloquea el campo de cantidad fijándolo de manera automática e inmodificable al 100 % de las existencias restantes de dicho lote, impidiendo bajas parciales de partidas vencidas (RN-05).
3. **Dado que** el colaborador opera sobre el panel de mermas, **cuando** selecciona los motivos reglamentarios, confirma las cantidades y visualiza los indicadores de stock restante, **entonces** la interfaz satisface los lineamientos de diseño, advertencias y microcopy descritos en UI-011 (Bajas de Inventario y Mermas) del Catálogo de Interfaces (DOC-ANEXO-B).

**Reglas de negocio aplicables:** 
- RN-04 (Registro Obligatorio de Mermas)
- RN-05 (Restricción de Bajas por Vencimiento)

**Dependencias:** 
- Requiere `HU-INV-01` (planificada en el mismo Sprint 1).

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
1. **Dado que** el sistema registra un saldo teórico distinto al conteo físico verificado en tienda (por ejemplo, 10 unidades en pantalla frente a 8 unidades reales contadas), **cuando** el operador introduce la cantidad física constatada, **entonces** el sistema actualiza de inmediato el stock disponible ajustándolo al saldo real y genera un registro de supervisión con la diferencia neta (positiva por sobrante o negativa por faltante).
2. **Dado que** el operador confirma un ajuste de inventario, **cuando** procesa la operación en pantalla, **entonces** el sistema le solicita registrar obligatoriamente una justificación o comentario explicativo sobre la causa de la discrepancia constatada para fines de trazabilidad y control interno.
3. **Dado que** el colaborador interactúa con el formulario de regularización, **cuando** digita los conteos físicos, revisa las diferencias calculadas y confirma el ajuste, **entonces** la pantalla responde con la estructura visual, validaciones y microcopy definidos en UI-012 (Ajustes de Conteo Físico) del Catálogo de Interfaces (DOC-ANEXO-B).

**Reglas de negocio aplicables:** 
- N/A

**Dependencias:** 
- Requiere `HU-INV-01` (planificada en el mismo Sprint 1).

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
2. **Dado que** un usuario revisa un registro histórico de recepción, **cuando** examina el detalle de la operación, **entonces** el sistema muestra la información en modo de solo lectura estricto, impidiendo cualquier edición o alteración posterior para preservar la inmutabilidad de la bitácora de abastecimiento.
3. **Dado que** el usuario navega por la consulta de recepciones, **cuando** aplica filtros, revisa las columnas de datos y utiliza los controles de visualización, **entonces** la interfaz satisface integralmente los estándares visuales de UI-010 del Catálogo de Interfaces (DOC-ANEXO-B).

**Reglas de negocio aplicables:** 
- N/A

**Dependencias:** 
- Requiere `HU-INV-01` (Sprint 1).

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
1. **Dado que** un supervisor autorizado accede a la sección histórica de mermas, **cuando** carga la consulta, **entonces** el sistema expone una grilla cronológica detallada con la fecha de la baja, producto afectado, lote correspondiente, cantidad de unidades retiradas y el motivo comercial justificado (Dañado, Vencido u otro).
2. **Dado que** el supervisor audita un registro de merma específico, **cuando** examina el detalle del suceso, **entonces** el sistema expone con exactitud la identidad del colaborador que autorizó y ejecutó la baja en el sistema.
3. **Dado que** el supervisor interactúa con el visor de bajas históricas, **cuando** visualiza los registros, aplica filtros y consulta los motivos, **entonces** la pantalla responde a los patrones de diseño y microcopy especificados en UI-011 del Catálogo de Interfaces (DOC-ANEXO-B).

**Reglas de negocio aplicables:** 
- N/A

**Dependencias:** 
- Requiere `HU-INV-02` (Sprint 1).

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
1. **Dado que** un supervisor audita las correcciones manuales de inventario, **cuando** realiza una búsqueda por producto o rango temporal, **entonces** el sistema expone el historial de todos los ajustes registrados, indicando la fecha, el saldo previo, el saldo ajustado y si la diferencia constituyó un faltante o sobrante.
2. **Dado que** el supervisor examina un ajuste individual en la grilla, **cuando** visualiza la fila de detalle, **entonces** el sistema expone de forma íntegra el comentario o justificación de supervisión registrado por el almacenero junto con la identidad del operador responsable.
3. **Dado que** el supervisor utiliza el panel de supervisión de conteos, **cuando** interactúa con los filtros y la grilla de resultados, **entonces** la interfaz cumple con las especificaciones de diseño y microcopy de UI-012 del Catálogo de Interfaces (DOC-ANEXO-B).

**Reglas de negocio aplicables:** 
- N/A

**Dependencias:** 
- Requiere `HU-INV-03` (Sprint 1).

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
- Requiere `HU-PROD-02` (alta de productos) y `HU-PROV-02` (alta de proveedores), ambas provistas en Sprint 1.

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
1. **Dado que** el usuario ingresa al módulo de reposiciones, **cuando** aplica filtros por estado («Pendiente», «Aprobada», «Rechazada», «Completada») o selecciona visualizar todas, **entonces** el sistema presenta el listado cronológico de solicitudes ordenado desde la más reciente, exhibiendo producto, cantidad, proveedor asignado, fecha de creación y estado actual.
2. **Dado que** el usuario examina una solicitud específica en el listado, **cuando** pulsa sobre el registro o su botón de detalle, **entonces** el sistema despliega la información completa del requerimiento, incluyendo el colaborador solicitante, el aprobador responsable y el historial de fechas del documento.
3. **Dado que** el usuario consulta el panel de reposiciones, **cuando** visualiza la grilla de datos, tarjetas de estado y botones de filtrado, **entonces** la pantalla cumple rigurosamente los estándares de interfaz visual de UI-013 (Solicitudes de Reposición) del Catálogo de Interfaces (DOC-ANEXO-B).

**Reglas de negocio aplicables:** 
- N/A

**Dependencias:** 
- Requiere `HU-SOL-01` (creación de solicitudes de reposición).

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
3. **Dado que** el aprobador dispone del compromiso de entrega del proveedor, **cuando** autoriza la orden, **entonces** el sistema permite registrar una fecha estimada de llegada (que no puede ser anterior a la fecha actual) para fines de previsión operativa de bodega.
4. **Dado que** la jefatura opera en la bandeja de autorización, **cuando** interactúa con los diálogos y confirmaciones de aprobación, **entonces** la interfaz satisface las especificaciones de diseño y microcopy de UI-013 (Solicitudes de Reposición) del Catálogo de Interfaces (DOC-ANEXO-B).

**Reglas de negocio aplicables:** 
- RN-16 (Flexibilidad en Elección de Proveedores)

**Dependencias:** 
- Requiere `HU-SOL-01` (existencia de solicitudes pendientes) y `HU-PROV-02` (catálogo de proveedores habilitados).

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
1. **Dado que** una solicitud de reposición está en estado «Pendiente», **cuando** el Gerente o Administrador decide denegarla, **entonces** el sistema cambia su estado a «Rechazada», registra la identidad del responsable y permite consignar una justificación o motivo explicativo del rechazo.
2. **Dado que** una solicitud ha sido marcada como «Rechazada», **cuando** un colaborador de almacén intente procesar una recepción física contra dicho documento, **entonces** el sistema bloquea cualquier ingreso de mercadería asociado al mismo.
3. **Dado que** la jefatura interactúa con el modal o panel de denegación, **cuando** introduce el motivo y confirma la acción, **entonces** la pantalla satisface las directrices visuales, advertencias y microcopy descritos en UI-013 (Solicitudes de Reposición) del Catálogo de Interfaces (DOC-ANEXO-B).

**Reglas de negocio aplicables:** 
- N/A

**Dependencias:** 
- Requiere `HU-SOL-01` (existencia de solicitudes en estado Pendiente).

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
1. **Dado que** el pedido de reposición arriba físicamente al almacén con una orden en estado «Aprobada», **cuando** el operador registra la recepción ingresando el costo unitario de adquisición, número de lote y fecha de expiración (obligatoria para productos perecibles), **entonces** el sistema suma de inmediato las cantidades al stock disponible, recalcula automáticamente el costo promedio ponderado del producto (RN-14) y cambia el estado de la solicitud a «Completada».
2. **Dado que** se completa la recepción de mercadería contra la solicitud aprobada, **cuando** la transacción concluye exitosamente, **entonces** el sistema genera de forma atómica el registro de movimiento en el historial de entradas de inventario vinculándolo a la solicitud original para garantizar la estricta trazabilidad de abastecimiento (RN-01).
3. **Dado que** la mercadería entregada por el proveedor cubre una cantidad menor a la autorizada originalmente (recepción parcial), **cuando** se registra el ingreso físico efectivo, **entonces** el sistema completa la solicitud original por las unidades recibidas y genera automáticamente una nueva solicitud en estado «Pendiente» por las unidades restantes no entregadas, preservando la trazabilidad de la orden de origen.
4. **Dado que** el colaborador procesa la recepción de mercadería desde el módulo de reposiciones, **cuando** interactúa con los formularios de ingreso de lote, costos, vencimiento y confirmación de entrega, **entonces** la interfaz satisface íntegramente los estándares de diseño, validaciones visuales y microcopy descritos en UI-013 (Solicitudes de Reposición) del Catálogo de Interfaces (DOC-ANEXO-B).

**Reglas de negocio aplicables:** 
- RN-01 (Política de Ingreso Inicial y Abastecimiento por Solicitud)
- RN-14 (Actualización de Valorización de Inventario)

**Dependencias:** 
- Requiere `HU-SOL-03` (solicitudes aprobadas previamente) y `HU-INV-01` (mecanismo base de entrada física y costeo ponderado).

---

# ====================================================================
# DOCUMENTO OFICIAL: 04_EPIC-VEN.md
# ====================================================================

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

---

# ====================================================================
# DOCUMENTO OFICIAL: 05_EPIC-REP.md
# ====================================================================

---
Código de documento: DOC-PLAN-03-05
Título: Backlog de Producto — EPIC-REP: Reportes, Analítica y Configuración
Versión: 4.8
Fecha: 2026-10-03
Elaborado por: Colonia Infantas, Walter
Revisado por: Angeles Pérez, Jhonny
Estado: Aprobado
Propósito: Especificación de requisitos e historias de usuario de la épica de Inteligencia de Negocio, Analítica Comercial, Indicadores de Gestión y Configuración Fiscal
Documentos relacionados: DOC-PLAN-01, DOC-PLAN-02, DOC-PLAN-03-00, DOC-PLAN-08, DOC-ANEXO-B
---

# EPIC-REP: Reportes, Analítica y Configuración

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
1. **Dado que** el Administrador accede al módulo de configuración general, **cuando** la pantalla presenta los datos almacenados, **entonces** el sistema exhibe en modo de consulta los campos institucionales: Razón Social, número de RUC (11 dígitos), dirección fiscal del establecimiento, número telefónico de contacto, tasa de IGV aplicable (18 %) y series tributarias oficiales para boletas de venta y facturas (`[DECISIÓN PENDIENTE D8]`).
2. **Dado que** la parametrización institucional y fiscal constituye información estratégica reservada para la administración, **cuando** un colaborador con rol Vendedor o Almacenero intenta acceder a esta vista de configuración, **entonces** el sistema bloquea el ingreso denegando el acceso y preservando la integridad de los parámetros del negocio.
3. **Dado que** el Administrador interactúa con la vista de configuración institucional, **cuando** inspecciona los campos, textos de ayuda y etiquetas informativas, **entonces** la pantalla satisface las directrices visuales, diseño y microcopy especificados en UI-020 (Configuración Fiscal y SUNAT) del Catálogo de Interfaces (DOC-ANEXO-B).

**Reglas de negocio aplicables:** 
- N/A (parámetros institucionales transversales).

**Dependencias:** 
- Requiere `HU-AUTH-01` (autenticación y verificación del rol Administrador).

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
1. **Dado que** el Administrador requiere actualizar los datos tributarios del minimarket, **cuando** actualiza los datos institucionales manteniendo o ajustando la tasa impositiva legal vigente (18 %) y confirma la acción, **entonces** el sistema guarda los nuevos valores y los aplica de manera inmediata al desglose informativo impreso en todos los comprobantes emitidos a partir de ese momento (`[DECISIÓN PENDIENTE D8]`).
2. **Dado que** el Administrador ingresa el identificador tributario del establecimiento, **cuando** el valor capturado no corresponde a un RUC corporativo válido (exactamente 11 dígitos numéricos iniciando con el prefijo 20 reglamentario para personas jurídicas), **entonces** el sistema rechaza la actualización, resalta el campo con error y notifica que se requiere un RUC empresarial válido.
3. **Dado que** el Administrador actualiza los medios de contacto de la tienda, **cuando** ingresa el número telefónico, **entonces** el sistema valida que cumpla con el formato de telefonía celular nacional (9 dígitos iniciando con 9) o telefonía fija institucional con prefijo de área departamental, rechazando secuencias numéricas inválidas.
4. **Dado que** el Administrador define las series tributarias para comprobantes de pago, **cuando** ingresa las series de boleta y factura, **entonces** el sistema verifica que ambas cumplan con la estructura fiscal reglamentaria de cuatro caracteres (una letra mayúscula identificadora seguida de tres dígitos numéricos, tales como B001 y F001), impidiendo formatos anómalos.
5. **Dado que** el Administrador edita los datos de la empresa, **cuando** ingresa un RUC válido en el formulario y solicita la consulta de datos fiscales, **entonces** el sistema recupera automáticamente la Razón Social y el domicilio fiscal registrados ante la entidad tributaria oficial (SUNAT), facilitando el llenado fidedigno del formulario.
6. **Dado que** el Administrador gestiona la actualización fiscal, **cuando** manipula los formularios, botones de guardado y mensajes de confirmación o error, **entonces** la pantalla satisface las directrices visuales, diseño y microcopy especificados en UI-020 (Configuración Fiscal y SUNAT) del Catálogo de Interfaces (DOC-ANEXO-B).

**Reglas de negocio aplicables:** 
- N/A (parámetros institucionales de configuración fiscal).

**Dependencias:** 
- Requiere `HU-CONF-01` (lectura de parámetros previos) y `HU-AUTH-01` (control de acceso de Administrador).

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
1. **Dado que** el usuario con rol Gerente o Administrador inicia sesión y accede al cuadro de mando principal («Dashboard»), **cuando** la pantalla carga con el período predeterminado del mes en curso, **entonces** el sistema presenta tarjetas de indicadores clave destacando: Total de Ventas concretadas, Ingresos totales acumulados en moneda nacional (S/.) y Ticket promedio por transacción comercial.
2. **Dado que** se registran nuevas ventas en los terminales de punto de venta (POS) o el usuario pulsa la opción «Actualizar», **cuando** la vista refresca su información, **entonces** los indicadores métricos recalculan sus valores de forma inmediata para reflejar los ingresos más recientes.
3. **Dado que** el usuario requiere analizar un horizonte temporal específico, **cuando** selecciona un rango de fechas («Desde» y «Hasta») y aplica el filtro, **entonces** las tarjetas de indicadores actualizan sus totales reflejando con exactitud las ventas correspondientes a dicho período, validando que la fecha inicial no sea posterior a la final ni exceda el límite cronológico permitido.
4. **Dado que** el usuario pulsa sobre cualquiera de las tarjetas métricas (Ventas, Ingresos o Ticket promedio), **cuando** interactúa con el componente, **entonces** el sistema despliega una ventana de diálogo modal interactiva con el detalle desagregado de las operaciones que componen la métrica sin necesidad de abandonar la vista ejecutiva principal.
5. **Dado que** el usuario navega en el panel de control, **cuando** visualiza la disposición de tarjetas, indicadores porcentuales y acciones de filtrado, **entonces** la pantalla satisface las directrices visuales, diseño y microcopy especificados en UI-018 (Dashboard y KPIs Estratégicos) del Catálogo de Interfaces (DOC-ANEXO-B).

**Reglas de negocio aplicables:** 
- N/A.

**Dependencias:** 
- Requiere `HU-AUTH-01` (autenticación de Gerente/Administrador) y `HU-VEN-01` (ventas registradas en POS).

---

### HU-DASH-03 · Dashboard – Alertas de stock crítico, vencimientos y turnos olvidados

| Identificador | Épica | Prioridad MoSCoW | Estimación | Release | Sprint |
|:---:|:---:|:---:|:---:|:---:|:---:|
| HU-DASH-03 | EPIC-REP | Must have | 5 pts | REL-2 | SPR-2 |

**Como** Administrador o Gerente del minimarket,  
**quiero** recibir alertas visuales destacadas y notificaciones preventivas en el panel de control ante situaciones operativas anómalas (productos con existencias en nivel crítico o sin stock, proximidad de vencimientos y turnos de caja que permanecen abiertos por tiempo excesivo),  
**para** reaccionar oportunamente ante desabastecimientos de productos de alta rotación, evitar mermas por caducidad y prevenir descuadres o riesgos de seguridad por cajeros que olvidaron cerrar su turno.

**Justificación de prioridad:** Funcionalidad crítica de proactividad operativa (Must have); previene pérdidas comerciales por falta de inventario, disminuye mermas y mitiga riesgos de fraude o descuadre por turnos de caja abiertos indebidamente en el Release 2.

**Criterios de aceptación:**
1. **Dado que** uno o más productos activos registran existencias iguales o inferiores a su umbral de stock mínimo parametrizado (o stock en cero), **cuando** el usuario accede al panel de control, **entonces** el sistema exhibe una tarjeta de alerta «Sin Stock» y una sección prioritaria de «Stock Crítico» listando los productos más urgentes de reponer conforme a la RN-06, con enlace directo para inspeccionarlos en el catálogo de productos.
2. **Dado que** un cajero inició un turno de atención y este permanece en estado «Abierto» durante más de 16 horas consecutivas sin haber sido cerrado, **cuando** el Administrador o Gerente ingresa al cuadro de mando, **entonces** el sistema presenta un banner de notificación de advertencia preventiva de «Turno Abierto Prolongado», indicando el nombre del colaborador, el tiempo transcurrido y un botón de acceso directo al historial de cajas para proceder con la supervisión o cierre forzado.
3. **Dado que** no existen anomalías operativas de turnos prolongados, **cuando** el usuario inspecciona el cuadro de mando, **entonces** el banner de advertencia se oculta automáticamente, manteniendo una visualización despejada y focalizada en los indicadores comerciales.
4. **Dado que** el usuario interactúa con los avisos, tarjetas de riesgo y enlaces de navegación rápida en el panel principal, **cuando** consulta el estado preventivo del minimarket, **entonces** la pantalla satisface las directrices visuales, diseño y microcopy especificados en UI-018 (Dashboard y KPIs Estratégicos) del Catálogo de Interfaces (DOC-ANEXO-B).

**Reglas de negocio aplicables:** 
- RN-06 (Alerta de Stock Mínimo)

**Dependencias:** 
- Requiere `HU-DASH-01` (estructura de cuadro de mando), `HU-CAJA-01` (apertura de turnos) y `HU-PROD-02` (parámetros de stock mínimo).

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
1. **Dado que** el usuario visualiza el panel de control ejecutivo con datos comerciales registrados, **cuando** desciende a la sección analítica, **entonces** el sistema renderiza un gráfico de área lineal interactivo que representa las ventas por día, ubicando las fechas cronológicas en el eje horizontal y los importes en moneda nacional (S/.) en el eje vertical.
2. **Dado que** el usuario desplaza el cursor sobre cualquier punto o nodo representativo de una fecha en el gráfico, **cuando** se posiciona sobre el día seleccionado, **entonces** el sistema presenta un recuadro flotante informativo destacando la fecha completa, el monto total facturado y el número de ventas concretadas en dicha jornada.
3. **Dado que** el período seleccionado no registra ninguna venta concretada, **cuando** se renderiza la sección, **entonces** el sistema presenta un estado visual alternativo con el mensaje descriptivo «No hay ventas registradas aún», preservando el diseño sin generar distorsiones visuales.
4. **Dado que** el usuario interactúa con los controles de visualización gráfica y analiza la curva de ventas, **cuando** consulta el gráfico en el panel, **entonces** la pantalla satisface las directrices visuales, diseño y microcopy especificados en UI-018 (Dashboard y KPIs Estratégicos) del Catálogo de Interfaces (DOC-ANEXO-B).

**Reglas de negocio aplicables:** 
- N/A.

**Dependencias:** 
- Requiere `HU-DASH-01` (panel principal e ingresos agregados).

---

### HU-DASH-04 · Dashboard – Ver ranking de productos más vendidos en dashboard

| Identificador | Épica | Prioridad MoSCoW | Estimación | Release | Sprint |
|:---:|:---:|:---:|:---:|:---:|:---:|
| HU-DASH-04 | EPIC-REP | Should have | 3 pts | REL-3 | SPR-3 |

**Como** Gerente del minimarket,  
**quiero** visualizar un ranking gráfico tipo barra con el listado de los 5 productos con mayor volumen de rotación en ventas dentro del período seleccionado en el panel principal,  
**para** conocer rápidamente los artículos más demandados por la clientela sin tener que navegar hacia el módulo exhaustivo de reportes analíticos.

**Justificación de prioridad:** Funcionalidad importante de apoyo comercial (Should have); agiliza el reconocimiento del catálogo con mayor tracción comercial en el Release 3 para planificar oportunamente las compras y la colocación estratégica de mercadería en los anaqueles del salón.

**Criterios de aceptación:**
1. **Dado que** el usuario consulta el cuadro de mando ejecutivo, **cuando** observa el bloque «Top 5 productos», **entonces** el sistema presenta las 5 mercaderías con mayor cantidad de unidades vendidas en el período activo, ordenadas de mayor a menor rotación, indicando para cada producto su nombre comercial, marca, unidades despachadas y una barra proporcional visual.
2. **Dado que** se registran nuevas ventas que alteran el orden de demanda comercial, **cuando** se actualiza la información del cuadro de mando, **entonces** las barras de clasificación reordenan dinámicamente sus posiciones relativas reflejando los nuevos líderes de venta.
3. **Dado que** en el período seleccionado no se han efectuado ventas en la tienda, **cuando** se consulta el bloque, **entonces** el sistema muestra un estado informativo indicando «No hay ventas registradas».
4. **Dado que** el usuario revisa el escalafón de productos estrella en el cuadro de mando, **cuando** interactúa con las barras proporcionales y etiquetas informativas, **entonces** la pantalla satisface las directrices visuales, diseño y microcopy especificados en UI-018 (Dashboard y KPIs Estratégicos) del Catálogo de Interfaces (DOC-ANEXO-B).

**Reglas de negocio aplicables:** 
- N/A.

**Dependencias:** 
- Requiere `HU-DASH-01` (datos de ventas del panel) y `HU-PROD-01` (catálogo de productos).

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
- Requiere `HU-DASH-01` (panel ejecutivo) y `HU-SOL-01` (generación de solicitudes de reposición).

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
1. **Dado que** el usuario accede al módulo de reportes analíticos y define un rango de fechas válido, **cuando** solicita la generación del reporte pulsando «Aplicar filtros», **entonces** el sistema calcula y exhibe las métricas agregadas del período: Total de Ventas completadas, Ingresos Totales acumulados en moneda nacional (S/.) y Ticket promedio por transacción comercial.
2. **Dado que** el usuario ingresa un rango de fechas donde la fecha inicial («Desde») es cronológicamente posterior a la fecha final («Hasta»), **cuando** intenta aplicar los filtros, **entonces** el sistema bloquea la consulta y exhibe un mensaje de validación indicando que la fecha inicial no puede ser posterior a la fecha final.
3. **Dado que** el usuario no especifica fechas en los filtros, **cuando** carga la vista analítica, **entonces** el sistema consolida automáticamente la totalidad de operaciones históricas registradas respetando el límite temporal máximo permitido (10 años).
4. **Dado que** el usuario interactúa con los filtros cronológicos y tarjetas de resumen financiero, **cuando** consulta el reporte analítico, **entonces** la pantalla satisface las directrices visuales, diseño y microcopy especificados en UI-019 (Reportes Analíticos y PDF) del Catálogo de Interfaces (DOC-ANEXO-B).

**Reglas de negocio aplicables:** 
- N/A.

**Dependencias:** 
- Requiere `HU-AUTH-01` (acceso Gerente/Administrador) y `HU-VEN-01` (registro de ventas).

---

### HU-REP-02 · Reportes – Ver ranking de productos más vendidos

| Identificador | Épica | Prioridad MoSCoW | Estimación | Release | Sprint |
|:---:|:---:|:---:|:---:|:---:|:---:|
| HU-REP-02 | EPIC-REP | Must have | 3 pts | REL-2 | SPR-2 |

**Como** Gerente o Administrador del minimarket,  
**quiero** consultar un listado jerárquico (ranking) con los productos de mayor volumen de ventas dentro de un período seleccionado,  
**para** identificar los artículos estratégicos de alta rotación (principio de Pareto), planificar compras mayoristas y negociar mejores acuerdos de precios y descuentos por volumen con los proveedores.

**Justificación de prioridad:** Funcionalidad esencial para la estrategia comercial y de compras (Must have); constituye el insumo analítico clave para determinar la política de abastecimiento del minimarket en el Release 2.

**Criterios de aceptación:**
1. **Dado que** el usuario genera el reporte comercial para un período determinado, **cuando** visualiza la grilla de productos más vendidos, **entonces** el sistema presenta un listado ordenado de mayor a menor según la cantidad total de unidades despachadas, exhibiendo para cada producto su nombre comercial, marca, unidades vendidas e importe total recaudado.
2. **Dado que** un producto no registra ninguna transacción de venta dentro del rango temporal seleccionado, **cuando** el sistema compila el ranking, **entonces** dicho artículo es excluido de la clasificación, garantizando que el listado concentre únicamente mercadería con rotación efectiva.
3. **Dado que** existen empates en la cantidad de unidades vendidas entre dos o más artículos, **cuando** el sistema construye el escalafón, **entonces** aplica como criterio secundario de ordenamiento el monto total de ingresos recaudados en orden descendente.
4. **Dado que** el usuario revisa el ranking de productos estrella, **cuando** navega en la vista analítica, **entonces** la pantalla satisface las directrices visuales, diseño y microcopy especificados en UI-019 (Reportes Analíticos y PDF) del Catálogo de Interfaces (DOC-ANEXO-B).

**Reglas de negocio aplicables:** 
- N/A.

**Dependencias:** 
- Requiere `HU-REP-01` (filtros temporales del módulo) y `HU-PROD-01` (catálogo de productos).

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

**Reglas de negocio aplicables:** 
- N/A.

**Dependencias:** 
- Requiere `HU-REP-01` (parámetros de consulta y módulo de reportes).

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
3. **Dado que** en un período evaluado no se registraron transacciones mediante alguna de las modalidades de pago, **cuando** se presenta el desglose, **entonces** el sistema exhibe el medio respectivo con saldo S/ 0.00 y cero operaciones o consolida únicamente los medios activos, preservando la coherencia aritmética.
4. **Dado que** el usuario inspecciona el resumen de medios de pago, **cuando** interactúa con los indicadores y gráficos de proporción, **entonces** la pantalla satisface las directrices visuales, diseño y microcopy especificados en UI-019 (Reportes Analíticos y PDF) del Catálogo de Interfaces (DOC-ANEXO-B).

**Reglas de negocio aplicables:** 
- N/A.

**Dependencias:** 
- Requiere `HU-REP-01` (módulo de reportes y ventas registradas).

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
2. **Dado que** se presenta la grilla de stock crítico, **cuando** el usuario inspecciona las columnas, **entonces** visualiza de forma clara el código del producto, nombre comercial, marca, categoría, existencias vigentes y el umbral mínimo específico aplicado para la evaluación.
3. **Dado que** el usuario requiere ajustar el nivel de exigencia del reporte, **cuando** modifica el umbral numérico de evaluación en pantalla y aplica el cambio, **entonces** la grilla recalcula dinámicamente el listado incorporando los artículos que cumplan el nuevo criterio de criticidad.
4. **Dado que** el usuario interactúa con el reporte analítico de existencias críticas, **cuando** consulta los datos en pantalla, **entonces** la interfaz satisface las directrices visuales, diseño y microcopy especificados en UI-019 (Reportes Analíticos y PDF) del Catálogo de Interfaces (DOC-ANEXO-B).

**Reglas de negocio aplicables:** 
- RN-06 (Alerta de Stock Mínimo)

**Dependencias:** 
- Requiere `HU-REP-01` (módulo de reportes) y `HU-PROD-02` (parámetros de stock mínimo en productos).

---

### HU-REP-06 · Reportes – Ver resumen general del inventario

| Identificador | Épica | Prioridad MoSCoW | Estimación | Release | Sprint |
|:---:|:---:|:---:|:---:|:---:|:---:|
| HU-REP-06 | EPIC-REP | Should have | 2 pts | REL-3 | SPR-3 |

**Como** Gerente o Administrador del minimarket,  
**quiero** consultar un resumen cuantitativo consolidado del estado global del inventario en almacén y salón,  
**para** conocer las métricas operativas de volumen del catálogo comercial, cobertura de categorías, red de proveedores y artículos agotados en el Release 3.

**Justificación de prioridad:** Funcionalidad de alto valor para el control patrimonial (Should have); proporciona una radiografía global del catálogo de existencias sin requerir supervisións manuales exhaustivas.

**Criterios de aceptación:**
1. **Dado que** el usuario accede al bloque de estado del inventario, **cuando** la pantalla presenta los datos, **entonces** el sistema exhibe los conteos cuantitativos globales: total de productos comerciales activos, total de categorías creadas, total de proveedores activos, cantidad de productos con existencias en cero y total de solicitudes de reposición en estado pendiente.
2. **Dado que** se producen entradas por compras, despachos en ventas o bajas por merma, **cuando** el usuario refresca la consulta, **entonces** los indicadores cuantitativos actualizan sus valores en tiempo real reflejando la situación patrimonial vigente del almacén.
3. **Dado que** el usuario analiza las tarjetas cuantitativas de existencias, **cuando** navega en la vista analítica, **entonces** la pantalla satisface las directrices visuales, diseño y microcopy especificados en UI-019 (Reportes Analíticos y PDF) del Catálogo de Interfaces (DOC-ANEXO-B).

**Reglas de negocio aplicables:** 
- N/A.

**Dependencias:** 
- Requiere `HU-REP-01` (módulo de reportes) y `HU-PROD-01` (catálogo de productos).

---

### HU-REP-07 · Reportes – Ver margen de ganancia por producto

| Identificador | Épica | Prioridad MoSCoW | Estimación | Release | Sprint |
|:---:|:---:|:---:|:---:|:---:|:---:|
| HU-REP-07 | EPIC-REP | Should have | 5 pts | REL-3 | SPR-3 |

**Como** Gerente del minimarket,  
**quiero** consultar un reporte de rentabilidad comercial que desglose el margen de utilidad bruta (precio de venta cobrado frente al costo promedio de adquisición) por cada producto vendido,  
**para** identificar los artículos con mayor y menor aporte financiero al negocio y reajustar oportunamente las listas de precios de aquellos productos que resulten deficitarios o con márgenes reducidos.

**Justificación de prioridad:** Funcionalidad estratégica de rentabilidad comercial (Should have); brinda la inteligencia financiera requerida para asegurar que la política de fijación de precios maximice el retorno económico en el Release 3.

**Criterios de aceptación:**
1. **Dado que** el usuario define un período de análisis y genera el reporte de rentabilidad, **cuando** visualiza la grilla de márgenes comerciales, **entonces** el sistema presenta para cada artículo vendido: nombre del producto, marca, categoría, unidades totales despachadas, importe bruto recaudado, costo valorizado total según el costo promedio ponderado de los lotes consumidos (RN-14), ganancia monetaria absoluta y porcentaje de margen de utilidad obtenido.
2. **Dado que** un producto registró ventas a un precio inferior a su costo de adquisición (margen negativo o venta a pérdida), **cuando** se renderiza la grilla analítica, **entonces** el sistema resalta visualmente la fila con alerta destacada en color rojo y signo negativo, advirtiendo de forma inmediata la anomalía tarifaria.
3. **Dado que** el usuario examina la rentabilidad del catálogo, **cuando** ordena la grilla por ganancia absoluta o porcentaje de margen, **entonces** el sistema reorganiza las filas de forma interactiva en sentido ascendente o descendente.
4. **Dado que** el usuario interactúa con la grilla de rentabilidad comercial, **cuando** revisa los valores en pantalla, **entonces** la interfaz satisface las directrices visuales, diseño y microcopy especificados en UI-019 (Reportes Analíticos y PDF) del Catálogo de Interfaces (DOC-ANEXO-B).

**Reglas de negocio aplicables:** 
- RN-14 (Actualización de Valorización de Inventario)

**Dependencias:** 
- Requiere `HU-REP-01` (módulo de reportes y ventas) y `HU-INV-01` (costos valorizados de entrada en inventario).

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
1. **Dado que** el usuario selecciona un rango temporal y genera el reporte de mermas, **cuando** la pantalla presenta los resultados, **entonces** el sistema exhibe un desglose analítico agrupando las bajas por motivo reglamentario (Vencimiento, Dañado, Merma Operativa), indicando para cada causa el número total de eventos de descarte, las unidades físicas perdidas y el costo económico total valorizado.
2. **Dado que** el usuario inspecciona el detalle de las pérdidas, **cuando** revisa las partidas registradas, **entonces** el sistema calcula el valor monetario de la merma multiplicando las unidades dadas de baja por el costo unitario de adquisición del lote correspondiente.
3. **Dado que** en el período evaluado no se produjeron bajas para una o más causales de merma, **cuando** se compila el reporte, **entonces** el sistema refleja cero incidencias y costo S/ 0.00 para dichas categorías, conservando la integridad de las sumas totales.
4. **Dado que** el usuario interactúa con la grilla y representaciones gráficas de mermas, **cuando** consulta el análisis en pantalla, **entonces** la interfaz satisface las directrices visuales, diseño y microcopy especificados en UI-019 (Reportes Analíticos y PDF) del Catálogo de Interfaces (DOC-ANEXO-B).

**Reglas de negocio aplicables:** 
- N/A.

**Dependencias:** 
- Requiere `HU-REP-01` (filtros temporales) y `HU-INV-02` (registro de bajas de inventario).

---

### HU-REP-09 · Reportes – Exportar reportes en PDF

| Identificador | Épica | Prioridad MoSCoW | Estimación | Release | Sprint |
|:---:|:---:|:---:|:---:|:---:|:---:|
| HU-REP-09 | EPIC-REP | Could have | 3 pts | REL-3 | SPR-3 |

**Como** Administrador o Gerente del minimarket,  
**quiero** descargar un documento en formato PDF estructurado y paginado con la información consolidada de los reportes generados en pantalla,  
**para** disponer de un respaldo físico o digital formal para reuniones de directorio, acervo administrativo o sustento ante supervisións externas.

**Justificación de prioridad:** Funcionalidad conveniente de distribución documental (Could have); brinda versatilidad y portabilidad a la información gerencial, aunque la visualización y supervisión operativa se satisfacen plenamente en pantalla dentro del Release 3.

**Criterios de aceptación:**
1. **Dado que** el usuario se encuentra visualizando un reporte analítico en pantalla con datos consultados, **cuando** pulsa la acción «Descargar PDF», **entonces** el sistema compila la información y genera un archivo de documento portátil (PDF) descargable en el navegador, incorporando el membrete del minimarket, fecha de emisión y el rango temporal consultado.
2. **Dado que** el reporte contiene múltiples secciones analíticas (resumen financiero, ventas por día, medios de pago, ranking de rotación y mermas), **cuando** se compila el documento, **entonces** el sistema pagina automáticamente el contenido, manteniendo encabezados claros, estilos tipográficos uniformes y saltos de página ordenados.
3. **Dado que** la compilación del documento se encuentra en progreso, **cuando** el usuario acciona la descarga, **entonces** el sistema exhibe un indicador visual de procesamiento y deshabilita temporalmente el botón para prevenir descargas duplicadas involuntarias.
4. **Dado que** el usuario interactúa con el botón de exportación y la previsualización documental, **cuando** utiliza el módulo, **entonces** la interfaz satisface las directrices visuales, diseño y microcopy especificados en UI-019 (Reportes Analíticos y PDF) del Catálogo de Interfaces (DOC-ANEXO-B).

**Reglas de negocio aplicables:** 
- N/A.

**Dependencias:** 
- Requiere `HU-REP-01` (módulo de reportes consolidados).

---

# ====================================================================
# DOCUMENTO OFICIAL: 07_Desglose_de_Tareas_Task_Breakdown.md
# ====================================================================

---
Código de Documento: DOC-PLAN-07
Título: Desglose de Tareas (Task Breakdown)
Versión: 4.8
Fecha: 2026-10-03
Elaborado por: Angeles Pérez, Jhonny
Revisado por: Colonia Infantas, Walter
Estado: Aprobado
Propósito: Desglose detallado de tareas por historia de usuario
Documentos relacionados: DOC-PLAN-00, DOC-PLAN-01, DOC-PLAN-02, DOC-PLAN-03-00, DOC-PLAN-04, DOC-PLAN-05, DOC-PLAN-06, DOC-PLAN-08, DOC-ANEXO-A, DOC-ANEXO-B
---

# 07. Desglose de Tareas (Task Breakdown)

## Convenciones del desglose
- **Formato:** un cuadro por historia de usuario (HU) con las columnas Tarea, Tipo, Estado, Responsable y Tiempo (h), según la plantilla del docente.
- **Plantilla de 8 pasos:** 1 Configurar entorno · 2 Diseñar modelo de datos · 3 Implementar modelo de datos · 4 Desarrollar interfaces · 5 Codificar · 6 Probar de unidad · 7 Depuración · 8 Desplegar en la web.
- **Pasos 1 a 3:** se ejecutan una sola vez, en HU-AUTH-01 (primera HU del sistema). Las demás HU reutilizan ese trabajo y comienzan en el paso 4; el número final del ID indica el paso de la plantilla (TAR-HU-XXX-nn).
- **Tipos:** Configuración, Diseño, Codificación, Diseño/Cod. y Test (la Depuración se clasifica como Test, como en la plantilla del docente).
- **Estado inicial:** Pend. en todas las tareas.
- **Pivote de estimación:** HU-CAT-01 (Ver lista de categorías) = 1 pt = 2.0 h-hombre. Las horas de cada HU son 2 × sus puntos; el reparto entre pasos sigue la proporción de la plantilla (1 : 2 : 2 : 1 : 1 para los pasos 4 a 8), con precisión de 0.25 h.
- **Roles por HU:** el Constructor Principal ejecuta los pasos 4, 5 y 7 (y 1 a 3 en HU-AUTH-01); el Verificador QA ejecuta los pasos 6 y 8. Nadie verifica su propia HU. Des.4 Alcalde actúa como QA Lead y no construye.
- **Capacidad:** 40 h netas por developer y sprint (25 h/semana × 2 semanas × 80 %).
- **Secuencia entre HU:** el orden de ejecución dentro del Sprint 1 y su camino crítico se detallan en el plan de ejecución del Sprint 1 (documento 06).

## Sprint 1

**Sprint 1 · Release 1 (MVP)** · 20 HU · 89 pts · 178 h

### HU-AUTH-01: Autenticación – Iniciar sesión
**Puntos:** 5 · **Prioridad:** Must have (4) · **Constructor Principal:** Des.5 Colonia · **Verificador QA:** Des.2 Nolasco

| ID | Tarea | Tipo | Estado | Responsable | Tiempo (h) |
|---|---|---|---|---|---|
| TAR-HU-AUTH-01-01 | Configurar entorno | Configuración | Pend. | Des.5 - Colonia | 1.00 |
| TAR-HU-AUTH-01-02 | Diseñar modelo de datos | Diseño | Pend. | Des.5 - Colonia | 1.00 |
| TAR-HU-AUTH-01-03 | Implementar modelo de datos | Codificación | Pend. | Des.5 - Colonia | 1.00 |
| TAR-HU-AUTH-01-04 | Desarrollar interfaces | Diseño/Cod. | Pend. | Des.5 - Colonia | 1.00 |
| TAR-HU-AUTH-01-05 | Codificar | Codificación | Pend. | Des.5 - Colonia | 2.00 |
| TAR-HU-AUTH-01-06 | Probar de unidad | Test | Pend. | Des.2 - Nolasco | 2.00 |
| TAR-HU-AUTH-01-07 | Depuración | Test | Pend. | Des.5 - Colonia | 1.00 |
| TAR-HU-AUTH-01-08 | Desplegar en la web | Configuración | Pend. | Des.2 - Nolasco | 1.00 |

**Subtotal HU-AUTH-01:** 7.00 h Construcción, 3.00 h Verificación. Total: 10.00 h.

### HU-AUTH-02: Autenticación – Bloquear cuenta por intentos fallidos
**Puntos:** 3 · **Prioridad:** Must have (4) · **Constructor Principal:** Des.1 Velasquez · **Verificador QA:** Des.6 Angeles

| ID | Tarea | Tipo | Estado | Responsable | Tiempo (h) |
|---|---|---|---|---|---|
| TAR-HU-AUTH-02-04 | Desarrollar interfaces | Diseño/Cod. | Pend. | Des.1 - Velasquez | 1.00 |
| TAR-HU-AUTH-02-05 | Codificar | Codificación | Pend. | Des.1 - Velasquez | 1.50 |
| TAR-HU-AUTH-02-06 | Probar de unidad | Test | Pend. | Des.6 - Angeles | 1.50 |
| TAR-HU-AUTH-02-07 | Depuración | Test | Pend. | Des.1 - Velasquez | 1.00 |
| TAR-HU-AUTH-02-08 | Desplegar en la web | Configuración | Pend. | Des.6 - Angeles | 1.00 |

**Subtotal HU-AUTH-02:** 3.50 h Construcción, 2.50 h Verificación. Total: 6.00 h.

### HU-AUTH-03: Autenticación – Cerrar sesión
**Puntos:** 2 · **Prioridad:** Must have (4) · **Constructor Principal:** Des.3 Castillo · **Verificador QA:** Des.5 Colonia

| ID | Tarea | Tipo | Estado | Responsable | Tiempo (h) |
|---|---|---|---|---|---|
| TAR-HU-AUTH-03-04 | Desarrollar interfaces | Diseño/Cod. | Pend. | Des.3 - Castillo | 0.75 |
| TAR-HU-AUTH-03-05 | Codificar | Codificación | Pend. | Des.3 - Castillo | 1.00 |
| TAR-HU-AUTH-03-06 | Probar de unidad | Test | Pend. | Des.5 - Colonia | 1.00 |
| TAR-HU-AUTH-03-07 | Depuración | Test | Pend. | Des.3 - Castillo | 0.75 |
| TAR-HU-AUTH-03-08 | Desplegar en la web | Configuración | Pend. | Des.5 - Colonia | 0.50 |

**Subtotal HU-AUTH-03:** 2.50 h Construcción, 1.50 h Verificación. Total: 4.00 h.

### HU-CAJA-01: Caja – Abrir turno de caja
**Puntos:** 5 · **Prioridad:** Must have (4) · **Constructor Principal:** Des.2 Nolasco · **Verificador QA:** Des.5 Colonia

| ID | Tarea | Tipo | Estado | Responsable | Tiempo (h) |
|---|---|---|---|---|---|
| TAR-HU-CAJA-01-04 | Desarrollar interfaces | Diseño/Cod. | Pend. | Des.2 - Nolasco | 1.50 |
| TAR-HU-CAJA-01-05 | Codificar | Codificación | Pend. | Des.2 - Nolasco | 2.75 |
| TAR-HU-CAJA-01-06 | Probar de unidad | Test | Pend. | Des.5 - Colonia | 2.75 |
| TAR-HU-CAJA-01-07 | Depuración | Test | Pend. | Des.2 - Nolasco | 1.50 |
| TAR-HU-CAJA-01-08 | Desplegar en la web | Configuración | Pend. | Des.5 - Colonia | 1.50 |

**Subtotal HU-CAJA-01:** 5.75 h Construcción, 4.25 h Verificación. Total: 10.00 h.

### HU-CAT-02: Categorías – Crear nueva categoría de productos
**Puntos:** 2 · **Prioridad:** Must have (4) · **Constructor Principal:** Des.6 Angeles · **Verificador QA:** Des.3 Castillo

| ID | Tarea | Tipo | Estado | Responsable | Tiempo (h) |
|---|---|---|---|---|---|
| TAR-HU-CAT-02-04 | Desarrollar interfaces | Diseño/Cod. | Pend. | Des.6 - Angeles | 0.75 |
| TAR-HU-CAT-02-05 | Codificar | Codificación | Pend. | Des.6 - Angeles | 1.00 |
| TAR-HU-CAT-02-06 | Probar de unidad | Test | Pend. | Des.3 - Castillo | 1.00 |
| TAR-HU-CAT-02-07 | Depuración | Test | Pend. | Des.6 - Angeles | 0.75 |
| TAR-HU-CAT-02-08 | Desplegar en la web | Configuración | Pend. | Des.3 - Castillo | 0.50 |

**Subtotal HU-CAT-02:** 2.50 h Construcción, 1.50 h Verificación. Total: 4.00 h.

### HU-CONF-02: Configuración – Actualizar configuración del negocio
**Puntos:** 3 · **Prioridad:** Must have (4) · **Constructor Principal:** Des.3 Castillo · **Verificador QA:** Des.6 Angeles

| ID | Tarea | Tipo | Estado | Responsable | Tiempo (h) |
|---|---|---|---|---|---|
| TAR-HU-CONF-02-04 | Desarrollar interfaces | Diseño/Cod. | Pend. | Des.3 - Castillo | 1.00 |
| TAR-HU-CONF-02-05 | Codificar | Codificación | Pend. | Des.3 - Castillo | 1.50 |
| TAR-HU-CONF-02-06 | Probar de unidad | Test | Pend. | Des.6 - Angeles | 1.50 |
| TAR-HU-CONF-02-07 | Depuración | Test | Pend. | Des.3 - Castillo | 1.00 |
| TAR-HU-CONF-02-08 | Desplegar en la web | Configuración | Pend. | Des.6 - Angeles | 1.00 |

**Subtotal HU-CONF-02:** 3.50 h Construcción, 2.50 h Verificación. Total: 6.00 h.

### HU-PROV-02: Proveedores – Registrar nuevo proveedor
**Puntos:** 3 · **Prioridad:** Must have (4) · **Constructor Principal:** Des.6 Angeles · **Verificador QA:** Des.5 Colonia

| ID | Tarea | Tipo | Estado | Responsable | Tiempo (h) |
|---|---|---|---|---|---|
| TAR-HU-PROV-02-04 | Desarrollar interfaces | Diseño/Cod. | Pend. | Des.6 - Angeles | 1.00 |
| TAR-HU-PROV-02-05 | Codificar | Codificación | Pend. | Des.6 - Angeles | 1.50 |
| TAR-HU-PROV-02-06 | Probar de unidad | Test | Pend. | Des.5 - Colonia | 1.50 |
| TAR-HU-PROV-02-07 | Depuración | Test | Pend. | Des.6 - Angeles | 1.00 |
| TAR-HU-PROV-02-08 | Desplegar en la web | Configuración | Pend. | Des.5 - Colonia | 1.00 |

**Subtotal HU-PROV-02:** 3.50 h Construcción, 2.50 h Verificación. Total: 6.00 h.

### HU-USR-02: Usuarios – Crear cuenta de nuevo empleado
**Puntos:** 5 · **Prioridad:** Must have (4) · **Constructor Principal:** Des.2 Nolasco · **Verificador QA:** Des.4 Alcalde

| ID | Tarea | Tipo | Estado | Responsable | Tiempo (h) |
|---|---|---|---|---|---|
| TAR-HU-USR-02-04 | Desarrollar interfaces | Diseño/Cod. | Pend. | Des.2 - Nolasco | 1.50 |
| TAR-HU-USR-02-05 | Codificar | Codificación | Pend. | Des.2 - Nolasco | 2.75 |
| TAR-HU-USR-02-06 | Probar de unidad | Test | Pend. | Des.4 - Alcalde | 2.75 |
| TAR-HU-USR-02-07 | Depuración | Test | Pend. | Des.2 - Nolasco | 1.50 |
| TAR-HU-USR-02-08 | Desplegar en la web | Configuración | Pend. | Des.4 - Alcalde | 1.50 |

**Subtotal HU-USR-02:** 5.75 h Construcción, 4.25 h Verificación. Total: 10.00 h.

### HU-CAJA-02: Caja – Cerrar turno de caja y cuadrar
**Puntos:** 5 · **Prioridad:** Must have (4) · **Constructor Principal:** Des.1 Velasquez · **Verificador QA:** Des.4 Alcalde

| ID | Tarea | Tipo | Estado | Responsable | Tiempo (h) |
|---|---|---|---|---|---|
| TAR-HU-CAJA-02-04 | Desarrollar interfaces | Diseño/Cod. | Pend. | Des.1 - Velasquez | 1.50 |
| TAR-HU-CAJA-02-05 | Codificar | Codificación | Pend. | Des.1 - Velasquez | 2.75 |
| TAR-HU-CAJA-02-06 | Probar de unidad | Test | Pend. | Des.4 - Alcalde | 2.75 |
| TAR-HU-CAJA-02-07 | Depuración | Test | Pend. | Des.1 - Velasquez | 1.50 |
| TAR-HU-CAJA-02-08 | Desplegar en la web | Configuración | Pend. | Des.4 - Alcalde | 1.50 |

**Subtotal HU-CAJA-02:** 5.75 h Construcción, 4.25 h Verificación. Total: 10.00 h.

### HU-CAT-01: Categorías – Ver lista de categorías de productos
**Puntos:** 1 · **Prioridad:** Must have (4) · **Constructor Principal:** Des.6 Angeles · **Verificador QA:** Des.2 Nolasco

| ID | Tarea | Tipo | Estado | Responsable | Tiempo (h) |
|---|---|---|---|---|---|
| TAR-HU-CAT-01-04 | Desarrollar interfaces | Diseño/Cod. | Pend. | Des.6 - Angeles | 0.50 |
| TAR-HU-CAT-01-05 | Codificar | Codificación | Pend. | Des.6 - Angeles | 0.50 |
| TAR-HU-CAT-01-06 | Probar de unidad | Test | Pend. | Des.2 - Nolasco | 0.50 |
| TAR-HU-CAT-01-07 | Depuración | Test | Pend. | Des.6 - Angeles | 0.25 |
| TAR-HU-CAT-01-08 | Desplegar en la web | Configuración | Pend. | Des.2 - Nolasco | 0.25 |

**Subtotal HU-CAT-01:** 1.25 h Construcción, 0.75 h Verificación. Total: 2.00 h.

### HU-PROD-02: Productos – Registrar nuevo producto en el catálogo
**Puntos:** 5 · **Prioridad:** Must have (4) · **Constructor Principal:** Des.2 Nolasco · **Verificador QA:** Des.6 Angeles

| ID | Tarea | Tipo | Estado | Responsable | Tiempo (h) |
|---|---|---|---|---|---|
| TAR-HU-PROD-02-04 | Desarrollar interfaces | Diseño/Cod. | Pend. | Des.2 - Nolasco | 1.50 |
| TAR-HU-PROD-02-05 | Codificar | Codificación | Pend. | Des.2 - Nolasco | 2.75 |
| TAR-HU-PROD-02-06 | Probar de unidad | Test | Pend. | Des.6 - Angeles | 2.75 |
| TAR-HU-PROD-02-07 | Depuración | Test | Pend. | Des.2 - Nolasco | 1.50 |
| TAR-HU-PROD-02-08 | Desplegar en la web | Configuración | Pend. | Des.6 - Angeles | 1.50 |

**Subtotal HU-PROD-02:** 5.75 h Construcción, 4.25 h Verificación. Total: 10.00 h.

### HU-CAJA-05: Caja – Consultar historial de turnos de caja
**Puntos:** 3 · **Prioridad:** Must have (4) · **Constructor Principal:** Des.6 Angeles · **Verificador QA:** Des.4 Alcalde

| ID | Tarea | Tipo | Estado | Responsable | Tiempo (h) |
|---|---|---|---|---|---|
| TAR-HU-CAJA-05-04 | Desarrollar interfaces | Diseño/Cod. | Pend. | Des.6 - Angeles | 1.00 |
| TAR-HU-CAJA-05-05 | Codificar | Codificación | Pend. | Des.6 - Angeles | 1.50 |
| TAR-HU-CAJA-05-06 | Probar de unidad | Test | Pend. | Des.4 - Alcalde | 1.50 |
| TAR-HU-CAJA-05-07 | Depuración | Test | Pend. | Des.6 - Angeles | 1.00 |
| TAR-HU-CAJA-05-08 | Desplegar en la web | Configuración | Pend. | Des.4 - Alcalde | 1.00 |

**Subtotal HU-CAJA-05:** 3.50 h Construcción, 2.50 h Verificación. Total: 6.00 h.

### HU-INV-01: Inventario – Registrar entrada de mercadería
**Puntos:** 5 · **Prioridad:** Must have (4) · **Constructor Principal:** Des.1 Velasquez · **Verificador QA:** Des.6 Angeles

| ID | Tarea | Tipo | Estado | Responsable | Tiempo (h) |
|---|---|---|---|---|---|
| TAR-HU-INV-01-04 | Desarrollar interfaces | Diseño/Cod. | Pend. | Des.1 - Velasquez | 1.50 |
| TAR-HU-INV-01-05 | Codificar | Codificación | Pend. | Des.1 - Velasquez | 2.75 |
| TAR-HU-INV-01-06 | Probar de unidad | Test | Pend. | Des.6 - Angeles | 2.75 |
| TAR-HU-INV-01-07 | Depuración | Test | Pend. | Des.1 - Velasquez | 1.50 |
| TAR-HU-INV-01-08 | Desplegar en la web | Configuración | Pend. | Des.6 - Angeles | 1.50 |

**Subtotal HU-INV-01:** 5.75 h Construcción, 4.25 h Verificación. Total: 10.00 h.

### HU-PROD-01: Productos – Ver catálogo completo de productos
**Puntos:** 3 · **Prioridad:** Must have (4) · **Constructor Principal:** Des.5 Colonia · **Verificador QA:** Des.6 Angeles

| ID | Tarea | Tipo | Estado | Responsable | Tiempo (h) |
|---|---|---|---|---|---|
| TAR-HU-PROD-01-04 | Desarrollar interfaces | Diseño/Cod. | Pend. | Des.5 - Colonia | 1.00 |
| TAR-HU-PROD-01-05 | Codificar | Codificación | Pend. | Des.5 - Colonia | 1.50 |
| TAR-HU-PROD-01-06 | Probar de unidad | Test | Pend. | Des.6 - Angeles | 1.50 |
| TAR-HU-PROD-01-07 | Depuración | Test | Pend. | Des.5 - Colonia | 1.00 |
| TAR-HU-PROD-01-08 | Desplegar en la web | Configuración | Pend. | Des.6 - Angeles | 1.00 |

**Subtotal HU-PROD-01:** 3.50 h Construcción, 2.50 h Verificación. Total: 6.00 h.

### HU-INV-02: Inventario – Registrar baja de inventario por merma
**Puntos:** 5 · **Prioridad:** Must have (4) · **Constructor Principal:** Des.2 Nolasco · **Verificador QA:** Des.1 Velasquez

| ID | Tarea | Tipo | Estado | Responsable | Tiempo (h) |
|---|---|---|---|---|---|
| TAR-HU-INV-02-04 | Desarrollar interfaces | Diseño/Cod. | Pend. | Des.2 - Nolasco | 1.50 |
| TAR-HU-INV-02-05 | Codificar | Codificación | Pend. | Des.2 - Nolasco | 2.75 |
| TAR-HU-INV-02-06 | Probar de unidad | Test | Pend. | Des.1 - Velasquez | 2.75 |
| TAR-HU-INV-02-07 | Depuración | Test | Pend. | Des.2 - Nolasco | 1.50 |
| TAR-HU-INV-02-08 | Desplegar en la web | Configuración | Pend. | Des.1 - Velasquez | 1.50 |

**Subtotal HU-INV-02:** 5.75 h Construcción, 4.25 h Verificación. Total: 10.00 h.

### HU-INV-03: Inventario – Realizar ajuste por conteo físico
**Puntos:** 5 · **Prioridad:** Must have (4) · **Constructor Principal:** Des.3 Castillo · **Verificador QA:** Des.6 Angeles

| ID | Tarea | Tipo | Estado | Responsable | Tiempo (h) |
|---|---|---|---|---|---|
| TAR-HU-INV-03-04 | Desarrollar interfaces | Diseño/Cod. | Pend. | Des.3 - Castillo | 1.50 |
| TAR-HU-INV-03-05 | Codificar | Codificación | Pend. | Des.3 - Castillo | 2.75 |
| TAR-HU-INV-03-06 | Probar de unidad | Test | Pend. | Des.6 - Angeles | 2.75 |
| TAR-HU-INV-03-07 | Depuración | Test | Pend. | Des.3 - Castillo | 1.50 |
| TAR-HU-INV-03-08 | Desplegar en la web | Configuración | Pend. | Des.6 - Angeles | 1.50 |

**Subtotal HU-INV-03:** 5.75 h Construcción, 4.25 h Verificación. Total: 10.00 h.

### HU-VEN-01: Ventas (POS) – Registrar una venta con Efectivo o Yape/Plin (IziPay)
**Puntos:** 13 · **Prioridad:** Must have (4) · **Constructor Principal:** Des.3 Castillo · **Verificador QA:** Des.4 Alcalde

| ID | Tarea | Tipo | Estado | Responsable | Tiempo (h) |
|---|---|---|---|---|---|
| TAR-HU-VEN-01-04 | Desarrollar interfaces | Diseño/Cod. | Pend. | Des.3 - Castillo | 3.75 |
| TAR-HU-VEN-01-05 | Codificar | Codificación | Pend. | Des.3 - Castillo | 7.50 |
| TAR-HU-VEN-01-06 | Probar de unidad | Test | Pend. | Des.4 - Alcalde | 7.25 |
| TAR-HU-VEN-01-07 | Depuración | Test | Pend. | Des.3 - Castillo | 3.75 |
| TAR-HU-VEN-01-08 | Desplegar en la web | Configuración | Pend. | Des.4 - Alcalde | 3.75 |

**Subtotal HU-VEN-01:** 15.00 h Construcción, 11.00 h Verificación. Total: 26.00 h.

### HU-CLI-02: Clientes – Registrar cliente automáticamente al vender
**Puntos:** 3 · **Prioridad:** Must have (4) · **Constructor Principal:** Des.2 Nolasco · **Verificador QA:** Des.3 Castillo

| ID | Tarea | Tipo | Estado | Responsable | Tiempo (h) |
|---|---|---|---|---|---|
| TAR-HU-CLI-02-04 | Desarrollar interfaces | Diseño/Cod. | Pend. | Des.2 - Nolasco | 1.00 |
| TAR-HU-CLI-02-05 | Codificar | Codificación | Pend. | Des.2 - Nolasco | 1.50 |
| TAR-HU-CLI-02-06 | Probar de unidad | Test | Pend. | Des.3 - Castillo | 1.50 |
| TAR-HU-CLI-02-07 | Depuración | Test | Pend. | Des.2 - Nolasco | 1.00 |
| TAR-HU-CLI-02-08 | Desplegar en la web | Configuración | Pend. | Des.3 - Castillo | 1.00 |

**Subtotal HU-CLI-02:** 3.50 h Construcción, 2.50 h Verificación. Total: 6.00 h.

### HU-VEN-02: Ventas (POS) – Emitir boleta o factura
**Puntos:** 8 · **Prioridad:** Must have (4) · **Constructor Principal:** Des.1 Velasquez · **Verificador QA:** Des.5 Colonia

| ID | Tarea | Tipo | Estado | Responsable | Tiempo (h) |
|---|---|---|---|---|---|
| TAR-HU-VEN-02-04 | Desarrollar interfaces | Diseño/Cod. | Pend. | Des.1 - Velasquez | 2.50 |
| TAR-HU-VEN-02-05 | Codificar | Codificación | Pend. | Des.1 - Velasquez | 4.50 |
| TAR-HU-VEN-02-06 | Probar de unidad | Test | Pend. | Des.5 - Colonia | 4.50 |
| TAR-HU-VEN-02-07 | Depuración | Test | Pend. | Des.1 - Velasquez | 2.25 |
| TAR-HU-VEN-02-08 | Desplegar en la web | Configuración | Pend. | Des.5 - Colonia | 2.25 |

**Subtotal HU-VEN-02:** 9.25 h Construcción, 6.75 h Verificación. Total: 16.00 h.

### HU-VEN-05: Ventas (POS) – Consultar historial de ventas
**Puntos:** 5 · **Prioridad:** Must have (4) · **Constructor Principal:** Des.5 Colonia · **Verificador QA:** Des.4 Alcalde

| ID | Tarea | Tipo | Estado | Responsable | Tiempo (h) |
|---|---|---|---|---|---|
| TAR-HU-VEN-05-04 | Desarrollar interfaces | Diseño/Cod. | Pend. | Des.5 - Colonia | 1.50 |
| TAR-HU-VEN-05-05 | Codificar | Codificación | Pend. | Des.5 - Colonia | 2.75 |
| TAR-HU-VEN-05-06 | Probar de unidad | Test | Pend. | Des.4 - Alcalde | 2.75 |
| TAR-HU-VEN-05-07 | Depuración | Test | Pend. | Des.5 - Colonia | 1.50 |
| TAR-HU-VEN-05-08 | Desplegar en la web | Configuración | Pend. | Des.4 - Alcalde | 1.50 |

**Subtotal HU-VEN-05:** 5.75 h Construcción, 4.25 h Verificación. Total: 10.00 h.

## Sprint 2

**Sprint 2 · Release 2** · 25 HU · 90 pts · 180 h

### HU-AUTH-04: Autenticación – Garantizar sesión única por usuario
**Puntos:** 8 · **Prioridad:** Must have (4) · **Constructor Principal:** Des.5 Colonia · **Verificador QA:** Des.3 Castillo

| ID | Tarea | Tipo | Estado | Responsable | Tiempo (h) |
|---|---|---|---|---|---|
| TAR-HU-AUTH-04-04 | Desarrollar interfaces | Diseño/Cod. | Pend. | Des.5 - Colonia | 2.50 |
| TAR-HU-AUTH-04-05 | Codificar | Codificación | Pend. | Des.5 - Colonia | 4.50 |
| TAR-HU-AUTH-04-06 | Probar de unidad | Test | Pend. | Des.3 - Castillo | 4.50 |
| TAR-HU-AUTH-04-07 | Depuración | Test | Pend. | Des.5 - Colonia | 2.25 |
| TAR-HU-AUTH-04-08 | Desplegar en la web | Configuración | Pend. | Des.3 - Castillo | 2.25 |

**Subtotal HU-AUTH-04:** 9.25 h Construcción, 6.75 h Verificación. Total: 16.00 h.

### HU-AUTH-05: Autenticación – Recuperar contraseña por correo
**Puntos:** 5 · **Prioridad:** Should have (3) · **Constructor Principal:** Des.5 Colonia · **Verificador QA:** Des.4 Alcalde

| ID | Tarea | Tipo | Estado | Responsable | Tiempo (h) |
|---|---|---|---|---|---|
| TAR-HU-AUTH-05-04 | Desarrollar interfaces | Diseño/Cod. | Pend. | Des.5 - Colonia | 1.50 |
| TAR-HU-AUTH-05-05 | Codificar | Codificación | Pend. | Des.5 - Colonia | 2.75 |
| TAR-HU-AUTH-05-06 | Probar de unidad | Test | Pend. | Des.4 - Alcalde | 2.75 |
| TAR-HU-AUTH-05-07 | Depuración | Test | Pend. | Des.5 - Colonia | 1.50 |
| TAR-HU-AUTH-05-08 | Desplegar en la web | Configuración | Pend. | Des.4 - Alcalde | 1.50 |

**Subtotal HU-AUTH-05:** 5.75 h Construcción, 4.25 h Verificación. Total: 10.00 h.

### HU-USR-06: Usuarios – Forzar cierre de sesión remoto
**Puntos:** 3 · **Prioridad:** Should have (3) · **Constructor Principal:** Des.3 Castillo · **Verificador QA:** Des.4 Alcalde

| ID | Tarea | Tipo | Estado | Responsable | Tiempo (h) |
|---|---|---|---|---|---|
| TAR-HU-USR-06-04 | Desarrollar interfaces | Diseño/Cod. | Pend. | Des.3 - Castillo | 1.00 |
| TAR-HU-USR-06-05 | Codificar | Codificación | Pend. | Des.3 - Castillo | 1.50 |
| TAR-HU-USR-06-06 | Probar de unidad | Test | Pend. | Des.4 - Alcalde | 1.50 |
| TAR-HU-USR-06-07 | Depuración | Test | Pend. | Des.3 - Castillo | 1.00 |
| TAR-HU-USR-06-08 | Desplegar en la web | Configuración | Pend. | Des.4 - Alcalde | 1.00 |

**Subtotal HU-USR-06:** 3.50 h Construcción, 2.50 h Verificación. Total: 6.00 h.

### HU-CONF-01: Configuración – Ver configuración actual del negocio
**Puntos:** 1 · **Prioridad:** Must have (4) · **Constructor Principal:** Des.5 Colonia · **Verificador QA:** Des.6 Angeles

| ID | Tarea | Tipo | Estado | Responsable | Tiempo (h) |
|---|---|---|---|---|---|
| TAR-HU-CONF-01-04 | Desarrollar interfaces | Diseño/Cod. | Pend. | Des.5 - Colonia | 0.50 |
| TAR-HU-CONF-01-05 | Codificar | Codificación | Pend. | Des.5 - Colonia | 0.50 |
| TAR-HU-CONF-01-06 | Probar de unidad | Test | Pend. | Des.6 - Angeles | 0.50 |
| TAR-HU-CONF-01-07 | Depuración | Test | Pend. | Des.5 - Colonia | 0.25 |
| TAR-HU-CONF-01-08 | Desplegar en la web | Configuración | Pend. | Des.6 - Angeles | 0.25 |

**Subtotal HU-CONF-01:** 1.25 h Construcción, 0.75 h Verificación. Total: 2.00 h.

### HU-PROV-01: Proveedores – Ver lista de proveedores
**Puntos:** 2 · **Prioridad:** Must have (4) · **Constructor Principal:** Des.6 Angeles · **Verificador QA:** Des.5 Colonia

| ID | Tarea | Tipo | Estado | Responsable | Tiempo (h) |
|---|---|---|---|---|---|
| TAR-HU-PROV-01-04 | Desarrollar interfaces | Diseño/Cod. | Pend. | Des.6 - Angeles | 0.75 |
| TAR-HU-PROV-01-05 | Codificar | Codificación | Pend. | Des.6 - Angeles | 1.00 |
| TAR-HU-PROV-01-06 | Probar de unidad | Test | Pend. | Des.5 - Colonia | 1.00 |
| TAR-HU-PROV-01-07 | Depuración | Test | Pend. | Des.6 - Angeles | 0.75 |
| TAR-HU-PROV-01-08 | Desplegar en la web | Configuración | Pend. | Des.5 - Colonia | 0.50 |

**Subtotal HU-PROV-01:** 2.50 h Construcción, 1.50 h Verificación. Total: 4.00 h.

### HU-USR-01: Usuarios – Listar empleados del sistema
**Puntos:** 2 · **Prioridad:** Must have (4) · **Constructor Principal:** Des.3 Castillo · **Verificador QA:** Des.1 Velasquez

| ID | Tarea | Tipo | Estado | Responsable | Tiempo (h) |
|---|---|---|---|---|---|
| TAR-HU-USR-01-04 | Desarrollar interfaces | Diseño/Cod. | Pend. | Des.3 - Castillo | 0.75 |
| TAR-HU-USR-01-05 | Codificar | Codificación | Pend. | Des.3 - Castillo | 1.00 |
| TAR-HU-USR-01-06 | Probar de unidad | Test | Pend. | Des.1 - Velasquez | 1.00 |
| TAR-HU-USR-01-07 | Depuración | Test | Pend. | Des.3 - Castillo | 0.75 |
| TAR-HU-USR-01-08 | Desplegar en la web | Configuración | Pend. | Des.1 - Velasquez | 0.50 |

**Subtotal HU-USR-01:** 2.50 h Construcción, 1.50 h Verificación. Total: 4.00 h.

### HU-USR-04: Usuarios – Desactivar cuenta de empleado
**Puntos:** 3 · **Prioridad:** Must have (4) · **Constructor Principal:** Des.2 Nolasco · **Verificador QA:** Des.1 Velasquez

| ID | Tarea | Tipo | Estado | Responsable | Tiempo (h) |
|---|---|---|---|---|---|
| TAR-HU-USR-04-04 | Desarrollar interfaces | Diseño/Cod. | Pend. | Des.2 - Nolasco | 1.00 |
| TAR-HU-USR-04-05 | Codificar | Codificación | Pend. | Des.2 - Nolasco | 1.50 |
| TAR-HU-USR-04-06 | Probar de unidad | Test | Pend. | Des.1 - Velasquez | 1.50 |
| TAR-HU-USR-04-07 | Depuración | Test | Pend. | Des.2 - Nolasco | 1.00 |
| TAR-HU-USR-04-08 | Desplegar en la web | Configuración | Pend. | Des.1 - Velasquez | 1.00 |

**Subtotal HU-USR-04:** 3.50 h Construcción, 2.50 h Verificación. Total: 6.00 h.

### HU-CAJA-03: Caja – Registrar movimiento manual de efectivo
**Puntos:** 3 · **Prioridad:** Should have (3) · **Constructor Principal:** Des.3 Castillo · **Verificador QA:** Des.4 Alcalde

| ID | Tarea | Tipo | Estado | Responsable | Tiempo (h) |
|---|---|---|---|---|---|
| TAR-HU-CAJA-03-04 | Desarrollar interfaces | Diseño/Cod. | Pend. | Des.3 - Castillo | 1.00 |
| TAR-HU-CAJA-03-05 | Codificar | Codificación | Pend. | Des.3 - Castillo | 1.50 |
| TAR-HU-CAJA-03-06 | Probar de unidad | Test | Pend. | Des.4 - Alcalde | 1.50 |
| TAR-HU-CAJA-03-07 | Depuración | Test | Pend. | Des.3 - Castillo | 1.00 |
| TAR-HU-CAJA-03-08 | Desplegar en la web | Configuración | Pend. | Des.4 - Alcalde | 1.00 |

**Subtotal HU-CAJA-03:** 3.50 h Construcción, 2.50 h Verificación. Total: 6.00 h.

### HU-CAJA-04: Caja – Ver resumen del turno activo
**Puntos:** 2 · **Prioridad:** Should have (3) · **Constructor Principal:** Des.5 Colonia · **Verificador QA:** Des.4 Alcalde

| ID | Tarea | Tipo | Estado | Responsable | Tiempo (h) |
|---|---|---|---|---|---|
| TAR-HU-CAJA-04-04 | Desarrollar interfaces | Diseño/Cod. | Pend. | Des.5 - Colonia | 0.75 |
| TAR-HU-CAJA-04-05 | Codificar | Codificación | Pend. | Des.5 - Colonia | 1.00 |
| TAR-HU-CAJA-04-06 | Probar de unidad | Test | Pend. | Des.4 - Alcalde | 1.00 |
| TAR-HU-CAJA-04-07 | Depuración | Test | Pend. | Des.5 - Colonia | 0.75 |
| TAR-HU-CAJA-04-08 | Desplegar en la web | Configuración | Pend. | Des.4 - Alcalde | 0.50 |

**Subtotal HU-CAJA-04:** 2.50 h Construcción, 1.50 h Verificación. Total: 4.00 h.

### HU-CAJA-07: Caja – Forzar cierre de turno ajeno
**Puntos:** 5 · **Prioridad:** Should have (3) · **Constructor Principal:** Des.2 Nolasco · **Verificador QA:** Des.3 Castillo

| ID | Tarea | Tipo | Estado | Responsable | Tiempo (h) |
|---|---|---|---|---|---|
| TAR-HU-CAJA-07-04 | Desarrollar interfaces | Diseño/Cod. | Pend. | Des.2 - Nolasco | 1.50 |
| TAR-HU-CAJA-07-05 | Codificar | Codificación | Pend. | Des.2 - Nolasco | 2.75 |
| TAR-HU-CAJA-07-06 | Probar de unidad | Test | Pend. | Des.3 - Castillo | 2.75 |
| TAR-HU-CAJA-07-07 | Depuración | Test | Pend. | Des.2 - Nolasco | 1.50 |
| TAR-HU-CAJA-07-08 | Desplegar en la web | Configuración | Pend. | Des.3 - Castillo | 1.50 |

**Subtotal HU-CAJA-07:** 5.75 h Construcción, 4.25 h Verificación. Total: 10.00 h.

### HU-PROV-04: Proveedores – Desactivar o reactivar proveedor
**Puntos:** 2 · **Prioridad:** Should have (3) · **Constructor Principal:** Des.3 Castillo · **Verificador QA:** Des.4 Alcalde

| ID | Tarea | Tipo | Estado | Responsable | Tiempo (h) |
|---|---|---|---|---|---|
| TAR-HU-PROV-04-04 | Desarrollar interfaces | Diseño/Cod. | Pend. | Des.3 - Castillo | 0.75 |
| TAR-HU-PROV-04-05 | Codificar | Codificación | Pend. | Des.3 - Castillo | 1.00 |
| TAR-HU-PROV-04-06 | Probar de unidad | Test | Pend. | Des.4 - Alcalde | 1.00 |
| TAR-HU-PROV-04-07 | Depuración | Test | Pend. | Des.3 - Castillo | 0.75 |
| TAR-HU-PROV-04-08 | Desplegar en la web | Configuración | Pend. | Des.4 - Alcalde | 0.50 |

**Subtotal HU-PROV-04:** 2.50 h Construcción, 1.50 h Verificación. Total: 4.00 h.

### HU-SOL-01: Reposición – Crear solicitud de reposición
**Puntos:** 3 · **Prioridad:** Must have (4) · **Constructor Principal:** Des.6 Angeles · **Verificador QA:** Des.1 Velasquez

| ID | Tarea | Tipo | Estado | Responsable | Tiempo (h) |
|---|---|---|---|---|---|
| TAR-HU-SOL-01-04 | Desarrollar interfaces | Diseño/Cod. | Pend. | Des.6 - Angeles | 1.00 |
| TAR-HU-SOL-01-05 | Codificar | Codificación | Pend. | Des.6 - Angeles | 1.50 |
| TAR-HU-SOL-01-06 | Probar de unidad | Test | Pend. | Des.1 - Velasquez | 1.50 |
| TAR-HU-SOL-01-07 | Depuración | Test | Pend. | Des.6 - Angeles | 1.00 |
| TAR-HU-SOL-01-08 | Desplegar en la web | Configuración | Pend. | Des.1 - Velasquez | 1.00 |

**Subtotal HU-SOL-01:** 3.50 h Construcción, 2.50 h Verificación. Total: 6.00 h.

### HU-CAJA-06: Caja – Aprobar cierre de turno
**Puntos:** 2 · **Prioridad:** Should have (3) · **Constructor Principal:** Des.6 Angeles · **Verificador QA:** Des.2 Nolasco

| ID | Tarea | Tipo | Estado | Responsable | Tiempo (h) |
|---|---|---|---|---|---|
| TAR-HU-CAJA-06-04 | Desarrollar interfaces | Diseño/Cod. | Pend. | Des.6 - Angeles | 0.75 |
| TAR-HU-CAJA-06-05 | Codificar | Codificación | Pend. | Des.6 - Angeles | 1.00 |
| TAR-HU-CAJA-06-06 | Probar de unidad | Test | Pend. | Des.2 - Nolasco | 1.00 |
| TAR-HU-CAJA-06-07 | Depuración | Test | Pend. | Des.6 - Angeles | 0.75 |
| TAR-HU-CAJA-06-08 | Desplegar en la web | Configuración | Pend. | Des.2 - Nolasco | 0.50 |

**Subtotal HU-CAJA-06:** 2.50 h Construcción, 1.50 h Verificación. Total: 4.00 h.

### HU-DASH-03: Dashboard – Alertas de stock crítico, vencimientos y turnos olvidados
**Puntos:** 5 · **Prioridad:** Must have (4) · **Constructor Principal:** Des.6 Angeles · **Verificador QA:** Des.4 Alcalde

| ID | Tarea | Tipo | Estado | Responsable | Tiempo (h) |
|---|---|---|---|---|---|
| TAR-HU-DASH-03-04 | Desarrollar interfaces | Diseño/Cod. | Pend. | Des.6 - Angeles | 1.50 |
| TAR-HU-DASH-03-05 | Codificar | Codificación | Pend. | Des.6 - Angeles | 2.75 |
| TAR-HU-DASH-03-06 | Probar de unidad | Test | Pend. | Des.4 - Alcalde | 2.75 |
| TAR-HU-DASH-03-07 | Depuración | Test | Pend. | Des.6 - Angeles | 1.50 |
| TAR-HU-DASH-03-08 | Desplegar en la web | Configuración | Pend. | Des.4 - Alcalde | 1.50 |

**Subtotal HU-DASH-03:** 5.75 h Construcción, 4.25 h Verificación. Total: 10.00 h.

### HU-PROD-06: Productos – Consultar productos próximos a vencer
**Puntos:** 3 · **Prioridad:** Must have (4) · **Constructor Principal:** Des.2 Nolasco · **Verificador QA:** Des.4 Alcalde

| ID | Tarea | Tipo | Estado | Responsable | Tiempo (h) |
|---|---|---|---|---|---|
| TAR-HU-PROD-06-04 | Desarrollar interfaces | Diseño/Cod. | Pend. | Des.2 - Nolasco | 1.00 |
| TAR-HU-PROD-06-05 | Codificar | Codificación | Pend. | Des.2 - Nolasco | 1.50 |
| TAR-HU-PROD-06-06 | Probar de unidad | Test | Pend. | Des.4 - Alcalde | 1.50 |
| TAR-HU-PROD-06-07 | Depuración | Test | Pend. | Des.2 - Nolasco | 1.00 |
| TAR-HU-PROD-06-08 | Desplegar en la web | Configuración | Pend. | Des.4 - Alcalde | 1.00 |

**Subtotal HU-PROD-06:** 3.50 h Construcción, 2.50 h Verificación. Total: 6.00 h.

### HU-REP-05: Reportes – Ver stock crítico
**Puntos:** 3 · **Prioridad:** Must have (4) · **Constructor Principal:** Des.1 Velasquez · **Verificador QA:** Des.4 Alcalde

| ID | Tarea | Tipo | Estado | Responsable | Tiempo (h) |
|---|---|---|---|---|---|
| TAR-HU-REP-05-04 | Desarrollar interfaces | Diseño/Cod. | Pend. | Des.1 - Velasquez | 1.00 |
| TAR-HU-REP-05-05 | Codificar | Codificación | Pend. | Des.1 - Velasquez | 1.50 |
| TAR-HU-REP-05-06 | Probar de unidad | Test | Pend. | Des.4 - Alcalde | 1.50 |
| TAR-HU-REP-05-07 | Depuración | Test | Pend. | Des.1 - Velasquez | 1.00 |
| TAR-HU-REP-05-08 | Desplegar en la web | Configuración | Pend. | Des.4 - Alcalde | 1.00 |

**Subtotal HU-REP-05:** 3.50 h Construcción, 2.50 h Verificación. Total: 6.00 h.

### HU-SOL-02: Reposición – Listar solicitudes con filtro por estado
**Puntos:** 2 · **Prioridad:** Must have (4) · **Constructor Principal:** Des.2 Nolasco · **Verificador QA:** Des.1 Velasquez

| ID | Tarea | Tipo | Estado | Responsable | Tiempo (h) |
|---|---|---|---|---|---|
| TAR-HU-SOL-02-04 | Desarrollar interfaces | Diseño/Cod. | Pend. | Des.2 - Nolasco | 0.75 |
| TAR-HU-SOL-02-05 | Codificar | Codificación | Pend. | Des.2 - Nolasco | 1.00 |
| TAR-HU-SOL-02-06 | Probar de unidad | Test | Pend. | Des.1 - Velasquez | 1.00 |
| TAR-HU-SOL-02-07 | Depuración | Test | Pend. | Des.2 - Nolasco | 0.75 |
| TAR-HU-SOL-02-08 | Desplegar en la web | Configuración | Pend. | Des.1 - Velasquez | 0.50 |

**Subtotal HU-SOL-02:** 2.50 h Construcción, 1.50 h Verificación. Total: 4.00 h.

### HU-SOL-03: Reposición – Aprobar solicitud de reposición
**Puntos:** 3 · **Prioridad:** Must have (4) · **Constructor Principal:** Des.3 Castillo · **Verificador QA:** Des.4 Alcalde

| ID | Tarea | Tipo | Estado | Responsable | Tiempo (h) |
|---|---|---|---|---|---|
| TAR-HU-SOL-03-04 | Desarrollar interfaces | Diseño/Cod. | Pend. | Des.3 - Castillo | 1.00 |
| TAR-HU-SOL-03-05 | Codificar | Codificación | Pend. | Des.3 - Castillo | 1.50 |
| TAR-HU-SOL-03-06 | Probar de unidad | Test | Pend. | Des.4 - Alcalde | 1.50 |
| TAR-HU-SOL-03-07 | Depuración | Test | Pend. | Des.3 - Castillo | 1.00 |
| TAR-HU-SOL-03-08 | Desplegar en la web | Configuración | Pend. | Des.4 - Alcalde | 1.00 |

**Subtotal HU-SOL-03:** 3.50 h Construcción, 2.50 h Verificación. Total: 6.00 h.

### HU-SOL-04: Reposición – Rechazar solicitud de reposición
**Puntos:** 2 · **Prioridad:** Should have (3) · **Constructor Principal:** Des.1 Velasquez · **Verificador QA:** Des.3 Castillo

| ID | Tarea | Tipo | Estado | Responsable | Tiempo (h) |
|---|---|---|---|---|---|
| TAR-HU-SOL-04-04 | Desarrollar interfaces | Diseño/Cod. | Pend. | Des.1 - Velasquez | 0.75 |
| TAR-HU-SOL-04-05 | Codificar | Codificación | Pend. | Des.1 - Velasquez | 1.00 |
| TAR-HU-SOL-04-06 | Probar de unidad | Test | Pend. | Des.3 - Castillo | 1.00 |
| TAR-HU-SOL-04-07 | Depuración | Test | Pend. | Des.1 - Velasquez | 0.75 |
| TAR-HU-SOL-04-08 | Desplegar en la web | Configuración | Pend. | Des.3 - Castillo | 0.50 |

**Subtotal HU-SOL-04:** 2.50 h Construcción, 1.50 h Verificación. Total: 4.00 h.

### HU-DASH-01: Dashboard – Ver resumen de ventas del día y del mes
**Puntos:** 5 · **Prioridad:** Must have (4) · **Constructor Principal:** Des.1 Velasquez · **Verificador QA:** Des.5 Colonia

| ID | Tarea | Tipo | Estado | Responsable | Tiempo (h) |
|---|---|---|---|---|---|
| TAR-HU-DASH-01-04 | Desarrollar interfaces | Diseño/Cod. | Pend. | Des.1 - Velasquez | 1.50 |
| TAR-HU-DASH-01-05 | Codificar | Codificación | Pend. | Des.1 - Velasquez | 2.75 |
| TAR-HU-DASH-01-06 | Probar de unidad | Test | Pend. | Des.5 - Colonia | 2.75 |
| TAR-HU-DASH-01-07 | Depuración | Test | Pend. | Des.1 - Velasquez | 1.50 |
| TAR-HU-DASH-01-08 | Desplegar en la web | Configuración | Pend. | Des.5 - Colonia | 1.50 |

**Subtotal HU-DASH-01:** 5.75 h Construcción, 4.25 h Verificación. Total: 10.00 h.

### HU-REP-01: Reportes – Ver resumen de ventas por período
**Puntos:** 5 · **Prioridad:** Must have (4) · **Constructor Principal:** Des.5 Colonia · **Verificador QA:** Des.2 Nolasco

| ID | Tarea | Tipo | Estado | Responsable | Tiempo (h) |
|---|---|---|---|---|---|
| TAR-HU-REP-01-04 | Desarrollar interfaces | Diseño/Cod. | Pend. | Des.5 - Colonia | 1.50 |
| TAR-HU-REP-01-05 | Codificar | Codificación | Pend. | Des.5 - Colonia | 2.75 |
| TAR-HU-REP-01-06 | Probar de unidad | Test | Pend. | Des.2 - Nolasco | 2.75 |
| TAR-HU-REP-01-07 | Depuración | Test | Pend. | Des.5 - Colonia | 1.50 |
| TAR-HU-REP-01-08 | Desplegar en la web | Configuración | Pend. | Des.2 - Nolasco | 1.50 |

**Subtotal HU-REP-01:** 5.75 h Construcción, 4.25 h Verificación. Total: 10.00 h.

### HU-REP-02: Reportes – Ver ranking de productos más vendidos
**Puntos:** 3 · **Prioridad:** Must have (4) · **Constructor Principal:** Des.1 Velasquez · **Verificador QA:** Des.6 Angeles

| ID | Tarea | Tipo | Estado | Responsable | Tiempo (h) |
|---|---|---|---|---|---|
| TAR-HU-REP-02-04 | Desarrollar interfaces | Diseño/Cod. | Pend. | Des.1 - Velasquez | 1.00 |
| TAR-HU-REP-02-05 | Codificar | Codificación | Pend. | Des.1 - Velasquez | 1.50 |
| TAR-HU-REP-02-06 | Probar de unidad | Test | Pend. | Des.6 - Angeles | 1.50 |
| TAR-HU-REP-02-07 | Depuración | Test | Pend. | Des.1 - Velasquez | 1.00 |
| TAR-HU-REP-02-08 | Desplegar en la web | Configuración | Pend. | Des.6 - Angeles | 1.00 |

**Subtotal HU-REP-02:** 3.50 h Construcción, 2.50 h Verificación. Total: 6.00 h.

### HU-SOL-05: Reposición – Completar solicitud al recibir mercadería
**Puntos:** 8 · **Prioridad:** Must have (4) · **Constructor Principal:** Des.2 Nolasco · **Verificador QA:** Des.1 Velasquez

| ID | Tarea | Tipo | Estado | Responsable | Tiempo (h) |
|---|---|---|---|---|---|
| TAR-HU-SOL-05-04 | Desarrollar interfaces | Diseño/Cod. | Pend. | Des.2 - Nolasco | 2.50 |
| TAR-HU-SOL-05-05 | Codificar | Codificación | Pend. | Des.2 - Nolasco | 4.50 |
| TAR-HU-SOL-05-06 | Probar de unidad | Test | Pend. | Des.1 - Velasquez | 4.50 |
| TAR-HU-SOL-05-07 | Depuración | Test | Pend. | Des.2 - Nolasco | 2.25 |
| TAR-HU-SOL-05-08 | Desplegar en la web | Configuración | Pend. | Des.1 - Velasquez | 2.25 |

**Subtotal HU-SOL-05:** 9.25 h Construcción, 6.75 h Verificación. Total: 16.00 h.

### HU-VEN-06: Ventas (POS) – Anular una venta con devolución
**Puntos:** 8 · **Prioridad:** Must have (4) · **Constructor Principal:** Des.6 Angeles · **Verificador QA:** Des.4 Alcalde

| ID | Tarea | Tipo | Estado | Responsable | Tiempo (h) |
|---|---|---|---|---|---|
| TAR-HU-VEN-06-04 | Desarrollar interfaces | Diseño/Cod. | Pend. | Des.6 - Angeles | 2.50 |
| TAR-HU-VEN-06-05 | Codificar | Codificación | Pend. | Des.6 - Angeles | 4.50 |
| TAR-HU-VEN-06-06 | Probar de unidad | Test | Pend. | Des.4 - Alcalde | 4.50 |
| TAR-HU-VEN-06-07 | Depuración | Test | Pend. | Des.6 - Angeles | 2.25 |
| TAR-HU-VEN-06-08 | Desplegar en la web | Configuración | Pend. | Des.4 - Alcalde | 2.25 |

**Subtotal HU-VEN-06:** 9.25 h Construcción, 6.75 h Verificación. Total: 16.00 h.

### HU-VEN-07: Ventas (POS) – Verificar recepción de pago Yape/Plin (IziPay)
**Puntos:** 2 · **Prioridad:** Should have (3) · **Constructor Principal:** Des.3 Castillo · **Verificador QA:** Des.6 Angeles

| ID | Tarea | Tipo | Estado | Responsable | Tiempo (h) |
|---|---|---|---|---|---|
| TAR-HU-VEN-07-04 | Desarrollar interfaces | Diseño/Cod. | Pend. | Des.3 - Castillo | 0.75 |
| TAR-HU-VEN-07-05 | Codificar | Codificación | Pend. | Des.3 - Castillo | 1.00 |
| TAR-HU-VEN-07-06 | Probar de unidad | Test | Pend. | Des.6 - Angeles | 1.00 |
| TAR-HU-VEN-07-07 | Depuración | Test | Pend. | Des.3 - Castillo | 0.75 |
| TAR-HU-VEN-07-08 | Desplegar en la web | Configuración | Pend. | Des.6 - Angeles | 0.50 |

**Subtotal HU-VEN-07:** 2.50 h Construcción, 1.50 h Verificación. Total: 4.00 h.

## Sprint 3

**Sprint 3 · Release 3** · 27 HU · 72 pts · 144 h

### HU-AUTH-06: Autenticación – Cambiar contraseña propia
**Puntos:** 3 · **Prioridad:** Should have (3) · **Constructor Principal:** Des.2 Nolasco · **Verificador QA:** Des.4 Alcalde

| ID | Tarea | Tipo | Estado | Responsable | Tiempo (h) |
|---|---|---|---|---|---|
| TAR-HU-AUTH-06-04 | Desarrollar interfaces | Diseño/Cod. | Pend. | Des.2 - Nolasco | 1.00 |
| TAR-HU-AUTH-06-05 | Codificar | Codificación | Pend. | Des.2 - Nolasco | 1.50 |
| TAR-HU-AUTH-06-06 | Probar de unidad | Test | Pend. | Des.4 - Alcalde | 1.50 |
| TAR-HU-AUTH-06-07 | Depuración | Test | Pend. | Des.2 - Nolasco | 1.00 |
| TAR-HU-AUTH-06-08 | Desplegar en la web | Configuración | Pend. | Des.4 - Alcalde | 1.00 |

**Subtotal HU-AUTH-06:** 3.50 h Construcción, 2.50 h Verificación. Total: 6.00 h.

### HU-LOG-01: Trazabilidad – Consultar registro de accesos al sistema
**Puntos:** 3 · **Prioridad:** Should have (3) · **Constructor Principal:** Des.1 Velasquez · **Verificador QA:** Des.3 Castillo

| ID | Tarea | Tipo | Estado | Responsable | Tiempo (h) |
|---|---|---|---|---|---|
| TAR-HU-LOG-01-04 | Desarrollar interfaces | Diseño/Cod. | Pend. | Des.1 - Velasquez | 1.00 |
| TAR-HU-LOG-01-05 | Codificar | Codificación | Pend. | Des.1 - Velasquez | 1.50 |
| TAR-HU-LOG-01-06 | Probar de unidad | Test | Pend. | Des.3 - Castillo | 1.50 |
| TAR-HU-LOG-01-07 | Depuración | Test | Pend. | Des.1 - Velasquez | 1.00 |
| TAR-HU-LOG-01-08 | Desplegar en la web | Configuración | Pend. | Des.3 - Castillo | 1.00 |

**Subtotal HU-LOG-01:** 3.50 h Construcción, 2.50 h Verificación. Total: 6.00 h.

### HU-CAT-03: Categorías – Editar nombre de categoría
**Puntos:** 1 · **Prioridad:** Should have (3) · **Constructor Principal:** Des.1 Velasquez · **Verificador QA:** Des.4 Alcalde

| ID | Tarea | Tipo | Estado | Responsable | Tiempo (h) |
|---|---|---|---|---|---|
| TAR-HU-CAT-03-04 | Desarrollar interfaces | Diseño/Cod. | Pend. | Des.1 - Velasquez | 0.50 |
| TAR-HU-CAT-03-05 | Codificar | Codificación | Pend. | Des.1 - Velasquez | 0.50 |
| TAR-HU-CAT-03-06 | Probar de unidad | Test | Pend. | Des.4 - Alcalde | 0.50 |
| TAR-HU-CAT-03-07 | Depuración | Test | Pend. | Des.1 - Velasquez | 0.25 |
| TAR-HU-CAT-03-08 | Desplegar en la web | Configuración | Pend. | Des.4 - Alcalde | 0.25 |

**Subtotal HU-CAT-03:** 1.25 h Construcción, 0.75 h Verificación. Total: 2.00 h.

### HU-PROV-03: Proveedores – Editar datos de un proveedor
**Puntos:** 2 · **Prioridad:** Should have (3) · **Constructor Principal:** Des.2 Nolasco · **Verificador QA:** Des.4 Alcalde

| ID | Tarea | Tipo | Estado | Responsable | Tiempo (h) |
|---|---|---|---|---|---|
| TAR-HU-PROV-03-04 | Desarrollar interfaces | Diseño/Cod. | Pend. | Des.2 - Nolasco | 0.75 |
| TAR-HU-PROV-03-05 | Codificar | Codificación | Pend. | Des.2 - Nolasco | 1.00 |
| TAR-HU-PROV-03-06 | Probar de unidad | Test | Pend. | Des.4 - Alcalde | 1.00 |
| TAR-HU-PROV-03-07 | Depuración | Test | Pend. | Des.2 - Nolasco | 0.75 |
| TAR-HU-PROV-03-08 | Desplegar en la web | Configuración | Pend. | Des.4 - Alcalde | 0.50 |

**Subtotal HU-PROV-03:** 2.50 h Construcción, 1.50 h Verificación. Total: 4.00 h.

### HU-USR-03: Usuarios – Editar datos de un empleado
**Puntos:** 3 · **Prioridad:** Should have (3) · **Constructor Principal:** Des.6 Angeles · **Verificador QA:** Des.4 Alcalde

| ID | Tarea | Tipo | Estado | Responsable | Tiempo (h) |
|---|---|---|---|---|---|
| TAR-HU-USR-03-04 | Desarrollar interfaces | Diseño/Cod. | Pend. | Des.6 - Angeles | 1.00 |
| TAR-HU-USR-03-05 | Codificar | Codificación | Pend. | Des.6 - Angeles | 1.50 |
| TAR-HU-USR-03-06 | Probar de unidad | Test | Pend. | Des.4 - Alcalde | 1.50 |
| TAR-HU-USR-03-07 | Depuración | Test | Pend. | Des.6 - Angeles | 1.00 |
| TAR-HU-USR-03-08 | Desplegar en la web | Configuración | Pend. | Des.4 - Alcalde | 1.00 |

**Subtotal HU-USR-03:** 3.50 h Construcción, 2.50 h Verificación. Total: 6.00 h.

### HU-CAT-04: Categorías – Eliminar categoría sin productos
**Puntos:** 2 · **Prioridad:** Could have (2) · **Constructor Principal:** Des.5 Colonia · **Verificador QA:** Des.1 Velasquez

| ID | Tarea | Tipo | Estado | Responsable | Tiempo (h) |
|---|---|---|---|---|---|
| TAR-HU-CAT-04-04 | Desarrollar interfaces | Diseño/Cod. | Pend. | Des.5 - Colonia | 0.75 |
| TAR-HU-CAT-04-05 | Codificar | Codificación | Pend. | Des.5 - Colonia | 1.00 |
| TAR-HU-CAT-04-06 | Probar de unidad | Test | Pend. | Des.1 - Velasquez | 1.00 |
| TAR-HU-CAT-04-07 | Depuración | Test | Pend. | Des.5 - Colonia | 0.75 |
| TAR-HU-CAT-04-08 | Desplegar en la web | Configuración | Pend. | Des.1 - Velasquez | 0.50 |

**Subtotal HU-CAT-04:** 2.50 h Construcción, 1.50 h Verificación. Total: 4.00 h.

### HU-PROD-04: Productos – Editar datos de un producto
**Puntos:** 3 · **Prioridad:** Should have (3) · **Constructor Principal:** Des.1 Velasquez · **Verificador QA:** Des.4 Alcalde

| ID | Tarea | Tipo | Estado | Responsable | Tiempo (h) |
|---|---|---|---|---|---|
| TAR-HU-PROD-04-04 | Desarrollar interfaces | Diseño/Cod. | Pend. | Des.1 - Velasquez | 1.00 |
| TAR-HU-PROD-04-05 | Codificar | Codificación | Pend. | Des.1 - Velasquez | 1.50 |
| TAR-HU-PROD-04-06 | Probar de unidad | Test | Pend. | Des.4 - Alcalde | 1.50 |
| TAR-HU-PROD-04-07 | Depuración | Test | Pend. | Des.1 - Velasquez | 1.00 |
| TAR-HU-PROD-04-08 | Desplegar en la web | Configuración | Pend. | Des.4 - Alcalde | 1.00 |

**Subtotal HU-PROD-04:** 3.50 h Construcción, 2.50 h Verificación. Total: 6.00 h.

### HU-PROD-05: Productos – Desactivar o reactivar producto
**Puntos:** 2 · **Prioridad:** Should have (3) · **Constructor Principal:** Des.6 Angeles · **Verificador QA:** Des.4 Alcalde

| ID | Tarea | Tipo | Estado | Responsable | Tiempo (h) |
|---|---|---|---|---|---|
| TAR-HU-PROD-05-04 | Desarrollar interfaces | Diseño/Cod. | Pend. | Des.6 - Angeles | 0.75 |
| TAR-HU-PROD-05-05 | Codificar | Codificación | Pend. | Des.6 - Angeles | 1.00 |
| TAR-HU-PROD-05-06 | Probar de unidad | Test | Pend. | Des.4 - Alcalde | 1.00 |
| TAR-HU-PROD-05-07 | Depuración | Test | Pend. | Des.6 - Angeles | 0.75 |
| TAR-HU-PROD-05-08 | Desplegar en la web | Configuración | Pend. | Des.4 - Alcalde | 0.50 |

**Subtotal HU-PROD-05:** 2.50 h Construcción, 1.50 h Verificación. Total: 4.00 h.

### HU-USR-05: Usuarios – Reactivar cuenta de empleado
**Puntos:** 2 · **Prioridad:** Should have (3) · **Constructor Principal:** Des.1 Velasquez · **Verificador QA:** Des.4 Alcalde

| ID | Tarea | Tipo | Estado | Responsable | Tiempo (h) |
|---|---|---|---|---|---|
| TAR-HU-USR-05-04 | Desarrollar interfaces | Diseño/Cod. | Pend. | Des.1 - Velasquez | 0.75 |
| TAR-HU-USR-05-05 | Codificar | Codificación | Pend. | Des.1 - Velasquez | 1.00 |
| TAR-HU-USR-05-06 | Probar de unidad | Test | Pend. | Des.4 - Alcalde | 1.00 |
| TAR-HU-USR-05-07 | Depuración | Test | Pend. | Des.1 - Velasquez | 0.75 |
| TAR-HU-USR-05-08 | Desplegar en la web | Configuración | Pend. | Des.4 - Alcalde | 0.50 |

**Subtotal HU-USR-05:** 2.50 h Construcción, 1.50 h Verificación. Total: 4.00 h.

### HU-PROD-03: Productos – Escanear código de barras para registrar producto
**Puntos:** 5 · **Prioridad:** Could have (2) · **Constructor Principal:** Des.5 Colonia · **Verificador QA:** Des.2 Nolasco

| ID | Tarea | Tipo | Estado | Responsable | Tiempo (h) |
|---|---|---|---|---|---|
| TAR-HU-PROD-03-04 | Desarrollar interfaces | Diseño/Cod. | Pend. | Des.5 - Colonia | 1.50 |
| TAR-HU-PROD-03-05 | Codificar | Codificación | Pend. | Des.5 - Colonia | 2.75 |
| TAR-HU-PROD-03-06 | Probar de unidad | Test | Pend. | Des.2 - Nolasco | 2.75 |
| TAR-HU-PROD-03-07 | Depuración | Test | Pend. | Des.5 - Colonia | 1.50 |
| TAR-HU-PROD-03-08 | Desplegar en la web | Configuración | Pend. | Des.2 - Nolasco | 1.50 |

**Subtotal HU-PROD-03:** 5.75 h Construcción, 4.25 h Verificación. Total: 10.00 h.

### HU-DASH-05: Dashboard – Ver solicitudes de reposición pendientes
**Puntos:** 2 · **Prioridad:** Should have (3) · **Constructor Principal:** Des.1 Velasquez · **Verificador QA:** Des.4 Alcalde

| ID | Tarea | Tipo | Estado | Responsable | Tiempo (h) |
|---|---|---|---|---|---|
| TAR-HU-DASH-05-04 | Desarrollar interfaces | Diseño/Cod. | Pend. | Des.1 - Velasquez | 0.75 |
| TAR-HU-DASH-05-05 | Codificar | Codificación | Pend. | Des.1 - Velasquez | 1.00 |
| TAR-HU-DASH-05-06 | Probar de unidad | Test | Pend. | Des.4 - Alcalde | 1.00 |
| TAR-HU-DASH-05-07 | Depuración | Test | Pend. | Des.1 - Velasquez | 0.75 |
| TAR-HU-DASH-05-08 | Desplegar en la web | Configuración | Pend. | Des.4 - Alcalde | 0.50 |

**Subtotal HU-DASH-05:** 2.50 h Construcción, 1.50 h Verificación. Total: 4.00 h.

### HU-INV-04: Inventario – Consultar historial de entradas
**Puntos:** 2 · **Prioridad:** Should have (3) · **Constructor Principal:** Des.6 Angeles · **Verificador QA:** Des.4 Alcalde

| ID | Tarea | Tipo | Estado | Responsable | Tiempo (h) |
|---|---|---|---|---|---|
| TAR-HU-INV-04-04 | Desarrollar interfaces | Diseño/Cod. | Pend. | Des.6 - Angeles | 0.75 |
| TAR-HU-INV-04-05 | Codificar | Codificación | Pend. | Des.6 - Angeles | 1.00 |
| TAR-HU-INV-04-06 | Probar de unidad | Test | Pend. | Des.4 - Alcalde | 1.00 |
| TAR-HU-INV-04-07 | Depuración | Test | Pend. | Des.6 - Angeles | 0.75 |
| TAR-HU-INV-04-08 | Desplegar en la web | Configuración | Pend. | Des.4 - Alcalde | 0.50 |

**Subtotal HU-INV-04:** 2.50 h Construcción, 1.50 h Verificación. Total: 4.00 h.

### HU-REP-06: Reportes – Ver resumen general del inventario
**Puntos:** 2 · **Prioridad:** Should have (3) · **Constructor Principal:** Des.2 Nolasco · **Verificador QA:** Des.4 Alcalde

| ID | Tarea | Tipo | Estado | Responsable | Tiempo (h) |
|---|---|---|---|---|---|
| TAR-HU-REP-06-04 | Desarrollar interfaces | Diseño/Cod. | Pend. | Des.2 - Nolasco | 0.75 |
| TAR-HU-REP-06-05 | Codificar | Codificación | Pend. | Des.2 - Nolasco | 1.00 |
| TAR-HU-REP-06-06 | Probar de unidad | Test | Pend. | Des.4 - Alcalde | 1.00 |
| TAR-HU-REP-06-07 | Depuración | Test | Pend. | Des.2 - Nolasco | 0.75 |
| TAR-HU-REP-06-08 | Desplegar en la web | Configuración | Pend. | Des.4 - Alcalde | 0.50 |

**Subtotal HU-REP-06:** 2.50 h Construcción, 1.50 h Verificación. Total: 4.00 h.

### HU-DASH-02: Dashboard – Ver gráfico de evolución de ventas por día
**Puntos:** 3 · **Prioridad:** Should have (3) · **Constructor Principal:** Des.5 Colonia · **Verificador QA:** Des.4 Alcalde

| ID | Tarea | Tipo | Estado | Responsable | Tiempo (h) |
|---|---|---|---|---|---|
| TAR-HU-DASH-02-04 | Desarrollar interfaces | Diseño/Cod. | Pend. | Des.5 - Colonia | 1.00 |
| TAR-HU-DASH-02-05 | Codificar | Codificación | Pend. | Des.5 - Colonia | 1.50 |
| TAR-HU-DASH-02-06 | Probar de unidad | Test | Pend. | Des.4 - Alcalde | 1.50 |
| TAR-HU-DASH-02-07 | Depuración | Test | Pend. | Des.5 - Colonia | 1.00 |
| TAR-HU-DASH-02-08 | Desplegar en la web | Configuración | Pend. | Des.4 - Alcalde | 1.00 |

**Subtotal HU-DASH-02:** 3.50 h Construcción, 2.50 h Verificación. Total: 6.00 h.

### HU-DASH-04: Dashboard – Ver ranking de productos más vendidos
**Puntos:** 3 · **Prioridad:** Should have (3) · **Constructor Principal:** Des.6 Angeles · **Verificador QA:** Des.5 Colonia

| ID | Tarea | Tipo | Estado | Responsable | Tiempo (h) |
|---|---|---|---|---|---|
| TAR-HU-DASH-04-04 | Desarrollar interfaces | Diseño/Cod. | Pend. | Des.6 - Angeles | 1.00 |
| TAR-HU-DASH-04-05 | Codificar | Codificación | Pend. | Des.6 - Angeles | 1.50 |
| TAR-HU-DASH-04-06 | Probar de unidad | Test | Pend. | Des.5 - Colonia | 1.50 |
| TAR-HU-DASH-04-07 | Depuración | Test | Pend. | Des.6 - Angeles | 1.00 |
| TAR-HU-DASH-04-08 | Desplegar en la web | Configuración | Pend. | Des.5 - Colonia | 1.00 |

**Subtotal HU-DASH-04:** 3.50 h Construcción, 2.50 h Verificación. Total: 6.00 h.

### HU-INV-05: Inventario – Consultar historial de bajas
**Puntos:** 2 · **Prioridad:** Should have (3) · **Constructor Principal:** Des.2 Nolasco · **Verificador QA:** Des.4 Alcalde

| ID | Tarea | Tipo | Estado | Responsable | Tiempo (h) |
|---|---|---|---|---|---|
| TAR-HU-INV-05-04 | Desarrollar interfaces | Diseño/Cod. | Pend. | Des.2 - Nolasco | 0.75 |
| TAR-HU-INV-05-05 | Codificar | Codificación | Pend. | Des.2 - Nolasco | 1.00 |
| TAR-HU-INV-05-06 | Probar de unidad | Test | Pend. | Des.4 - Alcalde | 1.00 |
| TAR-HU-INV-05-07 | Depuración | Test | Pend. | Des.2 - Nolasco | 0.75 |
| TAR-HU-INV-05-08 | Desplegar en la web | Configuración | Pend. | Des.4 - Alcalde | 0.50 |

**Subtotal HU-INV-05:** 2.50 h Construcción, 1.50 h Verificación. Total: 4.00 h.

### HU-INV-06: Inventario – Consultar historial de ajustes
**Puntos:** 2 · **Prioridad:** Should have (3) · **Constructor Principal:** Des.2 Nolasco · **Verificador QA:** Des.5 Colonia

| ID | Tarea | Tipo | Estado | Responsable | Tiempo (h) |
|---|---|---|---|---|---|
| TAR-HU-INV-06-04 | Desarrollar interfaces | Diseño/Cod. | Pend. | Des.2 - Nolasco | 0.75 |
| TAR-HU-INV-06-05 | Codificar | Codificación | Pend. | Des.2 - Nolasco | 1.00 |
| TAR-HU-INV-06-06 | Probar de unidad | Test | Pend. | Des.5 - Colonia | 1.00 |
| TAR-HU-INV-06-07 | Depuración | Test | Pend. | Des.2 - Nolasco | 0.75 |
| TAR-HU-INV-06-08 | Desplegar en la web | Configuración | Pend. | Des.5 - Colonia | 0.50 |

**Subtotal HU-INV-06:** 2.50 h Construcción, 1.50 h Verificación. Total: 4.00 h.

### HU-REP-03: Reportes – Ver ventas desglosadas por día
**Puntos:** 3 · **Prioridad:** Should have (3) · **Constructor Principal:** Des.3 Castillo · **Verificador QA:** Des.2 Nolasco

| ID | Tarea | Tipo | Estado | Responsable | Tiempo (h) |
|---|---|---|---|---|---|
| TAR-HU-REP-03-04 | Desarrollar interfaces | Diseño/Cod. | Pend. | Des.3 - Castillo | 1.00 |
| TAR-HU-REP-03-05 | Codificar | Codificación | Pend. | Des.3 - Castillo | 1.50 |
| TAR-HU-REP-03-06 | Probar de unidad | Test | Pend. | Des.2 - Nolasco | 1.50 |
| TAR-HU-REP-03-07 | Depuración | Test | Pend. | Des.3 - Castillo | 1.00 |
| TAR-HU-REP-03-08 | Desplegar en la web | Configuración | Pend. | Des.2 - Nolasco | 1.00 |

**Subtotal HU-REP-03:** 3.50 h Construcción, 2.50 h Verificación. Total: 6.00 h.

### HU-REP-04: Reportes – Ver ventas por método de pago
**Puntos:** 2 · **Prioridad:** Should have (3) · **Constructor Principal:** Des.2 Nolasco · **Verificador QA:** Des.3 Castillo

| ID | Tarea | Tipo | Estado | Responsable | Tiempo (h) |
|---|---|---|---|---|---|
| TAR-HU-REP-04-04 | Desarrollar interfaces | Diseño/Cod. | Pend. | Des.2 - Nolasco | 0.75 |
| TAR-HU-REP-04-05 | Codificar | Codificación | Pend. | Des.2 - Nolasco | 1.00 |
| TAR-HU-REP-04-06 | Probar de unidad | Test | Pend. | Des.3 - Castillo | 1.00 |
| TAR-HU-REP-04-07 | Depuración | Test | Pend. | Des.2 - Nolasco | 0.75 |
| TAR-HU-REP-04-08 | Desplegar en la web | Configuración | Pend. | Des.3 - Castillo | 0.50 |

**Subtotal HU-REP-04:** 2.50 h Construcción, 1.50 h Verificación. Total: 4.00 h.

### HU-REP-07: Reportes – Ver margen de ganancia por producto
**Puntos:** 5 · **Prioridad:** Should have (3) · **Constructor Principal:** Des.6 Angeles · **Verificador QA:** Des.4 Alcalde

| ID | Tarea | Tipo | Estado | Responsable | Tiempo (h) |
|---|---|---|---|---|---|
| TAR-HU-REP-07-04 | Desarrollar interfaces | Diseño/Cod. | Pend. | Des.6 - Angeles | 1.50 |
| TAR-HU-REP-07-05 | Codificar | Codificación | Pend. | Des.6 - Angeles | 2.75 |
| TAR-HU-REP-07-06 | Probar de unidad | Test | Pend. | Des.4 - Alcalde | 2.75 |
| TAR-HU-REP-07-07 | Depuración | Test | Pend. | Des.6 - Angeles | 1.50 |
| TAR-HU-REP-07-08 | Desplegar en la web | Configuración | Pend. | Des.4 - Alcalde | 1.50 |

**Subtotal HU-REP-07:** 5.75 h Construcción, 4.25 h Verificación. Total: 10.00 h.

### HU-REP-08: Reportes – Ver mermas agrupadas por motivo
**Puntos:** 3 · **Prioridad:** Should have (3) · **Constructor Principal:** Des.5 Colonia · **Verificador QA:** Des.2 Nolasco

| ID | Tarea | Tipo | Estado | Responsable | Tiempo (h) |
|---|---|---|---|---|---|
| TAR-HU-REP-08-04 | Desarrollar interfaces | Diseño/Cod. | Pend. | Des.5 - Colonia | 1.00 |
| TAR-HU-REP-08-05 | Codificar | Codificación | Pend. | Des.5 - Colonia | 1.50 |
| TAR-HU-REP-08-06 | Probar de unidad | Test | Pend. | Des.2 - Nolasco | 1.50 |
| TAR-HU-REP-08-07 | Depuración | Test | Pend. | Des.5 - Colonia | 1.00 |
| TAR-HU-REP-08-08 | Desplegar en la web | Configuración | Pend. | Des.2 - Nolasco | 1.00 |

**Subtotal HU-REP-08:** 3.50 h Construcción, 2.50 h Verificación. Total: 6.00 h.

### HU-VEN-04: Ventas (POS) – Buscar producto por código de barras
**Puntos:** 3 · **Prioridad:** Should have (3) · **Constructor Principal:** Des.3 Castillo · **Verificador QA:** Des.4 Alcalde

| ID | Tarea | Tipo | Estado | Responsable | Tiempo (h) |
|---|---|---|---|---|---|
| TAR-HU-VEN-04-04 | Desarrollar interfaces | Diseño/Cod. | Pend. | Des.3 - Castillo | 1.00 |
| TAR-HU-VEN-04-05 | Codificar | Codificación | Pend. | Des.3 - Castillo | 1.50 |
| TAR-HU-VEN-04-06 | Probar de unidad | Test | Pend. | Des.4 - Alcalde | 1.50 |
| TAR-HU-VEN-04-07 | Depuración | Test | Pend. | Des.3 - Castillo | 1.00 |
| TAR-HU-VEN-04-08 | Desplegar en la web | Configuración | Pend. | Des.4 - Alcalde | 1.00 |

**Subtotal HU-VEN-04:** 3.50 h Construcción, 2.50 h Verificación. Total: 6.00 h.

### HU-CLI-01: Clientes – Listar clientes registrados
**Puntos:** 2 · **Prioridad:** Should have (3) · **Constructor Principal:** Des.6 Angeles · **Verificador QA:** Des.2 Nolasco

| ID | Tarea | Tipo | Estado | Responsable | Tiempo (h) |
|---|---|---|---|---|---|
| TAR-HU-CLI-01-04 | Desarrollar interfaces | Diseño/Cod. | Pend. | Des.6 - Angeles | 0.75 |
| TAR-HU-CLI-01-05 | Codificar | Codificación | Pend. | Des.6 - Angeles | 1.00 |
| TAR-HU-CLI-01-06 | Probar de unidad | Test | Pend. | Des.2 - Nolasco | 1.00 |
| TAR-HU-CLI-01-07 | Depuración | Test | Pend. | Des.6 - Angeles | 0.75 |
| TAR-HU-CLI-01-08 | Desplegar en la web | Configuración | Pend. | Des.2 - Nolasco | 0.50 |

**Subtotal HU-CLI-01:** 2.50 h Construcción, 1.50 h Verificación. Total: 4.00 h.

### HU-VEN-03: Ventas (POS) – Generar comprobante en PDF o reenviar por correo electrónico
**Puntos:** 5 · **Prioridad:** Should have (3) · **Constructor Principal:** Des.1 Velasquez · **Verificador QA:** Des.3 Castillo

| ID | Tarea | Tipo | Estado | Responsable | Tiempo (h) |
|---|---|---|---|---|---|
| TAR-HU-VEN-03-04 | Desarrollar interfaces | Diseño/Cod. | Pend. | Des.1 - Velasquez | 1.50 |
| TAR-HU-VEN-03-05 | Codificar | Codificación | Pend. | Des.1 - Velasquez | 2.75 |
| TAR-HU-VEN-03-06 | Probar de unidad | Test | Pend. | Des.3 - Castillo | 2.75 |
| TAR-HU-VEN-03-07 | Depuración | Test | Pend. | Des.1 - Velasquez | 1.50 |
| TAR-HU-VEN-03-08 | Desplegar en la web | Configuración | Pend. | Des.3 - Castillo | 1.50 |

**Subtotal HU-VEN-03:** 5.75 h Construcción, 4.25 h Verificación. Total: 10.00 h.

### HU-CLI-03: Clientes – Editar correo electrónico de cliente
**Puntos:** 1 · **Prioridad:** Could have (2) · **Constructor Principal:** Des.3 Castillo · **Verificador QA:** Des.1 Velasquez

| ID | Tarea | Tipo | Estado | Responsable | Tiempo (h) |
|---|---|---|---|---|---|
| TAR-HU-CLI-03-04 | Desarrollar interfaces | Diseño/Cod. | Pend. | Des.3 - Castillo | 0.50 |
| TAR-HU-CLI-03-05 | Codificar | Codificación | Pend. | Des.3 - Castillo | 0.50 |
| TAR-HU-CLI-03-06 | Probar de unidad | Test | Pend. | Des.1 - Velasquez | 0.50 |
| TAR-HU-CLI-03-07 | Depuración | Test | Pend. | Des.3 - Castillo | 0.25 |
| TAR-HU-CLI-03-08 | Desplegar en la web | Configuración | Pend. | Des.1 - Velasquez | 0.25 |

**Subtotal HU-CLI-03:** 1.25 h Construcción, 0.75 h Verificación. Total: 2.00 h.

### HU-REP-09: Reportes – Exportar reportes en PDF
**Puntos:** 3 · **Prioridad:** Could have (2) · **Constructor Principal:** Des.1 Velasquez · **Verificador QA:** Des.3 Castillo

| ID | Tarea | Tipo | Estado | Responsable | Tiempo (h) |
|---|---|---|---|---|---|
| TAR-HU-REP-09-04 | Desarrollar interfaces | Diseño/Cod. | Pend. | Des.1 - Velasquez | 1.00 |
| TAR-HU-REP-09-05 | Codificar | Codificación | Pend. | Des.1 - Velasquez | 1.50 |
| TAR-HU-REP-09-06 | Probar de unidad | Test | Pend. | Des.3 - Castillo | 1.50 |
| TAR-HU-REP-09-07 | Depuración | Test | Pend. | Des.1 - Velasquez | 1.00 |
| TAR-HU-REP-09-08 | Desplegar en la web | Configuración | Pend. | Des.3 - Castillo | 1.00 |

**Subtotal HU-REP-09:** 3.50 h Construcción, 2.50 h Verificación. Total: 6.00 h.

### HU-VEN-08: Ventas (POS) – Exportar historial de ventas a CSV
**Puntos:** 3 · **Prioridad:** Could have (2) · **Constructor Principal:** Des.5 Colonia · **Verificador QA:** Des.4 Alcalde

| ID | Tarea | Tipo | Estado | Responsable | Tiempo (h) |
|---|---|---|---|---|---|
| TAR-HU-VEN-08-04 | Desarrollar interfaces | Diseño/Cod. | Pend. | Des.5 - Colonia | 1.00 |
| TAR-HU-VEN-08-05 | Codificar | Codificación | Pend. | Des.5 - Colonia | 1.50 |
| TAR-HU-VEN-08-06 | Probar de unidad | Test | Pend. | Des.4 - Alcalde | 1.50 |
| TAR-HU-VEN-08-07 | Depuración | Test | Pend. | Des.5 - Colonia | 1.00 |
| TAR-HU-VEN-08-08 | Desplegar en la web | Configuración | Pend. | Des.4 - Alcalde | 1.00 |

**Subtotal HU-VEN-08:** 3.50 h Construcción, 2.50 h Verificación. Total: 6.00 h.

## Resumen consolidado
### Horas por sprint

| Sprint | HU | Puntos | Construcción (h) | Verificación QA (h) | Total (h) | Capacidad (h) | Uso |
|---|---:|---:|---:|---:|---:|---:|---:|
| Sprint 1 | 20 | 89 | 104.50 | 73.50 | 178.00 | 240.00 | 74.2 % |
| Sprint 2 | 25 | 90 | 105.75 | 74.25 | 180.00 | 240.00 | 75.0 % |
| Sprint 3 | 27 | 72 | 85.75 | 58.25 | 144.00 | 240.00 | 60.0 % |
| **Total** | **72** | **251** | **296.00** | **206.00** | **502.00** | **720.00** | **69.7 %** |

### Carga por developer y sprint (capacidad máxima: 40 h)

| Developer | Sprint 1 (h) | Sprint 2 (h) | Sprint 3 (h) | Total (h) | Construcción (h) | Verificación QA (h) |
|---|---:|---:|---:|---:|---:|---:|
| Des.1 - Velasquez | 28.50 | 30.00 | 24.75 | 83.25 | 62.00 | 21.25 |
| Des.2 - Nolasco | 30.25 | 30.25 | 26.75 | 87.25 | 67.00 | 20.25 |
| Des.3 - Castillo | 30.75 | 30.50 | 19.00 | 80.25 | 53.00 | 27.25 |
| Des.4 - Alcalde | 26.25 | 30.75 | 30.50 | 87.50 | 0.00 | 87.50 |
| Des.5 - Colonia | 31.25 | 30.25 | 22.75 | 84.25 | 59.50 | 24.75 |
| Des.6 - Angeles | 31.00 | 28.25 | 20.25 | 79.50 | 54.50 | 25.00 |
| **Total** | **178.00** | **180.00** | **144.00** | **502.00** | **296.00** | **206.00** |

**Total de tareas:** 363 (72 HU).

---

---

# ====================================================================
# DOCUMENTO OFICIAL: 10_Registro_Deuda_Tecnica_y_Brechas.md
# ====================================================================

---
Código de documento: DOC-PLAN-10
Título: Registro de Supuestos de Arquitectura y Decisiones de Negocio
Versión: 4.8
Fecha: 2026-10-03
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
3. **Trazabilidad cruzada:** Todas las decisiones guardan correlación directa con las 16 Reglas de Negocio (`DOC-PLAN-08`), la Matriz de Roles y Permisos (`DOC-PLAN-01`), el Plan de Lanzamiento (`DOC-PLAN-04`), el Sprint Backlog (`DOC-PLAN-06`), el Desglose de Tareas (`DOC-PLAN-07`) y la Especificación de Interfaz (`DOC-ANEXO-B`).

---

## 10.2. Registro Consolidado de Decisiones de Negocio y Supuestos de Arquitectura (D1 a D12)

### D1: Esquema de sesiones concurrentes e invalidación anticipada
- **Declaración:** Se establece como principio de seguridad operativa la política de sesión única activa por cuenta de colaborador. Si un usuario inicia sesión desde una nueva terminal o estación de trabajo, cualquier sesión previamente abierta con las mismas credenciales queda invalidada de manera automática al efectuarse la siguiente interacción con el sistema. La interfaz de la sesión desplazada desplegará de forma visible un banner informativo de advertencia indicando textualmente: *"Se inició sesión con esta cuenta desde otro dispositivo."*, impidiendo cualquier operación posterior y canalizando al usuario hacia el formulario de ingreso.
- **Justificación de negocio:** Evitar la suplantación de identidad entre cajeros y operadores, salvaguardar la privacidad de las operaciones de cobro y asegurar la no repudiabilidad de las transacciones comerciales registradas.
- **Historias de usuario vinculadas:** `HU-AUTH-03`, `HU-AUTH-04`, `HU-USR-06`.
- **Reglas de negocio asociadas:** Gobernanza de seguridad de cuentas y trazabilidad de accesos.

### D2: Política de contraseñas y recuperación mediante clave numérica OTP de 4 dígitos
- **Declaración:** Para la recuperación no asistida de credenciales de acceso, el sistema generará un código de autorización numérico temporal de 4 dígitos (rango 1000 a 9999) con una vigencia estricta de 15 minutos, remitido a la casilla de correo electrónico del colaborador solicitante. Como mecanismo de protección contra intentos no autorizados de adivinación, se fija un bloqueo temporal automático de la cuenta por 15 minutos tras acumularse 5 intentos fallidos consecutivos en el ingreso del código de autorización.
- **Justificación de negocio:** Brindar un balance óptimo entre agilidad operativa en mostrador para la recuperación rápida de acceso por parte de personal de tienda y salvaguarda robusta contra accesos indebidos.
- **Historias de usuario vinculadas:** `HU-AUTH-05`, `HU-AUTH-06`.
- **Reglas de negocio asociadas:** RN-12 (Identidad unívoca de empleados).

### D3: Manejo de catálogos y consultas reactivas
- **Declaración:** Para el volumen operativo previsto del establecimiento comercial (estimado en hasta 5,000 productos activos, 1,000 proveedores y 10,000 registros de clientes habituales), las consultas de catálogos maestros y nóminas de usuarios se transmitirán de manera consolidada hacia la interfaz de usuario. Las búsquedas predictivas por descripción, filtros por categoría y ordenamiento se resolverán de forma reactiva instantánea en la estación de trabajo local sin latencias acumuladas de comunicación.
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

### D7: Lógica mono-producto y aprobación flexible de proveedores en reposición
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
- **Declaración:** El sistema restringe de manera categórica la comercialización en el punto de venta de cualquier lote cuya fecha de vencimiento sea anterior o igual a la fecha en curso (RN-03). La asignación de existencias en el mostrador opera bajo el criterio prioritario FEFO (primer lote en expirar es el primero en ser despachado). Cuando se registre una baja por concepto de vencimiento en el almacén, el sistema computa de modo automático el retiro del 100 % de las existencias remanentes de dicho lote (RN-05).
- **Justificación de negocio:** Salvaguardar la salud y bienestar de los consumidores, cumplir con la normativa sanitaria vigente en establecimientos comerciales y eliminar la presencia de productos no aptos en exhibición.
- **Historias de usuario vinculadas:** `HU-PROD-06`, `HU-INV-02`, `HU-VEN-01`.
- **Reglas de negocio asociadas:** RN-03 (Prohibición de comercialización de vencidos), RN-04 (Registro obligatorio de mermas) y RN-05 (Restricción de bajas por vencimiento).

### D10: Manejo inmutable de registros históricos de movimientos de almacén
- **Declaración:** Las operaciones que alteran las existencias físicas del establecimiento (ingresos por abastecimiento, salidas por mermas y variaciones por toma física de inventario) constituyen un registro histórico continuo e inmutable. El sistema no proporciona opciones de eliminación ni alteración retroactiva sobre entradas o salidas ya asentadas formalmente (RN-01, RN-14). Cualquier ajuste correctivo posterior derivado de conteos periódicos debe documentarse mediante un nuevo registro formal de ajuste físico que exprese con claridad el faltante o sobrante detectado y su justificación.
- **Justificación de negocio:** Proteger la trazabilidad contable, asegurar la veracidad del inventario valorizado por el método de costo promedio ponderado y facilitar inspecciones de control interno sin riesgos de adulteración.
- **Historias de usuario vinculadas:** `HU-INV-01`, `HU-INV-03`, `HU-INV-04`, `HU-INV-05`, `HU-INV-06`.
- **Reglas de negocio asociadas:** RN-01 (Control de abastecimiento directo) y RN-14 (Actualización de valorización de inventario).

### D11: Compilación de comprobantes y reportes ejecutivos en PDF
- **Declaración:** La entrega de comprobantes fiscales al cliente y la presentación de cuadros de control para la dirección del negocio se materializan mediante la generación de documentos estructurados en formato PDF. Estos documentos integran membrete institucional, logotipo, parámetros fiscales, detalle de renglones y cuadros de resumen con distribución de páginas automática. La exportación complementaria de historiales de venta a formato estructurado de intercambio plano (CSV) se programa formalmente como una prestación opcional (Could have) para el Release 3.
- **Justificación de negocio:** Proveer comprobantes con diseño profesional para impresión térmica o envío digital al cliente, dotando a la gerencia de informes ejecutivos consolidados e inalterables para la toma de decisiones.
- **Historias de usuario vinculadas:** `HU-VEN-03`, `HU-VEN-08`, `HU-REP-09`.
- **Reglas de negocio asociadas:** RN-13 (Numeración oficial ininterrumpida) y directrices de imagen corporativa.

### D12: Modelo de gobernanza Scrum y segregación Construye no es igual a Verifica
- **Declaración:** El desarrollo y certificación de la solución tecnológica se estructura bajo un estricto principio de verificación cruzada independiente (Construye no es igual a Verifica), asignando el 41.0 % del tiempo total de ingeniería (206.0 horas de un universo de 502.0 horas) a actividades de aseguramiento de calidad, pruebas unitarias y validación formal de criterios de aceptación. Ningún integrante del equipo tiene permitido certificar historias que haya construido directamente. La estructura financiera descansa en una asignación de S/ 625.00 semanales por desarrollador (S/ 25.00 por hora neta), consolidando un presupuesto total cerrado de S/ 22,500.00 distribuido equitativamente en 3 iteraciones de 2 semanas (S/ 7,500.00 por ciclo).
- **Justificación de negocio:** Garantizar la excelencia operativa del software, erradicar sesgos de confirmación en la entrega de valor y cumplir con los compromisos contractuales de costo y cronograma pactados con el Product Owner.
- **Historias de usuario vinculadas:** Las 72 historias de usuario del Product Backlog, `DOC-PLAN-02`, `DOC-PLAN-05`, `DOC-PLAN-06`, `DOC-PLAN-07`.
- **Reglas de negocio asociadas:** Marco de trabajo Scrum del proyecto y acuerdos de Definition of Done (DoD).

---

## 10.3. Matriz de Cobertura y Trazabilidad de Decisiones vs Reglas de Negocio

La siguiente matriz sintetiza la alineación entre las doce decisiones estratégicas, las dieciséis reglas de negocio oficiales y los lanzamientos programados:

| Decisión | Título Resumido | Reglas de Negocio Vinculadas | Épica Principal | Lanzamiento | Impacto Operativo Principal |
|:---:|---|:---:|:---:|:---:|---|
| **D1** | Sesiones concurrentes e invalidación | Gobernanza de Seguridad | EPIC-SEG | REL-2 | Sesión única por usuario; expulsión con banner informativo de aviso. |
| **D2** | Clave OTP de 4 dígitos y bloqueo | RN-12 | EPIC-SEG | REL-2 | Recuperación de credenciales con código de autorización de 4 dígitos y bloqueo tras 5 fallos. |
| **D3** | Catálogos y consultas reactivas | Glosario General | EPIC-CAT | REL-1 / REL-2 | Agilidad en mostrador mediante filtrado instantáneo en la estación local. |
| **D4** | Comprobantes y contingencia SUNAT | RN-13 | EPIC-VEN / EPIC-REP | REL-1 | Emisión autónoma B001/F001 con IGV 18 % y contingencia ante corte externo. |
| **D5** | Fondo de caja y movimientos manuales | RN-10, RN-11, RN-15 | EPIC-VEN | REL-1 | Fondo mínimo obligatorio de S/ 500.00; tope manual S/ 5,000.00 en efectivo. |
| **D6** | Anulaciones y destino de mercadería | RN-08, RN-09 | EPIC-VEN / EPIC-INV | REL-2 | Anulación solo en turno abierto; derivación a stock o merma justificada. |
| **D7** | Lógica mono-producto y reasignación | RN-01, RN-16 | EPIC-INV | REL-2 | Solicitud atómica mono-producto; flexibilidad gerencial de proveedor. |
| **D8** | Validación de pagos Yape/Plin (IziPay) | RN-02 | EPIC-VEN | REL-1 / REL-2 | Verificación de código de autorización de 6 dígitos con unicidad en historial. |
| **D9** | Exclusión de caducados y bajas FEFO | RN-03, RN-04, RN-05 | EPIC-CAT / EPIC-INV | REL-1 / REL-2 | Bloqueo absoluto de vencidos en POS; baja al 100 % del lote vencido. |
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
| **4.8** | 2026-10-03 | Colonia Infantas, Walter / Angeles Pérez, Jhonny | Transformación metodológica integral a Registro de Supuestos de Arquitectura y Decisiones de Negocio (D1 a D12). Desacoplamiento de detalles técnicos físicos hacia el expediente interno confidencial. Formulación estricta a priori desde la perspectiva del Product Owner y stakeholders. |

---

# ====================================================================
# DOCUMENTO OFICIAL: 11_Matriz_Trazabilidad_UI.md
# ====================================================================

---
Código de documento: DOC-PLAN-11
Título: Matriz de Trazabilidad Historia de Usuario - Pantalla (UI)
Versión: 4.8
Fecha: 2026-10-03
Elaborado por: Colonia Infantas, Walter
Revisado por: Angeles Pérez, Jhonny
Estado: Aprobado
Propósito: Relacionar cada historia de usuario con la pantalla y los criterios CA-UI que la especifican, y orientar la consulta de cualquier elemento visual
Documentos relacionados: DOC-ANEXO-B, DOC-PLAN-03-00, DOC-PLAN-10
---

# 11. Matriz de Trazabilidad Historia de Usuario - Pantalla (UI)

## 1. Pantallas especificadas en el Anexo B

| Pantalla | Nombre de Pantalla | Módulo / Acceso | Vista de Interfaz | Épica | Historias del Plan | Textos Guía | Banners | Estados Vacíos | Badges | Modales | Validaciones |
|---|---|---|---|---|---|:---:|:---:|:---:|:---:|:---:|:---:|
| **UI-001** | Inicio de Sesión y Autenticación | Acceso Principal | Vista de Autenticación | EPIC-SEG | HU-AUTH-01, HU-AUTH-02, HU-AUTH-04 | 1 | 4 | 1 | 1 | 0 | 6 |
| **UI-002** | Recuperación de Contraseña | Recuperación de Clave | Vista de Recuperación OTP | EPIC-SEG | HU-AUTH-05 | 0 | 3 | 1 | 1 | 0 | 6 |
| **UI-003** | Navegación Global y Diálogos | Marco General | Marco de Navegación Lateral | EPIC-SEG | HU-AUTH-03 | 0 | 1 | 0 | 2 | 5 | 1 |
| **UI-004** | Gestión de Usuarios del Sistema | Administración de Personal | Vista de Personal y Cuentas | EPIC-SEG | HU-USR-01, HU-USR-02, HU-USR-03, HU-USR-04, HU-USR-05, HU-USR-06 | 0 | 3 | 2 | 3 | 6 | 2 |
| **UI-005** | Registro Histórico de Accesos | Monitoreo de Seguridad | Vista de Historial de Sesiones | EPIC-SEG | HU-LOG-01 | 0 | 2 | 3 | 2 | 0 | 4 |
| **UI-006** | Catálogo de Categorías | Catálogo de Familias | Vista de Familias de Producto | EPIC-CAT | HU-CAT-01, HU-CAT-02, HU-CAT-03, HU-CAT-04 | 1 | 3 | 3 | 1 | 5 | 4 |
| **UI-007** | Catálogo de Productos y Alertas | Catálogo Maestro | Vista de Artículos y Alertas | EPIC-CAT | HU-PROD-01, HU-PROD-02, HU-PROD-03, HU-PROD-04, HU-PROD-05, HU-PROD-06 | 3 | 2 | 1 | 4 | 7 | 2 |
| **UI-008** | Directorio de Proveedores | Proveedores Comerciales | Vista de Directorio Proveedores | EPIC-CAT | HU-PROV-01, HU-PROV-02, HU-PROV-03, HU-PROV-04 | 2 | 1 | 3 | 2 | 4 | 6 |
| **UI-009** | Directorio de Clientes | Clientes Registrados | Vista de Fichas de Clientes | EPIC-CAT | HU-CLI-01, HU-CLI-03 | 1 | 2 | 2 | 6 | 0 | 1 |
| **UI-010** | Entradas de Mercadería y Lotes | Inventario - Entradas | Vista de Recepciones y Lotes | EPIC-INV | HU-INV-01, HU-INV-04 | 0 | 2 | 2 | 3 | 0 | 2 |
| **UI-011** | Bajas de Inventario y Mermas | Inventario - Bajas | Vista de Mermas y Desmedros | EPIC-INV | HU-INV-02, HU-INV-05 | 1 | 2 | 2 | 3 | 0 | 3 |
| **UI-012** | Ajustes de Conteo Físico | Inventario - Ajustes | Vista de Conteo Físico y Ajustes | EPIC-INV | HU-INV-03, HU-INV-06 | 1 | 2 | 4 | 5 | 0 | 1 |
| **UI-013** | Solicitudes de Reposición | Órdenes de Reposición | Vista de Pedidos de Almacén | EPIC-INV | HU-SOL-01, HU-SOL-02, HU-SOL-03, HU-SOL-04, HU-SOL-05 | 1 | 1 | 1 | 4 | 7 | 1 |
| **UI-014** | Terminal de Punto de Venta (POS) | Punto de Venta | Vista de Mostrador y Cobro | EPIC-VEN | HU-VEN-01, HU-VEN-02, HU-VEN-04, HU-VEN-07, HU-CLI-02 | 3 | 5 | 1 | 4 | 2 | 5 |
| **UI-015** | Historial de Ventas y Anulaciones | Historial Comercial | Vista de Ventas y Anulaciones | EPIC-VEN | HU-VEN-03, HU-VEN-05, HU-VEN-06 | 2 | 1 | 0 | 3 | 7 | 4 |
| **UI-016** | Turno de Caja y Arqueo Inicial | Operaciones de Caja | Vista de Turno y Movimientos | EPIC-VEN | HU-CAJA-01, HU-CAJA-02, HU-CAJA-03, HU-CAJA-04, HU-CAJA-06 | 2 | 1 | 2 | 3 | 7 | 3 |
| **UI-017** | Historial de Cajas y Cierres | Historial de Arqueos | Vista de Arqueos y Supervisión | EPIC-VEN | HU-CAJA-05, HU-CAJA-06, HU-CAJA-07 | 2 | 2 | 2 | 3 | 2 | 1 |
| **UI-018** | Dashboard y KPIs Estratégicos | Panel Gerencial | Vista de Cuadro de Mando | EPIC-REP | HU-DASH-01, HU-DASH-02, HU-DASH-03, HU-DASH-04, HU-DASH-05 | 0 | 2 | 7 | 4 | 11 | 1 |
| **UI-019** | Reportes Analíticos y PDF | Módulo de Reportes | Vista Analítica y Exportación | EPIC-REP | HU-REP-01, HU-REP-02, HU-REP-03, HU-REP-04, HU-REP-05, HU-REP-06, HU-REP-07, HU-REP-08, HU-REP-09 | 0 | 0 | 7 | 6 | 0 | 1 |
| **UI-020** | Configuración Fiscal y SUNAT | Configuración General | Vista de Parámetros Fiscales | EPIC-REP | HU-CONF-01, HU-CONF-02 | 2 | 3 | 0 | 0 | 0 | 7 |

Los conteos representan referencias descriptivas en el Anexo B que detallan cada tipo de elemento; operan como indicador de cobertura de especificación.

---

## 2. Apartados de criterios por pantalla

- **UI-001 Inicio de Sesión y Autenticación:** CA-1: Formulario y Elementos de Entrada; CA-2: Mensajes de Asistencia, Banners y Retroalimentación; CA-3: Indicadores de Estado, Badges y Grillas; CA-4: Acciones, Botones y Estados Vacíos (Empty States)
- **UI-002 Recuperación de Contraseña:** CA-1: Formulario y Elementos de Entrada; CA-2: Mensajes de Asistencia, Banners y Retroalimentación; CA-3: Indicadores de Estado, Badges y Grillas; CA-4: Acciones, Botones y Estados Vacíos (Empty States)
- **UI-003 Navegación Global y Diálogos:** CA-1: Formulario y Elementos de Entrada; CA-2: Mensajes de Asistencia, Banners y Retroalimentación; CA-3: Indicadores de Estado, Badges y Grillas; CA-4: Acciones, Botones y Menú Lateral (Sidebar)
- **UI-004 Gestión de Usuarios del Sistema:** CA-1: Formulario y Elementos de Entrada; CA-2: Mensajes de Asistencia, Banners y Retroalimentación; CA-3: Indicadores de Estado, Badges y Grillas; CA-4: Acciones, Botones y Estados Vacíos (Empty States)
- **UI-005 Registro Histórico de Accesos:** CA-1: Formulario y Elementos de Entrada; CA-2: Mensajes de Asistencia, Banners y Retroalimentación; CA-3: Indicadores de Estado, Badges y Grillas; CA-4: Acciones, Botones, Paginación y Estados Vacíos (Empty States)
- **UI-006 Catálogo de Categorías:** CA-1: Formulario y Elementos de Entrada; CA-2: Mensajes de Asistencia, Banners y Retroalimentación; CA-3: Indicadores de Estado, Badges y Grillas; CA-4: Acciones, Botones y Estados Vacíos (Empty States)
- **UI-007 Catálogo de Productos y Alertas:** CA-1: Formulario y Elementos de Entrada; CA-2: Mensajes de Asistencia, Banners y Retroalimentación; CA-3: Indicadores de Estado, Badges y Grillas; CA-4: Acciones, Botones, Modal de Lotes y Paginación
- **UI-008 Directorio de Proveedores:** CA-1: Formulario y Elementos de Entrada; CA-2: Mensajes de Asistencia, Banners y Retroalimentación; CA-3: Indicadores de Estado, Badges y Grillas; CA-4: Acciones, Botones y Estados Vacíos (Empty States)
- **UI-009 Directorio de Clientes:** CA-1: Formulario y Elementos de Entrada; CA-2: Mensajes de Asistencia, Banners y Retroalimentación; CA-3: Indicadores de Estado, Badges y Grillas; CA-4: Acciones, Botones y Estados Vacíos (Empty States)
- **UI-010 Entradas de Mercadería y Lotes:** CA-1: Formulario y Elementos de Entrada; CA-2: Mensajes de Asistencia, Banners y Retroalimentación; CA-3: Indicadores de Estado, Badges y Grillas; CA-4: Acciones, Botones y Estados Vacíos (Empty States)
- **UI-011 Bajas de Inventario y Mermas:** CA-1: Formulario y Elementos de Entrada; CA-2: Mensajes de Asistencia, Banners y Retroalimentación; CA-3: Indicadores de Estado, Badges y Grillas; CA-4: Acciones, Botones y Estados Vacíos (Empty States)
- **UI-012 Ajustes de Conteo Físico:** CA-1: Formulario y Elementos de Entrada; CA-2: Mensajes de Asistencia, Banners y Retroalimentación; CA-3: Indicadores de Estado, Badges y Grillas; CA-4: Acciones, Botones y Estados Vacíos (Empty States)
- **UI-013 Solicitudes de Reposición:** CA-1: Formulario y Elementos de Entrada; CA-2: Mensajes de Asistencia, Banners y Retroalimentación; CA-3: Indicadores de Estado, Badges y Grillas; CA-4: Acciones y Botones por Fila según Estado y Rol
- **UI-014 Terminal de Punto de Venta (POS):** CA-1: Formulario, Escáner y Elementos de Venta; CA-2: Panel Lateral de Cobro y Facturación; CA-3: Modal de Comprobante de Pago (`ModalComprobante`); CA-4: Escenarios de Aceptación (Gherkin BDD)
- **UI-015 Historial de Ventas y Anulaciones:** CA-1: Filtros de Búsqueda y Navegación; CA-2: Grilla del Historial y Estados; CA-3: Modales de Detalle, Reenvío de Correo y Anulación; CA-4: Escenarios de Aceptación (Gherkin BDD)
- **UI-016 Turno de Caja y Arqueo Inicial:** CA-1: Vista sin Turno Abierto y Modal de Apertura; CA-2: Panel del Turno en Curso y Movimientos; CA-3: Modales de Movimiento Manual y Cierre de Turno; CA-4: Escenarios de Aceptación (Gherkin BDD)
- **UI-017 Historial de Cajas y Cierres:** CA-1: Filtros de Historial de Cajas; CA-2: Grilla de Turnos y Conciliación de Arqueos; CA-3: Modal de Cierre Forzado por Administrador (`ModalCerrarForzado`); CA-4: Escenarios de Aceptación (Gherkin BDD)
- **UI-018 Dashboard y KPIs Estratégicos:** CA-1: Encabezado, Detección de Turnos Olvidados y Filtro Temporal; CA-2: Tarjetas KPI Interactivas y Gráfico de Tendencia; CA-3: Secciones de Top Productos y Stock Crítico; CA-4: Modales de Detalle Bajo Demanda (`ModalDetalle`); CA-5: Escenarios de Aceptación (Gherkin BDD)
- **UI-019 Reportes Analíticos y PDF:** CA-1: Encabezado, Exportación PDF y Filtros de Fecha; CA-2: Tarjetas de Resumen y Top 10 Productos Más Vendidos; CA-3: Margen por Producto, Ventas por Día y Método; CA-4: Stock Crítico Configurable y Mermas por Motivo; CA-5: Generación y Formato del PDF Consolidado; CA-6: Escenarios de Aceptación (Gherkin BDD)
- **UI-020 Configuración Fiscal y SUNAT:** CA-1: Formulario de Datos del Negocio; CA-2: Confirmación de Cambio Crítico de RUC y Guardado; CA-3: Escenarios de Aceptación (Gherkin BDD)

---

## 3. Trazabilidad por historia de usuario

| Historia | Pantalla(s) | Criterio de Aceptación | Estado de Cobertura |
|---|---|---|---|
| HU-AUTH-01 | UI-001 | CA-UI (criterio final de interfaz) | Con especificación completa |
| HU-AUTH-02 | UI-001 | CA-UI (criterio final de interfaz) | Con especificación completa |
| HU-AUTH-03 | UI-003 | CA-UI (criterio final de interfaz) | Con especificación completa |
| HU-USR-02 | UI-004 | CA-UI (criterio final de interfaz) | Con especificación completa |
| HU-CAT-02 | UI-006 | CA-UI (criterio final de interfaz) | Con especificación completa |
| HU-CAT-01 | UI-006 | CA-UI (criterio final de interfaz) | Con especificación completa |
| HU-PROD-02 | UI-007 | CA-UI (criterio final de interfaz) | Con especificación completa |
| HU-PROD-01 | UI-007 | CA-UI (criterio final de interfaz) | Con especificación completa |
| HU-PROV-02 | UI-008 | CA-UI (criterio final de interfaz) | Con especificación completa |
| HU-INV-01 | UI-010 | CA-UI (criterio final de interfaz) | Con especificación completa |
| HU-INV-02 | UI-011 | CA-UI (criterio final de interfaz) | Con especificación completa |
| HU-INV-03 | UI-012 | CA-UI (criterio final de interfaz) | Con especificación completa |
| HU-CAJA-01 | UI-016 | CA-UI (criterio final de interfaz) | Con especificación completa |
| HU-CAJA-02 | UI-016 | CA-UI (criterio final de interfaz) | Con especificación completa |
| HU-CAJA-05 | UI-017 | CA-UI (criterio final de interfaz) | Con especificación completa |
| HU-VEN-01 | UI-014 | CA-UI (criterio final de interfaz) | Con especificación completa |
| HU-VEN-02 | UI-014 | CA-UI (criterio final de interfaz) | Con especificación completa |
| HU-VEN-05 | UI-015 | CA-UI (criterio final de interfaz) | Con especificación completa |
| HU-CONF-02 | UI-020 | CA-UI (criterio final de interfaz) | Con especificación completa |
| HU-CLI-02 | UI-014 | CA-UI (criterio final de interfaz) | Con especificación completa |
| HU-AUTH-04 | UI-001 | CA-UI (criterio final de interfaz) | Con especificación completa |
| HU-USR-01 | UI-004 | CA-UI (criterio final de interfaz) | Con especificación completa |
| HU-USR-04 | UI-004 | CA-UI (criterio final de interfaz) | Con especificación completa |
| HU-DASH-01 | UI-018 | CA-UI (criterio final de interfaz) | Con especificación completa |
| HU-DASH-03 | UI-018 | CA-UI (criterio final de interfaz) | Con especificación completa |
| HU-PROD-06 | UI-007 | CA-UI (criterio final de interfaz) | Con especificación completa |
| HU-PROV-01 | UI-008 | CA-UI (criterio final de interfaz) | Con especificación completa |
| HU-REP-01 | UI-019 | CA-UI (criterio final de interfaz) | Con especificación completa |
| HU-REP-02 | UI-019 | CA-UI (criterio final de interfaz) | Con especificación completa |
| HU-REP-05 | UI-019 | CA-UI (criterio final de interfaz) | Con especificación completa |
| HU-SOL-01 | UI-013 | CA-UI (criterio final de interfaz) | Con especificación completa |
| HU-SOL-02 | UI-013 | CA-UI (criterio final de interfaz) | Con especificación completa |
| HU-SOL-03 | UI-013 | CA-UI (criterio final de interfaz) | Con especificación completa |
| HU-SOL-05 | UI-013 | CA-UI (criterio final de interfaz) | Con especificación completa |
| HU-VEN-06 | UI-015 | CA-UI (criterio final de interfaz) | Con especificación completa |
| HU-CONF-01 | UI-020 | CA-UI (criterio final de interfaz) | Con especificación completa |
| HU-AUTH-05 | UI-002 | CA-UI (criterio final de interfaz) | Con especificación completa |
| HU-USR-06 | UI-004 | CA-UI (criterio final de interfaz) | Con especificación completa |
| HU-CAJA-03 | UI-016 | CA-UI (criterio final de interfaz) | Con especificación completa |
| HU-CAJA-04 | UI-016 | CA-UI (criterio final de interfaz) | Con especificación completa |
| HU-CAJA-06 | UI-016, UI-017 | CA-UI (criterio final de interfaz) | Con especificación completa |
| HU-CAJA-07 | UI-017 | CA-UI (criterio final de interfaz) | Con especificación completa |
| HU-VEN-07 | UI-014 | CA-UI (criterio final de interfaz) | Con especificación completa |
| HU-SOL-04 | UI-013 | CA-UI (criterio final de interfaz) | Con especificación completa |
| HU-PROV-04 | UI-008 | CA-UI (criterio final de interfaz) | Con especificación completa |
| HU-AUTH-06 | — | — | La actualización de clave propia opera mediante el flujo de recuperación no asistida (UI-002) sin pantalla de perfil |
| HU-USR-03 | UI-004 | CA-UI (criterio final de interfaz) | Con especificación completa |
| HU-USR-05 | UI-004 | CA-UI (criterio final de interfaz) | Con especificación completa |
| HU-LOG-01 | UI-005 | CA-UI (criterio final de interfaz) | Con especificación completa |
| HU-CAT-03 | UI-006 | CA-UI (criterio final de interfaz) | Con especificación completa |
| HU-CLI-01 | UI-009 | CA-UI (criterio final de interfaz) | Con especificación completa |
| HU-PROD-04 | UI-007 | CA-UI (criterio final de interfaz) | Con especificación completa |
| HU-PROD-05 | UI-007 | CA-UI (criterio final de interfaz) | Con especificación completa |
| HU-PROV-03 | UI-008 | CA-UI (criterio final de interfaz) | Con especificación completa |
| HU-INV-04 | UI-010 | CA-UI (criterio final de interfaz) | Con especificación completa |
| HU-INV-05 | UI-011 | CA-UI (criterio final de interfaz) | Con especificación completa |
| HU-INV-06 | UI-012 | CA-UI (criterio final de interfaz) | Con especificación completa |
| HU-DASH-02 | UI-018 | CA-UI (criterio final de interfaz) | Con especificación completa |
| HU-DASH-04 | UI-018 | CA-UI (criterio final de interfaz) | Con especificación completa |
| HU-DASH-05 | UI-018 | CA-UI (criterio final de interfaz) | Con especificación completa |
| HU-REP-03 | UI-019 | CA-UI (criterio final de interfaz) | Con especificación completa |
| HU-REP-04 | UI-019 | CA-UI (criterio final de interfaz) | Con especificación completa |
| HU-REP-06 | UI-019 | CA-UI (criterio final de interfaz) | Con especificación completa |
| HU-REP-07 | UI-019 | CA-UI (criterio final de interfaz) | Con especificación completa |
| HU-REP-08 | UI-019 | CA-UI (criterio final de interfaz) | Con especificación completa |
| HU-VEN-03 | UI-015 | CA-UI (criterio final de interfaz) | Con especificación completa |
| HU-VEN-04 | UI-014 | CA-UI (criterio final de interfaz) | Con especificación completa |
| HU-CAT-04 | UI-006 | CA-UI (criterio final de interfaz) | Con especificación completa |
| HU-CLI-03 | UI-009 | CA-UI (criterio final de interfaz) | Con especificación completa |
| HU-PROD-03 | UI-007 | CA-UI (criterio final de interfaz) | Con especificación completa |
| HU-REP-09 | UI-019 | CA-UI (criterio final de interfaz) | Con especificación completa |
| HU-VEN-08 | — | — | La exportación CSV opera como funcionalidad secundaria (Could have en Release 3) integrada en el historial |
| HU-VEN-09 | — | — | Excluida del alcance funcional (Won't have); sin interfaz |

---

## 4. Dónde está documentado cada tipo de elemento visual

| Tipo de Elemento Visual | Dónde se Documenta | Apartado Típico |
|---|---|---|
| Campos, etiquetas, obligatoriedad (asterisco), textos guía, valores predeterminados y campos de solo lectura | Anexo B, pantalla correspondiente | CA-1 |
| Textos de asistencia, banners informativos, mensajes de advertencia y validaciones en tiempo real | Anexo B, pantalla correspondiente | CA-2 (en pantallas UI-014 a UI-017, apartados CA-1 a CA-3 según estructura) |
| Colores y distintivos de estado (agotado, stock bajo, vencido, éxito), vistas tabulares y grillas | Anexo B, pantalla correspondiente | CA-3 |
| Botones, cuadros de diálogo, estados vacíos y guías al siguiente paso | Anexo B, pantalla correspondiente | CA-4 |
| Escenarios de aceptación Dado/Cuando/Entonces de la interfaz | Anexo B, pantallas UI-014 a UI-017 | CA-4 |
| Reglas de comportamiento de interfaz transversales | Anexo B, sección 7 | RN-UI-01 a RN-UI-16 |
| Supuestos de diseño y decisiones de negocio | DOC-PLAN-10 | Decisiones D1 a D12 |

---

## 5. Guía de Consulta de Especificaciones Visuales

1. Ubicar la historia de usuario en la matriz de trazabilidad (sección 3 de este documento).
2. Consultar la historia en su respectiva épica: el criterio final (CA-UI) remite directamente a la pantalla del Anexo B.
3. En el Anexo B, ubicar el elemento específico según los apartados normalizados (sección 4).
4. Toda precisión adicional se canaliza mediante el refinamiento del Product Backlog en coordinación continua con el Product Owner.

---

## 6. Cobertura y Delimitación de Interfaz

Las 20 pantallas especificadas en el Anexo B cubren el 100 % de las interacciones visuales requeridas por las 72 historias de usuario del Product Backlog. Se ratifican los siguientes acuerdos operativos:

1. **Gestión de credenciales propia:** La actualización de clave por el colaborador activo (HU-AUTH-06) opera mediante el flujo de recuperación no asistida con clave temporal OTP (UI-002), optimizando la navegación sin requerir una vista de perfil dedicada.
2. **Aviso de sesión desplazada:** La notificación informativa ante un inicio de sesión concurrente en otro equipo (HU-AUTH-04) se presenta mediante el banner superior destacado en UI-001 conforme a la Decisión D1.
3. **Validación de pagos móviles:** El registro del código de autorización de 6 dígitos emitido por el terminal de cobro para billeteras digitales Yape/Plin (IziPay) se encuentra plenamente formalizado en el Punto de Venta (UI-014) y en el Historial de Ventas (UI-015) conforme a la Decisión D8.
4. **Supervisión de compras pendientes:** La visualización de solicitudes de reposición en estado pendiente se integra de forma interactiva en el panel gerencial (UI-018) permitiendo la revisión inmediata del stock crítico.
5. **Formatos de exportación:** La generación de reportes y comprobantes oficiales se resuelve en formato PDF (Decisión D11); la exportación a formato plano (CSV, HU-VEN-08) se reserva como incremento complementario (Could have) en el Release 3.
6. **Exclusiones de hardware:** La venta a granel con balanzas electrónicas (HU-VEN-09) se mantiene excluida del alcance (Won't have) conforme a los supuestos del negocio.

---

## 7. Historial de Control de Cambios

| Versión | Fecha | Autor / Responsable | Descripción de la Modificación |
|:---:|:---:|---|---|
| **4.6** | 2026-10-03 | Colonia Infantas, Walter | Emisión inicial de la Matriz de Trazabilidad Historia - Pantalla (DOC-PLAN-11). |
| **4.7** | 2026-10-03 | Colonia Infantas, Walter | Sincronización con resoluciones de interfaz y verificación de cobertura de vistas. |
| **4.8** | 2026-10-03 | Colonia Infantas, Walter / Angeles Pérez, Jhonny | Depuración metodológica integral a priori. Sustitución de expresiones técnicas por vistas y módulos funcionales. Alineación con las Decisiones D1 a D12 de DOC-PLAN-10 y verificación de especificación en lenguaje de negocio. |

---

# ====================================================================
# DOCUMENTO OFICIAL: Anexo_A.md
# ====================================================================

---
Código de Documento: DOC-ANEXO-A
Título: Anexo A - Trazabilidad y Presupuesto
Versión: 4.8
Fecha: 2026-10-03
Elaborado por: Colonia Infantas, Walter
Revisado por: Angeles Pérez, Jhonny
Estado: Aprobado
Propósito: Trazabilidad objetivo-épica-historia y distribución del presupuesto
Documentos relacionados: DOC-PLAN-00, DOC-PLAN-01, DOC-PLAN-02, DOC-PLAN-03-00, DOC-PLAN-04, DOC-PLAN-05, DOC-PLAN-06, DOC-PLAN-07, DOC-PLAN-08, DOC-ANEXO-B
---

# Anexo A. Consolidado Ejecutivo del Proyecto

## 1. Resumen y Control Documental
El proyecto "Sistema de Gestión Integral para Minimarket" se gestiona bajo el marco de trabajo Scrum, con un backlog total de 72 Historias de Usuario planificadas (251 puntos de historia). El presupuesto oficial asciende a **S/ 22,500.00** bajo el modelo de capacidad y dedicación del docente para 6 desarrolladores a 25 h/semana (6 semanas de ejecución en 3 sprints de 2 semanas), con roles de Product Owner y Scrum Master bajo gobernanza externa.

## 2. Trazabilidad Técnica y Presupuestaria por Épica

| Objetivo | Épica | HU | Pts | Pts REL-1 / REL-2 / REL-3 | Sprints | Horas (2 × pts) | Costo asignado |
|---|---|:---:|:---:|:---:|:---:|:---:|:---:|
| **OBJ-01** | EPIC-SEG (Seguridad y Accesos) | 13 | 47 | 15 / 21 / 11 | 1 al 3 | 94 h | S/ 4,213.15 |
| **OBJ-02** | EPIC-CAT (Catálogos y Clientes) | 17 | 42 | 17 / 7 / 18 | 1 al 3 | 84 h | S/ 3,764.94 |
| **OBJ-03** | EPIC-INV (Inventario y Reposición) | 11 | 39 | 15 / 18 / 6 | 1 al 3 | 78 h | S/ 3,496.02 |
| **OBJ-04** | EPIC-VEN (Ventas y Caja) | 15 | 72 | 39 / 22 / 11 | 1 al 3 | 144 h | S/ 6,454.18 |
| **OBJ-05** | EPIC-REP (Reportes, Dashboards y Configuración) | 16 | 51 | 3 / 22 / 26 | 1 al 3 | 102 h | S/ 4,571.71 |
| **TOTAL** | **Consolidado General** | **72** | **251** | **89 / 90 / 72** | **1 al 3** | **502 h** | **S/ 22,500.00** |

*Nota metodológica:* La redacción unificada de los objetivos estratégicos en este consolidado es:
- **OBJ-01:** Garantizar la trazabilidad y seguridad en las operaciones del personal.
- **OBJ-02:** Mantener un catálogo centralizado de productos, clientes y proveedores.
- **OBJ-03:** Minimizar pérdidas por vencimiento y roturas de stock mediante el control de caducidad, los movimientos de inventario y la reposición oportuna.
- **OBJ-04:** Formalizar las ventas mediante emisión de boletas y facturas válidas.
- **OBJ-05:** Proveer información en tiempo real para la toma de decisiones.

## 3. Plan de Releases y Presupuesto por Iteración
El presupuesto del proyecto se distribuye uniformemente en 3 releases correspondientes a los 3 sprints:
- **REL-1 (MVP Operativo · SPR-1):** 20 HUs (Must Have), **89 pts**. Entrega: Martes 13-oct (Semana 7). Presupuesto: **S/ 7,500.00** (2 semanas × S/ 625/semana × 6 desarrolladores, todo costo laboral).
- **REL-2 (Operación y Control · SPR-2):** 25 HUs (16 Must + 9 Should), **90 pts**. Entrega: Martes 27-oct (Semana 9). Presupuesto: **S/ 7,500.00** (2 semanas × S/ 625/semana × 6 desarrolladores).
- **REL-3 (Mejoras, Supervisión y Exportación · SPR-3):** 27 HUs (22 Should + 5 Could), **72 pts**. Entrega: Martes 10-nov (Semana 11). Presupuesto: **S/ 7,500.00** (2 semanas × S/ 625/semana × 6 desarrolladores).
- **Total Presupuesto:** 3 Releases × S/ 7,500.00 = **S/ 22,500.00**.

## 4. Distribución del Esfuerzo y Capacidad
- El equipo de 6 desarrolladores dispone de **240 horas efectivas por sprint** (40 h netas por integrante tras deducir el 20 % de ceremonias de una dedicación bruta de 50 h).
- Capacidad total del proyecto (3 Sprints): **720 horas efectivas**.
- Esfuerzo total desglosado en tareas operativas (fuente oficial DOC-PLAN-07): **502 horas en 363 tareas** (296.00 h Construcción [59.0 %] + 206.00 h Verificación QA [41.0 %]).
- Tasa global de ocupación de capacidad: **69.7 %** (Sprint 1: 74.2 %, Sprint 2: 75.0 %, Sprint 3: 60.0 %), manteniendo una holgura preventiva media del 30.3 % para contingencias.

---

## A.2 Matriz de Trazabilidad por Historia de Usuario

Razón oficial: Pts × (S/ 22,500.00 ÷ 251 pts) = Pts × S/ 89.6414/pt. Orden: por épica y, dentro de cada épica, por release/orden del backlog.

| Objetivo | Épica | ID de HU | Título | Pts | Release | Sprint | Horas (2 × pts) | Costo asignado (S/) |
|---|---|---|---|:---:|:---:|:---:|:---:|:---:|
| OBJ-01 | EPIC-SEG | HU-AUTH-01 | Autenticación – Iniciar sesión | 5 | REL-1 | SPR-1 | 10 h | S/ 448.21 |
| OBJ-01 | EPIC-SEG | HU-AUTH-02 | Autenticación – Bloquear cuenta por intentos fallidos | 3 | REL-1 | SPR-1 | 6 h | S/ 268.92 |
| OBJ-01 | EPIC-SEG | HU-AUTH-03 | Autenticación – Cerrar sesión | 2 | REL-1 | SPR-1 | 4 h | S/ 179.28 |
| OBJ-01 | EPIC-SEG | HU-USR-02 | Usuarios – Crear cuenta de nuevo empleado | 5 | REL-1 | SPR-1 | 10 h | S/ 448.21 |
| OBJ-01 | EPIC-SEG | HU-AUTH-04 | Autenticación – Garantizar sesión única por usuario | 8 | REL-2 | SPR-2 | 16 h | S/ 717.13 |
| OBJ-01 | EPIC-SEG | HU-USR-01 | Usuarios – Listar empleados del sistema | 2 | REL-2 | SPR-2 | 4 h | S/ 179.28 |
| OBJ-01 | EPIC-SEG | HU-USR-04 | Usuarios – Desactivar cuenta de empleado | 3 | REL-2 | SPR-2 | 6 h | S/ 268.92 |
| OBJ-01 | EPIC-SEG | HU-AUTH-05 | Autenticación – Recuperar contraseña por correo | 5 | REL-2 | SPR-2 | 10 h | S/ 448.21 |
| OBJ-01 | EPIC-SEG | HU-USR-06 | Usuarios – Forzar cierre de sesión remoto | 3 | REL-2 | SPR-2 | 6 h | S/ 268.92 |
| OBJ-01 | EPIC-SEG | HU-AUTH-06 | Autenticación – Cambiar contraseña propia | 3 | REL-3 | SPR-3 | 6 h | S/ 268.92 |
| OBJ-01 | EPIC-SEG | HU-USR-03 | Usuarios – Editar datos de un empleado | 3 | REL-3 | SPR-3 | 6 h | S/ 268.92 |
| OBJ-01 | EPIC-SEG | HU-USR-05 | Usuarios – Reactivar cuenta de empleado | 2 | REL-3 | SPR-3 | 4 h | S/ 179.28 |
| OBJ-01 | EPIC-SEG | HU-LOG-01 | Trazabilidad – Consultar registro de accesos al sistema | 3 | REL-3 | SPR-3 | 6 h | S/ 268.92 |
| OBJ-02 | EPIC-CAT | HU-CAT-02 | Categorías – Crear nueva categoría de productos | 2 | REL-1 | SPR-1 | 4 h | S/ 179.28 |
| OBJ-02 | EPIC-CAT | HU-CAT-01 | Categorías – Ver lista de categorías de productos | 1 | REL-1 | SPR-1 | 2 h | S/ 89.64 |
| OBJ-02 | EPIC-CAT | HU-PROD-02 | Productos – Registrar nuevo producto en el catálogo | 5 | REL-1 | SPR-1 | 10 h | S/ 448.21 |
| OBJ-02 | EPIC-CAT | HU-PROD-01 | Productos – Ver catálogo completo de productos | 3 | REL-1 | SPR-1 | 6 h | S/ 268.92 |
| OBJ-02 | EPIC-CAT | HU-PROV-02 | Proveedores – Registrar nuevo proveedor | 3 | REL-1 | SPR-1 | 6 h | S/ 268.92 |
| OBJ-02 | EPIC-CAT | HU-CLI-02 | Clientes – Registrar cliente automáticamente al vender | 3 | REL-1 | SPR-1 | 6 h | S/ 268.92 |
| OBJ-02 | EPIC-CAT | HU-PROD-06 | Productos – Consultar productos próximos a vencer | 3 | REL-2 | SPR-2 | 6 h | S/ 268.92 |
| OBJ-02 | EPIC-CAT | HU-PROV-01 | Proveedores – Ver lista de proveedores | 2 | REL-2 | SPR-2 | 4 h | S/ 179.28 |
| OBJ-02 | EPIC-CAT | HU-PROV-04 | Proveedores – Desactivar o reactivar proveedor | 2 | REL-2 | SPR-2 | 4 h | S/ 179.28 |
| OBJ-02 | EPIC-CAT | HU-CAT-03 | Categorías – Editar nombre de categoría | 1 | REL-3 | SPR-3 | 2 h | S/ 89.64 |
| OBJ-02 | EPIC-CAT | HU-CLI-01 | Clientes – Listar clientes registrados | 2 | REL-3 | SPR-3 | 4 h | S/ 179.28 |
| OBJ-02 | EPIC-CAT | HU-PROD-04 | Productos – Editar datos de un producto | 3 | REL-3 | SPR-3 | 6 h | S/ 268.92 |
| OBJ-02 | EPIC-CAT | HU-PROD-05 | Productos – Desactivar o reactivar producto | 2 | REL-3 | SPR-3 | 4 h | S/ 179.28 |
| OBJ-02 | EPIC-CAT | HU-PROV-03 | Proveedores – Editar datos de un proveedor | 2 | REL-3 | SPR-3 | 4 h | S/ 179.28 |
| OBJ-02 | EPIC-CAT | HU-CAT-04 | Categorías – Eliminar categoría sin productos | 2 | REL-3 | SPR-3 | 4 h | S/ 179.28 |
| OBJ-02 | EPIC-CAT | HU-CLI-03 | Clientes – Editar correo electrónico de cliente | 1 | REL-3 | SPR-3 | 2 h | S/ 89.64 |
| OBJ-02 | EPIC-CAT | HU-PROD-03 | Productos – Escanear código de barras para registrar producto | 5 | REL-3 | SPR-3 | 10 h | S/ 448.21 |
| OBJ-03 | EPIC-INV | HU-INV-01 | Inventario – Registrar entrada de mercadería | 5 | REL-1 | SPR-1 | 10 h | S/ 448.21 |
| OBJ-03 | EPIC-INV | HU-INV-02 | Inventario – Registrar baja de inventario por merma | 5 | REL-1 | SPR-1 | 10 h | S/ 448.21 |
| OBJ-03 | EPIC-INV | HU-INV-03 | Inventario – Realizar ajuste por conteo físico | 5 | REL-1 | SPR-1 | 10 h | S/ 448.21 |
| OBJ-03 | EPIC-INV | HU-SOL-01 | Reposición – Crear solicitud de reposición | 3 | REL-2 | SPR-2 | 6 h | S/ 268.92 |
| OBJ-03 | EPIC-INV | HU-SOL-02 | Reposición – Listar solicitudes con filtro por estado | 2 | REL-2 | SPR-2 | 4 h | S/ 179.28 |
| OBJ-03 | EPIC-INV | HU-SOL-03 | Reposición – Aprobar solicitud de reposición | 3 | REL-2 | SPR-2 | 6 h | S/ 268.92 |
| OBJ-03 | EPIC-INV | HU-SOL-05 | Reposición – Completar solicitud al recibir mercadería | 8 | REL-2 | SPR-2 | 16 h | S/ 717.13 |
| OBJ-03 | EPIC-INV | HU-SOL-04 | Reposición – Rechazar solicitud de reposición | 2 | REL-2 | SPR-2 | 4 h | S/ 179.28 |
| OBJ-03 | EPIC-INV | HU-INV-04 | Inventario – Consultar historial de entradas | 2 | REL-3 | SPR-3 | 4 h | S/ 179.28 |
| OBJ-03 | EPIC-INV | HU-INV-05 | Inventario – Consultar historial de bajas | 2 | REL-3 | SPR-3 | 4 h | S/ 179.28 |
| OBJ-03 | EPIC-INV | HU-INV-06 | Inventario – Consultar historial de ajustes | 2 | REL-3 | SPR-3 | 4 h | S/ 179.28 |
| OBJ-04 | EPIC-VEN | HU-CAJA-01 | Caja – Abrir turno de caja | 5 | REL-1 | SPR-1 | 10 h | S/ 448.21 |
| OBJ-04 | EPIC-VEN | HU-CAJA-02 | Caja – Cerrar turno de caja y cuadrar | 5 | REL-1 | SPR-1 | 10 h | S/ 448.21 |
| OBJ-04 | EPIC-VEN | HU-CAJA-05 | Caja – Consultar historial de turnos de caja | 3 | REL-1 | SPR-1 | 6 h | S/ 268.92 |
| OBJ-04 | EPIC-VEN | HU-VEN-01 | Ventas (POS) – Registrar una venta con Efectivo o Yape/Plin (IziPay) | 13 | REL-1 | SPR-1 | 26 h | S/ 1,165.34 |
| OBJ-04 | EPIC-VEN | HU-VEN-02 | Ventas (POS) – Emitir boleta o factura | 8 | REL-1 | SPR-1 | 16 h | S/ 717.13 |
| OBJ-04 | EPIC-VEN | HU-VEN-05 | Ventas (POS) – Consultar historial de ventas | 5 | REL-1 | SPR-1 | 10 h | S/ 448.21 |
| OBJ-04 | EPIC-VEN | HU-VEN-06 | Ventas (POS) – Anular una venta con devolución | 8 | REL-2 | SPR-2 | 16 h | S/ 717.13 |
| OBJ-04 | EPIC-VEN | HU-CAJA-03 | Caja – Registrar movimiento manual de efectivo | 3 | REL-2 | SPR-2 | 6 h | S/ 268.92 |
| OBJ-04 | EPIC-VEN | HU-CAJA-04 | Caja – Ver resumen del turno activo | 2 | REL-2 | SPR-2 | 4 h | S/ 179.28 |
| OBJ-04 | EPIC-VEN | HU-CAJA-06 | Caja – Aprobar cierre de turno | 2 | REL-2 | SPR-2 | 4 h | S/ 179.28 |
| OBJ-04 | EPIC-VEN | HU-CAJA-07 | Caja – Forzar cierre de turno ajeno | 5 | REL-2 | SPR-2 | 10 h | S/ 448.21 |
| OBJ-04 | EPIC-VEN | HU-VEN-07 | Ventas (POS) – Verificar recepción de pago Yape/Plin (IziPay) | 2 | REL-2 | SPR-2 | 4 h | S/ 179.28 |
| OBJ-04 | EPIC-VEN | HU-VEN-03 | Ventas (POS) – Generar comprobante en PDF o reenviar por correo electrónico | 5 | REL-3 | SPR-3 | 10 h | S/ 448.21 |
| OBJ-04 | EPIC-VEN | HU-VEN-04 | Ventas (POS) – Buscar producto por código de barras | 3 | REL-3 | SPR-3 | 6 h | S/ 268.92 |
| OBJ-04 | EPIC-VEN | HU-VEN-08 | Ventas (POS) – Exportar historial de ventas a CSV | 3 | REL-3 | SPR-3 | 6 h | S/ 268.92 |
| OBJ-05 | EPIC-REP | HU-CONF-02 | Configuración – Actualizar configuración del negocio | 3 | REL-1 | SPR-1 | 6 h | S/ 268.92 |
| OBJ-05 | EPIC-REP | HU-DASH-01 | Dashboard – Ver resumen de ventas del día y del mes | 5 | REL-2 | SPR-2 | 10 h | S/ 448.21 |
| OBJ-05 | EPIC-REP | HU-DASH-03 | Dashboard – Alertas de stock crítico, vencimientos y turnos olvidados | 5 | REL-2 | SPR-2 | 10 h | S/ 448.21 |
| OBJ-05 | EPIC-REP | HU-REP-01 | Reportes – Ver resumen de ventas por período | 5 | REL-2 | SPR-2 | 10 h | S/ 448.21 |
| OBJ-05 | EPIC-REP | HU-REP-02 | Reportes – Ver ranking de productos más vendidos | 3 | REL-2 | SPR-2 | 6 h | S/ 268.92 |
| OBJ-05 | EPIC-REP | HU-REP-05 | Reportes – Ver stock crítico | 3 | REL-2 | SPR-2 | 6 h | S/ 268.92 |
| OBJ-05 | EPIC-REP | HU-CONF-01 | Configuración – Ver configuración actual del negocio | 1 | REL-2 | SPR-2 | 2 h | S/ 89.64 |
| OBJ-05 | EPIC-REP | HU-DASH-02 | Dashboard – Ver gráfico de evolución de ventas por día | 3 | REL-3 | SPR-3 | 6 h | S/ 268.92 |
| OBJ-05 | EPIC-REP | HU-DASH-04 | Dashboard – Ver ranking de productos más vendidos | 3 | REL-3 | SPR-3 | 6 h | S/ 268.92 |
| OBJ-05 | EPIC-REP | HU-DASH-05 | Dashboard – Ver solicitudes de reposición pendientes | 2 | REL-3 | SPR-3 | 4 h | S/ 179.28 |
| OBJ-05 | EPIC-REP | HU-REP-03 | Reportes – Ver ventas desglosadas por día | 3 | REL-3 | SPR-3 | 6 h | S/ 268.92 |
| OBJ-05 | EPIC-REP | HU-REP-04 | Reportes – Ver ventas por método de pago | 2 | REL-3 | SPR-3 | 4 h | S/ 179.28 |
| OBJ-05 | EPIC-REP | HU-REP-06 | Reportes – Ver resumen general del inventario | 2 | REL-3 | SPR-3 | 4 h | S/ 179.28 |
| OBJ-05 | EPIC-REP | HU-REP-07 | Reportes – Ver margen de ganancia por producto | 5 | REL-3 | SPR-3 | 10 h | S/ 448.21 |
| OBJ-05 | EPIC-REP | HU-REP-08 | Reportes – Ver mermas agrupadas por motivo | 3 | REL-3 | SPR-3 | 6 h | S/ 268.92 |
| OBJ-05 | EPIC-REP | HU-REP-09 | Reportes – Exportar reportes en PDF | 3 | REL-3 | SPR-3 | 6 h | S/ 268.92 |
| — | — | — | **Ajuste por redondeo** | — | — | — | — | **S/ +0.13** |
| **TOTAL** | | | **72 HU** | **251** | **3 Releases** | **3 Sprints** | **502 h** | **S/ 22,500.00** |

## A.3 Conciliación entre el presupuesto por release y la asignación por historia

El presupuesto de cada release es **costo de capacidad** (2 semanas × S/ 625 × 6 desarrolladores = S/ 7,500.00), mientras que el costo asignado por historia es una **distribución por puntos** (Pts × S/ 89.6414). Ambas bases suman S/ 22,500.00, pero difieren por release porque la carga planificada por sprint (89 / 90 / 72 pts) no es uniforme:

| Release | Puntos | Asignación por puntos (S/) | Presupuesto del release (S/) | Diferencia (S/) |
|---|:---:|:---:|:---:|:---:|
| REL-1 (SPR-1) | 89 | 7,978.09 | 7,500.00 | +478.09 |
| REL-2 (SPR-2) | 90 | 8,067.73 | 7,500.00 | +567.73 |
| REL-3 (SPR-3) | 72 | 6,454.18 | 7,500.00 | -1,045.82 |
| **Total** | **251** | **22,500.00** | **22,500.00** | **0.00** |

*Lectura:* la diferencia del REL-3 corresponde a capacidad planificada no consumida (60.0 % de ocupación en el Sprint 3); el exceso de REL-1 y REL-2 es el valor entregado por encima del costo de capacidad del sprint.

---

---

