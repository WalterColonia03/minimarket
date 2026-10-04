# INFORME N° 62: RESOLUCIÓN INTEGRAL DE AUDITORÍA PROGRAMÁTICA (PAQUETE v4.8)

**Código de Documento:** AUDIT-INF-62  
**Fecha:** 2026-10-04  
**Auditor Responsable:** Auditor Técnico Senior de Software y Especialista en Gestión Ágil  
**Proyecto:** Sistema de Gestión Integral para Minimarket  
**Versión Auditada:** Paquete de Planificación Scrum v4.8 Oficial  
**Estado:** Dictamen Favorable de Calidad Certificada  

---

## 1. Resumen Ejecutivo de la Intervención

A partir de la ejecución de pruebas y análisis programáticos exhaustivos (referencias cruzadas, consistencia bidireccional, balanceo matemático de jornadas y escaneo léxico), se procedió a subsanar de forma definitiva la totalidad de las observaciones detectadas en la documentación de planificación Scrum.

A continuación se detalla la resolución punto por punto de cada hallazgo:

---

## 2. Resolución de Contradicciones Graves

### 2.1 Sincronización Total de Dependencias en las 72 Historias de Usuario
- **Hallazgo Previo:** Existían discrepancias en 31 de las 72 historias de usuario entre la columna «Depende de» del Backlog Maestro ([`00_Product_Backlog_Priorizado.md`](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/docs/planificacion-scrum/paquete_v4.7%20PLANIFICACION%20SI%20SIRVE/paquete_v4.7/00_Product_Backlog_Priorizado.md)) y la sección individual `**Dependencias:**` en los documentos de épica. La discrepancia crítica residía en `HU-CONF-02` (Sprint 1), que en `05_EPIC-REP.md` declaraba requerir `HU-CONF-01` (Sprint 2), vulnerando la regla de Definition of Ready (DoR #4).
- **Acción Correctiva:** Se implementó una sincronización estricta 1:1 en los 5 archivos de épica (`01_EPIC-SEG.md` a `05_EPIC-REP.md`). Las dependencias de las 72 HUs ahora coinciden de forma idéntica con el Backlog Maestro y con el Sprint Backlog ([`06_Sprint_Backlog.md`](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/docs/planificacion-scrum/paquete_v4.7%20PLANIFICACION%20SI%20SIRVE/paquete_v4.7/06_Sprint_Backlog.md)). `HU-CONF-02` depende únicamente de `HU-AUTH-01` (Sprint 1), y `HU-CONF-01` (Sprint 2) depende de `HU-CONF-02` (Sprint 1). Discrepancias resultantes: **0**.

### 2.2 Unificación de la Política de Longitud de Contraseñas
- **Hallazgo Previo:** Mientras la épica de seguridad fijaba 8 caracteres mínimos, el [Anexo B](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/docs/planificacion-scrum/paquete_v4.7%20PLANIFICACION%20SI%20SIRVE/paquete_v4.7/Anexo_B_Especificacion_de_Interfaz.md) validaba "menos de 7", emitía mensaje de "al menos 8" y en el escenario BDD indicaba ">= 7".
- **Acción Correctiva:** Se estandarizó de forma transversal en el [Anexo B](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/docs/planificacion-scrum/paquete_v4.7%20PLANIFICACION%20SI%20SIRVE/paquete_v4.7/Anexo_B_Especificacion_de_Interfaz.md) (líneas 186 y 214), en [`01_EPIC-SEG.md`](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/docs/planificacion-scrum/paquete_v4.7%20PLANIFICACION%20SI%20SIRVE/paquete_v4.7/01_EPIC-SEG.md) y en [`08_Reglas_de_Negocio_y_Glosario.md`](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/docs/planificacion-scrum/paquete_v4.7%20PLANIFICACION%20SI%20SIRVE/paquete_v4.7/08_Reglas_de_Negocio_y_Glosario.md) la regla inmutable: **mínimo 8 caracteres obligatorios** combinando mayúsculas, minúsculas y dígitos.

### 2.3 Estandarización de Intentos Fallidos en Recuperación de Clave
- **Hallazgo Previo:** [`01_EPIC-SEG.md`](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/docs/planificacion-scrum/paquete_v4.7%20PLANIFICACION%20SI%20SIRVE/paquete_v4.7/01_EPIC-SEG.md) y [`10_Registro_Deuda_Tecnica_y_Brechas.md`](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/docs/planificacion-scrum/paquete_v4.7%20PLANIFICACION%20SI%20SIRVE/paquete_v4.7/10_Registro_Deuda_Tecnica_y_Brechas.md) establecían 5 intentos fallidos antes del bloqueo temporal de 15 minutos, mientras el Registro del PO (P-03) mencionaba 3 intentos.
- **Acción Correctiva:** Se unificó oficialmente en [`Registro_de_Preguntas_y_Decisiones_Product_Owner.md`](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/docs/planificacion-scrum/paquete_v4.7%20PLANIFICACION%20SI%20SIRVE/paquete_v4.7/Registro_de_Preguntas_y_Decisiones_Product_Owner.md) a **5 intentos fallidos consecutivos** (alineado con la política de autenticación de `HU-AUTH-02`).

### 2.4 Unificación Canónica de Decisiones D1 a D12
- **Hallazgo Previo:** DOC-10 y el Registro del PO mantenían numeraciones divergentes para las decisiones D1..D12, provocando que citas de reglas de negocio (RN-02, RN-03, RN-13) apuntaran a identificadores con temáticas distintas.
- **Acción Correctiva:** Se fijó la numeración de [`10_Registro_Deuda_Tecnica_y_Brechas.md`](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/docs/planificacion-scrum/paquete_v4.7%20PLANIFICACION%20SI%20SIRVE/paquete_v4.7/10_Registro_Deuda_Tecnica_y_Brechas.md) como la canónica oficial y se reordenó íntegramente la Sección 2 de [`Registro_de_Preguntas_y_Decisiones_Product_Owner.md`](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/docs/planificacion-scrum/paquete_v4.7%20PLANIFICACION%20SI%20SIRVE/paquete_v4.7/Registro_de_Preguntas_y_Decisiones_Product_Owner.md):
  - **D1:** Sesiones de usuario únicas y política de sesión activa.
  - **D2:** Política de contraseñas (mínimo 8 caracteres) y código de verificación temporal de 4 dígitos.
  - **D3:** Atribuciones de catálogo y consultas ágiles en salón.
  - **D4:** Emisión local de comprobantes SUNAT en modo autónomo.
  - **D5:** Fondo mínimo obligatorio para apertura de caja (S/ 500.00) y modalidad de arqueo.
  - **D6:** Restricción de anulación de ventas a turnos abiertos y destino de mercadería.
  - **D7:** Solicitudes de reposición por producto único y flexibilidad de proveedores.
  - **D8:** Validación de cobros digitales Yape/Plin (IziPay) con código de 6 dígitos.
  - **D9:** Control estricto de perecibles y exclusión de comercialización de caducados.
  - **D10:** Inmutabilidad de registros históricos de almacén y regularización por ajuste.
  - **D11:** Generación y descarga de comprobantes y reportes ejecutivos en PDF.
  - **D12:** Modelo de gobernanza Scrum y segregación de tareas (Construye ≠ Verifica).

### 2.5 Cuadratura Horaria y Burndown del Sprint 1 (DOC-05 y DOC-06)
- **Hallazgo Previo:** Discrepancia entre las horas residuales citadas en DOC-05 (2.50 h) y DOC-06 (4.00 h); sobreasignación en Día 1 para Des.5 (4.0 h de tareas sumadas a 4.0 h de Sprint Planning); y asunción de 24.0 h ejecutadas en Día 8 omitiendo que Des.1 (28.50 h) y Des.4 (26.25 h) concluían antes.
- **Acción Correctiva:**
  1. En el **Día 1**, los 6 desarrolladores ejecutan 1.0 h neta de tareas técnicas (6.00 h equipo) tras la ceremonia de Sprint Planning (4.0 h), respetando estrictamente la jornada máxima de 5.0 h brutas por persona. Des.5 ejecuta únicamente `AUTH-01·1` (1.0 h de configuración base).
  2. En los **Días 2 al 7** se ejecutan 24.00 h diarias (4.0 h netas por desarrollador).
  3. En el **Día 8**, Des.1 (28.50 h) y Des.4 (26.25 h) completan anticipadamente su carga; el equipo ejecuta 20.75 h, quedando un saldo pendiente acumulado de **7.25 horas**.
  4. En el **Día 9** (lunes 12-oct), las **7.25 horas residuales** son concluidas por Des.2 (1.25 h), Des.3 (1.75 h), Des.5 (2.25 h) y Des.6 (2.00 h) durante las primeras horas de la mañana, liberando 16.75 h de holgura ese día y el Día 10 íntegro para estabilización, ensayo y presentación en clase.
  5. DOC-05 y DOC-06 quedan alineados en la cifra idéntica de **7.25 horas residuales**.

### 2.6 Clarificación del Rol de Product Owner
- **Hallazgo Previo:** DOC-02 define al Product Owner como stakeholder externo (dueño del establecimiento), pero el Registro del PO firmaba a Walter Colonia con dicha denominación.
- **Acción Correctiva:** Se ajustó la portada y formalización de [`Registro_de_Preguntas_y_Decisiones_Product_Owner.md`](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/docs/planificacion-scrum/paquete_v4.7%20PLANIFICACION%20SI%20SIRVE/paquete_v4.7/Registro_de_Preguntas_y_Decisiones_Product_Owner.md) precisando que el documento fue elaborado por Walter Colonia en su rol de Lead Developer / Representante Técnico del equipo de desarrollo, y revisado/aprobado por el Dueño del Minimarket en calidad de Product Owner formal.

---

## 3. Correcciones de Redacción, Léxico y Consistencia

1. **Unificación de Títulos de HUs:**
   - `HU-VEN-07`: Unificado a *«Ventas (POS) – Verificar recepción de pago Yape/Plin (IziPay)»* en todos los documentos.
   - `HU-LOG-01`: Unificado a *«Trazabilidad – Consultar registro de accesos al sistema»*.
   - `HU-DASH-04`: Unificado a *«Dashboard – Ver ranking de productos más vendidos»*.
   - `HU-VEN-08`: Unificado a *«Ventas (POS) – Exportar historial de ventas a CSV»*.
2. **Desambiguación de Términos:**
   - Se distinguió el **Código de Verificación Temporal (4 dígitos)** para restablecimiento de contraseña del **Código de Autorización de Transacción (6 dígitos - IziPay)** para confirmación de ventas digitales. Se incorporaron ambas definiciones formales en el Glosario de [`08_Reglas_de_Negocio_y_Glosario.md`](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/docs/planificacion-scrum/paquete_v4.7%20PLANIFICACION%20SI%20SIRVE/paquete_v4.7/08_Reglas_de_Negocio_y_Glosario.md).
3. **Erradicación de Reemplazos Defectuosos:**
   - Corregidas las ocurrencias de `"interfaz webivar"` por `"Reactivar"`.
   - Corregidas las ocurrencias de `"código de autorización de autorización"` por `"código de verificación"`.
   - Corregida la expresión `"establecer la fondo inicial"` por `"establecer el fondo inicial"` en [`04_EPIC-VEN.md`](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/docs/planificacion-scrum/paquete_v4.7%20PLANIFICACION%20SI%20SIRVE/paquete_v4.7/04_EPIC-VEN.md).
   - Corregidas las ocurrencias de `"S./"` por `"S/"`.
4. **Erradicación de Tecnicismos y Clases de Código en Interfaz:**
   - Erradicado el término "OTP" en todo el paquete documental.
   - Reemplazadas clases CSS y referencias a `localStorage`/`API` por descripciones funcionales de experiencia de usuario en [Anexo B](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/docs/planificacion-scrum/paquete_v4.7%20PLANIFICACION%20SI%20SIRVE/paquete_v4.7/Anexo_B_Especificacion_de_Interfaz.md) y [`11_Matriz_Trazabilidad_UI.md`](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/docs/planificacion-scrum/paquete_v4.7%20PLANIFICACION%20SI%20SIRVE/paquete_v4.7/11_Matriz_Trazabilidad_UI.md).
5. **Control Documental en DOC-00:**
   - Se incorporó `DOC-PLAN-12` para [`Registro_de_Preguntas_y_Decisiones_Product_Owner.md`](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/docs/planificacion-scrum/paquete_v4.7%20PLANIFICACION%20SI%20SIRVE/paquete_v4.7/Registro_de_Preguntas_y_Decisiones_Product_Owner.md).
   - Se explicitó el código `DOC-PLAN-09` como reservado para la suite de pruebas automatizadas.
6. **Tarifa Económica en LEEME:**
   - Se detalló la distinción entre tarifa contractual bruta (S/ 25.00/h bruta laboral) y tarifa neta de desarrollo efectivo (S/ 31.25/h neta).

---

## 4. Dictamen Final

El Paquete de Planificación Scrum v4.8 Oficial cumple rigurosamente con los principios de consistencia, exhaustividad, independencia de calidad (`Construye ≠ Verifica`) y enfoque en lenguaje de negocio requeridos por el estándar académico.
