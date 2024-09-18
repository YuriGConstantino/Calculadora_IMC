import { useState } from "react"
import { Table } from "../Table"

export const Form = () => {

    const [altura, setAltura] = useState('')
    const [peso, setPeso] = useState('')
    const [imc, setImc] = useState(null)

    const calculaImc = (peso, altura) => {
        if (peso <= 0 || altura <= 0) return 'Valores invalidos'
        const imc = peso / (altura * altura)

        return imc.toFixed(2)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const imc = calculaImc(parseFloat(peso), parseFloat(altura))
        setImc(imc)
    }

    return (
        <>
            <form onSubmit={handleSubmit} className="py-2">
                <div className="container d-flex justify-content-around align-items-center">
                    <div>
                        <h2>Altura (Metros)</h2>
                        <input className="form-control" type="number" value={altura} id="altura" step={0.01} onChange={(e) => setAltura(e.target.value)} />
                    </div>
                    <div>
                        <h2>Peso (Kg)</h2>
                        <input className="form-control" type="number" value={peso} id="peso" step={0.01} onChange={(e) => setPeso(e.target.value)} />
                    </div>

                    <button type="submit" className="btn btn-outline-primary mx-2">Calcule</button>

                </div>
            </form>

            {imc !== null && (
                <Table resuldado={imc} />
            )}

        </>
    )
}