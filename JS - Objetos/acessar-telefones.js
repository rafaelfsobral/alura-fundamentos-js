const cliente = {
    nome:"André",
    idade:36,
    cpf:"12543652266",
    email:"andre@email.com",
    fones:["552112345678", "5521991234567"]
}

// cliente tem mais de um telefone, colocando esse array(lista) de telefones
cliente.fones.forEach(fone => console.log(fone)) // consultando a chave fones do objeto cliente