// acessando o p
const paragrafo = document.getElementsByTagName('p') [0]

// imprimirndo innerHTML do p
console.log(paragrafo.innerHTML)


//imprimindo value do input
const input = document.getElementById('texto')
console.log(input)
console.log(input.value)

//funçao para imprimir value
const digitaInput = () => {
    console.log(input.value)
}

//trocando conteúdo - PARTE 3

const trocaConteudo = () => {
    paragrafo.innerHTML = input.value
}

