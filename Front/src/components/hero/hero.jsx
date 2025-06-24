import React from 'react';
import './hero.css';

const HeroSection = () => {
  return (
    <section className="auto-hero">
      <div className="hero-background"></div>
      <div className="hero-content">
        <div className="hero-text">
          <h1 className="hero-title">
            <span className="title-line">Discover the</span>
            <span className="title-line highlight">Automotive Universe</span>
          </h1>
          <p className="hero-subtitle">
            Compare, explore, and dive deep into the world of cars with the most comprehensive automotive encyclopedia
          </p>
          <div className="hero-cta">
            <button className="cta-primary">
              Start Comparing <i className="fas fa-chevron-right"></i>
            </button>
            <button className="cta-secondary">
              <i className="fas fa-play"></i> Watch Demo
            </button>
          </div>
        </div>
        <div className="hero-stats">
          <div className="stat-card">
            <div className="stat-number">10,000+</div>
            <div className="stat-label">Car Models</div>
          </div>
          <div className="stat-card">
            <div className="stat-number">150+</div>
            <div className="stat-label">Brands</div>
          </div>
          <div className="stat-card">
            <div className="stat-number">Daily</div>
            <div className="stat-label">Updates</div>
          </div>
        </div>
      </div>
      <div className="hero-scroll">
        <span>Scroll to explore</span>
        <div className="scroll-icon"></div>
      </div>
    </section>
  );
};

export default HeroSection;