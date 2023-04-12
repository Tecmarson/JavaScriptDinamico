const teclas = document.querySelectorAll('.tecla');

function tocaSom(idAudio) {
    document.querySelector(idAudio).play();
}


for (let contador = 0; contador < teclas.length; contador ++) {

    const tecla = teclas[contador];
    const instrumento = tecla.classList[1];
    const idAudio = `#som_${instrumento}`;

    teclas[contador].onclick = () => {
        tocaSom(idAudio)
    }

}