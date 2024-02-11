const image5 = document.querySelector('.image-5 img');

// Add a click event listener to the image
image5.addEventListener('click', function() {
  // Check if the image source is the censura image
  if (image5.src.includes('5-censura.jpg')) {
    // If it is, change the source to the 5.jpg image
    image5.src = '../IMAGES/prices/5.jpg';
    // Add a class to trigger the card flip animation
    image5.classList.add('flip-card');
  } else {
    // If it's not, change the source back to the censura image
    image5.src = '../IMAGES/prices/5-censura.jpg';
    // Remove the class to reset the card flip animation
    image5.classList.remove('flip-card');
  }
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
