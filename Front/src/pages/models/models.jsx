import React from 'react';
import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';
import { featuredCars } from '../../data/data';

const Models = () => {
  return (
    <div className="bg-gray-50 font-sans">
      <Header />
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold text-center mb-12 text-gray-800">Car Models</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {featuredCars.map((car, index) => (
            <div key={index} className="car-card bg-white rounded-lg overflow-hidden shadow-md transition duration-300">
              <div className="h-48 overflow-hidden">
                <img src={car.image} alt={car.name} className="w-full h-full object-cover" />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-bold text-gray-800">{car.name}</h3>
                  <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">{car.type}</span>
                </div>
                <p className="text-gray-600 mb-4">Starting at <span className="font-bold text-gray-800">{car.price}</span></p>
                <div className="grid grid-cols-2 gap-2 text-sm text-gray-600 mb-4">
                  <div className="flex items-center">
                    <i className="fas fa-gas-pump mr-2 text-blue-500"></i>
                    <span>{car.specs.engine}</span>
                  </div>
                  <div className="flex items-center">
                    <i className="fas fa-bolt mr-2 text-blue-500"></i>
                    <span>{car.specs.power}</span>
                  </div>
                  <div className="flex items-center">
                    <i className="fas fa-tachometer-alt mr-2 text-blue-500"></i>
                    <span>{car.specs.mpg || car.specs.range}</span>
                  </div>
                </div>
                <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg font-medium transition duration-300">View Details</button>
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
