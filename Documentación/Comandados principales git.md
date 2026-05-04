# Comandados principales git

(Para poder realizar todo esto se tiene que tener git previamente descargado)

`git config --global user.name <“Pepito”>` → Te permite que el sistema tenga el nombre de tu usuario.

`git config --global user.email “Pepitos1234@gmail.com”` → Permite que git tenga tu gmail.

`git init` → Crea repositorio nuevo.

`git status` → Te permite saber el status de los cambios y de las cosas añadidas.

`git add <nombredelarchivo>...` → Te permite añadir un archivo especifico a la “area de preparación” o area de staging, que en resumidas palabras esta es la zona intermedia donde se guardan los cambios que se quieren incluir en el próximo commit. 

`git add .` → Agrega todos los archivos modificados y nuevos de la carpeta actual al área de preparación.

`git commit -m <“Comentario”>` → Con esto ya se guarda definitivamente en el historial los cambios realizados en el archivo. Y con el -m te permite hacer un comentario sobre el commit que se guardo.

`git log` → Te permite ver el historial de los commits

***
---

## **¿Cómo pasar un repositorio local a un repositorio remoto?**

(Como primer paso se tiene que abrir la terminal en la carpeta donde está el repositorio local).

`git remote add origin <URL_DEL_REPOSITORIO_REMOTO>` → Te permite conectar el repositorio local con el repositorio remoto en la nube (en este caso github). (El nombre origin se puede cambiar, pero suele ser el nombre más elejido para un repositorio remoto).

`git push <nombre_del_repositorio_remoto> <rama>` → Se sube todo lo que contenga una rama del repositorio local al repositorio remoto.(Una rama en git es una versión paralela del código en la que se pueden realizar cambios sin afectar la rama principal). 

`git clone <URL_del_repositorio>`→ Te permite clonar el repositorio remoto a tu computadora.   

`git push` → Pasa todos los commits realizados hacia la nube. 

`git pull` → Obtiene los commits realizados en el repositorio remoto y los descarga e integra al repositorio local.