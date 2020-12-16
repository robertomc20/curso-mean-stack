$(document).ready(function(){
	var caja = $("#caja");  // como usaremos muchas veces este elemento, lo instaciamos para no sobrecargar el dom

	// Efectos hide y show
	/*
	$("#mostrar").hide();

	$("#mostrar").click(function(){
		$(this).hide();
		$("#ocultar").show();
		caja.show('fast');  //la velocidad es opcional, slow - normal - fast
	});

	$("#ocultar").click(function(){
		$(this).hide();
		$("#mostrar").show();
		caja.hide('fast');
	});
	*/

	/*
	// Efectos fadeIn y fadeOut -- lo mismo que los anteriores pero es como un efecto de fundido
	$("#mostrar").hide();

	$("#mostrar").click(function(){
		$(this).hide();
		$("#ocultar").show();
		caja.fadeIn('slow');  //la velocidad es opcional, slow -normal - fast
	});

	$("#ocultar").click(function(){
		$(this).hide();
		$("#mostrar").show();
		caja.fadeOut('slow');
	});
	*/


	// Efectos fadeTo
	/*
	$("#mostrar").hide();

	$("#mostrar").click(function(){
		$(this).hide();
		$("#ocultar").show();
		caja.fadeTo('fast', 1);  //aqui el 1, es la opacidad, si tiene 1 de opacidad, el objeto se ve.
	});

	$("#ocultar").click(function(){		//se puede usar la opacidad que uno desee.
		$(this).hide();
		$("#mostrar").show();
		caja.fadeTo('fast', 0);	//aqui el 0, es la opacidad, si tiene 0 de opacidad, el objeto NO se ve.
	});
	*/


	// Efectos slideUp y slideDown
	$("#mostrar").hide();

	$("#mostrar").click(function(){
		$(this).hide();
		$("#ocultar").show();
		caja.slideDown('fast');  //slideDown lo muestra
	});

	$("#ocultar").click(function(){	
		$(this).hide();
		$("#mostrar").show();
		//**podemos mostrar en consola que muestre cuando se oculte, pero si lo hacemos asi nomas,
		//**lo mostrara cuando se aprete el boton, para hacerlo cuando se termine de ocultar,
		//**se pueden usar funciones de callback dentro de los efectos
		// Callback dentro de un efecto
		caja.slideUp('fast', function(){	//slideUp lo oculta
			console.log("Cartel ocultado");
		});	
	});
	


	// Toggle - Lo mismo de arriba pero con un solo boton (un toggle)
	//**hay muchos efectos del toggle, que estarán comentados
	$("#todoenuno").click(function(){
		caja.toggle('fast');
		//caja.fadeToggle('fast');
		//caja.slideToggle('fast');
	});
	

	// Animate ---  metodo animate permite hacer funciones css que uno desee
	//**primero se indica en json las propiedades css, y como segundo valor la velocidad.
	//**también se pueden encadenar animate dentro de otros animate para poder crear distintas animaciones
	$("#animar").click(function(){
		caja.animate({
					  marginLeft: '500px',	//con esto se mueve hacia la derecha		
					  fontSize: '40px',		//crece el texto
					  height: '110px'		//crece la caja
					 }, 'slow')
		.animate({
			borderRadius: '900px',
			marginTop: '80px'
		}, 'slow')
		.animate({
			borderRadius: '0px',
			marginLeft: '0px'
		}, 'slow')
		.animate({
			borderRadius: '900px',
			marginTop: '0px'
		}, 'slow')
		.animate({	//la misma del inicio para que vuelva a su posicion inicial
					  marginLeft: '500px',			
					  fontSize: '40px',		
					  height: '110px'		
					 }, 'slow')
		;		
	});

});