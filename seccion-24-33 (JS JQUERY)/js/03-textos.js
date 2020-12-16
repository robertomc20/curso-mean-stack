$(document).ready(function(){

	reloadLinks();

	$("#add_button")
		.removeAttr('disabled')   //ACA PODEMOS ELIMINAR UN ATRIBUTO DE ALGUN ELEMENTO. para agregar = elemento.attr("opcion","resultado");
		.click(function(){
		//$('#menu').html('<li><a href="'+$("#add_link").val()+'"></a></li>');  //con el metodo html se puede incrustar codigo html
		//$('#menu').prepend('<li><a href="'+$("#add_link").val()+'"></a></li>'); //se lo quiero añadir antes, es el prepend
		//tambien esta el metodo before o after que lo añaden antes o despues 
			$('#menu').append('<li><a href="'+$("#add_link").val()+'"></a></li>'); 	//como quiero que añada a lo que esta, es mejor el append

			$("#add_link").val(''); //para que se borre el texto del input al apretar el boton
			reloadLinks();
		});



});

function reloadLinks(){
	$('a').each(function(index){  //aqui con el each recorro todas las etiquetas a == son los enlaces
		var that = $(this); //para no sobrecargar el dom y tener mayor velocidad, es mejor instanciar si se usara mucho
		var enlace = that.attr("href");	//con el attr se pueden obtener atributos del elemento, en este caso href.

		that.attr('target','_blank');  //con el attr podemos poner o eliminar atributos, en este caso ponemos que abra en nueva ventana los links

		that.text(enlace); //pone el texto del href dentro del texto de enlace
	});
}