//é uma repetição de si mesma, apenas se atente a colocar uma condição na qual ela irá se repetir.
function recursiva(max) {
  if (max >= 1000) return;
  max++;
  console.log(max);
  recursiva(max);
}

recursiva(0);