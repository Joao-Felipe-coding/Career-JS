function random(min, max) {
  min *= 1000;
  max *= 1000;
  return Math.floor(Math.random() * (max - min) + min);
}

function enviar(msg, tempo) {
  return new Promise((resolve, reject) => {
    if (typeof msg !== 'string') reject(new Error('ERRO'));

    setTimeout(() => {
      resolve(msg);
    }, tempo);
  });
}

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
