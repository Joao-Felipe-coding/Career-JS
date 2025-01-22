// const nome = 'João';
// let i = 0;

// while(i < nome.length){
//   console.log(nome[i]);
//   i++;
// }

function random(min, max) {
  const r = Math.random() * (max - min) + min;
  return Math.floor(r);
}

const min = 1, max = 50;
let rand = 10;

while (rand !== 10) {
  rand = random(min, max);
  console.log(rand);
}

//ou

do {
  rand = random(min, max);
  console.log(rand);
}while (rand !== 10);
