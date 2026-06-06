window.addEventListener('click', function () {
    
    var audio = document.getElementById("NA");
    audio.play();
    
});
alert("Click the screen to start the audio!")






$(document).ready( function() {
  
  
  
  $("#buttonP").mouseenter(function() {
    $("#beep")[0].play();
});

$("#buttonP").mouseleave(function() {
    $("#beep")[0].pause();
    $("#beep")[0].currentTime=0;
});
  

  
});
