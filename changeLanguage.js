//Get the buttons for changing language
const langButtons = document.querySelectorAll('.itemLang');

// Get the elements that need to be translated
const paragraphs = document.querySelectorAll('[data-section="episodes"]');
const banner = document.querySelector('[data-section="banners"]');

// English JSON data
const enData = {
  "episodes": [
    {
      "parrafo1": "A couple of broken hearts will find themselves in a very unusual situation.<br>Comedy/Romance/Ecchi<br><br><b>STATUS:</b> ongoing"
    },
    {
      "parrafo2": "It is not advisable to fall in love in a battle royale.<br><br>Action/RPG/romance/comedy/SFW<br><br><b>STATUS:</b> It will start as soon as Makotadas finishes."
    },
    {
      "parrafo3": "<p>A teacher with no desire to live runs into a student who is difficult to control.<br><br>Hentai/Yuri<br><br><b>STATUS:</b> Need Funds u_u"
    },
    {"parrafo4": "<p>Random hentai shorts<br><br><b>STATUS:</b> I make them when there is nothing defined for makotadas and somebody"
    }
  ],
  "banner": {
    "bannertext":"The Following comics are<br><b>made in my spare time.</b><br>if you want to <b>support</b> this page to make more, you can do it for <b>only 1 dollar</b> monthly vía <a href= https://www.patreon.com/aya_Y><b>PATREON</b></a></p>"
  }
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
  ],
  "banner": {
    "bannertext": "Los comics que puedes ver aquí,<br><b>son hechos en mis ratos libres.</b><br>si gustas apoyarme a hacer más,<br> puedes hacerlo por <b>solo 1 dolar</b> al mes<br>vía <a href= https://www.patreon.com/aya_Y><b>PATREON</b></a></p>"
  }
};

// Function to change the language
function changeLanguage(lang) {
  if (lang === 'en') {
    paragraphs.forEach((paragraph, index) => {
      paragraph.innerHTML = enData.episodes[index][`parrafo${index + 1}`];
    });
    banner.innerHTML = enData.banner.bannertext;
  } else if (lang === 'es') {
    paragraphs.forEach((paragraph, index) => {
      paragraph.innerHTML = esData.episodes[index][`parrafo${index + 1}`];
    });
    banner.innerHTML = esData.banner.bannertext;
  }
}

// Add click event listeners to the language buttons
langButtons.forEach(button => {
  button.addEventListener('click', function() {
    const lang = this.getAttribute('data-lang');
    changeLanguage(lang);
  });
});

