const dayNames = ['domingo', 'segunda-feira', 'terça-feira', 'quarta-feira', 'quinta-feira', 'sexta-feira', 'sábado'];
const monthNames = ['janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho', 'julho', 'agosto', 'setembro', 'outubro', 'novembro', 'dezembro'];

function dateFormat(date) {
  const dayWeek = date.getDay();
  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();

  function zeroLeft(num) {
    return num >= 10 ? num : `0${num}`;
  }
  const hour = zeroLeft(date.getHours());
  const minute = zeroLeft(date.getMinutes());
  const seconds = zeroLeft(date.getSeconds());
  const milliSeconds = zeroLeft(date.getMilliseconds());

  const dayWeekText = dayNames[dayWeek];
  const nameMonth = monthNames[month - 1];

  return `${dayWeekText}, ${day} de ${nameMonth} de ${year} às ${hour}:${minute}:${seconds}`;
}
const currentDateElement = document.querySelector('.container h1');

// Atualiza o relógio a cada segundo
function updateClock() {
  const now = new Date();
  const formattedTime = dateFormat(now);
  currentDateElement.textContent = formattedTime;
}
setInterval(updateClock, 1000);
updateClock();