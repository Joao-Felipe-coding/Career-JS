// const numeros = [100, 200, 300, 400, 500, 600, 700, 800, 900];
// const [um, ,tres, ,cinco, , sete, ...resto] = numeros;
// console.log(um, tres, cinco, sete);  
// console.log(resto);  

//matrizes
//                  0      1      2
//                0 1 2  0 1 2  0 1 2
const numeros = [[1,2,3],[4,5,6],[7,8,9]];

//console.log(numeros[2][0]);
// const [,,[,oito]] = numeros;
// const[[,,tres]] = numeros;
// console.log(`${oito},${tres}`);
const [linha1, linha2, linha3] = numeros;
console.log(linha3[2]);