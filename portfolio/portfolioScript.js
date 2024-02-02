document.addEventListener("DOMContentLoaded", function () {
  if (!isMobileDevice()) {
    // Solo carga Lightbox si no es un dispositivo móvil
    loadLightbox();
  }
});

function isMobileDevice() {
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}

function loadLightbox() {
  const images = document.querySelectorAll(".gallery img");
  const lightbox = document.createElement("div");
  lightbox.className = "lightbox";
  document.body.appendChild(lightbox);

  images.forEach((image) => {
    image.addEventListener("click", () => {
      lightbox.innerHTML = `<img src="${image.src}" alt="${image.alt}">`;
      lightbox.style.display = "flex";
      document.body.style.overflow = "hidden"; // Evita el scroll del fondo
    });
  });

  lightbox.addEventListener("click", () => {
    lightbox.style.display = "none";
    document.body.style.overflow = "auto"; // Habilita el scroll del fondo nuevamente
  });
}
