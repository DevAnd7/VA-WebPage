import { Link } from "react-router-dom";
import CardGaleria from "../../Components/CardGaleria";
import { BotonesVerMas } from "../../Components/Botones";


const data = [
    {
        id: 1,
        titulo: "Pintura",
        img: "/public/VA taller.webp",
        texto: ""
    },

    {
        id: 2,
        titulo: "Murales",
        img: "/public/VA taller.webp",
        texto: ""
    },

    {
        id: 3,
        titulo: "Su Obra",
        img: "/public/VA taller.webp",
        texto: ""
    }
]


function SeccionPintor() {
    return (
        <div className="seccion p-2" id="pintor">
            <Link to="/obra" className="nav-link">
                <h2>Arte</h2>
            </Link>
            <div className="d-flex align-items-center justify-content-between my-2">
                <strong className="d-flex gap-2"><i className="bi bi-chat-text"></i>
                    Su obra es un reflejo de su pasión por el arte y su deseo de conectar con el mundo.
                </strong>

                <BotonesVerMas href={"/Arte"} label="Ver más"/>
            </div>

            <div>
                <div className="row g-3">
                    {data.map((item) => (
                        <div className="col-lg-4 col-md-6">
                            <CardGaleria key={item.id} titulo={item.titulo} img={item.img} texto={item.texto}/>
                        </div>
                    ))}

                </div>
            </div>

        </div>
    );
}

export default SeccionPintor;
