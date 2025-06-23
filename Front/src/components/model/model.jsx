import React from 'react';
import { featuredCars } from '../../data/data';
import './model.css'

const FeaturedModels = () => {
  return (
    <section className="featured-models">
      <div className="container">
        <div className="models-header">
          <h2>Featured Models</h2>
          <div className="filter-buttons">
            <button className="filter-button active">New Releases</button>
            <button className="filter-button">Electric</button>
            <button className="filter-button">Luxury</button>
          </div>
        </div>
        <div className="models-grid">
          {featuredCars.map((car, index) => (
            <div key={index} className="car-card">
              <div className="car-image">
                <img src={car.image} alt={car.name} />
              </div>
              <div className="car-details">
                <div className="car-title">
                  <h3>{car.name}</h3>
                  <span className="car-type">{car.type}</span>
                </div>
                <p>Starting at <span>{car.price}</span></p>
                <div className="car-specs">
                  <div className="spec-item">
                    <i className="fas fa-gas-pump"></i>
                    <span>{car.specs.engine}</span>
                  </div>
                  <div className="spec-item">
                    <i className="fas fa-bolt"></i>
                    <span>{car.specs.power}</span>
                  </div>
                  <div className="spec-item">
                    <i className="fas fa-tachometer-alt"></i>
                    <span>{car.specs.mpg || car.specs.range}</span>
                  </div>
                </div>
                <button className="view-details-button">View Details</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedModels;
