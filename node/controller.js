let Movie = require('./model');


exports.create = function(req,res){
	
	let movie = new Movie();
	movie._id = req.body.id;
	movie.name = req.body.name ;
	movie.director = req.body.director;
	movie.actor = req.body.actor;
	movie.save(function(err){
	res.json({
		status:'SUCCESS',
		message:'Saved movie done',
		data:movie
	})
	})
};

exports.listAll = function(req,res){

	Movie.find(function(err,movie){
		if(err)
			res.send(err);
		res.json({
			message:"list all",
			data: movie
		})

	});
};

exports.findById = function(req,res){
	console.log(req.params.id);

	Movie.findById(req.params.id,function(err,movie){
		if(err)
			res.send(err);
		res.json({
			status:"List",
			data:movie
		})
	});
}

exports.delete = function(req,res){
	console.log("delete");
	Movie.remove(req.params.id,function(er,mov){
		if(er)
			res.send(er);
		res.json({
			status:"Done",
			message:"deleted"
		})
	});
}

exports.update = function(req,res){
	Movie.findById(req.params.id,function(err,mov){
		if(err)
			res.send(err);
		mov.id=req.body.id;
		mov.name=req.body.name;
		mov.save(function(err){
			if(err)
				res.send(err);
			res.json({
				status:"upd",
				data:mov
			})
		})
	})
};