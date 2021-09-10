const notas = [10, 6.5, 8, 7.5]

let somaDasNotas = 0;

// for (let i=0; i<notas.length; i++){
//     somaDasNotas += notas[i]
// }

// Callback
// Para cada nota da lista de notas, faça...
// notas.forEach(nota =>{ // Arrow Function
//     somaDasNotas += nota
// })

// Também funcionaria de outra forma de função
notas.forEach(function(nota){
    somaDasNotas += nota
})

let media = somaDasNotas/notas.length

console.log(media)