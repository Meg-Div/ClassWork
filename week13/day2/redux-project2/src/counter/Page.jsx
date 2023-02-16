import React, {useState, useEffect} from 'react'
import {useLocation} from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faStar, faStarHalf, faStarHalfStroke} from "@fortawesome/free-solid-svg-icons";


export const Page = () => {
    const [movie, setMovie] = useState({})
    const location = useLocation()
    const ID = location.state

    useEffect(() => {
        const call = async (id) => {
            let url = "http://www.omdbapi.com/?i=" + id + "&apikey=" + import.meta.env.VITE_APIKEY + "&plot=full";
            const rawData = await fetch(url);
            const readData = await rawData.json();
            setMovie(readData);
        }
        call(ID);
    }, [ID]);
    

  return (
    <div className="inline-block">

        <div className="card">
            <br></br>
            
            <div className="poster rounded">{<img src={movie?.Poster}></img>}</div>

            <div className="details">

            {<div className="flex justify-center text-white py-3"><Ratings ratings={movie?.Ratings}/></div>}

            {<div className="flex  justify-center text-yellow-300"><RatingsStars ratings={movie.Ratings}/></div>}

            {<div className="flex justify-center text-white m-0 p-0 text-3xl py-3">{movie.Title}</div>}

            {<div className="flex justify-center text-white">{movie.Plot}</div>}

            </div>
            
        </div>
    </div>
  )
}


//check for ratings
function Ratings({ratings}) {
    if (!ratings || !ratings.length) return null    
    
    const firstRating = ratings[0]
    return firstRating.Value
}

//populate stars from ratings
function RatingsStars({ratings}) {
    if (!ratings || !ratings.length) return null;
    const ratingsString = ratings[0].Value.split('/')[0]

    const ratingsNum = Math.floor(parseFloat(ratingsString, 10))

    const ratingsStars = [];
    for (let i = 0; i < ratingsNum; i++) {
        ratingsStars.push(<FontAwesomeIcon key={i} icon={faStar} />)
    }

    const decimalCheck = parseFloat(ratingsString, 10)
    if (!Number.isInteger(decimalCheck)) {
        ratingsStars.push(<FontAwesomeIcon key={ratingsNum+1} icon={faStarHalfStroke} />)
    }

    return ratingsStars
}