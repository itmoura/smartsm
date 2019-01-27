module.exports = function(app){
	var index = app.controllers.index;
	app.get('/', index.index);
	app.get('/compra', index.compra);
	app.get('/lista', index.lista);
	app.get('/parceiros', index.parceiros);
	app.get('/sobre', index.sobre);
}
