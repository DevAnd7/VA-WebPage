import Banner from "./Banner"
import SeccionPintor from "./SeccionPintor"
import SeccionMusico from "./SeccionMusico"
import SeccionEscritor from "./SeccionEscritor"


import CardSeccion from "../../Components/CardSeccion"

function Home() {
  return (
    <div className="d-flex flex-column gap-2">

      <Banner />
      <CardSeccion
        titulo="Historia de un creador"
        img="./VA taller.webp"
        texto={`Descubre la vida y obra de Virgilio Arrieta, un artista venezolano cuya trayectoria une la música, la pintura y la palabra en una misma búsqueda creativa. Nacido en El Limón, Aragua, su infancia en contacto con la naturaleza despertó desde muy temprano una sensibilidad artística que lo llevó a explorar múltiples lenguajes de expresión.

        A lo largo de su camino, pasó de la formación académica al arte con una vocación inquebrantable, desarrollando una obra reconocida tanto en Venezuela como a nivel internacional.
        
        Compositor de más de trescientas canciones interpretadas por grandes figuras de la música, pintor de un universo visual propio y creador de espacios culturales y proyectos que celebran la identidad venezolana, su historia es la de un creador en constante transformación. Una invitación a conocer a un artista que convierte la emoción en color, en palabra y en sonido.`}

        href="/biografia"
      />

      <SeccionPintor />

      <CardSeccion
        titulo='"Con la canción y con las notas del amor"'
        img="./ArcillaCaminoySol.webp"
        texto={`Sumérgete en el universo musical del artista y descubre canciones que conectan con emociones reales, letras que cuentan historias y melodías que invitan a quedarse.

        En esta sección podrás explorar su música, escuchar cada tema directamente y conocer el alma de cada composición.

        Además, encontrarás un cancionero exclusivo con acordes para que puedas interpretar sus canciones por ti mismo, ya sea en casa o sobre el escenario. Una invitación abierta a sentir, escuchar y también crear.`}

        href="/musica"
      />
      <SeccionMusico />
      <SeccionEscritor />

    </div>
  );
}

export default Home;
