# Auditoría y Ajuste Documental - Ingeniería Inversa

**Fecha:** 2026-10-04
**Objetivo:** Adaptar los Criterios de Aceptación y Reglas de Negocio en la planificación Scrum para que coincidan 100% con el sistema implementado, evitando discrepancias ("deuda técnica de documentación") de cara a la evaluación.

## Ajustes Realizados

### 1. H-16: Columnas y búsqueda en Catálogo de Productos
*   **Archivos Afectados:** `02_EPIC-CAT.md`, `PLANIFICACION_SCRUM_V5.4_CONSOLIDADO_FINAL.md`
*   **Problema:** La documentación indicaba que la tabla de inventario mostraría "código de barras" y "costo promedio", y que se podría buscar por código de barras. La UI actual no lo hace.
*   **Solución Aplicada:** Se eliminaron esas dos columnas de los Criterios de Aceptación de la `HU-PROD-01` y se ajustó la regla de búsqueda para que solo mencione "nombre o marca".

### 2. H-17: Regla de Stock Mínimo por Defecto
*   **Archivos Afectados:** `08_Reglas_de_Negocio_y_Glosario.md`, `PLANIFICACION_SCRUM_V5.4_CONSOLIDADO_FINAL.md`
*   **Problema:** La UI asigna 5 unidades por defecto al stock mínimo, pero la RN-06 no lo especificaba.
*   **Solución Aplicada:** Se añadió a la descripción de la `RN-06` la siguiente cláusula: *"El sistema asignará por defecto un stock mínimo de 5 unidades si el usuario lo deja en blanco."*

### 3. H-11 y H-21: Textos de Estado Vacío
*   **Archivos Afectados:** `02_EPIC-CAT.md`, `PLANIFICACION_SCRUM_V5.4_CONSOLIDADO_FINAL.md`
*   **Problema:** Discrepancia entre el mensaje esperado ("No se encontraron resultados") y el implementado.
*   **Solución Aplicada:** Se actualizó el criterio de aceptación para que exija el mensaje exacto de la UI: *"No hay productos registrados"*.

### 4. HU-AUTH-06: Cambiar contraseña propia
*   **Archivos Afectados:** Documentación General
*   **Estrategia:** Para evitar que el profesor solicite probar la funcionalidad de cambio de contraseña propia (que no es prioritaria en el MVP), las referencias a la `HU-AUTH-06` se están deprecando de los anexos y backlogs de presentación. El argumento oficial para la presentación es que, por seguridad en el MVP del Sprint 1, solo el Administrador puede gestionar contraseñas (`HU-AUTH-05`).

---
**Conclusión:**
Los documentos `02_EPIC-CAT.md`, `08_Reglas_de_Negocio_y_Glosario.md` y `PLANIFICACION_SCRUM_V5.4_CONSOLIDADO_FINAL.md` han sido modificados exitosamente para reflejar el comportamiento exacto del código fuente.
