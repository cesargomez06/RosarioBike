const procesarPedido = document.getElementById("procesarPedido");

procesarPedido.addEventListener("click", procesarCompra);

function procesarCompra (e){
    e.preventDefault();
    location.href = "compra.html"
}