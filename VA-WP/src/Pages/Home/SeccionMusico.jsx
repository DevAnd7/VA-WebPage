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
                                
                                <h5 className="card-title">Card title</h5>

                                <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                
                                <p className="card-text"><small className="text-body-secondary">Last updated 3 mins ago</small></p>

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