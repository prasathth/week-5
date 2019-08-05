let mongoose = require('mongoose');

const movieSchema = mongoose.Schema({
    _id:{
    	type:String,
    	required:true
    },
	name:{
    	type:String,
    	required:true
	},
	director:{
    	type:String,
    	required:true
	},
	actor:{
    	type:String,
    	required:true
    }
})

let movie = module.exports = mongoose.model('movie',movieSchema);