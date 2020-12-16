'use strict'

//para crear un modelo se debe importar moongose
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

//este sera el objeto molde sobre el cual se utilizara para crear nuevos documentos
var ProjectSchema = Schema({
	name: String,
	description: String,
	category: String,
	year: Number,
	langs: String,
	img: String
});

//para poder exportar este modulo e importarlo en otros ficheros
//con el .model. tomamos el schema y deja como modelo para usarlo
//primero se pone la entidad, y luego el modelo que creamos
//mongoose crea la entidad en minuscula y lo pluraliza, es decir, 'Project' ->
//se guardara como projects, y en caso de que exista, guarda lo que hicimos ahí.
module.exports = mongoose.model('Project', ProjectSchema);