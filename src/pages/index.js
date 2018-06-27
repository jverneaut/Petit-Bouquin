import React from 'react';
import PropTypes, { arrayOf, shape } from 'prop-types';

import Article from '../components/Article';
import HomeMarketing from '../components/HomeMarketing';

const IndexPage = ({ data }) => {
  const { edges: books } = data.allMarkdownRemark;
  return (
    <div className="articles-container">
      {books.map((book, index) => {
        const {
          title, path, categories, cover,
        } = book.node.frontmatter;
        const { excerpt } = book.node;
        const first = index === 0;
        return (
          <Article
            key={path}
            path={path}
            excerpt={excerpt}
            title={title}
            categories={categories}
            first={first}
            cover={cover.childImageSharp.resolutions.src}
          />
        );
      })}
      <HomeMarketing />
    </div>
  );
};

IndexPage.propTypes = {
  data: shape({
    allMarkdownRemark: shape({
      edges: arrayOf(shape({
        node: shape({
          excerpt: PropTypes.string,
          frontmatter: shape({
            categories: arrayOf(PropTypes.string),
            cover: shape({
              childImageSharp: shape({
                height: PropTypes.number,
                src: PropTypes.string,
                srcSet: PropTypes.string,
                width: PropTypes.number,
              }),
            }),
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

export default IndexPage;

// eslint-disable-next-line
export const query = graphql`
  query IndexQuery {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      edges {
        node {
          html
          excerpt
          frontmatter {
            title
            path
            categories
            date(formatString: "DD MMMM, YYYY")
            cover {
              childImageSharp {
                resolutions(width: 400) {
                  width
                  height
                  src
                  srcSet
                }
              }
            }
          }
        }
      }
    }
  }
`;
