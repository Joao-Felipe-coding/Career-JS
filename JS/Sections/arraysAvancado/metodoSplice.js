//              -3        -2        -1
//               0         1         2
const nomes = ['João', 'Felipe', 'Nicoli'];

const removidos = nomes.splice(0, 2, 'Vinicius', 'Abraão');
console.log(nomes, removidos);

//caso eu queira adicionar ao final do array
nomes.splice(nomes.length, 0, 'Dario')
console.log(nomes);

//caso eu queira adicionar ao final do array
nomes.splice(0, 0, 'Rosana')
console.log(nomes);
