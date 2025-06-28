import { configureStore } from "@reduxjs/toolkit";
import  userReducer  from "./userSlice"; // Ensure this path is correct
import moviesReducer from "./moviesSlice"; // Ensure this path is correct
import gptReducer from "./gptSlice"; // Ensure this path is correct
import configReducer from "./configSlice"; // Ensure this path is correct
const appStore = configureStore({
  reducer: {
    // Add your reducers here
    user : userReducer,
    movies:moviesReducer,
    gpt:gptReducer,
    config: configReducer, // Ensure this path is correct
  }
});

export default appStore;