'use strict'


//LA VARIABLE HOLA_MUNDO SOLO ESTA DENTRO DE LA FUNCIÓN, POR LO CUAL ES UNA
//VARIABLE LOCAL LA CUAL NO PUEDE SER LLAMADA FUERA DE LA FUNCIÓN
function holaMundo(texto){
	var hola_mundo = "Texto dentro de funcion"; 
	console.log(texto);
	console.log(numero);
	console.log(hola_mundo);
}

//ESTAS VARIABLES SON VARIABLES GLOBALES, LO OPUESTO A LA ANTERIOR
var numero = 12;
var texto = "Hola mundo soy una variable global";
holaMundo(texto);


//esto arrojará error ya que la variable no esta definida en el ambito global
//console.log(hola_mundo);