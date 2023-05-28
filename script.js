// Obtener referencia al elemento de audio
var audio = document.getElementById("audio-element"); // Reemplaza "audio-element" con el ID o clase de tu elemento de audio

// Establecer la ruta del archivo de audio
audio.src = "audio.mp3"; // Reemplaza "ruta_del_archivo_de_audio.mp3" con la ruta correcta de tu archivo de audio

// Agregar eventos click a los botones
playButton.addEventListener("click", function() {
  audio.play(); // Reproducir el sonido al hacer clic en el botón de reproducir
});

stopButton.addEventListener("click", function() {
  audio.pause(); // Detener el sonido al hacer clic en el botón de detener
  audio.currentTime = 0; // Reiniciar el tiempo de reproducción al inicio
});
