import React from 'react';

const Post = ({ post }) => {
  const { excerpt, frontmatter, html } = post;
  const {
    author, categories, cover, date, featured, language, link, path, title, year,
  } = frontmatter;
  return (
    <div>
      <div className="hero">
        <div className="hero__info">
          <div className="hero__title">{title}</div>
          <div className="hero__author">{author}</div>
        </div>
        <div className="hero__featured">
          <img src={featured} alt="" className="hero__featured-img" />
        </div>
      </div>
      <div className="article" dangerouslySetInnerHTML={{ __html: html }} />
    </div>
  );
};

export default Post;
