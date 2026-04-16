import { BotonesVerMas } from "./Botones";

const CardSeccion = ({ titulo, img, texto, href }) => {
    return (
        <div className="seccion">
            <div className="row py-2 m-1">

                <div className="col-lg-4">
                    <img src={img} className="img-fluid" />
                </div>

                <div className="col-lg-8">
                    <h3>{titulo}</h3>

                    <p className="texto_space">{texto}</p>

                    <BotonesVerMas href={href}/>
                </div>

            </div>
        </div>
    );
};

export default CardSeccion;

