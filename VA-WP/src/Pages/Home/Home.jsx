import Banner from "./Banner"
import SeccionPintor from "./SeccionPintor"
import SeccionMusico from "./SeccionMusico"
import SeccionEscritor from "./SeccionEscritor"
import SeccionBiografia from "./SeccionBiografia"

function Home() {
  return (
      <div className="d-flex flex-column gap-2">
        
        <Banner />
        <SeccionBiografia />
        <SeccionPintor />
        <SeccionMusico />
        <SeccionEscritor />

      </div>
  );
}

export default Home;
