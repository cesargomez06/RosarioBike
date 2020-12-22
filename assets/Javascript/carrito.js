// Defino el Array carritoCompras
const carritoCompras = [];


// Agrego productos al carritoCompras
carritoCompras.push(producto1);
carritoCompras.push(producto2);
carritoCompras.push(producto3);

// Sumo productos del carritoCompras
function sumarCarrito (a,b,c){
    console.log(`El total de tu compra es $${a+b+c}`);
}
sumarCarrito(producto1.precio,producto2.precio,producto3.precio);

console.table(carritoCompras);

// Elimino un elemento del carrito de la posicion que quiera 
carritoCompras.splice(1,1);

console.table(carritoCompras);