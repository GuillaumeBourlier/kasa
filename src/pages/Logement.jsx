import React from "react";
import { useParams } from "react-router-dom";
import logementsData from "../assets/logement.json";
import Diaporama from "../composants/Diaporama";
import Collapse from "../composants/Collapse";
import Etoiles from "../composants/Etoiles";
import Erreur from "../pages/Erreur";

function Logement() {
  const { id } = useParams();
  const logement = logementsData.find((logement) => logement.id === id);

  if (!logement) {
    return <Erreur />;
  }

  return (
    <div className="logement">
      <Diaporama images={logement.pictures} />
      <div className="logement__details">
        <div className="logement__entete">
          <h1>{logement.title}</h1>
          <p>{logement.location}</p>
          <div className="logement__tags">
            {logement.tags.map((tag, index) => (
              <span key={index} className="tag">
                {tag}
              </span>
            ))}
          </div>
        </div>
        <div className="logement__hote">
          <div className="hote__info">
            <p>{logement.host.name}</p>
            <img src={logement.host.picture} alt={logement.host.name} />
          </div>
          <div className="logement__note">
            <Etoiles rating={logement.rating} />
          </div>
        </div>
        <div className="logement__collapse">
          <Collapse titre="Description" contenu={logement.description} />
          <Collapse
            titre="Équipements"
            contenu={
              <ul className="equipements__liste">
                {logement.equipments.map((equipement, index) => (
                  <li key={index}>{equipement}</li>
                ))}
              </ul>
            }
          />
        </div>
      </div>
    </div>
  );
}

export default Logement;