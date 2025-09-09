// import React from 'react';
// // import { Draggable, Droppable } from 'react-beautiful-dnd';
// import { DragDropContext, Droppable, Draggable } from '@hello-pangea/dnd';
// import KanbanCard from './KanbanCard';
// import './Kanban.css';

// const KanbanColumn = ({ column, tasks, provided, isDraggingOver, onTaskUpdate, onTaskDelete }) => {
//   return (
//     <div
//       {...provided.droppableProps}
//       ref={provided.innerRef}
//       className={`kanban-column ${isDraggingOver ? 'dragging-over' : ''}`}
//     >
//       <div className="column-header">
//         <h3>{column.title}</h3>
//         <span className="task-count">{tasks.length}</span>
//       </div>
      
//       <div className="tasks-list">
//         {tasks.map((task, index) => (
//           <Draggable key={task.id} draggableId={task.id.toString()} index={index}>
//             {(provided, snapshot) => (
//               <KanbanCard
//                 task={task}
//                 provided={provided}
//                 isDragging={snapshot.isDragging}
//                 onUpdate={onTaskUpdate}
//                 onDelete={onTaskDelete}
//               />
//             )}
//           </Draggable>
//         ))}
//         {provided.placeholder}
//       </div>
      
//       {column.id === 'todo' && (
//         <div className="add-task-btn">
//           <button>+ Add Task</button>
//         </div>
//       )}
//     </div>
//   );
// };

// export default KanbanColumn; 

import React from 'react';
// import { Draggable } from 'react-beautiful-dnd';
import { DragDropContext, Droppable, Draggable } from '@hello-pangea/dnd';
import KanbanCard from './KanbanCard';
import './Kanban.css';

const KanbanColumn = ({ 
  column, 
  tasks = [], 
  provided, 
  isDraggingOver, 
  onTaskUpdate, 
  onTaskDelete, 
  onTaskSelect 
}) => {
  return (
    <div
      {...provided.droppableProps}
      ref={provided.innerRef}
      className={`kanban-column ${isDraggingOver ? 'dragging-over' : ''}`}
    >
      <div className="column-header">
        <h3>{column.title}</h3>
        <span className="task-count">{tasks.length}</span>
      </div>
      
      <div className="tasks-list">
        {Array.isArray(tasks) && tasks.map((task, index) => (
          <Draggable key={task.id} draggableId={task.id.toString()} index={index}>
            {(provided, snapshot) => (
              <KanbanCard
                task={task}
                provided={provided}
                isDragging={snapshot.isDragging}
                onUpdate={onTaskUpdate}
                onDelete={onTaskDelete}
                onSelect={onTaskSelect}
              />
            )}
          </Draggable>
        ))}
        {provided.placeholder}
      </div>
      
      {column.id === 'todo' && (
        <div className="add-task-btn">
          <button>+ Add Task</button>
        </div>
      )}
    </div>
  );
};

export default KanbanColumn;