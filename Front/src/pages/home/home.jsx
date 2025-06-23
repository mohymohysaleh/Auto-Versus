import React from 'react';
import Header from '../../components/header/header';
import HeroSection from '../../components/hero/hero';
import FeaturedBrands from '../../components/brand/brand';
import FeaturedModels from '../../components/model/model';
import CarComparison from '../../components/comparison/comparison';
import CarSpecifications from '../../components/specifications/specification';
import Testimonials from '../../components/news/news';
import Newsletter from '../../components/newsLetter/newsLetter';
import Footer from '../../components/footer/footer';
import './home.css';

const Home = () => {
  return (
    <div className="home-page">
      <Header />
      <HeroSection />
      <FeaturedBrands />
      <FeaturedModels />
      <CarComparison />
      <CarSpecifications />
      <Testimonials />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default Home;
