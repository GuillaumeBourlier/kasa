import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

function Carte({ id, titre, image }) {
  return (
    <div className="carte">
      <Link to={`/logement/${id}`}>
        <img src={image} alt={titre} />
        <h2>{titre}</h2>
      </Link>
    </div>
  );
}

Carte.propTypes = {
  titre: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default Carte;
