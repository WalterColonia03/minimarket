---
Código de documento: DOC-PLAN-01
Título: Visión, Alcance y Stakeholders
Versión: 5.0
Fecha: 2026-10-04
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
- **SUP-03 (Flujo Operativo de Cobros y Comprobantes):** La emisión de boletas y facturas se planifica con generación local de correlativos continuos ininterrumpidos y formatos según estándar fiscal (Decisión formal D4: emisión local autónoma estructurada sin requerir envío electrónico sincrónico a plataformas externas); el cobro con billeteras digitales se realizará mediante Yape/Plin mediante terminal IziPay con código de autorización de 6 dígitos (`HU-VEN-01` y `HU-VEN-07`), donde el cajero registrará dicho código de autorización impreso por el terminal físico garantizando su unicidad histórica para evitar cobros duplicados (RN-02), sin requerir integración bancaria automatizada directa por canales externos.
- **SUP-04 (Horizonte Temporal y Presupuesto Oficial):** El proyecto se ejecutará en un horizonte timebox de 3 Sprints de 2 semanas cada uno (6 semanas lectivas, 10 días laborables por sprint), iniciando el miércoles 30 de septiembre y concluyendo el martes 10 de noviembre de 2026. El feriado nacional del jueves 08 de octubre (Combate de Angamos) se compensa laborando el sábado 03 de octubre. El presupuesto total planificado es de S/ 22,500.00 (S/ 7,500.00 por sprint o release), correspondiente íntegramente a costos laborales (6 semanas × S/ 625.00/semana × 6 desarrolladores), sin contemplar costos no laborales.
- **SUP-05 (Disponibilidad en Días de Presentación Académica):** Los martes 06 de octubre y 13 de octubre coinciden con sesiones lectivas fijas. Se planifica una dedicación de 4.0 horas efectivas de desarrollo el día 6, mientras que el martes 13 de octubre se reserva como jornada exclusiva de presentación del MVP en la Sprint Review 1, sin asignación de tareas técnicas de construcción.