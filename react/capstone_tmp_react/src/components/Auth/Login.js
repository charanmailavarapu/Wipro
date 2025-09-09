import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser, clearError } from '../../redux/slices/authSlice';
import { useNavigate, Link } from 'react-router-dom';
import Loader from '../UI/Loader';
import './Auth.css';

const Login = () => {
  const [credentials, setCredentials] = useState({
    email: '',
    password: '',
  });
  
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isLoading, error, user } = useSelector((state) => state.auth);
  
  useEffect(() => {
    if (user) {
      console.log('User detected, redirecting to dashboard');
      navigate('/dashboard', { replace: true });
    }
  }, [user, navigate]);
  
  useEffect(() => {
    dispatch(clearError());
  }, [dispatch]);
  
  const handleChange = (e) => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value,
    });
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Basic validation
    if (!credentials.email || !credentials.password) {
      alert('Please fill in all fields');
      return;
    }
    
    if (!/\S+@\S+\.\S+/.test(credentials.email)) {
      alert('Please enter a valid email address');
      return;
    }
    
    try {
      console.log('Attempting login with:', credentials.email);
      const result = await dispatch(loginUser(credentials)).unwrap();
      console.log('Login result:', result);
      
      // The redirect will be handled by the useEffect above
      // when the user state changes
    } catch (error) {
      console.error('Login failed:', error);
    }
  };
  
  return (
    <div className="auth-container">
      <div className="auth-card">
        <h2>Login to TaskTool</h2>
        
        {error && (
          <div className="error-message">
            <strong>Login Failed:</strong> {error}
            <br />
            <small>Please check your credentials and try again.</small>
          </div>
        )}
        
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={credentials.email}
              onChange={handleChange}
              required
              disabled={isLoading}
              placeholder="Enter your email"
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={credentials.password}
              onChange={handleChange}
              required
              disabled={isLoading}
              placeholder="Enter your password"
            />
          </div>
          
          <button 
            type="submit" 
            className="btn-primary"
            disabled={isLoading}
          >
            {isLoading ? <Loader size="small" text="" /> : 'Login'}
          </button>
        </form>
        
        <p className="auth-link">
          Don't have an account? <Link to="/register">Register here</Link>
        </p>
        
        <div className="auth-info">
          <h4>Demo Credentials:</h4>
          <p>
            For testing purposes, you can use:<br />
            Email: demo@example.com<br />
            Password: demo123
          </p>
          <small>
            Note: Make sure your backend server is running on https://localhost:7004
          </small>
        </div>
      </div>
    </div>
  );
};

export default Login;