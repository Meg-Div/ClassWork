import React from 'react'
import {Link } from "react-router-dom";

export const MovieCard = ({movie}) => {

  const hasPoster = movie?.Poster !== 'N/A'
  if (!hasPoster) {
    return null
  }

  return (
    <div className="w-[20vw] h-[30vw]">
        <Link to="/page" state={movie?.imdbID}>
          <img className="object-fill" src={movie?.Poster}></img>
        </Link>
    </div>
  )
}
