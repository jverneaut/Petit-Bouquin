import React from 'react';
import Link from 'gatsby-link';
import PropTypes, { arrayOf } from 'prop-types';

const Article = (props) => {
  const {
    title, excerpt, categories, first, path,
  } = props;
  return (
    <div className={`article ${first ? 'article--first' : ''}`}>
      {first &&
        <span>Nouveauté</span>}
      <Link to={path} className="article__title">
        {title}
      </Link>
      <Link to={path} className="article__excerpt">
        {excerpt}
      </Link>
      <ul className="article__categories">
        {categories.map(category => (
          <li key={category} className="article__category">
            <Link className="article__category-link" to={`/categories/${category}`}>
              {category}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

Article.propTypes = {
  title: PropTypes.string.isRequired,
  excerpt: PropTypes.string.isRequired,
  categories: arrayOf(PropTypes.string).isRequired,
  first: PropTypes.bool.isRequired,
  path: PropTypes.string.isRequired,
};

export default Article;
