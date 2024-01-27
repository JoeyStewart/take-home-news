import React, { useState, useEffect } from 'react';

import NewsList from '../NewsList/NewsList.js';
import './App.css';
// import NewsDetails from '../NewsDetails/NewsDetails.js';

function App() {
  const [newsArticles, setNewsArticles] = useState([]);

  const fetchNewsArticles = () => {
    fetch('https://newsapi.org/v2/everything?domains=wsj.com&apiKey=676dc2532ad3454b8903fce9bd2bc8a5')
      .then(response => response.json())
      .then(data => setNewsArticles(data.articles))
      .catch(error => console.error('Error fetching news articles:', error));
  };

  useEffect(() => {
    fetchNewsArticles();
  }, []);

  const backToMain = () => {
    document.body.style.overflow = 'visible';
  };

  return (
    <main className='App'>
      <header>
        <h1 className='news-header' style={{ cursor: 'pointer' }} onClick={backToMain}>
          News App
        </h1>
      </header>
      <NewsList newsArticles={newsArticles} />
    </main>
  );
}

export default App;
