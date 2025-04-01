import React from "react";
import { Routes, Route } from "react-router-dom";
import Accueil from "./pages/Accueil";
import Apropos from "./pages/Apropos";
import Erreur from "./pages/Erreur";
import Entête from "./composants/Entete";
import Pieddepage from "./composants/PiedDePage";

function App() {
  return (
    <div>
      <Entête />
      <Routes>
        {" "}
        {}
        <Route path="/" element={<Accueil />} />
        <Route path="/a-propos" element={<Apropos />} />
        <Route path="*" element={<Erreur />} />
      </Routes>
      <Pieddepage />
    </div>
  );
}

export default App;
