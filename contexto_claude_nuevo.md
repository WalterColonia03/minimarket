
## 1. Tu Rol y la Metodología
- Eres **Auditor Técnico Senior de Software** (QA funcional).
- Tu misión es auditar un sistema Minimarket ya funcional contra su documentación Scrum (`PLANIFICACION_SCRUM_V5.4_CONSOLIDADO_FINAL.md` y archivos de Épicas).
- **Regla de oro:** El código/sistema es la fuente de verdad. Si el documento dice A y el sistema dice B, se debe actualizar el documento para que refleje B. Nunca sugerimos cambiar el código.

## 2. Lo que ya hemos completado
- **Fase 1 (Seguridad - `EPIC-SEG`)**: Completada y documento actualizado.
- **Fase 2 (Catálogo - `EPIC-CAT`)**: Completada y documento actualizado. Resolvimos dudas sobre el campo de "código de barras" (sí existe al crear un nuevo producto) y sobre el módulo de "Clientes" (se documentó como de acceso directo y uso analítico para Admin, sin menú).

## 3. Dónde nos quedamos (Fase 3 - Inventario `EPIC-INV`)
En el chat anterior, me entregaste tu primer reporte de la Fase 3 (Inventario), el cual identificaba 9 desfases en la documentación (etiquetados del `I-01` al `I-09`) y me hiciste **7 preguntas** para que yo verificara en la plataforma.

A continuación, te entrego las respuestas a esas 7 preguntas, comprobadas directamente en la plataforma y el código fuente:

> **1. Código de barras:** Tenías toda la razón. Al abrir 'Nuevo Producto', el primer campo SÍ es 'Código de Barras' y funciona exactamente como describiste ("Haz clic aquí para escanear" / "Escanea o escribe..."). Así que HU-PROD-02 y HU-PROD-03 están bien documentadas y no deben borrarse.
> 
> **2. Lote de hoy:** Efectivamente el sistema SÍ lo bloquea para la venta. Había 6 unidades en total (3 que vencen hoy, 3 que vencen en el futuro). La regla del sistema bloquea estrictamente lo que vence hoy (`<= hoy`). Por eso la Baja me dejó dar de baja esas 3, y el POS decía "3 vigentes" (refiriéndose a las otras 3). El sistema impide vender lo que vence hoy.
> 
> **3. Baja "Vencido":** Se bloquea por completo. El input de cantidad se desactiva asumiendo automáticamente todo el stock vencido de golpe, y el mensaje abajo confirma: *"Con este motivo se da de baja todo lo vencido, no una parte"*.
> 
> **4. Código de lote en Entradas:** Al abrir el formulario, el campo "Código de lote" ya viene rellenado y bloqueado (solo lectura) con un código autogenerado, por ejemplo: `L-20261004-ABCD`.
> 
> **5. Ajuste:** Sí, me deja confirmar un ajuste sin escribir nada en Observaciones. El campo es totalmente opcional.
> 
> **6. Solicitud con 0:** Si escribo 0 y le doy a enviar, salta la alerta nativa HTML5 del navegador diciendo que "El valor debe ser superior o igual a 1". No me deja enviar.
> 
> **7. Detalle de solicitud:** No pasa nada al hacer clic en la fila. Toda la información (solicitante, aprobador, etc.) se ve directamente en las columnas de la tabla. No hay modal de detalle.

## 4. Tu siguiente tarea (INSTRUCCIÓN PARA TI, CLAUDE)
1. Recibe estas respuestas y **entrégame tu veredicto y acciones finales a corregir en los documentos para cerrar la Fase 3 (Inventario)**.
2. Inmediatamente después, **inicia tu reporte de la Fase 4 (EPIC-VEN - Ventas y Caja)** comparando el documento contra la realidad del sistema. (Recuerda que los mensajes de estado vacío del POS, como *"No se encontraron productos"* y *"Código de barras no registrado"* pertenecen a esta fase).

¡Adelante!
