import React from 'react';
import Helmet from 'react-helmet';

import Header from '../components/Header';
import Post from '../components/Post';

// eslint-disable-next-line
require('katex/dist/katex.min.css');

export default function Template({ data }) {
  const { markdownRemark: post } = data;

  return (
    <div>
      <Helmet
        meta={[{ name: 'description', content: 'Salut' }]}
      >
        <link href="https://fonts.googleapis.com/css?family=Source+Serif+Pro:400" rel="stylesheet" />
        <title>Résumé complet de {post.frontmatter.title}</title>
      </Helmet>
      <Header />
      <Post post={post} />
    </div>
  );
}

// eslint-disable-next-line
export const query = graphql`
  query BlogPostByPath($path: String!) {
        markdownRemark(frontmatter: {path: {eq: $path } }) {
        html
      excerpt
      frontmatter {
        path
        title
      date(formatString: "DD MMMM, YYYY")
      link
      author
      year
      language
      categories
      cover
      featured
    }
  }
}
`;
