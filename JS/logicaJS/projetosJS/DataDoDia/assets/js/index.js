const currentDate = document.querySelector('.container h1');
const date = new Date();
currentDate.innerHTML = date.toLocaleDateString('pt-BR', {dateStyle: 'full'});