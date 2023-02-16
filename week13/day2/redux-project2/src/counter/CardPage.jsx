import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { MovieCard } from './MovieCard';
import { NavBar } from './NavBar';


export const CardPage = () => {
  const movies = useSelector(state => state.movies);

  return (
    <div>   
        <div className="flex flex-row gap-5 flex-wrap justify-center w-full">
            {movies?.map((movie) => <MovieCard movie={movie} /> )}
        </div>
    </div>
  );
}