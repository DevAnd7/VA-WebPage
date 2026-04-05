const Biografia = () => {
    return (
        <div className="container d-flex flex-column gap-2">

            <h1>Biografía</h1>

            <h3>Virgilio Arrieta: Vida y Obra de un Creador Integral</h3>

            <div className="row">
                <div className="col-lg-8">

                    <p>Virgilio Arrieta nació el 14 de abril de 1955 en El Limón, un pintoresco valle del estado Aragua, Venezuela. Este lugar, conocido por su rica naturaleza y sus faenas agrícolas centradas en la producción de caña de azúcar, moldeó su carácter y creatividad. Fue allí, en un entorno rural junto a sus padres y seis hermanos, donde transcurrieron los años más formativos de su vida. La conexión con esta tierra fértil y su vida sencilla marcó profundamente su sensibilidad artística.</p>

                    <p>Sobre su infancia, Arrieta reflexiona con gratitud y orgullo:</p>
                    <p><strong>“Lo que ahora soy es producto de esa niñez.”</strong></p>
                    <p>Desde muy pequeño, Virgilio mostró una marcada inclinación hacia las artes, especialmente la pintura y la música. Con tan solo 11 años, demostró su osadía artística al organizar su primera exposición de manera autodidacta, utilizando la cerca de un parque infantil de la Plaza Bolívar de El Limón para mostrar sus pinturas durante su reinauguración. Este gesto audaz atrajo la atención del gobernador, quien no solo adquirió una de sus obras, sino que también le otorgó una beca de estudios. Este evento fortuito marcó el inicio de su camino artístico, una senda que seguiría explorando con pasión y determinación.</p>
                </div>

                <div className="col-lg-4 p-2">
                    <div className="ratio ratio-4x3">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31405.004506947655!2d-67.6478568367882!3d10.291723149049908!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e803a4e0ecc53d3%3A0xf73d705adbec6eb1!2sEl%20Lim%C3%B3n%2C%20Aragua%2C%20Venezuela!5e0!3m2!1ses-419!2ses!4v1775413867638!5m2!1ses-419!2ses"
                            style={{ border: 0 }}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </div>
                    <p><small>Mapa de la ubicación de El Limón, Aragua, Venezuela</small></p>
                </div>


            </div>

        </div >
    )
}

export default Biografia;