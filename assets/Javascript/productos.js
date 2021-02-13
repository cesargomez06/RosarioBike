// Selectores
const carrito = document.querySelector("#carrito");
const contenedorCarrito = document.querySelector("#lista-carrito tbody");
const listaProductos = document.querySelector("#lista-productos");
const btnVaciarCarrito = document.querySelector(".vaciar");
const formulario = document.querySelector("#formulario");
const totalCarrito = document.getElementById("totalCarrito");
const totalProductos = document.getElementById("totalProductos");



// Listeners

btnVaciarCarrito.addEventListener("click",vaciarCarrito);
carrito.addEventListener("click", quitarProducto);
formulario.addEventListener("submit",filtrarProducto);

document.addEventListener('DOMContentLoaded', () => {

    $.ajax({
        url: "assets/javascript/stock.json",
        success: function(data,status,xhr){
            stockProductos = data;
            cargarListaProductos(data);
        },
        error: function (xhr, status, errorThrown) {
			console.log(xhr)
			console.log(status)
			console.log(errorThrown)
        }
    });

    articulosCarrito = JSON.parse(localStorage.getItem('carrito')) || [];

	insertarCarritoHTML();
});

// Jquery
$(document).ready(function(){
    $("a.logo").fadeIn(4000);
});

$(".whatsapp img").hover(function(){
    $("p").slideDown(1000);
})

$(document).ready(function(){
    linkInterno = $('a[href^="#"]');
    linkInterno.on('click',function(e) {
    e.preventDefault();
    var href = $(this).attr('href');
    $('html, body').animate({ scrollTop : $( href ).offset().top }, 1300, "easeInOutExpo");
    });
});

let articulosCarrito = [];
let stockProductos;

// Funciones

function cargarListaProductos(productos) {
    $('#lista-productos');
    productos.forEach ((producto) =>{
        
    const {nombre, imagen, precio, id, descripcion} = producto;

    const divCard = document.createElement("div");
    divCard.classList.add("productos-todos");
    divCard.innerHTML = `
        <h2 class="item-title">
            ${nombre}
        </h2>
        <img class="item-image" src="${imagen}" >
        <h5 class= "item-price">$${precio}</h5>
        <button onclick="agregarProducto(event, '${id}')" onClick="aumentarCantidad('${id}')"class="productos-boton agregar-carrito" data-id=${id}>Añadir al carrito</button>
        ${descripcion ? `<p class="item-descripcion">${descripcion}</p>` : ""
    }
        `
        const row = document.createElement('div');
        row.classList.add('row');

        listaProductos.appendChild(row);
        row.appendChild(divCard);
});  
};


function filtrarProducto(e) {
    e.preventDefault();
    const busqueda = $("#buscador").val();

    // Busco en mi stock.js
    const resultado = stockProductos.filter(producto => producto.nombre.toLocaleLowerCase().includes(busqueda.toLocaleLowerCase()));

    limpiarProductos();
    cargarListaProductos(resultado);

};

function vaciarCarrito() {
    limpiarCarrito();
    articulosCarrito = [];
    guardarStorage();
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

function agregarProducto(event, id) 
{
    if(!articulosCarrito.some(producto => producto.id == id)){
        let producto = stockProductos.find(producto => producto.id == id);
        producto.cantidad = 1;
        articulosCarrito.push(producto);
        insertarCarritoHTML();
        guardarStorage();
    }
    else {
        articulosCarrito.map(producto => {
            if(producto.id == id) producto.cantidad++;
        });
        insertarCarritoHTML();
        guardarStorage();
    }
}

function ObtenerDatos (producto) {
    // Extraer informacion del producto

    const productoAgregado = {
        nombre : producto.querySelector(".item-title").textContent,
        imagen : producto.querySelector("img").src,
        precio : producto.querySelector(".item-price").textContent,
        id: producto.querySelector(".agregar-carrito").getAttribute("data-id"),
        descripcion: producto.querySelector(".item-descripcion").textContent,
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
    let sumaPrecios = 0;
    let cantidadProductos = 0;
    // Inserto los poductos del carrito en el HTML
    articulosCarrito.forEach (producto => {
        const {imagen, nombre, precio, cantidad, id} = producto;

        const row = document.createElement("tr");
        row.innerHTML = `
            <td><button class="aumentar"  onClick="aumentarCantidad('${id}')">+</button><input type="text" class="cantidad-carrito" value="${cantidad}"><button onclick="disminuirCantidad('${id}')" class="disminuir">-</button></td>
            <td>${nombre}</td>
            <td> <img src="${imagen}"></td>
            <td class="precio">$${precio}</td>
            <td class="img-eliminar"> <img style="cursor: pointer" src="./assets/imagenes/eliminar.png"  class="borrar-producto" data-id="${id}"> </td>
        `
        
        contenedorCarrito.appendChild(row);
        cantidadProductos += cantidad;
        sumaPrecios += precio * cantidad;

        
        
    } );
    totalCarrito.innerHTML = `$${sumaPrecios}`;
    totalProductos.innerHTML = `${cantidadProductos}`;
    
};

function cantidadProductos () {
    let cantidadProductos = 0;
    articulosCarrito.forEach(function (producto) {
        cantidadProductos = cantidadProductos + parseInt(localStorage.getItem(producto.id));
    })
    $("#totalProductos").html(cantidadProductos);
    
}

function limpiarCarrito() {
    contenedorCarrito.innerHTML = '';
    sumaPrecios = 0;
    cantidadProductos = 0;
    totalCarrito.innerHTML = `$${sumaPrecios}`;
    totalProductos.innerHTML = `${cantidadProductos}`;
}

function limpiarProductos(){
    while (listaProductos.firstChild) {
        listaProductos.removeChild(listaProductos.firstChild);
    }
}

function aumentarCantidad(id){
    articulosCarrito.map(producto => {
        if(producto.id == id) producto.cantidad++;
    });
    insertarCarritoHTML();
    guardarStorage();
};
function disminuirCantidad(id){
    articulosCarrito.map(producto => {
        if(producto.id == id && producto.cantidad > 1) producto.cantidad--;
    });
    insertarCarritoHTML();
    guardarStorage();
}
const procesarPedido = document.getElementById("procesarPedido");
    procesarPedido.addEventListener("click", procesarCompra);
    
function procesarCompra (e){
        e.preventDefault();
        location.href = "compras.html"
}