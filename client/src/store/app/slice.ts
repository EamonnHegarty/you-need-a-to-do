import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IData } from '../../interfaces/IData';
import { getTodos } from './apiActions';

type AppState = {
  data: Array<IData> | [];
  title: string;
  description: string;
  taskDate: Date;
  status: string;
  priority: string;
};

const initialState: AppState = {
  data: [],
  title: '',
  description: '',
  taskDate: new Date(),
  status: '',
  priority: '',
};

const { actions, reducer } = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setData: (state, action: PayloadAction<Array<IData>>) => {
      state.data = action.payload;
    },
    setTitle: (state, action: PayloadAction<string>) => {
      state.title = action.payload;
    },
    setDescription: (state, action: PayloadAction<string>) => {
      state.description = action.payload;
    },
    setTaskDate: (state, action: PayloadAction<Date>) => {
      state.taskDate = action.payload;
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
