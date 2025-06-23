import React from 'react';
import { brands } from '../../data/data';
import './brand.css';

const FeaturedBrands = () => {
  return (
    <section className="featured-brands">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Popular Car Brands</h2>
          <div className="section-divider"></div>
        </div>
        <div className="brands-grid">
          {brands.map((brand, index) => (
            <div key={index} className="brand-card">
              <div className="brand-logo-container">
                <img src={brand.logo} alt={brand.name} className="brand-logo" />
                <div className="brand-overlay">
                  <span className="brand-name">{brand.name}</span>
                  <button className="brand-explore-btn">Explore</button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="view-all">
          <button className="view-all-btn">
            View All Brands <i className="fas fa-arrow-right"></i>
          </button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedBrands;