import api from './api';

export const notificationService = {
  // Get all notifications
  getNotifications: async () => {
    const response = await api.get('/api/Notifications');
    return response.data;
  },

  // Create a new notification
  createNotification: async (notificationData) => {
    const response = await api.post('/api/Notifications', notificationData);
    return response.data;
  },

  // Mark notification as read
  markAsRead: async (id) => {
    const response = await api.put(`/api/Notifications/${id}/read`);
    return response.data;
  },

  // Delete a notification
  deleteNotification: async (id) => {
    const response = await api.delete(`/api/Notifications/${id}`);
    return response.data;
  },
};