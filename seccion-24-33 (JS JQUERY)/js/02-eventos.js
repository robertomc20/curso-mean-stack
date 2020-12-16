$(document).ready(function(){
	//alert("Eventos.js cargados");

	// MouseOver y MouseOut
	var caja = $("#caja");

	/*
	caja.mouseover(function(){  //este evento es al pasar el mouse encima de algo
		$(this).css("background","red");
	});

	caja.mouseout(function(){	//este evento es al sacar el mouse encima de algo
		$(this).css("background","green");
	});
	*/


	// Hover  -- hace lo mismo de arriba pero de manera mas efectiva y menos codigo
	//**hover cuenta con 2 funciones
	function cambiaRojo(){
		$(this).css("background","red");
	}

	function cambiaVerde(){
		$(this).css("background","green");
	}


	caja.hover(cambiaRojo, cambiaVerde);  //la primera funcion indicada, es el mouseOver y la segunda el mouseOut



	// Click, Doble click
	caja.click(function(){
		$(this).css("background","blue")
			   .css("color","white");
	});


	caja.dblclick(function(){
		$(this).css("background","pink")
			   .css("color","yellow");
	});




	// Focus y Blur    -- permite hacer alguna accion cuando este en el foco de algun elemento html y blur cuando este afuera.
	//**lo mas comun es con un formulario
	//cuando se usara varias veces un elemento dom, es mejor instanciarla como variable para no cargar tanto el dom y vaya mas rapido
	var nombre = $("#nombre");
	var datos = $("#datos");

	nombre.focus(function(){
		$(this).css("border","2px solid green");
	});

	nombre.blur(function(){
		$(this).css("border","2px solid #ccc"); 
		//$(this).val(); //con val, permite sacar el valor de la variable
		//$("#datos").show();  //asi se mmuestra algo oculto (display:none)
		//**pero para manipular el texto y mostrar el valor del atributo, se usa la funcion text
		//**para mostrar e imprimir el valor se hace algo así:
		datos.text($(this).val()).show();
	});


	// Mousedown y mouseup   --- mousedown es cuando apreto el click y mouseup cuando suelto el click
	datos.mousedown(function(){
		$(this).css("border-color","gray");
	});

	datos.mouseup(function(){
		$(this).css("border-color","black");
	});


	// Mousemove  -- captura el evento de movimiento del raton
	$(document).mousemove(function(){
		var sigueme = $("#sigueme");
		//podemos ocular el raton y que solo sea el circulo amarillo con lo siguiente:
		$("body").css("cursor","none");
		//console.log("En X: "+ event.clientX);	// arroja coordenadas de x del mouse
		//console.log("En Y: "+ event.clientY);	// arroja coordenadas de y del mouse
		//esto haria que la luz siga al raton, esto es comun en juegos, entre otras cosas.
		sigueme.css("left",event.clientX)	//esto mueve el circulo amarillo en el x
			   .css("top",event.clientY);		//esto mueve el circulo amarillo en el y
	});


});