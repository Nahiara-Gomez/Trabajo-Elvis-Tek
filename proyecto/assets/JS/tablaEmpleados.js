// variable global que guarda la fila que se esta editando
let filaEditando = null;

// obtener el dialog por su id
const modal = document.getElementById("modalEmpleado");

// obtener el formulario
const formulario = document.getElementById("formularioEmpleado");

// abre el formulario
document.getElementById("btnAltaUsuario").addEventListener("click", function () {

    // filaEditando = null; o sea que no va a existir ninguna fila
    filaEditando = null;

    // limpia los campos
    document.getElementById("cedula").value = "";
    document.getElementById("nombre").value = "";
    document.getElementById("apellido").value = "";
    document.getElementById("cargo").value = "";

    // muestra el formulario
    modal.showModal();

});

// boton para cerrar el formulario
document.getElementById("btnCerrarAltaUsuario").addEventListener("click", function () {

    // oculta el formulario
    modal.close();

});

// captura el submit
formulario.addEventListener("submit", function (event) {

    // evita cargar la pagina
    event.preventDefault();

    // lee lo que escribio el usuario
    let cedula = document.getElementById("cedula").value;
    let nombre = document.getElementById("nombre").value;
    let apellido = document.getElementById("apellido").value;
    let cargo = document.getElementById("cargo").value;

    // detecta los campos vacios
    if (!cedula || !nombre || !apellido || !cargo) {
        alert("Complete todos los campos"); // si hay campos vacios muestra el mensaje
        return;
    }

    // validar que cedula solo contenga numeros
    if (!/^\d+$/.test(cedula)) {
        alert("La cédula debe contener solamente números");
        return;
    }

    // validar que cedula contenga 8 numeros
    if (!/^\d{8}$/.test(cedula)) {
        alert("La cédula debe tener 8 números");
        return;
    }

    // crea el objeto
    const empleado = {
        cedula: cedula,
        nombre: nombre,
        apellido: apellido,
        cargo: cargo
    };

    // (filaEditando === null) verifica si esta editando
    if (filaEditando === null) {

        // si no esta editando agrega la fila
        agregarEmpleado(empleado);

    } else {

        // obtiene todas las celdas de la fila
        let celdas = filaEditando.getElementsByTagName("td");

        // reemplaza los datos
        celdas[0].innerText = empleado.cedula;
        celdas[1].innerText = empleado.nombre;
        celdas[2].innerText = empleado.apellido;
        celdas[3].innerText = empleado.cargo;

        // deja de editar, para que el proximo submit agregue una fila nueva
        filaEditando = null;

    }

    // ocultar formulario
    modal.close();

});

// funcion para agregar un empleado, recibe el objeto y crea toda la fila
function agregarEmpleado(empleado) {

    // busca la tabla por id
    let tabla = document.getElementById("tabla");

    // crea una fila
    let fila = document.createElement("tr");

    // crea las celdas con los valores que agrego el usuario
    let tdCedula = document.createElement("td");
    tdCedula.innerText = empleado.cedula;

    let tdNombre = document.createElement("td");
    tdNombre.innerText = empleado.nombre;

    let tdApellido = document.createElement("td");
    tdApellido.innerText = empleado.apellido;

    let tdCargo = document.createElement("td");
    tdCargo.innerText = empleado.cargo;

    // crea celda acciones, contiene los botones de modificar y eliminar
    let tdAcciones = document.createElement("td");

    // crea boton modificar
    let btnModificar = document.createElement("button");
    btnModificar.innerText = "Modificar"; // asocia evento con el boton
    btnModificar.onclick = function () {
        modificar(this);
    };

    // crea boton eliminar
    let btnEliminar = document.createElement("button");
    btnEliminar.innerText = "Eliminar"; // asocia evento con el boton
    btnEliminar.onclick = function () {
        borrar(this);
    };

    // agrega los botones a la celda
    tdAcciones.appendChild(btnModificar);
    tdAcciones.appendChild(btnEliminar);

    // arma la fila completa
    fila.appendChild(tdCedula);
    fila.appendChild(tdNombre);
    fila.appendChild(tdApellido);
    fila.appendChild(tdCargo);
    fila.appendChild(tdAcciones);

    // agrega la fila a la tabla
    tabla.appendChild(fila);

}

// recibe el boton eliminar
function borrar(boton) {

    // selecciona la fila (boton.parentNode.parentNode;) = recibe boton -> td -> tr
    let fila = boton.parentNode.parentNode;

    // borra toda la fila (tr)
    fila.remove();

}

// recibe boton modificar
function modificar(boton) {

    // guarda la fila que se esta editando
    filaEditando = boton.parentNode.parentNode;

    // obtiene las celdas
    let celdas = filaEditando.getElementsByTagName("td");

    // carga datos, pasa los datos de la fila a los inputs
    document.getElementById("cedula").value = celdas[0].innerText;
    document.getElementById("nombre").value = celdas[1].innerText;
    document.getElementById("apellido").value = celdas[2].innerText;
    document.getElementById("cargo").value = celdas[3].innerText;

    // muestra el formulario, el usuario ve los datos cargados y los puede editar
    modal.showModal();

}