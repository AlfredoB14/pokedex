import React, { useEffect, useState } from 'react'
import Paper from '@mui/material/Paper'
import IconButton from '@mui/material/IconButton'
import Button from '@mui/material/Button'
import Tooltip from '@mui/material/Tooltip'

export const Pokemon = ({pokemon, onAdd, onDelete, selected}) => {

  const[shiny, setShiny] = useState(0)
  const[selected2, setSelected2] = useState(false)



  return (
    <>
    {
        selected === false ?
        <div class="card">
          <div class="card-inner">
            <div class="card-front">
            <h3 className='pokename'>{pokemon.name}</h3>
              {
                pokemon.id < 10 ?
                  <h3 className='pokeid'>#00{pokemon.id}</h3>
                :
                  <h3 className='pokeid'>#{pokemon.id}</h3>
              }
              <img className='pokeimg' src={pokemon.image} />
              <div class='pokemon-tipos'>
              
                {
                  pokemon.types[1] ?
                  <><p class={pokemon.types[0].type.name}>{pokemon.types[0].type.name}</p> <p class={pokemon.types[1].type.name}>{pokemon.types[1].type.name}</p></>
                  :
                  <p class={pokemon.types[0].type.name}>{pokemon.types[0].type.name}</p>
                }
              </div>
            </div>
            
            <div class="card-back">
              <p>Weight: {pokemon.weight}KG</p>
              <p>Height: {pokemon.height}M</p>
 
              
              <Button variant="contained" onClick={onAdd}>Select</Button>
            </div>
          </div>
        </div>

        :

        <div class="cardSelected">
          <div class="card-inner">
            <div class="card-front">
            <h3 className='pokenameSelected'>{pokemon.name}</h3>
              <img width={70} height={70} src={pokemon.image} />
              <div class='pokemon-tiposSelected'>
              
              {
                pokemon.types[1] ?
                <><p class={pokemon.types[0].type.name}>{pokemon.types[0].type.name}</p> <p class={pokemon.types[1].type.name}>{pokemon.types[1].type.name}</p></>
                :
                <p class={pokemon.types[0].type.name}>{pokemon.types[0].type.name}</p>
              }
            </div>
            </div>
            <IconButton className='RMVBTN' onClick={onDelete}><img  src='/assets/eliminar.png' height={20} width={20}/></IconButton>
          </div>
        </div>

      }






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
