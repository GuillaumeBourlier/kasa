import { NavLink } from "react-router-dom";
import logoRouge from "../../public/logos/logorouge.svg";

function Entete() {
  return (
    <header className="en-tete">
      <NavLink to="/" className="logo">
        <img className="logo__image" src={logoRouge} alt="Logo du site Kasa" />
      </NavLink>

      <nav className="navigation">
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          Accueil
        </NavLink>
        <NavLink
          to="/a-propos"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          A Propos
        </NavLink>
      </nav>
    </header>
  );
}

export default Entete;
