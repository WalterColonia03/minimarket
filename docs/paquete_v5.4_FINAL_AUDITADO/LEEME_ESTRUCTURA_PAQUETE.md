# Guía de Navegación del Paquete de Planificación Scrum (v5.4 FINAL AUDITADO)

Bienvenido a la versión consolidada y definitiva del **Paquete Documental de Planificación Ágil Scrum (v5.4 FINAL AUDITADO)** para el Sistema Integral de Gestión del Minimarket, estructurado y certificado para su revisión técnica e independiente por comités académicos de evaluación y auditoría técnica.

---

## 1. Organización del Paquete Oficial Actualizado (20 Documentos + Consolidado Oficial)

La totalidad de los documentos oficiales, plenamente saneados de tecnicismos y clases de implementación, con trazabilidad bidireccional y reglas de negocio actualizadas (RN-01 a RN-21), se organizan de la siguiente manera:

```
paquete_v5.4_FINAL_AUDITADO/
├── 📄 00_Portada_Indice_y_Control_Documental.md      <- Portada oficial, parámetros inmutables y directorio maestro
├── 📄 01_Vision_Alcance_y_Stakeholders.md            <- Propósito, objetivos de negocio (OBJ-01..05) y roles
├── 📄 02_Equipo_Roles_y_Ceremonias.md                <- 6 Developers, DoD, DoR, acuerdos y ceremonias Scrum
├── 📄 00_Product_Backlog_Priorizado.md               <- 74 HUs activas + 1 fuera de alcance (251 pts)
├── 📄 01_EPIC-SEG.md                                 <- 13 HUs de Seguridad, Sesiones y Usuarios (RN-17, RN-18)
├── 📄 02_EPIC-CAT.md                                 <- 17 HUs de Categorías, Productos, Proveedores y Clientes (RN-19)
├── 📄 03_EPIC-INV.md                                 <- 11 HUs de Entradas, Bajas, Ajustes y Solicitudes (RN-01, RN-19, RN-20)
├── 📄 04_EPIC-VEN.md                                 <- 17 HUs de Caja, POS, Facturación y Anulaciones (RN-02, RN-08, RN-09, RN-19, RN-21)
├── 📄 05_EPIC-REP.md                                 <- 16 HUs de Dashboards, Reportes y Parámetros SUNAT (RN-06)
├── 📄 04_Plan_de_Lanzamiento_y_Story_Mapping.md      <- Story Map y 3 Releases (MVP en Release 1)
├── 📄 05_Estimacion_de_Capacidad_Velocidad_y_Costos.md <- Modelo matemático oficial (240 h/sprint, S/ 22,500.00)
├── 📄 06_Sprint_Backlog.md                           <- Desglose y balanceo de 3 Sprints
├── 📄 07_Desglose_de_Tareas_Task_Breakdown.md         <- 373 tareas en plantilla de 8 pasos (502 h de esfuerzo)
├── 📄 08_Reglas_de_Negocio_y_Glosario.md             <- Catálogo Oficial de 21 Reglas de Negocio (RN-01..21) y Glosario
├── 📄 10_Registro_Deuda_Tecnica_y_Brechas.md         <- Supuestos de arquitectura y Decisiones de Negocio D1 a D12
├── 📄 11_Matriz_Trazabilidad_UI.md                   <- Mapeo bidireccional HU -> Pantalla -> Criterio UI
├── 📄 Anexo_A.md                                     <- Consolidado Ejecutivo del Proyecto (Presupuesto y HUs)
├── 📄 Anexo_B_Especificacion_de_Interfaz.md          <- Especificación funcional y de accesibilidad de 20 pantallas (RN-UI-01..21)
├── 📄 Registro_de_Preguntas_y_Decisiones_Product_Owner.md  <- Compendio de 32 decisiones y acuerdos oficiales PO
├── 📄 LEEME_ESTRUCTURA_PAQUETE.md                    <- Guía de navegación del expediente oficial
│
└── 📄 PLANIFICACION_SCRUM_V5.4_CONSOLIDADO_FINAL.md <- Archivo maestro consolidado de lectura continua del expediente
```

> **Nota de Saneamiento y Exclusión Documental:**  
> El presente expediente oficial contiene la planificación ágil Scrum formulada ex-ante, estructurada en 20 documentos organizados y trazados bajo estándares de la Guía Oficial de Scrum y buenas prácticas del curso Agile Development, garantizando una evaluación limpia, rigurosa y estandarizada.

---

## 2. Resumen de Cifras Inmutables de la Planificación

- **5 Épicas:** Seguridad (`EPIC-SEG`), Catálogos (`EPIC-CAT`), Inventario (`EPIC-INV`), Ventas/Caja (`EPIC-VEN`), Reportes (`EPIC-REP`).
- **74 Historias de Usuario Planificadas + 1 fuera de alcance (`HU-VEN-09`, 0 pts):**
  - Must have: 38 · Should have: 31 · Could have: 5 · Won't have: 1.
- **251 Puntos de Historia:** Historia pivote `HU-CAT-01` = 1 pt = 2 h-hombre (escala Fibonacci).
- **3 Sprints de 2 semanas (6 semanas calendario):** Timebox de 10 días laborables por iteración.
- **3 Releases Comerciales:**
  - **REL-1 (MVP):** Sprint 1, 22 HUs, 89 pts.
  - **REL-2:** Sprint 2, 25 HUs, 90 pts.
  - **REL-3:** Sprint 3, 27 HUs, 72 pts.
- **Capacidad Neta del Equipo:** 6 Desarrolladores × 25 h/sem × 2 sem × 80 % = **240 horas netas/sprint** (720 h total).
- **Esfuerzo Desglosado Oficial:** **502 horas en 373 tareas** (296 h Construcción [59.0 %] + 206 h Verificación QA [41.0 %]).
- **Presupuesto Total Estimado:** **S/ 22,500.00** (100 % costo laboral directo, S/ 7,500.00 por sprint o release, S/ 25.00/h bruta laboral y S/ 31.25/h neta efectiva).
- **21 Reglas de Negocio Oficiales (RN-01 a RN-21):** Catálogo normativo ampliado y concertado con el Product Owner.
- **Especificación de Interfaz:** **20 pantallas** con 82 apartados de criterios de interfaz y matriz funcional ampliada (RN-UI-01 a RN-UI-21) en [Anexo B](Anexo_B_Especificacion_de_Interfaz.md) y trazadas en [DOC-PLAN-11](11_Matriz_Trazabilidad_UI.md).

---

## 3. Uso del Documento Maestro Consolidado

Para facilitar la revisión integral y continua del expediente sin necesidad de abrir individualmente cada archivo, se incluye el archivo maestro:  
👉 **`PLANIFICACION_SCRUM_V5.4_CONSOLIDADO_FINAL.md`**  
Dicho archivo contiene la compilación íntegra y secuencial de los 20 documentos del expediente, permitiendo una revisión exhaustiva de consistencia cruzada en un único documento estructurado.

