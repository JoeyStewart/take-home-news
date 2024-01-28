import Card from "../Card/Card.js";
import './NewsList.css'
import PropTypes from 'prop-types';

export default function NewsList({ newsArticles, showDetails }) {
  if (!newsArticles || newsArticles.length === 0) {
    return null;
  } else {
    return (
      <div className="news-container">
        {newsArticles.map((newsArticle) => (
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
    );
  }
}

NewsList.propTypes = {
  newsArticles: PropTypes.array.isRequired,
  showDetails: PropTypes.func.isRequired,
};

//Add propTypes