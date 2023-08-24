import { configureStore } from '@reduxjs/toolkit';
import { reducer as app } from './app/slice';

const store = configureStore({
  reducer: { app },
});

export { store };
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
