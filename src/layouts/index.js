import React from 'react';
import PropTypes from 'prop-types';

import Header from '../components/Header';

import '../styles/main.scss';

const Layout = ({ children }) => (
  <div>
    {/* <Header /> */}
    {children()}
  </div>
);

Layout.propTypes = {
  children: PropTypes.func.isRequired,
};

export default Layout;

// eslint-disable-next-line
export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
