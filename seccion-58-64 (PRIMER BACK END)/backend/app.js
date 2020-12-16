'use strict'

//importamos los modulos necesarios
var express = require('express');
var bodyParser = require('body-parser');

var app = express();

// cargar archivos de rutas
var project_routes = require('./routes/project');


// configuracion de middlewares (es una capa/metodo que se ejecuta antes de ejecutar la accion de un controlador/el resultado de una peticion.)
app.use(bodyParser.urlencoded({extended:false})); //esto no es mas que una conf necesaria para bodyParser
app.use(bodyParser.json());//aca le decimos que todo lo que le llegue por el body de una peticion, lo convierta a json

// CORS
//esto permite activar el acceso cors y configurarnosn la cabeceras para tener los minimos problemas posibles
//a la hora de hacer peticiones ajax
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');//al publicar la app, se debe poner la url/origines permitidos en vez del *
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});


// rutas	//mediante middleware(app.use()), cargamos las rutas creadas, el /api hace esto: localhost:3700/api/home o /test en este caso
app.use('/api',project_routes);
/* ESTO SE PASO AL FOLDER ROUTERS _> project.js
app.get('/', (req, res) => {
	res.status(200).send(
		"<h1>Pagina de inicio</h1>"
	);
});


//aqui usamos express con el metodo get, creamos la ruta /test/:id
//la funcion de callback, recibe una request y una response.
//la request son los datos que le puedo estar enviando desde el cliente o la peticion hecha.
//la response que se va estar enviando.
//res.status(200) es una respuesta exitosa por parte del servidor, y el metodo send, permite enviar un mensaje
//por lo cual estamos enviando un mensaje en caso de que hayamos obtenido una respuesta exitosa.
//para probar, mandar por get en postman http://localhost:3700/test/22?web=fuqqqqq y ver consola
app.get('/test/:id', (req, res) => {
	console.log(req.body.nombre);
	console.log(req.query.web);
	console.log(req.params.id);

	res.status(200).send({
		message: "Probando API de NodeJS"
	});
});
¨*/

// exportar
module.exports = app; 