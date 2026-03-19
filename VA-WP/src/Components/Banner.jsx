import "./Banner.css"; //importacion de los estilos del banner

function Banner() {
    return (
        <>
            <div className="card bg-dark text-white mb-2">
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
            <p className="text-white">Te invitamos a explorar su universo artístico, donde cada creación cuenta una historia y despierta emociones. Descubre sus murales vibrantes, su música envolvente y sus escritos inspiradores. Gracias por acompañar a Virgilio en este emocionante viaje creativo.</p>
            <span className="text-white fs-5">¡Disfruta de la experiencia!</span>

            {/*Botones de redes sociales*/}
            <div className="d-flex justify-content-center">
                <ul className="d-flex gap-3 list-unstyled fs-3 mb-0">
                    <li>
                        <a href="https://www.instagram.com/virgilioarrieta/" target="_blank" rel="noopener noreferrer">
                            <button className="btn btn-outline-light p-1">
                                <i className="bi bi-instagram"> Instagram</i>
                            </button>
                        </a>
                    </li>
                    
                    <li>
                        <a href="https://www.tiktok.com/@virgilio.arrieta" target="_blank" rel="noopener noreferrer">
                            <button className="btn btn-outline-light p-1">
                                <i className="bi bi-tiktok"> TikTok</i>
                            </button>
                        </a>
                    </li>

                    <li>
                        <a href="https://open.spotify.com/intl-es/artist/0PCpDbUZp068RFBztSkiPn" target="_blank" rel="noopener noreferrer">
                            <button className="btn btn-outline-light p-1">
                                <i class="bi bi-spotify"> Spotify</i>
                            </button>
                        </a>
                    </li>
                </ul>
            </div>
        </>
    );
}

export default Banner;