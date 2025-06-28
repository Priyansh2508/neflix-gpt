import { createSlice } from "@reduxjs/toolkit";

const gptSlice= createSlice({
    name: "gpt",
    initialState: {
        showGptSearch: false,
        genaiMovies:null, // Corrected initial state key to match the reducer
        movieNames:null,
        movieResults:null
    },
    reducers: {
        toggleGptSearchView: (state) => {
            state.showGptSearch = !state.showGptSearch;
        },
        addGenaiMovieResult:(state, action) => {
            const {movieNames, movieResults}=action.payload;
            state.movieNames = movieNames;
            state.movieResults = movieResults;
        }
    },
})

export const { toggleGptSearchView, addGenaiMovieResult } = gptSlice.actions;
export default gptSlice.reducer;