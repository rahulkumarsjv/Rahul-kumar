document.getElementById('imageUploadInput').addEventListener('change', function() {
    var file = this.files[0];
    var image = document.getElementById('uploadedImage');
    var taxContainer = document.getElementById('taxContainer');
    var playButton = document.getElementById('playButton');

    var reader = new FileReader();
    reader.onload = function(event) {
        image.src = event.target.result;
        image.style.display = 'block';
        taxContainer.style.display = 'block';
        playButton.style.display = 'block'; // Display play button when image is uploaded
    };
    reader.readAsDataURL(file);
});

document.getElementById('playButton').addEventListener('click', function() {
    var tax = document.getElementById('taxInput').value;
    speak(tax);
});

function speak(text) {
    var synth = window.speechSynthesis;
    var utterance = new SpeechSynthesisUtterance(text);
    synth.speak(utterance);
}
