import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createTask, updateTask } from '../../redux/slices/taskSlice';
import './TaskForm.css';

const TaskForm = ({ projectId, task = null, onClose }) => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);
  const { items: projectMembers } = useSelector((state) => state.projectMembers || { items: [] });
  const { isLoading, error } = useSelector((state) => state.tasks);
  
  const [formData, setFormData] = useState({
    Title: task?.title || '',
    Description: task?.description || '',
    Status: task?.status || 'todo',
    Priority: task?.priority || 'medium',
    AssigneeId: task?.assigneeId || null,
    DueDate: task?.dueDate ? new Date(task.dueDate).toISOString().split('T')[0] : '',
    ProjectId: task?.projectId || projectId,
  });

  const [validationErrors, setValidationErrors] = useState({});

  useEffect(() => {
    setValidationErrors({});
  }, [formData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    
    let processedValue = value;
    if (name === 'AssigneeId') {
      processedValue = value === '' ? null : parseInt(value, 10);
    }
    
    setFormData({
      ...formData,
      [name]: processedValue,
    });
  };

  const validateForm = () => {
    const errors = {};
    
    if (!formData.Title.trim()) {
      errors.Title = 'Title is required';
    }
    
    if (formData.DueDate && new Date(formData.DueDate) < new Date()) {
      errors.DueDate = 'Due date cannot be in the past';
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
      // Prepare data exactly as backend expects
      const taskData = {
        Title: formData.Title,
        Description: formData.Description || '',
        Status: formData.Status,
        Priority: formData.Priority,
        AssigneeId: formData.AssigneeId,
        DueDate: formData.DueDate ? new Date(formData.DueDate).toISOString() : null,
        ProjectId: parseInt(formData.ProjectId),
      };

      console.log('Sending task data:', taskData);

      if (task) {
        // Update existing task
        await dispatch(updateTask({
          id: task.id,
          taskData: taskData,
        })).unwrap();
      } else {
        // Create new task
        await dispatch(createTask(taskData)).unwrap();
      }
      
      onClose();
    } catch (error) {
      console.error('Task operation failed:', error);
      setValidationErrors({ submit: error.message || 'Failed to save task' });
    }
  };

  const handleCancel = () => {
    onClose();
  };

  // Convert AssigneeId to string for select value
  const assigneeValue = formData.AssigneeId !== null && formData.AssigneeId !== undefined 
    ? formData.AssigneeId.toString() 
    : '';

  return (
    <div className="task-form-overlay">
      <div className="task-form">
        <div className="form-header">
          <h3>{task ? 'Edit Task' : 'Create New Task'}</h3>
          <button type="button" className="btn-close" onClick={handleCancel}>×</button>
        </div>
        
        {error && (
          <div className="error-message">
            <strong>Error:</strong> {error}
          </div>
        )}
        
        {validationErrors.submit && (
          <div className="error-message">
            <strong>Error:</strong> {validationErrors.submit}
          </div>
        )}
        
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="Title">Title *</label>
            <input
              type="text"
              id="Title"
              name="Title"
              value={formData.Title}
              onChange={handleChange}
              required
              disabled={isLoading}
              className={validationErrors.Title ? 'error' : ''}
              placeholder="Enter task title"
            />
            {validationErrors.Title && (
              <span className="field-error">{validationErrors.Title}</span>
            )}
          </div>
          
          <div className="form-group">
            <label htmlFor="Description">Description</label>
            <textarea
              id="Description"
              name="Description"
              value={formData.Description}
              onChange={handleChange}
              rows="3"
              disabled={isLoading}
              placeholder="Enter task description"
            />
          </div>
          
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="Status">Status</label>
              <select
                id="Status"
                name="Status"
                value={formData.Status}
                onChange={handleChange}
                disabled={isLoading}
              >
                <option value="todo">To Do</option>
                <option value="inprogress">In Progress</option>
                <option value="review">Review</option>
                <option value="done">Done</option>
              </select>
            </div>
            
            <div className="form-group">
              <label htmlFor="Priority">Priority</label>
              <select
                id="Priority"
                name="Priority"
                value={formData.Priority}
                onChange={handleChange}
                disabled={isLoading}
              >
                <option value="low">Low</option>
                <option value="medium">Medium</option>
                <option value="high">High</option>
              </select>
            </div>
          </div>
          
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="AssigneeId">Assignee</label>
              <select
                id="AssigneeId"
                name="AssigneeId"
                value={assigneeValue}
                onChange={handleChange}
                disabled={isLoading}
              >
                <option value="">Unassigned</option>
                {projectMembers.map(member => (
                  <option key={member.userId} value={member.userId}>
                    {member.user?.firstName} {member.user?.lastName}
                  </option>
                ))}
              </select>
            </div>
            
            <div className="form-group">
              <label htmlFor="DueDate">Due Date</label>
              <input
                type="date"
                id="DueDate"
                name="DueDate"
                value={formData.DueDate}
                onChange={handleChange}
                disabled={isLoading}
                className={validationErrors.DueDate ? 'error' : ''}
                min={new Date().toISOString().split('T')[0]}
              />
              {validationErrors.DueDate && (
                <span className="field-error">{validationErrors.DueDate}</span>
              )}
            </div>
          </div>
          
          <div className="form-actions">
            <button 
              type="button" 
              className="btn-secondary" 
              onClick={handleCancel}
              disabled={isLoading}
            >
              Cancel
            </button>
            <button 
              type="submit" 
              className="btn-primary"
              disabled={isLoading}
            >
              {isLoading ? 'Saving...' : (task ? 'Update Task' : 'Create Task')}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default TaskForm;