module.exports = function(app) {
 	var IndexController = {
		index: function(req,res) {
			res.render('index', { title: 'Super IT' });
		},
		compra: function(req,res) {
			res.render('compra', { title: 'Super IT' });
		},
		lista: function(req,res) {
			res.render('lista', { title: 'Super IT' });
		},
		parceiros: function(req,res) {
			res.render('parceiros', { title: 'Super IT' });
		},
		sobre: function(req,res) {
			res.render('sobre', { title: 'Super IT' });
		}
	}	
	return IndexController;
}