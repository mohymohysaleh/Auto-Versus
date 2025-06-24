import React from 'react';
import './footer.css';

const Footer = () => {
  return (
    <footer className="auto-footer">
      <div className="footer-wave"></div>
      <div className="footer-container">
        <div className="footer-main">
          <div className="footer-brand">
            <div className="footer-logo">
              <i className="fas fa-car"></i>
              <span>AutoVersus</span>
            </div>
            <p className="footer-tagline">Your ultimate automotive encyclopedia and comparison platform</p>
            <div className="footer-social">
              <a href="#" className="social-icon" aria-label="Facebook">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="social-icon" aria-label="Twitter">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="social-icon" aria-label="Instagram">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" className="social-icon" aria-label="YouTube">
                <i className="fab fa-youtube"></i>
              </a>
            </div>
          </div>

          <div className="footer-links">
            <h3 className="footer-heading">Quick Links</h3>
            <ul>
              <li><a href="#">Home</a></li>
              <li><a href="#">Brands</a></li>
              <li><a href="#">Models</a></li>
              <li><a href="#">News</a></li>
              <li><a href="#">Reviews</a></li>
              <li><a href="#">Compare</a></li>
            </ul>
          </div>

          <div className="footer-brands">
            <h3 className="footer-heading">Popular Brands</h3>
            <div className="brand-grid">
              <a href="#" className="brand-pill">Toyota</a>
              <a href="#" className="brand-pill">Honda</a>
              <a href="#" className="brand-pill">Ford</a>
              <a href="#" className="brand-pill">BMW</a>
              <a href="#" className="brand-pill">Mercedes</a>
              <a href="#" className="brand-pill">Tesla</a>
            </div>
          </div>

          <div className="footer-contact">
            <h3 className="footer-heading">Contact Us</h3>
            <div className="contact-item">
              <i className="fas fa-map-marker-alt"></i>
              <span>123 Auto Street, Detroit, MI 48201</span>
            </div>
            <div className="contact-item">
              <i className="fas fa-phone-alt"></i>
              <span>(555) 123-4567</span>
            </div>
            <div className="contact-item">
              <i className="fas fa-envelope"></i>
              <span>info@autoversus.com</span>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-legal">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
            <a href="#">Cookie Policy</a>
          </div>
          <div className="footer-copyright">
            &copy; {new Date().getFullYear()} AutoVersus. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;