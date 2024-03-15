import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchImages = createAsyncThunk('fetchImages', async () => {
    const response = await axios.get('https://jsonplaceholder.typicode.com/photos')
    return response.data
})

const imageSlice = createSlice({
    name: "images",
    initialState: {
        isLoading: false,
        data: null,
        isError: false
    },
    extraReducers: (builder) => {
        builder.addCase(fetchImages.pending, (state) => {
            console.log("pending")
            state.isLoading = true
        })
        builder.addCase(fetchImages.fulfilled, (state, action) => {
            console.log("fulfilled")
            state.isLoading = false;
            state.data = action.payload
        })
        builder.addCase(fetchImages.rejected, (state, action) => {
            console.log("error")
            state.isError = true
        })

    }
})

export default imageSlice.reducer