import React from 'react';
import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';
import CarComparison from '../../components/comparison/comparison';
import './comparison.css';

const CarComparisonPage = () => {
  return (
    <div className="comparison-page">
      <Header />
      <CarComparison />
      <Footer />
    </div>
  );
};

export default CarComparisonPage;
