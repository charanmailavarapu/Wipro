// import api from './api';

// export const projectMemberService = {
//   // Get project members - FIXED (this should be GET, not POST)
//   getProjectMembers: async (projectId) => {
//     const response = await api.get(`/api/projects/${projectId}/members`);
//     return response.data;
//   },

//   // Add project member - FIXED URL and method
//   addProjectMember: async (projectId, memberData) => {
//     const response = await api.post(`/api/projects/${projectId}/members`, memberData);
//     return response.data;
//   },

//   // Remove member from project - CORRECT
//   removeProjectMember: async (projectId, userId) => {
//     const response = await api.delete(`/api/projects/${projectId}/members/${userId}`);
//     return response.data;
//   },

//   // Update member role - CORRECT
//   updateMemberRole: async (projectId, userId, role) => {
//     const response = await api.put(`/api/projects/${projectId}/members/${userId}/role`, { role });
//     return response.data;
//   },
// };

import api from './api';

export const projectMemberService = {
  // Get all members for a project
  getProjectMembers: async (projectId) => {
    const response = await api.get(`/api/projects/${projectId}/members`);
    return response.data;
  },

  // Add member to project
  addProjectMember: async (projectId, memberData) => {
    const response = await api.post(`/api/projects/${projectId}/members`, memberData);
    return response.data;
  },

  // Remove member from project
  removeProjectMember: async (projectId, userId) => {
    const response = await api.delete(`/api/projects/${projectId}/members/${userId}`);
    return response.data;
  },

  // Update member role
  updateMemberRole: async (projectId, userId, role) => {
    const response = await api.put(`/api/projects/${projectId}/members/${userId}/role`, { role });
    return response.data;
  }
};