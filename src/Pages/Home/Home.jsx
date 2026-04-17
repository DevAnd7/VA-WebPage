import Banner from "./Banner"
import CardSeccion from "../../Components/CardSeccion"

import SeccionPintor from "./SeccionPintor"


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


      {/*PINTOR*/}
      <SeccionPintor />


      {/*MUSICO*/}
      <CardSeccion
        titulo='"Con la canción y con las notas del amor"'
        img="/virgilioarrieta/ArcillaCaminoySol.webp"
        texto={`Sumérgete en el universo musical del artista y descubre canciones que conectan con emociones reales, letras que cuentan historias y melodías que invitan a quedarse.

        En esta sección podrás explorar su música, escuchar cada tema directamente y conocer el alma de cada composición.

        Además, encontrarás un cancionero exclusivo con acordes para que puedas interpretar sus canciones por ti mismo, ya sea en casa o sobre el escenario. Una invitación abierta a sentir, escuchar y también crear.`}

        href="/musica"
      />


      {/*ESCRITOR*/}
      <CardSeccion
        titulo="Otra forma de decir, de expresar, de contar"
        img=""
        texto={`Adéntrate en la palabra escrita del artista y descubre un universo donde la música se transforma en relato. Cada página respira la misma sensibilidad que habita en sus canciones: historias que laten, emociones contenidas y verdades que encuentran su forma en el silencio y en la voz.

        Este espacio es una invitación a leer despacio, a dejarse atravesar por cada texto y a reconocer, entre líneas, esa misma esencia que también suena en su música.

        Porque a veces, lo que no se canta… se escribe.`}

        href="/escritos"
      />

    </div>
  );
}

export default Home;
