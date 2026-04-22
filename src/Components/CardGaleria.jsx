import { BotonesVerMas } from "./Botones";

const CardGaleria = ({ titulo, texto, img, ruta }) => {
    return (
        <div className="card p-3">
            <img src={img} className="card-img-top" alt={`imagen ${titulo}`} />
            <div className="card-body">
                <h4 className="card-title">{titulo}</h4>

                {texto ? <p className="m-0">{texto}</p> : null}

                {ruta ?
                    <div className="d-flex justify-content-end mt-3">
                        <BotonesVerMas href={ruta} />
                    </div>
                : null}

            </div>
        </div>
    )
}

export default CardGaleria;