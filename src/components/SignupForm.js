import React from 'react';
import { Link } from 'react-router-dom';
import '../css/signupForm.css';

const SignupForm = ({ handleSubmit, handleChange, formData }) => {
  const { name, email, password, aadhaarNumber, phoneNumber } = formData || {};

  return (
    <div className="signup-form-container">
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <div className="signup-form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            value={name || ''}
            onChange={handleChange('name')}
          />
        </div>
        <div className="signup-form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={email || ''}
            onChange={handleChange('email')}
          />
        </div>
        <div className="signup-form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password || ''}
            onChange={handleChange('password')}
          />
        </div>
        <div className="signup-form-group">
          <label htmlFor="aadhaarNumber">Aadhaar Card Number</label>
          <input
            type="text"
            id="aadhaarNumber"
            value={aadhaarNumber || ''}
            onChange={handleChange('aadhaarNumber')}
          />
        </div>
        <div className="signup-form-group">
          <label htmlFor="phoneNumber">Phone Number</label>
          <input
            type="text"
            id="phoneNumber"
            value={phoneNumber || ''}
            onChange={handleChange('phoneNumber')}
          />
        </div>
        <button type="submit" className="signup-form-btn">
          Sign Up
        </button>
      </form>
      <p className="signup-form-text">
        Already have an account?{' '}
        <Link to="/login" className="login-link">
          Log in here
        </Link>
      </p>
    </div>
  );
};

export default SignupForm;
