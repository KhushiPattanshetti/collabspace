// components/Home/Footer.js
import React from 'react';
import './Footer.css';

const Footer = ({ navigateTo }) => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>CollabSpace</h3>
            <p>The all-in-one platform for team collaboration and project management.</p>
          </div>
          
          <div className="footer-section">
            <h4>Links</h4>
            <ul>
              <li><button onClick={() => navigateTo('home')}>Home</button></li>
              <li><button onClick={() => alert('About page coming soon')}>About</button></li>
              <li><button onClick={() => alert('Contact page coming soon')}>Contact</button></li>
              <li><button onClick={() => alert('Privacy page coming soon')}>Privacy</button></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4>Product</h4>
            <ul>
              <li><button onClick={() => navigateTo('signup')}>Sign Up</button></li>
              <li><button onClick={() => navigateTo('signin')}>Login</button></li>
              <li><button onClick={() => alert('Features page coming soon')}>Features</button></li>
              <li><button onClick={() => alert('Pricing page coming soon')}>Pricing</button></li>
            </ul>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} CollabSpace. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;