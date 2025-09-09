import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { registerUser, clearError } from '../../redux/slices/authSlice';
import { useNavigate, Link } from 'react-router-dom';
import Loader from '../UI/Loader';
import './Auth.css';

const Register = () => {
  const [userData, setUserData] = useState({
    Email: '',
    FullName: '',
    Password: '',
    ConfirmPassword: '',
    Role: 'Viewer', // Default role
  });
  
  const [validationErrors, setValidationErrors] = useState({});
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isLoading, error, user } = useSelector((state) => state.auth);
  
  useEffect(() => {
    if (user) {
      navigate('/dashboard');
    }
  }, [user, navigate]);
  
  useEffect(() => {
    dispatch(clearError());
    setValidationErrors({});
  }, [dispatch]);
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({
      ...userData,
      [name]: value,
    });
    
    if (validationErrors[name]) {
      setValidationErrors({
        ...validationErrors,
        [name]: '',
      });
    }
  };
  
  const validateForm = () => {
    const errors = {};
    
    if (!userData.FullName.trim()) {
      errors.FullName = 'Full name is required';
    }
    
    if (!userData.Email.trim()) {
      errors.Email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(userData.Email)) {
      errors.Email = 'Please enter a valid email address';
    }
    
    if (!userData.Password) {
      errors.Password = 'Password is required';
    } else if (userData.Password.length < 6) {
      errors.Password = 'Password must be at least 6 characters';
    }
    
    if (!userData.ConfirmPassword) {
      errors.ConfirmPassword = 'Please confirm your password';
    } else if (userData.Password !== userData.ConfirmPassword) {
      errors.ConfirmPassword = 'Passwords do not match';
    }
    
    setValidationErrors(errors);
    return Object.keys(errors).length === 0;
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    try {
      // Prepare the data exactly as the backend expects
      const registrationData = {
        Email: userData.Email,
        FullName: userData.FullName,
        Password: userData.Password,
        Role: userData.Role
      };
      
      console.log('Sending registration data:', registrationData);
      
      const result = await dispatch(registerUser(registrationData)).unwrap();
      
      if (result) {
        navigate('/login', { 
          state: { message: 'Registration successful! Please login.' } 
        });
      }
    } catch (error) {
      console.error('Registration failed:', error);
    }
  };
  
  return (
    <div className="auth-container">
      <div className="auth-card">
        <h2>Create an Account</h2>
        
        {error && (
          <div className="error-message">
            <strong>Registration Failed:</strong> {error}
            <br />
            <small>Please check the form and try again.</small>
          </div>
        )}
        
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="FullName">Full Name</label>
            <input
              type="text"
              id="FullName"
              name="FullName"
              value={userData.FullName}
              onChange={handleChange}
              required
              disabled={isLoading}
              className={validationErrors.FullName ? 'error' : ''}
              placeholder="Enter your full name"
            />
            {validationErrors.FullName && (
              <span className="field-error">{validationErrors.FullName}</span>
            )}
          </div>
          
          <div className="form-group">
            <label htmlFor="Email">Email</label>
            <input
              type="email"
              id="Email"
              name="Email"
              value={userData.Email}
              onChange={handleChange}
              required
              disabled={isLoading}
              className={validationErrors.Email ? 'error' : ''}
              placeholder="Enter your email"
            />
            {validationErrors.Email && (
              <span className="field-error">{validationErrors.Email}</span>
            )}
          </div>
          
          <div className="form-group">
            <label htmlFor="Role">Role</label>
            <select
              id="Role"
              name="Role"
              value={userData.Role}
              onChange={handleChange}
              disabled={isLoading}
            >
              <option value="Viewer">Viewer</option>
              <option value="TeamMember">Team Member</option>
              <option value="ProjectManager">Project Manager</option>
              <option value="Admin">Admin</option>
            </select>
          </div>
          
          <div className="form-group">
            <label htmlFor="Password">Password</label>
            <input
              type="password"
              id="Password"
              name="Password"
              value={userData.Password}
              onChange={handleChange}
              required
              disabled={isLoading}
              className={validationErrors.Password ? 'error' : ''}
              placeholder="Create a password (min. 6 characters)"
            />
            {validationErrors.Password && (
              <span className="field-error">{validationErrors.Password}</span>
            )}
          </div>
          
          <div className="form-group">
            <label htmlFor="ConfirmPassword">Confirm Password</label>
            <input
              type="password"
              id="ConfirmPassword"
              name="ConfirmPassword"
              value={userData.ConfirmPassword}
              onChange={handleChange}
              required
              disabled={isLoading}
              className={validationErrors.ConfirmPassword ? 'error' : ''}
              placeholder="Confirm your password"
            />
            {validationErrors.ConfirmPassword && (
              <span className="field-error">{validationErrors.ConfirmPassword}</span>
            )}
          </div>
          
          <button 
            type="submit" 
            className="btn-primary"
            disabled={isLoading}
          >
            {isLoading ? <Loader size="small" text="" /> : 'Register'}
          </button>
        </form>
        
        <p className="auth-link">
          Already have an account? <Link to="/login">Login here</Link>
        </p>
        
        <div className="auth-info">
          <h4>Role Information:</h4>
          <ul>
            <li><strong>Admin:</strong> Full system access, can manage users and projects</li>
            <li><strong>Project Manager:</strong> Can create projects and assign tasks</li>
            <li><strong>Team Member:</strong> Can update task status and collaborate</li>
            <li><strong>Viewer:</strong> Read-only access to view progress</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Register;