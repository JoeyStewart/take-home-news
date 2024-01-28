import Card from "../Card/Card.js";
import './NewsList.css'
import PropTypes from 'prop-types';
import React, { useState } from 'react';

export default function NewsList({ newsArticles, showDetails }) {
    const [searchInput, setSearchInput] = useState('');
    const filteredArticles = newsArticles.filter((article) =>
    article.title.toLowerCase().includes(searchInput.toLowerCase())
  );

  return (
    <div>
      <div className="search-container">
        <input
          className="article-input"
          name="article"
          type="text"
          placeholder="Search articles..."
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
        />
      </div>
      <div className="news-container">
        {filteredArticles.map((newsArticle) => (
          <Card
            key={newsArticle.title}
            title={newsArticle.title}
            description={newsArticle.description}
            content={newsArticle.content}
            date={newsArticle.publishedAt}
            image={newsArticle.urlToImage}
            author={newsArticle.author}
            url={newsArticle.url}
            showDetails={() => showDetails(newsArticle.title)}
          />
        ))}
      </div>
    </div>
  );
}


NewsList.propTypes = {
  newsArticles: PropTypes.array.isRequired,
  showDetails: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired, 
  author: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  urlToImage: PropTypes.string.isRequired, 
};
