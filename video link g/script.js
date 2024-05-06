function uploadVideo() {
    const fileInput = document.getElementById('videoFile');
    const videoPlayer = document.getElementById('videoPlayer');

    const file = fileInput.files[0];
    const videoURL = URL.createObjectURL(file);

    videoPlayer.src = videoURL;

    // Generate link
    const videoLink = document.getElementById('videoLink');
    videoLink.innerHTML = `<a href="${videoURL}" target="_blank">Watch Video</a>`;
}
