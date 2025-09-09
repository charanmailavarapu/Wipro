import api from './api';

export const commentService = {
  // Get comments for a task
  getComments: async (taskId) => {
    const response = await api.get(`/api/Comments/${taskId}`);
    return response.data;
  },

  // Create a new comment
  createComment: async (commentData) => {
    const response = await api.post('/api/Comments', commentData);
    return response.data;
  },
};