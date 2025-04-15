// pages/Reg.tsx
export function Reg() {
    return (
        <section className="regP">
            <p>Nova tabela</p>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Descrição</th>
                        <th>Data</th>
                        <th>Hora</th>
                        <th>Valor(R$)</th>
                        <th>Tipo</th>
                        <th>Ações</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>Compra de material de escritório</td>
                        <td>08/12/2024</td>
                        <td>14:00</td>
                        <td>200,00</td>
                        <td>Pago</td>
                        <td><button>Editar</button> |  <button>Deletar</button> </td>
                    </tr>
                </tbody>

            </table>
        </section>
    );
}