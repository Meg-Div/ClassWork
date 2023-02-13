import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { Counter } from './counter/Counter'
import { useSelector } from 'react-redux'
import { addMovie } from './counter/moviesSlice'


function App() {
  const dispatch = useDispatch();
  const [movieToAdd, setMovieToAdd] = useState("")
  const movies = useSelector(state => state.movies);
  return (
    <div className="App">
      <Counter />

      <h2>Movies</h2>
      {movies.length !== 0 ? movies.map((movie) => (
      <p> {movie?.name}</p>)
      ) : (
        <p> No movies yet</p>
      )}
      <input type="text" onChange={(e) => setMovieToAdd(e.target.value)}/>

      <button onClick={() => dispatch(addMovie(movieToAdd))}>Add Movie</button>
    </div>
  )
}

export default App
