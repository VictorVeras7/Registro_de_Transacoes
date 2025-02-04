"use strict";
let saldo = 4000;
const elementoSaldo = document.querySelector(".saldo-valor .valor");
const elementoDate = document.querySelector(".block-saldo time");
if (elementoSaldo != null) {
    elementoSaldo.textContent = saldo.toLocaleString("pt-br", { currency: "BRL", style: "currency" });
}
if (elementoDate != null) {
    const dataAcesso = new Date();
    elementoDate.textContent = dataAcesso.toLocaleDateString("pt-br", {
        weekday: "long",
        day: "2-digit",
        month: "2-digit",
        year: "numeric"
    });
}
