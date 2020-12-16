// ** esto se puede hacer también en JS, pero la diferencia es que puede generar errores en navegadores antiguos,
// ** por lo cual es recomendable hacerlo en TS.
// El archivo se llama así solo por tema del curso, en caso real se deberia llamar "camiseta.js"

// Interface
interface CamisetaBase{
	setColor(color);
	getColor();
}



// Decoradores
//** es un patron de diseño que permite mediante metadatos que nosotros definimos a una clase, hacer una copia de esa 
//** misma clase y modificarla o que haga unas cosas u otras en funcion a los parametros que le pasemos.
function estampar(logo: string){
	return function(target: Function){
		target.prototype.estampacion = function(): void{	//void significa que no tiene ninguna respuesta, no devuelve nada
			console.log("Camiseta estampada con el logo de: "+logo);
		}
	}
}


// Clase (Molde del objeto)	
//** para usar el decorador: (SIN ;)
@estampar('Gucci')
//** export class permite usar la clase en cualquier otro archivo
//** implements permite aplicar la interface a la clase
class Camiseta implements CamisetaBase{
	// Propiedades (Caracteristicas del objeto)
	// ** public: se puede acceder a las Propiedades y Metodos desde cualquiera lugar.
	// ** protected: Se puede acceder desde la clase definida o clase heredada.
	// ** private: Se puede acceder solo desde la clase que los define, osea, desde dentro de la clase.
	private color: string;
	private modelo: string;
	private marca: string;
	private talla: string;
	private precio: number;
	

	// Métodos (Funciones o acciones del objeto)

	//** CONSTRUCTOR
	//** es un metodo especial dentro de una clase y se suele utilizar para darle un valor inicial
	//** a las propiedades del objeto al crearlo, es el primer metodo que se ejecuta al crear el objeto y se llama con solo crearlo
	//** este puede recibir parametros, para eso hay que pasarle los parametros al objeto en si al instanciarlo.
	//** EL CONSTRUCTOR NUNCA DEVUELVE NINGUN DATO
	constructor(color, modelo, marca, talla, precio){
		this.color = color;
		this.modelo = modelo;
		this.marca = marca;
		this.talla = talla;
		this.precio = precio; 
	}


	public setColor(color){
		this.color = color;
	}

	public getColor(){
		return this.color;
	}

}


// Clase hija   ---  permite heredar todos los atributos, metodos, etc de una clase padre
//** el extends permite heredar la clase de otra
class Sudadera extends Camiseta{
	//** podemos añadir mas atributos que no tiene la clase padre
	public capucha: boolean;

	setCapucha(capucha: boolean){
		this.capucha = capucha;
	}

	getCapucha(): boolean{
		return this.capucha;
	}
}



var camiseta = new Camiseta("dsad","dsad","dsad","dsad",2222);
console.log(camiseta);
camiseta.estampacion();

var sudadera_nike = new Sudadera("rojo","manga larga","nike","L",30);
sudadera_nike.setCapucha(true);
sudadera_nike.setColor("Gris Jaspeado");//Metodo que esta en clase padre

console.log(sudadera_nike);