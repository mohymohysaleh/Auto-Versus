import React from 'react';
import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';

const Reviews = () => {
  return (
    <div className="bg-gray-50 font-sans">
      <Header />
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold text-center mb-12 text-gray-800">What Car Enthusiasts Say</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
            <div className="flex items-center mb-4">
              <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="User" className="w-12 h-12 rounded-full mr-4" />
              <div>
                <h4 className="font-bold text-gray-800">Michael Johnson</h4>
                <div className="flex text-yellow-400">
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                </div>
              </div>
            </div>
            <p className="text-gray-600">"AutoVista has been my go-to resource for car research. The detailed specifications and comparison tools helped me choose my perfect vehicle."</p>
          </div>
          <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
            <div className="flex items-center mb-4">
              <img src="https://randomuser.me/api/portraits/women/44.jpg" alt="User" className="w-12 h-12 rounded-full mr-4" />
              <div>
                <h4 className="font-bold text-gray-800">Sarah Williams</h4>
                <div className="flex text-yellow-400">
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star-half-alt"></i>
                </div>
              </div>
            </div>
            <p className="text-gray-600">"The news section keeps me updated with the latest in automotive technology. I especially love their coverage of electric vehicles."</p>
          </div>
          <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
            <div className="flex items-center mb-4">
              <img src="https://randomuser.me/api/portraits/men/75.jpg" alt="User" className="w-12 h-12 rounded-full mr-4" />
              <div>
                <h4 className="font-bold text-gray-800">David Chen</h4>
                <div className="flex text-yellow-400">
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                </div>
              </div>
            </div>
            <p className="text-gray-600">"As a car collector, I appreciate the historical data and model evolution timelines. It's a fantastic resource for vintage car information."</p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Reviews;
