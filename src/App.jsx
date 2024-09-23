import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Consult from "./pages/Consult.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route path="/consulta" element={<Consult />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
