import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate, useLocation } from 'react-router-dom';
import './Sidebar.css';

const Sidebar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { items: projects } = useSelector((state) => state.projects);
  const { user } = useSelector((state) => state.auth);

  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <aside className="app-sidebar">
      <nav className="sidebar-nav">
        <div 
          className={`nav-item ${isActive('/dashboard') ? 'active' : ''}`}
          onClick={() => navigate('/dashboard')}
        >
          <span className="nav-icon">📊</span>
          <span className="nav-text">Dashboard</span>
        </div>
        
        <div className="nav-section">
          <h3>Projects</h3>
          {projects.map(project => (
            <div
              key={project.id}
              className={`nav-item ${location.pathname === `/project/${project.id}` ? 'active' : ''}`}
              onClick={() => navigate(`/project/${project.id}`)}
            >
              <span className="nav-icon">📁</span>
              <span className="nav-text">{project.name}</span>
            </div>
          ))}
          
          <div className="nav-item">
            <span className="nav-icon">➕</span>
            <span className="nav-text">New Project</span>
          </div>
        </div>
        
        <div className="nav-section">
          <h3>Tools</h3>
          <div className="nav-item">
            <span className="nav-icon">🔔</span>
            <span className="nav-text">Notifications</span>
          </div>
          
          {user?.role === 'Admin' && (
            <div className="nav-item">
              <span className="nav-icon">👥</span>
              <span className="nav-text">User Management</span>
            </div>
          )}
        </div>
      </nav>
    </aside>
  );
};

export default Sidebar;