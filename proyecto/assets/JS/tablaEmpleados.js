/**
 * CONSTANTES Y VARIABLES
 */

// dialog
const modal = document.getElementById("modalEmpleado");

// formulario
const formulario = document.getElementById("formularioEmpleado");

// botones
const btnAltaUsuario = document.getElementById("btnAltaUsuario");
const btnCerrarAltaUsuario = document.getElementById("btnCerrarAltaUsuario");

// tabla
const tabla = document.getElementById("tabla");

// campos
const entradaCedula = document.getElementById("cedula");
const entradaNombre = document.getElementById("nombre");
const entradaApellido = document.getElementById("apellido");
const entradaCargo = document.getElementById("cargo");

// variable global que guarda la fila que se esta editando
let filaEditando = null;


/**
 * LOCAL STORAGE
 */

function cargarEmpleadosLocal() {

    const empleadosGuardados = localStorage.getItem("empleados");

    if (empleadosGuardados === null) {
        return [];
    }

    return JSON.parse(empleadosGuardados);

}

function actualizarEmpleadosLocal(empleados) {

    localStorage.setItem(
        "empleados",
        JSON.stringify(empleados)
    );

}

function guardarEmpleadoLocal(empleado) {

    const empleados = cargarEmpleadosLocal();

    empleados.push(empleado);

    actualizarEmpleadosLocal(empleados);

}

function actualizarTabla() {

    
    tabla.replaceChildren();

    const empleados = cargarEmpleadosLocal();

    for (const empleado of empleados) {
        agregarEmpleado(empleado);
    }

}

function modificarEmpleadoLocal(empleadoEditado) {

    const empleados = cargarEmpleadosLocal();

    const empleado = empleados.find(
        e => e.cedula === empleadoEditado.cedula
    );

    if (empleado === undefined) {
        return;
    }

    empleado.nombre = empleadoEditado.nombre;
    empleado.apellido = empleadoEditado.apellido;
    empleado.cargo = empleadoEditado.cargo;

    actualizarEmpleadosLocal(empleados);
}

function eliminarEmpleadoLocal(cedula) {

    const empleados = cargarEmpleadosLocal();

    const empleadosActualizados = empleados.filter(
        e => e.cedula !== cedula
    );

    actualizarEmpleadosLocal(empleadosActualizados);
}

/**
 * OBTENCION DE DATOS
 */

function obtenerDatosFormulario() {

    return {
        cedula: entradaCedula.value,
        nombre: entradaNombre.value,
        apellido: entradaApellido.value,
        cargo: entradaCargo.value
    };

}


/**
 * GESTION DEL MODAL
 */

function abrirAltaUsuario() {

    filaEditando = null;
    formulario.reset();
    modal.showModal();

}

function cerrarAltaUsuario() {

    filaEditando = null;
    formulario.reset();
    modal.close();

}

modal.addEventListener("cancel", function () {

    filaEditando = null;
    formulario.reset();

});


/**
 * GESTION DE LA TABLA
 */

function agregarEmpleado(empleado) {

    let fila = document.createElement("tr");

    let tdCedula = document.createElement("td");
    tdCedula.innerText = empleado.cedula;

    let tdNombre = document.createElement("td");
    tdNombre.innerText = empleado.nombre;

    let tdApellido = document.createElement("td");
    tdApellido.innerText = empleado.apellido;

    let tdCargo = document.createElement("td");
    tdCargo.innerText = empleado.cargo;

    let tdAcciones = document.createElement("td");

    let btnModificar = document.createElement("button");
    btnModificar.innerText = "Modificar";
    btnModificar.onclick = function () {
        modificar(this);
    };

    let btnEliminar = document.createElement("button");
    btnEliminar.innerText = "Eliminar";
    btnEliminar.onclick = function () {
        borrar(this);
    };

    tdAcciones.appendChild(btnModificar);
    tdAcciones.appendChild(btnEliminar);

    fila.appendChild(tdCedula);
    fila.appendChild(tdNombre);
    fila.appendChild(tdApellido);
    fila.appendChild(tdCargo);
    fila.appendChild(tdAcciones);

    tabla.appendChild(fila);

}

function borrar(boton) {

    const fila = boton.parentNode.parentNode;

    const cedula = fila.children[0].innerText;

    eliminarEmpleadoLocal(cedula);

    actualizarTabla();

}

function modificar(boton) {

    filaEditando = boton.parentNode.parentNode;

    const celdas = filaEditando.getElementsByTagName("td");

    entradaCedula.value = celdas[0].innerText;
    entradaNombre.value = celdas[1].innerText;
    entradaApellido.value = celdas[2].innerText;
    entradaCargo.value = celdas[3].innerText;

    modal.showModal();

}


/**
 * VALIDACIONES
 */

function validarFormulario(empleado) {

    if (!empleado.cedula || !empleado.nombre || !empleado.apellido || !empleado.cargo) {
        alert("Complete todos los campos");
        return false;
    }

    if (!/^\d+$/.test(empleado.cedula)) {
        alert("La cédula debe contener solamente números");
        return false;
    }

    if (!/^\d{8}$/.test(empleado.cedula)) {
        alert("La cédula debe tener 8 números");
        return false;
    }

    return true;

}


/**
 * EVENTOS
 */

btnAltaUsuario.addEventListener("click", abrirAltaUsuario);

btnCerrarAltaUsuario.addEventListener("click", cerrarAltaUsuario);

formulario.addEventListener("submit", function (event) {

    event.preventDefault();

    const empleado = obtenerDatosFormulario();

    if (!validarFormulario(empleado)) {
        return;
    }

    if (filaEditando === null) {

        guardarEmpleadoLocal(empleado);

    } else {

        modificarEmpleadoLocal(empleado);

        filaEditando = null;
    }

    actualizarTabla();

    modal.close();
});

actualizarTabla();