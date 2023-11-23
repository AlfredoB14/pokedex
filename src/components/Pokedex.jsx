import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Pokemon } from './Pokemon'
import db from '../firebase/firebaseConfig'
import { doc, onSnapshot, setDoc, collection, addDoc, updateDoc } from 'firebase/firestore'
import Button from '@mui/material/Button'


export const Pokedex = ({view}) => {

    const[pokemones, setPokemones] = useState([])
    const[team, setTeam] = useState([])
    const[page, setPage] = useState(1)
    const[counter, setCounter] = useState(0)

    let url = ``
    
    if (view == 1)
        url = `https://pokeapi.co/api/v2/pokemon?limit=1&offset=${(page - 1) * 1}`
    else
        url = `https://pokeapi.co/api/v2/pokemon?limit=20&offset=${(page - 1) * 20}`

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
                        imageShiny: pokemon.sprites.front_shiny,
                        sprites: pokemon.sprites
                    }
                }) 
                setPokemones(pokemonData)
            })
        })
    }, [setPokemones, page, view])

    useEffect(()=>{
        const unsub = onSnapshot(doc(db, "team", "principal"), (snapshot) => {
            //console.log(snapshot.data())

            const data = snapshot.data()

            Object.keys(data).forEach((key) => {
                console.log(`${key}: ${data[key]}`)
            });

            //ADD DATA TO THE DB
           
            setDoc(doc(db, "team", "principal"), {
                team
                
                })
           
        })
    }, [setTeam])

    //Get team
    useEffect(()=>{
        
    }, [team])

    const addPokemon = (pokemon) => {

        if(team.length < 6 && !team.includes(pokemon)){
            setTeam((prevPokemon) => [...prevPokemon, pokemon])
            setCounter((prevcontador = 1) => prevcontador + 1)
        }

        console.log(team)
    };


    const deletePokemon = (pokemon) => {
        setTeam((prevTeam) => prevTeam.filter((teamMember) => teamMember.id !== pokemon.id));
    };

  return ( 
    <>
        <div>

            <div className='teamgrid'>
                
                {team.map((pokemon) =>
                {
                    return <Pokemon key={pokemon.name} pokemon={pokemon} onAdd={() => addPokemon(pokemon) } onDelete={() => deletePokemon(pokemon)} selected={true}/>
                })}

            </div>




            <div className="parent">
                {pokemones.map((pokemon) =>
                {
                    return <Pokemon key={pokemon.name} pokemon={pokemon} onAdd={() => addPokemon(pokemon)} onDelete={() => deletePokemon(pokemon)} selected={false}/>
                })}
            </div>

            <div>
                {
                    page != 1 && <Button variant="contained" onClick={() => setPage(page - 1)} >Anterior</Button> 
                }
                
                <Button variant="contained" onClick={() => setPage(page + 1) }>Siguiente</Button>
            </div>
    </div>


  </>
  )
}
