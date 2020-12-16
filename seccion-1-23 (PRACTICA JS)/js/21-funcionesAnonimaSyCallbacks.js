'use strict'

//Funciones anonimas
//Es una función que no tiene nombre


var pelicula = function(nombre){
	return "La pelicula es "+ nombre;
}
//probar en consola llamando la funcion e ingresando parametro


//funcion con varios parametros
//sumaYmuestra y sumaPorDos son funciones de callbacks
//ya que se llaman cuando se ejecuta la funcion principal
function sumame(numero1, numero2, sumaYmuestra, sumaPorDos){
	var sumar = numero1 + numero2;

	//invocar funciones
	sumaYmuestra(sumar);
	sumaPorDos(sumar);

	return sumar;
}



//aca se le pasan 2 funciones anonimas
//function(dato) serian las fucniones anonimas, el primero seria sumaYmuestra
//y el segundo seria de sumaPorDos
sumame(5, 7, function(dato){
	console.log("La suma es: ", dato);
},
function(dato){
	console.log("La suma por dos es: ", (dato*2));
});

//las funciones anonimas son funciones que no tienen nombres
//que esten estrictamentes utilizada para algo concreto
//si no, que se usan como parametros que se pasan y 
//realizan la funcion

//basicamente al ejecutarse la funcion principal 
//dentro de la propia funcion se ejecutan las funciones de callbacks.


//funciones de flecha
//sirve para definir funciones de callback de una manera mas corta
//ejemplo con lo mismo de arriba con flechas
sumame(5, 7, dato => {
	console.log("La suma es: ", dato);
},
dato =>{
	console.log("La suma por dos es: ", (dato*2));
});