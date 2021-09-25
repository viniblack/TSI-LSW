let dado = {
    valor: 0,
    jogado: function () {
        // gera uma valor de 1 a 6
        this.valor = Math.floor(Math.random() * 6) + 1;
        // Atualiza na tela
        this.imprimir();
    },

    imprimir: function () {
        document.getElementById("dado-valor").innerText = this.valor;
    }
}

let jogador1 = {
    id: 1,
    pontosFixos: 0,
    pontosRodada: 0,
    zerarPontos: function () {
        this.pontosRodada = 0;
        this.imprimir();
    },


    alteraPontosdaRodada: function (valor) {
        this.pontosRodada += valor
        this.imprimir();

    },

    parar: function () {
        this.pontosFixos += this.pontosRodada;
        this.zerarPontos();
    },

    imprimir: function () {
        document.getElementById("jogador-1-pontos").innerText = this.pontosFixos;
        document.getElementById("jogador-1-rodada").innerText = this.pontosRodada;
    }
}

let jogador2 = {
    id: 2,
    pontosFixos: 0,
    pontosRodada: 0,
    zerarPontos: function () {
        this.pontosRodada = 0;
        this.imprimir();
    },

    alteraPontosdaRodada: function (valor) {
        this.pontosRodada += valor
        this.imprimir();

    },

    parar: function () {
        this.pontosFixos += this.pontosRodada;
        this.zerarPontos();
    },

    imprimir: function () {
        document.getElementById("jogador-2-pontos").innerText = this.pontosFixos;
        document.getElementById("jogador-2-rodada").innerText = this.pontosRodada;
    },

}




let pig = {
    jogadores: [jogador1, jogador2],
    ijogadorAtual: 0,
    quemEohjogadorAtual: function () {
        return this.jogadores[this.ijogadorAtual];
    },
    trocaJogadorAtual: function () {
        if (this.ijogadorAtual === 0)
            this.ijogadorAtual = 1;
        else
            this.ijogadorAtual = 0
    },
    jogaoDado: function () {
        //joga o dado
        dado.jogado();
        //pega o valor do dado e compara 
        //Se o valor for = 1 (passa para o próximo)
        if (dado.valor == 1) {
            //zerar o valor do jogador atual
            this.quemEohjogadorAtual().zerarPontos();
            //passar para o próximo
            this.trocaJogadorAtual();

        }

        // se o valor for != 1 (adicionar o valor nos pontos da rodada)
        else {
            this.quemEohjogadorAtual().alteraPontosdaRodada(dado.valor);

        }
    },
    parar: function () {
        //copia os pontos da rodada para o fixo
        this.quemEohjogadorAtual().parar();
        //passa para o próximo jogador
        this.trocaJogadorAtual();
    }
}