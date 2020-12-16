'use strict'

//hacemos funcion load para cargar el js en el head
window.addEventListener("load", function(){
	console.log("DOM CARGADO!!");//para comprobar que funciono


	//capturamos el formulario para hacer evento submit (boton "Enviar")
	var formulario = document.querySelector("#formulario");

	//ocultaremos el cuadro para que se muestre solo cuando envie el formulario
	var box_dashed = document.querySelector(".dashed");
	box_dashed.style.display = "none";   //con esta propiedad, el div permaneceria oculto


	//capturamos el evento submit
	formulario.addEventListener("submit", function(){
		console.log("Evento submit capturado");

		var nombre = document.querySelector("#nombre").value; //SI NO SE PONE EL .value, SE OBTIENE EL CODIGO HTML, NO EL VALOR DEL CONTENIDO
		var apellidos = document.querySelector("#apellidos").value;
		var edad = parseInt(document.querySelector("#edad").value);

		//validamos los datos
		if(nombre.trim() == null || nombre.trim().length == 0){ //trim sirve para validar que no tenga ningun espacio por delante o atras
			alert("El nombre no es valido");
			document.querySelector("#error_nombre").style.display = "block";  //hacemos visible el error si es que no es valido
			document.querySelector("#error_nombre").innerHTML = "El nombre ingresado no es valido <br/>"; //esto hace que el error salga bajo el input en el span creado
			return false;  //LOS RETURN FALSE PERMITEN QUE SI NO SE CUMPLE LA VALIDACIÓN, NO DEJA CONTINUAR CON LO QUE SIGUE EJECUTANDOSE
		}else{
			document.querySelector("#error_nombre").style.display = "none";//aqui ocultamos el mensaje de error si es que los datos son validos
		}

		if(apellidos.trim() == null || apellidos.trim().length == 0){ 
			alert("Los apellidos no son validos");
			return false;	//LOS RETURN FALSE PERMITEN QUE SI NO SE CUMPLE LA VALIDACIÓN, NO DEJA CONTINUAR CON LO QUE SIGUE EJECUTANDOSE
		}

		if(edad == null || edad <= 0 || isNaN(edad)){ //isNaN es lo mismo que hacer isNaN(edad)== false
			alert("La edad no es valida");			   //debemos convertir el valor de edad a un entero(parseInt)
			return false;								//valores numericos no permite usar trim
		}

		//ahora hacemos que aparezca el box_dashed (el div donde se mostraran los datos)
		box_dashed.style.display = "block";

		//verificamos que lo hayamos obtenidos
		console.log(nombre, apellidos, edad);
		//OPCION 2 SOLO FUNCIONA CREANDO LOS SPAN EN EL DIV DEL HTML
		var p_nombre = document.querySelector("#p_nombre span"); //se pueden obtener el span con el id + etiqueta
		var p_apellidos = document.querySelector("#p_apellidos span");
		var p_edad = document.querySelector("#p_edad span");

		p_nombre.innerHTML = nombre; //metemos dentro del span, la variable
		p_apellidos.innerHTML = apellidos;
		p_edad.innerHTML = edad;



		/* OPCION 1
		//ahora meteremos las variables en un array para facilitar el uso de ellas
		var datos_usuario = [nombre, apellidos, edad];
		//ahora recorremos en un bucle el array
		var indice;
		for(indice in datos_usuario){
			var parrafo = document.createElement("p"); //creamos la variable parrafo lo cual hará crear un elemento al llamarlo
			parrafo.append(datos_usuario[indice]);   //metemos cada variable del array en un parrafo

			//seleccionamos el div para añadir los parrafos
			box_dashed.append(parrafo);
		}
		*/


		
	});

	
	


});