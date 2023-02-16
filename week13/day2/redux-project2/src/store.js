import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counter/CounterSlice";
import movieReducer from "./counter/MoviesSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    movies: movieReducer,
  },
});
