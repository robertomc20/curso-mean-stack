'use strict'


// Propiedades de transformación de textos
var numero = 444;
var texto1 = "Soy un texto";
var texto2 = " Soy el segundo texto, el mejor texto ";


/*
//TRANSFORMAR NUMERO A STRING
var dato = numero.toString();
	dato = texto1.toUpperCase(); //tranformar texto a mayuscula
	dato = texto2.toLowerCase(); //tranformar texto a minuscula
//para verificar que haya cambiado
console.log(dato);
console.log(typeof dato);


// CALCULAR LONGITUD DE UN TEXTO
var nombre = "roberto"; //aca contaria la cantidad de letras
	nombre = ["hoa","hola"];//en este caso contaria la cantidad de datos (2)

console.log(nombre.length);


// CONCATENAR TEXTOS

//opcion 1
var textoTotal = texto1 + " " + texto2;

//opcion 2
var textoTotal2 = texto1.concat(" " + texto2);

console.log(textoTotal);
console.log(textoTotal2);
*/


/*
//  BUSQUEDA DE TEXTOS
var busqueda = texto1.indexOf("texto"); //indexOf muestra en que caracter esta la palabra buscada
	busqueda = texto2.lastIndexOf("texto"); //lastIndexOf muestra la ultima coincidencia
	busqueda = texto1.search("texto"); //es lo mismo que el indexOf
	busqueda = texto1.match("texto"); //devuelve array con la primera coincidencia
	busqueda = texto2.match(/texto/gi); //para que arroje todas las coincidencias
	busqueda = texto2.substr(15,5); //arroja el rango seleccionado, 15 es donde inicia, y 5 la cantidad de caracteres a sacar
	busqueda = texto2.charAt(15); //devuelve lo que hay en esa posicion
	busqueda = texto2.startsWith("Soy"); //devuelve true si el texto inicia con la palabra buscada
	busqueda = texto2.endsWith("texto"); //devuelve true si el texto termina con la palabra buscada
	busqueda = texto2.includes("mejor texto"); //devuelve true si existe la palabra buscada en el texto
console.log(busqueda);
*/

// FUNCIONES DE REEMPLAZO
var reemplazo = texto1.replace("texto", "cadena"); //reemplaza la palabra indicada del texto(texto), por la segunda(cadena)
	reemplazo = texto1.slice(4); //elimina todo el texto anterior al caracter indicado (4)
	reemplazo = texto1.slice(4, 7); //elimina todo el texto anterior al caracter indicado (4) y lo siguiente al 7
	reemplazo = texto2.split(); // mete todo el texto en un array
	reemplazo = texto2.split(" "); //separa cada palabra del texto en un array
	reemplazo = texto2.trim(); //corta los espacios por que estan antes y despues del inicio/fin del texto
console.log(reemplazo);

