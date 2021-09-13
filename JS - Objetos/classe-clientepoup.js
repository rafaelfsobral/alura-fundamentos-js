class Cliente {
    constructor(nome, email, cpf, saldo) {
        this.nome = nome
        this.email = email
        this.cpf = cpf
        this.saldo = saldo
    }

    depositar(valor) {
        this.saldo += valor
    }

    exibirSaldo() {
        console.log(this.saldo)
    }
}

// Vou usar herança para permitir herdar atributos e métodos da classe. Reaproveitamento de código.
class ClientePoupanca extends Cliente{
    constructor(nome, email, cpf, saldo,saldoPoupanca){
        super(nome, email, cpf, saldo) // Estou indo no construtor da classe Cliente, puxando as informações necessárias da classe CLiente
        // para a classe ClientePoupanca
        this.saldoPoupanca = saldoPoupanca
    }

    depositarPoupanca(valor){
        this.saldoPoupanca += valor // Esse ClientePoupanca na propriedade saldoPoupanca vai receber o valor valor somando com saldoPoupanca
    }

}

// passando o valor 100 para saldo herdado de Cliente e 200 para propriedade saldoPoupanca
const andre = new ClientePoupanca("Andre", "andre@email.com", "12312312312", 100,200)

console.log(andre)

andre.depositar(50)
andre.depositarPoupanca(50)

console.log(andre)