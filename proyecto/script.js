const startButton = document.getElementById("startButton");

startButton.addEventListener("click", iniciarCarta);


function iniciarCarta(){

    const container = document.querySelector(".container");

    container.style.opacity = "0";


    setTimeout(()=>{

        container.innerHTML = `

        <div class="intro">

            <p class="intro1">
                Bienvenida a esta carta ❤️
            </p>

            <p class="intro2">
                me estoy estresando MUCHO por esto jajaja
            </p>

            <p class="intro3">
                Vela completa, i lv YOU
            </p>

            <p class="intro4">
                como no te puedo dar una presencial,
                asi que disfrutala :))
            </p>

        </div>

        `;


        container.style.opacity="1";


        setTimeout(mostrarCarta,10000);


    },1000);


}



function mostrarCarta(){

    const container = document.querySelector(".container");


    container.style.opacity="0";


    setTimeout(()=>{


        container.innerHTML=`

        <div class="mensaje">

            <h2>
                Hola, My Marcelaaa ❤️
            </h2>

            <p id="textoCarta"></p>

        </div>

        `;


        container.style.opacity="1";


        escribirCarta();


    },1000);

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


        window.scrollTo({
            top: document.body.scrollHeight,
            behavior:"smooth"
        });


        setTimeout(escribirCarta,45);


    } else {


        mostrarBotonRecuerdo();


    }

}




function mostrarBotonRecuerdo(){


    const boton = document.createElement("button");


    boton.innerHTML = "Un recuerdo que nunca olvido ❤️";


    boton.className = "boton-recuerdo";


    boton.onclick = mostrarRecuerdo;


    document.querySelector(".mensaje").appendChild(boton);


}





function mostrarRecuerdo(){


    const recuerdo = document.getElementById("recuerdo");


    recuerdo.style.display="block";


    window.scrollTo({

        top: recuerdo.offsetTop,

        behavior:"smooth"

    });


}
