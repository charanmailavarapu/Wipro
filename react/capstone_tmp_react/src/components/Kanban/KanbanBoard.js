// import React from 'react';
// import { useDispatch } from 'react-redux';
// import { Droppable, Draggable, DragDropContext } from 'react-beautiful-dnd';
// import { updateTask, deleteTask } from '../../redux/slices/taskSlice';
// import './KanbanBoard.css';

// const KanbanBoard = ({ 
//   tasks, 
//   onDragEnd, 
//   onTaskUpdate, 
//   onTaskDelete, 
//   onTaskSelect, 
//   isLoading 
// }) => {
//   const dispatch = useDispatch();

//   const groupTasksByStatus = (tasks) => {
//     return {
//       todo: tasks.filter(task => task.status === 'To Do'),
//       inProgress: tasks.filter(task => task.status === 'In Progress'),
//       done: tasks.filter(task => task.status === 'Done')
//     };
//   };

//   const { todo, inProgress, done } = groupTasksByStatus(tasks || []);

//   const columns = [
//     { id: 'To Do', title: 'To Do', tasks: todo },
//     { id: 'In Progress', title: 'In Progress', tasks: inProgress },
//     { id: 'Done', title: 'Done', tasks: done }
//   ];

//   if (isLoading) {
//     return <div className="kanban-loading">Loading tasks...</div>;
//   }

//   return (
//     <DragDropContext onDragEnd={onDragEnd}>
//       <div className="kanban-board">
//         {columns.map((column) => (
//           <div key={column.id} className="kanban-column">
//             <h3 className="column-header">
//               {column.title} ({column.tasks.length})
//             </h3>
//             <Droppable droppableId={column.id}>
//               {(provided, snapshot) => (
//                 <div
//                   ref={provided.innerRef}
//                   {...provided.droppableProps}
//                   className={`column-content ${snapshot.isDraggingOver ? 'dragging-over' : ''}`}
//                 >
//                   {column.tasks.map((task, index) => (
//                     <Draggable
//                       key={task.id}
//                       draggableId={task.id.toString()}
//                       index={index}
//                     >
//                       {(provided, snapshot) => (
//                         <div
//                           ref={provided.innerRef}
//                           {...provided.draggableProps}
//                           {...provided.dragHandleProps}
//                           className={`task-card ${snapshot.isDragging ? 'dragging' : ''}`}
//                           onClick={() => onTaskSelect(task)}
//                         >
//                           <h4>{task.title}</h4>
//                           <p>{task.description}</p>
//                           <span className={`priority-${task.priority?.toLowerCase()}`}>
//                             {task.priority}
//                           </span>
//                           {task.assignee && (
//                             <span className="assignee">Assigned to: {task.assignee}</span>
//                           )}
//                         </div>
//                       )}
//                     </Draggable>
//                   ))}
//                   {provided.placeholder}
//                 </div>
//               )}
//             </Droppable>
//           </div>
//         ))}
//       </div>
//     </DragDropContext>
//   );
// };

// export default KanbanBoard;

import React from 'react';
// import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import { DragDropContext, Droppable, Draggable } from '@hello-pangea/dnd';
// import './KanbanBoard.css';

const KanbanBoard = ({ 
  tasks, 
  onDragEnd, 
  onTaskUpdate, 
  onTaskDelete, 
  onTaskSelect, 
  isLoading 
}) => {
  const groupTasksByStatus = (tasks) => {
    return {
      todo: tasks.filter(task => task.status === 'To Do'),
      inProgress: tasks.filter(task => task.status === 'In Progress'),
      done: tasks.filter(task => task.status === 'Done')
    };
  };

  const { todo, inProgress, done } = groupTasksByStatus(tasks || []);

  const columns = [
    { id: 'To Do', title: 'To Do', tasks: todo },
    { id: 'In Progress', title: 'In Progress', tasks: inProgress },
    { id: 'Done', title: 'Done', tasks: done }
  ];

  if (isLoading) {
    return <div className="kanban-loading">Loading tasks...</div>;
  }

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div className="kanban-board">
        {columns.map((column) => (
          <div key={column.id} className="kanban-column">
            <h3 className="column-header">
              {column.title} ({column.tasks.length})
            </h3>
            <Droppable droppableId={column.id}>
              {(provided, snapshot) => (
                <div
                  ref={provided.innerRef}
                  {...provided.droppableProps}
                  className={`column-content ${snapshot.isDraggingOver ? 'dragging-over' : ''}`}
                >
                  {column.tasks.map((task, index) => (
                    <Draggable
                      key={task.id}
                      draggableId={task.id.toString()}
                      index={index}
                    >
                      {(provided, snapshot) => (
                        <div
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                          className={`task-card ${snapshot.isDragging ? 'dragging' : ''}`}
                          onClick={() => onTaskSelect(task)}
                        >
                          <h4>{task.title}</h4>
                          <p className="task-description">{task.description}</p>
                          <span className={`priority priority-${task.priority?.toLowerCase()}`}>
                            {task.priority}
                          </span>
                          {task.assignee && (
                            <span className="assignee">Assigned to: {task.assignee}</span>
                          )}
                        </div>
                      )}
                    </Draggable>
                  ))}
                  {provided.placeholder}
                </div>
              )}
            </Droppable>
          </div>
        ))}
      </div>
    </DragDropContext>
  );
};

export default KanbanBoard;