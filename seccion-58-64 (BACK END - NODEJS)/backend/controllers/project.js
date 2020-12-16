'use strict'
//Un controlador es una especie de clase que contiene una serie de metodos o acciones que se usaran en el projecto

//importamos variables/modelos que usaremos
var Project = require('../models/project');

//esta libreria es de nodejs, la ocupamos en el imgUploads
var fs = require('fs');
//para acceder a la ruta fisica de nuestro servidor, se importa este modulo
var path = require('path');

var controller = {
	home: function(req, res){
		return res.status(200).send({
			message: 'Metodo home del controlador project'
		});
	},

	test: function(req, res){
		return res.status(200).send({
			message: 'Metodo test del controlador project'
		});
	},

	saveProject: function(req, res){
		var project = new Project();

		var params = req.body;
		project.name = params.name;
		project.description = params.description;
		project.category = params.category;
		project.year = params.year;
		project.langs = params.langs;
		project.img = null;

		//asi se guarda en la base de datos de mongo
		//los primeros 2 if es para ver si hubo un error, o simplemente ver si no se guardo.
		//al pasar los 2 if, quiere decir que no hubo problema, por lo cual retorna el status(200) enviando la propiedad, y el valor "projectStored"
		project.save((err, projectStored) => {
			if(err) return res.status(500).send({message: 'Error al guardar el documento.'});

			if(!projectStored) return res.status(404).send({message: 'No se ha podido guardar el proyecto.'});

			return res.status(200).send({project: projectStored});
		});

		/*
		return res.status(200).send({
			project: project,
			message: 'Metodo saveProject'
		});
		*/
	},

	getProject: function(req, res){
		//recojemos un parametro unico
		var projectId = req.params.id;

		if(projectId == null) return res.status(404).send({message: 'El proyecto no existe.'});

		//este es un metodo de mongoose, findById recibe 2 parametros, id del doc a buscar, y luego una func de callback
		Project.findById(projectId, (err, project) => {
			if(err) return res.status(500).send({message: 'Error al devolver los datos.'});

			if(!project) return res.status(404).send({message: 'El proyecto no existe.'});

			return res.status(200).send({project});
		});
	},

	getProjects: function(req, res){
		//metodo find, saca todos los documentos de una entidad/coleccion de datos con distintos parametros o condiciones
		//ej Project.find({year: 2019}) sacara todos losm projecttos que tengan year:2019
		//el metodo exec, ejecuta una fuincion de callback una vez ya se hayan obtenido los resultados del find
		//el metodo sort, permite ordenar por una variable, y si se pone un -year o -year altera el orden (mayor a menor menor a mayor etc)
		Project.find({}).sort('year').exec((err, projects) => {

			if(err) return res.status(500).send({message: 'Error al devolver los datos'});

			if(!projects) return res.status(404).send({message: 'No hay projectos que mostrar'});

			return res.status(200).send({projects});
		});
	},

	updateProject: function(req, res){
		//con esto, capturamos el parametro que nos llega por la url
		var projectId = req.params.id;

		//aca recojemos todo el body de la app, osea, el objeto completo con los datos ya actualizados de nuestro projecto
		var update = req.body;
		/*
		este metodo mongoose, si le pasamos un id y un objeto, actualiza el documento de la bd con el doc que le pasamos
		todos estos metodos estan especificados en la documentacion de mongoose
		basicamente, sustituimos la variable projectId, por la update, el tercer parametro es para que al realizar
		la funcion, nos muestre el objeto nuevo y no el antiguo que fue editado
		y cuarto parametro una funcion de callback
		*/
		Project.findByIdAndUpdate(projectId, update, {new:true}, (err, projectUpdated) => {
			if(err) return res.status(500).send({message: 'Error al actualizar los datos.'});

			if(!projectUpdated) return res.status(404).send({message: 'No existe el proyecto para actualizar.'});

			return res.status(200).send({project: projectUpdated});
		})
	},

	deleteProject: function(req, res){
		var projectId = req.params.id;

		//metodo parecido al update, pero permite eliminar, se le pasa la id del documento y la funcion de callback
		Project.findByIdAndDelete(projectId, (err, projectRemoved) => {
			if(err) return res.status(500).send({message: 'Error al eliminar el projecto.'});

			if(!projectRemoved) return res.status(404).send({message: 'No se puede eliminar ese proyecto.'});

			return res.status(200).send({project: projectRemoved});
		});
	},

	uploadImage: function(req, res){

		//para trabajar con files, se debe configurar el paquete multiparty con un middleware

		var projectId = req.params.id;
		var fileName = 'Imagen no subida...';

		if(req.files){
			//"path": "uploads\\mdfDwC3ssgn2VYzwn65fpYTT.jpg",
			//para sacar el nombre del archivo a guardar se hace lo siguiente.
			var filePath = req.files.img.path;
			var fileSplit = filePath.split('\\');
			var fileName = fileSplit[1];
			//para sacar la extension del archivo
			var extSplit = fileName.split('\.');
			var fileExt = extSplit[1];

			if(fileExt == 'png' || fileExt == 'jpg' || fileExt == 'jpeg' || fileExt == 'gif'){
				Project.findByIdAndUpdate(projectId, {img: fileName}, {new: true},(err, projectUpdated) => {
					if(err) return res.status(500).send({message: 'La imagen no se ha subido.'});

					if(!projectUpdated) return res.status(404).send({message: 'El proyecto no existe y no se ha asignado la imagen.'});

					return res.status(200).send({
						//files: req.fileName para probar
						project: projectUpdated
					});
				});
			}else{
				fs.unlink(filePath, (err) => {
					return res.status(200).send({message: 'La extension no es valida.'});
				});
			}

			

			
		}else{
			return res.status(200).send({
				message: fileName
			});
		}
	},

	getImageFile: function(req, res){
		//archivo que le pasaremos por url como parametro 
		var file = req.params.img;
		var path_file = './uploads/'+file;	//ruta fisica del imagen

		fs.exists(path_file, (exists) => {
			if(exists){
				return res.sendFile(path.resolve(path_file));	//path se debe importar, es un modulo de nodejs
			}else{
				return res.status(200).send({message: "No existe la imagen..."});
			}
		});
	}



};


//para devolver los metodos de arriba, se puede hacer con un module
//esto quiere decir que podemos usar los metodos de este controlador, fuera de este archivo
//simplemente importandolo con un require
module.exports = controller;