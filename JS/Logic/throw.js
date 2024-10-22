function add(x, y) {
  if (typeof x !== 'number' || typeof y !== 'number') {
    throw new Error('os dois valores precisam ser números'); //lança um erro
  }
  return `a soma dos valores é: ${x + y}`;
}

//é exibido o Try normalmente caso não ocorra erros.

try {                                                 //se algo dentro deste bloco der errado
  console.log(add(1, 2));
  console.log(add(1, 'arroz'));
} catch (error) {                                     //este bloco será executado
  console.log(error); //captura e mostra o erro
}