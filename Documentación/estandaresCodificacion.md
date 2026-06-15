# Estándares de codificación

## 1. Objetivo
El presente documento establece las normas y buenas prácticas para el desarrollo de software con el fin de mantener un código uniforme, legible, mantenible y fácil de comprender por cualquier integrante del equipo.

## 2. Convenciones de nombres
### Variables 
- Deben utilizar nombres descriptivos que indiquen claramente su propósito.
- Se utilizará la convencion camelCase.
- Ejemplos:
    - `nombreUsuario`
    - `fechaNacimiento`
    - `cantidadProductos`
### Constantes
- Se escribirán en **MAYÚSCULAS** utilizando guiones bajos para separar palabras.
- Ejemplos
    - `TIEMPO_ESPERA`
### Funciones
- Deben comenzar con un verbo que describa la acción que realizan.
- Se utilizará camelCase.
- Ejemplos:
    - `obtenerDatos()`
    - `calcularTotal()`
    - `validarFormulario()`
### Clases
- Utilizarán la convención PascalCase.
-Ejemplos:
    - `Usuario`
    - `GestorPedidos`
## 3. Sangria y formato
- Utilizar una indentación de 4 espacios (o 2 espacios si el proyecto así lo requiere).
- No mezclar espacios y tabulaciones.
- Cada bloque debe estar correctamente alineado.
- Se debe dejar una línea en blanco entre funciones para mejorar la lectura.
## 4. Comentarios
- Comentar únicamente cuando el código no sea suficientemente claro por sí mismo.
- Evitar comentarios redundantes.
- Actualizar los comentarios cuando cambie la funcionalidad.
## 5.
Evitar nombres genéricos como:
- `x`
- `dato`
- `temp`
- `var1`
## 5. Organizacion del codigo
- Mantener funciones pequeñas y con una única responsabilidad.
- Evitar duplicación de código.
- Reutilizar funciones cuando sea posible.
- Separar la lógica de negocio de la interfaz.
## 6. Validacion de datos
- Validar siempre las entradas del usuario.
- Manejar adecuadamente los posibles errores.
- Evitar asumir que los datos recibidos son correctos.
## 7. Estilo para HTML
- Utilizar etiquetas semánticas
- Mantener una correcta indentación.
- Utilizar nombres de clases descriptivos.
- Evitar estilos en línea.
## 8. Estilo para CSS
- Agrupar propiedades relacionadas.
- Utilizar nombres de clases claros y consistentes.
- Evitar reglas duplicadas.
- Priorizar clases sobre identificadores para aplicar estilos.
## 9. Estilo para JavaScript
- Evitar el uso de variables globales.
- Utilizar funciones reutilizables.
- Mantener una estructura modular.
## 10. Control de versiones
- Realizar commits frecuentes y descriptivos.
- Utilizar mensajes claros indicando qué cambio se realizó.
- Evitar subir archivos temporales o innecesarios.
## 11. Revisión del código
Antes de integrar cambios se deberá verificar que:
    - El código compile o funcione correctamente.
    - No existan errores de sintaxis.
    - Se respeten las convenciones establecidas.
    - Se elimine código comentado o sin uso.
    - Se hayan realizado pruebas básicas del funcionamiento.
## 12. Gestión de ramas
Para facilitar el trabajo colaborativo y evitar conflictos durante el desarrollo, cada nueva funcionalidad, corrección o mejora deberá realizarse en una rama independiente.
### Organización de ramas
- La rama main será la rama principal del proyecto y contendrá únicamente versiones estables y funcionales.
- Todo el trabajo de desarrollo deberá realizarse en ramas específicas según el tipo de tarea:
    -`feature/`-> Desarrollo de nuevas funcionalidades.
    -`bugfix/`-> Corrección de errores detectados durante el desarrollo.
    -`docs/`-> Modificaciones o incorporación de documentación.
    -`refactor/`-> Mejoras en la estructura o calidad del código sin alterar su funcionamiento.
    -`test/`-> Creación o modificación de pruebas.
### Convención de nombres
Las ramas deberán seguir el siguiente formato:

tipo/nombre-descriptivo

Ejemplos:

    - feature/registro-usuarios
    - feature/alta-empleados
    - bugfix/error-validacion-cedula
    - hotfix/menu-responsive
    - docs/estandares-codificacion
    - refactor/optimizacion-consultas
    - test/pruebas-formulario

Cuando exista un identificador de tarea o incidencia, podrá incluirse al inicio del nombre:

    - feature/15-registro-usuarios
    - bugfix/22-error-login
### Flujo de trabajo
- No se desarrollarán cambios directamente sobre **main**.
- Cada integrante creará una rama para la tarea que tenga asignada.
- Al finalizar el desarrollo, los cambios deberán revisarse antes de fusionarse con **main**.
- Una vez completada la integración, la rama podrá eliminarse para mantener el repositorio limpio y organizado.

Este esquema facilita el trabajo simultáneo entre los integrantes del equipo, mejora la trazabilidad de los cambios y reduce la posibilidad de conflictos durante las fusiones.