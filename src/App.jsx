import React, { useEffect, useState } from 'react'
import './App.css'
import pokeLogo from '/assets/pokeballgym.png'
import { Pokedex } from './components/Pokedex'
import ButtonAppBar from './components/Navbar'
import { Login } from './components/Login'
function App() {

  const[logValue, setLogValue] = useState(false)

  const doLogin = () => {
    setLogValue(true)
  };

  return (
    <>
        {        
        logValue === false ?
        <Login onLog={() => doLogin()}></Login>
        :
        <>
          <ButtonAppBar></ButtonAppBar>
          <div>
            <Pokedex/>
          </div> 
        </>  
        }
    </>
  )
}

export default App
