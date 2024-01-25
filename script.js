document.addEventListener("DOMContentLoaded", function() {
  const imageContainer = document.getElementById('imageContainer');
  const images = [
    "MINICOMICS/NTR_futa_ver/ruta-imagen-1.jpg",
    "MINICOMICS/ruta-imagen-2.jpg",
    "MINICOMICS/ruta-imagen-3.jpg",
  ];
  let currentImageIndex = 0;

  // Inicializar la imagen actual
  updateImage();

  function updateImage() {
    imageContainer.innerHTML = `<img src="${images[currentImageIndex]}" alt="Descripción de la imagen">`;
  }

  window.prevImage = function() {
    currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
    updateImage();
  };

  window.nextImage = function() {
    currentImageIndex = (currentImageIndex + 1) % images.length;
    updateImage();
  };
});
