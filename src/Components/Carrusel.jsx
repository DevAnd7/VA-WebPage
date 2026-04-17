const Carrusel = ({ img1, img2, img3 }) => {
    return (
        <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img src={img1} className="d-block w-100" />
                </div>
                <div className="carousel-item">
                    <img src={img2} className="d-block w-100" />
                </div>
                <div className="carousel-item">
                    <img src={img3} className="d-block w-100" />
                </div>
            </div>
        </div>
    )
}

export default Carrusel;