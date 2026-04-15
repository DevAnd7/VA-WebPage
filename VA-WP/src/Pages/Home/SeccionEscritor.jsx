import { Link } from "react-router-dom";


function SeccionEscritor() {
    return (
        <div className="seccion" id="escritor">

            <Link to="/escritos" className="nav-link">

                <h2>Escritor</h2>

                <div className="card p-1">

                    <div className="row g-0">

                        <div className="col-md-5">
                            <img src="" alt="" />
                        </div>

                        <div className="col-md-7">

                            <div className="card-body">
                                <h4 className="card-title">Otra forma de decir, de expresar</h4>

                                <p className="card-text">Adéntrate en la palabra escrita del artista y descubre un universo donde la música se transforma en relato. Cada página respira la misma sensibilidad que habita en sus canciones: historias que laten, emociones contenidas y verdades que encuentran su forma en el silencio y en la voz.</p>

                                <p className="card-text">Este espacio es una invitación a leer despacio, a dejarse atravesar por cada texto y a reconocer, entre líneas, esa misma esencia que también suena en su música.</p>

                                <p className="card-text">Porque a veces, lo que no se canta… se escribe.</p>
                            </div>

                        </div>

                    </div>

                </div>
            </Link>
        </div>
    );
}

export default SeccionEscritor;