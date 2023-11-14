import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Pokemon } from './Pokemon'
import db from '../firebase/firebaseConfig'
import { collection, addDoc } from 'firebase/firestore'
export const Pokedex = () => {

    const[pokemones, setPokemones] = useState([])

    const url = "https://pokeapi.co/api/v2/pokemon"

    useEffect(() => {
        axios.get(url).then((response) => {
            //setPokemones(response.data.results)
            const pokemonList = response.data.results
            const pokemonPromises = pokemonList.map(pokemon => {
                return axios.get(pokemon.url)
            })
            Promise.all(pokemonPromises).then(pokemonResponses => {
                const pokemonData = pokemonResponses.map(res => {
                    const pokemon = res.data
                    return {
                        ...pokemon,
                        image: pokemon.sprites.front_default,
                        sprites: pokemon.sprites
                    }
                }) 
                setPokemones(pokemonData)
            })
        })
    }, [setPokemones])
    
  return ( 
    <div>
        {pokemones.map((pokemon) =>
        {
            return <Pokemon key={pokemon.id} pokemon={pokemon}/>
        })}
  </div>
  )
}
