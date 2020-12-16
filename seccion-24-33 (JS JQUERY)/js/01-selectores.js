// COMPROBAR SI EL DOCUMENTO ESTA LISTO


//El $ se refiere a jQuery, si se pone jQuery, funciona igual, es un objeto. $ == jQuery

//(document) Es el selector, se refiere a toda la pagina web en general
//a que carge todos los scripts, etc.

//El metodo ready es un evento.

$(document).ready(function(){
	//console.log("Estamos listo!");  para ver si esta cargado jquery

	// Selector de ID

	//**se le puede definir como variable, var nombre = $(#rojo)... en caso de querer usarla
	$("#rojo").css("background","red")
			  .css("color","white");  //**asi se obtiene un selector, luego se puede obtener cualquier propiedad

 	$("#amarillo").css("background","yellow")
 				  .css("color","green");


 	$("#verde").css("background","green")
 			   .css("color","white");



 	// Selectores de clases
 	//** los selector de clases elige los elementos del dom mediante una clase
 	var mi_clase = $(".zebra").css("padding","5px");

 	$(".sin_borde").click(function(){
 		console.log("Click dado!");
 		//$(this).css("border","5px dashed black"); **esto sirve, pero con addClass añaderia todas las propiedades de la clase
 		//**para que funcione el addClass, se debe crear la clase de css antes, no acá. en este caso lo haremos en el html
 		$(this).addClass('zebra'); //**la funcion addClass permite que obtengan las propiedades de la clase seleccionada
 	})

 	//**al ver en la consola, arroja como una array los elementos con la clase .zebra
 	//console.log(mi_clase);  

 	//**si se quiere seleccionar un elemento del array, se puede hacer con el [] o metodo .eq
 	//**el cual sirve para seleccionar un elemento de un array.
 	//**console.log(mi_clase[1]);  o     console.log(mi_clase.eq(1);


 	// Selectores de etiqueta
 	var parrafos = $("p").css("cursor","pointer");  //esto le da la propiedad de la manito al pasar sobre el parrafo

 	//le quitaremos la clase zebra dandole click al parrafo solo si este tiene la clase zebra
 	parrafos.click(function(){
 		var that = $(this);  // con esto optimizamos la carga y velocidad.

 		if(!that.hasClass('grande')){	//**el metodo hasClass busca si el elemento tiene la clase indicada
 			that.addClass('grande');	//**addClass le agrega la clase seleccionada al elemento
 		}else{
 			that.removeClass('grande');	//**removeClass le quita la clase seleccionada al elemento
 		}
 		
 	});


 	// Selectores de atributos - permite seleccionar etiquetas, etc con ciertos atributos
 	$('[title="Google"]').css('background','#ccc');
 	$('[title="Facebook"]').css('background','blue');



 	// Otros
 	//$('p, a').addClass('margen-superior'); //acá seleccionamos los parrafos = p y los enlaces = a

 	var busqueda = $("#caja").find('.resaltado'); //**tambien hubiera funcionado $("#caja .resaltado")
 	//** pero el find sirve para buscar dentro de un arbol html muy grande, buscar etiquetas, elemenetos, etc.

 	var busqueda2 = $("#elemento2").parent().parent().find('.resaltado'); 
 	//cada parent(), permite saltar de una etiqueta a otra, en este caso, salimos de la li y nos plantamos en el ul, 
 	//luego del ul saltamos al div en donde esta el span resaltado.

 	console.log(busqueda);
 	console.log(busqueda2);
});

