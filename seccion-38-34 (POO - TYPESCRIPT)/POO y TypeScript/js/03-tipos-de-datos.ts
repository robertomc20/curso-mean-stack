// String 	// Solo texto
let cadena: string = "Roberto Marihuan";	

//cadena = 12;	arroja error
console.log(cadena);


// Number 	// Solo numeros
let numero: number = 12;
console.log(numero);


// Booleano		// 		solo true o false
let verdadero_falso: boolean = true;
console.log(verdadero_falso);


// Any 		// Permite meter cualquier valor
let cualquiera: any = "hola";
let cualquiera2: any = 22;
console.log(cualquiera);
console.log(cualquiera2);


// Arrays	// Permite crear solo arreglos, el tipo de dato puesto dentro del <> obliga a que sea solo de ese tipo
// si le pongo <any>, dejara meter datos al arreglo con cualquier tipo de datos, si se pone <number> solo numeros, y así..
var lenguajes: Array<string> = ["PHP", "JS", "CSS"];
console.log(lenguajes);

// Otra forma de definir una Array    //   lo mismo que arriba, solo permite datos del tipo que se define.
let years: number[] = [12, 13 ,14];
console.log(years);


// Multiples tipos de datos
// Una forma de crear multiples tipos de datos, es así (tomando como ejemplo, el primero que esta arriba):
// de esta forma, permite ingresar cadenas o numeros
let cadenaMultiple: string | number = "Roberto Marihuan";	


// Tipos de datos PERSONALIZADOS
// esto permite crear un tipo de datos, que es alfanumerico, el cual permite cadenas y numeros
type alfanumerico = string | number;	//se crea con type
let cadenaConTipoPersonalizado: alfanumerico = "roberto";


// Let y var
// Let: Alcance de la variable a nivel de bloque ||||  Var: Alcance de la variable a nivel global
var numero1 = 10;
var numero2 = 12;

if(numero1 == 10){
	let numero1 = 44;
	var numero2 = 55;
	//ya que se ejecuta el console.log dentrop del if, mostrara 44 y 55, ya que let es solo a nivel de bloque, en cambio var es a nivel global.
	console.log(numero1, numero2);	

}

console.log(numero1, numero2);	//aqui mostrara 10 y 55, ya que let solo actua en el bloque que se ejecuta, osea, en el if.

