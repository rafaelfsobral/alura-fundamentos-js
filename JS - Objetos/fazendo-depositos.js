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
    },
    {
        nome: "Samia Maria",
        parentesco: "filha",
        dataNasc: "04/01/2014"
    }],
    saldo:100,
    depositar:function(valor){
        this.saldo += valor
    }
}

// Utiliza funções para dar comportamento ao objeto, por exemplo: no contexto aqui de banco poderia ser depositar, sacar, etc
// Método são funções que estão ligadas, que trabalham num contexto de um objeto

console.log(cliente.saldo)
cliente.depositar(30)
console.log(cliente.saldo)
