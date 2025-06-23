import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home/home';
import Brands from './pages/brands/brands';
import Models from './pages/models/models';
import News from './pages/news/news';
import Reviews from './pages/reviews/reviews';
import CarComparison from './pages/comparison/comparison';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/brands" element={<Brands />} />
        <Route path="/models" element={<Models />} />
        <Route path="/news" element={<News />} />
        <Route path="/reviews" element={<Reviews />} />
        <Route path="/compare" element={<CarComparison />} />
      </Routes>
    </Router>
  );
};

export default App;
