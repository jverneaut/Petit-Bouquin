import React from 'react';
import Link from 'gatsby-link';

const Article = (props) => {
  const {
    title, excerpt, categories, first, path, cover,
  } = props;
  // TODO: Add cover image
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

export default Article;
