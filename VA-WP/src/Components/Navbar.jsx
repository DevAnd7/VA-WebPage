function Navbar() {
    return (

        <nav className="navbar navbar-dark bg-dark">
            <div className="container">
                <a className="navbar-brand d-flex align-items-center gap-2" href="#">
                    <i className="bi bi-palette"></i>
                    <span className="fs-3">Virgilio Arrieta</span>
                </a>

                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNavAltMarkup">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav ms-auto">
                        <a className="nav-link active" href="#">Inicio</a>
                        <a className="nav-link" href="#">Pintor</a>
                        <a className="nav-link" href="#">Compositor</a>
                        <a className="nav-link" href="#">Escritor</a>
                        <a className="nav-link" href="#">Biografía</a>
                    </div>
                </div>
            </div>
        </nav >

    );
}

export default Navbar;
