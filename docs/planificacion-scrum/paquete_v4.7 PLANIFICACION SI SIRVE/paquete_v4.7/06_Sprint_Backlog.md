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
