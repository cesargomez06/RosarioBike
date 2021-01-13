// Selectores
const carrito = document.querySelector("#carrito");
const contenedorCarrito = document.querySelector("#lista-carrito tbody");
const listaProductos = document.querySelector("#lista-productos");
const btnVaciarCarrito = document.querySelector(".vaciar");
const formulario = document.querySelector("#formulario");

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
function filtrarProducto(e) {
    e.preventDefault;
    console.log("buscador");
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
        <td><input value="1" type="number" min="1" max="10" class="number">${cantidad}</td>

        <td> ${nombre}  <img src="${imagen}"></td>
         



        <td class="precio"> ${precio}</td>

        <td > <a href="#" class="borrar-producto" data-id="${id}"> X </a> </td>
                
                    `
                contenedorCarrito.appendChild(row);

    } ); 
   
};

    