// import api from './api';
// import projectService from './projects';

// export const taskService = {
//     // Get tasks for a project
//     //   getTasks: async (projectId) => {
//     //     const response = await api.get(`/api/Tasks/${projectId}`);
//     //     return response.data;
//     //   },

//     getUserTasks: async () => {
//         try {
//             // Try to get all projects first, then get tasks for each
//             const projects = await projectService.getProjects();
//             const allTasks = [];

//             for (const project of projects) {
//                 try {
//                     const tasks = await taskService.getTasks(project.id);
//                     allTasks.push(...tasks);
//                 } catch (error) {
//                     console.error(`Failed to fetch tasks for project ${project.id}:`, error);
//                 }
//             }

//             return allTasks;
//         } catch (error) {
//             console.error('Failed to fetch user tasks:', error);
//             return [];
//         }
//     },


//     // Create a new task
//     createTask: async (taskData) => {
//         const response = await api.post('/api/Tasks', taskData);
//         return response.data;
//     },

//     // Update a task
//     updateTask: async (id, taskData) => {
//         const response = await api.put(`/api/Tasks/${id}`, taskData);
//         return response.data;
//     },

//     // Delete a task
//     deleteTask: async (id) => {
//         const response = await api.delete(`/api/Tasks/${id}`);
//         return response.data;
//     },

//     // Reorder tasks
//     reorderTasks: async (reorderData) => {
//         const response = await api.put('/api/Tasks/reorder', reorderData);
//         return response.data;
//     },
// };

import api from './api';

export const taskService = {
  // Get tasks for a project
  getTasksByProject: async (projectId) => {
    const response = await api.get(`/api/Tasks/${projectId}`);
    return response.data;
  },

  // Create a new task
  createTask: async (taskData) => {
    const response = await api.post('/api/Tasks', taskData);
    return response.data;
  },

  // Update a task
  updateTask: async (id, taskData) => {
    const response = await api.put(`/api/Tasks/${id}`, taskData);
    return response.data;
  },

  // Delete a task
  deleteTask: async (id) => {
    const response = await api.delete(`/api/Tasks/${id}`);
    return response.data;
  },

  // Reorder tasks
  reorderTasks: async (reorderData) => {
    const response = await api.put('/api/Tasks/reorder', reorderData);
    return response.data;
  }
};