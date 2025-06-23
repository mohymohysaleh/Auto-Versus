import React from 'react';
import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';
import { featuredCars } from '../../data/data';
import './models.css';

const Models = () => {
  return (
    <div className="models-page">
      <Header />
      <div className="container">
        <h1>Car Models</h1>
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
      <Footer />
    </div>
  );
};

export default Models;
