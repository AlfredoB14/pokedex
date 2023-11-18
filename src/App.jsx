import { useState } from 'react'
import './App.css'
import pokeLogo from './assets/pokeballgym.png'
import { Pokedex } from './components/Pokedex'
import ButtonAppBar from './components/Navbar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <ButtonAppBar/>

      <div className="card">
        <Pokedex></Pokedex>

      </div>

    </>
  )
}

export default App
