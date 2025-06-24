import React, { useState } from 'react';
import { featuredCars } from '../../data/data';
import './model.css';

const FeaturedModels = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  const filters = ['All', 'New Releases', 'Electric', 'Luxury', 'Performance'];

  return (
    <section className="auto-models">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Featured Car Models</h2>
          <p className="section-subtitle">Explore our curated selection of exceptional vehicles</p>
        </div>
        
        <div className="model-filters">
          {filters.map(filter => (
            <button
              key={filter}
              className={`filter-btn ${activeFilter === filter ? 'active' : ''}`}
              onClick={() => setActiveFilter(filter)}
            >
              {filter}
            </button>
          ))}
        </div>
        
        <div className="models-grid">
          {featuredCars.map((car, index) => (
            <div key={index} className="model-card">
              <div className="model-badge">{car.type}</div>
              <div className="model-image">
                <img src={car.image} alt={car.name} />
                <div className="model-overlay">
                  <button className="quick-view-btn">
                    <i className="fas fa-eye"></i> Quick View
                  </button>
                </div>
              </div>
              <div className="model-details">
                <h3 className="model-name">{car.name}</h3>
                <div className="model-price">Starting at <span>{car.price}</span></div>
                <div className="model-specs">
                  <div className="spec-item">
                    <i className="fas fa-gas-pump"></i>
                    <span>{car.specs.engine}</span>
                  </div>
                  <div className="spec-item">
                    <i className="fas fa-horse-head"></i>
                    <span>{car.specs.power}</span>
                  </div>
                  <div className="spec-item">
                    <i className="fas fa-tachometer-alt"></i>
                    <span>{car.specs.mpg || car.specs.range}</span>
                  </div>
                </div>
                <div className="model-actions">
                  <button className="compare-btn">
                    <i className="fas fa-exchange-alt"></i> Compare
                  </button>
                  <button className="details-btn">
                    View Details <i className="fas fa-chevron-right"></i>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="view-all-models">
          <button className="view-all-btn">
            Browse All Models <i className="fas fa-arrow-right"></i>
          </button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedModels;