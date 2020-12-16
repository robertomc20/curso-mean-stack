'use strict'

// CONDICIONAL IF
// si A es igual a B entonces hace tal


var edad1 = 30;
var edad2 = 12;

//si pasa esto
if(edad1 > edad2){
    //ejecuta esto
    console.log("Edad 1 es mayor que edad 2");
}else{
    console.log("Edad 2 es mayor que edad 1")
}



/* OPERADORES RELACIONALES
    mayor: >
    menor: <
    mayor o igual: >=
    menor o igual: <=
    igual: ==
    distinto: !=
*/

//
var edad = 18;
var nombre = 'David Suarez';

//EJEMPLO
if(edad >= 18){
    console.log(nombre+ " tiene " + edad+ " años, es MAYOR de edad")

    if(edad <= 33){
        console.log("todavia eres millenial");
    }else if(edad >= 70){
        console.log("eres anciano");
    }else{
        console.log("ya no eres millenial");
    }

}else{
    console.log(nombre+ " tiene " + edad+ " años, es MENOR de edad")
}


/* OPERADORES LOGICOS
  AND(Y): &&
  OR(O): ||
  NEGACIÓN: !
*/

var year = 2019;

// Negación
if(year != 2016){
    console.log("El año no es 2016, es año "+year);
}

// AND
if(year >= 2000 && year <= 2020){
    console.log("Estamos en la era actual");
}else{
    console.log("Estamos en la era post moderna");
}

// OR
if(year == 2009 || year == 2019){
    console.log("El año acaba en 9");
}

// OR Y AND JUNTOS
if(year == 2009 || (year == 2019 && year <= 2029) ){
    console.log("El año acaba en 9");
}else{
    console.log("Año no registrado");
}