function Cliente(nome, cpf, email, saldo){
    this.nome = nome
    this.cpf = cpf
    this.email = email
    this.saldo = saldo
    this.depositar = function(valor){
        this.saldo += valor
    }
}

// Novo construtor que utiliza o construtor Cliente para criar o ClientePoupanca
function ClientePoupanca(nome,cpf,email,saldo,saldoPoup){
    // call --> Indo no construtor Cliente e chamando as propriedades e comportamentos de dentro dele para dentro de ClientePoupanca
    Cliente.call(this,nome,cpf,email, saldo) // this é esse objeto que estou criando
    this.saldoPoup = saldoPoup
}

const andre = new Cliente("André", "12632450922","andre@email.com",100)

const ju = new ClientePoupanca("Ju","12345678912","ju@email.com",100,200) //criou uma nova instância de ClientePoupanca com os dados passados
// E agora a diferença é que o nosso ClientePoupanca além das outras propriedades que o Cliente tem, tem também saldo poupança no saldo de 
// 200. 

console.log(ju)

// Mas tem uma coisa ainda que precisa alterar.
// O nosso método depositar do Cliente só deposita no modo normal. Vamos definir agora no protótipo para depositar no Cliente Poupança tbm
ClientePoupanca.prototype.depositarPoup = function(valor){
    this.saldoPoup += valor
}
// Adicionou ao protótipo do objeto ClientePoupanca um novo método depositarPoup a essa propriedade que é uma função.

ju.depositarPoup(30) // chamou a instância de ClientePoupanca que foi criada através do modelo, chamou o método que está associado a todas
// as instâncias criadas a partir do objeto ClientePoupanca e passou o método com o valor que espera receber para incrementar o valor 
// da propriedade saldoPoup que foi definido aqui quando foi criado o construtor ClientePoupanca. Então todos os clientes poupanca tem
// essa propriedade saldoPoup e é por isso que conseguimos acessar. 

console.log(ju.saldoPoup) // 230
console.log(andre.saldoPoup) // undefined, porque saldoPoup é uma propriedade que existe somente para instâncias para ClientePoupanca,
// não existe para instâncias de Cliente, apesar de ter chamado as propriedades de Cliente, não incluimos o saldoPoup.
