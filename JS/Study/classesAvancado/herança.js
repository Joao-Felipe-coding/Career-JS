class Dispositivo {
  constructor(nome) {
    this.nome = nome;
    this.ligado = false;
  }

  on() {
    if(this.ligado) {
      console.log('já está ligado');
      return;
    }

    this.ligado = true;
    console.log('ligado com sucesso');
  }

  off() {
    if(!this.ligado) {
      console.log('já está desligado');
      return;
    }

    this.ligado = false;
    console.log('desligado com sucesso');
  }
}

class Smartphone extends Dispositivo { //chama a classe que quer herdar
  constructor (nome, cor) {
    super(nome); //obrigatório para usar uma herança
    this.cor = cor;
  }
}
const s1 = new Smartphone('iPhone', 'preto');
console.log(s1.nome);
s1.on();

class Notebook extends Dispositivo {
  constructor (nome) {
    super(nome);
  }
}
const n1 = new Notebook('Galaxy Book');
console.log(n1.nome);
n1.on();