const CardSeccion = ({ titulo, img, texto }) => {
    return (
        <div className="seccion">
            <h2>{titulo}</h2>
            <div className="row bg-white py-2 m-1">
                <div className="col-lg-4">
                    <img src={img} className="img-fluid" />
                </div>

                <div className="col-lg-8">
                    <p className="texto_space">{texto}</p>
                </div>
            </div>
        </div>
    )
}

export default CardSeccion;