import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IData } from '../../interfaces/IData';
import { getTodos } from './apiActions';

type AppState = {
  data: Array<IData> | [];
};

const initialState: AppState = {
  data: [],
};

const { actions, reducer } = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setData: (state, action: PayloadAction<Array<IData>>) => {
      state.data = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(
      getTodos.fulfilled,
      (state, action: PayloadAction<Array<IData>>) => {
        state.data = action.payload;
      },
    );
  },
});

export { actions, reducer };
