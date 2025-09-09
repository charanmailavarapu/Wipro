// import { configureStore } from '@reduxjs/toolkit';
// import authReducer from './slices/authSlice';
// import projectReducer from './slices/projectSlice';
// import taskReducer from './slices/taskSlice';

// export const store = configureStore({
//     reducer: {
//         auth: authReducer,
//         projects: projectReducer,
//         tasks: taskReducer,
//     },
// });

import { configureStore } from '@reduxjs/toolkit';
import authReducer from './slices/authSlice';
import projectReducer from './slices/projectSlice';
import taskReducer from './slices/taskSlice';
import projectMemberReducer from './slices/projectMemberSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    projects: projectReducer,
    tasks: taskReducer,
    projectMembers: projectMemberReducer,
  },
});

export default store;