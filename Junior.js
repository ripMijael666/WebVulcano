// TIPOS DE DATOS EN JAVASCRIPT
    string = "Mijael"
    number = 19
    booleano =  true


// FORMAS DE DECLARAR UNA VARIABLE 
    var nombre = "Mijael";
        nombre = "Jose";
    alert(nombre);
    let apellido = "Rocha";
        apellido = "Vera";
    alert(apellido);
    // LAS VARIABLES var Y let SI PUEDEN CAMBIAR SUS VALORES 
    const edad  = 18;
    alert(edad);
    // LAS VARIABLES CONSTANTES "const" NO PUEDEN CAMBIAR SU VALOR 
    // SE DEFINE UNA VES Y NO SE PUEDEN DEFINIR O CAMBIAR SU VALOR NUNCA MAS 


// NULL
    let numero = null; 
    // AL DECLARAR NULL A UNA VARIABLE ESTA SE CONVIERTE A UNA VARIABLE VACIA "SU VALOR ES VACIO"


// + * - / Y NAN
    let numeroUno = 5;
    let numeroDos = 5;
    alert(numeroUno * numeroDos);

    let nan = "Mijael";
    alert(numeroUno + nan);
    // AQUI SE ESTA CONCATENANDO 
    alert(numeroUno * nan);
    // AQUI YA ES NAN "NOT A NUMBER" "NO ES UN NUMERO" NO SE PUEDE MULTIPLICAR NUMERO CON TEXTO


// "promt" alerta en la pantalla interactiva 
    let promptUno = prompt("Ingrese su Nombre");
    let promptDos = prompt("Ingrese su Apellido");
    alert("Bienvenido :" + promptUno + promptDos);


