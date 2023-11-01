import { useState } from "react";
import { TabelaPagamentos } from "../../components/TabelaPagamentos";
import { Emprestimo, Pagamento } from "../../types/matfin-types";
import { Price, Sac } from "../../utils/matfin-funcoes";

export function Formulario() {
    const [valor, setValor] = useState<number>(0);
    const [taxa, setTaxa] = useState<number>(0);
    const [parcelas, setParcelas] = useState<number>(0);
    const [pagamentos, setPagamentos] = useState<Pagamento[]>([]);
    const [escolha, setEscolha] = useState<string>('1');

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

        if (escolha == '1') {

            const pagamentos = Sac(emprestimo);
            setPagamentos(pagamentos);
        }
        else {
            const pagamentos = Price(emprestimo);
            setPagamentos(pagamentos);
        }
    }

    function handleEscolha(e: any) {
        e.preventDefault();
        setEscolha(e.target.value);
    }

    function handleLimpar(e: any) {
        e.preventDefault();
        setParcelas(0);
        setValor(0);
        setTaxa(0);
        setPagamentos([]);
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

                <select className="form-select form-select-lg mb-3" aria-label=".form-select-lg example" value={escolha} onChange={handleEscolha}>
                    <option value="1" selected>SAC</option>
                    <option value="2">PRICE</option>
                </select>

                <input className="btn btn-primary" type="submit" value="Calcular" onClick={handleSubmit} />
                <button className="btn btn-warning" onClick={handleLimpar}>Limpar</button>
            </div>
        </form>
        <TabelaPagamentos pagamentos={pagamentos} />
    </>);
}