// Clases  //  Pequeña muestra de programación orientada a objetos
// Esta manera de crear clases, es bastante buena cuando no podemos usar una programacion
// orientada a objetos mas potente o mas grande, el problema es que puede no ser compatible con navegadores antiguos.
var bicicleta = {
	color: 'rojo',
	modelo: 'BMX',
	frenos: 'De disco',
	velocidadMaxima: '60km',
	cambiaColor: function(nuevo_color){	//puedo poner funciones de callback en atributos de una variable
		//bicileta.color = nuevo_color;
		this.color = nuevo_color;
		console.log(this);
	}	
};

bicicleta.cambiaColor("Azul");

