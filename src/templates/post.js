import React from 'react';
import Helmet from 'react-helmet';
import { DiscussionEmbed } from 'disqus-react';
import PropTypes, { arrayOf, shape } from 'prop-types';

import BookPresentation from '../components/BookPresentation';
import Marketing from '../components/Marketing';

// eslint-disable-next-line
require('katex/dist/katex.min.css');

export default function Template({ data }) {
  const { markdownRemark: post } = data;
  const disqusShortname = 'petit-bouquin';
  const disqusConfig = {
    identifier: post.frontmatter.path,
    title: post.frontmatter.title,
  };

  return (
    <div className="article-container">
      <Helmet
        meta={[
          { name: 'description', content: `Résumé complet de ${post.frontmatter.title} — ${post.excerpt}` },
        ]}
      >
        <title>Résumé complet de {post.frontmatter.title} | Petit Bouquin</title>
      </Helmet>
      <BookPresentation
        title={post.frontmatter.title}
        cover={post.frontmatter.cover}
        link={post.frontmatter.link}
        language={post.frontmatter.language}
        author={post.frontmatter.author}
        year={post.frontmatter.year}
        categories={post.frontmatter.categories}
      />
      <div dangerouslySetInnerHTML={{ __html: post.html }} />
      <Marketing link={post.frontmatter.link} title={post.frontmatter.title} />
      <DiscussionEmbed shortname={disqusShortname} config={disqusConfig} />
    </div>
  );
}

Template.propTypes = {
  data: shape({
    allMarkdownRemark: shape({
      edges: arrayOf(shape({
        node: shape({
          excerpt: PropTypes.string.isRequired,
          frontmatter: shape({
            categories: arrayOf(PropTypes.string).isRequired,
            date: PropTypes.string.isRequired,
            path: PropTypes.string.isRequired,
            title: PropTypes.string.isRequired,
            link: PropTypes.string.isRequired,
            author: PropTypes.string.isRequired,
            year: PropTypes.string.isRequired,
            language: PropTypes.string.isRequired,
            cover: PropTypes.string.isRequired,
          }),
          html: PropTypes.string.isRequired,
        }).isRequired,
      })).isRequired,
    }).isRequired,
  }).isRequired,
};

// eslint-disable-next-line
export const query = graphql`
  query BlogPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
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
      }
    }
  }
`;
