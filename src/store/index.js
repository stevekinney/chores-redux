import { configureStore } from '@reduxjs/toolkit';
import { humansSlice } from './HumansSlice';
import { tasksSlice } from './TasksSlice';

export const store = configureStore({
  reducer: {
    humans: humansSlice.reducer,
    tasks: tasksSlice.reducer
  }
});
