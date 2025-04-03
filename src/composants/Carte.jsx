import React from "react";
import PropTypes from "prop-types";

function Carte({ titre, image, lien }) {
  return (
    <div className="carte">
      <a href={lien}>
        <img src={image} alt={titre} />
        <h2>{titre}</h2>
      </a>
    </div>
  );
}

Carte.propTypes = {
  titre: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  lien: PropTypes.string.isRequired,
};

export default Carte;