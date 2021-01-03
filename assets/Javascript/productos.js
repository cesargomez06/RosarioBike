//Agregue el Objeto constructor Producto
function Producto (nombre,rodado,marca,precio,color) {
    this.nombre = nombre;
    this.rodado = rodado;
    this.marca = marca;
    this.precio = precio;
    this.color = color;
}
const producto1 = new Producto("Bicicleta 1", 29, "Top Mega", 30000, "Amarillo");
const producto2 = new Producto("Bicicleta 2", 29, "Top Mega", 35000, "Negro");
const producto3 = new Producto("Bicicleta 3", 21, "Top Fire", 40000, "Azul");
//console.log(producto1);
//console.log(producto2);



// Añadir elemento al carrito y abrir modal

const agregarPrimero = document.querySelector("#agregarProducto1");
agregarPrimero.onclick = agregarProducto1;
const agregarSegundo = document.querySelector("#agregarProducto2");
agregarSegundo.onclick = agregarProducto2;
const agregarTercero = document.querySelector("#agregarProducto3");
agregarTercero.onclick = agregarProducto3;


function agregarProducto1(){
    let open = document.querySelectorAll(".addToCart")[0];
    open.addEventListener("click",function(e){
        e.preventDefault();
        modalC.style.opacity = "1";
        modalC.style.visibility = "visible";
        modal.classList.toggle("modal-close");
    });
    let modalLine = document.querySelector(".producto1");
    modalLine.textContent = producto1.nombre;
    let modalCantidad = document.querySelector(".cantidad1");
    modalCantidad.textContent = 1;
    let modalPrecio = document.querySelector(".precio1");
    modalPrecio.textContent = producto1.precio;
};

function agregarProducto2(){
    let open = document.querySelectorAll(".addToCart")[1];
    open.addEventListener("click",function(e){
        e.preventDefault();
        modalC.style.opacity = "1";
        modalC.style.visibility = "visible";
        modal.classList.toggle("modal-close");
    });
    let modalLine = document.querySelector(".producto2");
    modalLine.textContent = producto2.nombre;
    let modalCantidad = document.querySelector(".cantidad2");
    modalCantidad.textContent = 1;
    let modalPrecio = document.querySelector(".precio2");
    modalPrecio.textContent = producto2.precio;
};
function agregarProducto3(){
    let open = document.querySelectorAll(".addToCart")[2];
    open.addEventListener("click",function(e){
        e.preventDefault();
        modalC.style.opacity = "1";
        modalC.style.visibility = "visible";
        modal.classList.toggle("modal-close");
    });
    let modalLine = document.querySelector(".producto3");
    modalLine.textContent = producto3.nombre;
    let modalCantidad = document.querySelector(".cantidad3");
    modalCantidad.textContent = 1;
    let modalPrecio = document.querySelector(".precio3");
    modalPrecio.textContent = producto3.precio;
};












