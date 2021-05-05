import { createStore } from 'redux';

export const store = createStore(
  (state = { humans: [], tasks: [] }, action) => state
);
