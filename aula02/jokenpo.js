let vitoriasUsuario = 0;
let vitoriasBot = 0;

function jogar() {
    //validação (radio buttons)
    if ((document.getElementById('pedra').checked === false) && (document.getElementById('papel').checked === false) && (document.getElementById('tesoura').checked === false)) {
        alert('Selecione uma opção')
    } else {
        let sorteio = Math.floor(Math.random() * 3)
        switch (sorteio) {
            case 0:
                document.getElementById('pc').src = 'pcpedra.jpg'
                break
            case 1:
                document.getElementById('pc').src = 'pcpapel.jpg'
                break
            case 2:
                document.getElementById('pc').src = 'pctesoura.jpg'
                break
        }

        //verificar o vencedor ou declarar empate
        if ((document.getElementById('pedra').checked === true && sorteio === 0) || (document.getElementById('papel').checked === true && sorteio === 1) || (document.getElementById('tesoura').checked === true && sorteio === 2)) {
            document.getElementById('resultado').innerText = 'EMPATE'
        } else if ((document.getElementById('pedra').checked === true && sorteio === 2) || (document.getElementById('papel').checked === true && sorteio === 0) || (document.getElementById('tesoura').checked === true && sorteio === 1)) {
            document.getElementById('resultado').innerText = 'Jogador Venceu'
            vitoriasUsuario++
        } else {
            document.getElementById('resultado').innerText = 'Computador Venceu'
            vitoriasBot++
        }
        if (vitoriasUsuario === 2) {
            alert('o usuário ganhou')
        } else if (vitoriasBot === 2) {
            alert('o Bot ganhou')
        }
    }

}

function resetar() {
    document.getElementById('pc').src = 'pc.png'
    document.getElementById('resultado').innerText = ''
    vitoriasUsuario = 0
    vitoriasBot = 0
}