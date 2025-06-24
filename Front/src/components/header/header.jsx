import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/AutoVersus-preview.png'; // Import the image directly
import './header.css';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className={`auto-header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="header-container">
        <div className="header-logo">
          <Link to="/">
            <i className="fas fa-car"></i>
            <img src={logo} alt="AutoVersus" className="app-logo" />
          </Link>
        </div>

        <nav className={`header-nav ${isMobileMenuOpen ? 'open' : ''}`}>
          <div className="nav-links">
            <Link to="/" className="nav-link">Home</Link>
            <Link to="/brands" className="nav-link">Brands</Link>
            <Link to="/models" className="nav-link">Models</Link>
            <Link to="/news" className="nav-link">News</Link>
            <Link to="/reviews" className="nav-link">Reviews</Link>
            <Link to="/compare" className="nav-link highlight">Compare</Link>
          </div>
        </nav>

        <div className="header-actions">
          <div className="search-box">
            <input type="text" placeholder="Search cars..." />
            <button className="search-button">
              <i className="fas fa-search"></i>
            </button>
          </div>
          <button
            className={`mobile-menu-button ${isMobileMenuOpen ? 'open' : ''}`}
            onClick={toggleMobileMenu}
            aria-label="Toggle menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
