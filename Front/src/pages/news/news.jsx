import React from 'react';
import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';
import { newsArticles } from '../../data/data';
import './news.css';

const News = () => {
  return (
    <div className="news-page">
      <Header />
      <div className="container">
        <h1>Latest Automotive News</h1>
        <div className="news-grid">
          {newsArticles.map((news, index) => (
            <div key={index} className="news-card">
              <div className="news-image">
                <img src={news.image} alt={news.title} />
              </div>
              <div className="news-details">
                <span className="news-date">{news.date}</span>
                <h3 className="news-title">{news.title}</h3>
                <p>{news.summary}</p>
                <a href="#" className="read-more">
                  Read More <i className="fas fa-chevron-right"></i>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default News;
