import api from './api';

export const projectService = {
  // Get all projects
  getProjects: async () => {
    const response = await api.get('/api/projects');
    return response.data;
  },

  // Get a single project by ID
  getProject: async (id) => {
    const response = await api.get(`/api/projects/${id}`);
    return response.data;
  },

  // Create a new project
  createProject: async (projectData) => {
    const response = await api.post('/api/projects', projectData);
    return response.data;
  },

  // Update a project
  updateProject: async (id, projectData) => {
    const response = await api.put(`/api/projects/${id}`, projectData);
    return response.data;
  },

  // Delete a project
  deleteProject: async (id) => {
    const response = await api.delete(`/api/projects/${id}`);
    return response.data;
  },

  // Get project members
  getProjectMembers: async (projectId) => {
    const response = await api.get(`/api/projects/${projectId}/members`);
    return response.data;
  },

  // Add a member to a project
  addProjectMember: async (projectId, memberData) => {
    const response = await api.post(`/api/projects/${projectId}/members`, memberData);
    return response.data;
  },

  // Remove a member from a project
  removeProjectMember: async (projectId, userId) => {
    const response = await api.delete(`/api/projects/${projectId}/members/${userId}`);
    return response.data;
  },

  // Update member role
  updateMemberRole: async (projectId, userId, role) => {
    const response = await api.put(`/api/projects/${projectId}/members/${userId}/role`, { role });
    return response.data;
  },
};

export default projectService;