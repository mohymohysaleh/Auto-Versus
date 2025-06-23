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
    <div className="comparison-container">
      <div className="container">
        <div className="comparison-content">
          <h2>Compare Cars Side by Side</h2>
          <p>Make informed decisions by comparing specifications, features, and prices of different car models.</p>
          <div className="comparison-tool">
            <div className="select-container">
              <select value={selectedCar1} onChange={(e) => setSelectedCar1(e.target.value)}>
                <option value="">Select First Car</option>
                {cars.map((car) => (
                  <option key={car.id} value={car.id}>{car.name}</option>
                ))}
              </select>
            </div>
            <div className="select-container">
              <select value={selectedCar2} onChange={(e) => setSelectedCar2(e.target.value)}>
                <option value="">Select Second Car</option>
                {cars.map((car) => (
                  <option key={car.id} value={car.id}>{car.name}</option>
                ))}
              </select>
            </div>
            <button onClick={handleCompare} className="compare-button">Compare Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarComparison;
