import React from 'react';
import Link from 'gatsby-link';

import logo from './logo.svg';

const Brand = () => (
  <Link to="/" className="brand">
    <img src={logo} alt="" className="brand__logo" />
    <span className="brand__name">Petit Bouquin</span>
  </Link>
);

export default Brand;
