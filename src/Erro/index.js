import { Link } from "react-router-dom"

export default function Erro() {
    return(
        <div>
            Página não encontrada. Voltar ao <Link to="/">inicio</Link>.
        </div>
    )
}