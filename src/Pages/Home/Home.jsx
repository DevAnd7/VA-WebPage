import Banner from "./Banner"
import CardSeccion from "../../Components/CardSeccion"


function Home() {
  return (
    <div className="d-flex flex-column gap-2">

      <Banner />


      {/*BIOGRAFIA*/}
      <CardSeccion
        titulo="Historia de un creador"
        img="/virgilioarrieta/VA taller.webp"
        texto={`Descubre la vida y obra de Virgilio Arrieta, un artista venezolano cuya trayectoria une la música, la pintura y la palabra en una misma búsqueda creativa. Nacido en El Limón, Aragua, su infancia en contacto con la naturaleza despertó desde muy temprano una sensibilidad artística que lo llevó a explorar múltiples lenguajes de expresión.

        A lo largo de su camino, pasó de la formación académica al arte con una vocación inquebrantable, desarrollando una obra reconocida tanto en Venezuela como a nivel internacional.
        
        Compositor de más de trescientas canciones interpretadas por grandes figuras de la música, pintor de un universo visual propio y creador de espacios culturales y proyectos que celebran la identidad venezolana, su historia es la de un creador en constante transformación. Una invitación a conocer a un artista que convierte la emoción en color, en palabra y en sonido.`}

        href="/biografia"
      />


      <p className="text-center mt-2">Artista polifacético que abarca la pintura, el muralismo, la escultura, La música, la composición, la escritura y la producción.</p>

      {/*CARRUSEL*/}
      <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel" data-bs-interval="4000" data-bs-pause="hover">

        <div className="carousel-inner">

          <div className="carousel-item active">
            <img src="/virgilioarrieta/ParejaBailando.webp" className="img-carousel" />
            <h3 className="mt-2">ARTE</h3>
            <p>
              Descubre un universo creativo que abarca pintura, murales, escultura,
              arte digital y diseño aplicado en prendas y accesorios. Cada pieza conecta
              arte y vida cotidiana desde una mirada contemporánea.
            </p>
          </div>

          <div className="carousel-item">
            <img src="/virgilioarrieta/ParejaBailando.webp" className="img-carousel" />
            <h3 className="mt-2">MÚSICA</h3>
            <p>
              Sumérgete en un universo musical y descubre canciones de su autoría que
              conectan con emociones reales, letras que cuentan historias y melodías que invitan a cantar.
            </p>
          </div>

          <div className="carousel-item">
            <img src="/virgilioarrieta/ParejaBailando.webp" className="img-carousel" />
            <h3 className="mt-2">ESCRITURA</h3>
            <p>
              Adéntrate en la obra literaria del artista, donde su libro y diversos escritos
              revelan una voz personal que explora emociones, ideas y experiencias desde una mirada creativa y reflexiva.
            </p>
          </div>

        </div>

        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>

        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>

      </div>
    </div>
  );
}

export default Home;
