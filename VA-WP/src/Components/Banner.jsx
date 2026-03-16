import "./Banner.css"; //importacion de los estilos del banner

function Banner() {
    return (
        <div className="card bg-dark text-white mb-2">
            <div className="card text-bg-dark">
                <img src="VA taller.webp" className="card-img-banner" alt=""/>
                    <div className="card-img-overlay">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        <p className="card-text"><small>Last updated 3 mins ago</small></p>
                    </div>
            </div>
        </div>
    );
}

export default Banner;