'use strict'

// BOM - Browser Objet Model
//permite trabajar con el navegador.

//aqui podemos sacar el ancho y largo de la ventana del navegador y pantalla
//la meteremos en una funcion solo para poder ejectuarla en el navegador
//ya que cambian dependiendo del tamaño de la consola en el navegador
function getBom(){
	console.log(window.innerWidth); //datos de ventana
	console.log(window.innerHeight);

	console.log(screen.width);	//datos de pantalla
	console.log(screen.height);

	console.log(window.location); //locacion
	console.log(window.location.href);
}


//redirigir a otras paginas  
function redirect(url){
	window.location.href = url;   //esto permite llamar la funcion y señalar a que pagina dirigir
}

//abrir una ventana en el navegador
function abrirVentana(url){
	window.open(url);	//esto permite llamar la funcion y señalar que pagina abrir
}


//se puede hacer lo mismo de arriba y editando el tamaño de la ventana que abrira
function abrirVentanaPequena(url){
	window.open(url,"","width=400,height=300");	//esto permite llamar la funcion y señalar que pagina abrir
}



//y muchas cosas mas se puede hacer, todo lo que tiene que ver con el navegador

getBom();