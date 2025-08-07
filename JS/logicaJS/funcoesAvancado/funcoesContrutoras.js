// diferente das funções fábrica, as funções construtoras ela criam um objeto dentro da function automaticamente, é feito de uma forma diferente e mais útil, caso você pretenda criar vários objetos com os mesmos dados, exemplo de vários objetos para pessoas diferentes.

function Pessoa(nome, sobrenome) {
  this.nome = nome;
  this.sobrenome = sobrenome;
  console.log(`${this.nome} ${sobrenome}`);

  this.metodo = function () {
    console.log(this.nome + ': sou um método'); 
  };
}

const p1 = new Pessoa('João Felipe', 'Morais de Oliveira');
const p2 = new Pessoa('Nicoli', 'Batista');
p1.metodo();
p2.metodo();