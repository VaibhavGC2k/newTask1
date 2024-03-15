import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
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
                console.log("this is redux ", state.cartItems[itemIndex].amount)
                state.cartTotalAmount += state.cartItems[itemIndex].amount
            } else {
                const tempProduct = { ...action.payload, cartQuantity: 1 }
                console.log(tempProduct)
                state.cartTotalQuantity += 1
                state.cartItems.push(tempProduct)
                state.cartTotalAmount += tempProduct.amount

            }
        },
        removeFromCart(state, action) {
            const itemIndex = state.cartItems.findIndex((item) => item.item === action.payload.item)
            if (itemIndex >= 0) {
                if (state.cartItems[itemIndex].cartQuantity > 1) {
                    state.cartItems[itemIndex].cartQuantity -= 1
                    state.cartTotalAmount -= state.cartItems[itemIndex].amount
                } else {
                    state.cartTotalAmount -= state.cartItems[itemIndex].amount
                    state.cartTotalQuantity -= 1
                    state.cartItems.splice(itemIndex, 1)
                }
            }
        },
        deleteFromCart(state, action) {
            const itemIndex = state.cartItems.findIndex((item) => item.item === action.payload.item)
            state.cartTotalAmount -= state.cartItems[itemIndex].amount * state.cartItems[itemIndex].cartQuantity
            state.cartTotalQuantity -= 1;
            state.cartItems.splice(itemIndex, 1)
        }

    }
})


export const { addToCart, removeFromCart, deleteFromCart } = cartSlice.actions
export default cartSlice.reducer