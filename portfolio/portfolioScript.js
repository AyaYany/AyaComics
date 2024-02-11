document.addEventListener("DOMContentLoaded", function () {
  // Siempre carga Lightbox, independientemente del dispositivo
  loadLightbox();
});

function isMobileDevice() {
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}

function loadLightbox() {
  const images = document.querySelectorAll(".gallery img");
  const lightbox = document.createElement("div");
  lightbox.className = "lightbox";
  lightbox.innerHTML = `
    <span class="prev-btn" onclick="showPrevImage()"><img src="../IMAGES/prev.png" alt="Previous"></span>
    <img class="lightbox-image" src="" alt="">
    <span class="next-btn" onclick="showNextImage()"><img src="../IMAGES/next.png" alt="Next"></span>
    <span class="close-btn" onclick="closeLightbox()"><img src="../IMAGES/close.png" alt="Close"></span>
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
  function closeLightbox() {
    lightbox.style.display = "none";
    document.body.style.overflow = "auto";
  }

  // Agregar evento de clic al botón de cierre
  lightbox.querySelector(".close-btn").addEventListener("click", closeLightbox);

  // Agregar evento de clic fuera de la imagen zoomeada para cerrar el lightbox
  lightbox.addEventListener("click", (event) => {
    if (event.target === lightbox) {
      closeLightbox();
    }
  });

}

// Get the button:
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
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


