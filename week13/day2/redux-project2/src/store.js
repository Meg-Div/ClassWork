import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counter/counterSlice";
import movieReducer from "./counter/moviesSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    movies: movieReducer,
  },
});
