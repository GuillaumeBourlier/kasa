import { NavLink } from "react-router-dom";

function EnTete() {
  return (
    <header className="en-tete">
      <NavLink to="/" className="logo">
        <img
          className="logo__image"
          src="/logos/logorouge.svg"
          alt="Logo du site Kasa"
        />
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

export default EnTete;
