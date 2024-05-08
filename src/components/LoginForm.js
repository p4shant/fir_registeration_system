import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import '../css/loginForm.css';

const LoginForm = ({ handleSubmit, handleChange, formData }) => {
  const { email, password } = formData || {}; // Ensure formData is defined

  return (
    <div className="login-form-container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="login-form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={email || ''}
            onChange={handleChange('email')}
          />
        </div>
        <div className="login-form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password || ''}
            onChange={handleChange('password')}
          />
        </div>
        <button type="submit" className="login-form-btn">
          Login
        </button>
      </form>
      <p className="login-form-text">
        New user?{' '}
        <Link to="/signup" className="signup-link">
          Sign up here
        </Link>
      </p>
    </div>
  );
};

export default LoginForm;
