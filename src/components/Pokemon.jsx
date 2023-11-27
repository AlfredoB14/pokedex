import React, { useEffect, useState } from 'react'
import Paper from '@mui/material/Paper'
import IconButton from '@mui/material/IconButton'
import Button from '@mui/material/Button'
import Tooltip from '@mui/material/Tooltip'

export const Pokemon = ({pokemon, onAdd, onDelete, selected}) => {

  const[shiny, setShiny] = useState(0)
  const[selected2, setSelected2] = useState(false)

  let tipos = pokemon.types.map((type) => `<p class='${type.type.name} tipo'>${type.type.name}</p>`)

  return (
    <>

        <div class="card">
          <div class="card-inner">
            <div class="card-front">
              <h3 className='pokename'>{pokemon.name}</h3>
              <img className='pokeimg' src={pokemon.image} />
            </div>
            
            <div class="card-back">
              <p>Weight: {pokemon.weight}KG</p>
              <p>Height: {pokemon.height}M</p>
              <div class='pokemon-tipos'>
              <p class='${pokemon.types[0].type.name} tipo'>{pokemon.types[0].type.name}</p>

                {/* {
                  pokemon.types === 1 ?
                  `<p class='${pokemon.types[0].type.name} tipo'>${pokemon.types[0].type.name}</p>`
                  :
                  <p> <p class='${pokemon.types[0].type.name} tipo'>${pokemon.types[0].type.name}</p></p>
                } */}
              </div>
              
              <Button variant="contained" onClick={onAdd}>Select</Button>
            </div>
          </div>
        </div>






    {/* <Paper elevation={0}>
      <div>
        <div>
          
          <h3>{pokemon.name}</h3>
          <IconButton onClick={() => { 
            shiny === 0 ? setShiny(1) : setShiny(0)
            }}>
            <img src='/src/assets/shiny.png' height={30} width={30}/></IconButton>
        </div>

        <Tooltip title={selected != true ? `Add ${pokemon.name} to the team` : `delete ${pokemon.name} to the team` } disableInteractive>
            {
             selected != true ? 
              <button onClick={onAdd} > { shiny != 0 ? <img src={pokemon.imageShiny} alt=''/> 
              : 
              <img src={pokemon.image} alt=''/> } </button> 

              : <button onClick={onDelete} > S { shiny != 0 ? <img src={pokemon.imageShiny} alt=''/> 
              
              : <img src={pokemon.image} alt=''/> } </button>
            }

        </Tooltip>
      </div>
    </Paper> */}
    </>
  )
}
