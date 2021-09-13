class Cliente {
    constructor(nome, email, cpf, saldo) {
        // Para poder fazer atibuições das informações pelo construtor
        // Estou definindo os atributos que vão ser recebidos no momento de construir o objeto.
        // Atributos são características
        this.nome = nome
        this.email = email
        this.cpf = cpf
        this.saldo = saldo
    }

    // Métodos são comportamentos
    depositar(valor) {
        this.saldo += saldo
    }

    exibirSaldo() {
        console.log(this.saldo)
    }
}

// Vamos criar instância do objeto Cliente na memória. Passando as informações do construtor da classe.
const andre = new Cliente("Andre", "andre@email.com", "12312312312", 100)

andre.exibirSaldo()
console.log(andre)

// A sintaxe de classe é um pouco diferente do que a gente faz normalmente no Javascript, por exemplo, o nome de classe começa com letra 
// maiiúscula, isso é padrão da linguagem.
// Construtor recebe como parâmetro o que a gente precisa passar para construir um objeto.
// Método é uma função que executa um contexto de um objeto. A diferença é que com classes não precisa escrever a palavra function, 
// só declara a função abrindo e fechando chaves e passando parênteses vazios ou com valores, e o Javascript já entende que é um método, 
// uma função no contexto dos objetos que serão criados.