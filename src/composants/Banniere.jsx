import React from "react";
import PropTypes from "prop-types";

function Banniere({ image, titre, className = "" }) {
  return (
    <div
      className={`banniere ${className}`}
      style={{ backgroundImage: `url(${image})` }}
    >
      <div className="banniere__contenu" />
      {titre && <h1 className="banniere__titre">{titre}</h1>}
    </div>
  );
}

Banniere.propTypes = {
  image: PropTypes.string.isRequired,
  titre: PropTypes.string,
};

export default Banniere;
