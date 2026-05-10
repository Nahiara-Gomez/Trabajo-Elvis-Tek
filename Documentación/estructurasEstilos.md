# Etiquetas css

## `Selectores css`
Un selector css identifica un elemento HTML el cual se verá afectado por propiedades (las propiedades modifican la apariencia de un elemento)

- Selector por tipo: `a` selecciona todos los elementos del tipo `<a>`.

- Selector por id: `#miId` selecciona todos los elementos con el atributo `id="miId"`.

- Selector por clase: `.miClase` selecciona todos los elementos con el atributo `class="miClase"`.

- Selector universal: Selecciona todos los elementos con `*`.

- Selector por descendencia: `A B` selecciona todos los elementos de `B` que se encuentran dentro de `A`.

- Selector múltiple (por comas): `A, B` selecciona todos los elementos de `A` y `B`.

- Selector por hermanos adyacentes: `A + B` selecciona _sólo_ los elementos de `B` que van después de `A`.

- Selector general por hermanos: `A ~ B` Selecciona todos los elementos de `B` que van después de `A`

- Selector por hijos: `A > B` selecciona todos los `B` que son hijos directos de `A`.
### `Pseudoclases`
 Las seudoclases son herramientas especiales de CSS que nos permiten referenciar elementos
HTML por medio de sus características, como sus posiciones en el código o sus condiciones actuales.
- `:hover`: Se activa el selector al pasar el mouse encima del elemento. 

- `:focus`: Se activa el selector al hacer click o presionar con un táctil encima del elemento.
  
- `:active`: Se activa el selector mientras que se está interactuando con el elemento. Si se va a utilizar junto con `:hover`, este debe después.
 
- `:visited`: Se activa el selector cuando ya se visitó un determinado enlace con la etiqueta `<a>...<\a>`.

## Propiedades
### Estilos de texto
  `text-align:`: Te permite modificar la alineación horizontal del texto y elementos en línea (como imágenes).

- `text-decoration: none;`:Con el atributo none en este caso hace que se le quite toda decoración que tenga un texto, como subrayado, tachado o lineas superiores.

### Estilos de listas

- `list-style-type`: Cambia el tipo de punteo de una lista, `none` para desactivarlo.

- `list-style-position`: Cambia la posición del contenido de una lista aumentando o disminuyendo la tabulación con `inside` y `outside`.

- `list-style: none`: Sirve para eliminar los puntos por default de las listas

### Dimensiones

- `width`: Define el ancho de un elemento.

- `height`: Define el alto de un elemento.

- `max-width`: De no utilizar `width`, este define el ancho máximo de un elemento.

- `min-width`: De no utilizar `width`, este define el alto mínimo de un elemento.

- `min-height`: De no utilizar `height`, este define el ancho máximo de un elemento.

- `min-height`: De no utilizar `height`, este define el alto mínimo de un elemento.

### Background

- `background-color:`: Define el color del fondo del elemento.

- `background-color linear-gradient`:Hace que el fondo de un elemento, pueda ser la transición de dos colores difuminados.


### Posicion

- `position: ` define el tipo de posicionamiento usado para colocar un elemento. Los valores que se pueden utilizar son static (mantiene la ubicación que tienen los elementos por defecto), relative (se posiciona según la posición original del elemento), absolute (se posiciona con una posición absoluta relativa al contenedor del elemento), y fixed  (se queda en una ubicación fija aunque hagas scroll)

- `display: inline;`: Logra que un elemento HTML se comporte como un elemento en línea, situándose al lado de otros elementos en lugar de iniciar una nueva línea.

- `display: block` Convierte al elemento en un bloque que ocupa todo el ancho disponible de la página. Los elementos con este valor comienzan en una nueva línea y permiten modificar propiedades como width y height.

- `display: inline-block` Hace que el elemento permanezca en la misma línea que otros elementos, sin ocupar todo el ancho disponible, pero permitiendo definir dimensiones y otras propiedades de bloque como width y height.