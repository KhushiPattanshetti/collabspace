// components/Auth/SignUp.js
import React, { useState } from 'react';
import './Auth.css';

const SignUp = ({ navigateTo }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real app, you would register with your backend here
    console.log('Sign up attempted with:', formData);
    navigateTo('signin'); // Redirect to sign in after registration
  };

  return (
    <div className="auth-container">
      <div className="auth-card card">
        <h2>Create Your Account</h2>
        
        <form onSubmit={handleSubmit} className="auth-form">
          <div className="form-group">
            <label htmlFor="name">Full Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          
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
          
          <div className="form-group">
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
            />
          </div>
          
          <button type="submit" className="btn btn-primary auth-btn">Sign Up</button>
        </form>
        
        <p className="auth-switch">
          Already have an account? <button onClick={() => navigateTo('signin')}>Sign in</button>
        </p>
        
        <button onClick={() => navigateTo('home')} className="btn btn-secondary">Back to Home</button>
      </div>
    </div>
  );
};

export default SignUp;