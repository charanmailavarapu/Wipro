// import React, { useState } from 'react';
// import { useDispatch } from 'react-redux';
// import { updateTask } from '../../redux/slices/taskSlice';
// import './Kanban.css';

// const KanbanCard = ({ task, provided, isDragging, onUpdate, onDelete }) => {
//   const [isEditing, setIsEditing] = useState(false);
//   const [editedTitle, setEditedTitle] = useState(task.title);
//   const dispatch = useDispatch();

//   const handleTitleChange = () => {
//     if (editedTitle.trim() && editedTitle !== task.title) {
//       dispatch(updateTask({
//         id: task.id,
//         taskData: { ...task, title: editedTitle }
//       }));
//     }
//     setIsEditing(false);
//   };

//   const handlePriorityChange = (priority) => {
//     dispatch(updateTask({
//       id: task.id,
//       taskData: { ...task, priority }
//     }));
//   };

//   return (
//     <div
//       ref={provided.innerRef}
//       {...provided.draggableProps}
//       {...provided.dragHandleProps}
//       className={`kanban-card ${isDragging ? 'dragging' : ''} priority-${task.priority || 'medium'}`}
//     >
//       <div className="card-content">
//         {isEditing ? (
//           <input
//             type="text"
//             value={editedTitle}
//             onChange={(e) => setEditedTitle(e.target.value)}
//             onBlur={handleTitleChange}
//             onKeyDown={(e) => e.key === 'Enter' && handleTitleChange()}
//             autoFocus
//           />
//         ) : (
//           <h4 onClick={() => setIsEditing(true)}>{task.title}</h4>
//         )}
        
//         <p className="task-description">{task.description}</p>
        
//         {task.assignee && (
//           <div className="task-assignee">
//             <span className="assignee-avatar">
//               {task.assignee.firstName?.charAt(0)}{task.assignee.lastName?.charAt(0)}
//             </span>
//             <span>{task.assignee.firstName} {task.assignee.lastName}</span>
//           </div>
//         )}
        
//         <div className="task-meta">
//           {task.dueDate && (
//             <span className="due-date">
//               {new Date(task.dueDate).toLocaleDateString()}
//             </span>
//           )}
          
//           <div className="task-actions">
//             <select
//               value={task.priority || 'medium'}
//               onChange={(e) => handlePriorityChange(e.target.value)}
//               className="priority-select"
//             >
//               <option value="low">Low</option>
//               <option value="medium">Medium</option>
//               <option value="high">High</option>
//             </select>
            
//             <button
//               className="btn-icon"
//               onClick={() => onDelete(task.id)}
//               title="Delete task"
//             >
//               🗑️
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default KanbanCard;

import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { updateTask } from '../../redux/slices/taskSlice';
import './Kanban.css';

const KanbanCard = ({ task, provided, isDragging, onUpdate, onDelete, onSelect }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedTitle, setEditedTitle] = useState(task?.title || '');
  const dispatch = useDispatch();

  if (!task) {
    return null;
  }

  const handleTitleChange = () => {
    if (editedTitle.trim() && editedTitle !== task.title) {
      dispatch(updateTask({
        id: task.id,
        taskData: { ...task, title: editedTitle }
      }));
    }
    setIsEditing(false);
  };

  const handlePriorityChange = (priority) => {
    dispatch(updateTask({
      id: task.id,
      taskData: { ...task, priority }
    }));
  };

  const handleClick = () => {
    if (onSelect) {
      onSelect(task);
    }
  };

  return (
    <div
      ref={provided.innerRef}
      {...provided.draggableProps}
      {...provided.dragHandleProps}
      className={`kanban-card ${isDragging ? 'dragging' : ''} priority-${task.priority || 'medium'}`}
      onClick={handleClick}
    >
      <div className="card-content">
        {isEditing ? (
          <input
            type="text"
            value={editedTitle}
            onChange={(e) => setEditedTitle(e.target.value)}
            onBlur={handleTitleChange}
            onKeyDown={(e) => e.key === 'Enter' && handleTitleChange()}
            autoFocus
          />
        ) : (
          <h4 onClick={() => setIsEditing(true)}>{task.title}</h4>
        )}
        
        <p className="task-description">{task.description}</p>
        
        {task.assigneeId && (
          <div className="task-assignee">
            <span className="assignee-avatar">
              {task.assignee?.firstName?.charAt(0)}{task.assignee?.lastName?.charAt(0)}
            </span>
            <span>{task.assignee?.firstName} {task.assignee?.lastName}</span>
          </div>
        )}
        
        <div className="task-meta">
          {task.dueDate && (
            <span className="due-date">
              {new Date(task.dueDate).toLocaleDateString()}
            </span>
          )}
          
          <div className="task-actions">
            <select
              value={task.priority || 'medium'}
              onChange={(e) => handlePriorityChange(e.target.value)}
              className="priority-select"
              onClick={(e) => e.stopPropagation()}
            >
              <option value="low">Low</option>
              <option value="medium">Medium</option>
              <option value="high">High</option>
            </select>
            
            <button
              className="btn-icon"
              onClick={(e) => {
                e.stopPropagation();
                onDelete(task.id);
              }}
              title="Delete task"
            >
              🗑️
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default KanbanCard;