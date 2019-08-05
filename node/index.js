let express = require('express');
let apiRoutes = require('./routes');

let app = express();
let bodyparser = require('body-parser');
let mongoose = require('mongoose');
let cors = require('cors');
app.use(bodyparser.urlencoded({
	extended: true
}));
app.use(cors());
app.use(bodyparser.json());

mongoose.connect('mongodb://localhost/moviedb',{useNewUrlParser:true});

var db = mongoose.connection;

if(!db)
	console.log("Not connected");
else
	console.log("connected to db");

let port = process.env.PORT||8000;

app.get('/',(req,res)=>{
	res.send(JSON.stringify({message:"Hell"}))
});

app.use('/api',apiRoutes);

app.listen(port,()=>{
	console.log('server started');
})
