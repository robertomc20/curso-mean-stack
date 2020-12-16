'use strict'

//Funciones
//Una funcion es una agrupación reutilizable de un conjunto de instrucciones


/*
//function ES PARA DEFINIR LA FUNCION

function calculadora(){
	//DENTRO DE LA FUNCION, VAN LAS INSTRUCCIONES A EJECUTAR

	console.log("hola, si soy la calculadora!");


	return "Hola soy la calculadora!";
}


//SE PUEDEN EJECUTAR LAS VECES QUE UNO QUIERA

//console.log(calculadora(),calculadora(),calculadora());

//INVOCAR O LLAMAR A LA FUNCION
var resultado = calculadora();

console.log(resultado);

*/


/*
//funcion fija
function calculadora(){
	console.log("Suma: " + (10+15));
	console.log("Resta: " + (10-15));
	console.log("Multiplicación: " + (10*15));
	console.log("División: " + (10/15));

	return "Hola soy la calculadora";
}

calculadora();
*/

///////funcion dinamica
/*
function calculadora2(numero1, numero2, mostrar = false){
	if(mostrar == false){
		console.log("Suma: " + (numero1+numero2));
		console.log("Resta: " + (numero1-numero2));
		console.log("Multiplicación: " + (numero1*numero2));
		console.log("División: " + (numero1/numero2));
		console.log(mostrar);
		console.log("**************************************")
	}else{
		document.write("Suma: " + (numero1+numero2)+"<br/>");
		document.write("Resta: " + (numero1-numero2)+"<br/>");
		document.write("Multiplicación: " + (numero1*numero2)+"<br/>");
		document.write("División: " + (numero1/numero2)+"<br/>");
		document.write((mostrar)+"<br/>");
		document.write("**************************************"+"<br/>");
	}
	
}


//INVOCAR O LLAMAR A LA FUNCION
calculadora2(1, 4, true);

//calculadora2(12, 8);
//calculadora2(98, 2);
*/


/*
for(var i = 1; i <= 10; i++){
	console.log(i);
	calculadora2(i, 8);
}

*/


///////FUNCIONES DENTRO DE OTRAS (LO MISMO DE ARRIBA PERO DE OTRA MANERA)
function porConsola(numero1, numero2){
	console.log("Suma: " + (numero1+numero2));
	console.log("Resta: " + (numero1-numero2));
	console.log("Multiplicación: " + (numero1*numero2));
	console.log("División: " + (numero1/numero2));
	console.log("**************************************")
}

function porPantalla(numero1, numero2){
	document.write("Suma: " + (numero1+numero2)+"<br/>");
	document.write("Resta: " + (numero1-numero2)+"<br/>");
	document.write("Multiplicación: " + (numero1*numero2)+"<br/>");
	document.write("División: " + (numero1/numero2)+"<br/>");
	document.write("**************************************"+"<br/>");
}



function calculadora(numero1, numero2, mostrar = false){
	if(mostrar == false){
		porConsola(numero1, numero2);
	}else{
		porPantalla(numero1, numero2);
	}
	return true;
}
	
calculadora(1, 4, true);