import api from './api';

export const authService = {
  login: async (credentials) => {
    try {
      const response = await api.post('/api/Auth/login', credentials);
      return response.data;
    } catch (error) {
      console.error('Login API error:', error);
      
      // Provide more detailed error information
      if (error.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        throw new Error(error.response.data?.message || `Login failed: ${error.response.status} ${error.response.statusText}`);
      } else if (error.request) {
        // The request was made but no response was received
        throw new Error('No response from server. Please check if the backend is running.');
      } else {
        // Something happened in setting up the request that triggered an Error
        throw new Error(`Login request error: ${error.message}`);
      }
    }
  },
  
  register: async (userData) => {
    try {
      const response = await api.post('/api/Auth/register', userData);
      return response.data;
    } catch (error) {
      console.error('Register API error:', error);
      
      if (error.response) {
        throw new Error(error.response.data?.message || `Registration failed: ${error.response.status}`);
      } else if (error.request) {
        throw new Error('No response from server. Please check if the backend is running.');
      } else {
        throw new Error(`Registration request error: ${error.message}`);
      }
    }
  },
  
  logout: () => {
    localStorage.removeItem('authToken');
    localStorage.removeItem('user');
  },
  
  getCurrentUser: () => {
    try {
      const userStr = localStorage.getItem('user');
      return userStr ? JSON.parse(userStr) : null;
    } catch (error) {
      console.error('Error parsing user data from localStorage:', error);
      localStorage.removeItem('user');
      return null;
    }
  },

  getToken: () => {
    return localStorage.getItem('authToken');
  },

  validateToken: (token) => {
    if (!token) return false;
    
    try {
      // Simple check for JWT token structure (3 parts separated by dots)
      const parts = token.split('.');
      if (parts.length !== 3) return false;
      
      // You could add more validation here, like checking expiration
      // For now, just validate the structure
      return true;
    } catch (error) {
      return false;
    }
  },
};