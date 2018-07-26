import React from 'react';
import Link from 'gatsby-link';

import logo from './logo.svg';

class Brand extends React.Component {
  state = {
    isTop: true,
  }

  componentDidMount = () => {
    document.addEventListener('scroll', () => {
      if (window.scrollY > 64) {
        this.setState({ isTop: false });
      } else {
        this.setState({ isTop: true });
      }
    });
  }
  render() {
    return (
      <Link to="/" className={`brand ${!this.state.isTop ? 'brand--mini' : ''} `}>
        <div className="brand__logo">
          <img src={logo} alt="" className="brand__logo-img" />
        </div>
        <span className="brand__name">Petit Bouquin</span>
      </Link>
    );
  }
}

export default Brand;
