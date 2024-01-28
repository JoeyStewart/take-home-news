import React, { useState, useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import NewsList from '../NewsList/NewsList.js';
import NewsDetails from '../NewsDetails/NewsDetails.js';
import './App.css';

function App() {
  const [newsArticles, setNewsArticles] = useState([]);
  const [singleArticle, setSingleArticle] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetch('https://newsapi.org/v2/everything?domains=wsj.com&apiKey=676dc2532ad3454b8903fce9bd2bc8a5')
      .then(response => response.json())
      .then(data => setNewsArticles(data.articles))
      .catch(error => console.error('Error fetching news articles:', error));
  }, []);

  function showDetails(title){
    fetch(`https://newsapi.org/v2/everything?q=${title}&domains=wsj.com&apiKey=676dc2532ad3454b8903fce9bd2bc8a5`)
      .then(response => response.json())
      .then(data => {
        if (data.articles && data.articles.length > 0) {
          const selectedNews = data.articles[0];
          setSingleArticle(selectedNews);
          navigate(`/details/${title}`, { state: { newsDetails: selectedNews } });
        } else {
          console.error('Article not found.');
        }
      })
      .catch(error => console.error('Error fetching news articles:', error));
  };
  
  return (
    <main className='App'>
      <h1 className='app-title'>The News Dot Com</h1>
      <Routes>
        <Route
          path='/'
          element={<NewsList newsArticles={newsArticles} showDetails={showDetails} />}
        />
        <Route
          path='/details/:title'
          element={<NewsDetails singleArticle={singleArticle} />}
        />
      </Routes>
    </main>
  );
}

export default App;

