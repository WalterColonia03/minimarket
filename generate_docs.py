import json

# Data setup (Sprint, Code, Title, Pri, Pts, C_Dev, V_Dev)
hu_data = [
    ("HU-AUTH-01", "Autenticación – Iniciar sesión", 4, 5, "Castillo", "Alcalde", 1),
    ("HU-CAT-02", "Categorías – Crear nueva categoría de productos", 4, 2, "Nolasco", "Alcalde", 1),
    ("HU-PROD-02", "Productos – Registrar nuevo producto en el catálogo", 4, 5, "Velasquez", "Alcalde", 1),
    ("HU-PROV-02", "Proveedores – Registrar nuevo proveedor", 4, 3, "Velasquez", "Castillo", 1),
    ("HU-INV-01", "Inventario – Registrar entrada de mercadería", 4, 5, "Castillo", "Alcalde", 1),
    ("HU-CAJA-01", "Caja – Abrir turno de caja", 4, 5, "Nolasco", "Alcalde", 1),
    ("HU-VEN-01", "Ventas (POS) – Registrar una venta con Efectivo o Yape", 4, 13, "Castillo", "Alcalde", 1),
    ("HU-VEN-02", "Ventas (POS) – Emitir boleta o factura", 4, 8, "Nolasco", "Alcalde", 1),
    ("HU-USR-02", "Usuarios – Crear cuenta de nuevo empleado", 4, 5, "Velasquez", "Alcalde", 1),
    ("HU-CONF-02", "Configuración – Actualizar configuración del negocio", 4, 3, "Nolasco", "Velasquez", 1),

    ("HU-CAJA-02", "Caja – Cerrar turno de caja y cuadrar", 4, 5, "Nolasco", "Alcalde", 2),
    ("HU-CAJA-05", "Caja – Consultar historial de turnos de caja", 4, 3, "Nolasco", "Alcalde", 2),
    ("HU-CAT-01", "Categorías – Ver lista de categorías de productos", 4, 1, "Castillo", "Velasquez", 2),
    ("HU-PROD-01", "Productos – Ver catálogo completo de productos", 4, 3, "Castillo", "Velasquez", 2),
    ("HU-PROV-01", "Proveedores – Ver lista de proveedores", 4, 2, "Castillo", "Nolasco", 2),
    ("HU-USR-01", "Usuarios – Listar empleados del sistema", 4, 2, "Castillo", "Nolasco", 2),
    ("HU-CONF-01", "Configuración – Ver configuración actual del negocio", 4, 1, "Castillo", "Nolasco", 2),
    ("HU-DASH-01", "Dashboard – Ver resumen de ventas del día y del mes", 4, 5, "Nolasco", "Alcalde", 2),
    ("HU-INV-02", "Inventario – Registrar baja de inventario por merma", 4, 5, "Velasquez", "Alcalde", 2),
    ("HU-INV-03", "Inventario – Realizar ajuste por conteo físico", 4, 5, "Velasquez", "Alcalde", 2),
    ("HU-REP-01", "Reportes – Ver resumen de ventas por período", 4, 5, "Nolasco", "Alcalde", 2),
    ("HU-SOL-01", "Reposición – Crear solicitud de reposición", 4, 3, "Velasquez", "Alcalde", 2),
    ("HU-SOL-02", "Reposición – Listar solicitudes con filtro por estado", 4, 2, "Velasquez", "Alcalde", 2),
    ("HU-SOL-03", "Reposición – Aprobar solicitud de reposición", 4, 3, "Velasquez", "Alcalde", 2),
    ("HU-CLI-02", "Clientes – Registrar cliente automáticamente al vender", 4, 3, "Castillo", "Alcalde", 2),
    ("HU-PROD-06", "Productos – Consultar productos próximos a vencer", 4, 3, "Castillo", "Alcalde", 2),
    ("HU-USR-04", "Usuarios – Desactivar cuenta de empleado", 4, 3, "Castillo", "Alcalde", 2),

    ("HU-AUTH-02", "Autenticación – Bloquear cuenta por intentos fallidos", 4, 3, "Velasquez", "Alcalde", 3),
    ("HU-AUTH-03", "Autenticación – Cerrar sesión", 4, 2, "Velasquez", "Alcalde", 3),
    ("HU-AUTH-04", "Autenticación – Garantizar sesión única por usuario", 4, 8, "Velasquez", "Alcalde", 3),
    ("HU-DASH-03", "Dashboard – Alertas de stock crítico, vencimientos y turnos olvidados", 4, 5, "Nolasco", "Alcalde", 3),
    ("HU-REP-02", "Reportes – Ver ranking de productos más vendidos", 4, 3, "Velasquez", "Alcalde", 3),
    ("HU-REP-05", "Reportes – Ver stock crítico", 4, 3, "Castillo", "Alcalde", 3),
    ("HU-SOL-05", "Reposición – Completar solicitud al recibir mercadería", 4, 8, "Castillo", "Alcalde", 3),
    ("HU-VEN-05", "Ventas (POS) – Consultar historial de ventas", 4, 5, "Nolasco", "Alcalde", 3),
    ("HU-VEN-06", "Ventas (POS) – Anular una venta con devolución", 4, 8, "Nolasco", "Alcalde", 3),

    ("HU-CAJA-03", "Caja – Registrar movimiento manual de efectivo", 3, 3, "Nolasco", "Alcalde", 4),
    ("HU-CAJA-04", "Caja – Ver resumen del turno activo", 3, 2, "Nolasco", "Alcalde", 4),
    ("HU-CAJA-06", "Caja – Aprobar cierre de turno", 3, 2, "Nolasco", "Alcalde", 4),
    ("HU-CAT-03", "Categorías – Editar nombre o descripción de categoría", 3, 1, "Nolasco", "Alcalde", 4),
    ("HU-CLI-01", "Clientes – Listar clientes registrados", 3, 2, "Castillo", "Velasquez", 4),
    ("HU-INV-04", "Inventario – Consultar historial de entradas", 3, 2, "Velasquez", "Alcalde", 4),
    ("HU-INV-05", "Inventario – Consultar historial de bajas", 3, 2, "Velasquez", "Alcalde", 4),
    ("HU-INV-06", "Inventario – Consultar historial de ajustes", 3, 2, "Velasquez", "Alcalde", 4),
    ("HU-LOG-01", "Auditoría – Consultar registro de accesos al sistema", 3, 3, "Velasquez", "Alcalde", 4),
    ("HU-PROD-04", "Productos – Editar datos de un producto", 3, 3, "Castillo", "Alcalde", 4),
    ("HU-PROD-05", "Productos – Desactivar o reactivar producto", 3, 2, "Castillo", "Alcalde", 4),
    ("HU-PROV-03", "Proveedores – Editar datos de un proveedor", 3, 2, "Castillo", "Alcalde", 4),
    ("HU-PROV-04", "Proveedores – Desactivar o reactivar proveedor", 3, 2, "Castillo", "Nolasco", 4),
    ("HU-REP-03", "Reportes – Ver ventas desglosadas por día", 3, 3, "Velasquez", "Alcalde", 4),
    ("HU-REP-04", "Reportes – Ver ventas por método de pago", 3, 2, "Velasquez", "Alcalde", 4),
    ("HU-REP-06", "Reportes – Ver resumen general del inventario", 3, 2, "Velasquez", "Alcalde", 4),
    ("HU-REP-08", "Reportes – Ver mermas agrupadas por motivo", 3, 3, "Velasquez", "Alcalde", 4),
    ("HU-SOL-04", "Reposición – Rechazar solicitud de reposición", 3, 2, "Castillo", "Nolasco", 4),
    ("HU-USR-03", "Usuarios – Editar datos de un empleado", 3, 3, "Castillo", "Alcalde", 4),
    ("HU-USR-05", "Usuarios – Reactivar cuenta de empleado", 3, 2, "Castillo", "Nolasco", 4),
    ("HU-VEN-03", "Ventas (POS) – Generar comprobante en PDF", 3, 5, "Nolasco", "Alcalde", 4),
    ("HU-VEN-04", "Ventas (POS) – Buscar producto por código de barras", 3, 3, "Nolasco", "Alcalde", 4),
    ("HU-VEN-07", "Ventas (POS) – Verificar recepción de pago Yape", 3, 2, "Nolasco", "Alcalde", 4),

    ("HU-AUTH-05", "Autenticación – Recuperar contraseña por correo", 3, 5, "Velasquez", "Alcalde", 5),
    ("HU-AUTH-06", "Autenticación – Cambiar contraseña propia", 3, 3, "Velasquez", "Alcalde", 5),
    ("HU-CAJA-07", "Caja – Forzar cierre de turno ajeno", 3, 5, "Nolasco", "Alcalde", 5),
    ("HU-DASH-02", "Dashboard – Ver gráfico de evolución de ventas por día", 3, 3, "Nolasco", "Alcalde", 5),
    ("HU-DASH-04", "Dashboard – Ver ranking de productos más vendidos", 3, 3, "Nolasco", "Alcalde", 5),
    ("HU-DASH-05", "Dashboard – Ver solicitudes de reposición pendientes", 3, 2, "Nolasco", "Alcalde", 5),
    ("HU-REP-07", "Reportes – Ver margen de ganancia por producto", 3, 5, "Velasquez", "Alcalde", 5),
    ("HU-USR-06", "Usuarios – Forzar cierre de sesión remoto", 3, 3, "Castillo", "Alcalde", 5),
    ("HU-CAT-04", "Categorías – Eliminar categoría sin productos", 2, 2, "Castillo", "Alcalde", 5),
    ("HU-CLI-03", "Clientes – Editar correo electrónico de cliente", 2, 1, "Nolasco", "Alcalde", 5),
    ("HU-PROD-03", "Productos – Escanear código de barras para registrar producto", 2, 5, "Castillo", "Alcalde", 5),
    ("HU-REP-09", "Reportes – Exportar reportes en PDF", 2, 3, "Velasquez", "Alcalde", 5),
    ("HU-VEN-08", "Ventas (POS) – Exportar historial de ventas a CSV", 2, 3, "Castillo", "Alcalde", 5)
]

def get_tasks(pts, is_first=False):
    if is_first:
        return [
            ("Configurar entorno", "Configuración", "C", 1.0),
            ("Diseñar BD", "Diseño", "C", 1.0),
            ("Implementar BD", "Codificación", "C", 1.0),
            ("Desarrollar interfaces", "Diseño/Cod.", "C", 1.0),
            ("Codificar", "Codificación", "C", 2.0),
            ("Probar de unidad", "Test", "V", 2.0),
            ("Depuración", "Codificación", "C", 1.0),
            ("Desplegar en la web", "Configuración", "V", 1.0)
        ]
    if pts == 1:
        return [("Codificar", "Codificación", "C", 1.0), ("Probar de unidad", "Test", "V", 1.0)]
    elif pts == 2:
        return [("Codificar", "Codificación", "C", 2.0), ("Probar de unidad", "Test", "V", 1.0), ("Depuración", "Codificación", "C", 1.0)]
    elif pts == 3:
        return [("Desarrollar interfaces", "Diseño/Cod.", "C", 1.0), ("Codificar", "Codificación", "C", 2.0), ("Probar de unidad", "Test", "V", 2.0), ("Depuración", "Codificación", "C", 1.0)]
    elif pts == 5:
        return [("Desarrollar interfaces", "Diseño/Cod.", "C", 2.0), ("Codificar", "Codificación", "C", 3.5), ("Probar de unidad", "Test", "V", 3.0), ("Depuración", "Codificación", "C", 1.5)]
    elif pts == 8:
        return [("Desarrollar interfaces", "Diseño/Cod.", "C", 3.0), ("Codificar", "Codificación", "C", 6.0), ("Probar de unidad", "Test", "V", 3.0), ("Depuración", "Codificación", "C", 3.0), ("Desplegar en la web", "Configuración", "V", 1.0)]
    elif pts == 13:
        return [("Desarrollar interfaces", "Diseño/Cod.", "C", 4.0), ("Codificar", "Codificación", "C", 10.0), ("Probar de unidad", "Test", "V", 5.0), ("Depuración", "Codificación", "C", 5.0), ("Desplegar en la web", "Configuración", "V", 2.0)]
    return []

def resolve_name(apellido):
    mapping = {
        "Castillo": "Des.3 - Castillo",
        "Nolasco": "Des.2 - Nolasco",
        "Velasquez": "Des.1 - Velasquez",
        "Alcalde": "Des.4 - Alcalde"
    }
    return mapping.get(apellido, apellido)

total_tasks = 0

md_07 = """---
Código: DOC-PLAN-07
Título: Desglose de Tareas (Task Breakdown)
Versión: 2.0
Fecha: 2026-09-28
Elaborado por: Angeles Pérez, Jhonny
Revisado por: Colonia Infantas, Walter
Estado: Aprobado
Propósito: Desglose detallado de tareas por historia de usuario
---

# 07. Desglose de Tareas (Task Breakdown)

"""

for sp in range(1, 6):
    sp_hus = [h for h in hu_data if h[6] == sp]
    md_07 += f"## Sprint {sp}\n\n"
    
    sum_c, sum_v, sum_t = 0, 0, 0
    
    for hu in sp_hus:
        code, title, pri, pts, c_dev, v_dev, _ = hu
        is_first = (code == "HU-AUTH-01")
        tasks = get_tasks(pts, is_first)
        
        md_07 += f"### {code}: {title}\n"
        md_07 += "| ID | Tarea | Tipo | Estado | Responsable | Tiempo (h) | Predecesora |\n"
        md_07 += "|---|---|---|---|---|---|---|\n"
        
        hu_c, hu_v = 0, 0
        
        for i, t in enumerate(tasks):
            t_name, t_type, t_role, t_time = t
            t_id = f"TAR-{code}-{(i+1):02d}"
            resp = resolve_name(c_dev) if t_role == "C" else resolve_name(v_dev)
            
            if t_role == "C": hu_c += t_time
            else: hu_v += t_time
            
            pred = f"TAR-{code}-{(i):02d}" if i > 0 else "Ninguna"
            md_07 += f"| {t_id} | {t_name} | {t_type} | Pend. | {resp} | {t_time} | {pred} |\n"
            total_tasks += 1
            sum_t += 1
            
        md_07 += f"\n**Subtotal {code}:** {hu_c} h Construcción, {hu_v} h Verificación. Total: {hu_c + hu_v} h.\n\n"
        sum_c += hu_c
        sum_v += hu_v
        
    md_07 += f"**Total Sprint {sp}:** {len(sp_hus)} HUs, {sum_t} tareas. {sum_c} h Construcción + {sum_v} h Verificación = {sum_c + sum_v} h.\n\n"

md_07 += "## Resumen de Tareas\n"
md_07 += f"**Total de tareas:** {total_tasks}\n"

with open("docs/planificacion-scrum/07_Desglose_de_Tareas_Task_Breakdown.md", "w", encoding="utf-8") as f:
    f.write(md_07)
