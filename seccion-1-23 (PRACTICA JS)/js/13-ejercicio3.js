'use strict'

/*
hacer un programa que muestre todos los numeros entre dos 
numeros introducidos por el usuario
*/
var numero1 = parseInt(prompt("Introduzca el primer numero: ", 0));
var numero2 = parseInt(prompt("Introduzca el segundo numero: ", 0));


document.write("<h1> Entre el numero "+numero1+" y "+numero2+" estan los siguientes numeros: </h1>");
for(var i = numero1; i <= numero2; i++){
	document.write(i+"</br>");
}