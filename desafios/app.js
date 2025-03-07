let tituloDois = document.querySelector('h1')
titulo.innerHTML = 'Hora do Desafio'

function exibirMensagemNoConsole() {
    console.log('O botão foi clicado')
}

function exibirAlerta() {
    alert('Eu amo JS')
}

function execPrompt() {
    let nomeCidade = prompt('Qual o nome da cidade?')
    alert(`Estive em ${nomeCidade} e lembrei de você`)
}

function soma() {
    let n1 = parseInt(prompt('Informe o primeiero inteiro'))
    let n2 = parseInt(prompt('Informe o segundo número inteiro'))
    const total = n1 + n2
    alert(`A soma de ${n1} e ${n2} é igual a: ${total}`)
}

function ola() {
    console.log('Olá Mundo!')
}
ola()

function ola2(nome) {
    console.log(`Olá ${nome}!`)
}
ola2('Adriano Lindo')

function dobro(num) {
    return num * 2
}
let resultadoDobro = dobro(5)
console.log(resultadoDobro)

function calculaMedia(nu1, nu2, nu3) {
    return (nu1 + nu2 + nu3) / 3
}
let media = calculaMedia(8, 7, 9)
console.log(media)

function encontrarMaior(a, b) {
    return a > b ? a : b;
}
let maiorNumero = encontrarMaior(8, 9)
console.log(maiorNumero)

function quadrado(numero) {
    return numero * numero;
}
let resultado = quadrado(9)
console.log(resultado)

// Arrays exercicios //
var listaGenerica = []
console.log(listaGenerica)

var linguagensDeProgramacao = ['JavaScript', 'C', 'C++', 'Kotlin', 'Python']
console.log(linguagensDeProgramacao)

linguagensDeProgramacao.push('Java', 'Ruby', 'GoLang')
console.log(linguagensDeProgramacao)

var listaNomes = ['Adriano', 'Aline', 'Honey']
console.log(listaNomes[0])
console.log(listaNomes[1])
console.log(listaNomes[2])
