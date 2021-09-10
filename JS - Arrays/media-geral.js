const salaJS = [7, 8, 8, 7, 10, 6.5, 4, 10, 7]
const salaJava = [6, 5, 8, 9, 5, 6]
const salaPython = [7, 3.5, 8, 9.5]

// Desafio: Calcular a média de 3 arrays diferentes
// Solução: Vou criar uma função para fazer isso.
// Como quer calcular a média das arrays, a função abaixo vai receber um array inteiro chamado de notasDaSala
function mediaSala(notasDaSala){
    // Vamos utilizar o método reduce (significa reduzir). Vai trazer todo array por um unico valor (retorno).
    // O reduce precisa de uma função(arrow function) e de um outro parâmetro que é o valor inicial desse acumulador, nesse caso é 0.
    // Começando com a função. No caso do reduce, vou passar um primeiro parâmetro é acumulador que ele vai guardar valores e um atual (valor
    // atual que está trabalhando)
    // Quero somar todos os valores para depois tirar a média. Vai somar os valores acum e atual
    
    const somaDasNotas = notasDaSala.reduce((acum, atual) => atual + acum, 0) // Temos a soma de todas notas. 
    return somaDasNotas/notasDaSala.length // Precisa do retorno dessa função que é a média
}

console.log(`A média da sala de Javascript é ${mediaSala(salaJS)}`)
console.log(`A média da sala de Java é ${mediaSala(salaJava)}`)
console.log(`A média da sala de Python é ${mediaSala(salaPython)}`)


// Outro exemplo com reduce
const notas = [10, 6.5, 8, 7]

const media = notas.reduce((acum, atual) => atual + acum, 0) / notas.length

console.log(media)