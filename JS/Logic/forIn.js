// const frutas = ['pera', 'uva', 'maçã'];
// for (const i in frutas) {
//   if (Object.prototype.hasOwnProperty.call(frutas, i)) {
//     const teste = frutas[i];
//     console.log(teste)
//   }
// }

const pessoa = {
  nome: 'João Felipe',
  sobrenome: 'Morais de Oliveira',
  idade: 19
}

//acessar nomes em objeto
// console.log(pessoa.nome);
//ou
// console.log(pessoa['nome']);

for (let i in pessoa) {
  if (Object.prototype.hasOwnProperty.call(pessoa, i)) {
    const teste = pessoa[i];
    console.log(`${i}: ${teste}`);
    //ou
    // console.log(i, pessoa[i]);
  }
}