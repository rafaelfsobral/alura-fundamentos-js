const notas = [10, 6, 8] // adicionar 7
// notas.push(7)
notas.push() // o resultado da média deu NaN. Como não tem nada no indice 3 da lista, ele está como undefined. E conta com undefined dá NaN
console.log(notas)

let media = (notas[0] + notas[1] + notas[2] + notas[3]) / notas.length

console.log(media)