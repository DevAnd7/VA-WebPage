import { Routes, Route } from "react-router-dom";

import Home from "./Pages/Home/Home";
import Pintura from "./Pages/Pintura";
import Murales from "./Pages/Murales";
import Obra from "./Pages/Obra";

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/pintura" element={<Pintura />} />
            <Route path="/murales" element={<Murales />} />
            <Route path="/obra" element={<Obra />} />
        </Routes>
    );
}

export default AppRoutes;