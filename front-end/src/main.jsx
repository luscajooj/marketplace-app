import { BrowserRouter, Routes, Route } from "react-router-dom";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import Home from "./pages/Home.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      
      {/* Rota como create-product pois ainda não existe a página de listar produtos */}
      <Route path="/create-product" element={<Home />} />
    </Routes>
  </BrowserRouter>
);
