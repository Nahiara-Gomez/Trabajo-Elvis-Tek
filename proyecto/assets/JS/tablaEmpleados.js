let filaEditando = null;

const formulario = document.querySelector("form");

document.getElementById("btnAltaUsuario").addEventListener("click", function () {

    filaEditando = null;

    document.getElementById("cedula").value = "";
    document.getElementById("nombre").value = "";
    document.getElementById("apellido").value = "";
    document.getElementById("cargo").value = "";

    document.querySelector(".formularioAltaUsuario").style.display = "block";

});

document.getElementById("btnCerrarAltaUsuario").addEventListener("click", function () {

    document.querySelector(".formularioAltaUsuario").style.display = "none";

});

formulario.addEventListener("submit", function (event) {

    event.preventDefault();

    let cedula = document.getElementById("cedula").value;
    let nombre = document.getElementById("nombre").value;
    let apellido = document.getElementById("apellido").value;
    let cargo = document.getElementById("cargo").value;

    if (!cedula || !nombre || !apellido || !cargo) {
        alert("Complete todos los campos");
        return;
    }

    if (!/^\d+$/.test(cedula)) {
        alert("La cédula debe contener solamente números");
        return;
    }

    const empleado = {
        cedula: cedula,
        nombre: nombre,
        apellido: apellido,
        cargo: cargo
    };

    if (filaEditando === null) {

        agregarEmpleado(empleado);

    } else {

        let celdas = filaEditando.getElementsByTagName("td");

        celdas[0].innerText = empleado.cedula;
        celdas[1].innerText = empleado.nombre;
        celdas[2].innerText = empleado.apellido;
        celdas[3].innerText = empleado.cargo;

        filaEditando = null;

    }

    document.querySelector(".formularioAltaUsuario").style.display = "none";

});

function agregarEmpleado(empleado) {

    let tabla = document.getElementById("tabla");

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

    let fila = boton.parentNode.parentNode;

    fila.remove();

}

function modificar(boton) {

    filaEditando = boton.parentNode.parentNode;

    let celdas = filaEditando.getElementsByTagName("td");

    document.getElementById("cedula").value = celdas[0].innerText;
    document.getElementById("nombre").value = celdas[1].innerText;
    document.getElementById("apellido").value = celdas[2].innerText;
    document.getElementById("cargo").value = celdas[3].innerText;

    document.querySelector(".formularioAltaUsuario").style.display = "block";

}