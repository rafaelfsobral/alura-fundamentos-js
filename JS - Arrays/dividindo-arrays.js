const nomes = ['João', 'Juliana', 'Ana', 'Caio', 'Lara', 'Marjorie', 'Guilherme', 'Aline', 'Fabiana', 'André', 'Carlos', 'Paulo', 'Bia', 
'Vivian', 'Isabela', 'Vinícius', 'Renan', 'Renata', 'Daisy', 'Camilo']

const sala1 = nomes.slice(0, nomes.length/2) 
const sala2 = nomes.slice(nomes.length/2) // Quando não informa o segundo elemento do slice, ele considera o final do array

console.log('Tamanho da array', nomes.length)
console.log(sala1.length)
console.log(sala2.length)

console.log(`Alunos da sala 1: ${sala1}`)
console.log(`Alunos da sala 2: ${sala2}`)