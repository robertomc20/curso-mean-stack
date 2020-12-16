// String 	// Solo texto
var cadena = "Roberto Marihuan";
//cadena = 12;	arroja error
console.log(cadena);
// Number 	// Solo numeros
var numero = 12;
console.log(numero);
// Booleano		// 		solo true o false
var verdadero_falso = true;
console.log(verdadero_falso);
// Any 		// Permite meter cualquier valor
var cualquiera = "hola";
var cualquiera2 = 22;
console.log(cualquiera);
console.log(cualquiera2);
// Arrays	// Permite crear solo arreglos, el tipo de dato puesto dentro del <> obliga a que sea solo de ese tipo
// si le pongo <any>, dejara meter datos al arreglo con cualquier tipo de datos, si se pone <number> solo numeros, y así..
var lenguajes = ["PHP", "JS", "CSS"];
console.log(lenguajes);
// Otra forma de definir una Array    //   lo mismo que arriba, solo permite datos del tipo que se define.
var years = [12, 13, 14];
console.log(years);
// Multiples tipos de datos
// Una forma de crear multiples tipos de datos, es así (tomando como ejemplo, el primero que esta arriba):
// de esta forma, permite ingresar cadenas o numeros
var cadenaMultiple = "Roberto Marihuan";
var cadenaConTipoPersonalizado = "roberto";
// Let y var
// Let: Alcance de la variable a nivel de bloque ||||  Var: Alcance de la variable a nivel global
var numero1 = 10;
var numero2 = 12;
if (numero1 == 10) {
    var numero1_1 = 44;
    var numero2 = 55;
    //ya que se ejecuta el console.log dentrop del if, mostrara 44 y 55, ya que let es solo a nivel de bloque, en cambio var es a nivel global.
    console.log(numero1_1, numero2);
}
console.log(numero1, numero2); //aqui mostrara 10 y 55, ya que let solo actua en el bloque que se ejecuta, osea, en el if.
