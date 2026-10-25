import { HashRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import QuienesSomos from "./pages/QuienesSomos";
import Contactanos from "./pages/Contactanos";
import MenuInferior from "./components/MenuInferior";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/quienes-somos" element={<QuienesSomos />} />
        <Route path="/contactanos" element={<Contactanos />} />
      </Routes>

      <MenuInferior />
    </HashRouter>
  );
}

export default App;
