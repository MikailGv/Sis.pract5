//Codigo para recibir sockets
var socket = io.connect('localhost:5001', {'forceNew': true});

var socket = io.connect('http://89.223.39.121:5001', {'forceNew': true});
   //graficado
    var wavesurfer = WaveSurfer.create({
    container: '#waveform',
    waveColor: '#854442',
    progressColor: '#854442'
    });

   socket.on('voice', function(arrayBuffer) {

	   console.log("A llegado el audio");
	   var blob = new Blob([arrayBuffer], { 'type' : 'audio/ogg; codecs=opus' });
	   var audio = document.createElement('audio');
	   audio.src = window.URL.createObjectURL(blob);

      try {
         audio.play();

      } catch (error) {} 
	   wavesurfer.loadBlob(blob);//cargando audio
  }); 

      var wavesurfer = WaveSurfer.create({
      container: document.querySelector('#wave'),
      backend: 'MediaElement'
   });
    