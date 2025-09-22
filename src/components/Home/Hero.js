// components/Home/Hero.js
import React from 'react';
import './Hero.css';

const Hero = ({ navigateTo }) => {
  return (
    <section className="hero">
      <nav className="navbar">
        <div className="container">
          <div className="nav-content">
            <h2 className="logo">CollabSpace</h2>
            <div className="nav-links">
              <button onClick={() => navigateTo('signin')} className="btn btn-secondary">Login</button>
              <button onClick={() => navigateTo('signup')} className="btn btn-primary">Get Started</button>
            </div>
          </div>
        </div>
      </nav>
      
      <div className="hero-content">
        <div className="container">
          <h1>Collaborate. Organize. Build Together.</h1>
          <p>The all-in-one platform for team collaboration, document management, and project planning.</p>
          <div className="hero-buttons">
            <button onClick={() => navigateTo('signup')} className="btn btn-primary">Get Started</button>
            <button onClick={() => navigateTo('signin')} className="btn btn-secondary">Login</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;