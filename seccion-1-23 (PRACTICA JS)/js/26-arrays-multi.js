'use strict'

//los arrays multidimensionales son arrays dentro de otras arrays

var categorias = ['Accion','Terror','Comedia'];
var peliculas = ['La verdad duele','La vida es bella','Gran torino'];

var cine = [categorias, peliculas];

//la array cine tiene 2 arrays, categorias y peliculas
//console.log(cine[0][1]);
//console.log(cine[1][2]);

//AÑADIR ELEMENTOS A UN ARRAY
//peliculas[] = "Batman";  asi se haría en php

//peliculas.push("Batman"); 
//console.log(peliculas);

/*
//AÑADIR PELICULAS POR PROMPT
var elemento = "";

do{
	elemento = prompt("Introduce tu pelicula: ");
	peliculas.push(elemento);
}while(elemento != "ACABAR");

//al poner acabar, este se guarda en el array

//CON EL POP, se elimina el ultimo elemento del array
//si se hace mas de una vez el pop, se eliminan más
peliculas.pop();
console.log(peliculas);
*/
/*
//ELIMINAR CIERTOS ELEMENTOS DE UN ARRAY
//se busca el indice del elemento a eliminar
var indice = peliculas.indexOf("Gran torino");
console.log(indice);
//-1 ya que el indice inicia desde 0, asi se valida que busque
if(indice > -1){
	//splice permite borrar desde un indice, borrar los elementos que se deseen en 
	//adelante del indice seleccionado, en este caso, solo 1
	peliculas.splice(indice, 1);
}

console.log(peliculas);
*/

//PARA CONVERTIR UN ARRAY A TEXTO CON "JOIN"
var peliculas_string = peliculas.join();
console.log(peliculas_string);

//PARA CONVERTIR UN TEXTO A UN ARRAY
var cadena = "texto1, texto2, texto3";
//con el split, se separa cada vez que hay un ", " en la cadena
//creando un array
var cadena_array = cadena.split(", ");
console.log(cadena_array);


//PARA ORDENAR ARRAYS
//así ordena por primera letra de a-z
peliculas.sort();
console.log(peliculas);
//así ordena el arreglo al inverso
categorias.reverse();
console.log(categorias);
