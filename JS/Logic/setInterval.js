function mostraHora(){
  let data = new Date();

  return data.toLocaleTimeString('pt-BR', {
    hour12:false
  });
}

// determina um tempo de execução de uma função
setInterval(function (){
  console.log(mostraHora());
}, 1000);