let game = {
  soma: 0,
  
  soma: function () {
    humano.escolhaHumano();
    maquina.dedoMaquina();
    humano.dedoHumano();


    if ((maquina.valor + humano.valor) % 2 == 0) {
      if (humano.escolhaDoHumano == "Par") {
        console.log('Humano ganhou')
      } else {
        console.log('Humano Perdeu')
      }
    } else {
      if (humano.escolhaDoHumano == "Impar") {
        console.log('Humano ganhou')
      } else {
        console.log('Humano Perdeu')
      }
    }
  },

}

let maquina = {
  valor: 0,
  dedoMaquina: function () {
    this.valor = Math.floor(Math.random() * 6);
  },
  pontosMaquina: document.getElementById('pontos2').innerText = '2',
}

let humano = {
  valor: 0,
  pontos: 0, 
  escolhaDoHumano: '',
  pontosHumano: document.getElementById('pontos1'),
  dedoHumano: function () {
    this.valor = Math.floor(Math.random() * 6);
  },
  escolhaHumano: function () {
    let select = document.getElementById('escolha');
    let valor = document.getElementById('escolha').options[select.selectedIndex].value;
    this.escolhaDoHumano = valor;
    console.log(`Humano escolheu ${valor}`);
  },
}

console.log(maquina.pontosMaquina);