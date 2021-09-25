
 // Exercicio IMC


let usuario = {
    nome: "Gustavo",
    altura : 1.85,
    peso : 75,
    imc : function(){
        return this.peso / (this.altura * this.altura);
    },
    checkCovid : function () {
        return this.imc() >= 30 ? 'Tem risco' : 'Sem risco';
    }
};

console.log(usuario.imc());
console.log(usuario.checkCovid());

console.clear();

// Estrutura de repetições

/**
 * For
 */
for(let i = 0; i < 10; i++){
    console.log(i);
}

console.clear();
/**
 * While
 */
let i=0;
while(i < 5){
    console.log(i);
    i++;
}

/**
 * For com Arrya
 */

let nomes = ['Gustavo','Aluno 01','Aluno 02', 'Aluno 03'];
for(let i=0; i<nomes.length; i++){
    if(nomes [i] === "Gustavo") continue;
    console.log(nomes[i]);
}

// Exercicio basket

console.clear();

let lakers = {
    nome: 'lakers',
    pontos: [100, 110, 110, 100],
    media: function(pontos){
        let soma = 0;
        for (i = 0; i <this.pontos.length; i++) {
            soma += this.pontos[i] / this.pontos.length
        }

        return soma;
    }
}

let golden = {
    nome: 'golden',
    pontos: [97, 105, 110, 99, 100],
    media: function(pontos){
        let soma = 0;
        for (i = 0; i <this.pontos.length; i++) {
            soma += this.pontos[i] / this.pontos.length
        }

        return soma;
    }
}

let cleveland = {
    nome: 'cleveland',
    pontos: [102, 104, 109, 97, 104],
    media: function(pontos){
        let soma = 0;
        for (i = 0; i <this.pontos.length; i++) {
            soma += this.pontos[i] / this.pontos.length
        }

        return soma;
    }
}

let NBA = {
    times: [lakers ,golden, cleveland],
    resultadoVencedor: function(){

        let vencedor = this.times[0];
        for(let i =1; i< this.times.length; i++){
            if(vencedor.media() > this.times [i].media()) continue;
            vencedor = this.times[i];
        }
        return vencedor;
    }
} 

console.log(NBA.resultadoVencedor());
console.log("media Lakers = "+ lakers.media());
console.log("media Golden = " + golden.media());
console.log("media Cleveland = "+ cleveland.media());
