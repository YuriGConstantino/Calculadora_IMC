export const Table = ({ resuldado }) => {
    return (
        <div className ="container" >
            <table className="table table-bordered text-center">
                <thead>
                    <tr>
                        <th colSpan="2" className="fs-3 table-primary">Resultado: Seu IMC é de {resuldado}</th>
                    </tr>
                    <tr className="table-info fs-4">
                        <th className="col">IMC (kg/m2)</th>
                        <th className="col">Classificação</th>
                    </tr>
                </thead>
                <tbody className="fs-5">
                    <tr className="table-danger">
                        <td>Menor que 16,9</td>
                        <td>Muito abaixo do peso</td>
                    </tr>
                    <tr className="table-warning">
                        <td>17 a 18,4</td>
                        <td>Abaixo do peso</td>
                    </tr>
                    <tr className="table-success">
                        <td>18,5 a 24,9</td>
                        <td>Peso normal</td>
                    </tr>
                    <tr className="table-warning">
                        <td>25 a 29,9</td>
                        <td>Acima do peso</td>
                    </tr>
                    <tr className="table-danger">
                        <td>30 a 34,9</td>
                        <td>Obesidade grau I</td>
                    </tr>
                    <tr className="table-danger">
                        <td>35 a 40</td>
                        <td>Obesidade grau II</td>
                    </tr>
                    <tr className="table-danger">
                        <td>Maior que 40</td>
                        <td>Obesidade grau III</td>
                    </tr>
                </tbody>
            </table>
            </div >
    )
}
