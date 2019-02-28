module.exports = function(app) {
 	var IndexController = {
		index: function(req,res) {
			res.render('index', { title: 'Smart SM' });
		},
		compra: function(req,res) {
			res.render('compra', { title: 'Smart SM' });
		},
		lista: function(req,res) {
			res.render('lista', { title: 'Smart SM' });
		},
		parceiros: function(req,res) {
			res.render('parceiros', { title: 'Smart SM' });
		},
		sobre: function(req,res) {
			res.render('sobre', { title: 'Smart SM' });
		}
	}
	return IndexController;
}
