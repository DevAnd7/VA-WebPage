import {BotonesVerMas} from "./Botones";

const CardGaleria = ({titulo, texto, img, ruta}) => {
    return (
        <div className="card p-1 h-100">
            <img src={img} className="card-img-top" alt={`imagen ${titulo}`} />
            <div className="card-body">
                <h5 className="card-title">{titulo}</h5>
                <p className="card-text">
                    {texto}
                </p>
                <BotonesVerMas href={ruta} />
            </div>
        </div>
    )
}

export default CardGaleria;