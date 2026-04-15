import Carrusel from "../../Components/Carrusel";

import { Link } from "react-router-dom";

import { BotonesRS } from "../../Components/Botones";

function SeccionMusico() {
    return (
        <div className="seccion" id="musico">
            <Link to="/musica" className="nav-link">
                <h2>Músico - Compositor</h2>

                <div className="card p-1">
                    <div className="row g-0">

                        <div className="col-md-5">
                            <Carrusel img1="../ArcillaCaminoySol.webp"
                                img2="../CamisetaObra.webp"
                                img3="../OtraImagenMas.webp"
                            />
                        </div>

                        <div className="col-md-7">
                            <div className="card-body">

                                <h4 className="card-title">"Nací con la canción y con las notas del amor..."</h4>

                                <p className="card-text">Sumérgete en el universo musical del artista y descubre canciones que conectan con emociones reales, letras que cuentan historias y melodías que invitan a quedarse.</p>

                                <p className="card-text">En esta sección podrás explorar su música, escuchar cada tema directamente y conocer el alma de cada composición.</p>

                                <p className="card-text">Además, encontrarás un cancionero exclusivo con acordes para que puedas interpretar sus canciones por ti mismo, ya sea en casa o sobre el escenario. Una invitación abierta a sentir, escuchar y también crear.</p>

                                <h4 className="card-title">"...para cantar, cantar así, cantar por siempre"</h4>


                                <BotonesRS
                                    iconClass="bi bi-spotify"
                                    label="Spotify"
                                    onClick={() =>
                                        window.open(
                                            "https://open.spotify.com/intl-es/artist/0PCpDbUZp068RFBztSkiPn",
                                            "_blank")
                                    }
                                />
                            </div>
                        </div>

                    </div>
                </div>
            </Link>
        </div>
    );
}

export default SeccionMusico;