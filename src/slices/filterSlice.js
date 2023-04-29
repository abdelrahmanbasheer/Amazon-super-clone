import { createSlice } from "@reduxjs/toolkit";

const initialState={
    filter:"",
}

export const filterSlice=createSlice({
    name:"filtering",
    initialState,
    reducers:{
        changeFilter:(state,action)=>{
            state.filter=action.payload
        }
    }
})
export const{changeFilter}=filterSlice.actions

export default filterSlice.reducer