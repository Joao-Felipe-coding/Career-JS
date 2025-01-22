
Tendo como formas principais de uso: Factory, Constructor e Class.


**//factory**

>`function criaPessoa(nome, sobrenome) {`
  `return {`
    `nome,`
    `sobrenome,`
    `get nomeCompleto() {`
      `return ${this.nome} ${this.sobrenome};`
    `}`
  `};`
`}`
`const p1 = criaPessoa('João', 'Felipe');`
`console.log(p1.nomeCompleto);`


**//constructor**

>`function Pessoa(nome, sobrenome) {`
  `this.nome = nome;`
  `this.sobrenome = sobrenome;`
  ==*//trava meu objeto, não podendo ser mais alterado à partir desta linha*==
  ==`Object.freeze(this);`==
`}`
`const p2 = new Pessoa('João', 'Felipe');`
`console.log(p2);`


Podemos também definir propriedades para um objeto:

>`function Produto(nome, preco, estoque) {`
  `Object.defineProperties(this, {`
    `nome: {`
      `enumerable: true, //mostra a chave`
      `value: nome, // valor da chave`
      `writable: false,  //pode ou nao alterar valor`
      `consfigurable: false //reconfigurar a property ou apagar`
    `},`
    `preco: {`
      `enumerable: true,`
      `value: preco,`
      `writable: false,`  
      `consfigurable: false`
    `}`
  `});`
>
  `Object.defineProperty(this, 'estoque', {`
    `enumerable: true,`
    `value: estoque,`
    `writable: false,`  
    `consfigurable: false`
  `});`
`}`

Agora entramos na parte dos **Getter e Setters**, que nada mais é do que uma maneira de proteger a propriedade.

O Getter é para obter o valor
Já o Setter é para configurar esse valor