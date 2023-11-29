import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Pokemon } from './Pokemon'
import db from '../firebase/firebaseConfig'
import { doc, onSnapshot, setDoc, collection, addDoc, updateDoc, getDoc } from 'firebase/firestore'
import Button from '@mui/material/Button'


export const Pokedex = () => {

    const[pokemones, setPokemones] = useState([])
    const[team, setTeam] = useState([])
    const[page, setPage] = useState(1)
    const[counter, setCounter] = useState(0)


    let url = `https://pokeapi.co/api/v2/pokemon?limit=20&offset=${(page - 1) * 20}`

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
                        image: pokemon.sprites.other["official-artwork"].front_default,
                        imageShiny: pokemon.sprites.front_shiny,
                        sprites: pokemon.sprites,
                        types: pokemon.types
                    }
                }) 
                setPokemones(pokemonData)
            })
        })
    }, [setPokemones, page])

    useEffect(() => {
        if (team.length > 0) {
          const datatosend = team.map((pokemon) => {
            if (pokemon.image) {
              return {
                name: pokemon.name,
                image: pokemon.image,
                types: pokemon.types,
              };
            } else if (pokemon.sprite) {
              return {
                name: pokemon.name,
                image: pokemon.sprite,
                types: pokemon.types,
              };
            }
          })
      
          setDoc(doc(db, "team", "principal"), { datatosend });
        } else{
            setTimeout(() => {
                setDoc(doc(db, "team", "principal"), { });
            }, 1000)
            
        }
      }, [team]);
      

    //Get team
    useEffect(() => {
        getDoc(doc(db, "team", "principal")).then((docSnapshot) => {
          if (docSnapshot.exists()) {
            // Extract the data from the document
            const teamData = docSnapshot.data();
            console.log("TEAMDATA",teamData)
            // Assuming 'datatosend' is the field containing the array of pokemons
            if (teamData.datatosend && Array.isArray(teamData.datatosend)) {
              setTeam(teamData.datatosend);
              console.log("SetTeam success")
            } else {
              console.log("Team data is not in the expected format");
              setTeam([]);
            }
          } else {
            console.log("Document doesn't exist or error occurred");
            setTeam([]); // Set the team to an empty array if the document doesn't exist
          }
        });
    }, []);

    const addPokemon = (pokemon) => {

        if(team.length < 6 && !team.includes(pokemon)){
            setTeam((prevPokemon) => [...prevPokemon, pokemon])
            setCounter((prevcontador = 1) => prevcontador + 1)
        }

        console.log(team)
    };


    const deletePokemon = (pokemon) => {
        setTeam(team.filter((pokemonInTeam) => pokemonInTeam !== pokemon));
    };

  return ( 
    <>
        <div>
            <h3 style={{position:'relative', padding:'1.5rem'}}>Your Team: </h3>

            {
                <div className='teamgrid'>
                    
                    {team.map((pokemon) =>
                    {
                        return <Pokemon key={pokemon.name} pokemon={pokemon} onAdd={() => addPokemon(pokemon) } onDelete={() => deletePokemon(pokemon)} selected={true}/>
                    })}

                </div>
            }

            <h3 style={{position:'relative', padding:'1.5rem'}}>Choose your Pokémon </h3>

            <div>
                {
                    page != 1 && <Button variant="contained" onClick={() => setPage(page - 1)} >Back</Button> 
                }
                
                <Button variant="contained" onClick={() => setPage(page + 1) }>Next</Button>
            </div>

            <div className="parent">
            
                {pokemones.map((pokemon) =>
                {
                    return <Pokemon key={pokemon.name} pokemon={pokemon} onAdd={() => addPokemon(pokemon)} onDelete={() => deletePokemon(pokemon)} selected={false}/>
                })}
            </div>


    </div>


  </>
  )
}
