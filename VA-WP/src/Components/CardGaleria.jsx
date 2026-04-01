const CardGaleria = ({titulo, texto, img}) => {
    return (
        <div className="card p-1 h-100">
            <img src={img} className="card-img-top" alt={`imagen ${titulo}`} />
            <div className="card-body">
                <h5 className="card-title">{titulo}</h5>
                <p className="card-text">
                    {texto}
                </p>
            </div>
        </div>
    )
}

export default CardGaleria;