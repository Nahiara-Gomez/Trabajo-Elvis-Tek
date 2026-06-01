document.getElementById("btnMenu").addEventListener("click", function () {

    document.querySelector(".menu_principal").style.display = "flex";
    document.querySelector("btnCerrar").style.display = "flex";
        document.querySelector("btnMenu").style.display = "none";
});

document.getElementById("btnCerrar").addEventListener("click", function () {

        document.querySelector(".menu_principal").style.display = "none";
    document.getElementById("btnCerrar").style.display = "none";
    document.getElementById("btnMenu").style.display = "flex";
});
