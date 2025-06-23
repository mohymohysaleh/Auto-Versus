import React, { useState } from 'react';
import './comparison.css';

const CarComparison = () => {
  const [selectedCar1, setSelectedCar1] = useState('');
  const [selectedCar2, setSelectedCar2] = useState('');

  const cars = [
    { id: 'model1', name: 'Toyota Camry 2023' },
    { id: 'model2', name: 'Honda Accord 2023' },
    { id: 'model3', name: 'Tesla Model 3' },
  ];

  const handleCompare = () => {
    console.log(`Comparing ${selectedCar1} and ${selectedCar2}`);
  };

  return (
    <div className="comparison-section">
      <div className="comparison-container">
        <div className="comparison-header">
          <h2>Compare Cars Side by Side</h2>
          <p>Make informed decisions by comparing specifications, features, and prices</p>
        </div>
        
        <div className="comparison-tool">
          <div className="car-selector">
            <div className="selector-header">
              <span className="selector-number">01</span>
              <h3>First Vehicle</h3>
            </div>
            <select 
              value={selectedCar1} 
              onChange={(e) => setSelectedCar1(e.target.value)}
              className="car-select"
            >
              <option value="">Select First Car</option>
              {cars.map((car) => (
                <option key={car.id} value={car.id}>{car.name}</option>
              ))}
            </select>
          </div>
          
          <div className="vs-circle">
            <span>VS</span>
          </div>
          
          <div className="car-selector">
            <div className="selector-header">
              <span className="selector-number">02</span>
              <h3>Second Vehicle</h3>
            </div>
            <select 
              value={selectedCar2} 
              onChange={(e) => setSelectedCar2(e.target.value)}
              className="car-select"
            >
              <option value="">Select Second Car</option>
              {cars.map((car) => (
                <option key={car.id} value={car.id}>{car.name}</option>
              ))}
            </select>
          </div>
        </div>
        
        <button 
          onClick={handleCompare} 
          className="compare-action-btn"
          disabled={!selectedCar1 || !selectedCar2}
        >
          <span>Compare Vehicles</span>
          <i className="fas fa-chevron-right"></i>
        </button>
      </div>
    </div>
  );
};

export default CarComparison;