import { Link } from "react-router-dom";


function Erreur() {
  return (
    <div className="erreur">
      <h1 className="erreur__titre">404</h1>
      <h2 className="erreur__texte">Oups! La page que vous demandez n'existe pas.</h2>
      <Link to="/" className="erreur__lien">Retourner sur la page d'accueil</Link>
    </div>
  );
}

export default Erreur;
