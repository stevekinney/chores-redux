import { configureStore } from '@reduxjs/toolkit';
import { tasksSlice } from './tasksSlice';

export const store = configureStore({
  reducer: {
    tasks: tasksSlice.reducer,
    humans: (state) => []
  }
});
