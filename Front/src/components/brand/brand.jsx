import React from 'react';
import { brands } from '../../data/data';
import './brand.css';

const FeaturedBrands = () => {
  return (
    <section className="featured-brands">
      <div className="container">
        <h2>Popular Car Brands</h2>
        <div className="brands-grid">
          {brands.map((brand, index) => (
            <div key={index} className="brand-logo">
              <img src={brand.logo} alt={brand.name} />
              <span>{brand.name}</span>
            </div>
          ))}
        </div>
        <div className="view-all">
          <button>
            View All Brands <i className="fas fa-chevron-right"></i>
          </button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedBrands;
