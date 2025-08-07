// 705.484.450-52 ~ 070.987.720-03
class ValidaCPF {
  constructor (cpfEnviado) {
    Object.defineProperty(this, 'cpfLimpo', {
      writable: false,
      enumerable: false,
      configurable: false,
      value: cpfEnviado.replace(/\D+/g, '')
    });
  }

  sequencia() {
    return this.cpfLimpo.charAt(0).repeat(this.cpfLimpo.length) === this.cpfLimpo;
  }

  geraCPF() {
    const cpfParcial = this.cpfLimpo.slice(0, -2);
    const digito1 = ValidaCPF.geraDigito(cpfParcial);
    const digito2 = ValidaCPF.geraDigito(cpfParcial + digito1);
    this.novoCPF = cpfParcial + digito1 + digito2;
  }

  static geraDigito(cpfParcial) {
    let total = 0;
    let reverso = cpfParcial.length + 1;

    for(let StringNumerica  of cpfParcial) {
      total += reverso * Number(StringNumerica);
      reverso--;
    }

    const digito = 11 - (total % 11);
    return digito <= 9 ?  String(digito): '0';
    console.log(total);
  }

  valida() {
    if(! this.cpfLimpo) return false;
    if(typeof this.cpfLimpo !== 'string') return false
    if(this.cpfLimpo.length !== 11) return false;
    if(this.sequencia()) return false;  
    this.geraCPF();
    return this.novoCPF === this.cpfLimpo;
  }
}

// let validacpf = new ValidaCPF('070.987.720-03');
// validacpf = new ValidaCPF('999.999.999-99')
// if(validacpf.valida()) {
//   console.log('CPF Válido');
// } else {
//   console.log('CPF inválido');
// }