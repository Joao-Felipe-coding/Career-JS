//IIFE -> immediately invoked function expression

(function (idade, peso, altura) {
  const sobrenome = 'Morais de Oliveira';
  function CriaNome(nome) {
    return nome + ' ' + sobrenome;
  }
  function falaNome() {
    console.log(CriaNome('João Felipe'));
  }
  falaNome();
  console.log('idade:',idade,' peso:', peso,' altura:', altura);
})(19, 54, 1.80);
