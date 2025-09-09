import React from 'react';
import './ProjectHeader.css';

const ProjectHeader = ({ project, onAddTask, activeTab, onTabChange }) => {
  return (
    <div className="project-header">
      <div className="project-info">
        <h1>{project.name}</h1>
        <p>{project.description}</p>
      </div>
      
      <div className="project-actions">
        <button 
          className="btn-primary"
          onClick={onAddTask}
        >
          + Add Task
        </button>
      </div>
      
      <div className="project-tabs">
        <button 
          className={`tab-button ${activeTab === 'board' ? 'active' : ''}`}
          onClick={() => onTabChange('board')}
        >
          Board
        </button>
        <button 
          className={`tab-button ${activeTab === 'members' ? 'active' : ''}`}
          onClick={() => onTabChange('members')}
        >
          Members
        </button>
        <button 
          className={`tab-button ${activeTab === 'settings' ? 'active' : ''}`}
          onClick={() => onTabChange('settings')}
        >
          Settings
        </button>
      </div>
    </div>
  );
};

export default ProjectHeader;