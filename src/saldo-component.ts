let saldo: number = 4000;

const elementoSaldo = document.querySelector(".saldo-valor .valor") as HTMLElement;
const elementoDate = document.querySelector(".block-saldo time") as HTMLElement;

if (elementoSaldo != null) {
    elementoSaldo.textContent = saldo.toLocaleString("pt-br", {currency: "BRL", style: "currency"});
}

if (elementoDate != null) {
    const dataAcesso: Date = new Date();
    elementoDate.textContent = dataAcesso.toLocaleDateString("pt-br", {
        weekday: "long",
        day: "2-digit",
        month: "2-digit",
        year: "numeric"
    });
}