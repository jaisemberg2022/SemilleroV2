import { Box,AppBar, Toolbar,IconButton, Typography } from '@mui/material'
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";

import React from 'react'

export const AppBarActividad = () => {
  return (
    <Box width='100%'>
        <AppBar position='fixed'>
            <Toolbar>
                <IconButton color='inherit'>
                    <ChevronLeftIcon/>
                </IconButton>
                <Typography component='div' variant='subtitle1' sx={{flexGrow:1}}>Acta de entrega Apto. 1705</Typography>
            </Toolbar>
        </AppBar>
    </Box>
  )
}
