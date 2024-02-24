const langButtons = document.querySelectorAll('.itemLang');
const questions = document.querySelectorAll('.faqItem h2');
const answers = document.querySelectorAll('.faqItem p');
const originalQuestions = Array.from(questions).map(question => question.innerHTML);
const originalAnswers = Array.from(answers).map(answer => answer.innerHTML);


const esData = {
        "faqItem": [
            {"question1": "¿Qué es esto, dónde estoy?",
            "answer1": "Te encuentras en mi página web (⁠ʘ⁠ᴗ⁠ʘ⁠✿⁠) que me hizo chatGPT y yo la retoqué (tuve que estudiar tantito tambien, ಥ⁠‿⁠ಥ fue horrible).\n La uso para mi portafolio y para almacenar todo lo que hago y que no puedo subir a ningun lado por ser para adultos."},
          
            {"question2": "¿Qué idiomas hablas?",
            "answer2": "Español e inglés."},
          
            {"question3": "¿Qué tipo de trabajo haces?",
            "answer3": "Hago de todo, desde un chibi encantador hasta lo mas perturbador que quieras.<br> cute / couples / mecha / pokemon / +18 / yuri GL / yaoi BL / vore / female transformation / pies / scat / guro y más"},
          
            {"question4": "¿Qué tipo de trabajos <b>NO</b> haces?",
            "answer4": "Solo gorditas y relacionados (por trauma personal) (embarazo y las extensiones del vore no me molestan)."},
          
            {"question5": "Si quiero una comisión, ¿qué debo hacer?",
            "answer5": "Primero tendrías que ver esta página: <b><a href='https://ayacomics.net/portfolio/priceList'>COMMISSION DETAILS</a></b> Favor de revisar bien la sección de detalles importantes para evitar malentendidos.<br>Luego enviarme un correo a: <a href='mailto:your.aya_yany@hotmail.com'>aya_yany@hotmail.com</a> o mensaje por twitter a <a href='https://twitter.com/ayayanagisawa' target='_blank'>@ayayanagisawa</a> con todo lo referente a la comisión, desde tus preguntas hasta los detalles."},
          
            {"question6": "¿Cómo sé si tienes comisiones abiertas?",
            "answer6": "No hay manera de saberlo, usualmente abro un par de slots al mes, pero se llenan rápido. No pasa nada si envias correo para saber cuando hay espacio e incluso se puede hacer una reservasíon para el mes siguiente.<br><b>Acerca de las reservasiones:</b> Solo puedo aceptarlas para el mes siguiente, por si acaso algo pase y no pueda, no quisiera que hubiesen malentendidos."},
          
            {"question7": "¿Todos los pagos deben hacerse completos al principio?",
            "answer7": "Sí, para casos de piezas únicas, para piezas mensuales cada pieza se puede pagar al principio del mes en el que se trabajará."},
          
            {"question8": "¿Cuál es tu moneda?",
            "answer8": "Todos los pagos son en dólares estadounidenses con un 5.9% de PayPal."},
          
            {"question9": "¿Cuánto tiempo debo esperar para ver la comisión terminada?",
            "answer9": "El tiempo te lo mencionaré antes del pago, usualmente es de un mes, ya que trabajo en varios comics y solo tengo los fines de semana para slots independientes."},
          
            {"question10": "¿Cómo puedo contactarte?",
            "answer10": "Por correo electrónico: <a href='mailto:your.aya_yany@hotmail.com'>aya_yany@hotmail.com</a> o mensaje de Twitter a <a href='https://twitter.com/ayayanagisawa' target='_blank'>@ayayanagisawa</a>"},
          
            {"question11": "¿Por qué usas emojis o caritas?",
            "answer11": "Porque en el momento de explicar cómo trabajo sueno amargada... es difícil hablar profesionalmente."},
          
            {"question12": "¿Hay devoluciones?",
            "answer12": "No, nunca he hecho, pero por eso se pide revisar bien todo lo detallado en la siguiente pagina: <b><a href='https://ayacomics.net/portfolio/priceList'>COMMISSION DETAILS</a></b>"},
          
            {"question13": "¿Puedo hacer un manga a largo plazo?",
            "answer13": "Sí, puede ser tan largo como quieras, para eso tengo paquetes, cada capítulo puede tener una portada básica gratuita."}
            ]
          }
          
        

          function changeLanguage(lang) {
            if (lang === 'es') {
              questions.forEach((question, index) => {
                question.innerHTML = esData.faqItem[index][`question${index + 1}`];
              });
              answers.forEach((answer, index) => {
                answer.innerHTML = esData.faqItem[index][`answer${index + 1}`];
              });
            } else {
                questions.forEach((question, index) => {
                    question.innerHTML = originalQuestions[index];
                  });
                  answers.forEach((answer, index) => {
                    answer.innerHTML = originalAnswers[index];
                  });
            }
          }
          
          langButtons.forEach(button => {
            button.addEventListener('click', function() {
              const lang = this.getAttribute('data-lang');
              changeLanguage(lang);
            });
          });