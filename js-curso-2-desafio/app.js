let titulo = document.querySelector('h1')
titulo.innerHTML = 'Hora do Desafio'

function verificarClick() {
    console.log('O botão foi clicado!')
}

function gerarPopUp() {
    alert('Eu amo JS')
}

function buscarCidade() {
    cidade = prompt('Em que cidade você mora?')
    alert(`Estive em ${cidade} e lembrei de você`)
}

function somar() {
    let numero1 = parseInt(prompt('digite o primeiro numero da soma'))
    let numero2 = parseInt(prompt('digite o segundo numero da soma'))
    let soma = numero1 + numero2
    alert(`O resultado da soma foi ${soma}`)
}