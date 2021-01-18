// Selectores
const carrito = document.querySelector("#carrito");
const contenedorCarrito = document.querySelector("#lista-carrito tbody");
const listaProductos = document.querySelector("#lista-productos");
const btnVaciarCarrito = document.querySelector(".vaciar");
const formulario = document.querySelector("#formulario");


// Jquery
$(document).ready(function(){ 
    $("a.logo").fadeIn(4000); 
});

$("h5.item-price").hover(function(){
    $("p").slideDown(2000);
})



let articulosCarrito = [];

// Listeners
listaProductos.addEventListener("click", agregarProducto);
btnVaciarCarrito.addEventListener("click",vaciarCarrito);
carrito.addEventListener("click", quitarProducto);
formulario.addEventListener("submit",filtrarProducto);

document.addEventListener('DOMContentLoaded', () => {
    articulosCarrito = JSON.parse(localStorage.getItem('carrito')) || [];
    
	insertarCarritoHTML();
});

// Funciones

function limpiarProductos(){
    while (listaProductos.firstChild) {
        listaProductos.removeChild(listaProductos.firstChild);
    }
}

function filtrarProducto(e) {
    e.preventDefault();
    const busqueda = document.querySelector("#buscador").value;
   
    // Busco en mi stock.js 
    const resultado = stockProductos.filter(producto => producto.nombre.toLocaleLowerCase().includes(busqueda.toLocaleLowerCase()));
    
    limpiarProductos();


    resultado.forEach (producto =>{

        const {nombre, imagen, precio, id} = producto;

        const divCard = document.createElement("div");
        divCard.classList.add("productos-todos");
        divCard.innerHTML = `
        <h2 class="item-title">
                ${nombre}
        </h2>
            <img class="item-image" src="${imagen}" >
            <h5 class= "item-price">${precio}</h5>
            <a><button class="productos-boton agregar-carrito" data-id=${id}>Añadir al carrito</button></a>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos aperiam velit dolore accusamus iusto molestiae nisi sequi minus quae porro, eum quibusdam eligendi impedit! Expedita vel explicabo id harum vero.</p>
            `
            const row = document.createElement('div');
			row.classList.add('row');

			listaProductos.appendChild(row);
			row.appendChild(divCard);
    } )
}
function vaciarCarrito() {
    limpiarCarrito();
    articulosCarrito = [];
    guardarStorage();
}

function limpiarCarrito() {

    while (contenedorCarrito.firstChild) {
        contenedorCarrito.removeChild(contenedorCarrito.firstChild);
    }
}

function quitarProducto(e){
    if(e.target.classList.contains("borrar-producto")){
        const productoId = e.target.getAttribute("data-id");
        	/* Filtro los productos del carrito */
		articulosCarrito = articulosCarrito.filter(producto => producto.id != productoId);

		/* Renderizo el nuevo carrito */
		insertarCarritoHTML();

		/* Actualizamos el storage */
		guardarStorage();
    }
}

function agregarProducto(e) {

    if(e.target.classList.contains("agregar-carrito")) {
        // selecciono el elemento padre
        const productoSeleccionado = e.target.parentElement.parentElement;

        ObtenerDatos(productoSeleccionado);
    }
}


function ObtenerDatos (producto) {
    // Extraer informacion del producto

    const productoAgregado = {
        nombre : producto.querySelector(".item-title").textContent,
        imagen : producto.querySelector("img").src,
        precio : producto.querySelector(".item-price").textContent,
        id: producto.querySelector(".agregar-carrito").getAttribute("data-id"),
        cantidad:1

    }
        //Chequeo si el producto que agrego ya existe en el carrito
    const existe = articulosCarrito.some(producto => producto.id == productoAgregado.id);

    
    if (existe) {
        //Producto ya existente 
        const productos = articulosCarrito.map(producto => {
            if (producto.id === productoAgregado.id) {
                producto.cantidad++;
                return producto;
            } else {
                return producto;
            }
        });
        articulosCarrito = [...productos];
    } else {
        // Agrego el producto al carrito 
        articulosCarrito.push(productoAgregado);
    }
    
    insertarCarritoHTML();
    guardarStorage();
  
}
function guardarStorage() {
    localStorage.setItem("carrito", JSON.stringify(articulosCarrito));
}
function insertarCarritoHTML (){
    // Borrar contenido del carrito
        limpiarCarrito();
     // Inserto los poductos del carrito en el HTML

    articulosCarrito.forEach (producto => {

        const {imagen, nombre, precio, cantidad, id} = producto;

        const row = document.createElement("tr");
        row.innerHTML = `
        <td><button class="aumentar" id="aumentar-producto" onClick="aumentarCantidad("${id}")">+</button><input type="text" class="cantidad-carrito" value="${cantidad}"><button class="disminuir">-</button></td>
        <td>${nombre}</td>
        <td> <img src="${imagen}"></td>
        <td class="precio"> ${precio}</td>
        <td class="img-eliminar"> <img style="cursor: pointer" src="./assets/imagenes/eliminar.png"  class="borrar-producto" data-id="${id}"> </td>
                
                    `
                    
                contenedorCarrito.appendChild(row);
                
    } ); 
    //const clasAumentar = document.querySelector(".aumentar");
    //const idBoton = clasAumentar.getAttribute("data-id");
    
    //idBoton.addEventListener("click", aumentarCantidad);
    
    function aumentarCantidad(id){
        console.log(id);


    

        insertarCarritoHTML();
        guardarStorage();
    };
        
};