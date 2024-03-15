import { configureStore } from "@reduxjs/toolkit";
import addToCart from "../features/cartSlice"
import imagesSlice from "../features/imagesSlice";
export const store = configureStore({
    reducer:{
        cart:addToCart,
        images:imagesSlice
    }
})

 