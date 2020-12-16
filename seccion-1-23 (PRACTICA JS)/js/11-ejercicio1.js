'use strict'

//  Programa que nos pida 2 numeros y nos diga cual es mayor,
//  menor o si son iguales.

var numero1 = parseInt(prompt("Introduce primer numero",0 ));
var numero2 = parseInt(prompt("Introduce segundo numero",0 ));

console.log(numero1,numero2);

// PLUS solo lo que viene, SI ES QUE NO INGRESA NUMERO VALIDO, SE REPETIRA
while(numero1 <= 0 || numero2 <= 0 || isNaN(numero1) || isNaN(numero2)){
	numero1 = parseInt(prompt('Introduce el primer numero', 0));
	numero2 = parseInt(prompt('Introduce el segundo numero', 0));
}

if(numero1 == numero2){
	alert("LOS NUMEROS SON IGUALES");

}else if(numero1 > numero2){
	alert("EL NUMERO MAYOR ES: " + numero1);
	alert("EL NUMERO MENOR ES: " + numero2);

}else if(numero2 > numero1){
	alert("EL NUMERO MAYOR ES: " + numero2);
	alert("EL NUMERO MENOR ES: " + numero1);

}else{
	alert("INTRODUCE NUMEROS CORRECTOS");
}