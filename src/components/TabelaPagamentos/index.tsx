import { Pagamentos } from "../../types/matfin-types";

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
                            <th scope="row">{parcela.numero}</th>
                            <th >{parcela.pmt.toFixed(2)}</th>
                            <td>{parcela.juros.toFixed(2)}</td>
                            <td>{parcela.amortizacao.toFixed(2)}</td>
                            <td>{parcela.saldo.toFixed(2)}</td>
                        </tr>
                    );
                })}
            </tbody>
        </table>
    );
}