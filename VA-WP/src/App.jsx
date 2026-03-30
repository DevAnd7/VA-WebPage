import Navbar from "./Pages/Home/Navbar"
import Banner from "./Pages/Home/Banner"
import SeccionPintor from "./Pages/Home/SeccionPintor"
import SeccionMusico from "./Pages/Home/SeccionMusico"
import SeccionEscritor from "./Pages/Home/SeccionEscritor"
import SeccionBiografia from "./Pages/Home/SeccionBiografia"
import Footer from "./Pages/Home/Footer"

function App() {
  return (
    <div className="container">
        <Navbar />
      <div className="d-flex flex-column gap-3">
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

export default App
