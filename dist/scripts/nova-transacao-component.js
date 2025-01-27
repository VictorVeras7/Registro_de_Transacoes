"use strict";
const elementoForm = document.querySelector(".block-nova-transacao form");
elementoForm.addEventListener("submit", function (event) {
    event.preventDefault();
    if (!elementoForm.checkValidity()) {
        alert("Por favor, preencha todos os campos necesários!");
        return alert;
    }
    const inputTipoTransacao = elementoForm.querySelector("#tipoTransacao");
    const inputValor = elementoForm.querySelector("#valor");
    const inputData = elementoForm.querySelector("#data");
    let tipoTransacao = inputTipoTransacao.value;
    let valor = inputValor.valueAsNumber;
    let data = new Date(inputData.value);
    if (tipoTransacao == TipoTransacao.DEPOSITO) {
        saldo += valor;
    }
    else if (tipoTransacao == TipoTransacao.TRANSFER || tipoTransacao == TipoTransacao.BOLETO) {
        saldo -= valor;
    }
    else {
        alert("Operação não autorizada!");
        return;
    }
    elementoSaldo.textContent = saldo.toString();
    const novaTransacao = {
        tipoTransacao: tipoTransacao,
        valor: valor,
        data: data
    };
    console.log(novaTransacao);
    elementoForm.reset();
});
