/*
  Operadores de comparação:

  > maior que
  >= maior ou igual a
  < menor que
  <= menor ou maior a
  === igualdade estrita (chega valor e tipo)
  !== diferente estrito (chega valor e tipo)
*/

const num1 = 10; //number
const num2 = '10'; //string

const comp1 = num1 === num2;
console.log(comp1);

const comp2 = num1 !== num2;
console.log(comp2);

const num3 = 1;
const num4 = 2;

const comp3 = num3 >= num4;
console.log(comp3);

const comp4 = num3 > num4;
console.log(comp4);
