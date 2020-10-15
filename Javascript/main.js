/// Averiguar cual es el equipo que mas hinchas llevo a su estadio en promedio en 2019. Entre estos 5 (River, Boca, Talleres, Rosario Cental y Nob)


alert ("Vamos a averiguar como viene tu equipo en convocatoria de hinchas")

var hinchas

var hinchas = prompt ("Ingrese su club")

if (hinchas == "River" || hinchas == "river") {
alert ("Tu equipo es el numero 1° en convocatoria de hinchas, en promedio llevo 48073 aficionados por partido")

}else if (hinchas == "Boca" || hinchas == "boca")
{alert ("Tu equipo esta 2° en convocatoria de hinchas con 43141 aficionados por partido, solo lo supera River con 48073")

}else if (hinchas == "Talleres" || hinchas == "talleres")
{ alert ("Tu equipo esta 3° en convocatoria con 35107 aficionados en promedio por partido")

}else if (hinchas == "Rosario Central" || hinchas == "rosario central")
{alert ("Tu equipo esta 4° en convocatoria con 29532 aficionados en promedio por partido")

}else if (hinchas == "Nob"  || hinchas == "nob")
{alert ("Tu equipo no figura en la lista de clubes con mas convocatoria, debes conseguir mas hinchas")

}else { alert(" Tu equipo tiene pocos aficionados; debes conseguir mas hinchas")
}



///Pedir número mediante prompt y si es mayor a 1000 mostrar un alert.

var numero = prompt ("Ingrese un numero")

if (numero > 1000) {
    alert (" Su numero es superior a 1000")
}
else {
    alert ( " Su numero es inferior a 1000")
}

/// Pedir un texto mediante prompt, y si es igual a "Hola" mostrar un alerta por consola


alert ("Hola, siempre es un buen dia para aprender cosas nuevas ")

var texto = prompt ("Ingrese un texto")

if (texto == "Hola" || texto == "hola") {
    alert ("Que tengas una excelente jornada")
}
else {
    alert ("Es de mala educacion no saludar")
}


//// Pedir un número por prompt y evaluar si está entre 10 y 50. En caso positivo mostrar un alert.

var entre10y50 = prompt ("Ingresa un numero")

if (entre10y50 > 10 && entre10y50 < 50 ){
    alert ("Tu numero se ecuentra entre 10 y 50")
}
else {
    alert ("Tu numero no se encuentra entre 10 y 50")
}


   

