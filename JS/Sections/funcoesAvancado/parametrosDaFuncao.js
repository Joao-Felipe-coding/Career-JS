//arguments: suporta todos os argumentos enviados à function.
function soma1(a, b, c) {
  let total = 0;
  for (let argumento of arguments) {
    total += argumento;
  }
  console.log(`Soma: ${total} \nOutros valores solicitados: ${a}, ${b}, ${c}`);
}
soma1(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11);

//assumindo valores à espaços não preenchidos
function soma2(a, b = 2, c = 3) {
  console.log(a + b + c);
}
soma2(1,6);
