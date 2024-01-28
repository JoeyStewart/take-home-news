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
        <h2 className="single-title">{singleArticle.title}</h2>
        {singleArticle.urlToImage && <img className='image' src={singleArticle.urlToImage} alt={singleArticle.title} />}
        <h3 className="single-author">Author: {singleArticle.author}</h3> 
        <p className="single-date">{formattedDate}</p>
        <p className="single-content">{singleArticle.content}</p>
        <a className="single-url" href={singleArticle.url} target="_blank" rel="noopener noreferrer">Click to Read the Full Article!</a>
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