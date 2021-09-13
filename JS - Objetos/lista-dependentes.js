const cliente = {
    nome:"André",
    idade:36,
    cpf:"12543652266",
    email:"andre@email.com",
    fones:["552112345678", "5521991234567"],
    dependentes:[{
        nome: "Sara Silva",
        parentesco: "filha",
        dataNasc: "20/03/2011"
    }]
}

cliente.dependentes.push({
    nome: "Samia Maria",
    parentesco: "filha",
    dataNasc: "04/01/2014"
})

console.log(cliente)
                     //objeto  // chave  // método
const filhaMaisNova = cliente.dependentes.filter(dependente => dependente.dataNasc==="04/01/2014") // percorre a lista de objetos
// cada índice do array é seu próprio objeto.

// o método filter sempre retorna um array como resultado
console.log(filhaMaisNova[0].nome)