import React from "react";
import PropTypes from "prop-types";

function Banniere({ image, titre }) {
  return (
    <div
      className="banniere"
      style={{
        backgroundImage: `url(${image})`,
      }}
    >
      {titre && <h1 className="banniere__titre">{titre}</h1>}
    </div>
  );
}

Banniere.propTypes = {
  image: PropTypes.string.isRequired,
  titre: PropTypes.string,
};

export default Banniere;

