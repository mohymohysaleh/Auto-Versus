import React from 'react';
import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';
import { newsArticles } from '../../data/data';

const News = () => {
  return (
    <div className="bg-gray-50 font-sans">
      <Header />
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold text-center mb-12 text-gray-800">Latest Automotive News</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {newsArticles.map((news, index) => (
            <div key={index} className="news-card bg-white rounded-lg overflow-hidden shadow-md">
              <div className="h-48 overflow-hidden">
                <img src={news.image} alt={news.title} className="w-full h-full object-cover" />
              </div>
              <div className="p-6">
                <span className="text-gray-500 text-sm">{news.date}</span>
                <h3 className="news-title text-xl font-bold text-gray-800 mb-3 hover:text-blue-600 transition duration-300">{news.title}</h3>
                <p className="text-gray-600 mb-4">{news.summary}</p>
                <a href="#" className="text-blue-600 font-medium hover:text-blue-800 flex items-center">
                  Read More <i className="fas fa-chevron-right ml-2"></i>
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
