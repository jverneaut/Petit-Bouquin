import React from 'react';
import Helmet from 'react-helmet';

import Brand from './Brand';
import Nav from './Nav';

const Header = () => (
  <div className="header">
    <Helmet>
      <meta name="theme-color" content="#2f2f36" />
    </Helmet>
    <Brand />
    {/* <Nav /> */}
  </div>
);

export default Header;
