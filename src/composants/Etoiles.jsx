import React from "react";
import PropTypes from "prop-types";
import etoileActive from "@/assets/icones/etoileactive.svg";
import etoileInactive from "@/assets/icones/etoileinactive.svg";

function Etoiles({ rating }) {
  const totalEtoiles = 5;
  const etoilesPleines = Math.round(rating);

  return (
    <div className="etoiles">
      {[...Array(totalEtoiles)].map((_, index) => (
        <img
          key={index}
          src={index < etoilesPleines ? etoileActive : etoileInactive}
          alt={index < etoilesPleines ? "Étoile pleine" : "Étoile vide"}
          className="etoile"
        />
      ))}
    </div>
  );
}

Etoiles.propTypes = {
  rating: PropTypes.number.isRequired,
};

export default Etoiles;
