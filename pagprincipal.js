// Language translation
document.querySelectorAll('.itemLang').forEach(button => {
  button.addEventListener('click', function () {
    let lang = this.getAttribute('data-lang');

    // Intro section
    let introText = {
      en: "Hello everyone!<br><br>Welcome to my website, I'm Aya Yany, manga artist for 14 years and counting.<br><br>You have a lot to explore here! have fun!",
      es: "¡Hola a todos!<br><br>Bienvenidos a mi sitio web, soy Aya Yany, dibujante desde hace 14 años y contando.<br><br>¡Tienes mucho que explorar! ¡Diviértete!"
    };
    document.querySelector('.introcontainer p').innerHTML = introText[lang];


    // "My own webcomics" section
    let myWebcomicsText = {
      en: "The Following comics in this section are made in my spare time and are totally FREE. If you want to support me to make more, you can do it for only 1 dollar monthly via <b>PATREON</b>",
      es: "Los siguientes cómics de esta sección están hechos en mi tiempo libre y son totalmente GRATIS. Si quieres apoyarme para hacer más, puedes hacerlo por solo 1 dólar al mes a través de <b>PATREON</b>"
    };
    document.querySelector('.mywebcomics p').innerHTML = myWebcomicsText[lang];

    // Comic descriptions
    let comicDescriptions = {
      en: [
        "A couple of broken hearts will find themselves in a very unusual situation.<br>Comedy/Romance/Ecchi<br><br><b>STATUS:</b>ongoing<br><br><b>TRANSLATION TO ENGLISH SOON</b>",
        "It is not advisable to fall in love in a battle royale.<br><br>Action/RPG/romance/comedy/SFW<br><br><b>STATUS:</b>It will start as soon as Makotadas finishes.",
        "A teacher with no desire to live runs into a student who is difficult to control.<br><br>Hentai/Yuri<br><br><b>STATUS:</b> Need Funds u_u",
        "Yuri Vampire harem<br><br>Yuri<br><br><b>STATUS:</b>STATUS:</b> very EARLY<br>pre-production<br><br>Need even more Funds T_T"
      ],
      es: [
        "Un par de corazones rotos se encontrarán en una situación muy inusual.<br>Comedia/Romance/Ecchi<br><br><b>ESTADO:</b> en curso<br><br><b>TRADUCCIÓN AL INGLÉS PRONTO</b>",
        "No es recomendable enamorarse en un battle royale.<br><br>Acción/RPG/romance/comedia/SFW<br><br><b>ESTADO:</b> Comenzará tan pronto como Makotadas termine.",
        "Una maestra sin ganas de vivir se encuentra con un estudiante difícil de controlar.<br><br>Hentai/Yuri<br><br><b>ESTADO:</b> Necesito fondos u_u",
        "Harem de vampiras-Yuri<br><br>Yuri<br><br><b>ESTADO:</b> pre-producción<br><br>Necesita aún más fondos T_T",
        
      ]
    };
    document.querySelectorAll('.boxcomic .letras p').forEach((desc, index) => {
      desc.innerHTML = comicDescriptions[lang][index];
    });

    
    let miniComicsText = {
      en: {
        h2: "AYA'S MINI COMICS Weekly Pages +18",
        p: "Random hentai shorts, in between:<br> male x female, yuri, futanari x female and age gap<br><br><b>STATUS:</b> Ongoing<br><br><b>FREE</b> on X/TWITTER, early access/texteless versions and extra <b>EXCLUSIVE</b>pages on <a href='https://www.patreon.com/aya_Y'><b>PATREON</b></a></p>"
      },
      es: {
        h2: "MINI COMICS de AYA Páginas +18 Semanales",
        p: "Cortos hentai aleatorios<br><br>Entre chico x chica, yuri, futanari x female y diferencia de edad.<br><br><b>STATUS:</b> PUBLICÁNDOSE<br><br><b>GRATIS</b> en TWITTER, acceso anticipado, versiones sin texto y una página extra en <a href='https://www.patreon.com/aya_Y'><b>PATREON</b></a></p>"
      }
    };
    
    function translateMiniComics(lang) {
      let miniSection = document.querySelector('#comic4');
      let h2 = miniSection.querySelector('h2');
      let p = miniSection.querySelector('p');
    
      h2.innerHTML = miniComicsText[lang].h2;
      p.innerHTML = miniComicsText[lang].p;
    }
    
    // Añade esta línea dentro de la función `translatePage`
    translateMiniComics(lang);
    

    // Commissioned works section title
    let commissionedWorksTitle = {
      en: "Commissioned works [ENGLISH ONLY]",
      es: "Trabajos por encargo [SOLO EN INGLÉS]"
    };
    document.querySelector('.titlecommi h1').textContent = commissionedWorksTitle[lang];

    // Commissioned works descriptions
    let commissionedDescriptions = {
      en: [
        "[FREE webcomic]<br><br>Commissioned by<br>SEXYVERSE COMICS<br><br>Full hentai<br><br><b>STATUS:</b>Ongoing",
        "[Patreon webcomic]<br><br>Commissioned by<br>SEXYVERSE COMICS<br><br>Full hentai<br><br><b>STATUS:</b> Ongoing",
        "[comic store]<br><br>Various<br><br>Vore/Full hentai",
        "[Subscription]<br><br>Various<br><br>Yuri/vampires/Full hentai",
        "[Subscription]<br><br>Various<br><br>Yuri/Futanari/Full hentai"
      ],
      es: [
        "[Webcómic GRATUITO]<br><br>Encargado por<br>SEXYVERSE COMICS<br><br>Hentai completo<br><br><b>ESTADO:</b>En curso",
        "[Webcómic de Patreon]<br><br>Encargado por<br>SEXYVERSE COMICS<br><br>Hentai completo<br><br><b>ESTADO:</b> En curso",
        "[tienda de cómics]<br><br>Varios<br><br>Vore/Hentai completo",
        "[Suscripción]<br><br>Varios<br><br>Yuri/vampiros/Hentai completo",
        "[Suscripción]<br><br>Varios<br><br>Yuri/Futanari/Hentai completo"
      ]
    };
    document.querySelectorAll('.boxcomisiones .letras p').forEach((desc, index) => {
      desc.innerHTML = commissionedDescriptions[lang][index];
    });

    // Ensure the layout and text sizes remain consistent
    document.querySelector('body').style.fontSize = '';
    document.querySelectorAll('*').forEach(el => {
      el.style.fontSize = '';
    });
  });
});

// Scroll to sections
document.querySelectorAll('.ComicBot a').forEach(button => {
  button.addEventListener('click', function () {
    if (this.textContent.includes("MY OWN WEBCOMICS")) {
      document.querySelector('.mywebcomics').scrollIntoView({ behavior: 'smooth' });
    } else if (this.textContent.includes("COMMISSIONED WEBCOMICS")) {
      document.querySelector('.titlecommi').scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// Add click event listeners to the language buttonsdocument.addEventListener("DOMContentLoaded", function() {
  const navbar = document.querySelector(".navbar");
  const sections = document.querySelectorAll(".section");
  const navLinks = document.querySelectorAll(".navbar a");

  // Function to handle scrolling to sections
  function scrollToSection(event) {
    event.preventDefault();
    const targetId = event.target.getAttribute("href").substring(1);
    const targetSection = document.getElementById(targetId);
    
    window.scrollTo({
      top: targetSection.offsetTop - navbar.offsetHeight,
      behavior: "smooth"
    });
  }

  // Add click event listeners to navbar links
  navLinks.forEach(link => {
    link.addEventListener("click", scrollToSection);
  });

  // Function to handle navbar positioning on resize
  function handleNavbarPosition() {
    if (window.innerWidth <= 768) {
      navbar.style.position = "fixed";
      navbar.style.bottom = 0;
      navbar.style.top = "auto";
    } else {
      navbar.style.position = "sticky";
      navbar.style.top = "60px"; // Adjust based on your header height
      navbar.style.bottom = "auto";
    }
  }

langButtons.forEach(button => {
  button.addEventListener('click', function() {
    const lang = this.getAttribute('data-lang');
    changeLanguage(lang);
  });
  
document.addEventListener('click', function(event) {
  var dropdown = document.querySelector('.dropdown-content');
  var dropbtn = document.querySelector('.dropbtn');
  
  if (!dropbtn.contains(event.target) && !dropdown.contains(event.target)) {
    dropdown.style.display = 'none';
  }
});

document.addEventListener('touchstart', function(event) {
  var dropdown = document.querySelector('.dropdown-content');
  var dropbtn = document.querySelector('.dropbtn');
  
  if (!dropbtn.contains(event.target) && !dropdown.contains(event.target)) {
    dropdown.style.display = 'none';
  }
});

document.querySelector('.dropbtn').addEventListener('click', function(event) {
  var dropdown = document.querySelector('.dropdown-content');
  
  if (dropdown.style.display === 'block') {
    dropdown.style.display = 'none';
  } else {
    dropdown.style.display = 'block';
  }
});

document.querySelector('.dropbtn').addEventListener('touchstart', function(event) {
  var dropdown = document.querySelector('.dropdown-content');
  
  if (dropdown.style.display === 'block') {
    dropdown.style.display = 'none';
  } else {
    dropdown.style.display = 'block';
  }

});

