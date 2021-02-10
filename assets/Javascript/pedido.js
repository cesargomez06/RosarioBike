document.addEventListener('DOMContentLoaded', () => {
    const procesarPedido = document.getElementById("procesarPedido");
    procesarPedido.addEventListener("click", procesarCompra);
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
    articulosCarrito = JSON.parse(localStorage.getItem('compra')) || [];
    console.log(articulosCarrito)
    renderizarStorage(articulosCarrito, '#lista-compra tbody');
});
function renderizarStorage(articulos, idElemento) {
    const tabla = document.querySelector(idElemento)
    let html = '';
    tabla.innerHTML = '';
    articulos.forEach(articulo => {
        html += `
            <td> <img src="${articulo.imagen}" width=100></td>
            <td> ${articulo.nombre}</td>
            <td> ${articulo.precio}</td>
            <td> <input type="number" class="form-control" cantidad"" min="1" value=${articulo.cantidad}></td>
            <td> ${articulo.precio * articulo.cantidad}</td>
            <td> <a href="#" class="borrar-producto fas fa-times-circle" data-id="${articulo.id}" </td>
        `
    });
    tabla.innerHTML = html;
}
function procesarCompra (e){
    e.preventDefault();
    location.href = "compras.html"
}