// Referencias a los elementos del DOM
const startButton = document.getElementById("startButton");
const initialPage = document.getElementById("initial-page");
const recuerdoPage = document.getElementById("recuerdo");
const verCartaButton = document.getElementById("verCartaButton");
const finalCardPage = document.getElementById("final-card-section");
const verSorpresasButton = document.getElementById("verSorpresasButton");
const sorpresasPage = document.getElementById("sorpresas-section");

// Modal de sorpresas
const modal = document.getElementById("modalSorpresa");
const modalTitle = document.getElementById("modalTitle");
const modalImage = document.getElementById("modalImage");
const modalText = document.getElementById("modalText");

// Texto de la carta final (Escritura automática)
const cartaTextoCompleto = `
Hola, My Marcelaaa ❤️

Si estás leyendo esto, es porque decidí hacer algo diferente.

No compré un regalo. No copié una carta de Internet. Quise crear algo desde cero. Algo que fuera únicamente para ti.

me estoy estresando MUCHO por esto jajaja (como te digo, estoy aprendiendo a programar :))

Pero vela completa, i lv YOU.

Como no te puedo dar una presencial, espero que disfrutes este pequeño detalle digital.

❤️
`;

// Variables para el control de la escritura
let i = 0;
const typingSpeed = 50; // milisegundos por carácter

// Función para cambiar de sección de forma suave (Fade out - Fade in)
function cambiarSeccion(seccionActual, seccionSiguiente) {
    seccionActual.classList.remove('active');
    setTimeout(() => {
        seccionSiguiente.classList.add('active');
        // Scroll automático al inicio de la nueva sección
        window.scrollTo({ top: seccionSiguiente.offsetTop, behavior: "smooth" });
    }, 1000); // Mismo tiempo que la transición CSS (1s)
}

// 1. Iniciar experiencia
startButton.addEventListener("click", () => {
    cambiarSeccion(initialPage, recuerdoPage);
});

// 2. Ver la carta
verCartaButton.addEventListener("click", () => {
    cambiarSeccion(recuerdoPage, finalCardPage);
    // Esperar a que la animación de cambio termine para empezar a escribir
    setTimeout(iniciarEscrituraCarta, 1000); 
});

// 3. Ver las sorpresas (Este botón aparece al final de la escritura)
verSorpresasButton.addEventListener("click", () => {
    cambiarSeccion(finalCardPage, sorpresasPage);
});

// Función para escribir la carta carácter por carácter
function iniciarEscrituraCarta() {
    const textoCarta = document.getElementById("textoCarta");
    if (i < cartaTextoCompleto.length) {
        // Soporte para corazones rojos (puedes añadir otros caracteres especiales)
        if (cartaTextoCompleto.charAt(i) === '❤️') {
            textoCarta.innerHTML += '<span class="heart">❤️</span>';
            i++; // Saltar el siguiente carácter que forma parte del emoji
        } else {
            textoCarta.innerHTML += cartaTextoCompleto.charAt(i);
        }
        i++;
        
        // Mantener el scroll al final mientras se escribe
        window.scrollTo({
            top: document.body.scrollHeight,
            behavior: "smooth"
        });
        
        setTimeout(iniciarEscrituraCarta, typingSpeed);
    } else {
        // Al final de la carta, mostrar el botón de sorpresas
        finalizarCarta();
    }
}

function finalizarCarta() {
    // Asegurarse de que el scroll esté al final
    window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
    // Mostrar el botón con la clase CSS para que se vea
    verSorpresasButton.classList.remove('hidden');
}

// ===================================
// GESTIÓN DEL MODAL DE SORPRESAS
// ===================================

function mostrarModal(titulo, texto, rutaImagen) {
    modalTitle.innerHTML = titulo;
    modalText.innerHTML = texto;
    modalImage.src = rutaImagen; // El navegador buscará este archivo en la misma carpeta
    modalImage.alt = "Imagen de " + titulo; // Texto alternativo
    
    // Fallback: Si no encuentra la imagen (porque no la has subido), ocultar el elemento img
    modalImage.onerror = function() {
        modalImage.classList.add('hidden');
        console.warn("No se pudo cargar la imagen: " + rutaImagen + ". Asegúrate de subirla a GitHub.");
    };
    modalImage.onload = function() {
        modalImage.classList.remove('hidden');
    }

    modal.style.display = "block";
}

function cerrarModal() {
    modal.style.display = "none";
}

// Cerrar el modal si se hace clic fuera del contenido
window.onclick = function(event) {
    if (event.target == modal) {
        cerrarModal();
    }
}
