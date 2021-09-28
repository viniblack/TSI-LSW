let jokenpo = {
  jogadas: [],
  vencedor: 0,
  ganhador: '',
  jogar: function () {
    jogador1.escolha();
    jogador2.sorteiaMaquina();
    this.regraJogo();
    this.imprimeTela();
  },
  imprimeTela: function () {
    let escreve = document.getElementById(`jogador-${this.vencedor}`);
    let tabela = document.getElementById('tabelaResoltado');
    this.atualiza();
    if (this.vencedor == 1) {
      escreve.innerText = jogador1.pontos++;
    } else {
      escreve.innerText = jogador2.pontos++;
    };

    // tabela.innerHTML = `
    //   <tr>
    //     <td>${jogador1.escolhaHumano}</td>
    //     <td>${jogador2.escolhaMaquina}</td>
    //     <td>${this.ganhador}</td>
    //   </tr>
    // `;
  },
  atualiza: function () {
    let table = document.getElementById('tabelaResoltado').getElementsByTagName('tbody')[0];
    table.innerHTML = '';
    for (let i = 1; i < 10; i++) {
      console.log(this.jogadas);

      let linha = `
        <tr>
          <td>${this.jogadas[i].jogador1.escolhaHumano}</td>
          <td>${this.jogadas[i].jogador2.escolhaMaquina}</td>
          <td>${this.jogadas[i].this.ganhador}</td>
        </tr>
      `;
      console.log(this.jogadas);

      table.innerHTML += linha;
      console.log(this.jogadas);

    }
    console.log(this.jogadas);
  },
  regraJogo: function () {
    if (jogador1.escolhaHumano != 'Selecione sua jogada') {
      if (jogador1.escolhaHumano == jogador2.escolhaMaquina) {
        this.ganhador = 'Empate';
      } else if (jogador1.escolhaHumano == 'pedra' && jogador2.escolhaMaquina == 'tesoura') {
        this.ganhador = 'Jogador 1';
        this.vencedor = 1;
      } else if (jogador1.escolhaHumano == 'papel' && jogador2.escolhaMaquina == 'pedra') {
        this.ganhador = 'Jogador 1';
        this.vencedor = 1;
      } else if (jogador1.escolhaHumano == 'tesoura' && jogador2.escolhaMaquina == 'papel') {
        this.ganhador = 'Jogador 1';
        this.vencedor = 1;
      } else {
        this.ganhador = 'Jogador 2';
        this.vencedor = 2;
      }
    } else {
      return alert('Escolha um atributo');
    }
  }

}

let jogador1 = {
  escolhaHumano: '',
  pontos: 0,
  escolha: function () {
    let select = document.getElementById('escolhaHumano');
    let selecionado = document.getElementById('escolhaHumano').options[select.selectedIndex].value;
    this.escolhaHumano = selecionado;
  }
}

let jogador2 = {
  escolhaMaquina: '',
  pontos: 0,
  sorteiaMaquina: function () {
    let escolha = Math.floor(Math.random() * 3) + 1;
    if (escolha == 1) {
      this.escolhaMaquina = 'pedra';
    } else if (escolha == 2) {
      this.escolhaMaquina = 'papel';
    }
    else {
      this.escolhaMaquina = 'tesoura';
    }
  }
}