import React from 'react';
import './newsletter.css';

const Newsletter = () => {
  return (
    <section className="auto-newsletter">
      <div className="newsletter-container">
        <div className="newsletter-content">
          <div className="newsletter-text">
            <h2 className="newsletter-title">Stay Updated</h2>
            <p className="newsletter-subtitle">Subscribe to our newsletter for the latest car reviews, news, and exclusive content.</p>
          </div>
          <form className="newsletter-form">
            <div className="form-group">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="newsletter-input"
                required
              />
              <button type="submit" className="newsletter-button">
                Subscribe <i className="fas fa-paper-plane"></i>
              </button>
            </div>
            <div className="form-agreement">
              <input type="checkbox" id="newsletter-agree" required />
              <label htmlFor="newsletter-agree">I agree to receive emails from AutoVersus</label>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;