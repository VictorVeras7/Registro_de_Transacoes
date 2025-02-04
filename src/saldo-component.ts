let saldo: number = 4000;

const elementoSaldo = document.querySelector(".saldo-valor .valor") as HTMLElement;
const elementoDate = document.querySelector(".block-saldo time") as HTMLElement;

if (elementoSaldo != null) {
    elementoSaldo.textContent = formatarMoeda(saldo);
}

if (elementoDate != null) {
    const dataAcesso: Date = new Date();
    elementoDate.textContent = formatarData(dataAcesso, formatoData.DIA_SEMANA_DIA_MES_ANO);
}