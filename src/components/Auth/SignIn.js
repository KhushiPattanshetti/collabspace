// components/Auth/SignIn.js
import React, { useState } from 'react';
import './Auth.css';

const SignIn = ({ navigateTo, onLogin }) => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real app, you would authenticate with your backend here
    console.log('Sign in attempted with:', formData);
    onLogin(); // Simulate successful login
  };

  return (
    <div className="auth-container">
      <div className="auth-card card">
        <h2>Sign In to Your Account</h2>
        
        <form onSubmit={handleSubmit} className="auth-form">
          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>
          
          <button type="submit" className="btn btn-primary auth-btn">Sign In</button>
        </form>
        
        <p className="auth-switch">
          Don't have an account? <button onClick={() => navigateTo('signup')}>Sign up</button>
        </p>
        
        <button onClick={() => navigateTo('home')} className="btn btn-secondary">Back to Home</button>
      </div>
    </div>
  );
};

export default SignIn;