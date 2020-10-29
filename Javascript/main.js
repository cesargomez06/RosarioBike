//Carrito de compras online


//Producto

function Producto () {
    
    this.nombreProducto = " ";
    this.precio = " ";
    this.cantidad = " ";
    this.imagen = " src";
    this.descripcion = " ";


    this.CargarProducto = (nombre,precio,cantidad,imagen,descripcion) => {
        this.nombreProducto = nombre;
        this.precio = precio;
        this.cantidad = cantidad;
        this.imagen = imagen;
        this.descripcion = descripcion;
        
    }

    var ListaDeProductos = ["Producto1","producto2","producto3","producto4","producto5","producto6"];



}

const productos = [ 
                    ["Bicicleta Topmega Rowen R26","$30.000","1","https://http2.mlstatic.com/D_NQ_NP_2X_934668-MLA31115577129_062019-F.webp"," Topmega Rowen R 26 2019 "],
                    ["Bicicleta Topmega Sunshine R 29 Mtb Suntour","$35.000", "1", "https://http2.mlstatic.com/D_NQ_NP_2X_776636-MLA43565938080_092020-F.webp", "Nueva Topmega Sunshine R 29 2020"],
                    ["Bicicleta Topmega Marathon R29","$40.000","1","https://http2.mlstatic.com/D_NQ_NP_2X_712853-MLA43542766465_092020-F.webp", "Nueva Topmega Marathon R 29 2020"],
                    [    ]

                ];
    let  newProducto = ["Bicicleta nueva","70.000","1","http://http2.","Topmega NUEVA"];
productos.push(newProducto);

let listaDeProductos = new Producto();
listaDeProductos.CargarProducto(productos[0][0],productos[0][1],productos[0][2],productos[0][3]);

productos.forEach(elemento => {
    listaDeProductos.CargarProducto(elemento[0],elemento[1],elemento[3],elemento[4],elemento[5])
    
});

let carrito = [ ];

//Carrito

function ShoppingCart() {
    var listShoppingCart = [];
    this.add = function (id) {
        manageLocalStorage(id, true);
        manageDOM(id, true);
        totalQuantity();
        document.getElementById('total').innerHTML = `$ ${total()}`;
    }
    function deletePROD(id) {
        manageLocalStorage(id, false);
        manageDOM(id, false);
        totalQuantity();
        document.getElementById('total').innerHTML = `$ ${total()}`;
    }
   
}
ShoppingCart();