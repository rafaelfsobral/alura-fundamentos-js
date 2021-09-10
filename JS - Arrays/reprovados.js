const nomes = ['Ana', 'Marcos', 'Maria', 'Mauro']
const notas = [7, 4.5, 8, 7.5]

// O retorno é uma lista.
// Como quer retornar o nome dos reprovados, então usa-se nomes.filter.
// É um método que precisa de uma função, precisa de uma callback. Vai ser usada uma arrow function.
// O filter precisa que seja retornado um booleano, ou seja, true ou false.
// const reprovados = nomes.filter( (aluno, indice) => notas[indice] < 5)
const reprovados = nomes.filter( (_, indice) => notas[indice] < 5) // como o parâmetro aluno (na linha 8) não estava sendo usado, pode-se
// colocar no lugar dele como parâmetro o "_", conforme demonstrado na linha 9.

console.log(reprovados)