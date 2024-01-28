import React from 'react';
import PropTypes from 'prop-types';
import './NewsDetails.css'

export default function NewsDetails({ singleArticle }) {
  if (!singleArticle) {
    return null;
  }

  const slicedDate = singleArticle.publishedAt.slice(0, 10);

  return (
    <div className="news-details-container">
      <div className="news-details">
        <h2 className="single-title">{singleArticle.title}</h2>
        {singleArticle.urlToImage && <img className='image' src={singleArticle.urlToImage} alt={singleArticle.title} />}
        <h3 className="single-author">Author: {singleArticle.author}</h3> 
        <p className="single-date">{slicedDate}</p>
        <p className="single-content">{singleArticle.content}</p>
        <a className="single-url" href={singleArticle.url} target="_blank" rel="noopener noreferrer">Click to Read the Full Article!</a>
      </div>
    </div>
  );
}

NewsDetails.propTypes = {
  singleArticle: PropTypes.shape({
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    publishedAt: PropTypes.string.isRequired, 
    author: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    urlToImage: PropTypes.string.isRequired, 
  }),
};