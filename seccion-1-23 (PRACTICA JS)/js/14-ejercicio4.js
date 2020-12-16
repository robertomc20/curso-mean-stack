'use strict'

/*
Mostrar todos los numeros impares que hay entre 2 numeros introducidos por el usuario
*/

var numero1 = parseInt(prompt("Introduzca el primer numero: ", 0));
var numero2 = parseInt(prompt("Introduzca el segundo numero: ", 0));

document.write("Los numeros impares que hay entre el "+numero1+" y "+numero2+" son los siguientes: ");
for(var i = numero1; i <= numero2; i++){
	if(i % 2 == 1){
		document.write(i+"</br>");
	}
}


//otra opcion a hacerlo es la siguiente
/*
while(numero1 < numero2){
	numero1++;

	if(numero1 % 2 == 1){
	console.log("El "+numero1+" es impar");
	}
}

*/