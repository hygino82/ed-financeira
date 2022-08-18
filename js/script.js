function gerarValor() {

    let txtPv = window.document.getElementById("txtpv");
    let txtPmt = window.document.getElementById("txt-pmt");
    let txtParcelas = window.document.getElementById("txt-parcelas");

    let pv = Number(txtPv.value);
    let pmt = Number(txtPmt.value);
    let parcelas = Number(txtParcelas.value);
    let total = parcelas * pmt;
    let diferenca = total - pv;
    let resDiv = window.document.getElementById("res-emp");
    resDiv.innerHTML = `<h2>Valor total das parcelas R$ ${total.toFixed(2)}</h2> `;
    resDiv.innerHTML += `<h2>Diferença entre o que foi emprestado e o que foi pago R$ ${diferenca.toFixed(2)}</h2>`;
}

function gerarJuros() {

    let divJuros = document.getElementById("res-juros");
    divJuros.innerHTML = "<h3>Calculando o valor futuro</h3>";
    let pv = Number(window.document.getElementById("pv1").value);
    let n = Number(window.document.getElementById("tempo").value);
    let taxaPercentual = Number(window.document.getElementById("taxa").value);
    let i = taxaPercentual / 100.0;
    let i1Pot = (1 + i) ** n;
    let fv = pv * i1Pot;
    divJuros.innerHTML = `<h2>Valor futuro R$ ${fv.toFixed(2)}</h2> `;

}