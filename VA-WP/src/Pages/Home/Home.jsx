import Banner from "./Banner"
import SeccionPintor from "./SeccionPintor"
import SeccionMusico from "./SeccionMusico"
import SeccionEscritor from "./SeccionEscritor"
import SeccionBiografia from "./SeccionBiografia"

import CardSeccion from "../../Components/CardSeccion"

function Home() {
  return (
    <div className="d-flex flex-column gap-2">

      <Banner />
      <CardSeccion
        titulo="Biografía"
        img="./VA taller.webp"
        texto={`Descubre la vida y obra de Virgilio Arrieta, un artista venezolano cuya trayectoria une la música, la pintura y la palabra en una misma búsqueda creativa. Nacido en El Limón, Aragua, su infancia en contacto con la naturaleza despertó desde muy temprano una sensibilidad artística que lo llevó a explorar múltiples lenguajes de expresión.
          
        A lo largo de su camino, pasó de la formación académica al arte con una vocación inquebrantable, desarrollando una obra reconocida tanto en Venezuela como a nivel internacional.`}
      />
      <SeccionBiografia />
      <SeccionPintor />
      <SeccionMusico />
      <SeccionEscritor />

    </div>
  );
}

export default Home;
