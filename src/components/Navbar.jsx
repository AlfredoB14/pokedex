import React from 'react'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import IconButton from '@mui/material/IconButton'
import { Padding } from '@mui/icons-material'

export default function ButtonAppBar() {
  return (
    <Box sx={{ flexGrow: 0}}>
      <AppBar position="fixed" sx={{backgroundColor:'#353839'} }>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2}}
            href='https://pokeapi.co/'
            
          >
            <img src='/assets/pokeballgym.png' height={30} width={30} ></img>
          </IconButton>
          <Typography variant="h6" component="div" position="fixed" left={70} sx={{ flexGrow: 2 }}>
            Pokedex
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>


  );

}