// 'use strict' se pone en cada fichero js
// lo que hace es que te obliga a seguir buenos estandares de programacion js
// si usamos strict, un ejemplo es que si se crea una variables poniendo:
// pais = "Chile"; va tirar error, ya que hay que señalar que es una variable anteponiendo el "var"
// en cambio sin usar strict no tirara error, es recomendable usar strict 
// tambien deja usar ciertas funcionalidades
'use strict'


// VARIABLES
// una vairable es un contenedor de información
var pais = "Chile";
var continente = "SA";
var antiguedad = 2019;
var pais_y_continente = pais+' '+continente;    // aqui se concatenaron variables


// CAMBIO DE VARIABLES
// para cambiar variables no hace falta poner var ... 
// solo se indica variable = "nuevo resultado";
pais = "Mexico";
continente = "Latinoamerica";
console.log(pais_y_continente = pais+' '+continente); 

console.log(pais,continente,antiguedad)
alert(pais_y_continente);
// despues en la consola si pongo console.log(pais,continente,antiguedad); muestra el resultado de las variables
