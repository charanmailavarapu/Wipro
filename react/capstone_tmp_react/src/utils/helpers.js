import { 
  TASK_STATUS, 
  TASK_PRIORITY, 
  DATE_FORMATS,
  USER_ROLES 
} from './constants';
import { format, parseISO, isBefore, isToday, isTomorrow, isAfter } from 'date-fns';

// Format date for display
export const formatDate = (date, formatStr = DATE_FORMATS.DISPLAY) => {
  if (!date) return 'No date';
  try {
    const dateObj = typeof date === 'string' ? parseISO(date) : date;
    return format(dateObj, formatStr);
  } catch (error) {
    console.error('Date formatting error:', error);
    return 'Invalid date';
  }
};

// Get relative time (e.g., "2 days ago")
export const getRelativeTime = (date) => {
  if (!date) return '';
  
  const now = new Date();
  const dateObj = typeof date === 'string' ? parseISO(date) : date;
  const diffInMs = now - dateObj;
  const diffInSecs = Math.floor(diffInMs / 1000);
  const diffInMins = Math.floor(diffInSecs / 60);
  const diffInHours = Math.floor(diffInMins / 60);
  const diffInDays = Math.floor(diffInHours / 24);

  if (diffInSecs < 60) return 'just now';
  if (diffInMins < 60) return `${diffInMins} min${diffInMins !== 1 ? 's' : ''} ago`;
  if (diffInHours < 24) return `${diffInHours} hour${diffInHours !== 1 ? 's' : ''} ago`;
  if (diffInDays < 7) return `${diffInDays} day${diffInDays !== 1 ? 's' : ''} ago`;
  
  return formatDate(dateObj);
};

// Check if a task is overdue
export const isOverdue = (dueDate) => {
  if (!dueDate) return false;
  const due = typeof dueDate === 'string' ? parseISO(dueDate) : dueDate;
  return isBefore(due, new Date());
};

// Get due date status text
export const getDueDateStatus = (dueDate) => {
  if (!dueDate) return { text: 'No due date', status: 'neutral' };
  
  const due = typeof dueDate === 'string' ? parseISO(dueDate) : dueDate;
  const today = new Date();
  
  if (isToday(due)) return { text: 'Due today', status: 'urgent' };
  if (isTomorrow(due)) return { text: 'Due tomorrow', status: 'warning' };
  if (isBefore(due, today)) return { text: 'Overdue', status: 'error' };
  if (isAfter(due, today)) {
    const diffInDays = Math.floor((due - today) / (1000 * 60 * 60 * 24));
    return { 
      text: `Due in ${diffInDays} day${diffInDays !== 1 ? 's' : ''}`, 
      status: diffInDays <= 3 ? 'warning' : 'neutral' 
    };
  }
  
  return { text: formatDate(due), status: 'neutral' };
};

// Get user initials for avatar
export const getUserInitials = (firstName, lastName) => {
  if (!firstName && !lastName) return 'U';
  return `${firstName?.charAt(0) || ''}${lastName?.charAt(0) || ''}`.toUpperCase();
};

// Get color based on status
export const getStatusColor = (status) => {
  switch (status) {
    case TASK_STATUS.TODO: return '#DFE1E6';
    case TASK_STATUS.IN_PROGRESS: return '#0052CC';
    case TASK_STATUS.REVIEW: return '#FFAB00';
    case TASK_STATUS.DONE: return '#36B37E';
    default: return '#DFE1E6';
  }
};

// Get color based on priority
export const getPriorityColor = (priority) => {
  switch (priority) {
    case TASK_PRIORITY.HIGH: return '#FF5630';
    case TASK_PRIORITY.MEDIUM: return '#FFAB00';
    case TASK_PRIORITY.LOW: return '#36B37E';
    default: return '#FFAB00';
  }
};

// Debounce function for search inputs
export const debounce = (func, wait) => {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
};

// Format file size
export const formatFileSize = (bytes) => {
  if (bytes === 0) return '0 Bytes';
  const k = 1024;
  const sizes = ['Bytes', 'KB', 'MB', 'GB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
};

// Check if user has permission
export const hasPermission = (user, requiredRole, project = null) => {
  if (!user || !user.role) return false;
  
  const roleHierarchy = {
    [USER_ROLES.ADMIN]: 4,
    [USER_ROLES.PROJECT_MANAGER]: 3,
    [USER_ROLES.TEAM_MEMBER]: 2,
    [USER_ROLES.VIEWER]: 1
  };
  
  // Check if user role meets or exceeds required role
  if (roleHierarchy[user.role] >= roleHierarchy[requiredRole]) {
    // For project-specific permissions, additional checks can be added here
    if (project && project.managerId && user.role === USER_ROLES.PROJECT_MANAGER) {
      return project.managerId === user.id;
    }
    return true;
  }
  
  return false;
};

// Generate random ID (for client-side temporary items)
export const generateId = () => {
  return Math.random().toString(36).substr(2, 9);
};

// Truncate text with ellipsis
export const truncateText = (text, maxLength) => {
  if (!text) return '';
  if (text.length <= maxLength) return text;
  return text.substr(0, maxLength) + '...';
};

// Parse error message from API response
export const getErrorMessage = (error) => {
  if (error.response?.data?.message) {
    return error.response.data.message;
  }
  if (error.response?.data?.errors) {
    return Object.values(error.response.data.errors).flat().join(', ');
  }
  if (error.message) {
    return error.message;
  }
  return 'An unexpected error occurred';
};

// Local storage helpers
export const storage = {
  get: (key) => {
    try {
      const item = localStorage.getItem(key);
      return item ? JSON.parse(item) : null;
    } catch (error) {
      console.error('Error reading from localStorage:', error);
      return null;
    }
  },
  set: (key, value) => {
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.error('Error writing to localStorage:', error);
    }
  },
  remove: (key) => {
    try {
      localStorage.removeItem(key);
    } catch (error) {
      console.error('Error removing from localStorage:', error);
    }
  }
};