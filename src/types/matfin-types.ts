export type Pagamento = {
    pmt: number;
    amortizacao: number;
    juros: number;
    saldo: number;
    numero: number;
}

export type Emprestimo = {
    valor: number;
    taxa: number;
    parcelas: number;
}