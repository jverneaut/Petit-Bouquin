const path = require('path');
const _ = require('lodash');

exports.createPages = ({ boundActionCreators, graphql }) => {
  const { createPage } = boundActionCreators;

  const blogPostTemplate = path.resolve('src/templates/post.js');
  const tagTemplate = path.resolve('src/templates/categories.js');

  return graphql(`
    {
      allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___date] }
        limit: 2000
      ) {
        edges {
          node {
            html
            frontmatter {
              title
              path
              categories
              date
            }
          }
        }
      }
    }
  `).then((result) => {
    if (result.errors) {
      return Promise.reject(result.errors);
    }

    const posts = result.data.allMarkdownRemark.edges;

    posts.forEach(({ node }) => {
      createPage({
        path: node.frontmatter.path,
        component: blogPostTemplate,
      });
    });

    let categories = [];
    _.each(posts, (edge) => {
      if (_.get(edge, 'node.frontmatter.categories')) {
        categories = categories.concat(edge.node.frontmatter.categories);
      }
    });
    categories = _.uniq(categories);

    categories.forEach((category) => {
      createPage({
        path: `/categories/${_.kebabCase(category)}/`,
        component: tagTemplate,
        context: {
          category,
        },
      });
    });
  });
};
