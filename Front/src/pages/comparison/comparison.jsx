import React from 'react';
import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';
import CarComparison from '../../components/comparison/comparison';
const CarComparisonPage = () => {
  return (
    <div className="bg-gray-50 font-sans">
      <Header />
      <CarComparison />
      <Footer />
    </div>
  );
};

export default CarComparisonPage;
