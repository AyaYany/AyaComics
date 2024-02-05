//Get the buttons for changing language


const langButtons = document.querySelectorAll('.itemLang');

// Get the elements that need to be translated
const paragraphs = document.querySelectorAll('[data-section="episodes"]');

// English JSON data
const enData = {
  "episodes": [
    {
      "parrafo1": "A couple of broken hearts will find themselves in a very unusual situation.<br>Comedy/Romance/Ecchi<br><br><b>STATUS:</b> on air"
    },
    {
      "parrafo2": "It is not advisable to fall in love in a battle royale.<br><br>Action/RPG/romance/comedy/SFW<br><br><b>STATUS:</b> It will start as soon as Makotadas finishes."
    },
    {
      "parrafo3": "<p>A teacher with no desire to live runs into a student who is difficult to control.<br><br>Hentai/Yuri<br><br><b>STATUS:</b> Need Funds u_u"
    },
    {
      "parrafo4": "<p>Random hentai shorts<br><br><b>STATUS:</b> I make them when there is nothing defined for makotadas and somebody"
    }
  ]
};

// Spanish JSON data
const esData = {
  "episodes": [
    {
      "parrafo1": "Un par de corazones rotos se encontrarán en una situación poco común.<br>Comedia/Romance/Ecchi<br><br><b>ESTADO:</b> en emisión"
    },
    {
      "parrafo2": "No conviene enamorarse en un battle royale.<br><br>Accion/RPG/romance/comedia/SFW<br><br><b>ESTADO:</b> Se empezará en cuanto termine Makotadas."
    },
    {
      "parrafo3": "<p>Una profesora sin ganas de vivir se topa con una alumna difícil de controlar.<br><br>Hentai/Yuri<br><br><b>ESTADO:</b> Necesita fondos u_u"
    },
    {
      "parrafo4": "<p>Cortos hentai random<br><br><b>ESTADO:</b> Los hago cuando no hay nada definido para makotadas y somebody"
    }
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
