import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type AppState = {
  test: string;
};

const initialState: AppState = {
  test: 'hi',
};

const { actions, reducer } = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setTest: (state, action: PayloadAction<string>) => {
      state.test = action.payload;
    },
  },
});

export { actions, reducer };
