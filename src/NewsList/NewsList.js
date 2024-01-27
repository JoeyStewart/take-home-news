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
            id={newsArticle.id}
            author={newsArticle.author}
            title={newsArticle.title} 
            description={newsArticle.description} 
            content={newsArticle.content}
            image={newsArticle.urlToImage}
            url={newsArticle.url}
            showDetails={() => showDetails(newsArticle.id)}
          />
        ))}
      </div>
    );
  }
}


//Add propTypes