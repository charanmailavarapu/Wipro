import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { taskService } from '../../services/tasks';

// Async thunks
export const fetchTasksByProject = createAsyncThunk(
  'tasks/fetchByProject',
  async (projectId, { rejectWithValue }) => {
    try {
      const response = await taskService.getTasksByProject(projectId);
      return response;
    } catch (error) {
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);

export const createTask = createAsyncThunk(
  'tasks/createTask',
  async (taskData, { rejectWithValue }) => {
    try {
      const response = await taskService.createTask(taskData);
      return response;
    } catch (error) {
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);

export const updateTask = createAsyncThunk(
  'tasks/updateTask',
  async ({ id, taskData }, { rejectWithValue }) => {
    try {
      const response = await taskService.updateTask(id, taskData);
      return response;
    } catch (error) {
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);

export const deleteTask = createAsyncThunk(
  'tasks/deleteTask',
  async (id, { rejectWithValue }) => {
    try {
      await taskService.deleteTask(id);
      return id;
    } catch (error) {
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);

export const reorderTasks = createAsyncThunk(
  'tasks/reorderTasks',
  async ({ projectId, column, ordering }, { rejectWithValue }) => {
    try {
      const response = await taskService.reorderTasks(projectId, column, ordering);
      return response;
    } catch (error) {
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);

const taskSlice = createSlice({
  name: 'tasks',
  initialState: {
    items: [],
    currentProjectId: null,
    isLoading: false,
    error: null,
  },
  reducers: {
    clearError: (state) => {
      state.error = null;
    },
    moveTaskLocally: (state, action) => {
      const { taskId, newStatus, newOrder } = action.payload;
      const taskIndex = state.items.findIndex(task => task.id === taskId);
      
      if (taskIndex !== -1) {
        state.items[taskIndex].status = newStatus;
        state.items[taskIndex].orderIndex = newOrder;
      }
    },
    setCurrentProject: (state, action) => {
      state.currentProjectId = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      // Fetch tasks by project
      .addCase(fetchTasksByProject.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchTasksByProject.fulfilled, (state, action) => {
        state.isLoading = false;
        state.items = action.payload;
        state.currentProjectId = action.meta.arg;
      })
      .addCase(fetchTasksByProject.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      // Create task
      .addCase(createTask.fulfilled, (state, action) => {
        state.items.push(action.payload);
      })
      // Update task
      .addCase(updateTask.fulfilled, (state, action) => {
        const index = state.items.findIndex(task => task.id === action.payload.id);
        if (index !== -1) {
          state.items[index] = action.payload;
        }
      })
      // Delete task
      .addCase(deleteTask.fulfilled, (state, action) => {
        state.items = state.items.filter(task => task.id !== action.payload);
      });
  },
});

export const { clearError, moveTaskLocally, setCurrentProject } = taskSlice.actions;
export default taskSlice.reducer;