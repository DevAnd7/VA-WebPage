const CardMasonry = ({ texto, img }) => {
    return (
        <div className="cardMaso bg-white p-1">
            <img src={img} className="img-masonry" />
            <div className="card-body">

                <p className="m-0 texto_space">
                    {texto}
                </p>
            </div>
        </div>
    )
}

export default CardMasonry;