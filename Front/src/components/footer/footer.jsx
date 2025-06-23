import React from 'react';
import './footer.css';

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <h3>
              <i className="fas fa-car"></i> AutoVista
            </h3>
            <p>Your comprehensive guide to the world of automobiles, from classic cars to the latest electric vehicles.</p>
            <div className="social-links">
              <a href="#"><i className="fab fa-facebook-f"></i></a>
              <a href="#"><i className="fab fa-twitter"></i></a>
              <a href="#"><i className="fab fa-instagram"></i></a>
              <a href="#"><i className="fab fa-youtube"></i></a>
            </div>
          </div>
          <div className="quick-links">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="#">Home</a></li>
              <li><a href="#">Car Brands</a></li>
              <li><a href="#">New Models</a></li>
              <li><a href="#">Car Comparisons</a></li>
              <li><a href="#">News & Reviews</a></li>
            </ul>
          </div>
          <div className="popular-brands">
            <h4>Popular Brands</h4>
            <ul>
              <li><a href="#">Toyota</a></li>
              <li><a href="#">Honda</a></li>
              <li><a href="#">Ford</a></li>
              <li><a href="#">BMW</a></li>
              <li><a href="#">Tesla</a></li>
            </ul>
          </div>
          <div className="contact-info">
            <h4>Contact Us</h4>
            <ul>
              <li><i className="fas fa-map-marker-alt"></i> 123 Auto Street, Detroit, MI</li>
              <li><i className="fas fa-phone-alt"></i> (555) 123-4567</li>
              <li><i className="fas fa-envelope"></i> info@autovista.com</li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2023 AutoVista. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
