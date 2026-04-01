import { Link } from "react-router-dom";
import CardGaleria from "../../Components/CardGaleria";
import { BotonesVerMas } from "../../Components/Botones";


const data = [
    {
        id: 1,
        titulo: "Obra Artística",
        img: "/public/VA taller.webp",
        texto: "La obra pictórica del artista explora distintos lenguajes visuales a través de cuadros que combinan técnica, intuición y experimentación. Cada pieza es un espacio de investigación estética donde el color, la forma y la materia dialogan, dando lugar a composiciones que oscilan entre lo conceptual y lo emocional.",
        ruta: ""
    },

    {
        id: 2,
        titulo: "Murales e Intervenciones",
        img: "/public/VA taller.webp",
        texto: "Más allá del lienzo, su trabajo se expande hacia el espacio con esculturas murales e intervenciones que integran arte y arquitectura. Estas obras transforman superficies en experiencias visuales, aportando volumen, textura y carácter a los entornos donde se insertan.",
        ruta: ""
    },

    {
        id: 3,
        titulo: "Diseño Actual",
        img: "/public/VA taller.webp",
        texto: "Su universo creativo también se traslada al ámbito del diseño aplicado, dando forma a piezas accesibles como camisetas, tazas, bolsos o ediciones gráficas. Estos objetos permiten llevar el arte al día a día, manteniendo la identidad visual del artista en formatos cercanos y funcionales.",
        ruta: "/Arte#diseñoActual"
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
                            <CardGaleria key={item.id} titulo={item.titulo} img={item.img} texto={item.texto} ruta={item.ruta}/>
                        </div>
                    ))}

                </div>
            </div>

        </div>
    );
}

export default SeccionPintor;
