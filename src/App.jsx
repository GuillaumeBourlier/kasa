import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Accueil from './pages/Accueil';
import Apropos from './pages/Apropos'; 
import Entête from './composants/Entete';
import Pieddepage from './composants/PiedDePage';  

function App() {
  return (
    <div>
      <Entête />
      <Routes>  {/* Ici, tu définis les routes mais pas de Router */}
        <Route path="/" element={<Accueil />} />
        <Route path="/a-propos" element={<Apropos />} />
      </Routes>
      <Pieddepage />
    </div>
  );
}

export default App;