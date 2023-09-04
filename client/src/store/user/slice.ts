import { createSlice } from '@reduxjs/toolkit';
import { UserInfo } from '../../interfaces/IUserInfo';

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
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    logoutClient: (state) => {
      state.userInfo = null;
      localStorage.removeItem('userInfo');
    },
  },
});

export { actions, reducer };
