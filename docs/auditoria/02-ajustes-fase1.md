# Auditoría y Ajuste Documental - Fase 1 (Seguridad y Accesos)

**Fecha:** 2026-10-04
**Objetivo:** Adaptar los Criterios de Aceptación y Reglas de Negocio en la planificación Scrum de la Épica de Seguridad para que coincidan 100% con la interfaz del sistema implementado, basados en el reporte de QA Funcional.

## Ajustes Realizados

### D-01 y D-02: Mensajes de credenciales y cuentas inactivas
*   **Problema:** Los documentos especificaban diferentes mensajes ("Credenciales inválidas...", o indicación de cuenta inactiva). 
*   **Solución:** Se unificó todo bajo el mensaje exacto de la UI: *"Credenciales incorrectas"*, eliminando las referencias a contactar al administrador que no existen visualmente en la web.

### D-03: Bloqueo por intentos (RN-17)
*   **Problema:** La interfaz bloquea en el 6.º intento (tras 5 fallos) y no tiene ventana de acumulación de 15 minutos ni contador.
*   **Solución:** Se ajustó la RN-17 y la HU-AUTH-02 para describir que: *"El sistema bloqueará la cuenta por 15 minutos si acumula 5 intentos fallidos consecutivos. Al intentar ingresar nuevamente, se mostrará el mensaje «Cuenta bloqueada temporalmente. Intente en 15 minutos.»"*

### D-04: Expiración de Sesión (HU-AUTH-03)
*   **Problema:** No hay mensaje de caducidad; dura 7 días y solo redirige.
*   **Solución:** Se eliminó la alusión a "inactividad operativa prolongada" y avisos de expiración, especificando que a los 7 días se redirige al login de nuevo sin mensaje de alerta.

### D-05 y D-10: Cambio de contraseña propia (HU-AUTH-06)
*   **Problema:** La HU existía pero no hay botón ni modal visible.
*   **Solución:** Como se acordó, se marcó como `HU-AUTH-06 (Cancelada)` en la documentación para reflejar que no forma parte del alcance observable de esta entrega, manteniendo las reglas solo para recuperación externa y creación.

### D-06: Búsqueda y Vacío de Usuarios (HU-USR-01)
*   **Problema:** No hay barra de búsqueda por texto, solo filtros de select. El mensaje vacío era distinto.
*   **Solución:** Se especificó que la búsqueda se hace seleccionando *"un filtro de rol o de estado"*, y el mensaje de vacío se ajustó a *"No hay usuarios registrados"*.

### D-07: Vigencia de cambio de Rol (HU-USR-03)
*   **Problema:** Rige de inmediato en la pantalla, aunque el documento decía "al próximo login".
*   **Solución:** Modificado a *"a partir de su siguiente acción en el sistema"*.

### D-08: Sesión Forzada (HU-USR-06)
*   **Problema:** Diferencia mínima de sintaxis.
*   **Solución:** Se estandarizó el texto al que sale en UI: *"Un Administrador Principal cerró tu sesión."*

### D-09: Trazabilidad de Logs (HU-LOG-01)
*   **Problema:** Había filtros documentados como Login/Logout (en UI son Ingreso/Salida) y faltaba documentar el filtro por usuario.
*   **Solución:** Se agregaron los tipos correctos (*Ingreso, Salida u Otro*) y se incluyó explícitamente el filtro por nombre de usuario. Se corrigió el mensaje vacío a *"No se encontraron registros"*.

### Corrección General ("SuperAdmin")
*   **Problema:** Claude notó diferencias entre Administrador y SuperAdmin.
*   **Solución:** Se realizó un reemplazo global en los documentos para renombrar al "SuperAdmin" como **"Administrador Principal"**, de modo que empate con el nombre del usuario y su jerarquía sin causar dudas durante la evaluación.


### Actualización Post-Revisión (D-01, D-09 y SuperAdmin)
*   **D-01 (Mensaje de Login):** Se actualizó para reflejar con precisión el comportamiento visual donde la página recarga tras el mensaje: *"entonces el sistema deniega el acceso y recarga la pantalla de ingreso; el mensaje «Credenciales incorrectas» se muestra solo un instante."*
*   **D-09 (Columna Detalle):** Se ajustó el Criterio de Aceptación 2 para especificar que la columna Detalle solo lleva texto cuando hay un evento justificable (*"y, cuando corresponde, un detalle del suceso"*).
*   **SuperAdmin vs Administrador Principal:** Se revirtió el renombrado de Administrador Principal a SuperAdmin, ya que el sistema efectivamente maneja el rol de SuperAdmin de manera interna y exclusiva para la creación de usuarios, diferenciándolo del Administrador (solo lectura de usuarios). Esta separación ya estaba correctamente descrita en la planificación, por lo que el Criterio Original era el adecuado.
