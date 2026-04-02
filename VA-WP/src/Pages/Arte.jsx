const Arte = () => {
    return (
        <div className="container d-flex flex-column gap-2">

            <h1>Arte</h1>
            <p>
                Bienvenidos a la galería virtual de Virgilio Arrieta, un espacio dedicado a su obra plástica. Aquí podrás explorar una colección de sus cuadros y creaciones visuales, donde cada pieza refleja su visión única y su habilidad para transformar emociones y conceptos en arte.
            </p>

            <strong className="d-flex gap-2 p-2"><i className="bi bi-chat-text"></i>A través de una variedad de técnicas, estilos y temas, el artista nos invita a un recorrido por su mundo creativo, lleno de colores, texturas y formas que narran historias propias.</strong>

            <p>Te invitamos a sumergirte en esta experiencia visual y descubrir la profundidad de su trabajo artístico.</p>

            <p><strong>¡Que disfrutes de la visita!</strong></p>

            {/*Seccion de Obras de Arte*/}
            <div id="ObraArtistica">
                <h2 className="seccion">Obra Artística</h2>

                <div className="row p-2">
                    <div className="col-4 d-flex flex-column text-center bg-white p-2">
                        <img src="/ObraMujerLPS.webp" alt="Foto Obra Artística" className="img-fluid" />
                        <small className="mt-1">Etapa: Entre Lunas, Peces y Soles - Año: 1994</small>
                    </div>
                    <div className="col-8">
                        <h3>Entre Peces, Lunas y Soles</h3>
                        <p>El año 1993 marcó un hito importante en su trayectoria artística con la presentación de su primera gran propuesta, “Entre Peces, Lunas y Soles”. Esta serie de obras figurativas le otorgó un reconocimiento nacional considerable, consolidándolo como un artista versátil y visionario. Las críticas positivas no fueron suficientes para detener su inquietud creativa; al contrario, Arrieta buscó ir más allá de las formas tradicionales.</p>

                        <p>En su afán por capturar la esencia de las emociones humanas, comenzó a distanciarse del realismo convencional y a explorar un lenguaje artístico más simbólico y minimalista. Este enfoque lo llevó a sintetizar las formas, desarrollando un estilo caracterizado por personajes unilineales, de doble rostro, expresivas miradas y composiciones que relataban narrativas poéticas. Sus obras buscaban no solo impactar visualmente, sino también resonar en lo más profundo del espectador.</p>

                        <p>El artista describió este proceso como una búsqueda interior:</p>

                        <p><strong>“Desde la belleza externa del humano, voy en la búsqueda de la belleza interna.”</strong></p>

                        <p>A lo largo de su trayectoria, ha demostrado ser un creador en constante transformación, comprometido con la búsqueda de un lenguaje artístico propio. Su obra, arraigada en la sensibilidad humana y en las emociones más universales, trasciende fronteras y géneros, dejando un impacto imborrable tanto en el arte como en la música.</p>
                    </div>

                </div>




            </div>

            <div className="seccion" id="MuraleseIntervenciones">
                <h2>Murales e Intervenciones</h2>

            </div>

            <div className="seccion" id="DiseñoActual">
                <h2>Diseño Actual</h2>

            </div>

        </div>
    )
}

export default Arte;