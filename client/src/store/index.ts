import { configureStore } from '@reduxjs/toolkit';
import { reducer as app } from './app/slice';
import { reducer as user } from './user/slice';

const store = configureStore({
  reducer: { app, user },
});

export { store };
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
