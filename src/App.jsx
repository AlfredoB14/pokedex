import { useState } from 'react'
import './App.css'
import pokeLogo from './assets/pokeballgym.png'
import { Pokedex } from './components/pokedex'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://pokeapi.co/" target="_blank">
          <img src={pokeLogo} className="logo" alt="PokeLogo" />
        </a>
      </div>
      <h1>Pokedex</h1>
      <div className="card">
        <Pokedex></Pokedex>

      </div>

    </>
  )
}

export default App
