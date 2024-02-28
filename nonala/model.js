// Function to open modal
function openModal(modalId) {
    var myModal = new bootstrap.Modal(document.getElementById(modalId), {
        keyboard: false
    });
    myModal.show();
}

// Function to enable next button based on radio button selection
function enableNextButton() {
    var familySuitRadio = document.getElementById('familySuit');
    var videoSuitRadio = document.getElementById('videoSuit');
    var nextButton1 = document.getElementById('nextButton1');
    var nextButton2 = document.getElementById('nextButton2');

    if (familySuitRadio.checked) {
        nextButton1.disabled = false;
        nextButton2.disabled = true;
    } else if (videoSuitRadio.checked) {
        nextButton1.disabled = true;
        nextButton2.disabled = false;
    } else {
        nextButton1.disabled = true;
        nextButton2.disabled = true;
    }
}

// Function to open next modal
function openNextModal() {
    var familySuitRadio = document.getElementById('familySuit');
    var videoSuitRadio = document.getElementById('videoSuit');

    if (familySuitRadio.checked) {
        openModal('exampleModal2');
    } else if (videoSuitRadio.checked) {
        openModal('exampleModal3');
    }
}

// Event listener to trigger next button click when radio button label is clicked
   document.addEventListener("DOMContentLoaded", function() {
    var familySuitLabel = document.querySelector('label[for="familySuit"]');
    var videoSuitLabel = document.querySelector('label[for="videoSuit"]');
    var nextButton1 = document.getElementById('nextButton1');
    var nextButton2 = document.getElementById('nextButton2');

    familySuitLabel.addEventListener('click', function() {
        nextButton1.click();
    });

    videoSuitLabel.addEventListener('click', function() {
        nextButton2.click();
    });
});
