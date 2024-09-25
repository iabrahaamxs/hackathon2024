import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Consulta from "./pages/Consulta.jsx";
import FAQ from "./pages/FAQ.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import Donante from "./pages/Donante.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route path="/preguntas-frecuentes" element={<FAQ />} />
        <Route path="/preguntas-frecuentes" element={<FAQ />} />
        <Route path="/consulta" element={<Consulta />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/donante" element={<Donante />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
