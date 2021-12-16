var express = require('express');
var app = express();
var http = require('http').Server(app);
const io = require('socket.io')(http);
//Para conectar a base de datos
const path = require('path');
const bodyParser = require('body-parser');
//MongoDb
const bcrypt = require('bcrypt');
const mongoose = require('mongoose');
//const User = require('./user');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
//dirige las rutas
app.use(require('./rutas/rutas'));
//dirige carpeta public
app.use("/",express.static('public'));
//app.use(express.static(path.join(__dirname,'public')));

//Conectar y autenticar con la base de datos de mongoDb
/*var mongo_uri ='mongodb:dev//localhost/5001'; Conectar a la base de datos mongodb

mongoose.connect(mongo_uri, (err) => {
  if (err) {
    throw err;
  }else{
  	console.log(`successfully connected to ${mongo_uri}`);
  }
})

app.post('register', (req,res) => {
 const {username, password} = req.body;

 const user = new User({username, password});
 user.save((err) => {
 	if (err) {
 		res.status(500).send('ERROR AL REGISTRAR USUARIO');
 	}else{
 		res.status(200).send('USUARIO REGISTRADO');
 	}

 });

});

app.post('/authenticate', (req, res) =>{
 const {username, password} = req.body;

 User.findOne({username}, (err, user) => {
   if(err){
   	res.status(500).send('ERROR AL AUTENTICAR USUARIO');

   }else if(!user){
    res.status(500).send('EL USUARIO NO EXISTE');
   }else{
   	 user.isCorrectPassword(password,(err, result) =>{
   	 	if(err) {
   	 		res.status(500).send('ERROR AL AUTENTICAR USUARIO');
   	 	}else if(result){
          res.status(200).send('USUARIO REGISTRADO');
   	 	}else{
   	 		res.status(500).send('USUARIO Y/O CONTRASEÑA INCORRECTA');
   	 	}

   	 });
   }
 });
  
});*/
//Conectar con socket
io.on('connection', (socket) => {

 	console.log("iniciando");

	socket.on('radio', (blob) => {
        console.log("Audio recibido");
		socket.broadcast.emit('voice', blob);
	});

});

module.exports = http;