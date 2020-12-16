'use strict'

//cargamos modulo/objeto express en un variable
var express = require('express');

//creamos variable para cargar el controlador que esta en controllers -> project.js
var ProjectController = require('../controllers/project');

//cargamos el express router
var router = express.Router();

//cargamos y configuramos el multiparty para trabajar con files
//para usarlo, debemos pasarlos en la ruta para que se ejecute antes de la accion
var multipart = require('connect-multiparty');
var multipartMiddleware = multipart({ uploadDir: './uploads' });


router.get('/home', ProjectController.home);
router.post('/test', ProjectController.test);
router.post('/save-project', ProjectController.saveProject);
//el :id? con el signo de preguntar, hace que no sea obligatorio.
//si se le pone asi opcional, hay que hacer una condicion de si es dato null
//para que diga que el projecto no existe, y no tire un error
router.get('/project/:id?', ProjectController.getProject);
router.get('/projects', ProjectController.getProjects);
//ruta por put, ya que este metodo http funciona para actualizacion de recursos en una api
router.put('/project/:id', ProjectController.updateProject);
router.delete('/project/:id', ProjectController.deleteProject);
router.post('/upload-image/:id', multipartMiddleware, ProjectController.uploadImage);
router.get('/get-image/:img', ProjectController.getImageFile);

//exportamos las rutas, ya podemos usarla en cualquier otro archivo importandola con el require
//la cargamos en el app.js
module.exports = router;