import { createSlice } from "@reduxjs/toolkit";
import { useEffect } from "react";

const initialState = {
    cartItems: [],
    cartTotalQuantity: 0,
    cartTotalAmount: 0
}

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart(state, action) {
            const itemIndex = state.cartItems.findIndex((item) => item.item === action.payload.item)
            if (itemIndex >= 0) {
                state.cartItems[itemIndex].cartQuantity += 1
            } else {
                const tempProduct = { ...action.payload, cartQuantity: 1 }
                state.cartTotalQuantity += 1
                state.cartItems.push(tempProduct)
            }
        },
        removeFromCart(state, action) {
            const itemIndex = state.cartItems.findIndex((item) => item.item === action.payload.item)
            if (itemIndex >= 0) {

                state.cartItems.splice(itemIndex, 1)
                state.cartTotalQuantity -= 1



            } else {
                console.log("cant delete more of these")
            }
        }
    }
})


export const { addToCart, removeFromCart } = cartSlice.actions
export default cartSlice.reducer