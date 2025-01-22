function retornaFuncao(nome) {
  return function () {
    return nome;
  };
}

const funcao1 = retornaFuncao('João');
const funcao2 = retornaFuncao('Felipe');
console.dir(funcao1);
console.dir(funcao2);

console.log(funcao1(), funcao2());