'use strict'

/*
hacer una calculadora que pide 2 numeros por pantalla
si metemos mal numero, pedir nuevamente introducir
mostrar en body en una alerta y por consola el resultado de sumar,
restar multiplicar y dividir  esas 2 cifras.
*/

var numero1 = parseInt(prompt("Ingrese el primer numero: ", 0));
var numero2 = parseInt(prompt("Ingrese el segundo numero: ", 0));

while(numero1 <= 0 || numero2 <= 0 || isNaN(numero1) || isNaN(numero2)){
	numero1 = parseInt(promt("Ingrese el primero numero: ", 0));
	numero2 = parseInt(prompt("Ingrese el segundo numero: ", 0));
}


var resultado = "la suma es: "+(numero1+numero2)+"<br/>"+
				"la resta es: "+(numero1-numero2)+"<br/>"+
				"la multiplicacion es: "+(numero1*numero2)+"<br/>"+
				"la division es: "+(numero1/numero2)+"<br/>";

var resultadoCMD = "la suma es: "+(numero1+numero2)+" \n"+
				"la resta es: "+(numero1-numero2)+" \n"+
				"la multiplicacion es: "+(numero1*numero2)+" \n"+
				"la division es: "+(numero1/numero2)+" \n";

document.write(resultado);
alert(resultadoCMD);
console.log(resultadoCMD);

//otra forma es haciendo lo sgte
/*
document.write("La suma de "+numero1+ " más "+numero2+" es de: "+(numero1+numero2)+"</br>");
document.write("La resta de "+numero1+ " menos "+numero2+" es de: "+(numero1-numero2)+"</br>");
document.write("La multiplicación de "+numero1+ " por "+numero2+" es de: "+(numero1*numero2)+"</br>");
document.write("La división de "+numero1+ " en "+numero2+" es de: "+(numero1/numero2)+"</br>");
*/