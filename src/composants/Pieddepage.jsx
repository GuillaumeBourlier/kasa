import React from "react";
import logo from "/logos/logoblanc.svg";

function PiedDePage() {
  return (
    <div className="pied-de-page">
      <img src={logo} className="pied-de-page__logo" alt="Logo Kasa" />
      <p className="pied-de-page__copyright">
        © 2020 Kasa. All rights reserved
      </p>
    </div>
  );
}

export default PiedDePage;
