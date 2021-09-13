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

// Object.keys vai criar um array a partir da chave de um objeto
// const propsClientes = Object.keys(cliente);
// console.log(propsClientes) // O terminal trouxe um array com todas as chaves do objeto cliente (parâmetro)

// Criar uma função que passa o objeto e filtrar o array verificando o dependente
function oferecerSeguro(obj){
    const propsClientes = Object.keys(obj);
    if(propsClientes.includes("dependentes")){ // includes é um método de array do Javascript que verifica se no array que está trabalhando 
        // se existe um dado, no caso, uma propriedade chamada dependentes. Esse método includes retorna true ou false
        console.log(`Oferta de seguro de vida para ${obj.nome}`);
    }
}

// correspondente do Object.keys
console.log(Object.values(cliente)) // para pegar os valores de um objeto
console.log(Object.entries(cliente)) // traz um array com vários arrays dentro dele e cada um sendo um conjunto de chaves e valores só que
// agora em outra estrutura. Estrutura de array, o índice 0 identifica a chave e o índice 1 indica o valor, conforme abaixo:
// ÍNDICE 0       1    
//   [ 'nome', 'André' ],
//   [ 'idade', 36 ],
//   [ 'cpf', '12543652266' ],
//   [ 'email', 'andre@email.com' ],
//   [ 'fones', [ '552112345678', '5521991234567' ] ],
//   [ 'dependentes', [ [Object], [Object] ] ],
//   [ 'saldo', 100 ],
//   [ 'depositar', [Function: depositar] ]
oferecerSeguro(cliente)