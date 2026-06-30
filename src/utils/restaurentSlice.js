import { createSlice } from "@reduxjs/toolkit";

const restaurentSlice = createSlice({
    name: "restaurent",
    initialState: null,
    reducers: {
        addRestaurent: (state, action) => {
            return action.payload;
        },
        removeRestaurent: (state, action) => {
            return null;
        }
    }
})

export const { addRestaurent, removeRestaurent } = restaurentSlice.actions;

export default restaurentSlice.reducer;