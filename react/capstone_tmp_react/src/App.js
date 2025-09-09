import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import AuthInitializer from './components/Auth/AuthInitializer';
import Home from './pages/Home';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import DashboardPage from './pages/DashboardPage';
import ProjectPage from './pages/ProjectPage';
import ProfilePage from './pages/ProfilePage';
import './App.css';

function App() {
  const { user } = useSelector((state) => state.auth);
  const token = localStorage.getItem('authToken');

  // Check if user is authenticated
  const isAuthenticated = !!user || !!token;

  return (
    <AuthInitializer>
      <Router>
        <div className="App">
          <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route 
              path="/login" 
              element={isAuthenticated ? <Navigate to="/dashboard" /> : <LoginPage />} 
            />
            <Route 
              path="/register" 
              element={isAuthenticated ? <Navigate to="/dashboard" /> : <RegisterPage />} 
            />
            <Route 
              path="/dashboard" 
              element={isAuthenticated ? <DashboardPage /> : <Navigate to="/login" />} 
            />
            <Route 
              path="/project/:id" 
              element={isAuthenticated ? <ProjectPage /> : <Navigate to="/login" />} 
            />
            <Route 
              path="/profile" 
              element={isAuthenticated ? <ProfilePage /> : <Navigate to="/login" />} 
            />
          </Routes>
        </div>
      </Router>
    </AuthInitializer>
  );
}

export default App;
