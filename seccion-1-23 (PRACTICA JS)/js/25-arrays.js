'use strict'

// ARRAYS/ARREGLOS/MATRICES
// es una colección de datos que puede tener una variable

var nombre = "Roberto Marihuan";

//ahora en array
//puede ingresarse cualquier cosa
//opcion 1 de definir el array
var nombres = ["Roberto Marihuan", "Francisca Aguilera", "Felipe Olguin", "Brian Moldenhauer", 52, true];

//opcion 2
var lenguajes = new Array("PHP","JS","Go","Java","C#","C","Pascal");

// Los arrays tienen indices que parten desde el 0, en el ultimo caso, seria así:
// var lenguajes = new Array("PHP","JS","Go","Java");
//INDICES                      0    1    2     3

//console.log(nombres);

//para acceder solo a un elemento, se indice el elemento a sacar
//console.log(nombres[3]);

//para ver cuantos elementos posee un array se usa length
//console.log(nombres.length);

/*
//------------------------------------------------
//accediento a un elemento pidiendo el elemento
var elemento = parseInt(prompt("Que elemento del array quieres?", 0));
//para asegurarse de que ingrese un elemento valido
if(elemento >= nombres.length){
	alert("Introduce un numero menor que "+nombres.length);
}else{
	alert("El usuario seleccionado es: "+nombres[elemento]);
}
*/

document.write("<h1>Lenguajes de programación del 2018 </h1>");
document.write("<ul>");
/*
//document.write(lenguajes[0]);
//document.write(lenguajes[1]);
//con el bucle, recorre automaticamente el array y no hay que ponerlo 1 por 1 como arriba
for(var i = 0; i < lenguajes.length ; i++){
	document.write("<li>"+lenguajes[i]+"</li>");
}
document.write("</ul>");
*/

//otro metodo de recorrer el array
//solo con el elemento podria recorrer el array
//basicamente el for each itera el array y lo muestra
// FOR EACH
/*
lenguajes.forEach((elemento, indice, arr)=>{
	console.log(arr);
	document.write("<li>"+indice+" - "+elemento+"</li>");
});
*/

//otra forma de recorrer un array es con el "FOR IN"
for(let lenguaje in lenguajes){
	document.write("<li>"+lenguajes[lenguaje]+"</li>"); //si solo se pone +lenguaje+ arrojaran los indices
}

document.write("</ul>");


//COMO HACER BUSQUEDAS EN UN ARRAY

//la funcion find, se usa una funcion de callback
/*
var busqueda = lenguajes.find(function(lenguaje){
	return lenguaje == "PHP";//si pongo algo que no exxiste, arrojara undefined
});
*/


//se puede hacer lo mismo de arriba con las funciones de flecha
//var busqueda = lenguajes.find(lenguaje => lenguaje == "PHP");

//PARA BUSCAR EL INDICE se usa la funcion findIndex
//var busqueda = lenguajes.findIndex(lenguaje => lenguaje == "PHP");
//console.log(busqueda);

//PARA ENCONTRAR SI HAY VALORES DE UN TIPO U OTRO EN UN ARRAY
//metodo some perrmite sabe si algun precio es mayor o igual o mayores a 20 por el ejemplo
//se puede cambiar el >= por <, > , <= , etc
var precios = ["10","20","50","80","12"];
var busqueda = precios.some(precio => precio >= 20); //arroja true si existen y false si no
console.log(busqueda);