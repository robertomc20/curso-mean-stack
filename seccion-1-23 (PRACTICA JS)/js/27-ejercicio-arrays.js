'use strict'

/*
Hacer un programa que 
1. pida 6 numeros por pantalla y los meta en un array
2. mostrar el array entero(todos sus elementos) en el cuerpo de la pagina y en la consola
3. ordenar y mostrar el array
4. invertir el orden y mostrarlo
5. mostrar cuantos elementos tiene el array
6. busqueda de un valor introducido por el usuario y que nos diga si esta en el array y que nos diga su posicion/indice
*/

var numeros = [];
var elemento = "";

do{
	for(var i = 1 ; i < 7 ; i++){
		elemento = parseInt(prompt("Ingrese el "+(i)+"° numero: ",0));
		numeros.push(elemento);		
	}
}while(numeros.length<6);

document.write("<ul>");
document.write("<h1> Contenido del array </h1>");
for(let numero in numeros){
	document.write("<li> Indice: "+numero+ "  |  Numero: "+numeros[numero]+"</li>");
}

document.write("</ul>");

console.log("Arreglo ingresado")
console.log(numeros);

console.log("Arreglo ordenado de menor numero a mayor")
console.log(numeros.sort((a,b) => a-b));

console.log("Arreglo ordenado a la inversa")
console.log(numeros.reverse());

console.log("La cantidad de elementos que tiene el array es de: "+numeros.length);

var numeroBuscar = parseInt(prompt("Introduzca un numero a buscar en el array ingresado: ", 0));

var busquedaNumero= numeros.find(numero => numero == numeroBuscar); //esto arroja el numero si lo encuentro y un undefined si no 
var busquedaIndice = numeros.findIndex(numero => numero == numeroBuscar); //esto arroja la posicion del 

console.log(busquedaNumero);
console.log(busquedaIndice);

if(isNaN(busquedaNumero)==true){
	console.log("El numero "+numeroBuscar+" no existe en el array");
}else{
	console.log("El numero "+numeroBuscar+" si existe en el array, su posición es: "+busquedaIndice);
}

