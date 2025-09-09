import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateTask } from '../../redux/slices/taskSlice';
import TaskComments from './TaskComments';
import './Task.css';

const TaskDetails = ({ task, onClose }) => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);
  const { items: projectMembers } = useSelector((state) => state.projectMembers || { items: [] });
  
  const [isEditing, setIsEditing] = useState(false);
  const [editedTask, setEditedTask] = useState({ ...task });

  const handleChange = (e) => {
    setEditedTask({
      ...editedTask,
      [e.target.name]: e.target.value,
    });
  };

  const handleSave = () => {
    dispatch(updateTask({
      id: task.id,
      taskData: editedTask,
    }));
    setIsEditing(false);
  };

  const handleCancel = () => {
    setEditedTask({ ...task });
    setIsEditing(false);
  };

  const getAssigneeName = () => {
    if (!task.assigneeId) return 'Unassigned';
    const assignee = projectMembers.find(m => m.userId === task.assigneeId);
    return assignee ? `${assignee.user.firstName} ${assignee.user.lastName}` : 'Unknown';
  };

  return (
    <div className="task-details-overlay">
      <div className="task-details">
        <div className="details-header">
          <h2>Task Details</h2>
          <button className="btn-close" onClick={onClose}>×</button>
        </div>
        
        <div className="details-content">
          <div className="details-section">
            {isEditing ? (
              <input
                type="text"
                name="title"
                value={editedTask.title}
                onChange={handleChange}
                className="task-title-input"
              />
            ) : (
              <h3 className="task-title">{task.title}</h3>
            )}
            
            <div className="task-meta">
              <span className={`status-badge status-${task.status}`}>
                {task.status}
              </span>
              <span className={`priority-badge priority-${task.priority}`}>
                {task.priority}
              </span>
            </div>
          </div>
          
          <div className="details-section">
            <h4>Description</h4>
            {isEditing ? (
              <textarea
                name="description"
                value={editedTask.description || ''}
                onChange={handleChange}
                rows="3"
                className="task-description-input"
              />
            ) : (
              <p className="task-description">
                {task.description || 'No description provided.'}
              </p>
            )}
          </div>
          
          <div className="details-grid">
            <div className="detail-item">
              <label>Assignee</label>
              {isEditing ? (
                <select
                  name="assigneeId"
                  value={editedTask.assigneeId || ''}
                  onChange={handleChange}
                >
                  <option value="">Unassigned</option>
                  {projectMembers.map(member => (
                    <option key={member.userId} value={member.userId}>
                      {member.user.firstName} {member.user.lastName}
                    </option>
                  ))}
                </select>
              ) : (
                <span>{getAssigneeName()}</span>
              )}
            </div>
            
            <div className="detail-item">
              <label>Due Date</label>
              {isEditing ? (
                <input
                  type="date"
                  name="dueDate"
                  value={editedTask.dueDate ? new Date(editedTask.dueDate).toISOString().split('T')[0] : ''}
                  onChange={handleChange}
                />
              ) : (
                <span>{task.dueDate ? new Date(task.dueDate).toLocaleDateString() : 'No due date'}</span>
              )}
            </div>
            
            <div className="detail-item">
              <label>Status</label>
              {isEditing ? (
                <select
                  name="status"
                  value={editedTask.status}
                  onChange={handleChange}
                >
                  <option value="todo">To Do</option>
                  <option value="inprogress">In Progress</option>
                  <option value="review">Review</option>
                  <option value="done">Done</option>
                </select>
              ) : (
                <span className={`status-badge status-${task.status}`}>
                  {task.status}
                </span>
              )}
            </div>
            
            <div className="detail-item">
              <label>Priority</label>
              {isEditing ? (
                <select
                  name="priority"
                  value={editedTask.priority}
                  onChange={handleChange}
                >
                  <option value="low">Low</option>
                  <option value="medium">Medium</option>
                  <option value="high">High</option>
                </select>
              ) : (
                <span className={`priority-badge priority-${task.priority}`}>
                  {task.priority}
                </span>
              )}
            </div>
          </div>
          
          <TaskComments taskId={task.id} />
        </div>
        
        <div className="details-actions">
          {isEditing ? (
            <>
              <button className="btn-secondary" onClick={handleCancel}>
                Cancel
              </button>
              <button className="btn-primary" onClick={handleSave}>
                Save Changes
              </button>
            </>
          ) : (
            <button className="btn-primary" onClick={() => setIsEditing(true)}>
              Edit Task
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default TaskDetails;