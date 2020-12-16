// Funciones
// se hacen igual que en JS
// solo se cambia en que aqui, se puede definir el tipado del parametro de las funciones
//** aqui se define numero:number como number, y :string significa que devolvera un string
function getNumero(numero: number = 12): string{
	return "El numero es: " + numero;
}

console.log(getNumero(55));