function Pintor() {
    return (
        <div>
            <h2 className="text-white my-4">Pintor</h2>

            <div>
                <h3 className="text-white">Etapas / Estilos</h3>
                <div className="row g-3">
                    <div className="col-lg-4 col-md-6">
                        <div className="card h-100 bg-dark text-white">
                            <img src="/VA taller.webp" className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Retrato</h5>
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
                                <h5 className="card-title">Entre peces, lunas y soles</h5>
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
                                <h5 className="card-title">Figurativo</h5>
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
