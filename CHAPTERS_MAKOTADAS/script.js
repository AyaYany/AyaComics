// Function to show/hide the chapter list
function showchapterList() {
    const chapterListContainer = document.getElementById("chapterListContainer");
    chapterListContainer.style.display = chapterListContainer.style.display === "none" ? "block" : "none";
}

// Function to redirect to a specific chapter
function redirectToChapter(chapterId) {
    // Replace this with the actual URLs of your chapters
    const chapterUrls = {
        chapter1: "Makotadas_Ch_1.html",
        chapter2: "Makotadas_Ch_2.html",
        chapter3: "Makotadas_Ch_3.html",
    };

    if (chapterId in chapterUrls) {
        const chapterUrl = chapterUrls[chapterId];
        
        // Construct the complete URL or add additional logic if needed
        const completeUrl = `${window.location.origin}/${chapterUrl}`;

        // Redirect to the chapter URL
        window.location.href = completeUrl;
    } else {
        console.error(`Chapter with ID '${chapterId}' not found.`);
    }
}

const webtoonContainer = document.getElementById('webtoon-container');

// Replace 'YOUR_GOOGLE_DRIVE_IMAGE_URL' with the actual image URL from Google Drive
const chapterImages = [
  'https://drive.google.com/file/d/1OmDjJqyRM8t_98mGXdyzxP39jwr7wFlj/view?usp=drive_link',
  'https://drive.google.com/file/d/18IeMa4vxBUtbjEQyobMY8noK5v_EZsho/view?usp=drive_link',
  
  // Add more image URLs as needed
];

function loadChapterImages() {
  chapterImages.forEach((imageUrl, index) => {
    const imgElement = document.createElement('img');
    imgElement.src = imageUrl;
    imgElement.alt = `Chapter ${index + 1}`;
    imgElement.className = 'chapter-image';
    webtoonContainer.appendChild(imgElement);
  });
}

// Load the chapter images when the page is loaded
window.addEventListener('load', loadChapterImages);

