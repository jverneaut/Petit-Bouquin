import React from 'react';
import PropTypes, { arrayOf, shape } from 'prop-types';

import Article from '../components/Article';

const Tags = ({ pathContext, data }) => {
  const { category } = pathContext;
  const { edges, totalCount } = data.allMarkdownRemark;
  const categoryHeader = `${totalCount} livre${
    totalCount === 1 ? '' : 's'
  } dans la catégorie ${category}`;

  return (
    <div>
      <div className="article-container">
        <h1>{categoryHeader}</h1>
        <br />
      </div>
      <div className="articles-container">
        {edges.map((book) => {
          const { title, path, categories } = book.node.frontmatter;
          const { excerpt } = book.node;
          return (
            <Article
              key={path}
              path={path}
              excerpt={excerpt}
              title={title}
              categories={categories}
              first={false}
            />
          );
        })}
      </div>
    </div>
  );
};


Tags.propTypes = {
  pathContext: shape({
    category: PropTypes.string,
  }).isRequired,
  data: shape({
    allMarkdownRemark: shape({
      edges: arrayOf(shape({
        node: shape({
          excerpt: PropTypes.string,
          frontmatter: shape({
            categories: arrayOf(PropTypes.string),
            date: PropTypes.string,
            path: PropTypes.string,
            title: PropTypes.string,
          }),
          html: PropTypes.string,
        }),
      })),
    }),
  }).isRequired,
};


export default Tags;

// eslint-disable-next-line
export const query = graphql`
  query TagPage($category: String) {
    allMarkdownRemark(
      limit: 2000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { categories: { in: [$category] } } }
    ) {
      totalCount
      edges {
        node {
          html
          excerpt
          frontmatter {
            title
            path
            categories
            date(formatString: "DD MMMM, YYYY")
          }
        }
      }
    }
  }
`;
