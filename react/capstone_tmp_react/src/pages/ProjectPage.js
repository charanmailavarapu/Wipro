// import React, { useEffect, useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { useParams } from 'react-router-dom';
// import { setCurrentProject } from '../redux/slices/projectSlice';
// import { 
//   fetchTasksByProject, 
//   setCurrentProject as setTaskProject, 
//   updateTask, 
//   deleteTask 
// } from '../redux/slices/taskSlice';
// import { 
//   fetchProjectMembers, 
//   setCurrentProject as setMemberProject 
// } from '../redux/slices/projectMemberSlice';
// import KanbanBoard from '../components/Kanban/KanbanBoard';
// import TaskForm from '../components/Task/TaskForm';
// import TaskDetails from '../components/Task/TaskDetails';
// import ProjectHeader from '../components/Project/ProjectHeader';
// import ProjectMembers from '../components/Project/ProjectMembers';
// import Header from '../components/Common/Header';
// import Sidebar from '../components/Common/Sidebar';
// import Loader from '../components/UI/Loader';
// import './ProjectPage.css';

// const ProjectPage = () => {
//   const { id } = useParams();
//   const dispatch = useDispatch();
//   const { items: projects, currentProject } = useSelector((state) => state.projects);
//   const { items: tasks, isLoading: tasksLoading } = useSelector((state) => state.tasks);
//   const { items: projectMembers, isLoading: membersLoading } = useSelector((state) => state.projectMembers);
//   const { user } = useSelector((state) => state.auth);
  
//   const [showTaskForm, setShowTaskForm] = useState(false);
//   const [selectedTask, setSelectedTask] = useState(null);
//   const [activeTab, setActiveTab] = useState('board');

//   useEffect(() => {
//     const project = projects.find(p => p.id === parseInt(id));
//     if (project) {
//       dispatch(setCurrentProject(project));
//       dispatch(setTaskProject(project.id));
//       dispatch(setMemberProject(project.id));
//       dispatch(fetchTasksByProject(project.id));
//       dispatch(fetchProjectMembers(project.id));
//     }
//   }, [id, projects, dispatch]);

//   const handleDragEnd = (result) => {
//     if (!result.destination) return;
    
//     const { source, destination, draggableId } = result;
    
//     // If dropped in the same position, do nothing
//     if (source.droppableId === destination.droppableId && source.index === destination.index) {
//       return;
//     }
    
//     const taskId = parseInt(draggableId);
//     const task = tasks.find(t => t.id === taskId);
    
//     if (task) {
//       // Update task status and order
//       dispatch(updateTask({
//         id: taskId,
//         taskData: { 
//           ...task, 
//           status: destination.droppableId,
//           orderIndex: destination.index
//         }
//       }));
//     }
//   };

//   const handleTaskUpdate = (taskId, updates) => {
//     const task = tasks.find(t => t.id === taskId);
//     if (task) {
//       dispatch(updateTask({
//         id: taskId,
//         taskData: { ...task, ...updates }
//       }));
//     }
//   };

//   const handleTaskDelete = (taskId) => {
//     dispatch(deleteTask(taskId));
//   };

//   const handleTaskSelect = (task) => {
//     setSelectedTask(task);
//   };

//   if (!currentProject) {
//     return (
//       <div className="project-loading">
//         <Header />
//         <div className="project-content">
//           <Sidebar />
//           <main className="project-main">
//             <Loader text="Loading project..." />
//           </main>
//         </div>
//       </div>
//     );
//   }

//   const isLoading = tasksLoading || membersLoading;

//   return (
//     <div className="project-page">
//       <Header />
//       <div className="project-content">
//         <Sidebar />
//         <main className="project-main">
//           <ProjectHeader 
//             project={currentProject} 
//             onAddTask={() => setShowTaskForm(true)}
//             activeTab={activeTab}
//             onTabChange={setActiveTab}
//           />
          
//           {isLoading ? (
//             <Loader text="Loading project data..." />
//           ) : (
//             <>
//               // In ProjectPage.js, update the KanbanBoard usage:
//                 {activeTab === 'board' && (
//                   <div className="kanban-container">
//                     <KanbanBoard
//                       tasks={tasks || []}
//                       onDragEnd={handleDragEnd}
//                       onTaskUpdate={handleTaskUpdate}
//                       onTaskDelete={handleTaskDelete}
//                       onTaskSelect={handleTaskSelect}
//                       isLoading={tasksLoading}
//                     />
//                   </div>
//                 )}
              
//               {activeTab === 'members' && (
//                 <ProjectMembers 
//                   project={currentProject}
//                   members={projectMembers}
//                 />
//               )}
//             </>
//           )}
//         </main>
//       </div>
      
//       {showTaskForm && (
//         <TaskForm
//           projectId={currentProject.id}
//           onClose={() => setShowTaskForm(false)}
//         />
//       )}
      
//       {selectedTask && (
//         <TaskDetails
//           task={selectedTask}
//           onClose={() => setSelectedTask(null)}
//           onUpdate={handleTaskUpdate}
//           onDelete={handleTaskDelete}
//         />
//       )}
//     </div>
//   );
// };

// export default ProjectPage;

import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { setCurrentProject } from '../redux/slices/projectSlice';
import { 
  fetchTasksByProject, 
  setCurrentProject as setTaskProject, 
  updateTask, 
  deleteTask 
} from '../redux/slices/taskSlice';
import { 
  fetchProjectMembers, 
  setCurrentProject as setMemberProject 
} from '../redux/slices/projectMemberSlice';
import KanbanBoard from '../components/Kanban/KanbanBoard';
import TaskForm from '../components/Task/TaskForm';
import TaskDetails from '../components/Task/TaskDetails';
import ProjectHeader from '../components/Project/ProjectHeader';
import ProjectMembers from '../components/Project/ProjectMembers';
import Header from '../components/Common/Header';
import Sidebar from '../components/Common/Sidebar';
import Loader from '../components/UI/Loader';
import './ProjectPage.css';

const ProjectPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { items: projects, currentProject } = useSelector((state) => state.projects);
  const { items: tasks, isLoading: tasksLoading } = useSelector((state) => state.tasks);
  const { items: projectMembers, isLoading: membersLoading } = useSelector((state) => state.projectMembers);
  const { user } = useSelector((state) => state.auth);
  
  const [showTaskForm, setShowTaskForm] = useState(false);
  const [selectedTask, setSelectedTask] = useState(null);
  const [activeTab, setActiveTab] = useState('board');

  useEffect(() => {
    const project = projects.find(p => p.id === parseInt(id));
    if (project) {
      dispatch(setCurrentProject(project));
      dispatch(setTaskProject(project.id));
      dispatch(setMemberProject(project.id));
      dispatch(fetchTasksByProject(project.id));
      dispatch(fetchProjectMembers(project.id));
    }
  }, [id, projects, dispatch]);

  const handleDragEnd = (result) => {
    if (!result.destination) return;
    
    const { source, destination, draggableId } = result;
    
    // If dropped in the same position, do nothing
    if (source.droppableId === destination.droppableId && source.index === destination.index) {
      return;
    }
    
    const taskId = parseInt(draggableId);
    const task = tasks.find(t => t.id === taskId);
    
    if (task) {
      // Update task status and order
      dispatch(updateTask({
        id: taskId,
        taskData: { 
          ...task, 
          status: destination.droppableId,
          orderIndex: destination.index
        }
      }));
    }
  };

  const handleTaskUpdate = (taskId, updates) => {
    const task = tasks.find(t => t.id === taskId);
    if (task) {
      dispatch(updateTask({
        id: taskId,
        taskData: { ...task, ...updates }
      }));
    }
  };

  const handleTaskDelete = (taskId) => {
    dispatch(deleteTask(taskId));
  };

  const handleTaskSelect = (task) => {
    setSelectedTask(task);
  };

  if (!currentProject) {
    return (
      <div className="project-loading">
        <Header />
        <div className="project-content">
          <Sidebar />
          <main className="project-main">
            <Loader text="Loading project..." />
          </main>
        </div>
      </div>
    );
  }

  const isLoading = tasksLoading || membersLoading;

  return (
    <div className="project-page">
      <Header />
      <div className="project-content">
        <Sidebar />
        <main className="project-main">
          <ProjectHeader 
            project={currentProject} 
            onAddTask={() => setShowTaskForm(true)}
            activeTab={activeTab}
            onTabChange={setActiveTab}
          />
          
          {isLoading ? (
            <Loader text="Loading project data..." />
          ) : (
            <>
              {activeTab === 'board' && (
                <div className="kanban-container">
                  <KanbanBoard
                    tasks={tasks || []}
                    onDragEnd={handleDragEnd}
                    onTaskUpdate={handleTaskUpdate}
                    onTaskDelete={handleTaskDelete}
                    onTaskSelect={handleTaskSelect}
                    isLoading={tasksLoading}
                  />
                </div>
              )}
              
              {activeTab === 'members' && (
                <ProjectMembers 
                  project={currentProject}
                  members={projectMembers}
                />
              )}
            </>
          )}
        </main>
      </div>
      
      {showTaskForm && (
        <TaskForm
          projectId={currentProject.id}
          onClose={() => setShowTaskForm(false)}
        />
      )}
      
      {selectedTask && (
        <TaskDetails
          task={selectedTask}
          onClose={() => setSelectedTask(null)}
          onUpdate={handleTaskUpdate}
          onDelete={handleTaskDelete}
        />
      )}
    </div>
  );
};

export default ProjectPage;