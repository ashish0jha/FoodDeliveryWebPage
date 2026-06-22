import { createSlice } from "@reduxjs/toolkit";

const CartSlice = createSlice({
    name: "cart",
    initialState: {
        items: []
    },
    reducers: {
        addItem: (state, action) => {
            state.items.push(action.payload);
        },
        addItemsQuantity:(state,action)=>{
            const item = state.items.find(
                item => item.id === action.payload.id
            );
            if (item) {
                item.qty = action.payload.quantity;
            }
        },
        removeItem: (state, action) => {
            state.items = state.items.filter(item => item.id !== action.payload);
        },
        clearCart: (state) => {
            state.items.length = 0;
        },
    },
});

export const { addItem, removeItem, clearCart ,addItemsQuantity} = CartSlice.actions;

export default CartSlice.reducer;
