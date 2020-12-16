'use strict'

/// PARAMETROS REST Y SPREAD


/// ...resto_de_frutas ES UN PARAMETRO REST, EL CUAL SIRVE PARA METER TODOS LOS VALORES EN UN ARRAY/ARREGLO
function listadoFrutas(fruta1, fruta2, ...resto_de_frutas){
	console.log("Fruta 1: ", fruta1);
	console.log("Fruta 2: ", fruta2);
	console.log(resto_de_frutas);
}

listadoFrutas("Naranja", "Manzana", "Sandia", "Pera", "Melon", "Coco");


///creando un arreglo, al llamarlo en el listado a pesar de ser 2 frutas,
//las toma como fruta 1 el arreglo de las 2 escritas, no tomando la fruta 1
//como Naranja y fruta 2 como Manzana, ya que no estamos usando el SPREAD
var frutas = ["Naranja", "Manzana"]
listadoFrutas(frutas, "Sandia", "Pera", "Melon", "Coco");



//lo anterior con spread
var frutas = ["Naranja", "Manzana"]
listadoFrutas(...frutas, "Sandia", "Pera", "Melon", "Coco");
//// se usa el ...frutas en el listado, este seria un parametro SPREAD






