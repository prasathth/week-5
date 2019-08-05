let router = require('express').Router();
let MoviesController = require('./controller');

router.get('/',(req,res)=>{
	res.json({
		status:'API works',
		message:'movie rest api'
	})
});

router.route('/movies')
	.get(MoviesController.listAll)
	.post(MoviesController.create);

router.route('/movies/:id')
	.get(MoviesController.findById);
router.route('/movies/delete/:id').post(MoviesController.delete)
router.route('/movies/update/:id').put(MoviesController.update)
module.exports = router;