function Cliente(nome, cpf, email, saldo){
    this.nome = nome
    this.cpf = cpf
    this.email = email
    this.saldo = saldo
    this.depositar = function(valor){
        this.saldo += valor
    }
}

// new é uma palavra reservada que indica que estamos criando um novo cliente, uma nova instância de Cliente criada a partir da função
// construtora passando entre parênteses as informações reais. 
const andre = new Cliente("André", "12632450922","andre@email.com",100)

console.log(andre)

// Copiar o código e colar no navegador
// andre.__proto__       e através disso, vemos no construtor de andré, o cliente. André foi um objeto construido a partir de um objeto 
// genérico Cliente

// andre.__proto__.__proto__      Entrei no objeto obj e está entrando em mais um nível. Ele trouxe um contrutor de objeto. A nossa função
// cliente usou o construtor objeto e a nossa instância André usou o contrutor cliente. Isso é chamado de cadeia de protótipo. vai 
// encadeando a partir do primeiro nível (nesse caso é objeto), cria o cliente genérico e a partir do cliente genérico, criou-se o outro 
// objeto que é o nosso cliente, que é André.

// Não utiliza essa propriedade __proto__ em código, só utilizamos no navegador nesse caso como exemplo para conseguirmos visualizar dentro 
// do protótipo no Javascript
// se fizermos console.log não traz propriedades não enumeráveis, por isso que fazemos através do navegador para trazer essas propriedades
// não enumeráveis