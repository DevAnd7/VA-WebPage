import Navbar from "./Components/Navbar"
import Banner from "./Components/Banner"
import Pintor from "./Components/Pintor"
import Compositor from "./Components/Compositor"
import Escritor from "./Components/Escritor"
import Biografia from "./Components/Biografia"
import Footer from "./Components/Footer"

function App() {
  return (
    <div className="container">
      <Navbar />
      <Banner />
      <Pintor />
      <Compositor />
      <Escritor />
      <Biografia />
      <Footer />
    </div>
  );
}

export default App
