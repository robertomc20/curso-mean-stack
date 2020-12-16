'use strict'

// EL TRY-CATCH sirve para controlar los errores, y que arroje el error como codigo/alerta
// y no como un error
try{		//en el try se pone que lo hará el codigo
	var year = 2020;
	alert(year);  
	
	var vector = new Array(9999999999999999999999999999);  //aaca esta el error

}catch(error){		//en el catch se controla el error
	console.log(error);
	alert("A ocurrido un error en el codigo");			
}


