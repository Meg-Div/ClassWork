import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

export const movieSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    searchMovie: (state, action) => {
      return action.payload;
    },
  },
});
export const { searchMovie } = movieSlice.actions;

export default movieSlice.reducer;