import React from 'react';
import { useNavigate } from 'react-router-dom';
// import './ProjectList.css';

const ProjectList = ({ projects, isLoading }) => {
  const navigate = useNavigate();

  if (isLoading) {
    return <div className="loading">Loading projects...</div>;
  }

  if (projects.length === 0) {
    return (
      <div className="empty-state">
        <h3>No projects yet</h3>
        <p>Create your first project to get started</p>
        <button className="btn-primary">Create Project</button>
      </div>
    );
  }

  return (
    <div className="project-list">
      {projects.map(project => (
        <div 
          key={project.id} 
          className="project-card"
          onClick={() => navigate(`/project/${project.id}`)}
        >
          <div className="project-card-header">
            <h3>{project.name}</h3>
            <span className="project-status">{project.status}</span>
          </div>
          <p className="project-description">{project.description}</p>
          <div className="project-meta">
            <span className="task-count">12 tasks</span>
            <span className="member-count">5 members</span>
          </div>
          <div className="project-progress">
            <div className="progress-bar">
              <div 
                className="progress-fill" 
                style={{ width: '65%' }}
              ></div>
            </div>
            <span className="progress-text">65% complete</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProjectList;