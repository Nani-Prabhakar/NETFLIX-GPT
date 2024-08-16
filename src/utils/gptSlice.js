import { createSlice } from '@reduxjs/toolkit';


const gptSlice=createSlice({
    name:'gpt',
    initialState:{
        showGptSearch:false,
    },
    reducers:{
        gptToggleSearchView:(state)=>{
            state.showGptSearch=!state.showGptSearch;
        }
    }

})
export const{gptToggleSearchView}=gptSlice.actions;
export default gptSlice.reducer;