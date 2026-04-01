import { Link } from "react-router-dom";

function SeccionMusico() {
    return (
        <div className="seccion" id="musico">
            <Link to="/musica" className="nav-link">
                <h2>Músico - Compositor</h2>
            </Link>
        </div>
    );
}

export default SeccionMusico;