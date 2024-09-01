const translations = {
  en: {
      title: "Frequently Asked Questions",
      question1: "Do you take commissions?",
      answer1: "The answer will be always YES, I usually have between 2-7 slots every month, with paid reservations available with one month of anticipation.",
      question2: "What languages do you speak?",
      answer2: "Spanish and English.",
      question3: "What kind of work do you do?",
      answer3: `I do everything from a charming chibi to what others call "disturbing", which I don't, I'll always find it interesting!<br>
          -18 / +18 / yuri GL / yaoi BL / vore / female transformation / feet / scat / guro and more.`,
      question4: "What kind of jobs do you NOT do?",
      answer4: "Only chubby and related (personal trauma) (pregnancy and vore extensions don't bother me).",
      question5: "If I want a commission what should I do?",
      answer5: `First you should check this page: <a href="https://ayacomics.net/portfolio/priceList">COMMISSION DETAILS</a><br>
          <b>Please check the important details</b> section to avoid misunderstandings.<br><br>Then send me an email to: <a href="mailto:your.aya_yany@hotmail.com">aya_yany@hotmail.com</a> or a Twitter message to <a href="https://twitter.com/aya_yany" target="_blank">@ayayanagisawa</a> with everything about the commission, from your questions to the details, I don't judge.`,
      question7: "Do all payments have to be in full upfront at the beginning?",
      answer7: "Yes, for single piece cases, for monthly pieces each piece can be paid at the beginning of the month where it will be worked on, or reserved the month prior.",
      question8: "What is your currency?",
      answer8: "All payments are in USD dollars with 5.9% PayPal fee.",
      question9: "How long should I wait to see the finished commission?",
      answer9: "I will mention you the exact timings before the payment, usually it is one month, since I work on several comics and I only have weekends for freelance slots.<br>In the case of reservations it's 2 months, but at least the slot will be secured.",
      question10: "How can I contact you?",
      answer10: `Via email: <a href="mailto:aya_yany@hotmail.com">aya_yany@hotmail.com</a> or Twitter message to <a href="https://twitter.com/aya_yany" target="_blank">@aya_yany</a>.`,
      question11: "Why do you use emojis or smilies?",
      answer11: "Because when I have to explain details, or how I work I sound bitter... (- ▽ -;) it's hard to speak professionally without sounding rude.",
      question12: "Are there any returns?",
      answer12: `No, I've never done any, that's why it's very important to check the following page: <a href="https://ayacomics.net/portfolio/priceList">COMMISSION DETAILS</a>.`,
      question13: "Can I make a long-term manga?",
      answer13: "Yes, it can be as long as you want, for that I have packages, each chapter can have a basic free cover."
  },
  es: {
      title: "Preguntas Frecuentes",
      question1: "¿Aceptas comisiones?",
      answer1: "La respuesta siempre será SÍ, normalmente tengo entre 2-7 espacios cada mes, con reservas pagadas disponibles con un mes de anticipación.",
      question2: "¿Qué idiomas hablas?",
      answer2: "Español e inglés.",
      question3: "¿Qué tipo de trabajo realizas?",
      answer3: `Hago de todo, desde un encantador chibi hasta lo que otros llaman "perturbador", lo cual no me parece, ¡siempre lo encontraré interesante!<br>
          -18 / +18 / yuri GL / yaoi BL / vore / transformación femenina / pies / scat / guro y más.`,
      question4: "¿Qué tipo de trabajos NO haces?",
      answer4: "Solo trabajos relacionados con personas rellenitas (trauma personal) (el embarazo y las extensiones de vore no me molestan).",
      question5: "¿Qué debo hacer si quiero una comisión?",
      answer5: `Primero deberías revisar esta página: <a href="https://ayacomics.net/portfolio/priceList">DETALLES DE LA COMISIÓN</a><br>
          <b>Por favor, revisa la sección de detalles importantes</b> para evitar malentendidos.<br><br>Luego envíame un correo electrónico a: <a href="mailto:your.aya_yany@hotmail.com">aya_yany@hotmail.com</a> o un mensaje en Twitter a <a href="https://twitter.com/aya_yany" target="_blank">@ayayanagisawa</a> con todos los detalles de la comisión, no juzgo.`,
      question7: "¿Todos los pagos deben hacerse por completo al principio?",
      answer7: "Sí, en el caso de piezas individuales, para piezas mensuales cada una se puede pagar al comienzo del mes en que se trabajará, o reservar el mes anterior.",
      question8: "¿Cuál es tu moneda?",
      answer8: "Todos los pagos son en dólares estadounidenses con una tarifa de PayPal del 5.9%.",
      question9: "¿Cuánto tiempo debo esperar para ver la comisión terminada?",
      answer9: "Te mencionaré los tiempos exactos antes del pago, usualmente es un mes, ya que trabajo en varios cómics y solo tengo los fines de semana para trabajos freelance.<br>En el caso de reservas, son 2 meses, pero al menos el espacio estará asegurado.",
      question10: "¿Cómo puedo contactarte?",
      answer10: `Por correo electrónico: <a href="mailto:aya_yany@hotmail.com">aya_yany@hotmail.com</a> o mensaje de Twitter a <a href="https://twitter.com/aya_yany" target="_blank">@aya_yany</a>.`,
      question11: "¿Por qué usas emojis o caritas?",
      answer11: "Porque cuando tengo que explicar detalles, o cómo trabajo, sueno amargada... (- ▽ -;) es difícil hablar profesionalmente sin sonar grosera.",
      question12: "¿Hay devoluciones?",
      answer12: `No, nunca he hecho ninguna, por eso es muy importante revisar la siguiente página: <a href="https://ayacomics.net/portfolio/priceList">DETALLES DE LA COMISIÓN</a>.`,
      question13: "¿Puedo hacer un manga a largo plazo?",
      answer13: "Sí, puede ser tan largo como desees, para eso tengo paquetes, cada capítulo puede tener una portada básica gratis."
  }
};

function translateFaq(lang) {
  document.querySelector('.Preguntas h1').textContent = translations[lang].title;

  for (let i = 1; i <= 13; i++) {
      if (translations[lang][`question${i}`] && translations[lang][`answer${i}`]) {
          document.querySelector(`.question${i}`).textContent = translations[lang][`question${i}`];
          document.querySelector(`.answer${i}`).innerHTML = translations[lang][`answer${i}`];
      }
  }
}

// Example usage
const langButtons = document.querySelectorAll('.itemLang');
langButtons.forEach(button => {
  button.addEventListener('click', () => {
      translateFaq(button.getAttribute('data-lang'));
  });
});
 const navbar = document.querySelector(".navbar");
  const sections = document.querySelectorAll(".section");
  const navLinks = document.querySelectorAll(".navbar a");
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
 document.addEventListener('click', function(event) {
    var dropdown = document.querySelector('.dropdown-content');
    var dropbtn = document.querySelector('.dropbtn');
    
    // Verifica si el clic ocurrió fuera del dropdown
    if (!dropbtn.contains(event.target) && !dropdown.contains(event.target)) {
      dropdown.style.display = 'none';
    }
  });
  
  document.querySelector('.dropbtn').addEventListener('click', function(event) {
    var dropdown = document.querySelector('.dropdown-content');
    
    // Cambia la visibilidad del dropdown al hacer clic en el botón
    if (dropdown.style.display === 'block') {
      dropdown.style.display = 'none';
    } else {
      dropdown.style.display = 'block';
    }
  });



