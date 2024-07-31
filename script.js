document.addEventListener('DOMContentLoaded', function() {
    var audio = document.getElementById('background-audio');
    audio.play().catch(function(error) {
        console.log('Audio play was prevented:', error);
    });
});
