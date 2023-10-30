import { Pagamento } from "../types/matfin-types";

export function Price(valor: number, taxa: number, parcelas: number): Pagamento[] {
    let pagamentos: Pagamento[] = [];
    const pmt = valor * taxa * Math.pow(1 + taxa, parcelas) / (Math.pow(1 + taxa, parcelas) - 1);
    let saldo = valor;
    for (let i = 1; i <= parcelas; i++) {
        const juros = saldo * taxa;
        const amortizacao = pmt - juros;
        saldo -= amortizacao;
        pagamentos.push({
            numero: i,
            pmt: pmt,
            juros: juros,
            amortizacao: amortizacao,
            saldo: saldo
        });
    }
    return pagamentos;
}

export function Sac(valor: number, taxa: number, parcelas: number): Pagamento[] {
    const amortizacao = valor / parcelas;
    let saldo = valor;
    let pagamentos: Pagamento[] = [];

    for (let i = 1; i <= parcelas; i++) {
        const juros = saldo * taxa;
        const pmt = amortizacao + juros;
        saldo -= amortizacao;
        pagamentos.push({
            numero: i,
            pmt: pmt,
            juros: juros,
            amortizacao: amortizacao,
            saldo: saldo
        });
    }
    return pagamentos;
}