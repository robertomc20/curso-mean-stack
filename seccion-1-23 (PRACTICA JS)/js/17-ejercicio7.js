'use strict'

// Tabla de multiplicar de un numero introducido por pantalla

var numero = parseInt(prompt("Ingrese un numero: ", 0));

while(isNaN(numero)){
	var numero = parseInt(prompt("Ingrese un numero: ", 0));
}

//una tabla de multiplicar - //opcion 1
for(var i = 1 ;i <= 12 ;i++){
	var resultado = numero*i;
	document.write(""+numero+" * "+i+" = "+resultado+"");
	document.write("</br>")
}

//opcion 2
for(var i = 1; i <= 10; i++){
		document.write(i+" x "+numero+" = "+(i*numero)+"</br>");
	}

//todas las tablas de multiplicar
for(var c = 1; c <= 10; c++){
	document.write("<h1>Tabla del "+c+"</br>");
	for(var i = 1; i <= 10; i++){
		document.write(i+" x "+c+" = "+(i*c)+"</br>");
	}
}