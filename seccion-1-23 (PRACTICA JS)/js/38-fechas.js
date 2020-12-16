'use strict'

var fecha = new Date(); //así ya mostraria la fecha,hora día de sistema

//para sacar solo algunas cosas de la fecha
var year = fecha.getYear();
var mes = fecha.getMonth();
var dia = fecha.getDate();
var hora = fecha.getHours();

//.. (year, month, day, hours, minutes, seconds, milliseconds) todas estas variables se pueden 
// obtener con el getMinutes, etc...

//para sacar el año completo
var fullYear = fecha.getFullYear();

//comilla invertida es alt+96 ``
var textoHora = `
	El año es : ${fullYear}
	El mes es : ${mes}
	El día es el : ${dia}
	La hora es : ${hora}
`;

console.log(textoHora);


//operacion matematica
console.log(Math.ceil(Math.random()*10)); //ceil es para redondear a un numero entero //*10 es para que arroje un numero mas alto