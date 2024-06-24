import { createSlice } from "@reduxjs/toolkit";

const initial:boolean= true;

const resizeReducer = createSlice({
    name:"resize",
    initialState:initial,
    reducers:{
        resize: (state:boolean) =>{
            state =!state;            
            return state;
        }
     
    }
   
})

export const {resize} = resizeReducer.actions
export default resizeReducer.reducer;