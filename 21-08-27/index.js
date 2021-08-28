// 1)

// function calculaGorjeta(valor) {
//   return gorjeta = [valor * .10, valor * .16, valor * .18]
// }

// let valor = 124
// console.log(`Valor da conta R$${valor} ${calculaGorjeta(valor)}`);

// 2)

let pessoa = {
  nome: 'Vini',
  peso: 78,
  altura: 1.77,
  imc: function imc() {
    return this.peso / this.altura ** 2;
  },
  perigo: function () {
    return this.imc() > 30 ? 'Perigo' : 'Ta de boa';
  }
}

console.log(pessoa.perigo());