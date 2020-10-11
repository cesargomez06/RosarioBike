var deseasRegistrarte = prompt("¿Deseas registrarte para empezar a comprar?");

var condicionFiscal = prompt("¿Posee monotributo o es Responsable Incripto?");




if (condicionFiscal == "si" || "monotributo" || "responsable") {
alert("Puedes empezar a comprar, solo te pediremos unos datos");
var nombre = prompt("Ingrese su nombre");
var apellido = prompt ("Ingrese su apellido");
alert (nombre + " " + apellido + " " +"ahora si puedes empezar a comprar")
}else {
alert("No puedes comprar, necesitas estar registrado en Afip");   
}




