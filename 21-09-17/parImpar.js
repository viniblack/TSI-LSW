let game = {
  soma: 0,
  pontosHumano: 0,
  pontosMaquina: 0,

  caulculaTotal: function () {
    let total = humano.valor + maquina.valor;
    document.getElementById('total').innerText = total;
  },
  soma: function () {
    humano.escolhaHumano();
    maquina.dedoMaquina();
    humano.dedoHumano();
    this.caulculaTotal();
    if ((maquina.valor + humano.valor) % 2 == 0) {
      if (humano.escolhaDoHumano == "Par") {
        document.getElementById('ganhador').innerText = 'Humano Ganhou';
        document.getElementById('jogador1').innerText = '(' + this.pontosHumano++ + ')';
      } else {
        document.getElementById('ganhador').innerText = 'Humano Perdeu'
        document.getElementById('jogador2').innerText = '(' + this.pontosMaquina++ + ')';

      }
    } else {
      if (humano.escolhaDoHumano == "Impar") {
        document.getElementById('ganhador').innerText = 'Humano Ganhou'
        document.getElementById('jogador1').innerText = '(' + this.pontosHumano++ + ')';

      } else {
        document.getElementById('ganhador').innerText = 'Humano Perdeu'
        document.getElementById('jogador2').innerText = '(' + this.pontosMaquina++ + ')';

      }
    }
  },

}

let maquina = {
  valor: 0,
  dedoMaquina: function () {
    let numMaquina = this.valor = Math.floor(Math.random() * 6);
    document.getElementById('pontos2').innerText = numMaquina;
  },


}

let humano = {
  valor: 0,
  escolhaDoHumano: '',
  pontosHumano: document.getElementById('pontos1'),
  dedoHumano: function () {
    let numHumano = this.valor = Math.floor(Math.random() * 6);
    document.getElementById('pontos1').innerText = numHumano;

  },
  escolhaHumano: function () {
    let select = document.getElementById('escolha');
    let valor = document.getElementById('escolha').options[select.selectedIndex].value;
    this.escolhaDoHumano = valor;
  },
}
