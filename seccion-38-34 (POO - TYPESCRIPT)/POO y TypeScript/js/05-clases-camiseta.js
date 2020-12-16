// ** esto se puede hacer también en JS, pero la diferencia es que puede generar errores en navegadores antiguos,
// ** por lo cual es recomendable hacerlo en TS.
// El archivo se llama así solo por tema del curso, en caso real se deberia llamar "camiseta.js"
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// Decoradores
//** es un patron de diseño que permite mediante metadatos que nosotros definimos a una clase, hacer una copia de esa 
//** misma clase y modificarla o que haga unas cosas u otras en funcion a los parametros que le pasemos.
function estampar(logo) {
    return function (target) {
        target.prototype.estampacion = function () {
            console.log("Camiseta estampada con el logo de: " + logo);
        };
    };
}
// Clase (Molde del objeto)	
//** para usar el decorador: (SIN ;)
var Camiseta = /** @class */ (function () {
    // Métodos (Funciones o acciones del objeto)
    //** CONSTRUCTOR
    //** es un metodo especial dentro de una clase y se suele utilizar para darle un valor inicial
    //** a las propiedades del objeto al crearlo, es el primer metodo que se ejecuta al crear el objeto y se llama con solo crearlo
    //** este puede recibir parametros, para eso hay que pasarle los parametros al objeto en si al instanciarlo.
    //** EL CONSTRUCTOR NUNCA DEVUELVE NINGUN DATO
    function Camiseta(color, modelo, marca, talla, precio) {
        this.color = color;
        this.modelo = modelo;
        this.marca = marca;
        this.talla = talla;
        this.precio = precio;
    }
    Camiseta.prototype.setColor = function (color) {
        this.color = color;
    };
    Camiseta.prototype.getColor = function () {
        return this.color;
    };
    Camiseta = __decorate([
        estampar('Gucci')
        //** export class permite usar la clase en cualquier otro archivo
        //** implements permite aplicar la interface a la clase
    ], Camiseta);
    return Camiseta;
}());
// Clase hija   ---  permite heredar todos los atributos, metodos, etc de una clase padre
//** el extends permite heredar la clase de otra
var Sudadera = /** @class */ (function (_super) {
    __extends(Sudadera, _super);
    function Sudadera() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Sudadera.prototype.setCapucha = function (capucha) {
        this.capucha = capucha;
    };
    Sudadera.prototype.getCapucha = function () {
        return this.capucha;
    };
    return Sudadera;
}(Camiseta));
var camiseta = new Camiseta("dsad", "dsad", "dsad", "dsad", 2222);
console.log(camiseta);
camiseta.estampacion();
var sudadera_nike = new Sudadera("rojo", "manga larga", "nike", "L", 30);
sudadera_nike.setCapucha(true);
sudadera_nike.setColor("Gris Jaspeado"); //Metodo que esta en clase padre
console.log(sudadera_nike);
