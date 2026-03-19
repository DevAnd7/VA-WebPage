import Navbar from "./Components/Navbar"
import Banner from "./Components/Banner"
import Pintor from "./Components/Pintor"
import Escritor from "./Components/Escritor"
import Footer from "./Components/Footer"

function App() {
  return (
    <div className="container">
      <Navbar />
      <Banner />
      <Pintor />
      <Escritor />
      <Footer />
    </div>
  );
}

export default App
