import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const fetchTodos = createAsyncThunk('users/fetch', async () => {
  console.log('fetch');
  const response = await axios.get('http://localhost:5000/api/todos');

  return response.data;
});

export { fetchTodos };
