import Navbar from "./Components/Navbar"
import Banner from "./Components/Banner"
import Pintor from "./Components/Pintor"
import Musico from "./Components/Musico"
import Escritor from "./Components/Escritor"
import Biografia from "./Components/Biografia"
import Footer from "./Components/Footer"

function App() {
  return (
    <div className="container">
        <Navbar />
      <div className="d-flex flex-column gap-3">
        <Banner />
        <Pintor />
        <Musico />
        <Escritor />
        <Biografia />
      </div>
      <Footer />
    </div>
  );
}

export default App
