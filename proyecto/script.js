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

// TEXTO CORREGIDO (Nuevos cambios aplicados perfectamente)
const cartaTextoCompleto = `
Si estás leyendo esto...

es porque decidí hacer algo diferente.

no te pude dar una figura tamaño real de shoto o Hawks JAJAJA,quise algo diferente, porque recuerdas que te iba a hacer una carta virtual jejej, y este es solo una de varias ❤️ :)

me estoy estresando MUCHO por esto JAJAAJAJ (como te digo, estoy aprendiendo a programar :))

Pero vela completa, i lv YOU.

Como no te puedo dar una presencial, espero que disfrutes este pequeño detalle.

❤️ :)
`;

let i = 0;
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

// Navegación fluida
startButton.addEventListener("click", () => {
    cambiarSeccion(initialPage, finalCardPage);
    setTimeout(iniciarEscrituraCarta, 1100); 
});

verSorpresasButton.addEventListener("click", () => {
    cambiarSeccion(finalCardPage, sorpresasPage);
});

verCartaQuemadaButton.addEventListener("click", () => {
    cambiarSeccion(sorpresasPage, cartaQuemadaPage);
});

function iniciarEscrituraCarta() {
    const textoCarta = document.getElementById("textoCarta");
    if (i < cartaTextoCompleto.length) {
        // Soporte correcto para emojis de corazones rojos
        if (cartaTextoCompleto.substring(i, i + 2) === '❤️') {
            textoCarta.innerHTML += '<span class="heart">❤️</span>';
            i += 2; 
        } else {
            textoCarta.innerHTML += cartaTextoCompleto.charAt(i);
            i++;
        }
        
        window.scrollTo({
            top: document.body.scrollHeight,
            behavior: "smooth"
        });
        
        setTimeout(iniciarEscrituraCarta, typingSpeed);
    } else {
        finalizarCarta();
    }
}

function finalizarCarta() {
    window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
    verSorpresasButton.classList.remove('hidden');
}

// MOSTRAR VENTANAS CON IMÁGENES
function mostrarModal(titulo, texto, rutaImagen) {
    modalTitle.innerHTML = titulo;
    modalText.innerHTML = texto;
    modalImage.src = rutaImagen; 
    modalImage.alt = titulo; 
    
    modalImage.onerror = function() {
        modalImage.style.display = 'none';
        console.warn("Revisa si subiste la imagen con el nombre exacto: " + rutaImagen);
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
