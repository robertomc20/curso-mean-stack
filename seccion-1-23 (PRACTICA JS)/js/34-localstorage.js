'use strict'

window.addEventListener("load", ()=> {

	//LOCALSTORAGE
	//es una manera de almacenar información dentro del navegador y persiste mientras uno va navegando
	//a modo de sesión, y suele usarse mucho en apps creadas con javascript/angular/o monoliticas como php,etc
	//parecida a una memoria temporal o una sesión.

	//como comprobar si local storage esta disponible en el navegador
	if(typeof(Storage) !== "undefined"){
		console.log("LOCALSTORAGE esta disponible");
	}else{
		console.log("Incompatible con LOCALSTORAGE");
	}


	// Guardar datos en el localstorage
	localStorage.setItem("titulo", "Toy Story 3");

	// Recuperar elemento y mostrarlo en consola o cuerpo de la página
	console.log(localStorage.getItem("titulo"));
	document.querySelector("#peliculas").innerHTML = (localStorage.getItem("titulo"));

	// Guardar objetos en el local storage
	var usuario = {
		nombre: "Roberto Marihuan",
		email: "roberto.marihuan.crisostomo@gmail.com",
		edad: "22"
	};

	//se debe convertir el objeto json a un json string o numero
	localStorage.setItem("usuario", JSON.stringify(usuario));  //JSON.stringify CONVIERTE A JSON STRING

	// Recuperar objeto
	console.log(localStorage.getItem("usuario"));  //aroja el string, por lo cual no podmeos llamar solo una atributo

	//con esto si se podrá, ya que lo convertimos el json string a un objeto de javascript usable
	var userjs = JSON.parse(localStorage.getItem("usuario"));

	console.log(userjs);

	//ahora podemos añadir al div, una propiedad de nuestro objeto del localstorage
	document.querySelector("#datos").append(userjs.nombre+" - "+userjs.email+" - "+userjs.edad);


	// Eliminar objetos del local storage
	localStorage.removeItem("usuario");

	// Limpiar todo el localstorage
	localStorage.clear();
});

