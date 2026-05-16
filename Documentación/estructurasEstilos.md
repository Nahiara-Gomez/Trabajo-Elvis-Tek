# Etiquetas css

## Selectores css
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

## Flexbox
`justify-content` : Alinea elementos horizontalmente y acepta las siguientes propiedades:  
`flex-start` : Alinea elementos al lado izquierdo del contenedor.  
`flex-end` : Alinea elementos al lado derecho del contenedor.  
`center` : Alinea elementos en el centro del contenedor.  
`space-between` : Muestra elemntos con la misma distancia entre ellos.  
`space-around` : Muestra elementos con la misma separación alrededor de ellos.  

---

`align-items` Esta propiedad alinea elementos verticalmente y acepta los siguientes valores:  
`flex-start`  Alinea elementos a la parte superior del contenedor.   
`flex-end`   Alinea elementos a la parte inferior del contenedor.  
`center`  Alinea elementos al centro del contenedor.  
`baseline`  Muestra elementos en la linea base del contenedor.  
`stretch`  Los elementos se estiran para ajustarse al contenedor.  
   
---

`flex-direction`  Esta propiedad define la direccion de los elementos en el contenedor, y acepta los siguientes valores:  
`row`  Los elementos son colocados en la misma direccion del texto.  
`row-reverse`  Los elementos son colocados en la direccion opuesta al texto.  
`column`  Los elementos se colocan de arriba hacia abajo.  
`column-reverse`  Los elementos se colocan de abajo hacia arriba.  

---
`order` invierte el orden de los elementos en una fila o columna

`aling-self` hace lo mismo que `aling-items` pero en un elemento en especifico
`align-content` se usa para establecer multiples lineas separadas de otras

`flex-wrap` comprime y ajusta los elementos en una linea
- nonwrap: cada elemento se ajusta en una sola linea 
- wrap: los elementos se envuelven alrededor de lineas adicionales
- wrap-reverse: los elementos se envuelven alrededor de lineas adicionales en reversa
---
 `flex-flow:` mezcla las utilidades del flex-direction y el flex, la sintaxis es` <flex-direction> <flex-wrap>`

---
`align-content`: Se puede utilizar esta etiqueta para establecer como multiples lineas estan separadas una de la otra. Acepta los siguientes valores:
- flex-start: Las lineas se posicionan en la parte superior del contenedor.
- flex-end: Las lineas se posicionan en la parte inferior del contenedor.
- center: Las lineas se posicionan en el centro (verticalmente hablando) del contenedor.
- space-between: Las lineas se muestran con la misma distancia entre ellas.
- space-around: Las lineas se muestran con la misma separacion alrededor de ellas.
- stretch: Las lineas se estiran para ajustarse al contenedor.

---
## Box Model

`Padding`: Es el espacio interior que existe dentro de un elemento. Sirve para generar un area transparente alrededor del contenido para evitar que el contenido choque con sus propios bordes.

__Sintaxis:__
  ```
  .elemento{
  padding: 15px;
  }
  ```
`Border`: Permite dibujar una linea visible/borde que enmarca el elemento y el padding. Esta linea puede ser visible, tener grosor, color y diferentes estilos.

__Sintaxis para hacer un borde con un estilo comun (linea continua):__
```
.elementoConBorde{
  border: 4px solid red;
}
```
__Sintaxis para hacer un borde con estilo dashed (linea discontnua):__
```
.elementoConBorde{
  border: 4px dashed red;
}
```
__Sintaxis para hacer un borde con estilo dotted (linea punteada):__
```
.elementoConBorde{
  border: 4px dotted red;
}
```

`Margin`: Es el espacio exterior de un elemento. Sirve para definir la separacion entre un elemento y otros. Solo afecta el espacio que ocupa en la pagina, no el tamaño del contenido en si.

__Sintaxis:__
```
.elementoConMargen{
  margin: 10px;
}
```

`Box sizing`: Sirve para definir el como se calcula el tamaño total de un elemento, dentro de este calculo se incluyen el padding y el borde. Normalmente cuando declaramos el tamaño de un contenido, por defecto al momento de añadir padding y border, el tamaño del contenido suele aumentar. En cambio con la
propiedad box sizing, el tamaño se queda igual a lo declarado anteriormente, sin importar que añadamos padding o border.

__Sintaxis (por defecto):__
```
box-sizing: content-box;
```
__Sintaxis (recomendacio estandar):__
```
box-sizing: border-box;
```
---
## Unidades Absolutas y Relativas

`Unidades absolutas` (valores que no varian de tamaño, sin importar desde que dispositivo se vea):
- px (pixeles): Es el estandar para una pagina web. Recomendado para elementos estructurales que requieran tamaños fijos (como bordes, padding, entre otros).

Medidas hechas exclusivamente para diseños destinados a la impresion fisica:
- cm (centimetro)
- mm (milimetro)
- in (pulgadas)

`Unidades relativas` (valores que varian segun el dispositivo con el cual se vea):
- %: Depende exclusivamente del tamaño del contenedor, si este cambia de tamaño, el valor tambien lo hara. Es recomendable a la hora de diseñar una pagina que sea responsiva, es decir una pagina que se pueda ver bien en todos los tamaños.
- em: Se basa en el tamaño de fuente de su contenedor padre. Es util para lograr un efecto cascada en el cual el tamaño de un elemento afecte al siguiente.
- rem (Root em): Se basa unicamente en el tamaño de fuente establecido en la raiz (<html>). Es util para evitar la acumulacion de cambios en la jerarquia.

`Unidades Viewport` (su tamaño unicamente varia segun el tamaño visible de la ventana o pantalla del dispositivo). Ambos son utiles para que cambien de escala fluidamente sin importar el dispositivo.

- vw (Viewport Width): Representa el 1% del ancho total de la ventana visible. Ej: 100vw representa el 100% del ancho de una pagina.
- vh (Viewport Height): Representa el 1% del alto total de la ventana visible. Ej: 100vh representa el 100% del alto de una pagina.