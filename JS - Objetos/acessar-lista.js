const cliente = {
    nome:"André",
    idade:36,
    cpf:"12543652266",
    email:"andre@email.com"
}
                // 0       1       2       3
const chaves = ["nome", "idade", "cpf", "email"]

// console.log(cliente[chaves[0]]) // André
// console.log(cliente[chaves[3]]) // andre@email.com

const chave = "nome"

// chaves.forEach(info => console.log(cliente[info]))
console.log(cliente["nome"])
console.log(cliente["conta"]) // tenta acessar chave de um objeto que não existe, ele não dá erro, ele dá undefined
