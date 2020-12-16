'use strict'

//importamos modulo de mongoose, asi se importa un modulo:
var mongoose = require('mongoose');

//aqui se usa la varible app que esta en app.js
var app = require('./app');
//defininmos el puerto que usaremos
var port = 3700;

//para arreglar un aviso que sale en consola nada mas
mongoose.set('useFindAndModify', false);


//la pasamos como promesa
mongoose.Promise = global.Promise;

//conexion a bd	-- al ser una promesa, podemos usar el metodo then
mongoose.connect('mongodb://localhost:27017/portafolio', { useNewUrlParser:true, useUnifiedTopology: true })
		.then(() => {
			console.log("Conexion a la base de datos exitosa...");

			//Creacion del servidor
			app.listen(port, () => {
				console.log("Servidor corriendo correctamente en la url: localhost:3700");
			});

		})
		.catch(err => console.log(err));
//para ejecutar esto, en consola, realizar npm start