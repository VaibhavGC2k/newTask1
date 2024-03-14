import { configureStore } from "@reduxjs/toolkit";
import addToCart from "../features/cartSlice"
export const store = configureStore({
    reducer:{
        cart:addToCart
    }
})

 