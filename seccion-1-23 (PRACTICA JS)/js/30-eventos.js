'use strict'


// Eventos

//LA FUNCION LOAD SIRVE PARA PODER CARGAR EL SCRIPT AL INICIO DEL INDEX.HTML
//YA QUE CON FUNCIONES DE DOM O BOM, AL INICIO DEL HTML AUN NO HAY ETIQUETAS,ETC
//CARGADAS, POR LO CUAL TIRA ERROR, CON ESTO SE SOLUCIONA.
//SE ENCAPSULA TODO EL SCRIPT DENTRO DEL EVENTO LOAD.
//window.addEventListener("load", function(){}); se puede hacer como funcion de callback o flechas
window.addEventListener("load",() =>{


	// Los eventos son funciones que se ejecutan cuando sucede algo


	// Eventos del raton (click en algo, pasar encima de algo, etc)
	//EN EL HTML, EN EL BOTON SE DEBE PONER como atributo del boton: on click = "NOMBRE DE FUNCION();"
	//aunque es mejor haciendo todo en un lado, en este caso, en js como lo estamos haciendo
	var boton = document.querySelector("#boton");

	function cambiarColor(){
		console.log("me has dado click"); //para verificar que esta funcionando
		var bg = boton.style.background;
		if(bg == "green"){
			boton.style.background = "red";
		}else{
			boton.style.background = "green";
		}

		boton.style.padding = "10px";
		boton.style.border = "1px solid #ccc";

		return true;
	}


	//EVENTO CLICK DEL RATON TOTALMENTE DESDE JS
	//este evento se debeb hacer con funcion de callback o flechas
	boton.addEventListener("click", function(){ //aqui usamos funcion de callback y llamamos nuestra funcion ya creada 
		cambiarColor();
		//USANDO FUNCION THIS
		//añadiendo nuevas propiedades
		//boton.style.border = "10px solid black";
		this.style.border = "10px solid black"; //esto es lo mismo que arriba, this hace referencia al elemento al cual le estamos dando click (boton)
		console.log(this);
	});

	// Mouse over  -- es cuando pasa el mouse por encima de algo
	boton.addEventListener("mouseover", function(){
		boton.style.background = "yellow";
	});

	// Mouse out -- es cuando sales de pasar por encima de algo
	boton.addEventListener("mouseout", function(){
		boton.style.background = "#ccc";
	});


	//EVENTOS DEL TECLADO
	//Focus     //es cuando estas dentro de un input
	var input = document.querySelector("#campo_nombre");
	input.addEventListener("focus", function(){
		console.log("[FOCUS] Estas dentro del input");
	});

	//Blur   // es cuando sales de un input
	input.addEventListener("blur", function(){
		console.log("[BLUR] Estas fuera del input");
	});

	//Keydown   // tecla que es esta pulsando
	input.addEventListener("keydown", function(event){ //aca le pasamos el parametro event
		console.log("[KEY DOWN] Pulsando esta tecla", String.fromCharCode(event.keyCode)); //String.fromCharCode() sirve para capturar cosas del teclado
																// asi podemos capturar lo del evento con el parametro event
																//con nlo cual captura cada tecla que se pulse en el input
	});

	//Keypress    //tecla presionada
	input.addEventListener("keypress", function(event){
		console.log("[KEY PRESS] Tecla presionada", String.fromCharCode(event.keyCode)); 
																
	});

	//Keyup   //permite caputrar el eevento cuando levantas el dedo de la tecla
	input.addEventListener("keyup", function(event){
		console.log("[KEY UP] Tecla soltada", String.fromCharCode(event.keyCode)); 
																
	});

});