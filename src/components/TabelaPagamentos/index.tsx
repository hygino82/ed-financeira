import { Pagamento } from "../../types/matfin-types";

type Pagamentos = {
    pagamentos: Pagamento[];
}

export function TabelaPagamentos({ pagamentos }: Pagamentos) {
    return (
        <table className="table table-striped">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Parcela</th>
                    <th scope="col">Juros</th>
                    <th scope="col">Amortização</th>
                    <th scope="col">Saldo</th>
                </tr>
            </thead>
            <tbody>
                {pagamentos.map(parcela => {
                    return (
                        <tr key={parcela.numero}>
                            <th scope="row">{parcela.pmt}</th>
                            <td>{parcela.juros}</td>
                            <td>{parcela.amortizacao}</td>
                            <td>{parcela.saldo}</td>
                        </tr>
                    );
                })}
            </tbody>
        </table>
    );
}