import { createSlice } from "@reduxjs/toolkit";

const initial:boolean = true;

const displayReducer = createSlice({
    name: "displayReducer",
    initialState: initial,
    reducers: {
        toggle: (state:boolean) =>!state
    }
})

export const {toggle} = displayReducer.actions;

export default displayReducer.reducer;