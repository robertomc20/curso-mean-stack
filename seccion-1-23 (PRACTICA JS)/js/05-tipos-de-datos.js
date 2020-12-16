'use strict'

// OPERADORES
var numero1 = 7; // numero entero se pone sin comillas
var numero2 = 12;
var operacion = numero1 * numero2;  // el operador puede ser cualquiera + - / * %

alert("El resultado de la operación es: " + operacion);  


// Tipos de datos
var numero_entero = 44;
var cadena_texto = "hola"; // se pueden usar comillas dobles o simples
var verdadero_o_falso = true; // puede ser true o false / 0 o 1

var numero_falso = "33.4"; //no deja hacer operaciones, ya que lo toma como texto y no numero
// si se quiere hacer operaciones con este hay que usar la funcion Number o transformarlo a numero

console.log(numero_falso+22); // al ser numero falso(texto y no numero) solo concatena en vez de sumar
console.log(Number(numero_falso)+7);
console.log(parseInt(numero_falso)+7); // muestra enteros 
console.log(parseFloat(numero_falso)+7); // muestra decimales
console.log(String(numero_entero)+7); //concatena y no suma, ya que converti un numero en texto




// TYPEOF para saber en la consola que tipo de variable
console.log(typeof numero_entero);
console.log(typeof verdadero_o_falso);
console.log(typeof cadena_texto);
console.log(typeof numero_falso);
console.log(typeof numero1);

