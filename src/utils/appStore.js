import { configureStore } from "@reduxjs/toolkit";
import  userReducer  from "./userSlice"; // Ensure this path is correct
import moviesReducer from "./moviesSlice"; // Ensure this path is correct
const appStore = configureStore({
  reducer: {
    // Add your reducers here
    user : userReducer,
    movies:moviesReducer, // Ensure moviesReducer is imported correctly
  }
});

export default appStore;