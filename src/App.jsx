import React from "react";
import { Routes, Route } from "react-router-dom";
import Accueil from "./pages/Accueil";
import Apropos from "./pages/APropos";
import Erreur from "./pages/Erreur";
import Logement from "./pages/Logement";
import Entete from "./composants/Entete";
import Pieddepage from "./composants/Pieddepage";

function App() {
  return (
    <>
      <div className="disposition">
        <Entete />
        <main className="contenu">
          <Routes>
            <Route path="/" element={<Accueil />} />
            <Route path="/a-propos" element={<Apropos />} />
            <Route path="/logement/:id" element={<Logement />} />
            <Route path="/erreur" element={<Erreur />} />
            <Route path="*" element={<Erreur />} />
          </Routes>
        </main>
        <Pieddepage />
      </div>
    </>
  );
}

export default App;
