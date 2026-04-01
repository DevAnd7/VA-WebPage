import { Routes, Route } from "react-router-dom";

import Home from "./Pages/Home/Home";
import Obra from "./Pages/Obra";
import Musica from "./Pages/Musica";

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/obra" element={<Obra />} />
            <Route path="/musica" element={<Musica />} />
        </Routes>
    );
}

export default AppRoutes;