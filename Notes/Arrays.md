
### Forma básica:
`const nomes = ['João', 'Felipe', 'Nicoli'];`


> Utilizar o construtor para criar um array (É menos usado mas também funciona):
> `const nomes = new Array('João', 'Felipe', 'Nicoli');`

#Parâmetros:
`var.pop();` //apagará o ultimo dado do array.
`var.push();` //adiciona ao final do array.
`var.shift();` //apaga o primeiro dado do array.
`var.unshift();` //adiciona ao início do array.
`var.slice(posição,retirada);` //fatia os dados de um array.
`var.split(' ');` //separa uma string em array, seguindo a regra dada dentro das aspas.
`var.join(' ');` //coloca os dados do array, para virar uma string, seguindo a regra dada dentro das aspas.

#Métodos:
`var.length;` //mostra a quantidade de dados dentro do array.
`var.splice(índice, delete, el1, el2,);` 

>**índice:** você marca de qual índice deseja começar.
>**delete:** é onde você marca quantos elementos você quer apagar. 
>**el1, el2:** onde você adicionará elementos neste array.



### Concatenando arrays(juntar arrays)

o comando base de concatenação é `var.concat()`

mas é possível utilizar o:

`... *spread* -> também é usado para concatenação, para espalhar os valores de outra var em uma nova`

vindo da mesma utilidade:

`... *rest* -> se usado em parâmetros de função ou desestruturação. Você pretende pegar o resto e jogando em outro lugar`


`...` acaba sendo até mais fácil de utilizar, por ter essa função diferente dentro de arrays e objetos para concatenação(spread).

EX:
`const a1 = [1, 2, 3];`
`const a2 = [4, 5, 6];`
`const a3 = [...a1, ...a2, ...[7, 8, 9], 'João]`
`console.log(a3);`
> console:
> >[ 1, 2, 3, 4, 5, 6, 7, 8, 9, 'João' ]



### Filtrando o Array

`.Filter()`

Irá retornar um array, com a mesma quantidade de elementos, ou mais.

Vai filtrar com a condição desejada

BASTANTE UTILIZADO EM `.Filter()`:
`.toLoweCase()` //usado para diminuir todas as letras da string.
`.endsWith('')` //usado para encontrar e verificar se o caractere digitado dentro dele é encontrado ao final da string.



### Mapeando o Array

`.Map()`

Ele usa valores do array, para através de condições, adicionar novos elementos.

ao invés de utilizar elementos já existentes no array base, você manipulará os elementos existentes para criar novos valores, um exemplo, seria dobrar os valores de uma array base.



### Reduzindo o Array

`.Reduce()`

Sua principal função é reduzir os elementos de um array para um único valor.

Você pode usar o reduce no lugar de Filter e Map, mas não é tão eficaz.

o diferencial do reduce, é o acumulador, que é passado como primeiro parâmetro dentro da função, diferentemente de Filter e Map.


### Filter+Map+Reduce

é comum utilizar estes três juntos:

//Retorne a soma do dobro dos números pares
//-> filtrar pares
//-> dobrar os valores
//-> Reduzir (somar tudo)

`const numeros = [1, 2, 3, 4, 5, 10, 20, 30, 40, 50];`
`const resultado = numeros`
`.filter(valor => valor%2===0)`
`.map(valor => valor * 2)`
`.reduce((acumulador, valor) => acumulador + valor);`
`console.log(O Resultado é: ${resultado});`

### forEach

Uma forma de iterar sobre arrays.

