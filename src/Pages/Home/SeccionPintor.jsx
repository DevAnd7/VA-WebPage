import { Link } from "react-router-dom";
import CardGaleria from "../../Components/CardGaleria";


const data = [
    {
        id: 1,
        titulo: "Obra Artística",
        img: "/virgilioarrieta/ParejaBailando.webp",
        texto: "La obra pictórica del artista explora distintos lenguajes visuales a través de cuadros que combinan técnica, intuición y experimentación. Cada pieza es un espacio de investigación estética donde el color, la forma y la materia dialogan, dando lugar a composiciones que oscilan entre lo conceptual y lo emocional.",
        ruta: "/Arte#ObraArtistica"
    },

    {
        id: 2,
        titulo: "Murales e Intervenciones",
        img: "/virgilioarrieta/MuralUcla.webp",
        texto: "Más allá del lienzo, su trabajo se expande hacia el espacio con esculturas murales e intervenciones que integran arte y arquitectura. Estas obras transforman superficies en experiencias visuales, aportando volumen, textura y carácter a los entornos donde se insertan.",
        ruta: "/Arte#MuraleseIntervenciones"
    },

    {
        id: 3,
        titulo: "Diseño Actual",
        img: "/virgilioarrieta/CamisetaObra.webp",
        texto: "Su universo creativo también se traslada al ámbito del diseño aplicado, dando forma a piezas accesibles como camisetas, tazas, bolsos o ediciones gráficas. Estos objetos permiten llevar el arte al día a día, manteniendo la identidad visual del artista en formatos cercanos y funcionales.",
        ruta: "/Arte#DiseñoActual"
    }
]


function SeccionPintor() {
    return (
        <div id="pintor">

            <div className="row g-3">
                {data.map((item) => (
                    <div className="col-lg-4 col-md-6">
                        <CardGaleria key={item.id} titulo={item.titulo} img={item.img} texto={item.texto} ruta={item.ruta} />
                    </div>
                ))}

            </div>

        </div>
    );
}

export default SeccionPintor;






