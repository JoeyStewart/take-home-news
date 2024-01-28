import React from 'react';
import PropTypes from 'prop-types';

export default function NewsDetails({ singleArticle }) {
  if (!singleArticle) {
    return null;
  }

  const { title, description, content, date } = singleArticle;

  return (
    <div className="news-details">
      <h2>{title}</h2>
      <p>{description}</p>
      <p>{content}</p>
      <p>{date}</p>
    </div>
  );
}

NewsDetails.propTypes = {
    singleArticle: PropTypes.shape({
    title: PropTypes.string,
    description: PropTypes.string,
    content: PropTypes.string,
    date: PropTypes.string,
  }),
};