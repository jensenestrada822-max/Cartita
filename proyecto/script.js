const startButton = document.getElementById("startButton");

startButton.addEventListener("click", iniciarCarta);

function iniciarCarta() {

    document.querySelector(".container").style.opacity = "0";

    setTimeout(() => {

        document.querySelector(".container").innerHTML = `

        <div class="intro">

            <p class="intro1">
                Hay personas que llegan...
            </p>

            <p class="intro2">
                y cambian tu mundo por completo.
            </p>

            <p class="intro3">
                Tú hiciste eso conmigo. ❤️
            </p>

        </div>

        `;

        document.querySelector(".container").style.opacity = "1";

        setTimeout(mostrarCarta,7000);

    },800);

}
function mostrarCarta(){

    document.querySelector(".container").style.opacity="0";

    setTimeout(()=>{

        document.querySelector(".container").innerHTML=`

        <div class="mensaje">

            <h2>Hola, My Love ❤️</h2>

            <p id="textoCarta"></p>

        </div>

        `;

        document.querySelector(".container").style.opacity="1";

        i=0;

        escribirCarta();

    },800);

}

    document.querySelector(".container").style.opacity = "0";

    setTimeout(() => {

        document.querySelector(".container").innerHTML = `

        <div class="intro">

            <p class="intro1">
                Hay personas que llegan...
            </p>

            <p class="intro2">
                y cambian tu mundo por completo.
            </p>

            <p class="intro3">
                Tú hiciste eso conmigo. ❤️
            </p>

        </div>

        `;

        document.querySelector(".container").style.opacity = "1";

        setTimeout(mostrarCarta,7000);

    },800);

}

    // Desaparece la pantalla principal
    document.querySelector(".container").style.opacity = "0";

    setTimeout(() => {

        document.querySelector(".container").innerHTML = `

        <div class="mensaje">

            <h2>Hola, My Marcelaaa❤️</h2>

            <p id="textoCarta"></p>

        </div>

        `;

        document.querySelector(".container").style.opacity = "1";

        escribirCarta();

    }, 1000);

}


const carta = `

Si estás leyendo esto...

es porque decidí hacer algo diferente.

No compré un regalo.

No copié una carta de Internet.

Quise crear algo desde cero.

Algo que fuera únicamente para ti.

❤️

`;

let i = 0;

function escribirCarta(){

    const texto = document.getElementById("textoCarta");

    if(i < carta.length){

        texto.innerHTML += carta.charAt(i);

        i++;

        setTimeout(escribirCarta,45);

    }

}