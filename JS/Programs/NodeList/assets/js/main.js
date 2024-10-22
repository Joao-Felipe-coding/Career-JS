const styleBody = getComputedStyle(document.body);
const backgroundColorBody = styleBody.backgroundColor;
console.log(backgroundColorBody);
// Buscou a cor de fundo do body

const paragraph = document.querySelector('.paragraphs');
const paragraphs = document.querySelectorAll('p');

for (let p of paragraphs) {
  p.style.backgroundColor = backgroundColorBody;
  //Depois foi colocado atrás de todos os parágrafos
  p.style.color = '#b9b9b9';
  //Aqui foi utilizado a estilização através do Javascript. Mais exemplos abaixo
  p.style.fontSize = '20px';
} 
 
const title = document.querySelector('.title');
const titles = document.querySelectorAll('h1');

for (let h1 of titles) {
  h1.style.color = '#f1f9'
  h1.style.backgroundColor = backgroundColorBody;
}
