import CardGaleria from "../../Components/CardGaleria";


const data = [
    {
        id: 1,
        titulo: "Pintura",
        img: "/public/VA taller.webp",
        texto: "",
        ruta: "/pintura"
    },

    {
        id: 2,
        titulo: "Murales",
        img: "/public/VA taller.webp",
        texto: "",
        ruta: "/murales"
    },

    {
        id: 3,
        titulo: "Su Obra",
        img: "/public/VA taller.webp",
        texto: "",
        ruta: "/obra"
    }
]


function SeccionPintor() {
    return (
        <div className="seccion p-2">
            <h2>Pintor</h2>
            <p className="border border-2 border-white d-flex align-items-center gap-2 p-2"><i className="bi bi-chat-text"></i>
            Su obra es un reflejo de su pasión por el arte y su deseo de conectar con el mundo.</p>

            <div>
                <div className="row g-3">
                    {data.map((item) => (
                        <div className="col-lg-4 col-md-6">
                            <CardGaleria key={item.id} titulo={item.titulo} img={item.img} texto={item.texto} ruta={item.ruta} />
                        </div>
                    ))}

                </div>
            </div>

        </div>
    );
}

export default SeccionPintor;
