//Números menores que 10, utilizando o filtro de array:
const numeros = [1, 2, 3, 4, 5, 10, 20, 30, 40, 50];
const numerosFiltrados = numeros.filter(valor => valor < 10);
console.log(numerosFiltrados);


//Retornar as pessoas que tem o nome com 5 letras ou mais
//Retornar as pessoas com mais de 50 anos
//Retorne as pessoas cujo o nome termina com a
const pessoas = [
  { nome: 'João', idade: 19 },
  { nome: 'Marcia', idade: 57 },
  { nome: 'Fábio', idade: 35 },
  { nome: 'Fabiana', idade: 39 },
  { nome: 'Vitor', idade: 20 },
  { nome: 'Cláudia', idade: 56 },
];
const pessoasComNomeGrande = pessoas.filter(obj => obj.nome.length >= 5);
console.log(pessoasComNomeGrande);
const pessoasComMaisDe50Anos = pessoas.filter(obj => obj.idade >= 50);
console.log(pessoasComMaisDe50Anos);
const pessoasQueTerminamComA = pessoas.filter(obj => obj.nome.endsWith('a'));
console.log(pessoasQueTerminamComA);