
document.addEventListener("DOMContentLoaded", function() {
            var currentChapter = getChapterFromUrl() || 1; // Obtener el número de capítulo desde la URL o establecerlo en 1 por defecto

            function getChapterFromUrl() {
                const urlParams = new URLSearchParams(window.location.search);
                return parseInt(urlParams.get('chapter'));
            }

            function loadChapterContent(chapterNumber) {
                fetch('noobchapters.json')
                    .then(response => response.json())
                    .then(data => {
                        var chapters = Object.keys(data);
                        if (chapterNumber > chapters.length || chapterNumber < 1) {
                            console.error("Número de capítulo inválido");
                            return;
                        }
                        var chapter = data["chapter" + chapterNumber];
                        var chapterContent = document.getElementById("chapterContent");
                        chapterContent.innerHTML = "";

                        chapter.forEach(function(imageUrl) {
                            var img = document.createElement("img");
                            img.src = imageUrl;
                            chapterContent.appendChild(img);
                        });

                        document.title = "Chapter " + chapterNumber; // Actualizar el título de la página
                        history.replaceState(null, null, `?chapter=${chapterNumber}`); // Actualizar la URL con el número de capítulo
                    })
                    .catch(error => console.error('Error cargando el archivo JSON:', error));
            }

            loadChapterContent(currentChapter);

            function goToPreviousChapter() {
                if (currentChapter > 1) {
                    currentChapter--;
                    loadChapterContent(currentChapter);
                } else {
                    window.location.href = "../index.html";
                }
            }

        });
  
