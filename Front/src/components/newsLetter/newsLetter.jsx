import React from 'react';
import './newsLetter.css';
const Newsletter = () => {
  return (
    <section className="newsletter">
      <div className="container">
        <h2>Stay Updated With AutoVista</h2>
        <p>Subscribe to our newsletter for the latest car reviews, news, and exclusive content.</p>
        <div className="subscribe-form">
          <input type="email" placeholder="Your email address" />
          <button>Subscribe</button>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
