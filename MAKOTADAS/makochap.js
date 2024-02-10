
document.addEventListener("DOMContentLoaded", function() {
            var currentChapter = getChapterFromUrl() || 1; // Obtener el número de capítulo desde la URL o establecerlo en 1 por defecto

            function getChapterFromUrl() {
                const urlParams = new URLSearchParams(window.location.search);
                return parseInt(urlParams.get('chapter'));
            }

            function loadChapterContent(chapterNumber) {
                fetch('MAKOTADAS/makochapters.json')
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

            function goToNextChapter() {
                currentChapter++;
                loadChapterContent(currentChapter);
            }

            document.querySelectorAll(".previous").forEach(function(btn) {
                btn.addEventListener("click", goToPreviousChapter);
            });

            document.querySelectorAll(".next").forEach(function(btn) {
                btn.addEventListener("click", goToNextChapter);
            });
        });
  

/*
document.addEventListener("DOMContentLoaded", function() {
    var currentChapter = 1; // Capítulo actual
  
    // Función para cargar el contenido del capítulo desde el archivo JSON
    function loadChapterContent(chapterNumber) {
        fetch('makochapters.json')
            .then(response => response.json())
            .then(data => {
                var chapters = Object.keys(data);
                if (chapterNumber > chapters.length || chapterNumber < 1) {
                    // Manejar el caso de que el número de capítulo esté fuera de rango
                    console.error("Número de capítulo inválido");
                    return;
                }
                var chapter = data["chapter" + chapterNumber];
                var chapterContent = document.getElementById("chapterContent");
                chapterContent.innerHTML = ""; // Vaciar contenido existente
  
                // Agregar imágenes del capítulo actual al HTML
                chapter.forEach(function(imageUrl) {
                    var img = document.createElement("img");
                    img.src = imageUrl;
                    chapterContent.appendChild(img);
                });
  
                // Actualizar el título de la página
                document.title = "Capítulo " + chapterNumber;
            })
            .catch(error => console.error('Error cargando el archivo JSON:', error));
    }
  
    // Cargar el primer capítulo al cargar la página
    loadChapterContent(currentChapter);
  
    // Función para cambiar al capítulo anterior
    function goToPreviousChapter() {
        if (currentChapter > 1) {
            currentChapter--;
            loadChapterContent(currentChapter);
        } else {
            // Si estamos en el primer capítulo, redirigir al index
            window.location.href = "../index.html";
        }
    }
  
    // Función para cambiar al capítulo siguiente
    function goToNextChapter() {
        // Aquí puedes implementar la lógica para manejar el último capítulo
        currentChapter++;
        loadChapterContent(currentChapter);
    }
  
    // Manejadores de eventos para los botones de navegación
   // Manejadores de eventos para los botones de navegación
document.querySelectorAll(".previous").forEach(function(btn) {
    btn.addEventListener("click", goToPreviousChapter);
});

document.querySelectorAll(".next").forEach(function(btn) {
    btn.addEventListener("click", goToNextChapter);
});


  });
  
  */
