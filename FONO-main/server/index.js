var express = require('express');
var app = express();
var http = require('http').Server(app);
const io = require('socket.io')(http);

//dirige las rutas
app.use(require('./rutas/rutas'));

//dirige carpeta public
app.use("/",express.static('public'));


io.on('connection', (socket) => {

 	console.log("iniciando");

	socket.on('radio', (blob) => {
        console.log("Audio recibido");
		socket.broadcast.emit('voice', blob);
	});

});

module.exports = http;