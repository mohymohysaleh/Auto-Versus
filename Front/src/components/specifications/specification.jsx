import React from 'react';
import './specification.css';

const CarSpecifications = () => {
  const specs = [
    { category: "Engine", value: "2.5L 4-cylinder, 203 hp" },
    { category: "Transmission", value: "8-speed automatic" },
    { category: "Fuel Economy", value: "28 city / 39 highway mpg" },
    { category: "0-60 mph", value: "7.9 seconds" },
    { category: "Starting Price", value: "$26,320" },
    { category: "Safety Features", value: "Toyota Safety Sense 2.5+ (Pre-Collision System, Lane Departure Alert, Dynamic Radar Cruise Control)" }
  ];

  return (
    <section className="auto-specs">
      <div className="container">
        <div className="specs-header">
          <h2 className="section-title">Detailed Specifications</h2>
          <div className="specs-tabs">
            <button className="specs-tab active">Overview</button>
            <button className="specs-tab">Performance</button>
            <button className="specs-tab">Features</button>
            <button className="specs-tab">Safety</button>
          </div>
        </div>
        
        <div className="specs-card">
          <div className="specs-header-info">
            <img src="https://cdn.motor1.com/images/mgl/6nn3Q/s1/2023-toyota-camry.jpg" alt="Toyota Camry" className="specs-car-image" />
            <div className="specs-title">
              <h3>2023 Toyota Camry</h3>
              <div className="specs-badges">
                <span className="specs-badge">Sedan</span>
                <span className="specs-badge">Hybrid Available</span>
                <span className="specs-badge highlight">Best Seller</span>
              </div>
            </div>
          </div>
          
          <div className="specs-table-container">
            <table className="specs-table">
              <tbody>
                {specs.map((spec, index) => (
                  <tr key={index}>
                    <td className="spec-category">
                      <div className="spec-icon">
                        <i className={`fas ${getSpecIcon(spec.category)}`}></i>
                      </div>
                      {spec.category}
                    </td>
                    <td className="spec-value">{spec.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );

  function getSpecIcon(category) {
    switch(category) {
      case 'Engine': return 'fa-cogs';
      case 'Transmission': return 'fa-exchange-alt';
      case 'Fuel Economy': return 'fa-gas-pump';
      case '0-60 mph': return 'fa-tachometer-alt';
      case 'Starting Price': return 'fa-tag';
      case 'Safety Features': return 'fa-shield-alt';
      default: return 'fa-info-circle';
    }
  }
};

export default CarSpecifications;