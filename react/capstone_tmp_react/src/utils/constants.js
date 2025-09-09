// User Roles
export const USER_ROLES = {
  ADMIN: 'Admin',
  PROJECT_MANAGER: 'Project Manager',
  TEAM_MEMBER: 'Team Member',
  VIEWER: 'Viewer'
};

// Task Statuses
export const TASK_STATUS = {
  TODO: 'todo',
  IN_PROGRESS: 'inprogress',
  REVIEW: 'review',
  DONE: 'done'
};

// Task Priorities
export const TASK_PRIORITY = {
  HIGH: 'high',
  MEDIUM: 'medium',
  LOW: 'low'
};

// Project Statuses
export const PROJECT_STATUS = {
  ACTIVE: 'active',
  COMPLETED: 'completed',
  ON_HOLD: 'on_hold',
  ARCHIVED: 'archived'
};

// Notification Types
export const NOTIFICATION_TYPES = {
  TASK_ASSIGNED: 'task_assigned',
  TASK_UPDATED: 'task_updated',
  COMMENT_ADDED: 'comment_added',
  FILE_UPLOADED: 'file_uploaded',
  PROJECT_INVITE: 'project_invite'
};

// API Endpoints
export const API_ENDPOINTS = {
  AUTH: {
    LOGIN: '/api/Auth/login',
    REGISTER: '/api/Auth/register'
  },
  PROJECTS: {
    BASE: '/api/projects',
    MEMBERS: (projectId) => `/api/projects/${projectId}/members`,
    MEMBER: (projectId, userId) => `/api/projects/${projectId}/members/${userId}`,
    MEMBER_ROLE: (projectId, userId) => `/api/projects/${projectId}/members/${userId}/role`
  },
  TASKS: {
    BASE: '/api/Tasks',
    PROJECT_TASKS: (projectId) => `/api/Tasks/${projectId}`,
    REORDER: '/api/Tasks/reorder'
  },
  COMMENTS: {
    BASE: '/api/Comments',
    TASK_COMMENTS: (taskId) => `/api/Comments/${taskId}`
  },
  FILES: {
    UPLOAD: '/api/Files/upload',
    TASK_FILES: (taskId) => `/api/Files/task/${taskId}`,
    DELETE: (fileId) => `/api/Files/${fileId}`
  },
  NOTIFICATIONS: {
    BASE: '/api/Notifications'
  }
};

// Local Storage Keys
export const STORAGE_KEYS = {
  AUTH_TOKEN: 'authToken',
  USER_DATA: 'user',
  THEME: 'theme',
  LANGUAGE: 'language'
};

// Date Formats
export const DATE_FORMATS = {
  DISPLAY: 'MMM dd, yyyy',
  API: 'yyyy-MM-dd',
  DATE_TIME: 'MMM dd, yyyy hh:mm a'
};

// Default Values
export const DEFAULTS = {
  TASK_PRIORITY: TASK_PRIORITY.MEDIUM,
  TASK_STATUS: TASK_STATUS.TODO,
  PROJECT_STATUS: PROJECT_STATUS.ACTIVE,
  PAGE_SIZE: 10
};

// Validation Rules
export const VALIDATION = {
  EMAIL: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
  PASSWORD: {
    MIN_LENGTH: 6,
    REQUIRE_UPPERCASE: true,
    REQUIRE_LOWERCASE: true,
    REQUIRE_NUMBER: true,
    REQUIRE_SPECIAL_CHAR: false
  },
  USERNAME: {
    MIN_LENGTH: 3,
    MAX_LENGTH: 20,
    ALLOWED_CHARS: /^[a-zA-Z0-9_-]+$/
  }
};

// Theme Colors
export const COLORS = {
  PRIMARY: '#0052cc',
  SECONDARY: '#6554C0',
  SUCCESS: '#36B37E',
  WARNING: '#FFAB00',
  ERROR: '#FF5630',
  INFO: '#00B8D9',
  TEXT: {
    PRIMARY: '#172B4D',
    SECONDARY: '#5E6C84',
    DISABLED: '#A5ADBA'
  },
  BACKGROUND: {
    DEFAULT: '#F4F5F7',
    PAPER: '#FFFFFF'
  }
};