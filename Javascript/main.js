

var imputNumero1 = Number (prompt("Ingresa un numero"));

var imputNumero2 = Number (prompt("Ingresa otro numero"));



function calcularPromedio(numero1,numero2) {
    alert("El promedio de los numeros ingresados es: "+(imputNumero1+imputNumero2)/2);
    
    
}

calcularPromedio()




//Recorrer la lista de frutas y luego indicar si hay stock de frutillas

var productos = ["Peras", "Manzanas", "Naranja", "Frutilla"];

var frutas = 0

prompt("Te interesan las frutillas")

alert("Te indicare si tenemos en stock")



function verSiHayFrutilla(){
    for (frutas; frutas < 4; frutas++) {
        if (productos[frutas] == "Frutilla") {
            alert("La Frutilla esta disponible")
        }
        
    }
    
}



verSiHayFrutilla()