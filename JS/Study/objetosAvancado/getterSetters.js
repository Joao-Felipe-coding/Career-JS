//defineProperty Getter e Setters
function Produto(nome, preco, estoque) {
  this.nome = nome;
  this.preco = preco;
  let estoquePrivado = estoque;
  Object.defineProperty(this, 'estoque', {
    enumerable: true,  
    consfigurable: false,
    get: function(){
      return estoquePrivado;
    },
    set: function(valor){
      if(typeof valor !== 'number'){
        throw new TypeError('NaN');
      }
      estoquePrivado = valor;
    }
  });
}
const p1 = new Produto('Camisa', 20, 3);
p1.estoque = 500;
console.log(p1.estoque);
