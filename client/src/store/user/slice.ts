import { createSlice } from '@reduxjs/toolkit';

type UserInfo = {
  _id: string;
  name: string;
  email: string;
  isAdmin: boolean;
};

type UserState = {
  userInfo: UserInfo | null;
};

const userInfoFromLocalStorage = localStorage.getItem('userInfo');

const initialState: UserState = {
  userInfo:
    userInfoFromLocalStorage && userInfoFromLocalStorage !== 'undefined'
      ? JSON.parse(userInfoFromLocalStorage)
      : null,
};

const { actions, reducer } = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUserInfo: (state, action) => {
      state.userInfo = action.payload;
      localStorage.setItem('userInfo', JSON.stringify(action.payload));
    },
  },
});

export { actions, reducer };
