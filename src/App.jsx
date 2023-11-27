import { useState } from 'react'
import './App.css'
import pokeLogo from './assets/pokeballgym.png'
import { Pokedex } from './components/Pokedex'
import ButtonAppBar from './components/Navbar'
import ButtonGroup from '@mui/material/ButtonGroup';
import Button from '@mui/material/Button';

function App() {



  return (
    <>
      <ButtonAppBar/>
 
      <div>
        <Pokedex/>
      </div>
      
    </>
  )
}

export default App
