import "./Banner.css"; //importacion de los estilos del banner

import {BotonesRS} from "../Componentes/Botones"; //importacion del componente de botones

function Banner() {
    return (
        <>
            <div className="card text-white mb-2">
                <img src="/VA taller.webp" className="card-img-banner" alt="" />

                <div className="card-img-overlay d-flex justify-content-center flex-column text-start">
                    <h5 className="card-title fs-2">Aquí la creatividad, no tiene límites.</h5>
                    <p className="card-text fs-3">
                        Artista polifacético que abarca la pintura, el muralismo, la escultura, La música, la composición, la escritura y la producción.
                    </p>

                    <p className="card-text"><small>Last updated 3 mins ago</small></p>
                </div>
            </div>

            {/*Comentario de bienvenida a la pagina*/}
            <p>Te invitamos a explorar su universo artístico, donde cada creación cuenta una historia y despierta emociones. Descubre sus murales vibrantes, su música envolvente y sus escritos inspiradores. Gracias por acompañar a Virgilio en este emocionante viaje creativo.</p>

            <span className="fs-5">¡Disfruta de la experiencia!</span>

            {/*Botones de redes sociales*/}
            <div className="d-flex justify-content-center justify-space-between">
                <ul className="d-flex gap-3 list-unstyled fs-3 mb-0">
                    <li>
                        <BotonesRS
                            iconClass="bi bi-instagram"
                            label="Instagram"
                            onClick={() =>
                                window.open("https://www.instagram.com/virgilioarrieta/", "_blank")
                            }
                        />
                    </li>

                    <li>
                        <BotonesRS
                            iconClass="bi bi-tiktok"
                            label="TikTok"
                            onClick={() =>
                                window.open("https://www.tiktok.com/@virgilio.arrieta", "_blank")
                            }
                        />
                    </li>

                    <li>
                        <BotonesRS
                            iconClass="bi bi-spotify"
                            label="Spotify"
                            onClick={() =>
                                window.open(
                                    "https://open.spotify.com/intl-es/artist/0PCpDbUZp068RFBztSkiPn",
                                    "_blank")
                            }
                        />
                    </li>
                </ul>
            </div>
        </>
    );
}

export default Banner;