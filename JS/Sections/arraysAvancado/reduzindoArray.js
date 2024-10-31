const numeros = [1, 5, 6, 7, 8, 9, 10, 50, 60, 70, 80, 90, 100];

//Some todos os números (Reduce)
const soma = numeros.reduce((acumulador, valor, indice, array) => {
  acumulador += valor;
  return acumulador;
}, 0);
console.log(soma);

//Retorne um array com os pares (Filter)
const pares = numeros.reduce((acumulador, valor, indice, array) => {
  if (valor % 2 === 0) acumulador.push(valor);
  return acumulador;
}, []);
console.log(pares);

//Retorne um array com o dobro dos valores (Map)
const dobro = numeros.reduce((acumulador, valor, indice, array) =>{
  acumulador.push(valor * 2);
  return acumulador;
}, []);
console.log(dobro);

//retorne a pessoa mais velha
const pessoas = [
  { nome: 'João', idade: 19 },
  { nome: 'Marcia', idade: 57 },
  { nome: 'Fábio', idade: 35 },
  { nome: 'Fabiana', idade: 39 },
  { nome: 'Vitor', idade: 20 },
  { nome: 'Cláudia', idade: 56 },
];
const maisVelha = pessoas.reduce((acumulador,valor)=>{
  if(acumulador.idade > valor.idade) return acumulador; //irá manter seu valor(retornará no segundo laço com o mesmo valor anterior), somente se for o mais valor, comparado ao outro. 
  return valor;
});
console.log(maisVelha);
