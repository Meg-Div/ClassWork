import React from 'react'
import { useState } from 'react'


export const PokemonHomePage = ({pokemon}) => {
  return (
    <div>
    <h1>Pokemons</h1>
    console.log(pokemon)
    {pokemon.map((poke) => (
    <h3>{poke.name}</h3>
    ))}
    </div>
  );
};
