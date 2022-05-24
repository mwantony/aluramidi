function playSong(instrument) {
    const elemento = document.querySelector(instrument);
    if(elemento != undefined && elemento.localName == 'audio') {
        return elemento.play()
    }
    return alert('Elemento não encontrado')
};

const keyList = document.querySelectorAll('.tecla');

keyList.forEach((key) => {
    const instrument = key.classList[1];
    key.addEventListener('click', () => {
        playSong(`#som_${instrument}`);
    });
    key.addEventListener('keydown', function(event) {
        if(event.code == 'Enter' || event.code == 'Space') {
            key.classList.add('ativa')

        }
    })
    key.addEventListener('keyup', function() {
        key.classList.remove('ativa')
    })
});

