'use strict'

//se usa este evento load para poder cargar el script en el head del html
window.addEventListener("load", function(){

	// Timers

	//setInterval permite ejecutar una funcion de callback o trozo de codigo cada x cantidad de segundos.

	//setTimeout permite ejecutar una funcion de callback o trozo de codigo solo 1 vez, no un bucle como al interval

	//funciona igual que lo de abajo, cambiando la funcion a setTimeout
	//la crearemos dentro de una función para luego poder llamarla en distintos casos(como iniciar el intervalo con un boton)
	function intervalo(){
		var tiempo = setInterval(function(){ //setTimeout

			console.log("Set interval ejecutado");
			//haremos que cambie de tamaño un h1 cada cierto tiempo
			var encabezado = document.querySelector("h1");
			if(encabezado.style.fontSize == "50px"){
				encabezado.style.fontSize = "30px";
			}else{
				encabezado.style.fontSize = "50px";
			}
			
		}, 1000); //1000 milisegundos = a 1 segundo

		return tiempo;
	}

	//al crear la funcion y el return, deberemos crear la variable tiempo para recibir el tiempo del intervalo
	var tiempo = intervalo();

	//para parar el setInterval con un boton se puede hacer:
	var stop = document.querySelector("#stop");   //capturamos el boton

	stop.addEventListener("click", function(){  //se captura el click en el boton
		alert("Has detenido el intervalo en bucle");
		clearInterval(tiempo);					//se limpia el tiempo de intervalo, pasando la variable del setInterval
	});


	//y para iniciar el setInterval con un boton :
	var start = document.querySelector("#start");


	//lo hice con flechas solo para entender bien la forma callback o de flechas
	start.addEventListener("click", () => {
		alert("Has iniciado el intervalo");
		intervalo(tiempo);
	});

});

