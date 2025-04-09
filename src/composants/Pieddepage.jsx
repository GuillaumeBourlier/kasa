import React from "react";
import logo from "/logos/logoblanc.svg";

function PiedDePage() {
  return (
    <div className="pied-de-page">
      <img src={logo} className="pied-de-page__logo" alt="Logo Kasa" />
      <p className="pied-de-page__copyright">
        <span className="copyright-part1">© 2020 Kasa. All</span>
        <span className="copyright-part2"> rights reserved</span>
      </p>
    </div>
  );
}

export default PiedDePage;
