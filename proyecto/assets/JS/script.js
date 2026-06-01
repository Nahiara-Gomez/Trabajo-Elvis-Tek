const btnMenu = document.getElementById("btnMenu");
const btnCerrar = document.getElementById("btnCerrar");
const menu = document.querySelector(".menu_principal");

btnMenu.addEventListener("click", function () {
    menu.style.display = "flex";
    btnMenu.style.display = "none";
    btnCerrar.style.display = "flex";
});

btnCerrar.addEventListener("click", function () {
    menu.style.display = "none";
    btnCerrar.style.display = "none";
    btnMenu.style.display = "flex";
});