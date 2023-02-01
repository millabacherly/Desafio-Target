const dados = require('./dados.json');

function analiseFaturamento(dados) {
    let menorValor = dados[0].valor;
    let maiorValor = dados[0].valor;
    let faturamentoTotal = 0;
    let mediaFaturamento = 0;
    let faturamentoSuperior = 0;

    for (let i = 0; i < dados.length; i++) {
        if (dados[i].valor < menorValor && dados[i].valor != 0)
        menorValor = dados[i].valor;

        if (dados[i].valor > maiorValor && dados[i].valor != 0)
        maiorValor = dados[i].valor;

        if (dados[i].valor > faturamentoTotal) {
            faturamentoTotal += dados[i].valor;
        }
    }

    mediaFaturamento = faturamentoTotal / dados.length;

    for (let i = 0; i < dados.length; i++) {
        if(dados[i].valor > mediaFaturamento && dados[i].valor != 0) {
            faturamentoSuperior++;
        }
    }

    console.log(`O menor valor de faturamento é de R$ ${menorValor.toFixed(2)}`)
    console.log(`O maior valor de faturamento é de R$ ${maiorValor.toFixed(2)}`);
    console.log(`A média de faturamento no período é de R$ ${mediaFaturamento.toFixed(2)}`);
    console.log(`O faturamento diário foi superior a média mensal em ${faturamentoSuperior} dias`);
}

analiseFaturamento(dados);