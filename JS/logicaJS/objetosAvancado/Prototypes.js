function Pessoa (nome, sobrenome) {
  this.nome = nome;
  this.sobrenome = nome;
}

Pessoa.prototype.nomeCompleto = function() {
  return this.nome + ' ' + this.sobrenome;
} 

const pessoa1 = new Pessoa('João', 'Felipe');
const pessoa2 = new Pessoa('Nicoli', 'Batista');

console.dir(pessoa1.nomeCompleto);