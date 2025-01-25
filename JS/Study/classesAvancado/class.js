class Pessoa {
  constructor(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
  }

  falar() {
    console.log(`${this.nome} está falando.`);
  }
}

const p1 = new Pessoa('João', 'Felipe');
console.log(p1.nome);

//modo antigo aprendidoE

function Pessoa2(nome, sobrenome) {
  this.nome = nome;
  this.sobrenome = sobrenome;
}

Pessoa2.prototype.falar = function () {
  console.log(`${this.nome} está falando.`);  
}

const p2 = new Pessoa2('Nicoli', 'Batista');
console.log(p2.nome);