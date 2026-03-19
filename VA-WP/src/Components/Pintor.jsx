import {BotonesVerMas} from "../Componentes/Botones"

function Pintor() {
    return (
        <div className="seccion p-2">
            <h2>Pintor</h2>

            <div>
                <div className="row g-3">
                    <div className="col-lg-4 col-md-6">
                        <div className="card p-1 h-100">
                            <img src="/VA taller.webp" className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Su Obra</h5>
                                <p className="card-text">
                                    Descripción breve de la obra.
                                </p>
                                <BotonesVerMas href={"#"}/>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6">
                        <div className="card h-100 bg-dark text-white">
                            <img src="/VA taller.webp" className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Exploracion</h5>
                                <p className="card-text">
                                    Descripción breve de la obra.
                                </p>
                                <a href="#" className="btn btn-primary">Ver más</a>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6">
                        <div className="card h-100 bg-dark text-white">
                            <img src="/VA taller.webp" className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Etapas / Estilos</h5>
                                <p className="card-text">
                                    Descripción breve de la obra.
                                </p>
                                <a href="#" className="btn btn-primary">Ver más</a>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default Pintor;
