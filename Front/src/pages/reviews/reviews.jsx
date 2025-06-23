import React from 'react';
import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';
import './reviews.css';

const Reviews = () => {
  return (
    <div className="reviews-page">
      <Header />
      <div className="container">
        <h1>What Car Enthusiasts Say</h1>
        <div className="reviews-grid">
          <div className="review-card">
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
          <div className="review-card">
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
          <div className="review-card">
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
      <Footer />
    </div>
  );
};

export default Reviews;
