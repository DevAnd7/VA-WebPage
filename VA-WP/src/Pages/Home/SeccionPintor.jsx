import CardGaleria from "../../Components/CardGaleria";

function SeccionPintor() {
    return (
        <div className="seccion p-2">
            <h2>Pintor</h2>

            <div>
                <div className="row g-3">
                    <div className="col-lg-4 col-md-6">
                        <CardGaleria />
                    </div>

                    <div className="col-lg-4 col-md-6">
                        <CardGaleria />
                    </div>

                    <div className="col-lg-4 col-md-6">
                        <CardGaleria />
                    </div>

                </div>
            </div>

        </div>
    );
}

export default SeccionPintor;
