import React from 'react'
import axios from 'axios'

export const Pokemon = ({pokemon}) => {

  const [pkmn, setPkmn] = useState([])

  useEffect(() => {
    axios.get(pokemon.url).then((response) => {
        setPkmn(response.data)
    })
  }, [setPkmn])
  
  let imagen = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pkmn.id}.png`

  return (
    <>
        <h3>{pokemon.name}</h3>
        <img src={imagen} className='ImagenPokemon' alt={pkmn.name}/>
    </>
  )
}
