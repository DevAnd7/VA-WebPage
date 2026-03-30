function Navbar() {
    return (
        <nav className="navbar seccion">
            <div className="container">
                <a className="navbar-brand d-flex align-items-center gap-2" href="#">
                    <i className="bi bi-palette"></i>
                    <span className="texto-regular fs-3">Virgilio Arrieta</span>
                </a>

                <button
                    className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav ms-auto">
                        <a className="nav-link" href="#">Pintor</a>
                        <a className="nav-link" href="#">Músico - Compositor</a>
                        <a className="nav-link" href="#">Muralista</a>
                        <a className="nav-link" href="#">Escritor</a>
                        <a className="nav-link" href="#">Biografía</a>
                    </div>
                </div>
            </div>
        </nav >
    );
}

export default Navbar;
