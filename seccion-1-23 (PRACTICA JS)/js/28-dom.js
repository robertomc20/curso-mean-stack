'use strict'

// DOM - Document object model

//para probar la funcion, en el console log, ejecutar la funcion cambiarColor("green");
function cambiarColor(color){
	caja.style.background = color;
}


//obtener elementos con un id concreto de la pagina
//opcion1
//asi se ve el texto del div "micaja"
//var caja = document.getElementById("micaja").innerHTML;

//opcion2
//asi se ve el div del html
//var caja = document.getElementById("micaja");

//opcion3
var caja = document.querySelector("#micaja"); //# para seleccionar un id de un div, 
									//sin nada para etiqueta y un . para etiquetas

//asi se puede editar el texto html que esta en el div
caja.innerHTML = "texto en la caja desde JS!!!";

//funciones del css en js
caja.style.background = "red";
caja.style.padding = "20px";
caja.style.color = "white";
caja.className = "hola";

//console.log(caja);

//como conseguir elementos por su etiqueta
var todosLosDivs = document.getElementsByTagName("div");//si fuera un solo elemento, solo se pone Element(SIN S)

// si quiero acceder al indice 2
var contenidoEnTexto = todosLosDivs[2].textContent;

//si quiero obtener todos los elementos junto con su indice:
//todosLosDivs.forEach((valor,indice) => { //el forEach funciona solo con valores de un array, no con html collection
var seccion = document.querySelector("#miseccion");
var hr = document.createElement("hr");

var valor;
for(valor in todosLosDivs){
	if(typeof todosLosDivs[valor].textContent == "string" ){ //validamos que sea un texto lo que se va ingresar
		var parrafo = document.createElement("p"); //createElement para crear un elemento(en este caso un parrafo)
		var texto = document.createTextNode(todosLosDivs[valor].textContent); //Aqui se crea un texto, tomando el valor que da el bucle
		parrafo.appendChild(texto); //metemos el texto dentro del parrafo
		seccion.append(parrafo); //metemos los parrafos dentro de la seccion
		//en este caso, sirve appendChild, append o prepend
		//append = añade despues, prepend = añade antes
	}
}
seccion.append(hr);

//});

//ejecutar console log para ver elementos obtenidos
console.log(todosLosDivs);
//console.log(contenidoEnTexto);


//--------------
//conseguiremos elementos por su clase css
var divsRojos = document.getElementsByClassName("rojo");
var divsAmarillos = document.getElementsByClassName("amarillo");
divsAmarillos[0].style.background = "yellow";

var div;
for(div in divsRojos){      //solo se puede editar un div rojo(siendo que hay 2)
	//por lo cual se hizo un bucle para que recorra todos los divs rojos y les cambie el color
	if(divsRojos[div].className == "rojo"){ //con este if se valida que solo recorra los divs class = rojo
		divsRojos[div].style.background = "red";
	}
}

console.log(divsRojos);


//query selector capturando un id
var id = document.querySelector("#encabezado");
console.log(id);//aqui muestra el id que capturamos

//solo saca un div, no saca toda la coleccion, por lo cual hay que usar el querySelectorAll
var claseRojo = document.querySelector(".rojo");  
console.log(claseRojo);

var claseRojo = document.querySelectorAll(".rojo");  
console.log(claseRojo);