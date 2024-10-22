const hora = 24;

if (hora>=0 && hora<=11) {
  console.log(`Bom Dia, agora são ${hora} da manhã.`);
} else if(hora>=12 && hora<=17){
  console.log(`Boa Tarde, agora são ${hora} da tarde.`);
}else if (hora>=18 && hora<=23){
 console.log(`Boa Noite, agora são ${hora} da noite.`);
}else {
  console.log(`${hora} não é um horário, seu animal!`);
}