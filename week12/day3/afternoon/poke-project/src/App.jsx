import { useState } from 'react'

import { PokeData } from "./assets/components/data";

import { Route, Routes } from "react-router-dom"

import { PokemonHomePage } from "react-router-dom"
import { PokemonInfo } from "react-router-dom"

import './App.css'

function App() {
  const [pokemon, setPokemon] = useState(PokeData)

  return (
      <Routes>
        <Route path="/homepage" element={<PokemonHomePage pokemon={pokemon} />} 
        />
        <Route path="/info" element={<PokemonInfo/>} 
        />
      </Routes>
  );
}

export default App;
