/*
  Operadores lógicos:

  && AND
  || OR
  ! NOT
*/

const expressaoAnd = true && true && true && true;
const expressaOr = true || true || false || false;
const expressaoNot = ! false;

console.log(expressaoNot);
console.log(expressaOr);
console.log(expressaoAnd);

//exemplo

const usuario = 'João';
const senha = '123456';

const vaiLogar = usuario === 'João' && senha === '12345'; //se os dados forem diferentes: false; senão: true.
console.log(vaiLogar);
