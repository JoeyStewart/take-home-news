import React from 'react';
import PropTypes from 'prop-types';
import './NewsDetails.css'

export default function NewsDetails({ singleArticle }) {
  if (!singleArticle) {
    return null;
  }
  const rawDate = new Date(singleArticle.publishedAt);
  const formattedDate = `${rawDate.getFullYear()}-${String(rawDate.getMonth() + 1).padStart(2, '0')}-${String(rawDate.getDate()).padStart(2, '0')}`;
  return (
    <div className="news-details-container">
      <div className="news-details">
        <h2>{singleArticle.title}</h2>
        <p>{singleArticle.description}</p>
        <p>{singleArticle.content}</p>
        <a href={singleArticle.url} target="_blank" rel="noopener noreferrer">Click to Read the Full Article!</a>
        <p>{formattedDate}</p>
      </div>
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