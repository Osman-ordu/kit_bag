import { configureStore } from '@reduxjs/toolkit';
import { exampleReducer } from './example';

export const store = configureStore({
  reducer: {
    exampleValue : exampleReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
