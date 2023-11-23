import { useState } from 'react'
import './App.css'
import pokeLogo from './assets/pokeballgym.png'
import { Pokedex } from './components/Pokedex'
import ButtonAppBar from './components/Navbar'
import ButtonGroup from '@mui/material/ButtonGroup';
import Button from '@mui/material/Button';

function App() {
  const [view, setView] = useState(0)


  return (
    <>

      <ButtonAppBar/>
      
      <div className='btnGroup'>

        <ButtonGroup variant="outlined" aria-label="outlined primary button group">
          <Button onClick={() => { setView(1)}}>
            <img src='/src/assets/grid1.png' height={15} width={15} alt="" />
          </Button>

          <Button onClick={() => { setView(0)}}>
            <img src='/src/assets/grid9.png' height={15} width={15} alt="" />
          </Button>
        </ButtonGroup>
        
      </div>

      <div className="card">
      
        <Pokedex view={view}/>

      </div>


    </>
  )
}

export default App
