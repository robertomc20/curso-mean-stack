'use strict'

// UNA API ES UN SERVICIO O BACKEND 

// FETCH(SUSTITUTO A AJAX) == PETICIONES ASINCRONAS A UN SERVIDOR 
// Y PETICIONES A SERVICIOS / APIS REST

var div_usuarios = document.querySelector("#usuarios");
var div_janet = document.querySelector("#janet");
var div_profesor = document.querySelector("#profesor");


	getUsuarios()  //se accede al servicio remoto
		.then(data => data.json())  //.then es una promesa, la cual captura los datos, y dps lo convertimos a json
		.then(users => {             //una vez todo slos datos recojidos, los guardamos dentro de usuarios
			listadoUsuarios(users.data)   //lo mejor es realizarlo en funciones -- una vez tengamos el listado quiero hacer la sgte promesa

			return getInfo(); 
		})
		.then(data => {		//las promesas suelen usarse cuando hay que leer archivos, enviar/recibir cosas por post/ajax
			div_profesor.innerHTML = data;
			return getJanet();
		})
		.then(data => data.json())
		.then(user => {
			mostrarJanet(user.data);	
		})
		.catch(error => {        //con esto podemos agarrar los errores
			alert("Error en las peticiones");
		});
	



function getUsuarios(){
	return fetch("https://reqres.in/api/users");//accedemos a un servicio remoto, luego con el then espera a recibir esos datos
}


function getJanet(){
	return fetch("https://reqres.in/api/users/2");
}


function getInfo(){  //Como crear una promesa desde 0 
	var profesor = {
		nombre: "Roberto",
		apellidos: "Marihuan Crisostomo",
		url: "https://google.com"
	};


	return new Promise((resolve, reject) => {  //este es un objeto, el new se ocupa para instanciar un objeto
		
		var profesor_string = "";

		setTimeout(function(){
			profesor_string = JSON.stringify(profesor);

			if(typeof profesor_string != "string" || profesor_string == "") return reject("Error 1");  //acá no se abre llave al ser solo 1 opcion

			return resolve(profesor_string);   //si es valido, se devuelve el resutlado
		}, 3000);
	});
	
}


function listadoUsuarios(usuarios){
	/*
	usuarios.map((user, i) => {  //se puede usar funcion map o for each, ya que los usuarios estan en un una coleccion
		let nombre = document.createElement("h3");

		nombre.innerHTML = i + ". " + user.first_name + " " + user.last_name;

		div_usuarios.appendChild(nombre);

		document.querySelector(".loading").style.display = "none";
	});
	*/
	usuarios.forEach((user, i) => {   //puede ser user o element, basicamente lo que hace el for each o map es 
		let nombre = document.createElement("h3");   //ejecutar la funcion indicada por cada elemento del array, en este caso, usuarios

		nombre.innerHTML = i + ". " + user.first_name + " " + user.last_name;

		div_usuarios.appendChild(nombre);

		document.querySelector(".loading").style.display = "none";
	});
}


function mostrarJanet(user){
	//usuarios.map((user, i) => {  no es necesario el metodo map o for each como el lsitado ya que es un objeto limpio,, no una coleccion
		let nombre = document.createElement("h4");
		let avatar = document.createElement("img");

		nombre.innerHTML = user.first_name + " " + user.last_name;
		avatar.src = user.avatar;
		avatar.width = "100";

		div_janet.appendChild(nombre);
		div_janet.appendChild(avatar);

		document.querySelector("#janet .loading").style.display = "none";
}

