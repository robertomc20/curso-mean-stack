$(document).ready(function(){

	// Draggable   --  Mover elemento por la pagina
	$('.elemento').draggable();		//esto nos permite mover los elementos en la pagina web


	// Resizable   --  Redimensionar elementos
	$('.elemento').resizable();	


	// Selectable   -- Seleccionar elementos
	//$('.lista-seleccionable').selectable();
	/*
	se debe cambiar  los estilos en el css o <style> para que funcione
	ul .ui-selecting {background: green;}
	ul .ui-selected {background: blue;}
	*/


	// Sortable   --   Permite organizar elementos como uno quiera **debe estar solo 1 activo (selectable o sortable)
	//$('.lista-seleccionable').sortable();


	// Lo mismo de arriba pero con una funcion
	//**la propiedad update, con la funcion de callback recoje el evento y la funcion ui,
	//permitiendo detectar cambios en la lista, con esto ya se puede hacer muchas funciones
	//tal como recorrer los elementos en un bucle, guardarlas en una bd, etc.
	$('.lista-seleccionable').sortable({
		update: function(event, ui){		
			console.log("La lista ha cambiado");
		}
	});


	// Droppable    ---    Funcion Drop
	//** CADA METODO TIENE DISTINTAS FUNCIONES, acá vemos el drop
	//** que detecta cuando algo se arroja dentro del elemento
	$("#elemento-movido").draggable();
	$("#area").droppable({
		drop: function(){
			console.log("Has soltado algo dentro del area");
		}
	});



	// Efectos   ---   **la caja(div) esta oculta en el html
	//se puede usar toggle o effect // y tiene distintos 
	//efectos(fade, explode, slide, fall, puff, drop, shake, etc para ver mas, ver documentacion)
	//se puede pasar opciones de tamaño, velocidades etc. ejemplo: $(".caja-efectos").toggle("explode","slow", 4000); 4000 es 4 segundos	
	
	$("#mostrar").click(function(){
		$(".caja-efectos").toggle("explode","slow");	
	});




	// Tooltip   --- es un pequeño pop up cuando paso por arriba de algun elemento.
	//** se señala con el atributo title en el html y eso se muestra como pop up al pasar por arriba
	//**https://calebjacob.github.io/tooltipster/ ahi hay muchos 
	$(document).tooltip();


	// Cuadros de dialogo    --    pequeños pop up
	$("#lanzar-popup").click(function(){
		$("#popup").dialog();
	});



	// Datepicker
	//** en internet hay muchos datepicker distintos
	$("#calendario").datepicker();
	


	//Tabs
	$("#pestanas").tabs();

});
