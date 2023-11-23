import React, { useEffect, useState } from 'react'
import Paper from '@mui/material/Paper'
import IconButton from '@mui/material/IconButton'
import Button from '@mui/material/Button'
import Tooltip from '@mui/material/Tooltip'

export const Pokemon = ({pokemon, onAdd, onDelete, selected}) => {

  const[shiny, setShiny] = useState(0)
  const[selected2, setSelected2] = useState(false)

  return (
    
    <Paper elevation={0}>
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
    </Paper>
  )
}
