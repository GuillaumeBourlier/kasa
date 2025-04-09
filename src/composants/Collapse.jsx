import { useState } from "react";
import PropTypes from "prop-types";

function Collapse({ titre, contenu }) {
  const [ouvert, setOuvert] = useState(false);

  const basculeOuverture = () => {
    console.log("Collapse clické");
    setOuvert(!ouvert);
  };

  return (
    <div className="collapse">
      <div className="collapse__entete" onClick={basculeOuverture}>
        <h2>{titre}</h2>
        <img
          src="/icones/flechehaut.svg"
          alt="Flèche"
          className={`fleche ${ouvert ? "ouvert" : ""}`}
        />
      </div>
      {}
      <div className={`collapse__contenu ${ouvert ? "visible" : ""}`}>
        {contenu}
      </div>
    </div>
  );
}

Collapse.propTypes = {
  titre: PropTypes.string.isRequired,
  contenu: PropTypes.node.isRequired,
};

export default Collapse;
