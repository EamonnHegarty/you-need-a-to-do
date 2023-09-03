import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { USERS_URL } from '../../constants';

type LoginData = {
  email: string;
  password: string;
};

const login = createAsyncThunk('users/fetch', async (data: LoginData) => {
  const response = await axios.post(
    `http://localhost:5000${USERS_URL}/login`,
    data,
  );

  return response.data;
});

const logout = createAsyncThunk('users/fetch', async () => {
  const response = await axios.post(`http://localhost:5000${USERS_URL}/logout`);

  return response.data;
});

export { login, logout };
