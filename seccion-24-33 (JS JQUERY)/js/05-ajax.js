// Ajax es una tecnologia que permite hacer peticiones asincronas a un servidor
// recojiendo resultados sin necesidad de recargar la pagina, solo un trozo de la pantalla
// mostrando los resultados
//**pagina usada para practicar: reqres.in0
$(document).ready(function(){
	
	// Metodo LOAD
	//**permite hacer una peticion ajax, por web, y incrustar el resultado dentro de 
	//**un div o cualquier elemento de la pagina.
	//$("#datos").load("https://reqres.in/");


	// Metodo GET y POST
	//**en el get se indica la pag a sacar, segundo se pasan los parametros que uno quiere en json,
	//**en este caso, la pagina 2, y luego una funcion de callback donde se recoje el resultado 
	//**y hacer lon que uno quiere hacer, en este caso en el console.log para ver que funciona
	$.get("https://reqres.in/api/users", {page: 2}, function(response){
		//console.log(response);
		//**mostramos los usuarios en el div
		//**response.data es donde estan los usuarios
		//**lo recorremos con un forEach y con la funcion de callback recorremos el resultado
		response.data.forEach((element, index) => {
			$("#datos").append("<p>"+element.first_name+" "+element.last_name+"</p>");
		});
	});



	// POST
	$("#formulario").submit(function(e){	//con la e captramos un evento
		e.preventDefault();		//con esto logramos no redigir con la accion por defecto del formulario
		var usuario = {
			name: $('input[name="name"]').val(),	//se recojen los valores de los input
			edad: $('input[edad="edad"]').val()
		}; 


		/*
		$.post($(this).attr("action"), usuario, function(response){  //this se refiere al formulario, y coge el atributo que hay en action(que es el link)
			console.log(response);
		}).done(function(){		// DONE: lo que hace es capturar cuando la peticion a tenido exito y ha terminado
			alert("Usuario añadido correctamente");
		});
		*/


		//$.AJAX
		//esto es lo mismo de arriba comentado, pero de manera mucho más sencilla y ordenada
		$.ajax({
			type: 'POST',
			url: $(this).attr("action"),
			data: usuario,
			beforeSend: function(){
				console.log("Enviando usuario...");
			},
			success: function(response){
				console.log(response);
			},
			error: function(){
				console.log("A ocurrido un error");
			},
			timeout: 2000	//si tarda mas de 2 seg en enviar el usuario, arrojaria error.
		})



		return false;	//con esto logramos no redigir con la accion por defecto del formulario
	});



});