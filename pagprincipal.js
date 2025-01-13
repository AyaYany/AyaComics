document.addEventListener("DOMContentLoaded", function () {
  const navbar = document.querySelector(".navbar");
  const sections = document.querySelectorAll(".section");
  const navLinks = document.querySelectorAll(".navbar a");
  const langButtons = document.querySelectorAll('.itemLang');

  // Handle language translation
  function changeLanguage(lang) {
    // Intro section
    let introText = {
      en: "Hello everyone!<br><br>Welcome to my website, I'm Aya Yany, manga artist for 14 years and counting.<br><br>You have a lot to explore here! have fun!",
      es: "¡Hola a todos!<br><br>Bienvenidos a mi web, soy Aya Yany, dibujante desde hace 14 años y contando.<br><br>¡Tienes mucho que explorar! ¡Diviértete!"
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
        "It is not advisable to fall in love in a battle royale.<br><br>Action/RPG/romance/<br>comedy/SFW<br><br><b>STATUS:</b>It will start as soon as Makotadas finishes.",
        "A teacher with no desire to live runs into a student who is difficult to control.<br><br>Hentai/Yuri<br><br><b>STATUS:</b> Need Funds u_u",
        "Yuri Vampire harem<br><br>Yuri<br><br><b>STATUS:</b>pre-production<br><br>Need Funds",
        "Random hentai shorts, in between:<br> male x female, yuri, futanari x female and age gap<br><br><b>STATUS:</b> Ongoing<br><br><b>FREE</b> on X/TWITTER, early access/texteless versions and extra <b>EXCLUSIVE</b> pages on"
      ],
      es: [
        "Un par de corazones rotos se encontrarán en una situación muy inusual.<br>Comedia/Romance/Ecchi<br><br><b>ESTADO:</b> en curso<br><br><b>TRADUCCIÓN AL INGLÉS PRONTO</b>",
        "No es recomendable enamorarse en un battle royale.<br><br>Acción/RPG/romance/<br>comedia/SFW<br><br><b>ESTADO:</b> Comenzará tan pronto como Makotadas termine.",
        "Una maestra sin ganas de vivir se encuentra con un estudiante difícil de controlar.<br><br>Hentai/Yuri<br><br><b>ESTADO:</b> Necesito fondos u_u",
        "Harem de vampiras-Yuri<br><br>Yuri<br><br><b>ESTADO:</b> preproducción<br><br>Necesito fondos",
      ]
    };
    document.querySelectorAll('.boxcomic .letras p').forEach((desc, index) => {
      desc.innerHTML = comicDescriptions[lang][index];
    });

    // "Mini Comics" section
    let miniComicsText = {
      en: {
        h2: "AYA'S MINI COMICS Weekly Pages +18",
        p: "Random hentai shorts, in between:<br> male x female, yuri, futanari x female and age gap<br><br><b>STATUS:</b> Ongoing<br><br><b>FREE</b> on X/TWITTER, early access/texteless versions and extra <b>EXCLUSIVE</b> pages on <a href='https://www.patreon.com/aya_Y'><b>PATREON</b></a></p>"
      },
      es: {
        h2: "MINI COMICS de AYA Páginas +18 Semanales",
        p: "Cortos hentai aleatorios<br><br>Entre chico x chica, yuri, futanari x female y diferencia de edad.<br><br><b>ESTADO:</b> PUBLICÁNDOSE<br><br><b>GRATIS</b> en TWITTER, acceso anticipado, versiones sin texto y una página extra en <a href='https://www.patreon.com/aya_Y'><b>PATREON</b></a></p>"
      }
    };
    let miniSection = document.querySelector('#comic4');
    miniSection.querySelector('h2').innerHTML = miniComicsText[lang].h2;
    miniSection.querySelector('p').innerHTML = miniComicsText[lang].p;

    // "Commissioned works" section title
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
  }

  // Handle navbar positioning on resize
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

  // Handle dropdown visibility
  function handleDropdown(event) {
    event.preventDefault();
    event.stopPropagation();
    const dropdown = document.querySelector('.dropdown-content');
    dropdown.style.display = dropdown.style.display === 'block' ? 'none' : 'block';
  }

  function closeDropdown(event) {
    const dropdown = document.querySelector('.dropdown-content');
    const dropbtn = document.querySelector('.dropbtn');
    if (!dropbtn.contains(event.target) && !dropdown.contains(event.target)) {
      dropdown.style.display = 'none';
    }
  }

  // Add click and touch event listeners to language buttons
  langButtons.forEach(button => {
    button.addEventListener('click', function () {
      const lang = this.getAttribute('data-lang');
      changeLanguage(lang);
    });
    button.addEventListener('touchstart', function () {
      const lang = this.getAttribute('data-lang');
      changeLanguage(lang);
    });
  });
// Scroll to sections
document.querySelectorAll('.ComicBot a').forEach(button => {
  button.addEventListener('click', function (e) {
    e.preventDefault(); // Prevent the default link behavior

    if (this.textContent.includes("MY OWN WEBCOMICS")) {
      document.querySelector('.mywebcomics').scrollIntoView({ behavior: 'smooth' });
    } else if (this.textContent.includes("COMMISSIONED WEBCOMICS")) {
      document.querySelector('.titlecommi').scrollIntoView({ behavior: 'smooth' });
    }
  });
});


  // Handle dropdown toggle
  document.querySelector('.dropbtn').addEventListener('click', handleDropdown);
  document.querySelector('.dropbtn').addEventListener('touchstart', handleDropdown);

  // Close dropdown when clicking outside
  document.addEventListener('click', closeDropdown);
  document.addEventListener('touchstart', closeDropdown);

  // Handle navbar position on window resize
  window.addEventListener('resize', handleNavbarPosition);
  handleNavbarPosition(); // Initial check on load
  
});

document.addEventListener("DOMContentLoaded", function () {
  const popup = document.getElementById("new-comic-popup");
  const popupDelayDays = 15; // Días de caducidad para mostrar el popup
  const popupKey = "popupLastSeen";

  // Función para verificar si se debe mostrar el popup
  function shouldShowPopup() {
    const lastSeen = localStorage.getItem(popupKey);
    if (!lastSeen) return true; // Nunca se ha mostrado el popup antes

    const lastSeenDate = new Date(lastSeen);
    const now = new Date();
    const daysDifference = (now - lastSeenDate) / (1000 * 60 * 60 * 24);

    return daysDifference >= popupDelayDays; // Verifica si pasaron 15 días
  }

  // Mostrar el popup si corresponde
  if (shouldShowPopup()) {
    popup.classList.add("show"); // Añade la clase `show` para hacerlo visible

    // Registrar la última vez que se mostró el popup
    popup.addEventListener("click", function () {
      popup.classList.remove("show"); // Cierra el popup al hacer clic
      localStorage.setItem(popupKey, new Date().toISOString()); // Registra el tiempo actual
    });
  }
});

