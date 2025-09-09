import api from './api';

export const fileService = {
  // Upload a file
  uploadFile: async (fileData) => {
    const formData = new FormData();
    formData.append('file', fileData);
    
    const response = await api.post('/api/Files/upload', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    return response.data;
  },

  // Get files for a task
  getTaskFiles: async (taskId) => {
    const response = await api.get(`/api/Files/task/${taskId}`);
    return response.data;
  },

  // Delete a file
  deleteFile: async (fileId) => {
    const response = await api.delete(`/api/Files/${fileId}`);
    return response.data;
  },
};