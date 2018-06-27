import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

import Header from '../components/Header';

import '../styles/main.scss';

const Layout = ({ children }) => (
  <div>
    <Helmet
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' },
      ]}
    />
    <Header />
    <div>
      {children()}
    </div>
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
