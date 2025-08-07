const dados = {
  nome: 'João Felipe',
  sobrenome: 'Morais de Oliveira',
  idade: 19,
  paso: 54,
  altura: 1.80,
  endereco: {
    rua: 'Laurentino Neto',
    numero: 31
  }
}

const { 
  endereco: {rua='', numero},
   endereco 
  } = dados;
console.log(`Rua ${rua}, ${numero}`, endereco);