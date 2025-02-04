"use strict";
let saldo = 4000;
const elementoSaldo = document.querySelector(".saldo-valor .valor");
const elementoDate = document.querySelector(".block-saldo time");
if (elementoSaldo != null) {
    elementoSaldo.textContent = formatarMoeda(saldo);
}
if (elementoDate != null) {
    const dataAcesso = new Date();
    elementoDate.textContent = formatarData(dataAcesso, formatoData.DIA_SEMANA_DIA_MES_ANO);
}
