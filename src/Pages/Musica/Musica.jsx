import ArcillaCamino from "./ArcillaCamino";
import UnCamino from "./UnCamino";

const Musica = () => {
    return (
        <div className="d-flex flex-column gap-2">

            <img src="/virgilioarrieta/UltimaCena.webp" className="card-img-banner" alt="Obra Ultima Cena Musicos - Virgilio Arrieta" />

            <h2>Música - Discografía</h2>

            <p>Bienvenidos a la sección de Discografía y Letras, donde podrás explorar la trayectoria musical de Virgilio Arrieta a través de sus álbumes y canciones. Aquí encontrarás cada una de sus producciones, desde sus primeros lanzamientos hasta sus más recientes éxitos, así como las letras que dan vida a su música.</p>

            <strong className="d-flex gap-2 p-2"><i className="bi bi-chat-text"></i>Cada canción cuenta una historia, un reflejo de sus experiencias, emociones y el estilo único que lo caracteriza. Te invitamos a sumergirte en su mundo sonoro y a descubrir el significado detrás de cada verso.</strong>


            {/* DISCOGRAFIA */}
            <div className="d-flex flex-column gap-2">
                <UnCamino />
                <ArcillaCamino />
            </div>
        </div>
    )
}

export default Musica;