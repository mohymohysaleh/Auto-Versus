import React from 'react';
import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';
import './brands.css'
import { brands } from '../../data/data';
import { Link } from 'react-router-dom';

const Brands = () => {
  return (
    <div className="brands-page">
      <Header />
      <div className="container">
        <h1>Car Brands</h1>
        <div className="brands-grid">
          {brands.map((brand, index) => (
            <Link key={index} to={`/brand/${brand.name.toLowerCase()}`} className="brand-logo">
              <img src={brand.logo} alt={brand.name} />
              <span>{brand.name}</span>
            </Link>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Brands;
