document.getElementById('videoInput').addEventListener('change', function(event) {
    const videoFile = event.target.files[0];
    const videoPreview = document.getElementById('videoPreview');
    const uploadMessage = document.getElementById('uploadMessage');
  
    const videoObjectURL = URL.createObjectURL(videoFile);
    videoPreview.src = videoObjectURL;
    videoPreview.style.display = 'block'; // Show the video preview
    uploadMessage.style.display = 'block'; // Show the upload message
  });
  
  document.getElementById('speedRange').addEventListener('input', function(event) {
    const speed = parseFloat(event.target.value);
    const videoPreview = document.getElementById('videoPreview');
    videoPreview.playbackRate = speed;
    document.getElementById('speedValue').textContent = speed.toFixed(1) + 'x';
  });
  
  document.getElementById('statusSelect').addEventListener('change', function(event) {
    const status = event.target.value;
    const videoPreview = document.getElementById('videoPreview');
    switch (status) {
      case 'slow':
        videoPreview.playbackRate = 0.5; // Adjust the speed as needed
        break;
      case 'fast':
        videoPreview.playbackRate = 2; // Adjust the speed as needed
        break;
      default:
        videoPreview.playbackRate = 1; // Default speed
    }
  });
  
  document.getElementById('trimVideo').addEventListener('click', function() {
    const videoPreview = document.getElementById('videoPreview');
    const trimStart = parseFloat(document.getElementById('trimStart').value);
    const trimEnd = parseFloat(document.getElementById('trimEnd').value);
  
    if (!isNaN(trimStart) && !isNaN(trimEnd) && trimEnd > trimStart) {
      videoPreview.currentTime = trimStart;
      videoPreview.play();
      setTimeout(function() {
        videoPreview.pause();
        videoPreview.currentTime = trimEnd;
      }, (trimEnd - trimStart) * 1000);
    }
  });
  