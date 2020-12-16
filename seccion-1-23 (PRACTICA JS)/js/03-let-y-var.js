'use strict'


// pruebas con variables let y var

// PRUEBA CON VAR
// variables var trabajan a nivel global
var numero = 40;
console.log(numero); // valor 40 ya que anteriormente se definio 40

if(true){
    var numero = 50;
    console.log(numero); // valor 50
}
 
console.log(numero); // valor 50


// PRUEBA CON LET
//variables let trabajan a nivel de bloque
var texto = "curso js";
console.log(texto); // valor js

if(true){
    let texto = "curso laravel 5";
    console.log(texto); // valor laravel 5
}

console.log(texto); // valor js