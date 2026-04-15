import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";

import { Outlet } from "react-router-dom";

import ScrollToTop from "./Components/ScrollToTop";

function Layout() {
  return (
    <div className="container">

    <ScrollToTop /> {/*Componente para volver al inicio de la página al cambiar de ruta*/}

      <Navbar />

      <main>
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}

export default Layout;