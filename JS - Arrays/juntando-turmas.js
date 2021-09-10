const salaDePython = ['Melissa', 'Helena','Rodrigo']

const salaDeJavascript = ['Ju', 'Leo', 'Raquel']

const salasUnificadas = salaDePython.concat(salaDeJavascript)

console.log(salasUnificadas) // Importante ressaltar que o concat não mexe na lista original. Tem que salvar o valor em outro local.