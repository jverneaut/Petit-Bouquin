import React from 'react';
import Link from 'gatsby-link';

const NotFoundPage = () => (
  <div className="article-container">
    <h1>Oups ! Rien à voir ici...</h1>
    Aucune page ne se trouve à cette adresse.
    <br />
    <Link to="/">Retour à la liste des livres disponibles</Link>
  </div>
);

export default NotFoundPage;
