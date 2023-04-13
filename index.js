const listaDeTeclas = document.querySelectorAll('.tecla');

function tocaSom(idAudio) {
    const elemento = document.querySelector(idAudio);

    if (elemento != null && elemento.localName === 'audio') {
        elemento.play(idAudio)
    } else {
        console.log(`${elemento} não encontrado ou seletor não encontrado.`)
    }


    for (let contador = 0; contador < listaDeTeclas.length; contador ++) {

        const tecla = listaDeTeclas[contador];
        const instrumento = tecla.classList[1];
        const idAudio = `#som_${instrumento}`;
        listaDeTeclas[contador].onclick = () => {
            tocaSom(idAudio)
        }
        
        tecla.onkeydown = (evento) => {
            if(evento.code === 'Space' || evento.code === 'Enter') {
                tecla.classList.add('ativa');
            }
        }

        tecla.onkeyup = () => {
            tecla.classList.remove('ativa')
        }
    }
}