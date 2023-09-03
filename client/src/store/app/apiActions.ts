import { createAsyncThunk } from '@reduxjs/toolkit';
import { TODOS_URL } from '../../constants';
import axios from 'axios';

const getTodos = createAsyncThunk('todos', async () => {
  const response = await axios.get(`http://localhost:5000${TODOS_URL}`);
  return response.data;
});

export { getTodos };
