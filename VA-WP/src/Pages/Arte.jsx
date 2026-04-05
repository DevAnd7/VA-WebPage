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


            {/*Murales e Intervenciones*/}
            <div id="MuraleseIntervenciones">
                <h2 className="seccion">Murales e Intervenciones</h2>

                <div className="row p-2">
                    <div className=" col-lg-4 d-flex flex-column p-2">
                        <div className="bg-white p-2">
                            <img src="/MuralUcla.webp" alt="Foto Obra Artística" className="img-fluid" />

                            <div className="mt-1">
                                <ul className="list-unstyled m-0">
                                    <li>
                                        Mural: “Ah mundo Barquisimeto”
                                    </li>
                                    <li>
                                        Técnica: Pigmento sobre gres
                                    </li>
                                    <li>
                                        Medidas: 224m2
                                    </li>
                                    <li>
                                        Lugar: Rectorado de la UCLA Barquisimeto Edo. Lara-Venezuela
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-8">
                        <h3>Un Legado Artístico y Humano</h3>
                        <p>En su faceta como artista plástico, Arrieta exploró diversas formas de expresión, llevando su obra más allá del caballete para crear murales de gran escala, incluyendo uno que supera los 224 m². Su arte, profundamente humanista y poético, ha sido expuesto en Latinoamérica, Estados Unidos y Europa, logrando resonar con audiencias de distintas culturas.</p>

                        <p>La unión de sus talentos como pintor, compositor y músico lo convierte en un creador integral.</p>

                        <p>Según sus palabras:</p>

                        <p><strong>“Mis dibujos se convierten en canciones, y mis canciones se llenan de color. Es una simbiosis necesaria e inevitable.”</strong></p>

                        <p>Virgilio Arrieta es un artista y cantautor cuya obra trasciende las fronteras de lo visual y lo sonoro. Su legado, profundamente arraigado en las tradiciones venezolanas, celebra la belleza de la vida cotidiana, la dualidad del ser humano y el poder del arte para conectar corazones y culturas. Su trayectoria, marcada por el amor a su país y su búsqueda constante de excelencia, lo consolida como una de las figuras más destacadas del panorama artístico y cultural venezolano.</p>
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