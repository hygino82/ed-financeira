import { useState } from "react";
import { TabelaPagamentos } from "../../components/TabelaPagamentos";
import { Emprestimo, Pagamento } from "../../types/matfin-types";
import { Price } from "../../utils/matfin-funcoes";

export function Formulario() {
    const [valor, setValor] = useState<number>(0);
    const [taxa, setTaxa] = useState<number>(0);
    const [parcelas, setParcelas] = useState<number>(0);
    const [pagamentos, setPagamentos] = useState<Pagamento[]>([]);

    function handleValor(e: any) {
        e.preventDefault();
        setValor(Number(e.target.value));
    }

    function handleTaxa(e: any) {
        e.preventDefault();
        setTaxa(Number(e.target.value));
    }

    function handleParcelas(e: any) {
        e.preventDefault();
        setParcelas(Number(e.target.value));
    }

    function handleSubmit(e: any) {
        e.preventDefault();
        const emprestimo: Emprestimo = {
            parcelas: parcelas,
            valor: valor,
            taxa: taxa / 100.0
        }
        console.log(emprestimo);
        const pagamentos = Price(emprestimo);
        setPagamentos(pagamentos);
    }

    return (<>
        <form>
            <div className="container">
                <label htmlFor="valor">Valor</label>
                <input type="number" id='valor' placeholder="Valor financiado" value={valor} onChange={handleValor} />
                <br />
                <label htmlFor="taxa">Taxa</label>
                <input type="number" id='taxa' placeholder="Taxa de juros" value={taxa} onChange={handleTaxa} />
                <br />
                <label htmlFor="parcelas">Parcelas</label>
                <input type="number" id='parcelas' placeholder="Número de parcelas" value={parcelas} onChange={handleParcelas} />
                <br />
                <input className="btn btn-primary" type="submit" value="Calcular" onClick={handleSubmit} />
                <button className="btn btn-warning">Limpar</button>
            </div>
        </form>
        <TabelaPagamentos pagamentos={pagamentos} />
    </>);
}