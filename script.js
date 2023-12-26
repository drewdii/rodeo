document.addEventListener('DOMContentLoaded', function () {
    var audio = document.getElementById('backgroundAudio');

    // Check if the audio element is supported
    if (audio) {
        audio.play().catch(function (error) {
            console.error("Autoplay was prevented. Please interact with the page to enable audio.", error);
        });
    }
});
