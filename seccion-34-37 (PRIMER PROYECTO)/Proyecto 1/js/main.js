$(document).ready(function(){

	// Slider
	//para ver mas opciones del plugin, ver pagina https://bxslider.com/options/
	//haremos un if para que solo los carge en la página index.html
	//LA BUENA PRACTICA, ES HACER CADA ARCHIVO JS PARA CADA PAGINA, SOLO POR ESTA OCASIÓN LO HAREMOS ASÍ
	if(window.location.href.indexOf('index') > -1){		//con esta condicion, hacemos que verifique que este en index.html
		$('.bxslider').bxSlider({
			mode: 'fade',
			captions: true,
			slideWidth: 1310,  //tamaño de las fotos 
			responsive: true,
			pager: true //son los puntos que tiene el slider
		});
	}
	


	// Posts
	// con moment puedo formatear la fecha como unx quiere, hay que buscarla en https://cdnjs.com/libraries/moment.js
	//	https://momentjs.com/
	// .day() arroja el día del mes(si es el primer viernes del mes, mostrar 5),   
	// .date() arroja el día en numero de la fecha(si estamos 25, muestra 25)
	// para ver mas opciones, ver documentación moment
	// haremos lo mismo que con el slider, que solo funcione en el index.html
	if(window.location.href.indexOf('index') > -1){
		var posts = [
			{
				title: 'Prueba de titulo 1',
				date: 'Publicado el día: ' + moment().format("dddd") + " " + moment().date() + ' de ' + moment().format("MMMM") + ' del ' + moment().format("YYYY"), 
				content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus erat erat, finibus a pharetra at, tincidunt vitae enim. Proin imperdiet ultricies nisi, et aliquet tellus tristique lobortis. Vivamus interdum augue diam, at mattis leo congue sit amet. Donec ut ipsum sit amet diam pharetra tempus euismod a justo. Mauris sit amet ullamcorper felis. Donec ac lorem pellentesque, blandit odio quis, laoreet eros. Quisque a nisl ultrices, mattis augue vitae, consequat nulla. Maecenas nec magna erat. Aliquam eget dui sed nulla vulputate hendrerit quis ut elit. Pellentesque volutpat fermentum sapien bibendum euismod. Morbi sed hendrerit tellus.'
			},
			{
				title: 'Prueba de titulo 2',
				date: 'Publicado el día: ' + moment().format("dddd") + " " + moment().date() + ' de ' + moment().format("MMMM") + ' del ' + moment().format("YYYY"),
				content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus erat erat, finibus a pharetra at, tincidunt vitae enim. Proin imperdiet ultricies nisi, et aliquet tellus tristique lobortis. Vivamus interdum augue diam, at mattis leo congue sit amet. Donec ut ipsum sit amet diam pharetra tempus euismod a justo. Mauris sit amet ullamcorper felis. Donec ac lorem pellentesque, blandit odio quis, laoreet eros. Quisque a nisl ultrices, mattis augue vitae, consequat nulla. Maecenas nec magna erat. Aliquam eget dui sed nulla vulputate hendrerit quis ut elit. Pellentesque volutpat fermentum sapien bibendum euismod. Morbi sed hendrerit tellus.'
			},
			{
				title: 'Prueba de titulo 3',
				date: 'Publicado el día: ' + moment().format("dddd") + " " + moment().date() + ' de ' + moment().format("MMMM") + ' del ' + moment().format("YYYY"),
				content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus erat erat, finibus a pharetra at, tincidunt vitae enim. Proin imperdiet ultricies nisi, et aliquet tellus tristique lobortis. Vivamus interdum augue diam, at mattis leo congue sit amet. Donec ut ipsum sit amet diam pharetra tempus euismod a justo. Mauris sit amet ullamcorper felis. Donec ac lorem pellentesque, blandit odio quis, laoreet eros. Quisque a nisl ultrices, mattis augue vitae, consequat nulla. Maecenas nec magna erat. Aliquam eget dui sed nulla vulputate hendrerit quis ut elit. Pellentesque volutpat fermentum sapien bibendum euismod. Morbi sed hendrerit tellus.'
			},
			{
				title: 'Prueba de titulo 4',
				date: 'Publicado el día: ' + moment().format("dddd") + " " + moment().date() + ' de ' + moment().format("MMMM") + ' del ' + moment().format("YYYY"),
				content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus erat erat, finibus a pharetra at, tincidunt vitae enim. Proin imperdiet ultricies nisi, et aliquet tellus tristique lobortis. Vivamus interdum augue diam, at mattis leo congue sit amet. Donec ut ipsum sit amet diam pharetra tempus euismod a justo. Mauris sit amet ullamcorper felis. Donec ac lorem pellentesque, blandit odio quis, laoreet eros. Quisque a nisl ultrices, mattis augue vitae, consequat nulla. Maecenas nec magna erat. Aliquam eget dui sed nulla vulputate hendrerit quis ut elit. Pellentesque volutpat fermentum sapien bibendum euismod. Morbi sed hendrerit tellus.'
			},
			{
				title: 'Prueba de titulo 5',
				date: 'Publicado el día: ' + moment().format("dddd") + " " + moment().date() + ' de ' + moment().format("MMMM") + ' del ' + moment().format("YYYY"),
				content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus erat erat, finibus a pharetra at, tincidunt vitae enim. Proin imperdiet ultricies nisi, et aliquet tellus tristique lobortis. Vivamus interdum augue diam, at mattis leo congue sit amet. Donec ut ipsum sit amet diam pharetra tempus euismod a justo. Mauris sit amet ullamcorper felis. Donec ac lorem pellentesque, blandit odio quis, laoreet eros. Quisque a nisl ultrices, mattis augue vitae, consequat nulla. Maecenas nec magna erat. Aliquam eget dui sed nulla vulputate hendrerit quis ut elit. Pellentesque volutpat fermentum sapien bibendum euismod. Morbi sed hendrerit tellus.'
			},
			{
				title: 'Prueba de titulo 6',
				date: 'Publicado el día: ' + moment().format("dddd") + " " + moment().date() + ' de ' + moment().format("MMMM") + ' del ' + moment().format("YYYY"),
				content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus erat erat, finibus a pharetra at, tincidunt vitae enim. Proin imperdiet ultricies nisi, et aliquet tellus tristique lobortis. Vivamus interdum augue diam, at mattis leo congue sit amet. Donec ut ipsum sit amet diam pharetra tempus euismod a justo. Mauris sit amet ullamcorper felis. Donec ac lorem pellentesque, blandit odio quis, laoreet eros. Quisque a nisl ultrices, mattis augue vitae, consequat nulla. Maecenas nec magna erat. Aliquam eget dui sed nulla vulputate hendrerit quis ut elit. Pellentesque volutpat fermentum sapien bibendum euismod. Morbi sed hendrerit tellus.'
			},
		];
	

		console.log(posts);

		//con esto recorremos los posts ingresados por json y los mostramos en el div posts
		posts.forEach((item, index) => {
			var post = `
			<article class="post">
				<h2>${item.title}</h2>
				<span class="date">${item.date}</span>
				<p>
					${item.content}
				</p>
				<a href="#" class="button-more">Leer más</a>
			</article>
			`;

			$("#posts").append(post);
		});
	}

	// Selector de temas
	var theme = $("#theme");

	$("#to-green").click(function(){
		theme.attr("href","css/green.css");
	});

	$("#to-red").click(function(){
		theme.attr("href","css/red.css");
	});
	

	$("#to-blue").click(function(){
		theme.attr("href","css/blue.css");
	});
	
	
	//Scroll arriba de la web
	$(".subir").click(function(e){
		e.preventDefault(); 	//esto es para que el link no haga su funcion fundamental, que es llevarnos a otro sitio.

		$('html, body').animate({	//se usa animate, para hacer una animación y se selecciona en donde, que sea en el html en su body
			scrollTop: 0  	//scrollTop lo que hace es subir y si se pone parametro 0, subira al parametro 0, osea, el inicio.
		}, 500); 	//500milisegundos en subir

		return false;
	});


	// Login falso
	$("#login form").submit(function(){
		var form_name = $("#form_name").val();	//recojemos el valor en la variable

		localStorage.setItem("form_name", form_name);	//ingresamos la variable en el localStorage
	});

	var form_name = localStorage.getItem("form_name");	//recojemos el valor del localStorage

	if(form_name != null && form_name != "undefined"){	//nos aseguramos que se ingrese un nombre		
		var about_parrafo = $("#about p");

		about_parrafo.html("<br><strong> Bienvenido " + form_name + "</strong>");	//incrustamos el valor en el html en la parte que unx quiera
		about_parrafo.append("<a href='#' id='logout'>Cerrar sesión</a>");	//añadimos un link para cerrar sesión

		$("#login").hide();	//escondemos el formulario una vez "logeado" el usuario

		$("#logout").click(function(){
			localStorage.clear();	//si le damos click a logout, limpia el storage
			location.reload();	//y actualiza la ventana
		});
	}


	// Acordeon (hecho con jquery UI)
	if(window.location.href.indexOf('about') > -1){	
		$("#acordeon").accordion();
	}



	// Reloj
	if(window.location.href.indexOf('reloj') > -1){	
		setInterval(function(){		//la funcion setInterval permite ejecutar un codigo cada cierto tiempo
			var reloj = moment().format("hh:mm:ss");
			$("#reloj").html(reloj);
		},1000);	// 1000milisegundos = 1 segundo, cada este tiempo se va ir ejecutando el codigo
		
	}



	// Validación // buscar jquery validation plugin y saldran muchos para usar
	if(window.location.href.indexOf('contact') > -1){

		$("form input[name='date']").datepicker({	//esto hace que todos los formularios que tengan un input con name date, tenga una calendario
			//esto no seria necesario, pero queremos cambiarle el formate del datepicker
			dateFormat: 'dd-mm-yy'
		});	

		$.validate({
			lang: 'es',	//mensaje de error en español
			errorMessagePosition: 'top',	//lleva hacia arriba si hay un error
			scrollToTopOnError: true 		//muestra todos los detalles del error
		});
	}

});