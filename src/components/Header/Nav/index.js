import React from 'react';
import Link from 'gatsby-link';

const Nav = () => (
  <ul className="nav">
    <li className="nav__item"><Link to="/" className="nav__link">Accueil</Link></li>
    <li className="nav__item"><Link to="/about" className="nav__link">A propos</Link></li>
  </ul>
);

export default Nav;
