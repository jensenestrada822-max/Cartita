const startButton = document.getElementById("startButton");
const initialPage = document.getElementById("initial-page");
const finalCardPage = document.getElementById("final-card-section");
const verSorpresasButton = document.getElementById("verSorpresasButton");
const sorpresasPage = document.getElementById("sorpresas-section");
const verCartaQuemadaButton = document.getElementById("verCartaQuemadaButton");
const cartaQuemadaPage = document.getElementById("carta-quemada-section");

// Modal de sorpresas
const modal = document.getElementById("modalSorpresa");
const modalTitle = document.getElementById("modalTitle");
const modalImage = document.getElementById("modalImage");
const modalText = document.getElementById("modalText");

// TEXTO CARTA PRINCIPAL
const cartaTextoCompleto = `
Si estás leyendo esto...

es porque decidí hacer algo diferente.

no te pude dar una figura tamaño real de shoto o Hawks JAJAJA,quise algo diferente, porque recuerdas que te iba a hacer una carta virtual jejej, y este es solo una de varias ❤️ :)

me estoy estresando MUCHO por esto JAJAAJAJ (como te digo, estoy aprendiendo a programar :))

Pero vela completa, i lv YOU.

Como no te puedo dar una presencial, espero que disfrutes este pequeño detalle.

❤️ :)
`;

// TU PÁRRAFO FINAL PARA LA CARTA QUEMADA
const textoCartaQuemada = `Marcela te hago está carta para no hacer las típicas palabras diarias que seguro te cansan, quiero demostrar mi amor por ti y por dónde más por algo que me apasiona, y puede que yo no sea el mejor ni me parezca a esos tipazos de los animes peeeero, puedo darte TOOOOOODOo el amor que tengo me encanta pasar tiempo contigo por dónde sea, hablar contigo, me encanta decir que me encantas JAJAJA, me gustas de una forma que no puedo explicar, son tantas cosas que más que siento por ti, que sería imposible explicarlo, amo tu sonrisita de las más bellas del universoo en serio tengo algo con eso JAJAJA tuu mirada, todo absolutamente todo de ti me causa un sentimiento que nadie más hace, aveces a como te refieres Ami cuando me dijiste JSJAJA "teamominiñoduermeperro" a demás de reírme claro JAJAJS sentí algo muy especial una sensación de felicidad que hacía olvidarme de TODO lo malo no pude dormir esa noche y yo decía "oye esos apodos disq mi niño dan cringe" pero WTFF me hizo sentir tan especial TU eres especial, y bueno nada, gracias por existir Marcela, encerio, seguro te haré más de estás prontito, y bueno sin más nada que decir gracias por tu tiempo, Te amo. ♥️`;

let i = 0;
let j = 0;
const typingSpeed = 45; 

function cambiarSeccion(seccionActual, seccionSiguiente) {
    seccionActual.style.opacity = "0";
    setTimeout(() => {
        seccionActual.classList.remove('active');
        seccionActual.style.display = "none";
        
        seccionSiguiente.style.display = "flex";
        setTimeout(() => {
            seccionSiguiente.classList.add('active');
            seccionSiguiente.style.opacity = "1";
            window.scrollTo({ top: seccionSiguiente.offsetTop, behavior: "smooth" });
        }, 50);
    }, 1000); 
}

// Navegación
startButton.addEventListener("click", () => {
    cambiarSeccion(initialPage, finalCardPage);
    setTimeout(iniciarEscrituraCarta, 1100); 
});

verSorpresasButton.addEventListener("click", () => {
    cambiarSeccion(finalCardPage, sorpresasPage);
});

verCartaQuemadaButton.addEventListener("click", () => {
    cambiarSeccion(sorpresasPage, cartaQuemadaPage);
    setTimeout(iniciarEscrituraQuemada, 1100); // Inicia el efecto en el pergamino
});

// Escritura carta 1
function iniciarEscrituraCarta() {
    const textoCarta = document.getElementById("textoCarta");
    if (i < cartaTextoCompleto.length) {
        if (cartaTextoCompleto.substring(i, i + 2) === '❤️') {
            textoCarta.innerHTML += '<span class="heart">❤️</span>';
            i += 2; 
        } else {
            textoCarta.innerHTML += cartaTextoCompleto.charAt(i);
            i++;
        }
        window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
        setTimeout(iniciarEscrituraCarta, typingSpeed);
    } else {
        finalizarCarta();
    }
}

function finalizarCarta() {
    window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
    verSorpresasButton.classList.remove('hidden');
}

// Escritura del pergamino final
function iniciarEscrituraQuemada() {
    const textoQuemado = document.getElementById("textoQuemado");
    if (j < textoCartaQuemada.length) {
        textoQuemado.innerHTML += textoCartaQuemada.charAt(j);
        j++;
        window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
        setTimeout(iniciarEscrituraQuemada, 35); // Un poquitín más rápido para que no sea eterno
    }
}

// Ventanas emergentes
function mostrarModal(titulo, texto, rutaImagen) {
    modalTitle.innerHTML = titulo;
    modalText.innerHTML = texto;
    modalImage.src = rutaImagen; 
    modalImage.alt = titulo; 
    
    modalImage.onerror = function() {
        modalImage.style.display = 'none';
        console.warn("Imagen no encontrada: " + rutaImagen);
    };
    modalImage.onload = function() {
        modalImage.style.display = 'inline-block';
    }
    modal.style.display = "block";
}

function cerrarModal() {
    modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal) {
        cerrarModal();
    }
}
