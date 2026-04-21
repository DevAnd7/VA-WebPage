import Carrusel from "../Components/Carrusel";

const data = [
    {
        id: 1,
        img: "/virgilioarrieta/ParejaBicicleta.webp"
    },
    {
        id: 2,
        img: "/virgilioarrieta/ObraMujerSentada.webp"
    },
    {
        id: 3,
        img: "/virgilioarrieta/ObraRS.webp"
    }
]


const Arte = () => {
    return (
        <div className="d-flex flex-column gap-2">

            <img src="/virgilioarrieta/UltimaCena.webp" className="card-img-banner" alt="Obra Ultima Cena Musicos - Virgilio Arrieta" />

            <h2>Arte</h2>

            <p>Bienvenidos a la galería virtual de Virgilio Arrieta, un espacio dedicado a su obra plástica. Aquí podrás explorar una colección de sus cuadros y creaciones visuales, donde cada pieza refleja su visión única y su habilidad para transformar emociones y conceptos en arte.</p>

            <strong className="d-flex gap-2 p-2"><i className="bi bi-chat-text"></i>Te invitamos a sumergirte en esta experiencia visual y descubrir la profundidad de su trabajo artístico.</strong>


            <div className="row g-1">
                {data.map((item) => (
                    <div key={item.id} className="col-6 col-md-4 col-lg-3">
                        <img src={item.img} className="img-fluid img-thumbnail" />
                    </div>
                ))}
            </div>




            {/*MURALES*/}
            <div id="MuraleseIntervenciones">
                <h2 className="seccion">Murales e Intervenciones</h2>

                <div className="card mb-3">
                    <Carrusel
                    img1="/virgilioarrieta/MuralUcla.webp"
                    img2="/virgilioarrieta/MuralUcla.webp"
                    img3="/virgilioarrieta/MuralUcla.webp"
                    />

                    <div className="card-body">
                        <h4 className="card-title">"Ah mundo Barquisimeto"</h4>
                        <p>Técnica: Pigmento sobre gres - Medidas: 224m2 - Lugar: Rectorado de la UCLA Barquisimeto Edo. Lara-Venezuela</p>
                        <p>Año: 2003</p>
                    </div>
                </div>
            </div>


            <div id="DiseñoActual">
                <h2 className="seccion">Diseño Actual</h2>

            </div>

        </div>
    )
}

export default Arte;