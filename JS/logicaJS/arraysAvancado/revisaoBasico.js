//Utilizar o construtor para criar um array.
//*const nomes = new Array('João', 'Felipe', 'Nicoli');*
//É menos usado mas também funciona



//Valor por referência
//               0         1         2        
const nomes = ['João', 'Felipe', 'Nicoli'];
const novoN = nomes;
novoN.pop(); //todo valor tirado de uma var que carrega o valor de outra, irá alterar o valor nas duas.
console.log(nomes);
console.log(novoN);


const sobrenomes = ['Morais', 'Oliveira', 'Batista'];
const novoS = [...sobrenomes];//clona os dados da var escolhida, utilizando os três pontinhos.
novoS.pop(); //apagará o dado do final do array somente de novoS.
//push() = adiciona ao final do array.
//lembrando também que existe o shift() = apaga o primeiro dado do array.
//unshift() = adiciona ao inicio do array.
console.log(sobrenomes);
console.log(novoS);
console.log(novoS.length);//length (mostra a qunatidade de dados dentro do array) é um atributo, não um método, por isso não usa parenteses.

//se eu desejar fatiar os dados de um array
const novoArray = nomes.slice(0,-1);
console.log(novoArray);//sobrará somente João.

const nomeCompleto = 'João Felipe Morais'; 

const arrayNome = nomeCompleto.split(' '); //vamos separar essa string em um array usando o split().
console.log(arrayNome);

const voltarString = arrayNome.join(' '); //vamos voltar ela à uma string usando o join().
console.log(voltarString);