import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

export const counterSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    addMovie: (state, action) => {
        const addNewMovie = state
        addedNewMovie.push(action.payload)
        state = addedNewMovie;
    },
  },
});

// Action creators are generated for each case reducer function
export const { addMovie} = moviesSlice.actions;

export default moviesSlice.reducer;
