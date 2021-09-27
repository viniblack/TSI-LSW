let game = {
  caulculaTotal: function () {
    let total = humano.valor + maquina.valor;
    document.getElementById('total').innerText = total;
  },
  soma: function () {
    humano.escolhaHumano();
    humano.dedoHumano();
    maquina.dedoMaquina();
    this.caulculaTotal();
    
    if ((maquina.valor + humano.valor) % 2 == 0) {
      if (humano.escolhaDoHumano == "Par") {
        document.getElementById('ganhador').innerText = 'Humano Ganhou';
        document.getElementById('jogador1').innerText = '(' + humano.pontosHumano++ + ')';
      } else {
        document.getElementById('ganhador').innerText = 'Humano Perdeu'
        document.getElementById('jogador2').innerText = '(' + maquina.pontosMaquina++ + ')';

      }
    } else {
      if (humano.escolhaDoHumano == "Impar") {
        document.getElementById('ganhador').innerText = 'Humano Ganhou'
        document.getElementById('jogador1').innerText = '(' + humano.pontosHumano++ + ')';

      } else {
        document.getElementById('ganhador').innerText = 'Humano Perdeu'
        document.getElementById('jogador2').innerText = '(' + maquina.pontosMaquina++ + ')';

      }
    }
  },
}

let maquina = {
  valor: 0,
  pontosMaquina: 0,
  dedoMaquina: function () {
    let numMaquina = this.valor = Math.floor(Math.random() * 6);
    document.getElementById('pontos2').innerText = numMaquina;
  },
}

let humano = {
  valor: 0,
  escolhaDoHumano: '',
  pontosHumano: 0,
  dedoHumano: function () {
    let numHumano = this.valor = Math.floor(Math.random() * 6);
    document.getElementById('pontos1').innerText = numHumano;
  },
  escolhaHumano: function () {
    let select = document.getElementById('escolha');
    let selecionado = document.getElementById('escolha').options[select.selectedIndex].value;
    this.escolhaDoHumano = selecionado;
  },
}

// Dúvida pq esse console retorna null não o valor do campo??
console.log(document.getElementById('pontos2'));