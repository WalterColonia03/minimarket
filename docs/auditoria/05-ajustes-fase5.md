# Reporte de Auditoría Técnica 05 — Fase 5: Reportes, Dashboard y Configuración

**Fecha de ejecución:** 2026-10-04  
**Auditor:** Auditor Técnico Senior de Software (Antigravity)  
**Marco de referencia:** Reglas del Sistema (`.agents/rules/auditoria.md`), Proyecto Minimarket (Agile Development)  
**Estado:** `[SOLO LECTURA DE CÓDIGO - DOCUMENTACIÓN SINCRONIZADA]`

---

## 1. Respuestas a las 4 Preguntas de Verificación Técnica

### Pregunta 1: En Reportes, ¿hay una sección de resumen del inventario con total de categorías y proveedores?
- **Diagnóstico:** `[HECHO]` **No existe en la pantalla de Reportes.**
- **Evidencia en Código:**
  - En [`client/src/pages/ReportesPage.jsx`](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/pages/ReportesPage.jsx#L20-L75), los únicos cuatro tabs disponibles son: `ventas`, `productos`, `mermas` y `stock-critico`. Ninguno consulta ni despliega el endpoint `/reportes/inventario/resumen`.
  - En el Dashboard ([`client/src/pages/DashboardPage.jsx:37-39`](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/pages/DashboardPage.jsx#L37-L39)), sí se consume el endpoint `api.get('/reportes/inventario/resumen')`. Sin embargo, en el renderizado ([`client/src/pages/DashboardPage.jsx:205-245`](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/pages/DashboardPage.jsx#L205-L245)), el componente únicamente mapea y renderiza 3 tarjetas:
    1. *«Productos Activos»* (`invData?.total_productos`)
    2. *«Sin Stock»* (`invData?.sin_stock`)
    3. *«Solicitudes Pendientes»* (`invData?.solicitudes_pendientes`)
  - En el backend ([`server/src/controllers/reportes.controller.js:203-241`](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/server/src/controllers/reportes.controller.js#L203-L241)), la función `getResumenInventario` sí calcula `total_categorias` y `total_proveedores`, pero estos valores son capacidades expuestas en el payload JSON que la interfaz gráfica no utiliza.

---

### Pregunta 2: En la grilla de margen, ¿se puede ordenar con clic en los encabezados?
- **Diagnóstico:** `[HECHO]` **No, no existe ordenamiento interactivo en la UI.**
- **Evidencia en Código:**
  - En [`client/src/pages/ReportesPage.jsx:516-526`](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/pages/ReportesPage.jsx#L516-L526), las etiquetas `<th>` de la tabla de márgenes son fijas y carecen de manejadores `onClick`, cursores pointer o iconos de ordenación.
  - El orden es provisto exclusivamente desde el backend SQL en [`server/src/controllers/reportes.controller.js:296`](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/server/src/controllers/reportes.controller.js#L296) mediante la cláusula estática: `ORDER BY ganancia_bruta DESC`.

---

### Pregunta 3: Con el umbral en 0 o sin productos críticos, ¿qué mensaje exacto muestra Stock Crítico?
- **Diagnóstico:** `[HECHO]` **Muestra un banner verde de estado óptimo con el texto: «Todo el stock está en orden».**
- **Evidencia en Código:**
  - En [`client/src/pages/ReportesPage.jsx:663-667`](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/pages/ReportesPage.jsx#L663-L667), cuando `stockCritico.length === 0`:
    ```jsx
    <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-6 text-center text-emerald-700">
      <CheckCircle className="h-8 w-8 mx-auto mb-2 text-emerald-600" />
      <p className="font-medium">Todo el stock está en orden</p>
      <p className="text-sm text-emerald-600 mt-1">
        No hay productos con existencias por debajo del umbral ({umbral}).
      </p>
    </div>
    ```

---

### Pregunta 4: En Configuración, ¿el teléfono y la serie se validan antes de enviar, o salta un error del servidor? Y, ¿qué hace el botón de consultar RUC?
- **Diagnóstico:** `[HECHO]`
  1. **Validación previa en Frontend:** Tanto las series de comprobantes (`/^[A-Z]\d{3}$/`) como el teléfono (`/^(9\d{8}|0\d{1,3}-?\d{6,7})$/`) se validan en el cliente antes de emitir la llamada HTTP ([`client/src/pages/ConfiguracionPage.jsx:89-104`](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/pages/ConfiguracionPage.jsx#L89-L104)). Si fallan, se detiene el envío y se lanza un `toast.error` descriptivo (*«Serie boleta inválida (formato: B001)»*, *«Teléfono inválido...»*). El backend en [`server/src/controllers/configuracion.controller.js:53-67`](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/server/src/controllers/configuracion.controller.js#L53-L67) contiene validaciones espejo.
  2. **Acción de «Consultar RUC»:** Invoca el endpoint `GET /consulta/ruc/:ruc` ([`client/src/pages/ConfiguracionPage.jsx:65-87`](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/pages/ConfiguracionPage.jsx#L65-L87)). Si el servicio externo/mock responde con éxito:
     - Autocompleta automáticamente los campos `nombre_empresa` (razón social oficial) y `direccion`.
     - Muestra un toast: *«Datos obtenidos de SUNAT»*.
     - Bloquea la edición manual arbitraria del campo de la razón social marcándolo como `readOnly={!!form.nombre_empresa}` ([`client/src/pages/ConfiguracionPage.jsx:124-129`](file:///c:/Users/walte/Downloads/minimarket-main/minimarket-main/client/src/pages/ConfiguracionPage.jsx#L124-L129)).

---

## 2. Tratamiento y Sincronización de Residuos (R1 a R6)

| ID | Hallazgo / Reclamo | Estado de Verificación y Aplicación |
|---|---|---|
| **R1** | `03_EPIC-INV.md:169` y Consolidado `:1506` decían *«registradas»*. | `[HECHO]` Corregido a **«No hay ajustes registrados»** en ambos documentos conforme al código (`AjustesInventarioPage.jsx:136`). |
| **R2** | RN-14 indicaba que el costo estaba "deshabilitado". | `[HECHO]` Corregido en `08_Reglas_de_Negocio_y_Glosario.md:34,56` y Consolidado `:4284,4306`. Se documenta formalmente que los formularios de Entradas y Completar Solicitud **no poseen campo de costo en la UI** (envían valor `null` por defecto), dejando inactiva la actualización de valorización en pantalla. |
| **R3** | HU-VEN-08 clasificada como Won't have pero persistía en satélites. | `[HECHO]` Se alineó en `00_Product_Backlog_Priorizado.md`, `06_Sprint_Backlog.md`, `07_Desglose_de_Tareas_Task_Breakdown.md` (cancelada con 0.00 h), `Anexo_A.md` (0 h / S/ 0.00) y Consolidado. |
| **R4** | Menciones a exportación "CSV" en HU-VEN-08. | `[HECHO]` Se reclasificó en `11_Matriz_Trazabilidad_UI.md:144,180` precisando que la historia era PDF y ha quedado unificada y absorbida en `HU-REP-09` (Reportes). |
| **R5** | `10_Registro_Deuda_Tecnica_y_Brechas.md:91-93` vinculaba HU-VEN-08. | `[HECHO]` Actualizada la decisión D11 para reflejar que la exportación PDF comercial masiva se centraliza en `HU-REP-09`. |
| **R6** | Propagación de vacíos y textos en Anexo B y Matriz. | `[HECHO]` Verificado exhaustivamente: el único texto de vacío con la palabra "usuarios" se encuentra en `UI-005` (Usuarios/EPIC-SEG), lo cual es 100% exacto con `UsuariosPage.jsx:161`. |

---

## 3. Matriz de Ajustes Aplicados en EPIC-REP y Consolidado (F5-01 a F5-09)

| Hallazgo | HU Impactada | Ajuste Documental Aplicado | Evidencia en Código |
|---|---|---|---|
| **F5-01** | `HU-REP-07`, `HU-REP-08` | Se agregó una nota formal de advertencia operativa: el reporte de margen depende de costos registrados (`em.costo_unitario` no nulo en BD). Como la UI no pide costos (R2/RN-14), con datos de pantalla el reporte resulta vacío con el aviso: *«Sin datos de costo en el período...»*. | `reportes.controller.js:283` (`WHERE em.costo_unitario IS NOT NULL`), `ReportesPage.jsx:548-552` |
| **F5-02** | `HU-REP-08` CA1-CA2 | Se corrigió el cálculo de valorización de mermas: utiliza `COALESCE(em.costo_unitario, p.costo_promedio, 0)`. Con costos nulos, el total valorizado se muestra como `S/ 0.00`. | `reportes.controller.js:332-333` |
| **F5-03** | `HU-REP-08` CA1 | Se corrigieron los motivos de merma a los 6 valores reales: `Vencido`, `Dañado`, `Robo o faltante`, `Consumo interno`, `Error de registro`, `Otro`. | `server/src/db/init.sql:84`, `MermasPage.jsx:106` |
| **F5-04** | `HU-REP-05` CA2 | Se eliminó la mención de "código de producto" de la grilla de stock crítico. Columnas reales: Producto, Marca, Categoría, Stock actual y Mínimo aplicado. | `ReportesPage.jsx:672-680` |
| **F5-05** | `HU-REP-01..05`, `HU-DASH-01..03` | Se sincronizaron todos los estados vacíos literales: Reportes: *«No hay datos de ventas aún»*, *«No hay ventas en el período seleccionado»*, *«No hay datos de ventas en el período seleccionado»*, *«Todo el stock está en orden»*. Dashboard: *«No hay ventas registradas este mes.»*, *«No hay ingresos registrados este mes.»*, *«No hay productos sin stock. ✓»*, *«No hay solicitudes pendientes. ✓»*. | `ReportesPage.jsx:368,432,492,665`, `DashboardPage.jsx:218,237,284,302` |
| **F5-06** | `HU-REP-02` CA1 | Se precisó que en Reportes el Top es configurable entre 5 y 10 productos, mientras que en Dashboard se muestra estáticamente el Top 5. | `ReportesPage.jsx:451-456`, `DashboardPage.jsx:254` |
| **F5-07** | `HU-REP-07` CA3 | Se retiró la especificación de orden interactivo de la grilla; el orden es predeterminado por ganancia bruta descendente desde el API. | `reportes.controller.js:296`, `ReportesPage.jsx:516-526` |
| **F5-08** | `HU-REP-06` CA1 | Se especificó que la API expone 5 conteos de inventario, pero en UI del Dashboard solo se presentan 3 tarjetas visibles (Productos Activos, Sin Stock y Solicitudes Pendientes). | `DashboardPage.jsx:205-245` |
| **F5-09** | `HU-DASH-01` CA4 | Se documentó la existencia real del modal interactivo de desglose de métricas financieras al cliquear las tarjetas, con tablas de Cliente/Vendedor y método de pago. | `DashboardPage.jsx:92-198` |
