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

let relatorio = "";

// Método For..in -> percorrer objetos pela string da chave
for (let info in cliente){ // chave info
    // typeof indica o tipo de dado, ou seja, por exemplo, o tipo de dado de uma função vai retornar function. 
    if(typeof cliente[info] === "object" || typeof cliente[info] === "function"){ // verifica o tipo de dado se for objeto ou função
        continue 
    }else{
        // notação de colchetes serve para passar chaves do objeto quando não tem como escrever diretamente, por exemplo: cliente.nome
        relatorio += `
                    ${info} ===> ${cliente[info]} 
                    `
    }
}

console.log(relatorio)