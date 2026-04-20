import Cancion from "../../Components/Cancion";

const ArcillaCamino = () => {
    return (
        <>
            <div className="seccion row">

                <div className="col-lg-4">
                    <img src="/virgilioarrieta/ArcillaCaminoySol.webp" className="img img-fluid" />
                </div>

                <div className="col-lg-8">
                    <div className="accordion" id="accordionExample">

                        <Cancion
                            num={11}
                            titulo="Con alma de cantor"
                            letra={`Tiene alma de cantor
                                De poeta de señor Don aire
                                Un constante soñador
                                Que no oculta el corazón a nadie
                                Siempre guarda una oración
                                Para llegar al creador y darle
                                Las gracias por la vida

                                Es guitarra en LA mayor
                                Compañero para andar caminos
                                Una flor en el ojal
                                Y la copa que derrama vino

                                Quién puede decir que el caroreño
                                No es del amor el dueño
                                Del romance y la canción
                                Si Dios entre sol y guirnaldas
                                Con mil versos y guitarra
                                Le moldeó su corazón

                                Puede ser que el mar
                                Se seque alguna vez
                                Que el cielo parta en dos
                                Que falle la razón
                                Pero nunca la amistad
                                Del un caroreño`}
                        />

                    </div>
                </div>
            </div>

        </>
    )
}

export default ArcillaCamino;