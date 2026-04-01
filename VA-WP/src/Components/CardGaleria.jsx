import { Link } from "react-router-dom";

const CardGaleria = ({titulo, texto, img, ruta}) => {
    return (
        <Link to={ruta} className="card nav-link p-1 h-100">
            <img src={img} className="card-img-top" alt={`imagen ${titulo}`} />
            <div className="card-body">
                <h4 className="card-title">{titulo}</h4>
                <p className="card-text">
                    {texto}
                </p>
            </div>
        </Link>
    )
}

export default CardGaleria;