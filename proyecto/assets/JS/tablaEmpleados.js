let filaEditando = null;

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

document.getElementById("btnGuardarUsuario").addEventListener("click", function () {

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

    if (filaEditando === null) {

        let tabla = document.getElementById("tabla");

        let fila = tabla.insertRow();

        fila.insertCell(0).innerText = cedula;
        fila.insertCell(1).innerText = nombre;
        fila.insertCell(2).innerText = apellido;
        fila.insertCell(3).innerText = cargo;

        let acciones = fila.insertCell(4);

        acciones.innerHTML = `
            <button onclick="modificar(this)">Modificar</button>
            <button onclick="borrar(this)">Eliminar</button>
        `;

    } else {

        let celdas = filaEditando.getElementsByTagName("td");

        celdas[0].innerText = cedula;
        celdas[1].innerText = nombre;
        celdas[2].innerText = apellido;
        celdas[3].innerText = cargo;

        filaEditando = null;

    }

    document.querySelector(".formularioAltaUsuario").style.display = "none";

});

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