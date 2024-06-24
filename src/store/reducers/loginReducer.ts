// src/store/reducers/loginReduer.js
import { createSlice } from '@reduxjs/toolkit';

const initial = {
  user: null,
};

const loginReduer = createSlice({
  name: 'userLogin',
  initialState:initial,
  reducers: {
    login: (state, action) => {
      state.user = action.payload;
    },
    logout: (state) => {
      state.user = null;
    },
  },
});

export const { login, logout } = loginReduer.actions;
export default loginReduer.reducer;
