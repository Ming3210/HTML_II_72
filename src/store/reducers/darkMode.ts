import { createSlice } from "@reduxjs/toolkit";

const initial:boolean = true;

const changeUI = createSlice({
    name: "changeUI",
    initialState: initial,
    reducers: {
        changeUIReducer: (state:boolean) => {
            state =!state;
            return state;
        }
    }
})

export const { changeUIReducer } = changeUI.actions;

export default changeUI.reducer;