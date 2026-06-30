import { configureStore } from "@reduxjs/toolkit";
import CartReducer from "./CartSlice";
import UserReducer from "./userSlice";
import restaurentReducer from "./restaurentSlice"

const appStore=configureStore({
    reducer:{
        cart:CartReducer,
        user:UserReducer,
        restaurent:restaurentReducer,
    }
});

export default appStore;