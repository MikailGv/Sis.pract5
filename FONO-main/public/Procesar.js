var socket = io.connect('http://localhost:5001', {'forceNew': true});
var constraints = { audio: true };

    navigator.mediaDevices.getUserMedia(constraints).then((mediaStream) => {
        var mediaRecorder = new MediaRecorder(mediaStream);
        console.log("GRABANDO");
        
    mediaRecorder.onstart = function(e) {
        this.chunks = [];
    };

    mediaRecorder.ondataavailable = function(e) {
        this.chunks.push(e.data);
    };

    mediaRecorder.onstop = function(e) {
        var blob = new Blob(this.chunks, { 'type' : 'audio/ogg; codecs=opus' });
        console.log("enviando ->")
        socket.emit('radio', blob);
    };

    // Start recording
    mediaRecorder.start();
    // Stop recording after 5 seconds and broadcast it to server
    setInterval(() => {
        mediaRecorder.stop()
        mediaRecorder.start()
    }, 5000);
});