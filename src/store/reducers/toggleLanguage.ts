import { createSlice } from '@reduxjs/toolkit';

let initial:string = "en"

const changeLang = createSlice({
  name: 'language',
  initialState: initial,
  reducers: {
    toggleLanguage: (state) => (state === 'en' ? 'vi' : 'en'),
  },
});

export const { toggleLanguage } = changeLang.actions;
export default changeLang.reducer;