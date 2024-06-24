import { createSlice } from "@reduxjs/toolkit";

const initial:number[] = [];

const listNumberReducer = createSlice({
    name:"listNumber",
    initialState:initial,
    reducers:{
        randomNumber: (state)=> {
           state.push(Math.floor(Math.random()*11))
        }
     
    }
   
})

export const {randomNumber} = listNumberReducer.actions;

export default listNumberReducer.reducer;