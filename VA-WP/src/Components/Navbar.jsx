import { Link } from "react-router-dom";

function Navbar() {
    return (
        <nav className="navbar seccion">
            <div className="container">
                <Link to="/" className="navbar-brand d-flex align-items-center gap-2">
                    <i className="bi bi-palette"></i>
                    <span className="texto-regular fs-3">Virgilio Arrieta</span>
                </Link>

                <button
                    className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav ms-auto">
                        <Link to="/" className="nav-link">Inicio</Link>
                        <Link to="/Pintura" className="nav-link">Arte</Link>
                        <Link to="/Musica" className="nav-link">Música</Link>
                        <Link to="/Escritos" className="nav-link">Escritos</Link>
                        <Link to="/Biografia" className="nav-link">Biografía</Link>
                    </div>
                </div>
            </div>
        </nav >
    );
}

export default Navbar;
