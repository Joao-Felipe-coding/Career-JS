const numeros = [5, 50, 80, 10, 23, 45];
const numerosEmDobro = numeros.map(valor => valor * 2);
console.log(numerosEmDobro);


//Para cada elemento:
//Retorne apenas uma string com o nome da pessoa
//Remova apenas a chave "nome" do objeto
//adicione uma chave id em cada objeto
const pessoas = [
  { nome: 'João', idade: 19 },
  { nome: 'Marcia', idade: 57 },
  { nome: 'Fábio', idade: 35 },
  { nome: 'Fabiana', idade: 39 },
  { nome: 'Vitor', idade: 20 },
  { nome: 'Cláudia', idade: 56 },
];
const nomes = pessoas.map(obj => obj.nome);
const idades = pessoas.map(obj => ({ idade: obj.idade }));
const comIDs = pessoas.map((obj, indice) => {
  const newObj = {...obj}
  newObj.id = (indice + 1) * 1132;
  return newObj;
});
console.log(nomes);
console.log(idades);
console.log(comIDs);
console.log(pessoas);
