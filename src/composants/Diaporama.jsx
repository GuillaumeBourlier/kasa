import React, { useState } from "react";
import PropTypes from "prop-types";
import flecheGauche from "@/assets/icones/flechegauche.svg";
import flecheDroite from "@/assets/icones/flechedroite.svg";

function Diaporama({ images }) {
  const [indexActuel, setIndexActuel] = useState(0);

  const allerAuPrecedent = () => {
    const nouvelIndex = indexActuel === 0 ? images.length - 1 : indexActuel - 1;
    setIndexActuel(nouvelIndex);
  };

  const allerAuSuivant = () => {
    const nouvelIndex = indexActuel === images.length - 1 ? 0 : indexActuel + 1;
    setIndexActuel(nouvelIndex);
  };

  return (
    <div className="diaporama">
      <img
        src={images[indexActuel]}
        alt="Logement"
        className="diaporama__image"
      />
      {images.length > 1 && (
        <div className="diaporama__controles">
          <img
            src={flecheGauche}
            alt="Flèche gauche"
            className="diaporama__fleche"
            onClick={allerAuPrecedent}
          />
          <span className="diaporama__compteur">
            {indexActuel + 1} / {images.length}
          </span>
          <img
            src={flecheDroite}
            alt="Flèche droite"
            className="diaporama__fleche"
            onClick={allerAuSuivant}
          />
        </div>
      )}
    </div>
  );
}

Diaporama.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Diaporama;
