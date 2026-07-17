/* =========================
   ESTILOS GENERALES
   ========================= */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    min-height: 100vh;
    background: #090014;
    color: white;
    font-family: 'Poppins', sans-serif;
    overflow-x: hidden;
    scroll-behavior: smooth; /* Desplazamiento suave para todo el body */
}

.container {
    padding: 20px;
    max-width: 1200px;
    margin: 0 auto;
    display: none; /* Ocultamos todas las secciones por defecto */
    opacity: 0;
    transition: opacity 1s ease;
}

.container.active {
    display: flex; /* O flex si lo necesitas */
    opacity: 1;
}

/* =========================
   ELEMENTOS FIJOS (ESTRELLAS Y LUNA)
   ========================= */
.stars-container {
    position: fixed;
    inset: 0;
    z-index: 0; /* Por detrás de todo */
    pointer-events: none;
}

#stars, #stars2, #stars3 {
    position: absolute;
    inset: 0;
}

#stars {
    background-image: radial-gradient(2px 2px at 20px 30px, #fff, transparent), radial-gradient(2px 2px at 90px 120px, #fff, transparent), radial-gradient(2px 2px at 170px 80px, #fff, transparent);
    background-size: 300px 300px;
    animation: mover1 90s linear infinite;
    opacity: .8;
}

#stars2 {
    background-image: radial-gradient(1.5px 1.5px at 40px 50px, #ffddee, transparent), radial-gradient(1.5px 1.5px at 180px 140px, #ffffff, transparent);
    background-size: 400px 400px;
    animation: mover2 140s linear infinite;
    opacity: .6;
}

#stars3 {
    background-image: radial-gradient(3px 3px at 100px 100px, #fff, transparent);
    background-size: 550px 550px;
    animation: mover3 220s linear infinite;
    opacity: .35;
}

.moon {
    position: fixed;
    top: 60px;
    right: 80px;
    width: 120px;
    height: 120px;
    border-radius: 50%;
    background: #fff8dc;
    box-shadow: 0 0 20px white, 0 0 60px #fff5b8, 0 0 120px rgba(255, 255, 200, .5);
    z-index: 1; /* Un poco más arriba de las estrellas */
    opacity: .95;
}

/* Movimiento de estrellas */
@keyframes mover1 { from { transform: translateY(0); } to { transform: translateY(-300px); } }
@keyframes mover2 { from { transform: translateY(0); } to { transform: translateY(-400px); } }
@keyframes mover3 { from { transform: translateY(0); } to { transform: translateY(-500px); } }

/* =========================
   PÁGINA INICIAL
   ========================= */
#initial-page {
    position: relative;
    z-index: 2;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
}

h1 {
    font-family: 'Cormorant Garamond', serif;
    font-size: 60px;
    color: #ffb6d9;
    text-shadow: 0 0 10px #ff69b4, 0 0 20px #ff69b4;
    animation: aparecer 2s ease;
}

.subtitle {
    margin-top: 20px;
    font-size: 20px;
    color: #f5d9e8;
    animation: aparecer 3s ease;
}

@keyframes aparecer {
    from { opacity: 0; transform: translateY(30px); }
    to { opacity: 1; transform: translateY(0); }
}

/* =========================
   BOTONES
   ========================= */
button {
    border: none;
    cursor: pointer;
    transition: 0.3s;
    font-family: 'Poppins', sans-serif;
}

#startButton {
    margin-top: 40px;
    padding: 15px 35px;
    border-radius: 30px;
    background: #ff5caa;
    color: white;
    font-size: 18px;
    box-shadow: 0 0 20px #ff5caa;
}

#startButton:hover, .boton-recuerdo:hover, .boton-sorpresas:hover {
    transform: scale(1.1);
    box-shadow: 0 0 35px #ff5caa;
}

/* =========================
   SECCION RECUERDO Y DETALLES
   ========================= */
.recuerdo {
    z-index: 2;
    padding-top: 100px;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.parque-container {
    display: flex;
    flex-direction: column;
    width: 100%;
    align-items: center;
}

.parque {
    height: 300px;
    width: 100%;
    background: linear-gradient(#111 20%, transparent); /* Mejor transición de fondo */
    display: flex;
    justify-content: center;
    align-items: end;
}

.siluetas {
    position: relative;
    width: 300px;
    height: 150px;
}

.persona {
    width: 50px;
    height: 100px;
    background: #000;
    border-radius: 50px 50px 10px 10px;
    position: absolute;
    bottom: 50px;
    opacity: 0.8;
}

.persona1 { left: 80px; }
.persona2 { right: 80px; }

.banca {
    position: absolute;
    bottom: 30px;
    left: 50px;
    width: 200px;
    height: 20px;
    background: #050505;
}

.texto-recuerdo {
    margin-top: 40px;
    text-align: center;
}

.frase-grande {
    font-size: 35px;
    font-weight: bold;
    margin-top: 30px;
    color: #ffb6d9;
}

/* === CORRECCIÓN DEL TRIÁNGULO BUGUEADO === */
.recuerdo-detalles-focus {
    margin: 60px 0;
    width: 100%;
    display: flex;
    justify-content: center;
    position: relative;
    /* Esta sección crea un 'foco' sin usar un triángulo roto */
}

.foco-luz {
    max-width: 600px;
    text-align: center;
    font-size: 24px;
    font-style: italic;
    color: #ffddee;
    line-height: 1.6;
    background: radial-gradient(circle at center, rgba(255,182,217,0.15), transparent 70%);
    padding: 40px;
    border-radius: 50%; /* Da un efecto de luz focalizada */
}

.carta-final-trigger {
    margin-top: 40px;
}

.boton-recuerdo {
    margin-top: 0; /* Lo gestiona el trigger container */
    background: #ff8acb;
    box-shadow: 0 0 20px #ff8acb;
    color: white;
    font-size: 18px;
    padding: 15px 35px;
    border-radius: 30px;
}

/* =========================
   CARTA FINAL
   ========================= */
.final-card {
    min-height: 100vh;
    justify-content: center;
    align-items: center;
    z-index: 2;
}

.mensaje {
    max-width: 800px;
    width: 90%;
    padding: 50px;
    background: rgba(255, 255, 255, 0.08);
    border: 1px solid rgba(255, 182, 217, 0.4);
    border-radius: 25px;
    backdrop-filter: blur(12px);
    box-shadow: 0 0 30px rgba(255, 105, 180, 0.25), inset 0 0 30px rgba(255, 255, 255, 0.05);
    display: flex;
    flex-direction: column;
    align-items: center;
}

.mensaje h2 {
    font-size: 50px;
    margin-bottom: 40px;
    color: #ffd2e7;
    font-family: 'Cormorant Garamond', serif;
    text-align: center;
}

#textoCarta {
    font-size: 22px;
    line-height: 1.8;
    white-space: pre-line; /* Mantiene saltos de línea */
}

/* Estilo del corazón */
.heart {
    color: red;
    font-size: 30px;
}

/* Botón que aparece al final de la carta */
.boton-sorpresas {
    margin-top: 50px;
    background: #ff5caa;
    box-shadow: 0 0 20px #ff5caa;
    color: white;
    font-size: 20px;
    padding: 18px 40px;
    border-radius: 35px;
    font-weight: bold;
}

.hidden {
    display: none !important;
}

/* =========================
   SECCIÓN DE SORPRESAS
   ========================= */
.sorpresas-section {
    padding-top: 100px;
    padding-bottom: 100px;
    z-index: 2;
    flex-direction: column;
    align-items: center;
}

.sorpresas-section h2 {
    font-family: 'Cormorant Garamond', serif;
    font-size: 40px;
    color: #ffd2e7;
    margin-bottom: 60px;
}

.sorpresas-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 30px;
    width: 100%;
    max-width: 1000px;
}

.sorpresa-item {
    display: flex;
    justify-content: center;
}

.sorpresa-btn {
    width: 100%;
    max-width: 250px;
    height: 100px;
    border-radius: 20px;
    background: rgba(255, 255, 255, 0.05);
    border: 2px solid #ff8acb;
    color: #ffb6d9;
    font-size: 18px;
    font-weight: 500;
    box-shadow: 0 0 15px rgba(255, 138, 203, 0.2);
}

.sorpresa-btn:hover {
    background: #ff8acb;
    color: white;
    transform: translateY(-10px) scale(1.05);
    box-shadow: 0 0 25px rgba(255, 138, 203, 0.6);
}

/* =========================
   MODAL DE SORPRESAS (Pop-up)
   ========================= */
.modal {
    display: none;
    position: fixed;
    z-index: 10;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0,0,0,0.85); /* Fondo oscuro */
    backdrop-filter: blur(5px);
}

.modal-content {
    background: rgba(9, 0, 20, 0.95);
    margin: 10% auto;
    padding: 30px;
    border: 1px solid #ff8acb;
    border-radius: 20px;
    max-width: 600px;
    width: 85%;
    text-align: center;
    position: relative;
    box-shadow: 0 0 40px rgba(255, 138, 203, 0.5);
}

.close {
    color: #ff8acb;
    position: absolute;
    top: 15px;
    right: 25px;
    font-size: 35px;
    font-weight: bold;
    cursor: pointer;
}

.close:hover {
    color: white;
}

#modalTitle {
    font-size: 28px;
    color: #ffb6d9;
    margin-bottom: 20px;
    font-family: 'Cormorant Garamond', serif;
}

#modalImage {
    max-width: 100%;
    max-height: 300px;
    border-radius: 10px;
    margin-bottom: 20px;
    border: 1px solid rgba(255, 182, 217, 0.2);
}

#modalText {
    font-size: 18px;
    line-height: 1.6;
    color: #f5d9e8;
}

/* =========================
   AJUSTES PARA CELULAR
   ========================= */
@media (max-width: 768px) {
    h1 { font-size: 42px; }
    .subtitle { font-size: 16px; padding: 0 10px; }
    .recuerdo-detalles-focus { margin: 40px 0; }
    .foco-luz { font-size: 18px; padding: 25px; }
    .frase-grande { font-size: 28px; }
    .mensaje h2 { font-size: 38px; }
    #textoCarta { font-size: 18px; padding: 0 10px; }
    .boton-sorpresas { font-size: 18px; padding: 15px 30px; }
    .sorpresas-grid { grid-template-columns: repeat(2, 1fr); gap: 15px; }
    .sorpresa-btn { height: 80px; font-size: 16px; }
    .modal-content { margin: 20% auto; padding: 20px; width: 90%; }
    #modalTitle { font-size: 22px; }
}
