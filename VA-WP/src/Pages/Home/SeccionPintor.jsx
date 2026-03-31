import CardGaleria from "../../Components/CardGaleria";

const data =[
    {
        id: 1,
        titulo: "",
        img: "",
        texto: "",
        ruta: ""
    }
]


function SeccionPintor() {
    return (
        <div className="seccion p-2">
            <h2>Pintor</h2>

            <div>
                <div className="row g-3">
                    <div className="col-lg-4 col-md-6">
                        {data.map((item) => (
                            <CardGaleria key={item.id} titulo={item.titulo} img={item.img} texto={item.texto} ruta={item.ruta} />
                        ))}
                    </div>

                </div>
            </div>

        </div>
    );
}

export default SeccionPintor;
