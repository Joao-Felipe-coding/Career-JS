function random(min, max) {
  min *= 1000;
  max *= 1000;
  return Math.floor(Math.random() * (max - min) + min);
}

function enviar(msg, tempo) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (typeof msg !== 'string') return reject(false);
      resolve(msg.toUpperCase() + '-  Passei na Promise');
    }, tempo);
  });
}

async function executa() {
  try {
    const fase1 = await enviar('Promise1', random(1, 3));
    console.log(fase1);
    const fase2 = await enviar(10, random(1, 3));
    console.log(fase2);
    const fase3 = await enviar('Promise3', random(1, 3));
    console.log(fase3);
  } catch(e) {
    console.log(e);
  }
}

executa();


// const promises = [
//   enviar('Promise1', random(1, 3)),
//   enviar('Promise2', random(1, 3)),
//   enviar('Promise3', random(1, 3)),
//   enviar(1000, random(1, 3))
// ];

// Promise.race(promises)
//   .then(valor => {
//     console.log(valor);
//   })
//   .catch(e => {
//     console.log(e);
//   });




// function baixaPagina() {
//   emCache = true;

//   if(emCache){
//     return Promise.resolve('Pagina em cache');
//   } else {
//     return enviar('Baixei a pagina', 3000);
//   }
// }

// baixaPagina()
// .then(dadosPagina => {
//   console.log(dadosPagina)
// })
// .catch(e => console.log(e));




// enviar('envio 1', random(1, 3))
//   .then(resposta => {
//     console.log(resposta);
//     return enviar('envio 2', random(1, 3));
//   })
//   .then(resposta => {
//     console.log(resposta);
//     return enviar('envio 3', random(1, 3));
//   })
//   .then(resposta => {
//     console.log(resposta);
//     return enviar(2222, random(1, 3));
//   })
//   .then(resposta => {
//     console.log(resposta);
//     return enviar('envio 5', random(1, 3));
//   })
//   .then(resposta => {
//     console.log(resposta)
//   })
//   .catch(e => {
//     console.log('ERRO:', e);
//   });

// console.log('Executa primeiro');
