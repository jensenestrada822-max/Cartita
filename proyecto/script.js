const screens = document.querySelectorAll(".screen");
const audios = document.querySelectorAll("audio");

let current = 0;

// Iniciar
function startPlaylist() {
    screens[0].classList.remove("active");
    current = 1;
    screens[current].classList.add("active");
}

// Siguiente canción
function nextSong() {

    // Pausar todas las canciones
    audios.forEach(audio => {
        audio.pause();
        audio.currentTime = 0;
    });

    screens[current].classList.remove("active");

    current++;

    if (current >= screens.length) {
        current = screens.length - 1;
    }

    screens[current].classList.add("active");

    // Desplazar arriba
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

}

// Reiniciar
function restart() {

    audios.forEach(audio => {
        audio.pause();
        audio.currentTime = 0;
    });

    screens[current].classList.remove("active");

    current = 0;

    screens[current].classList.add("active");

}

// Solo una canción sonando a la vez
audios.forEach(audio => {

    audio.addEventListener("play", () => {

        audios.forEach(other => {

            if (other !== audio) {

                other.pause();

            }

        });

    });

});
