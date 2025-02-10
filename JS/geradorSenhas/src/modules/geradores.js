const rand = (min, max) => Math.floor(Math.random() * (max - min) + min);

const geraMaiuscula = () => String.fromCharCode(rand(65, 91));
const geraMinuscula = () => String.fromCharCode(rand(97, 122));
const geraNumero = () => String.fromCharCode(rand(48, 58));
const simbolos = '!@#$%¨&*()_+-{}[]`´^~?/:;.,';
const geraSimbolo = () => simbolos[rand(0, simbolos.length)];

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

export default function geraSenha(qtd, maiusculas, minusculas, numeros, simbolos) {
  const senhaArray = [];
  qtd = Number(qtd);

  for (let i = 0; i < qtd; i++) {
    maiusculas && senhaArray.push(geraMaiuscula());
    minusculas && senhaArray.push(geraMinuscula());
    numeros && senhaArray.push(geraNumero());
    simbolos && senhaArray.push(geraSimbolo());
  }

  const senhaEmbaralhada = shuffle(senhaArray).join('').slice(0, qtd);
  return senhaEmbaralhada;
}