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
