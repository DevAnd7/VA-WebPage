import { BotonesVerMas } from "./Botones";

const CardSeccion = ({ titulo, img, texto, caption, href, extra }) => {
    return (
        <div className="seccion">
            <div className="row py-2 m-1">

                <div className="col-lg-4">
                    <img src={img} className="img-fluid" />
                    <p><small>{caption}</small></p>
                </div>

                <div className="col-lg-8">
                    <h4>{titulo}</h4>

                    <p>{texto}</p>

                    {extra ? <div>{extra} </div> : null} {/* Si no hay extra, no se muestra el div */}

                    {href ?
                        <div className="d-flex justify-content-end mt-3">
                            <BotonesVerMas href={href} />
                        </div>
                        : null} {/* Si no hay href, no se muestra el botón */}
                </div>

            </div>
        </div>
    );
};

export default CardSeccion;

