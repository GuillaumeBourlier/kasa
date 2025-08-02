import React from "react";
import Banniere from "@/composants/Banniere";
import Carte from "@/composants/Carte";
import logementsData from "@/assets/logement.json";
import imageAccueil from "@/assets/banniere/banniere.jpg";

function Accueil() {
  return (
    <div className="accueil">
      <Banniere
        image={imageAccueil}
        titre="Chez vous, partout et ailleurs"
      />
      <div className="cartes">
        {logementsData.map((logement) => (
          <Carte
            key={logement.id}
            id={logement.id}
            titre={logement.title}
            image={logement.cover}
            lien={`/logement/${logement.id}`}
          />
        ))}
      </div>
    </div>
  );
}

export default Accueil;
