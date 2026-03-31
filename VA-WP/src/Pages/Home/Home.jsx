import Navbar from "../../Components/Navbar"
import Banner from "./Banner"
import SeccionPintor from "./SeccionPintor"
import SeccionMusico from "./SeccionMusico"
import SeccionEscritor from "./SeccionEscritor"
import SeccionBiografia from "./SeccionBiografia"
import Footer from "../../Components/Footer"

function Home() {
  return (
    <div className="container">
        <Navbar />
      <div className="d-flex flex-column gap-2">
        <Banner />
        <SeccionPintor />
        <SeccionMusico />
        <SeccionEscritor />
        <SeccionBiografia />
      </div>
      <Footer />
    </div>
  );
}

export default Home;
