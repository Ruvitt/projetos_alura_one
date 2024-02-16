let numerosSorteados = []
let numeroLimite = 10;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female',{rate: 1.2})
}

function exibirMensagemInicial() {
    exibirTextoNaTela('h1', 'Jogo do numero secreto');
    exibirTextoNaTela('p', 'Escolha um numero entre 1 a 10');
}

exibirMensagemInicial()

function verificarChute() {
    let chute = document.querySelector('input').value;
    
    if (chute == numeroSecreto) {
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
        let mensagemTentativa = `Você descobriu o numero secreto com ${tentativas} ${palavraTentativa}`;

        exibirTextoNaTela('h1', 'Você acertou!');
        exibirTextoNaTela('p', `Ae, ${mensagemTentativa}!`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    }

    else{
        if (chute > numeroSecreto) {
            exibirTextoNaTela('p', 'O numero secreto é menor :D');
        }
        
        else {
            exibirTextoNaTela('p', 'O numero secreto é maior :)');
        }
        tentativas++;
        limparCampo();
    }
}

function gerarNumeroAleatorio() {
    let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
    let numeroSorteadosLen = numerosSorteados.length;

    if (numeroSorteadosLen == numeroLimite) {
        numerosSorteados = [];
    }
    
    if (numerosSorteados.includes(numeroEscolhido)) {
        return gerarNumeroAleatorio();
    }
    else {
        numerosSorteados.push(numeroEscolhido);
        return numeroEscolhido;
    }
}

function limparCampo() {
    chute = document.querySelector('input');
    chute.value = '';
}

function reiniciarJogo() {
    numeroSecreto = gerarNumeroAleatorio();
    tentativas = 1
    limparCampo();

    exibirMensagemInicial()
    
    document.getElementById('reiniciar').setAttribute('disabled', true)
}