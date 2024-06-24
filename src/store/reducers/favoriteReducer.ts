// src/redux/accountsSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initial = [
  { id: 1, name: 'Account 1', isFavorite: false },
  { id: 2, name: 'Account 2', isFavorite: false },
  { id: 3, name: 'Account 3', isFavorite: false },
];

const favoriteReducer = createSlice({
  name: 'favoriteReducer',
  initialState:initial,
  reducers: {
    toggleFavorite: (state, action) => {
      const accountId = state.find(acc => acc.id === action.payload);
      if (accountId) {
        accountId.isFavorite = !accountId.isFavorite;
      }
    },
  },
});

export const { toggleFavorite } = favoriteReducer.actions;
export default favoriteReducer.reducer;
