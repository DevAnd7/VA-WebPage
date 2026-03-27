import {BotonesVerMas} from "../Componentes/Botones"

const CardGaleria = () => {
    return (
        <div className="card p-1 h-100">
            <img src="/VA taller.webp" className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">Su Obra</h5>
                <p className="card-text">
                    Descripción breve de la obra.
                </p>
                <BotonesVerMas href={"#"} />
            </div>
        </div>
    )
}

export default CardGaleria;