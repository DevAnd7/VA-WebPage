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
            <p className="text-white">Te invitamos a explorar su universo artístico, donde cada creación cuenta una historia y despierta emociones. Descubre sus murales vibrantes, su música envolvente y sus escritos inspiradores. Gracias por acompañar a Virgilio en este emocionante viaje creativo.</p>
            <span className="text-white fs-5">¡Disfruta de la experiencia!</span>
        </>
    );
}

export default Banner;