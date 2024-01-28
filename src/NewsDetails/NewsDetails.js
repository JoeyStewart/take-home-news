import React from 'react';
import PropTypes from 'prop-types';

export default function NewsDetails({ newsDetails }) {
  return (
    <div className="news-details">
      <h2>{newsDetails.title}</h2>
      <p>{newsDetails.description}</p>
      <p>{newsDetails.content}</p>
      <p>{newsDetails.date}</p>
    </div>
  );
}

// Add more propTypes for other details when necessary 
NewsDetails.propTypes = {
  newsDetails: PropTypes.shape({
    title: PropTypes.string,
    description: PropTypes.string,
    content: PropTypes.string,
    date: PropTypes.string,
  }).isRequired,
};