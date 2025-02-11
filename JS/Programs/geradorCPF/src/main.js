import GeraCPF from './modules/GeraCPF';

import './assets/css/style.css';

(function() {
  const gera = new GeraCPF();
  const geraNovo = document.querySelector('.gerar-novo');
  const cpfGerado = document.querySelector('.cpf-gerado');

  geraNovo.addEventListener('click', () => cpfGerado.innerHTML = gera.geraNovoCPF());
})();
