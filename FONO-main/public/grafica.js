//Codigo para recibir sockets
var socket = io.connect('http://localhost:5001', {'forceNew': true});
   //graficado
    var wavesurfer = WaveSurfer.create({
    container: '#waveform',
    waveColor: 'violet',
    progressColor: 'purple'
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
    