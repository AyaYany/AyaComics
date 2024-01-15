// Function to fetch images from a Google Drive folder
async function fetchImagesFromDrive(folderId) {
  const driveAPIUrl = `https://www.googleapis.com/drive/v3/files/${folderId}/children`;
  const response = await fetch(driveAPIUrl);
  const data = await response.json();

  // Extract image file IDs
  const imageFileIds = data.files.map(item => item.id);

  // Convert image file IDs to direct image links
  const imageLinks = imageFileIds.map(fileId => `https://drive.google.com/uc?id=${fileId}`);

  return imageLinks;
}

// Function to load content for a specific chapter
async function loadChapter(chapterNumber) {
  // Ensure the chapter number is within valid bounds
  if (chapterNumber < 1 || chapterNumber > totalChapters) {
      alert("Invalid chapter number!");
      return;
  }

  // Update the current chapter
  currentChapter = chapterNumber;

  // Get the folder ID for the current chapter
  const chapterFolderId = chapterInfo[currentChapter - 1].folderId;

  // Fetch the images for the current chapter
  const chapterImages = await fetchImagesFromDrive(chapterFolderId);

  // Update the content of the webtoonContainer div
  const webtoonContainer = document.getElementById('webtoon-container');
  webtoonContainer.innerHTML = ""; // Clear existing content

  // Create img elements for each image link
  chapterImages.forEach((imageLink, index) => {
      const imgElement = document.createElement('img');
      imgElement.src = imageLink;
      imgElement.alt = `Chapter ${currentChapter} - Page ${index + 1}`;
      imgElement.className = 'chapter-image';
      webtoonContainer.appendChild(imgElement);
  });
}

// Array to hold information about each chapter
const chapterInfo = [
  { folderId: '1ThPIkOolGyqQ4VDI4sX57iDVKQnVFZ33' },
  { folderId: '1oQfjswzlxH8--tuja8Zp40oh1wPkVmc0' },
  // Add more chapters as needed
];

// Total number of chapters
const totalChapters = chapterInfo.length;

// Initialize the current chapter to 1
let currentChapter = 1;

// ... (rest of your script)
