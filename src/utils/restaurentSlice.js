import { createSlice } from "@reduxjs/toolkit";

const restaurentSlice = createSlice({
    name: "restaurent",
    initialState:{
        rest:[],
    },
    reducers: {
        addRestaurent: (state, action) => {
            return {
                rest:[...state.rest,...action.payload]
            }
        },
        removeRestaurent: (state, action) => {
            return null;
        }
    }
})

export const { addRestaurent, removeRestaurent } = restaurentSlice.actions;

export default restaurentSlice.reducer;