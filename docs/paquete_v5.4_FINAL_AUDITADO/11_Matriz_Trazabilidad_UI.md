---
Código de documento: DOC-PLAN-11
Título: Matriz de Trazabilidad Historia de Usuario - Pantalla (UI)
Versión: 5.2
Fecha: 2026-10-04
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
| **UI-002** | Recuperación de Contraseña | Recuperación de Clave | Vista de Recuperación de Clave Temporal | EPIC-SEG | HU-AUTH-05 | 0 | 3 | 1 | 1 | 0 | 6 |
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
| **UI-014** | Terminal de Punto de Venta (POS) | Punto de Venta | Vista de Mostrador y Cobro | EPIC-VEN | HU-VEN-01a, HU-VEN-01b, HU-VEN-01c, HU-VEN-02, HU-VEN-04, HU-VEN-07, HU-CLI-02 | 3 | 5 | 1 | 4 | 2 | 5 |
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
- **UI-014 Terminal de Punto de Venta (POS):** CA-1: Formulario, Escáner y Elementos de Venta; CA-2: Panel Lateral de Cobro y Facturación; CA-3: Modal de Comprobante de Pago (`ModalComprobante`); CA-4: Escenarios de Aceptación (escenarios formales Dado que / Cuando / Entonces)
- **UI-015 Historial de Ventas y Anulaciones:** CA-1: Filtros de Búsqueda y Navegación; CA-2: Grilla del Historial y Estados; CA-3: Modales de Detalle, Reenvío de Correo y Anulación; CA-4: Escenarios de Aceptación (escenarios formales Dado que / Cuando / Entonces)
- **UI-016 Turno de Caja y Arqueo Inicial:** CA-1: Vista sin Turno Abierto y Modal de Apertura; CA-2: Panel del Turno en Curso y Movimientos; CA-3: Modales de Movimiento Manual y Cierre de Turno; CA-4: Escenarios de Aceptación (escenarios formales Dado que / Cuando / Entonces)
- **UI-017 Historial de Cajas y Cierres:** CA-1: Filtros de Historial de Cajas; CA-2: Grilla de Turnos y Conciliación de Arqueos; CA-3: Modal de Cierre Forzado por Administrador (`ModalCerrarForzado`); CA-4: Escenarios de Aceptación (escenarios formales Dado que / Cuando / Entonces)
- **UI-018 Dashboard y KPIs Estratégicos:** CA-1: Encabezado, Detección de Turnos Olvidados y Filtro Temporal; CA-2: Tarjetas KPI Interactivas y Gráfico de Tendencia; CA-3: Secciones de Top Productos y Stock Crítico; CA-4: Modales de Detalle Bajo Demanda (`ModalDetalle`); CA-5: Escenarios de Aceptación (escenarios formales Dado que / Cuando / Entonces)
- **UI-019 Reportes Analíticos y PDF:** CA-1: Encabezado, Exportación PDF y Filtros de Fecha; CA-2: Tarjetas de Resumen y Top 10 Productos Más Vendidos; CA-3: Margen por Producto, Ventas por Día y Método; CA-4: Stock Crítico Configurable y Mermas por Motivo; CA-5: Generación y Formato del PDF Consolidado; CA-6: Escenarios de Aceptación (escenarios formales Dado que / Cuando / Entonces)
- **UI-020 Configuración Fiscal y SUNAT:** CA-1: Formulario de Datos del Negocio; CA-2: Confirmación de Cambio Crítico de RUC y Guardado; CA-3: Escenarios de Aceptación (escenarios formales Dado que / Cuando / Entonces)

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
| HU-VEN-07 | UI-014, UI-015 | CA-UI (criterio final de interfaz) | Con especificación completa en terminal POS y consulta en Historial |
| HU-SOL-04 | UI-013 | CA-UI (criterio final de interfaz) | Con especificación completa |
| HU-PROV-04 | UI-008 | CA-UI (criterio final de interfaz) | Con especificación completa |
| HU-AUTH-06 | UI-003 | CA-UI (criterio final de interfaz) | Diálogo modal emergente de cambio de contraseña accesible desde la barra superior (Decisión formal D7) |
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
| Reglas de comportamiento de interfaz transversales | Anexo B, sección 7 | RN-UI-01 a RN-UI-21 |
| Supuestos de diseño y decisiones de negocio | DOC-PLAN-10 | Decisiones D1 a D12 |

---

## 5. Guía de Consulta de Especificaciones Visuales

1. Ubicar la historia de usuario en la matriz de trazabilidad (sección 3 de este documento).
2. Consultar la historia en su respectiva épica: el criterio final (CA-UI) remite directamente a la pantalla del Anexo B.
3. En el Anexo B, ubicar el elemento específico según los apartados normalizados (sección 4).
4. Toda precisión adicional se canaliza mediante el refinamiento del Product Backlog en coordinación continua con el Product Owner.

---

## 6. Cobertura y Delimitación de Interfaz

Las 20 pantallas especificadas en el Anexo B cubren el 100 % de las interacciones visuales requeridas por las 74 historias de usuario del Product Backlog. Se ratifican los siguientes acuerdos operativos:

1. **Gestión de credenciales propia:** La actualización de clave por el colaborador activo (HU-AUTH-06) opera mediante el diálogo modal emergente "Cambiar contraseña" integrado en la barra de navegación superior (UI-003, Decisión formal D7), exigiendo la clave actual y validando la robustez de la nueva clave (mínimo 7 caracteres con mayúscula, minúscula y número) sin requerir una vista de perfil dedicada.
2. **Aviso de sesión desplazada:** La notificación informativa ante un inicio de sesión concurrente en otro equipo (HU-AUTH-04) se presenta mediante el banner superior destacado en UI-001 conforme a la Decisión D1.
3. **Validación de pagos móviles:** El registro del código de autorización de 6 dígitos emitido por el terminal de cobro para billeteras digitales Yape/Plin (IziPay) se encuentra plenamente formalizado en el Punto de Venta (UI-014) y en el Historial de Ventas (UI-015) conforme a la Decisión D8.
4. **Supervisión de compras pendientes:** La visualización de solicitudes de reposición en estado pendiente se integra de forma interactiva en el panel gerencial (UI-018) permitiendo la revisión inmediata del stock crítico.
5. **Formatos de exportación:** La generación de reportes y comprobantes oficiales se resuelve en formato PDF (Decisión D11); la exportación a formato plano (CSV, HU-VEN-08) se reserva como incremento complementario (Could have) en el Release 3.
6. **Exclusiones de hardware:** La venta a granel con balanzas electrónicas (HU-VEN-09) se mantiene excluida del alcance (Won't have) conforme a los supuestos del negocio.

---



---

## 8. Trazabilidad de Reglas de Negocio a Historias y Pantallas de Interfaz

| Regla de Negocio ID | Denominación Oficial | Historias de Usuario Trazadas | Pantalla del Anexo B Asociada | Criterio de Interfaz Equivalente |
|:---:|---|---|:---:|:---:|
| **RN-01** | Política de Ingreso Inicial y Solicitud | HU-INV-01, HU-SOL-05 | UI-010, UI-013 | RN-UI-04 |
| **RN-02** | Protección Pagos Duplicados IziPay | HU-VEN-01b, HU-VEN-07 | UI-014, UI-015 | RN-UI-03 |
| **RN-03** | Prohibición Comercializar Vencidos | HU-VEN-01c, HU-PROD-06 | UI-014, UI-007 | RN-UI-05 |
| **RN-04** | Registro Justificado de Mermas | HU-INV-02 | UI-011 | RN-UI-06 |
| **RN-05** | Restricción de Bajas por Vencimiento | HU-INV-02 | UI-011 | RN-UI-05 |
| **RN-06** | Alerta Preventiva de Stock Mínimo | HU-DASH-03, HU-REP-05, HU-PROD-02 | UI-018, UI-019, UI-007 | RN-UI-12 |
| **RN-07** | Segregación de Ventas por Turno | HU-VEN-05 | UI-015 | RN-UI-01 |
| **RN-08** | Límite Temporal de Anulaciones | HU-VEN-06 | UI-015 | RN-UI-06 |
| **RN-09** | Destino de Mercadería Devuelta | HU-VEN-06 | UI-015 | RN-UI-06 |
| **RN-10** | Fondo Mínimo Apertura Caja S/ 500 | HU-CAJA-01 | UI-016 | RN-UI-07 |
| **RN-11** | Tope Máximo Movimientos Manuales | HU-CAJA-03 | UI-016 | RN-UI-07 |
| **RN-12** | Identidad Unívoca de Empleados | HU-USR-02, HU-USR-03 | UI-004 | RN-UI-01 |
| **RN-13** | Numeración Consecutiva SUNAT | HU-VEN-02, HU-VEN-03 | UI-014, UI-015 | RN-UI-14 |
| **RN-14** | Actualización Costo Promedio | HU-INV-01, HU-REP-07, HU-SOL-05 | UI-010, UI-013, UI-019 | RN-UI-12 |
| **RN-15** | Medio Exclusivo Efectivo en Caja | HU-CAJA-03 | UI-016 | RN-UI-07 |
| **RN-16** | Flexibilidad Selección Proveedores | HU-SOL-03 | UI-013 | RN-UI-13 |
| **RN-17** | Bloqueo por Intentos Fallidos | HU-AUTH-02 | UI-001 | RN-UI-17 |
| **RN-18** | Código Verificación Temporal 4 Dígitos | HU-AUTH-05 | UI-002 | RN-UI-18 |
| **RN-19** | Despacho Preferente Caducidad (FEFO) | HU-VEN-01c, HU-PROD-06, HU-INV-01 | UI-014, UI-007, UI-010 | RN-UI-19 |
| **RN-20** | Trazabilidad en Bajas por Deterioro | HU-INV-02 | UI-011 | RN-UI-20 |
| **RN-21** | Boleta a Consumidor Anónimo (≤ S/ 700) | HU-VEN-02, HU-VEN-01b | UI-014 | RN-UI-21 |

## 7. Historial de Control de Cambios

| Versión | Fecha | Autor / Responsable | Descripción de la Modificación |
|:---:|:---:|---|---|
| **4.6** | 2026-10-03 | Colonia Infantas, Walter | Emisión inicial de la Matriz de Trazabilidad Historia - Pantalla (DOC-PLAN-11). |
| **4.7** | 2026-10-03 | Colonia Infantas, Walter | Sincronización con resoluciones de interfaz y verificación de cobertura de vistas. |
| **4.8** | 2026-10-03 | Colonia Infantas, Walter / Angeles Pérez, Jhonny | Depuración metodológica integral a priori. Sustitución de expresiones técnicas por vistas y módulos funcionales. Alineación con las Decisiones D1 a D12 de DOC-PLAN-10 y verificación de especificación en lenguaje de negocio. |
