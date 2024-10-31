//Retorne a soma do dobro dos números pares
//-> filtrar pares
//-> dobrar os valores
//-> Reduzir (somar tudo)

const numeros = [1, 2, 3, 4, 5, 10, 20, 30, 40, 50];
const pares = numeros.filter(valor => valor % 2 === 0);
const dobro = pares.map(valor => valor * 2);
const soma = dobro.reduce((acumulador, valor) => {
  acumulador += valor;
  return acumulador;
});
//console.log(`Soma do dobro dos numeros pares: ${soma}`);

//outra forma de fazer:

const resultado = numeros
.filter(valor => valor%2===0)
.map(valor => valor * 2)
.reduce((acumulador, valor) => acumulador + valor);
console.log(`O Resultado é: ${resultado}`);