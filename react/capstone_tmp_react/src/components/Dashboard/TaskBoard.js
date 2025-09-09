import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Loader from '../UI/Loader';
import Button from '../UI/Button';
import './TaskBoard.css';

const TaskBoard = () => {
  const { items: tasks, isLoading } = useSelector((state) => state.tasks);
  const { items: projects } = useSelector((state) => state.projects);
  const navigate = useNavigate();
  const [filter, setFilter] = useState('all');
  const [sortBy, setSortBy] = useState('dueDate');

  // Filter tasks based on selected filter
  const filteredTasks = tasks.filter(task => {
    if (filter === 'all') return true;
    if (filter === 'assigned') return task.assigneeId;
    if (filter === 'unassigned') return !task.assigneeId;
    if (filter === 'overdue') {
      return task.dueDate && new Date(task.dueDate) < new Date();
    }
    return task.status === filter;
  });

  // Sort tasks based on selected criteria
  const sortedTasks = [...filteredTasks].sort((a, b) => {
    if (sortBy === 'dueDate') {
      return new Date(a.dueDate || '9999-12-31') - new Date(b.dueDate || '9999-12-31');
    }
    if (sortBy === 'priority') {
      const priorityOrder = { high: 3, medium: 2, low: 1 };
      return (priorityOrder[b.priority] || 0) - (priorityOrder[a.priority] || 0);
    }
    if (sortBy === 'title') {
      return a.title.localeCompare(b.title);
    }
    return 0;
  });

  const getProjectName = (projectId) => {
    const project = projects.find(p => p.id === projectId);
    return project ? project.name : 'Unknown Project';
  };

  const getStatusBadgeClass = (status) => {
    switch (status) {
      case 'todo': return 'status-todo';
      case 'inprogress': return 'status-inprogress';
      case 'review': return 'status-review';
      case 'done': return 'status-done';
      default: return 'status-todo';
    }
  };

  const getPriorityBadgeClass = (priority) => {
    switch (priority) {
      case 'high': return 'priority-high';
      case 'medium': return 'priority-medium';
      case 'low': return 'priority-low';
      default: return 'priority-medium';
    }
  };

  const isOverdue = (dueDate) => {
    return dueDate && new Date(dueDate) < new Date();
  };

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div className="task-board">
      <div className="task-board-header">
        <h2>My Tasks</h2>
        <div className="task-board-controls">
          <div className="filter-control">
            <label>Filter:</label>
            <select value={filter} onChange={(e) => setFilter(e.target.value)}>
              <option value="all">All Tasks</option>
              <option value="assigned">Assigned to Me</option>
              <option value="unassigned">Unassigned</option>
              <option value="todo">To Do</option>
              <option value="inprogress">In Progress</option>
              <option value="review">In Review</option>
              <option value="done">Completed</option>
              <option value="overdue">Overdue</option>
            </select>
          </div>
          
          <div className="sort-control">
            <label>Sort by:</label>
            <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
              <option value="dueDate">Due Date</option>
              <option value="priority">Priority</option>
              <option value="title">Title</option>
            </select>
          </div>
        </div>
      </div>

      <div className="task-list">
        {sortedTasks.length === 0 ? (
          <div className="empty-state">
            <h3>No tasks found</h3>
            <p>Try changing your filters or create a new task</p>
            <Button 
              variant="primary" 
              onClick={() => navigate('/projects')}
            >
              View Projects
            </Button>
          </div>
        ) : (
          sortedTasks.map(task => (
            <div key={task.id} className="task-card">
              <div className="task-card-header">
                <h4 
                  className="task-title"
                  onClick={() => navigate(`/project/${task.projectId}?task=${task.id}`)}
                >
                  {task.title}
                </h4>
                <span className={`priority-badge ${getPriorityBadgeClass(task.priority)}`}>
                  {task.priority}
                </span>
              </div>
              
              <p className="task-description">{task.description}</p>
              
              <div className="task-meta">
                <span className="project-name">{getProjectName(task.projectId)}</span>
                <span className={`status-badge ${getStatusBadgeClass(task.status)}`}>
                  {task.status}
                </span>
              </div>
              
              <div className="task-footer">
                {task.dueDate && (
                  <span className={`due-date ${isOverdue(task.dueDate) ? 'overdue' : ''}`}>
                    Due: {new Date(task.dueDate).toLocaleDateString()}
                    {isOverdue(task.dueDate) && ' ⚠️'}
                  </span>
                )}
                
                <div className="task-actions">
                  <Button 
                    variant="secondary" 
                    size="small"
                    onClick={() => navigate(`/project/${task.projectId}?task=${task.id}`)}
                  >
                    View
                  </Button>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default TaskBoard;