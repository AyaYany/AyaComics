document.addEventListener("DOMContentLoaded", function () {
  // Siempre carga Lightbox, independientemente del dispositivo
  loadLightbox();
});

function isMobileDevice() {
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}


/*document.addEventListener("DOMContentLoaded", function () {
  if (!isMobileDevice()) {
    // Only load Lightbox if not a mobile device
    loadLightbox();
  }
});

function isMobileDevice() {
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}*/

function loadLightbox() {
  const images = document.querySelectorAll(".gallery img");
  const lightbox = document.createElement("div");
  lightbox.className = "lightbox";
  lightbox.innerHTML = `
    <span class="prev-btn" onclick="showPrevImage()"><img src="../IMAGES/prev.png" alt="Previous"></span>
    <img class="lightbox-image" src="" alt="">
    <span class="next-btn" onclick="showNextImage()"><img src="../IMAGES/next.png" alt="Next"></span>
  `;
  document.body.appendChild(lightbox);

  let currentImageIndex = 0;


  function showImage(index) {
    const image = images[index];
    lightbox.querySelector(".lightbox-image").src = image.src;
    lightbox.querySelector(".lightbox-image").alt = image.alt;
    currentImageIndex = index;
    lightbox.style.display = "flex";
    document.body.style.overflow = "hidden";
  }

  function showNextImage() {
    currentImageIndex = (currentImageIndex + 1) % images.length;
    showImage(currentImageIndex);
  }

  function showPrevImage() {
    currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
    showImage(currentImageIndex);
  }

  function closeLightbox() {
    lightbox.style.display = "none";
    document.body.style.overflow = "auto";
  }

  images.forEach((image, index) => {
    image.addEventListener("click", () => {
      showImage(index);
    });
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "ArrowLeft") {
      showPrevImage();
    } else if (event.key === "ArrowRight") {
      showNextImage();
    } else if (event.key === "Escape") {
      closeLightbox();
    }
  });

  lightbox.addEventListener("click", (event) => {
    // Navigate left or right only when clicking on the buttons
    const clickedElement = event.target;
    if (clickedElement.closest(".prev-btn")) {
      showPrevImage();
    } else if (clickedElement.closest(".next-btn")) {
      showNextImage();
    }
  });
  lightbox.addEventListener("click", (event) => {
    // Get the clicked element
    const clickedElement = event.target;

    // Check if the clicked element is outside the image and buttons
    const isOutsideImageAndButtons =
      !clickedElement.closest(".lightbox-image") &&
      !clickedElement.closest(".close-btn") &&
      !clickedElement.closest(".prev-btn") &&
      !clickedElement.closest(".next-btn");

    if (isOutsideImageAndButtons) {
      closeLightbox();
    }
  });

  
}


/*document.addEventListener("DOMContentLoaded", function () {
  if (!isMobileDevice()) {
    // Only load Lightbox if not a mobile device
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
  lightbox.innerHTML = `
    <span class="close-btn" onclick="closeLightbox()"><img src="../IMAGES/close.png" alt="Close"></span>
    <span class="prev-btn" onclick="showPrevImage()"><img src="../IMAGES/prev.png" alt="Previous"></span>
    <img class="lightbox-image" src="" alt="">
    <span class="next-btn" onclick="showNextImage()"><img src="../IMAGES/next.png" alt="Next"></span>
  `;
  document.body.appendChild(lightbox);

  let currentImageIndex = 0;

  function showImage(index) {
    const image = images[index];
    lightbox.querySelector(".lightbox-image").src = image.src;
    lightbox.querySelector(".lightbox-image").alt = image.alt;
    currentImageIndex = index;
    lightbox.style.display = "flex";
    document.body.style.overflow = "hidden";
  }

  function showNextImage() {
    currentImageIndex = (currentImageIndex + 1) % images.length;
    showImage(currentImageIndex);
  }

  function showPrevImage() {
    currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
    showImage(currentImageIndex);
  }

  function closeLightbox() {
    lightbox.style.display = "none";
    document.body.style.overflow = "auto";
  }

  images.forEach((image, index) => {
    image.addEventListener("click", () => {
      showImage(index);
    });
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "ArrowLeft") {
      showPrevImage();
    } else if (event.key === "ArrowRight") {
      showNextImage();
    } else if (event.key === "Escape") {
      closeLightbox();
    }
  });

  lightbox.addEventListener("click", (event) => {
    // Navigate left or right when clicking on the corresponding part of the image
    const clickX = event.clientX;
    const lightboxWidth = lightbox.offsetWidth;
    const imageWidth = lightbox.querySelector(".lightbox-image").offsetWidth;

    if (clickX < lightboxWidth / 2) {
      showPrevImage();
    } else {
      showNextImage();
    }
  });
}
*/

/*document.addEventListener("DOMContentLoaded", function () {
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
}*/