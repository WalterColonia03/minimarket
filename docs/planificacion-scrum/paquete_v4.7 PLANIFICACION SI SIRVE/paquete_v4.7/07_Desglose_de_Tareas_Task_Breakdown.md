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
