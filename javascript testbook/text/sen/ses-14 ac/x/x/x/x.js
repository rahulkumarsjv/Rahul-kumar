document.getElementById('uploadInput').addEventListener('change', function(event) {
    var file = event.target.files[0];
    var reader = new FileReader();
    
    reader.onload = function(e) {
      var image = new Image();
      image.src = e.target.result;
      image.onload = function() {
        document.getElementById('displayArea').innerHTML = '';
        document.getElementById('displayArea').appendChild(image);
      }
    }
    
    reader.readAsDataURL(file);
  });
  
  document.getElementById('removeClothesButton').addEventListener('click', function() {
    alert('Kapde Hataye ka functionality image processing ke bina nahi develop kiya ja sakta hai.');
  });
  