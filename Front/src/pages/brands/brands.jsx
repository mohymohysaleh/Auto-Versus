import React from 'react';
import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';
import { brands } from '../../data/data';
import { Link } from 'react-router-dom';

const Brands = () => {
  return (
    <div className="bg-gray-50 font-sans">
      <Header />
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold text-center mb-12 text-gray-800">Car Brands</h1>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8">
          {brands.map((brand, index) => (
            <Link key={index} to={`/brand/${brand.name.toLowerCase()}`} className="brand-logo bg-white p-4 rounded-lg shadow-sm flex flex-col items-center justify-center cursor-pointer hover:shadow-md">
              <img src={brand.logo} alt={brand.name} className="h-12 object-contain mb-3" />
              <span className="text-gray-700 font-medium">{brand.name}</span>
            </Link>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Brands;
