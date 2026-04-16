import { BotonesVerMas } from "./Botones";

const CardSeccion = ({ titulo, img, texto, href }) => {
    return (
        <div className="seccion">
            <div className="row py-2 m-1">

                <div className="col-lg-4">
                    <img src={img} className="img-fluid" />
                </div>

                <div className="col-lg-8">
                    <h4>{titulo}</h4>

                    <p className="texto_space">{texto}</p>

                    {href ? <BotonesVerMas href={href} /> : null} {/* Si no hay href, no se muestra el botón */ }
                </div>

            </div>
        </div>
    );
};

export default CardSeccion;

