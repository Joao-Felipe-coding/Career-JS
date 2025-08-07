//factory

function criaPessoa(nome, sobrenome) {
  return {
    nome,
    sobrenome,
    get nomeCompleto() {
      return `${this.nome} ${this.sobrenome}`;
    }
  };
}
const p1 = criaPessoa('João', 'Felipe');
console.log(p1.nomeCompleto);

//constructor

function Pessoa(nome, sobrenome) {
  this.nome = nome;
  this.sobrenome = sobrenome;

//trava meu objeto, não podendo ser mais alterado à partir desta linha
  Object.freeze(this);
}

const p2 = new Pessoa('João', 'Felipe');
console.log(p2);