//Declaração de função (function hoisting)
falaOi();
function falaOi() {
  console.log('Oi');
}

//Objetos de primeira classe (First-Class Objects)
//function Expression
const SouUmDado = function () {
  console.log('Sou um dado');
};

function ExecutaFuncao(funcao) {
  console.log('Vou executar a função abaixo:')
  funcao();
}
ExecutaFuncao(SouUmDado);

//Arrow Function
const funcaoArrow = () => {
  console.log('Sou uma arrow function');
};
funcaoArrow();

const obj = {
  falar() {
    console.log('Estou falando...')
  }
};
obj.falar();
