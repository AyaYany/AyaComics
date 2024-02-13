//Get the buttons for changing language


const langButtons = document.querySelectorAll('.itemLang');

// Get the elements that need to be translated
const paragraphs = document.querySelectorAll('[data-section="episodes"]');

// English JSON data
const enData = {
  "episodes": [
    {"parrafo1": "Hi!, I'm Aya Yany, a passionate manga artist. I love to make spicy comics with a touch of random FUN things. In my free time, you can find me doing my webcomic Makoholic, or playing some Fire Emblem :3<br><br>My goal in this life is to finish all the comics i have in my mind, i hope i can make it! YoY"},

    {"parrafo2": "Hi!, I'm Fevy! Makoholic editor and assistant of Aya Yany, IT director. In my free time, you can find enjoying some Blue Archive and my favourite game, Parasite Eve."},

    {"parrafo3": "ALL AUDIENCES version of Aya Yany, can be used for non +18 projects."}
  ]
};

// Spanish JSON data
const esData = {
  "episodes": [
    {"parrafo1": "¡Hao!, Soy Aya Yany, una apasionada dibujante de manga. Adoro hacer mangas picantes con un toque random de cosas 'curiosas'. Mi tiempo libre lo disfruto haciendo mi webcomic Makotadas o jugando Fire Emblem :3<br<br>Mi propósito en esta vida es lograr terminar todos los comics que tengo en mi mente, ojalá pueda lograrlo YoY!"},

    {"parrafo2": "¡Hola!, Soy Fevy! Editor de Makotadas y asistente de Aya Yany, director IT. En mi tiempo libre me encuentras disfrutando de Blue Archive y mi juego favorito Parasite Eve."},

    {"parrafo3": "Verión APTA PARA TODO PÚBLICO de Aya Yany, puede usarse para proyectos que no sean +18."}
  ]
};

// Function to change the language
function changeLanguage(lang) {
  if (lang === 'en') {
    paragraphs.forEach((paragraph, index) => {
      paragraph.innerHTML = enData.episodes[index][`parrafo${index + 1}`];
    });
  } else if (lang === 'es') {
    paragraphs.forEach((paragraph, index) => {
      paragraph.innerHTML = esData.episodes[index][`parrafo${index + 1}`];
    });
  }
}

// Add click event listeners to the language buttons
langButtons.forEach(button => {
  button.addEventListener('click', function() {
    const lang = this.getAttribute('data-lang');
    changeLanguage(lang);
  });
});




/*const langElement = document.getElementById("lang");

const textsToChange = document.querySelectorAll("[data-section]");

const changeLanguage = async (language) => {
  const requestJson = await fetch(`./languages/${language}.json`);
  const jsonData = await requestJson.json();

  for (const textToChange of textsToChange) {
    const section = textToChange.dataset.section;
    const value = textToChange.dataset.value;

    textToChange.innerHTML = jsonData[section][value];
  }
};

langElement.addEventListener("click", (e) => {
  if (e.target.dataset.lang) {
    changeLanguage(e.target.dataset.language);
  }
});

*/
