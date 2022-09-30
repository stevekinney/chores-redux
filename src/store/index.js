import { configureStore } from '@reduxjs/toolkit';
import { tasksSlice } from './taskSlice';
import { humanSlice } from './humanSlice';

export const store = configureStore({
  reducer: {
    tasks: tasksSlice.reducer,
    humans: humanSlice.reducer
  }
});
