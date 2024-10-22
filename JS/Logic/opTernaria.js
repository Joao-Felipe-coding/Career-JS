//Ao invés de: 

// const pontuacaoUsuario = 1000;

// if (pontuacaoUsuario>=100) {
//   console.log('Usuário VIP');
// } else {
//   console.log('Usuário Normal');
// }

//Fazer com Op ternária:

const pontuacaoUsuario = 1000;

const nivelUsuario = pontuacaoUsuario >= 100 ? 'Usuário VIP' : 'Usuário Normal';
console.log(nivelUsuario);

//também sendo usado:

const corUsuario = null;
const corPadrao = corUsuario || 'Preta';


