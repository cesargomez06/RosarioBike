// Variables necesarias
let cerrar = document.querySelectorAll(".close")[0];
let abrir = document.querySelectorAll(".cta")[0];
let modal = document.querySelectorAll(".modal")[0];
let modalC = document.querySelectorAll(".modal-container")[0];

//Abrir modal de carrito
abrir.addEventListener("click",function(e){
    e.preventDefault();
    modalC.style.opacity = "1";
    modalC.style.visibility = "visible";
    modal.classList.toggle("modal-close");
});
//Cerrar modal de carrito
cerrar.addEventListener("click",function (params) {
    modal.classList.toggle("modal-close");
    
    setTimeout(function() {
        modalC.style.opacity = "0";
        modalC.style.visibility = "hidden";
    },900)
});
