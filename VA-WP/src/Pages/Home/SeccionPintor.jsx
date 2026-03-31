import CardGaleria from "../../Components/CardGaleria";


const data = [
    {
        id: 1,
        titulo: "Pintura",
        img: "",
        texto: "",
        ruta: "/pintura"
    },

    {
        id: 2,
        titulo: "Murales",
        img: "",
        texto: "",
        ruta: "/murales"
    },

    {
        id: 3,
        titulo: "Su Obra",
        img: "",
        texto: "",
        ruta: "/obra"
    }
]


function SeccionPintor() {
    return (
        <div className="seccion p-2">
            <h2>Pintor</h2>

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
