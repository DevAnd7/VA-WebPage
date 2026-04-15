import { Routes, Route } from "react-router-dom";

import Home from "./Pages/Home/Home";
import Arte from "./Pages/Arte";
import Musica from "./Pages/Musica";
import Biografia from "./Pages/Biografia";
import Escritura from "./Pages/Escritura";

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/arte" element={<Arte />} />
            <Route path="/musica" element={<Musica />} />
            <Route path="/biografia" element={<Biografia />} />
            <Route path="/escritura" element={<Escritura />} />
        </Routes>
    );
}

export default AppRoutes;