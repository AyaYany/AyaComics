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

document.addEventListener("DOMContentLoaded", function() {
  var dropdownBtn = document.querySelector(".dropbtn");
  var dropdownContent = document.querySelector(".dropdown-content");

  dropdownBtn.addEventListener("click", function() {
    dropdownContent.classList.toggle("show");
  });

  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      if (dropdownContent.classList.contains('show')) {
        dropdownContent.classList.remove('show');
      }
    }
  };
});

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
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}

document.addEventListener("DOMContentLoaded", function() {
  const navbar = document.querySelector(".navbar");
  const sections = document.querySelectorAll(".section");
  const navLinks = document.querySelectorAll(".navbar a");

  // Function to handle scrolling to sections
  function scrollToSection(event) {
    event.preventDefault();
    const targetId = event.target.getAttribute("href").substring(1);
    const targetSection = document.getElementById(targetId);
    
    window.scrollTo({
      top: targetSection.offsetTop - navbar.offsetHeight,
      behavior: "smooth"
    });
  }

  // Add click event listeners to navbar links
  navLinks.forEach(link => {
    link.addEventListener("click", scrollToSection);
  });

  // Function to handle navbar positioning on resize
  function handleNavbarPosition() {
    if (window.innerWidth <= 768) {
      navbar.style.position = "fixed";
      navbar.style.bottom = 0;
      navbar.style.top = "auto";
    } else {
      navbar.style.position = "sticky";
      navbar.style.top = "60px"; // Adjust based on your header height
      navbar.style.bottom = "auto";
    }
  }

  // Initial check
  handleNavbarPosition();

  // Check on resize
  window.addEventListener("resize", handleNavbarPosition);
});

/*document.addEventListener("DOMContentLoaded", function () {
  if (!isMobileDevice()) {
    // Only load Lightbox if not a mobile device
    loadLightbox();
  }
});

function isMobileDevice() {
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}*/


