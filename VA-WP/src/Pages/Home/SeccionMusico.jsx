import { Link } from "react-router-dom";

function SeccionMusico() {
    return (
        <div className="seccion" id="musico">
            <Link to="/musica" className="nav-link">
                <h2>Músico - Compositor</h2>

                <div className="card p-1">
                    <div className="row g-0">
                        <div className="col-md-5">
                            <img src="/public/VA taller.webp" className="img-fluid rounded-start" alt="VA cantando" />
                        </div>
                        <div className="col-md-7">
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                <p className="card-text"><small className="text-body-secondary">Last updated 3 mins ago</small></p>
                            </div>
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    );
}

export default SeccionMusico;