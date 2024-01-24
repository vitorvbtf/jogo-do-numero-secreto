let listaNumeroSorteados = []
let quantidadeMaximaDaLista = 10
let numeroSecreto = gerarNumeroAleatorio();
let contador = 1;


function exibirMensagemInicial() {
    textoNaTela('h1', 'Jogo da adivinhação');
    textoNaTela('p', 'Escolha um número entre 1 a 10');
}
exibirMensagemInicial()

function verificarChute() {
    let numeroUsuario = document.querySelector('input').value
    if (Number(numeroUsuario) === numeroSecreto) {
        let palavraTentativa = contador > 1 ? 'tentativas' : 'tentativa';
        textoNaTela('h1', 'Você acertou!');
        textoNaTela('p', `Você descobriu o número secreto em ${contador} ${palavraTentativa}`);
        document.getElementById('reiniciar').removeAttribute('disabled')
        document.getElementById('chutar').setAttribute('disabled', true)
    } else {
        contador++
        if (numeroSecreto < numeroUsuario) {
            textoNaTela('h1', 'Tente novamente!');
            textoNaTela('p', 'o número sorteado é menor');
            limparCampo()
        } else {
            textoNaTela('h1', 'Tente novamente!');
            textoNaTela('p', 'o número sorteado é maior');
            limparCampo()
        }
    }

}

function textoNaTela(tag, mensagem) {
    let campo = document.querySelector(tag);
    campo.innerHTML = mensagem;
    responsiveVoice.speak(mensagem, 'Brazilian Portuguese Female', { rate: 1.2 })
}

function gerarNumeroAleatorio() {
    //Vai de 1 a 10
    let numeroAleatorio = parseInt(Math.random() * 10 + 1);
    let tamanhoDaLista = listaNumeroSorteados.length;
    if (tamanhoDaLista == quantidadeMaximaDaLista) {
        listaNumeroSorteados = []
    }

    if (listaNumeroSorteados.includes(numeroAleatorio)) {
        return gerarNumeroAleatorio()
    } else {
        listaNumeroSorteados.push(numeroAleatorio)
        return numeroAleatorio
    }
}

function limparCampo() {
    numeroUsuario = document.querySelector('input');
    numeroUsuario.value = '';
}

function reiniciar() {
    limparCampo()
    numeroSecreto = gerarNumeroAleatorio();
    contador = 1
    exibirMensagemInicial()
    document.getElementById('reiniciar').setAttribute('disabled', true)
    document.getElementById('chutar').removeAttribute('disabled')
}