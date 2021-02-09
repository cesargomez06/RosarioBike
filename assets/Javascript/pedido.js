const procesarPedido = document.getElementById("procesarPedido");

procesarPedido.addEventListener("click", procesarCompra);

function procesarCompra (e){
    e.preventDefault();
    location.href = "compras.html"
}
cargarEventos();

function cargarEventos () {
    document.addEventListener("DOMContentLoaded", compra.leerLocalStorageCompra());
}

const compra = new carrito();
const listaCompra = document.querySelector("#lista-carrito tbody");

function leerLocalStorageCompra (){
    // Borrar contenido del carrito
    let productosLS;
    productosLS = this.guardarStorage();
    let sumaPrecios = 0;
    let cantidadProductos = 0;
    // Inserto los poductos del carrito en el HTML
    guardarStorage.forEach (producto => {
        const {imagen, nombre, precio, cantidad, id} = producto;

        const row = document.createElement("tr");
        row.innerHTML = `
            <td> </td>
            <td> </td>
            <td> </td>
            <td> </td>
        `
        
        listaCompra.appendChild(row);
        console.log(listaCompra);
        cantidadProductos += cantidad;
        sumaPrecios += precio * cantidad;
        
    } );
    totalCarrito.innerHTML = `$${sumaPrecios}`;
    totalProductos.innerHTML = `${cantidadProductos}`;
    
};