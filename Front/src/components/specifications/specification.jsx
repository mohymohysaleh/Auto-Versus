import React from 'react';
import './specification.css';

const CarSpecifications = () => {
  return (
    <section className="car-specifications">
      <div className="container">
        <h2>Detailed Specifications</h2>
        <div className="specs-container">
          <div className="car-header">
            <img src="https://cdn.motor1.com/images/mgl/6nn3Q/s1/2023-toyota-camry.jpg" alt="Toyota Camry" />
            <div>
              <h3>Toyota Camry 2023</h3>
              <div className="car-tags">
                <span>Sedan</span>
                <span>Hybrid Available</span>
                <span>Best Seller</span>
              </div>
            </div>
          </div>
          <div className="specs-table-container">
            <table className="specs-table">
              <tbody>
                <tr>
                  <td>Engine</td>
                  <td>2.5L 4-cylinder, 203 hp</td>
                </tr>
                <tr>
                  <td>Transmission</td>
                  <td>8-speed automatic</td>
                </tr>
                <tr>
                  <td>Fuel Economy</td>
                  <td>28 city / 39 highway mpg</td>
                </tr>
                <tr>
                  <td>0-60 mph</td>
                  <td>7.9 seconds</td>
                </tr>
                <tr>
                  <td>Starting Price</td>
                  <td>$26,320</td>
                </tr>
                <tr>
                  <td>Safety Features</td>
                  <td>Toyota Safety Sense 2.5+ (Pre-Collision System, Lane Departure Alert, Dynamic Radar Cruise Control)</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CarSpecifications;
