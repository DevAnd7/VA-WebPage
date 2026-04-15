import { Routes, Route } from "react-router-dom";

import Layout from "./Layout";

import Home from "./Pages/Home/Home";
import Arte from "./Pages/Arte";
import Musica from "./Pages/Musica";
import Biografia from "./Pages/Biografia";
import Escritos from "./Pages/Escritos";

const AppRoutes = () => {
  return (
    <Routes>

      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/arte" element={<Arte />} />
        <Route path="/musica" element={<Musica />} />
        <Route path="/biografia" element={<Biografia />} />
        <Route path="/escritos" element={<Escritos />} />
      </Route>

    </Routes>
  );
};

export default AppRoutes;