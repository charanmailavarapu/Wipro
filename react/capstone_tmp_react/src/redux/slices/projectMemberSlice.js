import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { projectMemberService } from '../../services/projectMembers';

// Async thunks
export const fetchProjectMembers = createAsyncThunk(
  'projectMembers/fetchByProject',
  async (projectId, { rejectWithValue }) => {
    try {
      const response = await projectMemberService.getProjectMembers(projectId);
      return { projectId, members: response };
    } catch (error) {
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);

export const addProjectMember = createAsyncThunk(
  'projectMembers/addMember',
  async ({ projectId, memberData }, { rejectWithValue }) => {
    try {
      const response = await projectMemberService.addProjectMember(projectId, memberData);
      return { projectId, member: response };
    } catch (error) {
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);

export const removeProjectMember = createAsyncThunk(
  'projectMembers/removeMember',
  async ({ projectId, userId }, { rejectWithValue }) => {
    try {
      await projectMemberService.removeProjectMember(projectId, userId);
      return { projectId, userId };
    } catch (error) {
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);

export const updateMemberRole = createAsyncThunk(
  'projectMembers/updateRole',
  async ({ projectId, userId, role }, { rejectWithValue }) => {
    try {
      const response = await projectMemberService.updateMemberRole(projectId, userId, role);
      return { projectId, member: response };
    } catch (error) {
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);

const projectMemberSlice = createSlice({
  name: 'projectMembers',
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
    setCurrentProject: (state, action) => {
      state.currentProjectId = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      // Fetch project members
      .addCase(fetchProjectMembers.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchProjectMembers.fulfilled, (state, action) => {
        state.isLoading = false;
        state.items = action.payload.members;
        state.currentProjectId = action.payload.projectId;
      })
      .addCase(fetchProjectMembers.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      // Add project member
      .addCase(addProjectMember.fulfilled, (state, action) => {
        state.items.push(action.payload.member);
      })
      // Remove project member
      .addCase(removeProjectMember.fulfilled, (state, action) => {
        state.items = state.items.filter(member => member.userId !== action.payload.userId);
      })
      // Update member role
      .addCase(updateMemberRole.fulfilled, (state, action) => {
        const index = state.items.findIndex(member => member.userId === action.payload.member.userId);
        if (index !== -1) {
          state.items[index] = action.payload.member;
        }
      });
  },
});

export const { clearError, setCurrentProject } = projectMemberSlice.actions;
export default projectMemberSlice.reducer;