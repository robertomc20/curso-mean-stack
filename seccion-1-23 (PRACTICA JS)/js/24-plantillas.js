'use strict'

// PLANTILLAS DE TEXTOS

var nombre = prompt("Ingresa tu nombre");
var apellidos = prompt("Ingresa tus apellidos");

//var texto = "Mi nombre es: "+nombre+" <br/> Mis apellidos son: "+apellidos;

//para crear la plantilla de textos
//se usa comillas invertidas alt + 96 ` ` para meter de forma multilinea un texto
// EL ${} SIRVE PARA IMPRIMIR VARIABLES DENTRO DE LA PLANTILLA
var texto = `
	<h1>Hola que tal</h1>
	<h3>Mi nombre es: ${nombre}</h3>  
	<h3>Mis apellidos son: ${apellidos}</h3>  

`;

document.write(texto);