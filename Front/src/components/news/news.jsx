import React from 'react';
import './news.css';

const Testimonials = () => {
  return (
    <section className="testimonials">
      <div className="container">
        <h2>What Car Enthusiasts Say</h2>
        <div className="testimonials-grid">
          <div className="testimonial-card">
            <div className="user-info">
              <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="User" />
              <div>
                <h4>Michael Johnson</h4>
                <div className="rating">
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                </div>
              </div>
            </div>
            <p>"AutoVista has been my go-to resource for car research. The detailed specifications and comparison tools helped me choose my perfect vehicle."</p>
          </div>
          <div className="testimonial-card">
            <div className="user-info">
              <img src="https://randomuser.me/api/portraits/women/44.jpg" alt="User" />
              <div>
                <h4>Sarah Williams</h4>
                <div className="rating">
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star-half-alt"></i>
                </div>
              </div>
            </div>
            <p>"The news section keeps me updated with the latest in automotive technology. I especially love their coverage of electric vehicles."</p>
          </div>
          <div className="testimonial-card">
            <div className="user-info">
              <img src="https://randomuser.me/api/portraits/men/75.jpg" alt="User" />
              <div>
                <h4>David Chen</h4>
                <div className="rating">
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                </div>
              </div>
            </div>
            <p>"As a car collector, I appreciate the historical data and model evolution timelines. It's a fantastic resource for vintage car information."</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
