import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './header.css';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="site-header">
      <div className="header-container">
        <div className="logo-container">
          <i className="fas fa-car"></i>
          <h1>Auto<span>Vista</span></h1>
        </div>
        <nav className="main-nav">
          <Link to="/">Home</Link>
          <Link to="/brands">Brands</Link>
          <Link to="/models">Models</Link>
          <Link to="/news">News</Link>
          <Link to="/reviews">Reviews</Link>
          <Link to="/compare">Compare</Link>
        </nav>
        <div className="search-container">
          <div className="search-box">
            <input type="text" placeholder="Search cars..." />
            <i className="fas fa-search"></i>
          </div>
          <button className="mobile-menu-button" onClick={toggleMobileMenu}>
            <i className="fas fa-bars"></i>
          </button>
        </div>
      </div>
      <div className={`mobile-menu ${isMobileMenuOpen ? 'open' : ''}`}>
        <Link to="/">Home</Link>
        <Link to="/brands">Brands</Link>
        <Link to="/models">Models</Link>
        <Link to="/news">News</Link>
        <Link to="/reviews">Reviews</Link>
        <Link to="/compare">Compare</Link>
      </div>
    </header>
  );
};

export default Header;
