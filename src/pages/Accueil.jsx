import React from 'react';
import Bannière from '../composants/Banniere'; 

function Accueil() {
  return (
    <div>
      <Bannière
        titre="Chez vous, partout et ailleurs"
        image="/public/banniere/banniere.jpg"
      />
    </div>
  );
}

export default Accueil;
