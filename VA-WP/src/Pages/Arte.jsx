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
            <div className="seccion" id="ObraArtistica">
                <h2>Obra Artística</h2>

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