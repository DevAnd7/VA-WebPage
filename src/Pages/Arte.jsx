import CardGaleria from "../Components/CardGaleria";
import Carrusel from "../Components/Carrusel";


const Arte = () => {
    return (
        <div className="d-flex flex-column gap-2">

            <img src="/virgilioarrieta/UltimaCena.webp" className="card-img-banner" alt="Obra Ultima Cena Musicos - Virgilio Arrieta" />

            <h2>Arte</h2>

            <p>Bienvenidos a la galería virtual de Virgilio Arrieta, un espacio dedicado a su obra plástica. Aquí podrás explorar una colección de sus cuadros y creaciones visuales, donde cada pieza refleja su visión única y su habilidad para transformar emociones y conceptos en arte.</p>

            <strong className="d-flex gap-2 p-2"><i className="bi bi-chat-text"></i>Te invitamos a sumergirte en esta experiencia visual y descubrir la profundidad de su trabajo artístico.</strong>


            {/* OBRA PLASTICA */}
            <h2 id="ObraPlastica">Obra Plástica</h2>
            <div className="seccion">

                <Carrusel
                    id="ObraPlastica"
                    img1="/virgilioarrieta/"
                    img2="/virgilioarrieta/"
                    img3="/virgilioarrieta/"
                />

            </div>


            {/*MURALES*/}
            <div id="MuraleseIntervenciones">
                <h2>Murales e Intervenciones</h2>

                <div className="seccion">
                    {/* UCLA */}
                    <Carrusel
                        id="Murales"
                        img1="/virgilioarrieta/MuralUcla.webp"
                        img2="/virgilioarrieta/MuralUcla4.webp"
                        img3="/virgilioarrieta/MuralUcla2.webp"
                        img4="/virgilioarrieta/MuralUcla3.webp"
                    />

                    <div className="text-center p-1">
                        <h4>"Ah mundo Barquisimeto"</h4>
                        <p>Técnica: Pigmento sobre gres - Medidas: 224m2 - Lugar: Rectorado de la UCLA, Barquisimeto, Edo. Lara-Venezuela</p>
                        <p>Año: 2003</p>
                    </div>


                    {/* ASCARDIO */}
                    <Carrusel
                        id="Murales"
                        img1="/virgilioarrieta/"
                        img2="/virgilioarrieta/"
                        img3="/virgilioarrieta/"
                    />

                    <div className="text-center p-1">
                        <h4>""</h4>
                        <p>Técnica: Pigmento sobre madera - Medidas: - Lugar: ASCARDIO, Barquisimeto, Edo. Lara-Venezuela</p>
                        <p>Año: 2021</p>
                    </div>

                </div>
            </div>


            <div id="MuraleseIntervenciones">
                <h2>Diseño e Intervenciones</h2>

                <div className="d-flex gap-2">
                        <CardGaleria
                            titulo="Arte digital"
                            img="/virgilioarrieta/"
                        />

                        <CardGaleria
                            titulo="Intervenciones"
                            img="/virgilioarrieta/CamisetaObra.webp"
                        />
                    
                </div>

            </div>

        </div>
    )
}

export default Arte;