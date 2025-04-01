import { NavLink } from "react-router-dom";
import "../styles/global.scss";

function EnTête() {
  return (
    <header className="en-tete">
      <NavLink to="/" className="logo">
        <img className="logo__image" src="/logos/logorouge.svg" alt="Logo du site Kasa" />
      </NavLink>

      <nav className="navigation">
        <NavLink to="/" className={({ isActive }) => (isActive ? "active" : "")}>
          Accueil
        </NavLink>
        <NavLink to="/a-propos" className={({ isActive }) => (isActive ? "active" : "")}>
          À Propos
        </NavLink>
      </nav>
    </header>
  );
}

export default EnTête;