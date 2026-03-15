function Banner() {
    return (
        <div className="card bg-dark text-white mb-2">
            <div className="row g-0">
                <div className="col-md-4">
                    <img src="/src/public/VA taller.webp" className="img-fluid rounded-start" alt="..." />
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        <p className="card-text"><small className="text-body-secondary">Last updated 3 mins ago</small></p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Banner;