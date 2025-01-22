function Produto(nome, preco, estoque) {

  Object.defineProperties(this, {
    nome: {
      enumerable: true, //mostra a chave
      value: nome, // valor da chave
      writable: false,  //pode ou nao alterar valor
      consfigurable: false //reconfigurar a property ou apagar
    },
    preco: {
      enumerable: true, 
      value: preco, 
      writable: false,  
      consfigurable: false 
    }
  });

  Object.defineProperty(this, 'estoque', {
    enumerable: true, 
    value: estoque, 
    writable: false,  
    consfigurable: false 
  });
}

const p1 = new Produto('Camisa', 20, 3);
p1.estoque = 12;
console.log(p1);
console.log(Object.keys(p1));

for (let chave in p1) {
  console.log(chave);
}