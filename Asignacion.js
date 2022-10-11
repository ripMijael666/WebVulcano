// OPERADORES DE ASIGNACION 
let asignacion = 60;
    asignacion += 6;
document.write(asignacion); '\n'

let asignacionDos = 60;
    asignacionDos -= 6;
document.write(asignacion);

let asignacionTres = 60;
    asignacionTres *= 6;
document.write(asignacion);

let asignacionCuatro = 60;
    asignacionCuatro /= 6;
document.write(asignacion);

let asignacionCinco = 640;
    asignacionCinco %= 6;
document.write(asignacion);

// CONCATENACION DE PALABRAS
// let nombre = prompt("cual es tu nombre");
// let frase = `${nombre} es re blanco mal`;
// alert(frase);

let pregunta  = prompt("Ingrese su nombre ")

if (pregunta === "Mijael") {
    alert(pregunta + " eres blanco y tienes mas derechos que los negros 3:) ")
}
else if (pregunta != "Mijael") {
    alert(pregunta + " eres un negro de MIERDA no tienes derechos :(")
}

