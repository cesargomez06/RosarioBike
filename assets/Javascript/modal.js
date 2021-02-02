// Variables necesarias
let cerrar = document.querySelectorAll(".close")[0];
let abrir = document.querySelectorAll(".cta")[0];
let modal = document.querySelectorAll(".modal")[0];
let modalC = document.querySelectorAll(".modal-container")[0];
let fix = document.querySelector("body")
//Abrir modal de carrito
abrir.addEventListener("click",function(e){
    e.preventDefault();
    fix.style.position = "fixed"
    modalC.style.opacity = "1";
    modalC.style.backdropFilter = "blur(2px)";
    modalC.style.visibility = "visible";
    modal.classList.toggle("modal-close");
});
//Cerrar modal de carrito
cerrar.addEventListener("click",function (params) {
    modal.classList.toggle("modal-close");
    fix.style.position = ""
    setTimeout(function() {
        modalC.style.opacity = "0";
        modalC.style.visibility = "hidden";
    },900)
});
