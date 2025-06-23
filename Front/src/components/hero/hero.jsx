import React from 'react';

const HeroSection = () => {
  return (
    <section className="hero-section">
      <div className="hero-content">
        <h1>Discover the World of <span>Automobiles</span></h1>
        <p>Your ultimate guide to car brands, models, specifications, and the latest automotive news.</p>
        <div className="hero-buttons">
          <button className="explore-button">Explore Brands</button>
          <button className="news-button">Latest News</button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
