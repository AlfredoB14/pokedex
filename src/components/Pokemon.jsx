import React from 'react'
import Paper from '@mui/material/Paper'
import IconButton from '@mui/material/IconButton';

export const Pokemon = ({pokemon}) => {
  return (
    <Paper elevation={0}>
      <div>
        <div>
          
          <h3>{pokemon.name}</h3>
          <IconButton ><img src='/src/assets/shiny.png' height={30} width={30}/></IconButton>
        </div>
          <img src={pokemon.image} alt=''/>
      </div>
    </Paper>
  )
}
