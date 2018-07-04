import React from 'react';
import Link from 'gatsby-link';
import PropTypes, { arrayOf } from 'prop-types';

const BookPresentation = (props) => {
  const {
    title, cover, link, language, author, year, categories,
  } = props;
  return (
    <div className="book-presentation">
      <h1 className="book-presentation__title">{title}</h1>
      <ul className="book-presentation__categories">
        {categories.map(category => (
          <li key={category} className="book-presentation__category">
            <Link className="book-presentation__category-link" to={`/categories/${category}`}>
              {category}
            </Link>
          </li>
        ))}
      </ul>
      <div className="book-presentation__group">

        <a href={link} className="book-presentation__img-wrapper">
          <img src={cover} className="book-presentation__cover" alt="" />
        </a>
        <div className="book-presentation__informations">
          <ul className="book-presentation__informations-list">
            <li className="book-presentation__information">Auteur : <em>{author}</em></li>
            <li className="book-presentation__information">Langue : <em>{language}</em></li>
            <li className="book-presentation__information">Année : <em>{year}</em></li>
          </ul>
          <a href={link} className="book-presentation__link">
            Voir ce livre sur Amazon
          </a>
        </div>

      </div>
    </div>
  );
};

BookPresentation.propTypes = {
  title: PropTypes.string.isRequired,
  cover: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  language: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  year: PropTypes.string.isRequired,
  categories: arrayOf(PropTypes.string).isRequired,
};

export default BookPresentation;
