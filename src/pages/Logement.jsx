import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Diaporama from "@/composants/Diaporama";
import Collapse from "@/composants/Collapse";
import Etoiles from "@/composants/Etoiles";
import Erreur from "@/pages/Erreur";
import logementsData from "@/assets/logement.json";

function Logement() {
  const { id } = useParams();
  const [logement, setLogement] = useState(null);
  const [chargement, setChargement] = useState(true);
  const [erreur, setErreur] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      const logementTrouvé = logementsData.find((item) => item.id === id);
      if (!logementTrouvé) {
        setErreur(true);
      }
      setLogement(logementTrouvé);
      setChargement(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, [id]);

  if (chargement) {
    return (
      <div className="zone-chargement">
        <div className="chargement" />
        <p>Chargement du logement...</p>
      </div>
    );
  }

  if (erreur || !logement) {
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
            {logement.tags?.map((tag, index) => (
              <span key={index} className="tag">
                {tag}
              </span>
            ))}
          </div>
        </div>
        <div className="logement__hote">
          <div className="hote__info">
            <div className="hote__info-text">
              {logement.host?.name?.split(" ").map((part, index) => (
                <p key={index}>{part}</p>
              ))}
            </div>
            <img
              src={logement.host?.picture}
              alt={logement.host?.name}
              role="img"
              aria-label={`Portrait de ${logement.host?.name}`}
            />
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
                {logement.equipments?.map((equipement, index) => (
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
