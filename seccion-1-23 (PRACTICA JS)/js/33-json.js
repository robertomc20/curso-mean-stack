'use strict'

window.addEventListener("load", function(){


	//Json = java script objetcs notations = notacion de objetos de javascript
	// permite crer objetos de manera simple y sencillas, son como arrayz asociativos pero son objetos
	//dentro de js, permite estructurar las cosas entre muchas cosas mas

	//JSON es muy util para el backend, para enviar  y recibir datos, por ej, mongodb guarda sus datos de esta manera
	//es una manera mucho mas rapida y sencilla de trabajar.

	//definiendo un objeto JSON
	var pelicula = {
		titulo: "Batman vs Superman",
		year: "2017",
		pais: "Estados Unidos"
	};

	//para editar una propiedad 
	pelicula.titulo = "Superman Begins";

	console.log(pelicula);
	//para acceder a una propiedad, simplemente se hace asi: pelicula.titulo (esto arrojaria el titulo)

	//definiendo un array json
	var peliculas = [
		{titulo: "La verdad duele", year: "2016", pais: "Francia"},
		pelicula
	];

	//para recorrer el array
	var cajapeliculas = document.querySelector("#peliculas");
	var index;
	for(index in peliculas){
		var p = document.createElement("p"); //creamos un parrafo
		p.append(peliculas[index].titulo+" - "+peliculas[index].year); //añadimos la propiedad en el parrafo
		cajapeliculas.append(p); //añadimos el parrafo en el div
	}

});