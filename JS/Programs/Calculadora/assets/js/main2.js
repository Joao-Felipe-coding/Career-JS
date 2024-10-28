//version Constructor Functions
class CriaCalculadora {
  constructor() {
    this.display = document.querySelector('.display');

    this.inicia = function () {
      this.cliqueBotoes();
      this.pressionaEnter();
    };

    this.pressionaEnter = function () {
      this.display.addEventListener('keyup', (e) => {
        if (e.keyCode === 13) {
          this.realizaConta();
        }
      });
    };

    this.clearDisplay = function () {
      this.display.value = '';
    };

    this.deleteDisplay = function () {
      this.display.value = this.display.value.slice(0, -1);
    };

    this.realizaConta = function () {
      let conta = this.display.value;

      try {
        conta = eval(conta);

        if (!conta) {
          alert('Conta errada');
          return;
        }

        this.display.value = conta;
      } catch (e) {
        alert('Conta errada');
      }
    };

    this.cliqueBotoes = function () {
      document.addEventListener('click', (e) => {
        const el = e.target;

        if (el.classList.contains('btn-num')) {
          this.btnParaDisplay(el.innerText);
        }

        if (el.classList.contains('btn-clear')) {
          this.clearDisplay();
        }

        if (el.classList.contains('btn-delete')) {
          this.deleteDisplay();
        }

        if (el.classList.contains('btn-eq')) {
          this.realizaConta();
        }
      });
    };

    this.btnParaDisplay = function (valor) {
      this.display.value += valor;
    };
  }
}

const calculadora = new CriaCalculadora();
calculadora.inicia();