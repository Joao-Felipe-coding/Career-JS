const date = new Date();
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
  
  let dayWeekText;
  switch (dayWeek) {
    case 0:
      dayWeekText = 'domingo'
      break;
    case 1:
      dayWeekText = 'segunda-feira'
      break;
    case 2:
      dayWeekText = 'terça-feira'
      break;
    case 3:
      dayWeekText = 'quarta-feira'
      break;
    case 4:
      dayWeekText = 'quinta-feira'
      break;
    case 5:
      dayWeekText = 'sexta-feira'
      break;
    case 6:
      dayWeekText = 'sábado'
      break;

    default:
      dayWeekText = '';
      break;
  };

  let nameMonth;
  switch (month) {
    case 1:
      nameMonth = 'janeiro';
      break;
    case 2:
      nameMonth = 'fevereiro';
      break;
    case 3:
      nameMonth = 'março';
      break;
    case 4:
      nameMonth = 'abril';
      break;
    case 5:
      nameMonth = 'maio';
      break;
    case 6:
      nameMonth = 'junho';
      break;
    case 7:
      nameMonth = 'julho';
      break;
    case 8:
      nameMonth = 'agosto';
      break;
    case 9:
      nameMonth = 'setembro';
      break;
    case 10:
      nameMonth = 'outubro';
      break;
    case 11:
      nameMonth = 'novembro';
      break;
    case 12:
      nameMonth = 'dezembro';
      break;
    default:
      nameMonth = ``;
      break;
  }

  return `${dayWeekText}, ${day} de ${nameMonth} de ${year} às 
  ${hour}:${minute}:${seconds}`;
}
const currentDate = document.querySelector('.container h1');
currentDate.innerHTML = dateFormat(date);

// Atualiza o relógio a cada segundo
function updateClock() {
  const now = new Date();
  const formattedTime = dateFormat(now);
  currentDate.textContent = formattedTime;
}
setInterval(updateClock, 1000);
updateClock();