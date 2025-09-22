// components/Dashboard/Navbar.js
import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <div className="dashboard-navbar">
      <div className="navbar-content">
        <div className="navbar-search">
          <input type="text" placeholder="Search..." />
        </div>
        
        <div className="navbar-actions">
          <button className="notification-btn">🔔</button>
          <div className="user-profile">
            <div className="avatar">U</div>
            <span className="username">User Name</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;