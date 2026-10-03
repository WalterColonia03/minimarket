# Guía de Navegación del Paquete de Planificación Scrum (v4.8 Oficial)

Bienvenido a la versión consolidada y definitiva del **Paquete Documental de Planificación Ágil Scrum (v4.8 Oficial)** para el Sistema Integral de Gestión del Minimarket.

---

## 1. Organización del Directorio Actualizado

Todos los archivos vigentes, saneados y de última versión se encuentran centralizados en esta carpeta:

```
paquete_v4.7/
├── 📄 00_Portada_Indice_y_Control_Documental.md      <- Portada oficial, parámetros inmutables y directorio maestro
├── 📄 01_Vision_Alcance_y_Stakeholders.md            <- Propósito, objetivos de negocio (OBJ-01..05) y roles
├── 📄 02_Equipo_Roles_y_Ceremonias.md                <- 6 Developers, DoD, DoR, acuerdos y ceremonias Scrum
├── 📄 00_Product_Backlog_Priorizado.md               <- 72 HUs activas + 1 fuera de alcance (251 pts)
├── 📄 01_EPIC-SEG.md                                 <- 13 HUs de Seguridad, Sesiones y Usuarios
├── 📄 02_EPIC-CAT.md                                 <- 17 HUs de Categorías, Productos, Proveedores y Clientes
├── 📄 03_EPIC-INV.md                                 <- 11 HUs de Entradas, Bajas, Ajustes y Solicitudes
├── 📄 04_EPIC-VEN.md                                 <- 15 HUs de Caja, POS, Facturación y Anulaciones
├── 📄 05_EPIC-REP.md                                 <- 16 HUs de Dashboards, Reportes y Parámetros SUNAT
├── 📄 04_Plan_de_Lanzamiento_y_Story_Mapping.md      <- Story Map y 3 Releases (MVP en Release 1)
├── 📄 05_Estimacion_de_Capacidad_Velocidad_y_Costos.md <- Modelo matemático (240 h/sprint, S/ 22,500.00)
├── 📄 06_Sprint_Backlog.md                           <- Desglose y balanceo de 3 Sprints
├── 📄 07_Desglose_de_Tareas_Task_Breakdown.md         <- 363 tareas en plantilla de 8 pasos (502 h)
├── 📄 08_Reglas_de_Negocio_y_Glosario.md             <- 16 Reglas oficiales (RN-01..16) y Glosario
├── 📄 10_Registro_Deuda_Tecnica_y_Brechas.md         <- Supuestos de arquitectura y Decisiones D1 a D12
├── 📄 11_Matriz_Trazabilidad_UI.md                   <- Mapeo bidireccional HU -> Pantalla
├── 📄 Anexo_A.md                                     <- Consolidado Ejecutivo (Presupuesto y HUs)
├── 📄 Anexo_B_Especificacion_de_Interfaz.md          <- Especificación funcional de 20 pantallas
│
├── 📋 Registro_de_Preguntas_y_Decisiones_Product_Owner.md  <- Compendio de 32 preguntas y decisiones PO
│
└── 📁 informes_auditoria/                            <- Subcarpeta oficial con los 31 informes consolidados v4.8
    ├── 60-informe-final-consolidado-paquete-v48.md   <- Informe maestro de cierre y certificación v4.8
    ├── 61-auditoria-compendio-preguntas-y-decisiones-po.md <- Certificación del compendio de preguntas y decisiones
    ├── INFORME-AUDITORIA-TECNICA-CONSOLIDADA.md      <- Informe consolidado de auditoría técnica
    ├── INTERNO_Evidencia_Tecnica.md                  <- Expediente confidencial de trazabilidad técnica
    └── (Informes oficiales consolidados 33 a 59 por fase y épica)
```

---

## 2. Resumen de Cifras Inmutables de la Planificación

- **5 Épicas:** Seguridad (`EPIC-SEG`), Catálogos (`EPIC-CAT`), Inventario (`EPIC-INV`), Ventas/Caja (`EPIC-VEN`), Reportes (`EPIC-REP`).
- **72 Historias de Usuario Planificadas + 1 fuera de alcance (`HU-VEN-09`, 0 pts):**
  - Must have: 36 · Should have: 31 · Could have: 5 · Won't have: 1.
- **251 Puntos de Historia:** Historia pivote `HU-CAT-01` = 1 pt = 2 h-hombre (escala Fibonacci).
- **3 Sprints de 2 semanas (6 semanas calendario):** Timebox de 10 días laborables por iteración.
- **3 Releases Comerciales:**
  - **REL-1 (MVP):** Sprint 1, 20 HUs, 89 pts.
  - **REL-2:** Sprint 2, 25 HUs, 90 pts.
  - **REL-3:** Sprint 3, 27 HUs, 72 pts.
- **Capacidad Neta del Equipo:** 6 Desarrolladores × 25 h/sem × 2 sem × 80 % = **240 horas netas/sprint** (720 h total).
- **Esfuerzo Desglosado Oficial:** **502 horas en 363 tareas** (296 h Construcción [59.0 %] + 206 h Verificación QA [41.0 %]).
- **Presupuesto Total Estimado:** **S/ 22,500.00** (100 % costo laboral directo, S/ 7,500.00 por sprint o release, S/ 25.00/h neta).
- **Especificación de Interfaz:** **20 pantallas** con 82 apartados de criterios de aceptación de interfaz en [Anexo B](Anexo_B_Especificacion_de_Interfaz.md) y trazadas en [DOC-PLAN-11](11_Matriz_Trazabilidad_UI.md).

---

## 3. ¿Dónde están las versiones antiguas?

Para evitar confusión visual y mantener un entorno limpio y profesional, todas las versiones y carpetas previas obsoletas han sido agrupadas de forma segura en:  
📁 `docs/planificacion-scrum/_ARCHIVADO_VERSIONES_ANTIGUAS/`
