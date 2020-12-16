'use strict'

window.addEventListener("load", () => {

	/*
	1. Un formulario en el html que permita ingresar peliculas 
	2. Un formulario que permita borrar la pelicula ingresada
	*/

	// 1.
	var formulario = document.querySelector("#formpeliculas");

	formulario.addEventListener("submit", function(){  //se obtiene la funcion de submit del formulario y hacemos una funcion de callback

		var titulo = document.querySelector("#addpelicula").value; //se obtiene el titulo ingresado en el input

		if(titulo.length >=1){  //se valida que se ingrese algo en el input
			localStorage.setItem(titulo, titulo);   //se ingresa el valor en el localstorage
		}

		

	});


	var ul = document.querySelector("#peliculas-list");		//se obtiene el objeto ul
	for(var i in localStorage){								//se recorre el local storage
		if(typeof localStorage[i] == "string"){				//se valida que solo los strings se ingresen
			var li = document.createElement("li");			//se crea el elemento li que va dentro del ul creado en html
			li.append(localStorage[i]);						//se mete el valor del local storage en el li
			ul.append(li);									//se mete el li en el ul
		}
	}



	// 2.
	var formulariob = document.querySelector("#formBorrarPeliculas");

	formulariob.addEventListener("submit", function(){
		var titulo = document.querySelector("#borrarpelicula").value;

		if(titulo.length >=1){
			localStorage.removeItem(titulo, titulo);
		}
	});


});