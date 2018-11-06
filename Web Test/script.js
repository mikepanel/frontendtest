// alert("Connected");

function displayNextImage() {
          x = (x === images.length - 1) ? 0 : x + 1;
          document.getElementById("headerimage").style.backgroundImage = images[x];
      }
      function changeImage() {
          setInterval(displayNextImage, 5000);
      }
      var images = [], x = -1;
      images[0] = "url(assets/headerimage2.jpg)";
      images[1] = "url(assets/headerimage.jpg)";
