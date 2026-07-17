const startButton = document.getElementById("startButton");
const initialPage = document.getElementById("initial-page");
const finalCardPage = document.getElementById("final-card-section");
const verSorpresasButton = document.getElementById("verSorpresasButton");
const sorpresasPage = document.getElementById("sorpresas-section");

// Modal de sorpresas
const modal = document.getElementById("modalSorpresa");
const modalTitle = document.getElementById("modalTitle");
const modalImage = document.getElementById("modalImage");
const modalText = document.getElementById("modalText");

// TEXTO CORREGIDO (Risas cambiadas y palabra "digital" removida)
const cartaTextoCompleto = `
Si estás leyendo esto...

es porque decidí hacer algo diferente.

No compré un regalo. No copié una carta de Internet. Quise crear algo desde cero. Algo que fuera únicamente para ti.

me estoy estresando MUCHO por esto JAJAAJAJ (como te digo, estoy aprendiendo a programar :))

Pero vela completa, i lv YOU.

Como no te puedo dar una presencial, espero que disfrutes este pequeño detalle.

💜
`;

let i = 0;
const typingSpeed = 45; 

// FUNCIÓN CORREGIDA: Ahora asegura que los bloques se muestren/oculten bien con 'flex'
function cambiarSeccion(seccionActual, seccionSiguiente) {
    seccionActual.style.opacity = "0";
    setTimeout(() => {
        seccionActual.classList.remove('active');
        seccionActual.style.display = "none"; // Fuerza a que desaparezca por completo
        
        seccionSiguiente.style.display = "flex"; // Activa el bloque visualmente
        setTimeout(() => {
            seccionSiguiente.classList.add('active');
            seccionSiguiente.style.opacity = "1";
            window.scrollTo({ top: seccionSiguiente.offsetTop, behavior: "smooth" });
        }, 50);
    }, 1000); 
}

// Al dar clic en comenzar, va DIRECTO a la carta final
startButton.addEventListener("click", () => {
    cambiarSeccion(initialPage, finalCardPage);
    setTimeout(iniciarEscrituraCarta, 1100); 
});

verSorpresasButton.addEventListener("click", () => {
    cambiarSeccion(finalCardPage, sorpresasPage);
});

function iniciarEscrituraCarta() {
    const textoCarta = document.getElementById("textoCarta");
    if (i < cartaTextoCompleto.length) {
        if (cartaTextoCompleto.substring(i, i + 2) === '💜') {
            textoCarta.innerHTML += '<span class="heart">💜</span>';
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

