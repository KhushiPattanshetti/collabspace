// components/Home/Home.js
import React from 'react';
import Hero from './Hero';
import Features from './Features';
import Testimonials from './Testimonials';
import Footer from './Footer';
import './Home.css';

const Home = ({ navigateTo }) => {
  return (
    <div className="home">
      <Hero navigateTo={navigateTo} />
      <Features />
      <Testimonials />
      <Footer navigateTo={navigateTo} />
    </div>
  );
};

export default Home;