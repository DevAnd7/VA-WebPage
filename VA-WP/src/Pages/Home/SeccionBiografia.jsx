import { Link } from "react-router-dom";


function SeccionBiografia() {
    return (
        <div className="seccion" id="biografia">

            <Link to="/biografia" className="nav-link">

                <h2>Biografía</h2>

                <div className="card p-1">

                    <div className="row g-0">

                        <div className="col-md-5">
                            <img src="/VA taller.webp" alt="" className="img-fluid"/>
                        </div>

                        <div className="col-md-7">

                            <div className="card-body">
                                <h5 className="card-title"></h5>

                                <p className="card-text">Descubre la vida y obra de Virgilio Arrieta, un artista venezolano cuya trayectoria une la música, la pintura y la palabra en una misma búsqueda creativa. Nacido en El Limón, Aragua, su infancia en contacto con la naturaleza despertó desde muy temprano una sensibilidad artística que lo llevó a explorar múltiples lenguajes de expresión.</p>

                                <p className="card-text"> A lo largo de su camino, pasó de la formación académica al arte con una vocación inquebrantable, desarrollando una obra reconocida tanto en Venezuela como a nivel internacional.</p>

                                <p className="card-text">Compositor de más de trescientas canciones interpretadas por grandes figuras de la música, pintor de un universo visual propio y creador de espacios culturales y proyectos que celebran la identidad venezolana, su historia es la de un creador en constante transformación. Una invitación a conocer a un artista que convierte la emoción en color, en palabra y en sonido.</p>
                            </div>

                        </div>

                    </div>

                </div>
            </Link>
        </div>
    );
}

export default SeccionBiografia;