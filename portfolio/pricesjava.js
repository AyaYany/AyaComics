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