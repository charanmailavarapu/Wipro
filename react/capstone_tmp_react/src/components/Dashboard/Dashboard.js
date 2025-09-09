import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProjects } from '../../redux/slices/projectSlice';
import ProjectList from './ProjectList';
import TaskBoard from './TaskBoard';
import Header from '../Common/Header';
import Sidebar from '../Common/Sidebar';
import Loader from '../UI/Loader';
import './Dashboard.css';

const Dashboard = () => {
  const dispatch = useDispatch();
  const { items: projects, isLoading: projectsLoading } = useSelector((state) => state.projects);
  const { items: tasks = [], isLoading: tasksLoading } = useSelector((state) => state.tasks);
  const { user } = useSelector((state) => state.auth);

  useEffect(() => {
    dispatch(fetchProjects());
  }, [dispatch]);

  // Calculate statistics safely with default empty array
  const totalTasks = tasks.length;
  const completedTasks = tasks.filter(task => task.status === 'done').length;
  const assignedTasks = tasks.filter(task => task.assigneeId === user?.id).length;
  const overdueTasks = tasks.filter(task => {
    if (!task.dueDate) return false;
    const dueDate = new Date(task.dueDate);
    const today = new Date();
    return dueDate < today && task.status !== 'done';
  }).length;

  const isLoading = projectsLoading;

  if (isLoading) {
    return (
      <div className="dashboard-container">
        <Header />
        <div className="dashboard-content">
          <Sidebar />
          <main className="dashboard-main">
            <Loader text="Loading dashboard..." />
          </main>
        </div>
      </div>
    );
  }

  return (
    <div className="dashboard-container">
      <Header />
      <div className="dashboard-content">
        <Sidebar />
        <main className="dashboard-main">
          <div className="dashboard-header">
            <h1>Welcome back, {user?.firstName}!</h1>
            <p>Here's what's happening with your projects today.</p>
          </div>
          
          <div className="dashboard-stats">
            <div className="stat-card">
              <h3>{projects.length}</h3>
              <p>Total Projects</p>
            </div>
            <div className="stat-card">
              <h3>{totalTasks}</h3>
              <p>Total Tasks</p>
            </div>
            <div className="stat-card">
              <h3>{completedTasks}</h3>
              <p>Completed Tasks</p>
            </div>
            <div className="stat-card">
              <h3>{overdueTasks}</h3>
              <p>Overdue Tasks</p>
            </div>
          </div>
          
          <div className="dashboard-sections">
            <div className="projects-section">
              <div className="section-header">
                <h2>Your Projects</h2>
                <button className="btn-primary">New Project</button>
              </div>
              <ProjectList projects={projects} isLoading={projectsLoading} />
            </div>
            
            <div className="tasks-section">
              <div className="section-header">
                <h2>Your Tasks</h2>
              </div>
              <TaskBoard />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;