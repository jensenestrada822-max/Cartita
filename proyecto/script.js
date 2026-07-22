// Pausa automáticamente los otros reproductores al reproducir uno nuevo
document.addEventListener('DOMContentLoaded', () => {
    const audios = document.querySelectorAll('audio');

    audios.forEach(audio => {
        audio.addEventListener('play', () => {
            audios.forEach(otherAudio => {
                if (otherAudio !== audio) {
                    otherAudio.pause();
                }
            });
        });
    });
});
