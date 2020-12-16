'use strict'

/*
que nos diga si un numero es par o impar.
1. ventana prompt
2. comprobar si el numero no es valido, pedir de nuevo el numero
*/


var number = parseInt(prompt("Introduce un numero: ", 0));

while(isNaN(number)){
	var number = parseInt(prompt("Introduce un numero: ", 0));
}

if(number % 2 == 0){
	alert("El numero "+number+" es PAR");
}else{
	alert("El numero "+number+" es IMPAR");
}