# Estandares de codificacion
## 1. Objetvivo
El presente documento establece las normas y buenas prácticas para el desarrollo de software con el fin de mantener un código uniforme, legible, mantenible y fácil de comprender por cualquier integrante del equipo.

## 2. Convencion de nombres
- Revelar intención: 
     Un nombre debe indicar por qué existe, qué hace y cómo se usa
- Evitar deisnformacion:
    No usar palabras que tengan un significado concreto (ej. List)
- Nombres buscables:
    No usar nombres execiamente cortos para poder buscarlos.Las variables de una sola letra (como `i`) solo deben usarse dentro de métodos muy breves
- Evitar nombres genéricos como:
    - `x`
    - `dato`
    - `temp`
    - `var1`
### Variables
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
### Ramas
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
---
Cuando exista un identificador de tarea o incidencia, podrá incluirse al inicio del nombre:

    - feature/15-registro-usuarios
    - bugfix/22-error-login

## 3. Sangria y formato
- Utilizar 1 tabuacion por cada nivel de indentacion
- No mezclar espacios y tabulaciones en un mismo archivo.
- Cada bloque debe estar correctamente alineado.
- Se debe dejar una línea en blanco entre funciones o bloques para mejorar la lectura.

## 4. Comentarios
- Comentar únicamente cuando no se encuentren maneras de expresar algo en el codigo
- Los comentarios deben ser claros
- Evitar comentarios redundantes.
- Actualizar los comentarios cuando cambie la funcionalidad.

## 5. Organizacion del codigo
- Mantener funciones pequeñas y con una única responsabilidad.
- Evitar duplicación de código.
- Reutilizar funciones cuando sea posible.
- Separar la lógica de negocio de la interfaz.
- Las funciones deben hacer algo o responder algo, pero no ambas cosas. Es decir una misma funcion puede alterar el estado de un objeto o mostrar informacion del mismo, no las dos cosas
- No pasar un argumento booleano a una funcion, porque esto indicaria que la funcion hace más de una cosa

## 6. Validacion de datos
- Validar siempre las entradas del usuario.
- Manejar adecuadamente los posibles errores.
- Evitar asumir que los datos recibidos son correctos.

## 7. Estilo para HTML
- Utilizar etiquetas semánticas
- Mantener una correcta indentación.
- Utilizar nombres de clases descriptivos.
- Evitar estilos en línea.
- utilizar id para moddificaciones puntuales o integracion con Javascript

## 8.Estilo para CSS
- Utilizar nombres de clases claros y consistentes.
- Evitar reglas duplicadas.
- Priorizar clases sobre identificadores para aplicar estilos.
## 9. Estilo para JavaScript
- Declarar variables con `const` cuando no cambien y `let` cuando sea necesario.
- Minimizar el uso de variables globales. Solo deberán utilizarse cuando sea necesario para mantener el estado general de la aplicación y no exista una alternativa más adecuada.
- Utilizar funciones reutilizables.
- Mantener una estructura modular.
- Utilizar identificadores en lugar de clases.

## 10. Revisión del código
Antes de integrar cambios se deberá verificar que:
    - El código compile o funcione correctamente.
    - No existan errores de sintaxis.
    - Se respeten las convenciones establecidas.
    - Se elimine código comentado o sin uso.
    - Se hayan realizado pruebas básicas del funcionamiento.
    - No contenga codigo duplicado  y se mantengan al minimo el numero de clases y metodos 
    - Sea claramente legible.
---
La revisión por pares no solo verificará la funcionalidad, sino también la limpieza del código, asegurando que se hayan eliminado nombres desinformativos, funciones excesivamente largas (ideal < 20 líneas) y cualquier duplicación innecesaria.

## 11. Gestión de ramas
Para facilitar el trabajo colaborativo y evitar conflictos durante el desarrollo, cada nueva funcionalidad, corrección o mejora deberá realizarse en una rama independiente.
### Organización de ramas
- Se creara una rama por cada funcionalidad.
- En caso de que el codigo este desordenado crear una rama `refractor/` especifica para limpiarlo antes de implementar codigo nuevo.
- La rama main será la rama principal del proyecto y contendrá únicamente versiones estables y funcionales.


### Flujo de trabajo
- No se desarrollarán cambios directamente sobre `main`.
- Cada integrante creará una rama para la tarea que tenga asignada.
- Al finalizar el desarrollo, los cambios deberán revisarse antes de fusionarse con `main`.
- Una vez completada la integración, la rama podrá eliminarse para mantener el repositorio limpio y organizado.
---
Este esquema facilita el trabajo simultáneo entre los integrantes del equipo, mejora la trazabilidad de los cambios y reduce la posibilidad de conflictos durante las fusiones.
### Políticas de Integración y Etiquetado:
- **Criterio de Integración:**
Una rama solo podrá fusionarse con main si tiene una cobertura de pruebas completa y el código ha sido refactorizado para eliminar duplicados y mejorar la legibilidad.
- **Refactorización Obligatoria:**
Como parte del concepto de "Terminado", cada desarrollador debe dedicar tiempo a limpiar el código antes de solicitar el merge
- **Etiquetado:**
Los nombres de las etiquetas deben ser precisos y seguir el estándar de versión acordado por el equipo para evitar la desinformación.
usar etiquetas que identifiuen claramente el estado del software (ej. `v1.0.0-stable``v2.1.0-beta`) y evitar etiquetas ambiguas.
## 12. Formato de commits

Con el objetivo de mantener un historial claro y facilitar el seguimiento de cambios, todos los commits deberán seguir la convención [Conventional Commits.](https://gist.github.com/qoomon/5dfcdf8eec66a051ecd85625518cfd13)
### Estructura

Cada mensaje de commit deberá respetar el siguiente formato:

tipo(alcance-opcional): descripción
---
El alcance es opcional y permite indicar el módulo o componente afectado.
---
Ejemplos:

feat(login): agregar validación de contraseña

fix(empleados): corregir error al eliminar registros

docs(estandares): actualizar documento de codificación

refactor(tabla): simplificar lógica de edición
### Tipos de commit
- `feat`-> Agrega una nueva funcionalidad.
- `fix`-> Corrige un error.
- `refactor`-> Reestructura código sin modificar su comportamiento.
- `perf`-> Mejora el rendimiento.
- `style`-> Cambios de formato o estilo que no afectan el funcionamiento.
- `test`-> Agrega o modifica pruebas.
- `docs`-> Modificaciones de documentación.
- `build`-> Cambios relacionados con dependencias o herramientas de construcción.
- `chore`-> Tareas de mantenimiento que no encajan en las categorías anteriores.
### Descripcion
Descripción

La descripción deberá:

- Ser breve y clara.
- Comenzar con un verbo en infinitivo.
- Describir qué cambio se realizó.
- Escribirse en minúsculas cuando sea posible.
- No finalizar con punto.

Ejemplos correctos:

feat(empleados): agregar búsqueda por cédula

fix(tabla): corregir ordenamiento de filas

Ejemplos incorrectos:

Cambios varios

Arreglé un bug

Update files

### Buenas prácticas:
- Realizar commits pequeños y enfocados en una única tarea.
- Evitar commits que mezclen funcionalidades diferentes.
- Escribir mensajes descriptivos que permitan comprender rápidamente el propósito del cambio.
- Realizar commits frecuentes durante el desarrollo.
