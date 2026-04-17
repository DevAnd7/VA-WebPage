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


            <div id="MuraleseIntervenciones">
                <h2 className="seccion">Murales e Intervenciones</h2>

                <div class="card mb-3">
                    <img src="/MuralUcla.webp" class="card-img-top" alt="..." />
                    <div class="card-body">
                        <h4 class="card-title">"Ah mundo Barquisimeto"</h4>
                        <p class="card-text">Técnica: Pigmento sobre gres - Medidas: 224m2 - Lugar: Rectorado de la UCLA Barquisimeto Edo. Lara-Venezuela</p>
                        <p class="card-text"><small class="text-body-secondary">Año: 2003</small></p>
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