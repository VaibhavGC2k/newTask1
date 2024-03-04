import { configureStore } from "@reduxjs/toolkit";
import darkModeReducer from "./features/dark-mode-slice"

export const store = configureStore({
  reducer:{
    darkMode : darkModeReducer
  }
})