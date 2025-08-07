//Factory Functions(Função Fábrica)
function criaPessoa(nome, sobrenome, peso, altura) {
  return {
    nome,
    sobrenome,

    //Getter
    get nomeCompleto() {
      return `${this.nome}${this.sobrenome}`;
    },

    //Setter
    set nomeCompleto(valor) {
      valor = valor.split(' ');
      this.nome = valor.shift();
      this.sobrenome = valor.join(' ');
    },
    fala(assunto = 'falando sobre NADA') {
      return `${this.nome + ' ' + this.sobrenome} está ${assunto}.`;
    },
    peso: peso,
    altura: altura,
    imc() {
      const indice = this.peso / (this.altura ** 2);
      return indice.toFixed(2);
    }
  };
}

const p1 = criaPessoa('João Felipe', 'Morais de Oliveira', 54, 1.80);
console.log(p1.fala('estudando'));
console.log('imc:', p1.imc());
const p2 = criaPessoa('Nicoli', 'da Silva Batista', 68, 1.60);
console.log(p2.fala('sendo sua maior motivação'));
console.log('imc:', p2.imc());

p1.nomeCompleto = "Juaunes Felipes";
console.log(p1.nome);
console.log(p1.sobrenome);
console.log(p1.fala());