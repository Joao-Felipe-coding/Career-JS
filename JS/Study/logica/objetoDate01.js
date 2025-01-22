function zeroAEsquerda (num) {
  return num >=10 ? num : `0${num}`;
}

function dataFormatada(data) {
  const dia = zeroAEsquerda(data.getDate());
  const mes =  zeroAEsquerda(data.getMonth() + 1);
  const ano = zeroAEsquerda(data.getFullYear());
  const hora = zeroAEsquerda(data.getHours());
  const minutos = zeroAEsquerda(data.getMinutes());
  const segundos = zeroAEsquerda(data.getSeconds());
  const milisegundos = zeroAEsquerda(data.getMilliseconds());
  const diaSemana = zeroAEsquerda(data.getDay());

  return `${dia}/${mes}/${ano} ${hora}:${minutos}:${segundos}`;
}

const data = new Date();
const dataBrasil = dataFormatada(data);
console.log(dataBrasil);
