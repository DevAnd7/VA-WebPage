const Carrusel = ({ id, img1, img2, img3, img4 }) => {
    return (
        <div id={`carousel${id}`} className="carousel slide">

            <div className="carousel-inner p-1">
                <div className="carousel-item active">
                    <img src={img1} className="d-block img-carrusel mx-auto" />
                </div>
                <div className="carousel-item">
                    <img src={img2} className="d-block img-carrusel mx-auto" />
                </div>
                {img3 ? <div className="carousel-item">
                    <img src={img3} className="d-block img-carrusel mx-auto" />
                </div> : null}
                {img4 ? <div className="carousel-item">
                    <img src={img4} className="d-block img-carrusel mx-auto" />
                </div> : null}
            </div>

            <button className="carousel-control-prev" type="button" data-bs-target={`#carousel${id}`} data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target={`#carousel${id}`} data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>

        </div>
    )
}

export default Carrusel;