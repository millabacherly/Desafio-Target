const dados = require('./dados.json');

function avaliacaoFaturamento() {
    let totalFaturamento = 0;

    for(i = 0; i < dados.length; i++) {
        totalFaturamento += dados[i].valorFaturado;
    }   
    
    for (i = 0; i < dados.length; i++) {
        let valorPercentual = dados[i].valorFaturado*100/totalFaturamento;
        console.log(`A porcentagem de faturamento do ${dados[i].estado} é de ${valorPercentual.toFixed(2)}%`);
    }   
}

avaliacaoFaturamento();