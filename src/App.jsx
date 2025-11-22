import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ChiSiamo from "./pages/ChiSiamo";
import Prodotti from "./pages/Prodotti";
import 'bootstrap/dist/css/bootstrap.min.css';
import DettaglioProdotto from "./pages/DettaglioProdotto";


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/chi-siamo" element={<ChiSiamo />} />
          <Route path="/prodotti" element={<Prodotti />} />
          <Route path="/dettaglio-prodotto" element={<DettaglioProdotto />} />
          <Route path="*"></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
