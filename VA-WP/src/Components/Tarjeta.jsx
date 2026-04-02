const Tarjeta = ({ img, titulo, textoImg, texto}) => {

    return (
        <div className="card w-100">
            <div className="row p-2">
                <div className="col-md-5">
                    <img src={img} alt={`imagen de ${titulo}`} className="w-100 object-fit-cover rounded" />
                    <small>{textoImg}</small>
                </div>
                <div className="col-md-7">
                    <h3 className="mt-3">{titulo}</h3>
                    <p>{texto}</p>
                </div>
            </div>
        </div>
    );
};

export default Tarjeta;