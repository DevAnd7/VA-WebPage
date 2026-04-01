import { Routes, Route } from "react-router-dom";

import Home from "./Pages/Home/Home";
import Arte from "./Pages/Arte";
import Musica from "./Pages/Musica";

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/arte" element={<Arte />} />
            <Route path="/musica" element={<Musica />} />
        </Routes>
    );
}

export default AppRoutes;