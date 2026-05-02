# Etiquetas relevantes

- `<!DOCTYPE html>`: Etiqueta princpal, indica que es una pagina de tipo HTML.

- `<html>...</html>`: Almacena todo el contenido de la pagina, incluyendo lo visual y los metadatos. Se utiliza la etiqueta `lang` para indicar el lenguaje de la pagina.

- `<head></head>`: Contiene metadatos y enlaces a recursos externos (Son las isntrucciones que necesita el navegador para cargar el proyecto).

- `<title></title>`: Este va dentro de la etiqueta `head` y contiene el titulo de la pagina

- `<body></body>`: Contiene todo el contenido visible

- `<h1>...</h1>`: Te permite crear un encabezado, el 1 representa el tamaño más grande, por lo cual el tamaño de un encabezado va por niveles del 1 al 6.

- `<p>...</p>`: Crea un parrafo.

- `<img src="..." alt="...">`: Te permite subir una imagen ya descargada o el link de esta misma. Adentro de `src`, se tiene que especicar la fuente de donde proviene esa imagen y dentro de `alt` se debe de poner una descripción de la imagen.

- `<table> </table>`:Etiqueta contenedora que tendrá en su interior toda la tabla.
- `<tr>`Table Row. Etiqueta contenedora de cada fila de la tabla.
- `<td>` Table Data. Cada una de las celdas de la tabla.
- `<th>` Table Header. Cada una de las celdas de cabecera de la tabla.
- `<tbody>...</tbody>`: Etiqueta que se utiliza para agrupar el contenido del cuerpo de una tabla.
- `<theader>...<theader>`: Categorias de la tabla o encabezado.
- `<tfoot>...<tfoot>`: Pie de la tabla.
  
```<table>
  <tr>
    <th>Título columna 1</th> <!-- Celda cabecera de la columna 1 -->
    <th>Título columna 2</th> <!-- Celda cabecera de la columna 2 -->
    <th>Título columna 3</th> <!-- Celda cabecera de la columna 3 -->
  </tr>
  <!-- Primera fila -->
  <tr>
    <td>Celda 1x1</td> <!-- Primera celda de la primera fila -->
    <td>Celda 2x1</td> <!-- Segunda celda de la primera fila -->
    <td>Celda 3x1</td> <!-- Tercera celda de la primera fila -->
  </tr>
  <!-- Segunda fila -->
  <tr>
    <td>Celda 1x2</td> <!-- Primera celda de la segunda fila -->
    <td>Celda 2x2</td> <!-- Segunda celda de la segunda fila -->
    <td>Celda 3x2</td> <!-- Tercera celda de la segunda fila -->
  </tr>
</table>
```

- `<button>...</button>`: Te permite crear un boton.

- `<a>..</a>`: Se usa para poner hipervinculos en la pagina, para que funcione se debe usar el atributo `href`, que es donde se encuentra la direccion web a la que se dirigira.

Forma de usar:

`<a href="https://www.PaginaEjemplo.com/es-ES/"> la pagina de ejemplo </a>`

- `<blockquote>...</blockquote>`:
Se usa para citar un bloque de texto

-`<q>...</q>`: Hace citas cortas con comillas ("cita").

- `<code>...</code>`: Permite mostrar un fragmento de codigo
  
- `<cite>...</cite>`: Referencia a titulos. . .

- `<span>...<span>`: Texto breve

- `<figure>...</figure> & <figcaption>...<figcaption>`: Sirve para añadir una descripcion a una imagen y que sea visible

- `<br>`: Salto de linea

- `<hr>`: linea horizonal
  
- `<em>...</em>`: enfatizar un fragmento de texto (enfasis suave)
- `<strong>...</strong>`: enfatizar un fragmento de texto (enfasis mas fuerte)
- `<b>...</b>`: texto en negrita

-`<u>...</u>`: subraya texto

-`<i>...</i>`: sirve para poner un texto en cursiva

- `<ol>...</ol>`: Lista organizada

- `<ul>...</ul>`: Lista desorganizada

- `<li>...</li>`: Item de la lista

- `<form>`: Se utiliza para crear formularios que permiten a los usuarios enviar datos a un servidor o procesarlos en el navegador. Es la etiqueta contenedora de todo el formulario.
Tiene como atributos>
`action`: dónde se envían los datos
`method`: cómo se envían (get o post)
- `<label>`: Se utilza para asociar un texto descriptivo con un control de formulario.
Puede tener el atributo:
`for="name"`: conecta este label con un input que tenga id="name".
- `<input>`: Crea campo de entrada en formularios permitiendo al usuario introducir datos. Se puede usar el atributo: type="number" para especificar el tipo de dato.
Cuenta con el atributo `type`el cual determina el tipo de datos es, este puede ser text, `password`para contraseña , `email`, `submit`, etc.
-`<input type="tel"`:Se usa en formularios para campos de número de teléfono. Activa el teclado numérico en móviles.
`id`: Le asigna al input una id propia
`name`: Atributo obligatorio en los inputs para que los datos sean enviados
`<button type="submit">`: Botón para enviar los datos al servidor.

`placeholder`: Muestra un texto descriptivo o indicativo de lo que el usuario debe escribir dentro del campo
`autocomplete`:Permite a los navegadores sugerir y rellenar automáticamente campos de formularios (nombres, correos, direcciones) basándose en datos previamente guardados por el usuario.

`<select>`: Se usa para definir una lista de opciones
`<option>`: Define una opcion
`value`: un atributo el cual define el valor de la opcion

Sintaxis formulario:

```
<html>
<form action="/my-handling-form-page" method="post">
  <ul>
    <li>
      <label for="name">Nombre:</label>
      <input type="text" id="name" name="user_name" placeholder="Escribe tu nombre aqui" />
    </li>
    <li>
      <label for="mail">Correo electrónico:</label>
      <input type="email" id="mail" name="user_mail" placeholder="Escribe tu correo electronico" />
    </li>
    <li>
      <label for="msg">Mensaje:</label>
      <textarea id="msg" name="user_message" placeholder="Escriba su mensaje"></textarea>
    </li>
  </ul>
</form>
</html>
```

Sintaxis autocomplete:

```
<html>
<form action="/enviar" method="post">
  <label for="nombre">Nombre:</label>
  <input type="text" id="nombre" name="nombre" autocomplete="name">
  
  <label for="email">Correo:</label>
  <input type="email" id="email" name="email" autocomplete="email">
  
  <input type="submit" value="Enviar">
</form>
</html>
```

- `pattern`: Se usa para definir que valores se pueden introducir en un campo, dentro del input, por ejemplo: pattern="[A-Za-z]{3}" hace que se puedan poner solo 3 letras.

- `title`: provee información suplementaria a un campo, sea al mantener el cursor en el, o al enviar el formulario y contener un error en el.

- `maxlength`: Permite limitar la cantidad de caracteres que se pueden ingresar en un campo.
  
  - `onsubmit`: Ayuda a hacer una validación antes de enviar los datos de un formulario. A traves de esta se puede detener o no el envio de un formulario.
  